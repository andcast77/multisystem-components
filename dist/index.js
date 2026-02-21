import { jsx as u, Fragment as Re, jsxs as $ } from "react/jsx-runtime";
import * as i from "react";
import Le, { useState as vc, forwardRef as Qo, createElement as bn, useLayoutEffect as wc } from "react";
import * as Ft from "react-dom";
import yc from "react-dom";
function Jo(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Jo(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function bc() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Jo(e)) && (o && (o += " "), o += t);
  return o;
}
function N(...e) {
  return bc(e);
}
const Sc = i.forwardRef(
  ({ className: e, variant: t = "default", ...n }, o) => /* @__PURE__ */ u(
    "div",
    {
      ref: o,
      role: "alert",
      className: N(
        "ui-alert",
        `ui-alert--${t}`,
        e
      ),
      ...n
    }
  )
);
Sc.displayName = "Alert";
const Cc = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "h5",
  {
    ref: n,
    className: N("ui-alert__title", e),
    ...t
  }
));
Cc.displayName = "AlertTitle";
const xc = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "div",
  {
    ref: n,
    className: N("ui-alert__description", e),
    ...t
  }
));
xc.displayName = "AlertDescription";
function Rc(e, t) {
  const n = i.createContext(t), o = (a) => {
    const { children: c, ...s } = a, l = i.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ u(n.Provider, { value: l, children: c });
  };
  o.displayName = e + "Provider";
  function r(a) {
    const c = i.useContext(n);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function le(e, t = []) {
  let n = [];
  function o(a, c) {
    const s = i.createContext(c), l = n.length;
    n = [...n, c];
    const d = (p) => {
      var y;
      const { scope: m, children: g, ...w } = p, h = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, v = i.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ u(h.Provider, { value: v, children: g });
    };
    d.displayName = a + "Provider";
    function f(p, m) {
      var h;
      const g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[l]) || s, w = i.useContext(g);
      if (w) return w;
      if (c !== void 0) return c;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, f];
  }
  const r = () => {
    const a = n.map((c) => i.createContext(c));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return r.scopeName = e, [o, Nc(r, ...t)];
}
function Nc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(a) {
      const c = o.reduce((s, { useScope: l, scopeName: d }) => {
        const p = l(a)[`__scope${d}`];
        return { ...s, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Co(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function lt(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const a = Co(r, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const a = o[r];
          typeof a == "function" ? a() : Co(e[r], null);
        }
      };
  };
}
function F(...e) {
  return i.useCallback(lt(...e), e);
}
function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
var Q = globalThis != null && globalThis.document ? i.useLayoutEffect : () => {
}, Ec = i[" useId ".trim().toString()] || (() => {
}), Pc = 0;
function se(e) {
  const [t, n] = i.useState(Ec());
  return Q(() => {
    n((o) => o ?? String(Pc++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var _c = i[" useInsertionEffect ".trim().toString()] || Q;
function Ne({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, a, c] = Ac({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : r;
  {
    const f = i.useRef(e !== void 0);
    i.useEffect(() => {
      const p = f.current;
      p !== s && console.warn(
        `${o} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = s;
    }, [s, o]);
  }
  const d = i.useCallback(
    (f) => {
      var p;
      if (s) {
        const m = Tc(f) ? f(e) : f;
        m !== e && ((p = c.current) == null || p.call(c, m));
      } else
        a(f);
    },
    [s, e, a, c]
  );
  return [l, d];
}
function Ac({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = i.useState(e), r = i.useRef(n), a = i.useRef(t);
  return _c(() => {
    a.current = t;
  }, [t]), i.useEffect(() => {
    var c;
    r.current !== n && ((c = a.current) == null || c.call(a, n), r.current = n);
  }, [n, r]), [n, o, a];
}
function Tc(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  const t = /* @__PURE__ */ Mc(e), n = i.forwardRef((o, r) => {
    const { children: a, ...c } = o, s = i.Children.toArray(a), l = s.find(Ic);
    if (l) {
      const d = l.props.children, f = s.map((p) => p === l ? i.Children.count(d) > 1 ? i.Children.only(null) : i.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ u(t, { ...c, ref: r, children: i.isValidElement(d) ? i.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ u(t, { ...c, ref: r, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Mc(e) {
  const t = i.forwardRef((n, o) => {
    const { children: r, ...a } = n;
    if (i.isValidElement(r)) {
      const c = kc(r), s = Oc(a, r.props);
      return r.type !== i.Fragment && (s.ref = o ? lt(o, c) : c), i.cloneElement(r, s);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var er = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Dc(e) {
  const t = ({ children: n }) => /* @__PURE__ */ u(Re, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = er, t;
}
function Ic(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === er;
}
function Oc(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? r && a ? n[o] = (...s) => {
      const l = a(...s);
      return r(...s), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...a } : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kc(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Lc = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], O = Lc.reduce((e, t) => {
  const n = /* @__PURE__ */ je(`Primitive.${t}`), o = i.forwardRef((r, a) => {
    const { asChild: c, ...s } = r, l = c ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u(l, { ...s, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function tr(e, t) {
  e && Ft.flushSync(() => e.dispatchEvent(t));
}
function Z(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function $c(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Z(e);
  i.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Fc = "DismissableLayer", Sn = "dismissableLayer.update", Bc = "dismissableLayer.pointerDownOutside", Wc = "dismissableLayer.focusOutside", xo, nr = i.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bt = i.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: s,
      ...l
    } = e, d = i.useContext(nr), [f, p] = i.useState(null), m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = i.useState({}), w = F(t, (x) => p(x)), h = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(v), b = f ? h.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= y, R = Uc((x) => {
      const A = x.target, T = [...d.branches].some((M) => M.contains(A));
      !C || T || (r == null || r(x), c == null || c(x), x.defaultPrevented || s == null || s());
    }, m), E = zc((x) => {
      const A = x.target;
      [...d.branches].some((M) => M.contains(A)) || (a == null || a(x), c == null || c(x), x.defaultPrevented || s == null || s());
    }, m);
    return $c((x) => {
      b === d.layers.size - 1 && (o == null || o(x), !x.defaultPrevented && s && (x.preventDefault(), s()));
    }, m), i.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (xo = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Ro(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = xo);
        };
    }, [f, m, n, d]), i.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Ro());
    }, [f, d]), i.useEffect(() => {
      const x = () => g({});
      return document.addEventListener(Sn, x), () => document.removeEventListener(Sn, x);
    }, []), /* @__PURE__ */ u(
      O.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: S ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: P(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: P(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: P(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
Bt.displayName = Fc;
var Vc = "DismissableLayerBranch", Hc = i.forwardRef((e, t) => {
  const n = i.useContext(nr), o = i.useRef(null), r = F(t, o);
  return i.useEffect(() => {
    const a = o.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ u(O.div, { ...e, ref: r });
});
Hc.displayName = Vc;
function Uc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Z(e), o = i.useRef(!1), r = i.useRef(() => {
  });
  return i.useEffect(() => {
    const a = (s) => {
      if (s.target && !o.current) {
        let l = function() {
          or(
            Bc,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function zc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Z(e), o = i.useRef(!1);
  return i.useEffect(() => {
    const r = (a) => {
      a.target && !o.current && or(Wc, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Ro() {
  const e = new CustomEvent(Sn);
  document.dispatchEvent(e);
}
function or(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? tr(r, a) : r.dispatchEvent(a);
}
var un = "focusScope.autoFocusOnMount", dn = "focusScope.autoFocusOnUnmount", No = { bubbles: !1, cancelable: !0 }, Gc = "FocusScope", Wt = i.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: a,
    ...c
  } = e, [s, l] = i.useState(null), d = Z(r), f = Z(a), p = i.useRef(null), m = F(t, (h) => l(h)), g = i.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  i.useEffect(() => {
    if (o) {
      let h = function(S) {
        if (g.paused || !s) return;
        const C = S.target;
        s.contains(C) ? p.current = C : Ae(p.current, { select: !0 });
      }, v = function(S) {
        if (g.paused || !s) return;
        const C = S.relatedTarget;
        C !== null && (s.contains(C) || Ae(p.current, { select: !0 }));
      }, y = function(S) {
        if (document.activeElement === document.body)
          for (const R of S)
            R.removedNodes.length > 0 && Ae(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", v);
      const b = new MutationObserver(y);
      return s && b.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", v), b.disconnect();
      };
    }
  }, [o, s, g.paused]), i.useEffect(() => {
    if (s) {
      Po.add(g);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const y = new CustomEvent(un, No);
        s.addEventListener(un, d), s.dispatchEvent(y), y.defaultPrevented || (Kc(Zc(rr(s)), { select: !0 }), document.activeElement === h && Ae(s));
      }
      return () => {
        s.removeEventListener(un, d), setTimeout(() => {
          const y = new CustomEvent(dn, No);
          s.addEventListener(dn, f), s.dispatchEvent(y), y.defaultPrevented || Ae(h ?? document.body, { select: !0 }), s.removeEventListener(dn, f), Po.remove(g);
        }, 0);
      };
    }
  }, [s, d, f, g]);
  const w = i.useCallback(
    (h) => {
      if (!n && !o || g.paused) return;
      const v = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (v && y) {
        const b = h.currentTarget, [S, C] = Yc(b);
        S && C ? !h.shiftKey && y === C ? (h.preventDefault(), n && Ae(S, { select: !0 })) : h.shiftKey && y === S && (h.preventDefault(), n && Ae(C, { select: !0 })) : y === b && h.preventDefault();
      }
    },
    [n, o, g.paused]
  );
  return /* @__PURE__ */ u(O.div, { tabIndex: -1, ...c, ref: m, onKeyDown: w });
});
Wt.displayName = Gc;
function Kc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Ae(o, { select: t }), document.activeElement !== n) return;
}
function Yc(e) {
  const t = rr(e), n = Eo(t, e), o = Eo(t.reverse(), e);
  return [n, o];
}
function rr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Eo(e, t) {
  for (const n of e)
    if (!jc(n, { upTo: t })) return n;
}
function jc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Xc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ae(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Xc(e) && t && e.select();
  }
}
var Po = qc();
function qc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = _o(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = _o(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function _o(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function Zc(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Qc = "Portal", Vt = i.forwardRef((e, t) => {
  var s;
  const { container: n, ...o } = e, [r, a] = i.useState(!1);
  Q(() => a(!0), []);
  const c = n || r && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return c ? yc.createPortal(/* @__PURE__ */ u(O.div, { ...o, ref: t }), c) : null;
});
Vt.displayName = Qc;
function Jc(e, t) {
  return i.useReducer((n, o) => t[n][o] ?? n, e);
}
var te = (e) => {
  const { present: t, children: n } = e, o = el(t), r = typeof n == "function" ? n({ present: o.isPresent }) : i.Children.only(n), a = F(o.ref, tl(r));
  return typeof n == "function" || o.isPresent ? i.cloneElement(r, { ref: a }) : null;
};
te.displayName = "Presence";
function el(e) {
  const [t, n] = i.useState(), o = i.useRef(null), r = i.useRef(e), a = i.useRef("none"), c = e ? "mounted" : "unmounted", [s, l] = Jc(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return i.useEffect(() => {
    const d = vt(o.current);
    a.current = s === "mounted" ? d : "none";
  }, [s]), Q(() => {
    const d = o.current, f = r.current;
    if (f !== e) {
      const m = a.current, g = vt(d);
      e ? l("MOUNT") : g === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, l]), Q(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, p = (g) => {
        const h = vt(o.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (l("ANIMATION_END"), !r.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (g) => {
        g.target === t && (a.current = vt(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: i.useCallback((d) => {
      o.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function vt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tl(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var fn = 0;
function kn() {
  i.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ao()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ao()), fn++, () => {
      fn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), fn--;
    };
  }, []);
}
function Ao() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ge = function() {
  return ge = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ge.apply(this, arguments);
};
function ar(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function nl(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, a; o < r; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var xt = "right-scroll-bar-position", Rt = "width-before-scroll-bar", ol = "with-scroll-bars-hidden", rl = "--removed-body-scroll-bar-size";
function pn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function al(e, t) {
  var n = vc(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var il = typeof window < "u" ? i.useLayoutEffect : i.useEffect, To = /* @__PURE__ */ new WeakMap();
function sl(e, t) {
  var n = al(null, function(o) {
    return e.forEach(function(r) {
      return pn(r, o);
    });
  });
  return il(function() {
    var o = To.get(n);
    if (o) {
      var r = new Set(o), a = new Set(e), c = n.current;
      r.forEach(function(s) {
        a.has(s) || pn(s, null);
      }), a.forEach(function(s) {
        r.has(s) || pn(s, c);
      });
    }
    To.set(n, e);
  }, [e]), n;
}
function cl(e) {
  return e;
}
function ll(e, t) {
  t === void 0 && (t = cl);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, o);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), c = n;
      }
      var l = function() {
        var f = c;
        c = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(f) {
          c.push(f), d();
        },
        filter: function(f) {
          return c = c.filter(f), n;
        }
      };
    }
  };
  return r;
}
function ul(e) {
  e === void 0 && (e = {});
  var t = ll(null);
  return t.options = ge({ async: !0, ssr: !1 }, e), t;
}
var ir = function(e) {
  var t = e.sideCar, n = ar(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return i.createElement(o, ge({}, n));
};
ir.isSideCarExport = !0;
function dl(e, t) {
  return e.useMedium(t), ir;
}
var sr = ul(), mn = function() {
}, Ht = i.forwardRef(function(e, t) {
  var n = i.useRef(null), o = i.useState({
    onScrollCapture: mn,
    onWheelCapture: mn,
    onTouchMoveCapture: mn
  }), r = o[0], a = o[1], c = e.forwardProps, s = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, w = e.noIsolation, h = e.inert, v = e.allowPinchZoom, y = e.as, b = y === void 0 ? "div" : y, S = e.gapMode, C = ar(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = m, E = sl([n, t]), x = ge(ge({}, C), r);
  return i.createElement(
    i.Fragment,
    null,
    f && i.createElement(R, { sideCar: sr, removeScrollBar: d, shards: p, noRelative: g, noIsolation: w, inert: h, setCallbacks: a, allowPinchZoom: !!v, lockRef: n, gapMode: S }),
    c ? i.cloneElement(i.Children.only(s), ge(ge({}, x), { ref: E })) : i.createElement(b, ge({}, x, { className: l, ref: E }), s)
  );
});
Ht.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ht.classNames = {
  fullWidth: Rt,
  zeroRight: xt
};
var fl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function pl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = fl();
  return t && e.setAttribute("nonce", t), e;
}
function ml(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function hl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var gl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = pl()) && (ml(t, n), hl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, vl = function() {
  var e = gl();
  return function(t, n) {
    i.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, cr = function() {
  var e = vl(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, wl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, hn = function(e) {
  return parseInt(e || "", 10) || 0;
}, yl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [hn(n), hn(o), hn(r)];
}, bl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return wl;
  var t = yl(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Sl = cr(), Ge = "data-scroll-locked", Cl = function(e, t, n, o) {
  var r = e.left, a = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ol, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body[`).concat(Ge, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xt, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(Rt, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(xt, " .").concat(xt, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Rt, " .").concat(Rt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Ge, `] {
    `).concat(rl, ": ").concat(s, `px;
  }
`);
}, Mo = function() {
  var e = parseInt(document.body.getAttribute(Ge) || "0", 10);
  return isFinite(e) ? e : 0;
}, xl = function() {
  i.useEffect(function() {
    return document.body.setAttribute(Ge, (Mo() + 1).toString()), function() {
      var e = Mo() - 1;
      e <= 0 ? document.body.removeAttribute(Ge) : document.body.setAttribute(Ge, e.toString());
    };
  }, []);
}, Rl = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  xl();
  var a = i.useMemo(function() {
    return bl(r);
  }, [r]);
  return i.createElement(Sl, { styles: Cl(a, !t, r, n ? "" : "!important") });
}, Cn = !1;
if (typeof window < "u")
  try {
    var wt = Object.defineProperty({}, "passive", {
      get: function() {
        return Cn = !0, !0;
      }
    });
    window.addEventListener("test", wt, wt), window.removeEventListener("test", wt, wt);
  } catch {
    Cn = !1;
  }
var He = Cn ? { passive: !1 } : !1, Nl = function(e) {
  return e.tagName === "TEXTAREA";
}, lr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Nl(e) && n[t] === "visible")
  );
}, El = function(e) {
  return lr(e, "overflowY");
}, Pl = function(e) {
  return lr(e, "overflowX");
}, Do = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = ur(e, o);
    if (r) {
      var a = dr(e, o), c = a[1], s = a[2];
      if (c > s)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, _l = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Al = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, ur = function(e, t) {
  return e === "v" ? El(t) : Pl(t);
}, dr = function(e, t) {
  return e === "v" ? _l(t) : Al(t);
}, Tl = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Ml = function(e, t, n, o, r) {
  var a = Tl(e, window.getComputedStyle(t).direction), c = a * o, s = n.target, l = t.contains(s), d = !1, f = c > 0, p = 0, m = 0;
  do {
    if (!s)
      break;
    var g = dr(e, s), w = g[0], h = g[1], v = g[2], y = h - v - a * w;
    (w || y) && ur(e, s) && (p += y, m += w);
    var b = s.parentNode;
    s = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(m) < 1) && (d = !0), d;
}, yt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Io = function(e) {
  return [e.deltaX, e.deltaY];
}, Oo = function(e) {
  return e && "current" in e ? e.current : e;
}, Dl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Il = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Ol = 0, Ue = [];
function kl(e) {
  var t = i.useRef([]), n = i.useRef([0, 0]), o = i.useRef(), r = i.useState(Ol++)[0], a = i.useState(cr)[0], c = i.useRef(e);
  i.useEffect(function() {
    c.current = e;
  }, [e]), i.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = nl([e.lockRef.current], (e.shards || []).map(Oo), !0).filter(Boolean);
      return h.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), h.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = i.useCallback(function(h, v) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !c.current.allowPinchZoom;
    var y = yt(h), b = n.current, S = "deltaX" in h ? h.deltaX : b[0] - y[0], C = "deltaY" in h ? h.deltaY : b[1] - y[1], R, E = h.target, x = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in h && x === "h" && E.type === "range")
      return !1;
    var A = window.getSelection(), T = A && A.anchorNode, M = T ? T === E || T.contains(E) : !1;
    if (M)
      return !1;
    var L = Do(x, E);
    if (!L)
      return !0;
    if (L ? R = x : (R = x === "v" ? "h" : "v", L = Do(x, E)), !L)
      return !1;
    if (!o.current && "changedTouches" in h && (S || C) && (o.current = R), !R)
      return !0;
    var W = o.current || R;
    return Ml(W, v, h, W === "h" ? S : C);
  }, []), l = i.useCallback(function(h) {
    var v = h;
    if (!(!Ue.length || Ue[Ue.length - 1] !== a)) {
      var y = "deltaY" in v ? Io(v) : yt(v), b = t.current.filter(function(R) {
        return R.name === v.type && (R.target === v.target || v.target === R.shadowParent) && Dl(R.delta, y);
      })[0];
      if (b && b.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!b) {
        var S = (c.current.shards || []).map(Oo).filter(Boolean).filter(function(R) {
          return R.contains(v.target);
        }), C = S.length > 0 ? s(v, S[0]) : !c.current.noIsolation;
        C && v.cancelable && v.preventDefault();
      }
    }
  }, []), d = i.useCallback(function(h, v, y, b) {
    var S = { name: h, delta: v, target: y, should: b, shadowParent: Ll(y) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), f = i.useCallback(function(h) {
    n.current = yt(h), o.current = void 0;
  }, []), p = i.useCallback(function(h) {
    d(h.type, Io(h), h.target, s(h, e.lockRef.current));
  }, []), m = i.useCallback(function(h) {
    d(h.type, yt(h), h.target, s(h, e.lockRef.current));
  }, []);
  i.useEffect(function() {
    return Ue.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", l, He), document.addEventListener("touchmove", l, He), document.addEventListener("touchstart", f, He), function() {
      Ue = Ue.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, He), document.removeEventListener("touchmove", l, He), document.removeEventListener("touchstart", f, He);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    w ? i.createElement(a, { styles: Il(r) }) : null,
    g ? i.createElement(Rl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ll(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const $l = dl(sr, kl);
var Ut = i.forwardRef(function(e, t) {
  return i.createElement(Ht, ge({}, e, { ref: t, sideCar: $l }));
});
Ut.classNames = Ht.classNames;
var Fl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ze = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), St = {}, gn = 0, fr = function(e) {
  return e && (e.host || fr(e.parentNode));
}, Bl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = fr(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Wl = function(e, t, n, o) {
  var r = Bl(t, Array.isArray(e) ? e : [e]);
  St[n] || (St[n] = /* @__PURE__ */ new WeakMap());
  var a = St[n], c = [], s = /* @__PURE__ */ new Set(), l = new Set(r), d = function(p) {
    !p || s.has(p) || (s.add(p), d(p.parentNode));
  };
  r.forEach(d);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (s.has(m))
        f(m);
      else
        try {
          var g = m.getAttribute(o), w = g !== null && g !== "false", h = (ze.get(m) || 0) + 1, v = (a.get(m) || 0) + 1;
          ze.set(m, h), a.set(m, v), c.push(m), h === 1 && w && bt.set(m, !0), v === 1 && m.setAttribute(n, "true"), w || m.setAttribute(o, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return f(t), s.clear(), gn++, function() {
    c.forEach(function(p) {
      var m = ze.get(p) - 1, g = a.get(p) - 1;
      ze.set(p, m), a.set(p, g), m || (bt.has(p) || p.removeAttribute(o), bt.delete(p)), g || p.removeAttribute(n);
    }), gn--, gn || (ze = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ new WeakMap(), St = {});
  };
}, Ln = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Fl(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Wl(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, zt = "Dialog", [pr, mr] = le(zt), [Vl, me] = pr(zt), hr = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: a,
    modal: c = !0
  } = e, s = i.useRef(null), l = i.useRef(null), [d, f] = Ne({
    prop: o,
    defaultProp: r ?? !1,
    onChange: a,
    caller: zt
  });
  return /* @__PURE__ */ u(
    Vl,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: se(),
      titleId: se(),
      descriptionId: se(),
      open: d,
      onOpenChange: f,
      onOpenToggle: i.useCallback(() => f((p) => !p), [f]),
      modal: c,
      children: n
    }
  );
};
hr.displayName = zt;
var gr = "DialogTrigger", vr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = me(gr, n), a = F(t, r.triggerRef);
    return /* @__PURE__ */ u(
      O.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Bn(r.open),
        ...o,
        ref: a,
        onClick: P(e.onClick, r.onOpenToggle)
      }
    );
  }
);
vr.displayName = gr;
var $n = "DialogPortal", [Hl, wr] = pr($n, {
  forceMount: void 0
}), yr = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, a = me($n, t);
  return /* @__PURE__ */ u(Hl, { scope: t, forceMount: n, children: i.Children.map(o, (c) => /* @__PURE__ */ u(te, { present: n || a.open, children: /* @__PURE__ */ u(Vt, { asChild: !0, container: r, children: c }) })) });
};
yr.displayName = $n;
var Et = "DialogOverlay", br = i.forwardRef(
  (e, t) => {
    const n = wr(Et, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, a = me(Et, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ u(te, { present: o || a.open, children: /* @__PURE__ */ u(zl, { ...r, ref: t }) }) : null;
  }
);
br.displayName = Et;
var Ul = /* @__PURE__ */ je("DialogOverlay.RemoveScroll"), zl = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = me(Et, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u(Ut, { as: Ul, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ u(
        O.div,
        {
          "data-state": Bn(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), $e = "DialogContent", Sr = i.forwardRef(
  (e, t) => {
    const n = wr($e, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, a = me($e, e.__scopeDialog);
    return /* @__PURE__ */ u(te, { present: o || a.open, children: a.modal ? /* @__PURE__ */ u(Gl, { ...r, ref: t }) : /* @__PURE__ */ u(Kl, { ...r, ref: t }) });
  }
);
Sr.displayName = $e;
var Gl = i.forwardRef(
  (e, t) => {
    const n = me($e, e.__scopeDialog), o = i.useRef(null), r = F(t, n.contentRef, o);
    return i.useEffect(() => {
      const a = o.current;
      if (a) return Ln(a);
    }, []), /* @__PURE__ */ u(
      Cr,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (a) => {
          var c;
          a.preventDefault(), (c = n.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: P(e.onPointerDownOutside, (a) => {
          const c = a.detail.originalEvent, s = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: P(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Kl = i.forwardRef(
  (e, t) => {
    const n = me($e, e.__scopeDialog), o = i.useRef(!1), r = i.useRef(!1);
    return /* @__PURE__ */ u(
      Cr,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var c, s;
          (c = e.onCloseAutoFocus) == null || c.call(e, a), a.defaultPrevented || (o.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (a) => {
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const c = a.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
        }
      }
    );
  }
), Cr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, ...c } = e, s = me($e, n), l = i.useRef(null), d = F(t, l);
    return kn(), /* @__PURE__ */ $(Re, { children: [
      /* @__PURE__ */ u(
        Wt,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ u(
            Bt,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Bn(s.open),
              ...c,
              ref: d,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ $(Re, { children: [
        /* @__PURE__ */ u(jl, { titleId: s.titleId }),
        /* @__PURE__ */ u(ql, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Fn = "DialogTitle", xr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = me(Fn, n);
    return /* @__PURE__ */ u(O.h2, { id: r.titleId, ...o, ref: t });
  }
);
xr.displayName = Fn;
var Rr = "DialogDescription", Nr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = me(Rr, n);
    return /* @__PURE__ */ u(O.p, { id: r.descriptionId, ...o, ref: t });
  }
);
Nr.displayName = Rr;
var Er = "DialogClose", Pr = i.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = me(Er, n);
    return /* @__PURE__ */ u(
      O.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: P(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
Pr.displayName = Er;
function Bn(e) {
  return e ? "open" : "closed";
}
var _r = "DialogTitleWarning", [Yl, Ar] = Rc(_r, {
  contentName: $e,
  titleName: Fn,
  docsSlug: "dialog"
}), jl = ({ titleId: e }) => {
  const t = Ar(_r), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return i.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Xl = "DialogDescriptionWarning", ql = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ar(Xl).contentName}}.`;
  return i.useEffect(() => {
    var a;
    const r = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, Tr = hr, Mr = vr, Dr = yr, Wn = br, Vn = Sr, Hn = xr, Un = Nr, Gt = Pr, Ir = "AlertDialog", [Zl] = le(Ir, [
  mr
]), _e = mr(), Or = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = _e(t);
  return /* @__PURE__ */ u(Tr, { ...o, ...n, modal: !0 });
};
Or.displayName = Ir;
var Ql = "AlertDialogTrigger", kr = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = _e(n);
    return /* @__PURE__ */ u(Mr, { ...r, ...o, ref: t });
  }
);
kr.displayName = Ql;
var Jl = "AlertDialogPortal", Lr = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = _e(t);
  return /* @__PURE__ */ u(Dr, { ...o, ...n });
};
Lr.displayName = Jl;
var eu = "AlertDialogOverlay", $r = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = _e(n);
    return /* @__PURE__ */ u(Wn, { ...r, ...o, ref: t });
  }
);
$r.displayName = eu;
var Ke = "AlertDialogContent", [tu, nu] = Zl(Ke), ou = /* @__PURE__ */ Dc("AlertDialogContent"), Fr = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e, a = _e(n), c = i.useRef(null), s = F(t, c), l = i.useRef(null);
    return /* @__PURE__ */ u(
      Yl,
      {
        contentName: Ke,
        titleName: Br,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ u(tu, { scope: n, cancelRef: l, children: /* @__PURE__ */ $(
          Vn,
          {
            role: "alertdialog",
            ...a,
            ...r,
            ref: s,
            onOpenAutoFocus: P(r.onOpenAutoFocus, (d) => {
              var f;
              d.preventDefault(), (f = l.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ u(ou, { children: o }),
              /* @__PURE__ */ u(au, { contentRef: c })
            ]
          }
        ) })
      }
    );
  }
);
Fr.displayName = Ke;
var Br = "AlertDialogTitle", Wr = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = _e(n);
    return /* @__PURE__ */ u(Hn, { ...r, ...o, ref: t });
  }
);
Wr.displayName = Br;
var Vr = "AlertDialogDescription", Hr = i.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = _e(n);
  return /* @__PURE__ */ u(Un, { ...r, ...o, ref: t });
});
Hr.displayName = Vr;
var ru = "AlertDialogAction", Ur = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = _e(n);
    return /* @__PURE__ */ u(Gt, { ...r, ...o, ref: t });
  }
);
Ur.displayName = ru;
var zr = "AlertDialogCancel", Gr = i.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, { cancelRef: r } = nu(zr, n), a = _e(n), c = F(t, r);
    return /* @__PURE__ */ u(Gt, { ...a, ...o, ref: c });
  }
);
Gr.displayName = zr;
var au = ({ contentRef: e }) => {
  const t = `\`${Ke}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Ke}\` by passing a \`${Vr}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Ke}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return i.useEffect(() => {
    var o;
    document.getElementById(
      (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, iu = Or, su = kr, cu = Lr, Kr = $r, Yr = Fr, jr = Ur, Xr = Gr, qr = Wr, Zr = Hr;
const Bh = iu, Wh = su, lu = cu, Qr = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Kr,
  {
    className: N("ui-alert-dialog-overlay", e),
    ...t,
    ref: n
  }
));
Qr.displayName = Kr.displayName;
const uu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ $(lu, { children: [
  /* @__PURE__ */ u(Qr, {}),
  /* @__PURE__ */ u(
    Yr,
    {
      ref: n,
      className: N("ui-alert-dialog-content", e),
      ...t
    }
  )
] }));
uu.displayName = Yr.displayName;
const du = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "div",
  {
    className: N("ui-alert-dialog__header", e),
    ...t
  }
);
du.displayName = "AlertDialogHeader";
const fu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "div",
  {
    className: N("ui-alert-dialog__footer", e),
    ...t
  }
);
fu.displayName = "AlertDialogFooter";
const pu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  qr,
  {
    ref: n,
    className: N("ui-alert-dialog__title", e),
    ...t
  }
));
pu.displayName = qr.displayName;
const mu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Zr,
  {
    ref: n,
    className: N("ui-alert-dialog__description", e),
    ...t
  }
));
mu.displayName = Zr.displayName;
const hu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  jr,
  {
    ref: n,
    className: N("ui-btn ui-btn--default ui-btn--default ui-alert-dialog__action", e),
    ...t
  }
));
hu.displayName = jr.displayName;
const gu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Xr,
  {
    ref: n,
    className: N("ui-btn ui-btn--outline ui-btn--default ui-alert-dialog__cancel", e),
    ...t
  }
));
gu.displayName = Xr.displayName;
function Vh({ className: e, variant: t = "default", ...n }) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: N(
        "ui-badge",
        `ui-badge--${t}`,
        e
      ),
      ...n
    }
  );
}
var vu = Symbol.for("react.lazy"), Pt = i[" use ".trim().toString()];
function wu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Jr(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === vu && "_payload" in e && wu(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ea(e) {
  const t = /* @__PURE__ */ bu(e), n = i.forwardRef((o, r) => {
    let { children: a, ...c } = o;
    Jr(a) && typeof Pt == "function" && (a = Pt(a._payload));
    const s = i.Children.toArray(a), l = s.find(Cu);
    if (l) {
      const d = l.props.children, f = s.map((p) => p === l ? i.Children.count(d) > 1 ? i.Children.only(null) : i.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ u(t, { ...c, ref: r, children: i.isValidElement(d) ? i.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ u(t, { ...c, ref: r, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var yu = /* @__PURE__ */ ea("Slot");
// @__NO_SIDE_EFFECTS__
function bu(e) {
  const t = i.forwardRef((n, o) => {
    let { children: r, ...a } = n;
    if (Jr(r) && typeof Pt == "function" && (r = Pt(r._payload)), i.isValidElement(r)) {
      const c = Ru(r), s = xu(a, r.props);
      return r.type !== i.Fragment && (s.ref = o ? lt(o, c) : c), i.cloneElement(r, s);
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Su = Symbol("radix.slottable");
function Cu(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Su;
}
function xu(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? r && a ? n[o] = (...s) => {
      const l = a(...s);
      return r(...s), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...a } : o === "className" && (n[o] = [r, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ru(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Nu = i.forwardRef(
  ({
    className: e,
    variant: t = "default",
    size: n = "default",
    asChild: o = !1,
    loading: r = !1,
    disabled: a,
    children: c,
    ...s
  }, l) => {
    const d = o ? yu : "button", f = !!r, p = N(
      "ui-btn",
      `ui-btn--${t}`,
      `ui-btn--${n}`,
      e
    );
    return /* @__PURE__ */ $(
      d,
      {
        className: p,
        ref: l,
        disabled: a || f,
        "aria-busy": f || void 0,
        ...s,
        children: [
          f && /* @__PURE__ */ $(
            "svg",
            {
              className: "ui-btn__spinner",
              fill: "none",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ u(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ u(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          c
        ]
      }
    );
  }
);
Nu.displayName = "Button";
const Eu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "div",
  {
    ref: n,
    className: N("ui-card", e),
    ...t
  }
));
Eu.displayName = "Card";
const Pu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "div",
  {
    ref: n,
    className: N("ui-card__header", e),
    ...t
  }
));
Pu.displayName = "CardHeader";
const _u = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "div",
  {
    ref: n,
    className: N("ui-card__title", e),
    ...t
  }
));
_u.displayName = "CardTitle";
const Au = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "div",
  {
    ref: n,
    className: N("ui-card__description", e),
    ...t
  }
));
Au.displayName = "CardDescription";
const Tu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("div", { ref: n, className: N("ui-card__content", e), ...t }));
Tu.displayName = "CardContent";
const Mu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "div",
  {
    ref: n,
    className: N("ui-card__footer", e),
    ...t
  }
));
Mu.displayName = "CardFooter";
function zn(e) {
  const t = i.useRef({ value: e, previous: e });
  return i.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Gn(e) {
  const [t, n] = i.useState(void 0);
  return Q(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const a = r[0];
        let c, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          c = d.inlineSize, s = d.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        n({ width: c, height: s });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Kt = "Checkbox", [Du] = le(Kt), [Iu, Kn] = Du(Kt);
function Ou(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: o,
    defaultChecked: r,
    disabled: a,
    form: c,
    name: s,
    onCheckedChange: l,
    required: d,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, g] = Ne({
    prop: n,
    defaultProp: r ?? !1,
    onChange: l,
    caller: Kt
  }), [w, h] = i.useState(null), [v, y] = i.useState(null), b = i.useRef(!1), S = w ? !!c || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: m,
    disabled: a,
    setChecked: g,
    control: w,
    setControl: h,
    name: s,
    form: c,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: Te(r) ? !1 : r,
    isFormControl: S,
    bubbleInput: v,
    setBubbleInput: y
  };
  return /* @__PURE__ */ u(
    Iu,
    {
      scope: t,
      ...C,
      children: ku(p) ? p(C) : o
    }
  );
}
var ta = "CheckboxTrigger", na = i.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...o }, r) => {
    const {
      control: a,
      value: c,
      disabled: s,
      checked: l,
      required: d,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: g,
      bubbleInput: w
    } = Kn(ta, e), h = F(r, f), v = i.useRef(l);
    return i.useEffect(() => {
      const y = a == null ? void 0 : a.form;
      if (y) {
        const b = () => p(v.current);
        return y.addEventListener("reset", b), () => y.removeEventListener("reset", b);
      }
    }, [a, p]), /* @__PURE__ */ u(
      O.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Te(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": sa(l),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: c,
        ...o,
        ref: h,
        onKeyDown: P(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: P(n, (y) => {
          p((b) => Te(b) ? !0 : !b), w && g && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
        })
      }
    );
  }
);
na.displayName = ta;
var Yn = i.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: r,
      defaultChecked: a,
      required: c,
      disabled: s,
      value: l,
      onCheckedChange: d,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ u(
      Ou,
      {
        __scopeCheckbox: n,
        checked: r,
        defaultChecked: a,
        disabled: s,
        required: c,
        onCheckedChange: d,
        name: o,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ $(Re, { children: [
          /* @__PURE__ */ u(
            na,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          m && /* @__PURE__ */ u(
            ia,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Yn.displayName = Kt;
var oa = "CheckboxIndicator", ra = i.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e, a = Kn(oa, n);
    return /* @__PURE__ */ u(
      te,
      {
        present: o || Te(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u(
          O.span,
          {
            "data-state": sa(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...r,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
ra.displayName = oa;
var aa = "CheckboxBubbleInput", ia = i.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: o,
      hasConsumerStoppedPropagationRef: r,
      checked: a,
      defaultChecked: c,
      required: s,
      disabled: l,
      name: d,
      value: f,
      form: p,
      bubbleInput: m,
      setBubbleInput: g
    } = Kn(aa, e), w = F(n, g), h = zn(a), v = Gn(o);
    i.useEffect(() => {
      const b = m;
      if (!b) return;
      const S = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        S,
        "checked"
      ).set, E = !r.current;
      if (h !== a && R) {
        const x = new Event("click", { bubbles: E });
        b.indeterminate = Te(a), R.call(b, Te(a) ? !1 : a), b.dispatchEvent(x);
      }
    }, [m, h, a, r]);
    const y = i.useRef(Te(a) ? !1 : a);
    return /* @__PURE__ */ u(
      O.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: c ?? y.current,
        required: s,
        disabled: l,
        name: d,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: w,
        style: {
          ...t.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
ia.displayName = aa;
function ku(e) {
  return typeof e == "function";
}
function Te(e) {
  return e === "indeterminate";
}
function sa(e) {
  return Te(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = (e) => {
  const t = $u(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bu = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = Qo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: a,
    iconNode: c,
    ...s
  }, l) => bn(
    "svg",
    {
      ref: l,
      ...Fu,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: ca("lucide", r),
      ...!a && !Bu(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...c.map(([d, f]) => bn(d, f)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = (e, t) => {
  const n = Qo(
    ({ className: o, ...r }, a) => bn(Wu, {
      ref: a,
      iconNode: t,
      className: ca(
        `lucide-${Lu(ko(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = ko(e), n;
};
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], jn = Ze("check", Vu);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hu = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], la = Ze("chevron-down", Hu);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uu = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], zu = Ze("chevron-right", Uu);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Ku = Ze("chevron-up", Gu);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], ju = Ze("circle", Yu);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], qu = Ze("x", Xu), Zu = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Yn,
  {
    ref: n,
    className: N("ui-checkbox", e),
    ...t,
    children: /* @__PURE__ */ u(ra, { className: "ui-checkbox__indicator", children: /* @__PURE__ */ u(jn, { className: "lucide" }) })
  }
));
Zu.displayName = Yn.displayName;
const Hh = Tr, Uh = Mr, Qu = Dr, zh = Gt, ua = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Wn,
  {
    ref: n,
    className: N("ui-dialog-overlay", e),
    ...t
  }
));
ua.displayName = Wn.displayName;
const Ju = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ $(Qu, { children: [
  /* @__PURE__ */ u(ua, {}),
  /* @__PURE__ */ $(
    Vn,
    {
      ref: o,
      className: N("ui-dialog-content", e),
      ...n,
      children: [
        t,
        /* @__PURE__ */ $(Gt, { className: "ui-dialog-close", children: [
          /* @__PURE__ */ u(qu, { className: "lucide" }),
          /* @__PURE__ */ u("span", { className: "ui-dialog-close__sr", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ju.displayName = Vn.displayName;
const ed = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "div",
  {
    className: N("ui-dialog__header", e),
    ...t
  }
);
ed.displayName = "DialogHeader";
const td = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "div",
  {
    className: N("ui-dialog__footer", e),
    ...t
  }
);
td.displayName = "DialogFooter";
const nd = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Hn,
  {
    ref: n,
    className: N("ui-dialog__title", e),
    ...t
  }
));
nd.displayName = Hn.displayName;
const od = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Un,
  {
    ref: n,
    className: N("ui-dialog__description", e),
    ...t
  }
));
od.displayName = Un.displayName;
function Xn(e) {
  const t = e + "CollectionProvider", [n, o] = le(t), [r, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (h) => {
    const { scope: v, children: y } = h, b = Le.useRef(null), S = Le.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u(r, { scope: v, itemMap: S, collectionRef: b, children: y });
  };
  c.displayName = t;
  const s = e + "CollectionSlot", l = /* @__PURE__ */ je(s), d = Le.forwardRef(
    (h, v) => {
      const { scope: y, children: b } = h, S = a(s, y), C = F(v, S.collectionRef);
      return /* @__PURE__ */ u(l, { ref: C, children: b });
    }
  );
  d.displayName = s;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ je(f), g = Le.forwardRef(
    (h, v) => {
      const { scope: y, children: b, ...S } = h, C = Le.useRef(null), R = F(v, C), E = a(f, y);
      return Le.useEffect(() => (E.itemMap.set(C, { ref: C, ...S }), () => void E.itemMap.delete(C))), /* @__PURE__ */ u(m, { [p]: "", ref: R, children: b });
    }
  );
  g.displayName = f;
  function w(h) {
    const v = a(e + "CollectionConsumer", h);
    return Le.useCallback(() => {
      const b = v.collectionRef.current;
      if (!b) return [];
      const S = Array.from(b.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, x) => S.indexOf(E.ref.current) - S.indexOf(x.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: c, Slot: d, ItemSlot: g },
    w,
    o
  ];
}
var rd = i.createContext(void 0);
function ut(e) {
  const t = i.useContext(rd);
  return e || t || "ltr";
}
const ad = ["top", "right", "bottom", "left"], Me = Math.min, re = Math.max, _t = Math.round, Ct = Math.floor, we = (e) => ({
  x: e,
  y: e
}), id = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sd = {
  start: "end",
  end: "start"
};
function xn(e, t, n) {
  return re(e, Me(t, n));
}
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function qn(e) {
  return e === "x" ? "y" : "x";
}
function Zn(e) {
  return e === "y" ? "height" : "width";
}
const cd = /* @__PURE__ */ new Set(["top", "bottom"]);
function ve(e) {
  return cd.has(Pe(e)) ? "y" : "x";
}
function Qn(e) {
  return qn(ve(e));
}
function ld(e, t, n) {
  n === void 0 && (n = !1);
  const o = Qe(e), r = Qn(e), a = Zn(r);
  let c = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = At(c)), [c, At(c)];
}
function ud(e) {
  const t = At(e);
  return [Rn(e), t, Rn(t)];
}
function Rn(e) {
  return e.replace(/start|end/g, (t) => sd[t]);
}
const Lo = ["left", "right"], $o = ["right", "left"], dd = ["top", "bottom"], fd = ["bottom", "top"];
function pd(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? $o : Lo : t ? Lo : $o;
    case "left":
    case "right":
      return t ? dd : fd;
    default:
      return [];
  }
}
function md(e, t, n, o) {
  const r = Qe(e);
  let a = pd(Pe(e), n === "start", o);
  return r && (a = a.map((c) => c + "-" + r), t && (a = a.concat(a.map(Rn)))), a;
}
function At(e) {
  return e.replace(/left|right|bottom|top/g, (t) => id[t]);
}
function hd(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function da(e) {
  return typeof e != "number" ? hd(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tt(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Fo(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = ve(t), c = Qn(t), s = Zn(c), l = Pe(t), d = a === "y", f = o.x + o.width / 2 - r.width / 2, p = o.y + o.height / 2 - r.height / 2, m = o[s] / 2 - r[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      g = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: o.x - r.width,
        y: p
      };
      break;
    default:
      g = {
        x: o.x,
        y: o.y
      };
  }
  switch (Qe(t)) {
    case "start":
      g[c] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      g[c] += m * (n && d ? -1 : 1);
      break;
  }
  return g;
}
async function gd(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: c,
    elements: s,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = Ee(t, e), w = da(g), v = s[m ? p === "floating" ? "reference" : "floating" : p], y = Tt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(v))) == null || n ? v : v.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), b = p === "floating" ? {
    x: o,
    y: r,
    width: c.floating.width,
    height: c.floating.height
  } : c.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = Tt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: S,
    strategy: l
  }) : b);
  return {
    top: (y.top - R.top + w.top) / C.y,
    bottom: (R.bottom - y.bottom + w.bottom) / C.y,
    left: (y.left - R.left + w.left) / C.x,
    right: (R.right - y.right + w.right) / C.x
  };
}
const vd = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: c
  } = n, s = a.filter(Boolean), l = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let d = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: p
  } = Fo(d, o, l), m = o, g = {}, w = 0;
  for (let v = 0; v < s.length; v++) {
    var h;
    const {
      name: y,
      fn: b
    } = s[v], {
      x: S,
      y: C,
      data: R,
      reset: E
    } = await b({
      x: f,
      y: p,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: g,
      rects: d,
      platform: {
        ...c,
        detectOverflow: (h = c.detectOverflow) != null ? h : gd
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    f = S ?? f, p = C ?? p, g = {
      ...g,
      [y]: {
        ...g[y],
        ...R
      }
    }, E && w <= 50 && (w++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (d = E.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: f,
      y: p
    } = Fo(d, m, l)), v = -1);
  }
  return {
    x: f,
    y: p,
    placement: m,
    strategy: r,
    middlewareData: g
  };
}, wd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: a,
      platform: c,
      elements: s,
      middlewareData: l
    } = t, {
      element: d,
      padding: f = 0
    } = Ee(e, t) || {};
    if (d == null)
      return {};
    const p = da(f), m = {
      x: n,
      y: o
    }, g = Qn(r), w = Zn(g), h = await c.getDimensions(d), v = g === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", S = v ? "clientHeight" : "clientWidth", C = a.reference[w] + a.reference[g] - m[g] - a.floating[w], R = m[g] - a.reference[g], E = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(d));
    let x = E ? E[S] : 0;
    (!x || !await (c.isElement == null ? void 0 : c.isElement(E))) && (x = s.floating[S] || a.floating[w]);
    const A = C / 2 - R / 2, T = x / 2 - h[w] / 2 - 1, M = Me(p[y], T), L = Me(p[b], T), W = M, V = x - h[w] - L, B = x / 2 - h[w] / 2 + A, Y = xn(W, B, V), k = !l.arrow && Qe(r) != null && B !== Y && a.reference[w] / 2 - (B < W ? M : L) - h[w] / 2 < 0, H = k ? B < W ? B - W : B - V : 0;
    return {
      [g]: m[g] + H,
      data: {
        [g]: Y,
        centerOffset: B - Y - H,
        ...k && {
          alignmentOffset: H
        }
      },
      reset: k
    };
  }
}), yd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: a,
        rects: c,
        initialPlacement: s,
        platform: l,
        elements: d
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: h = !0,
        ...v
      } = Ee(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const y = Pe(r), b = ve(s), S = Pe(s) === s, C = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), R = m || (S || !h ? [At(s)] : ud(s)), E = w !== "none";
      !m && E && R.push(...md(s, h, w, C));
      const x = [s, ...R], A = await l.detectOverflow(t, v), T = [];
      let M = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (f && T.push(A[y]), p) {
        const B = ld(r, c, C);
        T.push(A[B[0]], A[B[1]]);
      }
      if (M = [...M, {
        placement: r,
        overflows: T
      }], !T.every((B) => B <= 0)) {
        var L, W;
        const B = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1, Y = x[B];
        if (Y && (!(p === "alignment" ? b !== ve(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((D) => ve(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: M
            },
            reset: {
              placement: Y
            }
          };
        let k = (W = M.filter((H) => H.overflows[0] <= 0).sort((H, D) => H.overflows[1] - D.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!k)
          switch (g) {
            case "bestFit": {
              var V;
              const H = (V = M.filter((D) => {
                if (E) {
                  const _ = ve(D.placement);
                  return _ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((_) => _ > 0).reduce((_, j) => _ + j, 0)]).sort((D, _) => D[1] - _[1])[0]) == null ? void 0 : V[0];
              H && (k = H);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (r !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function Bo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Wo(e) {
  return ad.some((t) => e[t] >= 0);
}
const bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...a
      } = Ee(e, t);
      switch (r) {
        case "referenceHidden": {
          const c = await o.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), s = Bo(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Wo(s)
            }
          };
        }
        case "escaped": {
          const c = await o.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), s = Bo(c, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Wo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, fa = /* @__PURE__ */ new Set(["left", "top"]);
async function Sd(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), c = Pe(n), s = Qe(n), l = ve(n) === "y", d = fa.has(c) ? -1 : 1, f = a && l ? -1 : 1, p = Ee(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: w
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return s && typeof w == "number" && (g = s === "end" ? w * -1 : w), l ? {
    x: g * f,
    y: m * d
  } : {
    x: m * d,
    y: g * f
  };
}
const Cd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: a,
        placement: c,
        middlewareData: s
      } = t, l = await Sd(t, e);
      return c === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: c
        }
      };
    }
  };
}, xd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: a
      } = t, {
        mainAxis: c = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: b,
              y: S
            } = y;
            return {
              x: b,
              y: S
            };
          }
        },
        ...d
      } = Ee(e, t), f = {
        x: n,
        y: o
      }, p = await a.detectOverflow(t, d), m = ve(Pe(r)), g = qn(m);
      let w = f[g], h = f[m];
      if (c) {
        const y = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", S = w + p[y], C = w - p[b];
        w = xn(S, w, C);
      }
      if (s) {
        const y = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", S = h + p[y], C = h - p[b];
        h = xn(S, h, C);
      }
      const v = l.fn({
        ...t,
        [g]: w,
        [m]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - o,
          enabled: {
            [g]: c,
            [m]: s
          }
        }
      };
    }
  };
}, Rd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: a,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = Ee(e, t), f = {
        x: n,
        y: o
      }, p = ve(r), m = qn(p);
      let g = f[m], w = f[p];
      const h = Ee(s, t), v = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const S = m === "y" ? "height" : "width", C = a.reference[m] - a.floating[S] + v.mainAxis, R = a.reference[m] + a.reference[S] - v.mainAxis;
        g < C ? g = C : g > R && (g = R);
      }
      if (d) {
        var y, b;
        const S = m === "y" ? "width" : "height", C = fa.has(Pe(r)), R = a.reference[p] - a.floating[S] + (C && ((y = c.offset) == null ? void 0 : y[p]) || 0) + (C ? 0 : v.crossAxis), E = a.reference[p] + a.reference[S] + (C ? 0 : ((b = c.offset) == null ? void 0 : b[p]) || 0) - (C ? v.crossAxis : 0);
        w < R ? w = R : w > E && (w = E);
      }
      return {
        [m]: g,
        [p]: w
      };
    }
  };
}, Nd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: a,
        platform: c,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...d
      } = Ee(e, t), f = await c.detectOverflow(t, d), p = Pe(r), m = Qe(r), g = ve(r) === "y", {
        width: w,
        height: h
      } = a.floating;
      let v, y;
      p === "top" || p === "bottom" ? (v = p, y = m === (await (c.isRTL == null ? void 0 : c.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (y = p, v = m === "end" ? "top" : "bottom");
      const b = h - f.top - f.bottom, S = w - f.left - f.right, C = Me(h - f[v], b), R = Me(w - f[y], S), E = !t.middlewareData.shift;
      let x = C, A = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = S), (o = t.middlewareData.shift) != null && o.enabled.y && (x = b), E && !m) {
        const M = re(f.left, 0), L = re(f.right, 0), W = re(f.top, 0), V = re(f.bottom, 0);
        g ? A = w - 2 * (M !== 0 || L !== 0 ? M + L : re(f.left, f.right)) : x = h - 2 * (W !== 0 || V !== 0 ? W + V : re(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: A,
        availableHeight: x
      });
      const T = await c.getDimensions(s.floating);
      return w !== T.width || h !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yt() {
  return typeof window < "u";
}
function Je(e) {
  return pa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ae(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (pa(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pa(e) {
  return Yt() ? e instanceof Node || e instanceof ae(e).Node : !1;
}
function fe(e) {
  return Yt() ? e instanceof Element || e instanceof ae(e).Element : !1;
}
function ye(e) {
  return Yt() ? e instanceof HTMLElement || e instanceof ae(e).HTMLElement : !1;
}
function Vo(e) {
  return !Yt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ae(e).ShadowRoot;
}
const Ed = /* @__PURE__ */ new Set(["inline", "contents"]);
function dt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Ed.has(r);
}
const Pd = /* @__PURE__ */ new Set(["table", "td", "th"]);
function _d(e) {
  return Pd.has(Je(e));
}
const Ad = [":popover-open", ":modal"];
function jt(e) {
  return Ad.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Td = ["transform", "translate", "scale", "rotate", "perspective"], Md = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Dd = ["paint", "layout", "strict", "content"];
function Jn(e) {
  const t = eo(), n = fe(e) ? pe(e) : e;
  return Td.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Md.some((o) => (n.willChange || "").includes(o)) || Dd.some((o) => (n.contain || "").includes(o));
}
function Id(e) {
  let t = De(e);
  for (; ye(t) && !Xe(t); ) {
    if (Jn(t))
      return t;
    if (jt(t))
      return null;
    t = De(t);
  }
  return null;
}
function eo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Od = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Xe(e) {
  return Od.has(Je(e));
}
function pe(e) {
  return ae(e).getComputedStyle(e);
}
function Xt(e) {
  return fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function De(e) {
  if (Je(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Vo(e) && e.host || // Fallback.
    be(e)
  );
  return Vo(t) ? t.host : t;
}
function ma(e) {
  const t = De(e);
  return Xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ye(t) && dt(t) ? t : ma(t);
}
function it(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ma(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), c = ae(r);
  if (a) {
    const s = Nn(c);
    return t.concat(c, c.visualViewport || [], dt(r) ? r : [], s && n ? it(s) : []);
  }
  return t.concat(r, it(r, [], n));
}
function Nn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ha(e) {
  const t = pe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ye(e), a = r ? e.offsetWidth : n, c = r ? e.offsetHeight : o, s = _t(n) !== a || _t(o) !== c;
  return s && (n = a, o = c), {
    width: n,
    height: o,
    $: s
  };
}
function to(e) {
  return fe(e) ? e : e.contextElement;
}
function Ye(e) {
  const t = to(e);
  if (!ye(t))
    return we(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = ha(t);
  let c = (a ? _t(n.width) : n.width) / o, s = (a ? _t(n.height) : n.height) / r;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const kd = /* @__PURE__ */ we(0);
function ga(e) {
  const t = ae(e);
  return !eo() || !t.visualViewport ? kd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ld(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ae(e) ? !1 : t;
}
function Fe(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = to(e);
  let c = we(1);
  t && (o ? fe(o) && (c = Ye(o)) : c = Ye(e));
  const s = Ld(a, n, o) ? ga(a) : we(0);
  let l = (r.left + s.x) / c.x, d = (r.top + s.y) / c.y, f = r.width / c.x, p = r.height / c.y;
  if (a) {
    const m = ae(a), g = o && fe(o) ? ae(o) : o;
    let w = m, h = Nn(w);
    for (; h && o && g !== w; ) {
      const v = Ye(h), y = h.getBoundingClientRect(), b = pe(h), S = y.left + (h.clientLeft + parseFloat(b.paddingLeft)) * v.x, C = y.top + (h.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, d *= v.y, f *= v.x, p *= v.y, l += S, d += C, w = ae(h), h = Nn(w);
    }
  }
  return Tt({
    width: f,
    height: p,
    x: l,
    y: d
  });
}
function qt(e, t) {
  const n = Xt(e).scrollLeft;
  return t ? t.left + n : Fe(be(e)).left + n;
}
function va(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - qt(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function $d(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", c = be(o), s = t ? jt(t.floating) : !1;
  if (o === c || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = we(1);
  const f = we(0), p = ye(o);
  if ((p || !p && !a) && ((Je(o) !== "body" || dt(c)) && (l = Xt(o)), ye(o))) {
    const g = Fe(o);
    d = Ye(o), f.x = g.x + o.clientLeft, f.y = g.y + o.clientTop;
  }
  const m = c && !p && !a ? va(c, l) : we(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + m.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + m.y
  };
}
function Fd(e) {
  return Array.from(e.getClientRects());
}
function Bd(e) {
  const t = be(e), n = Xt(e), o = e.ownerDocument.body, r = re(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = re(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -n.scrollLeft + qt(e);
  const s = -n.scrollTop;
  return pe(o).direction === "rtl" && (c += re(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: c,
    y: s
  };
}
const Ho = 25;
function Wd(e, t) {
  const n = ae(e), o = be(e), r = n.visualViewport;
  let a = o.clientWidth, c = o.clientHeight, s = 0, l = 0;
  if (r) {
    a = r.width, c = r.height;
    const f = eo();
    (!f || f && t === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  const d = qt(o);
  if (d <= 0) {
    const f = o.ownerDocument, p = f.body, m = getComputedStyle(p), g = f.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, w = Math.abs(o.clientWidth - p.clientWidth - g);
    w <= Ho && (a -= w);
  } else d <= Ho && (a += d);
  return {
    width: a,
    height: c,
    x: s,
    y: l
  };
}
const Vd = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Hd(e, t) {
  const n = Fe(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = ye(e) ? Ye(e) : we(1), c = e.clientWidth * a.x, s = e.clientHeight * a.y, l = r * a.x, d = o * a.y;
  return {
    width: c,
    height: s,
    x: l,
    y: d
  };
}
function Uo(e, t, n) {
  let o;
  if (t === "viewport")
    o = Wd(e, n);
  else if (t === "document")
    o = Bd(be(e));
  else if (fe(t))
    o = Hd(t, n);
  else {
    const r = ga(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Tt(o);
}
function wa(e, t) {
  const n = De(e);
  return n === t || !fe(n) || Xe(n) ? !1 : pe(n).position === "fixed" || wa(n, t);
}
function Ud(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = it(e, [], !1).filter((s) => fe(s) && Je(s) !== "body"), r = null;
  const a = pe(e).position === "fixed";
  let c = a ? De(e) : e;
  for (; fe(c) && !Xe(c); ) {
    const s = pe(c), l = Jn(c);
    !l && s.position === "fixed" && (r = null), (a ? !l && !r : !l && s.position === "static" && !!r && Vd.has(r.position) || dt(c) && !l && wa(e, c)) ? o = o.filter((f) => f !== c) : r = s, c = De(c);
  }
  return t.set(e, o), o;
}
function zd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const c = [...n === "clippingAncestors" ? jt(t) ? [] : Ud(t, this._c) : [].concat(n), o], s = c[0], l = c.reduce((d, f) => {
    const p = Uo(t, f, r);
    return d.top = re(p.top, d.top), d.right = Me(p.right, d.right), d.bottom = Me(p.bottom, d.bottom), d.left = re(p.left, d.left), d;
  }, Uo(t, s, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gd(e) {
  const {
    width: t,
    height: n
  } = ha(e);
  return {
    width: t,
    height: n
  };
}
function Kd(e, t, n) {
  const o = ye(t), r = be(t), a = n === "fixed", c = Fe(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = we(0);
  function d() {
    l.x = qt(r);
  }
  if (o || !o && !a)
    if ((Je(t) !== "body" || dt(r)) && (s = Xt(t)), o) {
      const g = Fe(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else r && d();
  a && !o && r && d();
  const f = r && !o && !a ? va(r, s) : we(0), p = c.left + s.scrollLeft - l.x - f.x, m = c.top + s.scrollTop - l.y - f.y;
  return {
    x: p,
    y: m,
    width: c.width,
    height: c.height
  };
}
function vn(e) {
  return pe(e).position === "static";
}
function zo(e, t) {
  if (!ye(e) || pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return be(e) === n && (n = n.ownerDocument.body), n;
}
function ya(e, t) {
  const n = ae(e);
  if (jt(e))
    return n;
  if (!ye(e)) {
    let r = De(e);
    for (; r && !Xe(r); ) {
      if (fe(r) && !vn(r))
        return r;
      r = De(r);
    }
    return n;
  }
  let o = zo(e, t);
  for (; o && _d(o) && vn(o); )
    o = zo(o, t);
  return o && Xe(o) && vn(o) && !Jn(o) ? n : o || Id(e) || n;
}
const Yd = async function(e) {
  const t = this.getOffsetParent || ya, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Kd(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function jd(e) {
  return pe(e).direction === "rtl";
}
const Xd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $d,
  getDocumentElement: be,
  getClippingRect: zd,
  getOffsetParent: ya,
  getElementRects: Yd,
  getClientRects: Fd,
  getDimensions: Gd,
  getScale: Ye,
  isElement: fe,
  isRTL: jd
};
function ba(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function qd(e, t) {
  let n = null, o;
  const r = be(e);
  function a() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function c(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: m,
      height: g
    } = d;
    if (s || t(), !m || !g)
      return;
    const w = Ct(p), h = Ct(r.clientWidth - (f + m)), v = Ct(r.clientHeight - (p + g)), y = Ct(f), S = {
      rootMargin: -w + "px " + -h + "px " + -v + "px " + -y + "px",
      threshold: re(0, Me(1, l)) || 1
    };
    let C = !0;
    function R(E) {
      const x = E[0].intersectionRatio;
      if (x !== l) {
        if (!C)
          return c();
        x ? c(!1, x) : o = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      x === 1 && !ba(d, e.getBoundingClientRect()) && c(), C = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...S,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, S);
    }
    n.observe(e);
  }
  return c(!0), a;
}
function Zd(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, d = to(e), f = r || a ? [...d ? it(d) : [], ...it(t)] : [];
  f.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const p = d && s ? qd(d, n) : null;
  let m = -1, g = null;
  c && (g = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === d && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(t);
    })), n();
  }), d && !l && g.observe(d), g.observe(t));
  let w, h = l ? Fe(e) : null;
  l && v();
  function v() {
    const y = Fe(e);
    h && !ba(h, y) && n(), h = y, w = requestAnimationFrame(v);
  }
  return n(), () => {
    var y;
    f.forEach((b) => {
      r && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), p == null || p(), (y = g) == null || y.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const Qd = Cd, Jd = xd, ef = yd, tf = Nd, nf = bd, Go = wd, of = Rd, rf = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Xd,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return vd(e, t, {
    ...r,
    platform: a
  });
};
var af = typeof document < "u", sf = function() {
}, Nt = af ? wc : sf;
function Mt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Mt(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !Mt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Sa(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ko(e, t) {
  const n = Sa(e);
  return Math.round(t * n) / n;
}
function wn(e) {
  const t = i.useRef(e);
  return Nt(() => {
    t.current = e;
  }), t;
}
function cf(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: a,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: d
  } = e, [f, p] = i.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = i.useState(o);
  Mt(m, o) || g(o);
  const [w, h] = i.useState(null), [v, y] = i.useState(null), b = i.useCallback((D) => {
    D !== E.current && (E.current = D, h(D));
  }, []), S = i.useCallback((D) => {
    D !== x.current && (x.current = D, y(D));
  }, []), C = a || w, R = c || v, E = i.useRef(null), x = i.useRef(null), A = i.useRef(f), T = l != null, M = wn(l), L = wn(r), W = wn(d), V = i.useCallback(() => {
    if (!E.current || !x.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: m
    };
    L.current && (D.platform = L.current), rf(E.current, x.current, D).then((_) => {
      const j = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      B.current && !Mt(A.current, j) && (A.current = j, Ft.flushSync(() => {
        p(j);
      }));
    });
  }, [m, t, n, L, W]);
  Nt(() => {
    d === !1 && A.current.isPositioned && (A.current.isPositioned = !1, p((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [d]);
  const B = i.useRef(!1);
  Nt(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Nt(() => {
    if (C && (E.current = C), R && (x.current = R), C && R) {
      if (M.current)
        return M.current(C, R, V);
      V();
    }
  }, [C, R, V, M, T]);
  const Y = i.useMemo(() => ({
    reference: E,
    floating: x,
    setReference: b,
    setFloating: S
  }), [b, S]), k = i.useMemo(() => ({
    reference: C,
    floating: R
  }), [C, R]), H = i.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!k.floating)
      return D;
    const _ = Ko(k.floating, f.x), j = Ko(k.floating, f.y);
    return s ? {
      ...D,
      transform: "translate(" + _ + "px, " + j + "px)",
      ...Sa(k.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: j
    };
  }, [n, s, k.floating, f.x, f.y]);
  return i.useMemo(() => ({
    ...f,
    update: V,
    refs: Y,
    elements: k,
    floatingStyles: H
  }), [f, V, Y, k, H]);
}
const lf = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Go({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Go({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, uf = (e, t) => ({
  ...Qd(e),
  options: [e, t]
}), df = (e, t) => ({
  ...Jd(e),
  options: [e, t]
}), ff = (e, t) => ({
  ...of(e),
  options: [e, t]
}), pf = (e, t) => ({
  ...ef(e),
  options: [e, t]
}), mf = (e, t) => ({
  ...tf(e),
  options: [e, t]
}), hf = (e, t) => ({
  ...nf(e),
  options: [e, t]
}), gf = (e, t) => ({
  ...lf(e),
  options: [e, t]
});
var vf = "Arrow", Ca = i.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...a } = e;
  return /* @__PURE__ */ u(
    O.svg,
    {
      ...a,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ca.displayName = vf;
var wf = Ca, no = "Popper", [xa, Zt] = le(no), [yf, Ra] = xa(no), Na = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = i.useState(null);
  return /* @__PURE__ */ u(yf, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
Na.displayName = no;
var Ea = "PopperAnchor", Pa = i.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, a = Ra(Ea, n), c = i.useRef(null), s = F(t, c), l = i.useRef(null);
    return i.useEffect(() => {
      const d = l.current;
      l.current = (o == null ? void 0 : o.current) || c.current, d !== l.current && a.onAnchorChange(l.current);
    }), o ? null : /* @__PURE__ */ u(O.div, { ...r, ref: s });
  }
);
Pa.displayName = Ea;
var oo = "PopperContent", [bf, Sf] = xa(oo), _a = i.forwardRef(
  (e, t) => {
    var I, z, X, U, G, K;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: a = "center",
      alignOffset: c = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: w,
      ...h
    } = e, v = Ra(oo, n), [y, b] = i.useState(null), S = F(t, (oe) => b(oe)), [C, R] = i.useState(null), E = Gn(C), x = (E == null ? void 0 : E.width) ?? 0, A = (E == null ? void 0 : E.height) ?? 0, T = o + (a !== "center" ? "-" + a : ""), M = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, L = Array.isArray(d) ? d : [d], W = L.length > 0, V = {
      padding: M,
      boundary: L.filter(xf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: B, floatingStyles: Y, placement: k, isPositioned: H, middlewareData: D } = cf({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...oe) => Zd(...oe, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        uf({ mainAxis: r + A, alignmentAxis: c }),
        l && df({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? ff() : void 0,
          ...V
        }),
        l && pf({ ...V }),
        mf({
          ...V,
          apply: ({ elements: oe, rects: he, availableWidth: tt, availableHeight: nt }) => {
            const { width: ot, height: gc } = he.reference, gt = oe.floating.style;
            gt.setProperty("--radix-popper-available-width", `${tt}px`), gt.setProperty("--radix-popper-available-height", `${nt}px`), gt.setProperty("--radix-popper-anchor-width", `${ot}px`), gt.setProperty("--radix-popper-anchor-height", `${gc}px`);
          }
        }),
        C && gf({ element: C, padding: s }),
        Rf({ arrowWidth: x, arrowHeight: A }),
        m && hf({ strategy: "referenceHidden", ...V })
      ]
    }), [_, j] = Ma(k), q = Z(w);
    Q(() => {
      H && (q == null || q());
    }, [H, q]);
    const ee = (I = D.arrow) == null ? void 0 : I.x, Ce = (z = D.arrow) == null ? void 0 : z.y, ie = ((X = D.arrow) == null ? void 0 : X.centerOffset) !== 0, [xe, ne] = i.useState();
    return Q(() => {
      y && ne(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ u(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: H ? Y.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: xe,
          "--radix-popper-transform-origin": [
            (U = D.transformOrigin) == null ? void 0 : U.x,
            (G = D.transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((K = D.hide) == null ? void 0 : K.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u(
          bf,
          {
            scope: n,
            placedSide: _,
            onArrowChange: R,
            arrowX: ee,
            arrowY: Ce,
            shouldHideArrow: ie,
            children: /* @__PURE__ */ u(
              O.div,
              {
                "data-side": _,
                "data-align": j,
                ...h,
                ref: S,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
_a.displayName = oo;
var Aa = "PopperArrow", Cf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ta = i.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, a = Sf(Aa, o), c = Cf[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [c]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u(
          wf,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Ta.displayName = Aa;
function xf(e) {
  return e !== null;
}
var Rf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, y, b;
    const { placement: n, rects: o, middlewareData: r } = t, c = ((v = r.arrow) == null ? void 0 : v.centerOffset) !== 0, s = c ? 0 : e.arrowWidth, l = c ? 0 : e.arrowHeight, [d, f] = Ma(n), p = { start: "0%", center: "50%", end: "100%" }[f], m = (((y = r.arrow) == null ? void 0 : y.x) ?? 0) + s / 2, g = (((b = r.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let w = "", h = "";
    return d === "bottom" ? (w = c ? p : `${m}px`, h = `${-l}px`) : d === "top" ? (w = c ? p : `${m}px`, h = `${o.floating.height + l}px`) : d === "right" ? (w = `${-l}px`, h = c ? p : `${g}px`) : d === "left" && (w = `${o.floating.width + l}px`, h = c ? p : `${g}px`), { data: { x: w, y: h } };
  }
});
function Ma(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ro = Na, Da = Pa, Ia = _a, Oa = Ta, yn = "rovingFocusGroup.onEntryFocus", Nf = { bubbles: !1, cancelable: !0 }, ft = "RovingFocusGroup", [En, ka, Ef] = Xn(ft), [Pf, Qt] = le(
  ft,
  [Ef]
), [_f, Af] = Pf(ft), La = i.forwardRef(
  (e, t) => /* @__PURE__ */ u(En.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u(En.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u(Tf, { ...e, ref: t }) }) })
);
La.displayName = ft;
var Tf = i.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: a,
    currentTabStopId: c,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, m = i.useRef(null), g = F(t, m), w = ut(a), [h, v] = Ne({
    prop: c,
    defaultProp: s ?? null,
    onChange: l,
    caller: ft
  }), [y, b] = i.useState(!1), S = Z(d), C = ka(n), R = i.useRef(!1), [E, x] = i.useState(0);
  return i.useEffect(() => {
    const A = m.current;
    if (A)
      return A.addEventListener(yn, S), () => A.removeEventListener(yn, S);
  }, [S]), /* @__PURE__ */ u(
    _f,
    {
      scope: n,
      orientation: o,
      dir: w,
      loop: r,
      currentTabStopId: h,
      onItemFocus: i.useCallback(
        (A) => v(A),
        [v]
      ),
      onItemShiftTab: i.useCallback(() => b(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => x((A) => A + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => x((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ u(
        O.div,
        {
          tabIndex: y || E === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: P(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: P(e.onFocus, (A) => {
            const T = !R.current;
            if (A.target === A.currentTarget && T && !y) {
              const M = new CustomEvent(yn, Nf);
              if (A.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const L = C().filter((k) => k.focusable), W = L.find((k) => k.active), V = L.find((k) => k.id === h), Y = [W, V, ...L].filter(
                  Boolean
                ).map((k) => k.ref.current);
                Ba(Y, f);
              }
            }
            R.current = !1;
          }),
          onBlur: P(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), $a = "RovingFocusGroupItem", Fa = i.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: a,
      children: c,
      ...s
    } = e, l = se(), d = a || l, f = Af($a, n), p = f.currentTabStopId === d, m = ka(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: h } = f;
    return i.useEffect(() => {
      if (o)
        return g(), () => w();
    }, [o, g, w]), /* @__PURE__ */ u(
      En.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ u(
          O.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...s,
            ref: t,
            onMouseDown: P(e.onMouseDown, (v) => {
              o ? f.onItemFocus(d) : v.preventDefault();
            }),
            onFocus: P(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: P(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const y = If(v, f.orientation, f.dir);
              if (y !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let S = m().filter((C) => C.focusable).map((C) => C.ref.current);
                if (y === "last") S.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && S.reverse();
                  const C = S.indexOf(v.currentTarget);
                  S = f.loop ? Of(S, C + 1) : S.slice(C + 1);
                }
                setTimeout(() => Ba(S));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: p, hasTabStop: h != null }) : c
          }
        )
      }
    );
  }
);
Fa.displayName = $a;
var Mf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Df(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function If(e, t, n) {
  const o = Df(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Mf[o];
}
function Ba(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Of(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Wa = La, Va = Fa, Pn = ["Enter", " "], kf = ["ArrowDown", "PageUp", "Home"], Ha = ["ArrowUp", "PageDown", "End"], Lf = [...kf, ...Ha], $f = {
  ltr: [...Pn, "ArrowRight"],
  rtl: [...Pn, "ArrowLeft"]
}, Ff = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, pt = "Menu", [st, Bf, Wf] = Xn(pt), [Ve, Ua] = le(pt, [
  Wf,
  Zt,
  Qt
]), mt = Zt(), za = Qt(), [Ga, Ie] = Ve(pt), [Vf, ht] = Ve(pt), Ka = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: a, modal: c = !0 } = e, s = mt(t), [l, d] = i.useState(null), f = i.useRef(!1), p = Z(a), m = ut(r);
  return i.useEffect(() => {
    const g = () => {
      f.current = !0, document.addEventListener("pointerdown", w, { capture: !0, once: !0 }), document.addEventListener("pointermove", w, { capture: !0, once: !0 });
    }, w = () => f.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", w, { capture: !0 }), document.removeEventListener("pointermove", w, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u(ro, { ...s, children: /* @__PURE__ */ u(
    Ga,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ u(
        Vf,
        {
          scope: t,
          onClose: i.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: m,
          modal: c,
          children: o
        }
      )
    }
  ) });
};
Ka.displayName = pt;
var Hf = "MenuAnchor", ao = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = mt(n);
    return /* @__PURE__ */ u(Da, { ...r, ...o, ref: t });
  }
);
ao.displayName = Hf;
var io = "MenuPortal", [Uf, Ya] = Ve(io, {
  forceMount: void 0
}), ja = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, a = Ie(io, t);
  return /* @__PURE__ */ u(Uf, { scope: t, forceMount: n, children: /* @__PURE__ */ u(te, { present: n || a.open, children: /* @__PURE__ */ u(Vt, { asChild: !0, container: r, children: o }) }) });
};
ja.displayName = io;
var ce = "MenuContent", [zf, so] = Ve(ce), Xa = i.forwardRef(
  (e, t) => {
    const n = Ya(ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, a = Ie(ce, e.__scopeMenu), c = ht(ce, e.__scopeMenu);
    return /* @__PURE__ */ u(st.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(te, { present: o || a.open, children: /* @__PURE__ */ u(st.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ u(Gf, { ...r, ref: t }) : /* @__PURE__ */ u(Kf, { ...r, ref: t }) }) }) });
  }
), Gf = i.forwardRef(
  (e, t) => {
    const n = Ie(ce, e.__scopeMenu), o = i.useRef(null), r = F(t, o);
    return i.useEffect(() => {
      const a = o.current;
      if (a) return Ln(a);
    }, []), /* @__PURE__ */ u(
      co,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: P(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Kf = i.forwardRef((e, t) => {
  const n = Ie(ce, e.__scopeMenu);
  return /* @__PURE__ */ u(
    co,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Yf = /* @__PURE__ */ je("MenuContent.ScrollLock"), co = i.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: a,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: m,
      onDismiss: g,
      disableOutsideScroll: w,
      ...h
    } = e, v = Ie(ce, n), y = ht(ce, n), b = mt(n), S = za(n), C = Bf(n), [R, E] = i.useState(null), x = i.useRef(null), A = F(t, x, v.onContentChange), T = i.useRef(0), M = i.useRef(""), L = i.useRef(0), W = i.useRef(null), V = i.useRef("right"), B = i.useRef(0), Y = w ? Ut : i.Fragment, k = w ? { as: Yf, allowPinchZoom: !0 } : void 0, H = (_) => {
      var I, z;
      const j = M.current + _, q = C().filter((X) => !X.disabled), ee = document.activeElement, Ce = (I = q.find((X) => X.ref.current === ee)) == null ? void 0 : I.textValue, ie = q.map((X) => X.textValue), xe = ap(ie, j, Ce), ne = (z = q.find((X) => X.textValue === xe)) == null ? void 0 : z.ref.current;
      (function X(U) {
        M.current = U, window.clearTimeout(T.current), U !== "" && (T.current = window.setTimeout(() => X(""), 1e3));
      })(j), ne && setTimeout(() => ne.focus());
    };
    i.useEffect(() => () => window.clearTimeout(T.current), []), kn();
    const D = i.useCallback((_) => {
      var q, ee;
      return V.current === ((q = W.current) == null ? void 0 : q.side) && sp(_, (ee = W.current) == null ? void 0 : ee.area);
    }, []);
    return /* @__PURE__ */ u(
      zf,
      {
        scope: n,
        searchRef: M,
        onItemEnter: i.useCallback(
          (_) => {
            D(_) && _.preventDefault();
          },
          [D]
        ),
        onItemLeave: i.useCallback(
          (_) => {
            var j;
            D(_) || ((j = x.current) == null || j.focus(), E(null));
          },
          [D]
        ),
        onTriggerLeave: i.useCallback(
          (_) => {
            D(_) && _.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: i.useCallback((_) => {
          W.current = _;
        }, []),
        children: /* @__PURE__ */ u(Y, { ...k, children: /* @__PURE__ */ u(
          Wt,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: P(a, (_) => {
              var j;
              _.preventDefault(), (j = x.current) == null || j.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ u(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: m,
                onDismiss: g,
                children: /* @__PURE__ */ u(
                  Wa,
                  {
                    asChild: !0,
                    ...S,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: P(l, (_) => {
                      y.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u(
                      Ia,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": fi(v.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...b,
                        ...h,
                        ref: A,
                        style: { outline: "none", ...h.style },
                        onKeyDown: P(h.onKeyDown, (_) => {
                          const q = _.target.closest("[data-radix-menu-content]") === _.currentTarget, ee = _.ctrlKey || _.altKey || _.metaKey, Ce = _.key.length === 1;
                          q && (_.key === "Tab" && _.preventDefault(), !ee && Ce && H(_.key));
                          const ie = x.current;
                          if (_.target !== ie || !Lf.includes(_.key)) return;
                          _.preventDefault();
                          const ne = C().filter((I) => !I.disabled).map((I) => I.ref.current);
                          Ha.includes(_.key) && ne.reverse(), op(ne);
                        }),
                        onBlur: P(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(T.current), M.current = "");
                        }),
                        onPointerMove: P(
                          e.onPointerMove,
                          ct((_) => {
                            const j = _.target, q = B.current !== _.clientX;
                            if (_.currentTarget.contains(j) && q) {
                              const ee = _.clientX > B.current ? "right" : "left";
                              V.current = ee, B.current = _.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Xa.displayName = ce;
var jf = "MenuGroup", lo = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u(O.div, { role: "group", ...o, ref: t });
  }
);
lo.displayName = jf;
var Xf = "MenuLabel", qa = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u(O.div, { ...o, ref: t });
  }
);
qa.displayName = Xf;
var Dt = "MenuItem", Yo = "menu.itemSelect", Jt = i.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, a = i.useRef(null), c = ht(Dt, e.__scopeMenu), s = so(Dt, e.__scopeMenu), l = F(t, a), d = i.useRef(!1), f = () => {
      const p = a.current;
      if (!n && p) {
        const m = new CustomEvent(Yo, { bubbles: !0, cancelable: !0 });
        p.addEventListener(Yo, (g) => o == null ? void 0 : o(g), { once: !0 }), tr(p, m), m.defaultPrevented ? d.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ u(
      Za,
      {
        ...r,
        ref: l,
        disabled: n,
        onClick: P(e.onClick, f),
        onPointerDown: (p) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, p), d.current = !0;
        },
        onPointerUp: P(e.onPointerUp, (p) => {
          var m;
          d.current || (m = p.currentTarget) == null || m.click();
        }),
        onKeyDown: P(e.onKeyDown, (p) => {
          const m = s.searchRef.current !== "";
          n || m && p.key === " " || Pn.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
Jt.displayName = Dt;
var Za = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...a } = e, c = so(Dt, n), s = za(n), l = i.useRef(null), d = F(t, l), [f, p] = i.useState(!1), [m, g] = i.useState("");
    return i.useEffect(() => {
      const w = l.current;
      w && g((w.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ u(
      st.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? m,
        children: /* @__PURE__ */ u(Va, { asChild: !0, ...s, focusable: !o, children: /* @__PURE__ */ u(
          O.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: P(
              e.onPointerMove,
              ct((w) => {
                o ? c.onItemLeave(w) : (c.onItemEnter(w), w.defaultPrevented || w.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: P(
              e.onPointerLeave,
              ct((w) => c.onItemLeave(w))
            ),
            onFocus: P(e.onFocus, () => p(!0)),
            onBlur: P(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), qf = "MenuCheckboxItem", Qa = i.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ u(oi, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ u(
      Jt,
      {
        role: "menuitemcheckbox",
        "aria-checked": It(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": po(n),
        onSelect: P(
          r.onSelect,
          () => o == null ? void 0 : o(It(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Qa.displayName = qf;
var Ja = "MenuRadioGroup", [Zf, Qf] = Ve(
  Ja,
  { value: void 0, onValueChange: () => {
  } }
), ei = i.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, a = Z(o);
    return /* @__PURE__ */ u(Zf, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ u(lo, { ...r, ref: t }) });
  }
);
ei.displayName = Ja;
var ti = "MenuRadioItem", ni = i.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = Qf(ti, e.__scopeMenu), a = n === r.value;
    return /* @__PURE__ */ u(oi, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ u(
      Jt,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...o,
        ref: t,
        "data-state": po(a),
        onSelect: P(
          o.onSelect,
          () => {
            var c;
            return (c = r.onValueChange) == null ? void 0 : c.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ni.displayName = ti;
var uo = "MenuItemIndicator", [oi, Jf] = Ve(
  uo,
  { checked: !1 }
), ri = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, a = Jf(uo, n);
    return /* @__PURE__ */ u(
      te,
      {
        present: o || It(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ u(
          O.span,
          {
            ...r,
            ref: t,
            "data-state": po(a.checked)
          }
        )
      }
    );
  }
);
ri.displayName = uo;
var ep = "MenuSeparator", ai = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ u(
      O.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
ai.displayName = ep;
var tp = "MenuArrow", ii = i.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = mt(n);
    return /* @__PURE__ */ u(Oa, { ...r, ...o, ref: t });
  }
);
ii.displayName = tp;
var fo = "MenuSub", [np, si] = Ve(fo), ci = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, a = Ie(fo, t), c = mt(t), [s, l] = i.useState(null), [d, f] = i.useState(null), p = Z(r);
  return i.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ u(ro, { ...c, children: /* @__PURE__ */ u(
    Ga,
    {
      scope: t,
      open: o,
      onOpenChange: p,
      content: d,
      onContentChange: f,
      children: /* @__PURE__ */ u(
        np,
        {
          scope: t,
          contentId: se(),
          triggerId: se(),
          trigger: s,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
ci.displayName = fo;
var rt = "MenuSubTrigger", li = i.forwardRef(
  (e, t) => {
    const n = Ie(rt, e.__scopeMenu), o = ht(rt, e.__scopeMenu), r = si(rt, e.__scopeMenu), a = so(rt, e.__scopeMenu), c = i.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = i.useCallback(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return i.useEffect(() => f, [f]), i.useEffect(() => {
      const p = s.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [s, l]), /* @__PURE__ */ u(ao, { asChild: !0, ...d, children: /* @__PURE__ */ u(
      Za,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": fi(n.open),
        ...e,
        ref: lt(t, r.onTriggerChange),
        onClick: (p) => {
          var m;
          (m = e.onClick) == null || m.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: P(
          e.onPointerMove,
          ct((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !c.current && (a.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: P(
          e.onPointerLeave,
          ct((p) => {
            var g, w;
            f();
            const m = (g = n.content) == null ? void 0 : g.getBoundingClientRect();
            if (m) {
              const h = (w = n.content) == null ? void 0 : w.dataset.side, v = h === "right", y = v ? -5 : 5, b = m[v ? "left" : "right"], S = m[v ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + y, y: p.clientY },
                  { x: b, y: m.top },
                  { x: S, y: m.top },
                  { x: S, y: m.bottom },
                  { x: b, y: m.bottom }
                ],
                side: h
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: P(e.onKeyDown, (p) => {
          var g;
          const m = a.searchRef.current !== "";
          e.disabled || m && p.key === " " || $f[o.dir].includes(p.key) && (n.onOpenChange(!0), (g = n.content) == null || g.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
li.displayName = rt;
var ui = "MenuSubContent", di = i.forwardRef(
  (e, t) => {
    const n = Ya(ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, a = Ie(ce, e.__scopeMenu), c = ht(ce, e.__scopeMenu), s = si(ui, e.__scopeMenu), l = i.useRef(null), d = F(t, l);
    return /* @__PURE__ */ u(st.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(te, { present: o || a.open, children: /* @__PURE__ */ u(st.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u(
      co,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...r,
        ref: d,
        align: "start",
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          c.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: P(e.onFocusOutside, (f) => {
          f.target !== s.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: P(e.onEscapeKeyDown, (f) => {
          c.onClose(), f.preventDefault();
        }),
        onKeyDown: P(e.onKeyDown, (f) => {
          var g;
          const p = f.currentTarget.contains(f.target), m = Ff[c.dir].includes(f.key);
          p && m && (a.onOpenChange(!1), (g = s.trigger) == null || g.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
di.displayName = ui;
function fi(e) {
  return e ? "open" : "closed";
}
function It(e) {
  return e === "indeterminate";
}
function po(e) {
  return It(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function op(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function rp(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function ap(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let c = rp(e, Math.max(a, 0));
  r.length === 1 && (c = c.filter((d) => d !== n));
  const l = c.find(
    (d) => d.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function ip(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const s = t[a], l = t[c], d = s.x, f = s.y, p = l.x, m = l.y;
    f > o != m > o && n < (p - d) * (o - f) / (m - f) + d && (r = !r);
  }
  return r;
}
function sp(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ip(n, t);
}
function ct(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var cp = Ka, lp = ao, up = ja, dp = Xa, fp = lo, pp = qa, mp = Jt, hp = Qa, gp = ei, vp = ni, wp = ri, yp = ai, bp = ii, Sp = ci, Cp = li, xp = di, en = "DropdownMenu", [Rp] = le(
  en,
  [Ua]
), J = Ua(), [Np, pi] = Rp(en), mi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: a,
    onOpenChange: c,
    modal: s = !0
  } = e, l = J(t), d = i.useRef(null), [f, p] = Ne({
    prop: r,
    defaultProp: a ?? !1,
    onChange: c,
    caller: en
  });
  return /* @__PURE__ */ u(
    Np,
    {
      scope: t,
      triggerId: se(),
      triggerRef: d,
      contentId: se(),
      open: f,
      onOpenChange: p,
      onOpenToggle: i.useCallback(() => p((m) => !m), [p]),
      modal: s,
      children: /* @__PURE__ */ u(cp, { ...l, open: f, onOpenChange: p, dir: o, modal: s, children: n })
    }
  );
};
mi.displayName = en;
var hi = "DropdownMenuTrigger", gi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, a = pi(hi, n), c = J(n);
    return /* @__PURE__ */ u(lp, { asChild: !0, ...c, children: /* @__PURE__ */ u(
      O.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: lt(t, a.triggerRef),
        onPointerDown: P(e.onPointerDown, (s) => {
          !o && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
        }),
        onKeyDown: P(e.onKeyDown, (s) => {
          o || (["Enter", " "].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
gi.displayName = hi;
var Ep = "DropdownMenuPortal", vi = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = J(t);
  return /* @__PURE__ */ u(up, { ...o, ...n });
};
vi.displayName = Ep;
var wi = "DropdownMenuContent", yi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = pi(wi, n), a = J(n), c = i.useRef(!1);
    return /* @__PURE__ */ u(
      dp,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...a,
        ...o,
        ref: t,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (s) => {
          var l;
          c.current || (l = r.triggerRef.current) == null || l.focus(), c.current = !1, s.preventDefault();
        }),
        onInteractOutside: P(e.onInteractOutside, (s) => {
          const l = s.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || d;
          (!r.modal || f) && (c.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
yi.displayName = wi;
var Pp = "DropdownMenuGroup", bi = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ u(fp, { ...r, ...o, ref: t });
  }
);
bi.displayName = Pp;
var _p = "DropdownMenuLabel", Si = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ u(pp, { ...r, ...o, ref: t });
  }
);
Si.displayName = _p;
var Ap = "DropdownMenuItem", Ci = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ u(mp, { ...r, ...o, ref: t });
  }
);
Ci.displayName = Ap;
var Tp = "DropdownMenuCheckboxItem", xi = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(hp, { ...r, ...o, ref: t });
});
xi.displayName = Tp;
var Mp = "DropdownMenuRadioGroup", Ri = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(gp, { ...r, ...o, ref: t });
});
Ri.displayName = Mp;
var Dp = "DropdownMenuRadioItem", Ni = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(vp, { ...r, ...o, ref: t });
});
Ni.displayName = Dp;
var Ip = "DropdownMenuItemIndicator", Ei = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(wp, { ...r, ...o, ref: t });
});
Ei.displayName = Ip;
var Op = "DropdownMenuSeparator", Pi = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(yp, { ...r, ...o, ref: t });
});
Pi.displayName = Op;
var kp = "DropdownMenuArrow", Lp = i.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
    return /* @__PURE__ */ u(bp, { ...r, ...o, ref: t });
  }
);
Lp.displayName = kp;
var $p = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: a } = e, c = J(t), [s, l] = Ne({
    prop: o,
    defaultProp: a ?? !1,
    onChange: r,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ u(Sp, { ...c, open: s, onOpenChange: l, children: n });
}, Fp = "DropdownMenuSubTrigger", _i = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(Cp, { ...r, ...o, ref: t });
});
_i.displayName = Fp;
var Bp = "DropdownMenuSubContent", Ai = i.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = J(n);
  return /* @__PURE__ */ u(
    xp,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ai.displayName = Bp;
var Wp = mi, Vp = gi, Ti = vi, Mi = yi, Hp = bi, Di = Si, Ii = Ci, Oi = xi, Up = Ri, ki = Ni, Li = Ei, $i = Pi, zp = $p, Fi = _i, Bi = Ai;
const Gh = Wp, Kh = Vp, Yh = Hp, jh = Ti, Xh = zp, qh = Up, Gp = i.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ $(
  Fi,
  {
    ref: r,
    className: N(
      "flex cursor-default select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none focus:bg-indigo-50 data-[state=open]:bg-indigo-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ u(zu, { className: "ml-auto" })
    ]
  }
));
Gp.displayName = Fi.displayName;
const Kp = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Bi,
  {
    ref: n,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-xl border border-white/60 bg-white/90 p-1 text-slate-700 shadow-xl backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      e
    ),
    ...t
  }
));
Kp.displayName = Bi.displayName;
const Yp = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ u(Ti, { children: /* @__PURE__ */ u(
  Mi,
  {
    ref: o,
    sideOffset: t,
    className: N(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-xl border border-white/60 bg-white/90 p-1 text-slate-700 shadow-xl backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      e
    ),
    ...n
  }
) }));
Yp.displayName = Mi.displayName;
const jp = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ u(
  Ii,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm outline-none transition-colors focus:bg-indigo-50 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t && "pl-8",
      e
    ),
    ...n
  }
));
jp.displayName = Ii.displayName;
const Xp = i.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ $(
  Oi,
  {
    ref: r,
    className: N(
      "relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-indigo-50 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n !== void 0 ? n : !1,
    ...o,
    children: [
      /* @__PURE__ */ u("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u(Li, { children: /* @__PURE__ */ u(jn, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Xp.displayName = Oi.displayName;
const qp = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ $(
  ki,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-lg py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-indigo-50 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u(Li, { children: /* @__PURE__ */ u(ju, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
qp.displayName = ki.displayName;
const Zp = i.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ u(
  Di,
  {
    ref: o,
    className: N(
      "px-2 py-1.5 text-sm font-semibold text-slate-600",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Zp.displayName = Di.displayName;
const Qp = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  $i,
  {
    ref: n,
    className: N("-mx-1 my-1 h-px bg-slate-200/60", e),
    ...t
  }
));
Qp.displayName = $i.displayName;
const Jp = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u(
  "span",
  {
    className: N("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
Jp.displayName = "DropdownMenuShortcut";
const Wi = i.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ u(
    "input",
    {
      type: t,
      className: N("ui-input", e),
      ref: o,
      ...n
    }
  )
);
Wi.displayName = "Input";
var em = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], tn = em.reduce((e, t) => {
  const n = /* @__PURE__ */ ea(`Primitive.${t}`), o = i.forwardRef((r, a) => {
    const { asChild: c, ...s } = r, l = c ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u(l, { ...s, ref: a });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {}), tm = "Label", Vi = i.forwardRef((e, t) => /* @__PURE__ */ u(
  tn.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Vi.displayName = tm;
var Hi = Vi;
const Ui = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Hi,
  {
    ref: n,
    className: N("ui-label", e),
    ...t
  }
));
Ui.displayName = Hi.displayName;
const nm = i.forwardRef(
  ({ className: e, label: t, error: n, helperText: o, id: r, ...a }, c) => {
    const s = r || `input-${i.useId()}`;
    return /* @__PURE__ */ $("div", { className: "space-y-1.5", children: [
      t && /* @__PURE__ */ u(Ui, { htmlFor: s, children: t }),
      /* @__PURE__ */ u(
        Wi,
        {
          id: s,
          ref: c,
          className: N(n && "border-red-500 focus-visible:ring-red-500", e),
          "aria-invalid": n ? "true" : "false",
          "aria-describedby": n ? `${s}-error` : o ? `${s}-helper` : void 0,
          ...a
        }
      ),
      n && /* @__PURE__ */ u("p", { id: `${s}-error`, className: "text-sm font-medium text-red-600", children: n }),
      o && !n && /* @__PURE__ */ u("p", { id: `${s}-helper`, className: "text-sm text-muted-foreground", children: o })
    ] });
  }
);
nm.displayName = "InputField";
function om(e, t = []) {
  let n = [];
  function o(a, c) {
    const s = i.createContext(c);
    s.displayName = a + "Context";
    const l = n.length;
    n = [...n, c];
    const d = (p) => {
      var y;
      const { scope: m, children: g, ...w } = p, h = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || s, v = i.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ u(h.Provider, { value: v, children: g });
    };
    d.displayName = a + "Provider";
    function f(p, m) {
      var h;
      const g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[l]) || s, w = i.useContext(g);
      if (w) return w;
      if (c !== void 0) return c;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [d, f];
  }
  const r = () => {
    const a = n.map((c) => i.createContext(c));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return r.scopeName = e, [o, rm(r, ...t)];
}
function rm(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(a) {
      const c = o.reduce((s, { useScope: l, scopeName: d }) => {
        const p = l(a)[`__scope${d}`];
        return { ...s, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var mo = "Progress", ho = 100, [am] = om(mo), [im, sm] = am(mo), zi = i.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: r,
      getValueLabel: a = cm,
      ...c
    } = e;
    (r || r === 0) && !jo(r) && console.error(lm(`${r}`, "Progress"));
    const s = jo(r) ? r : ho;
    o !== null && !Xo(o, s) && console.error(um(`${o}`, "Progress"));
    const l = Xo(o, s) ? o : null, d = Ot(l) ? a(l, s) : void 0;
    return /* @__PURE__ */ u(im, { scope: n, value: l, max: s, children: /* @__PURE__ */ u(
      tn.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Ot(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Yi(l, s),
        "data-value": l ?? void 0,
        "data-max": s,
        ...c,
        ref: t
      }
    ) });
  }
);
zi.displayName = mo;
var Gi = "ProgressIndicator", Ki = i.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, r = sm(Gi, n);
    return /* @__PURE__ */ u(
      tn.div,
      {
        "data-state": Yi(r.value, r.max),
        "data-value": r.value ?? void 0,
        "data-max": r.max,
        ...o,
        ref: t
      }
    );
  }
);
Ki.displayName = Gi;
function cm(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Yi(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ot(e) {
  return typeof e == "number";
}
function jo(e) {
  return Ot(e) && !isNaN(e) && e > 0;
}
function Xo(e, t) {
  return Ot(e) && !isNaN(e) && e <= t && e >= 0;
}
function lm(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ho}\`.`;
}
function um(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ho} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ji = zi, dm = Ki;
const fm = i.forwardRef(({ className: e, value: t, ...n }, o) => /* @__PURE__ */ u(
  ji,
  {
    ref: o,
    className: N("ui-progress", e),
    ...n,
    children: /* @__PURE__ */ u(
      dm,
      {
        className: "ui-progress__indicator",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
fm.displayName = ji.displayName;
function _n(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function pm(e, t) {
  return i.useReducer((n, o) => t[n][o] ?? n, e);
}
var go = "ScrollArea", [Xi] = le(go), [mm, ue] = Xi(go), qi = i.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: r,
      scrollHideDelay: a = 600,
      ...c
    } = e, [s, l] = i.useState(null), [d, f] = i.useState(null), [p, m] = i.useState(null), [g, w] = i.useState(null), [h, v] = i.useState(null), [y, b] = i.useState(0), [S, C] = i.useState(0), [R, E] = i.useState(!1), [x, A] = i.useState(!1), T = F(t, (L) => l(L)), M = ut(r);
    return /* @__PURE__ */ u(
      mm,
      {
        scope: n,
        type: o,
        dir: M,
        scrollHideDelay: a,
        scrollArea: s,
        viewport: d,
        onViewportChange: f,
        content: p,
        onContentChange: m,
        scrollbarX: g,
        onScrollbarXChange: w,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: E,
        scrollbarY: h,
        onScrollbarYChange: v,
        scrollbarYEnabled: x,
        onScrollbarYEnabledChange: A,
        onCornerWidthChange: b,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ u(
          O.div,
          {
            dir: M,
            ...c,
            ref: T,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": S + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
qi.displayName = go;
var Zi = "ScrollAreaViewport", Qi = i.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...a } = e, c = ue(Zi, n), s = i.useRef(null), l = F(t, s, c.onViewportChange);
    return /* @__PURE__ */ $(Re, { children: [
      /* @__PURE__ */ u(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u(
        O.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ u("div", { ref: c.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
Qi.displayName = Zi;
var Se = "ScrollAreaScrollbar", vo = i.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = ue(Se, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: c } = r, s = e.orientation === "horizontal";
    return i.useEffect(() => (s ? a(!0) : c(!0), () => {
      s ? a(!1) : c(!1);
    }), [s, a, c]), r.type === "hover" ? /* @__PURE__ */ u(hm, { ...o, ref: t, forceMount: n }) : r.type === "scroll" ? /* @__PURE__ */ u(gm, { ...o, ref: t, forceMount: n }) : r.type === "auto" ? /* @__PURE__ */ u(Ji, { ...o, ref: t, forceMount: n }) : r.type === "always" ? /* @__PURE__ */ u(wo, { ...o, ref: t }) : null;
  }
);
vo.displayName = Se;
var hm = i.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = ue(Se, e.__scopeScrollArea), [a, c] = i.useState(!1);
  return i.useEffect(() => {
    const s = r.scrollArea;
    let l = 0;
    if (s) {
      const d = () => {
        window.clearTimeout(l), c(!0);
      }, f = () => {
        l = window.setTimeout(() => c(!1), r.scrollHideDelay);
      };
      return s.addEventListener("pointerenter", d), s.addEventListener("pointerleave", f), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", d), s.removeEventListener("pointerleave", f);
      };
    }
  }, [r.scrollArea, r.scrollHideDelay]), /* @__PURE__ */ u(te, { present: n || a, children: /* @__PURE__ */ u(
    Ji,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), gm = i.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = ue(Se, e.__scopeScrollArea), a = e.orientation === "horizontal", c = on(() => l("SCROLL_END"), 100), [s, l] = pm("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return i.useEffect(() => {
    if (s === "idle") {
      const d = window.setTimeout(() => l("HIDE"), r.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [s, r.scrollHideDelay, l]), i.useEffect(() => {
    const d = r.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (d) {
      let p = d[f];
      const m = () => {
        const g = d[f];
        p !== g && (l("SCROLL"), c()), p = g;
      };
      return d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
    }
  }, [r.viewport, a, l, c]), /* @__PURE__ */ u(te, { present: n || s !== "hidden", children: /* @__PURE__ */ u(
    wo,
    {
      "data-state": s === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: P(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: P(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Ji = i.forwardRef((e, t) => {
  const n = ue(Se, e.__scopeScrollArea), { forceMount: o, ...r } = e, [a, c] = i.useState(!1), s = e.orientation === "horizontal", l = on(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      c(s ? d : f);
    }
  }, 10);
  return qe(n.viewport, l), qe(n.content, l), /* @__PURE__ */ u(te, { present: o || a, children: /* @__PURE__ */ u(
    wo,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), wo = i.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = ue(Se, e.__scopeScrollArea), a = i.useRef(null), c = i.useRef(0), [s, l] = i.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = rs(s.viewport, s.content), f = {
    ...o,
    sizes: s,
    onSizesChange: l,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (m) => a.current = m,
    onThumbPointerUp: () => c.current = 0,
    onThumbPointerDown: (m) => c.current = m
  };
  function p(m, g) {
    return Cm(m, c.current, s, g);
  }
  return n === "horizontal" ? /* @__PURE__ */ u(
    vm,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && a.current) {
          const m = r.viewport.scrollLeft, g = qo(m, s, r.dir);
          a.current.style.transform = `translate3d(${g}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        r.viewport && (r.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        r.viewport && (r.viewport.scrollLeft = p(m, r.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ u(
    wm,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && a.current) {
          const m = r.viewport.scrollTop, g = qo(m, s);
          a.current.style.transform = `translate3d(0, ${g}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        r.viewport && (r.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        r.viewport && (r.viewport.scrollTop = p(m));
      }
    }
  ) : null;
}), vm = i.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, a = ue(Se, e.__scopeScrollArea), [c, s] = i.useState(), l = i.useRef(null), d = F(t, l, a.onScrollbarXChange);
  return i.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u(
    ts,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": nn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(m), is(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && c && o({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Lt(c.paddingLeft),
            paddingEnd: Lt(c.paddingRight)
          }
        });
      }
    }
  );
}), wm = i.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, a = ue(Se, e.__scopeScrollArea), [c, s] = i.useState(), l = i.useRef(null), d = F(t, l, a.onScrollbarYChange);
  return i.useEffect(() => {
    l.current && s(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ u(
    ts,
    {
      "data-orientation": "vertical",
      ...r,
      ref: d,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": nn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const m = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(m), is(m, p) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && c && o({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Lt(c.paddingTop),
            paddingEnd: Lt(c.paddingBottom)
          }
        });
      }
    }
  );
}), [ym, es] = Xi(Se), ts = i.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: o,
    hasThumb: r,
    onThumbChange: a,
    onThumbPointerUp: c,
    onThumbPointerDown: s,
    onThumbPositionChange: l,
    onDragScroll: d,
    onWheelScroll: f,
    onResize: p,
    ...m
  } = e, g = ue(Se, n), [w, h] = i.useState(null), v = F(t, (T) => h(T)), y = i.useRef(null), b = i.useRef(""), S = g.viewport, C = o.content - o.viewport, R = Z(f), E = Z(l), x = on(p, 10);
  function A(T) {
    if (y.current) {
      const M = T.clientX - y.current.left, L = T.clientY - y.current.top;
      d({ x: M, y: L });
    }
  }
  return i.useEffect(() => {
    const T = (M) => {
      const L = M.target;
      (w == null ? void 0 : w.contains(L)) && R(M, C);
    };
    return document.addEventListener("wheel", T, { passive: !1 }), () => document.removeEventListener("wheel", T, { passive: !1 });
  }, [S, w, C, R]), i.useEffect(E, [o, E]), qe(w, x), qe(g.content, x), /* @__PURE__ */ u(
    ym,
    {
      scope: n,
      scrollbar: w,
      hasThumb: r,
      onThumbChange: Z(a),
      onThumbPointerUp: Z(c),
      onThumbPositionChange: E,
      onThumbPointerDown: Z(s),
      children: /* @__PURE__ */ u(
        O.div,
        {
          ...m,
          ref: v,
          style: { position: "absolute", ...m.style },
          onPointerDown: P(e.onPointerDown, (T) => {
            T.button === 0 && (T.target.setPointerCapture(T.pointerId), y.current = w.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), A(T));
          }),
          onPointerMove: P(e.onPointerMove, A),
          onPointerUp: P(e.onPointerUp, (T) => {
            const M = T.target;
            M.hasPointerCapture(T.pointerId) && M.releasePointerCapture(T.pointerId), document.body.style.webkitUserSelect = b.current, g.viewport && (g.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), kt = "ScrollAreaThumb", ns = i.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = es(kt, e.__scopeScrollArea);
    return /* @__PURE__ */ u(te, { present: n || r.hasThumb, children: /* @__PURE__ */ u(bm, { ref: t, ...o }) });
  }
), bm = i.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e, a = ue(kt, n), c = es(kt, n), { onThumbPositionChange: s } = c, l = F(
      t,
      (p) => c.onThumbChange(p)
    ), d = i.useRef(void 0), f = on(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return i.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const m = () => {
          if (f(), !d.current) {
            const g = xm(p, s);
            d.current = g, s();
          }
        };
        return s(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [a.viewport, f, s]), /* @__PURE__ */ u(
      O.div,
      {
        "data-state": c.hasThumb ? "visible" : "hidden",
        ...r,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: P(e.onPointerDownCapture, (p) => {
          const g = p.target.getBoundingClientRect(), w = p.clientX - g.left, h = p.clientY - g.top;
          c.onThumbPointerDown({ x: w, y: h });
        }),
        onPointerUp: P(e.onPointerUp, c.onThumbPointerUp)
      }
    );
  }
);
ns.displayName = kt;
var yo = "ScrollAreaCorner", os = i.forwardRef(
  (e, t) => {
    const n = ue(yo, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ u(Sm, { ...e, ref: t }) : null;
  }
);
os.displayName = yo;
var Sm = i.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, r = ue(yo, n), [a, c] = i.useState(0), [s, l] = i.useState(0), d = !!(a && s);
  return qe(r.scrollbarX, () => {
    var p;
    const f = ((p = r.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    r.onCornerHeightChange(f), l(f);
  }), qe(r.scrollbarY, () => {
    var p;
    const f = ((p = r.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    r.onCornerWidthChange(f), c(f);
  }), d ? /* @__PURE__ */ u(
    O.div,
    {
      ...o,
      ref: t,
      style: {
        width: a,
        height: s,
        position: "absolute",
        right: r.dir === "ltr" ? 0 : void 0,
        left: r.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Lt(e) {
  return e ? parseInt(e, 10) : 0;
}
function rs(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function nn(e) {
  const t = rs(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function Cm(e, t, n, o = "ltr") {
  const r = nn(n), a = r / 2, c = t || a, s = r - c, l = n.scrollbar.paddingStart + c, d = n.scrollbar.size - n.scrollbar.paddingEnd - s, f = n.content - n.viewport, p = o === "ltr" ? [0, f] : [f * -1, 0];
  return as([l, d], p)(e);
}
function qo(e, t, n = "ltr") {
  const o = nn(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - r, c = t.content - t.viewport, s = a - o, l = n === "ltr" ? [0, c] : [c * -1, 0], d = _n(e, l);
  return as([0, c], [0, s])(d);
}
function as(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function is(e, t) {
  return e > 0 && e < t;
}
var xm = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return (function r() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, c = n.left !== a.left, s = n.top !== a.top;
    (c || s) && t(), n = a, o = window.requestAnimationFrame(r);
  })(), () => window.cancelAnimationFrame(o);
};
function on(e, t) {
  const n = Z(e), o = i.useRef(0);
  return i.useEffect(() => () => window.clearTimeout(o.current), []), i.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function qe(e, t) {
  const n = Z(t);
  Q(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [e, n]);
}
var ss = qi, Rm = Qi, Nm = os;
const An = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ $(
  ss,
  {
    ref: o,
    className: N("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ u(Rm, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ u(cs, {}),
      /* @__PURE__ */ u(Nm, {})
    ]
  }
));
An.displayName = ss.displayName;
const cs = i.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ u(
  vo,
  {
    ref: o,
    orientation: t,
    className: N(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ u(ns, { className: "relative flex-1 rounded-full bg-border" })
  }
));
cs.displayName = vo.displayName;
var ls = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Em = "VisuallyHidden", Pm = i.forwardRef(
  (e, t) => /* @__PURE__ */ u(
    O.span,
    {
      ...e,
      ref: t,
      style: { ...ls, ...e.style }
    }
  )
);
Pm.displayName = Em;
var _m = [" ", "Enter", "ArrowUp", "ArrowDown"], Am = [" ", "Enter"], Be = "Select", [rn, an, Tm] = Xn(Be), [et] = le(Be, [
  Tm,
  Zt
]), sn = Zt(), [Mm, Oe] = et(Be), [Dm, Im] = et(Be), us = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: a,
    value: c,
    defaultValue: s,
    onValueChange: l,
    dir: d,
    name: f,
    autoComplete: p,
    disabled: m,
    required: g,
    form: w
  } = e, h = sn(t), [v, y] = i.useState(null), [b, S] = i.useState(null), [C, R] = i.useState(!1), E = ut(d), [x, A] = Ne({
    prop: o,
    defaultProp: r ?? !1,
    onChange: a,
    caller: Be
  }), [T, M] = Ne({
    prop: c,
    defaultProp: s,
    onChange: l,
    caller: Be
  }), L = i.useRef(null), W = v ? w || !!v.closest("form") : !0, [V, B] = i.useState(/* @__PURE__ */ new Set()), Y = Array.from(V).map((k) => k.props.value).join(";");
  return /* @__PURE__ */ u(ro, { ...h, children: /* @__PURE__ */ $(
    Mm,
    {
      required: g,
      scope: t,
      trigger: v,
      onTriggerChange: y,
      valueNode: b,
      onValueNodeChange: S,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: R,
      contentId: se(),
      value: T,
      onValueChange: M,
      open: x,
      onOpenChange: A,
      dir: E,
      triggerPointerDownPosRef: L,
      disabled: m,
      children: [
        /* @__PURE__ */ u(rn.Provider, { scope: t, children: /* @__PURE__ */ u(
          Dm,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: i.useCallback((k) => {
              B((H) => new Set(H).add(k));
            }, []),
            onNativeOptionRemove: i.useCallback((k) => {
              B((H) => {
                const D = new Set(H);
                return D.delete(k), D;
              });
            }, []),
            children: n
          }
        ) }),
        W ? /* @__PURE__ */ $(
          ks,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: T,
            onChange: (k) => M(k.target.value),
            disabled: m,
            form: w,
            children: [
              T === void 0 ? /* @__PURE__ */ u("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          Y
        ) : null
      ]
    }
  ) });
};
us.displayName = Be;
var ds = "SelectTrigger", fs = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, a = sn(n), c = Oe(ds, n), s = c.disabled || o, l = F(t, c.onTriggerChange), d = an(n), f = i.useRef("touch"), [p, m, g] = $s((h) => {
      const v = d().filter((S) => !S.disabled), y = v.find((S) => S.value === c.value), b = Fs(v, h, y);
      b !== void 0 && c.onValueChange(b.value);
    }), w = (h) => {
      s || (c.onOpenChange(!0), g()), h && (c.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ u(Da, { asChild: !0, ...a, children: /* @__PURE__ */ u(
      O.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": c.contentId,
        "aria-expanded": c.open,
        "aria-required": c.required,
        "aria-autocomplete": "none",
        dir: c.dir,
        "data-state": c.open ? "open" : "closed",
        disabled: s,
        "data-disabled": s ? "" : void 0,
        "data-placeholder": Ls(c.value) ? "" : void 0,
        ...r,
        ref: l,
        onClick: P(r.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && w(h);
        }),
        onPointerDown: P(r.onPointerDown, (h) => {
          f.current = h.pointerType;
          const v = h.target;
          v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (w(h), h.preventDefault());
        }),
        onKeyDown: P(r.onKeyDown, (h) => {
          const v = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(v && h.key === " ") && _m.includes(h.key) && (w(), h.preventDefault());
        })
      }
    ) });
  }
);
fs.displayName = ds;
var ps = "SelectValue", ms = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: a, placeholder: c = "", ...s } = e, l = Oe(ps, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, p = F(t, l.onValueNodeChange);
    return Q(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ u(
      O.span,
      {
        ...s,
        ref: p,
        style: { pointerEvents: "none" },
        children: Ls(l.value) ? /* @__PURE__ */ u(Re, { children: c }) : a
      }
    );
  }
);
ms.displayName = ps;
var Om = "SelectIcon", hs = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ u(O.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
hs.displayName = Om;
var km = "SelectPortal", gs = (e) => /* @__PURE__ */ u(Vt, { asChild: !0, ...e });
gs.displayName = km;
var We = "SelectContent", vs = i.forwardRef(
  (e, t) => {
    const n = Oe(We, e.__scopeSelect), [o, r] = i.useState();
    if (Q(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const a = o;
      return a ? Ft.createPortal(
        /* @__PURE__ */ u(ws, { scope: e.__scopeSelect, children: /* @__PURE__ */ u(rn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ u(ys, { ...e, ref: t });
  }
);
vs.displayName = We;
var de = 10, [ws, ke] = et(We), Lm = "SelectContentImpl", $m = /* @__PURE__ */ je("SelectContent.RemoveScroll"), ys = i.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: a,
      onPointerDownOutside: c,
      //
      // PopperContent props
      side: s,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: h,
      avoidCollisions: v,
      //
      ...y
    } = e, b = Oe(We, n), [S, C] = i.useState(null), [R, E] = i.useState(null), x = F(t, (I) => C(I)), [A, T] = i.useState(null), [M, L] = i.useState(
      null
    ), W = an(n), [V, B] = i.useState(!1), Y = i.useRef(!1);
    i.useEffect(() => {
      if (S) return Ln(S);
    }, [S]), kn();
    const k = i.useCallback(
      (I) => {
        const [z, ...X] = W().map((K) => K.ref.current), [U] = X.slice(-1), G = document.activeElement;
        for (const K of I)
          if (K === G || (K == null || K.scrollIntoView({ block: "nearest" }), K === z && R && (R.scrollTop = 0), K === U && R && (R.scrollTop = R.scrollHeight), K == null || K.focus(), document.activeElement !== G)) return;
      },
      [W, R]
    ), H = i.useCallback(
      () => k([A, S]),
      [k, A, S]
    );
    i.useEffect(() => {
      V && H();
    }, [V, H]);
    const { onOpenChange: D, triggerPointerDownPosRef: _ } = b;
    i.useEffect(() => {
      if (S) {
        let I = { x: 0, y: 0 };
        const z = (U) => {
          var G, K;
          I = {
            x: Math.abs(Math.round(U.pageX) - (((G = _.current) == null ? void 0 : G.x) ?? 0)),
            y: Math.abs(Math.round(U.pageY) - (((K = _.current) == null ? void 0 : K.y) ?? 0))
          };
        }, X = (U) => {
          I.x <= 10 && I.y <= 10 ? U.preventDefault() : S.contains(U.target) || D(!1), document.removeEventListener("pointermove", z), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", z), document.addEventListener("pointerup", X, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", z), document.removeEventListener("pointerup", X, { capture: !0 });
        };
      }
    }, [S, D, _]), i.useEffect(() => {
      const I = () => D(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [D]);
    const [j, q] = $s((I) => {
      const z = W().filter((G) => !G.disabled), X = z.find((G) => G.ref.current === document.activeElement), U = Fs(z, I, X);
      U && setTimeout(() => U.ref.current.focus());
    }), ee = i.useCallback(
      (I, z, X) => {
        const U = !Y.current && !X;
        (b.value !== void 0 && b.value === z || U) && (T(I), U && (Y.current = !0));
      },
      [b.value]
    ), Ce = i.useCallback(() => S == null ? void 0 : S.focus(), [S]), ie = i.useCallback(
      (I, z, X) => {
        const U = !Y.current && !X;
        (b.value !== void 0 && b.value === z || U) && L(I);
      },
      [b.value]
    ), xe = o === "popper" ? Tn : bs, ne = xe === Tn ? {
      side: s,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: w,
      hideWhenDetached: h,
      avoidCollisions: v
    } : {};
    return /* @__PURE__ */ u(
      ws,
      {
        scope: n,
        content: S,
        viewport: R,
        onViewportChange: E,
        itemRefCallback: ee,
        selectedItem: A,
        onItemLeave: Ce,
        itemTextRefCallback: ie,
        focusSelectedItem: H,
        selectedItemText: M,
        position: o,
        isPositioned: V,
        searchRef: j,
        children: /* @__PURE__ */ u(Ut, { as: $m, allowPinchZoom: !0, children: /* @__PURE__ */ u(
          Wt,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: P(r, (I) => {
              var z;
              (z = b.trigger) == null || z.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ u(
              Bt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: c,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u(
                  xe,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...y,
                    ...ne,
                    onPlaced: () => B(!0),
                    ref: x,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: P(y.onKeyDown, (I) => {
                      const z = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !z && I.key.length === 1 && q(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let U = W().filter((G) => !G.disabled).map((G) => G.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (U = U.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const G = I.target, K = U.indexOf(G);
                          U = U.slice(K + 1);
                        }
                        setTimeout(() => k(U)), I.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ys.displayName = Lm;
var Fm = "SelectItemAlignedPosition", bs = i.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, a = Oe(We, n), c = ke(We, n), [s, l] = i.useState(null), [d, f] = i.useState(null), p = F(t, (x) => f(x)), m = an(n), g = i.useRef(!1), w = i.useRef(!0), { viewport: h, selectedItem: v, selectedItemText: y, focusSelectedItem: b } = c, S = i.useCallback(() => {
    if (a.trigger && a.valueNode && s && d && h && v && y) {
      const x = a.trigger.getBoundingClientRect(), A = d.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), M = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const G = M.left - A.left, K = T.left - G, oe = x.left - K, he = x.width + oe, tt = Math.max(he, A.width), nt = window.innerWidth - de, ot = _n(K, [
          de,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(de, nt - tt)
        ]);
        s.style.minWidth = he + "px", s.style.left = ot + "px";
      } else {
        const G = A.right - M.right, K = window.innerWidth - T.right - G, oe = window.innerWidth - x.right - K, he = x.width + oe, tt = Math.max(he, A.width), nt = window.innerWidth - de, ot = _n(K, [
          de,
          Math.max(de, nt - tt)
        ]);
        s.style.minWidth = he + "px", s.style.right = ot + "px";
      }
      const L = m(), W = window.innerHeight - de * 2, V = h.scrollHeight, B = window.getComputedStyle(d), Y = parseInt(B.borderTopWidth, 10), k = parseInt(B.paddingTop, 10), H = parseInt(B.borderBottomWidth, 10), D = parseInt(B.paddingBottom, 10), _ = Y + k + V + D + H, j = Math.min(v.offsetHeight * 5, _), q = window.getComputedStyle(h), ee = parseInt(q.paddingTop, 10), Ce = parseInt(q.paddingBottom, 10), ie = x.top + x.height / 2 - de, xe = W - ie, ne = v.offsetHeight / 2, I = v.offsetTop + ne, z = Y + k + I, X = _ - z;
      if (z <= ie) {
        const G = L.length > 0 && v === L[L.length - 1].ref.current;
        s.style.bottom = "0px";
        const K = d.clientHeight - h.offsetTop - h.offsetHeight, oe = Math.max(
          xe,
          ne + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (G ? Ce : 0) + K + H
        ), he = z + oe;
        s.style.height = he + "px";
      } else {
        const G = L.length > 0 && v === L[0].ref.current;
        s.style.top = "0px";
        const oe = Math.max(
          ie,
          Y + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (G ? ee : 0) + ne
        ) + X;
        s.style.height = oe + "px", h.scrollTop = z - ie + h.offsetTop;
      }
      s.style.margin = `${de}px 0`, s.style.minHeight = j + "px", s.style.maxHeight = W + "px", o == null || o(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    a.trigger,
    a.valueNode,
    s,
    d,
    h,
    v,
    y,
    a.dir,
    o
  ]);
  Q(() => S(), [S]);
  const [C, R] = i.useState();
  Q(() => {
    d && R(window.getComputedStyle(d).zIndex);
  }, [d]);
  const E = i.useCallback(
    (x) => {
      x && w.current === !0 && (S(), b == null || b(), w.current = !1);
    },
    [S, b]
  );
  return /* @__PURE__ */ u(
    Wm,
    {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ u(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ u(
            O.div,
            {
              ...r,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
bs.displayName = Fm;
var Bm = "SelectPopperPosition", Tn = i.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = de,
    ...a
  } = e, c = sn(n);
  return /* @__PURE__ */ u(
    Ia,
    {
      ...c,
      ...a,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Tn.displayName = Bm;
var [Wm, bo] = et(We, {}), Mn = "SelectViewport", Ss = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, a = ke(Mn, n), c = bo(Mn, n), s = F(t, a.onViewportChange), l = i.useRef(0);
    return /* @__PURE__ */ $(Re, { children: [
      /* @__PURE__ */ u(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ u(rn.Slot, { scope: n, children: /* @__PURE__ */ u(
        O.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: s,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: P(r.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = c;
            if (m != null && m.current && p) {
              const g = Math.abs(l.current - f.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - de * 2, h = parseFloat(p.style.minHeight), v = parseFloat(p.style.height), y = Math.max(h, v);
                if (y < w) {
                  const b = y + g, S = Math.min(w, b), C = b - S;
                  p.style.height = S + "px", p.style.bottom === "0px" && (f.scrollTop = C > 0 ? C : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ss.displayName = Mn;
var Cs = "SelectGroup", [Vm, Hm] = et(Cs), xs = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = se();
    return /* @__PURE__ */ u(Vm, { scope: n, id: r, children: /* @__PURE__ */ u(O.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
xs.displayName = Cs;
var Rs = "SelectLabel", Ns = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Hm(Rs, n);
    return /* @__PURE__ */ u(O.div, { id: r.id, ...o, ref: t });
  }
);
Ns.displayName = Rs;
var $t = "SelectItem", [Um, Es] = et($t), Ps = i.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: a,
      ...c
    } = e, s = Oe($t, n), l = ke($t, n), d = s.value === o, [f, p] = i.useState(a ?? ""), [m, g] = i.useState(!1), w = F(
      t,
      (b) => {
        var S;
        return (S = l.itemRefCallback) == null ? void 0 : S.call(l, b, o, r);
      }
    ), h = se(), v = i.useRef("touch"), y = () => {
      r || (s.onValueChange(o), s.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u(
      Um,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: h,
        isSelected: d,
        onItemTextChange: i.useCallback((b) => {
          p((S) => S || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u(
          rn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: f,
            children: /* @__PURE__ */ u(
              O.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...c,
                ref: w,
                onFocus: P(c.onFocus, () => g(!0)),
                onBlur: P(c.onBlur, () => g(!1)),
                onClick: P(c.onClick, () => {
                  v.current !== "mouse" && y();
                }),
                onPointerUp: P(c.onPointerUp, () => {
                  v.current === "mouse" && y();
                }),
                onPointerDown: P(c.onPointerDown, (b) => {
                  v.current = b.pointerType;
                }),
                onPointerMove: P(c.onPointerMove, (b) => {
                  var S;
                  v.current = b.pointerType, r ? (S = l.onItemLeave) == null || S.call(l) : v.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: P(c.onPointerLeave, (b) => {
                  var S;
                  b.currentTarget === document.activeElement && ((S = l.onItemLeave) == null || S.call(l));
                }),
                onKeyDown: P(c.onKeyDown, (b) => {
                  var C;
                  ((C = l.searchRef) == null ? void 0 : C.current) !== "" && b.key === " " || (Am.includes(b.key) && y(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ps.displayName = $t;
var at = "SelectItemText", _s = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...a } = e, c = Oe(at, n), s = ke(at, n), l = Es(at, n), d = Im(at, n), [f, p] = i.useState(null), m = F(
      t,
      (y) => p(y),
      l.onItemTextChange,
      (y) => {
        var b;
        return (b = s.itemTextRefCallback) == null ? void 0 : b.call(s, y, l.value, l.disabled);
      }
    ), g = f == null ? void 0 : f.textContent, w = i.useMemo(
      () => /* @__PURE__ */ u("option", { value: l.value, disabled: l.disabled, children: g }, l.value),
      [l.disabled, l.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: v } = d;
    return Q(() => (h(w), () => v(w)), [h, v, w]), /* @__PURE__ */ $(Re, { children: [
      /* @__PURE__ */ u(O.span, { id: l.textId, ...a, ref: m }),
      l.isSelected && c.valueNode && !c.valueNodeHasChildren ? Ft.createPortal(a.children, c.valueNode) : null
    ] });
  }
);
_s.displayName = at;
var As = "SelectItemIndicator", Ts = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return Es(As, n).isSelected ? /* @__PURE__ */ u(O.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Ts.displayName = As;
var Dn = "SelectScrollUpButton", Ms = i.forwardRef((e, t) => {
  const n = ke(Dn, e.__scopeSelect), o = bo(Dn, e.__scopeSelect), [r, a] = i.useState(!1), c = F(t, o.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ u(
    Is,
    {
      ...e,
      ref: c,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Ms.displayName = Dn;
var In = "SelectScrollDownButton", Ds = i.forwardRef((e, t) => {
  const n = ke(In, e.__scopeSelect), o = bo(In, e.__scopeSelect), [r, a] = i.useState(!1), c = F(t, o.onScrollButtonChange);
  return Q(() => {
    if (n.viewport && n.isPositioned) {
      let s = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        a(f);
      };
      const l = n.viewport;
      return s(), l.addEventListener("scroll", s), () => l.removeEventListener("scroll", s);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ u(
    Is,
    {
      ...e,
      ref: c,
      onAutoScroll: () => {
        const { viewport: s, selectedItem: l } = n;
        s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Ds.displayName = In;
var Is = i.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, a = ke("SelectScrollButton", n), c = i.useRef(null), s = an(n), l = i.useCallback(() => {
    c.current !== null && (window.clearInterval(c.current), c.current = null);
  }, []);
  return i.useEffect(() => () => l(), [l]), Q(() => {
    var f;
    const d = s().find((p) => p.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [s]), /* @__PURE__ */ u(
    O.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: P(r.onPointerDown, () => {
        c.current === null && (c.current = window.setInterval(o, 50));
      }),
      onPointerMove: P(r.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), c.current === null && (c.current = window.setInterval(o, 50));
      }),
      onPointerLeave: P(r.onPointerLeave, () => {
        l();
      })
    }
  );
}), zm = "SelectSeparator", Os = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ u(O.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Os.displayName = zm;
var On = "SelectArrow", Gm = i.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = sn(n), a = Oe(On, n), c = ke(On, n);
    return a.open && c.position === "popper" ? /* @__PURE__ */ u(Oa, { ...r, ...o, ref: t }) : null;
  }
);
Gm.displayName = On;
var Km = "SelectBubbleInput", ks = i.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, o) => {
    const r = i.useRef(null), a = F(o, r), c = zn(t);
    return i.useEffect(() => {
      const s = r.current;
      if (!s) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (c !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(s, t), s.dispatchEvent(p);
      }
    }, [c, t]), /* @__PURE__ */ u(
      O.select,
      {
        ...n,
        style: { ...ls, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
ks.displayName = Km;
function Ls(e) {
  return e === "" || e === void 0;
}
function $s(e) {
  const t = Z(e), n = i.useRef(""), o = i.useRef(0), r = i.useCallback(
    (c) => {
      const s = n.current + c;
      t(s), (function l(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      })(s);
    },
    [t]
  ), a = i.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return i.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, a];
}
function Fs(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let c = Ym(e, Math.max(a, 0));
  r.length === 1 && (c = c.filter((d) => d !== n));
  const l = c.find(
    (d) => d.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Ym(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var jm = us, Bs = fs, Xm = ms, qm = hs, Zm = gs, Ws = vs, Qm = Ss, Jm = xs, Vs = Ns, Hs = Ps, eh = _s, th = Ts, Us = Ms, zs = Ds, Gs = Os;
const Zh = jm, Qh = Jm, Jh = Xm, nh = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ $(
  Bs,
  {
    ref: o,
    className: N(
      "flex h-11 w-full items-center justify-between rounded-xl border border-slate-200/80 bg-white/85 px-3 py-2 text-sm text-slate-700 shadow-sm ring-offset-background transition data-[placeholder]:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u(qm, { asChild: !0, children: /* @__PURE__ */ u(la, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
nh.displayName = Bs.displayName;
const Ks = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Us,
  {
    ref: n,
    className: N(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(Ku, { className: "h-4 w-4" })
  }
));
Ks.displayName = Us.displayName;
const Ys = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  zs,
  {
    ref: n,
    className: N(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(la, { className: "h-4 w-4" })
  }
));
Ys.displayName = zs.displayName;
const oh = i.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, r) => /* @__PURE__ */ u(Zm, { children: /* @__PURE__ */ $(
  Ws,
  {
    ref: r,
    className: N(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-xl border border-white/60 bg-white/90 text-slate-700 shadow-xl backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ u(Ks, {}),
      /* @__PURE__ */ u(
        Qm,
        {
          className: N(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ u(Ys, {})
    ]
  }
) }));
oh.displayName = Ws.displayName;
const rh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Vs,
  {
    ref: n,
    className: N("py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-600", e),
    ...t
  }
));
rh.displayName = Vs.displayName;
const ah = i.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ $(
  Hs,
  {
    ref: o,
    className: N(
      "relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm outline-none focus:bg-indigo-50 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ u("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u(th, { children: /* @__PURE__ */ u(jn, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ u(eh, { children: t })
    ]
  }
));
ah.displayName = Hs.displayName;
const ih = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  Gs,
  {
    ref: n,
    className: N("-mx-1 my-1 h-px bg-slate-200/60", e),
    ...t
  }
));
ih.displayName = Gs.displayName;
var sh = "Separator", Zo = "horizontal", ch = ["horizontal", "vertical"], js = i.forwardRef((e, t) => {
  const { decorative: n, orientation: o = Zo, ...r } = e, a = lh(o) ? o : Zo, s = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ u(
    tn.div,
    {
      "data-orientation": a,
      ...s,
      ...r,
      ref: t
    }
  );
});
js.displayName = sh;
function lh(e) {
  return ch.includes(e);
}
var Xs = js;
const qs = i.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ u(
    Xs,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: N(
        "ui-separator",
        t === "horizontal" ? "ui-separator--horizontal" : "ui-separator--vertical",
        e
      ),
      ...o
    }
  )
);
qs.displayName = Xs.displayName;
function uh({ user: e }) {
  const n = (typeof e.name == "string" ? e.name : e.email ?? "").split(" ").map((o) => o[0]).join("").toUpperCase().slice(0, 2) || "?";
  return /* @__PURE__ */ u("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm", children: n });
}
function dh({ role: e }) {
  const t = {
    ADMIN: { bg: "bg-blue-100", text: "text-blue-800" },
    SUPERVISOR: { bg: "bg-green-100", text: "text-green-800" },
    CASHIER: { bg: "bg-gray-100", text: "text-gray-800" },
    HR: { bg: "bg-purple-100", text: "text-purple-800" }
  }, n = t[e.toUpperCase()] || t.CASHIER;
  return /* @__PURE__ */ u(
    "span",
    {
      className: N(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        n.bg,
        n.text
      ),
      children: e
    }
  );
}
function fh({
  item: e,
  pathname: t,
  onNavigate: n,
  checkModuleAccess: o,
  variant: r = "light",
  Link: a
}) {
  if (!(e.module && o ? o(e.module) : !0))
    return null;
  const s = e.icon, l = t === e.href || t.startsWith(e.href + "/"), d = () => {
    var g;
    (g = e.onClick) == null || g.call(e), n == null || n();
  }, f = "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2", p = l ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-900", m = l ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white";
  return /* @__PURE__ */ $(
    a,
    {
      to: e.href,
      href: e.href,
      onClick: d,
      "aria-current": l ? "page" : void 0,
      className: N(f, r === "dark" ? m : p),
      children: [
        /* @__PURE__ */ u(
          s,
          {
            className: N(
              "h-5 w-5 flex-shrink-0",
              r === "dark" ? l ? "text-white" : "text-gray-400" : l ? "text-gray-900" : "text-gray-500"
            )
          }
        ),
        /* @__PURE__ */ u("span", { children: e.title }),
        e.badge && /* @__PURE__ */ u("span", { className: "ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white", children: e.badge })
      ]
    }
  );
}
function ph({
  item: e,
  pathname: t,
  onNavigate: n,
  checkModuleAccess: o,
  variant: r = "light",
  Link: a
}) {
  if (!(e.module && o ? o(e.module) : !0))
    return null;
  const s = e.icon, l = t === e.href || t.startsWith(e.href + "/"), d = () => {
    var m;
    (m = e.onClick) == null || m.call(e), n == null || n();
  }, f = l ? "bg-indigo-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100", p = l ? "bg-gray-800 text-white shadow-sm" : "text-gray-400 hover:bg-gray-800 hover:text-white";
  return /* @__PURE__ */ u(
    a,
    {
      to: e.href,
      href: e.href,
      onClick: d,
      "aria-current": l ? "page" : void 0,
      title: e.title,
      className: N(
        "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
        r === "dark" ? p : f
      ),
      children: /* @__PURE__ */ u(s, { className: "h-5 w-5" })
    }
  );
}
function mh({
  group: e,
  pathname: t,
  onNavigate: n,
  checkModuleAccess: o,
  variant: r,
  Link: a
}) {
  const c = e.items.filter((s) => !s.module || !o ? !0 : o(s.module));
  return c.length === 0 ? null : /* @__PURE__ */ $("div", { className: "space-y-1", children: [
    /* @__PURE__ */ u("div", { className: "px-3 py-2", children: /* @__PURE__ */ u(
      "h3",
      {
        className: N(
          "text-xs font-semibold uppercase tracking-wider",
          r === "dark" ? "text-gray-400" : "text-gray-500"
        ),
        children: e.title
      }
    ) }),
    /* @__PURE__ */ u("div", { className: "space-y-1", children: c.map((s) => /* @__PURE__ */ u(
      fh,
      {
        item: s,
        pathname: t,
        onNavigate: n,
        checkModuleAccess: o,
        variant: r,
        Link: a
      },
      s.href
    )) })
  ] });
}
function eg({
  navGroups: e,
  user: t,
  branding: n,
  isLoadingUser: o = !1,
  onLogout: r,
  navigation: a,
  checkModuleAccess: c,
  companySelector: s,
  storeSelector: l,
  footerContent: d,
  prependContent: f,
  appendContent: p,
  variant: m = "light",
  renderUserAvatar: g,
  renderRoleBadge: w,
  onNavigate: h
}) {
  const v = a.usePathname(), y = a.Link, b = g ? () => g(t) : () => /* @__PURE__ */ u(uh, { user: t }), S = w ? ({ role: x }) => w(x) : dh, C = m === "dark" ? "bg-gray-900" : "bg-slate-50", R = m === "dark" ? "border-gray-700" : "border-slate-200", E = m === "dark" ? "text-white" : "text-gray-900";
  return /* @__PURE__ */ $(Re, { children: [
    /* @__PURE__ */ u(
      "aside",
      {
        className: N(
          "lg:hidden sticky top-0 z-40 h-screen w-16 shrink-0 border-r shadow-xl",
          C,
          R
        ),
        "aria-label": "Navegación principal",
        role: "navigation",
        children: /* @__PURE__ */ $("div", { className: "flex h-full flex-col items-center py-4", children: [
          /* @__PURE__ */ u(
            y,
            {
              to: "/",
              href: "/",
              className: N(
                "mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold text-white",
                m === "dark" ? "bg-blue-600" : "bg-indigo-600"
              ),
              "aria-label": "Ir al inicio",
              children: n.shortName
            }
          ),
          /* @__PURE__ */ u(An, { className: "flex-1 w-full", children: /* @__PURE__ */ u("nav", { className: "flex flex-col items-center gap-2 py-2", "aria-label": "Navegación principal", children: e.map((x) => /* @__PURE__ */ u("div", { className: "flex flex-col items-center gap-2", children: x.items.map((A) => /* @__PURE__ */ u(
            ph,
            {
              item: A,
              pathname: v,
              onNavigate: h,
              checkModuleAccess: c,
              variant: m,
              Link: y
            },
            A.href
          )) }, x.title)) }) }),
          /* @__PURE__ */ u("div", { className: "pt-3", children: t && /* @__PURE__ */ u(
            y,
            {
              to: "/account",
              href: "/account",
              onClick: h,
              "aria-label": "Ver mi cuenta",
              className: N(
                "flex h-11 w-11 items-center justify-center rounded-xl",
                m === "dark" ? "bg-gray-800" : "bg-slate-100"
              ),
              children: /* @__PURE__ */ u(b, {})
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ u(
      "aside",
      {
        className: N(
          "hidden lg:flex sticky top-0 z-40 h-screen shrink-0 border-r shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 lg:shadow-none",
          C,
          R
        ),
        "aria-label": "Navegación principal",
        role: "navigation",
        children: /* @__PURE__ */ $("div", { className: N("flex h-full flex-col", C), children: [
          /* @__PURE__ */ u("div", { className: N("border-b px-4 py-3 min-w-0", R), children: s || l ? /* @__PURE__ */ $("div", { className: "space-y-3", children: [
            s,
            l
          ] }) : /* @__PURE__ */ $("div", { className: "flex items-center gap-2 min-h-11 px-1", children: [
            n.logo,
            /* @__PURE__ */ u("h1", { className: N("text-lg font-bold truncate", E), children: n.name })
          ] }) }),
          /* @__PURE__ */ u(An, { className: N("flex-1", C), children: /* @__PURE__ */ $("nav", { className: N("p-4 space-y-4", C), "aria-label": "Navegación principal", children: [
            f && /* @__PURE__ */ u("div", { className: "mb-4", children: f }),
            e.map((x, A) => /* @__PURE__ */ $("div", { children: [
              /* @__PURE__ */ u(
                mh,
                {
                  group: x,
                  pathname: v,
                  onNavigate: h,
                  checkModuleAccess: c,
                  variant: m,
                  Link: y
                }
              ),
              A < e.length - 1 && /* @__PURE__ */ u(qs, { className: "my-4" })
            ] }, x.title)),
            p && /* @__PURE__ */ u("div", { className: "mt-4 pt-4 border-t", children: p })
          ] }) }),
          /* @__PURE__ */ $("div", { className: N("border-t p-4", C, R), children: [
            d,
            o ? /* @__PURE__ */ $("div", { className: "flex items-center gap-3 px-3 py-2", children: [
              /* @__PURE__ */ u("div", { className: "h-10 w-10 animate-pulse rounded-full bg-gray-200" }),
              /* @__PURE__ */ $("div", { className: "flex-1 space-y-2", children: [
                /* @__PURE__ */ u("div", { className: "h-4 w-24 animate-pulse rounded bg-gray-200" }),
                /* @__PURE__ */ u("div", { className: "h-3 w-16 animate-pulse rounded bg-gray-200" })
              ] })
            ] }) : t ? /* @__PURE__ */ $("div", { className: "space-y-3", children: [
              /* @__PURE__ */ $(
                y,
                {
                  to: "/account",
                  href: "/account",
                  className: N(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
                    m === "dark" ? "hover:bg-gray-800 text-white" : "hover:bg-gray-100"
                  ),
                  onClick: h,
                  "aria-label": "Ver mi cuenta",
                  children: [
                    /* @__PURE__ */ u(b, {}),
                    /* @__PURE__ */ $("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ u("p", { className: N("text-sm font-medium truncate", E), children: t.name || t.email }),
                      t.role && /* @__PURE__ */ u("div", { className: "mt-1", children: /* @__PURE__ */ u(S, { role: t.role }) })
                    ] })
                  ]
                }
              ),
              r && /* @__PURE__ */ u(
                "button",
                {
                  onClick: r,
                  className: "w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm transition-colors font-medium",
                  children: "Cerrar Sesión"
                }
              )
            ] }) : null
          ] })
        ] })
      }
    )
  ] });
}
function tg({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: N("ui-skeleton", e),
      ...t
    }
  );
}
var cn = "Switch", [hh] = le(cn), [gh, vh] = hh(cn), Zs = i.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: a,
      required: c,
      disabled: s,
      value: l = "on",
      onCheckedChange: d,
      form: f,
      ...p
    } = e, [m, g] = i.useState(null), w = F(t, (S) => g(S)), h = i.useRef(!1), v = m ? f || !!m.closest("form") : !0, [y, b] = Ne({
      prop: r,
      defaultProp: a ?? !1,
      onChange: d,
      caller: cn
    });
    return /* @__PURE__ */ $(gh, { scope: n, checked: y, disabled: s, children: [
      /* @__PURE__ */ u(
        O.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": c,
          "data-state": tc(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: l,
          ...p,
          ref: w,
          onClick: P(e.onClick, (S) => {
            b((C) => !C), v && (h.current = S.isPropagationStopped(), h.current || S.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ u(
        ec,
        {
          control: m,
          bubbles: !h.current,
          name: o,
          value: l,
          checked: y,
          required: c,
          disabled: s,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Zs.displayName = cn;
var Qs = "SwitchThumb", Js = i.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = vh(Qs, n);
    return /* @__PURE__ */ u(
      O.span,
      {
        "data-state": tc(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Js.displayName = Qs;
var wh = "SwitchBubbleInput", ec = i.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: o = !0,
    ...r
  }, a) => {
    const c = i.useRef(null), s = F(c, a), l = zn(n), d = Gn(t);
    return i.useEffect(() => {
      const f = c.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && g) {
        const w = new Event("click", { bubbles: o });
        g.call(f, n), f.dispatchEvent(w);
      }
    }, [l, n, o]), /* @__PURE__ */ u(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...r,
        tabIndex: -1,
        ref: s,
        style: {
          ...r.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
ec.displayName = wh;
function tc(e) {
  return e ? "checked" : "unchecked";
}
var nc = Zs, yh = Js;
const bh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  nc,
  {
    className: N("ui-switch", e),
    ...t,
    ref: n,
    children: /* @__PURE__ */ u(yh, { className: "ui-switch__thumb" })
  }
));
bh.displayName = nc.displayName;
const Sh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("div", { className: "ui-table-wrapper", children: /* @__PURE__ */ u(
  "table",
  {
    ref: n,
    className: N("ui-table", e),
    ...t
  }
) }));
Sh.displayName = "Table";
const Ch = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u("thead", { ref: n, className: N("ui-table__header", e), ...t }));
Ch.displayName = "TableHeader";
const xh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "tbody",
  {
    ref: n,
    className: N("ui-table__body", e),
    ...t
  }
));
xh.displayName = "TableBody";
const Rh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "tfoot",
  {
    ref: n,
    className: N("ui-table__footer", e),
    ...t
  }
));
Rh.displayName = "TableFooter";
const Nh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "tr",
  {
    ref: n,
    className: N("ui-table__row", e),
    ...t
  }
));
Nh.displayName = "TableRow";
const Eh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "th",
  {
    ref: n,
    className: N("ui-table__head", e),
    ...t
  }
));
Eh.displayName = "TableHead";
const Ph = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "td",
  {
    ref: n,
    className: N("ui-table__cell", e),
    ...t
  }
));
Ph.displayName = "TableCell";
const _h = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "caption",
  {
    ref: n,
    className: N("ui-table__caption", e),
    ...t
  }
));
_h.displayName = "TableCaption";
var ln = "Tabs", [Ah] = le(ln, [
  Qt
]), oc = Qt(), [Th, So] = Ah(ln), rc = i.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: o,
      onValueChange: r,
      defaultValue: a,
      orientation: c = "horizontal",
      dir: s,
      activationMode: l = "automatic",
      ...d
    } = e, f = ut(s), [p, m] = Ne({
      prop: o,
      onChange: r,
      defaultProp: a ?? "",
      caller: ln
    });
    return /* @__PURE__ */ u(
      Th,
      {
        scope: n,
        baseId: se(),
        value: p,
        onValueChange: m,
        orientation: c,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ u(
          O.div,
          {
            dir: f,
            "data-orientation": c,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
rc.displayName = ln;
var ac = "TabsList", ic = i.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e, a = So(ac, n), c = oc(n);
    return /* @__PURE__ */ u(
      Wa,
      {
        asChild: !0,
        ...c,
        orientation: a.orientation,
        dir: a.dir,
        loop: o,
        children: /* @__PURE__ */ u(
          O.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...r,
            ref: t
          }
        )
      }
    );
  }
);
ic.displayName = ac;
var sc = "TabsTrigger", cc = i.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...a } = e, c = So(sc, n), s = oc(n), l = dc(c.baseId, o), d = fc(c.baseId, o), f = o === c.value;
    return /* @__PURE__ */ u(
      Va,
      {
        asChild: !0,
        ...s,
        focusable: !r,
        active: f,
        children: /* @__PURE__ */ u(
          O.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: l,
            ...a,
            ref: t,
            onMouseDown: P(e.onMouseDown, (p) => {
              !r && p.button === 0 && p.ctrlKey === !1 ? c.onValueChange(o) : p.preventDefault();
            }),
            onKeyDown: P(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && c.onValueChange(o);
            }),
            onFocus: P(e.onFocus, () => {
              const p = c.activationMode !== "manual";
              !f && !r && p && c.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
cc.displayName = sc;
var lc = "TabsContent", uc = i.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: a, ...c } = e, s = So(lc, n), l = dc(s.baseId, o), d = fc(s.baseId, o), f = o === s.value, p = i.useRef(f);
    return i.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ u(te, { present: r || f, children: ({ present: m }) => /* @__PURE__ */ u(
      O.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": s.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !m,
        id: d,
        tabIndex: 0,
        ...c,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: m && a
      }
    ) });
  }
);
uc.displayName = lc;
function dc(e, t) {
  return `${e}-trigger-${t}`;
}
function fc(e, t) {
  return `${e}-content-${t}`;
}
var Mh = rc, pc = ic, mc = cc, hc = uc;
const ng = Mh, Dh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  pc,
  {
    ref: n,
    className: N("ui-tabs__list", e),
    ...t
  }
));
Dh.displayName = pc.displayName;
const Ih = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  mc,
  {
    ref: n,
    className: N("ui-tabs__trigger", e),
    ...t
  }
));
Ih.displayName = mc.displayName;
const Oh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  hc,
  {
    ref: n,
    className: N("ui-tabs__content", e),
    ...t
  }
));
Oh.displayName = hc.displayName;
const kh = i.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u(
  "textarea",
  {
    className: N("ui-textarea", e),
    ref: n,
    ...t
  }
));
kh.displayName = "Textarea";
export {
  Sc as Alert,
  xc as AlertDescription,
  Bh as AlertDialog,
  hu as AlertDialogAction,
  gu as AlertDialogCancel,
  uu as AlertDialogContent,
  mu as AlertDialogDescription,
  fu as AlertDialogFooter,
  du as AlertDialogHeader,
  Qr as AlertDialogOverlay,
  lu as AlertDialogPortal,
  pu as AlertDialogTitle,
  Wh as AlertDialogTrigger,
  Cc as AlertTitle,
  Vh as Badge,
  Nu as Button,
  Eu as Card,
  Tu as CardContent,
  Au as CardDescription,
  Mu as CardFooter,
  Pu as CardHeader,
  _u as CardTitle,
  Zu as Checkbox,
  Hh as Dialog,
  zh as DialogClose,
  Ju as DialogContent,
  od as DialogDescription,
  td as DialogFooter,
  ed as DialogHeader,
  ua as DialogOverlay,
  Qu as DialogPortal,
  nd as DialogTitle,
  Uh as DialogTrigger,
  Gh as DropdownMenu,
  Xp as DropdownMenuCheckboxItem,
  Yp as DropdownMenuContent,
  Yh as DropdownMenuGroup,
  jp as DropdownMenuItem,
  Zp as DropdownMenuLabel,
  jh as DropdownMenuPortal,
  qh as DropdownMenuRadioGroup,
  qp as DropdownMenuRadioItem,
  Qp as DropdownMenuSeparator,
  Jp as DropdownMenuShortcut,
  Xh as DropdownMenuSub,
  Kp as DropdownMenuSubContent,
  Gp as DropdownMenuSubTrigger,
  Kh as DropdownMenuTrigger,
  Wi as Input,
  nm as InputField,
  Ui as Label,
  fm as Progress,
  An as ScrollArea,
  cs as ScrollBar,
  Zh as Select,
  oh as SelectContent,
  Qh as SelectGroup,
  ah as SelectItem,
  rh as SelectLabel,
  Ys as SelectScrollDownButton,
  Ks as SelectScrollUpButton,
  ih as SelectSeparator,
  nh as SelectTrigger,
  Jh as SelectValue,
  qs as Separator,
  eg as Sidebar,
  tg as Skeleton,
  bh as Switch,
  Sh as Table,
  xh as TableBody,
  _h as TableCaption,
  Ph as TableCell,
  Rh as TableFooter,
  Eh as TableHead,
  Ch as TableHeader,
  Nh as TableRow,
  ng as Tabs,
  Oh as TabsContent,
  Dh as TabsList,
  Ih as TabsTrigger,
  kh as Textarea,
  N as cn
};
