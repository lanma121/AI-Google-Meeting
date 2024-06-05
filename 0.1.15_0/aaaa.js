const or = ({ appState: e }) => {
    const {
      settingsStore: { state: t, authState: n },
    } = e;
    return ce(me, {
      get when() {
        return (
          !n.get() ||
          (!t.turnOff.get() && t.pauseTranscript.get()) ||
          t.turnOff.get()
        );
      },
      keyed: !0,
      get children() {
        var e = rr();
        return (
          Ne(
            e,
            ce(ve, {
              get children() {
                return [
                  ce(ye, {
                    get when() {
                      return !n.get();
                    },
                    keyed: !0,
                    get children() {
                      var e = er(),
                        t = e.firstChild,
                        n = t.firstChild,
                        r = t.nextSibling;
                      return (
                        Ne(t, ce(Rn, {}), n),
                        Ne(n, () => Lt("needToLoginAlertMsg", !1)),
                        (r.$$click = () => Dt(ft)),
                        Ne(r, () => Lt("loginButton")),
                        e
                      );
                    },
                  }),
                  ce(ye, {
                    get when() {
                      return (
                        A(() => !t.turnOff.get())() &&
                        t.pauseTranscript.get()
                      );
                    },
                    keyed: !0,
                    get children() {
                      var e = tr(),
                        n = e.firstChild,
                        r = n.nextSibling;
                      return (
                        Ne(e, ce(Rn, {}), n),
                        (r.$$click = () => t.pauseTranscript.set(!1)),
                        e
                      );
                    },
                  }),
                  ce(ye, {
                    get when() {
                      return t.turnOff.get();
                    },
                    keyed: !0,
                    get children() {
                      var e = nr(),
                        n = e.firstChild,
                        r = n.nextSibling;
                      return (
                        Ne(e, ce(Rn, {}), n),
                        (r.$$click = () => {
                          t.turnOff.set(!1), t.pauseTranscript.set(!1);
                        }),
                        e
                      );
                    },
                  }),
                ];
              },
            })
          ),
          e
        );
      },
    });
  };


  function _e(e, t, n) {
    let r;
    const o = () => {
        const t = document.createElement("template");
        return (
          (t.innerHTML = e),
          n ? t.content.firstChild.firstChild : t.content.firstChild
        );
      },
      i = t
        ? () => P(() => document.importNode(r || (r = o()), !0))
        : () => (r || (r = o())).cloneNode(!0);
    return (i.cloneNode = i), i;
  }


  function Ke(t, n, r, o, i) {
    const s = !!e.context && t.isConnected;
    if (s) {
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
    const a = typeof n,
      c = void 0 !== o;
    if (
      ((t = (c && r[0] && r[0].parentNode) || t),
      "string" === a || "number" === a)
    ) {
      if (s) return r;
      if (("number" === a && (n = n.toString()), c)) {
        let e = r[0];
        e && 3 === e.nodeType
          ? e.data !== n && (e.data = n)
          : (e = document.createTextNode(n)),
          (r = Ue(t, r, o, e));
      } else
        r =
          "" !== r && "string" == typeof r
            ? (t.firstChild.data = n)
            : (t.textContent = n);
    } else if (null == n || "boolean" === a) {
      if (s) return r;
      r = Ue(t, r, o);
    } else {
      if ("function" === a)
        return (
          S(() => {
            let e = n();
            for (; "function" == typeof e; ) e = e();
            r = Ke(t, e, r, o);
          }),
          () => r
        );
      if (Array.isArray(n)) {
        const e = [],
          a = r && Array.isArray(r);
        if (qe(e, n, r, i))
          return S(() => (r = Ke(t, e, r, o, !0))), () => r;
        if (s) {
          if (!e.length) return r;
          if (void 0 === o) return [...t.childNodes];
          let n = e[0],
            i = [n];
          for (; (n = n.nextSibling) !== o; ) i.push(n);
          return (r = i);
        }
        if (0 === e.length) {
          if (((r = Ue(t, r, o)), c)) return r;
        } else
          a
            ? 0 === r.length
              ? Fe(t, e, o)
              : (function (e, t, n) {
                  let r = n.length,
                    o = t.length,
                    i = r,
                    s = 0,
                    a = 0,
                    c = t[o - 1].nextSibling,
                    l = null;
                  for (; s < o || a < i; )
                    if (t[s] !== n[a]) {
                      for (; t[o - 1] === n[i - 1]; ) o--, i--;
                      if (o === s) {
                        const t =
                          i < r ? (a ? n[a - 1].nextSibling : n[i - a]) : c;
                        for (; a < i; ) e.insertBefore(n[a++], t);
                      } else if (i === a)
                        for (; s < o; )
                          (l && l.has(t[s])) || t[s].remove(), s++;
                      else if (t[s] === n[i - 1] && n[a] === t[o - 1]) {
                        const r = t[--o].nextSibling;
                        e.insertBefore(n[a++], t[s++].nextSibling),
                          e.insertBefore(n[--i], r),
                          (t[o] = n[i]);
                      } else {
                        if (!l) {
                          l = new Map();
                          let e = a;
                          for (; e < i; ) l.set(n[e], e++);
                        }
                        const r = l.get(t[s]);
                        if (null != r)
                          if (a < r && r < i) {
                            let c,
                              u = s,
                              d = 1;
                            for (
                              ;
                              ++u < o &&
                              u < i &&
                              null != (c = l.get(t[u])) &&
                              c === r + d;

                            )
                              d++;
                            if (d > r - a) {
                              const o = t[s];
                              for (; a < r; ) e.insertBefore(n[a++], o);
                            } else e.replaceChild(n[a++], t[s++]);
                          } else s++;
                        else t[s++].remove();
                      }
                    } else s++, a++;
                })(t, r, e)
            : (r && Ue(t), Fe(t, e));
        r = e;
      } else if (n.nodeType) {
        if (s && n.parentNode) return (r = c ? [n] : n);
        if (Array.isArray(r)) {
          if (c) return (r = Ue(t, r, o, n));
          Ue(t, r, null, n);
        } else
          null != r && "" !== r && t.firstChild
            ? t.replaceChild(n, t.firstChild)
            : t.appendChild(n);
        r = n;
      }
    }
    return r;
  }


  


  class sn {
    constructor(e) {
      (this.appState = e),
        (this.store = e.assistStore),
        (this.messageStore = e.messageStore);
    }
    async init() {
      this.actionsObserver();
    }
    actionsObserver() {
      jt(async (e, t) => {
        if (this.messageStore.lastMessageId.get())
          switch (e.type) {
            case yt:
              sn.createAssistRequest(
                this.store,
                sn.prepareDataToReq(kt.ANSWER)
              );
              break;
            case vt:
              sn.createAssistRequest(
                this.store,
                sn.prepareDataToReq(kt.EXPLAIN)
              );
              break;
            case wt:
              sn.createAssistRequest(
                this.store,
                sn.prepareDataToReq(kt.REPLY)
              );
          }
      });
    }
    async requestAssist() {
      if (this.store.get.isRequested)
        return void Ot("Requesting answer: request already processed");
      if (!this.appState.settingsStore.authState.get())
        return void Ot("User not authenticated!");
      const e = this.store.get.requestedAnswer,
        t = e?.messageId
          ? e.messageId
          : this.messageStore.lastMessageId.get(),
        n = this.store.get.activeRequestId,
        r = this.messageStore.get[t]?.userId;
      try {
        if (!t) throw new Error("No message found");
        let o = null;
        try {
          if (this.store.isReqGlobal()) {
            const e = Object.entries(this.messageStore.get);
            if (e && e.length) {
              const n = e.findLast(([e, n]) => e !== t && n.userId === r);
              if (
                ((o = n && n.length ? n[1].message.trim() : null),
                o && o.length < 50)
              ) {
                const i = e.findLast(
                  ([e, o]) => (e !== t || e !== n[0]) && o.userId === r
                );
                i && i.length && (o += i[1].message.trim());
              }
            }
          }
        } catch (e) {
          Ot(e);
        }
        this.store.set(
          tn((e) => {
            (e.answers[n].messageId = t),
              (e.answers[n].author = {
                id: r,
                name:
                  this.appState.participantStore.get[r]?.name || "Author",
              }),
              (e.answers[n].answer = "Loading ..."),
              (e.answers[n].message = {
                ...this.messageStore.get[t],
                id: t,
              });
          })
        ),
          this.store.setIsLoading(!0),
          this.store.setIsReqGlobal(!1),
          this.store.setCurrentDisplayedAnswer(
            this.store.get.activeRequestId
          ),
          this.store.isAnswerWindowActive() ||
            this.store.setIsAnswerWindowActive(!0),
          this.appState.settingsStore.windowSetting.isOptionActive.get() &&
            this.appState.settingsStore.windowSetting.isOptionActive.set(
              !1
            );
        const i = { message: { ...this.messageStore.get[t], id: t } };
        try {
          o && o.trim().length && (i.message.context = o);
        } catch (e) {
          Ot(e);
        }
        const s = await Dt(e.type, i);
        this.store.set(
          tn((e) => {
            "text" in s
              ? (e.answers[n].answer = s.text)
              : ((e.answers[n].answer = s.data
                  .map((e) => {
                    switch (e.type) {
                      case St.REPLY:
                        return `Reply: ${e.text}`;
                      case St.EXAMPLE:
                        return `Example:\nText: ${e.text}\nCode: ${e.code}`;
                      default:
                        return `${e.text} ${e.code}`;
                    }
                  })
                  .join("\n\n")),
                (e.answers[n].answerObj = s.data)),
              (e.answers[n].isSuccess = s.success),
              (e.isRequested = !1);
          })
        ),
          this.store.setIsLoading(!1);
      } catch (e) {
        Ot("Error while requesting answer", e),
          this.store.setIsLoading(!1),
          this.store.set(
            tn((e) => {
              (e.answers[n].isSuccess = !1), (e.isRequested = !1);
            })
          );
      }
    }
    static getInitialAnswersStore() {
      return {
        isRequested: !1,
        activeRequestId: null,
        answers: {},
        get requestedAnswer() {
          return this.answers[this.activeRequestId] || {};
        },
      };
    }
    static prepareDataToReq(e, t = null) {
      return {
        messageId: t,
        type: e,
        author: { id: null, name: "Author" },
        answer: "",
        message: { id: "", userId: "", message: "" },
        isSuccess: !1,
        prevAnswerId: null,
        nextAnswerId: null,
      };
    }
    static createAssistRequest(e, t, n = !1) {
      if (e.get.isRequested)
        return void Ot("Assist request already in progress");
      n && e.setIsReqGlobal(n);
      const r = new Date().getMilliseconds();
      if (e.get.activeRequestId) {
        const n = e.get.activeRequestId;
        (t.prevAnswerId = n),
          e.set(
            tn((e) => {
              e.answers[n]
                ? (e.answers[n].nextAnswerId = r)
                : Ot(
                    "Error while creating assist request: no previous answer found",
                    JSON.stringify(e.answers),
                    ". pevAnswerId: ",
                    n
                  );
            })
          );
      }
      e.set({ activeRequestId: r }),
        e.set("answers", r, t),
        e.setIsLoading(!0),
        e.setTriggerAssistReq(!0),
        e.setCurrentDisplayedAnswer(r);
    }
  }

  function tn(e) {
    return (t) => {
      if (qt(t)) {
        let n;
        (n = Jt.get(t)) || Jt.set(t, (n = new Proxy(t, en))), e(n);
      }
      return t;
    };
  }

  /***
   * t: event
   * o: explain/answer
   */

  s = (t, o, s = !0) => {
    if (
      (t.stopPropagation(),
      !i.get.minimizeDialogButton && !n.get[e]?.action?.[o])
    ) {
      const e = t.target.closest("li"),
        n = t.target.closest("div");
      (e.style.pointerEvents = "none"),
        (n.style.visibility = "hidden"),
        setTimeout(() => {
          n.style.removeProperty("visibility"),
            (e.style.pointerEvents = "auto");
        }, 5e3);
    }
    n.set(
      tn(
        (t) => (
          Object.hasOwn(t[e], "action") ||
            (t[e].action = {
              [kt.ANSWER]: o === kt.ANSWER,
              [kt.EXPLAIN]: o === kt.EXPLAIN,
            }),
          Object.hasOwn(t[e].action, o) ||
            (t[e].action = { ...t[e].action, [o]: s }),
          t[e].action[o] || (t[e].action[o] = !0),
          sn.createAssistRequest(r, sn.prepareDataToReq(o, e)),
          !0
        )
      )
    );
  };