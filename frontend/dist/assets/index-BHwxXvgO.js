import isPropValid from "@emotion/is-prop-valid";

var _p = (e) => {
  throw TypeError(e);
};
var xu = (e, t, n) => t.has(e) || _p("Cannot " + n);
var k = (e, t, n) => (
    xu(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  z = (e, t, n) =>
    t.has(e)
      ? _p("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  D = (e, t, n, r) => (
    xu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  W = (e, t, n) => (xu(e, t, "access private method"), n);
var Va = (e, t, n, r) => ({
  set _(s) {
    D(e, t, s, n);
  },
  get _() {
    return k(e, t, r);
  },
});
function dS(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
function fS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var T1 = { exports: {} },
  Oc = {},
  P1 = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa = Symbol.for("react.element"),
  hS = Symbol.for("react.portal"),
  mS = Symbol.for("react.fragment"),
  pS = Symbol.for("react.strict_mode"),
  gS = Symbol.for("react.profiler"),
  yS = Symbol.for("react.provider"),
  xS = Symbol.for("react.context"),
  vS = Symbol.for("react.forward_ref"),
  wS = Symbol.for("react.suspense"),
  bS = Symbol.for("react.memo"),
  SS = Symbol.for("react.lazy"),
  Rp = Symbol.iterator;
function kS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rp && e[Rp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _1 = Object.assign,
  R1 = {};
function Ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = R1),
    (this.updater = n || A1);
}
Ai.prototype.isReactComponent = {};
Ai.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ai.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function O1() {}
O1.prototype = Ai.prototype;
function ph(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = R1),
    (this.updater = n || A1);
}
var gh = (ph.prototype = new O1());
gh.constructor = ph;
_1(gh, Ai.prototype);
gh.isPureReactComponent = !0;
var Op = Array.isArray,
  M1 = Object.prototype.hasOwnProperty,
  yh = { current: null },
  D1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function L1(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      M1.call(t, r) && !D1.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: xa,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: yh.current,
  };
}
function CS(e, t) {
  return {
    $$typeof: xa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xa;
}
function ES(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Mp = /\/+/g;
function vu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ES("" + e.key)
    : t.toString(36);
}
function yl(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xa:
          case hS:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + vu(o, 0) : r),
      Op(s)
        ? ((n = ""),
          e != null && (n = e.replace(Mp, "$&/") + "/"),
          yl(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (xh(s) &&
            (s = CS(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Mp, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Op(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var c = r + vu(i, l);
      o += yl(i, t, n, c, s);
    }
  else if (((c = kS(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (c = r + vu(i, l++)), (o += yl(i, t, n, c, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ua(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    yl(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function NS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ct = { current: null },
  xl = { transition: null },
  jS = {
    ReactCurrentDispatcher: ct,
    ReactCurrentBatchConfig: xl,
    ReactCurrentOwner: yh,
  };
function F1() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Ua,
  forEach: function (e, t, n) {
    Ua(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ua(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ua(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Ai;
X.Fragment = mS;
X.Profiler = gS;
X.PureComponent = ph;
X.StrictMode = pS;
X.Suspense = wS;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jS;
X.act = F1;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _1({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = yh.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      M1.call(t, c) &&
        !D1.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: xa, type: e.type, key: s, ref: i, props: r, _owner: o };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: xS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: yS, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = L1;
X.createFactory = function (e) {
  var t = L1.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: vS, render: e };
};
X.isValidElement = xh;
X.lazy = function (e) {
  return { $$typeof: SS, _payload: { _status: -1, _result: e }, _init: NS };
};
X.memo = function (e, t) {
  return { $$typeof: bS, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = xl.transition;
  xl.transition = {};
  try {
    e();
  } finally {
    xl.transition = t;
  }
};
X.unstable_act = F1;
X.useCallback = function (e, t) {
  return ct.current.useCallback(e, t);
};
X.useContext = function (e) {
  return ct.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return ct.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return ct.current.useEffect(e, t);
};
X.useId = function () {
  return ct.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return ct.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return ct.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return ct.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return ct.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return ct.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return ct.current.useRef(e);
};
X.useState = function (e) {
  return ct.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return ct.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return ct.current.useTransition();
};
X.version = "18.3.1";
P1.exports = X;
var b = P1.exports;
const wn = fS(b),
  TS = dS({ __proto__: null, default: wn }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var PS = b,
  AS = Symbol.for("react.element"),
  _S = Symbol.for("react.fragment"),
  RS = Object.prototype.hasOwnProperty,
  OS = PS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  MS = { key: !0, ref: !0, __self: !0, __source: !0 };
function I1(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) RS.call(t, r) && !MS.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: AS,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: OS.current,
  };
}
Oc.Fragment = _S;
Oc.jsx = I1;
Oc.jsxs = I1;
T1.exports = Oc;
var a = T1.exports,
  B1 = { exports: {} },
  _t = {},
  z1 = { exports: {} },
  V1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, U) {
    var $ = R.length;
    R.push(U);
    e: for (; 0 < $; ) {
      var q = ($ - 1) >>> 1,
        Ee = R[q];
      if (0 < s(Ee, U)) (R[q] = U), (R[$] = Ee), ($ = q);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var U = R[0],
      $ = R.pop();
    if ($ !== U) {
      R[0] = $;
      e: for (var q = 0, Ee = R.length, we = Ee >>> 1; q < we; ) {
        var cn = 2 * (q + 1) - 1,
          ue = R[cn],
          kt = cn + 1,
          Jn = R[kt];
        if (0 > s(ue, $))
          kt < Ee && 0 > s(Jn, ue)
            ? ((R[q] = Jn), (R[kt] = $), (q = kt))
            : ((R[q] = ue), (R[cn] = $), (q = cn));
        else if (kt < Ee && 0 > s(Jn, $)) (R[q] = Jn), (R[kt] = $), (q = kt);
        else break e;
      }
    }
    return U;
  }
  function s(R, U) {
    var $ = R.sortIndex - U.sortIndex;
    return $ !== 0 ? $ : R.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    h = 3,
    m = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(R) {
    for (var U = n(u); U !== null; ) {
      if (U.callback === null) r(u);
      else if (U.startTime <= R)
        r(u), (U.sortIndex = U.expirationTime), t(c, U);
      else break;
      U = n(u);
    }
  }
  function S(R) {
    if (((v = !1), x(R), !y))
      if (n(c) !== null) (y = !0), Es(C);
      else {
        var U = n(u);
        U !== null && Ce(S, U.startTime - R);
      }
  }
  function C(R, U) {
    (y = !1), v && ((v = !1), g(N), (N = -1)), (m = !0);
    var $ = h;
    try {
      for (
        x(U), f = n(c);
        f !== null && (!(f.expirationTime > U) || (R && !J()));

      ) {
        var q = f.callback;
        if (typeof q == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var Ee = q(f.expirationTime <= U);
          (U = e.unstable_now()),
            typeof Ee == "function" ? (f.callback = Ee) : f === n(c) && r(c),
            x(U);
        } else r(c);
        f = n(c);
      }
      if (f !== null) var we = !0;
      else {
        var cn = n(u);
        cn !== null && Ce(S, cn.startTime - U), (we = !1);
      }
      return we;
    } finally {
      (f = null), (h = $), (m = !1);
    }
  }
  var T = !1,
    j = null,
    N = -1,
    O = 5,
    M = -1;
  function J() {
    return !(e.unstable_now() - M < O);
  }
  function Mt() {
    if (j !== null) {
      var R = e.unstable_now();
      M = R;
      var U = !0;
      try {
        U = j(!0, R);
      } finally {
        U ? Yt() : ((T = !1), (j = null));
      }
    } else T = !1;
  }
  var Yt;
  if (typeof p == "function")
    Yt = function () {
      p(Mt);
    };
  else if (typeof MessageChannel < "u") {
    var jn = new MessageChannel(),
      Oa = jn.port2;
    (jn.port1.onmessage = Mt),
      (Yt = function () {
        Oa.postMessage(null);
      });
  } else
    Yt = function () {
      w(Mt, 0);
    };
  function Es(R) {
    (j = R), T || ((T = !0), Yt());
  }
  function Ce(R, U) {
    N = w(function () {
      R(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Es(C));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (R) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = h;
      }
      var $ = h;
      h = U;
      try {
        return R();
      } finally {
        h = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, U) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = h;
      h = R;
      try {
        return U();
      } finally {
        h = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, U, $) {
      var q = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? q + $ : q))
          : ($ = q),
        R)
      ) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return (
        (Ee = $ + Ee),
        (R = {
          id: d++,
          callback: U,
          priorityLevel: R,
          startTime: $,
          expirationTime: Ee,
          sortIndex: -1,
        }),
        $ > q
          ? ((R.sortIndex = $),
            t(u, R),
            n(c) === null &&
              R === n(u) &&
              (v ? (g(N), (N = -1)) : (v = !0), Ce(S, $ - q)))
          : ((R.sortIndex = Ee), t(c, R), y || m || ((y = !0), Es(C))),
        R
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (R) {
      var U = h;
      return function () {
        var $ = h;
        h = U;
        try {
          return R.apply(this, arguments);
        } finally {
          h = $;
        }
      };
    });
})(V1);
z1.exports = V1;
var DS = z1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var LS = b,
  At = DS;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var U1 = new Set(),
  Lo = {};
function vs(e, t) {
  wi(e, t), wi(e + "Capture", t);
}
function wi(e, t) {
  for (Lo[e] = t, e = 0; e < t.length; e++) U1.add(t[e]);
}
var zn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bd = Object.prototype.hasOwnProperty,
  FS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Dp = {},
  Lp = {};
function IS(e) {
  return bd.call(Lp, e)
    ? !0
    : bd.call(Dp, e)
    ? !1
    : FS.test(e)
    ? (Lp[e] = !0)
    : ((Dp[e] = !0), !1);
}
function BS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zS(e, t, n, r) {
  if (t === null || typeof t > "u" || BS(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ut(e, t, n, r, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new ut(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new ut(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new ut(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  He[e] = new ut(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new ut(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new ut(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new ut(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new ut(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new ut(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vh = /[\-:]([a-z])/g;
function wh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vh, wh);
    He[t] = new ut(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vh, wh);
    He[t] = new ut(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vh, wh);
  He[t] = new ut(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new ut(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new ut(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new ut(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bh(e, t, n, r) {
  var s = He.hasOwnProperty(t) ? He[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zS(t, n, s, r) && (n = null),
    r || s === null
      ? IS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = LS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  $a = Symbol.for("react.element"),
  Ds = Symbol.for("react.portal"),
  Ls = Symbol.for("react.fragment"),
  Sh = Symbol.for("react.strict_mode"),
  Sd = Symbol.for("react.profiler"),
  $1 = Symbol.for("react.provider"),
  H1 = Symbol.for("react.context"),
  kh = Symbol.for("react.forward_ref"),
  kd = Symbol.for("react.suspense"),
  Cd = Symbol.for("react.suspense_list"),
  Ch = Symbol.for("react.memo"),
  sr = Symbol.for("react.lazy"),
  q1 = Symbol.for("react.offscreen"),
  Fp = Symbol.iterator;
function qi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fp && e[Fp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  wu;
function fo(e) {
  if (wu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wu = (t && t[1]) || "";
    }
  return (
    `
` +
    wu +
    e
  );
}
var bu = !1;
function Su(e, t) {
  if (!e || bu) return "";
  bu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          l = i.length - 1;
        1 <= o && 0 <= l && s[o] !== i[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (s[o] !== i[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || s[o] !== i[l])) {
                var c =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (bu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fo(e) : "";
}
function VS(e) {
  switch (e.tag) {
    case 5:
      return fo(e.type);
    case 16:
      return fo("Lazy");
    case 13:
      return fo("Suspense");
    case 19:
      return fo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Su(e.type, !1)), e;
    case 11:
      return (e = Su(e.type.render, !1)), e;
    case 1:
      return (e = Su(e.type, !0)), e;
    default:
      return "";
  }
}
function Ed(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ls:
      return "Fragment";
    case Ds:
      return "Portal";
    case Sd:
      return "Profiler";
    case Sh:
      return "StrictMode";
    case kd:
      return "Suspense";
    case Cd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case H1:
        return (e.displayName || "Context") + ".Consumer";
      case $1:
        return (e._context.displayName || "Context") + ".Provider";
      case kh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ch:
        return (
          (t = e.displayName || null), t !== null ? t : Ed(e.type) || "Memo"
        );
      case sr:
        (t = e._payload), (e = e._init);
        try {
          return Ed(e(t));
        } catch {}
    }
  return null;
}
function US(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ed(t);
    case 8:
      return t === Sh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ar(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function W1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $S(e) {
  var t = W1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ha(e) {
  e._valueTracker || (e._valueTracker = $S(e));
}
function K1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = W1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ql(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Nd(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ip(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ar(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Y1(e, t) {
  (t = t.checked), t != null && bh(e, "checked", t, !1);
}
function jd(e, t) {
  Y1(e, t);
  var n = Ar(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Td(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Td(e, t.type, Ar(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Td(e, t, n) {
  (t !== "number" || ql(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ho = Array.isArray;
function Js(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ar(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (ho(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ar(n) };
}
function Q1(e, t) {
  var n = Ar(t.value),
    r = Ar(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Vp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function G1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ad(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? G1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var qa,
  X1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        qa = qa || document.createElement("div"),
          qa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = qa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  HS = ["Webkit", "ms", "Moz", "O"];
Object.keys(wo).forEach(function (e) {
  HS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wo[t] = wo[e]);
  });
});
function J1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wo.hasOwnProperty(e) && wo[e])
    ? ("" + t).trim()
    : t + "px";
}
function Z1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = J1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var qS = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _d(e, t) {
  if (t) {
    if (qS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Rd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Od = null;
function Eh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Md = null,
  Zs = null,
  ei = null;
function Up(e) {
  if ((e = ba(e))) {
    if (typeof Md != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Ic(t)), Md(e.stateNode, e.type, t));
  }
}
function ex(e) {
  Zs ? (ei ? ei.push(e) : (ei = [e])) : (Zs = e);
}
function tx() {
  if (Zs) {
    var e = Zs,
      t = ei;
    if (((ei = Zs = null), Up(e), t)) for (e = 0; e < t.length; e++) Up(t[e]);
  }
}
function nx(e, t) {
  return e(t);
}
function rx() {}
var ku = !1;
function sx(e, t, n) {
  if (ku) return e(t, n);
  ku = !0;
  try {
    return nx(e, t, n);
  } finally {
    (ku = !1), (Zs !== null || ei !== null) && (rx(), tx());
  }
}
function Io(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ic(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Dd = !1;
if (zn)
  try {
    var Wi = {};
    Object.defineProperty(Wi, "passive", {
      get: function () {
        Dd = !0;
      },
    }),
      window.addEventListener("test", Wi, Wi),
      window.removeEventListener("test", Wi, Wi);
  } catch {
    Dd = !1;
  }
function WS(e, t, n, r, s, i, o, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var bo = !1,
  Wl = null,
  Kl = !1,
  Ld = null,
  KS = {
    onError: function (e) {
      (bo = !0), (Wl = e);
    },
  };
function YS(e, t, n, r, s, i, o, l, c) {
  (bo = !1), (Wl = null), WS.apply(KS, arguments);
}
function QS(e, t, n, r, s, i, o, l, c) {
  if ((YS.apply(this, arguments), bo)) {
    if (bo) {
      var u = Wl;
      (bo = !1), (Wl = null);
    } else throw Error(A(198));
    Kl || ((Kl = !0), (Ld = u));
  }
}
function ws(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ix(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function $p(e) {
  if (ws(e) !== e) throw Error(A(188));
}
function GS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ws(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return $p(s), e;
        if (i === r) return $p(s), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, l = s.child; l; ) {
        if (l === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (l === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = i.child; l; ) {
          if (l === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (l === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function ox(e) {
  return (e = GS(e)), e !== null ? ax(e) : null;
}
function ax(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ax(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var lx = At.unstable_scheduleCallback,
  Hp = At.unstable_cancelCallback,
  XS = At.unstable_shouldYield,
  JS = At.unstable_requestPaint,
  je = At.unstable_now,
  ZS = At.unstable_getCurrentPriorityLevel,
  Nh = At.unstable_ImmediatePriority,
  cx = At.unstable_UserBlockingPriority,
  Yl = At.unstable_NormalPriority,
  e3 = At.unstable_LowPriority,
  ux = At.unstable_IdlePriority,
  Mc = null,
  bn = null;
function t3(e) {
  if (bn && typeof bn.onCommitFiberRoot == "function")
    try {
      bn.onCommitFiberRoot(Mc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var sn = Math.clz32 ? Math.clz32 : s3,
  n3 = Math.log,
  r3 = Math.LN2;
function s3(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((n3(e) / r3) | 0)) | 0;
}
var Wa = 64,
  Ka = 4194304;
function mo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~s;
    l !== 0 ? (r = mo(l)) : ((i &= o), i !== 0 && (r = mo(i)));
  } else (o = n & ~s), o !== 0 ? (r = mo(o)) : i !== 0 && (r = mo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - sn(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function i3(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function o3(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - sn(i),
      l = 1 << o,
      c = s[o];
    c === -1
      ? (!(l & n) || l & r) && (s[o] = i3(l, t))
      : c <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Fd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dx() {
  var e = Wa;
  return (Wa <<= 1), !(Wa & 4194240) && (Wa = 64), e;
}
function Cu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function va(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - sn(t)),
    (e[t] = n);
}
function a3(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - sn(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function jh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - sn(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var se = 0;
function fx(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hx,
  Th,
  mx,
  px,
  gx,
  Id = !1,
  Ya = [],
  wr = null,
  br = null,
  Sr = null,
  Bo = new Map(),
  zo = new Map(),
  or = [],
  l3 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wr = null;
      break;
    case "dragenter":
    case "dragleave":
      br = null;
      break;
    case "mouseover":
    case "mouseout":
      Sr = null;
      break;
    case "pointerover":
    case "pointerout":
      Bo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zo.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ba(t)), t !== null && Th(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function c3(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (wr = Ki(wr, e, t, n, r, s)), !0;
    case "dragenter":
      return (br = Ki(br, e, t, n, r, s)), !0;
    case "mouseover":
      return (Sr = Ki(Sr, e, t, n, r, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return Bo.set(i, Ki(Bo.get(i) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), zo.set(i, Ki(zo.get(i) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function yx(e) {
  var t = Qr(e.target);
  if (t !== null) {
    var n = ws(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ix(n)), t !== null)) {
          (e.blockedOn = t),
            gx(e.priority, function () {
              mx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Od = r), n.target.dispatchEvent(r), (Od = null);
    } else return (t = ba(n)), t !== null && Th(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wp(e, t, n) {
  vl(e) && n.delete(t);
}
function u3() {
  (Id = !1),
    wr !== null && vl(wr) && (wr = null),
    br !== null && vl(br) && (br = null),
    Sr !== null && vl(Sr) && (Sr = null),
    Bo.forEach(Wp),
    zo.forEach(Wp);
}
function Yi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Id ||
      ((Id = !0),
      At.unstable_scheduleCallback(At.unstable_NormalPriority, u3)));
}
function Vo(e) {
  function t(s) {
    return Yi(s, e);
  }
  if (0 < Ya.length) {
    Yi(Ya[0], e);
    for (var n = 1; n < Ya.length; n++) {
      var r = Ya[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wr !== null && Yi(wr, e),
      br !== null && Yi(br, e),
      Sr !== null && Yi(Sr, e),
      Bo.forEach(t),
      zo.forEach(t),
      n = 0;
    n < or.length;
    n++
  )
    (r = or[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < or.length && ((n = or[0]), n.blockedOn === null); )
    yx(n), n.blockedOn === null && or.shift();
}
var ti = Kn.ReactCurrentBatchConfig,
  Gl = !0;
function d3(e, t, n, r) {
  var s = se,
    i = ti.transition;
  ti.transition = null;
  try {
    (se = 1), Ph(e, t, n, r);
  } finally {
    (se = s), (ti.transition = i);
  }
}
function f3(e, t, n, r) {
  var s = se,
    i = ti.transition;
  ti.transition = null;
  try {
    (se = 4), Ph(e, t, n, r);
  } finally {
    (se = s), (ti.transition = i);
  }
}
function Ph(e, t, n, r) {
  if (Gl) {
    var s = Bd(e, t, n, r);
    if (s === null) Mu(e, t, r, Xl, n), qp(e, r);
    else if (c3(s, e, t, n, r)) r.stopPropagation();
    else if ((qp(e, r), t & 4 && -1 < l3.indexOf(e))) {
      for (; s !== null; ) {
        var i = ba(s);
        if (
          (i !== null && hx(i),
          (i = Bd(e, t, n, r)),
          i === null && Mu(e, t, r, Xl, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else Mu(e, t, r, null, n);
  }
}
var Xl = null;
function Bd(e, t, n, r) {
  if (((Xl = null), (e = Eh(r)), (e = Qr(e)), e !== null))
    if (((t = ws(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ix(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xl = e), null;
}
function xx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ZS()) {
        case Nh:
          return 1;
        case cx:
          return 4;
        case Yl:
        case e3:
          return 16;
        case ux:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yr = null,
  Ah = null,
  wl = null;
function vx() {
  if (wl) return wl;
  var e,
    t = Ah,
    n = t.length,
    r,
    s = "value" in yr ? yr.value : yr.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (wl = s.slice(e, 1 < r ? 1 - r : void 0));
}
function bl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qa() {
  return !0;
}
function Kp() {
  return !1;
}
function Rt(e) {
  function t(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Qa
        : Kp),
      (this.isPropagationStopped = Kp),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qa));
      },
      persist: function () {},
      isPersistent: Qa,
    }),
    t
  );
}
var _i = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _h = Rt(_i),
  wa = ve({}, _i, { view: 0, detail: 0 }),
  h3 = Rt(wa),
  Eu,
  Nu,
  Qi,
  Dc = ve({}, wa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qi &&
            (Qi && e.type === "mousemove"
              ? ((Eu = e.screenX - Qi.screenX), (Nu = e.screenY - Qi.screenY))
              : (Nu = Eu = 0),
            (Qi = e)),
          Eu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nu;
    },
  }),
  Yp = Rt(Dc),
  m3 = ve({}, Dc, { dataTransfer: 0 }),
  p3 = Rt(m3),
  g3 = ve({}, wa, { relatedTarget: 0 }),
  ju = Rt(g3),
  y3 = ve({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  x3 = Rt(y3),
  v3 = ve({}, _i, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  w3 = Rt(v3),
  b3 = ve({}, _i, { data: 0 }),
  Qp = Rt(b3),
  S3 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  k3 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  C3 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function E3(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C3[e]) ? !!t[e] : !1;
}
function Rh() {
  return E3;
}
var N3 = ve({}, wa, {
    key: function (e) {
      if (e.key) {
        var t = S3[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = bl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? k3[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rh,
    charCode: function (e) {
      return e.type === "keypress" ? bl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? bl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  j3 = Rt(N3),
  T3 = ve({}, Dc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gp = Rt(T3),
  P3 = ve({}, wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rh,
  }),
  A3 = Rt(P3),
  _3 = ve({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  R3 = Rt(_3),
  O3 = ve({}, Dc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  M3 = Rt(O3),
  D3 = [9, 13, 27, 32],
  Oh = zn && "CompositionEvent" in window,
  So = null;
zn && "documentMode" in document && (So = document.documentMode);
var L3 = zn && "TextEvent" in window && !So,
  wx = zn && (!Oh || (So && 8 < So && 11 >= So)),
  Xp = " ",
  Jp = !1;
function bx(e, t) {
  switch (e) {
    case "keyup":
      return D3.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fs = !1;
function F3(e, t) {
  switch (e) {
    case "compositionend":
      return Sx(t);
    case "keypress":
      return t.which !== 32 ? null : ((Jp = !0), Xp);
    case "textInput":
      return (e = t.data), e === Xp && Jp ? null : e;
    default:
      return null;
  }
}
function I3(e, t) {
  if (Fs)
    return e === "compositionend" || (!Oh && bx(e, t))
      ? ((e = vx()), (wl = Ah = yr = null), (Fs = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return wx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var B3 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Zp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!B3[e.type] : t === "textarea";
}
function kx(e, t, n, r) {
  ex(r),
    (t = Jl(t, "onChange")),
    0 < t.length &&
      ((n = new _h("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ko = null,
  Uo = null;
function z3(e) {
  Mx(e, 0);
}
function Lc(e) {
  var t = zs(e);
  if (K1(t)) return e;
}
function V3(e, t) {
  if (e === "change") return t;
}
var Cx = !1;
if (zn) {
  var Tu;
  if (zn) {
    var Pu = "oninput" in document;
    if (!Pu) {
      var e0 = document.createElement("div");
      e0.setAttribute("oninput", "return;"),
        (Pu = typeof e0.oninput == "function");
    }
    Tu = Pu;
  } else Tu = !1;
  Cx = Tu && (!document.documentMode || 9 < document.documentMode);
}
function t0() {
  ko && (ko.detachEvent("onpropertychange", Ex), (Uo = ko = null));
}
function Ex(e) {
  if (e.propertyName === "value" && Lc(Uo)) {
    var t = [];
    kx(t, Uo, e, Eh(e)), sx(z3, t);
  }
}
function U3(e, t, n) {
  e === "focusin"
    ? (t0(), (ko = t), (Uo = n), ko.attachEvent("onpropertychange", Ex))
    : e === "focusout" && t0();
}
function $3(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Lc(Uo);
}
function H3(e, t) {
  if (e === "click") return Lc(t);
}
function q3(e, t) {
  if (e === "input" || e === "change") return Lc(t);
}
function W3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var an = typeof Object.is == "function" ? Object.is : W3;
function $o(e, t) {
  if (an(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!bd.call(t, s) || !an(e[s], t[s])) return !1;
  }
  return !0;
}
function n0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function r0(e, t) {
  var n = n0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = n0(n);
  }
}
function Nx(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nx(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jx() {
  for (var e = window, t = ql(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ql(e.document);
  }
  return t;
}
function Mh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function K3(e) {
  var t = jx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nx(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = r0(n, i));
        var o = r0(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Y3 = zn && "documentMode" in document && 11 >= document.documentMode,
  Is = null,
  zd = null,
  Co = null,
  Vd = !1;
function s0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vd ||
    Is == null ||
    Is !== ql(r) ||
    ((r = Is),
    "selectionStart" in r && Mh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Co && $o(Co, r)) ||
      ((Co = r),
      (r = Jl(zd, "onSelect")),
      0 < r.length &&
        ((t = new _h("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Is))));
}
function Ga(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bs = {
    animationend: Ga("Animation", "AnimationEnd"),
    animationiteration: Ga("Animation", "AnimationIteration"),
    animationstart: Ga("Animation", "AnimationStart"),
    transitionend: Ga("Transition", "TransitionEnd"),
  },
  Au = {},
  Tx = {};
zn &&
  ((Tx = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bs.animationend.animation,
    delete Bs.animationiteration.animation,
    delete Bs.animationstart.animation),
  "TransitionEvent" in window || delete Bs.transitionend.transition);
function Fc(e) {
  if (Au[e]) return Au[e];
  if (!Bs[e]) return e;
  var t = Bs[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tx) return (Au[e] = t[n]);
  return e;
}
var Px = Fc("animationend"),
  Ax = Fc("animationiteration"),
  _x = Fc("animationstart"),
  Rx = Fc("transitionend"),
  Ox = new Map(),
  i0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lr(e, t) {
  Ox.set(e, t), vs(t, [e]);
}
for (var _u = 0; _u < i0.length; _u++) {
  var Ru = i0[_u],
    Q3 = Ru.toLowerCase(),
    G3 = Ru[0].toUpperCase() + Ru.slice(1);
  Lr(Q3, "on" + G3);
}
Lr(Px, "onAnimationEnd");
Lr(Ax, "onAnimationIteration");
Lr(_x, "onAnimationStart");
Lr("dblclick", "onDoubleClick");
Lr("focusin", "onFocus");
Lr("focusout", "onBlur");
Lr(Rx, "onTransitionEnd");
wi("onMouseEnter", ["mouseout", "mouseover"]);
wi("onMouseLeave", ["mouseout", "mouseover"]);
wi("onPointerEnter", ["pointerout", "pointerover"]);
wi("onPointerLeave", ["pointerout", "pointerover"]);
vs(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vs(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vs(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vs(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vs(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var po =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  X3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(po));
function o0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), QS(r, t, void 0, e), (e.currentTarget = null);
}
function Mx(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== i && s.isPropagationStopped())) break e;
          o0(s, l, u), (i = c);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== i && s.isPropagationStopped())
          )
            break e;
          o0(s, l, u), (i = c);
        }
    }
  }
  if (Kl) throw ((e = Ld), (Kl = !1), (Ld = null), e);
}
function de(e, t) {
  var n = t[Wd];
  n === void 0 && (n = t[Wd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Dx(t, e, 2, !1), n.add(r));
}
function Ou(e, t, n) {
  var r = 0;
  t && (r |= 4), Dx(n, e, r, t);
}
var Xa = "_reactListening" + Math.random().toString(36).slice(2);
function Ho(e) {
  if (!e[Xa]) {
    (e[Xa] = !0),
      U1.forEach(function (n) {
        n !== "selectionchange" && (X3.has(n) || Ou(n, !1, e), Ou(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xa] || ((t[Xa] = !0), Ou("selectionchange", !1, t));
  }
}
function Dx(e, t, n, r) {
  switch (xx(t)) {
    case 1:
      var s = d3;
      break;
    case 4:
      s = f3;
      break;
    default:
      s = Ph;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Dd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function Mu(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var c = o.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = o.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Qr(l)), o === null)) return;
          if (((c = o.tag), c === 5 || c === 6)) {
            r = i = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  sx(function () {
    var u = i,
      d = Eh(n),
      f = [];
    e: {
      var h = Ox.get(e);
      if (h !== void 0) {
        var m = _h,
          y = e;
        switch (e) {
          case "keypress":
            if (bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = j3;
            break;
          case "focusin":
            (y = "focus"), (m = ju);
            break;
          case "focusout":
            (y = "blur"), (m = ju);
            break;
          case "beforeblur":
          case "afterblur":
            m = ju;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Yp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = p3;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = A3;
            break;
          case Px:
          case Ax:
          case _x:
            m = x3;
            break;
          case Rx:
            m = R3;
            break;
          case "scroll":
            m = h3;
            break;
          case "wheel":
            m = M3;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = w3;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Gp;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          g = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var S = x.stateNode;
          if (
            (x.tag === 5 &&
              S !== null &&
              ((x = S),
              g !== null && ((S = Io(p, g)), S != null && v.push(qo(p, S, x)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((h = new m(h, y, null, n, d)), f.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Od &&
            (y = n.relatedTarget || n.fromElement) &&
            (Qr(y) || y[Vn]))
        )
          break e;
        if (
          (m || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Qr(y) : null),
              y !== null &&
                ((w = ws(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = Yp),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Gp),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (w = m == null ? h : zs(m)),
            (x = y == null ? h : zs(y)),
            (h = new v(S, p + "leave", m, n, d)),
            (h.target = w),
            (h.relatedTarget = x),
            (S = null),
            Qr(d) === u &&
              ((v = new v(g, p + "enter", y, n, d)),
              (v.target = x),
              (v.relatedTarget = w),
              (S = v)),
            (w = S),
            m && y)
          )
            t: {
              for (v = m, g = y, p = 0, x = v; x; x = Rs(x)) p++;
              for (x = 0, S = g; S; S = Rs(S)) x++;
              for (; 0 < p - x; ) (v = Rs(v)), p--;
              for (; 0 < x - p; ) (g = Rs(g)), x--;
              for (; p--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Rs(v)), (g = Rs(g));
              }
              v = null;
            }
          else v = null;
          m !== null && a0(f, h, m, v, !1),
            y !== null && w !== null && a0(f, w, y, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? zs(u) : window),
          (m = h.nodeName && h.nodeName.toLowerCase()),
          m === "select" || (m === "input" && h.type === "file"))
        )
          var C = V3;
        else if (Zp(h))
          if (Cx) C = q3;
          else {
            C = $3;
            var T = U3;
          }
        else
          (m = h.nodeName) &&
            m.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = H3);
        if (C && (C = C(e, u))) {
          kx(f, C, n, d);
          break e;
        }
        T && T(e, h, u),
          e === "focusout" &&
            (T = h._wrapperState) &&
            T.controlled &&
            h.type === "number" &&
            Td(h, "number", h.value);
      }
      switch (((T = u ? zs(u) : window), e)) {
        case "focusin":
          (Zp(T) || T.contentEditable === "true") &&
            ((Is = T), (zd = u), (Co = null));
          break;
        case "focusout":
          Co = zd = Is = null;
          break;
        case "mousedown":
          Vd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vd = !1), s0(f, n, d);
          break;
        case "selectionchange":
          if (Y3) break;
        case "keydown":
        case "keyup":
          s0(f, n, d);
      }
      var j;
      if (Oh)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Fs
          ? bx(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (wx &&
          n.locale !== "ko" &&
          (Fs || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Fs && (j = vx())
            : ((yr = d),
              (Ah = "value" in yr ? yr.value : yr.textContent),
              (Fs = !0))),
        (T = Jl(u, N)),
        0 < T.length &&
          ((N = new Qp(N, e, null, n, d)),
          f.push({ event: N, listeners: T }),
          j ? (N.data = j) : ((j = Sx(n)), j !== null && (N.data = j)))),
        (j = L3 ? F3(e, n) : I3(e, n)) &&
          ((u = Jl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Qp("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = j)));
    }
    Mx(f, t);
  });
}
function qo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Io(e, n)),
      i != null && r.unshift(qo(e, i, s)),
      (i = Io(e, t)),
      i != null && r.push(qo(e, i, s))),
      (e = e.return);
  }
  return r;
}
function Rs(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function a0(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((c = Io(n, i)), c != null && o.unshift(qo(n, c, l)))
        : s || ((c = Io(n, i)), c != null && o.push(qo(n, c, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var J3 = /\r\n?/g,
  Z3 = /\u0000|\uFFFD/g;
function l0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      J3,
      `
`
    )
    .replace(Z3, "");
}
function Ja(e, t, n) {
  if (((t = l0(t)), l0(e) !== t && n)) throw Error(A(425));
}
function Zl() {}
var Ud = null,
  $d = null;
function Hd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qd = typeof setTimeout == "function" ? setTimeout : void 0,
  ek = typeof clearTimeout == "function" ? clearTimeout : void 0,
  c0 = typeof Promise == "function" ? Promise : void 0,
  tk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof c0 < "u"
      ? function (e) {
          return c0.resolve(null).then(e).catch(nk);
        }
      : qd;
function nk(e) {
  setTimeout(function () {
    throw e;
  });
}
function Du(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Vo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Vo(t);
}
function kr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function u0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ri = Math.random().toString(36).slice(2),
  xn = "__reactFiber$" + Ri,
  Wo = "__reactProps$" + Ri,
  Vn = "__reactContainer$" + Ri,
  Wd = "__reactEvents$" + Ri,
  rk = "__reactListeners$" + Ri,
  sk = "__reactHandles$" + Ri;
function Qr(e) {
  var t = e[xn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vn] || n[xn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = u0(e); e !== null; ) {
          if ((n = e[xn])) return n;
          e = u0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ba(e) {
  return (
    (e = e[xn] || e[Vn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zs(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Ic(e) {
  return e[Wo] || null;
}
var Kd = [],
  Vs = -1;
function Fr(e) {
  return { current: e };
}
function fe(e) {
  0 > Vs || ((e.current = Kd[Vs]), (Kd[Vs] = null), Vs--);
}
function ce(e, t) {
  Vs++, (Kd[Vs] = e.current), (e.current = t);
}
var _r = {},
  Ze = Fr(_r),
  yt = Fr(!1),
  fs = _r;
function bi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _r;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function xt(e) {
  return (e = e.childContextTypes), e != null;
}
function ec() {
  fe(yt), fe(Ze);
}
function d0(e, t, n) {
  if (Ze.current !== _r) throw Error(A(168));
  ce(Ze, t), ce(yt, n);
}
function Lx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(A(108, US(e) || "Unknown", s));
  return ve({}, n, r);
}
function tc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _r),
    (fs = Ze.current),
    ce(Ze, e),
    ce(yt, yt.current),
    !0
  );
}
function f0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = Lx(e, t, fs)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(yt),
      fe(Ze),
      ce(Ze, e))
    : fe(yt),
    ce(yt, n);
}
var On = null,
  Bc = !1,
  Lu = !1;
function Fx(e) {
  On === null ? (On = [e]) : On.push(e);
}
function ik(e) {
  (Bc = !0), Fx(e);
}
function Ir() {
  if (!Lu && On !== null) {
    Lu = !0;
    var e = 0,
      t = se;
    try {
      var n = On;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (On = null), (Bc = !1);
    } catch (s) {
      throw (On !== null && (On = On.slice(e + 1)), lx(Nh, Ir), s);
    } finally {
      (se = t), (Lu = !1);
    }
  }
  return null;
}
var Us = [],
  $s = 0,
  nc = null,
  rc = 0,
  Bt = [],
  zt = 0,
  hs = null,
  Dn = 1,
  Ln = "";
function Hr(e, t) {
  (Us[$s++] = rc), (Us[$s++] = nc), (nc = e), (rc = t);
}
function Ix(e, t, n) {
  (Bt[zt++] = Dn), (Bt[zt++] = Ln), (Bt[zt++] = hs), (hs = e);
  var r = Dn;
  e = Ln;
  var s = 32 - sn(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - sn(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Dn = (1 << (32 - sn(t) + s)) | (n << s) | r),
      (Ln = i + e);
  } else (Dn = (1 << i) | (n << s) | r), (Ln = e);
}
function Dh(e) {
  e.return !== null && (Hr(e, 1), Ix(e, 1, 0));
}
function Lh(e) {
  for (; e === nc; )
    (nc = Us[--$s]), (Us[$s] = null), (rc = Us[--$s]), (Us[$s] = null);
  for (; e === hs; )
    (hs = Bt[--zt]),
      (Bt[zt] = null),
      (Ln = Bt[--zt]),
      (Bt[zt] = null),
      (Dn = Bt[--zt]),
      (Bt[zt] = null);
}
var Tt = null,
  jt = null,
  me = !1,
  nn = null;
function Bx(e, t) {
  var n = Ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function h0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Tt = e), (jt = kr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Tt = e), (jt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hs !== null ? { id: Dn, overflow: Ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Tt = e),
            (jt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qd(e) {
  if (me) {
    var t = jt;
    if (t) {
      var n = t;
      if (!h0(e, t)) {
        if (Yd(e)) throw Error(A(418));
        t = kr(n.nextSibling);
        var r = Tt;
        t && h0(e, t)
          ? Bx(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (Tt = e));
      }
    } else {
      if (Yd(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (Tt = e);
    }
  }
}
function m0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tt = e;
}
function Za(e) {
  if (e !== Tt) return !1;
  if (!me) return m0(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hd(e.type, e.memoizedProps))),
    t && (t = jt))
  ) {
    if (Yd(e)) throw (zx(), Error(A(418)));
    for (; t; ) Bx(e, t), (t = kr(t.nextSibling));
  }
  if ((m0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              jt = kr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      jt = null;
    }
  } else jt = Tt ? kr(e.stateNode.nextSibling) : null;
  return !0;
}
function zx() {
  for (var e = jt; e; ) e = kr(e.nextSibling);
}
function Si() {
  (jt = Tt = null), (me = !1);
}
function Fh(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
var ok = Kn.ReactCurrentBatchConfig;
function Gi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var l = s.refs;
            o === null ? delete l[i] : (l[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function el(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function p0(e) {
  var t = e._init;
  return t(e._payload);
}
function Vx(e) {
  function t(g, p) {
    if (e) {
      var x = g.deletions;
      x === null ? ((g.deletions = [p]), (g.flags |= 16)) : x.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function s(g, p) {
    return (g = jr(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, p, x) {
    return (
      (g.index = x),
      e
        ? ((x = g.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((g.flags |= 2), p) : x)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function o(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, x, S) {
    return p === null || p.tag !== 6
      ? ((p = $u(x, g.mode, S)), (p.return = g), p)
      : ((p = s(p, x)), (p.return = g), p);
  }
  function c(g, p, x, S) {
    var C = x.type;
    return C === Ls
      ? d(g, p, x.props.children, S, x.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === sr &&
            p0(C) === p.type))
      ? ((S = s(p, x.props)), (S.ref = Gi(g, p, x)), (S.return = g), S)
      : ((S = Tl(x.type, x.key, x.props, null, g.mode, S)),
        (S.ref = Gi(g, p, x)),
        (S.return = g),
        S);
  }
  function u(g, p, x, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = Hu(x, g.mode, S)), (p.return = g), p)
      : ((p = s(p, x.children || [])), (p.return = g), p);
  }
  function d(g, p, x, S, C) {
    return p === null || p.tag !== 7
      ? ((p = cs(x, g.mode, S, C)), (p.return = g), p)
      : ((p = s(p, x)), (p.return = g), p);
  }
  function f(g, p, x) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = $u("" + p, g.mode, x)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case $a:
          return (
            (x = Tl(p.type, p.key, p.props, null, g.mode, x)),
            (x.ref = Gi(g, null, p)),
            (x.return = g),
            x
          );
        case Ds:
          return (p = Hu(p, g.mode, x)), (p.return = g), p;
        case sr:
          var S = p._init;
          return f(g, S(p._payload), x);
      }
      if (ho(p) || qi(p))
        return (p = cs(p, g.mode, x, null)), (p.return = g), p;
      el(g, p);
    }
    return null;
  }
  function h(g, p, x, S) {
    var C = p !== null ? p.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return C !== null ? null : l(g, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case $a:
          return x.key === C ? c(g, p, x, S) : null;
        case Ds:
          return x.key === C ? u(g, p, x, S) : null;
        case sr:
          return (C = x._init), h(g, p, C(x._payload), S);
      }
      if (ho(x) || qi(x)) return C !== null ? null : d(g, p, x, S, null);
      el(g, x);
    }
    return null;
  }
  function m(g, p, x, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(x) || null), l(p, g, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case $a:
          return (g = g.get(S.key === null ? x : S.key) || null), c(p, g, S, C);
        case Ds:
          return (g = g.get(S.key === null ? x : S.key) || null), u(p, g, S, C);
        case sr:
          var T = S._init;
          return m(g, p, x, T(S._payload), C);
      }
      if (ho(S) || qi(S)) return (g = g.get(x) || null), d(p, g, S, C, null);
      el(p, S);
    }
    return null;
  }
  function y(g, p, x, S) {
    for (
      var C = null, T = null, j = p, N = (p = 0), O = null;
      j !== null && N < x.length;
      N++
    ) {
      j.index > N ? ((O = j), (j = null)) : (O = j.sibling);
      var M = h(g, j, x[N], S);
      if (M === null) {
        j === null && (j = O);
        break;
      }
      e && j && M.alternate === null && t(g, j),
        (p = i(M, p, N)),
        T === null ? (C = M) : (T.sibling = M),
        (T = M),
        (j = O);
    }
    if (N === x.length) return n(g, j), me && Hr(g, N), C;
    if (j === null) {
      for (; N < x.length; N++)
        (j = f(g, x[N], S)),
          j !== null &&
            ((p = i(j, p, N)), T === null ? (C = j) : (T.sibling = j), (T = j));
      return me && Hr(g, N), C;
    }
    for (j = r(g, j); N < x.length; N++)
      (O = m(j, g, N, x[N], S)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? N : O.key),
          (p = i(O, p, N)),
          T === null ? (C = O) : (T.sibling = O),
          (T = O));
    return (
      e &&
        j.forEach(function (J) {
          return t(g, J);
        }),
      me && Hr(g, N),
      C
    );
  }
  function v(g, p, x, S) {
    var C = qi(x);
    if (typeof C != "function") throw Error(A(150));
    if (((x = C.call(x)), x == null)) throw Error(A(151));
    for (
      var T = (C = null), j = p, N = (p = 0), O = null, M = x.next();
      j !== null && !M.done;
      N++, M = x.next()
    ) {
      j.index > N ? ((O = j), (j = null)) : (O = j.sibling);
      var J = h(g, j, M.value, S);
      if (J === null) {
        j === null && (j = O);
        break;
      }
      e && j && J.alternate === null && t(g, j),
        (p = i(J, p, N)),
        T === null ? (C = J) : (T.sibling = J),
        (T = J),
        (j = O);
    }
    if (M.done) return n(g, j), me && Hr(g, N), C;
    if (j === null) {
      for (; !M.done; N++, M = x.next())
        (M = f(g, M.value, S)),
          M !== null &&
            ((p = i(M, p, N)), T === null ? (C = M) : (T.sibling = M), (T = M));
      return me && Hr(g, N), C;
    }
    for (j = r(g, j); !M.done; N++, M = x.next())
      (M = m(j, g, N, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? N : M.key),
          (p = i(M, p, N)),
          T === null ? (C = M) : (T.sibling = M),
          (T = M));
    return (
      e &&
        j.forEach(function (Mt) {
          return t(g, Mt);
        }),
      me && Hr(g, N),
      C
    );
  }
  function w(g, p, x, S) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Ls &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case $a:
          e: {
            for (var C = x.key, T = p; T !== null; ) {
              if (T.key === C) {
                if (((C = x.type), C === Ls)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (p = s(T, x.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === sr &&
                    p0(C) === T.type)
                ) {
                  n(g, T.sibling),
                    (p = s(T, x.props)),
                    (p.ref = Gi(g, T, x)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            x.type === Ls
              ? ((p = cs(x.props.children, g.mode, S, x.key)),
                (p.return = g),
                (g = p))
              : ((S = Tl(x.type, x.key, x.props, null, g.mode, S)),
                (S.ref = Gi(g, p, x)),
                (S.return = g),
                (g = S));
          }
          return o(g);
        case Ds:
          e: {
            for (T = x.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  n(g, p.sibling),
                    (p = s(p, x.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = Hu(x, g.mode, S)), (p.return = g), (g = p);
          }
          return o(g);
        case sr:
          return (T = x._init), w(g, p, T(x._payload), S);
      }
      if (ho(x)) return y(g, p, x, S);
      if (qi(x)) return v(g, p, x, S);
      el(g, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = s(p, x)), (p.return = g), (g = p))
          : (n(g, p), (p = $u(x, g.mode, S)), (p.return = g), (g = p)),
        o(g))
      : n(g, p);
  }
  return w;
}
var ki = Vx(!0),
  Ux = Vx(!1),
  sc = Fr(null),
  ic = null,
  Hs = null,
  Ih = null;
function Bh() {
  Ih = Hs = ic = null;
}
function zh(e) {
  var t = sc.current;
  fe(sc), (e._currentValue = t);
}
function Gd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ni(e, t) {
  (ic = e),
    (Ih = Hs = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pt = !0), (e.firstContext = null));
}
function qt(e) {
  var t = e._currentValue;
  if (Ih !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hs === null)) {
      if (ic === null) throw Error(A(308));
      (Hs = e), (ic.dependencies = { lanes: 0, firstContext: e });
    } else Hs = Hs.next = e;
  return t;
}
var Gr = null;
function Vh(e) {
  Gr === null ? (Gr = [e]) : Gr.push(e);
}
function $x(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), Vh(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    Un(e, r)
  );
}
function Un(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ir = !1;
function Uh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Fn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      Un(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), Vh(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    Un(e, n)
  );
}
function Sl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jh(e, n);
  }
}
function g0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function oc(e, t, n, r) {
  var s = e.updateQueue;
  ir = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l,
      u = c.next;
    (c.next = null), o === null ? (i = u) : (o.next = u), (o = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var f = s.baseState;
    (o = 0), (d = u = c = null), (l = i);
    do {
      var h = l.lane,
        m = l.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((h = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, h);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (h = typeof y == "function" ? y.call(m, f, h) : y),
                h == null)
              )
                break e;
              f = ve({}, f, h);
              break e;
            case 2:
              ir = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [l]) : h.push(l));
      } else
        (m = {
          eventTime: m,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = m), (c = f)) : (d = d.next = m),
          (o |= h);
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = f),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (ps |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function y0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(A(191, s));
        s.call(r);
      }
    }
}
var Sa = {},
  Sn = Fr(Sa),
  Ko = Fr(Sa),
  Yo = Fr(Sa);
function Xr(e) {
  if (e === Sa) throw Error(A(174));
  return e;
}
function $h(e, t) {
  switch ((ce(Yo, t), ce(Ko, e), ce(Sn, Sa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ad(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ad(t, e));
  }
  fe(Sn), ce(Sn, t);
}
function Ci() {
  fe(Sn), fe(Ko), fe(Yo);
}
function qx(e) {
  Xr(Yo.current);
  var t = Xr(Sn.current),
    n = Ad(t, e.type);
  t !== n && (ce(Ko, e), ce(Sn, n));
}
function Hh(e) {
  Ko.current === e && (fe(Sn), fe(Ko));
}
var pe = Fr(0);
function ac(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fu = [];
function qh() {
  for (var e = 0; e < Fu.length; e++)
    Fu[e]._workInProgressVersionPrimary = null;
  Fu.length = 0;
}
var kl = Kn.ReactCurrentDispatcher,
  Iu = Kn.ReactCurrentBatchConfig,
  ms = 0,
  ye = null,
  Oe = null,
  Fe = null,
  lc = !1,
  Eo = !1,
  Qo = 0,
  ak = 0;
function We() {
  throw Error(A(321));
}
function Wh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!an(e[n], t[n])) return !1;
  return !0;
}
function Kh(e, t, n, r, s, i) {
  if (
    ((ms = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? dk : fk),
    (e = n(r, s)),
    Eo)
  ) {
    i = 0;
    do {
      if (((Eo = !1), (Qo = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (Fe = Oe = null),
        (t.updateQueue = null),
        (kl.current = hk),
        (e = n(r, s));
    } while (Eo);
  }
  if (
    ((kl.current = cc),
    (t = Oe !== null && Oe.next !== null),
    (ms = 0),
    (Fe = Oe = ye = null),
    (lc = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function Yh() {
  var e = Qo !== 0;
  return (Qo = 0), e;
}
function hn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (ye.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function Wt() {
  if (Oe === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Fe === null ? ye.memoizedState : Fe.next;
  if (t !== null) (Fe = t), (Oe = e);
  else {
    if (e === null) throw Error(A(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Fe === null ? (ye.memoizedState = Fe = e) : (Fe = Fe.next = e);
  }
  return Fe;
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bu(e) {
  var t = Wt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Oe,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var l = (o = null),
      c = null,
      u = i;
    do {
      var d = u.lane;
      if ((ms & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((l = c = f), (o = r)) : (c = c.next = f),
          (ye.lanes |= d),
          (ps |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    c === null ? (o = r) : (c.next = l),
      an(r, t.memoizedState) || (pt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (ye.lanes |= i), (ps |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zu(e) {
  var t = Wt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    an(i, t.memoizedState) || (pt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Wx() {}
function Kx(e, t) {
  var n = ye,
    r = Wt(),
    s = t(),
    i = !an(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (pt = !0)),
    (r = r.queue),
    Qh(Gx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xo(9, Qx.bind(null, n, r, s, t), void 0, null),
      Ie === null)
    )
      throw Error(A(349));
    ms & 30 || Yx(n, t, s);
  }
  return s;
}
function Yx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Qx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xx(t) && Jx(e);
}
function Gx(e, t, n) {
  return n(function () {
    Xx(t) && Jx(e);
  });
}
function Xx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !an(e, n);
  } catch {
    return !0;
  }
}
function Jx(e) {
  var t = Un(e, 1);
  t !== null && on(t, e, 1, -1);
}
function x0(e) {
  var t = hn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = uk.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zx() {
  return Wt().memoizedState;
}
function Cl(e, t, n, r) {
  var s = hn();
  (ye.flags |= e),
    (s.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function zc(e, t, n, r) {
  var s = Wt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Oe !== null) {
    var o = Oe.memoizedState;
    if (((i = o.destroy), r !== null && Wh(r, o.deps))) {
      s.memoizedState = Xo(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (s.memoizedState = Xo(1 | t, n, i, r));
}
function v0(e, t) {
  return Cl(8390656, 8, e, t);
}
function Qh(e, t) {
  return zc(2048, 8, e, t);
}
function e2(e, t) {
  return zc(4, 2, e, t);
}
function t2(e, t) {
  return zc(4, 4, e, t);
}
function n2(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function r2(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zc(4, 4, n2.bind(null, t, e), n)
  );
}
function Gh() {}
function s2(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function i2(e, t) {
  var n = Wt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function o2(e, t, n) {
  return ms & 21
    ? (an(n, t) || ((n = dx()), (ye.lanes |= n), (ps |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pt = !0)), (e.memoizedState = n));
}
function lk(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Iu.transition;
  Iu.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (Iu.transition = r);
  }
}
function a2() {
  return Wt().memoizedState;
}
function ck(e, t, n) {
  var r = Nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    l2(e))
  )
    c2(t, n);
  else if (((n = $x(e, t, n, r)), n !== null)) {
    var s = ot();
    on(n, e, r, s), u2(n, t, r);
  }
}
function uk(e, t, n) {
  var r = Nr(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (l2(e)) c2(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), an(l, o))) {
          var c = t.interleaved;
          c === null
            ? ((s.next = s), Vh(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = $x(e, t, s, r)),
      n !== null && ((s = ot()), on(n, e, r, s), u2(n, t, r));
  }
}
function l2(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function c2(e, t) {
  Eo = lc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function u2(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), jh(e, n);
  }
}
var cc = {
    readContext: qt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  dk = {
    readContext: qt,
    useCallback: function (e, t) {
      return (hn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qt,
    useEffect: v0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Cl(4194308, 4, n2.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Cl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Cl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = hn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = hn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ck.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = hn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: x0,
    useDebugValue: Gh,
    useDeferredValue: function (e) {
      return (hn().memoizedState = e);
    },
    useTransition: function () {
      var e = x0(!1),
        t = e[0];
      return (e = lk.bind(null, e[1])), (hn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        s = hn();
      if (me) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(A(349));
        ms & 30 || Yx(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        v0(Gx.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xo(9, Qx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = hn(),
        t = Ie.identifierPrefix;
      if (me) {
        var n = Ln,
          r = Dn;
        (n = (r & ~(1 << (32 - sn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ak++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fk = {
    readContext: qt,
    useCallback: s2,
    useContext: qt,
    useEffect: Qh,
    useImperativeHandle: r2,
    useInsertionEffect: e2,
    useLayoutEffect: t2,
    useMemo: i2,
    useReducer: Bu,
    useRef: Zx,
    useState: function () {
      return Bu(Go);
    },
    useDebugValue: Gh,
    useDeferredValue: function (e) {
      var t = Wt();
      return o2(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Bu(Go)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Wx,
    useSyncExternalStore: Kx,
    useId: a2,
    unstable_isNewReconciler: !1,
  },
  hk = {
    readContext: qt,
    useCallback: s2,
    useContext: qt,
    useEffect: Qh,
    useImperativeHandle: r2,
    useInsertionEffect: e2,
    useLayoutEffect: t2,
    useMemo: i2,
    useReducer: zu,
    useRef: Zx,
    useState: function () {
      return zu(Go);
    },
    useDebugValue: Gh,
    useDeferredValue: function (e) {
      var t = Wt();
      return Oe === null ? (t.memoizedState = e) : o2(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = zu(Go)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: Wx,
    useSyncExternalStore: Kx,
    useId: a2,
    unstable_isNewReconciler: !1,
  };
function Jt(e, t) {
  if (e && e.defaultProps) {
    (t = ve({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ws(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      s = Nr(e),
      i = Fn(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Cr(e, i, s)),
      t !== null && (on(t, e, s, r), Sl(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      s = Nr(e),
      i = Fn(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Cr(e, i, s)),
      t !== null && (on(t, e, s, r), Sl(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot(),
      r = Nr(e),
      s = Fn(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = Cr(e, s, r)),
      t !== null && (on(t, e, r, n), Sl(t, e, r));
  },
};
function w0(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$o(n, r) || !$o(s, i)
      : !0
  );
}
function d2(e, t, n) {
  var r = !1,
    s = _r,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = qt(i))
      : ((s = xt(t) ? fs : Ze.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? bi(e, s) : _r)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function b0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vc.enqueueReplaceState(t, t.state, null);
}
function Jd(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Uh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = qt(i))
    : ((i = xt(t) ? fs : Ze.current), (s.context = bi(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xd(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Vc.enqueueReplaceState(s, s.state, null),
      oc(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t) {
  try {
    var n = "",
      r = t;
    do (n += VS(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Vu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mk = typeof WeakMap == "function" ? WeakMap : Map;
function f2(e, t, n) {
  (n = Fn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dc || ((dc = !0), (uf = r)), Zd(e, t);
    }),
    n
  );
}
function h2(e, t, n) {
  (n = Fn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Zd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Zd(e, t),
          typeof r != "function" &&
            (Er === null ? (Er = new Set([this])) : Er.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function S0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mk();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = Tk.bind(null, e, t, n)), t.then(e, e));
}
function k0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function C0(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Fn(-1, 1)), (t.tag = 2), Cr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pk = Kn.ReactCurrentOwner,
  pt = !1;
function st(e, t, n, r) {
  t.child = e === null ? Ux(t, null, n, r) : ki(t, e.child, n, r);
}
function E0(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    ni(t, s),
    (r = Kh(e, t, n, r, i, s)),
    (n = Yh()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        $n(e, t, s))
      : (me && n && Dh(t), (t.flags |= 1), st(e, t, r, s), t.child)
  );
}
function N0(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !sm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), m2(e, t, i, r, s))
      : ((e = Tl(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $o), n(o, r) && e.ref === t.ref)
    )
      return $n(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = jr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function m2(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($o(i, r) && e.ref === t.ref)
      if (((pt = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (pt = !0);
      else return (t.lanes = e.lanes), $n(e, t, s);
  }
  return ef(e, t, n, r, s);
}
function p2(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(Ws, Nt),
        (Nt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(Ws, Nt),
          (Nt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ce(Ws, Nt),
        (Nt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(Ws, Nt),
      (Nt |= r);
  return st(e, t, s, n), t.child;
}
function g2(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ef(e, t, n, r, s) {
  var i = xt(n) ? fs : Ze.current;
  return (
    (i = bi(t, i)),
    ni(t, s),
    (n = Kh(e, t, n, r, i, s)),
    (r = Yh()),
    e !== null && !pt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        $n(e, t, s))
      : (me && r && Dh(t), (t.flags |= 1), st(e, t, n, s), t.child)
  );
}
function j0(e, t, n, r, s) {
  if (xt(n)) {
    var i = !0;
    tc(t);
  } else i = !1;
  if ((ni(t, s), t.stateNode === null))
    El(e, t), d2(t, n, r), Jd(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var c = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qt(u))
      : ((u = xt(n) ? fs : Ze.current), (u = bi(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && b0(t, o, r, u)),
      (ir = !1);
    var h = t.memoizedState;
    (o.state = h),
      oc(t, r, o, s),
      (c = t.memoizedState),
      l !== r || h !== c || yt.current || ir
        ? (typeof d == "function" && (Xd(t, n, d, r), (c = t.memoizedState)),
          (l = ir || w0(t, n, l, r, h, c, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (o.props = r),
          (o.state = c),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Hx(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Jt(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (h = o.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = qt(c))
        : ((c = xt(n) ? fs : Ze.current), (c = bi(t, c)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || h !== c) && b0(t, o, r, c)),
      (ir = !1),
      (h = t.memoizedState),
      (o.state = h),
      oc(t, r, o, s);
    var y = t.memoizedState;
    l !== f || h !== y || yt.current || ir
      ? (typeof m == "function" && (Xd(t, n, m, r), (y = t.memoizedState)),
        (u = ir || w0(t, n, u, r, h, y, c) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, c),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, c)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = c),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return tf(e, t, n, r, i, s);
}
function tf(e, t, n, r, s, i) {
  g2(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && f0(t, n, !1), $n(e, t, i);
  (r = t.stateNode), (pk.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ki(t, e.child, null, i)), (t.child = ki(t, null, l, i)))
      : st(e, t, l, i),
    (t.memoizedState = r.state),
    s && f0(t, n, !0),
    t.child
  );
}
function y2(e) {
  var t = e.stateNode;
  t.pendingContext
    ? d0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && d0(e, t.context, !1),
    $h(e, t.containerInfo);
}
function T0(e, t, n, r, s) {
  return Si(), Fh(s), (t.flags |= 256), st(e, t, n, r), t.child;
}
var nf = { dehydrated: null, treeContext: null, retryLane: 0 };
function rf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function x2(e, t, n) {
  var r = t.pendingProps,
    s = pe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ce(pe, s & 1),
    e === null)
  )
    return (
      Qd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Hc(o, r, 0, null)),
              (e = cs(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = rf(n)),
              (t.memoizedState = nf),
              e)
            : Xh(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return gk(e, t, o, r, l, s, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (s = e.child), (l = s.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = jr(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (i = jr(l, i)) : ((i = cs(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? rf(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = nf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = jr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xh(e, t) {
  return (
    (t = Hc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function tl(e, t, n, r) {
  return (
    r !== null && Fh(r),
    ki(t, e.child, null, n),
    (e = Xh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gk(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Vu(Error(A(422)))), tl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (s = t.mode),
        (r = Hc({ mode: "visible", children: r.children }, s, 0, null)),
        (i = cs(i, s, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ki(t, e.child, null, o),
        (t.child.memoizedState = rf(o)),
        (t.memoizedState = nf),
        i);
  if (!(t.mode & 1)) return tl(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(A(419))), (r = Vu(i, r, void 0)), tl(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), pt || l)) {
    if (((r = Ie), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), Un(e, s), on(r, e, s, -1));
    }
    return rm(), (r = Vu(Error(A(421)))), tl(e, t, o, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Pk.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (jt = kr(s.nextSibling)),
      (Tt = t),
      (me = !0),
      (nn = null),
      e !== null &&
        ((Bt[zt++] = Dn),
        (Bt[zt++] = Ln),
        (Bt[zt++] = hs),
        (Dn = e.id),
        (Ln = e.overflow),
        (hs = t)),
      (t = Xh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function P0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gd(e.return, t, n);
}
function Uu(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function v2(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((st(e, t, r.children, n), (r = pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && P0(e, n, t);
        else if (e.tag === 19) P0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && ac(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Uu(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ac(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Uu(t, !0, n, null, i);
        break;
      case "together":
        Uu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function El(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ps |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yk(e, t, n) {
  switch (t.tag) {
    case 3:
      y2(t), Si();
      break;
    case 5:
      qx(t);
      break;
    case 1:
      xt(t.type) && tc(t);
      break;
    case 4:
      $h(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      ce(sc, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(pe, pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? x2(e, t, n)
          : (ce(pe, pe.current & 1),
            (e = $n(e, t, n)),
            e !== null ? e.sibling : null);
      ce(pe, pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return v2(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ce(pe, pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), p2(e, t, n);
  }
  return $n(e, t, n);
}
var w2, sf, b2, S2;
w2 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
sf = function () {};
b2 = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Xr(Sn.current);
    var i = null;
    switch (n) {
      case "input":
        (s = Nd(e, s)), (r = Nd(e, r)), (i = []);
        break;
      case "select":
        (s = ve({}, s, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = Pd(e, s)), (r = Pd(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zl);
    }
    _d(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Lo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (c && c.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in c)
              c.hasOwnProperty(o) &&
                l[o] !== c[o] &&
                (n || (n = {}), (n[o] = c[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (i = i || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Lo.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && de("scroll", e),
                  i || l === c || (i = []))
                : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
S2 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xi(e, t) {
  if (!me)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xk(e, t, n) {
  var r = t.pendingProps;
  switch ((Lh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ke(t), null;
    case 1:
      return xt(t.type) && ec(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ci(),
        fe(yt),
        fe(Ze),
        qh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Za(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nn !== null && (hf(nn), (nn = null)))),
        sf(e, t),
        Ke(t),
        null
      );
    case 5:
      Hh(t);
      var s = Xr(Yo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        b2(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ke(t), null;
        }
        if (((e = Xr(Sn.current)), Za(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[xn] = t), (r[Wo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              de("cancel", r), de("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < po.length; s++) de(po[s], r);
              break;
            case "source":
              de("error", r);
              break;
            case "img":
            case "image":
            case "link":
              de("error", r), de("load", r);
              break;
            case "details":
              de("toggle", r);
              break;
            case "input":
              Ip(r, i), de("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                de("invalid", r);
              break;
            case "textarea":
              zp(r, i), de("invalid", r);
          }
          _d(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var l = i[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ja(r.textContent, l, e),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ja(r.textContent, l, e),
                    (s = ["children", "" + l]))
                : Lo.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  de("scroll", r);
            }
          switch (n) {
            case "input":
              Ha(r), Bp(r, i, !0);
              break;
            case "textarea":
              Ha(r), Vp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Zl);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = G1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[xn] = t),
            (e[Wo] = r),
            w2(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Rd(n, r)), n)) {
              case "dialog":
                de("cancel", e), de("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                de("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < po.length; s++) de(po[s], e);
                s = r;
                break;
              case "source":
                de("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                de("error", e), de("load", e), (s = r);
                break;
              case "details":
                de("toggle", e), (s = r);
                break;
              case "input":
                Ip(e, r), (s = Nd(e, r)), de("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = ve({}, r, { value: void 0 })),
                  de("invalid", e);
                break;
              case "textarea":
                zp(e, r), (s = Pd(e, r)), de("invalid", e);
                break;
              default:
                s = r;
            }
            _d(n, s), (l = s);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var c = l[i];
                i === "style"
                  ? Z1(e, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && X1(e, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && Fo(e, c)
                    : typeof c == "number" && Fo(e, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Lo.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && de("scroll", e)
                      : c != null && bh(e, i, c, o));
              }
            switch (n) {
              case "input":
                Ha(e), Bp(e, r, !1);
                break;
              case "textarea":
                Ha(e), Vp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ar(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Js(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Js(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Zl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) S2(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = Xr(Yo.current)), Xr(Sn.current), Za(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xn] = t),
            (i = r.nodeValue !== n) && ((e = Tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ja(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ja(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xn] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (fe(pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && jt !== null && t.mode & 1 && !(t.flags & 128))
          zx(), Si(), (t.flags |= 98560), (i = !1);
        else if (((i = Za(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[xn] = t;
          } else
            Si(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (i = !1);
        } else nn !== null && (hf(nn), (nn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || pe.current & 1 ? De === 0 && (De = 3) : rm())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        Ci(), sf(e, t), e === null && Ho(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return zh(t.type._context), Ke(t), null;
    case 17:
      return xt(t.type) && ec(), Ke(t), null;
    case 19:
      if ((fe(pe), (i = t.memoizedState), i === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Xi(i, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ac(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Xi(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(pe, (pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            je() > Ni &&
            ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ac(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !me)
            )
              return Ke(t), null;
          } else
            2 * je() - i.renderingStartTime > Ni &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = je()),
          (t.sibling = null),
          (n = pe.current),
          ce(pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        nm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Nt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function vk(e, t) {
  switch ((Lh(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && ec(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ci(),
        fe(yt),
        fe(Ze),
        qh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hh(t), null;
    case 13:
      if (
        (fe(pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Si();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(pe), null;
    case 4:
      return Ci(), null;
    case 10:
      return zh(t.type._context), null;
    case 22:
    case 23:
      return nm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var nl = !1,
  Xe = !1,
  wk = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function qs(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
    else n.current = null;
}
function of(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var A0 = !1;
function bk(e, t) {
  if (((Ud = Gl), (e = jx()), Mh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (s !== 0 && f.nodeType !== 3) || (l = o + s),
                f !== i || (r !== 0 && f.nodeType !== 3) || (c = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (h = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++u === s && (l = o),
                h === i && ++d === r && (c = o),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($d = { focusedElem: e, selectionRange: n }, Gl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Jt(t.type, v),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (S) {
          ke(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = A0), (A0 = !1), y;
}
function No(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && of(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function Uc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function af(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function k2(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), k2(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xn], delete t[Wo], delete t[Wd], delete t[rk], delete t[sk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function C2(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || C2(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lf(e, t, n), e = e.sibling; e !== null; ) lf(e, t, n), (e = e.sibling);
}
function cf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cf(e, t, n), e = e.sibling; e !== null; ) cf(e, t, n), (e = e.sibling);
}
var ze = null,
  en = !1;
function Zn(e, t, n) {
  for (n = n.child; n !== null; ) E2(e, t, n), (n = n.sibling);
}
function E2(e, t, n) {
  if (bn && typeof bn.onCommitFiberUnmount == "function")
    try {
      bn.onCommitFiberUnmount(Mc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || qs(n, t);
    case 6:
      var r = ze,
        s = en;
      (ze = null),
        Zn(e, t, n),
        (ze = r),
        (en = s),
        ze !== null &&
          (en
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (en
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? Du(e.parentNode, n)
              : e.nodeType === 1 && Du(e, n),
            Vo(e))
          : Du(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (s = en),
        (ze = n.stateNode.containerInfo),
        (en = !0),
        Zn(e, t, n),
        (ze = r),
        (en = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && of(n, t, o),
            (s = s.next);
        } while (s !== r);
      }
      Zn(e, t, n);
      break;
    case 1:
      if (
        !Xe &&
        (qs(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ke(n, t, l);
        }
      Zn(e, t, n);
      break;
    case 21:
      Zn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Xe = (r = Xe) || n.memoizedState !== null), Zn(e, t, n), (Xe = r))
        : Zn(e, t, n);
      break;
    default:
      Zn(e, t, n);
  }
}
function R0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wk()),
      t.forEach(function (r) {
        var s = Ak.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Qt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ze = l.stateNode), (en = !1);
              break e;
            case 3:
              (ze = l.stateNode.containerInfo), (en = !0);
              break e;
            case 4:
              (ze = l.stateNode.containerInfo), (en = !0);
              break e;
          }
          l = l.return;
        }
        if (ze === null) throw Error(A(160));
        E2(i, o, s), (ze = null), (en = !1);
        var c = s.alternate;
        c !== null && (c.return = null), (s.return = null);
      } catch (u) {
        ke(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) N2(t, e), (t = t.sibling);
}
function N2(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qt(t, e), fn(e), r & 4)) {
        try {
          No(3, e, e.return), Uc(3, e);
        } catch (v) {
          ke(e, e.return, v);
        }
        try {
          No(5, e, e.return);
        } catch (v) {
          ke(e, e.return, v);
        }
      }
      break;
    case 1:
      Qt(t, e), fn(e), r & 512 && n !== null && qs(n, n.return);
      break;
    case 5:
      if (
        (Qt(t, e),
        fn(e),
        r & 512 && n !== null && qs(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Fo(s, "");
        } catch (v) {
          ke(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Y1(s, i),
              Rd(l, o);
            var u = Rd(l, i);
            for (o = 0; o < c.length; o += 2) {
              var d = c[o],
                f = c[o + 1];
              d === "style"
                ? Z1(s, f)
                : d === "dangerouslySetInnerHTML"
                ? X1(s, f)
                : d === "children"
                ? Fo(s, f)
                : bh(s, d, f, u);
            }
            switch (l) {
              case "input":
                jd(s, i);
                break;
              case "textarea":
                Q1(s, i);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Js(s, !!i.multiple, m, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Js(s, !!i.multiple, i.defaultValue, !0)
                      : Js(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[Wo] = i;
          } catch (v) {
            ke(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qt(t, e), fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          ke(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qt(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vo(t.containerInfo);
        } catch (v) {
          ke(e, e.return, v);
        }
      break;
    case 4:
      Qt(t, e), fn(e);
      break;
    case 13:
      Qt(t, e),
        fn(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (em = je())),
        r & 4 && R0(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xe = (u = Xe) || d), Qt(t, e), (Xe = u)) : Qt(t, e),
        fn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (f = L = d; L !== null; ) {
              switch (((h = L), (m = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  No(4, h, h.return);
                  break;
                case 1:
                  qs(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      ke(r, n, v);
                    }
                  }
                  break;
                case 5:
                  qs(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    M0(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = h), (L = m)) : M0(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (s = f.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (o =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = J1("display", o)));
              } catch (v) {
                ke(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                ke(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Qt(t, e), fn(e), r & 4 && R0(e);
      break;
    case 21:
      break;
    default:
      Qt(t, e), fn(e);
  }
}
function fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (C2(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Fo(s, ""), (r.flags &= -33));
          var i = _0(e);
          cf(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = _0(e);
          lf(e, l, o);
          break;
        default:
          throw Error(A(161));
      }
    } catch (c) {
      ke(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sk(e, t, n) {
  (L = e), j2(e);
}
function j2(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var s = L,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || nl;
      if (!o) {
        var l = s.alternate,
          c = (l !== null && l.memoizedState !== null) || Xe;
        l = nl;
        var u = Xe;
        if (((nl = o), (Xe = c) && !u))
          for (L = s; L !== null; )
            (o = L),
              (c = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? D0(s)
                : c !== null
                ? ((c.return = o), (L = c))
                : D0(s);
        for (; i !== null; ) (L = i), j2(i), (i = i.sibling);
        (L = s), (nl = l), (Xe = u);
      }
      O0(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (L = i)) : O0(e);
  }
}
function O0(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || Uc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && y0(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                y0(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Vo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        Xe || (t.flags & 512 && af(t));
      } catch (h) {
        ke(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function M0(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function D0(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Uc(4, t);
          } catch (c) {
            ke(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ke(t, s, c);
            }
          }
          var i = t.return;
          try {
            af(t);
          } catch (c) {
            ke(t, i, c);
          }
          break;
        case 5:
          var o = t.return;
          try {
            af(t);
          } catch (c) {
            ke(t, o, c);
          }
      }
    } catch (c) {
      ke(t, t.return, c);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var kk = Math.ceil,
  uc = Kn.ReactCurrentDispatcher,
  Jh = Kn.ReactCurrentOwner,
  $t = Kn.ReactCurrentBatchConfig,
  te = 0,
  Ie = null,
  Pe = null,
  $e = 0,
  Nt = 0,
  Ws = Fr(0),
  De = 0,
  Jo = null,
  ps = 0,
  $c = 0,
  Zh = 0,
  jo = null,
  mt = null,
  em = 0,
  Ni = 1 / 0,
  Rn = null,
  dc = !1,
  uf = null,
  Er = null,
  rl = !1,
  xr = null,
  fc = 0,
  To = 0,
  df = null,
  Nl = -1,
  jl = 0;
function ot() {
  return te & 6 ? je() : Nl !== -1 ? Nl : (Nl = je());
}
function Nr(e) {
  return e.mode & 1
    ? te & 2 && $e !== 0
      ? $e & -$e
      : ok.transition !== null
      ? (jl === 0 && (jl = dx()), jl)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xx(e.type))),
        e)
    : 1;
}
function on(e, t, n, r) {
  if (50 < To) throw ((To = 0), (df = null), Error(A(185)));
  va(e, n, r),
    (!(te & 2) || e !== Ie) &&
      (e === Ie && (!(te & 2) && ($c |= n), De === 4 && ar(e, $e)),
      vt(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((Ni = je() + 500), Bc && Ir()));
}
function vt(e, t) {
  var n = e.callbackNode;
  o3(e, t);
  var r = Ql(e, e === Ie ? $e : 0);
  if (r === 0)
    n !== null && Hp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hp(n), t === 1))
      e.tag === 0 ? ik(L0.bind(null, e)) : Fx(L0.bind(null, e)),
        tk(function () {
          !(te & 6) && Ir();
        }),
        (n = null);
    else {
      switch (fx(r)) {
        case 1:
          n = Nh;
          break;
        case 4:
          n = cx;
          break;
        case 16:
          n = Yl;
          break;
        case 536870912:
          n = ux;
          break;
        default:
          n = Yl;
      }
      n = D2(n, T2.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function T2(e, t) {
  if (((Nl = -1), (jl = 0), te & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (ri() && e.callbackNode !== n) return null;
  var r = Ql(e, e === Ie ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hc(e, r);
  else {
    t = r;
    var s = te;
    te |= 2;
    var i = A2();
    (Ie !== e || $e !== t) && ((Rn = null), (Ni = je() + 500), ls(e, t));
    do
      try {
        Nk();
        break;
      } catch (l) {
        P2(e, l);
      }
    while (!0);
    Bh(),
      (uc.current = i),
      (te = s),
      Pe !== null ? (t = 0) : ((Ie = null), ($e = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Fd(e)), s !== 0 && ((r = s), (t = ff(e, s)))), t === 1)
    )
      throw ((n = Jo), ls(e, 0), ar(e, r), vt(e, je()), n);
    if (t === 6) ar(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Ck(s) &&
          ((t = hc(e, r)),
          t === 2 && ((i = Fd(e)), i !== 0 && ((r = i), (t = ff(e, i)))),
          t === 1))
      )
        throw ((n = Jo), ls(e, 0), ar(e, r), vt(e, je()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          qr(e, mt, Rn);
          break;
        case 3:
          if (
            (ar(e, r), (r & 130023424) === r && ((t = em + 500 - je()), 10 < t))
          ) {
            if (Ql(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              ot(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = qd(qr.bind(null, e, mt, Rn), t);
            break;
          }
          qr(e, mt, Rn);
          break;
        case 4:
          if ((ar(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - sn(r);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * kk(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qd(qr.bind(null, e, mt, Rn), r);
            break;
          }
          qr(e, mt, Rn);
          break;
        case 5:
          qr(e, mt, Rn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return vt(e, je()), e.callbackNode === n ? T2.bind(null, e) : null;
}
function ff(e, t) {
  var n = jo;
  return (
    e.current.memoizedState.isDehydrated && (ls(e, t).flags |= 256),
    (e = hc(e, t)),
    e !== 2 && ((t = mt), (mt = n), t !== null && hf(t)),
    e
  );
}
function hf(e) {
  mt === null ? (mt = e) : mt.push.apply(mt, e);
}
function Ck(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!an(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ar(e, t) {
  for (
    t &= ~Zh,
      t &= ~$c,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - sn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function L0(e) {
  if (te & 6) throw Error(A(327));
  ri();
  var t = Ql(e, 0);
  if (!(t & 1)) return vt(e, je()), null;
  var n = hc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fd(e);
    r !== 0 && ((t = r), (n = ff(e, r)));
  }
  if (n === 1) throw ((n = Jo), ls(e, 0), ar(e, t), vt(e, je()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    qr(e, mt, Rn),
    vt(e, je()),
    null
  );
}
function tm(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((Ni = je() + 500), Bc && Ir());
  }
}
function gs(e) {
  xr !== null && xr.tag === 0 && !(te & 6) && ri();
  var t = te;
  te |= 1;
  var n = $t.transition,
    r = se;
  try {
    if ((($t.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), ($t.transition = n), (te = t), !(te & 6) && Ir();
  }
}
function nm() {
  (Nt = Ws.current), fe(Ws);
}
function ls(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ek(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((Lh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ec();
          break;
        case 3:
          Ci(), fe(yt), fe(Ze), qh();
          break;
        case 5:
          Hh(r);
          break;
        case 4:
          Ci();
          break;
        case 13:
          fe(pe);
          break;
        case 19:
          fe(pe);
          break;
        case 10:
          zh(r.type._context);
          break;
        case 22:
        case 23:
          nm();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (Pe = e = jr(e.current, null)),
    ($e = Nt = t),
    (De = 0),
    (Jo = null),
    (Zh = $c = ps = 0),
    (mt = jo = null),
    Gr !== null)
  ) {
    for (t = 0; t < Gr.length; t++)
      if (((n = Gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    Gr = null;
  }
  return e;
}
function P2(e, t) {
  do {
    var n = Pe;
    try {
      if ((Bh(), (kl.current = cc), lc)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        lc = !1;
      }
      if (
        ((ms = 0),
        (Fe = Oe = ye = null),
        (Eo = !1),
        (Qo = 0),
        (Jh.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (Jo = t), (Pe = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          l = n,
          c = t;
        if (
          ((t = $e),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = k0(o);
          if (m !== null) {
            (m.flags &= -257),
              C0(m, o, l, i, t),
              m.mode & 1 && S0(i, u, t),
              (t = m),
              (c = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(c), (t.updateQueue = v);
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              S0(i, u, t), rm();
              break e;
            }
            c = Error(A(426));
          }
        } else if (me && l.mode & 1) {
          var w = k0(o);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              C0(w, o, l, i, t),
              Fh(Ei(c, l));
            break e;
          }
        }
        (i = c = Ei(c, l)),
          De !== 4 && (De = 2),
          jo === null ? (jo = [i]) : jo.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = f2(i, c, t);
              g0(i, g);
              break e;
            case 1:
              l = c;
              var p = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Er === null || !Er.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = h2(i, l, t);
                g0(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      R2(n);
    } catch (C) {
      (t = C), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function A2() {
  var e = uc.current;
  return (uc.current = cc), e === null ? cc : e;
}
function rm() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    Ie === null || (!(ps & 268435455) && !($c & 268435455)) || ar(Ie, $e);
}
function hc(e, t) {
  var n = te;
  te |= 2;
  var r = A2();
  (Ie !== e || $e !== t) && ((Rn = null), ls(e, t));
  do
    try {
      Ek();
      break;
    } catch (s) {
      P2(e, s);
    }
  while (!0);
  if ((Bh(), (te = n), (uc.current = r), Pe !== null)) throw Error(A(261));
  return (Ie = null), ($e = 0), De;
}
function Ek() {
  for (; Pe !== null; ) _2(Pe);
}
function Nk() {
  for (; Pe !== null && !XS(); ) _2(Pe);
}
function _2(e) {
  var t = M2(e.alternate, e, Nt);
  (e.memoizedProps = e.pendingProps),
    t === null ? R2(e) : (Pe = t),
    (Jh.current = null);
}
function R2(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = vk(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (Pe = null);
        return;
      }
    } else if (((n = xk(n, t, Nt)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function qr(e, t, n) {
  var r = se,
    s = $t.transition;
  try {
    ($t.transition = null), (se = 1), jk(e, t, n, r);
  } finally {
    ($t.transition = s), (se = r);
  }
  return null;
}
function jk(e, t, n, r) {
  do ri();
  while (xr !== null);
  if (te & 6) throw Error(A(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (a3(e, i),
    e === Ie && ((Pe = Ie = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      rl ||
      ((rl = !0),
      D2(Yl, function () {
        return ri(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = $t.transition), ($t.transition = null);
    var o = se;
    se = 1;
    var l = te;
    (te |= 4),
      (Jh.current = null),
      bk(e, n),
      N2(n, e),
      K3($d),
      (Gl = !!Ud),
      ($d = Ud = null),
      (e.current = n),
      Sk(n),
      JS(),
      (te = l),
      (se = o),
      ($t.transition = i);
  } else e.current = n;
  if (
    (rl && ((rl = !1), (xr = e), (fc = s)),
    (i = e.pendingLanes),
    i === 0 && (Er = null),
    t3(n.stateNode),
    vt(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (dc) throw ((dc = !1), (e = uf), (uf = null), e);
  return (
    fc & 1 && e.tag !== 0 && ri(),
    (i = e.pendingLanes),
    i & 1 ? (e === df ? To++ : ((To = 0), (df = e))) : (To = 0),
    Ir(),
    null
  );
}
function ri() {
  if (xr !== null) {
    var e = fx(fc),
      t = $t.transition,
      n = se;
    try {
      if ((($t.transition = null), (se = 16 > e ? 16 : e), xr === null))
        var r = !1;
      else {
        if (((e = xr), (xr = null), (fc = 0), te & 6)) throw Error(A(331));
        var s = te;
        for (te |= 4, L = e.current; L !== null; ) {
          var i = L,
            o = i.child;
          if (L.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      No(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (L = f);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var h = d.sibling,
                        m = d.return;
                      if ((k2(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = m), (L = h);
                        break;
                      }
                      L = m;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (L = o);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    No(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (L = g);
                break e;
              }
              L = i.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          o = L;
          var x = o.child;
          if (o.subtreeFlags & 2064 && x !== null) (x.return = o), (L = x);
          else
            e: for (o = p; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uc(9, l);
                  }
                } catch (C) {
                  ke(l, l.return, C);
                }
              if (l === o) {
                L = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (L = S);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((te = s), Ir(), bn && typeof bn.onPostCommitFiberRoot == "function")
        )
          try {
            bn.onPostCommitFiberRoot(Mc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), ($t.transition = t);
    }
  }
  return !1;
}
function F0(e, t, n) {
  (t = Ei(n, t)),
    (t = f2(e, t, 1)),
    (e = Cr(e, t, 1)),
    (t = ot()),
    e !== null && (va(e, 1, t), vt(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) F0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        F0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Er === null || !Er.has(r)))
        ) {
          (e = Ei(n, e)),
            (e = h2(t, e, 1)),
            (t = Cr(t, e, 1)),
            (e = ot()),
            t !== null && (va(t, 1, e), vt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Tk(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      ($e & n) === n &&
      (De === 4 || (De === 3 && ($e & 130023424) === $e && 500 > je() - em)
        ? ls(e, 0)
        : (Zh |= n)),
    vt(e, t);
}
function O2(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ka), (Ka <<= 1), !(Ka & 130023424) && (Ka = 4194304))
      : (t = 1));
  var n = ot();
  (e = Un(e, t)), e !== null && (va(e, t, n), vt(e, n));
}
function Pk(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), O2(e, n);
}
function Ak(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), O2(e, n);
}
var M2;
M2 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || yt.current) pt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pt = !1), yk(e, t, n);
      pt = !!(e.flags & 131072);
    }
  else (pt = !1), me && t.flags & 1048576 && Ix(t, rc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      El(e, t), (e = t.pendingProps);
      var s = bi(t, Ze.current);
      ni(t, n), (s = Kh(null, t, r, e, s, n));
      var i = Yh();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((i = !0), tc(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Uh(t),
            (s.updater = Vc),
            (t.stateNode = s),
            (s._reactInternals = t),
            Jd(t, r, e, n),
            (t = tf(null, t, r, !0, i, n)))
          : ((t.tag = 0), me && i && Dh(t), st(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (El(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Rk(r)),
          (e = Jt(r, e)),
          s)
        ) {
          case 0:
            t = ef(null, t, r, e, n);
            break e;
          case 1:
            t = j0(null, t, r, e, n);
            break e;
          case 11:
            t = E0(null, t, r, e, n);
            break e;
          case 14:
            t = N0(null, t, r, Jt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        ef(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        j0(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((y2(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          Hx(e, t),
          oc(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = Ei(Error(A(423)), t)), (t = T0(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Ei(Error(A(424)), t)), (t = T0(e, t, r, n, s));
            break e;
          } else
            for (
              jt = kr(t.stateNode.containerInfo.firstChild),
                Tt = t,
                me = !0,
                nn = null,
                n = Ux(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Si(), r === s)) {
            t = $n(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qx(t),
        e === null && Qd(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Hd(r, s) ? (o = null) : i !== null && Hd(r, i) && (t.flags |= 32),
        g2(e, t),
        st(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Qd(t), null;
    case 13:
      return x2(e, t, n);
    case 4:
      return (
        $h(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ki(t, null, r, n)) : st(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        E0(e, t, r, s, n)
      );
    case 7:
      return st(e, t, t.pendingProps, n), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          ce(sc, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (an(i.value, o)) {
            if (i.children === s.children && !yt.current) {
              t = $n(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                o = i.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      (c = Fn(-1, n & -n)), (c.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Gd(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(A(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Gd(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        st(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        ni(t, n),
        (s = qt(s)),
        (r = r(s)),
        (t.flags |= 1),
        st(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Jt(r, t.pendingProps)),
        (s = Jt(r.type, s)),
        N0(e, t, r, s, n)
      );
    case 15:
      return m2(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Jt(r, s)),
        El(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), tc(t)) : (e = !1),
        ni(t, n),
        d2(t, r, s),
        Jd(t, r, s, n),
        tf(null, t, r, !0, e, n)
      );
    case 19:
      return v2(e, t, n);
    case 22:
      return p2(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function D2(e, t) {
  return lx(e, t);
}
function _k(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ut(e, t, n, r) {
  return new _k(e, t, n, r);
}
function sm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rk(e) {
  if (typeof e == "function") return sm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === kh)) return 11;
    if (e === Ch) return 14;
  }
  return 2;
}
function jr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tl(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) sm(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ls:
        return cs(n.children, s, i, t);
      case Sh:
        (o = 8), (s |= 8);
        break;
      case Sd:
        return (
          (e = Ut(12, n, t, s | 2)), (e.elementType = Sd), (e.lanes = i), e
        );
      case kd:
        return (e = Ut(13, n, t, s)), (e.elementType = kd), (e.lanes = i), e;
      case Cd:
        return (e = Ut(19, n, t, s)), (e.elementType = Cd), (e.lanes = i), e;
      case q1:
        return Hc(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $1:
              o = 10;
              break e;
            case H1:
              o = 9;
              break e;
            case kh:
              o = 11;
              break e;
            case Ch:
              o = 14;
              break e;
            case sr:
              (o = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ut(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function cs(e, t, n, r) {
  return (e = Ut(7, e, r, t)), (e.lanes = n), e;
}
function Hc(e, t, n, r) {
  return (
    (e = Ut(22, e, r, t)),
    (e.elementType = q1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $u(e, t, n) {
  return (e = Ut(6, e, null, t)), (e.lanes = n), e;
}
function Hu(e, t, n) {
  return (
    (t = Ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ok(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Cu(0)),
    (this.expirationTimes = Cu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function im(e, t, n, r, s, i, o, l, c) {
  return (
    (e = new Ok(e, t, n, l, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ut(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uh(i),
    e
  );
}
function Mk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ds,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function L2(e) {
  if (!e) return _r;
  e = e._reactInternals;
  e: {
    if (ws(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return Lx(e, n, t);
  }
  return t;
}
function F2(e, t, n, r, s, i, o, l, c) {
  return (
    (e = im(n, r, !0, e, s, i, o, l, c)),
    (e.context = L2(null)),
    (n = e.current),
    (r = ot()),
    (s = Nr(n)),
    (i = Fn(r, s)),
    (i.callback = t ?? null),
    Cr(n, i, s),
    (e.current.lanes = s),
    va(e, s, r),
    vt(e, r),
    e
  );
}
function qc(e, t, n, r) {
  var s = t.current,
    i = ot(),
    o = Nr(s);
  return (
    (n = L2(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Fn(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cr(s, t, o)),
    e !== null && (on(e, s, o, i), Sl(e, s, o)),
    o
  );
}
function mc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function I0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function om(e, t) {
  I0(e, t), (e = e.alternate) && I0(e, t);
}
function Dk() {
  return null;
}
var I2 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function am(e) {
  this._internalRoot = e;
}
Wc.prototype.render = am.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  qc(e, t, null, null);
};
Wc.prototype.unmount = am.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gs(function () {
      qc(null, e, null, null);
    }),
      (t[Vn] = null);
  }
};
function Wc(e) {
  this._internalRoot = e;
}
Wc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = px();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < or.length && t !== 0 && t < or[n].priority; n++);
    or.splice(n, 0, e), n === 0 && yx(e);
  }
};
function lm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Kc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function B0() {}
function Lk(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = mc(o);
        i.call(u);
      };
    }
    var o = F2(t, r, e, 0, null, !1, !1, "", B0);
    return (
      (e._reactRootContainer = o),
      (e[Vn] = o.current),
      Ho(e.nodeType === 8 ? e.parentNode : e),
      gs(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = mc(c);
      l.call(u);
    };
  }
  var c = im(e, 0, !1, null, null, !1, !1, "", B0);
  return (
    (e._reactRootContainer = c),
    (e[Vn] = c.current),
    Ho(e.nodeType === 8 ? e.parentNode : e),
    gs(function () {
      qc(t, c, n, r);
    }),
    c
  );
}
function Yc(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = mc(o);
        l.call(c);
      };
    }
    qc(t, o, e, s);
  } else o = Lk(n, t, e, s, r);
  return mc(o);
}
hx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mo(t.pendingLanes);
        n !== 0 &&
          (jh(t, n | 1), vt(t, je()), !(te & 6) && ((Ni = je() + 500), Ir()));
      }
      break;
    case 13:
      gs(function () {
        var r = Un(e, 1);
        if (r !== null) {
          var s = ot();
          on(r, e, 1, s);
        }
      }),
        om(e, 1);
  }
};
Th = function (e) {
  if (e.tag === 13) {
    var t = Un(e, 134217728);
    if (t !== null) {
      var n = ot();
      on(t, e, 134217728, n);
    }
    om(e, 134217728);
  }
};
mx = function (e) {
  if (e.tag === 13) {
    var t = Nr(e),
      n = Un(e, t);
    if (n !== null) {
      var r = ot();
      on(n, e, t, r);
    }
    om(e, t);
  }
};
px = function () {
  return se;
};
gx = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
Md = function (e, t, n) {
  switch (t) {
    case "input":
      if ((jd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ic(r);
            if (!s) throw Error(A(90));
            K1(r), jd(r, s);
          }
        }
      }
      break;
    case "textarea":
      Q1(e, n);
      break;
    case "select":
      (t = n.value), t != null && Js(e, !!n.multiple, t, !1);
  }
};
nx = tm;
rx = gs;
var Fk = { usingClientEntryPoint: !1, Events: [ba, zs, Ic, ex, tx, tm] },
  Ji = {
    findFiberByHostInstance: Qr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ik = {
    bundleType: Ji.bundleType,
    version: Ji.version,
    rendererPackageName: Ji.rendererPackageName,
    rendererConfig: Ji.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ox(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ji.findFiberByHostInstance || Dk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!sl.isDisabled && sl.supportsFiber)
    try {
      (Mc = sl.inject(Ik)), (bn = sl);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fk;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lm(t)) throw Error(A(200));
  return Mk(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!lm(e)) throw Error(A(299));
  var n = !1,
    r = "",
    s = I2;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = im(e, 1, !1, null, null, n, !1, r, s)),
    (e[Vn] = t.current),
    Ho(e.nodeType === 8 ? e.parentNode : e),
    new am(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = ox(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return gs(e);
};
_t.hydrate = function (e, t, n) {
  if (!Kc(t)) throw Error(A(200));
  return Yc(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!lm(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = I2;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = F2(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[Vn] = t.current),
    Ho(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new Wc(t);
};
_t.render = function (e, t, n) {
  if (!Kc(t)) throw Error(A(200));
  return Yc(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!Kc(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (gs(function () {
        Yc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = tm;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Kc(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Yc(e, t, n, !1, r);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function B2() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B2);
    } catch (e) {
      console.error(e);
    }
}
B2(), (B1.exports = _t);
var Bk = B1.exports,
  z2,
  z0 = Bk;
(z2 = z0.createRoot), z0.hydrateRoot;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zo() {
  return (
    (Zo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zo.apply(this, arguments)
  );
}
var vr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(vr || (vr = {}));
const V0 = "popstate";
function zk(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: l } = r.location;
    return mf(
      "",
      { pathname: i, search: o, hash: l },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : pc(s);
  }
  return Uk(t, n, null, e);
}
function Te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function V2(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Vk() {
  return Math.random().toString(36).substr(2, 8);
}
function U0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function mf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Zo(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Oi(t) : t,
      { state: n, key: (t && t.key) || r || Vk() }
    )
  );
}
function pc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Oi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Uk(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    l = vr.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), o.replaceState(Zo({}, o.state, { idx: u }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    l = vr.Pop;
    let w = d(),
      g = w == null ? null : w - u;
    (u = w), c && c({ action: l, location: v.location, delta: g });
  }
  function h(w, g) {
    l = vr.Push;
    let p = mf(v.location, w, g);
    u = d() + 1;
    let x = U0(p, u),
      S = v.createHref(p);
    try {
      o.pushState(x, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      s.location.assign(S);
    }
    i && c && c({ action: l, location: v.location, delta: 1 });
  }
  function m(w, g) {
    l = vr.Replace;
    let p = mf(v.location, w, g);
    u = d();
    let x = U0(p, u),
      S = v.createHref(p);
    o.replaceState(x, "", S),
      i && c && c({ action: l, location: v.location, delta: 0 });
  }
  function y(w) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      p = typeof w == "string" ? w : pc(w);
    return (
      (p = p.replace(/ $/, "%20")),
      Te(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, g)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(s, o);
    },
    listen(w) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(V0, f),
        (c = w),
        () => {
          s.removeEventListener(V0, f), (c = null);
        }
      );
    },
    createHref(w) {
      return t(s, w);
    },
    createURL: y,
    encodeLocation(w) {
      let g = y(w);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: h,
    replace: m,
    go(w) {
      return o.go(w);
    },
  };
  return v;
}
var $0;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})($0 || ($0 = {}));
function $k(e, t, n) {
  return n === void 0 && (n = "/"), Hk(e, t, n, !1);
}
function Hk(e, t, n, r) {
  let s = typeof t == "string" ? Oi(t) : t,
    i = cm(s.pathname || "/", n);
  if (i == null) return null;
  let o = U2(e);
  qk(o);
  let l = null;
  for (let c = 0; l == null && c < o.length; ++c) {
    let u = n4(i);
    l = e4(o[c], u, r);
  }
  return l;
}
function U2(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (i, o, l) => {
    let c = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (Te(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Tr([r, c.relativePath]),
      d = n.concat(c);
    i.children &&
      i.children.length > 0 &&
      (Te(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      U2(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Jk(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) s(i, o);
      else for (let c of $2(i.path)) s(i, o, c);
    }),
    t
  );
}
function $2(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = $2(r.join("/")),
    l = [];
  return (
    l.push(...o.map((c) => (c === "" ? i : [i, c].join("/")))),
    s && l.push(...o),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function qk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Zk(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Wk = /^:[\w-]+$/,
  Kk = 3,
  Yk = 2,
  Qk = 1,
  Gk = 10,
  Xk = -2,
  H0 = (e) => e === "*";
function Jk(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(H0) && (r += Xk),
    t && (r += Yk),
    n
      .filter((s) => !H0(s))
      .reduce((s, i) => s + (Wk.test(i) ? Kk : i === "" ? Qk : Gk), r)
  );
}
function Zk(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function e4(e, t, n) {
  let { routesMeta: r } = e,
    s = {},
    i = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = q0(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d
      ),
      h = c.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = q0(
          { path: c.relativePath, caseSensitive: c.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(s, f.params),
      o.push({
        params: s,
        pathname: Tr([i, f.pathname]),
        pathnameBase: o4(Tr([i, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (i = Tr([i, f.pathnameBase]));
  }
  return o;
}
function q0(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = t4(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    l = s.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: h, isOptional: m } = d;
      if (h === "*") {
        let v = l[f] || "";
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[f];
      return (
        m && !y ? (u[h] = void 0) : (u[h] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function t4(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    V2(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function n4(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      V2(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function cm(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function r4(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Oi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : s4(n, t)) : t,
    search: a4(r),
    hash: l4(s),
  };
}
function s4(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function qu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function i4(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function um(e, t) {
  let n = i4(e);
  return t
    ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function dm(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Oi(e))
    : ((s = Zo({}, e)),
      Te(
        !s.pathname || !s.pathname.includes("?"),
        qu("?", "pathname", "search", s)
      ),
      Te(
        !s.pathname || !s.pathname.includes("#"),
        qu("#", "pathname", "hash", s)
      ),
      Te(!s.search || !s.search.includes("#"), qu("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    l;
  if (o == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      s.pathname = h.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = r4(s, l),
    u = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const Tr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  o4 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  a4 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  l4 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function c4(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const H2 = ["post", "put", "patch", "delete"];
new Set(H2);
const u4 = ["get", ...H2];
new Set(u4);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
const fm = b.createContext(null),
  d4 = b.createContext(null),
  Br = b.createContext(null),
  Qc = b.createContext(null),
  Yn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  q2 = b.createContext(null);
function f4(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Mi() || Te(!1);
  let { basename: r, navigator: s } = b.useContext(Br),
    { hash: i, pathname: o, search: l } = K2(e, { relative: n }),
    c = o;
  return (
    r !== "/" && (c = o === "/" ? r : Tr([r, o])),
    s.createHref({ pathname: c, search: l, hash: i })
  );
}
function Mi() {
  return b.useContext(Qc) != null;
}
function bs() {
  return Mi() || Te(!1), b.useContext(Qc).location;
}
function W2(e) {
  b.useContext(Br).static || b.useLayoutEffect(e);
}
function Qn() {
  let { isDataRoute: e } = b.useContext(Yn);
  return e ? E4() : h4();
}
function h4() {
  Mi() || Te(!1);
  let e = b.useContext(fm),
    { basename: t, future: n, navigator: r } = b.useContext(Br),
    { matches: s } = b.useContext(Yn),
    { pathname: i } = bs(),
    o = JSON.stringify(um(s, n.v7_relativeSplatPath)),
    l = b.useRef(!1);
  return (
    W2(() => {
      l.current = !0;
    }),
    b.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = dm(u, JSON.parse(o), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Tr([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, o, i, e]
    )
  );
}
function Ss() {
  let { matches: e } = b.useContext(Yn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function K2(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(Br),
    { matches: s } = b.useContext(Yn),
    { pathname: i } = bs(),
    o = JSON.stringify(um(s, r.v7_relativeSplatPath));
  return b.useMemo(() => dm(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function m4(e, t) {
  return p4(e, t);
}
function p4(e, t, n, r) {
  Mi() || Te(!1);
  let { navigator: s } = b.useContext(Br),
    { matches: i } = b.useContext(Yn),
    o = i[i.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let c = o ? o.pathnameBase : "/";
  o && o.route;
  let u = bs(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? Oi(t) : t;
    c === "/" || ((f = w.pathname) != null && f.startsWith(c)) || Te(!1),
      (d = w);
  } else d = u;
  let h = d.pathname || "/",
    m = h;
  if (c !== "/") {
    let w = c.replace(/^\//, "").split("/");
    m = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = $k(e, { pathname: m }),
    v = w4(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Tr([
              c,
              s.encodeLocation
                ? s.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? c
                : Tr([
                    c,
                    s.encodeLocation
                      ? s.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? b.createElement(
        Qc.Provider,
        {
          value: {
            location: ea(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: vr.Pop,
          },
        },
        v
      )
    : v;
}
function g4() {
  let e = C4(),
    t = c4(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: s }, n) : null,
    null
  );
}
const y4 = b.createElement(g4, null);
class x4 extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          Yn.Provider,
          { value: this.props.routeContext },
          b.createElement(q2.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function v4(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = b.useContext(fm);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Yn.Provider, { value: t }, r)
  );
}
function w4(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    l = (s = n) == null ? void 0 : s.errors;
  if (l != null) {
    let d = o.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    d >= 0 || Te(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: m } = n,
          y =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (c = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, h) => {
    let m,
      y = !1,
      v = null,
      w = null;
    n &&
      ((m = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || y4),
      c &&
        (u < 0 && h === 0
          ? ((y = !0), (w = null))
          : u === h &&
            ((y = !0), (w = f.route.hydrateFallbackElement || null))));
    let g = t.concat(o.slice(0, h + 1)),
      p = () => {
        let x;
        return (
          m
            ? (x = v)
            : y
            ? (x = w)
            : f.route.Component
            ? (x = b.createElement(f.route.Component, null))
            : f.route.element
            ? (x = f.route.element)
            : (x = d),
          b.createElement(v4, {
            match: f,
            routeContext: { outlet: d, matches: g, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? b.createElement(x4, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: p(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Y2 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Y2 || {}),
  gc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(gc || {});
function b4(e) {
  let t = b.useContext(fm);
  return t || Te(!1), t;
}
function S4(e) {
  let t = b.useContext(d4);
  return t || Te(!1), t;
}
function k4(e) {
  let t = b.useContext(Yn);
  return t || Te(!1), t;
}
function Q2(e) {
  let t = k4(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Te(!1), n.route.id;
}
function C4() {
  var e;
  let t = b.useContext(q2),
    n = S4(gc.UseRouteError),
    r = Q2(gc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function E4() {
  let { router: e } = b4(Y2.UseNavigateStable),
    t = Q2(gc.UseNavigateStable),
    n = b.useRef(!1);
  return (
    W2(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (s, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, ea({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Ct(e) {
  let { to: t, replace: n, state: r, relative: s } = e;
  Mi() || Te(!1);
  let { future: i, static: o } = b.useContext(Br),
    { matches: l } = b.useContext(Yn),
    { pathname: c } = bs(),
    u = Qn(),
    d = dm(t, um(l, i.v7_relativeSplatPath), c, s === "path"),
    f = JSON.stringify(d);
  return (
    b.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: s }),
      [u, f, s, n, r]
    ),
    null
  );
}
function Ye(e) {
  Te(!1);
}
function N4(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = vr.Pop,
    navigator: i,
    static: o = !1,
    future: l,
  } = e;
  Mi() && Te(!1);
  let c = t.replace(/^\/*/, "/"),
    u = b.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: o,
        future: ea({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, i, o]
    );
  typeof r == "string" && (r = Oi(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: m = null,
      key: y = "default",
    } = r,
    v = b.useMemo(() => {
      let w = cm(d, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: h, state: m, key: y },
            navigationType: s,
          };
    }, [c, d, f, h, m, y, s]);
  return v == null
    ? null
    : b.createElement(
        Br.Provider,
        { value: u },
        b.createElement(Qc.Provider, { children: n, value: v })
      );
}
function j4(e) {
  let { children: t, location: n } = e;
  return m4(pf(t), n);
}
new Promise(() => {});
function pf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, s) => {
      if (!b.isValidElement(r)) return;
      let i = [...t, s];
      if (r.type === b.Fragment) {
        n.push.apply(n, pf(r.props.children, i));
        return;
      }
      r.type !== Ye && Te(!1), !r.props.index || !r.props.children || Te(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = pf(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gf() {
  return (
    (gf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gf.apply(this, arguments)
  );
}
function T4(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function P4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function A4(e, t) {
  return e.button === 0 && (!t || t === "_self") && !P4(e);
}
const _4 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  R4 = "6";
try {
  window.__reactRouterVersion = R4;
} catch {}
const O4 = "startTransition",
  W0 = TS[O4];
function M4(e) {
  let { basename: t, children: n, future: r, window: s } = e,
    i = b.useRef();
  i.current == null && (i.current = zk({ window: s, v5Compat: !0 }));
  let o = i.current,
    [l, c] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    d = b.useCallback(
      (f) => {
        u && W0 ? W0(() => c(f)) : c(f);
      },
      [c, u]
    );
  return (
    b.useLayoutEffect(() => o.listen(d), [o, d]),
    b.createElement(N4, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const D4 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  L4 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  K = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: o,
        state: l,
        target: c,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      h = T4(t, _4),
      { basename: m } = b.useContext(Br),
      y,
      v = !1;
    if (typeof u == "string" && L4.test(u) && ((y = u), D4))
      try {
        let x = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          C = cm(S.pathname, m);
        S.origin === x.origin && C != null
          ? (u = C + S.search + S.hash)
          : (v = !0);
      } catch {}
    let w = f4(u, { relative: s }),
      g = F4(u, {
        replace: o,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: s,
        unstable_viewTransition: f,
      });
    function p(x) {
      r && r(x), x.defaultPrevented || g(x);
    }
    return b.createElement(
      "a",
      gf({}, h, { href: y || w, onClick: v || i ? r : p, ref: n, target: c })
    );
  });
var K0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(K0 || (K0 = {}));
var Y0;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Y0 || (Y0 = {}));
function F4(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Qn(),
    u = bs(),
    d = K2(e, { relative: o });
  return b.useCallback(
    (f) => {
      if (A4(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : pc(u) === pc(d);
        c(e, {
          replace: h,
          state: s,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, c, d, r, s, n, e, i, o, l]
  );
}
var Di = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ji = typeof window > "u" || "Deno" in globalThis;
function It() {}
function I4(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yf(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function G2(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function si(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Q0(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: l,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== hm(o, t.options)) return !1;
    } else if (!ta(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function G0(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ys(t.options.mutationKey) !== ys(i)) return !1;
    } else if (!ta(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function hm(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || ys)(e);
}
function ys(e) {
  return JSON.stringify(e, (t, n) =>
    xf(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function ta(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !ta(e[n], t[n]))
    : !1;
}
function X2(e, t) {
  if (e === t) return e;
  const n = X0(e) && X0(t);
  if (n || (xf(e) && xf(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      l = n ? [] : {};
    let c = 0;
    for (let u = 0; u < o; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((l[d] = void 0), c++)
        : ((l[d] = X2(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && c++);
    }
    return s === o && c === s ? e : l;
  }
  return t;
}
function yc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function X0(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function xf(e) {
  if (!J0(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !J0(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function J0(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function B4(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function vf(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? X2(e, t)
    : t;
}
function z4(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function V4(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var J2 = Symbol();
function Z2(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === J2
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var ts,
  cr,
  ai,
  x1,
  U4 =
    ((x1 = class extends Di {
      constructor() {
        super();
        z(this, ts);
        z(this, cr);
        z(this, ai);
        D(this, ai, (t) => {
          if (!ji && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, cr) || this.setEventListener(k(this, ai));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, cr)) == null || t.call(this), D(this, cr, void 0));
      }
      setEventListener(t) {
        var n;
        D(this, ai, t),
          (n = k(this, cr)) == null || n.call(this),
          D(
            this,
            cr,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        k(this, ts) !== t && (D(this, ts, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof k(this, ts) == "boolean"
          ? k(this, ts)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (ts = new WeakMap()),
    (cr = new WeakMap()),
    (ai = new WeakMap()),
    x1),
  mm = new U4(),
  li,
  ur,
  ci,
  v1,
  $4 =
    ((v1 = class extends Di {
      constructor() {
        super();
        z(this, li, !0);
        z(this, ur);
        z(this, ci);
        D(this, ci, (t) => {
          if (!ji && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, ur) || this.setEventListener(k(this, ci));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, ur)) == null || t.call(this), D(this, ur, void 0));
      }
      setEventListener(t) {
        var n;
        D(this, ci, t),
          (n = k(this, ur)) == null || n.call(this),
          D(this, ur, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        k(this, li) !== t &&
          (D(this, li, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return k(this, li);
      }
    }),
    (li = new WeakMap()),
    (ur = new WeakMap()),
    (ci = new WeakMap()),
    v1),
  xc = new $4();
function H4(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ev(e) {
  return (e ?? "online") === "online" ? xc.isOnline() : !0;
}
var tv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Wu(e) {
  return e instanceof tv;
}
function nv(e) {
  let t = !1,
    n = 0,
    r = !1,
    s,
    i,
    o;
  const l = new Promise((g, p) => {
      (i = g), (o = p);
    }),
    c = (g) => {
      var p;
      r || (y(new tv(g)), (p = e.abort) == null || p.call(e));
    },
    u = () => {
      t = !0;
    },
    d = () => {
      t = !1;
    },
    f = () =>
      mm.isFocused() &&
      (e.networkMode === "always" || xc.isOnline()) &&
      e.canRun(),
    h = () => ev(e.networkMode) && e.canRun(),
    m = (g) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onSuccess) == null || p.call(e, g),
        s == null || s(),
        i(g));
    },
    y = (g) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onError) == null || p.call(e, g),
        s == null || s(),
        o(g));
    },
    v = () =>
      new Promise((g) => {
        var p;
        (s = (x) => {
          (r || f()) && g(x);
        }),
          (p = e.onPause) == null || p.call(e);
      }).then(() => {
        var g;
        (s = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    w = () => {
      if (r) return;
      let g;
      const p = n === 0 ? e.initialPromise : void 0;
      try {
        g = p ?? e.fn();
      } catch (x) {
        g = Promise.reject(x);
      }
      Promise.resolve(g)
        .then(m)
        .catch((x) => {
          var N;
          if (r) return;
          const S = e.retry ?? (ji ? 0 : 3),
            C = e.retryDelay ?? H4,
            T = typeof C == "function" ? C(n, x) : C,
            j =
              S === !0 ||
              (typeof S == "number" && n < S) ||
              (typeof S == "function" && S(n, x));
          if (t || !j) {
            y(x);
            return;
          }
          n++,
            (N = e.onFail) == null || N.call(e, n, x),
            B4(T)
              .then(() => (f() ? void 0 : v()))
              .then(() => {
                t ? y(x) : w();
              });
        });
    };
  return {
    promise: l,
    cancel: c,
    continue: () => (s == null || s(), l),
    cancelRetry: u,
    continueRetry: d,
    canStart: h,
    start: () => (h() ? w() : v().then(w), l),
  };
}
function q4() {
  let e = [],
    t = 0,
    n = (h) => {
      h();
    },
    r = (h) => {
      h();
    },
    s = (h) => setTimeout(h, 0);
  const i = (h) => {
      s = h;
    },
    o = (h) => {
      let m;
      t++;
      try {
        m = h();
      } finally {
        t--, t || u();
      }
      return m;
    },
    l = (h) => {
      t
        ? e.push(h)
        : s(() => {
            n(h);
          });
    },
    c =
      (h) =>
      (...m) => {
        l(() => {
          h(...m);
        });
      },
    u = () => {
      const h = e;
      (e = []),
        h.length &&
          s(() => {
            r(() => {
              h.forEach((m) => {
                n(m);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: c,
    schedule: l,
    setNotifyFunction: (h) => {
      n = h;
    },
    setBatchNotifyFunction: (h) => {
      r = h;
    },
    setScheduler: i,
  };
}
var Me = q4(),
  ns,
  w1,
  rv =
    ((w1 = class {
      constructor() {
        z(this, ns);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          yf(this.gcTime) &&
            D(
              this,
              ns,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (ji ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        k(this, ns) && (clearTimeout(k(this, ns)), D(this, ns, void 0));
      }
    }),
    (ns = new WeakMap()),
    w1),
  ui,
  di,
  Ft,
  Qe,
  ma,
  rs,
  Zt,
  _n,
  b1,
  W4 =
    ((b1 = class extends rv {
      constructor(t) {
        super();
        z(this, Zt);
        z(this, ui);
        z(this, di);
        z(this, Ft);
        z(this, Qe);
        z(this, ma);
        z(this, rs);
        D(this, rs, !1),
          D(this, ma, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          D(this, Ft, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          D(this, ui, K4(this.options)),
          (this.state = t.state ?? k(this, ui)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = k(this, Qe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...k(this, ma), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          k(this, Ft).remove(this);
      }
      setData(t, n) {
        const r = vf(this.state.data, t, this.options);
        return (
          W(this, Zt, _n).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        W(this, Zt, _n).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = k(this, Qe)) == null ? void 0 : r.promise;
        return (
          (s = k(this, Qe)) == null || s.cancel(t),
          n ? n.then(It).catch(It) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(k(this, ui));
      }
      isActive() {
        return this.observers.some((t) => rn(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !G2(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Qe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Qe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          k(this, Ft).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (k(this, Qe) &&
              (k(this, rs)
                ? k(this, Qe).cancel({ revert: !0 })
                : k(this, Qe).cancelRetry()),
            this.scheduleGc()),
          k(this, Ft).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          W(this, Zt, _n).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (k(this, Qe))
            return k(this, Qe).continueRetry(), k(this, Qe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (D(this, rs, !0), r.signal),
            });
          },
          i = () => {
            const f = Z2(this.options, n),
              h = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(h),
              D(this, rs, !1),
              this.options.persister ? this.options.persister(f, h, this) : f(h)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (c = this.options.behavior) == null || c.onFetch(o, this),
          D(this, di, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
            W(this, Zt, _n).call(this, {
              type: "fetch",
              meta: (d = o.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, m, y, v;
          (Wu(f) && f.silent) ||
            W(this, Zt, _n).call(this, { type: "error", error: f }),
            Wu(f) ||
              ((m = (h = k(this, Ft).config).onError) == null ||
                m.call(h, f, this),
              (v = (y = k(this, Ft).config).onSettled) == null ||
                v.call(y, this.state.data, f, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          D(
            this,
            Qe,
            nv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, m, y, v;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (w) {
                  l(w);
                  return;
                }
                (m = (h = k(this, Ft).config).onSuccess) == null ||
                  m.call(h, f, this),
                  (v = (y = k(this, Ft).config).onSettled) == null ||
                    v.call(y, f, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: l,
              onFail: (f, h) => {
                W(this, Zt, _n).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                W(this, Zt, _n).call(this, { type: "pause" });
              },
              onContinue: () => {
                W(this, Zt, _n).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          k(this, Qe).start()
        );
      }
    }),
    (ui = new WeakMap()),
    (di = new WeakMap()),
    (Ft = new WeakMap()),
    (Qe = new WeakMap()),
    (ma = new WeakMap()),
    (rs = new WeakMap()),
    (Zt = new WeakSet()),
    (_n = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...sv(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Wu(s) && s.revert && k(this, di)
              ? { ...k(this, di), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Me.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            k(this, Ft).notify({ query: this, type: "updated", action: t });
        });
    }),
    b1);
function sv(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ev(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function K4(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var mn,
  S1,
  Y4 =
    ((S1 = class extends Di {
      constructor(t = {}) {
        super();
        z(this, mn);
        (this.config = t), D(this, mn, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? hm(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new W4({
              cache: this,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        k(this, mn).has(t.queryHash) ||
          (k(this, mn).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = k(this, mn).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && k(this, mn).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Me.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return k(this, mn).get(t);
      }
      getAll() {
        return [...k(this, mn).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Q0(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Q0(t, r)) : n;
      }
      notify(t) {
        Me.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Me.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Me.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (mn = new WeakMap()),
    S1),
  pn,
  nt,
  ss,
  gn,
  nr,
  k1,
  Q4 =
    ((k1 = class extends rv {
      constructor(t) {
        super();
        z(this, gn);
        z(this, pn);
        z(this, nt);
        z(this, ss);
        (this.mutationId = t.mutationId),
          D(this, nt, t.mutationCache),
          D(this, pn, []),
          (this.state = t.state || iv()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        k(this, pn).includes(t) ||
          (k(this, pn).push(t),
          this.clearGcTimeout(),
          k(this, nt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        D(
          this,
          pn,
          k(this, pn).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          k(this, nt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        k(this, pn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : k(this, nt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = k(this, ss)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, l, c, u, d, f, h, m, y, v, w, g, p, x, S, C, T, j;
        D(
          this,
          ss,
          nv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, O) => {
              W(this, gn, nr).call(this, {
                type: "failed",
                failureCount: N,
                error: O,
              });
            },
            onPause: () => {
              W(this, gn, nr).call(this, { type: "pause" });
            },
            onContinue: () => {
              W(this, gn, nr).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, nt).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !k(this, ss).canStart();
        try {
          if (!n) {
            W(this, gn, nr).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (s = k(this, nt).config).onMutate) == null
                ? void 0
                : i.call(s, t, this));
            const O = await ((l = (o = this.options).onMutate) == null
              ? void 0
              : l.call(o, t));
            O !== this.state.context &&
              W(this, gn, nr).call(this, {
                type: "pending",
                context: O,
                variables: t,
                isPaused: r,
              });
          }
          const N = await k(this, ss).start();
          return (
            await ((u = (c = k(this, nt).config).onSuccess) == null
              ? void 0
              : u.call(c, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, N, t, this.state.context)),
            await ((m = (h = k(this, nt).config).onSettled) == null
              ? void 0
              : m.call(
                  h,
                  N,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((v = (y = this.options).onSettled) == null
              ? void 0
              : v.call(y, N, null, t, this.state.context)),
            W(this, gn, nr).call(this, { type: "success", data: N }),
            N
          );
        } catch (N) {
          try {
            throw (
              (await ((g = (w = k(this, nt).config).onError) == null
                ? void 0
                : g.call(w, N, t, this.state.context, this)),
              await ((x = (p = this.options).onError) == null
                ? void 0
                : x.call(p, N, t, this.state.context)),
              await ((C = (S = k(this, nt).config).onSettled) == null
                ? void 0
                : C.call(
                    S,
                    void 0,
                    N,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((j = (T = this.options).onSettled) == null
                ? void 0
                : j.call(T, void 0, N, t, this.state.context)),
              N)
            );
          } finally {
            W(this, gn, nr).call(this, { type: "error", error: N });
          }
        } finally {
          k(this, nt).runNext(this);
        }
      }
    }),
    (pn = new WeakMap()),
    (nt = new WeakMap()),
    (ss = new WeakMap()),
    (gn = new WeakSet()),
    (nr = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Me.batch(() => {
          k(this, pn).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            k(this, nt).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    k1);
function iv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Et,
  pa,
  C1,
  G4 =
    ((C1 = class extends Di {
      constructor(t = {}) {
        super();
        z(this, Et);
        z(this, pa);
        (this.config = t), D(this, Et, new Map()), D(this, pa, Date.now());
      }
      build(t, n, r) {
        const s = new Q4({
          mutationCache: this,
          mutationId: ++Va(this, pa)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        const n = il(t),
          r = k(this, Et).get(n) ?? [];
        r.push(t),
          k(this, Et).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = il(t);
        if (k(this, Et).has(n)) {
          const s =
            (r = k(this, Et).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          s && (s.length === 0 ? k(this, Et).delete(n) : k(this, Et).set(n, s));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = k(this, Et).get(il(t))) == null
            ? void 0
            : r.find((s) => s.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = k(this, Et).get(il(t))) == null
            ? void 0
            : r.find((s) => s !== t && s.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Me.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...k(this, Et).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => G0(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => G0(t, n));
      }
      notify(t) {
        Me.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Me.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(It)))
        );
      }
    }),
    (Et = new WeakMap()),
    (pa = new WeakMap()),
    C1);
function il(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function X4(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var y, v, w, g, p;
        const s = t.options,
          i =
            (w =
              (v = (y = t.fetchOptions) == null ? void 0 : y.meta) == null
                ? void 0
                : v.fetchMore) == null
              ? void 0
              : w.direction,
          o = ((g = t.state.data) == null ? void 0 : g.pages) || [],
          l = ((p = t.state.data) == null ? void 0 : p.pageParams) || [],
          c = { pages: [], pageParams: [] };
        let u = !1;
        const d = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener("abort", () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          f = Z2(t.options, t.fetchOptions),
          h = async (x, S, C) => {
            if (u) return Promise.reject();
            if (S == null && x.pages.length) return Promise.resolve(x);
            const T = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            d(T);
            const j = await f(T),
              { maxPages: N } = t.options,
              O = C ? V4 : z4;
            return {
              pages: O(x.pages, j, N),
              pageParams: O(x.pageParams, S, N),
            };
          };
        let m;
        if (i && o.length) {
          const x = i === "backward",
            S = x ? J4 : Z0,
            C = { pages: o, pageParams: l },
            T = S(s, C);
          m = await h(C, T, x);
        } else {
          m = await h(c, l[0] ?? s.initialPageParam);
          const x = e ?? o.length;
          for (let S = 1; S < x; S++) {
            const C = Z0(s, m);
            if (C == null) break;
            m = await h(m, C);
          }
        }
        return m;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var s, i;
            return (i = (s = t.options).persister) == null
              ? void 0
              : i.call(
                  s,
                  r,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = r);
    },
  };
}
function Z0(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function J4(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var be,
  dr,
  fr,
  fi,
  hi,
  hr,
  mi,
  pi,
  E1,
  Z4 =
    ((E1 = class {
      constructor(e = {}) {
        z(this, be);
        z(this, dr);
        z(this, fr);
        z(this, fi);
        z(this, hi);
        z(this, hr);
        z(this, mi);
        z(this, pi);
        D(this, be, e.queryCache || new Y4()),
          D(this, dr, e.mutationCache || new G4()),
          D(this, fr, e.defaultOptions || {}),
          D(this, fi, new Map()),
          D(this, hi, new Map()),
          D(this, hr, 0);
      }
      mount() {
        Va(this, hr)._++,
          k(this, hr) === 1 &&
            (D(
              this,
              mi,
              mm.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, be).onFocus());
              })
            ),
            D(
              this,
              pi,
              xc.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, be).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Va(this, hr)._--,
          k(this, hr) === 0 &&
            ((e = k(this, mi)) == null || e.call(this),
            D(this, mi, void 0),
            (t = k(this, pi)) == null || t.call(this),
            D(this, pi, void 0));
      }
      isFetching(e) {
        return k(this, be).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return k(this, dr).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, be).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = k(this, be).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(si(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return k(this, be)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = k(this, be).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = I4(t, i);
        if (o !== void 0)
          return k(this, be)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Me.batch(() =>
          k(this, be)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, be).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = k(this, be);
        Me.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = k(this, be),
          r = { type: "active", ...e };
        return Me.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Me.batch(() =>
            k(this, be)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(It).catch(It);
      }
      invalidateQueries(e = {}, t = {}) {
        return Me.batch(() => {
          if (
            (k(this, be)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Me.batch(() =>
            k(this, be)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(It)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(It);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, be).build(this, t);
        return n.isStaleByTime(si(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(It).catch(It);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = X4(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(It).catch(It);
      }
      resumePausedMutations() {
        return xc.isOnline()
          ? k(this, dr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return k(this, be);
      }
      getMutationCache() {
        return k(this, dr);
      }
      getDefaultOptions() {
        return k(this, fr);
      }
      setDefaultOptions(e) {
        D(this, fr, e);
      }
      setQueryDefaults(e, t) {
        k(this, fi).set(ys(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...k(this, fi).values()];
        let n = {};
        return (
          t.forEach((r) => {
            ta(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        k(this, hi).set(ys(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...k(this, hi).values()];
        let n = {};
        return (
          t.forEach((r) => {
            ta(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, fr).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = hm(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === J2 && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...k(this, fr).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        k(this, be).clear(), k(this, dr).clear();
      }
    }),
    (be = new WeakMap()),
    (dr = new WeakMap()),
    (fr = new WeakMap()),
    (fi = new WeakMap()),
    (hi = new WeakMap()),
    (hr = new WeakMap()),
    (mi = new WeakMap()),
    (pi = new WeakMap()),
    E1),
  ft,
  Z,
  ga,
  rt,
  is,
  gi,
  yn,
  ya,
  yi,
  xi,
  os,
  as,
  mr,
  vi,
  ne,
  go,
  wf,
  bf,
  Sf,
  kf,
  Cf,
  Ef,
  Nf,
  ov,
  N1,
  eC =
    ((N1 = class extends Di {
      constructor(t, n) {
        super();
        z(this, ne);
        z(this, ft);
        z(this, Z);
        z(this, ga);
        z(this, rt);
        z(this, is);
        z(this, gi);
        z(this, yn);
        z(this, ya);
        z(this, yi);
        z(this, xi);
        z(this, os);
        z(this, as);
        z(this, mr);
        z(this, vi, new Set());
        (this.options = n),
          D(this, ft, t),
          D(this, yn, null),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (k(this, Z).addObserver(this),
          eg(k(this, Z), this.options)
            ? W(this, ne, go).call(this)
            : this.updateResult(),
          W(this, ne, kf).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return jf(k(this, Z), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return jf(k(this, Z), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          W(this, ne, Cf).call(this),
          W(this, ne, Ef).call(this),
          k(this, Z).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          s = k(this, Z);
        if (
          ((this.options = k(this, ft).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof rn(this.options.enabled, k(this, Z)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        W(this, ne, Nf).call(this),
          k(this, Z).setOptions(this.options),
          r._defaulted &&
            !yc(this.options, r) &&
            k(this, ft)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: k(this, Z),
                observer: this,
              });
        const i = this.hasListeners();
        i && tg(k(this, Z), s, this.options, r) && W(this, ne, go).call(this),
          this.updateResult(n),
          i &&
            (k(this, Z) !== s ||
              rn(this.options.enabled, k(this, Z)) !==
                rn(r.enabled, k(this, Z)) ||
              si(this.options.staleTime, k(this, Z)) !==
                si(r.staleTime, k(this, Z))) &&
            W(this, ne, wf).call(this);
        const o = W(this, ne, bf).call(this);
        i &&
          (k(this, Z) !== s ||
            rn(this.options.enabled, k(this, Z)) !==
              rn(r.enabled, k(this, Z)) ||
            o !== k(this, mr)) &&
          W(this, ne, Sf).call(this, o);
      }
      getOptimisticResult(t) {
        const n = k(this, ft).getQueryCache().build(k(this, ft), t),
          r = this.createResult(n, t);
        return (
          nC(this, r) &&
            (D(this, rt, r),
            D(this, gi, this.options),
            D(this, is, k(this, Z).state)),
          r
        );
      }
      getCurrentResult() {
        return k(this, rt);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(r, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), n == null || n(s), t[s]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        k(this, vi).add(t);
      }
      getCurrentQuery() {
        return k(this, Z);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = k(this, ft).defaultQueryOptions(t),
          r = k(this, ft).getQueryCache().build(k(this, ft), n);
        return (
          (r.isFetchingOptimistic = !0),
          r.fetch().then(() => this.createResult(r, n))
        );
      }
      fetch(t) {
        return W(this, ne, go)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), k(this, rt)));
      }
      createResult(t, n) {
        var j;
        const r = k(this, Z),
          s = this.options,
          i = k(this, rt),
          o = k(this, is),
          l = k(this, gi),
          u = t !== r ? t.state : k(this, ga),
          { state: d } = t;
        let f = { ...d },
          h = !1,
          m;
        if (n._optimisticResults) {
          const N = this.hasListeners(),
            O = !N && eg(t, n),
            M = N && tg(t, r, n, s);
          (O || M) && (f = { ...f, ...sv(d.data, t.options) }),
            n._optimisticResults === "isRestoring" && (f.fetchStatus = "idle");
        }
        let { error: y, errorUpdatedAt: v, status: w } = f;
        if (n.select && f.data !== void 0)
          if (
            i &&
            f.data === (o == null ? void 0 : o.data) &&
            n.select === k(this, ya)
          )
            m = k(this, yi);
          else
            try {
              D(this, ya, n.select),
                (m = n.select(f.data)),
                (m = vf(i == null ? void 0 : i.data, m, n)),
                D(this, yi, m),
                D(this, yn, null);
            } catch (N) {
              D(this, yn, N);
            }
        else m = f.data;
        if (n.placeholderData !== void 0 && m === void 0 && w === "pending") {
          let N;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (l == null ? void 0 : l.placeholderData)
          )
            N = i.data;
          else if (
            ((N =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (j = k(this, xi)) == null ? void 0 : j.state.data,
                    k(this, xi)
                  )
                : n.placeholderData),
            n.select && N !== void 0)
          )
            try {
              (N = n.select(N)), D(this, yn, null);
            } catch (O) {
              D(this, yn, O);
            }
          N !== void 0 &&
            ((w = "success"),
            (m = vf(i == null ? void 0 : i.data, N, n)),
            (h = !0));
        }
        k(this, yn) &&
          ((y = k(this, yn)),
          (m = k(this, yi)),
          (v = Date.now()),
          (w = "error"));
        const g = f.fetchStatus === "fetching",
          p = w === "pending",
          x = w === "error",
          S = p && g,
          C = m !== void 0;
        return {
          status: w,
          fetchStatus: f.fetchStatus,
          isPending: p,
          isSuccess: w === "success",
          isError: x,
          isInitialLoading: S,
          isLoading: S,
          data: m,
          dataUpdatedAt: f.dataUpdatedAt,
          error: y,
          errorUpdatedAt: v,
          failureCount: f.fetchFailureCount,
          failureReason: f.fetchFailureReason,
          errorUpdateCount: f.errorUpdateCount,
          isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
          isFetchedAfterMount:
            f.dataUpdateCount > u.dataUpdateCount ||
            f.errorUpdateCount > u.errorUpdateCount,
          isFetching: g,
          isRefetching: g && !p,
          isLoadingError: x && !C,
          isPaused: f.fetchStatus === "paused",
          isPlaceholderData: h,
          isRefetchError: x && C,
          isStale: pm(t, n),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const n = k(this, rt),
          r = this.createResult(k(this, Z), this.options);
        if (
          (D(this, is, k(this, Z).state),
          D(this, gi, this.options),
          k(this, is).data !== void 0 && D(this, xi, k(this, Z)),
          yc(r, n))
        )
          return;
        D(this, rt, r);
        const s = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              l = typeof o == "function" ? o() : o;
            if (l === "all" || (!l && !k(this, vi).size)) return !0;
            const c = new Set(l ?? k(this, vi));
            return (
              this.options.throwOnError && c.add("error"),
              Object.keys(k(this, rt)).some((u) => {
                const d = u;
                return k(this, rt)[d] !== n[d] && c.has(d);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          W(this, ne, ov).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && W(this, ne, kf).call(this);
      }
    }),
    (ft = new WeakMap()),
    (Z = new WeakMap()),
    (ga = new WeakMap()),
    (rt = new WeakMap()),
    (is = new WeakMap()),
    (gi = new WeakMap()),
    (yn = new WeakMap()),
    (ya = new WeakMap()),
    (yi = new WeakMap()),
    (xi = new WeakMap()),
    (os = new WeakMap()),
    (as = new WeakMap()),
    (mr = new WeakMap()),
    (vi = new WeakMap()),
    (ne = new WeakSet()),
    (go = function (t) {
      W(this, ne, Nf).call(this);
      let n = k(this, Z).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(It)), n;
    }),
    (wf = function () {
      W(this, ne, Cf).call(this);
      const t = si(this.options.staleTime, k(this, Z));
      if (ji || k(this, rt).isStale || !yf(t)) return;
      const r = G2(k(this, rt).dataUpdatedAt, t) + 1;
      D(
        this,
        os,
        setTimeout(() => {
          k(this, rt).isStale || this.updateResult();
        }, r)
      );
    }),
    (bf = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(k(this, Z))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Sf = function (t) {
      W(this, ne, Ef).call(this),
        D(this, mr, t),
        !(
          ji ||
          rn(this.options.enabled, k(this, Z)) === !1 ||
          !yf(k(this, mr)) ||
          k(this, mr) === 0
        ) &&
          D(
            this,
            as,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || mm.isFocused()) &&
                W(this, ne, go).call(this);
            }, k(this, mr))
          );
    }),
    (kf = function () {
      W(this, ne, wf).call(this),
        W(this, ne, Sf).call(this, W(this, ne, bf).call(this));
    }),
    (Cf = function () {
      k(this, os) && (clearTimeout(k(this, os)), D(this, os, void 0));
    }),
    (Ef = function () {
      k(this, as) && (clearInterval(k(this, as)), D(this, as, void 0));
    }),
    (Nf = function () {
      const t = k(this, ft).getQueryCache().build(k(this, ft), this.options);
      if (t === k(this, Z)) return;
      const n = k(this, Z);
      D(this, Z, t),
        D(this, ga, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (ov = function (t) {
      Me.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(k(this, rt));
          }),
          k(this, ft)
            .getQueryCache()
            .notify({ query: k(this, Z), type: "observerResultsUpdated" });
      });
    }),
    N1);
function tC(e, t) {
  return (
    rn(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function eg(e, t) {
  return tC(e, t) || (e.state.data !== void 0 && jf(e, t, t.refetchOnMount));
}
function jf(e, t, n) {
  if (rn(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && pm(e, t));
  }
  return !1;
}
function tg(e, t, n, r) {
  return (
    (e !== t || rn(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    pm(e, n)
  );
}
function pm(e, t) {
  return rn(t.enabled, e) !== !1 && e.isStaleByTime(si(t.staleTime, e));
}
function nC(e, t) {
  return !yc(e.getCurrentResult(), t);
}
var pr,
  gr,
  ht,
  Mn,
  Bn,
  Pl,
  Tf,
  j1,
  rC =
    ((j1 = class extends Di {
      constructor(n, r) {
        super();
        z(this, Bn);
        z(this, pr);
        z(this, gr);
        z(this, ht);
        z(this, Mn);
        D(this, pr, n),
          this.setOptions(r),
          this.bindMethods(),
          W(this, Bn, Pl).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(n) {
        var s;
        const r = this.options;
        (this.options = k(this, pr).defaultMutationOptions(n)),
          yc(this.options, r) ||
            k(this, pr)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: k(this, ht),
                observer: this,
              }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          ys(r.mutationKey) !== ys(this.options.mutationKey)
            ? this.reset()
            : ((s = k(this, ht)) == null ? void 0 : s.state.status) ===
                "pending" && k(this, ht).setOptions(this.options);
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          (n = k(this, ht)) == null ||
          n.removeObserver(this);
      }
      onMutationUpdate(n) {
        W(this, Bn, Pl).call(this), W(this, Bn, Tf).call(this, n);
      }
      getCurrentResult() {
        return k(this, gr);
      }
      reset() {
        var n;
        (n = k(this, ht)) == null || n.removeObserver(this),
          D(this, ht, void 0),
          W(this, Bn, Pl).call(this),
          W(this, Bn, Tf).call(this);
      }
      mutate(n, r) {
        var s;
        return (
          D(this, Mn, r),
          (s = k(this, ht)) == null || s.removeObserver(this),
          D(
            this,
            ht,
            k(this, pr).getMutationCache().build(k(this, pr), this.options)
          ),
          k(this, ht).addObserver(this),
          k(this, ht).execute(n)
        );
      }
    }),
    (pr = new WeakMap()),
    (gr = new WeakMap()),
    (ht = new WeakMap()),
    (Mn = new WeakMap()),
    (Bn = new WeakSet()),
    (Pl = function () {
      var r;
      const n = ((r = k(this, ht)) == null ? void 0 : r.state) ?? iv();
      D(this, gr, {
        ...n,
        isPending: n.status === "pending",
        isSuccess: n.status === "success",
        isError: n.status === "error",
        isIdle: n.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Tf = function (n) {
      Me.batch(() => {
        var r, s, i, o, l, c, u, d;
        if (k(this, Mn) && this.hasListeners()) {
          const f = k(this, gr).variables,
            h = k(this, gr).context;
          (n == null ? void 0 : n.type) === "success"
            ? ((s = (r = k(this, Mn)).onSuccess) == null ||
                s.call(r, n.data, f, h),
              (o = (i = k(this, Mn)).onSettled) == null ||
                o.call(i, n.data, null, f, h))
            : (n == null ? void 0 : n.type) === "error" &&
              ((c = (l = k(this, Mn)).onError) == null ||
                c.call(l, n.error, f, h),
              (d = (u = k(this, Mn)).onSettled) == null ||
                d.call(u, void 0, n.error, f, h));
        }
        this.listeners.forEach((f) => {
          f(k(this, gr));
        });
      });
    }),
    j1),
  av = b.createContext(void 0),
  Re = (e) => {
    const t = b.useContext(av);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  sC = ({ client: e, children: t }) => (
    b.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    a.jsx(av.Provider, { value: e, children: t })
  ),
  lv = b.createContext(!1),
  iC = () => b.useContext(lv);
lv.Provider;
function oC() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var aC = b.createContext(oC()),
  lC = () => b.useContext(aC);
function cv(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function cC() {}
var uC = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  dC = (e) => {
    b.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  fC = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && cv(n, [e.error, r]),
  hC = (e) => {
    e.suspense &&
      (typeof e.staleTime != "number" && (e.staleTime = 1e3),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  mC = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  pC = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function gC(e, t, n) {
  var u, d, f, h;
  const r = Re(),
    s = iC(),
    i = lC(),
    o = r.defaultQueryOptions(e);
  (d =
    (u = r.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || d.call(u, o),
    (o._optimisticResults = s ? "isRestoring" : "optimistic"),
    hC(o),
    uC(o, i),
    dC(i);
  const [l] = b.useState(() => new t(r, o)),
    c = l.getOptimisticResult(o);
  if (
    (b.useSyncExternalStore(
      b.useCallback(
        (m) => {
          const y = s ? () => {} : l.subscribe(Me.batchCalls(m));
          return l.updateResult(), y;
        },
        [l, s]
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult()
    ),
    b.useEffect(() => {
      l.setOptions(o, { listeners: !1 });
    }, [o, l]),
    mC(o, c))
  )
    throw pC(o, l, i);
  if (
    fC({
      result: c,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
    })
  )
    throw c.error;
  return (
    (h =
      (f = r.getDefaultOptions().queries) == null
        ? void 0
        : f._experimental_afterQuery) == null || h.call(f, o, c),
    o.notifyOnChangeProps ? c : l.trackResult(c)
  );
}
function ie(e, t) {
  return gC(e, eC);
}
function oe(e, t) {
  const n = Re(),
    [r] = b.useState(() => new rC(n, e));
  b.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const s = b.useSyncExternalStore(
      b.useCallback((o) => r.subscribe(Me.batchCalls(o)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    i = b.useCallback(
      (o, l) => {
        r.mutate(o, l).catch(cC);
      },
      [r]
    );
  if (s.error && cv(r.options.throwOnError, [s.error])) throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
function uv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: yC } = Object.prototype,
  { getPrototypeOf: gm } = Object,
  Gc = ((e) => (t) => {
    const n = yC.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ln = (e) => ((e = e.toLowerCase()), (t) => Gc(t) === e),
  Xc = (e) => (t) => typeof t === e,
  { isArray: Li } = Array,
  na = Xc("undefined");
function xC(e) {
  return (
    e !== null &&
    !na(e) &&
    e.constructor !== null &&
    !na(e.constructor) &&
    Pt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const dv = ln("ArrayBuffer");
function vC(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && dv(e.buffer)),
    t
  );
}
const wC = Xc("string"),
  Pt = Xc("function"),
  fv = Xc("number"),
  Jc = (e) => e !== null && typeof e == "object",
  bC = (e) => e === !0 || e === !1,
  Al = (e) => {
    if (Gc(e) !== "object") return !1;
    const t = gm(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  SC = ln("Date"),
  kC = ln("File"),
  CC = ln("Blob"),
  EC = ln("FileList"),
  NC = (e) => Jc(e) && Pt(e.pipe),
  jC = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Pt(e.append) &&
          ((t = Gc(e)) === "formdata" ||
            (t === "object" &&
              Pt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  TC = ln("URLSearchParams"),
  [PC, AC, _C, RC] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ln
  ),
  OC = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ka(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Li(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let l;
    for (r = 0; r < o; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function hv(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Jr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  mv = (e) => !na(e) && e !== Jr;
function Pf() {
  const { caseless: e } = (mv(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && hv(t, s)) || s;
      Al(t[i]) && Al(r)
        ? (t[i] = Pf(t[i], r))
        : Al(r)
        ? (t[i] = Pf({}, r))
        : Li(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && ka(arguments[r], n);
  return t;
}
const MC = (e, t, n, { allOwnKeys: r } = {}) => (
    ka(
      t,
      (s, i) => {
        n && Pt(s) ? (e[i] = uv(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  DC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  LC = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  FC = (e, t, n, r) => {
    let s, i, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = n !== !1 && gm(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  IC = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  BC = (e) => {
    if (!e) return null;
    if (Li(e)) return e;
    let t = e.length;
    if (!fv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  zC = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && gm(Uint8Array)),
  VC = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  UC = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  $C = ln("HTMLFormElement"),
  HC = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  ng = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  qC = ln("RegExp"),
  pv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ka(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  WC = (e) => {
    pv(e, (t, n) => {
      if (Pt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Pt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  KC = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return Li(e) ? r(e) : r(String(e).split(t)), n;
  },
  YC = () => {},
  QC = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ku = "abcdefghijklmnopqrstuvwxyz",
  rg = "0123456789",
  gv = { DIGIT: rg, ALPHA: Ku, ALPHA_DIGIT: Ku + Ku.toUpperCase() + rg },
  GC = (e = 16, t = gv.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function XC(e) {
  return !!(
    e &&
    Pt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const JC = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Jc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = Li(r) ? [] : {};
            return (
              ka(r, (o, l) => {
                const c = n(o, s + 1);
                !na(c) && (i[l] = c);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  ZC = ln("AsyncFunction"),
  eE = (e) => e && (Jc(e) || Pt(e)) && Pt(e.then) && Pt(e.catch),
  yv = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Jr.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === Jr && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), Jr.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Pt(Jr.postMessage)
  ),
  tE =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Jr)
      : (typeof process < "u" && process.nextTick) || yv,
  P = {
    isArray: Li,
    isArrayBuffer: dv,
    isBuffer: xC,
    isFormData: jC,
    isArrayBufferView: vC,
    isString: wC,
    isNumber: fv,
    isBoolean: bC,
    isObject: Jc,
    isPlainObject: Al,
    isReadableStream: PC,
    isRequest: AC,
    isResponse: _C,
    isHeaders: RC,
    isUndefined: na,
    isDate: SC,
    isFile: kC,
    isBlob: CC,
    isRegExp: qC,
    isFunction: Pt,
    isStream: NC,
    isURLSearchParams: TC,
    isTypedArray: zC,
    isFileList: EC,
    forEach: ka,
    merge: Pf,
    extend: MC,
    trim: OC,
    stripBOM: DC,
    inherits: LC,
    toFlatObject: FC,
    kindOf: Gc,
    kindOfTest: ln,
    endsWith: IC,
    toArray: BC,
    forEachEntry: VC,
    matchAll: UC,
    isHTMLForm: $C,
    hasOwnProperty: ng,
    hasOwnProp: ng,
    reduceDescriptors: pv,
    freezeMethods: WC,
    toObjectSet: KC,
    toCamelCase: HC,
    noop: YC,
    toFiniteNumber: QC,
    findKey: hv,
    global: Jr,
    isContextDefined: mv,
    ALPHABET: gv,
    generateString: GC,
    isSpecCompliantForm: XC,
    toJSONObject: JC,
    isAsyncFn: ZC,
    isThenable: eE,
    setImmediate: yv,
    asap: tE,
  };
function H(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
P.inherits(H, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const xv = H.prototype,
  vv = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  vv[e] = { value: e };
});
Object.defineProperties(H, vv);
Object.defineProperty(xv, "isAxiosError", { value: !0 });
H.from = (e, t, n, r, s, i) => {
  const o = Object.create(xv);
  return (
    P.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    H.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const nE = null;
function Af(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function wv(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function sg(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = wv(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function rE(e) {
  return P.isArray(e) && !e.some(Af);
}
const sE = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Zc(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, w) {
        return !P.isUndefined(w[v]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || d,
    i = n.dots,
    o = n.indexes,
    c = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (P.isDate(y)) return y.toISOString();
    if (!c && P.isBlob(y))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(y) || P.isTypedArray(y)
      ? c && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function d(y, v, w) {
    let g = y;
    if (y && !w && typeof y == "object") {
      if (P.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (P.isArray(y) && rE(y)) ||
        ((P.isFileList(y) || P.endsWith(v, "[]")) && (g = P.toArray(y)))
      )
        return (
          (v = wv(v)),
          g.forEach(function (x, S) {
            !(P.isUndefined(x) || x === null) &&
              t.append(
                o === !0 ? sg([v], S, i) : o === null ? v : v + "[]",
                u(x)
              );
          }),
          !1
        );
    }
    return Af(y) ? !0 : (t.append(sg(w, v, i), u(y)), !1);
  }
  const f = [],
    h = Object.assign(sE, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Af,
    });
  function m(y, v) {
    if (!P.isUndefined(y)) {
      if (f.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      f.push(y),
        P.forEach(y, function (g, p) {
          (!(P.isUndefined(g) || g === null) &&
            s.call(t, g, P.isString(p) ? p.trim() : p, v, h)) === !0 &&
            m(g, v ? v.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function ig(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ym(e, t) {
  (this._pairs = []), e && Zc(e, this, t);
}
const bv = ym.prototype;
bv.append = function (t, n) {
  this._pairs.push([t, n]);
};
bv.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ig);
      }
    : ig;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function iE(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Sv(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || iE,
    s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = P.isURLSearchParams(t) ? t.toString() : new ym(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class og {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const kv = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  oE = typeof URLSearchParams < "u" ? URLSearchParams : ym,
  aE = typeof FormData < "u" ? FormData : null,
  lE = typeof Blob < "u" ? Blob : null,
  cE = {
    isBrowser: !0,
    classes: { URLSearchParams: oE, FormData: aE, Blob: lE },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  xm = typeof window < "u" && typeof document < "u",
  _f = (typeof navigator == "object" && navigator) || void 0,
  uE =
    xm &&
    (!_f || ["ReactNative", "NativeScript", "NS"].indexOf(_f.product) < 0),
  dE =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  fE = (xm && window.location.href) || "http://localhost",
  hE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: xm,
        hasStandardBrowserEnv: uE,
        hasStandardBrowserWebWorkerEnv: dE,
        navigator: _f,
        origin: fE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wt = { ...hE, ...cE };
function mE(e, t) {
  return Zc(
    e,
    new wt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return wt.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function pE(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function gE(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Cv(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o),
      c = i >= n.length;
    return (
      (o = !o && P.isArray(s) ? s.length : o),
      c
        ? (P.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !l)
        : ((!s[o] || !P.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && P.isArray(s[o]) && (s[o] = gE(s[o])),
          !l)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, s) => {
        t(pE(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function yE(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ca = {
  transitional: kv,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = P.isObject(t);
      if ((i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return s ? JSON.stringify(Cv(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t) ||
        P.isReadableStream(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return mE(t, this.formSerializer).toString();
        if ((l = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return Zc(
            l ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), yE(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ca.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (P.isResponse(t) || P.isReadableStream(t)) return t;
      if (t && P.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? H.from(l, H.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: wt.classes.FormData, Blob: wt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
P.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ca.headers[e] = {};
});
const xE = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  vE = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && xE[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  ag = Symbol("internals");
function Zi(e) {
  return e && String(e).trim().toLowerCase();
}
function _l(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(_l) : String(e);
}
function wE(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const bE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Yu(e, t, n, r, s) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function SE(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function kE(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class bt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(l, c, u) {
      const d = Zi(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = P.findKey(s, d);
      (!f || s[f] === void 0 || u === !0 || (u === void 0 && s[f] !== !1)) &&
        (s[f || c] = _l(l));
    }
    const o = (l, c) => P.forEach(l, (u, d) => i(u, d, c));
    if (P.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (P.isString(t) && (t = t.trim()) && !bE(t)) o(vE(t), n);
    else if (P.isHeaders(t)) for (const [l, c] of t.entries()) i(c, l, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Zi(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return wE(s);
        if (P.isFunction(n)) return n.call(this, s, r);
        if (P.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Zi(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = Zi(o)), o)) {
        const l = P.findKey(r, o);
        l && (!n || Yu(r, r[l], l, n)) && (delete r[l], (s = !0));
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Yu(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (s, i) => {
        const o = P.findKey(r, i);
        if (o) {
          (n[o] = _l(s)), delete n[i];
          return;
        }
        const l = t ? SE(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = _l(s)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ag] = this[ag] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const l = Zi(o);
      r[l] || (kE(s, o), (r[l] = !0));
    }
    return P.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
bt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.reduceDescriptors(bt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
P.freezeMethods(bt);
function Qu(e, t) {
  const n = this || Ca,
    r = t || n,
    s = bt.from(r.headers);
  let i = r.data;
  return (
    P.forEach(e, function (l) {
      i = l.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function Ev(e) {
  return !!(e && e.__CANCEL__);
}
function Fi(e, t, n) {
  H.call(this, e ?? "canceled", H.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(Fi, H, { __CANCEL__: !0 });
function Nv(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new H(
          "Request failed with status code " + n.status,
          [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function CE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function EE(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const u = Date.now(),
        d = r[i];
      o || (o = u), (n[s] = c), (r[s] = u);
      let f = i,
        h = 0;
      for (; f !== s; ) (h += n[f++]), (f = f % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), u - o < t)) return;
      const m = d && u - d;
      return m ? Math.round((h * 1e3) / m) : void 0;
    }
  );
}
function NE(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (u, d = Date.now()) => {
    (n = d), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const d = Date.now(),
        f = d - n;
      f >= r
        ? o(u, d)
        : ((s = u),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - f)));
    },
    () => s && o(s),
  ];
}
const vc = (e, t, n = 3) => {
    let r = 0;
    const s = EE(50, 250);
    return NE((i) => {
      const o = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        c = o - r,
        u = s(c),
        d = o <= l;
      r = o;
      const f = {
        loaded: o,
        total: l,
        progress: l ? o / l : void 0,
        bytes: c,
        rate: u || void 0,
        estimated: u && l && d ? (l - o) / u : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  lg = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  cg =
    (e) =>
    (...t) =>
      P.asap(() => e(...t)),
  jE = wt.hasStandardBrowserEnv
    ? (function () {
        const t =
            wt.navigator && /(msie|trident)/i.test(wt.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(i) {
          let o = i;
          return (
            t && (n.setAttribute("href", o), (o = n.href)),
            n.setAttribute("href", o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (o) {
            const l = P.isString(o) ? s(o) : o;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  TE = wt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          P.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            P.isString(r) && o.push("path=" + r),
            P.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function PE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function AE(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jv(e, t) {
  return e && !PE(t) ? AE(e, t) : t;
}
const ug = (e) => (e instanceof bt ? { ...e } : e);
function xs(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return P.isPlainObject(u) && P.isPlainObject(d)
      ? P.merge.call({ caseless: f }, u, d)
      : P.isPlainObject(d)
      ? P.merge({}, d)
      : P.isArray(d)
      ? d.slice()
      : d;
  }
  function s(u, d, f) {
    if (P.isUndefined(d)) {
      if (!P.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, d, f);
  }
  function i(u, d) {
    if (!P.isUndefined(d)) return r(void 0, d);
  }
  function o(u, d) {
    if (P.isUndefined(d)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function l(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e) return r(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, d) => s(ug(u), ug(d), !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = c[d] || s,
        h = f(e[d], t[d], d);
      (P.isUndefined(h) && f !== l) || (n[d] = h);
    }),
    n
  );
}
const Tv = (e) => {
    const t = xs({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: l,
    } = t;
    (t.headers = o = bt.from(o)),
      (t.url = Sv(jv(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let c;
    if (P.isFormData(n)) {
      if (wt.hasStandardBrowserEnv || wt.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((c = o.getContentType()) !== !1) {
        const [u, ...d] = c
          ? c
              .split(";")
              .map((f) => f.trim())
              .filter(Boolean)
          : [];
        o.setContentType([u || "multipart/form-data", ...d].join("; "));
      }
    }
    if (
      wt.hasStandardBrowserEnv &&
      (r && P.isFunction(r) && (r = r(t)), r || (r !== !1 && jE(t.url)))
    ) {
      const u = s && i && TE.read(i);
      u && o.set(s, u);
    }
    return t;
  },
  _E = typeof XMLHttpRequest < "u",
  RE =
    _E &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Tv(e);
        let i = s.data;
        const o = bt.from(s.headers).normalize();
        let { responseType: l, onUploadProgress: c, onDownloadProgress: u } = s,
          d,
          f,
          h,
          m,
          y;
        function v() {
          m && m(),
            y && y(),
            s.cancelToken && s.cancelToken.unsubscribe(d),
            s.signal && s.signal.removeEventListener("abort", d);
        }
        let w = new XMLHttpRequest();
        w.open(s.method.toUpperCase(), s.url, !0), (w.timeout = s.timeout);
        function g() {
          if (!w) return;
          const x = bt.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders()
            ),
            C = {
              data:
                !l || l === "text" || l === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: x,
              config: e,
              request: w,
            };
          Nv(
            function (j) {
              n(j), v();
            },
            function (j) {
              r(j), v();
            },
            C
          ),
            (w = null);
        }
        "onloadend" in w
          ? (w.onloadend = g)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(g);
            }),
          (w.onabort = function () {
            w &&
              (r(new H("Request aborted", H.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function () {
            r(new H("Network Error", H.ERR_NETWORK, e, w)), (w = null);
          }),
          (w.ontimeout = function () {
            let S = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const C = s.transitional || kv;
            s.timeoutErrorMessage && (S = s.timeoutErrorMessage),
              r(
                new H(
                  S,
                  C.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
                  e,
                  w
                )
              ),
              (w = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            P.forEach(o.toJSON(), function (S, C) {
              w.setRequestHeader(C, S);
            }),
          P.isUndefined(s.withCredentials) ||
            (w.withCredentials = !!s.withCredentials),
          l && l !== "json" && (w.responseType = s.responseType),
          u && (([h, y] = vc(u, !0)), w.addEventListener("progress", h)),
          c &&
            w.upload &&
            (([f, m] = vc(c)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", m)),
          (s.cancelToken || s.signal) &&
            ((d = (x) => {
              w &&
                (r(!x || x.type ? new Fi(null, e, w) : x),
                w.abort(),
                (w = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(d),
            s.signal &&
              (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
        const p = CE(s.url);
        if (p && wt.protocols.indexOf(p) === -1) {
          r(new H("Unsupported protocol " + p + ":", H.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  OE = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (u) {
        if (!s) {
          (s = !0), l();
          const d = u instanceof Error ? u : this.reason;
          r.abort(
            d instanceof H ? d : new Fi(d instanceof Error ? d.message : d)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new H(`timeout ${t} of ms exceeded`, H.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: c } = r;
      return (c.unsubscribe = () => P.asap(l)), c;
    }
  },
  ME = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  DE = async function* (e, t) {
    for await (const n of LE(e)) yield* ME(n, t);
  },
  LE = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  dg = (e, t, n, r) => {
    const s = DE(e, t);
    let i = 0,
      o,
      l = (c) => {
        o || ((o = !0), r && r(c));
      };
    return new ReadableStream(
      {
        async pull(c) {
          try {
            const { done: u, value: d } = await s.next();
            if (u) {
              l(), c.close();
              return;
            }
            let f = d.byteLength;
            if (n) {
              let h = (i += f);
              n(h);
            }
            c.enqueue(new Uint8Array(d));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(c) {
          return l(c), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  eu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Pv = eu && typeof ReadableStream == "function",
  FE =
    eu &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Av = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  IE =
    Pv &&
    Av(() => {
      let e = !1;
      const t = new Request(wt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  fg = 64 * 1024,
  Rf = Pv && Av(() => P.isReadableStream(new Response("").body)),
  wc = { stream: Rf && ((e) => e.body) };
eu &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !wc[t] &&
        (wc[t] = P.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new H(
                `Response type '${t}' is not supported`,
                H.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const BE = async (e) => {
    if (e == null) return 0;
    if (P.isBlob(e)) return e.size;
    if (P.isSpecCompliantForm(e))
      return (
        await new Request(wt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (P.isArrayBufferView(e) || P.isArrayBuffer(e)) return e.byteLength;
    if ((P.isURLSearchParams(e) && (e = e + ""), P.isString(e)))
      return (await FE(e)).byteLength;
  },
  zE = async (e, t) => {
    const n = P.toFiniteNumber(e.getContentLength());
    return n ?? BE(t);
  },
  VE =
    eu &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: l,
        onUploadProgress: c,
        responseType: u,
        headers: d,
        withCredentials: f = "same-origin",
        fetchOptions: h,
      } = Tv(e);
      u = u ? (u + "").toLowerCase() : "text";
      let m = OE([s, i && i.toAbortSignal()], o),
        y;
      const v =
        m &&
        m.unsubscribe &&
        (() => {
          m.unsubscribe();
        });
      let w;
      try {
        if (
          c &&
          IE &&
          n !== "get" &&
          n !== "head" &&
          (w = await zE(d, r)) !== 0
        ) {
          let C = new Request(t, { method: "POST", body: r, duplex: "half" }),
            T;
          if (
            (P.isFormData(r) &&
              (T = C.headers.get("content-type")) &&
              d.setContentType(T),
            C.body)
          ) {
            const [j, N] = lg(w, vc(cg(c)));
            r = dg(C.body, fg, j, N);
          }
        }
        P.isString(f) || (f = f ? "include" : "omit");
        const g = "credentials" in Request.prototype;
        y = new Request(t, {
          ...h,
          signal: m,
          method: n.toUpperCase(),
          headers: d.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: g ? f : void 0,
        });
        let p = await fetch(y);
        const x = Rf && (u === "stream" || u === "response");
        if (Rf && (l || (x && v))) {
          const C = {};
          ["status", "statusText", "headers"].forEach((O) => {
            C[O] = p[O];
          });
          const T = P.toFiniteNumber(p.headers.get("content-length")),
            [j, N] = (l && lg(T, vc(cg(l), !0))) || [];
          p = new Response(
            dg(p.body, fg, j, () => {
              N && N(), v && v();
            }),
            C
          );
        }
        u = u || "text";
        let S = await wc[P.findKey(wc, u) || "text"](p, e);
        return (
          !x && v && v(),
          await new Promise((C, T) => {
            Nv(C, T, {
              data: S,
              headers: bt.from(p.headers),
              status: p.status,
              statusText: p.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (g) {
        throw (
          (v && v(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new H("Network Error", H.ERR_NETWORK, e, y), {
                cause: g.cause || g,
              })
            : H.from(g, g && g.code, e, y))
        );
      }
    }),
  Of = { http: nE, xhr: RE, fetch: VE };
P.forEach(Of, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const hg = (e) => `- ${e}`,
  UE = (e) => P.isFunction(e) || e === null || e === !1,
  _v = {
    getAdapter: (e) => {
      e = P.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !UE(n) && ((r = Of[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new H(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([l, c]) =>
            `adapter ${l} ` +
            (c === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(hg).join(`
`)
            : " " + hg(i[0])
          : "as no adapter specified";
        throw new H(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Of,
  };
function Gu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Fi(null, e);
}
function mg(e) {
  return (
    Gu(e),
    (e.headers = bt.from(e.headers)),
    (e.data = Qu.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _v
      .getAdapter(e.adapter || Ca.adapter)(e)
      .then(
        function (r) {
          return (
            Gu(e),
            (r.data = Qu.call(e, e.transformResponse, r)),
            (r.headers = bt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Ev(r) ||
              (Gu(e),
              r &&
                r.response &&
                ((r.response.data = Qu.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = bt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Rv = "1.7.7",
  vm = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    vm[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const pg = {};
vm.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      Rv +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, l) => {
    if (t === !1)
      throw new H(
        s(o, " has been removed" + (n ? " in " + n : "")),
        H.ERR_DEPRECATED
      );
    return (
      n &&
        !pg[o] &&
        ((pg[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, l) : !0
    );
  };
};
function $E(e, t, n) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const l = e[i],
        c = l === void 0 || o(l, i, e);
      if (c !== !0)
        throw new H("option " + i + " must be " + c, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
  }
}
const Mf = { assertOptions: $E, validators: vm },
  er = Mf.validators;
class us {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new og(), response: new og() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = xs(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      Mf.assertOptions(
        r,
        {
          silentJSONParsing: er.transitional(er.boolean),
          forcedJSONParsing: er.transitional(er.boolean),
          clarifyTimeoutError: er.transitional(er.boolean),
        },
        !1
      ),
      s != null &&
        (P.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Mf.assertOptions(
              s,
              { encode: er.function, serialize: er.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && P.merge(i.common, i[n.method]);
    i &&
      P.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = bt.concat(o, i));
    const l = [];
    let c = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((c = c && v.synchronous), l.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d,
      f = 0,
      h;
    if (!c) {
      const y = [mg.bind(this), void 0];
      for (
        y.unshift.apply(y, l),
          y.push.apply(y, u),
          h = y.length,
          d = Promise.resolve(n);
        f < h;

      )
        d = d.then(y[f++], y[f++]);
      return d;
    }
    h = l.length;
    let m = n;
    for (f = 0; f < h; ) {
      const y = l[f++],
        v = l[f++];
      try {
        m = y(m);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      d = mg.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, h = u.length; f < h; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = xs(this.defaults, t);
    const n = jv(t.baseURL, t.url);
    return Sv(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  us.prototype[t] = function (n, r) {
    return this.request(
      xs(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, l) {
      return this.request(
        xs(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (us.prototype[t] = n()), (us.prototype[t + "Form"] = n(!0));
});
class wm {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, l) {
        r.reason || ((r.reason = new Fi(i, o, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new wm(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function HE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function qE(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Df = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Df).forEach(([e, t]) => {
  Df[t] = e;
});
function Ov(e) {
  const t = new us(e),
    n = uv(us.prototype.request, t);
  return (
    P.extend(n, us.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Ov(xs(e, s));
    }),
    n
  );
}
const _e = Ov(Ca);
_e.Axios = us;
_e.CanceledError = Fi;
_e.CancelToken = wm;
_e.isCancel = Ev;
_e.VERSION = Rv;
_e.toFormData = Zc;
_e.AxiosError = H;
_e.Cancel = _e.CanceledError;
_e.all = function (t) {
  return Promise.all(t);
};
_e.spread = HE;
_e.isAxiosError = qE;
_e.mergeConfig = xs;
_e.AxiosHeaders = bt;
_e.formToJSON = (e) => Cv(P.isHTMLForm(e) ? new FormData(e) : e);
_e.getAdapter = _v.getAdapter;
_e.HttpStatusCode = Df;
_e.default = _e;
const F = _e.create({
  baseURL: "https://websitekolaborasiploy-production.up.railway.app/api/v1",
  withCredentials: !0,
});
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Mv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var KE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YE = b.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...l
    },
    c
  ) =>
    b.createElement(
      "svg",
      {
        ref: c,
        ...KE,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Mv("lucide", s),
        ...l,
      },
      [
        ...o.map(([u, d]) => b.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y = (e, t) => {
  const n = b.forwardRef(({ className: r, ...s }, i) =>
    b.createElement(YE, {
      ref: i,
      iconNode: t,
      className: Mv(`lucide-${WE(e)}`, r),
      ...s,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QE = Y("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = Y("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GE = Y("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = Y("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dv = Y("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XE = Y("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Os = Y("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JE = Y("CirclePlus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZE = Y("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lv = Y("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eN = Y("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tN = Y("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nN = Y("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rN = Y("Handshake", [
  ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
  [
    "path",
    {
      d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
      key: "9pr0kb",
    },
  ],
  ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
  ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
  ["path", { d: "M3 4h8", key: "1ep09j" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lf = Y("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fv = Y("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = Y("Loader", [
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
  ["path", { d: "M18 12h4", key: "wj9ykh" }],
  ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
  ["path", { d: "M12 18v4", key: "jadmvz" }],
  ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
  ["path", { d: "M2 12h4", key: "j09sii" }],
  ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bc = Y("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iv = Y("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ff = Y("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sN = Y("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iN = Y("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ea = Y("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bv = Y("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oN = Y("School", [
  ["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4", key: "hhkicm" }],
  [
    "path",
    { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" },
  ],
  ["path", { d: "M18 5v17", key: "1sw6gf" }],
  ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
  ["path", { d: "M6 5v17", key: "1xfsm0" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aN = Y("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = Y("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lN = Y("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zv = Y("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cN = Y("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2",
    },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uN = Y("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const km = Y("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr",
    },
  ],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = Y("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const If = Y("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Na = Y("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Po = Y("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ks = Y("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gn = Y("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Em = b.createContext({});
function Nm(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const jm = typeof window < "u",
  Vv = jm ? b.useLayoutEffect : b.useEffect,
  tu = b.createContext(null),
  Tm = b.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class dN extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        s = (r instanceof HTMLElement && r.offsetWidth) || 0,
        i = this.props.sizeRef.current;
      (i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft),
        (i.right = s - i.width - i.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function fN({ children: e, isPresent: t, anchorX: n }) {
  const r = b.useId(),
    s = b.useRef(null),
    i = b.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: o } = b.useContext(Tm);
  return (
    b.useInsertionEffect(() => {
      const { width: l, height: c, top: u, left: d, right: f } = i.current;
      if (t || !s.current || !l || !c) return;
      const h = n === "left" ? `left: ${d}` : `right: ${f}`;
      s.current.dataset.motionPopId = r;
      const m = document.createElement("style");
      return (
        o && (m.nonce = o),
        document.head.appendChild(m),
        m.sheet &&
          m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${h}px !important;
            top: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(m);
        }
      );
    }, [t]),
    a.jsx(dN, {
      isPresent: t,
      childRef: s,
      sizeRef: i,
      children: b.cloneElement(e, { ref: s }),
    })
  );
}
const hN = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
  anchorX: l,
}) => {
  const c = Nm(mN),
    u = b.useId();
  let d = !0,
    f = b.useMemo(
      () => (
        (d = !1),
        {
          id: u,
          initial: t,
          isPresent: n,
          custom: s,
          onExitComplete: (h) => {
            c.set(h, !0);
            for (const m of c.values()) if (!m) return;
            r && r();
          },
          register: (h) => (c.set(h, !1), () => c.delete(h)),
        }
      ),
      [n, c, r]
    );
  return (
    i && d && (f = { ...f }),
    b.useMemo(() => {
      c.forEach((h, m) => c.set(m, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = a.jsx(fN, { isPresent: n, anchorX: l, children: e })),
    a.jsx(tu.Provider, { value: f, children: e })
  );
};
function mN() {
  return new Map();
}
function Uv(e = !0) {
  const t = b.useContext(tu);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = b.useId();
  b.useEffect(() => {
    if (e) return s(i);
  }, [e]);
  const o = b.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const ol = (e) => e.key || "";
function yg(e) {
  const t = [];
  return (
    b.Children.forEach(e, (n) => {
      b.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const pN = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  presenceAffectsLayout: s = !0,
  mode: i = "sync",
  propagate: o = !1,
  anchorX: l = "left",
}) => {
  const [c, u] = Uv(o),
    d = b.useMemo(() => yg(e), [e]),
    f = o && !c ? [] : d.map(ol),
    h = b.useRef(!0),
    m = b.useRef(d),
    y = Nm(() => new Map()),
    [v, w] = b.useState(d),
    [g, p] = b.useState(d);
  Vv(() => {
    (h.current = !1), (m.current = d);
    for (let C = 0; C < g.length; C++) {
      const T = ol(g[C]);
      f.includes(T) ? y.delete(T) : y.get(T) !== !0 && y.set(T, !1);
    }
  }, [g, f.length, f.join("-")]);
  const x = [];
  if (d !== v) {
    let C = [...d];
    for (let T = 0; T < g.length; T++) {
      const j = g[T],
        N = ol(j);
      f.includes(N) || (C.splice(T, 0, j), x.push(j));
    }
    return i === "wait" && x.length && (C = x), p(yg(C)), w(d), null;
  }
  const { forceRender: S } = b.useContext(Em);
  return a.jsx(a.Fragment, {
    children: g.map((C) => {
      const T = ol(C),
        j = o && !c ? !1 : d === g || f.includes(T),
        N = () => {
          if (y.has(T)) y.set(T, !0);
          else return;
          let O = !0;
          y.forEach((M) => {
            M || (O = !1);
          }),
            O &&
              (S == null || S(),
              p(m.current),
              o && (u == null || u()),
              r && r());
        };
      return a.jsx(
        hN,
        {
          isPresent: j,
          initial: !h.current || n ? void 0 : !1,
          custom: t,
          presenceAffectsLayout: s,
          mode: i,
          onExitComplete: j ? void 0 : N,
          anchorX: l,
          children: C,
        },
        T
      );
    }),
  });
};
function Pm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Am(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Hn = (e, t, n) => (n > t ? t : n < e ? e : n);
let Sc = () => {};
const qn = {},
  $v = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Hv = (e) => /^0[^.\s]+$/u.test(e);
function _m(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ht = (e) => e,
  gN = (e, t) => (n) => t(e(n)),
  ja = (...e) => e.reduce(gN),
  ra = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Rm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Pm(this.subscriptions, t), () => Am(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const kn = (e) => e * 1e3,
  Cn = (e) => e / 1e3;
function qv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Wv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  yN = 1e-7,
  xN = 12;
function vN(e, t, n, r, s) {
  let i,
    o,
    l = 0;
  do (o = t + (n - t) / 2), (i = Wv(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > yN && ++l < xN);
  return o;
}
function Ta(e, t, n, r) {
  if (e === t && n === r) return Ht;
  const s = (i) => vN(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Wv(s(i), t, r));
}
const Kv = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Yv = (e) => (t) => 1 - e(1 - t),
  Qv = Ta(0.33, 1.53, 0.69, 0.99),
  Om = Yv(Qv),
  Gv = Kv(Om),
  Xv = (e) =>
    (e *= 2) < 1 ? 0.5 * Om(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Mm = (e) => 1 - Math.sin(Math.acos(e)),
  Jv = Yv(Mm),
  Zv = Kv(Mm),
  wN = Ta(0.42, 0, 1, 1),
  bN = Ta(0, 0, 0.58, 1),
  ew = Ta(0.42, 0, 0.58, 1),
  SN = (e) => Array.isArray(e) && typeof e[0] != "number",
  tw = (e) => Array.isArray(e) && typeof e[0] == "number",
  xg = {
    linear: Ht,
    easeIn: wN,
    easeInOut: ew,
    easeOut: bN,
    circIn: Mm,
    circInOut: Zv,
    circOut: Jv,
    backIn: Om,
    backInOut: Gv,
    backOut: Qv,
    anticipate: Xv,
  },
  kN = (e) => typeof e == "string",
  vg = (e) => {
    if (tw(e)) {
      Sc(e.length === 4);
      const [t, n, r, s] = e;
      return Ta(t, n, r, s);
    } else if (kN(e)) return Sc(xg[e] !== void 0), xg[e];
    return e;
  },
  al = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  wg = { value: null, addProjectionMetrics: null };
function CN(e, t) {
  let n = new Set(),
    r = new Set(),
    s = !1,
    i = !1;
  const o = new WeakSet();
  let l = { delta: 0, timestamp: 0, isProcessing: !1 },
    c = 0;
  function u(f) {
    o.has(f) && (d.schedule(f), e()), c++, f(l);
  }
  const d = {
    schedule: (f, h = !1, m = !1) => {
      const v = m && s ? n : r;
      return h && o.add(f), v.has(f) || v.add(f), f;
    },
    cancel: (f) => {
      r.delete(f), o.delete(f);
    },
    process: (f) => {
      if (((l = f), s)) {
        i = !0;
        return;
      }
      (s = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && wg.value && wg.value.frameloop[t].push(c),
        (c = 0),
        n.clear(),
        (s = !1),
        i && ((i = !1), d.process(f));
    },
  };
  return d;
}
const EN = 40;
function nw(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = al.reduce((x, S) => ((x[S] = CN(i, t ? S : void 0)), x), {}),
    {
      setup: l,
      read: c,
      resolveKeyframes: u,
      preUpdate: d,
      update: f,
      preRender: h,
      render: m,
      postRender: y,
    } = o,
    v = () => {
      const x = qn.useManualTiming ? s.timestamp : performance.now();
      (n = !1),
        qn.useManualTiming ||
          (s.delta = r ? 1e3 / 60 : Math.max(Math.min(x - s.timestamp, EN), 1)),
        (s.timestamp = x),
        (s.isProcessing = !0),
        l.process(s),
        c.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        h.process(s),
        m.process(s),
        y.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    w = () => {
      (n = !0), (r = !0), s.isProcessing || e(v);
    };
  return {
    schedule: al.reduce((x, S) => {
      const C = o[S];
      return (x[S] = (T, j = !1, N = !1) => (n || w(), C.schedule(T, j, N))), x;
    }, {}),
    cancel: (x) => {
      for (let S = 0; S < al.length; S++) o[al[S]].cancel(x);
    },
    state: s,
    steps: o,
  };
}
const {
  schedule: xe,
  cancel: Or,
  state: Ve,
  steps: Xu,
} = nw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ht, !0);
let Rl;
function NN() {
  Rl = void 0;
}
const gt = {
    now: () => (
      Rl === void 0 &&
        gt.set(
          Ve.isProcessing || qn.useManualTiming
            ? Ve.timestamp
            : performance.now()
        ),
      Rl
    ),
    set: (e) => {
      (Rl = e), queueMicrotask(NN);
    },
  },
  rw = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Dm = rw("--"),
  jN = rw("var(--"),
  Lm = (e) => (jN(e) ? TN.test(e.split("/*")[0].trim()) : !1),
  TN =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ii = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  sa = { ...Ii, transform: (e) => Hn(0, 1, e) },
  ll = { ...Ii, default: 1 },
  Ao = (e) => Math.round(e * 1e5) / 1e5,
  Fm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function PN(e) {
  return e == null;
}
const AN =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Im = (e, t) => (n) =>
    !!(
      (typeof n == "string" && AN.test(n) && n.startsWith(e)) ||
      (t && !PN(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  sw = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, l] = r.match(Fm);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  _N = (e) => Hn(0, 255, e),
  Ju = { ...Ii, transform: (e) => Math.round(_N(e)) },
  Zr = {
    test: Im("rgb", "red"),
    parse: sw("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ju.transform(e) +
      ", " +
      Ju.transform(t) +
      ", " +
      Ju.transform(n) +
      ", " +
      Ao(sa.transform(r)) +
      ")",
  };
function RN(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Bf = { test: Im("#"), parse: RN, transform: Zr.transform },
  Pa = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  rr = Pa("deg"),
  En = Pa("%"),
  V = Pa("px"),
  ON = Pa("vh"),
  MN = Pa("vw"),
  bg = {
    ...En,
    parse: (e) => En.parse(e) / 100,
    transform: (e) => En.transform(e * 100),
  },
  Ks = {
    test: Im("hsl", "hue"),
    parse: sw("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      En.transform(Ao(t)) +
      ", " +
      En.transform(Ao(n)) +
      ", " +
      Ao(sa.transform(r)) +
      ")",
  },
  Ge = {
    test: (e) => Zr.test(e) || Bf.test(e) || Ks.test(e),
    parse: (e) =>
      Zr.test(e) ? Zr.parse(e) : Ks.test(e) ? Ks.parse(e) : Bf.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Zr.transform(e)
        : Ks.transform(e),
  },
  DN =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function LN(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Fm)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(DN)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const iw = "number",
  ow = "color",
  FN = "var",
  IN = "var(",
  Sg = "${}",
  BN =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ia(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const l = t
    .replace(
      BN,
      (c) => (
        Ge.test(c)
          ? (r.color.push(i), s.push(ow), n.push(Ge.parse(c)))
          : c.startsWith(IN)
          ? (r.var.push(i), s.push(FN), n.push(c))
          : (r.number.push(i), s.push(iw), n.push(parseFloat(c))),
        ++i,
        Sg
      )
    )
    .split(Sg);
  return { values: n, split: l, indexes: r, types: s };
}
function aw(e) {
  return ia(e).values;
}
function lw(e) {
  const { split: t, types: n } = ia(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const l = n[o];
        l === iw
          ? (i += Ao(s[o]))
          : l === ow
          ? (i += Ge.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const zN = (e) => (typeof e == "number" ? 0 : e);
function VN(e) {
  const t = aw(e);
  return lw(e)(t.map(zN));
}
const Mr = {
  test: LN,
  parse: aw,
  createTransformer: lw,
  getAnimatableNone: VN,
};
function Zu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function UN({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - l;
    (s = Zu(c, l, e + 1 / 3)), (i = Zu(c, l, e)), (o = Zu(c, l, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function kc(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ge = (e, t, n) => e + (t - e) * n,
  ed = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  $N = [Bf, Zr, Ks],
  HN = (e) => $N.find((t) => t.test(e));
function kg(e) {
  const t = HN(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Ks && (n = UN(n)), n;
}
const Cg = (e, t) => {
    const n = kg(e),
      r = kg(t);
    if (!n || !r) return kc(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = ed(n.red, r.red, i)),
      (s.green = ed(n.green, r.green, i)),
      (s.blue = ed(n.blue, r.blue, i)),
      (s.alpha = ge(n.alpha, r.alpha, i)),
      Zr.transform(s)
    );
  },
  zf = new Set(["none", "hidden"]);
function qN(e, t) {
  return zf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function WN(e, t) {
  return (n) => ge(e, t, n);
}
function Bm(e) {
  return typeof e == "number"
    ? WN
    : typeof e == "string"
    ? Lm(e)
      ? kc
      : Ge.test(e)
      ? Cg
      : QN
    : Array.isArray(e)
    ? cw
    : typeof e == "object"
    ? Ge.test(e)
      ? Cg
      : KN
    : kc;
}
function cw(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => Bm(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function KN(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Bm(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function YN(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s],
      o = e.indexes[i][r[i]],
      l = e.values[o] ?? 0;
    (n[s] = l), r[i]++;
  }
  return n;
}
const QN = (e, t) => {
  const n = Mr.createTransformer(t),
    r = ia(e),
    s = ia(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (zf.has(e) && !s.values.length) || (zf.has(t) && !r.values.length)
      ? qN(e, t)
      : ja(cw(YN(r, s), s.values), n)
    : kc(e, t);
};
function uw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ge(e, t, n)
    : Bm(e)(e, t);
}
const GN = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => xe.update(t, !0),
      stop: () => Or(t),
      now: () => (Ve.isProcessing ? Ve.timestamp : gt.now()),
    };
  },
  dw = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(i / (s - 1)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Cc = 2e4;
function zm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Cc; ) (t += n), (r = e.next(t));
  return t >= Cc ? 1 / 0 : t;
}
function XN(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    s = Math.min(zm(r), Cc);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: Cn(s),
  };
}
const JN = 5;
function fw(e, t, n) {
  const r = Math.max(t - JN, 0);
  return qv(n - e(r), t - r);
}
const Se = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  td = 0.001;
function ZN({
  duration: e = Se.duration,
  bounce: t = Se.bounce,
  velocity: n = Se.velocity,
  mass: r = Se.mass,
}) {
  let s,
    i,
    o = 1 - t;
  (o = Hn(Se.minDamping, Se.maxDamping, o)),
    (e = Hn(Se.minDuration, Se.maxDuration, Cn(e))),
    o < 1
      ? ((s = (u) => {
          const d = u * o,
            f = d * e,
            h = d - n,
            m = Vf(u, o),
            y = Math.exp(-f);
          return td - (h / m) * y;
        }),
        (i = (u) => {
          const f = u * o * e,
            h = f * n + n,
            m = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Vf(Math.pow(u, 2), o);
          return ((-s(u) + td > 0 ? -1 : 1) * ((h - m) * y)) / v;
        }))
      : ((s = (u) => {
          const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -td + d * f;
        }),
        (i = (u) => {
          const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return d * f;
        }));
  const l = 5 / e,
    c = tj(s, i, l);
  if (((e = kn(e)), isNaN(c)))
    return { stiffness: Se.stiffness, damping: Se.damping, duration: e };
  {
    const u = Math.pow(c, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ej = 12;
function tj(e, t, n) {
  let r = n;
  for (let s = 1; s < ej; s++) r = r - e(r) / t(r);
  return r;
}
function Vf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const nj = ["duration", "bounce"],
  rj = ["stiffness", "damping", "mass"];
function Eg(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function sj(e) {
  let t = {
    velocity: Se.velocity,
    stiffness: Se.stiffness,
    damping: Se.damping,
    mass: Se.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Eg(e, rj) && Eg(e, nj))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Hn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: Se.mass, stiffness: s, damping: i };
    } else {
      const n = ZN(e);
      (t = { ...t, ...n, mass: Se.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Ec(e = Se.visualDuration, t = Se.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    l = { done: !1, value: i },
    {
      stiffness: c,
      damping: u,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: m,
    } = sj({ ...n, velocity: -Cn(n.velocity || 0) }),
    y = h || 0,
    v = u / (2 * Math.sqrt(c * d)),
    w = o - i,
    g = Cn(Math.sqrt(c / d)),
    p = Math.abs(w) < 5;
  r || (r = p ? Se.restSpeed.granular : Se.restSpeed.default),
    s || (s = p ? Se.restDelta.granular : Se.restDelta.default);
  let x;
  if (v < 1) {
    const C = Vf(g, v);
    x = (T) => {
      const j = Math.exp(-v * g * T);
      return (
        o - j * (((y + v * g * w) / C) * Math.sin(C * T) + w * Math.cos(C * T))
      );
    };
  } else if (v === 1) x = (C) => o - Math.exp(-g * C) * (w + (y + g * w) * C);
  else {
    const C = g * Math.sqrt(v * v - 1);
    x = (T) => {
      const j = Math.exp(-v * g * T),
        N = Math.min(C * T, 300);
      return (
        o - (j * ((y + v * g * w) * Math.sinh(N) + C * w * Math.cosh(N))) / C
      );
    };
  }
  const S = {
    calculatedDuration: (m && f) || null,
    next: (C) => {
      const T = x(C);
      if (m) l.done = C >= f;
      else {
        let j = C === 0 ? y : 0;
        v < 1 && (j = C === 0 ? kn(y) : fw(x, C, T));
        const N = Math.abs(j) <= r,
          O = Math.abs(o - T) <= s;
        l.done = N && O;
      }
      return (l.value = l.done ? o : T), l;
    },
    toString: () => {
      const C = Math.min(zm(S), Cc),
        T = dw((j) => S.next(C * j).value, C, 30);
      return C + "ms " + T;
    },
    toTransition: () => {},
  };
  return S;
}
Ec.applyToOptions = (e) => {
  const t = XN(e, 100, Ec);
  return (
    (e.ease = t.ease), (e.duration = kn(t.duration)), (e.type = "keyframes"), e
  );
};
function Uf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: l,
  max: c,
  restDelta: u = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    m = (N) => (l !== void 0 && N < l) || (c !== void 0 && N > c),
    y = (N) =>
      l === void 0
        ? c
        : c === void 0 || Math.abs(l - N) < Math.abs(c - N)
        ? l
        : c;
  let v = n * t;
  const w = f + v,
    g = o === void 0 ? w : o(w);
  g !== w && (v = g - f);
  const p = (N) => -v * Math.exp(-N / r),
    x = (N) => g + p(N),
    S = (N) => {
      const O = p(N),
        M = x(N);
      (h.done = Math.abs(O) <= u), (h.value = h.done ? g : M);
    };
  let C, T;
  const j = (N) => {
    m(h.value) &&
      ((C = N),
      (T = Ec({
        keyframes: [h.value, y(h.value)],
        velocity: fw(x, N, h.value),
        damping: s,
        stiffness: i,
        restDelta: u,
        restSpeed: d,
      })));
  };
  return (
    j(0),
    {
      calculatedDuration: null,
      next: (N) => {
        let O = !1;
        return (
          !T && C === void 0 && ((O = !0), S(N), j(N)),
          C !== void 0 && N >= C ? T.next(N - C) : (!O && S(N), h)
        );
      },
    }
  );
}
function ij(e, t, n) {
  const r = [],
    s = n || qn.mix || uw,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let l = s(e[o], e[o + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[o] || Ht : t;
      l = ja(c, l);
    }
    r.push(l);
  }
  return r;
}
function oj(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((Sc(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const l = ij(t, r, s),
    c = l.length,
    u = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (c > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = ra(e[f], e[f + 1], d);
      return l[f](h);
    };
  return n ? (d) => u(Hn(e[0], e[i - 1], d)) : u;
}
function aj(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = ra(0, t, r);
    e.push(ge(n, 1, s));
  }
}
function lj(e) {
  const t = [0];
  return aj(t, e.length - 1), t;
}
function cj(e, t) {
  return e.map((n) => n * t);
}
function uj(e, t) {
  return e.map(() => t || ew).splice(0, e.length - 1);
}
function _o({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = SN(r) ? r.map(vg) : vg(r),
    i = { done: !1, value: t[0] },
    o = cj(n && n.length === t.length ? n : lj(t), e),
    l = oj(o, t, { ease: Array.isArray(s) ? s : uj(t, s) });
  return {
    calculatedDuration: e,
    next: (c) => ((i.value = l(c)), (i.done = c >= e), i),
  };
}
const dj = (e) => e !== null;
function Vm(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(dj),
    l = s < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
  return !l || r === void 0 ? i[l] : r;
}
const fj = { decay: Uf, inertia: Uf, tween: _o, keyframes: _o, spring: Ec };
function hw(e) {
  typeof e.type == "string" && (e.type = fj[e.type]);
}
class Um {
  constructor() {
    (this.count = 0), this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this.count++,
      (this._finished = new Promise((t) => {
        this.resolve = t;
      }));
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const hj = (e) => e / 100;
class mw extends Um {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: n } = this.options;
        if (
          (n && n.updatedAt !== gt.now() && this.tick(gt.now()),
          (this.isStopped = !0),
          this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: r } = this.options;
        r && r();
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    hw(t);
    const {
      type: n = _o,
      repeat: r = 0,
      repeatDelay: s = 0,
      repeatType: i,
      velocity: o = 0,
    } = t;
    let { keyframes: l } = t;
    const c = n || _o;
    c !== _o &&
      typeof l[0] != "number" &&
      ((this.mixKeyframes = ja(hj, uw(l[0], l[1]))), (l = [0, 100]));
    const u = c({ ...t, keyframes: l });
    i === "mirror" &&
      (this.mirroredGenerator = c({
        ...t,
        keyframes: [...l].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = zm(u));
    const { calculatedDuration: d } = u;
    (this.calculatedDuration = d),
      (this.resolvedDuration = d + s),
      (this.totalDuration = this.resolvedDuration * (r + 1) - s),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: s,
      mixKeyframes: i,
      mirroredGenerator: o,
      resolvedDuration: l,
      calculatedDuration: c,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: d,
      repeat: f,
      repeatType: h,
      repeatDelay: m,
      type: y,
      onUpdate: v,
      finalKeyframe: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - s / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? g < 0 : g > s;
    (this.currentTime = Math.max(g, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = s);
    let x = this.currentTime,
      S = r;
    if (f) {
      const N = Math.min(this.currentTime, s) / l;
      let O = Math.floor(N),
        M = N % 1;
      !M && N >= 1 && (M = 1),
        M === 1 && O--,
        (O = Math.min(O, f + 1)),
        !!(O % 2) &&
          (h === "reverse"
            ? ((M = 1 - M), m && (M -= m / l))
            : h === "mirror" && (S = o)),
        (x = Hn(0, 1, M) * l);
    }
    const C = p ? { done: !1, value: d[0] } : S.next(x);
    i && (C.value = i(C.value));
    let { done: T } = C;
    !p &&
      c !== null &&
      (T =
        this.playbackSpeed >= 0
          ? this.currentTime >= s
          : this.currentTime <= 0);
    const j =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      j && y !== Uf && (C.value = Vm(d, this.options, w, this.speed)),
      v && v(C.value),
      j && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return Cn(this.calculatedDuration);
  }
  get time() {
    return Cn(this.currentTime);
  }
  set time(t) {
    (t = kn(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(gt.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Cn(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: t = GN, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime || (this.startTime = r ?? s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(gt.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown();
  }
  teardown() {
    this.notifyFinished(),
      (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      t.observe(this)
    );
  }
}
function mj(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const es = (e) => (e * 180) / Math.PI,
  $f = (e) => {
    const t = es(Math.atan2(e[1], e[0]));
    return Hf(t);
  },
  pj = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: $f,
    rotateZ: $f,
    skewX: (e) => es(Math.atan(e[1])),
    skewY: (e) => es(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Hf = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Ng = $f,
  jg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Tg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  gj = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: jg,
    scaleY: Tg,
    scale: (e) => (jg(e) + Tg(e)) / 2,
    rotateX: (e) => Hf(es(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Hf(es(Math.atan2(-e[2], e[0]))),
    rotateZ: Ng,
    rotate: Ng,
    skewX: (e) => es(Math.atan(e[4])),
    skewY: (e) => es(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Pg(e) {
  return e.includes("scale") ? 1 : 0;
}
function qf(e, t) {
  if (!e || e === "none") return Pg(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n) (r = gj), (s = n);
  else {
    const l = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = pj), (s = l);
  }
  if (!s) return Pg(t);
  const i = r[t],
    o = s[1].split(",").map(xj);
  return typeof i == "function" ? i(o) : o[i];
}
const yj = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return qf(n, t);
};
function xj(e) {
  return parseFloat(e.trim());
}
const Bi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  zi = new Set(Bi),
  Ag = (e) => e === Ii || e === V,
  vj = new Set(["x", "y", "z"]),
  wj = Bi.filter((e) => !vj.has(e));
function bj(e) {
  const t = [];
  return (
    wj.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ti = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => qf(t, "x"),
  y: (e, { transform: t }) => qf(t, "y"),
};
Ti.translateX = Ti.x;
Ti.translateY = Ti.y;
const ds = new Set();
let Wf = !1,
  Kf = !1,
  Yf = !1;
function pw() {
  if (Kf) {
    const e = Array.from(ds).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = bj(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var l;
            (l = r.getValue(i)) == null || l.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Kf = !1), (Wf = !1), ds.forEach((e) => e.complete(Yf)), ds.clear();
}
function gw() {
  ds.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Kf = !0);
  });
}
function Sj() {
  (Yf = !0), gw(), pw(), (Yf = !1);
}
class $m {
  constructor(t, n, r, s, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ds.add(this),
          Wf || ((Wf = !0), xe.read(gw), xe.resolveKeyframes(pw)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    if (t[0] === null) {
      const i = s == null ? void 0 : s.get(),
        o = t[t.length - 1];
      if (i !== void 0) t[0] = i;
      else if (r && n) {
        const l = r.readValue(n, o);
        l != null && (t[0] = l);
      }
      t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]);
    }
    mj(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      ds.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ds.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const kj = (e) => e.startsWith("--");
function Cj(e, t, n) {
  kj(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Ej = _m(() => window.ScrollTimeline !== void 0),
  Nj = {};
function jj(e, t) {
  const n = _m(e);
  return () => Nj[t] ?? n();
}
const yw = jj(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  yo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  _g = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yo([0, 0.65, 0.55, 1]),
    circOut: yo([0.55, 0, 1, 0.45]),
    backIn: yo([0.31, 0.01, 0.66, -0.59]),
    backOut: yo([0.33, 1.53, 0.69, 0.99]),
  };
function xw(e, t) {
  if (e)
    return typeof e == "function"
      ? yw()
        ? dw(e, t)
        : "ease-out"
      : tw(e)
      ? yo(e)
      : Array.isArray(e)
      ? e.map((n) => xw(n, t) || _g.easeOut)
      : _g[e];
}
function Tj(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: l = "easeOut",
    times: c,
  } = {},
  u = void 0
) {
  const d = { [t]: n };
  c && (d.offset = c);
  const f = xw(l, s);
  Array.isArray(f) && (d.easing = f);
  const h = {
    delay: r,
    duration: s,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return u && (h.pseudoElement = u), e.animate(d, h);
}
function vw(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function Pj({ type: e, ...t }) {
  return vw(e) && yw()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Aj extends Um {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: s,
      pseudoElement: i,
      allowFlatten: o = !1,
      finalKeyframe: l,
      onComplete: c,
    } = t;
    (this.isPseudoElement = !!i),
      (this.allowFlatten = o),
      (this.options = t),
      Sc(typeof t.type != "string");
    const u = Pj(t);
    (this.animation = Tj(n, r, s, u, i)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !i)) {
          const d = Vm(s, this.options, l, this.speed);
          this.updateMotionValue ? this.updateMotionValue(d) : Cj(n, r, d),
            this.animation.cancel();
        }
        c == null || c(), this.notifyFinished();
      }),
      (this.animation.oncancel = () => this.notifyFinished());
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return Cn(Number(t));
  }
  get time() {
    return Cn(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = kn(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && Ej() ? ((this.animation.timeline = t), Ht) : n(this)
    );
  }
}
const ww = { anticipate: Xv, backInOut: Gv, circInOut: Zv };
function _j(e) {
  return e in ww;
}
function Rj(e) {
  typeof e.ease == "string" && _j(e.ease) && (e.ease = ww[e.ease]);
}
const Rg = 10;
class Oj extends Aj {
  constructor(t) {
    Rj(t),
      hw(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: s,
      element: i,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const l = new mw({ ...o, autoplay: !1 }),
      c = kn(this.finishedTime ?? this.time);
    n.setWithVelocity(l.sample(c - Rg).value, l.sample(c).value, Rg), l.stop();
  }
}
const Og = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Mr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Mj(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Dj(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Og(s, t),
    l = Og(i, t);
  return !o || !l ? !1 : Mj(e) || ((n === "spring" || vw(n)) && r);
}
const Lj = new Set(["opacity", "clipPath", "filter", "transform"]),
  Fj = _m(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ij(e) {
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: s,
    damping: i,
    type: o,
  } = e;
  if (!t || !t.owner || !(t.owner.current instanceof HTMLElement)) return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return (
    Fj() &&
    n &&
    Lj.has(n) &&
    (n !== "transform" || !c) &&
    !l &&
    !r &&
    s !== "mirror" &&
    i !== 0 &&
    o !== "inertia"
  );
}
const Bj = 40;
class zj extends Um {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    keyframes: l,
    name: c,
    motionValue: u,
    element: d,
    ...f
  }) {
    var y;
    super(),
      (this.stop = () => {
        var v, w;
        this._animation
          ? (this._animation.stop(),
            (v = this.stopTimeline) == null || v.call(this))
          : (w = this.keyframeResolver) == null || w.cancel();
      }),
      (this.createdAt = gt.now());
    const h = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        name: c,
        motionValue: u,
        element: d,
        ...f,
      },
      m = (d == null ? void 0 : d.KeyframeResolver) || $m;
    (this.keyframeResolver = new m(
      l,
      (v, w, g) => this.onKeyframesResolved(v, w, h, !g),
      c,
      u,
      d
    )),
      (y = this.keyframeResolver) == null || y.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, s) {
    this.keyframeResolver = void 0;
    const {
      name: i,
      type: o,
      velocity: l,
      delay: c,
      isHandoff: u,
      onUpdate: d,
    } = r;
    (this.resolvedAt = gt.now()),
      Dj(t, i, o, l) ||
        ((qn.instantAnimations || !c) && (d == null || d(Vm(t, r, n))),
        (t[0] = t[t.length - 1]),
        (r.duration = 0),
        (r.repeat = 0));
    const h = {
        startTime: s
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Bj
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      m =
        !u && Ij(h)
          ? new Oj({ ...h, element: h.motionValue.owner.current })
          : new mw(h);
    m.finished.then(() => this.notifyFinished()).catch(Ht),
      this.pendingTimeline &&
        ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = m);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    return this._animation || Sj(), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this.animation.cancel();
  }
}
const Vj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Uj(e) {
  const t = Vj.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function bw(e, t, n = 1) {
  const [r, s] = Uj(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return $v(o) ? parseFloat(o) : o;
  }
  return Lm(s) ? bw(s, t, n + 1) : s;
}
function Hm(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Sw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Bi,
  ]),
  $j = { test: (e) => e === "auto", parse: (e) => e },
  kw = (e) => (t) => t.test(e),
  Cw = [Ii, V, En, rr, MN, ON, $j],
  Mg = (e) => Cw.find(kw(e));
function Hj(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Hv(e)
    : !0;
}
const qj = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wj(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Fm) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = qj.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const Kj = /\b([a-z-]*)\(.*?\)/gu,
  Qf = {
    ...Mr,
    getAnimatableNone: (e) => {
      const t = e.match(Kj);
      return t ? t.map(Wj).join(" ") : e;
    },
  },
  Dg = { ...Ii, transform: Math.round },
  Yj = {
    rotate: rr,
    rotateX: rr,
    rotateY: rr,
    rotateZ: rr,
    scale: ll,
    scaleX: ll,
    scaleY: ll,
    scaleZ: ll,
    skew: rr,
    skewX: rr,
    skewY: rr,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: sa,
    originX: bg,
    originY: bg,
    originZ: V,
  },
  qm = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
    ...Yj,
    zIndex: Dg,
    fillOpacity: sa,
    strokeOpacity: sa,
    numOctaves: Dg,
  },
  Qj = {
    ...qm,
    color: Ge,
    backgroundColor: Ge,
    outlineColor: Ge,
    fill: Ge,
    stroke: Ge,
    borderColor: Ge,
    borderTopColor: Ge,
    borderRightColor: Ge,
    borderBottomColor: Ge,
    borderLeftColor: Ge,
    filter: Qf,
    WebkitFilter: Qf,
  },
  Ew = (e) => Qj[e];
function Nw(e, t) {
  let n = Ew(e);
  return (
    n !== Qf && (n = Mr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Gj = new Set(["auto", "none", "0"]);
function Xj(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !Gj.has(i) && ia(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = Nw(n, s);
}
class Jj extends $m {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && ((u = u.trim()), Lm(u))) {
        const d = bw(u, n.current);
        d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Sw.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Mg(s),
      l = Mg(i);
    if (o !== l)
      if (Ag(o) && Ag(l))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) (t[s] === null || Hj(t[s])) && r.push(s);
    r.length && Xj(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ti[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var l;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const s = t.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const i = r.length - 1,
      o = r[i];
    (r[i] = Ti[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (l = this.removedTransforms) != null &&
        l.length &&
        this.removedTransforms.forEach(([c, u]) => {
          t.getValue(c).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Zj(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const s = document.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const { schedule: Wm, cancel: C7 } = nw(queueMicrotask, !1),
  Gt = { x: !1, y: !1 };
function jw() {
  return Gt.x || Gt.y;
}
function e6(e) {
  return e === "x" || e === "y"
    ? Gt[e]
      ? null
      : ((Gt[e] = !0),
        () => {
          Gt[e] = !1;
        })
    : Gt.x || Gt.y
    ? null
    : ((Gt.x = Gt.y = !0),
      () => {
        Gt.x = Gt.y = !1;
      });
}
function Tw(e, t) {
  const n = Zj(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function Lg(e) {
  return !(e.pointerType === "touch" || jw());
}
function t6(e, t, n = {}) {
  const [r, s, i] = Tw(e, n),
    o = (l) => {
      if (!Lg(l)) return;
      const { target: c } = l,
        u = t(c, l);
      if (typeof u != "function" || !c) return;
      const d = (f) => {
        Lg(f) && (u(f), c.removeEventListener("pointerleave", d));
      };
      c.addEventListener("pointerleave", d, s);
    };
  return (
    r.forEach((l) => {
      l.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
const Pw = (e, t) => (t ? (e === t ? !0 : Pw(e, t.parentElement)) : !1),
  Km = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  n6 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function r6(e) {
  return n6.has(e.tagName) || e.tabIndex !== -1;
}
const xo = new WeakSet();
function Fg(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function nd(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const s6 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Fg(() => {
    if (xo.has(n)) return;
    nd(n, "down");
    const s = Fg(() => {
        nd(n, "up");
      }),
      i = () => nd(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ig(e) {
  return Km(e) && !jw();
}
function i6(e, t, n = {}) {
  const [r, s, i] = Tw(e, n),
    o = (l) => {
      const c = l.currentTarget;
      if (!Ig(l) || xo.has(c)) return;
      xo.add(c);
      const u = t(c, l),
        d = (m, y) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            !(!Ig(m) || !xo.has(c)) &&
              (xo.delete(c), typeof u == "function" && u(m, { success: y }));
        },
        f = (m) => {
          d(
            m,
            c === window ||
              c === document ||
              n.useGlobalTarget ||
              Pw(c, m.target)
          );
        },
        h = (m) => {
          d(m, !1);
        };
      window.addEventListener("pointerup", f, s),
        window.addEventListener("pointercancel", h, s);
    };
  return (
    r.forEach((l) => {
      (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, s),
        l instanceof HTMLElement &&
          (l.addEventListener("focus", (u) => s6(u, s)),
          !r6(l) && !l.hasAttribute("tabindex") && (l.tabIndex = 0));
    }),
    i
  );
}
const Bg = 30,
  o6 = (e) => !isNaN(parseFloat(e));
class a6 {
  constructor(t, n = {}) {
    (this.version = "__VERSION__"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        var o, l;
        const i = gt.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current)),
          s &&
            ((l = this.events.renderRequest) == null || l.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = gt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = o6(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Rm());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            xe.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = gt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Bg
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bg);
    return qv(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t;
    (t = this.events.destroy) == null || t.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function oa(e, t) {
  return new a6(e, t);
}
const l6 = [...Cw, Ge, Mr],
  c6 = (e) => l6.find(kw(e)),
  Aw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  _w = b.createContext({ strict: !1 }),
  zg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Pi = {};
for (const e in zg) Pi[e] = { isEnabled: (t) => zg[e].some((n) => !!t[n]) };
function u6(e) {
  for (const t in e) Pi[t] = { ...Pi[t], ...e[t] };
}
const d6 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Nc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    d6.has(e)
  );
}
let Rw = (e) => !Nc(e);
function f6(e) {
  e && (Rw = (t) => (t.startsWith("on") ? !Nc(t) : e(t)));
}
try {
  f6(isPropValid);
} catch {}
function h6(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((Rw(s) ||
        (n === !0 && Nc(s)) ||
        (!t && !Nc(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function m6(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const nu = b.createContext({});
function ru(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function aa(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Ym = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qm = ["initial", ...Ym];
function su(e) {
  return ru(e.animate) || Qm.some((t) => aa(e[t]));
}
function Ow(e) {
  return !!(su(e) || e.variants);
}
function p6(e, t) {
  if (su(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || aa(n) ? n : void 0,
      animate: aa(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function g6(e) {
  const { initial: t, animate: n } = p6(e, b.useContext(nu));
  return b.useMemo(() => ({ initial: t, animate: n }), [Vg(t), Vg(n)]);
}
function Vg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const y6 = Symbol.for("motionComponentSymbol");
function Ys(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function x6(e, t, n) {
  return b.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ys(n) && (n.current = r));
    },
    [t]
  );
}
const Gm = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  v6 = "framerAppearId",
  Mw = "data-" + Gm(v6),
  Dw = b.createContext({});
function w6(e, t, n, r, s) {
  var v, w;
  const { visualElement: i } = b.useContext(nu),
    o = b.useContext(_w),
    l = b.useContext(tu),
    c = b.useContext(Tm).reducedMotion,
    u = b.useRef(null);
  (r = r || o.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = u.current,
    f = b.useContext(Dw);
  d &&
    !d.projection &&
    s &&
    (d.type === "html" || d.type === "svg") &&
    b6(u.current, n, s, f);
  const h = b.useRef(!1);
  b.useInsertionEffect(() => {
    d && h.current && d.update(n, l);
  });
  const m = n[Mw],
    y = b.useRef(
      !!m &&
        !((v = window.MotionHandoffIsComplete) != null && v.call(window, m)) &&
        ((w = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : w.call(window, m))
    );
  return (
    Vv(() => {
      d &&
        ((h.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Wm.render(d.render),
        y.current && d.animationState && d.animationState.animateChanges());
    }),
    b.useEffect(() => {
      d &&
        (!y.current && d.animationState && d.animationState.animateChanges(),
        y.current &&
          (queueMicrotask(() => {
            var g;
            (g = window.MotionHandoffMarkAsComplete) == null ||
              g.call(window, m);
          }),
          (y.current = !1)));
    }),
    d
  );
}
function b6(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: l,
    layoutScroll: c,
    layoutRoot: u,
    layoutCrossfade: d,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Lw(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (l && Ys(l)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: c,
      layoutRoot: u,
    });
}
function Lw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Lw(e.parent);
}
function S6({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  e && u6(e);
  function i(l, c) {
    let u;
    const d = { ...b.useContext(Tm), ...l, layoutId: k6(l) },
      { isStatic: f } = d,
      h = g6(l),
      m = r(l, f);
    if (!f && jm) {
      C6();
      const y = E6(d);
      (u = y.MeasureLayout),
        (h.visualElement = w6(s, m, d, t, y.ProjectionNode));
    }
    return a.jsxs(nu.Provider, {
      value: h,
      children: [
        u && h.visualElement
          ? a.jsx(u, { visualElement: h.visualElement, ...d })
          : null,
        n(s, l, x6(m, h.visualElement, c), m, f, h.visualElement),
      ],
    });
  }
  i.displayName = `motion.${
    typeof s == "string" ? s : `create(${s.displayName ?? s.name ?? ""})`
  }`;
  const o = b.forwardRef(i);
  return (o[y6] = s), o;
}
function k6({ layoutId: e }) {
  const t = b.useContext(Em).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function C6(e, t) {
  b.useContext(_w).strict;
}
function E6(e) {
  const { drag: t, layout: n } = Pi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const la = {};
function N6(e) {
  for (const t in e) (la[t] = e[t]), Dm(t) && (la[t].isCSSVariable = !0);
}
function Fw(e, { layout: t, layoutId: n }) {
  return (
    zi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!la[e] || e === "opacity"))
  );
}
const Je = (e) => !!(e && e.getVelocity),
  j6 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  T6 = Bi.length;
function P6(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < T6; i++) {
    const o = Bi[i],
      l = e[o];
    if (l === void 0) continue;
    let c = !0;
    if (
      (typeof l == "number"
        ? (c = l === (o.startsWith("scale") ? 1 : 0))
        : (c = parseFloat(l) === 0),
      !c || n)
    ) {
      const u = Aw(l, qm[o]);
      if (!c) {
        s = !1;
        const d = j6[o] || o;
        r += `${d}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function Xm(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    l = !1;
  for (const c in t) {
    const u = t[c];
    if (zi.has(c)) {
      o = !0;
      continue;
    } else if (Dm(c)) {
      s[c] = u;
      continue;
    } else {
      const d = Aw(u, qm[c]);
      c.startsWith("origin") ? ((l = !0), (i[c] = d)) : (r[c] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = P6(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = i;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
const Jm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Iw(e, t, n) {
  for (const r in t) !Je(t[r]) && !Fw(r, n) && (e[r] = t[r]);
}
function A6({ transformTemplate: e }, t) {
  return b.useMemo(() => {
    const n = Jm();
    return Xm(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function _6(e, t) {
  const n = e.style || {},
    r = {};
  return Iw(r, n, e), Object.assign(r, A6(e, t)), r;
}
function R6(e, t) {
  const n = {},
    r = _6(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const O6 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Zm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(O6.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const M6 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  D6 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function L6(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? M6 : D6;
  e[i.offset] = V.transform(-r);
  const o = V.transform(t),
    l = V.transform(n);
  e[i.array] = `${o} ${l}`;
}
function Bw(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: s,
    pathSpacing: i = 1,
    pathOffset: o = 0,
    ...l
  },
  c,
  u
) {
  if ((Xm(e, l, u), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform && ((f.transformBox = "fill-box"), delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && L6(d, s, i, o, !1);
}
const zw = () => ({ ...Jm(), attrs: {} }),
  Vw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function F6(e, t, n, r) {
  const s = b.useMemo(() => {
    const i = zw();
    return (
      Bw(i, t, Vw(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Iw(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function I6(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const c = (Zm(n) ? F6 : R6)(r, i, o, n),
      u = h6(r, typeof n == "string", e),
      d = n !== b.Fragment ? { ...u, ...c, ref: s } : {},
      { children: f } = r,
      h = b.useMemo(() => (Je(f) ? f.get() : f), [f]);
    return b.createElement(n, { ...d, children: h });
  };
}
function Ug(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ep(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Ug(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Ug(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function Ol(e) {
  return Je(e) ? e.get() : e;
}
function B6({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return { latestValues: z6(n, r, s, e), renderState: t() };
}
const Uw = (e) => (t, n) => {
  const r = b.useContext(nu),
    s = b.useContext(tu),
    i = () => B6(e, t, r, s);
  return n ? i() : Nm(i);
};
function z6(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const h in i) s[h] = Ol(i[h]);
  let { initial: o, animate: l } = e;
  const c = su(e),
    u = Ow(e);
  t &&
    u &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? l : o;
  if (f && typeof f != "boolean" && !ru(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let m = 0; m < h.length; m++) {
      const y = ep(e, h[m]);
      if (y) {
        const { transitionEnd: v, transition: w, ...g } = y;
        for (const p in g) {
          let x = g[p];
          if (Array.isArray(x)) {
            const S = d ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (s[p] = x);
        }
        for (const p in v) s[p] = v[p];
      }
    }
  }
  return s;
}
function tp(e, t, n) {
  var i;
  const { style: r } = e,
    s = {};
  for (const o in r)
    (Je(r[o]) ||
      (t.style && Je(t.style[o])) ||
      Fw(o, e) ||
      ((i = n == null ? void 0 : n.getValue(o)) == null
        ? void 0
        : i.liveStyle) !== void 0) &&
      (s[o] = r[o]);
  return s;
}
const V6 = {
  useVisualState: Uw({
    scrapeMotionValuesFromProps: tp,
    createRenderState: Jm,
  }),
};
function $w(e, t, n) {
  const r = tp(e, t, n);
  for (const s in e)
    if (Je(e[s]) || Je(t[s])) {
      const i =
        Bi.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
const U6 = {
  useVisualState: Uw({
    scrapeMotionValuesFromProps: $w,
    createRenderState: zw,
  }),
};
function $6(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Zm(r) ? U6 : V6),
      preloadedFeatures: e,
      useRender: I6(s),
      createVisualElement: t,
      Component: r,
    };
    return S6(o);
  };
}
function ca(e, t, n) {
  const r = e.getProps();
  return ep(r, t, n !== void 0 ? n : r.custom, e);
}
const Gf = (e) => Array.isArray(e);
function H6(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, oa(n));
}
function q6(e) {
  return Gf(e) ? e[e.length - 1] || 0 : e;
}
function W6(e, t) {
  const n = ca(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const l = q6(i[o]);
    H6(e, o, l);
  }
}
function K6(e) {
  return !!(Je(e) && e.add);
}
function Xf(e, t) {
  const n = e.getValue("willChange");
  if (K6(n)) return n.add(t);
  if (!n && qn.WillChange) {
    const r = new qn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Hw(e) {
  return e.props[Mw];
}
const Y6 = (e) => e !== null;
function Q6(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Y6),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const G6 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  X6 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  J6 = { type: "keyframes", duration: 0.8 },
  Z6 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  e5 = (e, { keyframes: t }) =>
    t.length > 2
      ? J6
      : zi.has(e)
      ? e.startsWith("scale")
        ? X6(t[1])
        : G6
      : Z6;
function t5({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: l,
  from: c,
  elapsed: u,
  ...d
}) {
  return !!Object.keys(d).length;
}
const np =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const l = Hm(r, e) || {},
      c = l.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - kn(c);
    const d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...l,
      delay: -u,
      onUpdate: (h) => {
        t.set(h), l.onUpdate && l.onUpdate(h);
      },
      onComplete: () => {
        o(), l.onComplete && l.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    t5(l) || Object.assign(d, e5(e, d)),
      d.duration && (d.duration = kn(d.duration)),
      d.repeatDelay && (d.repeatDelay = kn(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (f = !0)),
      (qn.instantAnimations || qn.skipAnimations) &&
        ((f = !0), (d.duration = 0), (d.delay = 0)),
      (d.allowFlatten = !l.type && !l.ease),
      f && !i && t.get() !== void 0)
    ) {
      const h = Q6(d.keyframes, l);
      if (h !== void 0) {
        xe.update(() => {
          d.onUpdate(h), d.onComplete();
        });
        return;
      }
    }
    return new zj(d);
  };
function n5({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function qw(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...l } = t;
  r && (i = r);
  const c = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const d in l) {
    const f = e.getValue(d, e.latestValues[d] ?? null),
      h = l[d];
    if (h === void 0 || (u && n5(u, d))) continue;
    const m = { delay: n, ...Hm(i || {}, d) },
      y = f.get();
    if (
      y !== void 0 &&
      !f.isAnimating &&
      !Array.isArray(h) &&
      h === y &&
      !m.velocity
    )
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const g = Hw(e);
      if (g) {
        const p = window.MotionHandoffAnimation(g, d, xe);
        p !== null && ((m.startTime = p), (v = !0));
      }
    }
    Xf(e, d),
      f.start(
        np(d, f, h, e.shouldReduceMotion && Sw.has(d) ? { type: !1 } : m, e, v)
      );
    const w = f.animation;
    w && c.push(w);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        xe.update(() => {
          o && W6(e, o);
        });
      }),
    c
  );
}
function Jf(e, t, n = {}) {
  var c;
  const r = ca(
    e,
    t,
    n.type === "exit"
      ? (c = e.presenceContext) == null
        ? void 0
        : c.custom
      : void 0
  );
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(qw(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = s;
            return r5(e, t, d + u, f, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, d] = l === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => d());
  } else return Promise.all([i(), o(n.delay)]);
}
function r5(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    c = s === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(s5)
      .forEach((u, d) => {
        u.notify("AnimationStart", t),
          o.push(
            Jf(u, t, { ...i, delay: n + c(d) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function s5(e, t) {
  return e.sortNodePosition(t);
}
function i5(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Jf(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Jf(e, t, n);
  else {
    const s = typeof t == "function" ? ca(e, t, n.custom) : t;
    r = Promise.all(qw(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Ww(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const o5 = Qm.length;
function Kw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Kw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < o5; n++) {
    const r = Qm[n],
      s = e.props[r];
    (aa(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const a5 = [...Ym].reverse(),
  l5 = Ym.length;
function c5(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => i5(e, n, r)));
}
function u5(e) {
  let t = c5(e),
    n = $g(),
    r = !0;
  const s = (c) => (u, d) => {
    var h;
    const f = ca(
      e,
      d,
      c === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: m, transitionEnd: y, ...v } = f;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function i(c) {
    t = c(e);
  }
  function o(c) {
    const { props: u } = e,
      d = Kw(e.parent) || {},
      f = [],
      h = new Set();
    let m = {},
      y = 1 / 0;
    for (let w = 0; w < l5; w++) {
      const g = a5[w],
        p = n[g],
        x = u[g] !== void 0 ? u[g] : d[g],
        S = aa(x),
        C = g === c ? p.isActive : null;
      C === !1 && (y = w);
      let T = x === d[g] && x !== u[g] && S;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (p.protectedKeys = { ...m }),
        (!p.isActive && C === null) ||
          (!x && !p.prevProp) ||
          ru(x) ||
          typeof x == "boolean")
      )
        continue;
      const j = d5(p.prevProp, x);
      let N = j || (g === c && p.isActive && !T && S) || (w > y && S),
        O = !1;
      const M = Array.isArray(x) ? x : [x];
      let J = M.reduce(s(g), {});
      C === !1 && (J = {});
      const { prevResolvedValues: Mt = {} } = p,
        Yt = { ...Mt, ...J },
        jn = (Ce) => {
          (N = !0),
            h.has(Ce) && ((O = !0), h.delete(Ce)),
            (p.needsAnimating[Ce] = !0);
          const R = e.getValue(Ce);
          R && (R.liveStyle = !1);
        };
      for (const Ce in Yt) {
        const R = J[Ce],
          U = Mt[Ce];
        if (m.hasOwnProperty(Ce)) continue;
        let $ = !1;
        Gf(R) && Gf(U) ? ($ = !Ww(R, U)) : ($ = R !== U),
          $
            ? R != null
              ? jn(Ce)
              : h.add(Ce)
            : R !== void 0 && h.has(Ce)
            ? jn(Ce)
            : (p.protectedKeys[Ce] = !0);
      }
      (p.prevProp = x),
        (p.prevResolvedValues = J),
        p.isActive && (m = { ...m, ...J }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          (!(T && j) || O) &&
          f.push(...M.map((Ce) => ({ animation: Ce, options: { type: g } })));
    }
    if (h.size) {
      const w = {};
      if (typeof u.initial != "boolean") {
        const g = ca(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (w.transition = g.transition);
      }
      h.forEach((g) => {
        const p = e.getBaseTarget(g),
          x = e.getValue(g);
        x && (x.liveStyle = !0), (w[g] = p ?? null);
      }),
        f.push({ animation: w });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function l(c, u) {
    var f;
    if (n[c].isActive === u) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var m;
        return (m = h.animationState) == null ? void 0 : m.setActive(c, u);
      }),
      (n[c].isActive = u);
    const d = o(c);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = $g()), (r = !0);
    },
  };
}
function d5(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ww(t, e) : !1;
}
function $r(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function $g() {
  return {
    animate: $r(!0),
    whileInView: $r(),
    whileHover: $r(),
    whileTap: $r(),
    whileDrag: $r(),
    whileFocus: $r(),
    exit: $r(),
  };
}
class zr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class f5 extends zr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = u5(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ru(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let h5 = 0;
class m5 extends zr {
  constructor() {
    super(...arguments), (this.id = h5++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      s.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const p5 = { animation: { Feature: f5 }, exit: { Feature: m5 } };
function ua(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Aa(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const g5 = (e) => (t) => Km(t) && e(t, Aa(t));
function Ro(e, t, n, r) {
  return ua(e, t, g5(n), r);
}
function Yw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function y5({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function x5(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
const Qw = 1e-4,
  v5 = 1 - Qw,
  w5 = 1 + Qw,
  Gw = 0.01,
  b5 = 0 - Gw,
  S5 = 0 + Gw;
function it(e) {
  return e.max - e.min;
}
function k5(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Hg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ge(t.min, t.max, e.origin)),
    (e.scale = it(n) / it(t)),
    (e.translate = ge(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= v5 && e.scale <= w5) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= b5 && e.translate <= S5) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Oo(e, t, n, r) {
  Hg(e.x, t.x, n.x, r ? r.originX : void 0),
    Hg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function qg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + it(t));
}
function C5(e, t, n) {
  qg(e.x, t.x, n.x), qg(e.y, t.y, n.y);
}
function Wg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + it(t));
}
function Mo(e, t, n) {
  Wg(e.x, t.x, n.x), Wg(e.y, t.y, n.y);
}
const Kg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Qs = () => ({ x: Kg(), y: Kg() }),
  Yg = () => ({ min: 0, max: 0 }),
  Ne = () => ({ x: Yg(), y: Yg() });
function Lt(e) {
  return [e("x"), e("y")];
}
function rd(e) {
  return e === void 0 || e === 1;
}
function Zf({ scale: e, scaleX: t, scaleY: n }) {
  return !rd(e) || !rd(t) || !rd(n);
}
function Wr(e) {
  return (
    Zf(e) ||
    Xw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Xw(e) {
  return Qg(e.x) || Qg(e.y);
}
function Qg(e) {
  return e && e !== "0%";
}
function jc(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function Gg(e, t, n, r, s) {
  return s !== void 0 && (e = jc(e, s, r)), jc(e, n, r) + t;
}
function eh(e, t = 0, n = 1, r, s) {
  (e.min = Gg(e.min, t, n, r, s)), (e.max = Gg(e.max, t, n, r, s));
}
function Jw(e, { x: t, y: n }) {
  eh(e.x, t.translate, t.scale, t.originPoint),
    eh(e.y, n.translate, n.scale, n.originPoint);
}
const Xg = 0.999999999999,
  Jg = 1.0000000000001;
function E5(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let l = 0; l < s; l++) {
    (i = n[l]), (o = i.projectionDelta);
    const { visualElement: c } = i.options;
    (c && c.props.style && c.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Xs(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Jw(e, o)),
      r && Wr(i.latestValues) && Xs(e, i.latestValues));
  }
  t.x < Jg && t.x > Xg && (t.x = 1), t.y < Jg && t.y > Xg && (t.y = 1);
}
function Gs(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Zg(e, t, n, r, s = 0.5) {
  const i = ge(e.min, e.max, s);
  eh(e, t, n, i, r);
}
function Xs(e, t) {
  Zg(e.x, t.x, t.scaleX, t.scale, t.originX),
    Zg(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Zw(e, t) {
  return Yw(x5(e.getBoundingClientRect(), t));
}
function N5(e, t, n) {
  const r = Zw(e, n),
    { scroll: s } = t;
  return s && (Gs(r.x, s.offset.x), Gs(r.y, s.offset.y)), r;
}
const eb = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ey = (e, t) => Math.abs(e - t);
function j5(e, t) {
  const n = ey(e.x, t.x),
    r = ey(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class tb {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = id(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          m = j5(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !m) return;
        const { point: y } = f,
          { timestamp: v } = Ve;
        this.history.push({ ...y, timestamp: v });
        const { onStart: w, onMove: g } = this.handlers;
        h ||
          (w && w(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = sd(h, this.transformPagePoint)),
          xe.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: m, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = id(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : sd(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(f, w), y && y(f, w);
      }),
      !Km(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = Aa(t),
      l = sd(o, this.transformPagePoint),
      { point: c } = l,
      { timestamp: u } = Ve;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, id(l, this.history)),
      (this.removeListeners = ja(
        Ro(this.contextWindow, "pointermove", this.handlePointerMove),
        Ro(this.contextWindow, "pointerup", this.handlePointerUp),
        Ro(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Or(this.updatePoint);
  }
}
function sd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ty(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function id({ point: e }, t) {
  return {
    point: e,
    delta: ty(e, nb(t)),
    offset: ty(e, T5(t)),
    velocity: P5(t, 0.1),
  };
}
function T5(e) {
  return e[0];
}
function nb(e) {
  return e[e.length - 1];
}
function P5(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = nb(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > kn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Cn(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function A5(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ge(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ge(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ny(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function _5(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: ny(e.x, n, s), y: ny(e.y, t, r) };
}
function ry(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function R5(e, t) {
  return { x: ry(e.x, t.x), y: ry(e.y, t.y) };
}
function O5(e, t) {
  let n = 0.5;
  const r = it(e),
    s = it(t);
  return (
    s > r
      ? (n = ra(t.min, t.max - r, e.min))
      : r > s && (n = ra(e.min, e.max - s, t.min)),
    Hn(0, 1, n)
  );
}
function M5(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const th = 0.35;
function D5(e = th) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = th),
    { x: sy(e, "left", "right"), y: sy(e, "top", "bottom") }
  );
}
function sy(e, t, n) {
  return { min: iy(e, t), max: iy(e, n) };
}
function iy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const L5 = new WeakMap();
class F5 {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ne()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Aa(d).point);
      },
      i = (d, f) => {
        const { drag: h, dragPropagation: m, onDragStart: y } = this.getProps();
        if (
          h &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = e6(h)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Lt((w) => {
            let g = this.getAxisMotionValue(w).get() || 0;
            if (En.test(g)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const x = p.layout.layoutBox[w];
                x && (g = it(x) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[w] = g;
          }),
          y && xe.postRender(() => y(d, f)),
          Xf(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: m,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: w } = f;
        if (m && this.currentDirection === null) {
          (this.currentDirection = I5(w)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, w),
          this.updateAxis("y", f.point, w),
          this.visualElement.render(),
          v && v(d, f);
      },
      l = (d, f) => this.stop(d, f),
      c = () =>
        Lt((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new tb(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: eb(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && xe.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !cl(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = A5(o, this.constraints[t], this.elastic[t])),
      i.set(o);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (i = this.visualElement.projection) == null
          ? void 0
          : i.layout,
      s = this.constraints;
    t && Ys(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = _5(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = D5(n)),
      s !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Lt((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = M5(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Ys(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = N5(r, s.root, this.visualElement.getTransformPagePoint());
    let o = R5(s.layout.layoutBox, i);
    if (n) {
      const l = n(y5(o));
      (this.hasMutatedConstraints = !!l), l && (o = Yw(l));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l,
      } = this.getProps(),
      c = this.constraints || {},
      u = Lt((d) => {
        if (!cl(d, n, this.currentDirection)) return;
        let f = (c && c[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          m = s ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(d, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Xf(this.visualElement, t), r.start(np(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Lt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Lt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Lt((n) => {
      const { drag: r } = this.getProps();
      if (!cl(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: l } = s.layout.layoutBox[n];
        i.set(t[n] - ge(o, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Ys(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Lt((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const c = l.get();
        s[o] = O5({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Lt((o) => {
        if (!cl(o, t, null)) return;
        const l = this.getAxisMotionValue(o),
          { min: c, max: u } = this.constraints[o];
        l.set(ge(c, u, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    L5.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ro(t, "pointerdown", (c) => {
        const { drag: u, dragListener: d = !0 } = this.getProps();
        u && d && this.start(c);
      }),
      r = () => {
        const { dragConstraints: c } = this.getProps();
        Ys(c) && c.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      xe.read(r);
    const o = ua(window, "resize", () => this.scalePositionWithinConstraints()),
      l = s.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Lt((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += c[d].translate),
                f.set(f.get() + c[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), i(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = th,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: l,
    };
  }
}
function cl(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function I5(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class B5 extends zr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ht),
      (this.removeListeners = Ht),
      (this.controls = new F5(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ht);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const oy = (e) => (t, n) => {
  e && xe.postRender(() => e(t, n));
};
class z5 extends zr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ht);
  }
  onPointerDown(t) {
    this.session = new tb(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: eb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: oy(t),
      onStart: oy(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && xe.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ro(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ml = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ay(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const eo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = ay(e, t.target.x),
        r = ay(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  V5 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Mr.parse(e);
      if (s.length > 5) return r;
      const i = Mr.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + o] /= l), (s[1 + o] /= c);
      const u = ge(l, c, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
      );
    },
  };
class U5 extends b.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    N6($5),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ml.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              xe.postRender(() => {
                const l = o.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Wm.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function rb(e) {
  const [t, n] = Uv(),
    r = b.useContext(Em);
  return a.jsx(U5, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: b.useContext(Dw),
    isPresent: t,
    safeToRemove: n,
  });
}
const $5 = {
  borderRadius: {
    ...eo,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: eo,
  borderTopRightRadius: eo,
  borderBottomLeftRadius: eo,
  borderBottomRightRadius: eo,
  boxShadow: V5,
};
function H5(e, t, n) {
  const r = Je(e) ? e : oa(e);
  return r.start(np("", r, t, n)), r.animation;
}
function q5(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const W5 = (e, t) => e.depth - t.depth;
class K5 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Pm(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Am(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(W5),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Y5(e, t) {
  const n = gt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Or(r), e(i - t));
    };
  return xe.setup(r, !0), () => Or(r);
}
const sb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Q5 = sb.length,
  ly = (e) => (typeof e == "string" ? parseFloat(e) : e),
  cy = (e) => typeof e == "number" || V.test(e);
function G5(e, t, n, r, s, i) {
  s
    ? ((e.opacity = ge(0, n.opacity ?? 1, X5(r))),
      (e.opacityExit = ge(t.opacity ?? 1, 0, J5(r))))
    : i && (e.opacity = ge(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < Q5; o++) {
    const l = `border${sb[o]}Radius`;
    let c = uy(t, l),
      u = uy(n, l);
    if (c === void 0 && u === void 0) continue;
    c || (c = 0),
      u || (u = 0),
      c === 0 || u === 0 || cy(c) === cy(u)
        ? ((e[l] = Math.max(ge(ly(c), ly(u), r), 0)),
          (En.test(u) || En.test(c)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = ge(t.rotate || 0, n.rotate || 0, r));
}
function uy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const X5 = ib(0, 0.5, Jv),
  J5 = ib(0.5, 0.95, Ht);
function ib(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ra(e, t, r)));
}
function dy(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Dt(e, t) {
  dy(e.x, t.x), dy(e.y, t.y);
}
function fy(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function hy(e, t, n, r, s) {
  return (
    (e -= t), (e = jc(e, 1 / n, r)), s !== void 0 && (e = jc(e, 1 / s, r)), e
  );
}
function Z5(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (En.test(t) &&
      ((t = parseFloat(t)), (t = ge(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let l = ge(i.min, i.max, r);
  e === i && (l -= t),
    (e.min = hy(e.min, t, n, l, s)),
    (e.max = hy(e.max, t, n, l, s));
}
function my(e, t, [n, r, s], i, o) {
  Z5(e, t[n], t[r], t[s], t.scale, i, o);
}
const eT = ["x", "scaleX", "originX"],
  tT = ["y", "scaleY", "originY"];
function py(e, t, n, r) {
  my(e.x, t, eT, n ? n.x : void 0, r ? r.x : void 0),
    my(e.y, t, tT, n ? n.y : void 0, r ? r.y : void 0);
}
function gy(e) {
  return e.translate === 0 && e.scale === 1;
}
function ob(e) {
  return gy(e.x) && gy(e.y);
}
function yy(e, t) {
  return e.min === t.min && e.max === t.max;
}
function nT(e, t) {
  return yy(e.x, t.x) && yy(e.y, t.y);
}
function xy(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function ab(e, t) {
  return xy(e.x, t.x) && xy(e.y, t.y);
}
function vy(e) {
  return it(e.x) / it(e.y);
}
function wy(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class rT {
  constructor() {
    this.members = [];
  }
  add(t) {
    Pm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Am(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function sT(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: m,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      m && (r += `skewX(${m}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`), r || "none";
}
const od = ["", "X", "Y", "Z"],
  iT = { visibility: "hidden" },
  by = 1e3;
let oT = 0;
function ad(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function lb(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Hw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", xe, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && lb(r);
}
function cb({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, l = t == null ? void 0 : t()) {
      (this.id = oT++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(cT),
            this.nodes.forEach(mT),
            this.nodes.forEach(pT),
            this.nodes.forEach(uT);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new K5());
    }
    addEventListener(o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Rm()),
        this.eventHandlers.get(o).add(l)
      );
    }
    notifyListeners(o, ...l) {
      const c = this.eventHandlers.get(o);
      c && c.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = q5(o)), (this.instance = o);
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Y5(h, 250)),
            Ml.hasAnimatedSinceResize &&
              ((Ml.hasAnimatedSinceResize = !1), this.nodes.forEach(ky));
        });
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          d &&
          (c || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeLayoutChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || wT,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: g } =
                  d.getProps(),
                p = !this.targetLayout || !ab(this.targetLayout, y),
                x = !h && m;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                x ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, x);
                const S = { ...Hm(v, "layout"), onPlay: w, onComplete: g };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                h || ky(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Or(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(gT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          lb(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sy);
        return;
      }
      this.isUpdating || this.nodes.forEach(fT),
        (this.isUpdating = !1),
        this.nodes.forEach(hT),
        this.nodes.forEach(aT),
        this.nodes.forEach(lT),
        this.clearAllSnapshots();
      const l = gt.now();
      (Ve.delta = Hn(0, 1e3 / 60, l - Ve.timestamp)),
        (Ve.timestamp = l),
        (Ve.isProcessing = !0),
        Xu.update.process(Ve),
        Xu.preRender.process(Ve),
        Xu.render.process(Ve),
        (Ve.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Wm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(dT), this.sharedNodes.forEach(yT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        xe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      xe.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !it(this.snapshot.measuredBox.x) &&
          !it(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !ob(this.projectionDelta),
        c = this.getTransformTemplate(),
        u = c ? c(this.latestValues, "") : void 0,
        d = u !== this.prevTransformTemplateValue;
      o &&
        (l || Wr(this.latestValues) || d) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return (
        o && (c = this.removeTransform(c)),
        bT(c),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return Ne();
      const l = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(ST)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Gs(l.x, d.offset.x), Gs(l.y, d.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var c;
      const l = Ne();
      if ((Dt(l, o), (c = this.scroll) != null && c.wasRoot)) return l;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && Dt(l, o), Gs(l.x, f.offset.x), Gs(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, l = !1) {
      const c = Ne();
      Dt(c, o);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !l &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Xs(c, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          Wr(d.latestValues) && Xs(c, d.latestValues);
      }
      return Wr(this.latestValues) && Xs(c, this.latestValues), c;
    }
    removeTransform(o) {
      const l = Ne();
      Dt(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Wr(u.latestValues)) continue;
        Zf(u.latestValues) && u.updateSnapshot();
        const d = Ne(),
          f = u.measurePageBox();
        Dt(d, f),
          py(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return Wr(this.latestValues) && py(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ve.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var h;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Ve.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ne()),
              (this.relativeTargetOrigin = Ne()),
              Mo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Dt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ne()), (this.targetWithTransforms = Ne())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              C5(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Dt(this.target, this.layout.layoutBox),
              Jw(this.target, this.targetDelta))
            : Dt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m &&
          !!m.resumingFrom == !!this.resumingFrom &&
          !m.options.layoutScroll &&
          m.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Ne()),
              (this.relativeTargetOrigin = Ne()),
              Mo(this.relativeTargetOrigin, this.target, m.target),
              Dt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Zf(this.parent.latestValues) ||
          Xw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var y;
      const o = this.getLead(),
        l = !!this.resumingFrom || this !== o;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ve.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || d))
      )
        return;
      Dt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      E5(this.layoutCorrected, this.treeScale, this.path, l),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Ne()));
      const { target: m } = o;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (fy(this.prevProjectionDelta.x, this.projectionDelta.x),
          fy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Oo(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !wy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !wy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if (((l = this.options.visualElement) == null || l.scheduleRender(), o)) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Qs()),
        (this.projectionDelta = Qs()),
        (this.projectionDeltaWithTransform = Qs());
    }
    setAnimationOrigin(o, l = !1) {
      const c = this.snapshot,
        u = c ? c.latestValues : {},
        d = { ...this.latestValues },
        f = Qs();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const h = Ne(),
        m = c ? c.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        w = this.getStack(),
        g = !w || w.members.length <= 1,
        p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(vT));
      this.animationProgress = 0;
      let x;
      (this.mixTargetDelta = (S) => {
        const C = S / 1e3;
        Cy(f.x, o.x, C),
          Cy(f.y, o.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Mo(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            xT(this.relativeTarget, this.relativeTargetOrigin, h, C),
            x && nT(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = Ne()),
            Dt(x, this.relativeTarget)),
          v &&
            ((this.animationValues = d), G5(d, u, this.latestValues, C, p, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Or(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = xe.update(() => {
          (Ml.hasAnimatedSinceResize = !0),
            (this.currentAnimation = H5(0, by, {
              ...o,
              onUpdate: (l) => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
              },
              onStop: () => {},
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(by),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: l,
        target: c,
        layout: u,
        latestValues: d,
      } = o;
      if (!(!l || !c || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          ub(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          c = this.target || Ne();
          const f = it(this.layout.layoutBox.x);
          (c.x.min = o.target.x.min), (c.x.max = c.x.min + f);
          const h = it(this.layout.layoutBox.y);
          (c.y.min = o.target.y.min), (c.y.max = c.y.min + h);
        }
        Dt(l, c),
          Xs(l, d),
          Oo(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new rT()),
        this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var l;
      const { layoutId: o } = this.options;
      return o
        ? ((l = this.getStack()) == null ? void 0 : l.lead) || this
        : this;
    }
    getPrevLead() {
      var l;
      const { layoutId: o } = this.options;
      return o ? ((l = this.getStack()) == null ? void 0 : l.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let l = !1;
      const { latestValues: c } = o;
      if (
        ((c.z ||
          c.rotate ||
          c.rotateX ||
          c.rotateY ||
          c.rotateZ ||
          c.skewX ||
          c.skewY) &&
          (l = !0),
        !l)
      )
        return;
      const u = {};
      c.z && ad("z", o, u, this.animationValues);
      for (let d = 0; d < od.length; d++)
        ad(`rotate${od[d]}`, o, u, this.animationValues),
          ad(`skew${od[d]}`, o, u, this.animationValues);
      o.render();
      for (const d in u)
        o.setStaticValue(d, u[d]),
          this.animationValues && (this.animationValues[d] = u[d]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return iT;
      const l = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (l.opacity = ""),
          (l.pointerEvents = Ol(o == null ? void 0 : o.pointerEvents) || ""),
          (l.transform = c ? c(this.latestValues, "") : "none"),
          l
        );
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const m = {};
        return (
          this.options.layoutId &&
            ((m.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (m.pointerEvents = Ol(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Wr(this.latestValues) &&
            ((m.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          m
        );
      }
      const d = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(),
        (l.transform = sT(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (l.transform = c(d, l.transform));
      const { x: f, y: h } = this.projectionDelta;
      (l.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (l.opacity =
              u === this
                ? d.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (l.opacity =
              u === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const m in la) {
        if (d[m] === void 0) continue;
        const { correct: y, applyTo: v, isCSSVariable: w } = la[m],
          g = l.transform === "none" ? d[m] : y(d[m], u);
        if (v) {
          const p = v.length;
          for (let x = 0; x < p; x++) l[v[x]] = g;
        } else
          w ? (this.options.visualElement.renderState.vars[m] = g) : (l[m] = g);
      }
      return (
        this.options.layoutId &&
          (l.pointerEvents =
            u === this
              ? Ol(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        l
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) == null ? void 0 : l.stop();
      }),
        this.root.nodes.forEach(Sy),
        this.root.sharedNodes.clear();
    }
  };
}
function aT(e) {
  e.updateLayout();
}
function lT(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = t.source !== e.layout.source;
    i === "size"
      ? Lt((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            m = it(h);
          (h.min = r[f].min), (h.max = h.min + m);
        })
      : ub(i, t.layoutBox, r) &&
        Lt((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            m = it(r[f]);
          (h.max = h.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = Qs();
    Oo(l, r, t.layoutBox);
    const c = Qs();
    o ? Oo(c, e.applyTransform(s, !0), t.measuredBox) : Oo(c, r, t.layoutBox);
    const u = !ob(l);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: m } = f;
        if (h && m) {
          const y = Ne();
          Mo(y, t.layoutBox, h.layoutBox);
          const v = Ne();
          Mo(v, r, m.layoutBox),
            ab(y, v) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function cT(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function uT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dT(e) {
  e.clearSnapshot();
}
function Sy(e) {
  e.clearMeasurements();
}
function fT(e) {
  e.isLayoutDirty = !1;
}
function hT(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function ky(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function mT(e) {
  e.resolveTargetDelta();
}
function pT(e) {
  e.calcProjection();
}
function gT(e) {
  e.resetSkewAndRotation();
}
function yT(e) {
  e.removeLeadSnapshot();
}
function Cy(e, t, n) {
  (e.translate = ge(t.translate, 0, n)),
    (e.scale = ge(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ey(e, t, n, r) {
  (e.min = ge(t.min, n.min, r)), (e.max = ge(t.max, n.max, r));
}
function xT(e, t, n, r) {
  Ey(e.x, t.x, n.x, r), Ey(e.y, t.y, n.y, r);
}
function vT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ny = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  jy = Ny("applewebkit/") && !Ny("chrome/") ? Math.round : Ht;
function Ty(e) {
  (e.min = jy(e.min)), (e.max = jy(e.max));
}
function bT(e) {
  Ty(e.x), Ty(e.y);
}
function ub(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !k5(vy(t), vy(n), 0.2))
  );
}
function ST(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const kT = cb({
    attachResizeListener: (e, t) => ua(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  ld = { current: void 0 },
  db = cb({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ld.current) {
        const e = new kT({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ld.current = e);
      }
      return ld.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  CT = {
    pan: { Feature: z5 },
    drag: { Feature: B5, ProjectionNode: db, MeasureLayout: rb },
  };
function Py(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && xe.postRender(() => i(t, Aa(t)));
}
class ET extends zr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = t6(
        t,
        (n, r) => (Py(this.node, r, "Start"), (s) => Py(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class NT extends zr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ja(
      ua(this.node.current, "focus", () => this.onFocus()),
      ua(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Ay(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && xe.postRender(() => i(t, Aa(t)));
}
class jT extends zr {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = i6(
        t,
        (n, r) => (
          Ay(this.node, r, "Start"),
          (s, { success: i }) => Ay(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const nh = new WeakMap(),
  cd = new WeakMap(),
  TT = (e) => {
    const t = nh.get(e.target);
    t && t(e);
  },
  PT = (e) => {
    e.forEach(TT);
  };
function AT({ root: e, ...t }) {
  const n = e || document;
  cd.has(n) || cd.set(n, {});
  const r = cd.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(PT, { root: e, ...t })), r[s];
}
function _T(e, t, n) {
  const r = AT(t);
  return (
    nh.set(e, n),
    r.observe(e),
    () => {
      nh.delete(e), r.unobserve(e);
    }
  );
}
const RT = { some: 0, all: 1 };
class OT extends zr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : RT[s],
      },
      l = (c) => {
        const { isIntersecting: u } = c;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = u ? d : f;
        h && h(c);
      };
    return _T(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(MT(t, n)) && this.startObserver();
  }
  unmount() {}
}
function MT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const DT = {
    inView: { Feature: OT },
    tap: { Feature: jT },
    focus: { Feature: NT },
    hover: { Feature: ET },
  },
  LT = { layout: { ProjectionNode: db, MeasureLayout: rb } },
  rh = { current: null },
  fb = { current: !1 };
function FT() {
  if (((fb.current = !0), !!jm))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (rh.current = e.matches);
      e.addListener(t), t();
    } else rh.current = !1;
}
const IT = new WeakMap();
function BT(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Je(s)) e.addValue(r, s);
    else if (Je(i)) e.addValue(r, oa(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, oa(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const _y = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class zT {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    l = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = $m),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = gt.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), xe.render(this.render, !1, !0));
      });
    const { latestValues: c, renderState: u } = o;
    (this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = su(n)),
      (this.isVariantNode = Ow(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const m = f[h];
      c[h] !== void 0 && Je(m) && m.set(c[h], !1);
    }
  }
  mount(t) {
    (this.current = t),
      IT.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      fb.current || FT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : rh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      (this.projection = void 0),
      Or(this.notifyUpdate),
      Or(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = zi.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && xe.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        s(), i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Pi) {
      const n = Pi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < _y.length; r++) {
      const s = _y[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = BT(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = oa(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && ($v(r) || Hv(r))
          ? (r = parseFloat(r))
          : !c6(r) && Mr.test(n) && (r = Nw(t, n)),
        this.setBaseTarget(t, Je(r) ? r.get() : r)),
      Je(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = ep(
        this.props,
        n,
        (i = this.presenceContext) == null ? void 0 : i.custom
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Je(s)
      ? s
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Rm()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class hb extends zT {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Jj);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Je(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function mb(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
function VT(e) {
  return window.getComputedStyle(e);
}
class UT extends hb {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = mb);
  }
  readValueFromInstance(t, n) {
    if (zi.has(n)) return yj(t, n);
    {
      const r = VT(t),
        s = (Dm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Zw(t, n);
  }
  build(t, n, r) {
    Xm(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return tp(t, n, r);
  }
}
const pb = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function $T(e, t, n, r) {
  mb(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(pb.has(s) ? s : Gm(s), t.attrs[s]);
}
class HT extends hb {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ne);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (zi.has(n)) {
      const r = Ew(n);
      return (r && r.default) || 0;
    }
    return (n = pb.has(n) ? n : Gm(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $w(t, n, r);
  }
  build(t, n, r) {
    Bw(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    $T(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = Vw(t.tagName)), super.mount(t);
  }
}
const qT = (e, t) =>
    Zm(e) ? new HT(t) : new UT(t, { allowProjection: e !== b.Fragment }),
  WT = $6({ ...p5, ...DT, ...CT, ...LT }, qT),
  St = m6(WT),
  KT = () => {
    const [e, t] = b.useState(!1),
      n = Re(),
      r = "#0088cc",
      s = "#ff4d4d",
      i = () => {
        var c;
        (c = window.socket) != null &&
          c.connected &&
          window.socket.disconnect();
      },
      { mutate: o } = oe({
        mutationFn: () => F.post("/auth/logout"),
        onSuccess: () => {
          n.invalidateQueries({ queryKey: ["authUser"] }),
            (window.location.href = "/login");
        },
      }),
      l = () => {
        i(),
          localStorage.clear(),
          sessionStorage.clear(),
          document.cookie.split(";").forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              );
          }),
          o();
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx("button", {
          onClick: () => t(!0),
          className: `flex items-center gap-2 p-2 text-gray-700 border-2 border-transparent rounded-lg transition-all duration-300 \r
             hover:text-gray-700 hover:border-gray-700 active:bg-gray-700 active:text-white`,
          children: a.jsx(Iv, { size: 24 }),
        }),
        a.jsx(pN, {
          children:
            e &&
            a.jsx(St.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "fixed inset-0 bg-black bg-opacity-40 backdrop-blur-lg flex items-center justify-center z-50",
              children: a.jsxs(St.div, {
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 50, opacity: 0 },
                transition: { duration: 0.3 },
                className:
                  "bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl w-[90%] max-w-md text-center border border-white/20",
                children: [
                  a.jsx("h2", {
                    className: "text-xl font-bold text-gray-100",
                    children: "Konfirmasi Logout",
                  }),
                  a.jsx("p", {
                    className: "text-gray-300 mt-2",
                    children:
                      "Anda yakin ingin keluar? Semua sesi akan diakhiri.",
                  }),
                  a.jsxs("div", {
                    className: "flex justify-center gap-4 mt-6",
                    children: [
                      a.jsx("button", {
                        onClick: l,
                        className:
                          "px-5 py-2 rounded-lg shadow-md transition-all text-white",
                        style: {
                          background: `linear-gradient(135deg, ${s},rgb(239, 152, 152))`,
                          boxShadow: "0px 4px 15px rgba(255, 77, 77, 0.4)",
                        },
                        children: "Ya, Keluar",
                      }),
                      a.jsx("button", {
                        onClick: () => t(!1),
                        className:
                          "px-5 py-2 rounded-lg transition-all text-white",
                        style: {
                          background: `linear-gradient(135deg, ${r}, #00aaff)`,
                          boxShadow: "0px 4px 15px rgba(0, 136, 204, 0.4)",
                        },
                        children: "Batal",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  YT = ({
    authUser: e,
    unreadNotificationCount: t,
    unreadConnectionRequestsCount: n,
    unreadMessagesCount: r,
  }) => {
    const [s, i] = b.useState(!1);
    return a.jsxs("div", {
      className: "md:hidden relative",
      children: [
        !s &&
          a.jsxs("button", {
            onClick: () => i(!0),
            className: "p-2 relative",
            children: [
              a.jsx(iN, { size: 28 }),
              (t > 0 || n > 0 || r > 0) &&
                a.jsx("span", {
                  className:
                    "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5",
                  children:
                    (Number(t) || 0) + (Number(n) || 0) + (Number(r) || 0),
                }),
            ],
          }),
        a.jsxs("div", {
          className: `fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            s ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`,
          children: [
            a.jsxs("div", {
              className: "p-4 flex justify-between items-center border-b",
              children: [
                a.jsx("div", {
                  className: "flex items-center space-x-4",
                  children: a.jsx(K, {
                    to: "/dashboard",
                    children: a.jsx("img", {
                      className: "h-10 rounded-full",
                      src: "/logopanjang1.png",
                      alt: "Kolaborasi",
                    }),
                  }),
                }),
                a.jsx("button", {
                  onClick: () => i(!1),
                  children: a.jsx(Gn, { size: 24 }),
                }),
              ],
            }),
            a.jsxs("div", {
              className: "p-4 flex flex-col gap-4",
              children: [
                a.jsxs(K, {
                  to: "/network",
                  className: "flex items-center gap-2 relative",
                  onClick: () => i(!1),
                  children: [
                    a.jsx(ks, { size: 24 }),
                    " Daftar Koneksi Anda",
                    n > 0 &&
                      a.jsx("span", {
                        className:
                          "bg-red-500 text-white text-xs rounded-full px-2 ml-2",
                        children: n,
                      }),
                  ],
                }),
                a.jsxs(K, {
                  to: "/messages",
                  className: "flex items-center gap-2",
                  onClick: () => i(!1),
                  children: [
                    a.jsx(Ea, { size: 24 }),
                    " Forum Diskusi",
                    r > 0 &&
                      a.jsx("span", {
                        className:
                          "bg-red-500 text-white text-xs rounded-full px-2 ml-2",
                        children: r,
                      }),
                  ],
                }),
                a.jsxs(K, {
                  to: "/notifications",
                  className: "flex items-center gap-2 relative",
                  onClick: () => i(!1),
                  children: [
                    a.jsx(bm, { size: 24 }),
                    " Notifikasi",
                    t > 0 &&
                      a.jsx("span", {
                        className:
                          "bg-red-500 text-white text-xs rounded-full px-2 ml-2",
                        children: t,
                      }),
                  ],
                }),
                a.jsxs(K, {
                  to: `/profile/${e == null ? void 0 : e.username}`,
                  className: "flex items-center gap-2",
                  onClick: () => i(!1),
                  children: [
                    a.jsx("img", {
                      className:
                        "h-8 w-8 rounded-full object-cover border-2 border-gray-300",
                      src:
                        (e == null ? void 0 : e.profilePicture) ||
                        "/avatar.png",
                      alt: e == null ? void 0 : e.name,
                    }),
                    "Profil & Portofolio",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  QT = () => {
    var m, y, v;
    const { data: e } = ie({
      queryKey: ["authUser"],
      queryFn: async () => (await F.get("/auth/me")).data,
      initialData: null,
    });
    Re();
    const [t, n] = b.useState(""),
      [r, s] = b.useState([]),
      i = async (w) => {
        if ((n(w), w.length > 2))
          try {
            const g = await F.get(`/users/search?query=${w}`);
            s(g.data);
          } catch (g) {
            console.error("Error fetching search results:", g);
          }
        else s([]);
      },
      { data: o } = ie({
        queryKey: ["notifications"],
        queryFn: async () => F.get("/notifications"),
        enabled: !!e,
      }),
      { data: l } = ie({
        queryKey: ["connectionRequests"],
        queryFn: async () => F.get("/connections/requests"),
        enabled: !!e,
      }),
      { data: c } = ie({
        queryKey: ["unreadMessagesCount"],
        queryFn: async () => (await F.get("/notifications/count/message")).data,
        enabled: !!e,
      }),
      u = ["like", "comment", "connectionAccepted"],
      d =
        (y =
          (m = o == null ? void 0 : o.data) == null
            ? void 0
            : m.filter((w) => !w.read && u.includes(w.type))) == null
          ? void 0
          : y.length,
      f = (v = l == null ? void 0 : l.data) == null ? void 0 : v.length,
      h = bs();
    return a.jsx("nav", {
      className:
        "bg-white shadow-md sticky top-0 z-50 border-b border-gray-200",
      children: a.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-4 flex justify-around items-center py-3",
        children: [
          a.jsx("div", {
            className: "flex items-center space-x-4",
            children: a.jsx(K, {
              to: "/dashboard",
              children: a.jsx("img", {
                className: "h-10 rounded-full",
                src: "/logopanjang1.png",
                alt: "Kolaborasi",
              }),
            }),
          }),
          a.jsx("div", {
            className: "flex items-center justify-end w-full md:px-6",
            children: e
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-6 mx-auto",
                      children: [
                        a.jsxs("div", {
                          className: "relative w-auto md:w-80",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              placeholder: "Cari komunitas, ide, inovasi...",
                              className:
                                "w-full bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500",
                              value: t,
                              onChange: (w) => i(w.target.value),
                            }),
                            a.jsx(aN, {
                              className:
                                "absolute top-2 right-3 text-gray-500 hidden md:flex",
                              size: 20,
                            }),
                            t.length > 2 &&
                              a.jsx("div", {
                                className:
                                  "absolute bg-white shadow-lg w-full rounded-md mt-2 max-h-60 overflow-y-auto",
                                children:
                                  r.length > 0
                                    ? r.map((w) =>
                                        a.jsxs(
                                          K,
                                          {
                                            to: `/profile/${w.username}`,
                                            className:
                                              "px-4 py-2 hover:bg-gray-200 flex items-center space-x-2",
                                            children: [
                                              a.jsx("img", {
                                                className:
                                                  "h-8 w-8 rounded-full object-cover",
                                                src:
                                                  w.profilePicture ||
                                                  "/avatar.png",
                                                alt: w.name,
                                              }),
                                              a.jsxs("span", {
                                                children: [
                                                  w.name,
                                                  " (@",
                                                  w.username,
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          },
                                          w._id
                                        )
                                      )
                                    : a.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 px-4 py-3 text-gray-600",
                                        children: [
                                          a.jsx(ZE, {
                                            size: 20,
                                            className: "text-gray-400",
                                          }),
                                          a.jsx("span", {
                                            children:
                                              "Pencarian yang Anda cari tidak ditemukan",
                                          }),
                                        ],
                                      }),
                              }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "items-center gap-4 hidden md:flex",
                          children: [
                            a.jsx(K, {
                              to: "/",
                              className: "nav-icon",
                              children: a.jsx(Lf, { size: 26 }),
                            }),
                            a.jsxs(K, {
                              to: "/network",
                              className: "nav-icon relative",
                              children: [
                                a.jsx(ks, { size: 26 }),
                                f > 0 &&
                                  a.jsx("span", {
                                    className:
                                      "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1",
                                    children: f,
                                  }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "relative",
                              children: [
                                a.jsx(K, {
                                  to: "/messages",
                                  className: "nav-icon",
                                  children: a.jsx(Ea, { size: 26 }),
                                }),
                                (c == null ? void 0 : c.count) > 0 &&
                                  a.jsx("span", {
                                    className:
                                      "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1",
                                    children: c.count,
                                  }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "relative",
                              children: [
                                a.jsx(K, {
                                  to: "/notifications",
                                  className: "nav-icon",
                                  children: a.jsx(bm, { size: 26 }),
                                }),
                                d > 0 &&
                                  a.jsx("span", {
                                    className:
                                      "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1",
                                    children: d,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx(YT, {
                      authUser: e,
                      unreadNotificationCount: d,
                      unreadConnectionRequestsCount: f,
                      unreadMessagesCount: c == null ? void 0 : c.count,
                    }),
                    a.jsxs("div", {
                      className: "flex items-center md:gap-3",
                      children: [
                        a.jsx(K, {
                          to: "/",
                          className: "nav-icon block md:hidden",
                          children: a.jsx(Lf, { size: 26 }),
                        }),
                        a.jsx(K, {
                          to: `/profile/${e.username}`,
                          className: "hidden md:block",
                          children: a.jsx("img", {
                            className:
                              "h-10 w-10 min-w-[2.5rem] rounded-full object-cover border-2 border-gray-300",
                            src: e.profilePicture || "/avatar.png",
                            alt: e.name,
                          }),
                        }),
                        a.jsx(KT, {}),
                        " ",
                      ],
                    }),
                  ],
                })
              : a.jsx(a.Fragment, {
                  children: a.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      a.jsx(K, {
                        to: "/login",
                        className: `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 
      ${
        h.pathname === "/login"
          ? "text-white bg-[#3FA3CE] shadow-md"
          : "text-[#3FA3CE] border-2 border-[#3FA3CE] shadow-sm hover:bg-[#3FA3CE] hover:text-white"
      }`,
                        children: a.jsx("span", { children: "Sign In" }),
                      }),
                      a.jsx(K, {
                        to: "/signup",
                        className: `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 
      ${
        h.pathname === "/signup"
          ? "text-white bg-gray-400 shadow-md"
          : "text-gray-700 border-2 border-gray-400 shadow-sm hover:bg-gray-400 hover:text-white"
      }`,
                        children: a.jsx("span", { children: "Join Now" }),
                      }),
                    ],
                  }),
                }),
          }),
        ],
      }),
    });
  },
  GT = ({ children: e }) =>
    a.jsxs("div", {
      className: "min-h-screen bg-base-100",
      children: [
        a.jsx(QT, {}),
        a.jsx("main", {
          className: "max-w-7xl mx-auto px-4 py-6 bg-[#E6E6FA]",
          children: e,
        }),
      ],
    });
function XT() {
  const [e, t] = b.useState(navigator.onLine ? "online" : "offline");
  return (
    b.useEffect(() => {
      window.addEventListener("online", () => t("online")),
        window.addEventListener("offline", () => t("offline"));
    }, []),
    a.jsx("span", {
      className: `absolute bottom-2 right-3 w-4 h-4 rounded-full ${
        e === "online" ? "bg-green-500" : "bg-gray-400"
      } border-2 border-white`,
    })
  );
}
function JT({ user: e, sidebarOpen: t }) {
  const [n, r] = b.useState([]),
    [s, i] = b.useState(!1),
    o = async (l) => {
      if (s) {
        i(!1);
        return;
      }
      try {
        const c = await F.get(`/connections/user/${l}`);
        r(c.data), i(!0);
      } catch (c) {
        console.error("Gagal mengambil koneksi:", c);
      }
    };
  return a.jsxs("div", {
    className: "p-4 text-center relative border rounded-lg shadow",
    children: [
      a.jsx("div", {
        className: "h-16 rounded-t-lg bg-cover bg-center",
        style: { backgroundImage: `url("${e.bannerImg || "/banner.png"}")` },
      }),
      a.jsxs(K, {
        to: `/profile/${e.username}`,
        className: "relative block",
        children: [
          a.jsx("img", {
            src: e.profilePicture || "/avatar.png",
            alt: e.name,
            className:
              "w-20 h-20 rounded-full mx-auto mt-[-40px] border-4 border-white shadow-lg transition-transform transform hover:scale-105",
          }),
          a.jsx(XT, {}),
        ],
      }),
      t &&
        a.jsxs(a.Fragment, {
          children: [
            a.jsx("h2", {
              className: "text-xl font-semibold mt-2",
              children: e.name,
            }),
            a.jsx("p", { className: "text-info", children: e.headline }),
            a.jsx("p", {
              className:
                "text-info text-xs cursor-pointer hover:underline mt-1",
              onClick: () => o(e.username),
              children:
                e.connections.length > 0
                  ? a.jsxs("span", {
                      children: [e.connections.length, " Koneksi"],
                    })
                  : a.jsx("span", {
                      className: "text-[#CCCCCC]",
                      children: "Belum Ada Koneksi",
                    }),
            }),
            s &&
              a.jsxs("div", {
                className: "mt-4 text-left",
                children: [
                  a.jsx("h3", {
                    className: "text-sm font-semibold mb-2",
                    children: "Daftar Koneksi:",
                  }),
                  a.jsx("div", {
                    className: "max-h-60 overflow-y-auto border p-2 rounded",
                    children:
                      n.length > 0
                        ? n.map((l) =>
                            a.jsxs(
                              K,
                              {
                                to: `/profile/${l.username}`,
                                className:
                                  "flex items-center gap-3 mb-2 hover:bg-gray-100 p-2 rounded transition",
                                children: [
                                  a.jsx("img", {
                                    src: l.profilePicture || "/avatar.png",
                                    className: "w-8 h-8 rounded-full",
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium text-sm",
                                        children: l.name,
                                      }),
                                      a.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: l.headline,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              l._id
                            )
                          )
                        : a.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: "Tidak ada koneksi.",
                          }),
                  }),
                  a.jsx("button", {
                    className:
                      "mt-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600",
                    onClick: () => i(!1),
                    children: "Tutup Daftar",
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
function ud({ to: e, icon: t, label: n, sidebarOpen: r, hasBadge: s }) {
  return a.jsx("li", {
    children: a.jsxs(K, {
      to: e,
      className:
        "flex items-center py-3 px-4 rounded-md hover:bg-primary hover:text-white transition-all relative",
      children: [t, r && a.jsx("span", { className: "ml-3", children: n })],
    }),
  });
}
function ZT({ onLogout: e, sidebarOpen: t }) {
  const [n, r] = b.useState(!1);
  return a.jsxs("div", {
    className: "relative",
    children: [
      a.jsxs("button", {
        onClick: () => r(!n),
        className:
          "flex items-center py-2 px-4 w-full rounded-md bg-gray-200 transition-colors mt-2",
        children: [
          a.jsx(lN, { size: 20 }),
          t && a.jsx("span", { className: "ml-3", children: "Settings" }),
        ],
      }),
      n &&
        a.jsxs("div", {
          className:
            "absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md p-2",
          children: [
            a.jsxs(K, {
              to: "/edit-profile",
              className: "block px-4 py-2 hover:bg-gray-200 rounded-md",
              children: [
                a.jsx(cN, { size: 16, className: "inline-block mr-2" }),
                " Edit Profile",
              ],
            }),
            a.jsxs("button", {
              onClick: e,
              className:
                "block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-md",
              children: [
                a.jsx(Iv, { size: 16, className: "inline-block mr-2" }),
                " Logout",
              ],
            }),
          ],
        }),
    ],
  });
}
function da({ user: e, onLogout: t }) {
  const n = Qn(),
    [r] = b.useState(!0);
  return (
    b.useState(!1),
    a.jsxs("div", {
      className: `bg-[#78C1E4] transition-all duration-300 rounded-xl shadow-xl  ${
        r ? "w-auto" : "w-20"
      } flex flex-col p-2`,
      children: [
        a.jsx(JT, { user: e, sidebarOpen: r }),
        a.jsx("nav", {
          className: "border-t border-[#D7D7D7]",
          children: a.jsxs("ul", {
            children: [
              a.jsx(ud, {
                to: "/",
                icon: a.jsx(Lf, { size: 18 }),
                label: "Home",
                sidebarOpen: r,
              }),
              a.jsx(ud, {
                to: "/network",
                icon: a.jsx(Na, { size: 18 }),
                label: "My Network",
                sidebarOpen: r,
              }),
              a.jsx(ud, {
                to: "/notifications",
                icon: a.jsx(bm, { size: 18 }),
                label: "Notifications",
                sidebarOpen: r,
                hasBadge: !0,
              }),
            ],
          }),
        }),
        a.jsxs("div", {
          className: "border-t border-[#D7D7D7] pt-3 mt-3",
          children: [
            a.jsx(ZT, { onLogout: t, sidebarOpen: r }),
            a.jsxs("button", {
              className:
                "mt-3 flex items-center py-3 px-4 w-full rounded-lg bg-[#3FA3CE] text-white hover:bg-[#145C75] transition-all",
              onClick: () => n("/messages"),
              children: [
                a.jsx(Ea, { size: 20 }),
                r &&
                  a.jsx("span", {
                    className: "ml-3 text-md",
                    children: "Open Chat",
                  }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
let e8 = { data: "" },
  t8 = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || e8,
  n8 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  r8 = /\/\*[^]*?\*\/|  +/g,
  Ry = /\n+/g,
  lr = (e, t) => {
    let n = "",
      r = "",
      s = "";
    for (let i in e) {
      let o = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + o + ";")
          : (r +=
              i[1] == "f"
                ? lr(o, i)
                : i + "{" + lr(o, i[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
        ? (r += lr(
            o,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  i.replace(/(^:.*)|([^,])+/g, (c) =>
                    /&/.test(c) ? c.replace(/&/g, l) : l ? l + " " + c : c
                  )
                )
              : i
          ))
        : o != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (s += lr.p ? lr.p(i, o) : i + ":" + o + ";"));
    }
    return n + (t && s ? t + "{" + s + "}" : s) + r;
  },
  An = {},
  gb = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + gb(e[n]);
      return t;
    }
    return e;
  },
  s8 = (e, t, n, r, s) => {
    let i = gb(e),
      o =
        An[i] ||
        (An[i] = ((c) => {
          let u = 0,
            d = 11;
          for (; u < c.length; ) d = (101 * d + c.charCodeAt(u++)) >>> 0;
          return "go" + d;
        })(i));
    if (!An[o]) {
      let c =
        i !== e
          ? e
          : ((u) => {
              let d,
                f,
                h = [{}];
              for (; (d = n8.exec(u.replace(r8, ""))); )
                d[4]
                  ? h.shift()
                  : d[3]
                  ? ((f = d[3].replace(Ry, " ").trim()),
                    h.unshift((h[0][f] = h[0][f] || {})))
                  : (h[0][d[1]] = d[2].replace(Ry, " ").trim());
              return h[0];
            })(e);
      An[o] = lr(s ? { ["@keyframes " + o]: c } : c, n ? "" : "." + o);
    }
    let l = n && An.g ? An.g : null;
    return (
      n && (An.g = An[o]),
      ((c, u, d, f) => {
        f
          ? (u.data = u.data.replace(f, c))
          : u.data.indexOf(c) === -1 && (u.data = d ? c + u.data : u.data + c);
      })(An[o], t, r, l),
      o
    );
  },
  i8 = (e, t, n) =>
    e.reduce((r, s, i) => {
      let o = t[i];
      if (o && o.call) {
        let l = o(n),
          c = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        o = c
          ? "." + c
          : l && typeof l == "object"
          ? l.props
            ? ""
            : lr(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + s + (o ?? "");
    }, "");
function iu(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return s8(
    n.unshift
      ? n.raw
        ? i8(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, s) => Object.assign(r, s && s.call ? s(t.p) : s), {})
      : n,
    t8(t.target),
    t.g,
    t.o,
    t.k
  );
}
let yb, sh, ih;
iu.bind({ g: 1 });
let Wn = iu.bind({ k: 1 });
function o8(e, t, n, r) {
  (lr.p = t), (yb = e), (sh = n), (ih = r);
}
function Vr(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function s(i, o) {
      let l = Object.assign({}, i),
        c = l.className || s.className;
      (n.p = Object.assign({ theme: sh && sh() }, l)),
        (n.o = / *go\d+/.test(c)),
        (l.className = iu.apply(n, r) + (c ? " " + c : ""));
      let u = e;
      return (
        e[0] && ((u = l.as || e), delete l.as), ih && u[0] && ih(l), yb(u, l)
      );
    }
    return s;
  };
}
var a8 = (e) => typeof e == "function",
  Tc = (e, t) => (a8(e) ? e(t) : e),
  l8 = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  xb = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  c8 = 20,
  Dl = new Map(),
  u8 = 1e3,
  Oy = (e) => {
    if (Dl.has(e)) return;
    let t = setTimeout(() => {
      Dl.delete(e), Cs({ type: 4, toastId: e });
    }, u8);
    Dl.set(e, t);
  },
  d8 = (e) => {
    let t = Dl.get(e);
    t && clearTimeout(t);
  },
  oh = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, c8) };
      case 1:
        return (
          t.toast.id && d8(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((i) => i.id === n.id)
          ? oh(e, { type: 1, toast: n })
          : oh(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? Oy(r)
            : e.toasts.forEach((i) => {
                Oy(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, visible: !1 } : i
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let s = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + s,
          })),
        };
    }
  },
  Ll = [],
  Fl = { toasts: [], pausedAt: void 0 },
  Cs = (e) => {
    (Fl = oh(Fl, e)),
      Ll.forEach((t) => {
        t(Fl);
      });
  },
  f8 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  h8 = (e = {}) => {
    let [t, n] = b.useState(Fl);
    b.useEffect(
      () => (
        Ll.push(n),
        () => {
          let s = Ll.indexOf(n);
          s > -1 && Ll.splice(s, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((s) => {
      var i, o;
      return {
        ...e,
        ...e[s.type],
        ...s,
        duration:
          s.duration ||
          ((i = e[s.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          f8[s.type],
        style: {
          ...e.style,
          ...((o = e[s.type]) == null ? void 0 : o.style),
          ...s.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  m8 = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || l8(),
  }),
  _a = (e) => (t, n) => {
    let r = m8(t, e, n);
    return Cs({ type: 2, toast: r }), r.id;
  },
  le = (e, t) => _a("blank")(e, t);
le.error = _a("error");
le.success = _a("success");
le.loading = _a("loading");
le.custom = _a("custom");
le.dismiss = (e) => {
  Cs({ type: 3, toastId: e });
};
le.remove = (e) => Cs({ type: 4, toastId: e });
le.promise = (e, t, n) => {
  let r = le.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (s) => (
          le.success(Tc(t.success, s), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          s
        )
      )
      .catch((s) => {
        le.error(Tc(t.error, s), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var p8 = (e, t) => {
    Cs({ type: 1, toast: { id: e, height: t } });
  },
  g8 = () => {
    Cs({ type: 5, time: Date.now() });
  },
  y8 = (e) => {
    let { toasts: t, pausedAt: n } = h8(e);
    b.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        o = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let c = (l.duration || 0) + l.pauseDuration - (i - l.createdAt);
          if (c < 0) {
            l.visible && le.dismiss(l.id);
            return;
          }
          return setTimeout(() => le.dismiss(l.id), c);
        });
      return () => {
        o.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = b.useCallback(() => {
        n && Cs({ type: 6, time: Date.now() });
      }, [n]),
      s = b.useCallback(
        (i, o) => {
          let {
              reverseOrder: l = !1,
              gutter: c = 8,
              defaultPosition: u,
            } = o || {},
            d = t.filter(
              (m) => (m.position || u) === (i.position || u) && m.height
            ),
            f = d.findIndex((m) => m.id === i.id),
            h = d.filter((m, y) => y < f && m.visible).length;
          return d
            .filter((m) => m.visible)
            .slice(...(l ? [h + 1] : [0, h]))
            .reduce((m, y) => m + (y.height || 0) + c, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: p8,
        startPause: g8,
        endPause: r,
        calculateOffset: s,
      },
    };
  },
  x8 = Wn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  v8 = Wn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  w8 = Wn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  b8 = Vr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${x8} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${v8} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w8} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  S8 = Wn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  k8 = Vr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${S8} 1s linear infinite;
`,
  C8 = Wn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  E8 = Wn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  N8 = Vr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${C8} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${E8} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  j8 = Vr("div")`
  position: absolute;
`,
  T8 = Vr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  P8 = Wn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  A8 = Vr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${P8} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  _8 = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? b.createElement(A8, null, t)
        : t
      : n === "blank"
      ? null
      : b.createElement(
          T8,
          null,
          b.createElement(k8, { ...r }),
          n !== "loading" &&
            b.createElement(
              j8,
              null,
              n === "error"
                ? b.createElement(b8, { ...r })
                : b.createElement(N8, { ...r })
            )
        );
  },
  R8 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  O8 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  M8 = "0%{opacity:0;} 100%{opacity:1;}",
  D8 = "0%{opacity:1;} 100%{opacity:0;}",
  L8 = Vr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  F8 = Vr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  I8 = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, s] = xb() ? [M8, D8] : [R8(n), O8(n)];
    return {
      animation: t
        ? `${Wn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Wn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  B8 = b.memo(({ toast: e, position: t, style: n, children: r }) => {
    let s = e.height
        ? I8(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = b.createElement(_8, { toast: e }),
      o = b.createElement(F8, { ...e.ariaProps }, Tc(e.message, e));
    return b.createElement(
      L8,
      { className: e.className, style: { ...s, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: o })
        : b.createElement(b.Fragment, null, i, o)
    );
  });
o8(b.createElement);
var z8 = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: s,
  }) => {
    let i = b.useCallback(
      (o) => {
        if (o) {
          let l = () => {
            let c = o.getBoundingClientRect().height;
            r(e, c);
          };
          l(),
            new MutationObserver(l).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return b.createElement("div", { ref: i, className: t, style: n }, s);
  },
  V8 = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      s = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: xb() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...s,
    };
  },
  U8 = iu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  ul = 16,
  $8 = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: s,
    containerStyle: i,
    containerClassName: o,
  }) => {
    let { toasts: l, handlers: c } = y8(n);
    return b.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: ul,
          left: ul,
          right: ul,
          bottom: ul,
          pointerEvents: "none",
          ...i,
        },
        className: o,
        onMouseEnter: c.startPause,
        onMouseLeave: c.endPause,
      },
      l.map((u) => {
        let d = u.position || t,
          f = c.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          h = V8(d, f);
        return b.createElement(
          z8,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: c.updateHeight,
            className: u.visible ? U8 : "",
            style: h,
          },
          u.type === "custom"
            ? Tc(u.message, u)
            : s
            ? s(u)
            : b.createElement(B8, { toast: u, position: d })
        );
      })
    );
  },
  G = le;
const My = "snow",
  Dy = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ size: ["small", !1, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, !1] }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
    clipboard: { matchVisual: !1 },
  },
  Ly = [
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "indent",
    "size",
    "header",
    "link",
    "image",
    "video",
    "color",
    "background",
  ];
function to(e, t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = Object(e);
  for (let r = 1; r < arguments.length; r++) {
    const s = arguments[r];
    if (s != null)
      for (const i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
  }
  return n;
}
const vb = (e = { theme: My, modules: Dy, formats: Ly }) => {
  const t = b.useRef(null),
    [n, r] = b.useState(!1),
    [s, i] = b.useState({
      Quill: void 0,
      quillRef: t,
      quill: void 0,
      editorRef: t,
      editor: void 0,
    });
  return (
    useEffect(() => {
  if (s.Quill || (i((o) => to(o, { Quill: import("quill") })), s.Quill && !s.quill && t && t.current && n)) {
    import("quill").then((module) => {
      const Quill = module.default;

      const o = to(e, {
        modules: to(Dy, e.modules),
        formats: e.formats || Ly,
        theme: e.theme || My,
      });

      const l = new s.Quill(t.current, o);
      i(to(to({}, s), { quill: l, editor: l }));
    });
  }
  r(true);
}, [n, s, e])
  );
};
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */ const {
  entries: wb,
  setPrototypeOf: Fy,
  isFrozen: H8,
  getPrototypeOf: q8,
  getOwnPropertyDescriptor: W8,
} = Object;
let { freeze: at, seal: Kt, create: bb } = Object,
  { apply: ah, construct: lh } = typeof Reflect < "u" && Reflect;
at ||
  (at = function (t) {
    return t;
  });
Kt ||
  (Kt = function (t) {
    return t;
  });
ah ||
  (ah = function (t, n, r) {
    return t.apply(n, r);
  });
lh ||
  (lh = function (t, n) {
    return new t(...n);
  });
const dl = lt(Array.prototype.forEach),
  K8 = lt(Array.prototype.lastIndexOf),
  Iy = lt(Array.prototype.pop),
  no = lt(Array.prototype.push),
  Y8 = lt(Array.prototype.splice),
  Il = lt(String.prototype.toLowerCase),
  dd = lt(String.prototype.toString),
  By = lt(String.prototype.match),
  ro = lt(String.prototype.replace),
  Q8 = lt(String.prototype.indexOf),
  G8 = lt(String.prototype.trim),
  Xt = lt(Object.prototype.hasOwnProperty),
  tt = lt(RegExp.prototype.test),
  so = X8(TypeError);
function lt(e) {
  return function (t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
      s < n;
      s++
    )
      r[s - 1] = arguments[s];
    return ah(e, t, r);
  };
}
function X8(e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return lh(e, n);
  };
}
function Q(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Il;
  Fy && Fy(e, null);
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (H8(t) || (t[r] = i), (s = i));
    }
    e[s] = !0;
  }
  return e;
}
function J8(e) {
  for (let t = 0; t < e.length; t++) Xt(e, t) || (e[t] = null);
  return e;
}
function Kr(e) {
  const t = bb(null);
  for (const [n, r] of wb(e))
    Xt(e, n) &&
      (Array.isArray(r)
        ? (t[n] = J8(r))
        : r && typeof r == "object" && r.constructor === Object
        ? (t[n] = Kr(r))
        : (t[n] = r));
  return t;
}
function io(e, t) {
  for (; e !== null; ) {
    const r = W8(e, t);
    if (r) {
      if (r.get) return lt(r.get);
      if (typeof r.value == "function") return lt(r.value);
    }
    e = q8(e);
  }
  function n() {
    return null;
  }
  return n;
}
const zy = at([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  fd = at([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  hd = at([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  Z8 = at([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  md = at([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  eP = at([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  Vy = at(["#text"]),
  Uy = at([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot",
  ]),
  pd = at([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  $y = at([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  fl = at(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  tP = Kt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  nP = Kt(/<%[\w\W]*|[\w\W]*%>/gm),
  rP = Kt(/\$\{[\w\W]*/gm),
  sP = Kt(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  iP = Kt(/^aria-[\-\w]+$/),
  Sb = Kt(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  ),
  oP = Kt(/^(?:\w+script|data):/i),
  aP = Kt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  kb = Kt(/^html$/i),
  lP = Kt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Hy = Object.freeze({
  __proto__: null,
  ARIA_ATTR: iP,
  ATTR_WHITESPACE: aP,
  CUSTOM_ELEMENT: lP,
  DATA_ATTR: sP,
  DOCTYPE_NAME: kb,
  ERB_EXPR: nP,
  IS_ALLOWED_URI: Sb,
  IS_SCRIPT_OR_DATA: oP,
  MUSTACHE_EXPR: tP,
  TMPLIT_EXPR: rP,
});
const oo = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
  },
  cP = function () {
    return typeof window > "u" ? null : window;
  },
  uP = function (t, n) {
    if (typeof t != "object" || typeof t.createPolicy != "function")
      return null;
    let r = null;
    const s = "data-tt-policy-suffix";
    n && n.hasAttribute(s) && (r = n.getAttribute(s));
    const i = "dompurify" + (r ? "#" + r : "");
    try {
      return t.createPolicy(i, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        },
      });
    } catch {
      return (
        console.warn("TrustedTypes policy " + i + " could not be created."),
        null
      );
    }
  },
  qy = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
  };
function Cb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cP();
  const t = (B) => Cb(B);
  if (
    ((t.version = "3.2.5"),
    (t.removed = []),
    !e || !e.document || e.document.nodeType !== oo.document || !e.Element)
  )
    return (t.isSupported = !1), t;
  let { document: n } = e;
  const r = n,
    s = r.currentScript,
    {
      DocumentFragment: i,
      HTMLTemplateElement: o,
      Node: l,
      Element: c,
      NodeFilter: u,
      NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
      HTMLFormElement: f,
      DOMParser: h,
      trustedTypes: m,
    } = e,
    y = c.prototype,
    v = io(y, "cloneNode"),
    w = io(y, "remove"),
    g = io(y, "nextSibling"),
    p = io(y, "childNodes"),
    x = io(y, "parentNode");
  if (typeof o == "function") {
    const B = n.createElement("template");
    B.content && B.content.ownerDocument && (n = B.content.ownerDocument);
  }
  let S,
    C = "";
  const {
      implementation: T,
      createNodeIterator: j,
      createDocumentFragment: N,
      getElementsByTagName: O,
    } = n,
    { importNode: M } = r;
  let J = qy();
  t.isSupported =
    typeof wb == "function" &&
    typeof x == "function" &&
    T &&
    T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Mt,
    ERB_EXPR: Yt,
    TMPLIT_EXPR: jn,
    DATA_ATTR: Oa,
    ARIA_ATTR: Es,
    IS_SCRIPT_OR_DATA: Ce,
    ATTR_WHITESPACE: R,
    CUSTOM_ELEMENT: U,
  } = Hy;
  let { IS_ALLOWED_URI: $ } = Hy,
    q = null;
  const Ee = Q({}, [...zy, ...fd, ...hd, ...md, ...Vy]);
  let we = null;
  const cn = Q({}, [...Uy, ...pd, ...$y, ...fl]);
  let ue = Object.seal(
      bb(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      })
    ),
    kt = null,
    Jn = null,
    up = !0,
    lu = !0,
    dp = !1,
    fp = !0,
    Ns = !1,
    cu = !0,
    Ur = !1,
    uu = !1,
    du = !1,
    js = !1,
    Ma = !1,
    Da = !1,
    hp = !0,
    mp = !1;
  const rS = "user-content-";
  let fu = !0,
    Ui = !1,
    Ts = {},
    Ps = null;
  const pp = Q({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let gp = null;
  const yp = Q({}, ["audio", "video", "img", "source", "image", "track"]);
  let hu = null;
  const xp = Q({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    La = "http://www.w3.org/1998/Math/MathML",
    Fa = "http://www.w3.org/2000/svg",
    Tn = "http://www.w3.org/1999/xhtml";
  let As = Tn,
    mu = !1,
    pu = null;
  const sS = Q({}, [La, Fa, Tn], dd);
  let Ia = Q({}, ["mi", "mo", "mn", "ms", "mtext"]),
    Ba = Q({}, ["annotation-xml"]);
  const iS = Q({}, ["title", "style", "font", "a", "script"]);
  let $i = null;
  const oS = ["application/xhtml+xml", "text/html"],
    aS = "text/html";
  let Le = null,
    _s = null;
  const lS = n.createElement("form"),
    vp = function (E) {
      return E instanceof RegExp || E instanceof Function;
    },
    gu = function () {
      let E =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(_s && _s === E)) {
        if (
          ((!E || typeof E != "object") && (E = {}),
          (E = Kr(E)),
          ($i =
            oS.indexOf(E.PARSER_MEDIA_TYPE) === -1 ? aS : E.PARSER_MEDIA_TYPE),
          (Le = $i === "application/xhtml+xml" ? dd : Il),
          (q = Xt(E, "ALLOWED_TAGS") ? Q({}, E.ALLOWED_TAGS, Le) : Ee),
          (we = Xt(E, "ALLOWED_ATTR") ? Q({}, E.ALLOWED_ATTR, Le) : cn),
          (pu = Xt(E, "ALLOWED_NAMESPACES")
            ? Q({}, E.ALLOWED_NAMESPACES, dd)
            : sS),
          (hu = Xt(E, "ADD_URI_SAFE_ATTR")
            ? Q(Kr(xp), E.ADD_URI_SAFE_ATTR, Le)
            : xp),
          (gp = Xt(E, "ADD_DATA_URI_TAGS")
            ? Q(Kr(yp), E.ADD_DATA_URI_TAGS, Le)
            : yp),
          (Ps = Xt(E, "FORBID_CONTENTS") ? Q({}, E.FORBID_CONTENTS, Le) : pp),
          (kt = Xt(E, "FORBID_TAGS") ? Q({}, E.FORBID_TAGS, Le) : {}),
          (Jn = Xt(E, "FORBID_ATTR") ? Q({}, E.FORBID_ATTR, Le) : {}),
          (Ts = Xt(E, "USE_PROFILES") ? E.USE_PROFILES : !1),
          (up = E.ALLOW_ARIA_ATTR !== !1),
          (lu = E.ALLOW_DATA_ATTR !== !1),
          (dp = E.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (fp = E.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (Ns = E.SAFE_FOR_TEMPLATES || !1),
          (cu = E.SAFE_FOR_XML !== !1),
          (Ur = E.WHOLE_DOCUMENT || !1),
          (js = E.RETURN_DOM || !1),
          (Ma = E.RETURN_DOM_FRAGMENT || !1),
          (Da = E.RETURN_TRUSTED_TYPE || !1),
          (du = E.FORCE_BODY || !1),
          (hp = E.SANITIZE_DOM !== !1),
          (mp = E.SANITIZE_NAMED_PROPS || !1),
          (fu = E.KEEP_CONTENT !== !1),
          (Ui = E.IN_PLACE || !1),
          ($ = E.ALLOWED_URI_REGEXP || Sb),
          (As = E.NAMESPACE || Tn),
          (Ia = E.MATHML_TEXT_INTEGRATION_POINTS || Ia),
          (Ba = E.HTML_INTEGRATION_POINTS || Ba),
          (ue = E.CUSTOM_ELEMENT_HANDLING || {}),
          E.CUSTOM_ELEMENT_HANDLING &&
            vp(E.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (ue.tagNameCheck = E.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          E.CUSTOM_ELEMENT_HANDLING &&
            vp(E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (ue.attributeNameCheck =
              E.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          E.CUSTOM_ELEMENT_HANDLING &&
            typeof E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (ue.allowCustomizedBuiltInElements =
              E.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          Ns && (lu = !1),
          Ma && (js = !0),
          Ts &&
            ((q = Q({}, Vy)),
            (we = []),
            Ts.html === !0 && (Q(q, zy), Q(we, Uy)),
            Ts.svg === !0 && (Q(q, fd), Q(we, pd), Q(we, fl)),
            Ts.svgFilters === !0 && (Q(q, hd), Q(we, pd), Q(we, fl)),
            Ts.mathMl === !0 && (Q(q, md), Q(we, $y), Q(we, fl))),
          E.ADD_TAGS && (q === Ee && (q = Kr(q)), Q(q, E.ADD_TAGS, Le)),
          E.ADD_ATTR && (we === cn && (we = Kr(we)), Q(we, E.ADD_ATTR, Le)),
          E.ADD_URI_SAFE_ATTR && Q(hu, E.ADD_URI_SAFE_ATTR, Le),
          E.FORBID_CONTENTS &&
            (Ps === pp && (Ps = Kr(Ps)), Q(Ps, E.FORBID_CONTENTS, Le)),
          fu && (q["#text"] = !0),
          Ur && Q(q, ["html", "head", "body"]),
          q.table && (Q(q, ["tbody"]), delete kt.tbody),
          E.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof E.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw so(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
            );
          if (typeof E.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw so(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
            );
          (S = E.TRUSTED_TYPES_POLICY), (C = S.createHTML(""));
        } else
          S === void 0 && (S = uP(m, s)),
            S !== null && typeof C == "string" && (C = S.createHTML(""));
        at && at(E), (_s = E);
      }
    },
    wp = Q({}, [...fd, ...hd, ...Z8]),
    bp = Q({}, [...md, ...eP]),
    cS = function (E) {
      let _ = x(E);
      (!_ || !_.tagName) && (_ = { namespaceURI: As, tagName: "template" });
      const I = Il(E.tagName),
        he = Il(_.tagName);
      return pu[E.namespaceURI]
        ? E.namespaceURI === Fa
          ? _.namespaceURI === Tn
            ? I === "svg"
            : _.namespaceURI === La
            ? I === "svg" && (he === "annotation-xml" || Ia[he])
            : !!wp[I]
          : E.namespaceURI === La
          ? _.namespaceURI === Tn
            ? I === "math"
            : _.namespaceURI === Fa
            ? I === "math" && Ba[he]
            : !!bp[I]
          : E.namespaceURI === Tn
          ? (_.namespaceURI === Fa && !Ba[he]) ||
            (_.namespaceURI === La && !Ia[he])
            ? !1
            : !bp[I] && (iS[I] || !wp[I])
          : !!($i === "application/xhtml+xml" && pu[E.namespaceURI])
        : !1;
    },
    un = function (E) {
      no(t.removed, { element: E });
      try {
        x(E).removeChild(E);
      } catch {
        w(E);
      }
    },
    za = function (E, _) {
      try {
        no(t.removed, { attribute: _.getAttributeNode(E), from: _ });
      } catch {
        no(t.removed, { attribute: null, from: _ });
      }
      if ((_.removeAttribute(E), E === "is"))
        if (js || Ma)
          try {
            un(_);
          } catch {}
        else
          try {
            _.setAttribute(E, "");
          } catch {}
    },
    Sp = function (E) {
      let _ = null,
        I = null;
      if (du) E = "<remove></remove>" + E;
      else {
        const Be = By(E, /^[\r\n\t ]+/);
        I = Be && Be[0];
      }
      $i === "application/xhtml+xml" &&
        As === Tn &&
        (E =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          E +
          "</body></html>");
      const he = S ? S.createHTML(E) : E;
      if (As === Tn)
        try {
          _ = new h().parseFromString(he, $i);
        } catch {}
      if (!_ || !_.documentElement) {
        _ = T.createDocument(As, "template", null);
        try {
          _.documentElement.innerHTML = mu ? C : he;
        } catch {}
      }
      const qe = _.body || _.documentElement;
      return (
        E &&
          I &&
          qe.insertBefore(n.createTextNode(I), qe.childNodes[0] || null),
        As === Tn
          ? O.call(_, Ur ? "html" : "body")[0]
          : Ur
          ? _.documentElement
          : qe
      );
    },
    kp = function (E) {
      return j.call(
        E.ownerDocument || E,
        E,
        u.SHOW_ELEMENT |
          u.SHOW_COMMENT |
          u.SHOW_TEXT |
          u.SHOW_PROCESSING_INSTRUCTION |
          u.SHOW_CDATA_SECTION,
        null
      );
    },
    yu = function (E) {
      return (
        E instanceof f &&
        (typeof E.nodeName != "string" ||
          typeof E.textContent != "string" ||
          typeof E.removeChild != "function" ||
          !(E.attributes instanceof d) ||
          typeof E.removeAttribute != "function" ||
          typeof E.setAttribute != "function" ||
          typeof E.namespaceURI != "string" ||
          typeof E.insertBefore != "function" ||
          typeof E.hasChildNodes != "function")
      );
    },
    Cp = function (E) {
      return typeof l == "function" && E instanceof l;
    };
  function Pn(B, E, _) {
    dl(B, (I) => {
      I.call(t, E, _, _s);
    });
  }
  const Ep = function (E) {
      let _ = null;
      if ((Pn(J.beforeSanitizeElements, E, null), yu(E))) return un(E), !0;
      const I = Le(E.nodeName);
      if (
        (Pn(J.uponSanitizeElement, E, { tagName: I, allowedTags: q }),
        (E.hasChildNodes() &&
          !Cp(E.firstElementChild) &&
          tt(/<[/\w!]/g, E.innerHTML) &&
          tt(/<[/\w!]/g, E.textContent)) ||
          E.nodeType === oo.progressingInstruction ||
          (cu && E.nodeType === oo.comment && tt(/<[/\w]/g, E.data)))
      )
        return un(E), !0;
      if (!q[I] || kt[I]) {
        if (
          !kt[I] &&
          jp(I) &&
          ((ue.tagNameCheck instanceof RegExp && tt(ue.tagNameCheck, I)) ||
            (ue.tagNameCheck instanceof Function && ue.tagNameCheck(I)))
        )
          return !1;
        if (fu && !Ps[I]) {
          const he = x(E) || E.parentNode,
            qe = p(E) || E.childNodes;
          if (qe && he) {
            const Be = qe.length;
            for (let dt = Be - 1; dt >= 0; --dt) {
              const dn = v(qe[dt], !0);
              (dn.__removalCount = (E.__removalCount || 0) + 1),
                he.insertBefore(dn, g(E));
            }
          }
        }
        return un(E), !0;
      }
      return (E instanceof c && !cS(E)) ||
        ((I === "noscript" || I === "noembed" || I === "noframes") &&
          tt(/<\/no(script|embed|frames)/i, E.innerHTML))
        ? (un(E), !0)
        : (Ns &&
            E.nodeType === oo.text &&
            ((_ = E.textContent),
            dl([Mt, Yt, jn], (he) => {
              _ = ro(_, he, " ");
            }),
            E.textContent !== _ &&
              (no(t.removed, { element: E.cloneNode() }), (E.textContent = _))),
          Pn(J.afterSanitizeElements, E, null),
          !1);
    },
    Np = function (E, _, I) {
      if (hp && (_ === "id" || _ === "name") && (I in n || I in lS)) return !1;
      if (!(lu && !Jn[_] && tt(Oa, _))) {
        if (!(up && tt(Es, _))) {
          if (!we[_] || Jn[_]) {
            if (
              !(
                (jp(E) &&
                  ((ue.tagNameCheck instanceof RegExp &&
                    tt(ue.tagNameCheck, E)) ||
                    (ue.tagNameCheck instanceof Function &&
                      ue.tagNameCheck(E))) &&
                  ((ue.attributeNameCheck instanceof RegExp &&
                    tt(ue.attributeNameCheck, _)) ||
                    (ue.attributeNameCheck instanceof Function &&
                      ue.attributeNameCheck(_)))) ||
                (_ === "is" &&
                  ue.allowCustomizedBuiltInElements &&
                  ((ue.tagNameCheck instanceof RegExp &&
                    tt(ue.tagNameCheck, I)) ||
                    (ue.tagNameCheck instanceof Function &&
                      ue.tagNameCheck(I))))
              )
            )
              return !1;
          } else if (!hu[_]) {
            if (!tt($, ro(I, R, ""))) {
              if (
                !(
                  (_ === "src" || _ === "xlink:href" || _ === "href") &&
                  E !== "script" &&
                  Q8(I, "data:") === 0 &&
                  gp[E]
                )
              ) {
                if (!(dp && !tt(Ce, ro(I, R, "")))) {
                  if (I) return !1;
                }
              }
            }
          }
        }
      }
      return !0;
    },
    jp = function (E) {
      return E !== "annotation-xml" && By(E, U);
    },
    Tp = function (E) {
      Pn(J.beforeSanitizeAttributes, E, null);
      const { attributes: _ } = E;
      if (!_ || yu(E)) return;
      const I = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: we,
        forceKeepAttr: void 0,
      };
      let he = _.length;
      for (; he--; ) {
        const qe = _[he],
          { name: Be, namespaceURI: dt, value: dn } = qe,
          Hi = Le(Be);
        let et = Be === "value" ? dn : G8(dn);
        if (
          ((I.attrName = Hi),
          (I.attrValue = et),
          (I.keepAttr = !0),
          (I.forceKeepAttr = void 0),
          Pn(J.uponSanitizeAttribute, E, I),
          (et = I.attrValue),
          mp && (Hi === "id" || Hi === "name") && (za(Be, E), (et = rS + et)),
          cu && tt(/((--!?|])>)|<\/(style|title)/i, et))
        ) {
          za(Be, E);
          continue;
        }
        if (I.forceKeepAttr || (za(Be, E), !I.keepAttr)) continue;
        if (!fp && tt(/\/>/i, et)) {
          za(Be, E);
          continue;
        }
        Ns &&
          dl([Mt, Yt, jn], (Ap) => {
            et = ro(et, Ap, " ");
          });
        const Pp = Le(E.nodeName);
        if (Np(Pp, Hi, et)) {
          if (
            S &&
            typeof m == "object" &&
            typeof m.getAttributeType == "function" &&
            !dt
          )
            switch (m.getAttributeType(Pp, Hi)) {
              case "TrustedHTML": {
                et = S.createHTML(et);
                break;
              }
              case "TrustedScriptURL": {
                et = S.createScriptURL(et);
                break;
              }
            }
          try {
            dt ? E.setAttributeNS(dt, Be, et) : E.setAttribute(Be, et),
              yu(E) ? un(E) : Iy(t.removed);
          } catch {}
        }
      }
      Pn(J.afterSanitizeAttributes, E, null);
    },
    uS = function B(E) {
      let _ = null;
      const I = kp(E);
      for (Pn(J.beforeSanitizeShadowDOM, E, null); (_ = I.nextNode()); )
        Pn(J.uponSanitizeShadowNode, _, null),
          Ep(_),
          Tp(_),
          _.content instanceof i && B(_.content);
      Pn(J.afterSanitizeShadowDOM, E, null);
    };
  return (
    (t.sanitize = function (B) {
      let E =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        _ = null,
        I = null,
        he = null,
        qe = null;
      if (((mu = !B), mu && (B = "<!-->"), typeof B != "string" && !Cp(B)))
        if (typeof B.toString == "function") {
          if (((B = B.toString()), typeof B != "string"))
            throw so("dirty is not a string, aborting");
        } else throw so("toString is not a function");
      if (!t.isSupported) return B;
      if (
        (uu || gu(E), (t.removed = []), typeof B == "string" && (Ui = !1), Ui)
      ) {
        if (B.nodeName) {
          const dn = Le(B.nodeName);
          if (!q[dn] || kt[dn])
            throw so("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (B instanceof l)
        (_ = Sp("<!---->")),
          (I = _.ownerDocument.importNode(B, !0)),
          (I.nodeType === oo.element && I.nodeName === "BODY") ||
          I.nodeName === "HTML"
            ? (_ = I)
            : _.appendChild(I);
      else {
        if (!js && !Ns && !Ur && B.indexOf("<") === -1)
          return S && Da ? S.createHTML(B) : B;
        if (((_ = Sp(B)), !_)) return js ? null : Da ? C : "";
      }
      _ && du && un(_.firstChild);
      const Be = kp(Ui ? B : _);
      for (; (he = Be.nextNode()); )
        Ep(he), Tp(he), he.content instanceof i && uS(he.content);
      if (Ui) return B;
      if (js) {
        if (Ma)
          for (qe = N.call(_.ownerDocument); _.firstChild; )
            qe.appendChild(_.firstChild);
        else qe = _;
        return (
          (we.shadowroot || we.shadowrootmode) && (qe = M.call(r, qe, !0)), qe
        );
      }
      let dt = Ur ? _.outerHTML : _.innerHTML;
      return (
        Ur &&
          q["!doctype"] &&
          _.ownerDocument &&
          _.ownerDocument.doctype &&
          _.ownerDocument.doctype.name &&
          tt(kb, _.ownerDocument.doctype.name) &&
          (dt =
            "<!DOCTYPE " +
            _.ownerDocument.doctype.name +
            `>
` +
            dt),
        Ns &&
          dl([Mt, Yt, jn], (dn) => {
            dt = ro(dt, dn, " ");
          }),
        S && Da ? S.createHTML(dt) : dt
      );
    }),
    (t.setConfig = function () {
      let B =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      gu(B), (uu = !0);
    }),
    (t.clearConfig = function () {
      (_s = null), (uu = !1);
    }),
    (t.isValidAttribute = function (B, E, _) {
      _s || gu({});
      const I = Le(B),
        he = Le(E);
      return Np(I, he, _);
    }),
    (t.addHook = function (B, E) {
      typeof E == "function" && no(J[B], E);
    }),
    (t.removeHook = function (B, E) {
      if (E !== void 0) {
        const _ = K8(J[B], E);
        return _ === -1 ? void 0 : Y8(J[B], _, 1)[0];
      }
      return Iy(J[B]);
    }),
    (t.removeHooks = function (B) {
      J[B] = [];
    }),
    (t.removeAllHooks = function () {
      J = qy();
    }),
    t
  );
}
var Eb = Cb();
const Wy = ({ user: e }) => {
  const [t, n] = b.useState(null),
    [r, s] = b.useState(null),
    [i, o] = b.useState("kolaborasi"),
    l = Re(),
    c = {
      toolbar: [
        [{ header: [1, 2, 3, !1] }],
        [{ font: [] }, { size: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block"],
        ["link"],
        ["clean"],
      ],
    },
    u = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "color",
      "background",
      "script",
      "list",
      "blockquote",
      "code-block",
      "link",
    ],
    { quill: d, quillRef: f } = vb({
      theme: "snow",
      placeholder: "Bagikan sesuatu yang menarik dan inspiratif...",
      modules: c,
      formats: u,
    }),
    { mutate: h, isPending: m } = oe({
      mutationFn: async (p) =>
        (
          await F.post("/posts/create", p, {
            headers: { "Content-Type": "application/json" },
          })
        ).data,
      onSuccess: () => {
        v(),
          G.success("Post created successfully"),
          l.invalidateQueries({ queryKey: ["posts"] });
      },
      onError: (p) => {
        var x, S;
        G.error(
          ((S = (x = p.response) == null ? void 0 : x.data) == null
            ? void 0
            : S.message) || "Failed to create post"
        );
      },
    }),
    y = async () => {
      try {
        const p = (d == null ? void 0 : d.root.innerHTML) || "",
          x = Eb.sanitize(p),
          S = x.replace(/<[^>]+>/g, "").trim(),
          C = { content: x, plainText: S, category: i };
        t && (C.image = await g(t)), h(C);
      } catch (p) {
        console.error("Error in handlePostCreation:", p);
      }
    },
    v = () => {
      d && d.setText(""), n(null), s(null), o("kolaborasi");
    },
    w = (p) => {
      const x = p.target.files[0];
      n(x), x ? g(x).then(s) : s(null);
    },
    g = (p) =>
      new Promise((x, S) => {
        const C = new FileReader();
        (C.onloadend = () => x(C.result)), (C.onerror = S), C.readAsDataURL(p);
      });
  return (
    b.useEffect(() => {
      var S;
      if (!d) return;
      const p = {
          bold: "Tebal",
          italic: "Miring",
          underline: "Garis bawah",
          strike: "Coret",
          link: "Tautan",
          "code-block": "Kode",
          blockquote: "Kutipan",
          clean: "Bersihkan",
        },
        x =
          (S = f.current) == null
            ? void 0
            : S.querySelectorAll("button, select");
      x == null ||
        x.forEach((C) => {
          const T = Array.from(C.classList).find((N) => N.startsWith("ql-")),
            j = T == null ? void 0 : T.replace("ql-", "");
          j && p[j] && C.setAttribute("aria-label", p[j]);
        });
    }, [d]),
    a.jsxs("div", {
      className: "bg-secondary rounded-lg shadow mb-4 p-4",
      children: [
        a.jsxs("div", {
          className: "flex space-x-3",
          children: [
            a.jsx("img", {
              src: e.profilePicture || "/avatar.png",
              alt: e.name,
              className: "size-12 rounded-full",
            }),
            a.jsxs("article", {
              className: "mt-2 w-full max-w-[65vw] md:max-w-[35vw]",
              children: [
                a.jsx("label", {
                  className: "block mb-2 text-md font-bold text-gray-700",
                  children: "Kirim Postingan",
                }),
                a.jsx("div", {
                  className:
                    "rounded-xl overflow-hidden shadow-sm border border-gray-300 bg-white",
                  children: a.jsx("div", {
                    ref: f,
                    className: "custom-editor",
                    style: { minHeight: "55px" },
                  }),
                }),
              ],
            }),
          ],
        }),
        (e == null ? void 0 : e.role) === "admin" &&
          a.jsxs("div", {
            className: "mt-4",
            children: [
              a.jsx("label", {
                className: "block mb-1 text-sm font-medium text-gray-700",
                children: "Kategori",
              }),
              a.jsxs("select", {
                className:
                  "w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300",
                value: i,
                onChange: (p) => o(p.target.value),
                children: [
                  a.jsx("option", {
                    value: "kolaborasi",
                    children: "Kolaborasi",
                  }),
                  a.jsx("option", { value: "penting", children: "Penting" }),
                ],
              }),
            ],
          }),
        r &&
          a.jsx("div", {
            className: "mt-4",
            children: a.jsx("img", {
              src: r,
              alt: "Selected",
              className: "w-full h-auto rounded-lg",
            }),
          }),
        a.jsxs("div", {
          className: "flex justify-between items-center mt-4",
          children: [
            a.jsx("div", {
              className: "flex space-x-4",
              children: a.jsxs("label", {
                className:
                  "flex items-center text-info hover:text-info-dark cursor-pointer",
                children: [
                  a.jsx(Fv, { size: 20, className: "mr-2" }),
                  a.jsx("span", { children: "Photo" }),
                  a.jsx("input", {
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: w,
                  }),
                ],
              }),
            }),
            a.jsx("button", {
              className:
                "bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-dark transition-colors duration-200",
              onClick: y,
              disabled: m,
              children: m
                ? a.jsx(Rr, { className: "size-5 animate-spin" })
                : "Share",
            }),
          ],
        }),
      ],
    })
  );
};
function ae(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
      t === "[object Number]" ||
      typeof e == "string" ||
      t === "[object String]"
    ? new Date(e)
    : new Date(NaN);
}
function Dr(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Nb = 6048e5,
  dP = 864e5,
  jb = 6e4,
  Tb = 36e5,
  hl = 43200,
  Ky = 1440;
let fP = {};
function Ra() {
  return fP;
}
function fa(e, t) {
  var l, c, u, d;
  const n = Ra(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) ==
      null
        ? void 0
        : c.weekStartsOn) ??
      n.weekStartsOn ??
      ((d = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    s = ae(e),
    i = s.getDay(),
    o = (i < r ? 7 : 0) + i - r;
  return s.setDate(s.getDate() - o), s.setHours(0, 0, 0, 0), s;
}
function Pc(e) {
  return fa(e, { weekStartsOn: 1 });
}
function Pb(e) {
  const t = ae(e),
    n = t.getFullYear(),
    r = Dr(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const s = Pc(r),
    i = Dr(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const o = Pc(i);
  return t.getTime() >= s.getTime()
    ? n + 1
    : t.getTime() >= o.getTime()
    ? n
    : n - 1;
}
function Yy(e) {
  const t = ae(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ac(e) {
  const t = ae(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function hP(e, t) {
  const n = Yy(e),
    r = Yy(t),
    s = +n - Ac(n),
    i = +r - Ac(r);
  return Math.round((s - i) / dP);
}
function mP(e) {
  const t = Pb(e),
    n = Dr(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Pc(n);
}
function Bl(e, t) {
  const n = ae(e),
    r = ae(t),
    s = n.getTime() - r.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function pP(e) {
  return Dr(e, Date.now());
}
function gP(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Ab(e) {
  if (!gP(e) && typeof e != "number") return !1;
  const t = ae(e);
  return !isNaN(Number(t));
}
function yP(e, t) {
  const n = ae(e),
    r = ae(t),
    s = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return s * 12 + i;
}
function xP(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function vP(e, t) {
  return +ae(e) - +ae(t);
}
function wP(e) {
  const t = ae(e);
  return t.setHours(23, 59, 59, 999), t;
}
function bP(e) {
  const t = ae(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function SP(e) {
  const t = ae(e);
  return +wP(t) == +bP(t);
}
function kP(e, t) {
  const n = ae(e),
    r = ae(t),
    s = Bl(n, r),
    i = Math.abs(yP(n, r));
  let o;
  if (i < 1) o = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30),
      n.setMonth(n.getMonth() - s * i);
    let l = Bl(n, r) === -s;
    SP(ae(e)) && i === 1 && Bl(e, r) === 1 && (l = !1),
      (o = s * (i - Number(l)));
  }
  return o === 0 ? 0 : o;
}
function CP(e, t, n) {
  const r = vP(e, t) / 1e3;
  return xP(n == null ? void 0 : n.roundingMethod)(r);
}
function EP(e) {
  const t = ae(e),
    n = Dr(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const NP = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  jP = (e, t, n) => {
    let r;
    const s = NP[e];
    return (
      typeof s == "string"
        ? (r = s)
        : t === 1
        ? (r = s.one)
        : (r = s.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function gd(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const TP = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  PP = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  AP = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  _P = {
    date: gd({ formats: TP, defaultWidth: "full" }),
    time: gd({ formats: PP, defaultWidth: "full" }),
    dateTime: gd({ formats: AP, defaultWidth: "full" }),
  },
  RP = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  OP = (e, t, n, r) => RP[e];
function ao(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let s;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth,
        l = n != null && n.width ? String(n.width) : o;
      s = e.formattingValues[l] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth,
        l = n != null && n.width ? String(n.width) : e.defaultWidth;
      s = e.values[l] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return s[i];
  };
}
const MP = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  DP = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  LP = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  FP = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  IP = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  BP = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  zP = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  VP = {
    ordinalNumber: zP,
    era: ao({ values: MP, defaultWidth: "wide" }),
    quarter: ao({
      values: DP,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: ao({ values: LP, defaultWidth: "wide" }),
    day: ao({ values: FP, defaultWidth: "wide" }),
    dayPeriod: ao({
      values: IP,
      defaultWidth: "wide",
      formattingValues: BP,
      defaultFormattingWidth: "wide",
    }),
  };
function lo(e) {
  return (t, n = {}) => {
    const r = n.width,
      s = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(s);
    if (!i) return null;
    const o = i[0],
      l = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      c = Array.isArray(l) ? $P(l, (f) => f.test(o)) : UP(l, (f) => f.test(o));
    let u;
    (u = e.valueCallback ? e.valueCallback(c) : c),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const d = t.slice(o.length);
    return { value: u, rest: d };
  };
}
function UP(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function $P(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function HP(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const s = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const l = t.slice(s.length);
    return { value: o, rest: l };
  };
}
const qP = /^(\d+)(th|st|nd|rd)?/i,
  WP = /\d+/i,
  KP = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  YP = { any: [/^b/i, /^(a|c)/i] },
  QP = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  GP = { any: [/1/i, /2/i, /3/i, /4/i] },
  XP = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  JP = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  ZP = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  eA = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  tA = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  nA = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  rA = {
    ordinalNumber: HP({
      matchPattern: qP,
      parsePattern: WP,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: lo({
      matchPatterns: KP,
      defaultMatchWidth: "wide",
      parsePatterns: YP,
      defaultParseWidth: "any",
    }),
    quarter: lo({
      matchPatterns: QP,
      defaultMatchWidth: "wide",
      parsePatterns: GP,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: lo({
      matchPatterns: XP,
      defaultMatchWidth: "wide",
      parsePatterns: JP,
      defaultParseWidth: "any",
    }),
    day: lo({
      matchPatterns: ZP,
      defaultMatchWidth: "wide",
      parsePatterns: eA,
      defaultParseWidth: "any",
    }),
    dayPeriod: lo({
      matchPatterns: tA,
      defaultMatchWidth: "any",
      parsePatterns: nA,
      defaultParseWidth: "any",
    }),
  },
  _b = {
    code: "en-US",
    formatDistance: jP,
    formatLong: _P,
    formatRelative: OP,
    localize: VP,
    match: rA,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function sA(e) {
  const t = ae(e);
  return hP(t, EP(t)) + 1;
}
function iA(e) {
  const t = ae(e),
    n = +Pc(t) - +mP(t);
  return Math.round(n / Nb) + 1;
}
function Rb(e, t) {
  var d, f, h, m;
  const n = ae(e),
    r = n.getFullYear(),
    s = Ra(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      s.firstWeekContainsDate ??
      ((m = (h = s.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    o = Dr(e, 0);
  o.setFullYear(r + 1, 0, i), o.setHours(0, 0, 0, 0);
  const l = fa(o, t),
    c = Dr(e, 0);
  c.setFullYear(r, 0, i), c.setHours(0, 0, 0, 0);
  const u = fa(c, t);
  return n.getTime() >= l.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function oA(e, t) {
  var l, c, u, d;
  const n = Ra(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) ==
      null
        ? void 0
        : c.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((d = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : d.firstWeekContainsDate) ??
      1,
    s = Rb(e, t),
    i = Dr(e, 0);
  return i.setFullYear(s, 0, r), i.setHours(0, 0, 0, 0), fa(i, t);
}
function aA(e, t) {
  const n = ae(e),
    r = +fa(n, t) - +oA(n, t);
  return Math.round(r / Nb) + 1;
}
function re(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const tr = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return re(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : re(n + 1, 2);
    },
    d(e, t) {
      return re(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return re(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return re(e.getHours(), t.length);
    },
    m(e, t) {
      return re(e.getMinutes(), t.length);
    },
    s(e, t) {
      return re(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        s = Math.trunc(r * Math.pow(10, n - 3));
      return re(s, t.length);
    },
  },
  Ms = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Qy = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          s = r > 0 ? r : 1 - r;
        return n.ordinalNumber(s, { unit: "year" });
      }
      return tr.y(e, t);
    },
    Y: function (e, t, n, r) {
      const s = Rb(e, r),
        i = s > 0 ? s : 1 - s;
      if (t === "YY") {
        const o = i % 100;
        return re(o, 2);
      }
      return t === "Yo"
        ? n.ordinalNumber(i, { unit: "year" })
        : re(i, t.length);
    },
    R: function (e, t) {
      const n = Pb(e);
      return re(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return re(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return re(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return re(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return tr.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return re(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const s = aA(e, r);
      return t === "wo"
        ? n.ordinalNumber(s, { unit: "week" })
        : re(s, t.length);
    },
    I: function (e, t, n) {
      const r = iA(e);
      return t === "Io"
        ? n.ordinalNumber(r, { unit: "week" })
        : re(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : tr.d(e, t);
    },
    D: function (e, t, n) {
      const r = sA(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : re(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const s = e.getDay(),
        i = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return re(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(s, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(s, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(s, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(s, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const s = e.getDay(),
        i = (s - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return re(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(s, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(s, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(s, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(s, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        s = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(s);
        case "ii":
          return re(s, t.length);
        case "io":
          return n.ordinalNumber(s, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const s = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch (
        (r === 12
          ? (s = Ms.noon)
          : r === 0
          ? (s = Ms.midnight)
          : (s = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(s, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let s;
      switch (
        (r >= 17
          ? (s = Ms.evening)
          : r >= 12
          ? (s = Ms.afternoon)
          : r >= 4
          ? (s = Ms.morning)
          : (s = Ms.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(s, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(s, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(s, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return tr.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : tr.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko"
        ? n.ordinalNumber(r, { unit: "hour" })
        : re(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : re(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : tr.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : tr.s(e, t);
    },
    S: function (e, t) {
      return tr.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Xy(r);
        case "XXXX":
        case "XX":
          return Yr(r);
        case "XXXXX":
        case "XXX":
        default:
          return Yr(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Xy(r);
        case "xxxx":
        case "xx":
          return Yr(r);
        case "xxxxx":
        case "xxx":
        default:
          return Yr(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Gy(r, ":");
        case "OOOO":
        default:
          return "GMT" + Yr(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Gy(r, ":");
        case "zzzz":
        default:
          return "GMT" + Yr(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return re(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return re(r, t.length);
    },
  };
function Gy(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    s = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(s) : n + String(s) + t + re(i, 2);
}
function Xy(e, t) {
  return e % 60 === 0
    ? (e > 0 ? "-" : "+") + re(Math.abs(e) / 60, 2)
    : Yr(e, t);
}
function Yr(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    s = re(Math.trunc(r / 60), 2),
    i = re(r % 60, 2);
  return n + s + t + i;
}
const Jy = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  Ob = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  lA = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      s = n[2];
    if (!s) return Jy(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Jy(r, t)).replace("{{time}}", Ob(s, t));
  },
  cA = { p: Ob, P: lA },
  uA = /^D+$/,
  dA = /^Y+$/,
  fA = ["D", "DD", "YY", "YYYY"];
function hA(e) {
  return uA.test(e);
}
function mA(e) {
  return dA.test(e);
}
function pA(e, t, n) {
  const r = gA(e, t, n);
  if ((console.warn(r), fA.includes(e))) throw new RangeError(r);
}
function gA(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const yA = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  xA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  vA = /^'([^]*?)'?$/,
  wA = /''/g,
  bA = /[a-zA-Z]/;
function SA(e, t, n) {
  var d, f, h, m;
  const r = Ra(),
    s = r.locale ?? _b,
    i =
      r.firstWeekContainsDate ??
      ((f = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      1,
    o =
      r.weekStartsOn ??
      ((m = (h = r.locale) == null ? void 0 : h.options) == null
        ? void 0
        : m.weekStartsOn) ??
      0,
    l = ae(e);
  if (!Ab(l)) throw new RangeError("Invalid time value");
  let c = t
    .match(xA)
    .map((y) => {
      const v = y[0];
      if (v === "p" || v === "P") {
        const w = cA[v];
        return w(y, s.formatLong);
      }
      return y;
    })
    .join("")
    .match(yA)
    .map((y) => {
      if (y === "''") return { isToken: !1, value: "'" };
      const v = y[0];
      if (v === "'") return { isToken: !1, value: kA(y) };
      if (Qy[v]) return { isToken: !0, value: y };
      if (v.match(bA))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            v +
            "`"
        );
      return { isToken: !1, value: y };
    });
  s.localize.preprocessor && (c = s.localize.preprocessor(l, c));
  const u = { firstWeekContainsDate: i, weekStartsOn: o, locale: s };
  return c
    .map((y) => {
      if (!y.isToken) return y.value;
      const v = y.value;
      (mA(v) || hA(v)) && pA(v, t, String(e));
      const w = Qy[v[0]];
      return w(l, v, s.localize, u);
    })
    .join("");
}
function kA(e) {
  const t = e.match(vA);
  return t ? t[1].replace(wA, "'") : e;
}
function CA(e, t, n) {
  const r = Ra(),
    s = (n == null ? void 0 : n.locale) ?? r.locale ?? _b,
    i = 2520,
    o = Bl(e, t);
  if (isNaN(o)) throw new RangeError("Invalid time value");
  const l = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: o,
  });
  let c, u;
  o > 0 ? ((c = ae(t)), (u = ae(e))) : ((c = ae(e)), (u = ae(t)));
  const d = CP(u, c),
    f = (Ac(u) - Ac(c)) / 1e3,
    h = Math.round((d - f) / 60);
  let m;
  if (h < 2)
    return n != null && n.includeSeconds
      ? d < 5
        ? s.formatDistance("lessThanXSeconds", 5, l)
        : d < 10
        ? s.formatDistance("lessThanXSeconds", 10, l)
        : d < 20
        ? s.formatDistance("lessThanXSeconds", 20, l)
        : d < 40
        ? s.formatDistance("halfAMinute", 0, l)
        : d < 60
        ? s.formatDistance("lessThanXMinutes", 1, l)
        : s.formatDistance("xMinutes", 1, l)
      : h === 0
      ? s.formatDistance("lessThanXMinutes", 1, l)
      : s.formatDistance("xMinutes", h, l);
  if (h < 45) return s.formatDistance("xMinutes", h, l);
  if (h < 90) return s.formatDistance("aboutXHours", 1, l);
  if (h < Ky) {
    const y = Math.round(h / 60);
    return s.formatDistance("aboutXHours", y, l);
  } else {
    if (h < i) return s.formatDistance("xDays", 1, l);
    if (h < hl) {
      const y = Math.round(h / Ky);
      return s.formatDistance("xDays", y, l);
    } else if (h < hl * 2)
      return (m = Math.round(h / hl)), s.formatDistance("aboutXMonths", m, l);
  }
  if (((m = kP(u, c)), m < 12)) {
    const y = Math.round(h / hl);
    return s.formatDistance("xMonths", y, l);
  } else {
    const y = m % 12,
      v = Math.trunc(m / 12);
    return y < 3
      ? s.formatDistance("aboutXYears", v, l)
      : y < 9
      ? s.formatDistance("overXYears", v, l)
      : s.formatDistance("almostXYears", v + 1, l);
  }
}
function ha(e, t) {
  return CA(e, pP(e), t);
}
function EA(e, t) {
  const r = PA(e);
  let s;
  if (r.date) {
    const c = AA(r.date, 2);
    s = _A(c.restDateString, c.year);
  }
  if (!s || isNaN(s.getTime())) return new Date(NaN);
  const i = s.getTime();
  let o = 0,
    l;
  if (r.time && ((o = RA(r.time)), isNaN(o))) return new Date(NaN);
  if (r.timezone) {
    if (((l = OA(r.timezone)), isNaN(l))) return new Date(NaN);
  } else {
    const c = new Date(i + o),
      u = new Date(0);
    return (
      u.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()),
      u.setHours(
        c.getUTCHours(),
        c.getUTCMinutes(),
        c.getUTCSeconds(),
        c.getUTCMilliseconds()
      ),
      u
    );
  }
  return new Date(i + o + l);
}
const ml = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  NA = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  jA =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  TA = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function PA(e) {
  const t = {},
    n = e.split(ml.dateTimeDelimiter);
  let r;
  if (n.length > 2) return t;
  if (
    (/:/.test(n[0])
      ? (r = n[0])
      : ((t.date = n[0]),
        (r = n[1]),
        ml.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(ml.timeZoneDelimiter)[0]),
          (r = e.substr(t.date.length, e.length)))),
    r)
  ) {
    const s = ml.timezone.exec(r);
    s ? ((t.time = r.replace(s[1], "")), (t.timezone = s[1])) : (t.time = r);
  }
  return t;
}
function AA(e, t) {
  const n = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)"
    ),
    r = e.match(n);
  if (!r) return { year: NaN, restDateString: "" };
  const s = r[1] ? parseInt(r[1]) : null,
    i = r[2] ? parseInt(r[2]) : null;
  return {
    year: i === null ? s : i * 100,
    restDateString: e.slice((r[1] || r[2]).length),
  };
}
function _A(e, t) {
  if (t === null) return new Date(NaN);
  const n = e.match(NA);
  if (!n) return new Date(NaN);
  const r = !!n[4],
    s = co(n[1]),
    i = co(n[2]) - 1,
    o = co(n[3]),
    l = co(n[4]),
    c = co(n[5]) - 1;
  if (r) return IA(t, l, c) ? MA(t, l, c) : new Date(NaN);
  {
    const u = new Date(0);
    return !LA(t, i, o) || !FA(t, s)
      ? new Date(NaN)
      : (u.setUTCFullYear(t, i, Math.max(s, o)), u);
  }
}
function co(e) {
  return e ? parseInt(e) : 1;
}
function RA(e) {
  const t = e.match(jA);
  if (!t) return NaN;
  const n = yd(t[1]),
    r = yd(t[2]),
    s = yd(t[3]);
  return BA(n, r, s) ? n * Tb + r * jb + s * 1e3 : NaN;
}
function yd(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function OA(e) {
  if (e === "Z") return 0;
  const t = e.match(TA);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1,
    r = parseInt(t[2]),
    s = (t[3] && parseInt(t[3])) || 0;
  return zA(r, s) ? n * (r * Tb + s * jb) : NaN;
}
function MA(e, t, n) {
  const r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const s = r.getUTCDay() || 7,
    i = (t - 1) * 7 + n + 1 - s;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const DA = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Mb(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function LA(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (DA[t] || (Mb(e) ? 29 : 28));
}
function FA(e, t) {
  return t >= 1 && t <= (Mb(e) ? 366 : 365);
}
function IA(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function BA(e, t, n) {
  return e === 24
    ? t === 0 && n === 0
    : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function zA(e, t) {
  return t >= 0 && t <= 59;
}
function ii({ icon: e, text: t, onClick: n }) {
  return a.jsxs("button", {
    className: "flex items-center",
    onClick: n,
    children: [
      a.jsx("span", { className: "mr-1", children: e }),
      a.jsx("span", { className: "hidden sm:inline", children: t }),
    ],
  });
}
const Db = ({ post: e }) => {
    var C, T;
    const { postId: t } = Ss(),
      { data: n } = ie({
        queryKey: ["authUser"],
        queryFn: async () => (await F.get("/auth/me")).data,
        initialData: null,
      }),
      [r, s] = b.useState(!1),
      [i, o] = b.useState(""),
      [l, c] = b.useState(e.comments || []),
      u = (n == null ? void 0 : n._id) === e.author._id,
      d = e.likes.includes(n == null ? void 0 : n._id),
      f = Re(),
      { mutate: h, isPending: m } = oe({
        mutationFn: async () => {
          await F.delete(`/posts/delete/${e._id}`);
        },
        onSuccess: () => {
          f.invalidateQueries({ queryKey: ["posts"] }),
            G.success("Post deleted successfully");
        },
        onError: (j) => {
          G.error(j.message);
        },
      }),
      { mutate: y, isPending: v } = oe({
        mutationFn: async (j) => {
          await F.post(`/posts/${e._id}/comment`, { content: j });
        },
        onSuccess: () => {
          f.invalidateQueries({ queryKey: ["posts"] }),
            G.success("Comment added successfully");
        },
        onError: (j) => {
          G.error(j.response.data.message || "Failed to add comment");
        },
      }),
      { mutate: w, isPending: g } = oe({
        mutationFn: async () => {
          await F.post(`/posts/${e._id}/like`);
        },
        onSuccess: () => {
          f.invalidateQueries({ queryKey: ["posts"] }),
            f.invalidateQueries({ queryKey: ["post", t] });
        },
      }),
      p = () => {
        window.confirm("Are you sure you want to delete this post?") && h();
      },
      x = async () => {
        g || w();
      },
      S = async (j) => {
        j.preventDefault(),
          i.trim() &&
            (y(i),
            o(""),
            c([
              ...l,
              {
                content: i,
                user: {
                  _id: n._id,
                  name: n.name,
                  profilePicture: n.profilePicture,
                },
                createdAt: new Date(),
              },
            ]));
      };
    return a.jsxs("div", {
      className: "bg-secondary rounded-lg shadow mb-4",
      children: [
        a.jsxs("div", {
          className: "p-4",
          children: [
            a.jsxs("div", {
              className: "flex items-center justify-between mb-4",
              children: [
                a.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    a.jsx(K, {
                      to: `/profile/${
                        (C = e == null ? void 0 : e.author) == null
                          ? void 0
                          : C.username
                      }`,
                      children: a.jsx("img", {
                        src: e.author.profilePicture || "/avatar.png",
                        alt: e.author.name,
                        className: "size-10 rounded-full mr-3",
                      }),
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx(K, {
                          to: `/profile/${
                            (T = e == null ? void 0 : e.author) == null
                              ? void 0
                              : T.username
                          }`,
                          children: a.jsx("h3", {
                            className: "font-semibold",
                            children: e.author.name,
                          }),
                        }),
                        a.jsx("p", {
                          className: "text-xs text-info",
                          children: e.author.headline,
                        }),
                        a.jsx("p", {
                          className: "text-xs text-info",
                          children: ha(new Date(e.createdAt), {
                            addSuffix: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u &&
                  a.jsx("button", {
                    onClick: p,
                    className: "text-red-500 hover:text-red-700",
                    children: m
                      ? a.jsx(Rr, { size: 18, className: "animate-spin" })
                      : a.jsx(Cm, { size: 18 }),
                  }),
              ],
            }),
            a.jsx("div", {
              className:
                "prose max-w-none break-words whitespace-pre-wrap overflow-hidden",
              dangerouslySetInnerHTML: { __html: e.content },
            }),
            e.image &&
              a.jsx("img", {
                src: e.image,
                alt: "Post content",
                className: "rounded-lg w-full mb-4",
              }),
            a.jsxs("div", {
              className: "flex justify-between text-info",
              children: [
                a.jsx(ii, {
                  icon: a.jsx(km, {
                    size: 18,
                    className: d ? "text-blue-500  fill-blue-300" : "",
                  }),
                  text: `Like (${e.likes.length})`,
                  onClick: x,
                }),
                a.jsx(ii, {
                  icon: a.jsx(Ea, { size: 18 }),
                  text: `Comment (${l.length})`,
                  onClick: () => s(!r),
                }),
                a.jsx(ii, { icon: a.jsx(zv, { size: 18 }), text: "Share" }),
              ],
            }),
          ],
        }),
        r &&
          a.jsxs("div", {
            className: "px-4 pb-4",
            children: [
              a.jsx("div", {
                className: "mb-4 max-h-60 overflow-y-auto",
                children: l.map((j) =>
                  a.jsxs(
                    "div",
                    {
                      className:
                        "mb-2 bg-base-100 p-2 rounded flex items-start",
                      children: [
                        a.jsx("img", {
                          src: j.user.profilePicture || "/avatar.png",
                          alt: j.user.name,
                          className: "w-8 h-8 rounded-full mr-2 flex-shrink-0",
                        }),
                        a.jsxs("div", {
                          className: "flex-grow",
                          children: [
                            a.jsxs("div", {
                              className: "flex items-center mb-1",
                              children: [
                                a.jsx("span", {
                                  className: "font-semibold mr-2",
                                  children: j.user.name,
                                }),
                                a.jsx("span", {
                                  className: "text-xs text-info",
                                  children: ha(new Date(j.createdAt)),
                                }),
                              ],
                            }),
                            a.jsx("p", { children: j.content }),
                          ],
                        }),
                      ],
                    },
                    j._id
                  )
                ),
              }),
              a.jsxs("form", {
                onSubmit: S,
                className: "flex items-center",
                children: [
                  a.jsx("input", {
                    type: "text",
                    value: i,
                    onChange: (j) => o(j.target.value),
                    placeholder: "Add a comment...",
                    className:
                      "flex-grow p-2 rounded-l-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary",
                  }),
                  a.jsx("button", {
                    type: "submit",
                    className:
                      "bg-primary text-white p-2 rounded-r-full hover:bg-primary-dark transition duration-300",
                    disabled: v,
                    children: v
                      ? a.jsx(Rr, { size: 18, className: "animate-spin" })
                      : a.jsx(Sm, { size: 18 }),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  Zy = ({ user: e }) => {
    const t = Re(),
      { data: n, isLoading: r } = ie({
        queryKey: ["connectionStatus", e._id],
        queryFn: () => F.get(`/connections/status/${e._id}`),
      }),
      { mutate: s } = oe({
        mutationFn: (u) => F.post(`/connections/request/${u}`),
        onSuccess: () => {
          G.success("Connection request sent successfully"),
            t.invalidateQueries({ queryKey: ["connectionStatus", e._id] });
        },
        onError: (u) => {
          var d, f;
          G.error(
            ((f = (d = u.response) == null ? void 0 : d.data) == null
              ? void 0
              : f.error) || "An error occurred"
          );
        },
      }),
      { mutate: i } = oe({
        mutationFn: (u) => F.put(`/connections/accept/${u}`),
        onSuccess: () => {
          G.success("Connection request accepted"),
            t.invalidateQueries({ queryKey: ["connectionStatus", e._id] });
        },
        onError: (u) => {
          var d, f;
          G.error(
            ((f = (d = u.response) == null ? void 0 : d.data) == null
              ? void 0
              : f.error) || "An error occurred"
          );
        },
      }),
      { mutate: o } = oe({
        mutationFn: (u) => F.put(`/connections/reject/${u}`),
        onSuccess: () => {
          G.success("Connection request rejected"),
            t.invalidateQueries({ queryKey: ["connectionStatus", e._id] });
        },
        onError: (u) => {
          var d, f;
          G.error(
            ((f = (d = u.response) == null ? void 0 : d.data) == null
              ? void 0
              : f.error) || "An error occurred"
          );
        },
      }),
      l = () => {
        var u;
        if (r)
          return a.jsx("button", {
            className:
              "px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-500",
            disabled: !0,
            children: "Loading...",
          });
        switch ((u = n == null ? void 0 : n.data) == null ? void 0 : u.status) {
          case "pending":
            return a.jsxs("button", {
              className:
                "px-2 py-1 rounded-full text-sm bg-yellow-500 text-white flex items-center",
              disabled: !0,
              children: [a.jsx(Lv, { size: 16, className: "mr-1" }), "Pending"],
            });
          case "received":
            return a.jsxs("div", {
              className: "flex gap-2 justify-center",
              children: [
                a.jsx("button", {
                  onClick: () => i(n.data.requestId),
                  className:
                    "rounded-full p-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white",
                  children: a.jsx(Dv, { size: 16 }),
                }),
                a.jsx("button", {
                  onClick: () => o(n.data.requestId),
                  className:
                    "rounded-full p-1 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white",
                  children: a.jsx(Gn, { size: 16 }),
                }),
              ],
            });
          case "connected":
            return a.jsxs("button", {
              className:
                "px-2 py-1 rounded-full text-sm bg-green-500 text-white flex items-center",
              disabled: !0,
              children: [
                a.jsx(If, { size: 16, className: "mr-1" }),
                "Connected",
              ],
            });
          default:
            return a.jsxs("button", {
              className:
                "px-2 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 flex items-center",
              onClick: c,
              children: [a.jsx(Na, { size: 16, className: "mr-1" }), "Connect"],
            });
        }
      },
      c = () => {
        var u;
        ((u = n == null ? void 0 : n.data) == null ? void 0 : u.status) ===
          "not_connected" && s(e._id);
      };
    return a.jsxs("div", {
      className:
        "flex flex-wrap md:flex-nowrap items-center justify-between mb-4 shadow-md md:shadow-none p-2 md:p-0  rounded-lg overflow-x-auto",
      children: [
        a.jsxs(K, {
          to: `/profile/${e.username}`,
          className: "flex items-center flex-grow min-w-0",
          children: [
            a.jsx("img", {
              src: e.profilePicture || "/avatar.png",
              alt: e.name,
              className: "w-12 h-12 rounded-full mr-1",
            }),
            a.jsxs("div", {
              className: "truncate",
              children: [
                a.jsx("h3", {
                  className: "font-semibold text-sm truncate",
                  children: e.name,
                }),
                a.jsx("p", {
                  className: "text-xs text-info truncate",
                  children: e.headline,
                }),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className:
            "w-full md:w-auto mt-2 md:mt-0 flex justify-center md:justify-end shrink-0",
          children: l(),
        }),
      ],
    });
  },
  e1 = ({ authUser: e, allUsers: t }) => {
    const n = Qn();
    return (e == null ? void 0 : e.role) !== "admin"
      ? null
      : a.jsx("div", {
          className: "col-span-3 lg:col-span-3 block",
          children: a.jsxs("div", {
            className:
              "bg-[#FFFFFF] rounded-lg shadow-md p-4 border border-[#D7D7D7]",
            children: [
              a.jsx("h2", {
                className: "text-base font-bold text-gray-800 text-center mb-2",
                children: "Daftar Warga Terverifikasi",
              }),
              a.jsxs("p", {
                className: "text-sm text-[#525252] text-center mb-3",
                children: [
                  "Total:",
                  " ",
                  a.jsx("span", {
                    className: "font-semibold text-[#3FA3CE]",
                    children: (t == null ? void 0 : t.length) || "Error",
                  }),
                  " ",
                  "Users",
                ],
              }),
              a.jsx("button", {
                onClick: () => n("/dashboardadmin"),
                className:
                  "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition",
                children: "Kelola Pengguna",
              }),
              a.jsx("div", {
                className: "space-y-2",
                children:
                  t == null
                    ? void 0
                    : t.map((r) =>
                        a.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center gap-3 bg-[#F4F4F4] p-2 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer",
                            onClick: () => n(`/profile/${r.username}`),
                            children: [
                              a.jsx("img", {
                                src: r.profilePicture || "/avatar.png",
                                alt: r.username,
                                className:
                                  "w-10 h-10 rounded-full border border-[#A8A8A8] hover:scale-105 transition",
                              }),
                              a.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  a.jsx("p", {
                                    className:
                                      "text-md font-semibold text-[#2B7A98] leading-tight",
                                    children: r.name,
                                  }),
                                  a.jsxs("p", {
                                    className:
                                      "text-sm text-[#3E3E3E] flex items-center gap-1 leading-tight",
                                    children: [
                                      a.jsx(Po, { size: 14 }),
                                      " ",
                                      r.username,
                                    ],
                                  }),
                                  a.jsx("p", {
                                    className:
                                      "text-sm text-[#828282] leading-tight",
                                    children:
                                      r.connections.length > 0
                                        ? a.jsxs("span", {
                                            children: [
                                              r.connections.length,
                                              " Koneksi",
                                            ],
                                          })
                                        : a.jsx("span", {
                                            className: "text-[#CCCCCC]",
                                            children: "Belum Ada Koneksi",
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          r._id
                        )
                      ),
              }),
            ],
          }),
        });
  };
function t1() {
  return a.jsxs("div", {
    className: "bg-gray-600 p-4 rounded-xl shadow-2xl text-sm text-white mt-3",
    children: [
      a.jsx("h2", {
        className:
          "text-center text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7cccef] to-[#EF8B8B]",
        children: "⚡ Syarat & Ketentuan Berkolaborasi",
      }),
      a.jsxs("ul", {
        className: "mt-4 space-y-4 text-sm",
        children: [
          a.jsxs("li", {
            className: "flex items-start gap-3",
            children: [
              a.jsx(Os, { size: 18, className: "text-green-400" }),
              "Jujur & Transparan – Dilarang menyesatkan, mengklaim ide orang lain, atau menyebarkan informasi palsu.",
            ],
          }),
          a.jsxs("li", {
            className: "flex items-   gap-3",
            children: [
              a.jsx(Os, { size: 18, className: "text-green-400" }),
              "Kolaborasi, Bukan Kompetisi – Saling membantu, bukan menjatuhkan. Sukses bersama lebih baik!",
            ],
          }),
          a.jsxs("li", {
            className: "flex items-start gap-3",
            children: [
              a.jsx(Os, { size: 18, className: "text-green-400" }),
              "Jaga Etika & Kesopanan – Hindari kata-kata kasar, spam, atau tindakan merugikan.",
            ],
          }),
          a.jsxs("li", {
            className: "flex items-start gap-3",
            children: [
              a.jsx(Os, { size: 18, className: "text-green-400" }),
              "Keamanan adalah Prioritas – Jangan bagikan data pribadi atau informasi sensitif sembarangan.",
            ],
          }),
          a.jsxs("li", {
            className: "flex items-start gap-3",
            children: [
              a.jsx(Os, { size: 18, className: "text-green-400" }),
              "Admin Berhak Bertindak – Pelanggaran akan ditindak sesuai aturan, termasuk penghapusan akun.",
            ],
          }),
          a.jsxs("li", {
            className: "flex items-start gap-3",
            children: [
              a.jsx(Os, { size: 18, className: "text-green-400" }),
              "Dengan Bergabung, Anda Menyetujui Aturan Ini – Mari ciptakan ruang kerja yang positif & produktif!",
            ],
          }),
        ],
      }),
    ],
  });
}
const VA = ({
    category: e,
    setCategory: t,
    unreadCounts: n,
    markCategoryAsRead: r,
  }) =>
    a.jsxs("div", {
      className: "flex justify-start gap-4 mb-4",
      children: [
        a.jsx("button", {
          onClick: () => t("all"),
          className: `px-4 py-2 rounded ${
            e === "all"
              ? "bg-[#3FA3CE] text-white"
              : "bg-gray-200 text-gray-800"
          }`,
          children: "Semua",
        }),
        a.jsxs("button", {
          onClick: async () => {
            await r("penting"), t("penting");
          },
          className: `relative px-4 py-2 rounded flex items-center gap-2 ${
            e === "penting"
              ? "bg-[#3FA3CE] text-white"
              : "bg-gray-200 text-gray-800"
          }`,
          children: [
            "Info Dari Admin",
            (n == null ? void 0 : n.penting) > 0 &&
              a.jsx("span", {
                className:
                  "ml-1 inline-flex items-center justify-center text-xs font-semibold text-white bg-red-500 rounded-full w-5 h-5",
                children: n.penting,
              }),
          ],
        }),
      ],
    }),
  UA = ({
    onLeftSidebarToggle: e,
    onRightSidebarToggle: t,
    setShowMobilePost: n,
  }) =>
    a.jsxs("div", {
      className:
        "fixed bottom-0 left-0 w-full bg-[#3FA3CE] shadow-md border-t flex justify-around items-center p-1 lg:hidden z-40",
      children: [
        a.jsxs("button", {
          onClick: e,
          className: "flex flex-col items-center text-sm text-gray-700",
          children: [
            a.jsxs("div", {
              className: "flex items-center",
              children: [
                a.jsx(nN, { className: "w-6 h-6" }),
                a.jsx(rN, { className: "w-6 h-6" }),
              ],
            }),
            a.jsx("span", {
              className: "mt-1 text-xs",
              children: "Syarat Berkolaborasi",
            }),
          ],
        }),
        a.jsxs("button", {
          onClick: () => n(!0),
          className: "...",
          children: [
            a.jsx(JE, { className: "w-6 h-6" }),
            a.jsx("span", { className: "text-xs", children: "Posting" }),
          ],
        }),
        a.jsxs("button", {
          onClick: t,
          className: "flex flex-col items-center text-sm text-gray-700",
          children: [
            a.jsxs("div", {
              className: "flex items-center",
              children: [
                a.jsx(ks, { className: "w-6 h-6" }),
                a.jsx(uN, { className: "w-6 h-6" }),
              ],
            }),
            a.jsx("span", {
              className: "mt-1 text-xs",
              children: "Rekomendasi Teman",
            }),
          ],
        }),
      ],
    }),
  $A = () => {
    const [e, t] = b.useState(1),
      n = 7,
      [r, s] = b.useState("all"),
      i = Re(),
      [o, l] = b.useState(!1),
      [c, u] = b.useState(!1),
      [d, f] = b.useState(!1),
      { data: h } = ie({
        queryKey: ["authUser"],
        queryFn: async () => (await F.get("/auth/me")).data,
        initialData: null,
      }),
      { data: m } = ie({
        queryKey: ["allUsers"],
        queryFn: async () => (await F.get("/messages/users")).data,
        enabled: (h == null ? void 0 : h.role) === "admin",
      }),
      { data: y } = ie({
        queryKey: ["unreadPostCounts"],
        queryFn: async () =>
          (await F.get("/notifications/notif/count-unread-posts")).data,
      }),
      v = async (S) => {
        try {
          await F.post("/notifications/notif/mark-post-read-by-category", {
            category: S,
          }),
            i.invalidateQueries(["unreadPostCounts"]);
        } catch (C) {
          console.error("Failed to mark notifications as read", C);
        }
      },
      { data: w } = ie({
        queryKey: ["recommendedUsers", e],
        queryFn: async () =>
          (await F.get(`/users/suggestions?page=${e}&limit=${n}`)).data,
      }),
      { data: g = [] } = ie({
        queryKey: ["posts", r],
        queryFn: async () => {
          const S = r === "all" ? "/posts" : `/posts?category=${r}`;
          return (await F.get(S)).data || [];
        },
        onError: (S) => {
          console.error("Gagal ambil posts:", S);
        },
      }),
      p = (w == null ? void 0 : w.users) || [],
      x = (w == null ? void 0 : w.totalPages) || 1;
    return (
      console.log("posts", g),
      a.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
        children: [
          a.jsxs("div", {
            className:
              "hidden lg:block fixed top-0 left-0 h-screen overflow-y-auto w-[18rem] pt-20 pl-4",
            children: [a.jsx(da, { user: h }), a.jsx(t1, {})],
          }),
          a.jsxs("div", {
            className:
              "col-span-1 lg:col-span-9 order-first lg:order-none lg:ml-[18rem]",
            children: [
              a.jsx("div", {
                className:
                  "hidden lg:block bg-secondary rounded-lg shadow mb-4 p-4",
                children: a.jsx(Wy, { user: h }),
              }),
              a.jsx(VA, {
                category: r,
                setCategory: s,
                unreadCounts: y,
                markCategoryAsRead: v,
              }),
              g == null ? void 0 : g.map((S) => a.jsx(Db, { post: S }, S._id)),
              (g == null ? void 0 : g.length) === 0 &&
                a.jsxs("div", {
                  className: "bg-white rounded-lg shadow p-8 text-center",
                  children: [
                    a.jsx("div", {
                      className: "mb-6",
                      children: a.jsx(ks, {
                        size: 64,
                        className: "mx-auto text-blue-500",
                      }),
                    }),
                    a.jsx("h2", {
                      className: "text-2xl font-bold mb-4 text-gray-800",
                      children: "No Posts Yet",
                    }),
                    a.jsx("p", {
                      className: "text-gray-600 mb-6",
                      children:
                        "Connect with others to start seeing posts in your feed!",
                    }),
                  ],
                }),
            ],
          }),
          a.jsxs("div", {
            className: "lg:col-span-3 hidden lg:block",
            children: [
              a.jsxs("div", {
                className: "bg-secondary rounded-lg shadow p-4 mb-4",
                children: [
                  a.jsx("h2", {
                    className: "font-semibold mb-4 text-sm text-center",
                    children: "Rekomendasi Teman Untuk Anda",
                  }),
                  (p == null ? void 0 : p.length) > 0
                    ? p.map((S) => a.jsx(Zy, { user: S }, S._id))
                    : a.jsx("p", {
                        className: "text-sm text-gray-500 text-center",
                        children: "Belum ada rekomendasi teman.",
                      }),
                  a.jsxs("div", {
                    className: "flex justify-center mt-6 gap-x-1",
                    children: [
                      a.jsx("button", {
                        className: `px-3 py-1 text-sm rounded-md transition-all ${
                          e === 1
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        }`,
                        onClick: () => t(e - 1),
                        disabled: e === 1,
                        children: "← Prev",
                      }),
                      [...Array(x)].map((S, C) =>
                        a.jsx(
                          "button",
                          {
                            className: `px-3 py-1 text-sm rounded-md transition-all shadow-sm ${
                              e === C + 1
                                ? "bg-blue-700 text-white font-semibold"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                            }`,
                            onClick: () => t(C + 1),
                            children: C + 1,
                          },
                          C
                        )
                      ),
                      a.jsx("button", {
                        className: `px-3 py-1 text-sm rounded-md transition-all ${
                          e === x
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        }`,
                        onClick: () => t(e + 1),
                        disabled: e === x,
                        children: "Next →",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(e1, { authUser: h, allUsers: m }),
            ],
          }),
          a.jsx(UA, {
            onLeftSidebarToggle: () => l(!o),
            onRightSidebarToggle: () => u(!c),
            setShowMobilePost: f,
          }),
          a.jsxs("div", {
            className: `fixed top-0 left-0 h-full w-[20rem] bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
              o ? "translate-x-0" : "-translate-x-full"
            }`,
            children: [
              a.jsxs("div", {
                className:
                  "p-4 border-b flex justify-between items-center bg-blue-600 text-white",
                children: [
                  a.jsx("span", { className: "font-bold", children: "Menu" }),
                  a.jsx("button", {
                    onClick: () => l(!1),
                    className: "text-white text-2xl",
                    children: "×",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "p-4 overflow-y-auto h-[calc(100%-3.5rem)]",
                children: [a.jsx(da, { user: h }), a.jsx(t1, {})],
              }),
            ],
          }),
          o &&
            a.jsx("div", {
              onClick: () => l(!1),
              className: "fixed inset-0 bg-black opacity-50 z-40 lg:hidden",
            }),
          a.jsxs("div", {
            className: `fixed top-0 right-0 h-full w-[16rem] bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
              c ? "translate-x-0" : "translate-x-full"
            }`,
            children: [
              a.jsxs("div", {
                className:
                  "p-4 border-b flex justify-between items-center bg-blue-600 text-white",
                children: [
                  a.jsx("span", {
                    className: "font-bold",
                    children: "Rekomendasi Teman",
                  }),
                  a.jsx("button", {
                    onClick: () => u(!1),
                    className: "text-white text-2xl",
                    children: "×",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "p-4 overflow-y-auto h-[calc(100%-3.5rem)]",
                children: [
                  p && p.length > 0
                    ? p.map((S) => a.jsx(Zy, { user: S }, S._id))
                    : a.jsx("p", { children: "Belum ada rekomendasi teman." }),
                  a.jsxs("div", {
                    className: "flex justify-center my-4 gap-x-1 ",
                    children: [
                      a.jsx("button", {
                        className: `px-3 py-1 text-sm rounded-md transition-all ${
                          e === 1
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        }`,
                        onClick: () => t(e - 1),
                        disabled: e === 1,
                        children: "← Prev",
                      }),
                      [...Array(x)].map((S, C) =>
                        a.jsx(
                          "button",
                          {
                            className: `px-3 py-1 text-sm rounded-md transition-all shadow-sm ${
                              e === C + 1
                                ? "bg-blue-700 text-white font-semibold"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                            }`,
                            onClick: () => t(C + 1),
                            children: C + 1,
                          },
                          C
                        )
                      ),
                      a.jsx("button", {
                        className: `px-3 py-1 text-sm rounded-md transition-all ${
                          e === x
                            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                        }`,
                        onClick: () => t(e + 1),
                        disabled: e === x,
                        children: "Next →",
                      }),
                    ],
                  }),
                  a.jsx(e1, { authUser: h, allUsers: m }),
                ],
              }),
            ],
          }),
          d &&
            a.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center lg:hidden",
              children: a.jsxs("div", {
                className: "bg-white rounded-lg p-4 w-full max-w-md mx-auto",
                children: [
                  a.jsx(Wy, { user: h }),
                  a.jsx("button", {
                    onClick: () => f(!1),
                    className:
                      "mt-2 text-sm text-red-500 hover:underline block text-center",
                    children: "Tutup",
                  }),
                ],
              }),
            }),
          c &&
            a.jsx("div", {
              onClick: () => u(!1),
              className: "fixed inset-0 bg-black opacity-50 z-40 lg:hidden",
            }),
          c &&
            a.jsx("div", {
              onClick: () => u(!1),
              className: "fixed inset-0 bg-black opacity-50 z-40 lg:hidden",
            }),
        ],
      })
    );
  },
  HA = "/assets/bill-BfBj5qiZ.png",
  qA = "/assets/bill2-CDCS2-9T.png",
  WA = "/assets/bill3-By_WMwuW.png",
  KA = "/assets/bill4-9okLS8ge.png",
  YA = "/assets/bill5-BxNU6eWG.png",
  QA =
    "data:image/svg+xml,%3csvg%20width='20'%20height='12'%20viewBox='0%200%2020%2012'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%202L19%202C19.2652%202%2019.5196%201.89464%2019.7071%201.70711C19.8946%201.51957%2020%201.26522%2020%201C20%200.734784%2019.8946%200.480429%2019.7071%200.292892C19.5196%200.105356%2019.2652%200%2019%200L9%200C8.73478%200%208.48043%200.105356%208.29289%200.292892C8.10536%200.480429%208%200.734784%208%201C8%201.26522%208.10536%201.51957%208.29289%201.70711C8.48043%201.89464%208.73478%202%209%202ZM19%2010L1%2010C0.734784%2010%200.480429%2010.1054%200.292892%2010.2929C0.105356%2010.4804%200%2010.7348%200%2011C0%2011.2652%200.105356%2011.5196%200.292892%2011.7071C0.480429%2011.8946%200.734784%2012%201%2012L19%2012C19.2652%2012%2019.5196%2011.8946%2019.7071%2011.7071C19.8946%2011.5196%2020%2011.2652%2020%2011C20%2010.7348%2019.8946%2010.4804%2019.7071%2010.2929C19.5196%2010.1054%2019.2652%2010%2019%2010V10ZM1%207L19%207C19.2652%207%2019.5196%206.89464%2019.7071%206.70711C19.8946%206.51957%2020%206.26522%2020%206C20%205.73478%2019.8946%205.48043%2019.7071%205.29289C19.5196%205.10536%2019.2652%205%2019%205L1%205C0.734784%205%200.480429%205.10536%200.292892%205.29289C0.105356%205.48043%200%205.73478%200%206C0%206.26522%200.105356%206.51957%200.292892%206.70711C0.480429%206.89464%200.734784%207%201%207Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",
  GA =
    "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='%23FFF'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.4099%209L16.7099%202.71C16.8982%202.5217%2017.004%202.2663%2017.004%202C17.004%201.7337%2016.8982%201.47831%2016.7099%201.29C16.5216%201.1017%2016.2662%200.995911%2015.9999%200.995911C15.7336%200.995911%2015.4782%201.1017%2015.2899%201.29L8.99994%207.59L2.70994%201.29C2.52164%201.1017%202.26624%200.995911%201.99994%200.995911C1.73364%200.995911%201.47824%201.1017%201.28994%201.29C1.10164%201.47831%200.995847%201.7337%200.995847%202C0.995847%202.2663%201.10164%202.5217%201.28994%202.71L7.58994%209L1.28994%2015.29C1.19621%2015.383%201.12182%2015.4936%201.07105%2015.6154C1.02028%2015.7373%200.994141%2015.868%200.994141%2016C0.994141%2016.132%201.02028%2016.2627%201.07105%2016.3846C1.12182%2016.5064%201.19621%2016.617%201.28994%2016.71C1.3829%2016.8037%201.4935%2016.8781%201.61536%2016.9289C1.73722%2016.9797%201.86793%2017.0058%201.99994%2017.0058C2.13195%2017.0058%202.26266%2016.9797%202.38452%2016.9289C2.50638%2016.8781%202.61698%2016.8037%202.70994%2016.71L8.99994%2010.41L15.2899%2016.71C15.3829%2016.8037%2015.4935%2016.8781%2015.6154%2016.9289C15.7372%2016.9797%2015.8679%2017.0058%2015.9999%2017.0058C16.132%2017.0058%2016.2627%2016.9797%2016.3845%2016.9289C16.5064%2016.8781%2016.617%2016.8037%2016.7099%2016.71C16.8037%2016.617%2016.8781%2016.5064%2016.9288%2016.3846C16.9796%2016.2627%2017.0057%2016.132%2017.0057%2016C17.0057%2015.868%2016.9796%2015.7373%2016.9288%2015.6154C16.8781%2015.4936%2016.8037%2015.383%2016.7099%2015.29L10.4099%209Z'%20fill='%23FFFFFF'/%3e%3c/svg%3e",
  XA =
    "data:image/svg+xml,%3csvg%20width='22'%20height='21'%20viewBox='0%200%2022%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.98978%2015.2615C4.75588%2014.9828%204.76972%2014.5786%205.00787%2014.3167L5.07837%2014.2489L16.0903%205.00887C16.3943%204.75371%2016.8477%204.79338%2017.1029%205.09746C17.3367%205.37621%2017.3229%205.78038%2017.0848%206.04234L17.0143%206.11006L6.00238%2015.3501C5.69829%2015.6053%205.24494%2015.5656%204.98978%2015.2615Z'%20fill='white'/%3e%3cpath%20d='M8.33877%205.57975C7.94325%205.546%207.64998%205.19801%207.68372%204.8025C7.7144%204.44294%208.00478%204.16787%208.35448%204.14619L8.46097%204.14745L16.6132%204.843C16.9739%204.87377%2017.2493%205.16571%2017.2697%205.51648L17.268%205.62327L16.538%2013.7732C16.5026%2014.1686%2016.1534%2014.4604%2015.758%2014.425C15.3986%2014.3928%2015.1247%2014.1012%2015.1045%2013.7514L15.1062%2013.645L15.7714%206.21386L8.33877%205.57975Z'%20fill='white'/%3e%3c/svg%3e",
  JA =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5001%200C4.7011%200%200%204.72075%200%2010.544C0%2015.7667%203.78548%2020.092%208.74886%2020.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886%205.10564%2010.2817%203.73225%2012.5209%203.73225C13.5934%203.73225%2014.515%203.8125%2014.7826%203.84784V6.48217L13.2295%206.48292C12.012%206.48292%2011.7773%207.06377%2011.7773%207.91643V9.79645H14.6824L14.3035%2012.7422H11.7773V21C16.9724%2020.3651%2021%2015.9296%2021%2010.5409C21%204.72075%2016.2989%200%2010.5001%200Z'%20fill='white'/%3e%3c/svg%3e",
  ZA =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9466%206.17408C20.8974%205.05826%2020.7169%204.29115%2020.4584%203.62644C20.1917%202.92086%2019.7814%202.28916%2019.2438%201.76402C18.7186%201.23071%2018.0826%200.816309%2017.3851%200.553821C16.7164%200.295339%2015.9531%200.114899%2014.8371%200.0657021C13.7127%200.0123392%2013.3558%200%2010.5041%200C7.65239%200%207.29545%200.0123392%206.17525%200.0615356C5.05923%200.110732%204.29197%200.291333%203.62729%200.549654C2.92142%200.816309%202.28959%201.22655%201.76436%201.76402C1.23095%202.28916%200.816625%202.92503%200.553926%203.62243C0.295395%204.29115%200.114921%205.0541%200.0657146%206.16991C0.0123415%207.29406%200%207.65093%200%2010.5021C0%2013.3532%200.0123415%2013.7101%200.0615474%2014.8301C0.110753%2015.9459%200.291388%2016.713%200.549919%2017.3777C0.816625%2018.0833%201.23095%2018.715%201.76436%2019.2401C2.28959%2019.7735%202.92558%2020.1879%203.62312%2020.4503C4.29197%2020.7088%205.05506%2020.8893%206.17125%2020.9385C7.29128%2020.9878%207.64838%2021%2010.5001%2021C13.3518%2021%2013.7087%2020.9878%2014.8289%2020.9385C15.9449%2020.8893%2016.7122%2020.7088%2017.3769%2020.4503C18.7885%2019.9047%2019.9045%2018.7889%2020.4502%2017.3777C20.7086%2016.709%2020.8892%2015.9459%2020.9385%2014.8301C20.9877%2013.7101%2021%2013.3532%2021%2010.5021C21%207.65093%2020.9958%207.29406%2020.9466%206.17408ZM19.0552%2014.748C19.01%2015.7736%2018.8377%2016.3275%2018.6941%2016.6967C18.3411%2017.6115%2017.6149%2018.3376%2016.6999%2018.6905C16.3306%2018.8341%2015.7726%2019.0063%2014.7509%2019.0514C13.643%2019.1007%2013.3107%2019.1129%2010.5083%2019.1129C7.70576%2019.1129%207.36934%2019.1007%206.26549%2019.0514C5.2397%2019.0063%204.68578%2018.8341%204.31649%2018.6905C3.86114%2018.5222%203.44665%2018.2556%203.11023%2017.9069C2.76146%2017.5663%202.49475%2017.1561%202.32646%2016.7008C2.18285%2016.3316%202.01055%2015.7736%201.96551%2014.7522C1.91614%2013.6446%201.90396%2013.3122%201.90396%2010.5103C1.90396%207.7083%201.91614%207.37194%201.96551%206.26846C2.01055%205.24287%202.18285%204.68905%202.32646%204.31983C2.49475%203.86441%202.76146%203.45016%203.11439%203.11364C3.45483%202.76494%203.86514%202.49828%204.32066%202.33018C4.68994%202.1866%205.24804%202.01433%206.26966%201.96914C7.37751%201.91994%207.70993%201.9076%2010.5123%201.9076C13.3189%201.9076%2013.6512%201.91994%2014.755%201.96914C15.7808%202.01433%2016.3347%202.1866%2016.704%202.33018C17.1594%202.49828%2017.5739%202.76494%2017.9103%203.11364C18.2591%203.45417%2018.5258%203.86441%2018.6941%204.31983C18.8377%204.68905%2019.01%205.24687%2019.0552%206.26846C19.1044%207.3761%2019.1167%207.7083%2019.1167%2010.5103C19.1167%2013.3122%2019.1044%2013.6404%2019.0552%2014.748Z'%20fill='white'/%3e%3cpath%20d='M10.5%206C8.01567%206%206%208.01554%206%2010.5C6%2012.9845%208.01567%2015%2010.5%2015C12.9845%2015%2015%2012.9845%2015%2010.5C15%208.01554%2012.9845%206%2010.5%206ZM10.5%2013.419C8.88829%2013.419%207.58096%2012.1118%207.58096%2010.5C7.58096%208.88816%208.88829%207.58096%2010.5%207.58096C12.1118%207.58096%2013.419%208.88816%2013.419%2010.5C13.419%2012.1118%2012.1118%2013.419%2010.5%2013.419Z'%20fill='white'/%3e%3cpath%20d='M18%205.5C18%206.32835%2017.3284%207%2016.4999%207C15.6716%207%2015%206.32835%2015%205.5C15%204.67146%2015.6716%204%2016.4999%204C17.3284%204%2018%204.67146%2018%205.5Z'%20fill='white'/%3e%3c/svg%3e",
  e_ =
    "data:image/svg+xml,%3csvg%20width='21'%20height='21'%20viewBox='0%200%2021%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.4855%200H1.51453C0.67804%200%200%200.67804%200%201.51453V19.4855C0%2020.322%200.67804%2021%201.51453%2021H19.4855C20.322%2021%2021%2020.322%2021%2019.4855V1.51453C21%200.67804%2020.322%200%2019.4855%200V0ZM7.44882%2015.873H4.89159V8.17957H7.44882V15.873ZM6.17029%207.12903H6.15363C5.2955%207.12903%204.74051%206.53831%204.74051%205.80003C4.74051%205.04508%205.31248%204.4707%206.18727%204.4707C7.06206%204.4707%207.60039%205.04508%207.61705%205.80003C7.61705%206.53831%207.06206%207.12903%206.17029%207.12903ZM16.6696%2015.873H14.1127V11.7572C14.1127%2010.7229%2013.7425%2010.0174%2012.8172%2010.0174C12.1108%2010.0174%2011.6901%2010.4933%2011.5052%2010.9526C11.4376%2011.117%2011.4211%2011.3467%2011.4211%2011.5767V15.873H8.86402C8.86402%2015.873%208.89751%208.90135%208.86402%208.17957H11.4211V9.26889C11.7609%208.74466%2012.3689%207.99901%2013.7257%207.99901C15.4081%207.99901%2016.6696%209.09858%2016.6696%2011.4616V15.873Z'%20fill='white'/%3e%3c/svg%3e",
  t_ =
    "data:image/svg+xml,%3csvg%20width='23'%20height='19'%20viewBox='0%200%2023%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23%202.24931C22.1447%202.63077%2021.2333%202.88362%2020.2831%203.00638C21.2606%202.413%2022.0067%201.48054%2022.3574%200.356615C21.4461%200.909077%2020.4398%201.29931%2019.3674%201.51708C18.5021%200.580231%2017.2687%200%2015.9232%200C13.3127%200%2011.2111%202.15431%2011.2111%204.79531C11.2111%205.17531%2011.2427%205.54069%2011.3203%205.88854C7.40025%205.69415%203.93156%203.78392%201.60137%200.874C1.19456%201.59162%200.955938%202.413%200.955938%203.29723C0.955938%204.95754%201.79688%206.42931%203.05037%207.28138C2.29281%207.26677%201.54962%207.04315%200.92%206.69092C0.92%206.70554%200.92%206.72454%200.92%206.74354C0.92%209.07323%202.55444%2011.0083%204.69775%2011.4541C4.31394%2011.5608%203.89562%2011.6119%203.4615%2011.6119C3.15963%2011.6119%202.85487%2011.5944%202.56881%2011.5301C3.17975%2013.4286%204.91338%2014.8244%206.97475%2014.8697C5.3705%2016.1456%203.33356%2016.9144%201.12844%2016.9144C0.74175%2016.9144%200.370875%2016.8968%200%2016.8486C2.08869%2018.2181%204.56406%2019%207.2335%2019C15.9102%2019%2020.654%2011.6923%2020.654%205.358C20.654%205.14608%2020.6468%204.94146%2020.6367%204.73831C21.5726%204.06308%2022.3589%203.21977%2023%202.24931Z'%20fill='white'/%3e%3c/svg%3e",
  n_ = "/assets/villageTech-DK8F2PjN.png",
  r_ = "/assets/innovation-06-gSWVa.png",
  s_ = "/assets/overlay1-T9zs2Udf.jpg",
  i_ = "/assets/overlay2-CE4hsDUe.jpg",
  Lb = "/assets/logopanjang1-CWB5ovVX.png",
  o_ = "/assets/chat-feature-BA4sdLdE.png";
var Fb = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  n1 = wn.createContext && wn.createContext(Fb),
  a_ = ["attr", "size", "title"];
function l_(e, t) {
  if (e == null) return {};
  var n = c_(e, t),
    r,
    s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      (r = i[s]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function c_(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function _c() {
  return (
    (_c = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _c.apply(this, arguments)
  );
}
function r1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Rc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? r1(Object(n), !0).forEach(function (r) {
          u_(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function u_(e, t, n) {
  return (
    (t = d_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function d_(e) {
  var t = f_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ib(e) {
  return (
    e &&
    e.map((t, n) =>
      wn.createElement(t.tag, Rc({ key: n }, t.attr), Ib(t.child))
    )
  );
}
function Ot(e) {
  return (t) =>
    wn.createElement(h_, _c({ attr: Rc({}, e.attr) }, t), Ib(e.child));
}
function h_(e) {
  var t = (n) => {
    var { attr: r, size: s, title: i } = e,
      o = l_(e, a_),
      l = s || n.size || "1em",
      c;
    return (
      n.className && (c = n.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      wn.createElement(
        "svg",
        _c(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: c,
            style: Rc(Rc({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && wn.createElement("title", null, i),
        e.children
      )
    );
  };
  return n1 !== void 0
    ? wn.createElement(n1.Consumer, null, (n) => t(n))
    : t(Fb);
}
function m_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z",
        },
        child: [],
      },
    ],
  })(e);
}
function p_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function rp(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bb(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function g_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function y_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function x_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(e);
}
function v_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
        },
        child: [],
      },
    ],
  })(e);
}
function w_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
function b_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 616 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z",
        },
        child: [],
      },
    ],
  })(e);
}
function sp(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
        child: [],
      },
    ],
  })(e);
}
const s1 = [
    { id: "BERANDA", title: "BERANDA" },
    { id: "KOLABORASI & INOVASI", title: "KOLABORASI & INOVASI" },
    { id: "DASHBOARD INTERAKTIF", title: "DASHBOARD INTERAKTIF" },
    {
      id: "KOMUNIKASI CEPAT & INTERAKTIF",
      title: "KOMUNIKASI CEPAT & INTERAKTIF",
    },
    { id: "PROFIL & BRANDING", title: "PROFIL & BRANDING" },
  ],
  i1 = [
    {
      id: "feature-1",
      icon: sp,
      title: "Koneksi Antar Masyarakat",
      content:
        "Bangun komunitas digital yang aktif dan saling berbagi inspirasi.",
    },
    {
      id: "feature-2",
      icon: w_,
      title: "Inovasi Berkelanjutan",
      content: "Ciptakan solusi berbasis teknologi untuk memajukan desa.",
    },
    {
      id: "feature-3",
      icon: p_,
      title: "Dukungan Usaha Lokal",
      content: "Kembangkan bisnis berbasis digital dengan kolaborasi inovatif.",
    },
    {
      id: "feature-4",
      icon: v_,
      title: "Transformasi Digital",
      content: "Terapkan teknologi untuk kemajuan desa dan komunitas.",
    },
  ],
  S_ = [
    {
      title: "NAVIGASI",
      links: [
        { name: "Beranda", id: "BERANDA" },
        { name: "Kolaborasi & Inovasi", id: "KOLABORASI & INOVASI" },
        { name: "Dashboard Interaktif", id: "DASHBOARD INTERAKTIF" },
        {
          name: "Komunikasi Cepat & Interaktif",
          id: "KOMUNIKASI CEPAT & INTERAKTIF",
        },
        { name: "Profil & Branding", id: "PROFIL & BRANDING" },
      ],
    },
    {
      title: "Komunitas BeoPoeng",
      links: [
        {
          name: "Pusat Bantuan",
          link: "https://www.beopoeng.com/help-center/",
        },
        { name: "Mitra BeoPoeng", link: "https://www.beopoeng.com/partners/" },
        {
          name: "Saran & Masukan",
          link: "https://www.beopoeng.com/suggestions/",
        },
        { name: "Artikel & Blog", link: "https://www.beopoeng.com/blog/" },
        {
          name: "Berlangganan Info",
          link: "https://www.beopoeng.com/newsletters/",
        },
      ],
    },
  ],
  k_ = [
    { id: "social-media-1", icon: ZA, link: "https://www.instagram.com/" },
    { id: "social-media-2", icon: JA, link: "https://www.facebook.com/" },
    { id: "social-media-3", icon: t_, link: "https://www.twitter.com/" },
    { id: "social-media-4", icon: e_, link: "https://www.linkedin.com/" },
  ],
  C_ = () => {
    const [e, t] = b.useState("Home"),
      [n, r] = b.useState(!1),
      s = (i) => {
        const o = document.getElementById(i),
          l = 64;
        if (o) {
          const c = o.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: c - l, behavior: "smooth" }), t(i), r(!1);
        }
      };
    return a.jsxs("nav", {
      className:
        "w-full fixed top-0 left-0 bg-[#000000]/30 backdrop-blur-md py-3 sm:px-10 px-4 z-50 flex justify-between items-center shadow-lg transition-all duration-300",
      children: [
        a.jsx("img", { src: Lb, alt: "beopoeng", className: "w-[130px]" }),
        a.jsx("ul", {
          className:
            "list-none sm:flex hidden justify-end items-center flex-1 space-x-6",
          children: s1.map((i) =>
            a.jsx(
              "li",
              {
                className: `font-poppins font-medium cursor-pointer sm:text-[14px] text-[12px] transition-all duration-300 ${
                  e === i.id
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-[#3E3E3E] hover:text-white"
                }`,
                onClick: () => s(i.id),
                children: i.title,
              },
              i.id
            )
          ),
        }),
        a.jsxs("div", {
          className: "sm:hidden flex items-center",
          children: [
            a.jsx("img", {
              src: n ? GA : QA,
              alt: "menu",
              className: "w-[24px] h-[24px] object-contain cursor-pointer",
              onClick: () => r(!n),
            }),
            a.jsx("div", {
              className: `absolute top-14 right-4 w-40 bg-black p-3 rounded-xl transition-all ${
                n ? "block" : "hidden"
              }`,
              children: a.jsx("ul", {
                className: "list-none flex flex-col space-y-3",
                children: s1.map((i) =>
                  a.jsx(
                    "li",
                    {
                      className: `font-poppins font-medium cursor-pointer text-[14px] transition-all duration-300 ${
                        e === i.id
                          ? "text-white border-b-2 border-white pb-1"
                          : "text-gray-400 hover:text-white"
                      }`,
                      onClick: () => s(i.id),
                      children: i.title,
                    },
                    i.id
                  )
                ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  Ue = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2:
      "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph:
      "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-12 py-4",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  },
  zl = {
    section: `flex md:flex-row flex-col ${Ue.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${Ue.paddingY}`,
    sectionImgReverse: `flex-1 flex ${Ue.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${Ue.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionInfo: `flex-1 ${Ue.flexStart} flex-col`,
  };
function E_(e) {
  return Ot({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z",
        },
        child: [],
      },
    ],
  })(e);
}
const N_ = () =>
    a.jsxs("section", {
      id: "DASHBOARD INTERAKTIF",
      className: `${zl.sectionReverse} relative overflow-hidden`,
      children: [
        a.jsx("div", {
          className:
            "absolute inset-0 w-full h-full bg-gradient-to-br from-[#3FA3CE] to-[#EF8B8B] opacity-10 blur-3xl -z-10",
        }),
        a.jsxs("div", {
          className:
            "grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-12",
          children: [
            a.jsxs("div", {
              className:
                "relative grid grid-cols-2 gap-4 p-6 w-full max-w-[500px] lg:max-w-[600px]",
              children: [
                a.jsxs("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    a.jsx("img", {
                      src: HA,
                      alt: "billing",
                      className:
                        "w-full max-w-[300px] h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-2",
                    }),
                    a.jsx("img", {
                      src: qA,
                      alt: "billing2",
                      className:
                        "w-full max-w-[300px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-rotate-2",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    a.jsx("img", {
                      src: WA,
                      alt: "billing3",
                      className:
                        "w-full max-w-[200px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-1",
                    }),
                    a.jsx("img", {
                      src: KA,
                      alt: "billing4",
                      className:
                        "w-full max-w-[200px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:-rotate-1",
                    }),
                    a.jsx("img", {
                      src: YA,
                      alt: "billing5",
                      className:
                        "w-full max-w-[150px] h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-2",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className:
                "bg-white p-8 rounded-xl shadow-lg w-full max-w-[600px]",
              children: [
                a.jsx("h2", {
                  className: "text-3xl font-bold text-[#145C75] mb-4",
                  children: "📊 DASHBOARD INTERAKTIF",
                }),
                a.jsx("p", {
                  className: "text-lg text-[#525252] mb-6",
                  children:
                    "Agar pengguna dapat memahami perkembangan transformasi digital desa secara langsung, platform ini menyediakan dashboard interaktif yang menyajikan berbagai informasi penting dalam satu tampilan yang jelas dan mudah diakses.",
                }),
                a.jsx("p", {
                  className: "text-lg text-[#525252] mb-6",
                  children: "Di dashboard ini, pengguna dapat melihat:",
                }),
                a.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        a.jsx(rp, { className: "text-[#BF5F5F] text-3xl" }),
                        a.jsx("span", {
                          className: "text-[#3E3E3E] font-medium",
                          children: "Statistik perkembangan ekonomi desa",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        a.jsx(sp, { className: "text-[#3FA3CE] text-2xl" }),
                        a.jsx("span", {
                          className: "text-[#3E3E3E] font-medium",
                          children: "Update kegiatan komunitas",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        a.jsx(E_, { className: "text-[#C06C6C] text-5xl" }),
                        a.jsx("span", {
                          className: "text-[#3E3E3E] font-medium",
                          children:
                            "Informasi terbaru tentang digitalisasi desa",
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        a.jsx(b_, { className: "text-[#66B2D6] text-2xl" }),
                        a.jsx("span", {
                          className: "text-[#3E3E3E] font-medium",
                          children: "Pengumuman penting",
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx(K, {
                  to: "/login",
                  children: a.jsx("button", {
                    className:
                      "mt-8 bg-[#BF5F5F] hover:bg-[#FF9999] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all hover:scale-105",
                    children: "🚀 Mulai Sekarang",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  j_ = ({ styles: e, text: t = "Get Started" }) =>
    a.jsx(K, {
      to: "/login",
      children: a.jsx("button", {
        type: "button",
        className: `py-4 px-8 font-poppins font-semibold text-[18px] text-white 
      bg-gradient-to-r from-[#78C1E4] to-[#BEBEBE] 
      rounded-xl transition-all duration-300 ease-in-out 
      transform hover:scale-105 hover:shadow-lg 
      active:scale-95 active:shadow-sm
      ${e}`,
        children: "Get Started",
      }),
    }),
  T_ = () =>
    a.jsxs("section", {
      id: "KOMUNIKASI CEPAT & INTERAKTIF",
      className: `py-16 px-6 rounded-2xl ${Ue.flexCenter} flex-col md:flex-row`,
      children: [
        a.jsxs("div", {
          className: "flex-1 text-center md:text-left",
          children: [
            a.jsx("h2", {
              className: "text-[42px] font-bold text-[#145C75] leading-[50px]",
              children: "🗨️ FITUR CHAT – Komunikasi Cepat & Interaktif",
            }),
            a.jsx("p", {
              className:
                "text-[18px] text-[#000000] leading-[28px] mt-4 max-w-[500px]",
              children:
                "Bangun koneksi, wujudkan ide, dan kembangkan komunitas digital dengan fitur chat real-time kami!",
            }),
            a.jsxs("div", {
              className: "grid grid-cols-2 gap-4 mt-6",
              children: [
                a.jsxs("div", {
                  className:
                    "flex items-center space-x-3 bg-[#EAEAEA] p-4 rounded-lg shadow",
                  children: [
                    a.jsx(sp, { size: 24, className: "text-[#3FA3CE]" }),
                    a.jsx("span", {
                      className: "text-[#2B7A98] font-medium",
                      children: "Diskusi Komunitas",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className:
                    "flex items-center space-x-3 bg-[#EAEAEA] p-4 rounded-lg shadow",
                  children: [
                    a.jsx(Bb, { size: 24, className: "text-[#EF8B8B]" }),
                    a.jsx("span", {
                      className: "text-[#C06C6C] font-medium",
                      children: "Kolaborasi Instan",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className:
                    "flex items-center space-x-3 bg-[#EAEAEA] p-4 rounded-lg shadow",
                  children: [
                    a.jsx(y_, { size: 24, className: "text-[#145C75]" }),
                    a.jsx("span", {
                      className: "text-[#525252] font-medium",
                      children: "Dukungan & Bantuan",
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className:
                    "flex items-center space-x-3 bg-[#EAEAEA] p-4 rounded-lg shadow",
                  children: [
                    a.jsx(m_, { size: 24, className: "text-[#FF9999]" }),
                    a.jsx("span", {
                      className: "text-[#BF5F5F] font-medium",
                      children: "Notifikasi & Update",
                    }),
                  ],
                }),
              ],
            }),
            a.jsx(j_, { styles: "mt-10" }),
          ],
        }),
        a.jsx("div", {
          className: "flex-1 flex justify-center mt-8 md:mt-0",
          children: a.jsx("img", {
            src: o_,
            alt: "Fitur Chat",
            className: "w-full max-w-[900px] rounded-lg",
          }),
        }),
      ],
    });
function P_(e) {
  return Ot({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "5", y1: "12", x2: "19", y2: "12" },
        child: [],
      },
      { tag: "polyline", attr: { points: "12 5 19 12 12 19" }, child: [] },
    ],
  })(e);
}
const A_ = ({ icon: e, title: t, content: n, index: r, totalFeatures: s }) =>
    a.jsxs("div", {
      className: `flex flex-row p-6 rounded-[20px] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
        r !== s - 1 ? "mb-6" : "mb-0"
      } bg-gradient-to-r from-[#2B7A98] to-[#BF5F5F] shadow-lg`,
      children: [
        a.jsx("div", {
          className:
            "w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#F4F4F4] shadow-md",
          children: a.jsx(e, { className: "text-[#145C75] text-4xl" }),
        }),
        a.jsxs("div", {
          className: "flex-1 flex flex-col ml-5",
          children: [
            a.jsx("h4", {
              className:
                "font-poppins font-bold text-[#FFFFFF] text-[20px] leading-[26px] mb-2",
              children: t,
            }),
            a.jsx("p", {
              className:
                "font-poppins text-[#EAEAEA] text-[16px] leading-[24px]",
              children: n,
            }),
          ],
        }),
      ],
    }),
  __ = () =>
    a.jsxs("section", {
      id: "KOLABORASI & INOVASI",
      className: `${zl.section} py-12`,
      children: [
        a.jsxs("div", {
          className: `${zl.sectionInfo} bg-[#2B7A98] p-8 rounded-lg self-start`,
          children: [
            a.jsxs("h2", {
              className:
                "text-[36px] font-bold text-[#FFFFFF] leading-[44px] mb-4",
              children: [
                "KOLABORASI & INOVASI ",
                a.jsx("br", {}),
                a.jsxs("span", {
                  className:
                    "font-poppins font-semibold ss:text-[16px] text-[14px] text-[#66B2D6] ss:leading-[24px] leading-[22px] w-full mt-1 flex items-center",
                  children: [
                    a.jsx(g_, { className: "text-[#66B2D6] text-[20px] mr-2" }),
                    "Terhubung, Berinovasi, Kembangkan Komunitas Digital",
                    a.jsx(rp, { className: "text-[#66B2D6] text-[20px] ml-2" }),
                  ],
                }),
              ],
            }),
            a.jsxs("p", {
              className: "text-[18px] text-[#000000] leading-[28px]",
              children: [
                "Di era digital, inovasi dan kolaborasi menjadi fondasi utama untuk menciptakan perubahan.",
                a.jsxs("span", {
                  className: "font-semibold text-[#BEBEBE]",
                  children: [
                    " ",
                    "Bersama, kita dapat membangun solusi yang lebih cerdas",
                  ],
                }),
                ", berbagi wawasan, dan mempercepat pertumbuhan komunitas.",
              ],
            }),
            a.jsxs(K, {
              to: "/login",
              className:
                "mt-8 bg-[#BEBEBE] hover:bg-[#F4F4F4] text-[#145C75] shadow-md px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2",
              children: [
                "Jelajahi Sekarang",
                a.jsx(P_, { className: "text-[#145C75] text-xl" }),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className: `${zl.sectionImg} flex-col mt-10`,
          children: i1.map((e, t) =>
            a.jsx(A_, { ...e, index: t, totalFeatures: i1.length }, e.id)
          ),
        }),
      ],
    }),
  R_ = (e) => {
    const t = document.getElementById(e);
    t && t.scrollIntoView({ behavior: "smooth" });
  },
  O_ = () =>
    a.jsxs("section", {
      className:
        "relative w-full bg-gradient-to-r from-[#BEBEBE] via-[#78C1E4] to-[#2B7A98] py-6 px-4 md:px-12 text-white",
      children: [
        a.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6 gap-6",
          children: [
            a.jsxs("div", {
              className: "flex-1",
              children: [
                a.jsx("img", {
                  src: Lb,
                  alt: "BeoPoeng Logo",
                  className: "w-[180px] h-auto object-contain",
                }),
                a.jsxs("p", {
                  className:
                    "mt-3 text-[#255d74] max-w-[320px] leading-normal text-[14px]",
                  children: [
                    "Di era digital, teknologi adalah kunci kemajuan desa! Wujudkan masa depan digital bersama",
                    " ",
                    a.jsx("span", {
                      className: "text-gray-700",
                      children: '"BeoPoeng"!',
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              className:
                "flex-[1.5] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-8",
              children: S_.map((e) =>
                a.jsxs(
                  "div",
                  {
                    className: "flex flex-col ss:my-0 my-3 min-w-[140px]",
                    children: [
                      a.jsx("h4", {
                        className:
                          "font-poppins font-bold text-[14px] leading-[18px] text-[#eca5a5]",
                        children: e.title,
                      }),
                      a.jsx("ul", {
                        className: "list-none mt-3",
                        children: e.links.map((t, n) =>
                          a.jsx(
                            "li",
                            {
                              onClick: () => R_(t.id),
                              className: `font-poppins font-normal text-[13px] leading-[16px] text-dimWhite hover:text-secondary cursor-pointer ${
                                n !== e.links.length - 1 ? "mb-3" : "mb-0"
                              }`,
                              children: t.name,
                            },
                            t.name
                          )
                        ),
                      }),
                    ],
                  },
                  e.title
                )
              ),
            }),
          ],
        }),
        a.jsxs("div", {
          className:
            "flex flex-col md:flex-row justify-between items-center pt-5 text-gray-800 text-[13px]",
          children: [
            a.jsxs("p", {
              className: "text-center md:text-left",
              children: [
                "©Copyright ",
                new Date().getFullYear(),
                " Yohanes Serpiyanto Elo_BEOPOENG. All Rights Reserved.",
              ],
            }),
            a.jsx("div", {
              className: "flex space-x-5 mt-4 md:mt-0",
              children: k_.map((e) =>
                a.jsx(
                  "img",
                  {
                    src: e.icon,
                    alt: e.id,
                    className:
                      "w-5 h-5 object-contain cursor-pointer hover:scale-110 transition duration-300",
                    onClick: () => window.open(e.link),
                  },
                  e.id
                )
              ),
            }),
          ],
        }),
      ],
    }),
  M_ = "/assets/branding-yggdp5fu.png",
  D_ = "/assets/network-Cnv0VaIf.png",
  L_ = () =>
    a.jsxs("section", {
      id: "PROFIL & BRANDING",
      className: `${Ue.paddingY} ${Ue.flexCenter} flex-col relative`,
      children: [
        a.jsx("div", {
          className:
            "absolute w-[60%] h-[60%] -right-[50%] rounded-full bg-[#3FA3CE] opacity-20 bottom-40",
        }),
        a.jsxs("div", {
          className:
            "w-full flex flex-col md:flex-row justify-center items-center mb-3",
          children: [
            a.jsxs("div", {
              className: "max-w-[600px] text-center md:text-left",
              children: [
                a.jsx("h2", {
                  className:
                    "text-[#145C75] font-bold text-[36px] md:text-[48px] leading-tight mb-4",
                  children: "🔖 PROFIL & BRANDING",
                }),
                a.jsxs("p", {
                  className: "text-[#000000] text-lg md:text-xl",
                  children: [
                    "Optimalkan",
                    " ",
                    a.jsx("span", {
                      className: "text-[#BF5F5F] font-semibold",
                      children: "Personal Branding",
                    }),
                    " ",
                    "dan Kembangkan Jaringan Profesional Anda!",
                  ],
                }),
              ],
            }),
            a.jsx(K, {
              to: "/login",
              children: a.jsx("img", {
                src: M_,
                alt: "Branding",
                className: "w-[100px] rounded-xl cursor-pointer",
              }),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full",
          children: [
            a.jsxs("div", {
              className:
                "bg-[#D7D7D7] p-6 rounded-lg shadow-md flex flex-col items-center text-center",
              children: [
                a.jsx("h3", {
                  className: "text-[#2B7A98] font-semibold text-2xl",
                  children: "🔹 Mengapa Personal Branding Penting?",
                }),
                a.jsxs("ul", {
                  className: "text-[#525252] text-lg mt-4 space-y-3",
                  children: [
                    a.jsx("li", {
                      children:
                        "✔ Membantu membangun reputasi dan kepercayaan.",
                    }),
                    a.jsx("li", {
                      children:
                        "✔ Memudahkan mendapatkan peluang kerja atau usaha.",
                    }),
                    a.jsx("li", {
                      children:
                        "✔ Memberikan keunggulan kompetitif di dunia digital.",
                    }),
                    a.jsx("li", {
                      children:
                        "✔ Memungkinkan individu lebih dikenal dalam komunitas.",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className:
                "bg-[#D7D7D7] p-6 rounded-lg shadow-md flex flex-col items-center text-center",
              children: [
                a.jsx("h3", {
                  className: "text-[#BF5F5F] font-semibold text-2xl",
                  children: "💡 Jadilah Wajah Baru di Era Digital!",
                }),
                a.jsxs("p", {
                  className: "text-[#3E3E3E] text-lg mt-4",
                  children: [
                    "Temukan strategi terbaik untuk membangun identitas digital yang",
                    " ",
                    a.jsx("span", {
                      className: "text-[#FF9999] font-bold",
                      children: "unik dan profesional!",
                    }),
                  ],
                }),
                a.jsx("img", {
                  src: D_,
                  alt: "Networking",
                  className: "w-[300px] rounded-lg",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  o1 = () =>
    a.jsx("div", {
      className: `
      ${Ue.flexCenter} w-[160px] h-[160px] rounded-full 
      bg-gradient-to-b from-[#66B2D6] to-[#145C75] 
      shadow-lg animate-glow
      transition-all duration-300 ease-in-out 
      transform hover:scale-110 active:scale-95 cursor-pointer
    `,
      children: a.jsxs("div", {
        className: `
        ${Ue.flexCenter} flex-col w-[95%] h-[95%] rounded-full 
        bg-gradient-to-b from-[#3FA3CE] to-[#2B7A98]
        shadow-inner transition-all duration-300
      `,
        children: [
          a.jsxs("div", {
            className: `${Ue.flexStart} flex-row`,
            children: [
              a.jsx("p", {
                className:
                  "font-poppins font-semibold text-[16px] leading-[20px] text-[#FFFFFF]",
                children: a.jsx("span", {
                  className: "text-[#FFFFFF]",
                  children: "Jelajahi",
                }),
              }),
              a.jsx("img", {
                src: XA,
                alt: "arrow-up",
                className: "w-[18px] h-[18px] object-contain ml-1",
              }),
            ],
          }),
          a.jsx("p", {
            className:
              "font-poppins font-semibold text-[16px] leading-[20px] text-[#FFFFFF]",
            children: a.jsx("span", {
              className: "text-[#FFFFFF]",
              children: "Solusi Digital",
            }),
          }),
        ],
      }),
    }),
  F_ = () =>
    a.jsxs("section", {
      id: "BERANDA",
      className: `flex md:flex-row flex-col ${Ue.paddingY}`,
      children: [
        a.jsxs("div", {
          className: `flex-1 ${Ue.flexStart} flex-col xl:px-0 sm:px-16 px-6`,
          children: [
            a.jsxs("div", {
              className:
                "flex flex-row items-center py-[8px] px-5 bg-[#3FA3CE] rounded-[12px] mb-4 shadow-xl",
              children: [
                a.jsx("img", {
                  src: r_,
                  alt: "innovation",
                  className: "w-[50px] h-[50px] mr-3",
                }),
                a.jsx("p", {
                  className: `${Ue.paragraph} text-white font-medium text-base leading-[22px]`,
                  children:
                    "Platform Kolaboratif untuk Pemberdayaan Masyarakat dan Personal Branding",
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex flex-row justify-between items-center w-full",
              children: [
                a.jsxs("h1", {
                  className:
                    "flex-1 font-poppins font-bold ss:text-[42px] text-[38px] text-[#FFFFFF] ss:leading-[60px] leading-[50px]",
                  children: [
                    a.jsx("span", {
                      className: "text-[#191919]",
                      children: "wujudkan masa depan digital bersama",
                    }),
                    " ",
                    a.jsx("span", {
                      className: "text-[#FF9999] font-bold",
                      children: '"Beopoeng"!',
                    }),
                    a.jsx("br", { className: "sm:block hidden" }),
                  ],
                }),
                a.jsx("div", {
                  className: "ss:flex hidden md:mr-4 mr-0",
                  children: a.jsx(o1, {}),
                }),
              ],
            }),
            a.jsxs("h2", {
              className:
                "font-poppins font-semibold ss:text-[18px] text-[16px] text-[#66B2D6] ss:leading-[26px] leading-[24px] w-full mt-1 flex items-center",
              children: [
                a.jsx(x_, { className: "text-[#66B2D6] text-[20px] mr-2" }),
                "Membangun Desa Maju, Mandiri, dan Berdaya Saing!",
                a.jsx(rp, { className: "text-[#66B2D6] text-[20px] ml-2" }),
              ],
            }),
            a.jsx("p", {
              className: `${Ue.paragraph} max-w-[570px] mt-5 text-[#000000] text-base leading-6`,
              children:
                'Di era digital, teknologi adalah kunci kemajuan desa! Dengan "Beopoeng", kami menghubungkan komunitas desa dengan solusi digital inovatif untuk menciptakan ekosistem yang lebih produktif dan berdaya saing.',
            }),
          ],
        }),
        a.jsx("div", {
          className: `ss:hidden ${Ue.flexCenter}`,
          children: a.jsx(K, { to: "/login", children: a.jsx(o1, {}) }),
        }),
        a.jsxs("div", {
          className: `flex-1 flex ${Ue.flexCenter} md:my-0 my-10 relative`,
          children: [
            a.jsx("img", {
              src: n_,
              alt: "digital-village",
              className: "w-[100%] h-[100%] relative z-[5] rounded-lg",
            }),
            a.jsx("img", {
              src: s_,
              alt: "overlay-1",
              className: "absolute w-[60%] h-[60%] top-5 left-5 opacity-50",
            }),
            a.jsx("img", {
              src: i_,
              alt: "overlay-2",
              className: "absolute w-[70%] h-[70%] bottom-5 right-5 opacity-30",
            }),
          ],
        }),
      ],
    }),
  In = ({ color: e, size: t, top: n, left: r, delay: s }) =>
    a.jsx(St.div, {
      className: `absolute rounded-full ${e} ${t} opacity-20 blur-xl`,
      style: { top: n, left: r },
      animate: {
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      },
      transition: { duration: 20, ease: "linear", repeat: 1 / 0, delay: s },
      "aria-hidden": "true",
    }),
  I_ = () =>
    a.jsxs("div", {
      className:
        "relative flex items-center justify-center min-h-screen overflow-hidden",
      children: [
        a.jsx(In, {
          color: "bg-[#3FA3CE]",
          size: "w-64 h-64",
          top: "-5%",
          left: "10%",
          delay: 0,
        }),
        a.jsx(In, {
          color: "bg-[#EF8B8B]",
          size: "w-48 h-48",
          top: "70%",
          left: "80%",
          delay: 5,
        }),
        a.jsx(In, {
          color: "bg-[#145C75]",
          size: "w-32 h-32",
          top: "40%",
          left: "-10%",
          delay: 2,
        }),
        a.jsxs(St.div, {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "px-8  w-full max-w-6xl flex flex-col",
          children: [
            a.jsx("div", { className: "w-full", children: a.jsx(C_, {}) }),
            a.jsx("div", { className: "mt-6", children: a.jsx(F_, {}) }),
            a.jsxs("div", {
              className: "mt-6 space-y-6",
              children: [
                a.jsx(__, {}),
                a.jsx(N_, {}),
                a.jsx(T_, {}),
                a.jsx(L_, {}),
              ],
            }),
          ],
        }),
      ],
    }),
  vn = ({ icon: e, ...t }) =>
    a.jsxs("div", {
      className: "relative mb-6",
      children: [
        a.jsxs("div", {
          className:
            "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
          children: [a.jsx(e, { className: "size-5 text-[#3FA3CE]" }), " "],
        }),
        a.jsx("input", {
          ...t,
          className: `w-full pl-10 pr-3 py-2 bg-[#ffffff] bg-opacity-50 rounded-lg border border-[#525252] \r
				focus:border-[#EF8B8B] focus:ring-2 focus:ring-[#EF8B8B] text-gray-800 placeholder-[#A8A8A8] transition duration-200`,
        }),
      ],
    }),
  B_ = () => {
    const [e, t] = b.useState(""),
      [n, r] = b.useState(""),
      s = Re(),
      [i, o] = b.useState(null),
      { mutate: l, isLoading: c } = oe({
        mutationFn: (d) => F.post("/auth/login", d),
        onSuccess: () => {
          s.invalidateQueries({ queryKey: ["authUser"] });
        },
        onError: (d) => {
          G.error(d.response.data.message || "Something went wrong");
        },
      }),
      u = (d) => {
        d.preventDefault(), l({ username: e, password: n });
      };
    return a.jsxs("div", {
      className:
        "bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg border border-[#D7D7D7] ",
      children: [
        a.jsx("h2", {
          className:
            "text-[#145C75] text-3xl font-bold text-center mb-4 uppercase tracking-wide",
          children: "Masuk ke Dunia Kolaborasi",
        }),
        a.jsx("p", {
          className: "text-center text-[#525252] mb-4",
          children:
            "Bergabunglah dengan komunitas inovatif untuk membangun masa depan digital!",
        }),
        a.jsxs("form", {
          onSubmit: u,
          className: "space-y-3",
          children: [
            a.jsx(vn, {
              icon: Po,
              type: "text",
              placeholder: "Username",
              value: e,
              onChange: (d) => t(d.target.value),
              required: !0,
            }),
            a.jsx(vn, {
              icon: bc,
              type: "password",
              placeholder: "Kata Sandi",
              value: n,
              onChange: (d) => r(d.target.value),
              required: !0,
            }),
            a.jsx("div", {
              className: "flex items-center mb-6",
              children: a.jsx(K, {
                to: "/forgot-password",
                className: "text-sm text-[#145C75] hover:underline",
                children: "Forgot password?",
              }),
            }),
            i &&
              a.jsx("p", {
                className: "text-red-500 font-semibold mb-2",
                children: i,
              }),
            a.jsx("button", {
              type: "submit",
              className:
                "w-full p-2 rounded-lg bg-gradient-to-r from-[#3FA3CE] to-[#2B7A98] hover:from-[#2B7A98] hover:to-[#145C75] text-white font-bold text-md tracking-wide uppercase shadow-lg transition duration-300 transform hover:scale-102",
              children: c
                ? a.jsx(Rr, { className: "size-6 animate-spin" })
                : "Login Sekarang",
            }),
          ],
        }),
      ],
    });
  },
  z_ = () =>
    a.jsxs("div", {
      className: "flex items-center justify-center min-h-screen",
      children: [
        a.jsx(In, {
          color: "bg-[#3FA3CE]",
          size: "w-64 h-64",
          top: "-5%",
          left: "10%",
          delay: 0,
        }),
        a.jsx(In, {
          color: "bg-[#EF8B8B]",
          size: "w-48 h-48",
          top: "70%",
          left: "80%",
          delay: 5,
        }),
        a.jsx(In, {
          color: "bg-[#145C75]",
          size: "w-32 h-32",
          top: "40%",
          left: "-10%",
          delay: 2,
        }),
        a.jsxs(St.div, {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className:
            "bg-[#FFFFFF] p-8 rounded-2xl shadow-lg w-full max-w-4xl flex",
          children: [
            a.jsxs("div", {
              className:
                "relative w-1/2 p-6 flex flex-col justify-center rounded-2xl text-[#3E3E3E] hidden md:flex",
              children: [
                a.jsx("div", {
                  className: "absolute inset-0 bg-cover bg-center opacity-50",
                  style: { backgroundImage: "url('/logo.png')" },
                }),
                a.jsx("div", {
                  className:
                    "absolute inset-0 bg-[#3FA3CE] opacity-50 rounded-2xl",
                }),
                a.jsxs("div", {
                  className: "relative z-10",
                  children: [
                    a.jsx("div", {
                      className:
                        "relative bg-white bg-opacity-50 rounded-2xl shadow-2xl p-6 text-center",
                      children: a.jsx("h2", {
                        className:
                          "text-lg md:text-xl font-bold text-[#145C75] drop-shadow-lg",
                        children:
                          "Bangun Koneksi, Wujudkan Ide, dan Kembangkan Komunitas Digital",
                      }),
                    }),
                    a.jsx("p", {
                      className: "mt-4 text-center font-medium",
                      children:
                        "Transformasi Digital Desa dalam Satu Genggaman. Selamat datang di Beopoeng Platform, solusi digital yang menghubungkan masyarakat desa dengan teknologi.",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "sm:mx-auto sm:w-full sm:max-w-md",
              children: [
                a.jsx("div", {
                  className: "bg-white py-8 px-4 sm:px-10",
                  children: a.jsx(B_, {}),
                }),
                a.jsxs("div", {
                  className: "mt-6 relative text-center",
                  children: [
                    a.jsx("div", {
                      className: "absolute inset-0 flex items-center",
                      children: a.jsx("div", {
                        className: "w-full border-t border-[#D7D7D7]",
                      }),
                    }),
                    a.jsx("div", {
                      className:
                        "relative inline-block px-3 bg-white text-[#828282] text-sm",
                      children: "Belum punya akun?",
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "mt-6 text-center",
                  children: a.jsx(K, {
                    to: "/Signup",
                    className:
                      "inline-block py-3 px-6 text-lg font-medium text-white bg-gradient-to-r from-[#2B7A98] to-[#145C75] rounded-lg shadow-lg hover:shadow-xl hover:from-[#145C75] hover:to-[#2B7A98] transition-all duration-300",
                    children: "Daftar Sekarang",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  V_ = ({ password: e }) => {
    const t = [
      { label: "Minimal 6 karakter", met: e.length >= 6 },
      { label: "Ada huruf besar", met: /[A-Z]/.test(e) },
      { label: "Ada huruf kecil", met: /[a-z]/.test(e) },
      { label: "Ada angka", met: /\d/.test(e) },
      { label: "Ada simbol spesial", met: /[^A-Za-z0-9]/.test(e) },
    ];
    return a.jsx("div", {
      className: "mt-2 space-y-1",
      children: t.map((n) =>
        a.jsxs(
          "div",
          {
            className: "flex items-center text-xs",
            children: [
              n.met
                ? a.jsx(Dv, { className: "size-4 text-[#66B2D6] mr-2" })
                : a.jsx(Gn, { className: "size-4 text-[#A8A8A8] mr-2" }),
              a.jsx("span", {
                className: n.met ? "text-[#66B2D6]" : "text-[#A8A8A8]",
                children: n.label,
              }),
            ],
          },
          n.label
        )
      ),
    });
  },
  U_ = ({ password: e }) => {
    const n = ((i) => {
        let o = 0;
        return (
          i.length >= 6 && o++,
          i.match(/[a-z]/) && i.match(/[A-Z]/) && o++,
          i.match(/\d/) && o++,
          i.match(/[^a-zA-Z\d]/) && o++,
          o
        );
      })(e),
      r = (i) =>
        i === 0
          ? "bg-[#BF5F5F]"
          : i === 1
          ? "bg-[#F4F4F4]"
          : i === 2
          ? "bg-[#3FA3CE]"
          : i === 3
          ? "bg-[#145C75]"
          : "bg-[#FF9999]",
      s = (i) =>
        i === 0
          ? "Sangat Lemah"
          : i === 1
          ? "Lemah"
          : i === 2
          ? "Lumayan"
          : i === 3
          ? "Bagus"
          : "Kuat";
    return a.jsxs("div", {
      className: "mt-2",
      children: [
        a.jsxs("div", {
          className: "flex justify-between items-center mb-1",
          children: [
            a.jsx("span", {
              className: "text-xs text-[#828282]",
              children: "Kekuatan password",
            }),
            a.jsx("span", {
              className: "text-xs text-[#828282]",
              children: s(n),
            }),
          ],
        }),
        a.jsx("div", {
          className: "flex space-x-1",
          children: [...Array(4)].map((i, o) =>
            a.jsx(
              "div",
              {
                className: `h-1 w-1/4 rounded-full transition-colors duration-300 
                ${
                  o < n ? r(n) : "bg-[#CCCCCC]"
                } // Abu-Abu Netral buat yang kosong
              `,
              },
              o
            )
          ),
        }),
        a.jsx(V_, { password: e }),
      ],
    });
  },
  $_ = () => {
    const [e, t] = b.useState(""),
      [n, r] = b.useState(""),
      [s, i] = b.useState(""),
      [o, l] = b.useState(""),
      [c, u] = b.useState(""),
      [d, f] = b.useState(null),
      h = Re(),
      { mutate: m, isLoading: y } = oe({
        mutationFn: async (w) => (await F.post("/auth/signup", w)).data,
        onSuccess: () => {
          le.success("Account created successfully"),
            h.invalidateQueries({ queryKey: ["authUser"] });
        },
        onError: (w) => {
          le.error(w.response.data.message || "Something went wrong");
        },
      }),
      v = (w) => {
        w.preventDefault();
        try {
          m({ name: e, username: s, email: n, password: o, nik: c }),
            navigate("/verify-email");
        } catch (g) {
          console.log(g);
        }
      };
    return a.jsxs("form", {
      onSubmit: v,
      className: "flex flex-col gap-1",
      children: [
        a.jsx(vn, {
          icon: Po,
          type: "text",
          placeholder: "Nama Lengkap",
          value: e,
          onChange: (w) => t(w.target.value),
          required: !0,
        }),
        a.jsx(vn, {
          icon: Po,
          type: "text",
          placeholder: "NIK Kamu",
          value: c,
          onChange: (w) => u(w.target.value),
          required: !0,
        }),
        a.jsx(vn, {
          icon: Po,
          type: "text",
          placeholder: "Username",
          value: s,
          onChange: (w) => i(w.target.value),
          required: !0,
        }),
        a.jsx(vn, {
          icon: Ff,
          type: "email",
          placeholder: "Email",
          value: n,
          onChange: (w) => r(w.target.value),
          required: !0,
        }),
        a.jsx(vn, {
          icon: bc,
          type: "password",
          placeholder: "Kata Sandi (6+ characters)",
          value: o,
          onChange: (w) => l(w.target.value),
          required: !0,
        }),
        d &&
          a.jsx("p", {
            className: "text-red-500 font-semibold mt-2",
            children: d,
          }),
        a.jsx(U_, { password: o }),
        a.jsx("button", {
          type: "submit",
          disabled: y,
          className:
            "w-full p-2 rounded-lg bg-gradient-to-r from-[#3FA3CE] to-[#2B7A98] hover:from-[#2B7A98] hover:to-[#145C75] text-white font-bold text-md tracking-wide uppercase shadow-lg transition duration-300 transform hover:scale-102",
          children: y
            ? a.jsx(Rr, { className: "size-5 animate-spin" })
            : "Agree & Join",
        }),
      ],
    });
  },
  H_ = () =>
    a.jsxs("div", {
      className:
        "min-h-screen flex flex-col lg:flex-row justify-center items-center",
      children: [
        a.jsx(In, {
          color: "bg-[#3FA3CE]",
          size: "w-64 h-64",
          top: "-5%",
          left: "10%",
          delay: 0,
        }),
        a.jsx(In, {
          color: "bg-[#EF8B8B]",
          size: "w-48 h-48",
          top: "70%",
          left: "80%",
          delay: 5,
        }),
        a.jsx(In, {
          color: "bg-[#145C75]",
          size: "w-32 h-32",
          top: "40%",
          left: "-10%",
          delay: 2,
        }),
        a.jsxs("div", {
          className: "lg:w-1/2 text-center lg:text-left",
          children: [
            a.jsx("img", {
              className: "mx-auto h-32 w-auto mb-6",
              src: "/logopanjang1.png",
              alt: "Kolaborasi Digital",
            }),
            a.jsx("h2", {
              className: "text-4xl font-extrabold",
              children: "🤝 Kolaborasi & Inovasi",
            }),
            a.jsx("p", {
              className: "mt-4 text-lg font-light text-[#000000]",
              children:
                "Bangun koneksi, wujudkan ide, dan kembangkan komunitas digital dengan lebih mudah dan modern.",
            }),
            a.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                a.jsx("img", {
                  className: "h-full rounded-lg",
                  src: "/kolaborasi.png",
                  alt: "Kolaborasi",
                }),
                a.jsx("img", {
                  className: "h-full rounded-lg",
                  src: "/inovasi.png",
                  alt: "Inovasi",
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className:
            "lg:w-1/2 mt-10 lg:mt-0 w-full max-w-lg bg-white p-10 rounded-2xl shadow-xl",
          children: [
            a.jsx("h3", {
              className:
                "text-2xl font-semibold text-[#145C75] text-center mb-4",
              children: "Daftar Sekarang",
            }),
            a.jsx($_, {}),
            a.jsxs("div", {
              className: "mt-6 relative text-center",
              children: [
                a.jsx("div", {
                  className: "absolute inset-0 flex items-center",
                  children: a.jsx("div", {
                    className: "w-full border-t border-[#D7D7D7]",
                  }),
                }),
                a.jsx("div", {
                  className:
                    "relative inline-block px-3 bg-white text-[#828282] text-sm",
                  children: "Sudah punya akun?",
                }),
              ],
            }),
            a.jsx("div", {
              className: "mt-6 text-center",
              children: a.jsx(K, {
                to: "/login",
                className:
                  "inline-block py-3 px-6 text-lg font-medium text-white bg-gradient-to-r from-[#2B7A98] to-[#145C75] rounded-lg shadow-lg hover:shadow-xl hover:from-[#145C75] hover:to-[#2B7A98] transition-all duration-300",
                children: "Masuk",
              }),
            }),
          ],
        }),
      ],
    }),
  q_ = () => {
    var f;
    const { data: e } = ie({ queryKey: ["authUser"] }),
      t = Re(),
      { data: n, isLoading: r } = ie({
        queryKey: ["notifications"],
        queryFn: () => F.get("/notifications"),
      }),
      s = ["like", "comment", "connectionAccepted"],
      i =
        (f = n == null ? void 0 : n.data) == null
          ? void 0
          : f.filter((h) => s.includes(h.type)),
      { mutate: o } = oe({
        mutationFn: (h) => F.put(`/notifications/${h}/read`),
        onSuccess: () => {
          t.invalidateQueries(["notifications"]);
        },
      }),
      { mutate: l } = oe({
        mutationFn: (h) => F.delete(`/notifications/${h}`),
        onSuccess: () => {
          t.invalidateQueries(["notifications"]),
            le.success("Notification deleted");
        },
      }),
      c = (h) => {
        switch (h) {
          case "like":
            return a.jsx(km, { className: "text-blue-500" });
          case "comment":
            return a.jsx(Bv, { className: "text-green-500" });
          case "connectionAccepted":
            return a.jsx(Na, { className: "text-purple-500" });
          default:
            return null;
        }
      },
      u = (h) => {
        switch (h.type) {
          case "like":
            return a.jsxs("span", {
              children: [
                a.jsx("strong", { children: h.relatedUser.name }),
                " liked your post",
              ],
            });
          case "comment":
            return a.jsxs("span", {
              children: [
                a.jsx(K, {
                  to: `/profile/${h.relatedUser.username}`,
                  className: "font-bold",
                  children: h.relatedUser.name,
                }),
                " ",
                "commented on your post",
              ],
            });
          case "connectionAccepted":
            return a.jsxs("span", {
              children: [
                a.jsx(K, {
                  to: `/profile/${h.relatedUser.username}`,
                  className: "font-bold",
                  children: h.relatedUser.name,
                }),
                " ",
                "accepted your connection request",
              ],
            });
          default:
            return null;
        }
      },
      d = (h) =>
        h
          ? a.jsxs(K, {
              to: `/post/${h._id}`,
              className:
                "mt-2 p-2 bg-gray-50 rounded-md flex items-center space-x-2 hover:bg-gray-100 transition-colors",
              children: [
                h.image &&
                  a.jsx("img", {
                    src: h.image,
                    alt: "Post preview",
                    className: "w-10 h-10 object-cover rounded",
                  }),
                a.jsx("div", {
                  className: "flex-1 overflow-hidden",
                  children: a.jsx("div", {
                    className:
                      "text-sm text-gray-600 prose max-w-full overflow-auto break-words",
                    dangerouslySetInnerHTML: { __html: h.content },
                  }),
                }),
                a.jsx(eN, { size: 14, className: "text-gray-400" }),
              ],
            })
          : null;
    return a.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
      children: [
        a.jsx("div", {
          className: "col-span-1 lg:col-span-1",
          children: a.jsx(da, { user: e }),
        }),
        a.jsx("div", {
          className: "col-span-1 lg:col-span-3",
          children: a.jsxs("div", {
            className: "bg-white rounded-lg shadow p-6",
            children: [
              a.jsx("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Notifications",
              }),
              r
                ? a.jsx("p", { children: "Loading notifications..." })
                : i && i.length > 0
                ? a.jsx("ul", {
                    children: i.map((h) =>
                      a.jsx(
                        "li",
                        {
                          className: `bg-white border rounded-lg p-4 my-4 transition-all hover:shadow-md ${
                            h.read ? "border-gray-200" : "border-blue-500"
                          }`,
                          children: a.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                  a.jsx(K, {
                                    to: `/profile/${h.relatedUser.username}`,
                                    children: a.jsx("img", {
                                      src:
                                        h.relatedUser.profilePicture ||
                                        "/avatar.png",
                                      alt: h.relatedUser.name,
                                      className:
                                        "w-12 h-12 rounded-full object-cover",
                                    }),
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          a.jsx("div", {
                                            className:
                                              "p-1 bg-gray-100 rounded-full",
                                            children: c(h.type),
                                          }),
                                          a.jsx("p", {
                                            className: "text-sm",
                                            children: u(h),
                                          }),
                                        ],
                                      }),
                                      a.jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: ha(new Date(h.createdAt), {
                                          addSuffix: !0,
                                        }),
                                      }),
                                      d(h.relatedPost),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  !h.read &&
                                    a.jsx("button", {
                                      onClick: () => o(h._id),
                                      className:
                                        "p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors",
                                      "aria-label": "Mark as read",
                                      children: a.jsx(tN, { size: 16 }),
                                    }),
                                  a.jsx("button", {
                                    onClick: () => l(h._id),
                                    className:
                                      "p-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors",
                                    "aria-label": "Delete notification",
                                    children: a.jsx(Cm, { size: 16 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        h._id
                      )
                    ),
                  })
                : a.jsx("p", { children: "No notification at the moment." }),
            ],
          }),
        }),
      ],
    });
  },
  W_ = ({ request: e }) => {
    const t = Re(),
      { mutate: n } = oe({
        mutationFn: (s) => F.put(`/connections/accept/${s}`),
        onSuccess: () => {
          G.success("Connection request accepted"),
            t.invalidateQueries({ queryKey: ["connectionRequests"] });
        },
        onError: (s) => {
          G.error(s.response.data.error);
        },
      }),
      { mutate: r } = oe({
        mutationFn: (s) => F.put(`/connections/reject/${s}`),
        onSuccess: () => {
          G.success("Connection request rejected"),
            t.invalidateQueries({ queryKey: ["connectionRequests"] });
        },
        onError: (s) => {
          G.error(s.response.data.error);
        },
      });
    return a.jsxs("div", {
      className:
        "bg-white rounded-lg shadow p-4 flex items-center justify-between transition-all hover:shadow-md",
      children: [
        a.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            a.jsx(K, {
              to: `/profile/${e.sender.username}`,
              children: a.jsx("img", {
                src: e.sender.profilePicture || "/avatar.png",
                alt: e.name,
                className: "w-16 h-16 rounded-full object-cover",
              }),
            }),
            a.jsxs("div", {
              children: [
                a.jsx(K, {
                  to: `/profile/${e.sender.username}`,
                  className: "font-semibold text-lg",
                  children: e.sender.name,
                }),
                a.jsx("p", {
                  className: "text-gray-600",
                  children: e.sender.headline,
                }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "space-x-2",
          children: [
            a.jsx("button", {
              className:
                "bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors",
              onClick: () => n(e._id),
              children: "Accept",
            }),
            a.jsx("button", {
              className:
                "bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors",
              onClick: () => r(e._id),
              children: "Reject",
            }),
          ],
        }),
      ],
    });
  };
function K_({ user: e, isConnection: t }) {
  var n;
  return a.jsxs("div", {
    className:
      "bg-white rounded-lg shadow p-4 flex flex-col items-center transition-all hover:shadow-md",
    children: [
      a.jsxs(K, {
        to: `/profile/${e.username}`,
        className: "flex flex-col items-center",
        children: [
          a.jsx("img", {
            src: e.profilePicture || "/avatar.png",
            alt: e.name,
            className: "w-24 h-24 rounded-full object-cover mb-4",
          }),
          a.jsx("h3", {
            className: "font-semibold text-lg text-center",
            children: e.name,
          }),
        ],
      }),
      a.jsx("p", {
        className: "text-gray-600 text-center",
        children: e.headline,
      }),
      a.jsxs("p", {
        className: "text-sm text-gray-500 mt-2",
        children: [
          (n = e.connections) == null ? void 0 : n.length,
          " connections",
        ],
      }),
      a.jsx("button", {
        className:
          "mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors w-full",
        children: t ? "Connected" : "Connect",
      }),
    ],
  });
}
const Y_ = () => {
    var r, s;
    const { data: e } = ie({
        queryKey: ["authUser"],
        queryFn: () => F.get("/auth/me").then((i) => i.data),
      }),
      { data: t } = ie({
        queryKey: ["connectionRequests"],
        queryFn: () => F.get("/connections/requests"),
      }),
      { data: n } = ie({
        queryKey: ["connections"],
        queryFn: () => F.get("/connections"),
      });
    return a.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
      children: [
        a.jsx("div", {
          className: "col-span-1 lg:col-span-1",
          children: a.jsx(da, { user: e }),
        }),
        a.jsx("div", {
          className: "col-span-1 lg:col-span-3",
          children: a.jsxs("div", {
            className: "bg-secondary rounded-lg shadow p-6 mb-6",
            children: [
              a.jsx("h1", {
                className: "text-2xl font-bold mb-6",
                children: "Jaringan Kolaborasi Saya",
              }),
              ((r = t == null ? void 0 : t.data) == null ? void 0 : r.length) >
              0
                ? a.jsxs("div", {
                    className: "mb-8",
                    children: [
                      a.jsx("h2", {
                        className: "text-xl font-semibold mb-2",
                        children: "Permintaan Koneksi",
                      }),
                      a.jsx("div", {
                        className: "space-y-4",
                        children: t.data.map((i) =>
                          a.jsx(W_, { request: i }, i.id)
                        ),
                      }),
                    ],
                  })
                : a.jsxs("div", {
                    className:
                      "bg-white rounded-lg shadow p-6 text-center mb-6",
                    children: [
                      a.jsx(Na, {
                        size: 48,
                        className: "mx-auto text-gray-400 mb-4",
                      }),
                      a.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Tidak Ada Permintaan Koneksi",
                      }),
                      a.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "Saat ini, kamu belum menerima permintaan koneksi apa pun.",
                      }),
                      a.jsx("p", {
                        className: "text-gray-600 mt-2",
                        children:
                          "Jelajahi pengguna lain di bawah ini untuk memperluas jaringan kolaborasimu!",
                      }),
                    ],
                  }),
              ((s = n == null ? void 0 : n.data) == null ? void 0 : s.length) >
                0 &&
                a.jsxs("div", {
                  className: "mb-8",
                  children: [
                    a.jsx("h2", {
                      className: "text-xl font-semibold mb-4",
                      children: "Koneksi Aktif",
                    }),
                    a.jsx("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: n.data.map((i) =>
                        a.jsx(K_, { user: i, isConnection: !0 }, i._id)
                      ),
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  },
  Q_ = () => {
    const { postId: e } = Ss(),
      { data: t } = ie({ queryKey: ["authUser"] }),
      { data: n, isLoading: r } = ie({
        queryKey: ["post", e],
        queryFn: () => F.get(`/posts/${e}`),
      });
    return r
      ? a.jsx("div", { children: "Loading post..." })
      : n != null && n.data
      ? a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
          children: [
            a.jsx("div", {
              className: "hidden lg:block lg:col-span-1",
              children: a.jsx(da, { user: t }),
            }),
            a.jsx("div", {
              className: "col-span-1 lg:col-span-3",
              children: a.jsx(Db, { post: n.data }),
            }),
          ],
        })
      : a.jsx("div", { children: "Post not found" });
  },
  G_ = ({ userData: e, onSave: t, isOwnProfile: n }) => {
    var T, j;
    const [r, s] = b.useState(!1),
      [i, o] = b.useState({}),
      l = Re(),
      c = Qn(),
      u = () => {
        c(`/messages/${e._id}`);
      },
      { data: d } = ie({
        queryKey: ["authUser"],
        queryFn: async () => (await F.get("/auth/me")).data,
      }),
      { data: f, refetch: h } = ie({
        queryKey: ["connectionStatus", e._id],
        queryFn: () => F.get(`/connections/status/${e._id}`),
        enabled: !n,
      }),
      m = e.connections.some((N) => N === d._id),
      { mutate: y } = oe({
        mutationFn: (N) => F.post(`/connections/request/${N}`),
        onSuccess: () => {
          le.success("Connection request sent"),
            h(),
            l.invalidateQueries(["connectionRequests"]);
        },
        onError: (N) => {
          var O, M;
          le.error(
            ((M = (O = N.response) == null ? void 0 : O.data) == null
              ? void 0
              : M.message) || "An error occurred"
          );
        },
      }),
      { mutate: v } = oe({
        mutationFn: (N) => F.put(`/connections/accept/${N}`),
        onSuccess: () => {
          le.success("Connection request accepted"),
            h(),
            l.invalidateQueries(["connectionRequests"]);
        },
        onError: (N) => {
          var O, M;
          le.error(
            ((M = (O = N.response) == null ? void 0 : O.data) == null
              ? void 0
              : M.message) || "An error occurred"
          );
        },
      }),
      { mutate: w } = oe({
        mutationFn: (N) => F.put(`/connections/reject/${N}`),
        onSuccess: () => {
          le.success("Connection request rejected"),
            h(),
            l.invalidateQueries(["connectionRequests"]);
        },
        onError: (N) => {
          var O, M;
          le.error(
            ((M = (O = N.response) == null ? void 0 : O.data) == null
              ? void 0
              : M.message) || "An error occurred"
          );
        },
      }),
      { mutate: g } = oe({
        mutationFn: (N) => F.delete(`/connections/${N}`),
        onSuccess: () => {
          le.success("Connection removed"),
            h(),
            l.invalidateQueries(["connectionRequests"]);
        },
        onError: (N) => {
          var O, M;
          le.error(
            ((M = (O = N.response) == null ? void 0 : O.data) == null
              ? void 0
              : M.message) || "An error occurred"
          );
        },
      }),
      p = b.useMemo(() => {
        var N;
        return m
          ? "connected"
          : m
          ? (N = f == null ? void 0 : f.data) == null
            ? void 0
            : N.status
          : "not_connected";
      }, [m, f]),
      x = () => {
        const N =
          "text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center";
        if (e.role === "admin")
          return a.jsxs("div", {
            className: `${N} bg-green-700 cursor-not-allowed`,
            children: [
              a.jsx(If, { size: 20, className: "mr-2" }),
              "Terkoneksi Otomatis",
            ],
          });
        switch (p) {
          case "connected":
            return a.jsxs("div", {
              className: "flex flex-wrap gap-2 justify-center",
              children: [
                a.jsxs("div", {
                  className: `${N} bg-green-500 hover:bg-green-600`,
                  children: [
                    a.jsx(If, { size: 20, className: "mr-2" }),
                    "Connected",
                  ],
                }),
                a.jsxs("button", {
                  className: `${N} bg-red-500 hover:bg-red-600 text-sm`,
                  onClick: () => g(e._id),
                  children: [
                    a.jsx(Gn, { size: 20, className: "mr-2" }),
                    "Remove Connection",
                  ],
                }),
              ],
            });
          case "pending":
            return a.jsxs("button", {
              className: `${N} bg-yellow-500 hover:bg-yellow-600`,
              children: [a.jsx(Lv, { size: 20, className: "mr-2" }), "Pending"],
            });
          case "received":
            return a.jsxs("div", {
              className: "flex gap-2 justify-center",
              children: [
                a.jsx("button", {
                  onClick: () => v(f.data.requestId),
                  className: `${N} bg-green-500 hover:bg-green-600`,
                  children: "Accept",
                }),
                a.jsx("button", {
                  onClick: () => w(f.data.requestId),
                  className: `${N} bg-red-500 hover:bg-red-600`,
                  children: "Reject",
                }),
              ],
            });
          default:
            return a.jsxs("button", {
              onClick: () => y(e._id),
              className:
                "bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center",
              children: [a.jsx(Na, { size: 20, className: "mr-2" }), "Connect"],
            });
        }
      },
      S = (N) => {
        const O = N.target.files[0];
        if (O) {
          const M = new FileReader();
          (M.onloadend = () => {
            o((J) => ({ ...J, [N.target.name]: M.result }));
          }),
            M.readAsDataURL(O);
        }
      },
      C = () => {
        t(i), s(!1);
      };
    return a.jsxs("div", {
      className:
        "grid grid-cols-1 md:grid-cols-3 gap-6 p-2 bg-gray-100 shadow-2xl",
      children: [
        a.jsx("div", {
          className:
            "md:col-span-2 bg-white shadow-lg rounded-lg space-y-3 flex flex-col items-center",
          children: a.jsxs("div", {
            className: "bg-white w-full",
            children: [
              a.jsx("div", {
                className:
                  "relative h-32 md:h-48 rounded-t-lg bg-contain bg-center bg-no-repeat bg-gray-200",
                style: {
                  backgroundImage: `url('${
                    i.bannerImg || e.bannerImg || "/banner.png"
                  }')`,
                },
                children:
                  r &&
                  a.jsxs("label", {
                    className:
                      "absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer",
                    children: [
                      a.jsx(gg, { size: 20 }),
                      a.jsx("input", {
                        type: "file",
                        className: "hidden",
                        name: "bannerImg",
                        onChange: S,
                        accept: "image/*",
                      }),
                    ],
                  }),
              }),
              a.jsxs("div", {
                className: "p-4",
                children: [
                  a.jsxs("div", {
                    className: "relative -mt-20 mb-4",
                    children: [
                      a.jsx("img", {
                        className:
                          "w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover",
                        src:
                          i.profilePicture || e.profilePicture || "/avatar.png",
                        alt: e.name,
                      }),
                      r &&
                        a.jsxs("label", {
                          className:
                            "absolute bottom-0 right-1/2 transform translate-x-16 bg-white p-2 rounded-full shadow cursor-pointer",
                          children: [
                            a.jsx(gg, { size: 20 }),
                            a.jsx("input", {
                              type: "file",
                              className: "hidden",
                              name: "profilePicture",
                              onChange: S,
                              accept: "image/*",
                            }),
                          ],
                        }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "text-center mb-4",
                    children: [
                      r
                        ? a.jsx("input", {
                            type: "text",
                            value: i.name ?? e.name,
                            onChange: (N) => o({ ...i, name: N.target.value }),
                            className:
                              "text-2xl font-bold mb-2 text-center w-full",
                          })
                        : a.jsx("h1", {
                            className: "text-2xl font-bold mb-2",
                            children: e.name,
                          }),
                      r
                        ? a.jsx("input", {
                            type: "text",
                            value: i.headline ?? e.headline,
                            onChange: (N) =>
                              o({ ...i, headline: N.target.value }),
                            className: "text-gray-600 text-center w-full",
                          })
                        : a.jsx("p", {
                            className: "text-gray-600",
                            children: e.headline,
                          }),
                      a.jsxs("div", {
                        className: "flex justify-center items-center mt-2",
                        children: [
                          a.jsx(sN, {
                            size: 16,
                            className: "text-gray-500 mr-1",
                          }),
                          r
                            ? a.jsx("input", {
                                type: "text",
                                value: i.location ?? e.location,
                                onChange: (N) =>
                                  o({ ...i, location: N.target.value }),
                                className: "text-gray-600 text-center",
                              })
                            : a.jsx("span", {
                                className: "text-gray-600",
                                children: e.location,
                              }),
                        ],
                      }),
                    ],
                  }),
                  n
                    ? r
                      ? a.jsx("button", {
                          className: `w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark\r
							 transition duration-300`,
                          onClick: C,
                          children: "Save Profile",
                        })
                      : a.jsx("button", {
                          onClick: () => s(!0),
                          className: `w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark\r
							 transition duration-300`,
                          children: "Edit Profile",
                        })
                    : a.jsx("div", {
                        className: "flex justify-center",
                        children: x(),
                      }),
                ],
              }),
            ],
          }),
        }),
        a.jsxs("div", {
          className:
            "md:col-span-1 bg-white shadow-lg rounded-lg p-5 space-y-4",
          children: [
            a.jsx("h2", {
              className: "text-lg font-semibold text-gray-700",
              children: "User Stats",
            }),
            a.jsxs("div", {
              className:
                "flex justify-between items-center p-3 border rounded-md shadow-sm",
              children: [
                a.jsx("span", {
                  className: "text-gray-600",
                  children: "Connections",
                }),
                a.jsx("span", {
                  className: "font-semibold text-blue-500",
                  children:
                    ((T = e == null ? void 0 : e.connections) == null
                      ? void 0
                      : T.length) ?? 0,
                }),
              ],
            }),
            a.jsxs("div", {
              className:
                "flex justify-between items-center p-3 border rounded-md shadow-sm",
              children: [
                a.jsx("span", {
                  className: "text-gray-600",
                  children: "Posts",
                }),
                a.jsx("span", {
                  className: "font-semibold text-blue-500",
                  children:
                    ((j = e == null ? void 0 : e.posts) == null
                      ? void 0
                      : j.length) ?? 0,
                }),
              ],
            }),
            !n &&
              a.jsxs("button", {
                onClick: u,
                className: "bg-blue-500 text-white p-2 rounded",
                children: ["Chat dengan ", e.name],
              }),
          ],
        }),
      ],
    });
  },
  X_ = ({ userData: e, isOwnProfile: t, onSave: n }) => {
    const [r, s] = b.useState(!1),
      [i, o] = b.useState(e.about || ""),
      l = () => {
        s(!1), n({ about: i });
      };
    return a.jsxs("div", {
      className: "bg-white shadow rounded-lg p-6 mb-6",
      children: [
        a.jsx("h2", {
          className: "text-xl font-semibold mb-4",
          children: "About",
        }),
        t &&
          a.jsx(a.Fragment, {
            children: r
              ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("textarea", {
                      value: i,
                      onChange: (c) => o(c.target.value),
                      className: "w-full p-2 border rounded",
                      rows: "4",
                    }),
                    a.jsx("button", {
                      onClick: l,
                      className: `mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark 
								transition duration-300`,
                      children: "Save",
                    }),
                  ],
                })
              : a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("p", { children: e.about }),
                    a.jsx("button", {
                      onClick: () => s(!0),
                      className:
                        "mt-2 text-primary hover:text-primary-dark transition duration-300",
                      children: "Edit",
                    }),
                  ],
                }),
          }),
      ],
    });
  },
  a1 = (e) => {
    const t = EA(e);
    return Ab(t) ? SA(t, "MMM yyyy") : "Present";
  },
  J_ = ({ userData: e, isOwnProfile: t, onSave: n }) => {
    const [r, s] = b.useState(!1),
      [i, o] = b.useState(e.experience || []),
      [l, c] = b.useState({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        currentlyWorking: !1,
      }),
      u = () => {
        l.title &&
          l.company &&
          l.startDate &&
          (o([...i, l]),
          c({
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            currentlyWorking: !1,
          }));
      },
      d = (m) => {
        o(i.filter((y) => y._id !== m));
      },
      f = () => {
        n({ experience: i }), s(!1);
      },
      h = (m) => {
        c({
          ...l,
          currentlyWorking: m.target.checked,
          endDate: m.target.checked ? "" : l.endDate,
        });
      };
    return a.jsxs("div", {
      className: "bg-white shadow rounded-lg p-6 mb-6",
      children: [
        a.jsx("h2", {
          className: "text-xl font-semibold mb-4",
          children: "Experience",
        }),
        i.map((m) =>
          a.jsxs(
            "div",
            {
              className: "mb-4 flex justify-between items-start",
              children: [
                a.jsxs("div", {
                  className: "flex items-start",
                  children: [
                    a.jsx(GE, { size: 20, className: "mr-2 mt-1" }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("h3", {
                          className: "font-semibold",
                          children: m.title,
                        }),
                        a.jsx("p", {
                          className: "text-gray-600",
                          children: m.company,
                        }),
                        a.jsxs("p", {
                          className: "text-gray-500 text-sm",
                          children: [
                            a1(m.startDate),
                            " - ",
                            m.endDate ? a1(m.endDate) : "Present",
                          ],
                        }),
                        a.jsx("p", {
                          className: "text-gray-700",
                          children: m.description,
                        }),
                      ],
                    }),
                  ],
                }),
                r &&
                  a.jsx("button", {
                    onClick: () => d(m._id),
                    className: "text-red-500",
                    children: a.jsx(Gn, { size: 20 }),
                  }),
              ],
            },
            m._id
          )
        ),
        r &&
          a.jsxs("div", {
            className: "mt-4",
            children: [
              a.jsx("input", {
                type: "text",
                placeholder: "Title",
                value: l.title,
                onChange: (m) => c({ ...l, title: m.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("input", {
                type: "text",
                placeholder: "Company",
                value: l.company,
                onChange: (m) => c({ ...l, company: m.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("input", {
                type: "date",
                placeholder: "Start Date",
                value: l.startDate,
                onChange: (m) => c({ ...l, startDate: m.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsxs("div", {
                className: "flex items-center mb-2",
                children: [
                  a.jsx("input", {
                    type: "checkbox",
                    id: "currentlyWorking",
                    checked: l.currentlyWorking,
                    onChange: h,
                    className: "mr-2",
                  }),
                  a.jsx("label", {
                    htmlFor: "currentlyWorking",
                    children: "I currently work here",
                  }),
                ],
              }),
              !l.currentlyWorking &&
                a.jsx("input", {
                  type: "date",
                  placeholder: "End Date",
                  value: l.endDate,
                  onChange: (m) => c({ ...l, endDate: m.target.value }),
                  className: "w-full p-2 border rounded mb-2",
                }),
              a.jsx("textarea", {
                placeholder: "Description",
                value: l.description,
                onChange: (m) => c({ ...l, description: m.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("button", {
                onClick: u,
                className:
                  "bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300",
                children: "Add Experience",
              }),
            ],
          }),
        t &&
          a.jsx(a.Fragment, {
            children: r
              ? a.jsx("button", {
                  onClick: f,
                  className:
                    "mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300",
                  children: "Save Changes",
                })
              : a.jsx("button", {
                  onClick: () => s(!0),
                  className:
                    "mt-4 text-primary hover:text-primary-dark transition duration-300",
                  children: "Edit Experiences",
                }),
          }),
      ],
    });
  },
  Z_ = ({ userData: e, isOwnProfile: t, onSave: n }) => {
    const [r, s] = b.useState(!1),
      [i, o] = b.useState(e.education || []),
      [l, c] = b.useState({
        school: "",
        fieldOfStudy: "",
        startYear: "",
        endYear: "",
      }),
      u = () => {
        l.school &&
          l.fieldOfStudy &&
          l.startYear &&
          (o([...i, l]),
          c({ school: "", fieldOfStudy: "", startYear: "", endYear: "" }));
      },
      d = (h) => {
        o(i.filter((m) => m._id !== h));
      },
      f = () => {
        n({ education: i }), s(!1);
      };
    return a.jsxs("div", {
      className: "bg-white shadow rounded-lg p-6 mb-6",
      children: [
        a.jsx("h2", {
          className: "text-xl font-semibold mb-4",
          children: "Education",
        }),
        i.map((h) =>
          a.jsxs(
            "div",
            {
              className: "mb-4 flex justify-between items-start",
              children: [
                a.jsxs("div", {
                  className: "flex items-start",
                  children: [
                    a.jsx(oN, { size: 20, className: "mr-2 mt-1" }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("h3", {
                          className: "font-semibold",
                          children: h.fieldOfStudy,
                        }),
                        a.jsx("p", {
                          className: "text-gray-600",
                          children: h.school,
                        }),
                        a.jsxs("p", {
                          className: "text-gray-500 text-sm",
                          children: [
                            h.startYear,
                            " - ",
                            h.endYear || "Present",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                r &&
                  a.jsx("button", {
                    onClick: () => d(h._id),
                    className: "text-red-500",
                    children: a.jsx(Gn, { size: 20 }),
                  }),
              ],
            },
            h._id
          )
        ),
        r &&
          a.jsxs("div", {
            className: "mt-4",
            children: [
              a.jsx("input", {
                type: "text",
                placeholder: "School",
                value: l.school,
                onChange: (h) => c({ ...l, school: h.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("input", {
                type: "text",
                placeholder: "Field of Study",
                value: l.fieldOfStudy,
                onChange: (h) => c({ ...l, fieldOfStudy: h.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("input", {
                type: "number",
                placeholder: "Start Year",
                value: l.startYear,
                onChange: (h) => c({ ...l, startYear: h.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("input", {
                type: "number",
                placeholder: "End Year",
                value: l.endYear,
                onChange: (h) => c({ ...l, endYear: h.target.value }),
                className: "w-full p-2 border rounded mb-2",
              }),
              a.jsx("button", {
                onClick: u,
                className:
                  "bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300",
                children: "Add Education",
              }),
            ],
          }),
        t &&
          a.jsx(a.Fragment, {
            children: r
              ? a.jsx("button", {
                  onClick: f,
                  className: `mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark
							 transition duration-300`,
                  children: "Save Changes",
                })
              : a.jsx("button", {
                  onClick: () => s(!0),
                  className:
                    "mt-4 text-primary hover:text-primary-dark transition duration-300",
                  children: "Edit Education",
                }),
          }),
      ],
    });
  },
  eR = ({ userData: e, isOwnProfile: t, onSave: n }) => {
    const [r, s] = b.useState(!1),
      [i, o] = b.useState(e.skills || []),
      [l, c] = b.useState(""),
      u = () => {
        l && !i.includes(l) && (o([...i, l]), c(""));
      },
      d = (h) => {
        o(i.filter((m) => m !== h));
      },
      f = () => {
        n({ skills: i }), s(!1);
      };
    return a.jsxs("div", {
      className: "bg-white shadow rounded-lg p-6",
      children: [
        a.jsx("h2", {
          className: "text-xl font-semibold mb-4",
          children: "Skills",
        }),
        a.jsx("div", {
          className: "flex flex-wrap",
          children: i.map((h, m) =>
            a.jsxs(
              "span",
              {
                className:
                  "bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center",
                children: [
                  h,
                  r &&
                    a.jsx("button", {
                      onClick: () => d(h),
                      className: "ml-2 text-red-500",
                      children: a.jsx(Gn, { size: 14 }),
                    }),
                ],
              },
              m
            )
          ),
        }),
        r &&
          a.jsxs("div", {
            className: "mt-4 flex",
            children: [
              a.jsx("input", {
                type: "text",
                placeholder: "New Skill",
                value: l,
                onChange: (h) => c(h.target.value),
                className: "flex-grow p-2 border rounded-l",
              }),
              a.jsx("button", {
                onClick: u,
                className:
                  "bg-primary text-white py-2 px-4 rounded-r hover:bg-primary-dark transition duration-300",
                children: "Add Skill",
              }),
            ],
          }),
        t &&
          a.jsx(a.Fragment, {
            children: r
              ? a.jsx("button", {
                  onClick: f,
                  className:
                    "mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300",
                  children: "Save Changes",
                })
              : a.jsx("button", {
                  onClick: () => s(!0),
                  className:
                    "mt-4 text-primary hover:text-primary-dark transition duration-300",
                  children: "Edit Skills",
                }),
          }),
      ],
    });
  },
  tR = ({ post: e }) => {
    var C, T;
    const { postId: t } = Ss(),
      { data: n } = ie({
        queryKey: ["authUser"],
        queryFn: async () => (await F.get("/auth/me")).data,
        initialData: null,
      }),
      [r, s] = b.useState(!1),
      [i, o] = b.useState(""),
      [l, c] = b.useState(e.comments || []),
      u = n._id === e.author._id,
      d = e.likes.includes(n._id),
      f = Re(),
      { mutate: h, isPending: m } = oe({
        mutationFn: async () => {
          await F.delete(`/posts/delete/${e._id}`);
        },
        onSuccess: () => {
          f.invalidateQueries({ queryKey: ["posts"] }),
            G.success("Post deleted successfully");
        },
        onError: (j) => {
          G.error(j.message);
        },
      }),
      { mutate: y, isPending: v } = oe({
        mutationFn: async (j) => {
          await F.post(`/posts/${e._id}/comment`, { content: j });
        },
        onSuccess: () => {
          f.invalidateQueries({ queryKey: ["posts"] }),
            G.success("Comment added successfully");
        },
        onError: (j) => {
          G.error(j.response.data.message || "Failed to add comment");
        },
      }),
      { mutate: w, isPending: g } = oe({
        mutationFn: async () => {
          await F.post(`/posts/${e._id}/like`);
        },
        onSuccess: () => {
          f.invalidateQueries({ queryKey: ["posts"] }),
            f.invalidateQueries({ queryKey: ["post", t] });
        },
      }),
      p = () => {
        window.confirm("Are you sure you want to delete this post?") && h();
      },
      x = async () => {
        g || w();
      },
      S = async (j) => {
        j.preventDefault(),
          i.trim() &&
            (y(i),
            o(""),
            c([
              ...l,
              {
                content: i,
                user: {
                  _id: n._id,
                  name: n.name,
                  profilePicture: n.profilePicture,
                },
                createdAt: new Date(),
              },
            ]));
      };
    return a.jsxs("div", {
      className: "bg-secondary rounded-lg shadow mb-4",
      children: [
        a.jsxs("div", {
          className: "p-4",
          children: [
            a.jsxs("div", {
              className: "flex items-center justify-between mb-4",
              children: [
                a.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    a.jsx(K, {
                      to: `/profile/${
                        (C = e == null ? void 0 : e.author) == null
                          ? void 0
                          : C.username
                      }`,
                      children: a.jsx("img", {
                        src: e.author.profilePicture || "/avatar.png",
                        alt: e.author.name,
                        className: "size-10 rounded-full mr-3",
                      }),
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx(K, {
                          to: `/profile/${
                            (T = e == null ? void 0 : e.author) == null
                              ? void 0
                              : T.username
                          }`,
                          children: a.jsx("h3", {
                            className: "font-semibold",
                            children: e.author.name,
                          }),
                        }),
                        a.jsx("p", {
                          className: "text-xs text-info",
                          children: e.author.headline,
                        }),
                        a.jsx("p", {
                          className: "text-xs text-info",
                          children: ha(new Date(e.createdAt), {
                            addSuffix: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u &&
                  a.jsx("button", {
                    onClick: p,
                    className: "text-red-500 hover:text-red-700",
                    children: m
                      ? a.jsx(Rr, { size: 18, className: "animate-spin" })
                      : a.jsx(Cm, { size: 18 }),
                  }),
              ],
            }),
            a.jsx("div", {
              className: "prose max-w-none",
              dangerouslySetInnerHTML: { __html: e.content },
            }),
            e.image &&
              a.jsx("img", {
                src: e.image,
                alt: "Post content",
                className: "rounded-lg w-full mb-4",
              }),
            a.jsxs("div", {
              className: "flex justify-between text-info",
              children: [
                a.jsx(ii, {
                  icon: a.jsx(km, {
                    size: 18,
                    className: d ? "text-blue-500  fill-blue-300" : "",
                  }),
                  text: `Like (${e.likes.length})`,
                  onClick: x,
                }),
                a.jsx(ii, {
                  icon: a.jsx(Ea, { size: 18 }),
                  text: `Comment (${l.length})`,
                  onClick: () => s(!r),
                }),
                a.jsx(ii, { icon: a.jsx(zv, { size: 18 }), text: "Share" }),
              ],
            }),
          ],
        }),
        r &&
          a.jsxs("div", {
            className: "px-4 pb-4",
            children: [
              a.jsx("div", {
                className: "mb-4 max-h-60 overflow-y-auto",
                children: l.map((j) =>
                  a.jsxs(
                    "div",
                    {
                      className:
                        "mb-2 bg-base-100 p-2 rounded flex items-start",
                      children: [
                        a.jsx("img", {
                          src: j.user.profilePicture || "/avatar.png",
                          alt: j.user.name,
                          className: "w-8 h-8 rounded-full mr-2 flex-shrink-0",
                        }),
                        a.jsxs("div", {
                          className: "flex-grow",
                          children: [
                            a.jsxs("div", {
                              className: "flex items-center mb-1",
                              children: [
                                a.jsx("span", {
                                  className: "font-semibold mr-2",
                                  children: j.user.name,
                                }),
                                a.jsx("span", {
                                  className: "text-xs text-info",
                                  children: ha(new Date(j.createdAt)),
                                }),
                              ],
                            }),
                            a.jsx("p", { children: j.content }),
                          ],
                        }),
                      ],
                    },
                    j._id
                  )
                ),
              }),
              a.jsxs("form", {
                onSubmit: S,
                className: "flex items-center",
                children: [
                  a.jsx("input", {
                    type: "text",
                    value: i,
                    onChange: (j) => o(j.target.value),
                    placeholder: "Add a comment...",
                    className:
                      "flex-grow p-2 rounded-l-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary",
                  }),
                  a.jsx("button", {
                    type: "submit",
                    className:
                      "bg-primary text-white p-2 rounded-r-full hover:bg-primary-dark transition duration-300",
                    disabled: v,
                    children: v
                      ? a.jsx(Rr, { size: 18, className: "animate-spin" })
                      : a.jsx(Sm, { size: 18 }),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  nR = () => {
    const { username: e } = Ss(),
      t = Re(),
      { data: n, isLoading: r } = ie({
        queryKey: ["authUser"],
        queryFn: async () => (await F.get("/auth/me")).data,
      }),
      { data: s, isLoading: i } = ie({
        queryKey: ["userProfile", e],
        queryFn: async () => (await F.get(`/users/${e}`)).data,
      }),
      {
        data: o,
        isLoading: l,
        isError: c,
      } = ie({
        queryKey: ["userPosts", e],
        queryFn: async () => (await F.get(`/posts/user/${e}`)).data,
      }),
      { mutate: u } = oe({
        mutationFn: async (h) => {
          await F.put("/users/profile", h);
        },
        onSuccess: () => {
          G.success("Profile updated successfully"),
            t.invalidateQueries(["userProfile", e]);
        },
      });
    if (r || i) return a.jsx("p", { children: "Loading profile..." });
    if (!n || !s) return a.jsx("p", { children: "Failed to load profile" });
    const d =
        (n == null ? void 0 : n.username) === (s == null ? void 0 : s.username),
      f = d ? n : s;
    return a.jsxs("div", {
      className: "max-w-6xl mx-auto p-4",
      children: [
        a.jsx(G_, { userData: f, isOwnProfile: d, onSave: u }),
        a.jsxs("div", {
          className: "grid grid-cols-12 gap-4 mt-6 shadow-2xl",
          children: [
            a.jsxs("div", {
              className: "col-span-8 bg-white p-4 rounded-lg shadow",
              children: [
                a.jsx("h2", {
                  className: "text-2xl font-bold mb-4",
                  children: "Posts",
                }),
                l && a.jsx("p", { children: "Loading posts..." }),
                c && a.jsx("p", { children: "Failed to load posts" }),
                !o || o.length === 0
                  ? a.jsx("p", { children: "No posts available" })
                  : o.map((h) => a.jsx(tR, { post: h }, h._id)),
              ],
            }),
            a.jsxs("div", {
              className: "col-span-4 bg-white p-4 rounded-lg shadow-2xl",
              children: [
                a.jsx(X_, { userData: f, isOwnProfile: d, onSave: u }),
                a.jsx(J_, { userData: f, isOwnProfile: d, onSave: u }),
                a.jsx(Z_, { userData: f, isOwnProfile: d, onSave: u }),
                a.jsx(eR, { userData: f, isOwnProfile: d, onSave: u }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  l1 = (e) => {
    let t;
    const n = new Set(),
      r = (u, d) => {
        const f = typeof u == "function" ? u(t) : u;
        if (!Object.is(f, t)) {
          const h = t;
          (t =
            d ?? (typeof f != "object" || f === null)
              ? f
              : Object.assign({}, t, f)),
            n.forEach((m) => m(t, h));
        }
      },
      s = () => t,
      l = {
        setState: r,
        getState: s,
        getInitialState: () => c,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      c = (t = e(r, s, l));
    return l;
  },
  rR = (e) => (e ? l1(e) : l1),
  sR = (e) => e;
function iR(e, t = sR) {
  const n = wn.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return wn.useDebugValue(n), n;
}
const c1 = (e) => {
    const t = rR(e),
      n = (r) => iR(t, r);
    return Object.assign(n, t), n;
  },
  oR = (e) => (e ? c1(e) : c1),
  Nn = Object.create(null);
Nn.open = "0";
Nn.close = "1";
Nn.ping = "2";
Nn.pong = "3";
Nn.message = "4";
Nn.upgrade = "5";
Nn.noop = "6";
const Vl = Object.create(null);
Object.keys(Nn).forEach((e) => {
  Vl[Nn[e]] = e;
});
const ch = { type: "error", data: "parser error" },
  zb =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Vb = typeof ArrayBuffer == "function",
  Ub = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  ip = ({ type: e, data: t }, n, r) =>
    zb && t instanceof Blob
      ? n
        ? r(t)
        : u1(t, r)
      : Vb && (t instanceof ArrayBuffer || Ub(t))
      ? n
        ? r(t)
        : u1(new Blob([t]), r)
      : r(Nn[e] + (t || "")),
  u1 = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(",")[1];
        t("b" + (r || ""));
      }),
      n.readAsDataURL(e)
    );
  };
function d1(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let xd;
function aR(e, t) {
  if (zb && e.data instanceof Blob)
    return e.data.arrayBuffer().then(d1).then(t);
  if (Vb && (e.data instanceof ArrayBuffer || Ub(e.data))) return t(d1(e.data));
  ip(e, !1, (n) => {
    xd || (xd = new TextEncoder()), t(xd.encode(n));
  });
}
const f1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  vo = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < f1.length; e++) vo[f1.charCodeAt(e)] = e;
const lR = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      s = 0,
      i,
      o,
      l,
      c;
    e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
    const u = new ArrayBuffer(t),
      d = new Uint8Array(u);
    for (r = 0; r < n; r += 4)
      (i = vo[e.charCodeAt(r)]),
        (o = vo[e.charCodeAt(r + 1)]),
        (l = vo[e.charCodeAt(r + 2)]),
        (c = vo[e.charCodeAt(r + 3)]),
        (d[s++] = (i << 2) | (o >> 4)),
        (d[s++] = ((o & 15) << 4) | (l >> 2)),
        (d[s++] = ((l & 3) << 6) | (c & 63));
    return u;
  },
  cR = typeof ArrayBuffer == "function",
  op = (e, t) => {
    if (typeof e != "string") return { type: "message", data: $b(e, t) };
    const n = e.charAt(0);
    return n === "b"
      ? { type: "message", data: uR(e.substring(1), t) }
      : Vl[n]
      ? e.length > 1
        ? { type: Vl[n], data: e.substring(1) }
        : { type: Vl[n] }
      : ch;
  },
  uR = (e, t) => {
    if (cR) {
      const n = lR(e);
      return $b(n, t);
    } else return { base64: !0, data: e };
  },
  $b = (e, t) => {
    switch (t) {
      case "blob":
        return e instanceof Blob ? e : new Blob([e]);
      case "arraybuffer":
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  Hb = "",
  dR = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let s = 0;
    e.forEach((i, o) => {
      ip(i, !1, (l) => {
        (r[o] = l), ++s === n && t(r.join(Hb));
      });
    });
  },
  fR = (e, t) => {
    const n = e.split(Hb),
      r = [];
    for (let s = 0; s < n.length; s++) {
      const i = op(n[s], t);
      if ((r.push(i), i.type === "error")) break;
    }
    return r;
  };
function hR() {
  return new TransformStream({
    transform(e, t) {
      aR(e, (n) => {
        const r = n.length;
        let s;
        if (r < 126)
          (s = new Uint8Array(1)), new DataView(s.buffer).setUint8(0, r);
        else if (r < 65536) {
          s = new Uint8Array(3);
          const i = new DataView(s.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          s = new Uint8Array(9);
          const i = new DataView(s.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (s[0] |= 128),
          t.enqueue(s),
          t.enqueue(n);
      });
    },
  });
}
let vd;
function pl(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function gl(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let s = 0; s < t; s++)
    (n[s] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function mR(e, t) {
  vd || (vd = new TextDecoder());
  const n = [];
  let r = 0,
    s = -1,
    i = !1;
  return new TransformStream({
    transform(o, l) {
      for (n.push(o); ; ) {
        if (r === 0) {
          if (pl(n) < 1) break;
          const c = gl(n, 1);
          (i = (c[0] & 128) === 128),
            (s = c[0] & 127),
            s < 126 ? (r = 3) : s === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (pl(n) < 2) break;
          const c = gl(n, 2);
          (s = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (pl(n) < 8) break;
          const c = gl(n, 8),
            u = new DataView(c.buffer, c.byteOffset, c.length),
            d = u.getUint32(0);
          if (d > Math.pow(2, 21) - 1) {
            l.enqueue(ch);
            break;
          }
          (s = d * Math.pow(2, 32) + u.getUint32(4)), (r = 3);
        } else {
          if (pl(n) < s) break;
          const c = gl(n, s);
          l.enqueue(op(i ? c : vd.decode(c), t)), (r = 0);
        }
        if (s === 0 || s > e) {
          l.enqueue(ch);
          break;
        }
      }
    },
  });
}
const qb = 4;
function Ae(e) {
  if (e) return pR(e);
}
function pR(e) {
  for (var t in Ae.prototype) e[t] = Ae.prototype[t];
  return e;
}
Ae.prototype.on = Ae.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
  );
};
Ae.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
Ae.prototype.off =
  Ae.prototype.removeListener =
  Ae.prototype.removeAllListeners =
  Ae.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + e], this;
      for (var r, s = 0; s < n.length; s++)
        if (((r = n[s]), r === t || r.fn === t)) {
          n.splice(s, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks["$" + e], this;
    };
Ae.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks["$" + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, s = n.length; r < s; ++r) n[r].apply(this, t);
  }
  return this;
};
Ae.prototype.emitReserved = Ae.prototype.emit;
Ae.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + e] || []
  );
};
Ae.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const ou =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0),
  Vt =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  gR = "arraybuffer";
function Wb(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const yR = Vt.setTimeout,
  xR = Vt.clearTimeout;
function au(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = yR.bind(Vt)), (e.clearTimeoutFn = xR.bind(Vt)))
    : ((e.setTimeoutFn = Vt.setTimeout.bind(Vt)),
      (e.clearTimeoutFn = Vt.clearTimeout.bind(Vt)));
}
const vR = 1.33;
function wR(e) {
  return typeof e == "string"
    ? bR(e)
    : Math.ceil((e.byteLength || e.size) * vR);
}
function bR(e) {
  let t = 0,
    n = 0;
  for (let r = 0, s = e.length; r < s; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function Kb() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function SR(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
  return t;
}
function kR(e) {
  let t = {},
    n = e.split("&");
  for (let r = 0, s = n.length; r < s; r++) {
    let i = n[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class CR extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = "TransportError");
  }
}
class ap extends Ae {
  constructor(t) {
    super(),
      (this.writable = !1),
      au(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64);
  }
  onError(t, n, r) {
    return super.emitReserved("error", new CR(t, n, r)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const n = op(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const n = SR(t);
    return n.length ? "?" + n : "";
  }
}
class ER extends ap {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      (this.readyState = "paused"), t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling &&
        (r++,
        this.once("pollComplete", function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once("drain", function () {
            --r || n();
          }));
    } else n();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === "opening" && r.type === "open" && this.onOpen(),
        r.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(r);
    };
    fR(t, this.socket.binaryType).forEach(n),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      dR(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Kb()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
}
let Yb = !1;
try {
  Yb = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const NR = Yb;
function jR() {}
class TR extends ER {
  constructor(t) {
    if ((super(t), typeof location < "u")) {
      const n = location.protocol === "https:";
      let r = location.port;
      r || (r = n ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          r !== t.port);
    }
  }
  doWrite(t, n) {
    const r = this.request({ method: "POST", data: t });
    r.on("success", n),
      r.on("error", (s, i) => {
        this.onError("xhr post error", s, i);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (n, r) => {
        this.onError("xhr poll error", n, r);
      }),
      (this.pollXhr = t);
  }
}
let oi = class Ul extends Ae {
  constructor(t, n, r) {
    super(),
      (this.createRequest = t),
      au(this, r),
      (this._opts = r),
      (this._method = r.method || "GET"),
      (this._uri = n),
      (this._data = r.data !== void 0 ? r.data : null),
      this._create();
  }
  _create() {
    var t;
    const n = Wb(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    n.xdomain = !!this._opts.xd;
    const r = (this._xhr = this.createRequest(n));
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let s in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(s) &&
              r.setRequestHeader(s, this._opts.extraHeaders[s]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        "withCredentials" in r &&
          (r.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
        (r.onreadystatechange = () => {
          var s;
          r.readyState === 3 &&
            ((s = this._opts.cookieJar) === null ||
              s === void 0 ||
              s.parseCookies(r.getResponseHeader("set-cookie"))),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof r.status == "number" ? r.status : 0);
                  }, 0));
        }),
        r.send(this._data);
    } catch (s) {
      this.setTimeoutFn(() => {
        this._onError(s);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = Ul.requestsCount++), (Ul.requests[this._index] = this));
  }
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = jR), t))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete Ul.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
};
oi.requestsCount = 0;
oi.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", h1);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Vt ? "pagehide" : "unload";
    addEventListener(e, h1, !1);
  }
}
function h1() {
  for (let e in oi.requests)
    oi.requests.hasOwnProperty(e) && oi.requests[e].abort();
}
const PR = (function () {
  const e = Qb({ xdomain: !1 });
  return e && e.responseType !== null;
})();
class AR extends TR {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = PR && !n;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new oi(Qb, this.uri(), t)
    );
  }
}
function Qb(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || NR)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Vt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const Gb =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class _R extends ap {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      n = this.opts.protocols,
      r = Gb
        ? {}
        : Wb(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, r);
    } catch (s) {
      return this.emitReserved("error", s);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        s = n === t.length - 1;
      ip(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {}
        s &&
          ou(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Kb()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
}
const wd = Vt.WebSocket || Vt.MozWebSocket;
class RR extends _R {
  createSocket(t, n, r) {
    return Gb ? new wd(t, n, r) : n ? new wd(t, n) : new wd(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class OR extends ap {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((t) => {
        this.onError("webtransport error", t);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t) => {
          const n = mR(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            s = hR();
          s.readable.pipeTo(t.writable),
            (this._writer = s.writable.getWriter());
          const i = () => {
            r.read()
              .then(({ done: l, value: c }) => {
                l || (this.onPacket(c), i());
              })
              .catch((l) => {});
          };
          i();
          const o = { type: "open" };
          this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(o).then(() => this.onOpen());
        });
      });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        s = n === t.length - 1;
      this._writer.write(r).then(() => {
        s &&
          ou(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const MR = { websocket: RR, webtransport: OR, polling: AR },
  DR =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  LR = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function uh(e) {
  if (e.length > 8e3) throw "URI too long";
  const t = e,
    n = e.indexOf("["),
    r = e.indexOf("]");
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ";") +
      e.substring(r, e.length));
  let s = DR.exec(e || ""),
    i = {},
    o = 14;
  for (; o--; ) i[LR[o]] = s[o] || "";
  return (
    n != -1 &&
      r != -1 &&
      ((i.source = t),
      (i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":")),
      (i.authority = i.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (i.ipv6uri = !0)),
    (i.pathNames = FR(i, i.path)),
    (i.queryKey = IR(i, i.query)),
    i
  );
}
function FR(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
  );
}
function IR(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, s, i) {
      s && (n[s] = i);
    }),
    n
  );
}
const dh =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  $l = [];
dh &&
  addEventListener(
    "offline",
    () => {
      $l.forEach((e) => e());
    },
    !1
  );
class Pr extends Ae {
  constructor(t, n) {
    if (
      (super(),
      (this.binaryType = gR),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((n = t), (t = null)),
      t)
    ) {
      const r = uh(t);
      (n.hostname = r.host),
        (n.secure = r.protocol === "https" || r.protocol === "wss"),
        (n.port = r.port),
        r.query && (n.query = r.query);
    } else n.host && (n.hostname = uh(n.host).host);
    au(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < "u" && location.protocol === "https:"),
      n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
      (this.hostname =
        n.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        n.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      n.transports.forEach((r) => {
        const s = r.prototype.name;
        this.transports.push(s), (this._transportsByName[s] = r);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = kR(this.opts.query)),
      dh &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          $l.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = qb), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new this._transportsByName[t](r);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t =
      this.opts.rememberUpgrade &&
      Pr.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (n) => this._onClose("transport close", n));
  }
  onOpen() {
    (this.readyState = "open"),
      (Pr.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          (n.code = t.data), this._onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this._pingInterval = t.pingInterval),
      (this._pingTimeout = t.pingTimeout),
      (this._maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + t),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, t)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this._getWritablePackets();
      this.transport.send(t),
        (this._prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const s = this.writeBuffer[r].data;
      if ((s && (n += wR(s)), r > 0 && n > this._maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return (
      t &&
        ((this._pingTimeoutTime = 0),
        ou(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      t
    );
  }
  write(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  send(t, n, r) {
    return this._sendPacket("message", t, n, r), this;
  }
  _sendPacket(t, n, r, s) {
    if (
      (typeof n == "function" && ((s = n), (n = void 0)),
      typeof r == "function" && ((s = r), (r = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const i = { type: t, data: n, options: r };
    this.emitReserved("packetCreate", i),
      this.writeBuffer.push(i),
      s && this.once("flush", s),
      this.flush();
  }
  close() {
    const t = () => {
        this._onClose("forced close"), this.transport.close();
      },
      n = () => {
        this.off("upgrade", n), this.off("upgradeError", n), t();
      },
      r = () => {
        this.once("upgrade", n), this.once("upgradeError", n);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  _onError(t) {
    if (
      ((Pr.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  _onClose(t, n) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        dh &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const r = $l.indexOf(this._offlineEventListener);
        r !== -1 && $l.splice(r, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, n),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
Pr.protocol = qb;
class BR extends Pr {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  _probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Pr.priorWebsocketSuccess = !1;
    const s = () => {
      r ||
        (n.send([{ type: "ping", data: "probe" }]),
        n.once("packet", (f) => {
          if (!r)
            if (f.type === "pong" && f.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", n), !n)
              )
                return;
              (Pr.priorWebsocketSuccess = n.name === "websocket"),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== "closed" &&
                      (d(),
                      this.setTransport(n),
                      n.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const h = new Error("probe error");
              (h.transport = n.name), this.emitReserved("upgradeError", h);
            }
        }));
    };
    function i() {
      r || ((r = !0), d(), n.close(), (n = null));
    }
    const o = (f) => {
      const h = new Error("probe error: " + f);
      (h.transport = n.name), i(), this.emitReserved("upgradeError", h);
    };
    function l() {
      o("transport closed");
    }
    function c() {
      o("socket closed");
    }
    function u(f) {
      n && f.name !== n.name && i();
    }
    const d = () => {
      n.removeListener("open", s),
        n.removeListener("error", o),
        n.removeListener("close", l),
        this.off("close", c),
        this.off("upgrading", u);
    };
    n.once("open", s),
      n.once("error", o),
      n.once("close", l),
      this.once("close", c),
      this.once("upgrading", u),
      this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onHandshake(t) {
    (this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t);
  }
  _filterUpgrades(t) {
    const n = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
}
let zR = class extends BR {
  constructor(t, n = {}) {
    const r = typeof t == "object" ? t : n;
    (!r.transports || (r.transports && typeof r.transports[0] == "string")) &&
      (r.transports = (r.transports || ["polling", "websocket", "webtransport"])
        .map((s) => MR[s])
        .filter((s) => !!s)),
      super(t, r);
  }
};
function VR(e, t = "", n) {
  let r = e;
  (n = n || (typeof location < "u" && location)),
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" &&
      (e.charAt(0) === "/" &&
        (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < "u" ? (e = n.protocol + "//" + e) : (e = "https://" + e)),
      (r = uh(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = "80")
        : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    (r.path = r.path || "/");
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return (
    (r.id = r.protocol + "://" + i + ":" + r.port + t),
    (r.href =
      r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port)),
    r
  );
}
const UR = typeof ArrayBuffer == "function",
  $R = (e) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Xb = Object.prototype.toString,
  HR =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Xb.call(Blob) === "[object BlobConstructor]"),
  qR =
    typeof File == "function" ||
    (typeof File < "u" && Xb.call(File) === "[object FileConstructor]");
function lp(e) {
  return (
    (UR && (e instanceof ArrayBuffer || $R(e))) ||
    (HR && e instanceof Blob) ||
    (qR && e instanceof File)
  );
}
function Hl(e, t) {
  if (!e || typeof e != "object") return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (Hl(e[n])) return !0;
    return !1;
  }
  if (lp(e)) return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Hl(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Hl(e[n])) return !0;
  return !1;
}
function WR(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = fh(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function fh(e, t) {
  if (!e) return e;
  if (lp(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = fh(e[r], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = fh(e[r], t));
    return n;
  }
  return e;
}
function KR(e, t) {
  return (e.data = hh(e.data, t)), delete e.attachments, e;
}
function hh(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = hh(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = hh(e[n], t));
  return e;
}
const YR = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  QR = 5;
var ee;
(function (e) {
  (e[(e.CONNECT = 0)] = "CONNECT"),
    (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
    (e[(e.EVENT = 2)] = "EVENT"),
    (e[(e.ACK = 3)] = "ACK"),
    (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(ee || (ee = {}));
class GR {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === ee.EVENT || t.type === ee.ACK) && Hl(t)
      ? this.encodeAsBinary({
          type: t.type === ee.EVENT ? ee.BINARY_EVENT : ee.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = "" + t.type;
    return (
      (t.type === ee.BINARY_EVENT || t.type === ee.BINARY_ACK) &&
        (n += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = WR(t),
      r = this.encodeAsString(n.packet),
      s = n.buffers;
    return s.unshift(r), s;
  }
}
function m1(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class cp extends Ae {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const r = n.type === ee.BINARY_EVENT;
      r || n.type === ee.BINARY_ACK
        ? ((n.type = r ? ee.EVENT : ee.ACK),
          (this.reconstructor = new XR(n)),
          n.attachments === 0 && super.emitReserved("decoded", n))
        : super.emitReserved("decoded", n);
    } else if (lp(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved("decoded", n));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (ee[r.type] === void 0) throw new Error("unknown packet type " + r.type);
    if (r.type === ee.BINARY_EVENT || r.type === ee.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; );
      const o = t.substring(i, n);
      if (o != Number(o) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(o);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); );
      r.nsp = t.substring(i, n);
    } else r.nsp = "/";
    const s = t.charAt(n + 1);
    if (s !== "" && Number(s) == s) {
      const i = n + 1;
      for (; ++n; ) {
        const o = t.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (cp.isPayloadValid(r.type, i)) r.data = i;
      else throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case ee.CONNECT:
        return m1(n);
      case ee.DISCONNECT:
        return n === void 0;
      case ee.CONNECT_ERROR:
        return typeof n == "string" || m1(n);
      case ee.EVENT:
      case ee.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == "number" ||
            (typeof n[0] == "string" && YR.indexOf(n[0]) === -1))
        );
      case ee.ACK:
      case ee.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class XR {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = KR(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const JR = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: cp,
      Encoder: GR,
      get PacketType() {
        return ee;
      },
      protocol: QR,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function tn(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const ZR = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Jb extends Ae {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      tn(t, "open", this.onopen.bind(this)),
      tn(t, "packet", this.onpacket.bind(this)),
      tn(t, "error", this.onerror.bind(this)),
      tn(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    var r, s, i;
    if (ZR.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const o = { type: ee.EVENT, data: n };
    if (
      ((o.options = {}),
      (o.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == "function")
    ) {
      const d = this.ids++,
        f = n.pop();
      this._registerAckCallback(d, f), (o.id = d);
    }
    const l =
        (s =
          (r = this.io.engine) === null || r === void 0
            ? void 0
            : r.transport) === null || s === void 0
          ? void 0
          : s.writable,
      c =
        this.connected &&
        !(
          !((i = this.io.engine) === null || i === void 0) &&
          i._hasPingExpired()
        );
    return (
      (this.flags.volatile && !l) ||
        (c
          ? (this.notifyOutgoingListeners(o), this.packet(o))
          : this.sendBuffer.push(o)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const s =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (s === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1);
        n.call(this, new Error("operation has timed out"));
      }, s),
      o = (...l) => {
        this.io.clearTimeoutFn(i), n.apply(this, l);
      };
    (o.withError = !0), (this.acks[t] = o);
  }
  emitWithAck(t, ...n) {
    return new Promise((r, s) => {
      const i = (o, l) => (o ? s(o) : r(l));
      (i.withError = !0), n.push(i), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((s, ...i) =>
      r !== this._queue[0]
        ? void 0
        : (s !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(s))
            : (this._queue.shift(), n && n(null, ...i)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: ee.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, n),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t],
          r.withError &&
            r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case ee.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case ee.EVENT:
        case ee.BINARY_EVENT:
          this.onevent(t);
          break;
        case ee.ACK:
        case ee.BINARY_ACK:
          this.onack(t);
          break;
        case ee.DISCONNECT:
          this.ondisconnect();
          break;
        case ee.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved("connect_error", r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...s) {
      r || ((r = !0), n.packet({ type: ee.ACK, id: t, data: s }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data));
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: ee.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function Vi(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
Vi.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
Vi.prototype.reset = function () {
  this.attempts = 0;
};
Vi.prototype.setMin = function (e) {
  this.ms = e;
};
Vi.prototype.setMax = function (e) {
  this.max = e;
};
Vi.prototype.setJitter = function (e) {
  this.jitter = e;
};
class mh extends Ae {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || "/socket.io"),
      (this.opts = n),
      au(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new Vi({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const s = n.parser || JR;
    (this.encoder = new s.Encoder()),
      (this.decoder = new s.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new zR(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const s = tn(n, "open", function () {
        r.onopen(), t && t();
      }),
      i = (l) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", l),
          t ? t(l) : this.maybeReconnectOnOpen();
      },
      o = tn(n, "error", i);
    if (this._timeout !== !1) {
      const l = this._timeout,
        c = this.setTimeoutFn(() => {
          s(), i(new Error("timeout")), n.close();
        }, l);
      this.opts.autoUnref && c.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(c);
        });
    }
    return this.subs.push(s), this.subs.push(o), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      tn(t, "ping", this.onping.bind(this)),
      tn(t, "data", this.ondata.bind(this)),
      tn(t, "error", this.onerror.bind(this)),
      tn(t, "close", this.onclose.bind(this)),
      tn(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  ondecoded(t) {
    ou(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Jb(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    var r;
    this.cleanup(),
      (r = this.engine) === null || r === void 0 || r.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((s) => {
              s
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", s))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const uo = {};
function Do(e, t) {
  typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
  const n = VR(e, t.path || "/socket.io"),
    r = n.source,
    s = n.id,
    i = n.path,
    o = uo[s] && i in uo[s].nsps,
    l = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let c;
  return (
    l ? (c = new mh(r, t)) : (uo[s] || (uo[s] = new mh(r, t)), (c = uo[s])),
    n.query && !t.query && (t.query = n.queryKey),
    c.socket(n.path, t)
  );
}
Object.assign(Do, { Manager: mh, Socket: Jb, io: Do, connect: Do });
const Xn = oR((e, t) => ({
    messages: [],
    users: [],
    onlineUsers: [],
    selectedUser: null,
    isUsersLoading: !1,
    isMessagesLoading: !1,
    socket: null,
    initSocket: (n) => {
      if (!(n != null && n._id) || t().socket) return;
      const r = Do("https://websitekolaborasiploy-production.up.railway.app/", {
        query: { userId: n._id },
      });
      e({ socket: r }),
        r.on("connect", () => {
          console.log("Socket terhubung dengan ID:", r.id);
        }),
        r.on("disconnect", () => {
          console.log("Socket terputus!");
        }),
        r.on("getOnlineUsers", (s) => {
          e({ onlineUsers: s });
        }),
        console.log("Socket diinisialisasi untuk user:", n._id);
    },
    setOnlineUsersListener: () => {
      const n = t().socket;
      n &&
        n.on("getOnlineUsers", (r) => {
          e({ onlineUsers: r });
        });
    },
    getUsers: async () => {
      e({ isUsersLoading: !0 });
      try {
        const n = await F.get("/connections");
        e({ users: n.data });
      } catch (n) {
        G.error(n.response.data.message);
      } finally {
        e({ isUsersLoading: !1 });
      }
    },
    getMessages: async (n) => {
      e({ isMessagesLoading: !0 });
      try {
        const r = await F.get(`/messages/${n}`);
        e({ messages: r.data });
      } catch (r) {
        G.error(r.response.data.message);
      } finally {
        e({ isMessagesLoading: !1 });
      }
    },
    getUserById: async (n) => {
      try {
        const r = await axios.get(`/connections/${n}`);
        e({ selectedUser: r.data });
      } catch (r) {
        console.error("Error fetching user:", r);
      }
    },
    sendMessage: async (n) => {
      const { selectedUser: r, messages: s, socket: i } = t();
      if (i)
        try {
          const o = await F.post(`/messages/send/${r._id}`, n);
          e({ messages: [...s, o.data] }), i.emit("sendMessage", o.data);
        } catch (o) {
          G.error(o.response.data.message);
        }
    },
    subscribeToMessages: () => {
      const { selectedUser: n, socket: r } = t();
      !n ||
        !r ||
        r.on("newMessage", (s) => {
          s.senderId === n._id && e({ messages: [...t().messages, s] });
        });
    },
    unsubscribeFromMessages: () => {
      const { socket: n } = t();
      n && n.off("newMessage");
    },
    setSelectedUser: (n) => e({ selectedUser: n }),
  })),
  Zb = () => {
    const e = Array(8).fill(null);
    return a.jsxs("aside", {
      className: `h-full w-20 lg:w-72 border-r border-base-300 \r
    flex flex-col transition-all duration-200`,
      children: [
        a.jsx("div", {
          className: "border-b border-base-300 w-full p-5",
          children: a.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              a.jsx(ks, { className: "w-6 h-6" }),
              a.jsx("span", {
                className: "font-medium hidden lg:block",
                children: "Contacts",
              }),
            ],
          }),
        }),
        a.jsx("div", {
          className: "overflow-y-auto w-full py-3",
          children: e.map((t, n) =>
            a.jsxs(
              "div",
              {
                className: "w-full p-3 flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    className: "relative mx-auto lg:mx-0",
                    children: a.jsx("div", {
                      className: "skeleton size-12 rounded-full",
                    }),
                  }),
                  a.jsxs("div", {
                    className: "hidden lg:block text-left min-w-0 flex-1",
                    children: [
                      a.jsx("div", { className: "skeleton h-4 w-32 mb-2" }),
                      a.jsx("div", { className: "skeleton h-3 w-16" }),
                    ],
                  }),
                ],
              },
              n
            )
          ),
        }),
      ],
    });
  },
  e7 = ({ isSidebarOpen: e, setSidebarOpen: t }) => {
    Re();
    const {
        getUsers: n,
        users: r,
        selectedUser: s,
        setSelectedUser: i,
        isUsersLoading: o,
        onlineUsers: l,
      } = Xn(),
      [c, u] = b.useState(!1),
      [d, f] = b.useState({});
    b.useEffect(() => {
      const v = async () => {
        const w = {};
        for (const g of r)
          try {
            const p = await F.get(
              `/notifications/messages/unread-count/${g._id}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            w[g._id] = p.data.count;
          } catch (p) {
            console.error("Gagal fetch unread count:", p);
          }
        f(w);
      };
      r.length > 0 && v();
    }, [r]),
      b.useEffect(() => {
        n();
      }, [n]);
    const h = b.useMemo(
        () => (c ? r.filter((v) => l.includes(v._id)) : r),
        [r, l, c]
      ),
      m = b.useCallback(
        async (v) => {
          try {
            await F.put(`/notifications/message/read/${v._id}`),
              i(v),
              f((w) => ({ ...w, [v._id]: 0 }));
          } catch (w) {
            console.error("Error marking messages as read:", w);
          }
        },
        [i]
      );
    if (o) return a.jsx(Zb, {});
    const y = () => t(!1);
    return a.jsxs("aside", {
      className: `
    fixed top-16 left-0 h-[calc(100%-4rem)] w-full bg-gray-400 z-40
    transform transition-transform duration-300 ease-in-out
    ${e ? "translate-x-0" : "-translate-x-full"}
    lg:relative lg:top-0 lg:h-full lg:translate-x-0 lg:w-72
    h-[100vh] overflow-y-auto
  `,
      children: [
        a.jsxs("div", {
          className: "border-b border-white w-full p-5 bg-[#3FA3CE] text-white",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                a.jsx(ks, { className: "size-6" }),
                a.jsx("span", {
                  className: "font-medium block",
                  children: "Daftar Teman Anda",
                }),
              ],
            }),
            a.jsxs("div", {
              className: "mt-3 flex items-center gap-2",
              children: [
                a.jsxs("label", {
                  className: "cursor-pointer flex items-center gap-2",
                  children: [
                    a.jsx("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: (v) => u(v.target.checked),
                      className: "checkbox checkbox-sm",
                    }),
                    a.jsx("span", {
                      className: "text-sm",
                      children: "Hanya Tampil Online",
                    }),
                  ],
                }),
                a.jsxs("span", {
                  className: "text-sm text-green-300 font-medium",
                  children: ["(", Math.max(l.length - 1, 0), " online)"],
                }),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className: "overflow-y-auto w-full py-3",
          children: h.map((v) =>
            a.jsxs(
              "button",
              {
                onClick: () => {
                  m(v), y();
                },
                className: `
                w-full p-3 flex items-center gap-3
                hover:bg-[#A8A8A8] transition-colors
                ${
                  (s == null ? void 0 : s._id) === v._id
                    ? "bg-[#828282] ring-1 ring-base-300"
                    : ""
                }
              `,
                children: [
                  a.jsxs("div", {
                    className: "relative mx-0",
                    children: [
                      a.jsx("img", {
                        src: v.profilePicture || "/avatar.png",
                        alt: v.name,
                        className: "size-12 object-cover rounded-full",
                      }),
                      d[v._id] > 0 &&
                        a.jsx("span", {
                          className:
                            "absolute -top-1 -right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full",
                          children: d[v._id],
                        }),
                      l.includes(v._id) &&
                        a.jsx("span", {
                          className:
                            "absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900",
                        }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "block text-left min-w-0",
                    children: [
                      a.jsx("div", {
                        className:
                          "font-medium truncate text-[#145C75] text-sm sm:text-base",
                        children: v.name,
                      }),
                      a.jsx("div", {
                        className: "text-xs text-green-200 sm:text-sm",
                        children: l.includes(v._id) ? "Online" : "Offline",
                      }),
                    ],
                  }),
                ],
              },
              v._id
            )
          ),
        }),
      ],
    });
  },
  t7 = () =>
    a.jsx("div", {
      className:
        "w-full flex flex-1 flex-col items-center justify-center p-16 bg-[#E6E6FA]/50",
      children: a.jsxs("div", {
        className: "max-w-md text-center space-y-6",
        children: [
          a.jsx("div", {
            className: "flex justify-center gap-4 mb-4",
            children: a.jsx("div", {
              className: "relative",
              children: a.jsx("div", {
                className: `w-16 h-16 rounded-2xl bg-primary/10 flex items-center\r
             justify-center animate-bounce`,
                children: a.jsx(Bv, { className: "w-8 h-8 text-primary " }),
              }),
            }),
          }),
          a.jsx("h2", {
            className: "text-2xl font-bold",
            children: "Welcome to Chatty!",
          }),
          a.jsx("p", {
            className: "text-base-content/60",
            children:
              "Select a conversation from the sidebar to start chatting",
          }),
        ],
      }),
    }),
  p1 = () => {
    const { selectedUser: e, setSelectedUser: t, onlineUsers: n } = Xn();
    return e
      ? a.jsx("div", {
          className: "p-2.5 border-b border-white bg-[#3FA3CE]",
          children: a.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    className: "avatar",
                    children: a.jsx("div", {
                      className: "size-10 rounded-full relative",
                      children: a.jsx("img", {
                        src:
                          (e == null ? void 0 : e.profilePicture) ||
                          "/avatar.png",
                        alt: (e == null ? void 0 : e.name) || "User",
                      }),
                    }),
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", {
                        className: "font-medium",
                        children: (e == null ? void 0 : e.name) || "Unknown",
                      }),
                      a.jsx("p", {
                        className:
                          "text-sm text-base-content/70 text-green-300",
                        children: n.includes(e == null ? void 0 : e._id)
                          ? "Online"
                          : "Offline",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("button", {
                onClick: () => t(null),
                className: "hidden lg:block",
                children: a.jsx(Gn, {}),
              }),
            ],
          }),
        })
      : null;
  },
  g1 = () => {
    const [e, t] = b.useState(""),
      [n, r] = b.useState(null),
      s = b.useRef(null),
      { sendMessage: i } = Xn(),
      { quill: o, quillRef: l } = vb({
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, !1] }],
              [{ font: [] }, { size: [] }],
              ["bold", "italic", "underline", "strike"],
              [{ color: [] }, { background: [] }],
              [{ script: "sub" }, { script: "super" }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["blockquote", "code-block"],
              ["link"],
              ["clean"],
            ],
          },
          clipboard: { matchVisual: !1 },
        },
        formats: [
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "color",
          "background",
          "script",
          "list",
          "blockquote",
          "code-block",
          "link",
        ],
        theme: "snow",
        placeholder: "Type a message...",
      }),
      c = (f) => {
        var y;
        const h = f.target.files[0];
        if (
          !((y = h == null ? void 0 : h.type) != null && y.startsWith("image/"))
        ) {
          G.error("Please select an image file");
          return;
        }
        const m = new FileReader();
        (m.onloadend = () => {
          r(m.result);
        }),
          m.readAsDataURL(h);
      },
      u = () => {
        r(null), s.current && (s.current.value = "");
      },
      d = async (f) => {
        if ((f.preventDefault(), !o)) return;
        const h = o.root.innerHTML,
          m = Eb.sanitize(h);
        if (!(!m.replace(/<(.|\n)*?>/g, "").trim() && !n))
          try {
            await i({ text: m, image: n }),
              o.setText(""),
              r(null),
              s.current && (s.current.value = "");
          } catch (v) {
            console.error("Failed to send message:", v);
          }
      };
    return (
      b.useEffect(() => {
        const f = {
          bold: "Tebal: Membuat teks jadi tebal",
          italic: "Miring: Membuat teks miring",
          underline: "Garis bawah: Memberi garis bawah",
          strike: "Coret: Menandai teks dengan coretan",
          link: "Tautan: Menyisipkan hyperlink",
          "code-block": "Blok kode: Format teks seperti kode",
          blockquote: "Kutipan: Menyorot kutipan",
          clean: "Bersihkan: Menghapus semua format teks",
          list: "Nomor: Buat daftar bernomor",
          bullet: "Poin: Buat daftar dengan poin",
          "indent-1": "Geser kiri: Mengurangi indentasi",
          "indent+1": "Geser kanan: Menambah indentasi",
          align: "Rata: Mengatur perataan teks",
          background: "Warna latar: Ganti warna latar belakang teks",
          color: "Warna teks: Ganti warna teks",
          script: "Sub/Superscript: Format pangkat bawah/atas",
          font: "Font: Pilih jenis huruf",
          size: "Ukuran: Atur besar kecil huruf",
          header: "Judul: Atur level heading",
          direction: "Arah tulisan: Kanan ke kiri / kiri ke kanan",
        };
        if (
          (document
            .querySelectorAll(".ql-toolbar button, .ql-toolbar select")
            .forEach((y) => {
              const v = Array.from(y.classList).find((w) =>
                w.startsWith("ql-")
              );
              if (v) {
                const w = v.replace("ql-", "");
                !y.hasAttribute("aria-label") &&
                  f[w] &&
                  y.setAttribute("aria-label", f[w]);
              }
            }),
          !o)
        )
          return;
        const m = () => {
          const y = o.getText().trim();
          t(y);
        };
        return (
          o.on("text-change", m),
          () => {
            o.off("text-change", m);
          }
        );
      }, [o]),
      a.jsx("div", {
        className: "w-full flex justify-center p-2 shadow-lg",
        children: a.jsxs("form", {
          onSubmit: d,
          className:
            "flex flex-col gap-3 w-[full] max-w-[80vw] md:max-w-[65vw]",
          children: [
            a.jsx("div", {
              ref: l,
              className: "bg-white rounded-md custom-editor",
            }),
            n &&
              a.jsx("div", {
                className: "flex items-center gap-2",
                children: a.jsxs("div", {
                  className: "relative",
                  children: [
                    a.jsx("img", {
                      src: n,
                      alt: "Preview",
                      className: "w-20 h-20 object-cover rounded-lg border",
                    }),
                    a.jsx("button", {
                      onClick: u,
                      className:
                        "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center",
                      type: "button",
                      children: a.jsx(Gn, { className: "size-4" }),
                    }),
                  ],
                }),
              }),
            a.jsxs("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                a.jsxs("button", {
                  type: "button",
                  className: `btn btn-sm btn-outline ${
                    n ? "text-emerald-500" : "text-zinc-400"
                  }`,
                  onClick: () => {
                    var f;
                    return (f = s.current) == null ? void 0 : f.click();
                  },
                  children: [
                    a.jsx(Fv, { size: 20, className: "mr-1" }),
                    "Upload Gambar",
                  ],
                }),
                a.jsx("input", {
                  type: "file",
                  accept: "image/*",
                  className: "hidden",
                  ref: s,
                  onChange: c,
                }),
                a.jsxs("button", {
                  type: "submit",
                  className: "btn btn-primary btn-sm",
                  disabled: e.length === 0 && !n,
                  children: [
                    a.jsx(Sm, { size: 20, className: "mr-1" }),
                    "Kirim",
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  n7 = () => {
    const e = Array(6).fill(null);
    return a.jsx("div", {
      className: "flex-1 overflow-y-auto p-4 space-y-4",
      children: e.map((t, n) =>
        a.jsxs(
          "div",
          {
            className: `chat ${n % 2 === 0 ? "chat-start" : "chat-end"}`,
            children: [
              a.jsx("div", {
                className: "chat-image avatar",
                children: a.jsx("div", {
                  className: "size-10 rounded-full",
                  children: a.jsx("div", {
                    className: "skeleton w-full h-full rounded-full",
                  }),
                }),
              }),
              a.jsx("div", {
                className: "chat-header mb-1",
                children: a.jsx("div", { className: "skeleton h-4 w-16" }),
              }),
              a.jsx("div", {
                className: "chat-bubble bg-transparent p-0",
                children: a.jsx("div", {
                  className: "skeleton h-16 w-[200px]",
                }),
              }),
            ],
          },
          n
        )
      ),
    });
  };
function r7(e) {
  return new Date(e).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
const s7 = async () => (await F.get("/auth/me")).data,
  eS = () => {
    const {
        data: e,
        isLoading: t,
        isError: n,
      } = ie({ queryKey: ["authUser"], queryFn: s7, staleTime: 3e5 }),
      {
        messages: r,
        getMessages: s,
        isMessagesLoading: i,
        selectedUser: o,
        subscribeToMessages: l,
        unsubscribeFromMessages: c,
        initSocket: u,
      } = Xn(),
      d = b.useRef(null);
    return (
      b.useEffect(() => {
        u();
      }, []),
      b.useEffect(
        () => (o != null && o._id && (s(o._id), l()), () => c()),
        [o == null ? void 0 : o._id, s, l, c]
      ),
      b.useEffect(() => {
        d.current && d.current.scrollIntoView({ behavior: "smooth" });
      }, [r]),
      t || i
        ? a.jsxs("div", {
            className: "flex-1 flex flex-col overflow-auto",
            children: [a.jsx(p1, {}), a.jsx(n7, {}), a.jsx(g1, {})],
          })
        : n
        ? a.jsx("p", {
            className: "text-red-500 text-center",
            children: "Gagal mengambil data pengguna!",
          })
        : a.jsxs("div", {
            className: "flex-1 flex flex-col overflow-auto",
            children: [
              a.jsx(p1, {}),
              a.jsx("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                children: r.map((f) =>
                  a.jsxs(
                    "div",
                    {
                      className: `chat ${
                        f.senderId === e._id ? "chat-end" : "chat-start"
                      }`,
                      ref: d,
                      children: [
                        a.jsx("div", {
                          className: "chat-image avatar",
                          children: a.jsx("div", {
                            className: "size-10 rounded-full border",
                            children: a.jsx("img", {
                              src:
                                f.senderId === e._id
                                  ? e.profilePicture || "/avatar.png"
                                  : (o == null ? void 0 : o.profilePicture) ||
                                    "/avatar.png",
                              alt: "profile picture",
                            }),
                          }),
                        }),
                        a.jsx("div", {
                          className: "chat-header mb-1",
                          children: a.jsx("time", {
                            className: "text-xs opacity-50 ml-1",
                            children: r7(f.createdAt),
                          }),
                        }),
                        a.jsxs("div", {
                          className:
                            "chat-bubble flex flex-col bg-[#EF8B8B] text-white break-words",
                          children: [
                            f.image &&
                              a.jsx("img", {
                                src: f.image,
                                alt: "Attachment",
                                className: "sm:max-w-[200px] rounded-md mb-2",
                              }),
                            f.text &&
                              a.jsx("div", {
                                className:
                                  "prose max-w-none break-words whitespace-pre-wrap overflow-hidden",
                                dangerouslySetInnerHTML: { __html: f.text },
                              }),
                          ],
                        }),
                      ],
                    },
                    f._id
                  )
                ),
              }),
              a.jsx(g1, {}),
            ],
          })
    );
  },
  i7 = () => {
    const t = Re().getQueryData(["authUser"]),
      { initSocket: n, setOnlineUsersListener: r, socket: s } = Xn();
    return (
      b.useEffect(() => {
        t != null && t._id && !s && (n(t), r());
      }, [t, n, s]),
      t != null && t._id
        ? a.jsx(o7, {})
        : a.jsx("div", {
            className:
              "h-screen flex items-center justify-center text-lg font-semibold text-gray-700 animate-pulse",
            children: "Loading...",
          })
    );
  },
  o7 = () => {
    const { socket: e, selectedUser: t } = Xn(),
      [n, r] = b.useState(!1);
    return (
      b.useEffect(() => {
        let s = 0,
          i = 0;
        const o = (u) => {
            s = u.touches[0].clientX;
          },
          l = (u) => {
            i = u.touches[0].clientX;
          },
          c = () => {
            i - s > 80 && r(!0);
          };
        return (
          window.addEventListener("touchstart", o),
          window.addEventListener("touchmove", l),
          window.addEventListener("touchend", c),
          () => {
            window.removeEventListener("touchstart", o),
              window.removeEventListener("touchmove", l),
              window.removeEventListener("touchend", c);
          }
        );
      }, []),
      b.useEffect(() => {
        window.innerWidth < 1024 && r(!0);
      }, []),
      a.jsxs("div", {
        className:
          "fixed inset-0 top-16 w-screen h-[calc(100vh-64px)] flex items-center justify-center bg-[#E6E6FA] z-10 py-2",
        children: [
          n &&
            a.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden",
              onClick: () => r(!1),
            }),
          a.jsx("button", {
            onClick: () => r(!0),
            className: `absolute -left-3 top-1/2 transform -translate-y-1/2 z-40 \r
        bg-white rounded-full shadow-lg p-2 hover:bg-gray-100 transition lg:hidden`,
            children: a.jsx(XE, { className: "w-7 h-7 text-gray-800" }),
          }),
          a.jsxs("div", {
            className:
              "relative w-full max-w-6xl h-full flex border border-white bg-[#E6E6FA] rounded-3xl shadow-2xl overflow-hidden",
            children: [
              a.jsx(e7, { isSidebarOpen: n, setSidebarOpen: r }),
              a.jsx("div", {
                className: "flex-1 flex flex-col",
                children: t
                  ? a.jsx(eS, {})
                  : a.jsx(t7, {
                      className: "opacity-75 text-gray-500 animate-fadeIn",
                    }),
              }),
            ],
          }),
        ],
      })
    );
  },
  a7 = () => {
    const [e, t] = b.useState(["", "", "", "", "", ""]),
      n = b.useRef([]),
      r = Qn(),
      { mutate: s, isLoading: i } = oe({
        mutationFn: async (u) =>
          (await F.post("/auth/verify-email", { code: u })).data,
        onSuccess: (u) => {
          G.success("Email berhasil diverifikasi!"),
            u.user.isVerified ? r("/") : r("/waiting-approval");
        },
        onError: (u) => {
          var d, f;
          G.error(
            ((f = (d = u.response) == null ? void 0 : d.data) == null
              ? void 0
              : f.message) || "Verifikasi gagal!"
          );
        },
      }),
      o = (u, d) => {
        var h, m;
        const f = [...e];
        if (d.length > 1) {
          const y = d.slice(0, 6).split("");
          for (let g = 0; g < 6; g++) f[g] = y[g] || "";
          t(f);
          const v = f.findLastIndex((g) => g !== ""),
            w = v < 5 ? v + 1 : 5;
          (h = n.current[w]) == null || h.focus();
        } else
          (f[u] = d),
            t(f),
            d && u < 5 && ((m = n.current[u + 1]) == null || m.focus());
      },
      l = (u, d) => {
        var f;
        d.key === "Backspace" &&
          !e[u] &&
          u > 0 &&
          ((f = n.current[u - 1]) == null || f.focus());
      },
      c = (u) => {
        u.preventDefault();
        const d = e.join("");
        s(d);
      };
    return (
      b.useEffect(() => {
        e.every((u) => u !== "") && c(new Event("submit"));
      }, [e]),
      a.jsx("div", {
        className: "flex items-start justify-center min-h-screen bg-[#EAEAEA]",
        children: a.jsx("div", {
          className:
            "max-w-md w-full bg-[#FFFFFF] rounded-2xl shadow-xl overflow-hidden",
          children: a.jsxs(St.div, {
            initial: { opacity: 0, y: -50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className:
              "bg-[#FFFFFF] rounded-2xl shadow-2xl p-8 w-full max-w-md",
            children: [
              a.jsx("h2", {
                className: "text-3xl font-bold mb-6 text-center text-[#2B7A98]",
                children: "Verifikasi Email",
              }),
              a.jsx("p", {
                className: "text-center text-[#828282] mb-6",
                children:
                  "Masukkan 6-digit kode yang telah dikirimkan ke email kamu.",
              }),
              a.jsxs("form", {
                onSubmit: c,
                className: "space-y-6",
                children: [
                  a.jsx("div", {
                    className: "flex justify-between",
                    children: e.map((u, d) =>
                      a.jsx(
                        "input",
                        {
                          ref: (f) => (n.current[d] = f),
                          type: "text",
                          maxLength: "1",
                          value: u,
                          onChange: (f) => o(d, f.target.value),
                          onKeyDown: (f) => l(d, f),
                          className:
                            "w-12 h-12 text-center text-2xl font-bold bg-[#D7D7D7] text-[#3E3E3E] border-2 border-[#A8A8A8] rounded-lg focus:border-[#3FA3CE] focus:outline-none",
                        },
                        d
                      )
                    ),
                  }),
                  a.jsx(St.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    type: "submit",
                    disabled: i || e.some((u) => !u),
                    className:
                      "w-full bg-gradient-to-r from-[#3FA3CE] to-[#145C75] text-[#FFFFFF] font-bold py-3 px-4 rounded-lg shadow-lg hover:from-[#2B7A98] hover:to-[#145C75] focus:outline-none focus:ring-2 focus:ring-[#3FA3CE] focus:ring-opacity-50 disabled:opacity-50",
                    children: i ? "Memverifikasi..." : "Verifikasi Email",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  l7 = () => {
    const e = Qn();
    return a.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-[#F5F5F5]",
      children: a.jsxs(St.div, {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "bg-white p-8 rounded-xl shadow-lg text-center max-w-md",
        children: [
          a.jsx("h2", {
            className: "text-2xl font-bold text-[#2B7A98] mb-4",
            children: "Menunggu Konfirmasi",
          }),
          a.jsx("p", {
            className: "text-gray-600 mb-6",
            children:
              "Akun kamu telah terverifikasi, tetapi masih menunggu persetujuan dari pengurus desa. Kami akan menghubungi kamu setelah proses selesai.",
          }),
          a.jsx("button", {
            onClick: () => e("/"),
            className:
              "bg-[#3FA3CE] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#2B7A98] transition duration-300",
            children: "Kembali ke Beranda",
          }),
        ],
      }),
    });
  },
  c7 = () => {
    const [e, t] = b.useState(""),
      [n, r] = b.useState(!1),
      { mutate: s, isLoading: i } = oe({
        mutationFn: async (l) =>
          (await F.post("/auth/forgot-password", { email: l })).data,
        onSuccess: () => {
          le.success("Tautan reset telah dikirim! Periksa email kamu."), r(!0);
        },
        onError: (l) => {
          var c, u;
          le.error(
            ((u = (c = l.response) == null ? void 0 : c.data) == null
              ? void 0
              : u.message) || "Terjadi kesalahan"
          );
        },
      }),
      o = (l) => {
        l.preventDefault(), s(e);
      };
    return a.jsxs(St.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className:
        "max-w-md w-full bg-[#FFFFFF] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2",
      children: [
        a.jsxs("div", {
          className: "p-8",
          children: [
            a.jsx("h2", {
              className:
                "text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#78C1E4] to-[#3FA3CE] text-transparent bg-clip-text ",
              children: "Lupa Kata Sandi",
            }),
            n
              ? a.jsxs("div", {
                  className: "text-center",
                  children: [
                    a.jsx(St.div, {
                      initial: { scale: 0 },
                      animate: { scale: 1 },
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      },
                      className:
                        "w-16 h-16 bg-[#EF8B8B] rounded-full flex items-center justify-center mx-auto mb-4",
                      children: a.jsx(Ff, { className: "h-8 w-8 text-white" }),
                    }),
                    a.jsxs("p", {
                      className: "text-[#D7D7D7] mb-6",
                      children: [
                        "Jika akun dengan email ",
                        e,
                        " ada, kamu akan menerima tautan reset kata sandi sebentar lagi.",
                      ],
                    }),
                  ],
                })
              : a.jsxs("form", {
                  onSubmit: o,
                  children: [
                    a.jsx("p", {
                      className: "text-[#828282] mb-6 text-center",
                      children:
                        "Masukkan alamat email kamu dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi.",
                    }),
                    a.jsx(vn, {
                      icon: Ff,
                      type: "email",
                      placeholder: "Alamat Email",
                      value: e,
                      onChange: (l) => t(l.target.value),
                      required: !0,
                    }),
                    a.jsx(St.button, {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className:
                        "w-full py-3 px-4 bg-gradient-to-r from-[#2B7A98] to-[#145C75] text-white font-bold rounded-lg shadow-lg hover:from-[#3FA3CE] hover:to-[#66B2D6] focus:outline-none focus:ring-2 focus:ring-[#3FA3CE] focus:ring-offset-2 focus:ring-offset-[#A8A8A8] transition duration-200",
                      type: "submit",
                      disabled: i,
                      children: i
                        ? a.jsx(Rr, {
                            className: "size-6 animate-spin mx-auto",
                          })
                        : "Kirim Tautan Reset",
                    }),
                  ],
                }),
          ],
        }),
        a.jsx("div", {
          className: "px-8 py-4 bg-[#525252] bg-opacity-50 flex justify-center",
          children: a.jsxs(K, {
            to: "/login",
            className:
              "text-sm text-[#FF9999] hover:underline flex items-center",
            children: [
              a.jsx(QE, { className: "h-4 w-4 mr-2" }),
              " Kembali ke Login",
            ],
          }),
        }),
      ],
    });
  },
  u7 = () => {
    const [e, t] = b.useState(""),
      [n, r] = b.useState(""),
      [s, i] = b.useState(!1),
      [o, l] = b.useState(null),
      [c, u] = b.useState(null),
      { token: d } = Ss(),
      f = Qn(),
      h = async (m) => {
        var y, v, w, g;
        if ((m.preventDefault(), e !== n)) {
          alert("Password-nya beda! Cek lagi ya.");
          return;
        }
        i(!0), l(null), u(null);
        try {
          const p = await F.post("/api/reset-password", {
            token: d,
            password: e,
          });
          u(p.data.message),
            G.success(
              "Password berhasil diubah! Lagi dipindahin ke halaman login..."
            ),
            setTimeout(() => {
              f("/login");
            }, 2e3);
        } catch (p) {
          l(
            ((v = (y = p.response) == null ? void 0 : y.data) == null
              ? void 0
              : v.message) || "Ada masalah pas reset password!"
          ),
            G.error(
              ((g = (w = p.response) == null ? void 0 : w.data) == null
                ? void 0
                : g.message) || "Gagal reset password!"
            );
        } finally {
          i(!1);
        }
      };
    return a.jsx("div", {
      className: "flex items-start justify-center min-h-screen",
      children: a.jsx(St.div, {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className:
          "max-w-md w-full bg-[#3E3E3E] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden",
        children: a.jsxs("div", {
          className: "p-8",
          children: [
            a.jsx("h2", {
              className:
                "text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#3FA3CE] to-[#2B7A98] text-transparent bg-clip-text",
              children: "Ubah Password",
            }),
            o &&
              a.jsx("p", {
                className: "text-[#BF5F5F] text-sm mb-4",
                children: o,
              }),
            c &&
              a.jsx("p", {
                className: "text-[#66B2D6] text-sm mb-4",
                children: c,
              }),
            a.jsxs("form", {
              onSubmit: h,
              children: [
                a.jsx(vn, {
                  icon: bc,
                  type: "password",
                  placeholder: "Masukin Password Baru",
                  value: e,
                  onChange: (m) => t(m.target.value),
                  required: !0,
                }),
                a.jsx(vn, {
                  icon: bc,
                  type: "password",
                  placeholder: "Ulangin Password Baru",
                  value: n,
                  onChange: (m) => r(m.target.value),
                  required: !0,
                }),
                a.jsx(St.button, {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className:
                    "w-full py-3 px-4 bg-gradient-to-r from-[#EF8B8B] to-[#C06C6C] text-white font-bold rounded-lg shadow-lg hover:from-[#FF9999] hover:to-[#BF5F5F] focus:outline-none focus:ring-2 focus:ring-[#EF8B8B] focus:ring-offset-2 focus:ring-offset-[#D7D7D7] transition duration-200",
                  type: "submit",
                  disabled: s,
                  children: s ? "Lagi Diproses..." : "Simpan Password Baru",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  d7 = () => {
    var g;
    const e = Re(),
      [t, n] = b.useState(null),
      [r, s] = b.useState({ name: "", username: "", role: "" }),
      [i, o] = b.useState(null),
      [l, c] = b.useState(null),
      { data: u, isLoading: d } = ie({
        queryKey: ["recommendedUsers"],
        queryFn: () => F.get("/messages/users"),
      }),
      f = oe({
        mutationFn: (p) => F.put(`/auth/users/${p}/confirm`),
        onSuccess: () => {
          G.success("User confirmed successfully"),
            e.invalidateQueries({ queryKey: ["recommendedUsers"] }),
            c(null);
        },
        onError: () => {
          G.error("Failed to confirm user");
        },
      }),
      h = oe({
        mutationFn: (p) => F.delete(`/users/${p}`),
        onSuccess: () => {
          G.success("User deleted successfully"),
            e.invalidateQueries({ queryKey: ["recommendedUsers"] });
        },
        onError: () => {
          G.error("Failed to delete user");
        },
      }),
      m = () => {
        i &&
          h.mutate(i, {
            onSuccess: () => {
              o(null);
            },
          });
      },
      y = oe({
        mutationFn: ({ userId: p, newData: x }) => F.put(`/users/${p}`, x),
        onSuccess: () => {
          G.success("User updated successfully"),
            e.invalidateQueries({ queryKey: ["recommendedUsers"] }),
            n(null);
        },
        onError: () => {
          G.error("Failed to update user");
        },
      }),
      v = (p) => {
        n(p._id), s({ name: p.name, username: p.username, role: p.role });
      },
      w = () => {
        y.mutate({ userId: t, newData: r });
      };
    return d
      ? a.jsx("p", { children: "Loading..." })
      : a.jsxs("div", {
          className: "p-5",
          children: [
            a.jsx("h2", {
              className: "text-2xl font-bold mb-4 text-center text-gray-700",
              children: "Manage Users",
            }),
            a.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              children:
                (g = u == null ? void 0 : u.data) == null
                  ? void 0
                  : g.map((p, x) =>
                      a.jsxs(
                        "div",
                        {
                          className: "bg-white shadow-md rounded-lg p-4",
                          children: [
                            a.jsx("h3", {
                              className: "text-lg font-bold text-center mb-2",
                              children:
                                t === p._id
                                  ? a.jsx("input", {
                                      type: "text",
                                      value: r.name,
                                      onChange: (S) =>
                                        s({ ...r, name: S.target.value }),
                                      className: "border p-1",
                                    })
                                  : p.name,
                            }),
                            a.jsx("img", {
                              src: p.profilePicture || "/avatar.png",
                              alt: "Profile",
                              className: "w-20 h-20 rounded-full mx-auto mb-3",
                            }),
                            a.jsx("table", {
                              className: "w-full border-collapse text-sm",
                              children: a.jsxs("tbody", {
                                children: [
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "ID",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children: p._id,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "NIK",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children: p.nik,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Username",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children:
                                          t === p._id
                                            ? a.jsx("input", {
                                                type: "text",
                                                value: r.username,
                                                onChange: (S) =>
                                                  s({
                                                    ...r,
                                                    username: S.target.value,
                                                  }),
                                                className:
                                                  "border p-1 rounded w-full",
                                              })
                                            : p.username,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Email",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children: p.email,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Verified",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children: p.isVerified ? "Yes" : "No",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Verifikasi Akun",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children: p.isApproved ? "Yes" : "No",
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Last Login",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children: new Date(
                                          p.lastLogin
                                        ).toLocaleString(),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Jumlah Koneksi",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children:
                                          p.connections.length > 0
                                            ? a.jsxs("span", {
                                                children: [
                                                  p.connections.length,
                                                  " Koneksi",
                                                ],
                                              })
                                            : a.jsx("span", {
                                                className: "text-gray-500",
                                                children: "Belum Ada Koneksi",
                                              }),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("tr", {
                                    className: "border-b",
                                    children: [
                                      a.jsx("td", {
                                        className: "p-1 font-bold",
                                        children: "Role",
                                      }),
                                      a.jsx("td", {
                                        className: "p-1",
                                        children:
                                          t === p._id
                                            ? a.jsxs("select", {
                                                value: r.role,
                                                onChange: (S) =>
                                                  s({
                                                    ...r,
                                                    role: S.target.value,
                                                  }),
                                                className:
                                                  "border p-1 rounded w-full",
                                                children: [
                                                  a.jsx("option", {
                                                    value: "user",
                                                    children: "User",
                                                  }),
                                                  a.jsx("option", {
                                                    value: "admin",
                                                    children: "Admin",
                                                  }),
                                                ],
                                              })
                                            : a.jsx("div", {
                                                className: "mt-2 text-left",
                                                children: a.jsx("span", {
                                                  className: `inline-block px-2 py-1 text-md rounded-md font-bold ${
                                                    p.role === "admin"
                                                      ? "bg-red-100 text-red-800"
                                                      : "bg-blue-100 text-blue-800"
                                                  }`,
                                                  children:
                                                    p.role || "Tidak Ada Role",
                                                }),
                                              }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            a.jsxs("div", {
                              className:
                                "bg-gray-100 rounded-lg shadow-md mt-2",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "flex justify-evenly items-center gap-2 p-1 bg-white rounded-md shadow-sm",
                                  children: p.isApproved
                                    ? a.jsx("span", {
                                        className: "text-green-600 font-bold",
                                        children: "✔ TERVERIFIKASI",
                                      })
                                    : a.jsxs(a.Fragment, {
                                        children: [
                                          a.jsx("button", {
                                            onClick: () => c(p._id),
                                            className:
                                              "px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition",
                                            children: "✔ Confirm",
                                          }),
                                          a.jsx("button", {
                                            onClick: () => o(p._id),
                                            className:
                                              "px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition",
                                            children: "✖ Tolak",
                                          }),
                                        ],
                                      }),
                                }),
                                a.jsxs("div", {
                                  className:
                                    "flex justify-evenly items-center gap-2 p-1 bg-white rounded-md shadow-sm mt-2",
                                  children: [
                                    t === p._id
                                      ? a.jsx("button", {
                                          onClick: w,
                                          className:
                                            "px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition",
                                          children: "💾 Save",
                                        })
                                      : a.jsx("button", {
                                          onClick: () => v(p),
                                          className:
                                            "px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition",
                                          children: "✏ Edit",
                                        }),
                                    a.jsx("button", {
                                      onClick: () => o(p._id),
                                      className:
                                        "px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition",
                                      children: "🗑 Delete",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        p._id
                      )
                    ),
            }),
            l &&
              a.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                children: a.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-lg w-96 text-center",
                  children: [
                    a.jsx("h3", {
                      className: "text-lg font-semibold mb-4",
                      children: "Konfirmasi Akun",
                    }),
                    a.jsx("p", {
                      className: "text-gray-700 mb-6",
                      children:
                        "Apakah Anda yakin ingin mengonfirmasi user ini?",
                    }),
                    a.jsxs("div", {
                      className: "flex justify-center space-x-4",
                      children: [
                        a.jsx("button", {
                          onClick: () => c(null),
                          className:
                            "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition",
                          children: "Cancel",
                        }),
                        a.jsx("button", {
                          onClick: () => {
                            f.mutate(l), c(null);
                          },
                          className:
                            "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition",
                          children: "Confirm",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            i &&
              a.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                children: a.jsxs("div", {
                  className:
                    "bg-white p-6 rounded-lg shadow-lg w-96 text-center",
                  children: [
                    a.jsx("h3", {
                      className: "text-lg font-semibold mb-4",
                      children: "Konfirmasi Hapus",
                    }),
                    a.jsx("p", {
                      className: "text-gray-700 mb-6",
                      children: "Apakah Anda yakin ingin menghapus user ini?",
                    }),
                    a.jsxs("div", {
                      className: "flex justify-center space-x-4",
                      children: [
                        a.jsx("button", {
                          onClick: () => o(null),
                          className:
                            "px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition",
                          children: "Cancel",
                        }),
                        a.jsx("button", {
                          onClick: m,
                          className:
                            "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition",
                          children: "Delete",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
  },
  f7 = ({ isSidebarOpen: e, setSidebarOpen: t }) => {
    const { id: n } = Ss();
    Re();
    const {
        getUsers: r,
        users: s,
        selectedUser: i,
        setSelectedUser: o,
        isUsersLoading: l,
        onlineUsers: c,
      } = Xn(),
      u = Qn(),
      [d, f] = b.useState({});
    b.useEffect(() => {
      r();
    }, [r]),
      b.useEffect(() => {
        const y = async () => {
          const v = {};
          for (const w of s)
            try {
              const g = await F.get(
                `/notifications/messages/unread-count/${w._id}`,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              v[w._id] = g.data.count;
            } catch (g) {
              console.error("Gagal fetch unread count:", g);
            }
          f(v);
        };
        s.length > 0 && y();
      }, [s]);
    const h = b.useMemo(() => s.filter((y) => y._id === n), [s, n]),
      m = b.useCallback(
        (y) => {
          o(y), u(`/messages/${y._id}`), t(!1);
        },
        [o, u, t]
      );
    return l
      ? a.jsx(Zb, {})
      : a.jsxs("aside", {
          className: `
        fixed top-16 left-0 h-[calc(100%-4rem)] w-full bg-gray-400 z-40
        transform transition-transform duration-300 ease-in-out
        ${e ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:top-0 lg:h-full lg:translate-x-0 lg:w-72
      `,
          children: [
            a.jsx("div", {
              className:
                "border-b border-white w-full p-5 bg-[#3FA3CE] text-white",
              children: a.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  a.jsx(ks, { className: "size-10" }),
                  a.jsx("span", {
                    className: "font-medium text-center",
                    children: "Silahkan Chat Dengan Teman Anda",
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className: "overflow-y-auto w-full py-3",
              children:
                h.length > 0
                  ? h.map((y) =>
                      a.jsxs(
                        "button",
                        {
                          onClick: () => m(y),
                          className: `w-full px-6 py-5 flex flex-col items-center text-center gap-3 hover:bg-[#A8A8A8] transition-colors
          ${
            (i == null ? void 0 : i._id) === y._id
              ? "bg-[#828282] ring-1 ring-base-300"
              : ""
          }
        `,
                          children: [
                            a.jsxs("div", {
                              className: "relative",
                              children: [
                                a.jsx("img", {
                                  src: y.profilePicture || "/avatar.png",
                                  alt: y.name,
                                  className:
                                    "w-20 h-20 object-cover rounded-full",
                                }),
                                d[y._id] > 0 &&
                                  a.jsx("span", {
                                    className:
                                      "absolute -top-2 -right-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full min-w-[20px] text-center",
                                    children: d[y._id],
                                  }),
                                c.includes(y._id) &&
                                  a.jsx("span", {
                                    className:
                                      "absolute bottom-0 right-0 size-4 bg-green-500 rounded-full ring-2 ring-zinc-900",
                                  }),
                              ],
                            }),
                            a.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                a.jsx("div", {
                                  className:
                                    "font-semibold text-base text-[#145C75] truncate w-32",
                                  children: y.name,
                                }),
                                a.jsx("div", {
                                  className: `text-sm ${
                                    c.includes(y._id)
                                      ? "text-green-200"
                                      : "text-gray-300"
                                  }`,
                                  children: c.includes(y._id)
                                    ? "Online"
                                    : "Offline",
                                }),
                              ],
                            }),
                          ],
                        },
                        y._id
                      )
                    )
                  : a.jsx("div", {
                      className: "text-center text-zinc-500 py-4",
                      children: "No user found",
                    }),
            }),
          ],
        });
  },
  h7 = () => {
    const t = Re().getQueryData(["authUser"]),
      { initSocket: n, setOnlineUsersListener: r, socket: s } = Xn();
    return (
      b.useEffect(() => {
        t != null && t._id && !s && (n(t), r());
      }, [t, n, s]),
      t != null && t._id
        ? a.jsx(m7, { authUser: t })
        : a.jsx("div", {
            className:
              "h-screen flex items-center justify-center text-lg font-semibold text-gray-700 animate-pulse",
            children: "Loading...",
          })
    );
  },
  m7 = ({ authUser: e }) => {
    const { socket: t, selectedUser: n, setSelectedUser: r, users: s } = Xn(),
      [i, o] = b.useState(!1),
      { id: l } = Ss();
    b.useEffect(() => {
      window.innerWidth < 1024 && o(!0);
    }, []),
      b.useEffect(() => {
        r(null);
      }, [r]),
      b.useEffect(() => {
        let u = 0,
          d = 0;
        const f = (y) => {
            u = y.touches[0].clientX;
          },
          h = (y) => {
            d = y.touches[0].clientX;
          },
          m = () => {
            d - u > 80 && o(!0);
          };
        return (
          window.addEventListener("touchstart", f),
          window.addEventListener("touchmove", h),
          window.addEventListener("touchend", m),
          () => {
            window.removeEventListener("touchstart", f),
              window.removeEventListener("touchmove", h),
              window.removeEventListener("touchend", m);
          }
        );
      }, []);
    const c = s.find((u) => u._id === l);
    return a.jsxs("div", {
      className:
        "fixed inset-0 top-16 w-screen h-[calc(100vh-64px)] flex items-center justify-center bg-[#E6E6FA] z-10 py-2",
      children: [
        i &&
          a.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden",
            onClick: () => o(!1),
          }),
        a.jsxs("div", {
          className:
            "relative w-full max-w-6xl h-full flex border border-white bg-[#E6E6FA] rounded-3xl shadow-2xl overflow-hidden",
          children: [
            a.jsx(f7, { socket: t, isSidebarOpen: i, setSidebarOpen: o }),
            a.jsx("div", {
              className: "flex-1 flex flex-col",
              children: n
                ? a.jsx(eS, { socket: t })
                : a.jsx("div", {
                    className:
                      "flex items-center justify-center h-full text-center p-6 animate-fadeIn",
                    children: a.jsxs("div", {
                      children: [
                        a.jsx("div", {
                          className: "flex justify-center",
                          children: a.jsx(Bb, {
                            className:
                              "text-[#3FA3CE] text-6xl mb-4 animate-bounce",
                          }),
                        }),
                        a.jsxs("h1", {
                          className: "text-2xl font-bold text-[#3FA3CE]",
                          children: ["Hai, ", e.name, "! 👋"],
                        }),
                        c
                          ? a.jsxs("p", {
                              className: "text-lg text-gray-600 mt-2",
                              children: [
                                "Kamu siap untuk memulai percakapan seru dengan",
                                " ",
                                a.jsx("span", {
                                  className: "text-[#3FA3CE] font-semibold",
                                  children: c.name,
                                }),
                                "? 🎉 Ayo mulai ngobrol dan buat harimu lebih menyenangkan!",
                              ],
                            })
                          : a.jsx("p", {
                              className: "text-lg text-gray-600 mt-2",
                              children:
                                "Pilih seseorang dari daftar kontak dan mulailah berbincang! Jangan biarkan hari ini berlalu tanpa obrolan menarik! 🚀",
                            }),
                      ],
                    }),
                  }),
            }),
          ],
        }),
      ],
    });
  },
  p7 = "https://websitekolaborasiploy-production.up.railway.app",
  g7 = b.createContext(null),
  y7 = ({ children: e, userId: t }) => {
    const [n, r] = b.useState(null);
    return (
      b.useEffect(() => {
        if (!t) return;
        console.log("🔗 Connecting socket with userId:", t);
        const s = Do(p7, { transports: ["websocket"], query: { userId: t } });
        return (
          r(s),
          s.on("connect", () => {
            console.log("✅ Socket connected!");
          }),
          () => {
            console.log("❌ Disconnecting socket..."), s.disconnect();
          }
        );
      }, [t]),
      a.jsx(g7.Provider, { value: n, children: e })
    );
  },
  tS = b.createContext(),
  x7 = ({ children: e }) => {
    const [t, n] = b.useState(!1),
      r = () => n(!0),
      s = () => n(!1);
    return a.jsx(tS.Provider, {
      value: { isLoading: t, showLoading: r, hideLoading: s },
      children: e,
    });
  },
  nS = () => b.useContext(tS),
  y1 = () => {
    const { isLoading: e } = nS();
    return e
      ? a.jsx("div", {
          className:
            "fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",
          children: a.jsxs(St.div, {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 },
            transition: { duration: 0.5, ease: "easeInOut" },
            className:
              "bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center",
            children: [
              a.jsx("div", {
                className:
                  "w-16 h-16 border-4 border-t-[#145C75] border-b-[#78C1E4] border-l-[#3FA3CE] border-r-[#F4F4F4] rounded-full animate-spin mb-4",
              }),
              a.jsx("h2", {
                className: "text-lg font-semibold text-[#145C75]",
                children: "Mohon Tunggu...",
              }),
              a.jsx("p", {
                className: "text-sm text-gray-500 mt-2",
                children: "Sedang memuat halaman...",
              }),
            ],
          }),
        })
      : null;
  };
function v7() {
  const { showLoading: e, hideLoading: t } = nS(),
    n = bs(),
    { data: r, isLoading: s } = ie({
      queryKey: ["authUser"],
      queryFn: async () => {
        var i, o;
        try {
          return (await F.get("/auth/me")).data;
        } catch (l) {
          return (
            (l.response && l.response.status === 401) ||
              G.error(
                ((o = (i = l.response) == null ? void 0 : i.data) == null
                  ? void 0
                  : o.message) || "Something went wrong"
              ),
            null
          );
        }
      },
    });
  return (
    b.useEffect(() => {
      e();
      const i = setTimeout(() => t(), 2e3);
      return () => clearTimeout(i);
    }, [n.pathname]),
    s
      ? a.jsx(y1, {})
      : a.jsxs(y7, {
          userId: r == null ? void 0 : r._id,
          children: [
            a.jsxs(GT, {
              children: [
                a.jsx(y1, {}),
                a.jsxs(j4, {
                  children: [
                    a.jsx(Ye, {
                      path: "/",
                      element: r
                        ? a.jsx($A, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/dashboard",
                      element: r ? a.jsx(Ct, { to: "/" }) : a.jsx(I_, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/signup",
                      element: r ? a.jsx(Ct, { to: "/" }) : a.jsx(H_, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/login",
                      element: r ? a.jsx(Ct, { to: "/" }) : a.jsx(z_, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/verify-email",
                      element: a.jsx(a7, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/waiting-approval",
                      element: a.jsx(l7, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/forgot-password",
                      element: r ? a.jsx(Ct, { to: "/" }) : a.jsx(c7, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/reset-password/:token",
                      element: r ? a.jsx(Ct, { to: "/" }) : a.jsx(u7, {}),
                    }),
                    a.jsx(Ye, {
                      path: "/notifications",
                      element: r
                        ? a.jsx(q_, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/network",
                      element: r
                        ? a.jsx(Y_, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/post/:postId",
                      element: r
                        ? a.jsx(Q_, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/profile/:username",
                      element: r
                        ? a.jsx(nR, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/messages",
                      element: r
                        ? a.jsx(i7, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/messages/:id",
                      element: r
                        ? a.jsx(h7, {})
                        : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                    a.jsx(Ye, {
                      path: "/dashboardadmin",
                      element:
                        (r == null ? void 0 : r.role) === "admin"
                          ? a.jsx(d7, {})
                          : a.jsx(Ct, { to: "/dashboard" }),
                    }),
                  ],
                }),
                a.jsx($8, {}),
              ],
            }),
            a.jsx("div", { className: "w-full mt-6", children: a.jsx(O_, {}) }),
          ],
        })
  );
}
function w7() {
  return a.jsx(x7, { children: a.jsx(v7, {}) });
}
const b7 = new Z4();
z2(document.getElementById("root")).render(
  a.jsx(b.StrictMode, {
    children: a.jsx(M4, {
      children: a.jsx(sC, { client: b7, children: a.jsx(w7, {}) }),
    }),
  })
);
