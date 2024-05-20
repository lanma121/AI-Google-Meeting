(() => {
  var e = {
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
                    for (var i in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }).apply(this, arguments);
            };
          function r(e, t, n) {
            if (n || 2 === arguments.length)
              for (var r, i = 0, o = t.length; i < o; i++)
                (!r && i in t) ||
                  ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
            return e.concat(r || Array.prototype.slice.call(t));
          }
          var i =
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                ? window
                : n.g,
            o = Object.keys,
            a = Array.isArray;
          function s(e, t) {
            return (
              "object" != typeof t ||
                o(t).forEach(function (n) {
                  e[n] = t[n];
                }),
              e
            );
          }
          "undefined" == typeof Promise || i.Promise || (i.Promise = Promise);
          var u = Object.getPrototypeOf,
            c = {}.hasOwnProperty;
          function l(e, t) {
            return c.call(e, t);
          }
          function f(e, t) {
            "function" == typeof t && (t = t(u(e))),
              ("undefined" == typeof Reflect ? o : Reflect.ownKeys)(t).forEach(
                function (n) {
                  d(e, n, t[n]);
                }
              );
          }
          var h = Object.defineProperty;
          function d(e, t, n, r) {
            h(
              e,
              t,
              s(
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
                  d(e.prototype, "constructor", e),
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
            i.setImmediate ? setImmediate(e) : setTimeout(e, 0);
          }
          function _(e, t) {
            if ("string" == typeof t && l(e, t)) return e[t];
            if (!t) return e;
            if ("string" != typeof t) {
              for (var n = [], r = 0, i = t.length; r < i; ++r) {
                var o = _(e, t[r]);
                n.push(o);
              }
              return n;
            }
            var a = t.indexOf(".");
            if (-1 !== a) {
              var s = e[t.substr(0, a)];
              return null == s ? void 0 : _(s, t.substr(a + 1));
            }
          }
          function S(e, t, n) {
            if (
              e &&
              void 0 !== t &&
              (!("isFrozen" in Object) || !Object.isFrozen(e))
            )
              if ("string" != typeof t && "length" in t) {
                b("string" != typeof n && "length" in n);
                for (var r = 0, i = t.length; r < i; ++r) S(e, t[r], n[r]);
              } else {
                var o,
                  s,
                  u = t.indexOf(".");
                -1 !== u
                  ? ((o = t.substr(0, u)),
                    "" === (s = t.substr(u + 1))
                      ? void 0 === n
                        ? a(e) && !isNaN(parseInt(o))
                          ? e.splice(o, 1)
                          : delete e[o]
                        : (e[o] = n)
                      : S((u = (u = e[o]) && l(e, o) ? u : (e[o] = {})), s, n))
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
          var x = [].concat;
          function T(e) {
            return x.apply([], e);
          }
          var O =
              "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
                .split(",")
                .concat(
                  T(
                    [8, 16, 32, 64].map(function (e) {
                      return ["Int", "Uint", "Float"].map(function (t) {
                        return t + e + "Array";
                      });
                    })
                  )
                )
                .filter(function (e) {
                  return i[e];
                }),
            E = new Set(
              O.map(function (e) {
                return i[e];
              })
            ),
            P = null;
          function I(e) {
            return (
              (P = new WeakMap()),
              (e = (function e(t) {
                if (!t || "object" != typeof t) return t;
                var n = P.get(t);
                if (n) return n;
                if (a(t)) {
                  (n = []), P.set(t, n);
                  for (var r = 0, i = t.length; r < i; ++r) n.push(e(t[r]));
                } else if (E.has(t.constructor)) n = t;
                else {
                  var o,
                    s = u(t);
                  for (o in ((n =
                    s === Object.prototype ? {} : Object.create(s)),
                  P.set(t, n),
                  t))
                    l(t, o) && (n[o] = e(t[o]));
                }
                return n;
              })(e)),
              (P = null),
              e
            );
          }
          var A = {}.toString;
          function C(e) {
            return A.call(e).slice(8, -1);
          }
          var K = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator",
            j =
              "symbol" == typeof K
                ? function (e) {
                    var t;
                    return null != e && (t = e[K]) && t.apply(e);
                  }
                : function () {
                    return null;
                  };
          function R(e, t) {
            return 0 <= (t = e.indexOf(t)) && e.splice(t, 1), 0 <= t;
          }
          var D = {};
          function N(e) {
            var t, n, r, i;
            if (1 === arguments.length) {
              if (a(e)) return e.slice();
              if (this === D && "string" == typeof e) return [e];
              if ((i = j(e))) {
                for (n = []; !(r = i.next()).done; ) n.push(r.value);
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
          var q =
              "undefined" != typeof Symbol
                ? function (e) {
                    return "AsyncFunction" === e[Symbol.toStringTag];
                  }
                : function () {
                    return !1;
                  },
            B = [
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
              (ue = [
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
            M = {
              VersionChanged:
                "Database version changed by other database connection",
              DatabaseClosed: "Database has been closed",
              Abort: "Transaction aborted",
              TransactionInactive:
                "Transaction has already completed or failed",
              MissingAPI:
                "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb",
            };
          function U(e, t) {
            (this.name = e), (this.message = t);
          }
          function F(e, t) {
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
          function L(e, t, n, r) {
            (this.failures = t),
              (this.failedKeys = r),
              (this.successCount = n),
              (this.message = F(e, t));
          }
          function W(e, t) {
            (this.name = "BulkError"),
              (this.failures = Object.keys(t).map(function (e) {
                return t[e];
              })),
              (this.failuresByPos = t),
              (this.message = F(e, this.failures));
          }
          p(U)
            .from(Error)
            .extend({
              toString: function () {
                return this.name + ": " + this.message;
              },
            }),
            p(L).from(U),
            p(W).from(U);
          var z = B.reduce(function (e, t) {
              return (e[t] = t + "Error"), e;
            }, {}),
            $ = U,
            V = B.reduce(function (e, t) {
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
                    : ((this.message = M[t] || n), (this.inner = null));
              }
              return p(r).from($), (e[t] = r), e;
            }, {});
          (V.Syntax = SyntaxError),
            (V.Type = TypeError),
            (V.Range = RangeError);
          var Y = ue.reduce(function (e, t) {
              return (e[t + "Error"] = V[t]), e;
            }, {}),
            G = B.reduce(function (e, t) {
              return (
                -1 === ["Syntax", "Type", "Range"].indexOf(t) &&
                  (e[t + "Error"] = V[t]),
                e
              );
            }, {});
          function H() {}
          function Q(e) {
            return e;
          }
          function X(e, t) {
            return null == e || e === Q
              ? t
              : function (n) {
                  return t(e(n));
                };
          }
          function J(e, t) {
            return function () {
              e.apply(this, arguments), t.apply(this, arguments);
            };
          }
          function Z(e, t) {
            return e === H
              ? t
              : function () {
                  var n = e.apply(this, arguments);
                  void 0 !== n && (arguments[0] = n);
                  var r = this.onsuccess,
                    i = this.onerror;
                  (this.onsuccess = null), (this.onerror = null);
                  var o = t.apply(this, arguments);
                  return (
                    r &&
                      (this.onsuccess = this.onsuccess
                        ? J(r, this.onsuccess)
                        : r),
                    i && (this.onerror = this.onerror ? J(i, this.onerror) : i),
                    void 0 !== o ? o : n
                  );
                };
          }
          function ee(e, t) {
            return e === H
              ? t
              : function () {
                  e.apply(this, arguments);
                  var n = this.onsuccess,
                    r = this.onerror;
                  (this.onsuccess = this.onerror = null),
                    t.apply(this, arguments),
                    n &&
                      (this.onsuccess = this.onsuccess
                        ? J(n, this.onsuccess)
                        : n),
                    r && (this.onerror = this.onerror ? J(r, this.onerror) : r);
                };
          }
          function te(e, t) {
            return e === H
              ? t
              : function (n) {
                  var r = e.apply(this, arguments);
                  s(n, r);
                  var i = this.onsuccess,
                    o = this.onerror;
                  return (
                    (this.onsuccess = null),
                    (this.onerror = null),
                    (n = t.apply(this, arguments)),
                    i &&
                      (this.onsuccess = this.onsuccess
                        ? J(i, this.onsuccess)
                        : i),
                    o && (this.onerror = this.onerror ? J(o, this.onerror) : o),
                    void 0 === r ? (void 0 === n ? void 0 : n) : s(r, n)
                  );
                };
          }
          function ne(e, t) {
            return e === H
              ? t
              : function () {
                  return (
                    !1 !== t.apply(this, arguments) && e.apply(this, arguments)
                  );
                };
          }
          function re(e, t) {
            return e === H
              ? t
              : function () {
                  var n = e.apply(this, arguments);
                  if (n && "function" == typeof n.then) {
                    for (
                      var r = this, i = arguments.length, o = new Array(i);
                      i--;

                    )
                      o[i] = arguments[i];
                    return n.then(function () {
                      return t.apply(r, o);
                    });
                  }
                  return t.apply(this, arguments);
                };
          }
          (G.ModifyError = L), (G.DexieError = U), (G.BulkError = W);
          var ie =
            "undefined" != typeof location &&
            /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
          function oe(e) {
            ie = e;
          }
          var ae = {},
            se = 100,
            ue =
              ((O =
                "undefined" == typeof Promise
                  ? []
                  : (function () {
                      var e = Promise.resolve();
                      if ("undefined" == typeof crypto || !crypto.subtle)
                        return [e, u(e), e];
                      var t = crypto.subtle.digest(
                        "SHA-512",
                        new Uint8Array([0])
                      );
                      return [t, u(t), e];
                    })()),
              O[0]),
            ce =
              ((B = O[1]), (O = O[2]), (B = B && B.then), ue && ue.constructor),
            le = !!O,
            fe = function (e, t) {
              be.push([e, t]), de && (queueMicrotask(Ie), (de = !1));
            },
            he = !0,
            de = !0,
            pe = [],
            ye = [],
            ve = Q,
            me = {
              id: "global",
              global: !0,
              ref: 0,
              unhandleds: [],
              onunhandled: H,
              pgp: !1,
              env: {},
              finalize: H,
            },
            ge = me,
            be = [],
            we = 0,
            _e = [];
          function Se(e) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            (this._listeners = []), (this._lib = !1);
            var t = (this._PSD = ge);
            if ("function" != typeof e) {
              if (e !== ae) throw new TypeError("Not a function");
              return (
                (this._state = arguments[1]),
                (this._value = arguments[2]),
                void (!1 === this._state && Te(this, this._value))
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
                      var r = t._lib && Ae();
                      n && "function" == typeof n.then
                        ? e(t, function (e, t) {
                            n instanceof Se ? n._then(e, t) : n.then(e, t);
                          })
                        : ((t._state = !0), (t._value = n), Oe(t)),
                        r && Ce();
                    }
                  }, Te.bind(null, t));
                } catch (n) {
                  Te(t, n);
                }
              })(this, e);
          }
          var ke = {
            get: function () {
              var e = ge,
                t = Me;
              function n(n, r) {
                var i = this,
                  o = !e.global && (e !== ge || t !== Me),
                  a = o && !We(),
                  s = new Se(function (t, s) {
                    Ee(i, new xe(He(n, e, o, a), He(r, e, o, a), t, s, e));
                  });
                return (
                  this._consoleTask && (s._consoleTask = this._consoleTask), s
                );
              }
              return (n.prototype = ae), n;
            },
            set: function (e) {
              d(
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
          function xe(e, t, n, r, i) {
            (this.onFulfilled = "function" == typeof e ? e : null),
              (this.onRejected = "function" == typeof t ? t : null),
              (this.resolve = n),
              (this.reject = r),
              (this.psd = i);
          }
          function Te(e, t) {
            var n, r;
            ye.push(t),
              null === e._state &&
                ((n = e._lib && Ae()),
                (t = ve(t)),
                (e._state = !1),
                (e._value = t),
                (r = e),
                pe.some(function (e) {
                  return e._value === r._value;
                }) || pe.push(r),
                Oe(e),
                n && Ce());
          }
          function Oe(e) {
            var t = e._listeners;
            e._listeners = [];
            for (var n = 0, r = t.length; n < r; ++n) Ee(e, t[n]);
            var i = e._PSD;
            --i.ref || i.finalize(),
              0 === we &&
                (++we,
                fe(function () {
                  0 == --we && Ke();
                }, []));
          }
          function Ee(e, t) {
            if (null !== e._state) {
              var n = e._state ? t.onFulfilled : t.onRejected;
              if (null === n)
                return (e._state ? t.resolve : t.reject)(e._value);
              ++t.psd.ref, ++we, fe(Pe, [n, e, t]);
            } else e._listeners.push(t);
          }
          function Pe(e, t, n) {
            try {
              var r,
                i = t._value;
              !t._state && ye.length && (ye = []),
                (r =
                  ie && t._consoleTask
                    ? t._consoleTask.run(function () {
                        return e(i);
                      })
                    : e(i)),
                t._state ||
                  -1 !== ye.indexOf(i) ||
                  (function (e) {
                    for (var t = pe.length; t; )
                      if (pe[--t]._value === e._value) return pe.splice(t, 1);
                  })(t),
                n.resolve(r);
            } catch (e) {
              n.reject(e);
            } finally {
              0 == --we && Ke(), --n.psd.ref || n.psd.finalize();
            }
          }
          function Ie() {
            Ge(me, function () {
              Ae() && Ce();
            });
          }
          function Ae() {
            var e = he;
            return (de = he = !1), e;
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
            de = he = !0;
          }
          function Ke() {
            var e = pe;
            (pe = []),
              e.forEach(function (e) {
                e._PSD.onunhandled.call(null, e._value, e);
              });
            for (var t = _e.slice(0), n = t.length; n; ) t[--n]();
          }
          function je(e) {
            return new Se(ae, !1, e);
          }
          function Re(e, t) {
            var n = ge;
            return function () {
              var r = Ae(),
                i = ge;
              try {
                return Ve(n, !0), e.apply(this, arguments);
              } catch (r) {
                t && t(r);
              } finally {
                Ve(i, !1), r && Ce();
              }
            };
          }
          f(Se.prototype, {
            then: ke,
            _then: function (e, t) {
              Ee(this, new xe(null, null, e, t, ge));
            },
            catch: function (e) {
              if (1 === arguments.length) return this.then(null, e);
              var t = e,
                n = arguments[1];
              return "function" == typeof t
                ? this.then(null, function (e) {
                    return (e instanceof t ? n : je)(e);
                  })
                : this.then(null, function (e) {
                    return (e && e.name === t ? n : je)(e);
                  });
            },
            finally: function (e) {
              return this.then(
                function (t) {
                  return Se.resolve(e()).then(function () {
                    return t;
                  });
                },
                function (t) {
                  return Se.resolve(e()).then(function () {
                    return je(t);
                  });
                }
              );
            },
            timeout: function (e, t) {
              var n = this;
              return e < 1 / 0
                ? new Se(function (r, i) {
                    var o = setTimeout(function () {
                      return i(new V.Timeout(t));
                    }, e);
                    n.then(r, i).finally(clearTimeout.bind(null, o));
                  })
                : this;
            },
          }),
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              d(Se.prototype, Symbol.toStringTag, "Dexie.Promise"),
            (me.env = Ye()),
            f(Se, {
              all: function () {
                var e = N.apply(null, arguments).map(ze);
                return new Se(function (t, n) {
                  0 === e.length && t([]);
                  var r = e.length;
                  e.forEach(function (i, o) {
                    return Se.resolve(i).then(function (n) {
                      (e[o] = n), --r || t(e);
                    }, n);
                  });
                });
              },
              resolve: function (e) {
                return e instanceof Se
                  ? e
                  : e && "function" == typeof e.then
                  ? new Se(function (t, n) {
                      e.then(t, n);
                    })
                  : new Se(ae, !0, e);
              },
              reject: je,
              race: function () {
                var e = N.apply(null, arguments).map(ze);
                return new Se(function (t, n) {
                  e.map(function (e) {
                    return Se.resolve(e).then(t, n);
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
                  return Me;
                },
              },
              newPSD: Fe,
              usePSD: Ge,
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
                return new Se(function (n, r) {
                  return Fe(
                    function (t, n) {
                      var r = ge;
                      (r.unhandleds = []),
                        (r.onunhandled = n),
                        (r.finalize = J(function () {
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
                              0 == --we && Ke();
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
                d(Se, "allSettled", function () {
                  var e = N.apply(null, arguments).map(ze);
                  return new Se(function (t) {
                    0 === e.length && t([]);
                    var n = e.length,
                      r = new Array(n);
                    e.forEach(function (e, i) {
                      return Se.resolve(e)
                        .then(
                          function (e) {
                            return (r[i] = { status: "fulfilled", value: e });
                          },
                          function (e) {
                            return (r[i] = { status: "rejected", reason: e });
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
                d(Se, "any", function () {
                  var e = N.apply(null, arguments).map(ze);
                  return new Se(function (t, n) {
                    0 === e.length && n(new AggregateError([]));
                    var r = e.length,
                      i = new Array(r);
                    e.forEach(function (e, o) {
                      return Se.resolve(e).then(
                        function (e) {
                          return t(e);
                        },
                        function (e) {
                          (i[o] = e), --r || n(new AggregateError(i));
                        }
                      );
                    });
                  });
                }));
          var De = { awaits: 0, echoes: 0, id: 0 },
            Ne = 0,
            qe = [],
            Be = 0,
            Me = 0,
            Ue = 0;
          function Fe(e, t, n, r) {
            var i = ge,
              o = Object.create(i);
            return (
              (o.parent = i),
              (o.ref = 0),
              (o.global = !1),
              (o.id = ++Ue),
              me.env,
              (o.env = le
                ? {
                    Promise: Se,
                    PromiseProp: { value: Se, configurable: !0, writable: !0 },
                    all: Se.all,
                    race: Se.race,
                    allSettled: Se.allSettled,
                    any: Se.any,
                    resolve: Se.resolve,
                    reject: Se.reject,
                  }
                : {}),
              t && s(o, t),
              ++i.ref,
              (o.finalize = function () {
                --this.parent.ref || this.parent.finalize();
              }),
              (r = Ge(o, e, n, r)),
              0 === o.ref && o.finalize(),
              r
            );
          }
          function Le() {
            return (
              De.id || (De.id = ++Ne), ++De.awaits, (De.echoes += se), De.id
            );
          }
          function We() {
            return (
              !!De.awaits &&
              (0 == --De.awaits && (De.id = 0),
              (De.echoes = De.awaits * se),
              !0)
            );
          }
          function ze(e) {
            return De.echoes && e && e.constructor === ce
              ? (Le(),
                e.then(
                  function (e) {
                    return We(), e;
                  },
                  function (e) {
                    return We(), Xe(e);
                  }
                ))
              : e;
          }
          function $e() {
            var e = qe[qe.length - 1];
            qe.pop(), Ve(e, !1);
          }
          function Ve(e, t) {
            var n,
              r = ge;
            (t
              ? !De.echoes || (Be++ && e === ge)
              : !Be || (--Be && e === ge)) ||
              queueMicrotask(
                t
                  ? function (e) {
                      ++Me,
                        (De.echoes && 0 != --De.echoes) ||
                          (De.echoes = De.awaits = De.id = 0),
                        qe.push(ge),
                        Ve(e, !0);
                    }.bind(null, e)
                  : $e
              ),
              e !== ge &&
                ((ge = e),
                r === me && (me.env = Ye()),
                le &&
                  ((n = me.env.Promise),
                  (t = e.env),
                  (r.global || e.global) &&
                    (Object.defineProperty(i, "Promise", t.PromiseProp),
                    (n.all = t.all),
                    (n.race = t.race),
                    (n.resolve = t.resolve),
                    (n.reject = t.reject),
                    t.allSettled && (n.allSettled = t.allSettled),
                    t.any && (n.any = t.any))));
          }
          function Ye() {
            var e = i.Promise;
            return le
              ? {
                  Promise: e,
                  PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"),
                  all: e.all,
                  race: e.race,
                  allSettled: e.allSettled,
                  any: e.any,
                  resolve: e.resolve,
                  reject: e.reject,
                }
              : {};
          }
          function Ge(e, t, n, r, i) {
            var o = ge;
            try {
              return Ve(e, !0), t(n, r, i);
            } finally {
              Ve(o, !1);
            }
          }
          function He(e, t, n, r) {
            return "function" != typeof e
              ? e
              : function () {
                  var i = ge;
                  n && Le(), Ve(t, !0);
                  try {
                    return e.apply(this, arguments);
                  } finally {
                    Ve(i, !1), r && queueMicrotask(We);
                  }
                };
          }
          function Qe(e) {
            Promise === ce && 0 === De.echoes
              ? 0 === Be
                ? e()
                : enqueueNativeMicroTask(e)
              : setTimeout(e, 0);
          }
          -1 === ("" + B).indexOf("[native code]") && (Le = We = H);
          var Xe = Se.reject,
            Je = String.fromCharCode(65535),
            Ze =
              "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
            et = "String expected.",
            tt = [],
            nt = "__dbnames",
            rt = "readonly",
            it = "readwrite";
          function ot(e, t) {
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
          function st(e) {
            return "string" != typeof e || /\./.test(e)
              ? function (e) {
                  return e;
                }
              : function (t) {
                  return void 0 === t[e] && e in t && delete (t = I(t))[e], t;
                };
          }
          function ut() {
            throw V.Type();
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
                      var n = e.length, r = t.length, i = n < r ? n : r, o = 0;
                      o < i;
                      ++o
                    )
                      if (e[o] !== t[o]) return e[o] < t[o] ? -1 : 1;
                    return n === r ? 0 : n < r ? -1 : 1;
                  })(ft(e), ft(t));
                case "Array":
                  return (function (e, t) {
                    for (
                      var n = e.length, r = t.length, i = n < r ? n : r, o = 0;
                      o < i;
                      ++o
                    ) {
                      var a = ct(e[o], t[o]);
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
          var ht =
            ((dt.prototype._trans = function (e, t, n) {
              var r = this._tx || ge.trans,
                i = this.name,
                o =
                  ie &&
                  "undefined" != typeof console &&
                  console.createTask &&
                  console.createTask(
                    "Dexie: "
                      .concat("readonly" === e ? "read" : "write", " ")
                      .concat(this.name)
                  );
              function a(e, n, r) {
                if (!r.schema[i])
                  throw new V.NotFound(
                    "Table " + i + " not part of transaction"
                  );
                return t(r.idbtrans, r);
              }
              var s = Ae();
              try {
                var u =
                  r && r.db._novip === this.db._novip
                    ? r === ge.trans
                      ? r._promise(e, a, n)
                      : Fe(
                          function () {
                            return r._promise(e, a, n);
                          },
                          { trans: r, transless: ge.transless || ge }
                        )
                    : (function e(t, n, r, i) {
                        if (
                          t.idbdb &&
                          (t._state.openComplete || ge.letThrough || t._vip)
                        ) {
                          var o = t._createTransaction(n, r, t._dbSchema);
                          try {
                            o.create(), (t._state.PR1398_maxLoop = 3);
                          } catch (o) {
                            return o.name === z.InvalidState &&
                              t.isOpen() &&
                              0 < --t._state.PR1398_maxLoop
                              ? (console.warn("Dexie: Need to reopen db"),
                                t.close({ disableAutoOpen: !1 }),
                                t.open().then(function () {
                                  return e(t, n, r, i);
                                }))
                              : Xe(o);
                          }
                          return o
                            ._promise(n, function (e, t) {
                              return Fe(function () {
                                return (ge.trans = o), i(e, t, o);
                              });
                            })
                            .then(function (e) {
                              if ("readwrite" === n)
                                try {
                                  o.idbtrans.commit();
                                } catch (e) {}
                              return "readonly" === n
                                ? e
                                : o._completion.then(function () {
                                    return e;
                                  });
                            });
                        }
                        if (t._state.openComplete)
                          return Xe(new V.DatabaseClosed(t._state.dbOpenError));
                        if (!t._state.isBeingOpened) {
                          if (!t._state.autoOpen)
                            return Xe(new V.DatabaseClosed());
                          t.open().catch(H);
                        }
                        return t._state.dbReadyPromise.then(function () {
                          return e(t, n, r, i);
                        });
                      })(this.db, e, [this.name], a);
                return (
                  o &&
                    ((u._consoleTask = o),
                    (u = u.catch(function (e) {
                      return console.trace(e), Xe(e);
                    }))),
                  u
                );
              } finally {
                s && Ce();
              }
            }),
            (dt.prototype.get = function (e, t) {
              var n = this;
              return e && e.constructor === Object
                ? this.where(e).first(t)
                : null == e
                ? Xe(new V.Type("Invalid argument to Table.get()"))
                : this._trans("readonly", function (t) {
                    return n.core.get({ trans: t, key: e }).then(function (e) {
                      return n.hook.reading.fire(e);
                    });
                  }).then(t);
            }),
            (dt.prototype.where = function (e) {
              if ("string" == typeof e) return new this.db.WhereClause(this, e);
              if (a(e))
                return new this.db.WhereClause(
                  this,
                  "[".concat(e.join("+"), "]")
                );
              var t = o(e);
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
              if (n && this.db._maxKey !== Je) {
                var r = n.keyPath.slice(0, t.length);
                return this.where(r).equals(
                  r.map(function (t) {
                    return e[t];
                  })
                );
              }
              !n &&
                ie &&
                console.warn(
                  "The query "
                    .concat(JSON.stringify(e), " on ")
                    .concat(this.name, " would benefit from a ") +
                    "compound index [".concat(t.join("+"), "]")
                );
              var i = this.schema.idxByName,
                s = this.db._deps.indexedDB;
              function u(e, t) {
                return 0 === s.cmp(e, t);
              }
              var c = t.reduce(
                function (t, n) {
                  var r = t[0],
                    o = t[1],
                    s = ((t = i[n]), e[n]);
                  return [
                    r || t,
                    r || !t
                      ? ot(
                          o,
                          t && t.multi
                            ? function (e) {
                                return (
                                  (e = _(e, n)),
                                  a(e) &&
                                    e.some(function (e) {
                                      return u(s, e);
                                    })
                                );
                              }
                            : function (e) {
                                return u(s, _(e, n));
                              }
                        )
                      : o,
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
            (dt.prototype.filter = function (e) {
              return this.toCollection().and(e);
            }),
            (dt.prototype.count = function (e) {
              return this.toCollection().count(e);
            }),
            (dt.prototype.offset = function (e) {
              return this.toCollection().offset(e);
            }),
            (dt.prototype.limit = function (e) {
              return this.toCollection().limit(e);
            }),
            (dt.prototype.each = function (e) {
              return this.toCollection().each(e);
            }),
            (dt.prototype.toArray = function (e) {
              return this.toCollection().toArray(e);
            }),
            (dt.prototype.toCollection = function () {
              return new this.db.Collection(new this.db.WhereClause(this));
            }),
            (dt.prototype.orderBy = function (e) {
              return new this.db.Collection(
                new this.db.WhereClause(
                  this,
                  a(e) ? "[".concat(e.join("+"), "]") : e
                )
              );
            }),
            (dt.prototype.reverse = function () {
              return this.toCollection().reverse();
            }),
            (dt.prototype.mapToClass = function (t) {
              var n,
                r = this.db,
                i = this.name;
              function o() {
                return (null !== n && n.apply(this, arguments)) || this;
              }
              (this.schema.mappedClass = t).prototype instanceof ut &&
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
                })(o, (n = t)),
                Object.defineProperty(o.prototype, "db", {
                  get: function () {
                    return r;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (o.prototype.table = function () {
                  return i;
                }),
                (t = o));
              for (var a = new Set(), s = t.prototype; s; s = u(s))
                Object.getOwnPropertyNames(s).forEach(function (e) {
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
            (dt.prototype.defineClass = function () {
              return this.mapToClass(function (e) {
                s(this, e);
              });
            }),
            (dt.prototype.add = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                i = r.auto,
                o = r.keyPath,
                a = e;
              return (
                o && i && (a = st(o)(e)),
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
                      ? Se.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (o)
                      try {
                        S(e, o, t);
                      } catch (t) {}
                    return t;
                  })
              );
            }),
            (dt.prototype.update = function (e, t) {
              return "object" != typeof e || a(e)
                ? this.where(":id").equals(e).modify(t)
                : void 0 === (e = _(e, this.schema.primKey.keyPath))
                ? Xe(
                    new V.InvalidArgument(
                      "Given object does not contain its primary key"
                    )
                  )
                : this.where(":id").equals(e).modify(t);
            }),
            (dt.prototype.put = function (e, t) {
              var n = this,
                r = this.schema.primKey,
                i = r.auto,
                o = r.keyPath,
                a = e;
              return (
                o && i && (a = st(o)(e)),
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
                      ? Se.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (t) {
                    if (o)
                      try {
                        S(e, o, t);
                      } catch (t) {}
                    return t;
                  })
              );
            }),
            (dt.prototype.delete = function (e) {
              var t = this;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: [e] });
              }).then(function (e) {
                return e.numFailures ? Se.reject(e.failures[0]) : void 0;
              });
            }),
            (dt.prototype.clear = function () {
              var e = this;
              return this._trans("readwrite", function (t) {
                return e.core.mutate({
                  trans: t,
                  type: "deleteRange",
                  range: at,
                });
              }).then(function (e) {
                return e.numFailures ? Se.reject(e.failures[0]) : void 0;
              });
            }),
            (dt.prototype.bulkGet = function (e) {
              var t = this;
              return this._trans("readonly", function (n) {
                return t.core.getMany({ keys: e, trans: n }).then(function (e) {
                  return e.map(function (e) {
                    return t.hook.reading.fire(e);
                  });
                });
              });
            }),
            (dt.prototype.bulkAdd = function (e, t, n) {
              var r = this,
                i = Array.isArray(t) ? t : void 0,
                o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = (s = r.schema.primKey).auto;
                if ((s = s.keyPath) && i)
                  throw new V.InvalidArgument(
                    "bulkAdd(): keys argument invalid on tables with inbound keys"
                  );
                if (i && i.length !== e.length)
                  throw new V.InvalidArgument(
                    "Arguments objects and keys must have the same length"
                  );
                var a = e.length,
                  s = s && n ? e.map(st(s)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "add",
                    keys: i,
                    values: s,
                    wantResults: o,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      i = e.lastResult;
                    if (((e = e.failures), 0 === t)) return o ? n : i;
                    throw new W(
                      ""
                        .concat(r.name, ".bulkAdd(): ")
                        .concat(t, " of ")
                        .concat(a, " operations failed"),
                      e
                    );
                  });
              });
            }),
            (dt.prototype.bulkPut = function (e, t, n) {
              var r = this,
                i = Array.isArray(t) ? t : void 0,
                o = (n = n || (i ? void 0 : t)) ? n.allKeys : void 0;
              return this._trans("readwrite", function (t) {
                var n = (s = r.schema.primKey).auto;
                if ((s = s.keyPath) && i)
                  throw new V.InvalidArgument(
                    "bulkPut(): keys argument invalid on tables with inbound keys"
                  );
                if (i && i.length !== e.length)
                  throw new V.InvalidArgument(
                    "Arguments objects and keys must have the same length"
                  );
                var a = e.length,
                  s = s && n ? e.map(st(s)) : e;
                return r.core
                  .mutate({
                    trans: t,
                    type: "put",
                    keys: i,
                    values: s,
                    wantResults: o,
                  })
                  .then(function (e) {
                    var t = e.numFailures,
                      n = e.results,
                      i = e.lastResult;
                    if (((e = e.failures), 0 === t)) return o ? n : i;
                    throw new W(
                      ""
                        .concat(r.name, ".bulkPut(): ")
                        .concat(t, " of ")
                        .concat(a, " operations failed"),
                      e
                    );
                  });
              });
            }),
            (dt.prototype.bulkUpdate = function (e) {
              var t = this,
                n = this.core,
                r = e.map(function (e) {
                  return e.key;
                }),
                i = e.map(function (e) {
                  return e.changes;
                }),
                o = [];
              return this._trans("readwrite", function (a) {
                return n
                  .getMany({ trans: a, keys: r, cache: "clone" })
                  .then(function (s) {
                    var u = [],
                      c = [];
                    e.forEach(function (e, n) {
                      var r = e.key,
                        i = e.changes,
                        a = s[n];
                      if (a) {
                        for (var l = 0, f = Object.keys(i); l < f.length; l++) {
                          var h = f[l],
                            d = i[h];
                          if (h === t.schema.primKey.keyPath) {
                            if (0 !== ct(d, r))
                              throw new V.Constraint(
                                "Cannot update primary key in bulkUpdate()"
                              );
                          } else S(a, h, d);
                        }
                        o.push(n), u.push(r), c.push(a);
                      }
                    });
                    var l = u.length;
                    return n
                      .mutate({
                        trans: a,
                        type: "put",
                        keys: u,
                        values: c,
                        updates: { keys: r, changeSpecs: i },
                      })
                      .then(function (e) {
                        var n = e.numFailures,
                          r = e.failures;
                        if (0 === n) return l;
                        for (var i = 0, a = Object.keys(r); i < a.length; i++) {
                          var s,
                            u = a[i],
                            c = o[Number(u)];
                          null != c && ((s = r[u]), delete r[u], (r[c] = s));
                        }
                        throw new W(
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
            (dt.prototype.bulkDelete = function (e) {
              var t = this,
                n = e.length;
              return this._trans("readwrite", function (n) {
                return t.core.mutate({ trans: n, type: "delete", keys: e });
              }).then(function (e) {
                var r = e.numFailures,
                  i = e.lastResult;
                if (((e = e.failures), 0 === r)) return i;
                throw new W(
                  ""
                    .concat(t.name, ".bulkDelete(): ")
                    .concat(r, " of ")
                    .concat(n, " operations failed"),
                  e
                );
              });
            }),
            dt);
          function dt() {}
          function pt(e) {
            function t(t, r) {
              if (r) {
                for (var i = arguments.length, o = new Array(i - 1); --i; )
                  o[i - 1] = arguments[i];
                return n[t].subscribe.apply(null, o), e;
              }
              if ("string" == typeof t) return n[t];
            }
            var n = {};
            t.addEventType = s;
            for (var r = 1, i = arguments.length; r < i; ++r) s(arguments[r]);
            return t;
            function s(e, r, i) {
              if ("object" != typeof e) {
                var u;
                r = r || ne;
                var c = {
                  subscribers: [],
                  fire: (i = i || H),
                  subscribe: function (e) {
                    -1 === c.subscribers.indexOf(e) &&
                      (c.subscribers.push(e), (c.fire = r(c.fire, e)));
                  },
                  unsubscribe: function (e) {
                    (c.subscribers = c.subscribers.filter(function (t) {
                      return t !== e;
                    })),
                      (c.fire = c.subscribers.reduce(r, i));
                  },
                };
                return (n[e] = t[e] = c);
              }
              o((u = e)).forEach(function (e) {
                var t = u[e];
                if (a(t)) s(e, u[e][0], u[e][1]);
                else {
                  if ("asap" !== t)
                    throw new V.InvalidArgument("Invalid event config");
                  var n = s(e, Q, function () {
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
            e.filter = ot(e.filter, t);
          }
          function gt(e, t, n) {
            var r = e.replayFilter;
            (e.replayFilter = r
              ? function () {
                  return ot(r(), t());
                }
              : t),
              (e.justLimit = n && !r);
          }
          function bt(e, t) {
            if (e.isPrimKey) return t.primaryKey;
            var n = t.getIndexByKeyPath(e.index);
            if (!n)
              throw new V.Schema(
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
            var i = e.replayFilter ? ot(e.filter, e.replayFilter()) : e.filter;
            if (e.or) {
              var o = {},
                a = function (e, n, r) {
                  var a, s;
                  (i &&
                    !i(
                      n,
                      r,
                      function (e) {
                        return n.stop(e);
                      },
                      function (e) {
                        return n.fail(e);
                      }
                    )) ||
                    ("[object ArrayBuffer]" == (s = "" + (a = n.primaryKey)) &&
                      (s = "" + new Uint8Array(a)),
                    l(o, s) || ((o[s] = !0), t(e, n, r)));
                };
              return Promise.all([
                e.or._iterate(a, n),
                St(wt(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper),
              ]);
            }
            return St(
              wt(e, r, n),
              ot(e.algorithm, i),
              t,
              !e.keysOnly && e.valueMapper
            );
          }
          function St(e, t, n, r) {
            var i = Re(
              r
                ? function (e, t, i) {
                    return n(r(e), t, i);
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
                        e.stop(t), (n = H);
                      },
                      function (t) {
                        e.fail(t), (n = H);
                      }
                    )) ||
                    i(e.value, e, function (e) {
                      return (n = e);
                    }),
                    n();
                });
            });
          }
          O = Symbol();
          var kt =
            ((xt.prototype.execute = function (e) {
              var t =
                null === (t = this.replacePrefix) || void 0 === t
                  ? void 0
                  : t[0];
              return t && "string" == typeof e && e.startsWith(t)
                ? this.replacePrefix[1] + e.substring(t.length)
                : e;
            }),
            xt);
          function xt(e) {
            Object.assign(this, e);
          }
          var Tt =
            ((Ot.prototype._read = function (e, t) {
              var n = this._ctx;
              return n.error
                ? n.table._trans(null, Xe.bind(null, n.error))
                : n.table._trans("readonly", e).then(t);
            }),
            (Ot.prototype._write = function (e) {
              var t = this._ctx;
              return t.error
                ? t.table._trans(null, Xe.bind(null, t.error))
                : t.table._trans("readwrite", e, "locked");
            }),
            (Ot.prototype._addAlgorithm = function (e) {
              var t = this._ctx;
              t.algorithm = ot(t.algorithm, e);
            }),
            (Ot.prototype._iterate = function (e, t) {
              return _t(this._ctx, e, t, this._ctx.table.core);
            }),
            (Ot.prototype.clone = function (e) {
              var t = Object.create(this.constructor.prototype),
                n = Object.create(this._ctx);
              return e && s(n, e), (t._ctx = n), t;
            }),
            (Ot.prototype.raw = function () {
              return (this._ctx.valueMapper = null), this;
            }),
            (Ot.prototype.each = function (e) {
              var t = this._ctx;
              return this._read(function (n) {
                return _t(t, e, n, t.table.core);
              });
            }),
            (Ot.prototype.count = function (e) {
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
                var i = 0;
                return _t(
                  n,
                  function () {
                    return ++i, !1;
                  },
                  e,
                  r
                ).then(function () {
                  return i;
                });
              }).then(e);
            }),
            (Ot.prototype.sortBy = function (e, t) {
              var n = e.split(".").reverse(),
                r = n[0],
                i = n.length - 1;
              function o(e, t) {
                return t ? o(e[n[t]], t - 1) : e[r];
              }
              var a = "next" === this._ctx.dir ? 1 : -1;
              function s(e, t) {
                return (e = o(e, i)) < (t = o(t, i)) ? -a : t < e ? a : 0;
              }
              return this.toArray(function (e) {
                return e.sort(s);
              }).then(t);
            }),
            (Ot.prototype.toArray = function (e) {
              var t = this;
              return this._read(function (e) {
                var n = t._ctx;
                if ("next" === n.dir && vt(n, !0) && 0 < n.limit) {
                  var r = n.valueMapper,
                    i = bt(n, n.table.core.schema);
                  return n.table.core
                    .query({
                      trans: e,
                      limit: n.limit,
                      values: !0,
                      query: { index: i, range: n.range },
                    })
                    .then(function (e) {
                      return (e = e.result), r ? e.map(r) : e;
                    });
                }
                var o = [];
                return _t(
                  n,
                  function (e) {
                    return o.push(e);
                  },
                  e,
                  n.table.core
                ).then(function () {
                  return o;
                });
              }, e);
            }),
            (Ot.prototype.offset = function (e) {
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
            (Ot.prototype.limit = function (e) {
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
            (Ot.prototype.until = function (e, t) {
              return (
                mt(this._ctx, function (n, r, i) {
                  return !e(n.value) || (r(i), t);
                }),
                this
              );
            }),
            (Ot.prototype.first = function (e) {
              return this.limit(1)
                .toArray(function (e) {
                  return e[0];
                })
                .then(e);
            }),
            (Ot.prototype.last = function (e) {
              return this.reverse().first(e);
            }),
            (Ot.prototype.filter = function (e) {
              var t;
              return (
                mt(this._ctx, function (t) {
                  return e(t.value);
                }),
                ((t = this._ctx).isMatch = ot(t.isMatch, e)),
                this
              );
            }),
            (Ot.prototype.and = function (e) {
              return this.filter(e);
            }),
            (Ot.prototype.or = function (e) {
              return new this.db.WhereClause(this._ctx.table, e, this);
            }),
            (Ot.prototype.reverse = function () {
              return (
                (this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev"),
                this._ondirectionchange &&
                  this._ondirectionchange(this._ctx.dir),
                this
              );
            }),
            (Ot.prototype.desc = function () {
              return this.reverse();
            }),
            (Ot.prototype.eachKey = function (e) {
              var t = this._ctx;
              return (
                (t.keysOnly = !t.isMatch),
                this.each(function (t, n) {
                  e(n.key, n);
                })
              );
            }),
            (Ot.prototype.eachUniqueKey = function (e) {
              return (this._ctx.unique = "unique"), this.eachKey(e);
            }),
            (Ot.prototype.eachPrimaryKey = function (e) {
              var t = this._ctx;
              return (
                (t.keysOnly = !t.isMatch),
                this.each(function (t, n) {
                  e(n.primaryKey, n);
                })
              );
            }),
            (Ot.prototype.keys = function (e) {
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
            (Ot.prototype.primaryKeys = function (e) {
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
            (Ot.prototype.uniqueKeys = function (e) {
              return (this._ctx.unique = "unique"), this.keys(e);
            }),
            (Ot.prototype.firstKey = function (e) {
              return this.limit(1)
                .keys(function (e) {
                  return e[0];
                })
                .then(e);
            }),
            (Ot.prototype.lastKey = function (e) {
              return this.reverse().firstKey(e);
            }),
            (Ot.prototype.distinct = function () {
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
            (Ot.prototype.modify = function (e) {
              var t = this,
                n = this._ctx;
              return this._write(function (r) {
                var i, a, s;
                function u(e, t) {
                  var n = t.failures;
                  (t = t.numFailures), (y += e - t);
                  for (var r = 0, i = o(n); r < i.length; r++) {
                    var a = i[r];
                    p.push(n[a]);
                  }
                }
                s =
                  "function" == typeof e
                    ? e
                    : ((i = o(e)),
                      (a = i.length),
                      function (t) {
                        for (var n = !1, r = 0; r < a; ++r) {
                          var o = i[r],
                            s = e[o],
                            u = _(t, o);
                          s instanceof kt
                            ? (S(t, o, s.execute(u)), (n = !0))
                            : u !== s && (S(t, o, s), (n = !0));
                        }
                        return n;
                      });
                var c = n.table.core,
                  l = c.schema.primaryKey,
                  f = l.outbound,
                  h = l.extractKey,
                  d = t.db._options.modifyChunkSize || 200,
                  p = [],
                  y = 0,
                  v = [];
                return t
                  .clone()
                  .primaryKeys()
                  .then(function (t) {
                    function i(o) {
                      var a = Math.min(d, t.length - o);
                      return c
                        .getMany({
                          trans: r,
                          keys: t.slice(o, o + a),
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
                              w = { value: I(b), primKey: t[o + g] };
                            !1 !== s.call(w, w.value, w) &&
                              (null == w.value
                                ? m.push(t[o + g])
                                : f || 0 === ct(h(b), h(w.value))
                                ? (y.push(w.value), f && v.push(t[o + g]))
                                : (m.push(t[o + g]), p.push(w.value)));
                          }
                          var _ = vt(n) &&
                            n.limit === 1 / 0 &&
                            ("function" != typeof e || e === Et) && {
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
                                  u(p.length, e);
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
                                    return u(y.length, e);
                                  })
                              );
                            })
                            .then(function () {
                              return (
                                (0 < m.length || (_ && e === Et)) &&
                                c
                                  .mutate({
                                    trans: r,
                                    type: "delete",
                                    keys: m,
                                    criteria: _,
                                  })
                                  .then(function (e) {
                                    return u(m.length, e);
                                  })
                              );
                            })
                            .then(function () {
                              return t.length > o + a && i(o + d);
                            });
                        });
                    }
                    return i(0).then(function () {
                      if (0 < p.length)
                        throw new L(
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
            (Ot.prototype.delete = function () {
              var e = this._ctx,
                t = e.range;
              return vt(e) && (e.isPrimKey || 3 === t.type)
                ? this._write(function (n) {
                    var r = e.table.core.schema.primaryKey,
                      i = t;
                    return e.table.core
                      .count({ trans: n, query: { index: r, range: i } })
                      .then(function (t) {
                        return e.table.core
                          .mutate({ trans: n, type: "deleteRange", range: i })
                          .then(function (e) {
                            var n = e.failures;
                            if ((e.lastResult, e.results, (e = e.numFailures)))
                              throw new L(
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
                : this.modify(Et);
            }),
            Ot);
          function Ot() {}
          var Et = function (e, t) {
            return (t.value = null);
          };
          function Pt(e, t) {
            return e < t ? -1 : e === t ? 0 : 1;
          }
          function It(e, t) {
            return t < e ? -1 : e === t ? 0 : 1;
          }
          function At(e, t, n) {
            return (
              ((e = e instanceof Dt ? new e.Collection(e) : e)._ctx.error =
                new (n || TypeError)(t)),
              e
            );
          }
          function Ct(e) {
            return new e.Collection(e, function () {
              return Rt("");
            }).limit(0);
          }
          function Kt(e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              c,
              l,
              f = n.length;
            if (
              !n.every(function (e) {
                return "string" == typeof e;
              })
            )
              return At(e, et);
            function h(e) {
              (i =
                "next" === e
                  ? function (e) {
                      return e.toUpperCase();
                    }
                  : function (e) {
                      return e.toLowerCase();
                    }),
                (o =
                  "next" === e
                    ? function (e) {
                        return e.toLowerCase();
                      }
                    : function (e) {
                        return e.toUpperCase();
                      }),
                (a = "next" === e ? Pt : It);
              var t = n
                .map(function (e) {
                  return { lower: o(e), upper: i(e) };
                })
                .sort(function (e, t) {
                  return a(e.lower, t.lower);
                });
              (s = t.map(function (e) {
                return e.upper;
              })),
                (u = t.map(function (e) {
                  return e.lower;
                })),
                (l = "next" === (c = e) ? "" : r);
            }
            h("next"),
              ((e = new e.Collection(e, function () {
                return jt(s[0], u[f - 1] + r);
              }))._ondirectionchange = function (e) {
                h(e);
              });
            var d = 0;
            return (
              e._addAlgorithm(function (e, n, r) {
                var i = e.key;
                if ("string" != typeof i) return !1;
                var h = o(i);
                if (t(h, u, d)) return !0;
                for (var p = null, y = d; y < f; ++y) {
                  var v = (function (e, t, n, r, i, o) {
                    for (
                      var a = Math.min(e.length, r.length), s = -1, u = 0;
                      u < a;
                      ++u
                    ) {
                      var c = t[u];
                      if (c !== r[u])
                        return i(e[u], n[u]) < 0
                          ? e.substr(0, u) + n[u] + n.substr(u + 1)
                          : i(e[u], r[u]) < 0
                          ? e.substr(0, u) + r[u] + n.substr(u + 1)
                          : 0 <= s
                          ? e.substr(0, s) + t[s] + n.substr(s + 1)
                          : null;
                      i(e[u], c) < 0 && (s = u);
                    }
                    return a < r.length && "next" === o
                      ? e + n.substr(e.length)
                      : a < e.length && "prev" === o
                      ? e.substr(0, n.length)
                      : s < 0
                      ? null
                      : e.substr(0, s) + r[s] + n.substr(s + 1);
                  })(i, h, s[y], u[y], a, c);
                  null === v && null === p
                    ? (d = y + 1)
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
          function jt(e, t, n, r) {
            return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
          }
          function Rt(e) {
            return { type: 1, lower: e, upper: e };
          }
          var Dt =
            (Object.defineProperty(Nt.prototype, "Collection", {
              get: function () {
                return this._ctx.table.db.Collection;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (Nt.prototype.between = function (e, t, n, r) {
              (n = !1 !== n), (r = !0 === r);
              try {
                return 0 < this._cmp(e, t) ||
                  (0 === this._cmp(e, t) && (n || r) && (!n || !r))
                  ? Ct(this)
                  : new this.Collection(this, function () {
                      return jt(e, t, !n, !r);
                    });
              } catch (e) {
                return At(this, Ze);
              }
            }),
            (Nt.prototype.equals = function (e) {
              return null == e
                ? At(this, Ze)
                : new this.Collection(this, function () {
                    return Rt(e);
                  });
            }),
            (Nt.prototype.above = function (e) {
              return null == e
                ? At(this, Ze)
                : new this.Collection(this, function () {
                    return jt(e, void 0, !0);
                  });
            }),
            (Nt.prototype.aboveOrEqual = function (e) {
              return null == e
                ? At(this, Ze)
                : new this.Collection(this, function () {
                    return jt(e, void 0, !1);
                  });
            }),
            (Nt.prototype.below = function (e) {
              return null == e
                ? At(this, Ze)
                : new this.Collection(this, function () {
                    return jt(void 0, e, !1, !0);
                  });
            }),
            (Nt.prototype.belowOrEqual = function (e) {
              return null == e
                ? At(this, Ze)
                : new this.Collection(this, function () {
                    return jt(void 0, e);
                  });
            }),
            (Nt.prototype.startsWith = function (e) {
              return "string" != typeof e
                ? At(this, et)
                : this.between(e, e + Je, !0, !0);
            }),
            (Nt.prototype.startsWithIgnoreCase = function (e) {
              return "" === e
                ? this.startsWith(e)
                : Kt(
                    this,
                    function (e, t) {
                      return 0 === e.indexOf(t[0]);
                    },
                    [e],
                    Je
                  );
            }),
            (Nt.prototype.equalsIgnoreCase = function (e) {
              return Kt(
                this,
                function (e, t) {
                  return e === t[0];
                },
                [e],
                ""
              );
            }),
            (Nt.prototype.anyOfIgnoreCase = function () {
              var e = N.apply(D, arguments);
              return 0 === e.length
                ? Ct(this)
                : Kt(
                    this,
                    function (e, t) {
                      return -1 !== t.indexOf(e);
                    },
                    e,
                    ""
                  );
            }),
            (Nt.prototype.startsWithAnyOfIgnoreCase = function () {
              var e = N.apply(D, arguments);
              return 0 === e.length
                ? Ct(this)
                : Kt(
                    this,
                    function (e, t) {
                      return t.some(function (t) {
                        return 0 === e.indexOf(t);
                      });
                    },
                    e,
                    Je
                  );
            }),
            (Nt.prototype.anyOf = function () {
              var e = this,
                t = N.apply(D, arguments),
                n = this._cmp;
              try {
                t.sort(n);
              } catch (r) {
                return At(this, Ze);
              }
              if (0 === t.length) return Ct(this);
              var r = new this.Collection(this, function () {
                return jt(t[0], t[t.length - 1]);
              });
              r._ondirectionchange = function (r) {
                (n = "next" === r ? e._ascending : e._descending), t.sort(n);
              };
              var i = 0;
              return (
                r._addAlgorithm(function (e, r, o) {
                  for (var a = e.key; 0 < n(a, t[i]); )
                    if (++i === t.length) return r(o), !1;
                  return (
                    0 === n(a, t[i]) ||
                    (r(function () {
                      e.continue(t[i]);
                    }),
                    !1)
                  );
                }),
                r
              );
            }),
            (Nt.prototype.notEqual = function (e) {
              return this.inAnyRange(
                [
                  [-1 / 0, e],
                  [e, this.db._maxKey],
                ],
                { includeLowers: !1, includeUppers: !1 }
              );
            }),
            (Nt.prototype.noneOf = function () {
              var e = N.apply(D, arguments);
              if (0 === e.length) return new this.Collection(this);
              try {
                e.sort(this._ascending);
              } catch (e) {
                return At(this, Ze);
              }
              var t = e.reduce(function (e, t) {
                return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]];
              }, null);
              return (
                t.push([e[e.length - 1], this.db._maxKey]),
                this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 })
              );
            }),
            (Nt.prototype.inAnyRange = function (e, t) {
              var n = this,
                r = this._cmp,
                i = this._ascending,
                o = this._descending,
                a = this._min,
                s = this._max;
              if (0 === e.length) return Ct(this);
              if (
                !e.every(function (e) {
                  return (
                    void 0 !== e[0] && void 0 !== e[1] && i(e[0], e[1]) <= 0
                  );
                })
              )
                return At(
                  this,
                  "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                  V.InvalidArgument
                );
              var u,
                c = !t || !1 !== t.includeLowers,
                l = t && !0 === t.includeUppers,
                f = i;
              function h(e, t) {
                return f(e[0], t[0]);
              }
              try {
                (u = e.reduce(function (e, t) {
                  for (var n = 0, i = e.length; n < i; ++n) {
                    var o = e[n];
                    if (r(t[0], o[1]) < 0 && 0 < r(t[1], o[0])) {
                      (o[0] = a(o[0], t[0])), (o[1] = s(o[1], t[1]));
                      break;
                    }
                  }
                  return n === i && e.push(t), e;
                }, [])).sort(h);
              } catch (e) {
                return At(this, Ze);
              }
              var d = 0,
                p = l
                  ? function (e) {
                      return 0 < i(e, u[d][1]);
                    }
                  : function (e) {
                      return 0 <= i(e, u[d][1]);
                    },
                y = c
                  ? function (e) {
                      return 0 < o(e, u[d][0]);
                    }
                  : function (e) {
                      return 0 <= o(e, u[d][0]);
                    },
                v = p;
              return (
                ((e = new this.Collection(this, function () {
                  return jt(u[0][0], u[u.length - 1][1], !c, !l);
                }))._ondirectionchange = function (e) {
                  (f = "next" === e ? ((v = p), i) : ((v = y), o)), u.sort(h);
                }),
                e._addAlgorithm(function (e, t, r) {
                  for (var o, a = e.key; v(a); )
                    if (++d === u.length) return t(r), !1;
                  return (
                    (!p((o = a)) && !y(o)) ||
                    (0 === n._cmp(a, u[d][1]) ||
                      0 === n._cmp(a, u[d][0]) ||
                      t(function () {
                        f === i ? e.continue(u[d][0]) : e.continue(u[d][1]);
                      }),
                    !1)
                  );
                }),
                e
              );
            }),
            (Nt.prototype.startsWithAnyOf = function () {
              var e = N.apply(D, arguments);
              return e.every(function (e) {
                return "string" == typeof e;
              })
                ? 0 === e.length
                  ? Ct(this)
                  : this.inAnyRange(
                      e.map(function (e) {
                        return [e, e + Je];
                      })
                    )
                : At(this, "startsWithAnyOf() only works with strings");
            }),
            Nt);
          function Nt() {}
          function qt(e) {
            return Re(function (t) {
              return Bt(t), e(t.target.error), !1;
            });
          }
          function Bt(e) {
            e.stopPropagation && e.stopPropagation(),
              e.preventDefault && e.preventDefault();
          }
          var Mt = "storagemutated",
            Ut = "x-storagemutated-1",
            Ft = pt(null, Mt),
            Lt =
              ((Wt.prototype._lock = function () {
                return (
                  b(!ge.global),
                  ++this._reculock,
                  1 !== this._reculock || ge.global || (ge.lockOwnerFor = this),
                  this
                );
              }),
              (Wt.prototype._unlock = function () {
                if ((b(!ge.global), 0 == --this._reculock))
                  for (
                    ge.global || (ge.lockOwnerFor = null);
                    0 < this._blockedFuncs.length && !this._locked();

                  ) {
                    var e = this._blockedFuncs.shift();
                    try {
                      Ge(e[1], e[0]);
                    } catch (e) {}
                  }
                return this;
              }),
              (Wt.prototype._locked = function () {
                return this._reculock && ge.lockOwnerFor !== this;
              }),
              (Wt.prototype.create = function (e) {
                var t = this;
                if (!this.mode) return this;
                var n = this.db.idbdb,
                  r = this.db._state.dbOpenError;
                if ((b(!this.idbtrans), !e && !n))
                  switch (r && r.name) {
                    case "DatabaseClosedError":
                      throw new V.DatabaseClosed(r);
                    case "MissingAPIError":
                      throw new V.MissingAPI(r.message, r);
                    default:
                      throw new V.OpenFailed(r);
                  }
                if (!this.active) throw new V.TransactionInactive();
                return (
                  b(null === this._completion._state),
                  ((e = this.idbtrans =
                    e ||
                    (this.db.core || n).transaction(
                      this.storeNames,
                      this.mode,
                      { durability: this.chromeTransactionDurability }
                    )).onerror = Re(function (n) {
                    Bt(n), t._reject(e.error);
                  })),
                  (e.onabort = Re(function (n) {
                    Bt(n),
                      t.active && t._reject(new V.Abort(e.error)),
                      (t.active = !1),
                      t.on("abort").fire(n);
                  })),
                  (e.oncomplete = Re(function () {
                    (t.active = !1),
                      t._resolve(),
                      "mutatedParts" in e &&
                        Ft.storagemutated.fire(e.mutatedParts);
                  })),
                  this
                );
              }),
              (Wt.prototype._promise = function (e, t, n) {
                var r = this;
                if ("readwrite" === e && "readwrite" !== this.mode)
                  return Xe(new V.ReadOnly("Transaction is readonly"));
                if (!this.active) return Xe(new V.TransactionInactive());
                if (this._locked())
                  return new Se(function (i, o) {
                    r._blockedFuncs.push([
                      function () {
                        r._promise(e, t, n).then(i, o);
                      },
                      ge,
                    ]);
                  });
                if (n)
                  return Fe(function () {
                    var e = new Se(function (e, n) {
                      r._lock();
                      var i = t(e, n, r);
                      i && i.then && i.then(e, n);
                    });
                    return (
                      e.finally(function () {
                        return r._unlock();
                      }),
                      (e._lib = !0),
                      e
                    );
                  });
                var i = new Se(function (e, n) {
                  var i = t(e, n, r);
                  i && i.then && i.then(e, n);
                });
                return (i._lib = !0), i;
              }),
              (Wt.prototype._root = function () {
                return this.parent ? this.parent._root() : this;
              }),
              (Wt.prototype.waitFor = function (e) {
                var t,
                  n = this._root(),
                  r = Se.resolve(e);
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
                var i = n._waitingFor;
                return new Se(function (e, t) {
                  r.then(
                    function (t) {
                      return n._waitingQueue.push(Re(e.bind(null, t)));
                    },
                    function (e) {
                      return n._waitingQueue.push(Re(t.bind(null, e)));
                    }
                  ).finally(function () {
                    n._waitingFor === i && (n._waitingFor = null);
                  });
                });
              }),
              (Wt.prototype.abort = function () {
                this.active &&
                  ((this.active = !1),
                  this.idbtrans && this.idbtrans.abort(),
                  this._reject(new V.Abort()));
              }),
              (Wt.prototype.table = function (e) {
                var t = this._memoizedTables || (this._memoizedTables = {});
                if (l(t, e)) return t[e];
                var n = this.schema[e];
                if (!n)
                  throw new V.NotFound(
                    "Table " + e + " not part of transaction"
                  );
                return (
                  ((n = new this.db.Table(e, n, this)).core =
                    this.db.core.table(e)),
                  (t[e] = n)
                );
              }),
              Wt);
          function Wt() {}
          function zt(e, t, n, r, i, o, a) {
            return {
              name: e,
              keyPath: t,
              unique: n,
              multi: r,
              auto: i,
              compound: o,
              src:
                (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + $t(t),
            };
          }
          function $t(e) {
            return "string" == typeof e
              ? e
              : e
              ? "[" + [].join.call(e, "+") + "]"
              : "";
          }
          function Vt(e, t, n) {
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
          var Yt = function (e) {
            try {
              return (
                e.only([[]]),
                (Yt = function () {
                  return [[]];
                }),
                [[]]
              );
            } catch (e) {
              return (
                (Yt = function () {
                  return Je;
                }),
                Je
              );
            }
          };
          function Gt(e) {
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
          function Ht(e) {
            return [].slice.call(e);
          }
          var Qt = 0;
          function Xt(e) {
            return null == e
              ? ":id"
              : "string" == typeof e
              ? e
              : "[".concat(e.join("+"), "]");
          }
          function Jt(e, t, n) {
            function r(e) {
              if (3 === e.type) return null;
              if (4 === e.type)
                throw new Error("Cannot convert never type to IDBKeyRange");
              var n = e.lower,
                r = e.upper,
                i = e.lowerOpen;
              return (
                (e = e.upperOpen),
                void 0 === n
                  ? void 0 === r
                    ? null
                    : t.upperBound(r, !!e)
                  : void 0 === r
                  ? t.lowerBound(n, !!i)
                  : t.bound(n, r, !!i, !!e)
              );
            }
            function i(e) {
              var t,
                n = e.name;
              return {
                name: n,
                schema: e,
                mutate: function (e) {
                  var t = e.trans,
                    i = e.type,
                    o = e.keys,
                    a = e.values,
                    s = e.range;
                  return new Promise(function (e, u) {
                    e = Re(e);
                    var c = t.objectStore(n),
                      l = null == c.keyPath,
                      f = "put" === i || "add" === i;
                    if (!f && "delete" !== i && "deleteRange" !== i)
                      throw new Error("Invalid operation type: " + i);
                    var h,
                      d = (o || a || { length: 1 }).length;
                    if (o && a && o.length !== a.length)
                      throw new Error(
                        "Given keys array must have same length as given values array."
                      );
                    if (0 === d)
                      return e({
                        numFailures: 0,
                        failures: {},
                        results: [],
                        lastResult: void 0,
                      });
                    function p(e) {
                      ++m, Bt(e);
                    }
                    var y = [],
                      v = [],
                      m = 0;
                    if ("deleteRange" === i) {
                      if (4 === s.type)
                        return e({
                          numFailures: m,
                          failures: v,
                          results: [],
                          lastResult: void 0,
                        });
                      3 === s.type
                        ? y.push((h = c.clear()))
                        : y.push((h = c.delete(r(s))));
                    } else {
                      var g = (l = f ? (l ? [a, o] : [a, null]) : [o, null])[0],
                        b = l[1];
                      if (f)
                        for (var w = 0; w < d; ++w)
                          y.push(
                            (h =
                              b && void 0 !== b[w]
                                ? c[i](g[w], b[w])
                                : c[i](g[w]))
                          ),
                            (h.onerror = p);
                      else
                        for (w = 0; w < d; ++w)
                          y.push((h = c[i](g[w]))), (h.onerror = p);
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
                            "delete" === i
                              ? o
                              : y.map(function (e) {
                                  return e.result;
                                }),
                          lastResult: t,
                        });
                    }
                    (h.onerror = function (e) {
                      p(e), _(e);
                    }),
                      (h.onsuccess = _);
                  });
                },
                getMany: function (e) {
                  var t = e.trans,
                    r = e.keys;
                  return new Promise(function (e, i) {
                    e = Re(e);
                    for (
                      var o,
                        a = t.objectStore(n),
                        s = r.length,
                        u = new Array(s),
                        c = 0,
                        l = 0,
                        f = function (t) {
                          (t = t.target),
                            (u[t._pos] = t.result),
                            ++l === c && e(u);
                        },
                        h = qt(i),
                        d = 0;
                      d < s;
                      ++d
                    )
                      null != r[d] &&
                        (((o = a.get(r[d]))._pos = d),
                        (o.onsuccess = f),
                        (o.onerror = h),
                        ++c);
                    0 === c && e(u);
                  });
                },
                get: function (e) {
                  var t = e.trans,
                    r = e.key;
                  return new Promise(function (e, i) {
                    e = Re(e);
                    var o = t.objectStore(n).get(r);
                    (o.onsuccess = function (t) {
                      return e(t.target.result);
                    }),
                      (o.onerror = qt(i));
                  });
                },
                query:
                  ((t = l),
                  function (e) {
                    return new Promise(function (i, o) {
                      i = Re(i);
                      var a,
                        s,
                        u,
                        c = e.trans,
                        l = e.values,
                        f = e.limit,
                        h = e.query,
                        d = f === 1 / 0 ? void 0 : f,
                        p = h.index;
                      if (
                        ((h = h.range),
                        (c = c.objectStore(n)),
                        (p = p.isPrimaryKey ? c : c.index(p.name)),
                        (h = r(h)),
                        0 === f)
                      )
                        return i({ result: [] });
                      t
                        ? (((d = l
                            ? p.getAll(h, d)
                            : p.getAllKeys(h, d)).onsuccess = function (e) {
                            return i({ result: e.target.result });
                          }),
                          (d.onerror = qt(o)))
                        : ((a = 0),
                          (s =
                            !l && "openKeyCursor" in p
                              ? p.openKeyCursor(h)
                              : p.openCursor(h)),
                          (u = []),
                          (s.onsuccess = function (e) {
                            var t = s.result;
                            return t
                              ? (u.push(l ? t.value : t.primaryKey),
                                ++a === f
                                  ? i({ result: u })
                                  : void t.continue())
                              : i({ result: u });
                          }),
                          (s.onerror = qt(o)));
                    });
                  }),
                openCursor: function (e) {
                  var t = e.trans,
                    i = e.values,
                    o = e.query,
                    a = e.reverse,
                    s = e.unique;
                  return new Promise(function (e, u) {
                    e = Re(e);
                    var c = o.index,
                      l = o.range,
                      f = t.objectStore(n),
                      h =
                        ((f = c.isPrimaryKey ? f : f.index(c.name)),
                        (c = a
                          ? s
                            ? "prevunique"
                            : "prev"
                          : s
                          ? "nextunique"
                          : "next"),
                        !i && "openKeyCursor" in f
                          ? f.openKeyCursor(r(l), c)
                          : f.openCursor(r(l), c));
                    (h.onerror = qt(u)),
                      (h.onsuccess = Re(function (n) {
                        var r,
                          i,
                          o,
                          a,
                          s = h.result;
                        s
                          ? ((s.___id = ++Qt),
                            (s.done = !1),
                            (r = s.continue.bind(s)),
                            (i = (i = s.continuePrimaryKey) && i.bind(s)),
                            (o = s.advance.bind(s)),
                            (a = function () {
                              throw new Error("Cursor not stopped");
                            }),
                            (s.trans = t),
                            (s.stop =
                              s.continue =
                              s.continuePrimaryKey =
                              s.advance =
                                function () {
                                  throw new Error("Cursor not started");
                                }),
                            (s.fail = Re(u)),
                            (s.next = function () {
                              var e = this,
                                t = 1;
                              return this.start(function () {
                                return t-- ? e.continue() : e.stop();
                              }).then(function () {
                                return e;
                              });
                            }),
                            (s.start = function (e) {
                              function t() {
                                if (h.result)
                                  try {
                                    e();
                                  } catch (e) {
                                    s.fail(e);
                                  }
                                else
                                  (s.done = !0),
                                    (s.start = function () {
                                      throw new Error(
                                        "Cursor behind last entry"
                                      );
                                    }),
                                    s.stop();
                              }
                              var n = new Promise(function (e, t) {
                                (e = Re(e)),
                                  (h.onerror = qt(t)),
                                  (s.fail = t),
                                  (s.stop = function (t) {
                                    (s.stop =
                                      s.continue =
                                      s.continuePrimaryKey =
                                      s.advance =
                                        a),
                                      e(t);
                                  });
                              });
                              return (
                                (h.onsuccess = Re(function (e) {
                                  (h.onsuccess = t), t();
                                })),
                                (s.continue = r),
                                (s.continuePrimaryKey = i),
                                (s.advance = o),
                                t(),
                                n
                              );
                            }),
                            e(s))
                          : e(null);
                      }, u));
                  });
                },
                count: function (e) {
                  var t = e.query,
                    i = e.trans,
                    o = t.index,
                    a = t.range;
                  return new Promise(function (e, t) {
                    var s = i.objectStore(n),
                      u = o.isPrimaryKey ? s : s.index(o.name);
                    ((u = (s = r(a)) ? u.count(s) : u.count()).onsuccess = Re(
                      function (t) {
                        return e(t.target.result);
                      }
                    )),
                      (u.onerror = qt(t));
                  });
                },
              };
            }
            var o,
              s,
              u,
              c =
                ((s = n),
                (u = Ht((o = e).objectStoreNames)),
                {
                  schema: {
                    name: o.name,
                    tables: u
                      .map(function (e) {
                        return s.objectStore(e);
                      })
                      .map(function (e) {
                        var t = e.keyPath,
                          n = e.autoIncrement,
                          r = a(t),
                          i = {};
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
                              extractKey: Gt(t),
                            },
                            indexes: Ht(e.indexNames)
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
                                    extractKey: Gt(e),
                                  }),
                                  (i[Xt(e)] = r)
                                );
                              }),
                            getIndexByKeyPath: function (e) {
                              return i[Xt(e)];
                            },
                          }),
                          (i[":id"] = n.primaryKey),
                          null != t && (i[Xt(t)] = n.primaryKey),
                          n
                        );
                      }),
                  },
                  hasGetAll:
                    0 < u.length &&
                    "getAll" in s.objectStore(u[0]) &&
                    !(
                      "undefined" != typeof navigator &&
                      /Safari/.test(navigator.userAgent) &&
                      !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                      [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] <
                        604
                    ),
                }),
              l = ((n = c.schema), c.hasGetAll),
              f = ((c = n.tables.map(i)), {});
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
                MAX_KEY: Yt(t),
                schema: n,
              }
            );
          }
          function Zt(e, n, r, i) {
            var o = r.IDBKeyRange;
            return (
              r.indexedDB,
              {
                dbcore:
                  ((i = Jt(n, o, i)),
                  e.dbcore.reduce(function (e, n) {
                    return (n = n.create), t(t({}, e), n(e));
                  }, i)),
              }
            );
          }
          function en(e, t) {
            var n = t.db;
            (t = Zt(e._middlewares, n, e._deps, t)),
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
              var i = r[n];
              t.forEach(function (t) {
                var r = (function e(t, n) {
                  return y(t, n) || ((t = u(t)) && e(t, n));
                })(t, n);
                (!r || ("value" in r && void 0 === r.value)) &&
                  (t === e.Transaction.prototype || t instanceof e.Transaction
                    ? d(t, n, {
                        get: function () {
                          return this.table(n);
                        },
                        set: function (e) {
                          h(this, n, {
                            value: e,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0,
                          });
                        },
                      })
                    : (t[n] = new e.Table(n, i)));
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
            var i = e._dbSchema;
            n.objectStoreNames.contains("$meta") &&
              !i.$meta &&
              ((i.$meta = Vt("$meta", dn("")[0], [])),
              e._storeNames.push("$meta"));
            var a = e._createTransaction("readwrite", e._storeNames, i);
            a.create(n), a._completion.catch(r);
            var s = a._reject.bind(a),
              u = ge.transless || ge;
            Fe(function () {
              return (
                (ge.trans = a),
                (ge.transless = u),
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
                      : Se.resolve(c)
                    )
                      .then(function (t) {
                        return (
                          (i = t),
                          (s = a),
                          (u = n),
                          (c = []),
                          (t = (r = e)._versions),
                          (l = r._dbSchema = fn(0, r.idbdb, u)),
                          0 !==
                          (t = t.filter(function (e) {
                            return e._cfg.version >= i;
                          })).length
                            ? (t.forEach(function (e) {
                                c.push(function () {
                                  var t = l,
                                    n = e._cfg.dbschema;
                                  hn(r, t, u),
                                    hn(r, n, u),
                                    (l = r._dbSchema = n);
                                  var a = sn(t, n);
                                  a.add.forEach(function (e) {
                                    un(u, e[0], e[1].primKey, e[1].indexes);
                                  }),
                                    a.change.forEach(function (e) {
                                      if (e.recreate)
                                        throw new V.Upgrade(
                                          "Not yet support for changing primary key"
                                        );
                                      var t = u.objectStore(e.name);
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
                                  if (c && e._cfg.version > i) {
                                    en(r, u), (s._memoizedTables = {});
                                    var f = k(n);
                                    a.del.forEach(function (e) {
                                      f[e] = t[e];
                                    }),
                                      nn(r, [r.Transaction.prototype]),
                                      tn(r, [r.Transaction.prototype], o(f), f),
                                      (s.schema = f);
                                    var h,
                                      d = q(c);
                                    return (
                                      d && Le(),
                                      (a = Se.follow(function () {
                                        var e;
                                        (h = c(s)) &&
                                          d &&
                                          ((e = We.bind(null, null)),
                                          h.then(e, e));
                                      })),
                                      h && "function" == typeof h.then
                                        ? Se.resolve(h)
                                        : a.then(function () {
                                            return h;
                                          })
                                    );
                                  }
                                }),
                                  c.push(function (t) {
                                    var n,
                                      i,
                                      o = e._cfg.dbschema;
                                    (n = o),
                                      (i = t),
                                      [].slice
                                        .call(i.db.objectStoreNames)
                                        .forEach(function (e) {
                                          return (
                                            null == n[e] &&
                                            i.db.deleteObjectStore(e)
                                          );
                                        }),
                                      nn(r, [r.Transaction.prototype]),
                                      tn(
                                        r,
                                        [r.Transaction.prototype],
                                        r._storeNames,
                                        r._dbSchema
                                      ),
                                      (s.schema = r._dbSchema);
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
                                  ? Se.resolve(c.shift()(s.idbtrans)).then(e)
                                  : Se.resolve();
                              })().then(function () {
                                cn(l, u);
                              }))
                            : Se.resolve()
                        );
                        var r, i, s, u, c, l;
                      })
                      .catch(s))
                  : (o(i).forEach(function (e) {
                      un(n, e, i[e].primKey, i[e].indexes);
                    }),
                    en(e, n),
                    void Se.follow(function () {
                      return e.on.populate.fire(a);
                    }).catch(s))
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
            hn(e, e._dbSchema, t);
            for (var r = 0, i = sn(n, e._dbSchema).change; r < i.length; r++) {
              var o = (function (e) {
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
                  ie &&
                    console.debug(
                      "Dexie upgrade patch: Creating missing index "
                        .concat(e.name, ".")
                        .concat(t.src)
                    ),
                    ln(n, t);
                });
              })(i[r]);
              if ("object" == typeof o) return o.value;
            }
          }
          function sn(e, t) {
            var n,
              r = { del: [], add: [], change: [] };
            for (n in e) t[n] || r.del.push(n);
            for (n in t) {
              var i = e[n],
                o = t[n];
              if (i) {
                var a = {
                  name: n,
                  def: o,
                  recreate: !1,
                  del: [],
                  add: [],
                  change: [],
                };
                if (
                  "" + (i.primKey.keyPath || "") !=
                    "" + (o.primKey.keyPath || "") ||
                  i.primKey.auto !== o.primKey.auto
                )
                  (a.recreate = !0), r.change.push(a);
                else {
                  var s = i.idxByName,
                    u = o.idxByName,
                    c = void 0;
                  for (c in s) u[c] || a.del.push(c);
                  for (c in u) {
                    var l = s[c],
                      f = u[c];
                    l ? l.src !== f.src && a.change.push(f) : a.add.push(f);
                  }
                  (0 < a.del.length ||
                    0 < a.add.length ||
                    0 < a.change.length) &&
                    r.change.push(a);
                }
              } else r.add.push([n, o]);
            }
            return r;
          }
          function un(e, t, n, r) {
            var i = e.db.createObjectStore(
              t,
              n.keyPath
                ? { keyPath: n.keyPath, autoIncrement: n.auto }
                : { autoIncrement: n.auto }
            );
            return (
              r.forEach(function (e) {
                return ln(i, e);
              }),
              i
            );
          }
          function cn(e, t) {
            o(e).forEach(function (n) {
              t.db.objectStoreNames.contains(n) ||
                (ie && console.debug("Dexie: Creating missing table", n),
                un(t, n, e[n].primKey, e[n].indexes));
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
                    i = zt(
                      $t((s = t.keyPath)),
                      s || "",
                      !0,
                      !1,
                      !!t.autoIncrement,
                      s && "string" != typeof s,
                      !0
                    ),
                    o = [],
                    a = 0;
                  a < t.indexNames.length;
                  ++a
                ) {
                  var s = (u = t.index(t.indexNames[a])).keyPath,
                    u = zt(
                      u.name,
                      s,
                      !!u.unique,
                      !!u.multiEntry,
                      !1,
                      s && "string" != typeof s,
                      !1
                    );
                  o.push(u);
                }
                r[e] = Vt(e, i, o);
              }),
              r
            );
          }
          function hn(e, t, n) {
            for (var r = n.db.objectStoreNames, o = 0; o < r.length; ++o) {
              var a = r[o],
                s = n.objectStore(a);
              e._hasGetAll = "getAll" in s;
              for (var u = 0; u < s.indexNames.length; ++u) {
                var c = s.indexNames[u],
                  l = s.index(c).keyPath,
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
              i.WorkerGlobalScope &&
              i instanceof i.WorkerGlobalScope &&
              [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
              (e._hasGetAll = !1);
          }
          function dn(e) {
            return e.split(",").map(function (e, t) {
              var n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
                r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
              return zt(
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
              o(e).forEach(function (n) {
                if (null !== e[n]) {
                  var r = dn(e[n]),
                    i = r.shift();
                  if (((i.unique = !0), i.multi))
                    throw new V.Schema("Primary key cannot be multi-valued");
                  r.forEach(function (e) {
                    if (e.auto)
                      throw new V.Schema(
                        "Only primary key can be marked as autoIncrement (++)"
                      );
                    if (!e.keyPath)
                      throw new V.Schema(
                        "Index must have a name and cannot be an empty string"
                      );
                  }),
                    (t[n] = Vt(n, i, r));
                }
              });
            }),
            (yn.prototype.stores = function (e) {
              var t = this.db;
              (this._cfg.storesSource = this._cfg.storesSource
                ? s(this._cfg.storesSource, e)
                : e),
                (e = t._versions);
              var n = {},
                r = {};
              return (
                e.forEach(function (e) {
                  s(n, e._cfg.storesSource),
                    (r = e._cfg.dbschema = {}),
                    e._parseStoresSpec(n, r);
                }),
                (t._dbSchema = r),
                nn(t, [t._allTables, t, t.Transaction.prototype]),
                tn(
                  t,
                  [t._allTables, t, t.Transaction.prototype, this._cfg.tables],
                  o(r),
                  r
                ),
                (t._storeNames = o(r)),
                this
              );
            }),
            (yn.prototype.upgrade = function (e) {
              return (
                (this._cfg.contentUpgrade = re(
                  this._cfg.contentUpgrade || H,
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
            return Fe(function () {
              return (ge.letThrough = !0), e();
            });
          }
          function bn(e) {
            return !("from" in e);
          }
          var wn = function (e, t) {
            if (!this) {
              var n = new wn();
              return e && "d" in e && s(n, e), n;
            }
            s(
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
              if (bn(e)) return s(e, { from: t, to: n, d: 1 });
              var i = e.l;
              if (((r = e.r), ct(n, e.from) < 0))
                return (
                  i
                    ? _n(i, t, n)
                    : (e.l = { from: t, to: n, d: 1, l: null, r: null }),
                  Tn(e)
                );
              if (0 < ct(t, e.to))
                return (
                  r
                    ? _n(r, t, n)
                    : (e.r = { from: t, to: n, d: 1, l: null, r: null }),
                  Tn(e)
                );
              ct(t, e.from) < 0 &&
                ((e.from = t), (e.l = null), (e.d = r ? r.d + 1 : 1)),
                0 < ct(n, e.to) &&
                  ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1)),
                (n = !e.r),
                i && !e.l && Sn(e, i),
                r && n && Sn(e, r);
            }
          }
          function Sn(e, t) {
            bn(t) ||
              (function e(t, n) {
                var r = n.from,
                  i = n.to,
                  o = n.l;
                (n = n.r), _n(t, r, i), o && e(t, o), n && e(t, n);
              })(e, t);
          }
          function kn(e, t) {
            var n = xn(t),
              r = n.next();
            if (r.done) return !1;
            for (
              var i = r.value, o = xn(e), a = o.next(i.from), s = a.value;
              !r.done && !a.done;

            ) {
              if (ct(s.from, i.to) <= 0 && 0 <= ct(s.to, i.from)) return !0;
              ct(i.from, s.from) < 0
                ? (i = (r = n.next(s.from)).value)
                : (s = (a = o.next(i.from)).value);
            }
            return !1;
          }
          function xn(e) {
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
          function Tn(e) {
            var n,
              r,
              i =
                ((null === (n = e.r) || void 0 === n ? void 0 : n.d) || 0) -
                ((null === (r = e.l) || void 0 === r ? void 0 : r.d) || 0),
              o = 1 < i ? "r" : i < -1 ? "l" : "";
            o &&
              ((n = "r" == o ? "l" : "r"),
              (r = t({}, e)),
              (i = e[o]),
              (e.from = i.from),
              (e.to = i.to),
              (e[o] = i[o]),
              (r[o] = i[n]),
              ((e[n] = r).d = On(r))),
              (e.d = On(e));
          }
          function On(e) {
            var t = e.r;
            return (
              (e = e.l), (t ? (e ? Math.max(t.d, e.d) : t.d) : e ? e.d : 0) + 1
            );
          }
          function En(e, t) {
            return (
              o(t).forEach(function (n) {
                e[n]
                  ? Sn(e[n], t[n])
                  : (e[n] = (function e(t) {
                      var n,
                        r,
                        i = {};
                      for (n in t)
                        l(t, n) &&
                          ((r = t[n]),
                          (i[n] =
                            !r || "object" != typeof r || E.has(r.constructor)
                              ? r
                              : e(r)));
                      return i;
                    })(t[n]));
              }),
              e
            );
          }
          function Pn(e, t) {
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
            (((B = {
              add: function (e) {
                return Sn(this, e), this;
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
            })[K] = function () {
              return xn(this);
            }),
            B)
          );
          var In = {},
            An = {},
            Cn = !1;
          function Kn(e) {
            En(An, e),
              Cn ||
                ((Cn = !0),
                setTimeout(function () {
                  (Cn = !1), jn(An, !(An = {}));
                }, 0));
          }
          function jn(e, t) {
            void 0 === t && (t = !1);
            var n = new Set();
            if (e.all)
              for (var r = 0, i = Object.values(In); r < i.length; r++)
                Rn((a = i[r]), e, n, t);
            else
              for (var o in e) {
                var a,
                  s = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
                s &&
                  ((o = s[1]),
                  (s = s[2]),
                  (a = In["idb://".concat(o, "/").concat(s)]) &&
                    Rn(a, e, n, t));
              }
            n.forEach(function (e) {
              return e();
            });
          }
          function Rn(e, t, n, r) {
            for (
              var i = [], o = 0, a = Object.entries(e.queries.query);
              o < a.length;
              o++
            ) {
              for (
                var s = a[o], u = s[0], c = [], l = 0, f = s[1];
                l < f.length;
                l++
              ) {
                var h = f[l];
                Pn(t, h.obsSet)
                  ? h.subscribers.forEach(function (e) {
                      return n.add(e);
                    })
                  : r && c.push(h);
              }
              r && i.push([u, c]);
            }
            if (r)
              for (var d = 0, p = i; d < p.length; d++) {
                var y = p[d];
                (u = y[0]), (c = y[1]), (e.queries.query[u] = c);
              }
          }
          function Dn(e) {
            var t = e._state,
              n = e._deps.indexedDB;
            if (t.isBeingOpened || e.idbdb)
              return t.dbReadyPromise.then(function () {
                return t.dbOpenError ? Xe(t.dbOpenError) : e;
              });
            (t.isBeingOpened = !0),
              (t.dbOpenError = null),
              (t.openComplete = !1);
            var r = t.openCanceller,
              i = Math.round(10 * e.verno),
              a = !1;
            function s() {
              if (t.openCanceller !== r)
                throw new V.DatabaseClosed("db.open() was cancelled");
            }
            function u() {
              return new Se(function (r, c) {
                if ((s(), !n)) throw new V.MissingAPI();
                var l = e.name,
                  d = t.autoSchema || !i ? n.open(l) : n.open(l, i);
                if (!d) throw new V.MissingAPI();
                (d.onerror = qt(c)),
                  (d.onblocked = Re(e._fireOnBlocked)),
                  (d.onupgradeneeded = Re(function (r) {
                    var i;
                    (f = d.transaction),
                      t.autoSchema && !e._options.allowEmptyDB
                        ? ((d.onerror = Bt),
                          f.abort(),
                          d.result.close(),
                          ((i = n.deleteDatabase(l)).onsuccess = i.onerror =
                            Re(function () {
                              c(
                                new V.NoSuchDatabase(
                                  "Database ".concat(l, " doesnt exist")
                                )
                              );
                            })))
                        : ((f.onerror = qt(c)),
                          (r =
                            r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion),
                          (h = r < 1),
                          (e.idbdb = d.result),
                          a && an(e, f),
                          on(e, r / 10, f, c));
                  }, c)),
                  (d.onsuccess = Re(function () {
                    f = null;
                    var n,
                      s,
                      c,
                      p,
                      y,
                      v = (e.idbdb = d.result),
                      g = m(v.objectStoreNames);
                    if (0 < g.length)
                      try {
                        var b = v.transaction(
                          1 === (p = g).length ? p[0] : p,
                          "readonly"
                        );
                        if (t.autoSchema)
                          (s = v),
                            (c = b),
                            ((n = e).verno = s.version / 10),
                            (c = n._dbSchema = fn(0, s, c)),
                            (n._storeNames = m(s.objectStoreNames, 0)),
                            tn(n, [n._allTables], o(c), c);
                        else if (
                          (hn(e, e._dbSchema, b),
                          ((y = sn(fn(0, (y = e).idbdb, b), y._dbSchema)).add
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
                            (i = v.version + 1),
                            (a = !0),
                            r(u())
                          );
                        en(e, b);
                      } catch (n) {}
                    tt.push(e),
                      (v.onversionchange = Re(function (n) {
                        (t.vcFired = !0), e.on("versionchange").fire(n);
                      })),
                      (v.onclose = Re(function (t) {
                        e.on("close").fire(t);
                      })),
                      h &&
                        ((y = e._deps),
                        (b = l),
                        (v = y.indexedDB),
                        (y = y.IDBKeyRange),
                        mn(v) ||
                          b === nt ||
                          vn(v, y).put({ name: b }).catch(H)),
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
                        u()
                      );
                    break;
                  case "VersionError":
                    if (0 < i) return (i = 0), u();
                }
                return Se.reject(e);
              });
            }
            var c,
              l = t.dbReadyResolve,
              f = null,
              h = !1;
            return Se.race([
              r,
              ("undefined" == typeof navigator
                ? Se.resolve()
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
              ).then(u),
            ])
              .then(function () {
                return (
                  s(),
                  (t.onReadyBeingFired = []),
                  Se.resolve(
                    gn(function () {
                      return e.on.ready.fire(e.vip);
                    })
                  ).then(function n() {
                    if (0 < t.onReadyBeingFired.length) {
                      var r = t.onReadyBeingFired.reduce(re, H);
                      return (
                        (t.onReadyBeingFired = []),
                        Se.resolve(
                          gn(function () {
                            return r(e.vip);
                          })
                        ).then(n)
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
                return r === t.openCanceller && e._close(), Xe(n);
              })
              .finally(function () {
                (t.openComplete = !0), l();
              })
              .then(function () {
                var t;
                return (
                  h &&
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
                    Ft(Mt).fire(t),
                    jn(t, !0)),
                  e
                );
              });
          }
          function Nn(e) {
            function t(t) {
              return e.next(t);
            }
            var n = i(t),
              r = i(function (t) {
                return e.throw(t);
              });
            function i(e) {
              return function (t) {
                var i = e(t);
                return (
                  (t = i.value),
                  i.done
                    ? t
                    : t && "function" == typeof t.then
                    ? t.then(n, r)
                    : a(t)
                    ? Promise.all(t).then(n, r)
                    : n(t)
                );
              };
            }
            return i(t)();
          }
          function qn(e, t, n) {
            for (var r = a(e) ? e.slice() : [e], i = 0; i < n; ++i) r.push(t);
            return r;
          }
          var Bn = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function (e) {
              return t(t({}, e), {
                table: function (n) {
                  var r = e.table(n),
                    i = r.schema,
                    o = {},
                    a = [];
                  function s(e, n, r) {
                    var i = Xt(e),
                      u = (o[i] = o[i] || []),
                      c = null == e ? 0 : "string" == typeof e ? 1 : e.length,
                      l = 0 < n;
                    return (
                      (l = t(t({}, r), {
                        name: l
                          ? "".concat(i, "(virtual-from:").concat(r.name, ")")
                          : r.name,
                        lowLevelIndex: r,
                        isVirtual: l,
                        keyTail: n,
                        keyLength: c,
                        extractKey: Gt(e),
                        unique: !l && r.unique,
                      })),
                      u.push(l),
                      l.isPrimaryKey || a.push(l),
                      1 < c && s(2 === c ? e[0] : e.slice(0, c - 1), n + 1, r),
                      u.sort(function (e, t) {
                        return e.keyTail - t.keyTail;
                      }),
                      l
                    );
                  }
                  (n = s(i.primaryKey.keyPath, 0, i.primaryKey)),
                    (o[":id"] = [n]);
                  for (var u = 0, c = i.indexes; u < c.length; u++) {
                    var l = c[u];
                    s(l.keyPath, 0, l);
                  }
                  function f(n) {
                    var r,
                      i = n.query.index;
                    return i.isVirtual
                      ? t(t({}, n), {
                          query: {
                            index: i.lowLevelIndex,
                            range:
                              ((r = n.query.range),
                              (i = i.keyTail),
                              {
                                type: 1 === r.type ? 2 : r.type,
                                lower: qn(
                                  r.lower,
                                  r.lowerOpen ? e.MAX_KEY : e.MIN_KEY,
                                  i
                                ),
                                lowerOpen: !0,
                                upper: qn(
                                  r.upper,
                                  r.upperOpen ? e.MIN_KEY : e.MAX_KEY,
                                  i
                                ),
                                upperOpen: !0,
                              }),
                          },
                        })
                      : n;
                  }
                  return t(t({}, r), {
                    schema: t(t({}, i), {
                      primaryKey: n,
                      indexes: a,
                      getIndexByKeyPath: function (e) {
                        return (e = o[Xt(e)]) && e[0];
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
                        i = n.keyTail,
                        o = n.isVirtual,
                        a = n.keyLength;
                      return o
                        ? r.openCursor(f(t)).then(function (e) {
                            return e && s(e);
                          })
                        : r.openCursor(t);
                      function s(n) {
                        return Object.create(n, {
                          continue: {
                            value: function (r) {
                              null != r
                                ? n.continue(
                                    qn(r, t.reverse ? e.MAX_KEY : e.MIN_KEY, i)
                                  )
                                : t.unique
                                ? n.continue(
                                    n.key
                                      .slice(0, a)
                                      .concat(
                                        t.reverse ? e.MIN_KEY : e.MAX_KEY,
                                        i
                                      )
                                  )
                                : n.continue();
                            },
                          },
                          continuePrimaryKey: {
                            value: function (t, r) {
                              n.continuePrimaryKey(qn(t, e.MAX_KEY, i), r);
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
          function Mn(e, t, n, r) {
            return (
              (n = n || {}),
              (r = r || ""),
              o(e).forEach(function (i) {
                var o, a, s;
                l(t, i)
                  ? ((o = e[i]),
                    (a = t[i]),
                    "object" == typeof o && "object" == typeof a && o && a
                      ? (s = C(o)) !== C(a)
                        ? (n[r + i] = t[i])
                        : "Object" === s
                        ? Mn(o, a, n, r + i + ".")
                        : o !== a && (n[r + i] = t[i])
                      : o !== a && (n[r + i] = t[i]))
                  : (n[r + i] = void 0);
              }),
              o(t).forEach(function (i) {
                l(e, i) || (n[r + i] = t[i]);
              }),
              n
            );
          }
          function Un(e, t) {
            return "delete" === t.type
              ? t.keys
              : t.keys || t.values.map(e.extractKey);
          }
          var Fn = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: function (e) {
              return t(t({}, e), {
                table: function (n) {
                  var i = e.table(n),
                    o = i.schema.primaryKey;
                  return t(t({}, i), {
                    mutate: function (e) {
                      var a = ge.trans,
                        s = a.table(n).hook,
                        u = s.deleting,
                        c = s.creating,
                        f = s.updating;
                      switch (e.type) {
                        case "add":
                          if (c.fire === H) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return h(e);
                            },
                            !0
                          );
                        case "put":
                          if (c.fire === H && f.fire === H) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return h(e);
                            },
                            !0
                          );
                        case "delete":
                          if (u.fire === H) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return h(e);
                            },
                            !0
                          );
                        case "deleteRange":
                          if (u.fire === H) break;
                          return a._promise(
                            "readwrite",
                            function () {
                              return (function e(n, r, a) {
                                return i
                                  .query({
                                    trans: n,
                                    values: !1,
                                    query: { index: o, range: r },
                                    limit: a,
                                  })
                                  .then(function (i) {
                                    var o = i.result;
                                    return h({
                                      type: "delete",
                                      keys: o,
                                      trans: n,
                                    }).then(function (i) {
                                      return 0 < i.numFailures
                                        ? Promise.reject(i.failures[0])
                                        : o.length < a
                                        ? {
                                            failures: [],
                                            numFailures: 0,
                                            lastResult: void 0,
                                          }
                                        : e(
                                            n,
                                            t(t({}, r), {
                                              lower: o[o.length - 1],
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
                      return i.mutate(e);
                      function h(e) {
                        var n,
                          a,
                          s,
                          h = ge.trans,
                          d = e.keys || Un(o, e);
                        if (!d) throw new Error("Keys missing");
                        return (
                          "delete" !==
                            (e =
                              "add" === e.type || "put" === e.type
                                ? t(t({}, e), { keys: d })
                                : t({}, e)).type &&
                            (e.values = r([], e.values, !0)),
                          e.keys && (e.keys = r([], e.keys, !0)),
                          (n = i),
                          (s = d),
                          ("add" === (a = e).type
                            ? Promise.resolve([])
                            : n.getMany({
                                trans: a.trans,
                                keys: s,
                                cache: "immutable",
                              })
                          ).then(function (t) {
                            var n = d.map(function (n, r) {
                              var i,
                                a,
                                s,
                                d = t[r],
                                p = { onerror: null, onsuccess: null };
                              return (
                                "delete" === e.type
                                  ? u.fire.call(p, n, d, h)
                                  : "add" === e.type || void 0 === d
                                  ? ((i = c.fire.call(p, n, e.values[r], h)),
                                    null == n &&
                                      null != i &&
                                      ((e.keys[r] = n = i),
                                      o.outbound ||
                                        S(e.values[r], o.keyPath, n)))
                                  : ((i = Mn(d, e.values[r])),
                                    (a = f.fire.call(p, i, n, d, h)) &&
                                      ((s = e.values[r]),
                                      Object.keys(a).forEach(function (e) {
                                        l(s, e) ? (s[e] = a[e]) : S(s, e, a[e]);
                                      }))),
                                p
                              );
                            });
                            return i
                              .mutate(e)
                              .then(function (r) {
                                for (
                                  var i = r.failures,
                                    o = r.results,
                                    a = r.numFailures,
                                    s = ((r = r.lastResult), 0);
                                  s < d.length;
                                  ++s
                                ) {
                                  var u = (o || d)[s],
                                    c = n[s];
                                  null == u
                                    ? c.onerror && c.onerror(i[s])
                                    : c.onsuccess &&
                                      c.onsuccess(
                                        "put" === e.type && t[s]
                                          ? e.values[s]
                                          : u
                                      );
                                }
                                return {
                                  failures: i,
                                  results: o,
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
          function Ln(e, t, n) {
            try {
              if (!t) return null;
              if (t.keys.length < e.length) return null;
              for (
                var r = [], i = 0, o = 0;
                i < t.keys.length && o < e.length;
                ++i
              )
                0 === ct(t.keys[i], e[o]) &&
                  (r.push(n ? I(t.values[i]) : t.values[i]), ++o);
              return r.length === e.length ? r : null;
            } catch (e) {
              return null;
            }
          }
          var Wn = {
            stack: "dbcore",
            level: -1,
            create: function (e) {
              return {
                table: function (n) {
                  var r = e.table(n);
                  return t(t({}, r), {
                    getMany: function (e) {
                      if (!e.cache) return r.getMany(e);
                      var t = Ln(e.keys, e.trans._cache, "clone" === e.cache);
                      return t
                        ? Se.resolve(t)
                        : r.getMany(e).then(function (t) {
                            return (
                              (e.trans._cache = {
                                keys: e.keys,
                                values: "clone" === e.cache ? I(t) : t,
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
          function zn(e, t) {
            return (
              "readonly" === e.trans.mode &&
              !!e.subscr &&
              !e.trans.explicit &&
              "disabled" !== e.trans.db._options.cache &&
              !t.schema.primaryKey.outbound
            );
          }
          function $n(e, t) {
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
          var Vn = {
            stack: "dbcore",
            level: 0,
            name: "Observability",
            create: function (e) {
              var n = e.schema.name,
                r = new wn(e.MIN_KEY, e.MAX_KEY);
              return t(t({}, e), {
                transaction: function (t, n, r) {
                  if (ge.subscr && "readonly" !== n)
                    throw new V.ReadOnly(
                      "Readwrite transaction in liveQuery context. Querier source: ".concat(
                        ge.querier
                      )
                    );
                  return e.transaction(t, n, r);
                },
                table: function (i) {
                  function s(t) {
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
                  var u = e.table(i),
                    c = u.schema,
                    l = c.primaryKey,
                    f = l.extractKey,
                    h = l.outbound,
                    d = t(t({}, u), {
                      mutate: function (e) {
                        function t(e) {
                          return (
                            (e = "idb://"
                              .concat(n, "/")
                              .concat(i, "/")
                              .concat(e)),
                            d[e] || (d[e] = new wn())
                          );
                        }
                        var o,
                          s,
                          f,
                          h = e.trans,
                          d = e.mutatedParts || (e.mutatedParts = {}),
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
                                  Un(l, e).filter(function (e) {
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
                                  ? Ln(g, m)
                                  : null) || y.addKeys(g),
                              (m || b) &&
                                ((o = t),
                                (s = m),
                                (f = b),
                                c.indexes.forEach(function (e) {
                                  var t = o(e.name || "");
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
                                  (s || f).forEach(function (e, t) {
                                    var i = s && n(s[t]);
                                    0 !== ct(i, (t = f && n(f[t]))) &&
                                      (null != i && r(i), null != t && r(t));
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
                          u.mutate(e).then(function (t) {
                            return (
                              !g ||
                                ("add" !== e.type && "put" !== e.type) ||
                                p.addKeys(t.results),
                              (h.mutatedParts = En(h.mutatedParts || {}, d)),
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
                      count: s,
                      query: s,
                      openCursor: s,
                    };
                  return (
                    o(p).forEach(function (e) {
                      d[e] = function (o) {
                        var a = !!(y = ge.subscr),
                          s = zn(ge, u) && $n(e, o) ? (o.obsSet = {}) : y;
                        if (a) {
                          var c = function (e) {
                              return (
                                (e = "idb://"
                                  .concat(n, "/")
                                  .concat(i, "/")
                                  .concat(e)),
                                s[e] || (s[e] = new wn())
                              );
                            },
                            l = c(""),
                            d = c(":dels"),
                            y = ((a = (y = p[e](o))[0]), y[1]);
                          if (
                            (("query" === e && a.isPrimaryKey && !o.values
                              ? d
                              : c(a.name || "")
                            ).add(y),
                            !a.isPrimaryKey)
                          ) {
                            if ("count" !== e) {
                              var v =
                                "query" === e &&
                                h &&
                                o.values &&
                                u.query(t(t({}, o), { values: !1 }));
                              return u[e]
                                .apply(this, arguments)
                                .then(function (t) {
                                  if ("query" === e) {
                                    if (h && o.values)
                                      return v.then(function (e) {
                                        return (e = e.result), l.addKeys(e), t;
                                      });
                                    var n = o.values
                                      ? t.result.map(f)
                                      : t.result;
                                    (o.values ? l : d).addKeys(n);
                                  } else if ("openCursor" === e) {
                                    var r = t,
                                      i = o.values;
                                    return (
                                      r &&
                                      Object.create(r, {
                                        key: {
                                          get: function () {
                                            return (
                                              d.addKey(r.primaryKey), r.key
                                            );
                                          },
                                        },
                                        primaryKey: {
                                          get: function () {
                                            var e = r.primaryKey;
                                            return d.addKey(e), e;
                                          },
                                        },
                                        value: {
                                          get: function () {
                                            return (
                                              i && l.addKey(r.primaryKey),
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
                            d.add(r);
                          }
                        }
                        return u[e].apply(this, arguments);
                      };
                    }),
                    d
                  );
                },
              });
            },
          };
          function Yn(e, n, r) {
            if (0 === r.numFailures) return n;
            if ("deleteRange" === n.type) return null;
            var i = n.keys
              ? n.keys.length
              : "values" in n && n.values
              ? n.values.length
              : 1;
            return r.numFailures === i
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
          function Gn(e, t) {
            return (
              (n = e),
              (void 0 === (r = t).lower ||
                (r.lowerOpen ? 0 < ct(n, r.lower) : 0 <= ct(n, r.lower))) &&
                (void 0 === t.upper ||
                  (t.upperOpen ? ct(e, t.upper) < 0 : ct(e, t.upper) <= 0))
            );
            var n, r;
          }
          function Hn(e, t, n, r, i, o) {
            if (!n || 0 === n.length) return e;
            var s = t.query.index,
              u = s.multiEntry,
              c = t.query.range,
              l = r.schema.primaryKey.extractKey,
              f = s.extractKey,
              h = (s.lowLevelIndex || s).extractKey;
            return (
              (n = n.reduce(function (e, n) {
                var r = e,
                  i =
                    "add" === n.type || "put" === n.type
                      ? n.values
                          .filter(function (e) {
                            return (
                              (e = f(e)),
                              u && a(e)
                                ? e.some(function (e) {
                                    return Gn(e, c);
                                  })
                                : Gn(e, c)
                            );
                          })
                          .map(function (e) {
                            return (e = I(e)), o && Object.freeze(e), e;
                          })
                      : [];
                switch (n.type) {
                  case "add":
                    r = e.concat(
                      t.values
                        ? i
                        : i.map(function (e) {
                            return l(e);
                          })
                    );
                    break;
                  case "put":
                    var s = new wn().addKeys(
                      n.values.map(function (e) {
                        return l(e);
                      })
                    );
                    r = e
                      .filter(function (e) {
                        return (e = t.values ? l(e) : e), !kn(new wn(e), s);
                      })
                      .concat(
                        t.values
                          ? i
                          : i.map(function (e) {
                              return l(e);
                            })
                      );
                    break;
                  case "delete":
                    var h = new wn().addKeys(n.keys);
                    r = e.filter(function (e) {
                      return (e = t.values ? l(e) : e), !kn(new wn(e), h);
                    });
                    break;
                  case "deleteRange":
                    var d = n.range;
                    r = e.filter(function (e) {
                      return !Gn(l(e), d);
                    });
                }
                return r;
              }, e)),
              n === e
                ? e
                : (n.sort(function (e, t) {
                    return ct(h(e), h(t)) || ct(l(e), l(t));
                  }),
                  t.limit &&
                    t.limit < 1 / 0 &&
                    (n.length > t.limit
                      ? (n.length = t.limit)
                      : e.length === t.limit &&
                        n.length < t.limit &&
                        (i.dirty = !0)),
                  o ? Object.freeze(n) : n)
            );
          }
          function Qn(e, t) {
            return (
              0 === ct(e.lower, t.lower) &&
              0 === ct(e.upper, t.upper) &&
              !!e.lowerOpen == !!t.lowerOpen &&
              !!e.upperOpen == !!t.upperOpen
            );
          }
          function Xn(e, t) {
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
          function Jn(e, t, n, r) {
            e.subscribers.add(n),
              r.addEventListener("abort", function () {
                var r, i;
                e.subscribers.delete(n),
                  0 === e.subscribers.size &&
                    ((r = e),
                    (i = t),
                    setTimeout(function () {
                      0 === r.subscribers.size && R(i, r);
                    }, 3e3));
              });
          }
          var Zn = {
            stack: "dbcore",
            level: 0,
            name: "Cache",
            create: function (e) {
              var n = e.schema.name;
              return t(t({}, e), {
                transaction: function (t, r, i) {
                  var o,
                    a,
                    s = e.transaction(t, r, i);
                  return (
                    "readwrite" === r &&
                      ((a = (o = new AbortController()).signal),
                      (i = function (i) {
                        return function () {
                          if ((o.abort(), "readwrite" === r)) {
                            for (
                              var a = new Set(), u = 0, c = t;
                              u < c.length;
                              u++
                            ) {
                              var l = c[u],
                                f = In["idb://".concat(n, "/").concat(l)];
                              if (f) {
                                var h = e.table(l),
                                  d = f.optimisticOps.filter(function (e) {
                                    return e.trans === s;
                                  });
                                if (s._explicit && i && s.mutatedParts)
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
                                      Pn((_ = m[v]).obsSet, s.mutatedParts) &&
                                        (R(w, _),
                                        _.subscribers.forEach(function (e) {
                                          return a.add(e);
                                        }));
                                else if (0 < d.length) {
                                  f.optimisticOps = f.optimisticOps.filter(
                                    function (e) {
                                      return e.trans !== s;
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
                                        S,
                                        k = 0,
                                        x = (w = b[g]).slice();
                                      k < x.length;
                                      k++
                                    )
                                      null != (_ = x[k]).res &&
                                        s.mutatedParts &&
                                        (i && !_.dirty
                                          ? ((S = Object.isFrozen(_.res)),
                                            (S = Hn(_.res, _.req, d, h, _, S)),
                                            _.dirty
                                              ? (R(w, _),
                                                _.subscribers.forEach(function (
                                                  e
                                                ) {
                                                  return a.add(e);
                                                }))
                                              : S !== _.res &&
                                                ((_.res = S),
                                                (_.promise = Se.resolve({
                                                  result: S,
                                                }))))
                                          : (_.dirty && R(w, _),
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
                      s.addEventListener("abort", i(!1), { signal: a }),
                      s.addEventListener("error", i(!1), { signal: a }),
                      s.addEventListener("complete", i(!0), { signal: a })),
                    s
                  );
                },
                table: function (r) {
                  var i = e.table(r),
                    o = i.schema.primaryKey;
                  return t(t({}, i), {
                    mutate: function (e) {
                      var a = ge.trans;
                      if (
                        o.outbound ||
                        "disabled" === a.db._options.cache ||
                        a.explicit
                      )
                        return i.mutate(e);
                      var s = In["idb://".concat(n, "/").concat(r)];
                      return s
                        ? ((a = i.mutate(e)),
                          ("add" !== e.type && "put" !== e.type) ||
                          !(
                            50 <= e.values.length ||
                            Un(o, e).some(function (e) {
                              return null == e;
                            })
                          )
                            ? (s.optimisticOps.push(e),
                              e.mutatedParts && Kn(e.mutatedParts),
                              a.then(function (t) {
                                0 < t.numFailures &&
                                  (R(s.optimisticOps, e),
                                  (t = Yn(0, e, t)) && s.optimisticOps.push(t),
                                  e.mutatedParts && Kn(e.mutatedParts));
                              }),
                              a.catch(function () {
                                R(s.optimisticOps, e),
                                  e.mutatedParts && Kn(e.mutatedParts);
                              }))
                            : a.then(function (n) {
                                var r = Yn(
                                  0,
                                  t(t({}, e), {
                                    values: e.values.map(function (e, r) {
                                      var i;
                                      return (
                                        S(
                                          (e =
                                            null !== (i = o.keyPath) &&
                                            void 0 !== i &&
                                            i.includes(".")
                                              ? I(e)
                                              : t({}, e)),
                                          o.keyPath,
                                          n.results[r]
                                        ),
                                        e
                                      );
                                    }),
                                  }),
                                  n
                                );
                                s.optimisticOps.push(r),
                                  queueMicrotask(function () {
                                    return e.mutatedParts && Kn(e.mutatedParts);
                                  });
                              }),
                          a)
                        : i.mutate(e);
                    },
                    query: function (e) {
                      if (!zn(ge, i) || !$n("query", e)) return i.query(e);
                      var t =
                          "immutable" ===
                          (null === (s = ge.trans) || void 0 === s
                            ? void 0
                            : s.db._options.cache),
                        o = (c = ge).requery,
                        a = c.signal,
                        s = (function (e, t, n, r) {
                          var i = In["idb://".concat(e, "/").concat(t)];
                          if (!i) return [];
                          if (!(t = i.queries[n])) return [null, !1, i, null];
                          var o =
                            t[(r.query ? r.query.index.name : null) || ""];
                          if (!o) return [null, !1, i, null];
                          switch (n) {
                            case "query":
                              var a = o.find(function (e) {
                                return (
                                  e.req.limit === r.limit &&
                                  e.req.values === r.values &&
                                  Qn(e.req.query.range, r.query.range)
                                );
                              });
                              return a
                                ? [a, !0, i, o]
                                : [
                                    o.find(function (e) {
                                      return (
                                        ("limit" in e.req
                                          ? e.req.limit
                                          : 1 / 0) >= r.limit &&
                                        (!r.values || e.req.values) &&
                                        Xn(e.req.query.range, r.query.range)
                                      );
                                    }),
                                    !1,
                                    i,
                                    o,
                                  ];
                            case "count":
                              return (
                                (a = o.find(function (e) {
                                  return Qn(e.req.query.range, r.query.range);
                                })),
                                [a, !!a, i, o]
                              );
                          }
                        })(n, r, "query", e),
                        u = s[0],
                        c = s[1],
                        l = s[2],
                        f = s[3];
                      return (
                        u && c
                          ? (u.obsSet = e.obsSet)
                          : ((c = i
                              .query(e)
                              .then(function (e) {
                                var n = e.result;
                                if ((u && (u.res = n), t)) {
                                  for (var r = 0, i = n.length; r < i; ++r)
                                    Object.freeze(n[r]);
                                  Object.freeze(n);
                                } else e.result = I(n);
                                return e;
                              })
                              .catch(function (e) {
                                return f && u && R(f, u), Promise.reject(e);
                              })),
                            (u = {
                              obsSet: e.obsSet,
                              promise: c,
                              subscribers: new Set(),
                              type: "query",
                              req: e,
                              dirty: !1,
                            }),
                            f
                              ? f.push(u)
                              : ((f = [u]),
                                ((l =
                                  l ||
                                  (In["idb://".concat(n, "/").concat(r)] = {
                                    queries: { query: {}, count: {} },
                                    objs: new Map(),
                                    optimisticOps: [],
                                    unsignaledParts: {},
                                  })).queries.query[e.query.index.name || ""] =
                                  f))),
                        Jn(u, f, o, a),
                        u.promise.then(function (n) {
                          return {
                            result: Hn(
                              n.result,
                              e,
                              null == l ? void 0 : l.optimisticOps,
                              i,
                              u,
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
                throw new V.Type("Given version is not a positive number");
              if (
                ((e = Math.round(10 * e) / 10),
                this.idbdb || this._state.isBeingOpened)
              )
                throw new V.Schema("Cannot add version when database is open");
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
                : new Se(function (e, n) {
                    if (t._state.openComplete)
                      return n(new V.DatabaseClosed(t._state.dbOpenError));
                    if (!t._state.isBeingOpened) {
                      if (!t._state.autoOpen)
                        return void n(new V.DatabaseClosed());
                      t.open().catch(H);
                    }
                    t._state.dbReadyPromise.then(e, n);
                  }).then(e);
            }),
            (nr.prototype.use = function (e) {
              var t = e.stack,
                n = e.create,
                r = e.level,
                i = e.name;
              return (
                i && this.unuse({ stack: t, name: i }),
                (e = this._middlewares[t] || (this._middlewares[t] = [])).push({
                  stack: t,
                  create: n,
                  level: r ?? 10,
                  name: i,
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
              return Ge(me, function () {
                return Dn(e);
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
                ((e.dbReadyPromise = new Se(function (t) {
                  e.dbReadyResolve = t;
                })),
                (e.openCanceller = new Se(function (t, n) {
                  e.cancelOpen = n;
                })));
            }),
            (nr.prototype.close = function (e) {
              var t = (void 0 === e ? { disableAutoOpen: !0 } : e)
                .disableAutoOpen;
              (e = this._state),
                t
                  ? (e.isBeingOpened && e.cancelOpen(new V.DatabaseClosed()),
                    this._close(),
                    (e.autoOpen = !1),
                    (e.dbOpenError = new V.DatabaseClosed()))
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
              return new Se(function (i, o) {
                function a() {
                  t.close(e);
                  var n = t._deps.indexedDB.deleteDatabase(t.name);
                  (n.onsuccess = Re(function () {
                    var e, n, r;
                    (e = t._deps),
                      (n = t.name),
                      (r = e.indexedDB),
                      (e = e.IDBKeyRange),
                      mn(r) || n === nt || vn(r, e).delete(n).catch(H),
                      i();
                  })),
                    (n.onerror = qt(o)),
                    (n.onblocked = t._fireOnBlocked);
                }
                if (n)
                  throw new V.InvalidArgument(
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
                return o(this._allTables).map(function (t) {
                  return e._allTables[t];
                });
              },
              enumerable: !1,
              configurable: !0,
            }),
            (nr.prototype.transaction = function () {
              var e = function (e, t, n) {
                var r = arguments.length;
                if (r < 2) throw new V.InvalidArgument("Too few arguments");
                for (var i = new Array(r - 1); --r; ) i[r - 1] = arguments[r];
                return (n = i.pop()), [e, T(i), n];
              }.apply(this, arguments);
              return this._transaction.apply(this, e);
            }),
            (nr.prototype._transaction = function (e, t, n) {
              var r = this,
                i = ge.trans;
              (i && i.db === this && -1 === e.indexOf("!")) || (i = null);
              var o,
                a,
                s = -1 !== e.indexOf("?");
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
                  o = rt;
                else {
                  if ("rw" != e && e != it)
                    throw new V.InvalidArgument(
                      "Invalid transaction mode: " + e
                    );
                  o = it;
                }
                if (i) {
                  if (i.mode === rt && o === it) {
                    if (!s)
                      throw new V.SubTransaction(
                        "Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY"
                      );
                    i = null;
                  }
                  i &&
                    a.forEach(function (e) {
                      if (i && -1 === i.storeNames.indexOf(e)) {
                        if (!s)
                          throw new V.SubTransaction(
                            "Table " +
                              e +
                              " not included in parent transaction."
                          );
                        i = null;
                      }
                    }),
                    s && i && !i.active && (i = null);
                }
              } catch (n) {
                return i
                  ? i._promise(null, function (e, t) {
                      t(n);
                    })
                  : Xe(n);
              }
              var u = function e(t, n, r, i, o) {
                return Se.resolve().then(function () {
                  var a = ge.transless || ge,
                    s = t._createTransaction(n, r, t._dbSchema, i);
                  if (((s.explicit = !0), (a = { trans: s, transless: a }), i))
                    s.idbtrans = i.idbtrans;
                  else
                    try {
                      s.create(),
                        (s.idbtrans._explicit = !0),
                        (t._state.PR1398_maxLoop = 3);
                    } catch (a) {
                      return a.name === z.InvalidState &&
                        t.isOpen() &&
                        0 < --t._state.PR1398_maxLoop
                        ? (console.warn("Dexie: Need to reopen db"),
                          t.close({ disableAutoOpen: !1 }),
                          t.open().then(function () {
                            return e(t, n, r, null, o);
                          }))
                        : Xe(a);
                    }
                  var u,
                    c = q(o);
                  return (
                    c && Le(),
                    (a = Se.follow(function () {
                      var e;
                      (u = o.call(s, s)) &&
                        (c
                          ? ((e = We.bind(null, null)), u.then(e, e))
                          : "function" == typeof u.next &&
                            "function" == typeof u.throw &&
                            (u = Nn(u)));
                    }, a)),
                    (u && "function" == typeof u.then
                      ? Se.resolve(u).then(function (e) {
                          return s.active
                            ? e
                            : Xe(
                                new V.PrematureCommit(
                                  "Transaction committed too early. See http://bit.ly/2kdckMn"
                                )
                              );
                        })
                      : a.then(function () {
                          return u;
                        })
                    )
                      .then(function (e) {
                        return (
                          i && s._resolve(),
                          s._completion.then(function () {
                            return e;
                          })
                        );
                      })
                      .catch(function (e) {
                        return s._reject(e), Xe(e);
                      })
                  );
                });
              }.bind(null, this, o, a, i, n);
              return i
                ? i._promise(o, u, "lock")
                : ge.trans
                ? Ge(ge.transless, function () {
                    return r._whenReady(u);
                  })
                : this._whenReady(u);
            }),
            (nr.prototype.table = function (e) {
              if (!l(this._allTables, e))
                throw new V.InvalidTable("Table ".concat(e, " does not exist"));
              return this._allTables[e];
            }),
            nr);
          function nr(e, n) {
            var r = this;
            (this._middlewares = {}), (this.verno = 0);
            var i = nr.dependencies;
            (this._options = n =
              t(
                {
                  addons: nr.addons,
                  autoOpen: !0,
                  indexedDB: i.indexedDB,
                  IDBKeyRange: i.IDBKeyRange,
                  cache: "cloned",
                },
                n
              )),
              (this._deps = {
                indexedDB: n.indexedDB,
                IDBKeyRange: n.IDBKeyRange,
              }),
              (i = n.addons),
              (this._dbSchema = {}),
              (this._versions = []),
              (this._storeNames = []),
              (this._allTables = {}),
              (this.idbdb = null),
              (this._novip = this);
            var o,
              a,
              s,
              u,
              c,
              l = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: H,
                dbReadyPromise: null,
                cancelOpen: H,
                openCanceller: null,
                autoSchema: !0,
                PR1398_maxLoop: 3,
                autoOpen: n.autoOpen,
              };
            (l.dbReadyPromise = new Se(function (e) {
              l.dbReadyResolve = e;
            })),
              (l.openCanceller = new Se(function (e, t) {
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
                { ready: [re, H] }
              )),
              (this.on.ready.subscribe = g(
                this.on.ready.subscribe,
                function (e) {
                  return function (t, n) {
                    nr.vip(function () {
                      var i,
                        o = r._state;
                      o.openComplete
                        ? (o.dbOpenError || Se.resolve().then(t), n && e(t))
                        : o.onReadyBeingFired
                        ? (o.onReadyBeingFired.push(t), n && e(t))
                        : (e(t),
                          (i = r),
                          n ||
                            e(function e() {
                              i.on.ready.unsubscribe(t),
                                i.on.ready.unsubscribe(e);
                            }));
                    });
                  };
                }
              )),
              (this.Collection =
                ((o = this),
                yt(Tt.prototype, function (e, t) {
                  this.db = o;
                  var n = at,
                    r = null;
                  if (t)
                    try {
                      n = t();
                    } catch (e) {
                      r = e;
                    }
                  var i = e._ctx;
                  (e = (t = i.table).hook.reading.fire),
                    (this._ctx = {
                      table: t,
                      index: i.index,
                      isPrimKey:
                        !i.index ||
                        (t.schema.primKey.keyPath &&
                          i.index === t.schema.primKey.name),
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
                      or: i.or,
                      valueMapper: e !== Q ? e : null,
                    });
                }))),
              (this.Table =
                ((a = this),
                yt(ht.prototype, function (e, t, n) {
                  (this.db = a),
                    (this._tx = n),
                    (this.name = e),
                    (this.schema = t),
                    (this.hook = a._allTables[e]
                      ? a._allTables[e].hook
                      : pt(null, {
                          creating: [Z, H],
                          reading: [X, Q],
                          updating: [te, H],
                          deleting: [ee, H],
                        }));
                }))),
              (this.Transaction =
                ((s = this),
                yt(Lt.prototype, function (e, t, n, r, i) {
                  var o = this;
                  (this.db = s),
                    (this.mode = e),
                    (this.storeNames = t),
                    (this.schema = n),
                    (this.chromeTransactionDurability = r),
                    (this.idbtrans = null),
                    (this.on = pt(this, "complete", "error", "abort")),
                    (this.parent = i || null),
                    (this.active = !0),
                    (this._reculock = 0),
                    (this._blockedFuncs = []),
                    (this._resolve = null),
                    (this._reject = null),
                    (this._waitingFor = null),
                    (this._waitingQueue = null),
                    (this._spinCount = 0),
                    (this._completion = new Se(function (e, t) {
                      (o._resolve = e), (o._reject = t);
                    })),
                    this._completion.then(
                      function () {
                        (o.active = !1), o.on.complete.fire();
                      },
                      function (e) {
                        var t = o.active;
                        return (
                          (o.active = !1),
                          o.on.error.fire(e),
                          o.parent
                            ? o.parent._reject(e)
                            : t && o.idbtrans && o.idbtrans.abort(),
                          Xe(e)
                        );
                      }
                    );
                }))),
              (this.Version =
                ((u = this),
                yt(pn.prototype, function (e) {
                  (this.db = u),
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
                yt(Dt.prototype, function (e, t, n) {
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
                    throw new V.MissingAPI();
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
              (this._maxKey = Yt(n.IDBKeyRange)),
              (this._createTransaction = function (e, t, n, i) {
                return new r.Transaction(
                  e,
                  t,
                  n,
                  r._options.chromeTransactionDurability,
                  i
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
              this.use(Wn),
              this.use(Zn),
              this.use(Vn),
              this.use(Bn),
              this.use(Fn);
            var f = new Proxy(this, {
              get: function (e, t, n) {
                if ("_vip" === t) return !0;
                if ("table" === t)
                  return function (e) {
                    return er(r.table(e), f);
                  };
                var i = Reflect.get(e, t, n);
                return i instanceof ht
                  ? er(i, f)
                  : "tables" === t
                  ? i.map(function (e) {
                      return er(e, f);
                    })
                  : "_createTransaction" === t
                  ? function () {
                      return er(i.apply(this, arguments), f);
                    }
                  : i;
              },
            });
            (this.vip = f),
              i.forEach(function (e) {
                return e(r);
              });
          }
          B =
            "undefined" != typeof Symbol && "observable" in Symbol
              ? Symbol.observable
              : "@@observable";
          var rr,
            ir =
              ((or.prototype.subscribe = function (e, t, n) {
                return this._subscribe(
                  e && "function" != typeof e
                    ? e
                    : { next: e, error: t, complete: n }
                );
              }),
              (or.prototype[B] = function () {
                return this;
              }),
              or);
          function or(e) {
            this._subscribe = e;
          }
          try {
            rr = {
              indexedDB:
                i.indexedDB ||
                i.mozIndexedDB ||
                i.webkitIndexedDB ||
                i.msIndexedDB,
              IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange,
            };
          } catch (O) {
            rr = { indexedDB: null, IDBKeyRange: null };
          }
          function ar(e) {
            var t,
              n = !1,
              r = new ir(function (r) {
                var i,
                  o = q(e),
                  a = !1,
                  s = {},
                  u = {},
                  c = {
                    get closed() {
                      return a;
                    },
                    unsubscribe: function () {
                      a ||
                        ((a = !0),
                        i && i.abort(),
                        f && Ft.storagemutated.unsubscribe(d));
                    },
                  };
                r.start && r.start(c);
                var f = !1,
                  h = function () {
                    return Qe(p);
                  },
                  d = function (e) {
                    En(s, e), Pn(u, s) && h();
                  },
                  p = function () {
                    var c, p, y;
                    !a &&
                      rr.indexedDB &&
                      ((s = {}),
                      (c = {}),
                      i && i.abort(),
                      (i = new AbortController()),
                      (y = (function (t) {
                        var n = Ae();
                        try {
                          o && Le();
                          var r = Fe(e, t);
                          return (r = o ? r.finally(We) : r);
                        } finally {
                          n && Ce();
                        }
                      })(
                        (p = {
                          subscr: c,
                          signal: i.signal,
                          requery: h,
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
                              ((s = {}),
                              (function (e) {
                                for (var t in e) if (l(e, t)) return;
                                return 1;
                              })((u = c)) ||
                                f ||
                                (Ft(Mt, d), (f = !0)),
                              Qe(function () {
                                return !a && r.next && r.next(e);
                              }));
                        },
                        function (e) {
                          (n = !1),
                            ["DatabaseClosedError", "AbortError"].includes(
                              null == e ? void 0 : e.name
                            ) ||
                              a ||
                              Qe(function () {
                                a || (r.error && r.error(e));
                              });
                        }
                      ));
                  };
                return setTimeout(h, 0), c;
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
          var sr = tr;
          function ur(e) {
            var t = lr;
            try {
              (lr = !0), Ft.storagemutated.fire(e), jn(e, !0);
            } finally {
              lr = t;
            }
          }
          f(
            sr,
            t(t({}, G), {
              delete: function (e) {
                return new sr(e, { addons: [] }).delete();
              },
              exists: function (e) {
                return new sr(e, { addons: [] })
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
                    (n = (t = sr.dependencies).indexedDB),
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
                  return Xe(new V.MissingAPI());
                }
                var t, n;
              },
              defineClass: function () {
                return function (e) {
                  s(this, e);
                };
              },
              ignoreTransaction: function (e) {
                return ge.trans ? Ge(ge.transless, e) : e();
              },
              vip: gn,
              async: function (e) {
                return function () {
                  try {
                    var t = Nn(e.apply(this, arguments));
                    return t && "function" == typeof t.then ? t : Se.resolve(t);
                  } catch (t) {
                    return Xe(t);
                  }
                };
              },
              spawn: function (e, t, n) {
                try {
                  var r = Nn(e.apply(n, t || []));
                  return r && "function" == typeof r.then ? r : Se.resolve(r);
                } catch (e) {
                  return Xe(e);
                }
              },
              currentTransaction: {
                get: function () {
                  return ge.trans || null;
                },
              },
              waitFor: function (e, t) {
                return (
                  (t = Se.resolve(
                    "function" == typeof e ? sr.ignoreTransaction(e) : e
                  ).timeout(t || 6e4)),
                  ge.trans ? ge.trans.waitFor(t) : t
                );
              },
              Promise: Se,
              debug: {
                get: function () {
                  return ie;
                },
                set: function (e) {
                  oe(e);
                },
              },
              derive: p,
              extend: s,
              props: f,
              override: g,
              Events: pt,
              on: Ft,
              liveQuery: ar,
              extendObservabilitySet: En,
              getByKeyPath: _,
              setByKeyPath: S,
              delByKeyPath: function (e, t) {
                "string" == typeof t
                  ? S(e, t, void 0)
                  : "length" in t &&
                    [].map.call(t, function (t) {
                      S(e, t, void 0);
                    });
              },
              shallowClone: k,
              deepClone: I,
              getObjectDiff: Mn,
              cmp: ct,
              asap: w,
              minKey: -1 / 0,
              addons: [],
              connections: tt,
              errnames: z,
              dependencies: rr,
              cache: In,
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
            (sr.maxKey = Yt(sr.dependencies.IDBKeyRange)),
            "undefined" != typeof dispatchEvent &&
              "undefined" != typeof addEventListener &&
              (Ft(Mt, function (e) {
                lr ||
                  ((e = new CustomEvent(Ut, { detail: e })),
                  (lr = !0),
                  dispatchEvent(e),
                  (lr = !1));
              }),
              addEventListener(Ut, function (e) {
                (e = e.detail), lr || ur(e);
              }));
          var cr,
            lr = !1,
            fr = function () {};
          return (
            "undefined" != typeof BroadcastChannel &&
              ((fr = function () {
                (cr = new BroadcastChannel(Ut)).onmessage = function (e) {
                  return e.data && ur(e.data);
                };
              })(),
              "function" == typeof cr.unref && cr.unref(),
              Ft(Mt, function (e) {
                lr || cr.postMessage(e);
              })),
            "undefined" != typeof addEventListener &&
              (addEventListener("pagehide", function (e) {
                if (!tr.disableBfCache && e.persisted) {
                  ie && console.debug("Dexie: handling persisted pagehide"),
                    null != cr && cr.close();
                  for (var t = 0, n = tt; t < n.length; t++)
                    n[t].close({ disableAutoOpen: !1 });
                }
              }),
              addEventListener("pageshow", function (e) {
                !tr.disableBfCache &&
                  e.persisted &&
                  (ie && console.debug("Dexie: handling persisted pageshow"),
                  fr(),
                  ur({ all: new wn(-1 / 0, [[]]) }));
              })),
            (Se.rejectionMapper = function (e, t) {
              return !e ||
                e instanceof U ||
                e instanceof TypeError ||
                e instanceof SyntaxError ||
                !e.name ||
                !Y[e.name]
                ? e
                : ((t = new Y[e.name](t || e.message, e)),
                  "stack" in e &&
                    d(t, "stack", {
                      get: function () {
                        return this.inner.stack;
                      },
                    }),
                  t);
            }),
            oe(ie),
            t(
              tr,
              Object.freeze({
                __proto__: null,
                Dexie: tr,
                liveQuery: ar,
                Entity: ut,
                cmp: ct,
                PropModSymbol: O,
                PropModification: kt,
                replacePrefix: function (e, t) {
                  return new kt({ replacePrefix: [e, t] });
                },
                default: tr,
                RangeSet: wn,
                mergeRanges: Sn,
                rangesOverlap: kn,
              }),
              { default: tr }
            ),
            tr
          );
        })();
      },
      330: (e) => {
        "use strict";
        e.exports = { rE: "0.1.15" };
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      "use strict";
      const e = "PAGE_ACTION_OPEN_OPTION",
        t = "CONTENT_SCRIPT_INITIALIZE",
        r = "CONTENT_SCRIPT_AUTH",
        i = "CONTENT_SCRIPT_AUTH_TOKEN",
        o = "CONTENT_SCRIPT_AUTH_SIGN_OUT",
        a = "CONTENT_SCRIPT_SET_SETTINGS",
        s = "CONTENT_SCRIPT_GET_HOST_USER",
        u = "CONTENT_SCRIPT_APP_STATE",
        c = "CONTENT_SCRIPT_SET_HOST_USER",
        l = "ACTION_TYPE_REQ_EXPLAIN",
        f = "ACTION_TYPE_REQ_ANSWER",
        h = { SUCCESS: "STATUS_SUCCESS", FAIL: "STATUS_FAIL" },
        d = "ERROR_UNKNOWN_TYPE",
        p = "ERROR_NOT_AUTHORIZED";
      let y = (function (e) {
        return (
          (e.EXPLAIN = "ACTION_TYPE_EXPLAIN"),
          (e.ANSWER = "ACTION_TYPE_ANSWER"),
          (e.REPLY = "ACTION_TYPE_REPLY"),
          e
        );
      })({});
      const v = "https://askme.amadeo.app/api",
        m = n(330).rE || "unset";
      class g {
        refreshTokenRequest = null;
        constructor() {}
        async init() {
          const e = await this.getTokenFromStore();
          if (e && e.token)
            return (
              (this.token = e.token),
              (this.refreshToken = e?.refreshToken),
              (this.isUserAuthenticated = !0),
              void (await this.updateRefreshToken())
            );
          this.isUserAuthenticated = !1;
        }
        async getTokenFromStore() {
          return (async function () {
            return M.getAuthData();
          })();
        }
        async setTokensToStore(e, t) {
          await (async function (e) {
            return M.saveAuthData(e);
          })({ token: e, refreshToken: t });
        }
        async removeTokensFromStore() {
          await (async function () {
            return M.clearAuthData();
          })();
        }
        isAuthenticated() {
          return this.isUserAuthenticated;
        }
        setIsUserAuthenticated(e) {
          e ||
            ((this.token = null),
            (this.refreshToken = null),
            this.removeTokensFromStore().finally()),
            (this.isUserAuthenticated = e);
        }
        async updateRefreshToken() {
          try {
            if (!this.refreshTokenRequest) {
              const e = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${this.refreshToken}`,
                },
                body: JSON.stringify({
                  appName: "ask_me:chrome:chatgpt",
                  version: m,
                }),
              };
              this.refreshTokenRequest = fetch(`${v}/v1/auth/refresh`, e);
            }
            const e = await this.refreshTokenRequest;
            if (401 === e.status || 403 === e.status)
              return this.setIsUserAuthenticated(!1);
            if (!e.ok) throw new Error("Refresh token is invalid");
            const t = await e.json();
            (this.token = t.token),
              (this.refreshToken = t.refreshToken),
              await this.setTokensToStore(this.token, this.refreshToken);
          } catch (e) {
            $(e);
          } finally {
            this.refreshTokenRequest = null;
          }
        }
        getToken() {
          return this.token;
        }
        async signOut() {
          this.setIsUserAuthenticated(!1);
        }
      }
      class b extends g {
        constructor() {
          super();
        }
        async request(e, t = {}) {
          return fetch(`${v}${e}`, t);
        }
        async fetchWithToken(e, t, n) {
          if (!this.isAuthenticated()) throw new Error("Not authorised");
          const r = {
            method: t,
            headers: { Authorization: `Bearer ${this.getToken()}` },
          };
          n &&
            ((r.headers = { ...r.headers, "Content-Type": "application/json" }),
            (r.body = JSON.stringify(n)));
          const i = await this.request(e, r);
          return 401 === i.status
            ? (await this.updateRefreshToken(), this.fetchWithToken(e, t, n))
            : i.json();
        }
        async fetchWithoutToken(e, t, n) {
          const r = {
            method: t,
            headers: { "Content-Type": "application/json" },
          };
          n && (r.body = JSON.stringify(n));
          try {
            const t = await this.request(e, r);
            if (!t.ok) throw new Error(t.statusText);
            return t.json();
          } catch (e) {
            return $("Error fetching data without token:", e), null;
          }
        }
      }
      var w = n(744);
      const _ = Symbol.for("Dexie"),
        S = globalThis[_] || (globalThis[_] = w);
      if (w.semVer !== S.semVer)
        throw new Error(
          `Two different versions of Dexie loaded in the same app: ${w.semVer} and ${S.semVer}`
        );
      const {
          liveQuery: k,
          mergeRanges: x,
          rangesOverlap: T,
          RangeSet: O,
          cmp: E,
          Entity: P,
          PropModSymbol: I,
          PropModification: A,
          replacePrefix: C,
        } = S,
        K = S;
      const j = {
        enableOnStart: !0,
        minimizeOnStart: !1,
        showIntroGuide: !0,
        minimizeDialogButton: !1,
        dialogMessageFontSize: 14,
        answerFontSize: 14,
        enableBetaFeatures: !1,
      };
      class R {
        constructor(e) {
          this.apiService = e;
        }
        async init() {
          await this.fetchUser();
        }
        async fetchUser() {
          try {
            const e = await this.apiService.fetchWithToken(
              "/v1/user/profile",
              "GET"
            );
            if (!e) throw new Error("User not found");
            (this.user = e), (this.settings = e.settings);
          } catch (e) {
            if ("Not authorised" === e?.message) return;
            $(e);
          }
        }
        getUser() {
          return this.user;
        }
        getSettings() {
          return this.user ? this.settings : j;
        }
        async updateSettings(e) {
          try {
            const t = await this.apiService.fetchWithToken(
              "/v1/user/settings",
              "PATCH",
              e
            );
            if (!t) throw new Error("Setting update Failed");
            this.settings = t;
          } catch (e) {
            $(e);
          }
          return this.settings;
        }
      }
      let D = (function (e) {
        return (e.REPLY = "reply"), (e.EXAMPLE = "example"), e;
      })({});
      class N {
        constructor(e) {
          this.apiService = e;
        }
        async getAnswer(e) {
          try {
            const t = { text: this.trimTextToMaxLength(e.message) };
            e?.context && (t.context = this.trimTextToMaxLength(e.context));
            const n = await this.apiService.fetchWithToken(
              "/v1/assist/ask",
              "POST",
              t
            );
            if (!n?.text) throw new Error("Something went wrong");
            return n;
          } catch (e) {
            $(e);
          }
          return { text: "", success: !1 };
        }
        async getReply(e) {
          try {
            const t = { text: this.trimTextToMaxLength(e.message) };
            e?.context && (t.context = this.trimTextToMaxLength(e.context));
            const n = await this.apiService.fetchWithToken(
              "/v1/assist/reply",
              "POST",
              t
            );
            if (!n?.data) throw new Error("Something went wrong");
            return n;
          } catch (e) {
            $(e);
          }
          return {
            data: {
              answerText: [
                { type: D.REPLY, text: "can`t get answer, please try again" },
              ],
            },
            success: !1,
          };
        }
        async getExplain(e) {
          try {
            const t = { text: this.trimTextToMaxLength(e.message) };
            e?.context && (t.context = this.trimTextToMaxLength(e.context));
            const n = await this.apiService.fetchWithToken(
              "/v1/assist/explain",
              "POST",
              t
            );
            if (!n?.text) throw new Error("Something went wrong");
            return n;
          } catch (e) {
            $(e);
          }
          return { text: "", success: !1 };
        }
        trimTextToMaxLength(e, t = 600) {
          const n = e.trim();
          if (n.length <= t) return n;
          const r = n.substring(0, t),
            i = r.lastIndexOf(" ");
          return -1 !== i ? r.substring(0, i) : r;
        }
      }
      class q {
        constructor() {}
        async init(e) {
          this.tabId = e;
        }
        getTabId() {
          return this.tabId;
        }
        setAppId(e) {
          this.appId = e;
        }
        getAppId() {
          return this.appId;
        }
      }
      class B {
        constructor(e) {
          this.apiService = e;
        }
        async init(e) {}
        async connectToServer(e) {
          try {
            const t = new URLSearchParams({ id: e, appVersion: m }).toString();
            let n;
            return (
              (n = this.apiService.isAuthenticated()
                ? await this.apiService.fetchWithToken(
                    `/v1/connect?${t}`,
                    "GET"
                  )
                : await this.apiService.fetchWithoutToken(
                    `/v1/connect/no-auth?${t}`,
                    "GET"
                  )),
              n
            );
          } catch (e) {
            $(e);
          }
        }
        async installEvent(e) {
          try {
            const t = new URLSearchParams({ id: e, appVersion: m }).toString();
            await this.apiService.fetchWithoutToken(
              `/v1/connect/install?${t}`,
              "GET"
            );
          } catch (e) {
            $(e);
          }
        }
      }
      const M = new (class extends K {
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
          const t = Y(e?.name),
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
            const n = e || Y(t);
            return this.hostUsers.get({ id: n });
          }
          return (await this.hostUsers.toArray())?.[0];
        }
        async deleteHostUser({ id: e = null, name: t = null }) {
          if (e || t) {
            const n = e || Y(t);
            return !!(await this.hostUsers.where({ id: n }).delete());
          }
          return !1;
        }
        async saveMeetingState({ meetingState: e, tabId: t, hostUserName: n }) {
          const r = await this.meetingState.get({ tabId: t });
          return r && r.tabId
            ? this.meetingState.update(r.tabId, e)
            : n
            ? this.meetingState.put({ hostUserId: Y(n), ...e, tabId: t })
            : ($("No user Id on save meeting state to DB", e),
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
      async function U(e) {
        return M.getMeetingState({ tabId: e });
      }
      async function F() {
        const e = await W();
        (e && e?.appId) ||
          (await (async function (e) {
            return M.saveAppState(e);
          })({
            ...e,
            appId:
              Math.random().toString(36).substring(2) + Date.now().toString(36),
          }));
      }
      async function L({ id: e = null, name: t = null, tabId: n = null }) {
        return e || t || n
          ? e || t || !n
            ? M.getHostUser({ id: e, name: t })
            : M.getHostUser({ id: (await U(n))?.hostUserId })
          : M.getHostUser({});
      }
      async function W() {
        return M.getAppState();
      }
      const z = (e, t) => ({
        meetingId: "n/a",
        sessionId: null,
        isAppActive: !0,
        isTranscriptActive: !1,
        isAuthenticated: e.apiService.isAuthenticated(),
        hostUserId: Y(t.data?.user?.name),
        startedAt: new Date().getTime(),
      });
      function $(...e) {
        const t = new Error().stack;
        try {
          V(
            ((n = t),
            (n?.split("\n").map((e) => e.trim()) || [])
              .filter((e) => e.startsWith("at "))
              .map(
                (e) => (
                  e.replace("at ", ""),
                  e.replace(
                    "chrome-extension://fejabnggkpabpiidogafkakidocellai/",
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
      const V = async (e, t) => {
        const n = await W();
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
          (r = t.join(", ")), $("Error on sendLog: ", e?.message);
        }
        const i = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stack: e,
            message: r,
            appVersion: m,
            appId: n?.appId || "n/a",
          }),
        };
        await fetch(`${v}/v1/error`, i);
      };
      function Y(e) {
        return (
          e || $("Wrong id", e),
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
      async function G(e, t, n = null) {
        let r;
        try {
          r = await new Promise((r, i) => {
            const o = { type: t, data: n };
            chrome.tabs.sendMessage(e.id, o, (e) => {
              if (!e || !e.status) return i(e?.error || e);
              switch (e.status) {
                case h.SUCCESS:
                  return r(e.data);
                case h.FAIL:
                  return i(`Receive message Error: ${e.error}`);
              }
            });
          });
        } catch (r) {
          $(
            "Error on sendMessageToContentScript ",
            r,
            JSON.stringify({ tab: e, type: t, data: n })
          );
        }
        return r;
      }
      const H = new (class {
          isInitialized = !1;
          constructor() {}
          async init(e) {
            (this.isInitialized = !1),
              (this.apiService = new b()),
              (this.userService = void 0),
              (this.answerService = void 0),
              (this.coreService = new q()),
              await this.apiService.init(),
              (this.stateService = new B(this.apiService)),
              (this.userService = new R(this.apiService)),
              await this.userService.init(),
              (this.answerService = new N(this.apiService)),
              await this.coreService.init(e),
              (this.isInitialized = !0);
          }
        })(),
        Q = async (e) => {
          const t = {
            appState: { isAuthenticated: H.apiService.isAuthenticated() },
            settings: H.userService.getSettings(),
          };
          return await G(e, u, t), t;
        };
      chrome.commands.onCommand.addListener(async (e) => {
        const t = "get-explain" === e ? l : "get-ask" === e ? f : null;
        t
          ? await G({ id: H.coreService.getTabId() }, t)
          : $("Wrong Command! ", e);
      }),
        (function (e) {
          const t = async (t, n, r) => {
            try {
              const i = await e(t, n);
              r({ status: h.SUCCESS, data: i });
            } catch (e) {
              r({ status: h.FAIL, error: e ? e.message || e : null });
            }
          };
          chrome.runtime?.onMessageExternal?.addListener(
            (e, n, r) => (
              t(e, n, r)
                .then()
                .catch((e) => $(e)),
              !0
            )
          ),
            chrome.runtime.onMessage.addListener(
              (e, n, r) => (
                t(e, n, r)
                  .then()
                  .catch((e) => $(e)),
                !0
              )
            );
        })(async function (n, l) {
          const { tab: f } = l;
          if (!f?.id) return void $("Something went wrong", f);
          const h = f.id;
          if (!H.isInitialized)
            try {
              await H.init(h);
            } catch (e) {
              $("Error on INITIALIZE Global: ", e);
            }
          try {
            switch (n.type) {
              case c:
                await (async function ({
                  meetingState: e,
                  tab: t,
                  hostUser: n,
                }) {
                  if (n) {
                    const e = Y(n.name);
                    await M.saveHostUser(n);
                    const r = n ? { [Y(n.name)]: n } : {};
                    await M.saveParticipants({
                      tabId: t.id,
                      hostUserId: e,
                      participants: r,
                    });
                  }
                  await F(),
                    await M.saveMeetingState({
                      meetingState: e,
                      tabId: t.id,
                      hostUserName: n.name,
                    });
                })({ meetingState: z(H, n), tab: f, hostUser: n.data?.user });
                break;
              case t:
                (function (e) {
                  return new Promise((t) => {
                    const n = async (r, i, o) => {
                      e.id === r &&
                        "complete" === o.status &&
                        /meet\.google\.com\/(\w+)\-(\w+)\-(\w+)/.test(o.url) &&
                        (chrome.tabs.onUpdated.removeListener(n), t(null));
                    };
                    chrome.tabs.onUpdated.addListener(n);
                  });
                })(f)
                  .then()
                  .catch((e) => $(e));
                const l = await L({ tabId: h }),
                  p = H.userService.getSettings(),
                  v = await W();
                let m;
                if (v && v?.appId) {
                  const e = await H.stateService.connectToServer(v.appId);
                  e?.sessionId && (m = e.sessionId);
                }
                const g = ((e, t, n, r) => {
                    const i = e.userService.getSettings();
                    return {
                      meetingId: t.data.state.meetingId,
                      sessionId: r,
                      isAppActive: i.enableOnStart,
                      isTranscriptActive: i.enableOnStart,
                      isAuthenticated: e.apiService.isAuthenticated(),
                      hostUserId: Y(n.name),
                      startedAt: new Date().getTime(),
                    };
                  })(H, n, l, m),
                  b = await (async function (e, t, n) {
                    return (
                      await M.saveMeetingState({
                        meetingState: t,
                        tabId: e,
                        hostUserName: n,
                      }),
                      M.getMeetingState({ tabId: e })
                    );
                  })(h, g, l.name);
                return { globalState: b, hostUser: l, appSettings: p };
              case e:
                const w = new URLSearchParams({
                  token: H.apiService.getToken(),
                });
                return chrome.tabs.create({
                  url: `https://portal.amadeo.app?${w}`,
                  index: f.index + 1,
                });
              case a:
                return (
                  await H.userService.updateSettings(n.data?.settings), Q(f)
                );
              case u:
                return Q(f);
              case s:
                return await L({ tabId: h });
              case r:
                await H.init(h);
                const _ = new URLSearchParams({
                  reqLoginFromExtension: "true",
                  extensionId: String(chrome.runtime.id),
                });
                return chrome.tabs.create({
                  url: `https://portal.amadeo.app?${_}`,
                  index: f.index + 1,
                });
              case i:
                if (
                  (await H.apiService.setTokensToStore(
                    n.data.auth.token,
                    n.data.auth.refreshToken
                  ),
                  await H.init(H.coreService.getTabId()),
                  await Q({ id: H.coreService.getTabId() }),
                  n.data.auth.isLoginFromExtension)
                ) {
                  setTimeout(
                    (() => {
                      H.coreService.getTabId() &&
                        (chrome.tabs.remove(h),
                        chrome.tabs.update(H.coreService.getTabId(), {
                          active: !0,
                        }));
                    }).bind(this),
                    200
                  );
                }
                return !0;
              case o:
                return (
                  await H.apiService.signOut(),
                  await H.init(H.coreService.getTabId()),
                  await Q({ id: H.coreService.getTabId() }),
                  !0
                );
              case y.ANSWER:
                return H.answerService.getAnswer(n.data?.message);
              case y.REPLY:
                return H.answerService.getReply(n.data?.message);
              case y.EXPLAIN:
                return H.answerService.getExplain(n.data?.message);
              default:
                throw (
                  ($(`Message Listener Error: ${d}. Message type: `, n.type),
                  new Error(`Unknown Message type: ${d}`))
                );
            }
          } catch (e) {
            if (($("Message Listener Error", e), e.message === p)) {
              const e = H.apiService.isAuthenticated();
              return void (await G(f, n.type, {
                appState: { isAuthenticated: e },
              }));
            }
          }
        }),
        chrome.runtime.onInstalled.addListener(async function (e) {
          if (e.reason === chrome.runtime.OnInstalledReason.INSTALL) {
            try {
              await K.delete("ask_me"), await F();
              const e = await W(),
                t = new URLSearchParams({
                  id: e?.appId || "n/a",
                  appVersion: m,
                }).toString();
              fetch(`${v}/v1/connect/install?${t}`, { method: "GET" })
                .catch()
                .finally();
            } catch (e) {
              $("On install error!", e?.message);
            }
            const e = chrome.runtime.getURL("getStarted.html");
            chrome.tabs.create({ url: e }, function () {});
          }
        });
    })();
})();
