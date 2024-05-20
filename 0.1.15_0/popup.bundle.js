(() => {
  var e = {
      453: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => d });
        var r = n(601),
          o = n.n(r),
          i = n(314),
          a = n.n(i),
          u = n(417),
          s = n.n(u),
          c = new URL(n(702), n.b),
          l = a()(o());
        l.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);",
        ]);
        var f = s()(c);
        l.push([
          e.id,
          `body{width:365px;height:339px;font-family:"Inter","Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;background-image:url(${f});background-repeat:no-repeat;border:.5px solid rgba(0,0,0,.2);box-shadow:0 0 4px rgba(0,0,0,.25);margin:0;position:relative}.popup{padding:24px 31px 31px 31px}.popup>.header{display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.popup>.header img{height:18px}.popup>.header img.meet{height:22px}.popup>.header .name{color:#7cea57;font-size:18px;padding:0}.popup>.header span{padding:1px 12px 0 12px;font-style:normal;font-weight:500;font-size:15px;line-height:18px;color:#5f6368}.popup>.title{margin:26px 0 20px 0;font-style:normal;font-weight:700;font-size:18px;line-height:25px;color:#292b2f}.popup>ul{margin:0;padding:0 0 28px 10px}.popup>ul>li{list-style-type:none;font-style:normal;font-weight:400;font-size:16px;line-height:34px;color:#000}.popup>ul>li svg{color:#7cea57;font-size:16px;margin-right:14px}.popup .action{text-decoration:none;padding:10px 20px;background:linear-gradient(180deg, #8255e9 0%, #5c61ee 108.53%);border-radius:4px;font-weight:600;font-size:15px;line-height:22px;text-align:center;color:#fff;margin-top:28px}`,
          "",
        ]);
        const d = l;
      },
      314: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var s = this[u][0];
                  null != s && (a[s] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var l = [].concat(e[c]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      417: (e) => {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      601: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      744: function (e, t, n) {
        e.exports = (function () {
          "use strict";
          var e = function (t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(t, n);
            },
            t = function () {
              return (t =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  return e;
                }).apply(this, arguments);
            };
          function r(e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, o = 0, i = t.length; o < i; o++)
                (!r && o in t) ||
                  ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t));
          }
          var o =
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : n.g,
            i = Object.keys,
            a = Array.isArray;
          function u(e, t) {
            return (
              "object" != typeof t ||
                i(t).forEach(function (n) {
                  e[n] = t[n];
                }),
              e
            );
          }
          "undefined" == typeof Promise || o.Promise || (o.Promise = Promise);
          var s = Object.getPrototypeOf,
            c = {}.hasOwnProperty;
          function l(e, t) {
            return c.call(e, t);
          }
          function f(e, t) {
            "function" == typeof t && (t = t(s(e))),
              ("undefined" == typeof Reflect ? i : Reflect.ownKeys)(t).forEach(
                function (n) {
                  h(e, n, t[n]);
                }
              );
          }
          var d = Object.defineProperty;
          function h(e, t, n, r) {
            d(
              e,
              t,
              u(
                n && l(n, "get") && "function" == typeof n.get
                  ? { get: n.get, set: n.set, configurable: !0 }
                  : { value: n, configurable: !0, writable: !0 },
                r
              )
            );
          }
          function p(e) {
            return {
              from: function (t) {
                return (
                  (e.prototype = Object.create(t.prototype)),
                  h(e.prototype, "constructor", e),
                  { extend: f.bind(null, e.prototype) }
                );
              },
            };
          }
          var y = Object.getOwnPropertyDescriptor,
            v = [].slice;
          function m(e, t, n) {
            return v.call(e, t, n);
          }
          function g(e, t) {
            return t(e);
          }
          function b(e) {
            if (!e) throw new Error("Assertion Failed");
          }
          function w(e) {
            o.setImmediate ? setImmediate(e) : setTimeout(e, 0);
          }
          function _(e, t) {
            if ("string" == typeof t && l(e, t)) return e[t];
            if (!t) return e;
            if ("string" != typeof t) {
              for (var n = [], r = 0, o = t.length; r < o; ++r) {
                var i = _(e, t[r]);
                n.push(i);
              }
              return n;
            }
            var a = t.indexOf(".");
            if (-1 !== a) {
              var u = e[t.substr(0, a)];
              return null == u ? void 0 : _(u, t.substr(a + 1));
            }
          }
          function x(e, t, n) {
            if (
              e &&
              void 0 !== t &&
              (!("isFrozen" in Object) || !Object.isFrozen(e))
            )
              if ("string" != typeof t && "length" in t) {
                b("string" != typeof n && "length" in n);
                for (var r = 0, o = t.length; r < o; ++r) x(e, t[r], n[r]);
              } else {
                var i,
                  u,
                  s = t.indexOf(".");
                -1 !== s
                  ? ((i = t.substr(0, s)),
                    "" === (u = t.substr(s + 1))
                      ? void 0 === n
                        ? a(e) && !isNaN(parseInt(i))
                          ? e.splice(i, 1)
                          : delete e[i]
                        : (e[i] = n)
                      : x((s = (s = e[i]) && l(e, i) ? s : (e[i] = {})), u, n))
                  : void 0 === n
                  ? a(e) && !isNaN(parseInt(t))
                    ? e.splice(t, 1)
                    : delete e[t]
                  : (e[t] = n);
              }
          }
          function k(e) {
            var t,
              n = {};
            for (t in e) l(e, t) && (n[t] = e[t]);
            return n;
          }
          var S = [].concat;
          function O(e) {
            return S.apply([], e);
          }
          var P =
              "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
                .split(",")
                .concat(
                  O(
                    [8, 16, 32, 64].map(function (e) {
                      return ["Int", "Uint", "Float"].map(function (t) {
                        return t + e + "Array";
                      });
                    })
                  )
                )
                .filter(function (e) {
                  return o[e];
                }),
            I = new Set(
              P.map(function (e) {
                return o[e];
              })
            ),
            j = null;
          function A(e) {
            return (
              (j = new WeakMap()),
              (e = (function e(t) {
                if (!t || "object" != typeof t) return t;
                var n = j.get(t);
                if (n) return n;
                if (a(t)) {
                  (n = []), j.set(t, n);
                  for (var r = 0, o = t.length; r < o; ++r) n.push(e(t[r]));
                } else if (I.has(t.constructor)) n = t;
                else {
                  var i,
                    u = s(t);
                  for (i in ((n =
                    u === Object.prototype ? {} : Object.create(u)),
                  j.set(t, n),
                  t))
                    l(t, i) && (n[i] = e(t[i]));
                }
                return n;
              })(e)),
              (j = null),
              e
            );
          }
          var E = {}.toString;
          function C(e) {
            return E.call(e).slice(8, -1);
          }
          var T = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator",
            K =
              "symbol" == typeof T
                ? function (e) {
                    var t;
                    return null != e && (t = e[T]) && t.apply(e);
                  }
                : function () {
                    return null;
                  };
          function D(e, t) {
            return 0 <= (t = e.indexOf(t)) && e.splice(t, 1), 0 <= t;
          }
          var M = {};
          function B(e) {
            var t, n, r, o;
            if (1 === arguments.length) {
              if (a(e)) return e.slice();
              if (this === M && "string" == typeof e) return [e];
              if ((o = K(e))) {
                for (n = []; !(r = o.next()).done; ) n.push(r.value);
                return n;
              }
              if (null == e) return [e];
              if ("number" != typeof (t = e.length)) return [e];
              for (n = new Array(t); t--; ) n[t] = e[t];
              return n;
            }
            for (t = arguments.length, n = new Array(t); t--; )
              n[t] = arguments[t];
            return n;
          }
          var N =
              "undefined" != typeof Symbol
                ? function (e) {
                    return "AsyncFunction" === e[Symbol.toStringTag];
                  }
                : function () {
                    return !1;
                  },
            R = [
              "Modify",
              "Bulk",
              "OpenFailed",
              "VersionChange",
              "Schema",
              "Upgrade",
              "InvalidTable",
              "MissingAPI",
              "NoSuchDatabase",
              "InvalidArgument",
              "SubTransaction",
              "Unsupported",
              "Internal",
              "DatabaseClosed",
              "PrematureCommit",
              "ForeignAwait",
            ].concat(
              (se = [
                "Unknown",
                "Constraint",
                "Data",
                "TransactionInactive",
                "ReadOnly",
                "Version",
                "NotFound",
                "InvalidState",
                "InvalidAccess",
                "Abort",
                "Timeout",
                "QuotaExceeded",
                "Syntax",
                "DataClone",
              ])
            ),
            q = {
              VersionChanged:
                "Database version changed by other database connection",
              DatabaseClosed: "Database has been closed",
              Abort: "Transaction aborted",
              TransactionInactive:
                "Transaction has already completed or failed",
              MissingAPI:
                "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb",
            };
          function F(e, t) {
            (this.name = e), (this.message = t);
          }
          function U(e, t) {
            return (
              e +
              ". Errors: " +
              Object.keys(t)
                .map(function (e) {
                  return t[e].toString();
                })
                .filter(function (e, t, n) {
                  return n.indexOf(e) === t;
                })
                .join("\n")
            );
          }
          function V(e, t, n, r) {
            (this.failures = t),
              (this.failedKeys = r),
              (this.successCount = n),
              (this.message = U(e, t));
          }
          function z(e, t) {
            (this.name = "BulkError"),
              (this.failures = Object.keys(t).map(function (e) {
                return t[e];
              })),
              (this.failuresByPos = t),
              (this.message = U(e, this.failures));
          }
          p(F)
            .from(Error)
            .extend({
              toString: function () {
                return this.name + ": " + this.message;
              },
            }),
            p(V).from(F),
            p(z).from(F);
          var Z = R.reduce(function (e, t) {
              return (e[t] = t + "Error"), e;
            }, {}),
            L = F,
            G = R.reduce(function (e, t) {
              var n = t + "Error";
              function r(e, r) {
                (this.name = n),
                  e
                    ? "string" == typeof e
                      ? ((this.message = ""
                          .concat(e)
                          .concat(r ? "\n " + r : "")),
                        (this.inner = r || null))
                      : "object" == typeof e &&
                        ((this.message = ""
                          .concat(e.name, " ")
                          .concat(e.message)),
                        (this.inner = e))
                    : ((this.message = q[t] || n), (this.inner = null));
              }
              return p(r).from(L), (e[t] = r), e;
            }, {});
          (G.Syntax = SyntaxError),
            (G.Type = TypeError),
            (G.Range = RangeError);
          var W = se.reduce(function (e, t) {
              return (e[t + "Error"] = G[t]), e;
            }, {}),
            $ = R.reduce(function (e, t) {
              return (
                -1 === ["Syntax", "Type", "Range"].indexOf(t) &&
                  (e[t + "Error"] = G[t]),
                e
              );
            }, {});
          function X() {}
          function Y(e) {
            return e;
          }
          function J(e, t) {
            return null == e || e === Y
              ? t
              : function (n) {
                  return t(e(n));
                };
          }
          function H(e, t) {
            return function () {
              e.apply(this, arguments), t.apply(this, arguments);
            };
          }
          function Q(e, t) {
            return e === X
              ? t
              : function () {
                  var n = e.apply(this, arguments);
                  void 0 !== n && (arguments[0] = n);
                  var r = this.onsuccess,
                    o = this.onerror;
                  (this.onsuccess = null), (this.onerror = null);
                  var i = t.apply(this, arguments);
                  return (
                    r &&
                      (this.onsuccess = this.onsuccess
                        ? H(r, this.onsuccess)
                        : r),
                    o && (this.onerror = this.onerror ? H(o, this.onerror) : o),
                    void 0 !== i ? i : n
                  );
                };
          }
          function ee(e, t) {
            return e === X
              ? t
              : function () {
                  e.apply(this, arguments);
                  var n = this.onsuccess,
                    r = this.onerror;
                  (this.onsuccess = this.onerror = null),
                    t.apply(this, arguments),
                    n &&
                      (this.onsuccess = this.onsuccess
                        ? H(n, this.onsuccess)
                        : n),
                    r && (this.onerror = this.onerror ? H(r, this.onerror) : r);
                };
          }
          function te(e, t) {
            return e === X
              ? t
              : function (n) {
                  var r = e.apply(this, arguments);
                  u(n, r);
                  var o = this.onsuccess,
                    i = this.onerror;
                  return (
                    (this.onsuccess = null),
                    (this.onerror = null),
                    (n = t.apply(this, arguments)),
                    o &&
                      (this.onsuccess = this.onsuccess
                        ? H(o, this.onsuccess)
                        : o),
                    i && (this.onerror = this.onerror ? H(i, this.onerror) : i),
                    void 0 === r ? (void 0 === n ? void 0 : n) : u(r, n)
                  );
                };
          }
          function ne(e, t) {
            return e === X
              ? t
              : function () {
                  return (
                    !1 !== t.apply(this, arguments) && e.apply(this, arguments)
                  );
                };
          }
          function re(e, t) {
            return e === X
              ? t
              : function () {
                  var n = e.apply(this, arguments);
                  if (n && "function" == typeof n.then) {
                    for (
                      var r = this, o = arguments.length, i = new Array(o);
                      o--;

                    )
                      i[o] = arguments[o];
                    return n.then(function () {
                      return t.apply(r, i);
                    });
                  }
                  return t.apply(this, arguments);
                };
          }
          ($.ModifyError = V), ($.DexieError = F), ($.BulkError = z);
          var oe =
            "undefined" != typeof location &&
            /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
          function ie(e) {
            oe = e;
          }
          var ae = {},
            ue = 100,
            se =
              ((P =
                "undefined" == typeof Promise
                  ? []
                  : (function () {
                      var e = Promise.resolve();
                      if ("undefined" == typeof crypto || !crypto.subtle)
                        return [e, s(e), e];
                      var t = crypto.subtle.digest(
                        "SHA-512",
                        new Uint8Array([0])
                      );
                      return [t, s(t), e];
                    })()),
              P[0]),
            ce =
              ((R = P[1]), (P = P[2]), (R = R && R.then), se && se.constructor),
            le = !!P,
            fe = function (e, t) {
              be.push([e, t]), he && (queueMicrotask(Ae), (he = !1));
            },
            de = !0,
            he = !0,
            pe = [],
            ye = [],
            ve = Y,
            me = {
              id: "global",
              global: !0,
              ref: 0,
              unhandleds: [],
              onunhandled: X,
              pgp: !1,
              env: {},
              finalize: X,
            },
            ge = me,
            be = [],
            we = 0,
            _e = [];
          function xe(e) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            (this._listeners = []), (this._lib = !1);
            var t = (this._PSD = ge);
            if ("function" != typeof e) {
              if (e !== ae) throw new TypeError("Not a function");
              return (
                (this._state = arguments[1]),
                (this._value = arguments[2]),
                void (!1 === this._state && Oe(this, this._value))
              );
            }
            (this._state = null),
              (this._value = null),
              ++t.ref,
              (function e(t, n) {
                try {
                  n(function (n) {
                    if (null === t._state) {
                      if (n === t)
                        throw new TypeError(
                          "A promise cannot be resolved with itself."
                        );
                      var r = t._lib && Ee();
                      n && "function" == typeof n.then
                        ? e(t, function (e, t) {
                            n instanceof xe ? n._then(e, t) : n.then(e, t);
                          })
                        : ((t._state = !0), (t._value = n), Pe(t)),
                        r && Ce();
                    }
                  }, Oe.bind(null, t));
                } catch (n) {
                  Oe(t, n);
                }
              })(this, e);
          }
          var ke = {
            get: function () {
              var e = ge,
                t = qe;
              function n(n, r) {
                var o = this,
                  i = !e.global && (e !== ge || t !== qe),
                  a = i && !ze(),
                  u = new xe(function (t, u) {
                    Ie(o, new Se(Xe(n, e, i, a), Xe(r, e, i, a), t, u, e));
                  });
                return (
                  this._consoleTask && (u._consoleTask = this._consoleTask), u
                );
              }
              return (n.prototype = ae), n;
            },
            set: function (e) {
              h(
                this,
                "then",
                e && e.prototype === ae
                  ? ke
                  : {
                      get: function () {
                        return e;
                      },
                      set: ke.set,
                    }
              );
            },
          };
          function Se(e, t, n, r, o) {
            (this.onFulfilled = "function" == typeof e ? e : null),
              (this.onRejected = "function" == typeof t ? t : null),
              (this.resolve = n),
              (this.reject = r),
              (this.psd = o);
          }
          function Oe(e, t) {
            var n, r;
            ye.push(t),
              null === e._state &&
                ((n = e._lib && Ee()),
                (t = ve(t)),
                (e._state = !1),
                (e._value = t),
                (r = e),
                pe.some(function (e) {
                  return e._value === r._value;
                }) || pe.push(r),
                Pe(e),
                n && Ce());
          }
          function Pe(e) {
            var t = e._listeners;
            e._listeners = [];
            for (var n = 0, r = t.length; n < r; ++n) Ie(e, t[n]);
            var o = e._PSD;
            --o.ref || o.finalize(),
              0 === we &&
                (++we,
                fe(function () {
                  0 == --we && Te();
                }, []));
          }
          function Ie(e, t) {
            if (null !== e._state) {
              var n = e._state ? t.onFulfilled : t.onRejected;
              if (null === n)
                return (e._state ? t.resolve : t.reject)(e._value);
              ++t.psd.ref, ++we, fe(je, [n, e, t]);
            } else e._listeners.push(t);
          }
          function je(e, t, n) {
            try {
              var r,
                o = t._value;
              !t._state && ye.length && (ye = []),
                (r =
                  oe && t._consoleTask
                    ? t._consoleTask.run(function () {
                        return e(o);
                      })
                    : e(o)),
                t._state ||
                  -1 !== ye.indexOf(o) ||
                  (function (e) {
                    for (var t = pe.length; t; )
                      if (pe[--t]._value === e._value) return pe.splice(t, 1);
                  })(t),
                n.resolve(r);
            } catch (e) {
              n.reject(e);
            } finally {
              0 == --we && Te(), --n.psd.ref || n.psd.finalize();
            }
          }
          function Ae() {
            $e(me, function () {
              Ee() && Ce();
            });
          }
          function Ee() {
            var e = de;
            return (he = de = !1), e;
          }
          function Ce() {
            var e, t, n;
            do {
              for (; 0 < be.length; )
                for (e = be, be = [], n = e.length, t = 0; t < n; ++t) {
                  var r = e[t];
                  r[0].apply(null, r[1]);
                }
            } while (0 < be.length);
            he = de = !0;
          }
          function Te() {
            var e = pe;
            (pe = []),
              e.forEach(function (e) {
                e._PSD.onunhandled.call(null, e._value, e);
              });
            for (var t = _e.slice(0), n = t.length; n; ) t[--n]();
          }
          function Ke(e) {
            return new xe(ae, !1, e);
          }
          function De(e, t) {
            var n = ge;
            return function () {
              var r = Ee(),
                o = ge;
              try {
                return Ge(n, !0), e.apply(this, arguments);
              } catch (r) {
                t && t(r);
              } finally {
                Ge(o, !1), r && Ce();
              }
            };
          }
          f(xe.prototype, {
            then: ke,
            _then: function (e, t) {
              Ie(this, new Se(null, null, e, t, ge));
            },
            catch: function (e) {
              if (1 === arguments.length) return this.then(null, e);
              var t = e,
                n = arguments[1];
              return "function" == typeof t
                ? this.then(null, function (e) {
                    return (e instanceof t ? n : Ke)(e);
                  })
                : this.then(null, function (e) {
                    return (e && e.name === t ? n : Ke)(e);
                  });
            },
            finally: function (e) {
              return this.then(
                function (t) {
                  return xe.resolve(e()).then(function () {
                    return t;
                  });
                },
                function (t) {
                  return xe.resolve(e()).then(function () {
                    return Ke(t);
                  });
                }
              );
            },
            timeout: function (e, t) {
              var n = this;
              return e < 1 / 0
                ? new xe(function (r, o) {
                    var i = setTimeout(function () {
                      return o(new G.Timeout(t));
                    }, e);
                    n.then(r, o).finally(clearTimeout.bind(null, i));
                  })
                : this;
            },
          }),
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              h(xe.prototype, Symbol.toStringTag, "Dexie.Promise"),
            (me.env = We()),
            f(xe, {
              all: function () {
                var e = B.apply(null, arguments).map(Ze);
                return new xe(function (t, n) {
                  0 === e.length && t([]);
                  var r = e.length;
                  e.forEach(function (o, i) {
                    return xe.resolve(o).then(function (n) {
                      (e[i] = n), --r || t(e);
                    }, n);
                  });
                });
              },
              resolve: function (e) {
                return e instanceof xe
                  ? e
                  : e && "function" == typeof e.then
                  ? new xe(function (t, n) {
                      e.then(t, n);
                    })
                  : new xe(ae, !0, e);
              },
              reject: Ke,
              race: function () {
                var e = B.apply(null, arguments).map(Ze);
                return new xe(function (t, n) {
                  e.map(function (e) {
                    return xe.resolve(e).then(t, n);
                  });
                });
              },
              PSD: {
                get: function () {
                  return ge;
                },
                set: function (e) {
                  return (ge = e);
                },
              },
              totalEchoes: {
                get: function () {
                  return qe;
                },
              },
              newPSD: Ue,
              usePSD: $e,
              scheduler: {
                get: function () {
                  return fe;
                },
                set: function (e) {
                  fe = e;
                },
              },
              rejectionMapper: {
                get: function () {
                  return ve;
                },
                set: function (e) {
                  ve = e;
                },
              },
              follow: function (e, t) {
                return new xe(function (n, r) {
                  return Ue(
                    function (t, n) {
                      var r = ge;
                      (r.unhandleds = []),
                        (r.onunhandled = n),
                        (r.finalize = H(function () {
                          var e,
                            r = this;
                          (e = function () {
                            0 === r.unhandleds.length
                              ? t()
                              : n(r.unhandleds[0]);
                          }),
                            _e.push(function t() {
                              e(), _e.splice(_e.indexOf(t), 1);
                            }),
                            ++we,
                            fe(function () {
                              0 == --we && Te();
                            }, []);
                        }, r.finalize)),
                        e();
                    },
                    t,
                    n,
                    r
                  );
                });
              },
            }),
            ce &&
              (ce.allSettled &&
                h(xe, "allSettled", function () {
                  var e = B.apply(null, arguments).map(Ze);
                  return new xe(function (t) {
                    0 === e.length && t([]);
                    var n = e.length,
                      r = new Array(n);
                    e.forEach(function (e, o) {
                      return xe
                        .resolve(e)
                        .then(
                          function (e) {
                            return (r[o] = { status: "fulfilled", value: e });
                          },
                          function (e) {
                            return (r[o] = { status: "rejected", reason: e });
                          }
                        )
                        .then(function () {
                          return --n || t(r);
                        });
                    });
                  });
                }),
              ce.any &&
                "undefined" != typeof AggregateError &&
                h(xe, "any", function () {
                  var e = B.apply(null, arguments).map(Ze);
                  return new xe(function (t, n) {
                    0 === e.length && n(new AggregateError([]));
                    var r = e.length,
                      o = new Array(r);
                    e.forEach(function (e, i) {
                      return xe.resolve(e).then(
                        function (e) {
                          return t(e);
                        },
                        function (e) {
                          (o[i] = e), --r || n(new AggregateError(o));
                        }
                      );
                    });
                  });
                }));
          var Me = { awaits: 0, echoes: 0, id: 0 },
            Be = 0,
            Ne = [],
            Re = 0,
            qe = 0,
            Fe = 0;
          function Ue(e, t, n, r) {
            var o = ge,
              i = Object.create(o);
            return (
              (i.parent = o),
              (i.ref = 0),
              (i.global = !1),
              (i.id = ++Fe),
              me.env,
              (i.env = le
                ? {
                    Promise: xe,
                    PromiseProp: { value: xe, configurable: !0, writable: !0 },
                    all: xe.all,
                    race: xe.race,
                    allSettled: xe.allSettled,
                    any: xe.any,
                    resolve: xe.resolve,
                    reject: xe.reject,
                  }
                : {}),
              t && u(i, t),
              ++o.ref,
              (i.finalize = function () {
                --this.parent.ref || this.parent.finalize();
              }),
              (r = $e(i, e, n, r)),
              0 === i.ref && i.finalize(),
              r
            );
          }
          function Ve() {
            return (
              Me.id || (Me.id = ++Be), ++Me.awaits, (Me.echoes += ue), Me.id
            );
          }
          function ze() {
            return (
              !!Me.awaits &&
              (0 == --Me.awaits && (Me.id = 0),
              (Me.echoes = Me.awaits * ue),
              !0)
            );
          }
          function Ze(e) {
            return Me.echoes && e && e.constructor === ce
              ? (Ve(),
                e.then(
                  function (e) {
                    return ze(), e;
                  },
                  function (e) {
                    return ze(), Je(e);
                  }
                ))
              : e;
          }
          function Le() {
            var e = Ne[Ne.length - 1];
            Ne.pop(), Ge(e, !1);
          }
          function Ge(e, t) {
            var n,
              r = ge;
            (t
              ? !Me.echoes || (Re++ && e === ge)
              : !Re || (--Re && e === ge)) ||
              queueMicrotask(
                t
                  ? function (e) {
                      ++qe,
                        (Me.echoes && 0 != --Me.echoes) ||
                          (Me.echoes = Me.awaits = Me.id = 0),
                        Ne.push(ge),
                        Ge(e, !0);
                    }.bind(null, e)
                  : Le
              ),
              e !== ge &&
                ((ge = e),
                r === me && (me.env = We()),
                le &&
                  ((n = me.env.Promise),
                  (t = e.env),
                  (r.global || e.global) &&
                    (Object.defineProperty(o, "Promise", t.PromiseProp),
                    (n.all = t.all),
                    (n.race = t.race),
                    (n.resolve = t.resolve),
                    (n.reject = t.reject),
                    t.allSettled && (n.allSettled = t.allSettled),
                    t.any && (n.any = t.any))));
          }
          function We() {
            var e = o.Promise;
            return le
              ? {
                  Promise: e,
                  PromiseProp: Object.getOwnPropertyDescriptor(o, "Promise"),
                  all: e.all,
                  race: e.race,
                  allSettled: e.allSettled,
                  any: e.any,
                  resolve: e.resolve,
                  reject: e.reject,
                }
              : {};
          }
          function $e(e, t, n, r, o) {
            var i = ge;
            try {
              return Ge(e, !0), t(n, r, o);
            } finally {
              Ge(i, !1);
            }
          }
          function Xe(e, t, n, r) {
            return "function" != typeof e
              ? e
              : function () {
                  var o = ge;
                  n && Ve(), Ge(t, !0);
                  try {
                    return e.apply(this, arguments);
                  } finally {
                    Ge(o, !1), r && queueMicrotask(ze);
                  }
                };
          }
          function Ye(e) {
            Promise === ce && 0 === Me.echoes
              ? 0 === Re
                ? e()
                : enqueueNativeMicroTask(e)
              : setTimeout(e, 0);
          }
          -1 === ("" + R).indexOf("[native code]") && (Ve = ze = X);
          var Je = xe.reject,
            He = String.fromCharCode(65535),
            Qe =
              "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
            et = "String expected.",
            tt = [],
            nt = "__dbnames",
            rt = "readonly",
            ot = "readwrite";
          function it(e, t) {
            return e
              ? t
                ? function () {
                    return e.apply(this, arguments) && t.apply(this, arguments);
                  }
                : e
              : t;
          }
          var at = {
            type: 3,
            lower: -1 / 0,
            lowerOpen: !1,
            upper: [[]],
            upperOpen: !1,
          };
          function ut(e) {
            return "string" != typeof e || /\./.test(e)
              ? function (e) {
                  return e;
                }
              : function (t) {
                  return void 0 === t[e] && e in t && delete (t = A(t))[e], t;
                };
          }
          function st() {
            throw G.Type();
          }
          function ct(e, t) {
            try {
              var n = lt(e),
                r = lt(t);
              if (n !== r)
                return "Array" === n
                  ? 1
                  : "Array" === r
                  ? -1
                  : "binary" === n
                  ? 1
                  : "binary" === r
                  ? -1
                  : "string" === n
                  ? 1
                  : "string" === r
                  ? -1
                  : "Date" === n
                  ? 1
                  : "Date" !== r
                  ? NaN
                  : -1;
              switch (n) {
                case "number":
                case "Date":
                case "string":
                  return t < e ? 1 : e < t ? -1 : 0;
                case "binary":
                  return (function (e, t) {
                    for (
                      var n = e.length, r = t.length, o = n < r ? n : r, i = 0;
                      i < o;
                      ++i
                    )
                      if (e[i] !== t[i]) return e[i] < t[i] ? -1 : 1;
                    return n === r ? 0 : n < r ? -1 : 1;
                  })(ft(e), ft(t));
                case "Array":
                  return (function (e, t) {
                    for (
                      var n = e.length, r = t.length, o = n < r ? n : r, i = 0;
                      i < o;
                      ++i
                    ) {
                      var a = ct(e[i], t[i]);
                      if (0 !== a) return a;
                    }
                    return n === r ? 0 : n < r ? -1 : 1;
                  })(e, t);
              }
            } catch (e) {}
            return NaN;
          }
          function lt(e) {
            var t = typeof e;
            return "object" != t
              ? t
              : ArrayBuffer.isView(e) || "ArrayBuffer" === (e = C(e))
              ? "binary"
              : e;
          }
          function ft(e) {
            return e instanceof Uint8Array
              ? e
              : ArrayBuffer.isView(e)
              ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
              : new Uint8Array(e);
          }
          var dt =
            ((ht.prototype._trans = function (e, t, n) {
              var r = this._tx || ge.trans,
                o = this.name,
                i =
                  oe &&
                  "undefined" != typeof console &&
                  console.createTask &&
                  console.createTask(
                    "Dexie: "
                      .concat("readonly" === e ? "read" : "write", " ")
                      .concat(this.name)
                  );
              function a(e, n, r) {
                if (!r.schema[o])
                  throw new G.NotFound(
                    "Table " + o + " not part of transaction"
                  );
                return t(r.idbtrans, r);
              }
              var u = Ee();
              try {
                var s =
                  r && r.db._novip === this.db._novip
                    ? r === ge.trans
                      ? r._promise(e, a, n)
                      : Ue(
                          function () {
                            return r._promise(e, a, n);
                          },
                          { trans: r, transless: ge.transless || ge }
                        )
                    : (function e(t, n, r, o) {
                        if (
                          t.idbdb &&
                          (t._state.openComplete || ge.letThrough || t._vip)
                        ) {
                          var i = t._createTransaction(n, r, t._dbSchema);
                          try {
                            i.create(), (t._state.PR1398_maxLoop = 3);
                          } catch (i) {
                            return i.name === Z.InvalidState &&
                              t.isOpen() &&
                              0 < --t._state.PR1398_maxLoop
                              ? (console.warn("Dexie: Need to reopen db"),
                                t.close({ disableAutoOpen: !1 }),
                                t.open().then(function () {
                                  return e(t, n, r, o);
                                }))
                              : Je(i);
                          }
                          return i
                            ._promise(n, function (e, t) {
                              return Ue(function () {
                                return (ge.trans = i), o(e, t, i);
                              });
                            })
                            .then(function (e) {
                              if ("readwrite" === n)
                                try {
                                  i.idbtrans.commit();
                                } catch (e) {}
                              return "readonly" === n
                                ? e
                                : i._completion.then(function () {
                                    return e;
                                  });
                            });
                        }
                        if (t._state.openComplete)
                          return Je(new G.DatabaseClosed(t._state.dbOpenError));
                        if (!t._state.isBeingOpened) {
                          if (!t._state.autoOpen)
                            return Je(new G.DatabaseClosed());
                          t.open().catch(X);
                        }
                        return t._state.dbReadyPromise.then(function () {
                          return e(t, n, r, o);
                        });
                      })(this.db, e, [this.name], a);
                return (
                  i &&
                    ((s._consoleTask = i),
                    (s = s.catch(function (e) {
                      return console.trace(e), Je(e);
                    }))),
                  s
                );
              } finally {
                u && Ce();
              }
            }),
            (ht.prototype.get = function (e, t) {
              var n = this;
              return e && e.constructor === Object
                ? this.where(e).first(t)
                : null == e
                ? Je(new G.Type("Invalid argument to Table.get()"))
                : this._trans("readonly", function (t) {
                    return n.core.get({ trans: t, key: e }).then(function (e) {
                      return n.hook.reading.fire(e);
                    });
                  }).then(t);
            }),
            (ht.prototype.where = function (e) {
              if ("string" == typeof e) return new this.db.WhereClause(this, e);
              if (a(e))
                return new this.db.WhereClause(
                  this,
                  "[".concat(e.join("+"), "]")
                );
              var t = i(e);
              if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
              var n = this.schema.indexes
                .concat(this.schema.primKey)
                .filter(function (e) {
                  if (
                    e.compound &&
                    t.every(function (t) {
                      return 0 <= e.keyPath.indexOf(t);
                    })
                  ) {
                    for (var n = 0; n < t.length; ++n)
                      if (-1 === t.indexOf(e.keyPath[n])) return !1;
                    return !0;
                  }
                  return !1;
                })
                .sort(function (e, t) {
                  return e.keyPath.length - t.keyPath.length;
                })[0];
              if (n && this.db._maxKey !== He) {
                var r = n.keyPath.slice(0, t.length);
                return this.where(r).equals(
                  r.map(function (t) {
                    return e[t];
                  })
                );
              }
              !n &&
                oe &&
                console.warn(
                  "The query "
                    .concat(JSON.stringify(e), " on ")
                    .concat(this.name, " would benefit from a ") +
                    "compound index [".concat(t.join("+"), "]")
                );
              var o = this.schema.idxByName,
                u = this.db._deps.indexedDB;
              function s(e, t) {
                return 0 === u.cmp(e, t);
              }
              var c = t.reduce(
                function (t, n) {
                  var r = t[0],
                    i = t[1],
                    u = ((t = o[n]), e[n]);
                  return [
                    r || t,
                    r || !t
                      ? it(
                          i,
                          t && t.multi
                            ? function (e) {
                                return (
                                  (e = _(e, n)),
                                  a(e) &&
                                    e.some(function (e) {
                                      return s(u, e);
                                    })
                                );
                              }
                            : function (e) {
                                return s(u, _(e, n));
                              }
                        )
                      : i,
                  ];
                },
                [null, null]
              );
              return (
                (r = c[0]),
                (c = c[1]),
                r
                  ? this.where(r.name).equals(e[r.keyPath]).filter(c)
                  : n
                  ? this.filter(c)
                  : this.where(t).equals("")
              );
            }),
            (ht.prototype.filter = function (e) {
              return this.toCollection().and(e);
            }),
            (ht.prototype.count = function (e) {
              return this.toCollection().count(e);
            }),
            (ht.prototype.offset = function (e) {
              return this.toCollection().offset(e);
            }),
            (ht.prototype.limit = function (e) {
              return this.toCollection().limit(e);
            }),
            (ht.prototype.each = function (e) {
              return this.toCollection().each(e);
            }),
            (ht.prototype.toArray = function (e) {
              return this.toCollection().toArray(e);
            }),
            (ht.prototype.toCollection = function () {
              return new this.db.Collection(new this.db.WhereClause(this));
            }),
            (ht.prototype.orderBy = function (e) {
              return new this.db.Collection(
                new this.db.WhereClause(
                  this,
                  a(e) ? "[".concat(e.join("+"), "]") : e
                )
              );
            }),
            (ht.prototype.reverse = function () {
              return this.toCollection().reverse();
            }),
            (ht.prototype.mapToClass = function (t) {
              var n,
                r = this.db,
                o = this.name;
              function i() {
                return (null !== n && n.apply(this, arguments)) || this;
              }
              (this.schema.mappedClass = t).prototype instanceof st &&
                ((function (t, n) {
                  if ("function" != typeof n && null !== n)
                    throw new TypeError(
                      "Class extends value " +
                        String(n) +
                        " is not a constructor or null"
                    );
                  function r() {
                    this.constructor = t;
                  }
                  e(t, n),
                    (t.prototype =
                      null === n
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r()));
                })(i, (n = t)),
                Object.defineProperty(i.prototype, "db", {
                  get: function () {
                    return r;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (i.prototype.table = function () {
                  return o;
                }),
                (t = i));
              for (var a = new Set(), u = t.prototype; u; u = s(u))
                Object.getOwnPropertyNames(u).forEach(function (e) {
                  return a.add(e);
                });
              function c(e) {
                if (!e) return e;
                var n,
                  r = Object.create(t.prototype);
                for (n in e)
                  if (!a.has(n))
                    try {
                      r[n] = e[n];
                    } catch (e) {}
                return r;
              }
              return (
                this.schema.readHook &&
                  this.hook.reading.unsubscribe(this.schema.readHook),
                (this.schema.readHook = c),
                this.hook("reading", c),
                t
              );
            }),
            (ht.prototype.defineClass = function () {
              return this.mapToClass(function (e) {
                u(this, e);
              });
            }),
            (ht.prototype.add = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                o = r.auto,
                i = r.keyPath,
                a = e;
              return (
                i && o && (a = ut(i)(e)),
                this._trans("readwrite", function (e) {
                  return n.core.mutate({
                    trans: e,
                    type: "add",
                    keys: null != t ? [t] : null,
                    values: [a],
                  });
                })
                  .then(function (e) {
                    return e.numFailures
                      ? xe.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (i)
                      try {
                        x(e, i, t);
                      } catch (t) {}
                    return t;
                  })
              );
            }),
            (ht.prototype.update = function (e, t) {
              return "object" != typeof e || a(e)
                ? this.where(":id").equals(e).modify(t)
                : void 0 === (e = _(e, this.schema.primKey.keyPath))
                ? Je(
                    new G.InvalidArgument(
                      "Given object does not contain its primary key"
                    )
                  )
                : this.where(":id").equals(e).modify(t);
            }),
            (ht.prototype.put = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                o = r.auto,
                i = r.keyPath,
                a = e;
              return (
                i && o && (a = ut(i)(e)),
                this._trans("readwrite", function (e) {
                  return n.core.mutate({
                    trans: e,
                    type: "put",
                    values: [a],
                    keys: null != t ? [t] : null,
                  });
                })
                  .then(function (e) {
                    return e.numFailures
                      ? xe.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (i)
                      try {
                        x(e, i, t);
                      } catch (t) {}
                    return t;
                  })
              );
            }),
            (ht.prototype.delete = function (e) {
              var t = this;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: [e] });
              }).then(function (e) {
                return e.numFailures ? xe.reject(e.failures[0]) : void 0;
              });
            }),
            (ht.prototype.clear = function () {
              var e = this;
              return this._trans("readwrite", function (t) {
                return e.core.mutate({
                  trans: t,
                  type: "deleteRange",
                  range: at,
                });
              }).then(function (e) {
                return e.numFailures ? xe.reject(e.failures[0]) : void 0;
              });
            }),
            (ht.prototype.bulkGet = function (e) {
              var t = this;
              return this._trans("readonly", function (n) {
                return t.core.getMany({ keys: e, trans: n }).then(function (e) {
                  return e.map(function (e) {
                    return t.hook.reading.fire(e);
                  });
                });
              });
            }),
            (ht.prototype.bulkAdd = function (e, t, n) {
              var r = this,
                o = Array.isArray(t) ? t : void 0,
                i = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = (u = r.schema.primKey).auto;
                if ((u = u.keyPath) && o)
                  throw new G.InvalidArgument(
                    "bulkAdd(): keys argument invalid on tables with inbound keys"
                  );
                if (o && o.length !== e.length)
                  throw new G.InvalidArgument(
                    "Arguments objects and keys must have the same length"
                  );
                var a = e.length,
                  u = u && n ? e.map(ut(u)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "add",
                    keys: o,
                    values: u,
                    wantResults: i,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      o = e.lastResult;
                    if (((e = e.failures), 0 === t)) return i ? n : o;
                    throw new z(
                      ""
                        .concat(r.name, ".bulkAdd(): ")
                        .concat(t, " of ")
                        .concat(a, " operations failed"),
                      e
                    );
                  });
              });
            }),
            (ht.prototype.bulkPut = function (e, t, n) {
              var r = this,
                o = Array.isArray(t) ? t : void 0,
                i = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = (u = r.schema.primKey).auto;
                if ((u = u.keyPath) && o)
                  throw new G.InvalidArgument(
                    "bulkPut(): keys argument invalid on tables with inbound keys"
                  );
                if (o && o.length !== e.length)
                  throw new G.InvalidArgument(
                    "Arguments objects and keys must have the same length"
                  );
                var a = e.length,
                  u = u && n ? e.map(ut(u)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "put",
                    keys: o,
                    values: u,
                    wantResults: i,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      o = e.lastResult;
                    if (((e = e.failures), 0 === t)) return i ? n : o;
                    throw new z(
                      ""
                        .concat(r.name, ".bulkPut(): ")
                        .concat(t, " of ")
                        .concat(a, " operations failed"),
                      e
                    );
                  });
              });
            }),
            (ht.prototype.bulkUpdate = function (e) {
              var t = this,
                n = this.core,
                r = e.map(function (e) {
                  return e.key;
                }),
                o = e.map(function (e) {
                  return e.changes;
                }),
                i = [];
              return this._trans("readwrite", function (a) {
                return n
                  .getMany({ trans: a, keys: r, cache: "clone" })
                  .then(function (u) {
                    var s = [],
                      c = [];
                    e.forEach(function (e, n) {
                      var r = e.key,
                        o = e.changes,
                        a = u[n];
                      if (a) {
                        for (var l = 0, f = Object.keys(o); l < f.length; l++) {
                          var d = f[l],
                            h = o[d];
                          if (d === t.schema.primKey.keyPath) {
                            if (0 !== ct(h, r))
                              throw new G.Constraint(
                                "Cannot update primary key in bulkUpdate()"
                              );
                          } else x(a, d, h);
                        }
                        i.push(n), s.push(r), c.push(a);
                      }
                    });
                    var l = s.length;
                    return n
                      .mutate({
                        trans: a,
                        type: "put",
                        keys: s,
                        values: c,
                        updates: { keys: r, changeSpecs: o },
                      })
                      .then(function (e) {
                        var n = e.numFailures,
                          r = e.failures;
                        if (0 === n) return l;
                        for (var o = 0, a = Object.keys(r); o < a.length; o++) {
                          var u,
                            s = a[o],
                            c = i[Number(s)];
                          null != c && ((u = r[s]), delete r[s], (r[c] = u));
                        }
                        throw new z(
                          ""
                            .concat(t.name, ".bulkUpdate(): ")
                            .concat(n, " of ")
                            .concat(l, " operations failed"),
                          r
                        );
                      });
                  });
              });
            }),
            (ht.prototype.bulkDelete = function (e) {
              var t = this,
                n = e.length;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: e });
              }).then(function (e) {
                var r = e.numFailures,
                  o = e.lastResult;
                if (((e = e.failures), 0 === r)) return o;
                throw new z(
                  ""
                    .concat(t.name, ".bulkDelete(): ")
                    .concat(r, " of ")
                    .concat(n, " operations failed"),
                  e
                );
              });
            }),
            ht);
          function ht() {}
          function pt(e) {
            function t(t, r) {
              if (r) {
                for (var o = arguments.length, i = new Array(o - 1); --o; )
                  i[o - 1] = arguments[o];
                return n[t].subscribe.apply(null, i), e;
              }
              if ("string" == typeof t) return n[t];
            }
            var n = {};
            t.addEventType = u;
            for (var r = 1, o = arguments.length; r < o; ++r) u(arguments[r]);
            return t;
            function u(e, r, o) {
              if ("object" != typeof e) {
                var s;
                r = r || ne;
                var c = {
                  subscribers: [],
                  fire: (o = o || X),
                  subscribe: function (e) {
                    -1 === c.subscribers.indexOf(e) &&
                      (c.subscribers.push(e), (c.fire = r(c.fire, e)));
                  },
                  unsubscribe: function (e) {
                    (c.subscribers = c.subscribers.filter(function (t) {
                      return t !== e;
                    })),
                      (c.fire = c.subscribers.reduce(r, o));
                  },
                };
                return (n[e] = t[e] = c);
              }
              i((s = e)).forEach(function (e) {
                var t = s[e];
                if (a(t)) u(e, s[e][0], s[e][1]);
                else {
                  if ("asap" !== t)
                    throw new G.InvalidArgument("Invalid event config");
                  var n = u(e, Y, function () {
                    for (var e = arguments.length, t = new Array(e); e--; )
                      t[e] = arguments[e];
                    n.subscribers.forEach(function (e) {
                      w(function () {
                        e.apply(null, t);
                      });
                    });
                  });
                }
              });
            }
          }
          function yt(e, t) {
            return p(t).from({ prototype: e }), t;
          }
          function vt(e, t) {
            return (
              !(e.filter || e.algorithm || e.or) &&
              (t ? e.justLimit : !e.replayFilter)
            );
          }
          function mt(e, t) {
            e.filter = it(e.filter, t);
          }
          function gt(e, t, n) {
            var r = e.replayFilter;
            (e.replayFilter = r
              ? function () {
                  return it(r(), t());
                }
              : t),
              (e.justLimit = n && !r);
          }
          function bt(e, t) {
            if (e.isPrimKey) return t.primaryKey;
            var n = t.getIndexByKeyPath(e.index);
            if (!n)
              throw new G.Schema(
                "KeyPath " +
                  e.index +
                  " on object store " +
                  t.name +
                  " is not indexed"
              );
            return n;
          }
          function wt(e, t, n) {
            var r = bt(e, t.schema);
            return t.openCursor({
              trans: n,
              values: !e.keysOnly,
              reverse: "prev" === e.dir,
              unique: !!e.unique,
              query: { index: r, range: e.range },
            });
          }
          function _t(e, t, n, r) {
            var o = e.replayFilter ? it(e.filter, e.replayFilter()) : e.filter;
            if (e.or) {
              var i = {},
                a = function (e, n, r) {
                  var a, u;
                  (o &&
                    !o(
                      n,
                      r,
                      function (e) {
                        return n.stop(e);
                      },
                      function (e) {
                        return n.fail(e);
                      }
                    )) ||
                    ("[object ArrayBuffer]" == (u = "" + (a = n.primaryKey)) &&
                      (u = "" + new Uint8Array(a)),
                    l(i, u) || ((i[u] = !0), t(e, n, r)));
                };
              return Promise.all([
                e.or._iterate(a, n),
                xt(wt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper),
              ]);
            }
            return xt(
              wt(e, r, n),
              it(e.algorithm, o),
              t,
              !e.keysOnly && e.valueMapper
            );
          }
          function xt(e, t, n, r) {
            var o = De(
              r
                ? function (e, t, o) {
                    return n(r(e), t, o);
                  }
                : n
            );
            return e.then(function (e) {
              if (e)
                return e.start(function () {
                  var n = function () {
                    return e.continue();
                  };
                  (t &&
                    !t(
                      e,
                      function (e) {
                        return (n = e);
                      },
                      function (t) {
                        e.stop(t), (n = X);
                      },
                      function (t) {
                        e.fail(t), (n = X);
                      }
                    )) ||
                    o(e.value, e, function (e) {
                      return (n = e);
                    }),
                    n();
                });
            });
          }
          P = Symbol();
          var kt =
            ((St.prototype.execute = function (e) {
              var t =
                null === (t = this.replacePrefix) || void 0 === t
                  ? void 0
                  : t[0];
              return t && "string" == typeof e && e.startsWith(t)
                ? this.replacePrefix[1] + e.substring(t.length)
                : e;
            }),
            St);
          function St(e) {
            Object.assign(this, e);
          }
          var Ot =
            ((Pt.prototype._read = function (e, t) {
              var n = this._ctx;
              return n.error
                ? n.table._trans(null, Je.bind(null, n.error))
                : n.table._trans("readonly", e).then(t);
            }),
            (Pt.prototype._write = function (e) {
              var t = this._ctx;
              return t.error
                ? t.table._trans(null, Je.bind(null, t.error))
                : t.table._trans("readwrite", e, "locked");
            }),
            (Pt.prototype._addAlgorithm = function (e) {
              var t = this._ctx;
              t.algorithm = it(t.algorithm, e);
            }),
            (Pt.prototype._iterate = function (e, t) {
              return _t(this._ctx, e, t, this._ctx.table.core);
            }),
            (Pt.prototype.clone = function (e) {
              var t = Object.create(this.constructor.prototype),
                n = Object.create(this._ctx);
              return e && u(n, e), (t._ctx = n), t;
            }),
            (Pt.prototype.raw = function () {
              return (this._ctx.valueMapper = null), this;
            }),
            (Pt.prototype.each = function (e) {
              var t = this._ctx;
              return this._read(function (n) {
                return _t(t, e, n, t.table.core);
              });
            }),
            (Pt.prototype.count = function (e) {
              var t = this;
              return this._read(function (e) {
                var n = t._ctx,
                  r = n.table.core;
                if (vt(n, !0))
                  return r
                    .count({
                      trans: e,
                      query: { index: bt(n, r.schema), range: n.range },
                    })
                    .then(function (e) {
                      return Math.min(e, n.limit);
                    });
                var o = 0;
                return _t(
                  n,
                  function () {
                    return ++o, !1;
                  },
                  e,
                  r
                ).then(function () {
                  return o;
                });
              }).then(e);
            }),
            (Pt.prototype.sortBy = function (e, t) {
              var n = e.split(".").reverse(),
                r = n[0],
                o = n.length - 1;
              function i(e, t) {
                return t ? i(e[n[t]], t - 1) : e[r];
              }
              var a = "next" === this._ctx.dir ? 1 : -1;
              function u(e, t) {
                return (e = i(e, o)) < (t = i(t, o)) ? -a : t < e ? a : 0;
              }
              return this.toArray(function (e) {
                return e.sort(u);
              }).then(t);
            }),
            (Pt.prototype.toArray = function (e) {
              var t = this;
              return this._read(function (e) {
                var n = t._ctx;
                if ("next" === n.dir && vt(n, !0) && 0 < n.limit) {
                  var r = n.valueMapper,
                    o = bt(n, n.table.core.schema);
                  return n.table.core
                    .query({
                      trans: e,
                      limit: n.limit,
                      values: !0,
                      query: { index: o, range: n.range },
                    })
                    .then(function (e) {
                      return (e = e.result), r ? e.map(r) : e;
                    });
                }
                var i = [];
                return _t(
                  n,
                  function (e) {
                    return i.push(e);
                  },
                  e,
                  n.table.core
                ).then(function () {
                  return i;
                });
              }, e);
            }),
            (Pt.prototype.offset = function (e) {
              var t = this._ctx;
              return (
                e <= 0 ||
                  ((t.offset += e),
                  vt(t)
                    ? gt(t, function () {
                        var t = e;
                        return function (e, n) {
                          return (
                            0 === t ||
                            (1 === t
                              ? --t
                              : n(function () {
                                  e.advance(t), (t = 0);
                                }),
                            !1)
                          );
                        };
                      })
                    : gt(t, function () {
                        var t = e;
                        return function () {
                          return --t < 0;
                        };
                      })),
                this
              );
            }),
            (Pt.prototype.limit = function (e) {
              return (
                (this._ctx.limit = Math.min(this._ctx.limit, e)),
                gt(
                  this._ctx,
                  function () {
                    var t = e;
                    return function (e, n, r) {
                      return --t <= 0 && n(r), 0 <= t;
                    };
                  },
                  !0
                ),
                this
              );
            }),
            (Pt.prototype.until = function (e, t) {
              return (
                mt(this._ctx, function (n, r, o) {
                  return !e(n.value) || (r(o), t);
                }),
                this
              );
            }),
            (Pt.prototype.first = function (e) {
              return this.limit(1)
                .toArray(function (e) {
                  return e[0];
                })
                .then(e);
            }),
            (Pt.prototype.last = function (e) {
              return this.reverse().first(e);
            }),
            (Pt.prototype.filter = function (e) {
              var t;
              return (
                mt(this._ctx, function (t) {
                  return e(t.value);
                }),
                ((t = this._ctx).isMatch = it(t.isMatch, e)),
                this
              );
            }),
            (Pt.prototype.and = function (e) {
              return this.filter(e);
            }),
            (Pt.prototype.or = function (e) {
              return new this.db.WhereClause(this._ctx.table, e, this);
            }),
            (Pt.prototype.reverse = function () {
              return (
                (this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev"),
                this._ondirectionchange &&
                  this._ondirectionchange(this._ctx.dir),
                this
              );
            }),
            (Pt.prototype.desc = function () {
              return this.reverse();
            }),
            (Pt.prototype.eachKey = function (e) {
              var t = this._ctx;
              return (
                (t.keysOnly = !t.isMatch),
                this.each(function (t, n) {
                  e(n.key, n);
                })
              );
            }),
            (Pt.prototype.eachUniqueKey = function (e) {
              return (this._ctx.unique = "unique"), this.eachKey(e);
            }),
            (Pt.prototype.eachPrimaryKey = function (e) {
              var t = this._ctx;
              return (
                (t.keysOnly = !t.isMatch),
                this.each(function (t, n) {
                  e(n.primaryKey, n);
                })
              );
            }),
            (Pt.prototype.keys = function (e) {
              var t = this._ctx;
              t.keysOnly = !t.isMatch;
              var n = [];
              return this.each(function (e, t) {
                n.push(t.key);
              })
                .then(function () {
                  return n;
                })
                .then(e);
            }),
            (Pt.prototype.primaryKeys = function (e) {
              var t = this._ctx;
              if ("next" === t.dir && vt(t, !0) && 0 < t.limit)
                return this._read(function (e) {
                  var n = bt(t, t.table.core.schema);
                  return t.table.core.query({
                    trans: e,
                    values: !1,
                    limit: t.limit,
                    query: { index: n, range: t.range },
                  });
                })
                  .then(function (e) {
                    return e.result;
                  })
                  .then(e);
              t.keysOnly = !t.isMatch;
              var n = [];
              return this.each(function (e, t) {
                n.push(t.primaryKey);
              })
                .then(function () {
                  return n;
                })
                .then(e);
            }),
            (Pt.prototype.uniqueKeys = function (e) {
              return (this._ctx.unique = "unique"), this.keys(e);
            }),
            (Pt.prototype.firstKey = function (e) {
              return this.limit(1)
                .keys(function (e) {
                  return e[0];
                })
                .then(e);
            }),
            (Pt.prototype.lastKey = function (e) {
              return this.reverse().firstKey(e);
            }),
            (Pt.prototype.distinct = function () {
              var e;
              if (
                !(e =
                  (e = this._ctx).index && e.table.schema.idxByName[e.index]) ||
                !e.multi
              )
                return this;
              var t = {};
              return (
                mt(this._ctx, function (e) {
                  var n = e.primaryKey.toString();
                  return (e = l(t, n)), (t[n] = !0), !e;
                }),
                this
              );
            }),
            (Pt.prototype.modify = function (e) {
              var t = this,
                n = this._ctx;
              return this._write(function (r) {
                var o, a, u;
                function s(e, t) {
                  var n = t.failures;
                  (t = t.numFailures), (y += e - t);
                  for (var r = 0, o = i(n); r < o.length; r++) {
                    var a = o[r];
                    p.push(n[a]);
                  }
                }
                u =
                  "function" == typeof e
                    ? e
                    : ((o = i(e)),
                      (a = o.length),
                      function (t) {
                        for (var n = !1, r = 0; r < a; ++r) {
                          var i = o[r],
                            u = e[i],
                            s = _(t, i);
                          u instanceof kt
                            ? (x(t, i, u.execute(s)), (n = !0))
                            : s !== u && (x(t, i, u), (n = !0));
                        }
                        return n;
                      });
                var c = n.table.core,
                  l = c.schema.primaryKey,
                  f = l.outbound,
                  d = l.extractKey,
                  h = t.db._options.modifyChunkSize || 200,
                  p = [],
                  y = 0,
                  v = [];
                return t
                  .clone()
                  .primaryKeys()
                  .then(function (t) {
                    function o(i) {
                      var a = Math.min(h, t.length - i);
                      return c
                        .getMany({
                          trans: r,
                          keys: t.slice(i, i + a),
                          cache: "immutable",
                        })
                        .then(function (l) {
                          for (
                            var p = [],
                              y = [],
                              v = f ? [] : null,
                              m = [],
                              g = 0;
                            g < a;
                            ++g
                          ) {
                            var b = l[g],
                              w = { value: A(b), primKey: t[i + g] };
                            !1 !== u.call(w, w.value, w) &&
                              (null == w.value
                                ? m.push(t[i + g])
                                : f || 0 === ct(d(b), d(w.value))
                                ? (y.push(w.value), f && v.push(t[i + g]))
                                : (m.push(t[i + g]), p.push(w.value)));
                          }
                          var _ = vt(n) &&
                            n.limit === 1 / 0 &&
                            ("function" != typeof e || e === It) && {
                              index: n.index,
                              range: n.range,
                            };
                          return Promise.resolve(
                            0 < p.length &&
                              c
                                .mutate({ trans: r, type: "add", values: p })
                                .then(function (e) {
                                  for (var t in e.failures)
                                    m.splice(parseInt(t), 1);
                                  s(p.length, e);
                                })
                          )
                            .then(function () {
                              return (
                                (0 < y.length || (_ && "object" == typeof e)) &&
                                c
                                  .mutate({
                                    trans: r,
                                    type: "put",
                                    keys: v,
                                    values: y,
                                    criteria: _,
                                    changeSpec: "function" != typeof e && e,
                                  })
                                  .then(function (e) {
                                    return s(y.length, e);
                                  })
                              );
                            })
                            .then(function () {
                              return (
                                (0 < m.length || (_ && e === It)) &&
                                c
                                  .mutate({
                                    trans: r,
                                    type: "delete",
                                    keys: m,
                                    criteria: _,
                                  })
                                  .then(function (e) {
                                    return s(m.length, e);
                                  })
                              );
                            })
                            .then(function () {
                              return t.length > i + a && o(i + h);
                            });
                        });
                    }
                    return o(0).then(function () {
                      if (0 < p.length)
                        throw new V(
                          "Error modifying one or more objects",
                          p,
                          y,
                          v
                        );
                      return t.length;
                    });
                  });
              });
            }),
            (Pt.prototype.delete = function () {
              var e = this._ctx,
                t = e.range;
              return vt(e) && (e.isPrimKey || 3 === t.type)
                ? this._write(function (n) {
                    var r = e.table.core.schema.primaryKey,
                      o = t;
                    return e.table.core
                      .count({ trans: n, query: { index: r, range: o } })
                      .then(function (t) {
                        return e.table.core
                          .mutate({ trans: n, type: "deleteRange", range: o })
                          .then(function (e) {
                            var n = e.failures;
                            if ((e.lastResult, e.results, (e = e.numFailures)))
                              throw new V(
                                "Could not delete some values",
                                Object.keys(n).map(function (e) {
                                  return n[e];
                                }),
                                t - e
                              );
                            return t - e;
                          });
                      });
                  })
                : this.modify(It);
            }),
            Pt);
          function Pt() {}
          var It = function (e, t) {
            return (t.value = null);
          };
          function jt(e, t) {
            return e < t ? -1 : e === t ? 0 : 1;
          }
          function At(e, t) {
            return t < e ? -1 : e === t ? 0 : 1;
          }
          function Et(e, t, n) {
            return (
              ((e = e instanceof Mt ? new e.Collection(e) : e)._ctx.error =
                new (n || TypeError)(t)),
              e
            );
          }
          function Ct(e) {
            return new e.Collection(e, function () {
              return Dt("");
            }).limit(0);
          }
          function Tt(e, t, n, r) {
            var o,
              i,
              a,
              u,
              s,
              c,
              l,
              f = n.length;
            if (
              !n.every(function (e) {
                return "string" == typeof e;
              })
            )
              return Et(e, et);
            function d(e) {
              (o =
                "next" === e
                  ? function (e) {
                      return e.toUpperCase();
                    }
                  : function (e) {
                      return e.toLowerCase();
                    }),
                (i =
                  "next" === e
                    ? function (e) {
                        return e.toLowerCase();
                      }
                    : function (e) {
                        return e.toUpperCase();
                      }),
                (a = "next" === e ? jt : At);
              var t = n
                .map(function (e) {
                  return { lower: i(e), upper: o(e) };
                })
                .sort(function (e, t) {
                  return a(e.lower, t.lower);
                });
              (u = t.map(function (e) {
                return e.upper;
              })),
                (s = t.map(function (e) {
                  return e.lower;
                })),
                (l = "next" === (c = e) ? "" : r);
            }
            d("next"),
              ((e = new e.Collection(e, function () {
                return Kt(u[0], s[f - 1] + r);
              }))._ondirectionchange = function (e) {
                d(e);
              });
            var h = 0;
            return (
              e._addAlgorithm(function (e, n, r) {
                var o = e.key;
                if ("string" != typeof o) return !1;
                var d = i(o);
                if (t(d, s, h)) return !0;
                for (var p = null, y = h; y < f; ++y) {
                  var v = (function (e, t, n, r, o, i) {
                    for (
                      var a = Math.min(e.length, r.length), u = -1, s = 0;
                      s < a;
                      ++s
                    ) {
                      var c = t[s];
                      if (c !== r[s])
                        return o(e[s], n[s]) < 0
                          ? e.substr(0, s) + n[s] + n.substr(s + 1)
                          : o(e[s], r[s]) < 0
                          ? e.substr(0, s) + r[s] + n.substr(s + 1)
                          : 0 <= u
                          ? e.substr(0, u) + t[u] + n.substr(u + 1)
                          : null;
                      o(e[s], c) < 0 && (u = s);
                    }
                    return a < r.length && "next" === i
                      ? e + n.substr(e.length)
                      : a < e.length && "prev" === i
                      ? e.substr(0, n.length)
                      : u < 0
                      ? null
                      : e.substr(0, u) + r[u] + n.substr(u + 1);
                  })(o, d, u[y], s[y], a, c);
                  null === v && null === p
                    ? (h = y + 1)
                    : (null === p || 0 < a(p, v)) && (p = v);
                }
                return (
                  n(
                    null !== p
                      ? function () {
                          e.continue(p + l);
                        }
                      : r
                  ),
                  !1
                );
              }),
              e
            );
          }
          function Kt(e, t, n, r) {
            return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
          }
          function Dt(e) {
            return { type: 1, lower: e, upper: e };
          }
          var Mt =
            (Object.defineProperty(Bt.prototype, "Collection", {
              get: function () {
                return this._ctx.table.db.Collection;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (Bt.prototype.between = function (e, t, n, r) {
              (n = !1 !== n), (r = !0 === r);
              try {
                return 0 < this._cmp(e, t) ||
                  (0 === this._cmp(e, t) && (n || r) && (!n || !r))
                  ? Ct(this)
                  : new this.Collection(this, function () {
                      return Kt(e, t, !n, !r);
                    });
              } catch (e) {
                return Et(this, Qe);
              }
            }),
            (Bt.prototype.equals = function (e) {
              return null == e
                ? Et(this, Qe)
                : new this.Collection(this, function () {
                    return Dt(e);
                  });
            }),
            (Bt.prototype.above = function (e) {
              return null == e
                ? Et(this, Qe)
                : new this.Collection(this, function () {
                    return Kt(e, void 0, !0);
                  });
            }),
            (Bt.prototype.aboveOrEqual = function (e) {
              return null == e
                ? Et(this, Qe)
                : new this.Collection(this, function () {
                    return Kt(e, void 0, !1);
                  });
            }),
            (Bt.prototype.below = function (e) {
              return null == e
                ? Et(this, Qe)
                : new this.Collection(this, function () {
                    return Kt(void 0, e, !1, !0);
                  });
            }),
            (Bt.prototype.belowOrEqual = function (e) {
              return null == e
                ? Et(this, Qe)
                : new this.Collection(this, function () {
                    return Kt(void 0, e);
                  });
            }),
            (Bt.prototype.startsWith = function (e) {
              return "string" != typeof e
                ? Et(this, et)
                : this.between(e, e + He, !0, !0);
            }),
            (Bt.prototype.startsWithIgnoreCase = function (e) {
              return "" === e
                ? this.startsWith(e)
                : Tt(
                    this,
                    function (e, t) {
                      return 0 === e.indexOf(t[0]);
                    },
                    [e],
                    He
                  );
            }),
            (Bt.prototype.equalsIgnoreCase = function (e) {
              return Tt(
                this,
                function (e, t) {
                  return e === t[0];
                },
                [e],
                ""
              );
            }),
            (Bt.prototype.anyOfIgnoreCase = function () {
              var e = B.apply(M, arguments);
              return 0 === e.length
                ? Ct(this)
                : Tt(
                    this,
                    function (e, t) {
                      return -1 !== t.indexOf(e);
                    },
                    e,
                    ""
                  );
            }),
            (Bt.prototype.startsWithAnyOfIgnoreCase = function () {
              var e = B.apply(M, arguments);
              return 0 === e.length
                ? Ct(this)
                : Tt(
                    this,
                    function (e, t) {
                      return t.some(function (t) {
                        return 0 === e.indexOf(t);
                      });
                    },
                    e,
                    He
                  );
            }),
            (Bt.prototype.anyOf = function () {
              var e = this,
                t = B.apply(M, arguments),
                n = this._cmp;
              try {
                t.sort(n);
              } catch (r) {
                return Et(this, Qe);
              }
              if (0 === t.length) return Ct(this);
              var r = new this.Collection(this, function () {
                return Kt(t[0], t[t.length - 1]);
              });
              r._ondirectionchange = function (r) {
                (n = "next" === r ? e._ascending : e._descending), t.sort(n);
              };
              var o = 0;
              return (
                r._addAlgorithm(function (e, r, i) {
                  for (var a = e.key; 0 < n(a, t[o]); )
                    if (++o === t.length) return r(i), !1;
                  return (
                    0 === n(a, t[o]) ||
                    (r(function () {
                      e.continue(t[o]);
                    }),
                    !1)
                  );
                }),
                r
              );
            }),
            (Bt.prototype.notEqual = function (e) {
              return this.inAnyRange(
                [
                  [-1 / 0, e],
                  [e, this.db._maxKey],
                ],
                { includeLowers: !1, includeUppers: !1 }
              );
            }),
            (Bt.prototype.noneOf = function () {
              var e = B.apply(M, arguments);
              if (0 === e.length) return new this.Collection(this);
              try {
                e.sort(this._ascending);
              } catch (e) {
                return Et(this, Qe);
              }
              var t = e.reduce(function (e, t) {
                return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
              }, null);
              return (
                t.push([e[e.length - 1], this.db._maxKey]),
                this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 })
              );
            }),
            (Bt.prototype.inAnyRange = function (e, t) {
              var n = this,
                r = this._cmp,
                o = this._ascending,
                i = this._descending,
                a = this._min,
                u = this._max;
              if (0 === e.length) return Ct(this);
              if (
                !e.every(function (e) {
                  return (
                    void 0 !== e[0] && void 0 !== e[1] && o(e[0], e[1]) <= 0
                  );
                })
              )
                return Et(
                  this,
                  "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                  G.InvalidArgument
                );
              var s,
                c = !t || !1 !== t.includeLowers,
                l = t && !0 === t.includeUppers,
                f = o;
              function d(e, t) {
                return f(e[0], t[0]);
              }
              try {
                (s = e.reduce(function (e, t) {
                  for (var n = 0, o = e.length; n < o; ++n) {
                    var i = e[n];
                    if (r(t[0], i[1]) < 0 && 0 < r(t[1], i[0])) {
                      (i[0] = a(i[0], t[0])), (i[1] = u(i[1], t[1]));
                      break;
                    }
                  }
                  return n === o && e.push(t), e;
                }, [])).sort(d);
              } catch (e) {
                return Et(this, Qe);
              }
              var h = 0,
                p = l
                  ? function (e) {
                      return 0 < o(e, s[h][1]);
                    }
                  : function (e) {
                      return 0 <= o(e, s[h][1]);
                    },
                y = c
                  ? function (e) {
                      return 0 < i(e, s[h][0]);
                    }
                  : function (e) {
                      return 0 <= i(e, s[h][0]);
                    },
                v = p;
              return (
                ((e = new this.Collection(this, function () {
                  return Kt(s[0][0], s[s.length - 1][1], !c, !l);
                }))._ondirectionchange = function (e) {
                  (f = "next" === e ? ((v = p), o) : ((v = y), i)), s.sort(d);
                }),
                e._addAlgorithm(function (e, t, r) {
                  for (var i, a = e.key; v(a); )
                    if (++h === s.length) return t(r), !1;
                  return (
                    (!p((i = a)) && !y(i)) ||
                    (0 === n._cmp(a, s[h][1]) ||
                      0 === n._cmp(a, s[h][0]) ||
                      t(function () {
                        f === o ? e.continue(s[h][0]) : e.continue(s[h][1]);
                      }),
                    !1)
                  );
                }),
                e
              );
            }),
            (Bt.prototype.startsWithAnyOf = function () {
              var e = B.apply(M, arguments);
              return e.every(function (e) {
                return "string" == typeof e;
              })
                ? 0 === e.length
                  ? Ct(this)
                  : this.inAnyRange(
                      e.map(function (e) {
                        return [e, e + He];
                      })
                    )
                : Et(this, "startsWithAnyOf() only works with strings");
            }),
            Bt);
          function Bt() {}
          function Nt(e) {
            return De(function (t) {
              return Rt(t), e(t.target.error), !1;
            });
          }
          function Rt(e) {
            e.stopPropagation && e.stopPropagation(),
              e.preventDefault && e.preventDefault();
          }
          var qt = "storagemutated",
            Ft = "x-storagemutated-1",
            Ut = pt(null, qt),
            Vt =
              ((zt.prototype._lock = function () {
                return (
                  b(!ge.global),
                  ++this._reculock,
                  1 !== this._reculock || ge.global || (ge.lockOwnerFor = this),
                  this
                );
              }),
              (zt.prototype._unlock = function () {
                if ((b(!ge.global), 0 == --this._reculock))
                  for (
                    ge.global || (ge.lockOwnerFor = null);
                    0 < this._blockedFuncs.length && !this._locked();

                  ) {
                    var e = this._blockedFuncs.shift();
                    try {
                      $e(e[1], e[0]);
                    } catch (e) {}
                  }
                return this;
              }),
              (zt.prototype._locked = function () {
                return this._reculock && ge.lockOwnerFor !== this;
              }),
              (zt.prototype.create = function (e) {
                var t = this;
                if (!this.mode) return this;
                var n = this.db.idbdb,
                  r = this.db._state.dbOpenError;
                if ((b(!this.idbtrans), !e && !n))
                  switch (r && r.name) {
                    case "DatabaseClosedError":
                      throw new G.DatabaseClosed(r);
                    case "MissingAPIError":
                      throw new G.MissingAPI(r.message, r);
                    default:
                      throw new G.OpenFailed(r);
                  }
                if (!this.active) throw new G.TransactionInactive();
                return (
                  b(null === this._completion._state),
                  ((e = this.idbtrans =
                    e ||
                    (this.db.core || n).transaction(
                      this.storeNames,
                      this.mode,
                      { durability: this.chromeTransactionDurability }
                    )).onerror = De(function (n) {
                    Rt(n), t._reject(e.error);
                  })),
                  (e.onabort = De(function (n) {
                    Rt(n),
                      t.active && t._reject(new G.Abort(e.error)),
                      (t.active = !1),
                      t.on("abort").fire(n);
                  })),
                  (e.oncomplete = De(function () {
                    (t.active = !1),
                      t._resolve(),
                      "mutatedParts" in e &&
                        Ut.storagemutated.fire(e.mutatedParts);
                  })),
                  this
                );
              }),
              (zt.prototype._promise = function (e, t, n) {
                var r = this;
                if ("readwrite" === e && "readwrite" !== this.mode)
                  return Je(new G.ReadOnly("Transaction is readonly"));
                if (!this.active) return Je(new G.TransactionInactive());
                if (this._locked())
                  return new xe(function (o, i) {
                    r._blockedFuncs.push([
                      function () {
                        r._promise(e, t, n).then(o, i);
                      },
                      ge,
                    ]);
                  });
                if (n)
                  return Ue(function () {
                    var e = new xe(function (e, n) {
                      r._lock();
                      var o = t(e, n, r);
                      o && o.then && o.then(e, n);
                    });
                    return (
                      e.finally(function () {
                        return r._unlock();
                      }),
                      (e._lib = !0),
                      e
                    );
                  });
                var o = new xe(function (e, n) {
                  var o = t(e, n, r);
                  o && o.then && o.then(e, n);
                });
                return (o._lib = !0), o;
              }),
              (zt.prototype._root = function () {
                return this.parent ? this.parent._root() : this;
              }),
              (zt.prototype.waitFor = function (e) {
                var t,
                  n = this._root(),
                  r = xe.resolve(e);
                n._waitingFor
                  ? (n._waitingFor = n._waitingFor.then(function () {
                      return r;
                    }))
                  : ((n._waitingFor = r),
                    (n._waitingQueue = []),
                    (t = n.idbtrans.objectStore(n.storeNames[0])),
                    (function e() {
                      for (++n._spinCount; n._waitingQueue.length; )
                        n._waitingQueue.shift()();
                      n._waitingFor && (t.get(-1 / 0).onsuccess = e);
                    })());
                var o = n._waitingFor;
                return new xe(function (e, t) {
                  r.then(
                    function (t) {
                      return n._waitingQueue.push(De(e.bind(null, t)));
                    },
                    function (e) {
                      return n._waitingQueue.push(De(t.bind(null, e)));
                    }
                  ).finally(function () {
                    n._waitingFor === o && (n._waitingFor = null);
                  });
                });
              }),
              (zt.prototype.abort = function () {
                this.active &&
                  ((this.active = !1),
                  this.idbtrans && this.idbtrans.abort(),
                  this._reject(new G.Abort()));
              }),
              (zt.prototype.table = function (e) {
                var t = this._memoizedTables || (this._memoizedTables = {});
                if (l(t, e)) return t[e];
                var n = this.schema[e];
                if (!n)
                  throw new G.NotFound(
                    "Table " + e + " not part of transaction"
                  );
                return (
                  ((n = new this.db.Table(e, n, this)).core =
                    this.db.core.table(e)),
                  (t[e] = n)
                );
              }),
              zt);
          function zt() {}
          function Zt(e, t, n, r, o, i, a) {
            return {
              name: e,
              keyPath: t,
              unique: n,
              multi: r,
              auto: o,
              compound: i,
              src:
                (n && !a ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + Lt(t),
            };
          }
          function Lt(e) {
            return "string" == typeof e
              ? e
              : e
              ? "[" + [].join.call(e, "+") + "]"
              : "";
          }
          function Gt(e, t, n) {
            return {
              name: e,
              primKey: t,
              indexes: n,
              mappedClass: null,
              idxByName:
                ((r = function (e) {
                  return [e.name, e];
                }),
                n.reduce(function (e, t, n) {
                  return (n = r(t, n)) && (e[n[0]] = n[1]), e;
                }, {})),
            };
            var r;
          }
          var Wt = function (e) {
            try {
              return (
                e.only([[]]),
                (Wt = function () {
                  return [[]];
                }),
                [[]]
              );
            } catch (e) {
              return (
                (Wt = function () {
                  return He;
                }),
                He
              );
            }
          };
          function $t(e) {
            return null == e
              ? function () {}
              : "string" == typeof e
              ? 1 === (t = e).split(".").length
                ? function (e) {
                    return e[t];
                  }
                : function (e) {
                    return _(e, t);
                  }
              : function (t) {
                  return _(t, e);
                };
            var t;
          }
          function Xt(e) {
            return [].slice.call(e);
          }
          var Yt = 0;
          function Jt(e) {
            return null == e
              ? ":id"
              : "string" == typeof e
              ? e
              : "[".concat(e.join("+"), "]");
          }
          function Ht(e, t, n) {
            function r(e) {
              if (3 === e.type) return null;
              if (4 === e.type)
                throw new Error("Cannot convert never type to IDBKeyRange");
              var n = e.lower,
                r = e.upper,
                o = e.lowerOpen;
              return (
                (e = e.upperOpen),
                void 0 === n
                  ? void 0 === r
                    ? null
                    : t.upperBound(r, !!e)
                  : void 0 === r
                  ? t.lowerBound(n, !!o)
                  : t.bound(n, r, !!o, !!e)
              );
            }
            function o(e) {
              var t,
                n = e.name;
              return {
                name: n,
                schema: e,
                mutate: function (e) {
                  var t = e.trans,
                    o = e.type,
                    i = e.keys,
                    a = e.values,
                    u = e.range;
                  return new Promise(function (e, s) {
                    e = De(e);
                    var c = t.objectStore(n),
                      l = null == c.keyPath,
                      f = "put" === o || "add" === o;
                    if (!f && "delete" !== o && "deleteRange" !== o)
                      throw new Error("Invalid operation type: " + o);
                    var d,
                      h = (i || a || { length: 1 }).length;
                    if (i && a && i.length !== a.length)
                      throw new Error(
                        "Given keys array must have same length as given values array."
                      );
                    if (0 === h)
                      return e({
                        numFailures: 0,
                        failures: {},
                        results: [],
                        lastResult: void 0,
                      });
                    function p(e) {
                      ++m, Rt(e);
                    }
                    var y = [],
                      v = [],
                      m = 0;
                    if ("deleteRange" === o) {
                      if (4 === u.type)
                        return e({
                          numFailures: m,
                          failures: v,
                          results: [],
                          lastResult: void 0,
                        });
                      3 === u.type
                        ? y.push((d = c.clear()))
                        : y.push((d = c.delete(r(u))));
                    } else {
                      var g = (l = f ? (l ? [a, i] : [a, null]) : [i, null])[0],
                        b = l[1];
                      if (f)
                        for (var w = 0; w < h; ++w)
                          y.push(
                            (d =
                              b && void 0 !== b[w]
                                ? c[o](g[w], b[w])
                                : c[o](g[w]))
                          ),
                            (d.onerror = p);
                      else
                        for (w = 0; w < h; ++w)
                          y.push((d = c[o](g[w]))), (d.onerror = p);
                    }
                    function _(t) {
                      (t = t.target.result),
                        y.forEach(function (e, t) {
                          return null != e.error && (v[t] = e.error);
                        }),
                        e({
                          numFailures: m,
                          failures: v,
                          results:
                            "delete" === o
                              ? i
                              : y.map(function (e) {
                                  return e.result;
                                }),
                          lastResult: t,
                        });
                    }
                    (d.onerror = function (e) {
                      p(e), _(e);
                    }),
                      (d.onsuccess = _);
                  });
                },
                getMany: function (e) {
                  var t = e.trans,
                    r = e.keys;
                  return new Promise(function (e, o) {
                    e = De(e);
                    for (
                      var i,
                        a = t.objectStore(n),
                        u = r.length,
                        s = new Array(u),
                        c = 0,
                        l = 0,
                        f = function (t) {
                          (t = t.target),
                            (s[t._pos] = t.result),
                            ++l === c && e(s);
                        },
                        d = Nt(o),
                        h = 0;
                      h < u;
                      ++h
                    )
                      null != r[h] &&
                        (((i = a.get(r[h]))._pos = h),
                        (i.onsuccess = f),
                        (i.onerror = d),
                        ++c);
                    0 === c && e(s);
                  });
                },
                get: function (e) {
                  var t = e.trans,
                    r = e.key;
                  return new Promise(function (e, o) {
                    e = De(e);
                    var i = t.objectStore(n).get(r);
                    (i.onsuccess = function (t) {
                      return e(t.target.result);
                    }),
                      (i.onerror = Nt(o));
                  });
                },
                query:
                  ((t = l),
                  function (e) {
                    return new Promise(function (o, i) {
                      o = De(o);
                      var a,
                        u,
                        s,
                        c = e.trans,
                        l = e.values,
                        f = e.limit,
                        d = e.query,
                        h = f === 1 / 0 ? void 0 : f,
                        p = d.index;
                      if (
                        ((d = d.range),
                        (c = c.objectStore(n)),
                        (p = p.isPrimaryKey ? c : c.index(p.name)),
                        (d = r(d)),
                        0 === f)
                      )
                        return o({ result: [] });
                      t
                        ? (((h = l
                            ? p.getAll(d, h)
                            : p.getAllKeys(d, h)).onsuccess = function (e) {
                            return o({ result: e.target.result });
                          }),
                          (h.onerror = Nt(i)))
                        : ((a = 0),
                          (u =
                            !l && "openKeyCursor" in p
                              ? p.openKeyCursor(d)
                              : p.openCursor(d)),
                          (s = []),
                          (u.onsuccess = function (e) {
                            var t = u.result;
                            return t
                              ? (s.push(l ? t.value : t.primaryKey),
                                ++a === f
                                  ? o({ result: s })
                                  : void t.continue())
                              : o({ result: s });
                          }),
                          (u.onerror = Nt(i)));
                    });
                  }),
                openCursor: function (e) {
                  var t = e.trans,
                    o = e.values,
                    i = e.query,
                    a = e.reverse,
                    u = e.unique;
                  return new Promise(function (e, s) {
                    e = De(e);
                    var c = i.index,
                      l = i.range,
                      f = t.objectStore(n),
                      d =
                        ((f = c.isPrimaryKey ? f : f.index(c.name)),
                        (c = a
                          ? u
                            ? "prevunique"
                            : "prev"
                          : u
                          ? "nextunique"
                          : "next"),
                        !o && "openKeyCursor" in f
                          ? f.openKeyCursor(r(l), c)
                          : f.openCursor(r(l), c));
                    (d.onerror = Nt(s)),
                      (d.onsuccess = De(function (n) {
                        var r,
                          o,
                          i,
                          a,
                          u = d.result;
                        u
                          ? ((u.___id = ++Yt),
                            (u.done = !1),
                            (r = u.continue.bind(u)),
                            (o = (o = u.continuePrimaryKey) && o.bind(u)),
                            (i = u.advance.bind(u)),
                            (a = function () {
                              throw new Error("Cursor not stopped");
                            }),
                            (u.trans = t),
                            (u.stop =
                              u.continue =
                              u.continuePrimaryKey =
                              u.advance =
                                function () {
                                  throw new Error("Cursor not started");
                                }),
                            (u.fail = De(s)),
                            (u.next = function () {
                              var e = this,
                                t = 1;
                              return this.start(function () {
                                return t-- ? e.continue() : e.stop();
                              }).then(function () {
                                return e;
                              });
                            }),
                            (u.start = function (e) {
                              function t() {
                                if (d.result)
                                  try {
                                    e();
                                  } catch (e) {
                                    u.fail(e);
                                  }
                                else
                                  (u.done = !0),
                                    (u.start = function () {
                                      throw new Error(
                                        "Cursor behind last entry"
                                      );
                                    }),
                                    u.stop();
                              }
                              var n = new Promise(function (e, t) {
                                (e = De(e)),
                                  (d.onerror = Nt(t)),
                                  (u.fail = t),
                                  (u.stop = function (t) {
                                    (u.stop =
                                      u.continue =
                                      u.continuePrimaryKey =
                                      u.advance =
                                        a),
                                      e(t);
                                  });
                              });
                              return (
                                (d.onsuccess = De(function (e) {
                                  (d.onsuccess = t), t();
                                })),
                                (u.continue = r),
                                (u.continuePrimaryKey = o),
                                (u.advance = i),
                                t(),
                                n
                              );
                            }),
                            e(u))
                          : e(null);
                      }, s));
                  });
                },
                count: function (e) {
                  var t = e.query,
                    o = e.trans,
                    i = t.index,
                    a = t.range;
                  return new Promise(function (e, t) {
                    var u = o.objectStore(n),
                      s = i.isPrimaryKey ? u : u.index(i.name);
                    ((s = (u = r(a)) ? s.count(u) : s.count()).onsuccess = De(
                      function (t) {
                        return e(t.target.result);
                      }
                    )),
                      (s.onerror = Nt(t));
                  });
                },
              };
            }
            var i,
              u,
              s,
              c =
                ((u = n),
                (s = Xt((i = e).objectStoreNames)),
                {
                  schema: {
                    name: i.name,
                    tables: s
                      .map(function (e) {
                        return u.objectStore(e);
                      })
                      .map(function (e) {
                        var t = e.keyPath,
                          n = e.autoIncrement,
                          r = a(t),
                          o = {};
                        return (
                          (n = {
                            name: e.name,
                            primaryKey: {
                              name: null,
                              isPrimaryKey: !0,
                              outbound: null == t,
                              compound: r,
                              keyPath: t,
                              autoIncrement: n,
                              unique: !0,
                              extractKey: $t(t),
                            },
                            indexes: Xt(e.indexNames)
                              .map(function (t) {
                                return e.index(t);
                              })
                              .map(function (e) {
                                var t = e.name,
                                  n = e.unique,
                                  r = e.multiEntry;
                                return (
                                  (e = e.keyPath),
                                  (r = {
                                    name: t,
                                    compound: a(e),
                                    keyPath: e,
                                    unique: n,
                                    multiEntry: r,
                                    extractKey: $t(e),
                                  }),
                                  (o[Jt(e)] = r)
                                );
                              }),
                            getIndexByKeyPath: function (e) {
                              return o[Jt(e)];
                            },
                          }),
                          (o[":id"] = n.primaryKey),
                          null != t && (o[Jt(t)] = n.primaryKey),
                          n
                        );
                      }),
                  },
                  hasGetAll:
                    0 < s.length &&
                    "getAll" in u.objectStore(s[0]) &&
                    !(
                      "undefined" != typeof navigator &&
                      /Safari/.test(navigator.userAgent) &&
                      !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                      [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] <
                        604
                    ),
                }),
              l = ((n = c.schema), c.hasGetAll),
              f = ((c = n.tables.map(o)), {});
            return (
              c.forEach(function (e) {
                return (f[e.name] = e);
              }),
              {
                stack: "dbcore",
                transaction: e.transaction.bind(e),
                table: function (e) {
                  if (!f[e])
                    throw new Error("Table '".concat(e, "' not found"));
                  return f[e];
                },
                MIN_KEY: -1 / 0,
                MAX_KEY: Wt(t),
                schema: n,
              }
            );
          }
          function Qt(e, n, r, o) {
            var i = r.IDBKeyRange;
            return (
              r.indexedDB,
              {
                dbcore:
                  ((o = Ht(n, i, o)),
                  e.dbcore.reduce(function (e, n) {
                    return (n = n.create), t(t({}, e), n(e));
                  }, o)),
              }
            );
          }
          function en(e, t) {
            var n = t.db;
            (t = Qt(e._middlewares, n, e._deps, t)),
              (e.core = t.dbcore),
              e.tables.forEach(function (t) {
                var n = t.name;
                e.core.schema.tables.some(function (e) {
                  return e.name === n;
                }) &&
                  ((t.core = e.core.table(n)),
                  e[n] instanceof e.Table && (e[n].core = t.core));
              });
          }
          function tn(e, t, n, r) {
            n.forEach(function (n) {
              var o = r[n];
              t.forEach(function (t) {
                var r = (function e(t, n) {
                  return y(t, n) || ((t = s(t)) && e(t, n));
                })(t, n);
                (!r || ("value" in r && void 0 === r.value)) &&
                  (t === e.Transaction.prototype || t instanceof e.Transaction
                    ? h(t, n, {
                        get: function () {
                          return this.table(n);
                        },
                        set: function (e) {
                          d(this, n, {
                            value: e,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0,
                          });
                        },
                      })
                    : (t[n] = new e.Table(n, o)));
              });
            });
          }
          function nn(e, t) {
            t.forEach(function (t) {
              for (var n in t) t[n] instanceof e.Table && delete t[n];
            });
          }
          function rn(e, t) {
            return e._cfg.version - t._cfg.version;
          }
          function on(e, t, n, r) {
            var o = e._dbSchema;
            n.objectStoreNames.contains("$meta") &&
              !o.$meta &&
              ((o.$meta = Gt("$meta", hn("")[0], [])),
              e._storeNames.push("$meta"));
            var a = e._createTransaction("readwrite", e._storeNames, o);
            a.create(n), a._completion.catch(r);
            var u = a._reject.bind(a),
              s = ge.transless || ge;
            Ue(function () {
              return (
                (ge.trans = a),
                (ge.transless = s),
                0 !== t
                  ? (en(e, n),
                    (c = t),
                    ((r = a).storeNames.includes("$meta")
                      ? r
                          .table("$meta")
                          .get("version")
                          .then(function (e) {
                            return null != e ? e : c;
                          })
                      : xe.resolve(c)
                    )
                      .then(function (t) {
                        return (
                          (o = t),
                          (u = a),
                          (s = n),
                          (c = []),
                          (t = (r = e)._versions),
                          (l = r._dbSchema = fn(0, r.idbdb, s)),
                          0 !==
                          (t = t.filter(function (e) {
                            return e._cfg.version >= o;
                          })).length
                            ? (t.forEach(function (e) {
                                c.push(function () {
                                  var t = l,
                                    n = e._cfg.dbschema;
                                  dn(r, t, s),
                                    dn(r, n, s),
                                    (l = r._dbSchema = n);
                                  var a = un(t, n);
                                  a.add.forEach(function (e) {
                                    sn(s, e[0], e[1].primKey, e[1].indexes);
                                  }),
                                    a.change.forEach(function (e) {
                                      if (e.recreate)
                                        throw new G.Upgrade(
                                          "Not yet support for changing primary key"
                                        );
                                      var t = s.objectStore(e.name);
                                      e.add.forEach(function (e) {
                                        return ln(t, e);
                                      }),
                                        e.change.forEach(function (e) {
                                          t.deleteIndex(e.name), ln(t, e);
                                        }),
                                        e.del.forEach(function (e) {
                                          return t.deleteIndex(e);
                                        });
                                    });
                                  var c = e._cfg.contentUpgrade;
                                  if (c && e._cfg.version > o) {
                                    en(r, s), (u._memoizedTables = {});
                                    var f = k(n);
                                    a.del.forEach(function (e) {
                                      f[e] = t[e];
                                    }),
                                      nn(r, [r.Transaction.prototype]),
                                      tn(r, [r.Transaction.prototype], i(f), f),
                                      (u.schema = f);
                                    var d,
                                      h = N(c);
                                    return (
                                      h && Ve(),
                                      (a = xe.follow(function () {
                                        var e;
                                        (d = c(u)) &&
                                          h &&
                                          ((e = ze.bind(null, null)),
                                          d.then(e, e));
                                      })),
                                      d && "function" == typeof d.then
                                        ? xe.resolve(d)
                                        : a.then(function () {
                                            return d;
                                          })
                                    );
                                  }
                                }),
                                  c.push(function (t) {
                                    var n,
                                      o,
                                      i = e._cfg.dbschema;
                                    (n = i),
                                      (o = t),
                                      [].slice
                                        .call(o.db.objectStoreNames)
                                        .forEach(function (e) {
                                          return (
                                            null == n[e] &&
                                            o.db.deleteObjectStore(e)
                                          );
                                        }),
                                      nn(r, [r.Transaction.prototype]),
                                      tn(
                                        r,
                                        [r.Transaction.prototype],
                                        r._storeNames,
                                        r._dbSchema
                                      ),
                                      (u.schema = r._dbSchema);
                                  }),
                                  c.push(function (t) {
                                    r.idbdb.objectStoreNames.contains(
                                      "$meta"
                                    ) &&
                                      (Math.ceil(r.idbdb.version / 10) ===
                                      e._cfg.version
                                        ? (r.idbdb.deleteObjectStore("$meta"),
                                          delete r._dbSchema.$meta,
                                          (r._storeNames = r._storeNames.filter(
                                            function (e) {
                                              return "$meta" !== e;
                                            }
                                          )))
                                        : t
                                            .objectStore("$meta")
                                            .put(e._cfg.version, "version"));
                                  });
                              }),
                              (function e() {
                                return c.length
                                  ? xe.resolve(c.shift()(u.idbtrans)).then(e)
                                  : xe.resolve();
                              })().then(function () {
                                cn(l, s);
                              }))
                            : xe.resolve()
                        );
                        var r, o, u, s, c, l;
                      })
                      .catch(u))
                  : (i(o).forEach(function (e) {
                      sn(n, e, o[e].primKey, o[e].indexes);
                    }),
                    en(e, n),
                    void xe
                      .follow(function () {
                        return e.on.populate.fire(a);
                      })
                      .catch(u))
              );
              var r, c;
            });
          }
          function an(e, t) {
            cn(e._dbSchema, t),
              t.db.version % 10 != 0 ||
                t.objectStoreNames.contains("$meta") ||
                t.db
                  .createObjectStore("$meta")
                  .add(Math.ceil(t.db.version / 10 - 1), "version");
            var n = fn(0, e.idbdb, t);
            dn(e, e._dbSchema, t);
            for (var r = 0, o = un(n, e._dbSchema).change; r < o.length; r++) {
              var i = (function (e) {
                if (e.change.length || e.recreate)
                  return (
                    console.warn(
                      "Unable to patch indexes of table ".concat(
                        e.name,
                        " because it has changes on the type of index or primary key."
                      )
                    ),
                    { value: void 0 }
                  );
                var n = t.objectStore(e.name);
                e.add.forEach(function (t) {
                  oe &&
                    console.debug(
                      "Dexie upgrade patch: Creating missing index "
                        .concat(e.name, ".")
                        .concat(t.src)
                    ),
                    ln(n, t);
                });
              })(o[r]);
              if ("object" == typeof i) return i.value;
            }
          }
          function un(e, t) {
            var n,
              r = { del: [], add: [], change: [] };
            for (n in e) t[n] || r.del.push(n);
            for (n in t) {
              var o = e[n],
                i = t[n];
              if (o) {
                var a = {
                  name: n,
                  def: i,
                  recreate: !1,
                  del: [],
                  add: [],
                  change: [],
                };
                if (
                  "" + (o.primKey.keyPath || "") !=
                    "" + (i.primKey.keyPath || "") ||
                  o.primKey.auto !== i.primKey.auto
                )
                  (a.recreate = !0), r.change.push(a);
                else {
                  var u = o.idxByName,
                    s = i.idxByName,
                    c = void 0;
                  for (c in u) s[c] || a.del.push(c);
                  for (c in s) {
                    var l = u[c],
                      f = s[c];
                    l ? l.src !== f.src && a.change.push(f) : a.add.push(f);
                  }
                  (0 < a.del.length ||
                    0 < a.add.length ||
                    0 < a.change.length) &&
                    r.change.push(a);
                }
              } else r.add.push([n, i]);
            }
            return r;
          }
          function sn(e, t, n, r) {
            var o = e.db.createObjectStore(
              t,
              n.keyPath
                ? { keyPath: n.keyPath, autoIncrement: n.auto }
                : { autoIncrement: n.auto }
            );
            return (
              r.forEach(function (e) {
                return ln(o, e);
              }),
              o
            );
          }
          function cn(e, t) {
            i(e).forEach(function (n) {
              t.db.objectStoreNames.contains(n) ||
                (oe && console.debug("Dexie: Creating missing table", n),
                sn(t, n, e[n].primKey, e[n].indexes));
            });
          }
          function ln(e, t) {
            e.createIndex(t.name, t.keyPath, {
              unique: t.unique,
              multiEntry: t.multi,
            });
          }
          function fn(e, t, n) {
            var r = {};
            return (
              m(t.objectStoreNames, 0).forEach(function (e) {
                for (
                  var t = n.objectStore(e),
                    o = Zt(
                      Lt((u = t.keyPath)),
                      u || "",
                      !0,
                      !1,
                      !!t.autoIncrement,
                      u && "string" != typeof u,
                      !0
                    ),
                    i = [],
                    a = 0;
                  a < t.indexNames.length;
                  ++a
                ) {
                  var u = (s = t.index(t.indexNames[a])).keyPath,
                    s = Zt(
                      s.name,
                      u,
                      !!s.unique,
                      !!s.multiEntry,
                      !1,
                      u && "string" != typeof u,
                      !1
                    );
                  i.push(s);
                }
                r[e] = Gt(e, o, i);
              }),
              r
            );
          }
          function dn(e, t, n) {
            for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
              var a = r[i],
                u = n.objectStore(a);
              e._hasGetAll = "getAll" in u;
              for (var s = 0; s < u.indexNames.length; ++s) {
                var c = u.indexNames[s],
                  l = u.index(c).keyPath,
                  f = "string" == typeof l ? l : "[" + m(l).join("+") + "]";
                !t[a] ||
                  ((l = t[a].idxByName[f]) &&
                    ((l.name = c),
                    delete t[a].idxByName[f],
                    (t[a].idxByName[c] = l)));
              }
            }
            "undefined" != typeof navigator &&
              /Safari/.test(navigator.userAgent) &&
              !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
              o.WorkerGlobalScope &&
              o instanceof o.WorkerGlobalScope &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
              (e._hasGetAll = !1);
          }
          function hn(e) {
            return e.split(",").map(function (e, t) {
              var n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
                r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
              return Zt(
                n,
                r || null,
                /\&/.test(e),
                /\*/.test(e),
                /\+\+/.test(e),
                a(r),
                0 === t
              );
            });
          }
          var pn =
            ((yn.prototype._parseStoresSpec = function (e, t) {
              i(e).forEach(function (n) {
                if (null !== e[n]) {
                  var r = hn(e[n]),
                    o = r.shift();
                  if (((o.unique = !0), o.multi))
                    throw new G.Schema("Primary key cannot be multi-valued");
                  r.forEach(function (e) {
                    if (e.auto)
                      throw new G.Schema(
                        "Only primary key can be marked as autoIncrement (++)"
                      );
                    if (!e.keyPath)
                      throw new G.Schema(
                        "Index must have a name and cannot be an empty string"
                      );
                  }),
                    (t[n] = Gt(n, o, r));
                }
              });
            }),
            (yn.prototype.stores = function (e) {
              var t = this.db;
              (this._cfg.storesSource = this._cfg.storesSource
                ? u(this._cfg.storesSource, e)
                : e),
                (e = t._versions);
              var n = {},
                r = {};
              return (
                e.forEach(function (e) {
                  u(n, e._cfg.storesSource),
                    (r = e._cfg.dbschema = {}),
                    e._parseStoresSpec(n, r);
                }),
                (t._dbSchema = r),
                nn(t, [t._allTables, t, t.Transaction.prototype]),
                tn(
                  t,
                  [t._allTables, t, t.Transaction.prototype, this._cfg.tables],
                  i(r),
                  r
                ),
                (t._storeNames = i(r)),
                this
              );
            }),
            (yn.prototype.upgrade = function (e) {
              return (
                (this._cfg.contentUpgrade = re(
                  this._cfg.contentUpgrade || X,
                  e
                )),
                this
              );
            }),
            yn);
          function yn() {}
          function vn(e, t) {
            var n = e._dbNamesDB;
            return (
              n ||
                (n = e._dbNamesDB =
                  new tr(nt, { addons: [], indexedDB: e, IDBKeyRange: t }))
                  .version(1)
                  .stores({ dbnames: "name" }),
              n.table("dbnames")
            );
          }
          function mn(e) {
            return e && "function" == typeof e.databases;
          }
          function gn(e) {
            return Ue(function () {
              return (ge.letThrough = !0), e();
            });
          }
          function bn(e) {
            return !("from" in e);
          }
          var wn = function (e, t) {
            if (!this) {
              var n = new wn();
              return e && "d" in e && u(n, e), n;
            }
            u(
              this,
              arguments.length
                ? { d: 1, from: e, to: 1 < arguments.length ? t : e }
                : { d: 0 }
            );
          };
          function _n(e, t, n) {
            var r = ct(t, n);
            if (!isNaN(r)) {
              if (0 < r) throw RangeError();
              if (bn(e)) return u(e, { from: t, to: n, d: 1 });
              var o = e.l;
              if (((r = e.r), ct(n, e.from) < 0))
                return (
                  o
                    ? _n(o, t, n)
                    : (e.l = { from: t, to: n, d: 1, l: null, r: null }),
                  On(e)
                );
              if (0 < ct(t, e.to))
                return (
                  r
                    ? _n(r, t, n)
                    : (e.r = { from: t, to: n, d: 1, l: null, r: null }),
                  On(e)
                );
              ct(t, e.from) < 0 &&
                ((e.from = t), (e.l = null), (e.d = r ? r.d + 1 : 1)),
                0 < ct(n, e.to) &&
                  ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1)),
                (n = !e.r),
                o && !e.l && xn(e, o),
                r && n && xn(e, r);
            }
          }
          function xn(e, t) {
            bn(t) ||
              (function e(t, n) {
                var r = n.from,
                  o = n.to,
                  i = n.l;
                (n = n.r), _n(t, r, o), i && e(t, i), n && e(t, n);
              })(e, t);
          }
          function kn(e, t) {
            var n = Sn(t),
              r = n.next();
            if (r.done) return !1;
            for (
              var o = r.value, i = Sn(e), a = i.next(o.from), u = a.value;
              !r.done && !a.done;

            ) {
              if (ct(u.from, o.to) <= 0 && 0 <= ct(u.to, o.from)) return !0;
              ct(o.from, u.from) < 0
                ? (o = (r = n.next(u.from)).value)
                : (u = (a = i.next(o.from)).value);
            }
            return !1;
          }
          function Sn(e) {
            var t = bn(e) ? null : { s: 0, n: e };
            return {
              next: function (e) {
                for (var n = 0 < arguments.length; t; )
                  switch (t.s) {
                    case 0:
                      if (((t.s = 1), n))
                        for (; t.n.l && ct(e, t.n.from) < 0; )
                          t = { up: t, n: t.n.l, s: 1 };
                      else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
                    case 1:
                      if (((t.s = 2), !n || ct(e, t.n.to) <= 0))
                        return { value: t.n, done: !1 };
                    case 2:
                      if (t.n.r) {
                        (t.s = 3), (t = { up: t, n: t.n.r, s: 0 });
                        continue;
                      }
                    case 3:
                      t = t.up;
                  }
                return { done: !0 };
              },
            };
          }
          function On(e) {
            var n,
              r,
              o =
                ((null === (n = e.r) || void 0 === n ? void 0 : n.d) || 0) -
                ((null === (r = e.l) || void 0 === r ? void 0 : r.d) || 0),
              i = 1 < o ? "r" : o < -1 ? "l" : "";
            i &&
              ((n = "r" == i ? "l" : "r"),
              (r = t({}, e)),
              (o = e[i]),
              (e.from = o.from),
              (e.to = o.to),
              (e[i] = o[i]),
              (r[i] = o[n]),
              ((e[n] = r).d = Pn(r))),
              (e.d = Pn(e));
          }
          function Pn(e) {
            var t = e.r;
            return (
              (e = e.l), (t ? (e ? Math.max(t.d, e.d) : t.d) : e ? e.d : 0) + 1
            );
          }
          function In(e, t) {
            return (
              i(t).forEach(function (n) {
                e[n]
                  ? xn(e[n], t[n])
                  : (e[n] = (function e(t) {
                      var n,
                        r,
                        o = {};
                      for (n in t)
                        l(t, n) &&
                          ((r = t[n]),
                          (o[n] =
                            !r || "object" != typeof r || I.has(r.constructor)
                              ? r
                              : e(r)));
                      return o;
                    })(t[n]));
              }),
              e
            );
          }
          function jn(e, t) {
            return (
              e.all ||
              t.all ||
              Object.keys(e).some(function (n) {
                return t[n] && kn(t[n], e[n]);
              })
            );
          }
          f(
            wn.prototype,
            (((R = {
              add: function (e) {
                return xn(this, e), this;
              },
              addKey: function (e) {
                return _n(this, e, e), this;
              },
              addKeys: function (e) {
                var t = this;
                return (
                  e.forEach(function (e) {
                    return _n(t, e, e);
                  }),
                  this
                );
              },
            })[T] = function () {
              return Sn(this);
            }),
            R)
          );
          var An = {},
            En = {},
            Cn = !1;
          function Tn(e) {
            In(En, e),
              Cn ||
                ((Cn = !0),
                setTimeout(function () {
                  (Cn = !1), Kn(En, !(En = {}));
                }, 0));
          }
          function Kn(e, t) {
            void 0 === t && (t = !1);
            var n = new Set();
            if (e.all)
              for (var r = 0, o = Object.values(An); r < o.length; r++)
                Dn((a = o[r]), e, n, t);
            else
              for (var i in e) {
                var a,
                  u = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
                u &&
                  ((i = u[1]),
                  (u = u[2]),
                  (a = An["idb://".concat(i, "/").concat(u)]) &&
                    Dn(a, e, n, t));
              }
            n.forEach(function (e) {
              return e();
            });
          }
          function Dn(e, t, n, r) {
            for (
              var o = [], i = 0, a = Object.entries(e.queries.query);
              i < a.length;
              i++
            ) {
              for (
                var u = a[i], s = u[0], c = [], l = 0, f = u[1];
                l < f.length;
                l++
              ) {
                var d = f[l];
                jn(t, d.obsSet)
                  ? d.subscribers.forEach(function (e) {
                      return n.add(e);
                    })
                  : r && c.push(d);
              }
              r && o.push([s, c]);
            }
            if (r)
              for (var h = 0, p = o; h < p.length; h++) {
                var y = p[h];
                (s = y[0]), (c = y[1]), (e.queries.query[s] = c);
              }
          }
          function Mn(e) {
            var t = e._state,
              n = e._deps.indexedDB;
            if (t.isBeingOpened || e.idbdb)
              return t.dbReadyPromise.then(function () {
                return t.dbOpenError ? Je(t.dbOpenError) : e;
              });
            (t.isBeingOpened = !0),
              (t.dbOpenError = null),
              (t.openComplete = !1);
            var r = t.openCanceller,
              o = Math.round(10 * e.verno),
              a = !1;
            function u() {
              if (t.openCanceller !== r)
                throw new G.DatabaseClosed("db.open() was cancelled");
            }
            function s() {
              return new xe(function (r, c) {
                if ((u(), !n)) throw new G.MissingAPI();
                var l = e.name,
                  h = t.autoSchema || !o ? n.open(l) : n.open(l, o);
                if (!h) throw new G.MissingAPI();
                (h.onerror = Nt(c)),
                  (h.onblocked = De(e._fireOnBlocked)),
                  (h.onupgradeneeded = De(function (r) {
                    var o;
                    (f = h.transaction),
                      t.autoSchema && !e._options.allowEmptyDB
                        ? ((h.onerror = Rt),
                          f.abort(),
                          h.result.close(),
                          ((o = n.deleteDatabase(l)).onsuccess = o.onerror =
                            De(function () {
                              c(
                                new G.NoSuchDatabase(
                                  "Database ".concat(l, " doesnt exist")
                                )
                              );
                            })))
                        : ((f.onerror = Nt(c)),
                          (r =
                            r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion),
                          (d = r < 1),
                          (e.idbdb = h.result),
                          a && an(e, f),
                          on(e, r / 10, f, c));
                  }, c)),
                  (h.onsuccess = De(function () {
                    f = null;
                    var n,
                      u,
                      c,
                      p,
                      y,
                      v = (e.idbdb = h.result),
                      g = m(v.objectStoreNames);
                    if (0 < g.length)
                      try {
                        var b = v.transaction(
                          1 === (p = g).length ? p[0] : p,
                          "readonly"
                        );
                        if (t.autoSchema)
                          (u = v),
                            (c = b),
                            ((n = e).verno = u.version / 10),
                            (c = n._dbSchema = fn(0, u, c)),
                            (n._storeNames = m(u.objectStoreNames, 0)),
                            tn(n, [n._allTables], i(c), c);
                        else if (
                          (dn(e, e._dbSchema, b),
                          ((y = un(fn(0, (y = e).idbdb, b), y._dbSchema)).add
                            .length ||
                            y.change.some(function (e) {
                              return e.add.length || e.change.length;
                            })) &&
                            !a)
                        )
                          return (
                            console.warn(
                              "Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."
                            ),
                            v.close(),
                            (o = v.version + 1),
                            (a = !0),
                            r(s())
                          );
                        en(e, b);
                      } catch (n) {}
                    tt.push(e),
                      (v.onversionchange = De(function (n) {
                        (t.vcFired = !0), e.on("versionchange").fire(n);
                      })),
                      (v.onclose = De(function (t) {
                        e.on("close").fire(t);
                      })),
                      d &&
                        ((y = e._deps),
                        (b = l),
                        (v = y.indexedDB),
                        (y = y.IDBKeyRange),
                        mn(v) ||
                          b === nt ||
                          vn(v, y).put({ name: b }).catch(X)),
                      r();
                  }, c));
              }).catch(function (e) {
                switch (null == e ? void 0 : e.name) {
                  case "UnknownError":
                    if (0 < t.PR1398_maxLoop)
                      return (
                        t.PR1398_maxLoop--,
                        console.warn(
                          "Dexie: Workaround for Chrome UnknownError on open()"
                        ),
                        s()
                      );
                    break;
                  case "VersionError":
                    if (0 < o) return (o = 0), s();
                }
                return xe.reject(e);
              });
            }
            var c,
              l = t.dbReadyResolve,
              f = null,
              d = !1;
            return xe
              .race([
                r,
                ("undefined" == typeof navigator
                  ? xe.resolve()
                  : !navigator.userAgentData &&
                    /Safari\//.test(navigator.userAgent) &&
                    !/Chrom(e|ium)\//.test(navigator.userAgent) &&
                    indexedDB.databases
                  ? new Promise(function (e) {
                      function t() {
                        return indexedDB.databases().finally(e);
                      }
                      (c = setInterval(t, 100)), t();
                    }).finally(function () {
                      return clearInterval(c);
                    })
                  : Promise.resolve()
                ).then(s),
              ])
              .then(function () {
                return (
                  u(),
                  (t.onReadyBeingFired = []),
                  xe
                    .resolve(
                      gn(function () {
                        return e.on.ready.fire(e.vip);
                      })
                    )
                    .then(function n() {
                      if (0 < t.onReadyBeingFired.length) {
                        var r = t.onReadyBeingFired.reduce(re, X);
                        return (
                          (t.onReadyBeingFired = []),
                          xe
                            .resolve(
                              gn(function () {
                                return r(e.vip);
                              })
                            )
                            .then(n)
                        );
                      }
                    })
                );
              })
              .finally(function () {
                t.openCanceller === r &&
                  ((t.onReadyBeingFired = null), (t.isBeingOpened = !1));
              })
              .catch(function (n) {
                t.dbOpenError = n;
                try {
                  f && f.abort();
                } catch (n) {}
                return r === t.openCanceller && e._close(), Je(n);
              })
              .finally(function () {
                (t.openComplete = !0), l();
              })
              .then(function () {
                var t;
                return (
                  d &&
                    ((t = {}),
                    e.tables.forEach(function (n) {
                      n.schema.indexes.forEach(function (r) {
                        r.name &&
                          (t[
                            "idb://"
                              .concat(e.name, "/")
                              .concat(n.name, "/")
                              .concat(r.name)
                          ] = new wn(-1 / 0, [[[]]]));
                      }),
                        (t["idb://".concat(e.name, "/").concat(n.name, "/")] =
                          t[
                            "idb://"
                              .concat(e.name, "/")
                              .concat(n.name, "/:dels")
                          ] =
                            new wn(-1 / 0, [[[]]]));
                    }),
                    Ut(qt).fire(t),
                    Kn(t, !0)),
                  e
                );
              });
          }
          function Bn(e) {
            function t(t) {
              return e.next(t);
            }
            var n = o(t),
              r = o(function (t) {
                return e.throw(t);
              });
            function o(e) {
              return function (t) {
                var o = e(t);
                return (
                  (t = o.value),
                  o.done
                    ? t
                    : t && "function" == typeof t.then
                    ? t.then(n, r)
                    : a(t)
                    ? Promise.all(t).then(n, r)
                    : n(t)
                );
              };
            }
            return o(t)();
          }
          function Nn(e, t, n) {
            for (var r = a(e) ? e.slice() : [e], o = 0; o < n; ++o) r.push(t);
            return r;
          }
          var Rn = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function (e) {
              return t(t({}, e), {
                table: function (n) {
                  var r = e.table(n),
                    o = r.schema,
                    i = {},
                    a = [];
                  function u(e, n, r) {
                    var o = Jt(e),
                      s = (i[o] = i[o] || []),
                      c = null == e ? 0 : "string" == typeof e ? 1 : e.length,
                      l = 0 < n;
                    return (
                      (l = t(t({}, r), {
                        name: l
                          ? "".concat(o, "(virtual-from:").concat(r.name, ")")
                          : r.name,
                        lowLevelIndex: r,
                        isVirtual: l,
                        keyTail: n,
                        keyLength: c,
                        extractKey: $t(e),
                        unique: !l && r.unique,
                      })),
                      s.push(l),
                      l.isPrimaryKey || a.push(l),
                      1 < c && u(2 === c ? e[0] : e.slice(0, c - 1), n + 1, r),
                      s.sort(function (e, t) {
                        return e.keyTail - t.keyTail;
                      }),
                      l
                    );
                  }
                  (n = u(o.primaryKey.keyPath, 0, o.primaryKey)),
                    (i[":id"] = [n]);
                  for (var s = 0, c = o.indexes; s < c.length; s++) {
                    var l = c[s];
                    u(l.keyPath, 0, l);
                  }
                  function f(n) {
                    var r,
                      o = n.query.index;
                    return o.isVirtual
                      ? t(t({}, n), {
                          query: {
                            index: o.lowLevelIndex,
                            range:
                              ((r = n.query.range),
                              (o = o.keyTail),
                              {
                                type: 1 === r.type ? 2 : r.type,
                                lower: Nn(
                                  r.lower,
                                  r.lowerOpen ? e.MAX_KEY : e.MIN_KEY,
                                  o
                                ),
                                lowerOpen: !0,
                                upper: Nn(
                                  r.upper,
                                  r.upperOpen ? e.MIN_KEY : e.MAX_KEY,
                                  o
                                ),
                                upperOpen: !0,
                              }),
                          },
                        })
                      : n;
                  }
                  return t(t({}, r), {
                    schema: t(t({}, o), {
                      primaryKey: n,
                      indexes: a,
                      getIndexByKeyPath: function (e) {
                        return (e = i[Jt(e)]) && e[0];
                      },
                    }),
                    count: function (e) {
                      return r.count(f(e));
                    },
                    query: function (e) {
                      return r.query(f(e));
                    },
                    openCursor: function (t) {
                      var n = t.query.index,
                        o = n.keyTail,
                        i = n.isVirtual,
                        a = n.keyLength;
                      return i
                        ? r.openCursor(f(t)).then(function (e) {
                            return e && u(e);
                          })
                        : r.openCursor(t);
                      function u(n) {
                        return Object.create(n, {
                          continue: {
                            value: function (r) {
                              null != r
                                ? n.continue(
                                    Nn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, o)
                                  )
                                : t.unique
                                ? n.continue(
                                    n.key
                                      .slice(0, a)
                                      .concat(
                                        t.reverse ? e.MIN_KEY : e.MAX_KEY,
                                        o
                                      )
                                  )
                                : n.continue();
                            },
                          },
                          continuePrimaryKey: {
                            value: function (t, r) {
                              n.continuePrimaryKey(Nn(t, e.MAX_KEY, o), r);
                            },
                          },
                          primaryKey: {
                            get: function () {
                              return n.primaryKey;
                            },
                          },
                          key: {
                            get: function () {
                              var e = n.key;
                              return 1 === a ? e[0] : e.slice(0, a);
                            },
                          },
                          value: {
                            get: function () {
                              return n.value;
                            },
                          },
                        });
                      }
                    },
                  });
                },
              });
            },
          };
          function qn(e, t, n, r) {
            return (
              (n = n || {}),
              (r = r || ""),
              i(e).forEach(function (o) {
                var i, a, u;
                l(t, o)
                  ? ((i = e[o]),
                    (a = t[o]),
                    "object" == typeof i && "object" == typeof a && i && a
                      ? (u = C(i)) !== C(a)
                        ? (n[r + o] = t[o])
                        : "Object" === u
                        ? qn(i, a, n, r + o + ".")
                        : i !== a && (n[r + o] = t[o])
                      : i !== a && (n[r + o] = t[o]))
                  : (n[r + o] = void 0);
              }),
              i(t).forEach(function (o) {
                l(e, o) || (n[r + o] = t[o]);
              }),
              n
            );
          }
          function Fn(e, t) {
            return "delete" === t.type
              ? t.keys
              : t.keys || t.values.map(e.extractKey);
          }
          var Un = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: function (e) {
              return t(t({}, e), {
                table: function (n) {
                  var o = e.table(n),
                    i = o.schema.primaryKey;
                  return t(t({}, o), {
                    mutate: function (e) {
                      var a = ge.trans,
                        u = a.table(n).hook,
                        s = u.deleting,
                        c = u.creating,
                        f = u.updating;
                      switch (e.type) {
                        case "add":
                          if (c.fire === X) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return d(e);
                            },
                            !0
                          );
                        case "put":
                          if (c.fire === X && f.fire === X) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return d(e);
                            },
                            !0
                          );
                        case "delete":
                          if (s.fire === X) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return d(e);
                            },
                            !0
                          );
                        case "deleteRange":
                          if (s.fire === X) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return (function e(n, r, a) {
                                return o
                                  .query({
                                    trans: n,
                                    values: !1,
                                    query: { index: i, range: r },
                                    limit: a,
                                  })
                                  .then(function (o) {
                                    var i = o.result;
                                    return d({
                                      type: "delete",
                                      keys: i,
                                      trans: n,
                                    }).then(function (o) {
                                      return 0 < o.numFailures
                                        ? Promise.reject(o.failures[0])
                                        : i.length < a
                                        ? {
                                            failures: [],
                                            numFailures: 0,
                                            lastResult: void 0,
                                          }
                                        : e(
                                            n,
                                            t(t({}, r), {
                                              lower: i[i.length - 1],
                                              lowerOpen: !0,
                                            }),
                                            a
                                          );
                                    });
                                  });
                              })(e.trans, e.range, 1e4);
                            },
                            !0
                          );
                      }
                      return o.mutate(e);
                      function d(e) {
                        var n,
                          a,
                          u,
                          d = ge.trans,
                          h = e.keys || Fn(i, e);
                        if (!h) throw new Error("Keys missing");
                        return (
                          "delete" !==
                            (e =
                              "add" === e.type || "put" === e.type
                                ? t(t({}, e), { keys: h })
                                : t({}, e)).type &&
                            (e.values = r([], e.values, !0)),
                          e.keys && (e.keys = r([], e.keys, !0)),
                          (n = o),
                          (u = h),
                          ("add" === (a = e).type
                            ? Promise.resolve([])
                            : n.getMany({
                                trans: a.trans,
                                keys: u,
                                cache: "immutable",
                              })
                          ).then(function (t) {
                            var n = h.map(function (n, r) {
                              var o,
                                a,
                                u,
                                h = t[r],
                                p = { onerror: null, onsuccess: null };
                              return (
                                "delete" === e.type
                                  ? s.fire.call(p, n, h, d)
                                  : "add" === e.type || void 0 === h
                                  ? ((o = c.fire.call(p, n, e.values[r], d)),
                                    null == n &&
                                      null != o &&
                                      ((e.keys[r] = n = o),
                                      i.outbound ||
                                        x(e.values[r], i.keyPath, n)))
                                  : ((o = qn(h, e.values[r])),
                                    (a = f.fire.call(p, o, n, h, d)) &&
                                      ((u = e.values[r]),
                                      Object.keys(a).forEach(function (e) {
                                        l(u, e) ? (u[e] = a[e]) : x(u, e, a[e]);
                                      }))),
                                p
                              );
                            });
                            return o
                              .mutate(e)
                              .then(function (r) {
                                for (
                                  var o = r.failures,
                                    i = r.results,
                                    a = r.numFailures,
                                    u = ((r = r.lastResult), 0);
                                  u < h.length;
                                  ++u
                                ) {
                                  var s = (i || h)[u],
                                    c = n[u];
                                  null == s
                                    ? c.onerror && c.onerror(o[u])
                                    : c.onsuccess &&
                                      c.onsuccess(
                                        "put" === e.type && t[u]
                                          ? e.values[u]
                                          : s
                                      );
                                }
                                return {
                                  failures: o,
                                  results: i,
                                  numFailures: a,
                                  lastResult: r,
                                };
                              })
                              .catch(function (e) {
                                return (
                                  n.forEach(function (t) {
                                    return t.onerror && t.onerror(e);
                                  }),
                                  Promise.reject(e)
                                );
                              });
                          })
                        );
                      }
                    },
                  });
                },
              });
            },
          };
          function Vn(e, t, n) {
            try {
              if (!t) return null;
              if (t.keys.length < e.length) return null;
              for (
                var r = [], o = 0, i = 0;
                o < t.keys.length && i < e.length;
                ++o
              )
                0 === ct(t.keys[o], e[i]) &&
                  (r.push(n ? A(t.values[o]) : t.values[o]), ++i);
              return r.length === e.length ? r : null;
            } catch (e) {
              return null;
            }
          }
          var zn = {
            stack: "dbcore",
            level: -1,
            create: function (e) {
              return {
                table: function (n) {
                  var r = e.table(n);
                  return t(t({}, r), {
                    getMany: function (e) {
                      if (!e.cache) return r.getMany(e);
                      var t = Vn(e.keys, e.trans._cache, "clone" === e.cache);
                      return t
                        ? xe.resolve(t)
                        : r.getMany(e).then(function (t) {
                            return (
                              (e.trans._cache = {
                                keys: e.keys,
                                values: "clone" === e.cache ? A(t) : t,
                              }),
                              t
                            );
                          });
                    },
                    mutate: function (e) {
                      return (
                        "add" !== e.type && (e.trans._cache = null), r.mutate(e)
                      );
                    },
                  });
                },
              };
            },
          };
          function Zn(e, t) {
            return (
              "readonly" === e.trans.mode &&
              !!e.subscr &&
              !e.trans.explicit &&
              "disabled" !== e.trans.db._options.cache &&
              !t.schema.primaryKey.outbound
            );
          }
          function Ln(e, t) {
            switch (e) {
              case "query":
                return t.values && !t.unique;
              case "get":
              case "getMany":
              case "count":
              case "openCursor":
                return !1;
            }
          }
          var Gn = {
            stack: "dbcore",
            level: 0,
            name: "Observability",
            create: function (e) {
              var n = e.schema.name,
                r = new wn(e.MIN_KEY, e.MAX_KEY);
              return t(t({}, e), {
                transaction: function (t, n, r) {
                  if (ge.subscr && "readonly" !== n)
                    throw new G.ReadOnly(
                      "Readwrite transaction in liveQuery context. Querier source: ".concat(
                        ge.querier
                      )
                    );
                  return e.transaction(t, n, r);
                },
                table: function (o) {
                  function u(t) {
                    t = (n = t.query).index;
                    var n = n.range;
                    return [
                      t,
                      new wn(
                        null !== (t = n.lower) && void 0 !== t ? t : e.MIN_KEY,
                        null !== (n = n.upper) && void 0 !== n ? n : e.MAX_KEY
                      ),
                    ];
                  }
                  var s = e.table(o),
                    c = s.schema,
                    l = c.primaryKey,
                    f = l.extractKey,
                    d = l.outbound,
                    h = t(t({}, s), {
                      mutate: function (e) {
                        function t(e) {
                          return (
                            (e = "idb://"
                              .concat(n, "/")
                              .concat(o, "/")
                              .concat(e)),
                            h[e] || (h[e] = new wn())
                          );
                        }
                        var i,
                          u,
                          f,
                          d = e.trans,
                          h = e.mutatedParts || (e.mutatedParts = {}),
                          p = t(""),
                          y = t(":dels"),
                          v = e.type,
                          m =
                            "deleteRange" === e.type
                              ? [e.range]
                              : "delete" === e.type
                              ? [e.keys]
                              : e.values.length < 50
                              ? [
                                  Fn(l, e).filter(function (e) {
                                    return e;
                                  }),
                                  e.values,
                                ]
                              : [],
                          g = m[0],
                          b = m[1];
                        return (
                          (m = e.trans._cache),
                          a(g)
                            ? (p.addKeys(g),
                              (m =
                                "delete" === v || g.length === b.length
                                  ? Vn(g, m)
                                  : null) || y.addKeys(g),
                              (m || b) &&
                                ((i = t),
                                (u = m),
                                (f = b),
                                c.indexes.forEach(function (e) {
                                  var t = i(e.name || "");
                                  function n(t) {
                                    return null != t ? e.extractKey(t) : null;
                                  }
                                  function r(n) {
                                    return e.multiEntry && a(n)
                                      ? n.forEach(function (e) {
                                          return t.addKey(e);
                                        })
                                      : t.addKey(n);
                                  }
                                  (u || f).forEach(function (e, t) {
                                    var o = u && n(u[t]);
                                    0 !== ct(o, (t = f && n(f[t]))) &&
                                      (null != o && r(o), null != t && r(t));
                                  });
                                })))
                            : g
                            ? ((b = { from: g.lower, to: g.upper }),
                              y.add(b),
                              p.add(b))
                            : (p.add(r),
                              y.add(r),
                              c.indexes.forEach(function (e) {
                                return t(e.name).add(r);
                              })),
                          s.mutate(e).then(function (t) {
                            return (
                              !g ||
                                ("add" !== e.type && "put" !== e.type) ||
                                p.addKeys(t.results),
                              (d.mutatedParts = In(d.mutatedParts || {}, h)),
                              t
                            );
                          })
                        );
                      },
                    }),
                    p = {
                      get: function (e) {
                        return [l, new wn(e.key)];
                      },
                      getMany: function (e) {
                        return [l, new wn().addKeys(e.keys)];
                      },
                      count: u,
                      query: u,
                      openCursor: u,
                    };
                  return (
                    i(p).forEach(function (e) {
                      h[e] = function (i) {
                        var a = !!(y = ge.subscr),
                          u = Zn(ge, s) && Ln(e, i) ? (i.obsSet = {}) : y;
                        if (a) {
                          var c = function (e) {
                              return (
                                (e = "idb://"
                                  .concat(n, "/")
                                  .concat(o, "/")
                                  .concat(e)),
                                u[e] || (u[e] = new wn())
                              );
                            },
                            l = c(""),
                            h = c(":dels"),
                            y = ((a = (y = p[e](i))[0]), y[1]);
                          if (
                            (("query" === e && a.isPrimaryKey && !i.values
                              ? h
                              : c(a.name || "")
                            ).add(y),
                            !a.isPrimaryKey)
                          ) {
                            if ("count" !== e) {
                              var v =
                                "query" === e &&
                                d &&
                                i.values &&
                                s.query(t(t({}, i), { values: !1 }));
                              return s[e]
                                .apply(this, arguments)
                                .then(function (t) {
                                  if ("query" === e) {
                                    if (d && i.values)
                                      return v.then(function (e) {
                                        return (e = e.result), l.addKeys(e), t;
                                      });
                                    var n = i.values
                                      ? t.result.map(f)
                                      : t.result;
                                    (i.values ? l : h).addKeys(n);
                                  } else if ("openCursor" === e) {
                                    var r = t,
                                      o = i.values;
                                    return (
                                      r &&
                                      Object.create(r, {
                                        key: {
                                          get: function () {
                                            return (
                                              h.addKey(r.primaryKey), r.key
                                            );
                                          },
                                        },
                                        primaryKey: {
                                          get: function () {
                                            var e = r.primaryKey;
                                            return h.addKey(e), e;
                                          },
                                        },
                                        value: {
                                          get: function () {
                                            return (
                                              o && l.addKey(r.primaryKey),
                                              r.value
                                            );
                                          },
                                        },
                                      })
                                    );
                                  }
                                  return t;
                                });
                            }
                            h.add(r);
                          }
                        }
                        return s[e].apply(this, arguments);
                      };
                    }),
                    h
                  );
                },
              });
            },
          };
          function Wn(e, n, r) {
            if (0 === r.numFailures) return n;
            if ("deleteRange" === n.type) return null;
            var o = n.keys
              ? n.keys.length
              : "values" in n && n.values
              ? n.values.length
              : 1;
            return r.numFailures === o
              ? null
              : ((n = t({}, n)),
                a(n.keys) &&
                  (n.keys = n.keys.filter(function (e, t) {
                    return !(t in r.failures);
                  })),
                "values" in n &&
                  a(n.values) &&
                  (n.values = n.values.filter(function (e, t) {
                    return !(t in r.failures);
                  })),
                n);
          }
          function $n(e, t) {
            return (
              (n = e),
              (void 0 === (r = t).lower ||
                (r.lowerOpen ? 0 < ct(n, r.lower) : 0 <= ct(n, r.lower))) &&
                (void 0 === t.upper ||
                  (t.upperOpen ? ct(e, t.upper) < 0 : ct(e, t.upper) <= 0))
            );
            var n, r;
          }
          function Xn(e, t, n, r, o, i) {
            if (!n || 0 === n.length) return e;
            var u = t.query.index,
              s = u.multiEntry,
              c = t.query.range,
              l = r.schema.primaryKey.extractKey,
              f = u.extractKey,
              d = (u.lowLevelIndex || u).extractKey;
            return (
              (n = n.reduce(function (e, n) {
                var r = e,
                  o =
                    "add" === n.type || "put" === n.type
                      ? n.values
                          .filter(function (e) {
                            return (
                              (e = f(e)),
                              s && a(e)
                                ? e.some(function (e) {
                                    return $n(e, c);
                                  })
                                : $n(e, c)
                            );
                          })
                          .map(function (e) {
                            return (e = A(e)), i && Object.freeze(e), e;
                          })
                      : [];
                switch (n.type) {
                  case "add":
                    r = e.concat(
                      t.values
                        ? o
                        : o.map(function (e) {
                            return l(e);
                          })
                    );
                    break;
                  case "put":
                    var u = new wn().addKeys(
                      n.values.map(function (e) {
                        return l(e);
                      })
                    );
                    r = e
                      .filter(function (e) {
                        return (e = t.values ? l(e) : e), !kn(new wn(e), u);
                      })
                      .concat(
                        t.values
                          ? o
                          : o.map(function (e) {
                              return l(e);
                            })
                      );
                    break;
                  case "delete":
                    var d = new wn().addKeys(n.keys);
                    r = e.filter(function (e) {
                      return (e = t.values ? l(e) : e), !kn(new wn(e), d);
                    });
                    break;
                  case "deleteRange":
                    var h = n.range;
                    r = e.filter(function (e) {
                      return !$n(l(e), h);
                    });
                }
                return r;
              }, e)),
              n === e
                ? e
                : (n.sort(function (e, t) {
                    return ct(d(e), d(t)) || ct(l(e), l(t));
                  }),
                  t.limit &&
                    t.limit < 1 / 0 &&
                    (n.length > t.limit
                      ? (n.length = t.limit)
                      : e.length === t.limit &&
                        n.length < t.limit &&
                        (o.dirty = !0)),
                  i ? Object.freeze(n) : n)
            );
          }
          function Yn(e, t) {
            return (
              0 === ct(e.lower, t.lower) &&
              0 === ct(e.upper, t.upper) &&
              !!e.lowerOpen == !!t.lowerOpen &&
              !!e.upperOpen == !!t.upperOpen
            );
          }
          function Jn(e, t) {
            return (
              (function (e, t, n, r) {
                if (void 0 === e) return void 0 !== t ? -1 : 0;
                if (void 0 === t) return 1;
                if (0 === (t = ct(e, t))) {
                  if (n && r) return 0;
                  if (n) return 1;
                  if (r) return -1;
                }
                return t;
              })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 &&
              0 <=
                (function (e, t, n, r) {
                  if (void 0 === e) return void 0 !== t ? 1 : 0;
                  if (void 0 === t) return -1;
                  if (0 === (t = ct(e, t))) {
                    if (n && r) return 0;
                    if (n) return -1;
                    if (r) return 1;
                  }
                  return t;
                })(e.upper, t.upper, e.upperOpen, t.upperOpen)
            );
          }
          function Hn(e, t, n, r) {
            e.subscribers.add(n),
              r.addEventListener("abort", function () {
                var r, o;
                e.subscribers.delete(n),
                  0 === e.subscribers.size &&
                    ((r = e),
                    (o = t),
                    setTimeout(function () {
                      0 === r.subscribers.size && D(o, r);
                    }, 3e3));
              });
          }
          var Qn = {
            stack: "dbcore",
            level: 0,
            name: "Cache",
            create: function (e) {
              var n = e.schema.name;
              return t(t({}, e), {
                transaction: function (t, r, o) {
                  var i,
                    a,
                    u = e.transaction(t, r, o);
                  return (
                    "readwrite" === r &&
                      ((a = (i = new AbortController()).signal),
                      (o = function (o) {
                        return function () {
                          if ((i.abort(), "readwrite" === r)) {
                            for (
                              var a = new Set(), s = 0, c = t;
                              s < c.length;
                              s++
                            ) {
                              var l = c[s],
                                f = An["idb://".concat(n, "/").concat(l)];
                              if (f) {
                                var d = e.table(l),
                                  h = f.optimisticOps.filter(function (e) {
                                    return e.trans === u;
                                  });
                                if (u._explicit && o && u.mutatedParts)
                                  for (
                                    var p = 0,
                                      y = Object.values(f.queries.query);
                                    p < y.length;
                                    p++
                                  )
                                    for (
                                      var v = 0, m = (w = y[p]).slice();
                                      v < m.length;
                                      v++
                                    )
                                      jn((_ = m[v]).obsSet, u.mutatedParts) &&
                                        (D(w, _),
                                        _.subscribers.forEach(function (e) {
                                          return a.add(e);
                                        }));
                                else if (0 < h.length) {
                                  f.optimisticOps = f.optimisticOps.filter(
                                    function (e) {
                                      return e.trans !== u;
                                    }
                                  );
                                  for (
                                    var g = 0,
                                      b = Object.values(f.queries.query);
                                    g < b.length;
                                    g++
                                  )
                                    for (
                                      var w,
                                        _,
                                        x,
                                        k = 0,
                                        S = (w = b[g]).slice();
                                      k < S.length;
                                      k++
                                    )
                                      null != (_ = S[k]).res &&
                                        u.mutatedParts &&
                                        (o && !_.dirty
                                          ? ((x = Object.isFrozen(_.res)),
                                            (x = Xn(_.res, _.req, h, d, _, x)),
                                            _.dirty
                                              ? (D(w, _),
                                                _.subscribers.forEach(function (
                                                  e
                                                ) {
                                                  return a.add(e);
                                                }))
                                              : x !== _.res &&
                                                ((_.res = x),
                                                (_.promise = xe.resolve({
                                                  result: x,
                                                }))))
                                          : (_.dirty && D(w, _),
                                            _.subscribers.forEach(function (e) {
                                              return a.add(e);
                                            })));
                                }
                              }
                            }
                            a.forEach(function (e) {
                              return e();
                            });
                          }
                        };
                      }),
                      u.addEventListener("abort", o(!1), { signal: a }),
                      u.addEventListener("error", o(!1), { signal: a }),
                      u.addEventListener("complete", o(!0), { signal: a })),
                    u
                  );
                },
                table: function (r) {
                  var o = e.table(r),
                    i = o.schema.primaryKey;
                  return t(t({}, o), {
                    mutate: function (e) {
                      var a = ge.trans;
                      if (
                        i.outbound ||
                        "disabled" === a.db._options.cache ||
                        a.explicit
                      )
                        return o.mutate(e);
                      var u = An["idb://".concat(n, "/").concat(r)];
                      return u
                        ? ((a = o.mutate(e)),
                          ("add" !== e.type && "put" !== e.type) ||
                          !(
                            50 <= e.values.length ||
                            Fn(i, e).some(function (e) {
                              return null == e;
                            })
                          )
                            ? (u.optimisticOps.push(e),
                              e.mutatedParts && Tn(e.mutatedParts),
                              a.then(function (t) {
                                0 < t.numFailures &&
                                  (D(u.optimisticOps, e),
                                  (t = Wn(0, e, t)) && u.optimisticOps.push(t),
                                  e.mutatedParts && Tn(e.mutatedParts));
                              }),
                              a.catch(function () {
                                D(u.optimisticOps, e),
                                  e.mutatedParts && Tn(e.mutatedParts);
                              }))
                            : a.then(function (n) {
                                var r = Wn(
                                  0,
                                  t(t({}, e), {
                                    values: e.values.map(function (e, r) {
                                      var o;
                                      return (
                                        x(
                                          (e =
                                            null !== (o = i.keyPath) &&
                                            void 0 !== o &&
                                            o.includes(".")
                                              ? A(e)
                                              : t({}, e)),
                                          i.keyPath,
                                          n.results[r]
                                        ),
                                        e
                                      );
                                    }),
                                  }),
                                  n
                                );
                                u.optimisticOps.push(r),
                                  queueMicrotask(function () {
                                    return e.mutatedParts && Tn(e.mutatedParts);
                                  });
                              }),
                          a)
                        : o.mutate(e);
                    },
                    query: function (e) {
                      if (!Zn(ge, o) || !Ln("query", e)) return o.query(e);
                      var t =
                          "immutable" ===
                          (null === (u = ge.trans) || void 0 === u
                            ? void 0
                            : u.db._options.cache),
                        i = (c = ge).requery,
                        a = c.signal,
                        u = (function (e, t, n, r) {
                          var o = An["idb://".concat(e, "/").concat(t)];
                          if (!o) return [];
                          if (!(t = o.queries[n])) return [null, !1, o, null];
                          var i =
                            t[(r.query ? r.query.index.name : null) || ""];
                          if (!i) return [null, !1, o, null];
                          switch (n) {
                            case "query":
                              var a = i.find(function (e) {
                                return (
                                  e.req.limit === r.limit &&
                                  e.req.values === r.values &&
                                  Yn(e.req.query.range, r.query.range)
                                );
                              });
                              return a
                                ? [a, !0, o, i]
                                : [
                                    i.find(function (e) {
                                      return (
                                        ("limit" in e.req
                                          ? e.req.limit
                                          : 1 / 0) >= r.limit &&
                                        (!r.values || e.req.values) &&
                                        Jn(e.req.query.range, r.query.range)
                                      );
                                    }),
                                    !1,
                                    o,
                                    i,
                                  ];
                            case "count":
                              return (
                                (a = i.find(function (e) {
                                  return Yn(e.req.query.range, r.query.range);
                                })),
                                [a, !!a, o, i]
                              );
                          }
                        })(n, r, "query", e),
                        s = u[0],
                        c = u[1],
                        l = u[2],
                        f = u[3];
                      return (
                        s && c
                          ? (s.obsSet = e.obsSet)
                          : ((c = o
                              .query(e)
                              .then(function (e) {
                                var n = e.result;
                                if ((s && (s.res = n), t)) {
                                  for (var r = 0, o = n.length; r < o; ++r)
                                    Object.freeze(n[r]);
                                  Object.freeze(n);
                                } else e.result = A(n);
                                return e;
                              })
                              .catch(function (e) {
                                return f && s && D(f, s), Promise.reject(e);
                              })),
                            (s = {
                              obsSet: e.obsSet,
                              promise: c,
                              subscribers: new Set(),
                              type: "query",
                              req: e,
                              dirty: !1,
                            }),
                            f
                              ? f.push(s)
                              : ((f = [s]),
                                ((l =
                                  l ||
                                  (An["idb://".concat(n, "/").concat(r)] = {
                                    queries: { query: {}, count: {} },
                                    objs: new Map(),
                                    optimisticOps: [],
                                    unsignaledParts: {},
                                  })).queries.query[e.query.index.name || ""] =
                                  f))),
                        Hn(s, f, i, a),
                        s.promise.then(function (n) {
                          return {
                            result: Xn(
                              n.result,
                              e,
                              null == l ? void 0 : l.optimisticOps,
                              o,
                              s,
                              t
                            ),
                          };
                        })
                      );
                    },
                  });
                },
              });
            },
          };
          function er(e, t) {
            return new Proxy(e, {
              get: function (e, n, r) {
                return "db" === n ? t : Reflect.get(e, n, r);
              },
            });
          }
          var tr =
            ((nr.prototype.version = function (e) {
              if (isNaN(e) || e < 0.1)
                throw new G.Type("Given version is not a positive number");
              if (
                ((e = Math.round(10 * e) / 10),
                this.idbdb || this._state.isBeingOpened)
              )
                throw new G.Schema("Cannot add version when database is open");
              this.verno = Math.max(this.verno, e);
              var t = this._versions,
                n = t.filter(function (t) {
                  return t._cfg.version === e;
                })[0];
              return (
                n ||
                ((n = new this.Version(e)),
                t.push(n),
                t.sort(rn),
                n.stores({}),
                (this._state.autoSchema = !1),
                n)
              );
            }),
            (nr.prototype._whenReady = function (e) {
              var t = this;
              return this.idbdb &&
                (this._state.openComplete || ge.letThrough || this._vip)
                ? e()
                : new xe(function (e, n) {
                    if (t._state.openComplete)
                      return n(new G.DatabaseClosed(t._state.dbOpenError));
                    if (!t._state.isBeingOpened) {
                      if (!t._state.autoOpen)
                        return void n(new G.DatabaseClosed());
                      t.open().catch(X);
                    }
                    t._state.dbReadyPromise.then(e, n);
                  }).then(e);
            }),
            (nr.prototype.use = function (e) {
              var t = e.stack,
                n = e.create,
                r = e.level,
                o = e.name;
              return (
                o && this.unuse({ stack: t, name: o }),
                (e = this._middlewares[t] || (this._middlewares[t] = [])).push({
                  stack: t,
                  create: n,
                  level: r ?? 10,
                  name: o,
                }),
                e.sort(function (e, t) {
                  return e.level - t.level;
                }),
                this
              );
            }),
            (nr.prototype.unuse = function (e) {
              var t = e.stack,
                n = e.name,
                r = e.create;
              return (
                t &&
                  this._middlewares[t] &&
                  (this._middlewares[t] = this._middlewares[t].filter(function (
                    e
                  ) {
                    return r ? e.create !== r : !!n && e.name !== n;
                  })),
                this
              );
            }),
            (nr.prototype.open = function () {
              var e = this;
              return $e(me, function () {
                return Mn(e);
              });
            }),
            (nr.prototype._close = function () {
              var e = this._state,
                t = tt.indexOf(this);
              if ((0 <= t && tt.splice(t, 1), this.idbdb)) {
                try {
                  this.idbdb.close();
                } catch (t) {}
                this.idbdb = null;
              }
              e.isBeingOpened ||
                ((e.dbReadyPromise = new xe(function (t) {
                  e.dbReadyResolve = t;
                })),
                (e.openCanceller = new xe(function (t, n) {
                  e.cancelOpen = n;
                })));
            }),
            (nr.prototype.close = function (e) {
              var t = (void 0 === e ? { disableAutoOpen: !0 } : e)
                .disableAutoOpen;
              (e = this._state),
                t
                  ? (e.isBeingOpened && e.cancelOpen(new G.DatabaseClosed()),
                    this._close(),
                    (e.autoOpen = !1),
                    (e.dbOpenError = new G.DatabaseClosed()))
                  : (this._close(),
                    (e.autoOpen = this._options.autoOpen || e.isBeingOpened),
                    (e.openComplete = !1),
                    (e.dbOpenError = null));
            }),
            (nr.prototype.delete = function (e) {
              var t = this;
              void 0 === e && (e = { disableAutoOpen: !0 });
              var n = 0 < arguments.length && "object" != typeof arguments[0],
                r = this._state;
              return new xe(function (o, i) {
                function a() {
                  t.close(e);
                  var n = t._deps.indexedDB.deleteDatabase(t.name);
                  (n.onsuccess = De(function () {
                    var e, n, r;
                    (e = t._deps),
                      (n = t.name),
                      (r = e.indexedDB),
                      (e = e.IDBKeyRange),
                      mn(r) || n === nt || vn(r, e).delete(n).catch(X),
                      o();
                  })),
                    (n.onerror = Nt(i)),
                    (n.onblocked = t._fireOnBlocked);
                }
                if (n)
                  throw new G.InvalidArgument(
                    "Invalid closeOptions argument to db.delete()"
                  );
                r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
              });
            }),
            (nr.prototype.backendDB = function () {
              return this.idbdb;
            }),
            (nr.prototype.isOpen = function () {
              return null !== this.idbdb;
            }),
            (nr.prototype.hasBeenClosed = function () {
              var e = this._state.dbOpenError;
              return e && "DatabaseClosed" === e.name;
            }),
            (nr.prototype.hasFailed = function () {
              return null !== this._state.dbOpenError;
            }),
            (nr.prototype.dynamicallyOpened = function () {
              return this._state.autoSchema;
            }),
            Object.defineProperty(nr.prototype, "tables", {
              get: function () {
                var e = this;
                return i(this._allTables).map(function (t) {
                  return e._allTables[t];
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            (nr.prototype.transaction = function () {
              var e = function (e, t, n) {
                var r = arguments.length;
                if (r < 2) throw new G.InvalidArgument("Too few arguments");
                for (var o = new Array(r - 1); --r; ) o[r - 1] = arguments[r];
                return (n = o.pop()), [e, O(o), n];
              }.apply(this, arguments);
              return this._transaction.apply(this, e);
            }),
            (nr.prototype._transaction = function (e, t, n) {
              var r = this,
                o = ge.trans;
              (o && o.db === this && -1 === e.indexOf("!")) || (o = null);
              var i,
                a,
                u = -1 !== e.indexOf("?");
              e = e.replace("!", "").replace("?", "");
              try {
                if (
                  ((a = t.map(function (e) {
                    if (
                      "string" != typeof (e = e instanceof r.Table ? e.name : e)
                    )
                      throw new TypeError(
                        "Invalid table argument to Dexie.transaction(). Only Table or String are allowed"
                      );
                    return e;
                  })),
                  "r" == e || e === rt)
                )
                  i = rt;
                else {
                  if ("rw" != e && e != ot)
                    throw new G.InvalidArgument(
                      "Invalid transaction mode: " + e
                    );
                  i = ot;
                }
                if (o) {
                  if (o.mode === rt && i === ot) {
                    if (!u)
                      throw new G.SubTransaction(
                        "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY"
                      );
                    o = null;
                  }
                  o &&
                    a.forEach(function (e) {
                      if (o && -1 === o.storeNames.indexOf(e)) {
                        if (!u)
                          throw new G.SubTransaction(
                            "Table " +
                              e +
                              " not included in parent transaction."
                          );
                        o = null;
                      }
                    }),
                    u && o && !o.active && (o = null);
                }
              } catch (n) {
                return o
                  ? o._promise(null, function (e, t) {
                      t(n);
                    })
                  : Je(n);
              }
              var s = function e(t, n, r, o, i) {
                return xe.resolve().then(function () {
                  var a = ge.transless || ge,
                    u = t._createTransaction(n, r, t._dbSchema, o);
                  if (((u.explicit = !0), (a = { trans: u, transless: a }), o))
                    u.idbtrans = o.idbtrans;
                  else
                    try {
                      u.create(),
                        (u.idbtrans._explicit = !0),
                        (t._state.PR1398_maxLoop = 3);
                    } catch (a) {
                      return a.name === Z.InvalidState &&
                        t.isOpen() &&
                        0 < --t._state.PR1398_maxLoop
                        ? (console.warn("Dexie: Need to reopen db"),
                          t.close({ disableAutoOpen: !1 }),
                          t.open().then(function () {
                            return e(t, n, r, null, i);
                          }))
                        : Je(a);
                    }
                  var s,
                    c = N(i);
                  return (
                    c && Ve(),
                    (a = xe.follow(function () {
                      var e;
                      (s = i.call(u, u)) &&
                        (c
                          ? ((e = ze.bind(null, null)), s.then(e, e))
                          : "function" == typeof s.next &&
                            "function" == typeof s.throw &&
                            (s = Bn(s)));
                    }, a)),
                    (s && "function" == typeof s.then
                      ? xe.resolve(s).then(function (e) {
                          return u.active
                            ? e
                            : Je(
                                new G.PrematureCommit(
                                  "Transaction committed too early. See http://bit.ly/2kdckMn"
                                )
                              );
                        })
                      : a.then(function () {
                          return s;
                        })
                    )
                      .then(function (e) {
                        return (
                          o && u._resolve(),
                          u._completion.then(function () {
                            return e;
                          })
                        );
                      })
                      .catch(function (e) {
                        return u._reject(e), Je(e);
                      })
                  );
                });
              }.bind(null, this, i, a, o, n);
              return o
                ? o._promise(i, s, "lock")
                : ge.trans
                ? $e(ge.transless, function () {
                    return r._whenReady(s);
                  })
                : this._whenReady(s);
            }),
            (nr.prototype.table = function (e) {
              if (!l(this._allTables, e))
                throw new G.InvalidTable("Table ".concat(e, " does not exist"));
              return this._allTables[e];
            }),
            nr);
          function nr(e, n) {
            var r = this;
            (this._middlewares = {}), (this.verno = 0);
            var o = nr.dependencies;
            (this._options = n =
              t(
                {
                  addons: nr.addons,
                  autoOpen: !0,
                  indexedDB: o.indexedDB,
                  IDBKeyRange: o.IDBKeyRange,
                  cache: "cloned",
                },
                n
              )),
              (this._deps = {
                indexedDB: n.indexedDB,
                IDBKeyRange: n.IDBKeyRange,
              }),
              (o = n.addons),
              (this._dbSchema = {}),
              (this._versions = []),
              (this._storeNames = []),
              (this._allTables = {}),
              (this.idbdb = null),
              (this._novip = this);
            var i,
              a,
              u,
              s,
              c,
              l = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: X,
                dbReadyPromise: null,
                cancelOpen: X,
                openCanceller: null,
                autoSchema: !0,
                PR1398_maxLoop: 3,
                autoOpen: n.autoOpen,
              };
            (l.dbReadyPromise = new xe(function (e) {
              l.dbReadyResolve = e;
            })),
              (l.openCanceller = new xe(function (e, t) {
                l.cancelOpen = t;
              })),
              (this._state = l),
              (this.name = e),
              (this.on = pt(
                this,
                "populate",
                "blocked",
                "versionchange",
                "close",
                { ready: [re, X] }
              )),
              (this.on.ready.subscribe = g(
                this.on.ready.subscribe,
                function (e) {
                  return function (t, n) {
                    nr.vip(function () {
                      var o,
                        i = r._state;
                      i.openComplete
                        ? (i.dbOpenError || xe.resolve().then(t), n && e(t))
                        : i.onReadyBeingFired
                        ? (i.onReadyBeingFired.push(t), n && e(t))
                        : (e(t),
                          (o = r),
                          n ||
                            e(function e() {
                              o.on.ready.unsubscribe(t),
                                o.on.ready.unsubscribe(e);
                            }));
                    });
                  };
                }
              )),
              (this.Collection =
                ((i = this),
                yt(Ot.prototype, function (e, t) {
                  this.db = i;
                  var n = at,
                    r = null;
                  if (t)
                    try {
                      n = t();
                    } catch (e) {
                      r = e;
                    }
                  var o = e._ctx;
                  (e = (t = o.table).hook.reading.fire),
                    (this._ctx = {
                      table: t,
                      index: o.index,
                      isPrimKey:
                        !o.index ||
                        (t.schema.primKey.keyPath &&
                          o.index === t.schema.primKey.name),
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
                      valueMapper: e !== Y ? e : null,
                    });
                }))),
              (this.Table =
                ((a = this),
                yt(dt.prototype, function (e, t, n) {
                  (this.db = a),
                    (this._tx = n),
                    (this.name = e),
                    (this.schema = t),
                    (this.hook = a._allTables[e]
                      ? a._allTables[e].hook
                      : pt(null, {
                          creating: [Q, X],
                          reading: [J, Y],
                          updating: [te, X],
                          deleting: [ee, X],
                        }));
                }))),
              (this.Transaction =
                ((u = this),
                yt(Vt.prototype, function (e, t, n, r, o) {
                  var i = this;
                  (this.db = u),
                    (this.mode = e),
                    (this.storeNames = t),
                    (this.schema = n),
                    (this.chromeTransactionDurability = r),
                    (this.idbtrans = null),
                    (this.on = pt(this, "complete", "error", "abort")),
                    (this.parent = o || null),
                    (this.active = !0),
                    (this._reculock = 0),
                    (this._blockedFuncs = []),
                    (this._resolve = null),
                    (this._reject = null),
                    (this._waitingFor = null),
                    (this._waitingQueue = null),
                    (this._spinCount = 0),
                    (this._completion = new xe(function (e, t) {
                      (i._resolve = e), (i._reject = t);
                    })),
                    this._completion.then(
                      function () {
                        (i.active = !1), i.on.complete.fire();
                      },
                      function (e) {
                        var t = i.active;
                        return (
                          (i.active = !1),
                          i.on.error.fire(e),
                          i.parent
                            ? i.parent._reject(e)
                            : t && i.idbtrans && i.idbtrans.abort(),
                          Je(e)
                        );
                      }
                    );
                }))),
              (this.Version =
                ((s = this),
                yt(pn.prototype, function (e) {
                  (this.db = s),
                    (this._cfg = {
                      version: e,
                      storesSource: null,
                      dbschema: {},
                      tables: {},
                      contentUpgrade: null,
                    });
                }))),
              (this.WhereClause =
                ((c = this),
                yt(Mt.prototype, function (e, t, n) {
                  if (
                    ((this.db = c),
                    (this._ctx = {
                      table: e,
                      index: ":id" === t ? null : t,
                      or: n,
                    }),
                    (this._cmp = this._ascending = ct),
                    (this._descending = function (e, t) {
                      return ct(t, e);
                    }),
                    (this._max = function (e, t) {
                      return 0 < ct(e, t) ? e : t;
                    }),
                    (this._min = function (e, t) {
                      return ct(e, t) < 0 ? e : t;
                    }),
                    (this._IDBKeyRange = c._deps.IDBKeyRange),
                    !this._IDBKeyRange)
                  )
                    throw new G.MissingAPI();
                }))),
              this.on("versionchange", function (e) {
                0 < e.newVersion
                  ? console.warn(
                      "Another connection wants to upgrade database '".concat(
                        r.name,
                        "'. Closing db now to resume the upgrade."
                      )
                    )
                  : console.warn(
                      "Another connection wants to delete database '".concat(
                        r.name,
                        "'. Closing db now to resume the delete request."
                      )
                    ),
                  r.close({ disableAutoOpen: !1 });
              }),
              this.on("blocked", function (e) {
                !e.newVersion || e.newVersion < e.oldVersion
                  ? console.warn(
                      "Dexie.delete('".concat(r.name, "') was blocked")
                    )
                  : console.warn(
                      "Upgrade '"
                        .concat(
                          r.name,
                          "' blocked by other connection holding version "
                        )
                        .concat(e.oldVersion / 10)
                    );
              }),
              (this._maxKey = Wt(n.IDBKeyRange)),
              (this._createTransaction = function (e, t, n, o) {
                return new r.Transaction(
                  e,
                  t,
                  n,
                  r._options.chromeTransactionDurability,
                  o
                );
              }),
              (this._fireOnBlocked = function (e) {
                r.on("blocked").fire(e),
                  tt
                    .filter(function (e) {
                      return e.name === r.name && e !== r && !e._state.vcFired;
                    })
                    .map(function (t) {
                      return t.on("versionchange").fire(e);
                    });
              }),
              this.use(zn),
              this.use(Qn),
              this.use(Gn),
              this.use(Rn),
              this.use(Un);
            var f = new Proxy(this, {
              get: function (e, t, n) {
                if ("_vip" === t) return !0;
                if ("table" === t)
                  return function (e) {
                    return er(r.table(e), f);
                  };
                var o = Reflect.get(e, t, n);
                return o instanceof dt
                  ? er(o, f)
                  : "tables" === t
                  ? o.map(function (e) {
                      return er(e, f);
                    })
                  : "_createTransaction" === t
                  ? function () {
                      return er(o.apply(this, arguments), f);
                    }
                  : o;
              },
            });
            (this.vip = f),
              o.forEach(function (e) {
                return e(r);
              });
          }
          R =
            "undefined" != typeof Symbol && "observable" in Symbol
              ? Symbol.observable
              : "@@observable";
          var rr,
            or =
              ((ir.prototype.subscribe = function (e, t, n) {
                return this._subscribe(
                  e && "function" != typeof e
                    ? e
                    : { next: e, error: t, complete: n }
                );
              }),
              (ir.prototype[R] = function () {
                return this;
              }),
              ir);
          function ir(e) {
            this._subscribe = e;
          }
          try {
            rr = {
              indexedDB:
                o.indexedDB ||
                o.mozIndexedDB ||
                o.webkitIndexedDB ||
                o.msIndexedDB,
              IDBKeyRange: o.IDBKeyRange || o.webkitIDBKeyRange,
            };
          } catch (P) {
            rr = { indexedDB: null, IDBKeyRange: null };
          }
          function ar(e) {
            var t,
              n = !1,
              r = new or(function (r) {
                var o,
                  i = N(e),
                  a = !1,
                  u = {},
                  s = {},
                  c = {
                    get closed() {
                      return a;
                    },
                    unsubscribe: function () {
                      a ||
                        ((a = !0),
                        o && o.abort(),
                        f && Ut.storagemutated.unsubscribe(h));
                    },
                  };
                r.start && r.start(c);
                var f = !1,
                  d = function () {
                    return Ye(p);
                  },
                  h = function (e) {
                    In(u, e), jn(s, u) && d();
                  },
                  p = function () {
                    var c, p, y;
                    !a &&
                      rr.indexedDB &&
                      ((u = {}),
                      (c = {}),
                      o && o.abort(),
                      (o = new AbortController()),
                      (y = (function (t) {
                        var n = Ee();
                        try {
                          i && Ve();
                          var r = Ue(e, t);
                          return (r = i ? r.finally(ze) : r);
                        } finally {
                          n && Ce();
                        }
                      })(
                        (p = {
                          subscr: c,
                          signal: o.signal,
                          requery: d,
                          querier: e,
                          trans: null,
                        })
                      )),
                      Promise.resolve(y).then(
                        function (e) {
                          (n = !0),
                            (t = e),
                            a ||
                              p.signal.aborted ||
                              ((u = {}),
                              (function (e) {
                                for (var t in e) if (l(e, t)) return;
                                return 1;
                              })((s = c)) ||
                                f ||
                                (Ut(qt, h), (f = !0)),
                              Ye(function () {
                                return !a && r.next && r.next(e);
                              }));
                        },
                        function (e) {
                          (n = !1),
                            ["DatabaseClosedError", "AbortError"].includes(
                              null == e ? void 0 : e.name
                            ) ||
                              a ||
                              Ye(function () {
                                a || (r.error && r.error(e));
                              });
                        }
                      ));
                  };
                return setTimeout(d, 0), c;
              });
            return (
              (r.hasValue = function () {
                return n;
              }),
              (r.getValue = function () {
                return t;
              }),
              r
            );
          }
          var ur = tr;
          function sr(e) {
            var t = lr;
            try {
              (lr = !0), Ut.storagemutated.fire(e), Kn(e, !0);
            } finally {
              lr = t;
            }
          }
          f(
            ur,
            t(t({}, $), {
              delete: function (e) {
                return new ur(e, { addons: [] }).delete();
              },
              exists: function (e) {
                return new ur(e, { addons: [] })
                  .open()
                  .then(function (e) {
                    return e.close(), !0;
                  })
                  .catch("NoSuchDatabaseError", function () {
                    return !1;
                  });
              },
              getDatabaseNames: function (e) {
                try {
                  return (
                    (n = (t = ur.dependencies).indexedDB),
                    (t = t.IDBKeyRange),
                    (mn(n)
                      ? Promise.resolve(n.databases()).then(function (e) {
                          return e
                            .map(function (e) {
                              return e.name;
                            })
                            .filter(function (e) {
                              return e !== nt;
                            });
                        })
                      : vn(n, t).toCollection().primaryKeys()
                    ).then(e)
                  );
                } catch (e) {
                  return Je(new G.MissingAPI());
                }
                var t, n;
              },
              defineClass: function () {
                return function (e) {
                  u(this, e);
                };
              },
              ignoreTransaction: function (e) {
                return ge.trans ? $e(ge.transless, e) : e();
              },
              vip: gn,
              async: function (e) {
                return function () {
                  try {
                    var t = Bn(e.apply(this, arguments));
                    return t && "function" == typeof t.then ? t : xe.resolve(t);
                  } catch (t) {
                    return Je(t);
                  }
                };
              },
              spawn: function (e, t, n) {
                try {
                  var r = Bn(e.apply(n, t || []));
                  return r && "function" == typeof r.then ? r : xe.resolve(r);
                } catch (e) {
                  return Je(e);
                }
              },
              currentTransaction: {
                get: function () {
                  return ge.trans || null;
                },
              },
              waitFor: function (e, t) {
                return (
                  (t = xe
                    .resolve(
                      "function" == typeof e ? ur.ignoreTransaction(e) : e
                    )
                    .timeout(t || 6e4)),
                  ge.trans ? ge.trans.waitFor(t) : t
                );
              },
              Promise: xe,
              debug: {
                get: function () {
                  return oe;
                },
                set: function (e) {
                  ie(e);
                },
              },
              derive: p,
              extend: u,
              props: f,
              override: g,
              Events: pt,
              on: Ut,
              liveQuery: ar,
              extendObservabilitySet: In,
              getByKeyPath: _,
              setByKeyPath: x,
              delByKeyPath: function (e, t) {
                "string" == typeof t
                  ? x(e, t, void 0)
                  : "length" in t &&
                    [].map.call(t, function (t) {
                      x(e, t, void 0);
                    });
              },
              shallowClone: k,
              deepClone: A,
              getObjectDiff: qn,
              cmp: ct,
              asap: w,
              minKey: -1 / 0,
              addons: [],
              connections: tt,
              errnames: Z,
              dependencies: rr,
              cache: An,
              semVer: "4.0.1",
              version: "4.0.1"
                .split(".")
                .map(function (e) {
                  return parseInt(e);
                })
                .reduce(function (e, t, n) {
                  return e + t / Math.pow(10, 2 * n);
                }),
            })
          ),
            (ur.maxKey = Wt(ur.dependencies.IDBKeyRange)),
            "undefined" != typeof dispatchEvent &&
              "undefined" != typeof addEventListener &&
              (Ut(qt, function (e) {
                lr ||
                  ((e = new CustomEvent(Ft, { detail: e })),
                  (lr = !0),
                  dispatchEvent(e),
                  (lr = !1));
              }),
              addEventListener(Ft, function (e) {
                (e = e.detail), lr || sr(e);
              }));
          var cr,
            lr = !1,
            fr = function () {};
          return (
            "undefined" != typeof BroadcastChannel &&
              ((fr = function () {
                (cr = new BroadcastChannel(Ft)).onmessage = function (e) {
                  return e.data && sr(e.data);
                };
              })(),
              "function" == typeof cr.unref && cr.unref(),
              Ut(qt, function (e) {
                lr || cr.postMessage(e);
              })),
            "undefined" != typeof addEventListener &&
              (addEventListener("pagehide", function (e) {
                if (!tr.disableBfCache && e.persisted) {
                  oe && console.debug("Dexie: handling persisted pagehide"),
                    null != cr && cr.close();
                  for (var t = 0, n = tt; t < n.length; t++)
                    n[t].close({ disableAutoOpen: !1 });
                }
              }),
              addEventListener("pageshow", function (e) {
                !tr.disableBfCache &&
                  e.persisted &&
                  (oe && console.debug("Dexie: handling persisted pageshow"),
                  fr(),
                  sr({ all: new wn(-1 / 0, [[]]) }));
              })),
            (xe.rejectionMapper = function (e, t) {
              return !e ||
                e instanceof F ||
                e instanceof TypeError ||
                e instanceof SyntaxError ||
                !e.name ||
                !W[e.name]
                ? e
                : ((t = new W[e.name](t || e.message, e)),
                  "stack" in e &&
                    h(t, "stack", {
                      get: function () {
                        return this.inner.stack;
                      },
                    }),
                  t);
            }),
            ie(oe),
            t(
              tr,
              Object.freeze({
                __proto__: null,
                Dexie: tr,
                liveQuery: ar,
                Entity: st,
                cmp: ct,
                PropModSymbol: P,
                PropModification: kt,
                replacePrefix: function (e, t) {
                  return new kt({ replacePrefix: [e, t] });
                },
                default: tr,
                RangeSet: wn,
                mergeRanges: xn,
                rangesOverlap: kn,
              }),
              { default: tr }
            ),
            tr
          );
        })();
      },
      72: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], u = 0; u < e.length; u++) {
            var s = e[u],
              c = r.base ? s[0] + r.base : s[0],
              l = i[c] || 0,
              f = "".concat(c, " ").concat(l);
            i[c] = l + 1;
            var d = n(f),
              h = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(h);
            else {
              var p = o(h, r);
              (r.byIndex = u),
                t.splice(u, 0, { identifier: f, updater: p, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          n.update(e);
          return function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap &&
                t.supports === e.supports &&
                t.layer === e.layer
              )
                return;
              n.update((e = t));
            } else n.remove();
          };
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var u = n(i[a]);
              t[u].references--;
            }
            for (var s = r(e, o), c = 0; c < i.length; c++) {
              var l = n(i[c]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = s;
          };
        };
      },
      659: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      540: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      825: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var i = n.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      702: (e) => {
        "use strict";
        e.exports =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzY1IiBoZWlnaHQ9IjMzOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMiAwaDM2MXYzMzZIMnoiLz48ZyBmaWx0ZXI9InVybCgjYSkiPjxwYXRoIGQ9Ik00MTkgMjY2YzAtMjMuNzQ4LTIzLjI4MS00My01Mi00M3MtNTIgMTkuMjUyLTUyIDQzIDIzLjI4MSA0MyA1MiA0MyA1Mi0xOS4yNTIgNTItNDNaIiBmaWxsPSIjODBGRjlGIiBmaWxsLW9wYWNpdHk9Ii42Ii8+PC9nPjxnIGZpbHRlcj0idXJsKCNiKSI+PGVsbGlwc2Ugcng9IjUyIiByeT0iNTcuNSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgLTQ3IDExMi41KSIgZmlsbD0iIzgwRkY5RiIgZmlsbC1vcGFjaXR5PSIuNiIvPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJhIiB4PSIyMTUiIHk9IjEyMyIgd2lkdGg9IjMwNCIgaGVpZ2h0PSIyODYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUwIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjAxXzcyMSIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImIiIHg9Ii0xOTkiIHk9Ii00NSIgd2lkdGg9IjMwNCIgaGVpZ2h0PSIzMTUiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjUwIiByZXN1bHQ9ImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMjAxXzcyMSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=";
      },
      330: (e) => {
        "use strict";
        e.exports = { rE: "0.1.15" };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.b = document.baseURI || self.location.href),
    (n.nc = void 0),
    (() => {
      "use strict";
      const e = { context: void 0, registry: void 0 };
      function t(t) {
        e.context = t;
      }
      const r = (e, t) => e === t,
        o = Symbol("solid-proxy"),
        i =
          (Symbol("solid-track"), Symbol("solid-dev-component"), { equals: r });
      let a = null,
        u = R;
      const s = 1,
        c = 2,
        l = { owned: null, cleanups: null, context: null, owner: null };
      var f = null;
      let d = null,
        h = null,
        p = null,
        y = null,
        v = null,
        m = null,
        g = 0;
      function b(e, t) {
        const n = y,
          r = f,
          o = 0 === e.length,
          i = void 0 === t ? r : t,
          a = o
            ? l
            : {
                owned: null,
                cleanups: null,
                context: i ? i.context : null,
                owner: i,
              },
          u = o ? e : () => e(() => k(() => U(a)));
        (f = a), (y = null);
        try {
          return N(u, !0);
        } finally {
          (y = n), (f = r);
        }
      }
      function w(e, t) {
        const n = {
          value: e,
          observers: null,
          observerSlots: null,
          comparator: (t = t ? Object.assign({}, i, t) : i).equals || void 0,
        };
        return [
          C.bind(n),
          (e) => (
            "function" == typeof e &&
              (e =
                d && d.running && d.sources.has(n) ? e(n.tValue) : e(n.value)),
            T(n, e)
          ),
        ];
      }
      function _(e, t, n) {
        const r = M(e, t, !1, s);
        h && d && d.running ? v.push(r) : K(r);
      }
      function x(e, t, n) {
        n = n ? Object.assign({}, i, n) : i;
        const r = M(e, t, !0, 0);
        return (
          (r.observers = null),
          (r.observerSlots = null),
          (r.comparator = n.equals || void 0),
          h && d && d.running ? ((r.tState = s), v.push(r)) : K(r),
          C.bind(r)
        );
      }
      function k(e) {
        if (!p && null === y) return e();
        const t = y;
        y = null;
        try {
          return p ? p.untrack(e) : e();
        } finally {
          y = t;
        }
      }
      function S(e) {
        return (
          null === f ||
            (null === f.cleanups ? (f.cleanups = [e]) : f.cleanups.push(e)),
          e
        );
      }
      function O(e) {
        if (d && d.running) return e(), d.done;
        const t = y,
          n = f;
        return Promise.resolve().then(() => {
          let r;
          return (
            (y = t),
            (f = n),
            (h || E) &&
              ((r =
                d ||
                (d = {
                  sources: new Set(),
                  effects: [],
                  promises: new Set(),
                  disposed: new Set(),
                  queue: new Set(),
                  running: !0,
                })),
              r.done || (r.done = new Promise((e) => (r.resolve = e))),
              (r.running = !0)),
            N(e, !1),
            (y = f = null),
            r ? r.done : void 0
          );
        });
      }
      const [P, I] = w(!1);
      function j(e, t) {
        const n = Symbol("context");
        return { id: n, Provider: W(n), defaultValue: e };
      }
      function A(e) {
        const t = x(e),
          n = x(() => G(t()));
        return (
          (n.toArray = () => {
            const e = n();
            return Array.isArray(e) ? e : null != e ? [e] : [];
          }),
          n
        );
      }
      let E;
      function C() {
        const e = d && d.running;
        if (this.sources && (e ? this.tState : this.state))
          if ((e ? this.tState : this.state) === s) K(this);
          else {
            const e = v;
            (v = null), N(() => q(this), !1), (v = e);
          }
        if (y) {
          const e = this.observers ? this.observers.length : 0;
          y.sources
            ? (y.sources.push(this), y.sourceSlots.push(e))
            : ((y.sources = [this]), (y.sourceSlots = [e])),
            this.observers
              ? (this.observers.push(y),
                this.observerSlots.push(y.sources.length - 1))
              : ((this.observers = [y]),
                (this.observerSlots = [y.sources.length - 1]));
        }
        return e && d.sources.has(this) ? this.tValue : this.value;
      }
      function T(e, t, n) {
        let r = d && d.running && d.sources.has(e) ? e.tValue : e.value;
        if (!e.comparator || !e.comparator(r, t)) {
          if (d) {
            const r = d.running;
            (r || (!n && d.sources.has(e))) &&
              (d.sources.add(e), (e.tValue = t)),
              r || (e.value = t);
          } else e.value = t;
          e.observers &&
            e.observers.length &&
            N(() => {
              for (let t = 0; t < e.observers.length; t += 1) {
                const n = e.observers[t],
                  r = d && d.running;
                (r && d.disposed.has(n)) ||
                  ((r ? n.tState : n.state) ||
                    (n.pure ? v.push(n) : m.push(n), n.observers && F(n)),
                  r ? (n.tState = s) : (n.state = s));
              }
              if (v.length > 1e6) throw ((v = []), new Error());
            }, !1);
        }
        return t;
      }
      function K(e) {
        if (!e.fn) return;
        U(e);
        const t = g;
        D(e, d && d.running && d.sources.has(e) ? e.tValue : e.value, t),
          d &&
            !d.running &&
            d.sources.has(e) &&
            queueMicrotask(() => {
              N(() => {
                d && (d.running = !0),
                  (y = f = e),
                  D(e, e.tValue, t),
                  (y = f = null);
              }, !1);
            });
      }
      function D(e, t, n) {
        let r;
        const o = f,
          i = y;
        y = f = e;
        try {
          r = e.fn(t);
        } catch (t) {
          return (
            e.pure &&
              (d && d.running
                ? ((e.tState = s),
                  e.tOwned && e.tOwned.forEach(U),
                  (e.tOwned = void 0))
                : ((e.state = s),
                  e.owned && e.owned.forEach(U),
                  (e.owned = null))),
            (e.updatedAt = n + 1),
            L(t)
          );
        } finally {
          (y = i), (f = o);
        }
        (!e.updatedAt || e.updatedAt <= n) &&
          (null != e.updatedAt && "observers" in e
            ? T(e, r, !0)
            : d && d.running && e.pure
            ? (d.sources.add(e), (e.tValue = r))
            : (e.value = r),
          (e.updatedAt = n));
      }
      function M(e, t, n, r = s, o) {
        const i = {
          fn: e,
          state: r,
          updatedAt: null,
          owned: null,
          sources: null,
          sourceSlots: null,
          cleanups: null,
          value: t,
          owner: f,
          context: f ? f.context : null,
          pure: n,
        };
        if (
          (d && d.running && ((i.state = 0), (i.tState = r)),
          null === f ||
            (f !== l &&
              (d && d.running && f.pure
                ? f.tOwned
                  ? f.tOwned.push(i)
                  : (f.tOwned = [i])
                : f.owned
                ? f.owned.push(i)
                : (f.owned = [i]))),
          p && i.fn)
        ) {
          const [e, t] = w(void 0, { equals: !1 }),
            n = p.factory(i.fn, t);
          S(() => n.dispose());
          const r = () => O(t).then(() => o.dispose()),
            o = p.factory(i.fn, r);
          i.fn = (t) => (e(), d && d.running ? o.track(t) : n.track(t));
        }
        return i;
      }
      function B(e) {
        const t = d && d.running;
        if (0 === (t ? e.tState : e.state)) return;
        if ((t ? e.tState : e.state) === c) return q(e);
        if (e.suspense && k(e.suspense.inFallback))
          return e.suspense.effects.push(e);
        const n = [e];
        for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < g); ) {
          if (t && d.disposed.has(e)) return;
          (t ? e.tState : e.state) && n.push(e);
        }
        for (let r = n.length - 1; r >= 0; r--) {
          if (((e = n[r]), t)) {
            let t = e,
              o = n[r + 1];
            for (; (t = t.owner) && t !== o; ) if (d.disposed.has(t)) return;
          }
          if ((t ? e.tState : e.state) === s) K(e);
          else if ((t ? e.tState : e.state) === c) {
            const t = v;
            (v = null), N(() => q(e, n[0]), !1), (v = t);
          }
        }
      }
      function N(e, t) {
        if (v) return e();
        let n = !1;
        t || (v = []), m ? (n = !0) : (m = []), g++;
        try {
          const t = e();
          return (
            (function (e) {
              v &&
                (h && d && d.running
                  ? (function (e) {
                      for (let t = 0; t < e.length; t++) {
                        const n = e[t],
                          r = d.queue;
                        r.has(n) ||
                          (r.add(n),
                          h(() => {
                            r.delete(n),
                              N(() => {
                                (d.running = !0), B(n);
                              }, !1),
                              d && (d.running = !1);
                          }));
                      }
                    })(v)
                  : R(v),
                (v = null));
              if (e) return;
              let t;
              if (d)
                if (d.promises.size || d.queue.size) {
                  if (d.running)
                    return (
                      (d.running = !1),
                      d.effects.push.apply(d.effects, m),
                      (m = null),
                      void I(!0)
                    );
                } else {
                  const e = d.sources,
                    n = d.disposed;
                  m.push.apply(m, d.effects), (t = d.resolve);
                  for (const e of m)
                    "tState" in e && (e.state = e.tState), delete e.tState;
                  (d = null),
                    N(() => {
                      for (const e of n) U(e);
                      for (const t of e) {
                        if (((t.value = t.tValue), t.owned))
                          for (let e = 0, n = t.owned.length; e < n; e++)
                            U(t.owned[e]);
                        t.tOwned && (t.owned = t.tOwned),
                          delete t.tValue,
                          delete t.tOwned,
                          (t.tState = 0);
                      }
                      I(!1);
                    }, !1);
                }
              const n = m;
              (m = null), n.length && N(() => u(n), !1);
              t && t();
            })(n),
            t
          );
        } catch (e) {
          n || (m = null), (v = null), L(e);
        }
      }
      function R(e) {
        for (let t = 0; t < e.length; t++) B(e[t]);
      }
      function q(e, t) {
        const n = d && d.running;
        n ? (e.tState = 0) : (e.state = 0);
        for (let r = 0; r < e.sources.length; r += 1) {
          const o = e.sources[r];
          if (o.sources) {
            const e = n ? o.tState : o.state;
            e === s
              ? o !== t && (!o.updatedAt || o.updatedAt < g) && B(o)
              : e === c && q(o, t);
          }
        }
      }
      function F(e) {
        const t = d && d.running;
        for (let n = 0; n < e.observers.length; n += 1) {
          const r = e.observers[n];
          (t ? r.tState : r.state) ||
            (t ? (r.tState = c) : (r.state = c),
            r.pure ? v.push(r) : m.push(r),
            r.observers && F(r));
        }
      }
      function U(e) {
        let t;
        if (e.sources)
          for (; e.sources.length; ) {
            const t = e.sources.pop(),
              n = e.sourceSlots.pop(),
              r = t.observers;
            if (r && r.length) {
              const e = r.pop(),
                o = t.observerSlots.pop();
              n < r.length &&
                ((e.sourceSlots[o] = n), (r[n] = e), (t.observerSlots[n] = o));
            }
          }
        if (d && d.running && e.pure) {
          if (e.tOwned) {
            for (t = e.tOwned.length - 1; t >= 0; t--) U(e.tOwned[t]);
            delete e.tOwned;
          }
          V(e, !0);
        } else if (e.owned) {
          for (t = e.owned.length - 1; t >= 0; t--) U(e.owned[t]);
          e.owned = null;
        }
        if (e.cleanups) {
          for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
          e.cleanups = null;
        }
        d && d.running ? (e.tState = 0) : (e.state = 0);
      }
      function V(e, t) {
        if ((t || ((e.tState = 0), d.disposed.add(e)), e.owned))
          for (let t = 0; t < e.owned.length; t++) V(e.owned[t]);
      }
      function z(e) {
        return e instanceof Error
          ? e
          : new Error("string" == typeof e ? e : "Unknown error", { cause: e });
      }
      function Z(e, t, n) {
        try {
          for (const n of t) n(e);
        } catch (e) {
          L(e, (n && n.owner) || null);
        }
      }
      function L(e, t = f) {
        const n = a && t && t.context && t.context[a],
          r = z(e);
        if (!n) throw r;
        m
          ? m.push({
              fn() {
                Z(r, n, t);
              },
              state: s,
            })
          : Z(r, n, t);
      }
      function G(e) {
        if ("function" == typeof e && !e.length) return G(e());
        if (Array.isArray(e)) {
          const t = [];
          for (let n = 0; n < e.length; n++) {
            const r = G(e[n]);
            Array.isArray(r) ? t.push.apply(t, r) : t.push(r);
          }
          return t;
        }
        return e;
      }
      function W(e, t) {
        return function (t) {
          let n;
          return (
            _(
              () =>
                (n = k(
                  () => (
                    (f.context = { ...f.context, [e]: t.value }),
                    A(() => t.children)
                  )
                )),
              void 0
            ),
            n
          );
        };
      }
      Symbol("fallback");
      let $ = !1;
      function X(n, r) {
        if ($ && e.context) {
          const o = e.context;
          t({
            ...e.context,
            id: `${e.context.id}${e.context.count++}-`,
            count: 0,
          });
          const i = k(() => n(r || {}));
          return t(o), i;
        }
        return k(() => n(r || {}));
      }
      function Y() {
        return !0;
      }
      const J = {
        get: (e, t, n) => (t === o ? n : e.get(t)),
        has: (e, t) => t === o || e.has(t),
        set: Y,
        deleteProperty: Y,
        getOwnPropertyDescriptor: (e, t) => ({
          configurable: !0,
          enumerable: !0,
          get: () => e.get(t),
          set: Y,
          deleteProperty: Y,
        }),
        ownKeys: (e) => e.keys(),
      };
      function H(e) {
        return (e = "function" == typeof e ? e() : e) ? e : {};
      }
      function Q() {
        for (let e = 0, t = this.length; e < t; ++e) {
          const t = this[e]();
          if (void 0 !== t) return t;
        }
      }
      function ee(...e) {
        let t = !1;
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          (t = t || (!!r && o in r)),
            (e[n] = "function" == typeof r ? ((t = !0), x(r)) : r);
        }
        if (t)
          return new Proxy(
            {
              get(t) {
                for (let n = e.length - 1; n >= 0; n--) {
                  const r = H(e[n])[t];
                  if (void 0 !== r) return r;
                }
              },
              has(t) {
                for (let n = e.length - 1; n >= 0; n--)
                  if (t in H(e[n])) return !0;
                return !1;
              },
              keys() {
                const t = [];
                for (let n = 0; n < e.length; n++)
                  t.push(...Object.keys(H(e[n])));
                return [...new Set(t)];
              },
            },
            J
          );
        const n = {},
          r = Object.create(null);
        for (let t = e.length - 1; t >= 0; t--) {
          const o = e[t];
          if (!o) continue;
          const i = Object.getOwnPropertyNames(o);
          for (let e = i.length - 1; e >= 0; e--) {
            const t = i[e];
            if ("__proto__" === t || "constructor" === t) continue;
            const a = Object.getOwnPropertyDescriptor(o, t);
            if (r[t]) {
              const e = n[t];
              e &&
                (a.get
                  ? e.push(a.get.bind(o))
                  : void 0 !== a.value && e.push(() => a.value));
            } else
              r[t] = a.get
                ? {
                    enumerable: !0,
                    configurable: !0,
                    get: Q.bind((n[t] = [a.get.bind(o)])),
                  }
                : void 0 !== a.value
                ? a
                : void 0;
          }
        }
        const i = {},
          a = Object.keys(r);
        for (let e = a.length - 1; e >= 0; e--) {
          const t = a[e],
            n = r[t];
          n && n.get
            ? Object.defineProperty(i, t, n)
            : (i[t] = n ? n.value : void 0);
        }
        return i;
      }
      j();
      const te = new Set([
          "className",
          "value",
          "readOnly",
          "formNoValidate",
          "isMap",
          "noModule",
          "playsInline",
          "allowfullscreen",
          "async",
          "autofocus",
          "autoplay",
          "checked",
          "controls",
          "default",
          "disabled",
          "formnovalidate",
          "hidden",
          "indeterminate",
          "inert",
          "ismap",
          "loop",
          "multiple",
          "muted",
          "nomodule",
          "novalidate",
          "open",
          "playsinline",
          "readonly",
          "required",
          "reversed",
          "seamless",
          "selected",
        ]),
        ne = new Set(["innerHTML", "textContent", "innerText", "children"]),
        re = Object.assign(Object.create(null), {
          className: "class",
          htmlFor: "for",
        }),
        oe = Object.assign(Object.create(null), {
          class: "className",
          formnovalidate: { $: "formNoValidate", BUTTON: 1, INPUT: 1 },
          ismap: { $: "isMap", IMG: 1 },
          nomodule: { $: "noModule", SCRIPT: 1 },
          playsinline: { $: "playsInline", VIDEO: 1 },
          readonly: { $: "readOnly", INPUT: 1, TEXTAREA: 1 },
        });
      const ie = new Set([
          "beforeinput",
          "click",
          "dblclick",
          "contextmenu",
          "focusin",
          "focusout",
          "input",
          "keydown",
          "keyup",
          "mousedown",
          "mousemove",
          "mouseout",
          "mouseover",
          "mouseup",
          "pointerdown",
          "pointermove",
          "pointerout",
          "pointerover",
          "pointerup",
          "touchend",
          "touchmove",
          "touchstart",
        ]),
        ae = {
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
        };
      const ue = "_$DX_DELEGATE";
      function se(e, t, n, r = {}) {
        let o;
        return (
          b((r) => {
            (o = r),
              t === document
                ? e()
                : de(t, e(), t.firstChild ? null : void 0, n);
          }, r.owner),
          () => {
            o(), (t.textContent = "");
          }
        );
      }
      function ce(e, t, n) {
        let r;
        const o = () => {
            const t = document.createElement("template");
            return (
              (t.innerHTML = e),
              n ? t.content.firstChild.firstChild : t.content.firstChild
            );
          },
          i = t
            ? () => k(() => document.importNode(r || (r = o()), !0))
            : () => (r || (r = o())).cloneNode(!0);
        return (i.cloneNode = i), i;
      }
      function le(t, n, r) {
        (e.context && t.isConnected) ||
          (null == r ? t.removeAttribute(n) : t.setAttribute(n, r));
      }
      function fe(e, t = {}, n, r) {
        const o = {};
        return (
          r || _(() => (o.children = ve(e, t.children, o.children))),
          _(() => t.ref && t.ref(e)),
          _(() =>
            (function (e, t, n, r, o = {}, i = !1) {
              t || (t = {});
              for (const r in o)
                if (!(r in t)) {
                  if ("children" === r) continue;
                  o[r] = pe(e, r, null, o[r], n, i);
                }
              for (const a in t) {
                if ("children" === a) {
                  r || ve(e, t.children);
                  continue;
                }
                const u = t[a];
                o[a] = pe(e, a, u, o[a], n, i);
              }
            })(e, t, n, !0, o, !0)
          ),
          o
        );
      }
      function de(e, t, n, r) {
        if ((void 0 === n || r || (r = []), "function" != typeof t))
          return ve(e, t, r, n);
        _((r) => ve(e, t(), r, n), r);
      }
      function he(e, t, n) {
        const r = t.trim().split(/\s+/);
        for (let t = 0, o = r.length; t < o; t++) e.classList.toggle(r[t], n);
      }
      function pe(t, n, r, o, i, a) {
        let u, s, c, l, f;
        if ("style" === n)
          return (function (e, t, n) {
            if (!t) return n ? le(e, "style") : t;
            const r = e.style;
            if ("string" == typeof t) return (r.cssText = t);
            let o, i;
            for (i in ("string" == typeof n && (r.cssText = n = void 0),
            n || (n = {}),
            t || (t = {}),
            n))
              null == t[i] && r.removeProperty(i), delete n[i];
            for (i in t)
              (o = t[i]), o !== n[i] && (r.setProperty(i, o), (n[i] = o));
            return n;
          })(t, r, o);
        if ("classList" === n)
          return (function (e, t, n = {}) {
            const r = Object.keys(t || {}),
              o = Object.keys(n);
            let i, a;
            for (i = 0, a = o.length; i < a; i++) {
              const r = o[i];
              r && "undefined" !== r && !t[r] && (he(e, r, !1), delete n[r]);
            }
            for (i = 0, a = r.length; i < a; i++) {
              const o = r[i],
                a = !!t[o];
              o &&
                "undefined" !== o &&
                n[o] !== a &&
                a &&
                (he(e, o, !0), (n[o] = a));
            }
            return n;
          })(t, r, o);
        if (r === o) return o;
        if ("ref" === n) a || r(t);
        else if ("on:" === n.slice(0, 3)) {
          const e = n.slice(3);
          o && t.removeEventListener(e, o), r && t.addEventListener(e, r);
        } else if ("oncapture:" === n.slice(0, 10)) {
          const e = n.slice(10);
          o && t.removeEventListener(e, o, !0),
            r && t.addEventListener(e, r, !0);
        } else if ("on" === n.slice(0, 2)) {
          const e = n.slice(2).toLowerCase(),
            i = ie.has(e);
          if (!i && o) {
            const n = Array.isArray(o) ? o[0] : o;
            t.removeEventListener(e, n);
          }
          (i || r) &&
            ((function (e, t, n, r) {
              if (r)
                Array.isArray(n)
                  ? ((e[`$$${t}`] = n[0]), (e[`$$${t}Data`] = n[1]))
                  : (e[`$$${t}`] = n);
              else if (Array.isArray(n)) {
                const r = n[0];
                e.addEventListener(t, (n[0] = (t) => r.call(e, n[1], t)));
              } else e.addEventListener(t, n);
            })(t, e, r, i),
            i &&
              (function (e, t = window.document) {
                const n = t[ue] || (t[ue] = new Set());
                for (let r = 0, o = e.length; r < o; r++) {
                  const o = e[r];
                  n.has(o) || (n.add(o), t.addEventListener(o, ye));
                }
              })([e]));
        } else if ("attr:" === n.slice(0, 5)) le(t, n.slice(5), r);
        else if (
          (f = "prop:" === n.slice(0, 5)) ||
          (c = ne.has(n)) ||
          (!i &&
            ((l = (function (e, t) {
              const n = oe[e];
              return "object" == typeof n ? (n[t] ? n.$ : void 0) : n;
            })(n, t.tagName)) ||
              (s = te.has(n)))) ||
          (u = t.nodeName.includes("-"))
        ) {
          if (f) (n = n.slice(5)), (s = !0);
          else if (e.context && t.isConnected) return r;
          "class" === n || "className" === n
            ? (function (t, n) {
                (e.context && t.isConnected) ||
                  (null == n ? t.removeAttribute("class") : (t.className = n));
              })(t, r)
            : !u || s || c
            ? (t[l || n] = r)
            : (t[
                ((d = n),
                d.toLowerCase().replace(/-([a-z])/g, (e, t) => t.toUpperCase()))
              ] = r);
        } else {
          const o = i && n.indexOf(":") > -1 && ae[n.split(":")[0]];
          o
            ? (function (t, n, r, o) {
                (e.context && t.isConnected) ||
                  (null == o
                    ? t.removeAttributeNS(n, r)
                    : t.setAttributeNS(n, r, o));
              })(t, o, n, r)
            : le(t, re[n] || n, r);
        }
        var d;
        return r;
      }
      function ye(t) {
        const n = `$$${t.type}`;
        let r = (t.composedPath && t.composedPath()[0]) || t.target;
        for (
          t.target !== r &&
            Object.defineProperty(t, "target", { configurable: !0, value: r }),
            Object.defineProperty(t, "currentTarget", {
              configurable: !0,
              get: () => r || document,
            }),
            e.registry && !e.done && (e.done = _$HY.done = !0);
          r;

        ) {
          const e = r[n];
          if (e && !r.disabled) {
            const o = r[`${n}Data`];
            if ((void 0 !== o ? e.call(r, o, t) : e.call(r, t), t.cancelBubble))
              return;
          }
          r = r._$host || r.parentNode || r.host;
        }
      }
      function ve(t, n, r, o, i) {
        const a = !!e.context && t.isConnected;
        if (a) {
          !r && (r = [...t.childNodes]);
          let e = [];
          for (let t = 0; t < r.length; t++) {
            const n = r[t];
            8 === n.nodeType && "!$" === n.data.slice(0, 2)
              ? n.remove()
              : e.push(n);
          }
          r = e;
        }
        for (; "function" == typeof r; ) r = r();
        if (n === r) return r;
        const u = typeof n,
          s = void 0 !== o;
        if (
          ((t = (s && r[0] && r[0].parentNode) || t),
          "string" === u || "number" === u)
        ) {
          if (a) return r;
          if (("number" === u && (n = n.toString()), s)) {
            let e = r[0];
            e && 3 === e.nodeType
              ? e.data !== n && (e.data = n)
              : (e = document.createTextNode(n)),
              (r = be(t, r, o, e));
          } else
            r =
              "" !== r && "string" == typeof r
                ? (t.firstChild.data = n)
                : (t.textContent = n);
        } else if (null == n || "boolean" === u) {
          if (a) return r;
          r = be(t, r, o);
        } else {
          if ("function" === u)
            return (
              _(() => {
                let e = n();
                for (; "function" == typeof e; ) e = e();
                r = ve(t, e, r, o);
              }),
              () => r
            );
          if (Array.isArray(n)) {
            const e = [],
              u = r && Array.isArray(r);
            if (me(e, n, r, i))
              return _(() => (r = ve(t, e, r, o, !0))), () => r;
            if (a) {
              if (!e.length) return r;
              if (void 0 === o) return [...t.childNodes];
              let n = e[0],
                i = [n];
              for (; (n = n.nextSibling) !== o; ) i.push(n);
              return (r = i);
            }
            if (0 === e.length) {
              if (((r = be(t, r, o)), s)) return r;
            } else
              u
                ? 0 === r.length
                  ? ge(t, e, o)
                  : (function (e, t, n) {
                      let r = n.length,
                        o = t.length,
                        i = r,
                        a = 0,
                        u = 0,
                        s = t[o - 1].nextSibling,
                        c = null;
                      for (; a < o || u < i; )
                        if (t[a] !== n[u]) {
                          for (; t[o - 1] === n[i - 1]; ) o--, i--;
                          if (o === a) {
                            const t =
                              i < r ? (u ? n[u - 1].nextSibling : n[i - u]) : s;
                            for (; u < i; ) e.insertBefore(n[u++], t);
                          } else if (i === u)
                            for (; a < o; )
                              (c && c.has(t[a])) || t[a].remove(), a++;
                          else if (t[a] === n[i - 1] && n[u] === t[o - 1]) {
                            const r = t[--o].nextSibling;
                            e.insertBefore(n[u++], t[a++].nextSibling),
                              e.insertBefore(n[--i], r),
                              (t[o] = n[i]);
                          } else {
                            if (!c) {
                              c = new Map();
                              let e = u;
                              for (; e < i; ) c.set(n[e], e++);
                            }
                            const r = c.get(t[a]);
                            if (null != r)
                              if (u < r && r < i) {
                                let s,
                                  l = a,
                                  f = 1;
                                for (
                                  ;
                                  ++l < o &&
                                  l < i &&
                                  null != (s = c.get(t[l])) &&
                                  s === r + f;

                                )
                                  f++;
                                if (f > r - u) {
                                  const o = t[a];
                                  for (; u < r; ) e.insertBefore(n[u++], o);
                                } else e.replaceChild(n[u++], t[a++]);
                              } else a++;
                            else t[a++].remove();
                          }
                        } else a++, u++;
                    })(t, r, e)
                : (r && be(t), ge(t, e));
            r = e;
          } else if (n.nodeType) {
            if (a && n.parentNode) return (r = s ? [n] : n);
            if (Array.isArray(r)) {
              if (s) return (r = be(t, r, o, n));
              be(t, r, null, n);
            } else
              null != r && "" !== r && t.firstChild
                ? t.replaceChild(n, t.firstChild)
                : t.appendChild(n);
            r = n;
          }
        }
        return r;
      }
      function me(e, t, n, r) {
        let o = !1;
        for (let i = 0, a = t.length; i < a; i++) {
          let a,
            u = t[i],
            s = n && n[e.length];
          if (null == u || !0 === u || !1 === u);
          else if ("object" == (a = typeof u) && u.nodeType) e.push(u);
          else if (Array.isArray(u)) o = me(e, u, s) || o;
          else if ("function" === a)
            if (r) {
              for (; "function" == typeof u; ) u = u();
              o =
                me(e, Array.isArray(u) ? u : [u], Array.isArray(s) ? s : [s]) ||
                o;
            } else e.push(u), (o = !0);
          else {
            const t = String(u);
            s && 3 === s.nodeType && s.data === t
              ? e.push(s)
              : e.push(document.createTextNode(t));
          }
        }
        return o;
      }
      function ge(e, t, n = null) {
        for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n);
      }
      function be(e, t, n, r) {
        if (void 0 === n) return (e.textContent = "");
        const o = r || document.createTextNode("");
        if (t.length) {
          let r = !1;
          for (let i = t.length - 1; i >= 0; i--) {
            const a = t[i];
            if (o !== a) {
              const t = a.parentNode === e;
              r || i
                ? t && a.remove()
                : t
                ? e.replaceChild(o, a)
                : e.insertBefore(o, n);
            } else r = !0;
          }
        } else e.insertBefore(o, n);
        return [o];
      }
      Symbol();
      const we = !1;
      var _e = n(72),
        xe = n.n(_e),
        ke = n(825),
        Se = n.n(ke),
        Oe = n(659),
        Pe = n.n(Oe),
        Ie = n(56),
        je = n.n(Ie),
        Ae = n(540),
        Ee = n.n(Ae),
        Ce = n(113),
        Te = n.n(Ce),
        Ke = n(453),
        De = {};
      (De.styleTagTransform = Te()),
        (De.setAttributes = je()),
        (De.insert = Pe().bind(null, "head")),
        (De.domAPI = Se()),
        (De.insertStyleElement = Ee());
      xe()(Ke.A, De);
      Ke.A && Ke.A.locals && Ke.A.locals;
      const Me = ce('<svg stroke-width="0"></svg>', 2),
        Be = ce("<title></title>", 2);
      function Ne(e, t) {
        const n = ee(e.a, t),
          [r, i] = (function (e, ...t) {
            if (o in e) {
              const n = new Set(t.length > 1 ? t.flat() : t[0]),
                r = t.map(
                  (t) =>
                    new Proxy(
                      {
                        get: (n) => (t.includes(n) ? e[n] : void 0),
                        has: (n) => t.includes(n) && n in e,
                        keys: () => t.filter((t) => t in e),
                      },
                      J
                    )
                );
              return (
                r.push(
                  new Proxy(
                    {
                      get: (t) => (n.has(t) ? void 0 : e[t]),
                      has: (t) => !n.has(t) && t in e,
                      keys: () => Object.keys(e).filter((e) => !n.has(e)),
                    },
                    J
                  )
                ),
                r
              );
            }
            const n = {},
              r = t.map(() => ({}));
            for (const o of Object.getOwnPropertyNames(e)) {
              const i = Object.getOwnPropertyDescriptor(e, o),
                a =
                  !i.get &&
                  !i.set &&
                  i.enumerable &&
                  i.writable &&
                  i.configurable;
              let u = !1,
                s = 0;
              for (const e of t)
                e.includes(o) &&
                  ((u = !0),
                  a ? (r[s][o] = i.value) : Object.defineProperty(r[s], o, i)),
                  ++s;
              u || (a ? (n[o] = i.value) : Object.defineProperty(n, o, i));
            }
            return [...r, n];
          })(n, ["src"]);
        return (() => {
          const n = Me.cloneNode(!0);
          return (
            fe(
              n,
              ee(
                {
                  get stroke() {
                    return e.a.stroke;
                  },
                  get color() {
                    return t.color || "currentColor";
                  },
                  get fill() {
                    return t.color || "currentColor";
                  },
                  get style() {
                    return { ...t.style, overflow: "visible" };
                  },
                },
                i,
                {
                  get height() {
                    return t.size || "1em";
                  },
                  get width() {
                    return t.size || "1em";
                  },
                  get innerHTML() {
                    return e.c;
                  },
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              !0,
              !0
            ),
            de(n, () => we && void e.c, null),
            de(
              n,
              (() => {
                const e = x(() => !!t.title);
                return () =>
                  e() &&
                  (() => {
                    const e = Be.cloneNode(!0);
                    return de(e, () => t.title), e;
                  })();
              })(),
              null
            ),
            n
          );
        })();
      }
      function Re(e) {
        return Ne(
          {
            a: {
              fill: "none",
              stroke: "currentColor",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              viewBox: "0 0 24 24",
            },
            c: '<path d="M20 6 9 17 4 12"/>',
          },
          e
        );
      }
      const qe = "https://askme.amadeo.app/api",
        Fe = n(330).rE || "unset";
      var Ue = n(744);
      const Ve = Symbol.for("Dexie"),
        ze = globalThis[Ve] || (globalThis[Ve] = Ue);
      if (Ue.semVer !== ze.semVer)
        throw new Error(
          `Two different versions of Dexie loaded in the same app: ${Ue.semVer} and ${ze.semVer}`
        );
      const {
          liveQuery: Ze,
          mergeRanges: Le,
          rangesOverlap: Ge,
          RangeSet: We,
          cmp: $e,
          Entity: Xe,
          PropModSymbol: Ye,
          PropModification: Je,
          replacePrefix: He,
        } = ze,
        Qe = ze;
      const et = new (class extends Qe {
        constructor() {
          super("ask_me_db_v1"),
            this.version(4).stores({
              hostUsers: "id, name, email, avatar, countOfMeetings",
              appState: "id, isAuthenticated, appId",
              meetingState:
                "tabId, meetingId, optionPageId, isAppActive, hostUserId, isTranscriptActive, startedAt",
              optionPage: "id, optionPageId",
              participants: "tabId, hostUserId, optionPageId",
              authData: "id, token, refreshToken",
              authUserToken: "id, accessToken, idToken",
            });
        }
        async saveHostUser(e) {
          const t = ot(e?.name),
            n = await this.hostUsers.get({ id: t });
          return n?.id
            ? this.hostUsers.update(t, {
                ...e,
                countOfMeetings: ++n.countOfMeetings,
              })
            : this.hostUsers.put({ id: t, countOfMeetings: 1, ...e });
        }
        async getHostUser({ id: e = null, name: t = null }) {
          if (e || t) {
            const n = e || ot(t);
            return this.hostUsers.get({ id: n });
          }
          return (await this.hostUsers.toArray())?.[0];
        }
        async deleteHostUser({ id: e = null, name: t = null }) {
          if (e || t) {
            const n = e || ot(t);
            return !!(await this.hostUsers.where({ id: n }).delete());
          }
          return !1;
        }
        async saveMeetingState({ meetingState: e, tabId: t, hostUserName: n }) {
          const r = await this.meetingState.get({ tabId: t });
          return r && r.tabId
            ? this.meetingState.update(r.tabId, e)
            : n
            ? this.meetingState.put({ hostUserId: ot(n), ...e, tabId: t })
            : (nt("No user Id on save meeting state to DB", e),
              this.meetingState.put({ ...e, tabId: t }));
        }
        async getMeetingState({ tabId: e }) {
          return this.meetingState.get({ tabId: e });
        }
        async saveParticipants({ tabId: e, participants: t, hostUserId: n }) {
          const r = await this.participants.get({ tabId: e });
          return r && r.tabId && n
            ? !!(await this.participants.update(e, {
                participants: t,
                hostUserId: n,
              }))
            : r && r.tabId
            ? !!(await this.participants.update(e, { participants: t }))
            : !!t &&
              !!(await this.participants.put({
                tabId: e,
                participants: t,
                hostUserId: n,
              }));
        }
        async getParticipants({ tabId: e }) {
          const t = await this.participants.get({ tabId: e });
          return t || null;
        }
        async saveOptionPageId(e) {
          return (await this.optionPage.get({ id: 1 }))
            ? !!(await this.optionPage.update(1, { optionPageId: e }))
            : !!(await this.optionPage.put({ id: 1, optionPageId: e }));
        }
        async getOptionPageId() {
          return this.optionPage.get({ id: 1 });
        }
        async saveAuthData(e) {
          return (await this.authData.get({ id: 1 })) && Object.keys(e).length
            ? !!this.authData.update(1, e)
            : !!this.authData.put({ id: 1, ...e });
        }
        async clearAuthData() {
          return this.authData.delete(1);
        }
        async getAuthData() {
          return this.authData.get({ id: 1 });
        }
        async saveUserToken(e) {
          return (await this.authUserToken.get({ id: 1 })) &&
            Object.keys(e).length
            ? !!this.authUserToken.update(1, e)
            : !!this.authUserToken.put({ id: 1, ...e });
        }
        async clearUserToken() {
          return this.authUserToken.delete(1);
        }
        async getUserToken() {
          return this.authUserToken.get({ id: 1 });
        }
        async saveAppState(e) {
          return (await this.appState.get({ id: 1 })) && Object.keys(e).length
            ? !!this.appState.update(1, e)
            : !!this.appState.put({ id: 1, ...e });
        }
        async getAppState() {
          return this.appState.get({ id: 1 });
        }
      })();
      async function tt() {
        return et.getAppState();
      }
      function nt(...e) {
        const t = new Error().stack;
        try {
          rt(
            ((n = t),
            (n?.split("\n").map((e) => e.trim()) || [])
              .filter((e) => e.startsWith("at "))
              .map(
                (e) => (
                  e.replace("at ", ""),
                  e.replace(
                    "chrome-extension://mhpninceiiepjjippgkmdgohcbinodfe/",
                    ""
                  ),
                  e
                )
              )
              .filter((e, t) => t < 6)
              .join("\n")),
            e
          )
            .catch()
            .finally();
        } catch (e) {}
        var n;
      }
      const rt = async (e, t) => {
        const n = await tt();
        let r;
        try {
          r = t
            ? t
                .map((e) =>
                  "object" == typeof e ? JSON.stringify(e) : String(e)
                )
                .join(", ")
            : "";
        } catch (e) {
          (r = t.join(", ")), nt("Error on sendLog: ", e?.message);
        }
        const o = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stack: e,
            message: r,
            appVersion: Fe,
            appId: n?.appId || "n/a",
          }),
        };
        await fetch(`${qe}/v1/error`, o);
      };
      function ot(e) {
        return (
          e || nt("Wrong id", e),
          btoa(
            decodeURIComponent(
              encodeURIComponent(
                (function (e) {
                  if (!/[^\x00-\x7F]/.test(e)) return e;
                  const t = new TextEncoder().encode(e);
                  return String.fromCharCode.apply(null, t);
                })(
                  ((t = e), t?.replace(/\s+\(.*\)/, ""))?.trim()?.toLowerCase()
                )
              )
            )
          )
        );
        var t;
      }
      function it(e, t = !0) {
        const n = chrome?.i18n?.getMessage(e);
        if (
          (n || nt(`Could not get localized message for variable "${e}"`), !t)
        )
          return n;
        return n.split(" ").map((e, n) => (t && n ? [" ", e] : e));
      }
      var at = ce(
        '<div class=popup><div class=header><img alt=Ask_me><span class=name>sk_me</span><span>for</span><img src=../../assets/meet_logo.svg class=meet alt="Google Meet"></div><div class=title> 💪</div><ul class=list><li></li><li></li></ul><a type=button class=action href=https://meet.google.com/ target=_blank rel="noopener noreferrer"> Google Meet'
      );
      const ut = chrome.runtime.getURL("assets/logo.svg");
      se(() => {
        return (
          (e = at()),
          (t = e.firstChild),
          (n = t.firstChild),
          (r = t.nextSibling),
          (o = r.firstChild),
          (i = r.nextSibling),
          (a = i.firstChild),
          (u = a.nextSibling),
          (s = i.nextSibling),
          (c = s.firstChild),
          le(n, "src", ut),
          de(r, () => it("popupTittleText", !1), o),
          de(a, X(Re, {}), null),
          de(a, () => it("popupItemOneText", !1), null),
          de(u, X(Re, {}), null),
          de(u, () => it("popupItemSecondText", !1), null),
          de(s, () => it("openText", !1), c),
          e
        );
        var e, t, n, r, o, i, a, u, s, c;
      }, document.getElementById("app-container"));
    })();
})();
