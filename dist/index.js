import { jsx as T, jsxs as oe, Fragment as It } from "react/jsx-runtime";
import * as B from "react";
import Ne, { useRef as ve, useContext as Re, useLayoutEffect as Cn, useMemo as $e, useDebugValue as jt, createElement as er, createContext as Sn, useState as pe, useCallback as me, useEffect as fe, forwardRef as tr } from "react";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, We = {}, nr = {
  get exports() {
    return We;
  },
  set exports(e) {
    We = e;
  }
}, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function rr() {
  if (Ft)
    return ne;
  Ft = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function Z(h) {
    if (typeof h == "object" && h !== null) {
      var C = h.$$typeof;
      switch (C) {
        case n:
          switch (h = h.type, h) {
            case l:
            case c:
            case r:
            case s:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case d:
                case v:
                case m:
                case i:
                  return h;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  function N(h) {
    return Z(h) === c;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = c, ne.ContextConsumer = a, ne.ContextProvider = i, ne.Element = n, ne.ForwardRef = d, ne.Fragment = r, ne.Lazy = v, ne.Memo = m, ne.Portal = t, ne.Profiler = s, ne.StrictMode = o, ne.Suspense = p, ne.isAsyncMode = function(h) {
    return N(h) || Z(h) === l;
  }, ne.isConcurrentMode = N, ne.isContextConsumer = function(h) {
    return Z(h) === a;
  }, ne.isContextProvider = function(h) {
    return Z(h) === i;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === n;
  }, ne.isForwardRef = function(h) {
    return Z(h) === d;
  }, ne.isFragment = function(h) {
    return Z(h) === r;
  }, ne.isLazy = function(h) {
    return Z(h) === v;
  }, ne.isMemo = function(h) {
    return Z(h) === m;
  }, ne.isPortal = function(h) {
    return Z(h) === t;
  }, ne.isProfiler = function(h) {
    return Z(h) === s;
  }, ne.isStrictMode = function(h) {
    return Z(h) === o;
  }, ne.isSuspense = function(h) {
    return Z(h) === p;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === c || h === s || h === o || h === p || h === f || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === m || h.$$typeof === i || h.$$typeof === a || h.$$typeof === d || h.$$typeof === k || h.$$typeof === _ || h.$$typeof === z || h.$$typeof === M);
  }, ne.typeOf = Z, ne;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function or() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
    function Z(y) {
      return typeof y == "string" || typeof y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      y === r || y === c || y === s || y === o || y === p || y === f || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === m || y.$$typeof === i || y.$$typeof === a || y.$$typeof === d || y.$$typeof === k || y.$$typeof === _ || y.$$typeof === z || y.$$typeof === M);
    }
    function N(y) {
      if (typeof y == "object" && y !== null) {
        var se = y.$$typeof;
        switch (se) {
          case n:
            var ce = y.type;
            switch (ce) {
              case l:
              case c:
              case r:
              case s:
              case o:
              case p:
                return ce;
              default:
                var K = ce && ce.$$typeof;
                switch (K) {
                  case a:
                  case d:
                  case v:
                  case m:
                  case i:
                    return K;
                  default:
                    return se;
                }
            }
          case t:
            return se;
        }
      }
    }
    var h = l, C = c, E = a, L = i, Y = n, R = d, Q = r, V = v, A = m, x = t, w = s, D = o, g = p, I = !1;
    function H(y) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(y) || N(y) === l;
    }
    function X(y) {
      return N(y) === c;
    }
    function ee(y) {
      return N(y) === a;
    }
    function S(y) {
      return N(y) === i;
    }
    function $(y) {
      return typeof y == "object" && y !== null && y.$$typeof === n;
    }
    function O(y) {
      return N(y) === d;
    }
    function P(y) {
      return N(y) === r;
    }
    function u(y) {
      return N(y) === v;
    }
    function F(y) {
      return N(y) === m;
    }
    function b(y) {
      return N(y) === t;
    }
    function J(y) {
      return N(y) === s;
    }
    function G(y) {
      return N(y) === o;
    }
    function q(y) {
      return N(y) === p;
    }
    re.AsyncMode = h, re.ConcurrentMode = C, re.ContextConsumer = E, re.ContextProvider = L, re.Element = Y, re.ForwardRef = R, re.Fragment = Q, re.Lazy = V, re.Memo = A, re.Portal = x, re.Profiler = w, re.StrictMode = D, re.Suspense = g, re.isAsyncMode = H, re.isConcurrentMode = X, re.isContextConsumer = ee, re.isContextProvider = S, re.isElement = $, re.isForwardRef = O, re.isFragment = P, re.isLazy = u, re.isMemo = F, re.isPortal = b, re.isProfiler = J, re.isStrictMode = G, re.isSuspense = q, re.isValidElementType = Z, re.typeOf = N;
  }()), re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = rr() : e.exports = or();
})(nr);
function sr(e) {
  function n(S, $, O, P, u) {
    for (var F = 0, b = 0, J = 0, G = 0, q, y, se = 0, ce = 0, K, he = K = q = 0, te = 0, le = 0, Xe = 0, de = 0, et = O.length, Je = et - 1, we, U = "", ie = "", ut = "", ht = "", _e; te < et; ) {
      if (y = O.charCodeAt(te), te === Je && b + G + J + F !== 0 && (b !== 0 && (y = b === 47 ? 10 : 47), G = J = F = 0, et++, Je++), b + G + J + F === 0) {
        if (te === Je && (0 < le && (U = U.replace(f, "")), 0 < U.trim().length)) {
          switch (y) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += O.charAt(te);
          }
          y = 59;
        }
        switch (y) {
          case 123:
            for (U = U.trim(), q = U.charCodeAt(0), K = 1, de = ++te; te < et; ) {
              switch (y = O.charCodeAt(te)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (y = O.charCodeAt(te + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = te + 1; he < Je; ++he)
                          switch (O.charCodeAt(he)) {
                            case 47:
                              if (y === 42 && O.charCodeAt(he - 1) === 42 && te + 2 !== he) {
                                te = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (y === 47) {
                                te = he + 1;
                                break e;
                              }
                          }
                        te = he;
                      }
                  }
                  break;
                case 91:
                  y++;
                case 40:
                  y++;
                case 34:
                case 39:
                  for (; te++ < Je && O.charCodeAt(te) !== y; )
                    ;
              }
              if (K === 0)
                break;
              te++;
            }
            switch (K = O.substring(de, te), q === 0 && (q = (U = U.replace(p, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < le && (U = U.replace(f, "")), y = U.charCodeAt(1), y) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = $;
                    break;
                  default:
                    le = D;
                }
                if (K = n($, le, K, y, u + 1), de = K.length, 0 < I && (le = t(D, U, Xe), _e = a(3, K, le, $, A, V, de, y, u, P), U = le.join(""), _e !== void 0 && (de = (K = _e.trim()).length) === 0 && (y = 0, K = "")), 0 < de)
                  switch (y) {
                    case 115:
                      U = U.replace(C, i);
                    case 100:
                    case 109:
                    case 45:
                      K = U + "{" + K + "}";
                      break;
                    case 107:
                      U = U.replace(z, "$1 $2"), K = U + "{" + K + "}", K = w === 1 || w === 2 && s("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                      break;
                    default:
                      K = U + K, P === 112 && (K = (ie += K, ""));
                  }
                else
                  K = "";
                break;
              default:
                K = n($, t($, U, Xe), K, P, u + 1);
            }
            ut += K, K = Xe = le = he = q = 0, U = "", y = O.charCodeAt(++te);
            break;
          case 125:
          case 59:
            if (U = (0 < le ? U.replace(f, "") : U).trim(), 1 < (de = U.length))
              switch (he === 0 && (q = U.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (de = (U = U.replace(" ", ":")).length), 0 < I && (_e = a(1, U, $, S, A, V, ie.length, P, u, P)) !== void 0 && (de = (U = _e.trim()).length) === 0 && (U = "\0\0"), q = U.charCodeAt(0), y = U.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (y === 105 || y === 99) {
                    ht += U + O.charAt(te);
                    break;
                  }
                default:
                  U.charCodeAt(de - 1) !== 58 && (ie += o(U, q, y, U.charCodeAt(2)));
              }
            Xe = le = he = q = 0, U = "", y = O.charCodeAt(++te);
        }
      }
      switch (y) {
        case 13:
        case 10:
          b === 47 ? b = 0 : 1 + q === 0 && P !== 107 && 0 < U.length && (le = 1, U += "\0"), 0 < I * X && a(0, U, $, S, A, V, ie.length, P, u, P), V = 1, A++;
          break;
        case 59:
        case 125:
          if (b + G + J + F === 0) {
            V++;
            break;
          }
        default:
          switch (V++, we = O.charAt(te), y) {
            case 9:
            case 32:
              if (G + F + b === 0)
                switch (se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    we = "";
                    break;
                  default:
                    y !== 32 && (we = " ");
                }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              G + b + F === 0 && (le = Xe = 1, we = "\f" + we);
              break;
            case 108:
              if (G + b + F + x === 0 && 0 < he)
                switch (te - he) {
                  case 2:
                    se === 112 && O.charCodeAt(te - 3) === 58 && (x = se);
                  case 8:
                    ce === 111 && (x = ce);
                }
              break;
            case 58:
              G + b + F === 0 && (he = te);
              break;
            case 44:
              b + J + G + F === 0 && (le = 1, we += "\r");
              break;
            case 34:
            case 39:
              b === 0 && (G = G === y ? 0 : G === 0 ? y : G);
              break;
            case 91:
              G + b + J === 0 && F++;
              break;
            case 93:
              G + b + J === 0 && F--;
              break;
            case 41:
              G + b + F === 0 && J--;
              break;
            case 40:
              if (G + b + F === 0) {
                if (q === 0)
                  switch (2 * se + 3 * ce) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                J++;
              }
              break;
            case 64:
              b + J + G + F + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < G + F + J))
                switch (b) {
                  case 0:
                    switch (2 * y + 3 * O.charCodeAt(te + 1)) {
                      case 235:
                        b = 47;
                        break;
                      case 220:
                        de = te, b = 42;
                    }
                    break;
                  case 42:
                    y === 47 && se === 42 && de + 2 !== te && (O.charCodeAt(de + 2) === 33 && (ie += O.substring(de, te + 1)), we = "", b = 0);
                }
          }
          b === 0 && (U += we);
      }
      ce = se, se = y, te++;
    }
    if (de = ie.length, 0 < de) {
      if (le = $, 0 < I && (_e = a(2, ie, le, S, A, V, de, P, u, P), _e !== void 0 && (ie = _e).length === 0))
        return ht + ie + ut;
      if (ie = le.join(",") + "{" + ie + "}", w * x !== 0) {
        switch (w !== 2 || s(ie, 2) || (x = 0), x) {
          case 111:
            ie = ie.replace(N, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(Z, "::-webkit-input-$1") + ie.replace(Z, "::-moz-$1") + ie.replace(Z, ":-ms-input-$1") + ie;
        }
        x = 0;
      }
    }
    return ht + ie + ut;
  }
  function t(S, $, O) {
    var P = $.trim().split(k);
    $ = P;
    var u = P.length, F = S.length;
    switch (F) {
      case 0:
      case 1:
        var b = 0;
        for (S = F === 0 ? "" : S[0] + " "; b < u; ++b)
          $[b] = r(S, $[b], O).trim();
        break;
      default:
        var J = b = 0;
        for ($ = []; b < u; ++b)
          for (var G = 0; G < F; ++G)
            $[J++] = r(S[G] + " ", P[b], O).trim();
    }
    return $;
  }
  function r(S, $, O) {
    var P = $.charCodeAt(0);
    switch (33 > P && (P = ($ = $.trim()).charCodeAt(0)), P) {
      case 38:
        return $.replace(_, "$1" + S.trim());
      case 58:
        return S.trim() + $.replace(_, "$1" + S.trim());
      default:
        if (0 < 1 * O && 0 < $.indexOf("\f"))
          return $.replace(_, (S.charCodeAt(0) === 58 ? "" : "$1") + S.trim());
    }
    return S + $;
  }
  function o(S, $, O, P) {
    var u = S + ";", F = 2 * $ + 3 * O + 4 * P;
    if (F === 944) {
      S = u.indexOf(":", 9) + 1;
      var b = u.substring(S, u.length - 1).trim();
      return b = u.substring(0, S).trim() + b + ";", w === 1 || w === 2 && s(b, 1) ? "-webkit-" + b + b : b;
    }
    if (w === 0 || w === 2 && !s(u, 1))
      return u;
    switch (F) {
      case 1015:
        return u.charCodeAt(10) === 97 ? "-webkit-" + u + u : u;
      case 951:
        return u.charCodeAt(3) === 116 ? "-webkit-" + u + u : u;
      case 963:
        return u.charCodeAt(5) === 110 ? "-webkit-" + u + u : u;
      case 1009:
        if (u.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + u + u;
      case 978:
        return "-webkit-" + u + "-moz-" + u + u;
      case 1019:
      case 983:
        return "-webkit-" + u + "-moz-" + u + "-ms-" + u + u;
      case 883:
        if (u.charCodeAt(8) === 45)
          return "-webkit-" + u + u;
        if (0 < u.indexOf("image-set(", 11))
          return u.replace(Q, "$1-webkit-$2") + u;
        break;
      case 932:
        if (u.charCodeAt(4) === 45)
          switch (u.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + u.replace("-grow", "") + "-webkit-" + u + "-ms-" + u.replace("grow", "positive") + u;
            case 115:
              return "-webkit-" + u + "-ms-" + u.replace("shrink", "negative") + u;
            case 98:
              return "-webkit-" + u + "-ms-" + u.replace("basis", "preferred-size") + u;
          }
        return "-webkit-" + u + "-ms-" + u + u;
      case 964:
        return "-webkit-" + u + "-ms-flex-" + u + u;
      case 1023:
        if (u.charCodeAt(8) !== 99)
          break;
        return b = u.substring(u.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + b + "-webkit-" + u + "-ms-flex-pack" + b + u;
      case 1005:
        return v.test(u) ? u.replace(m, ":-webkit-") + u.replace(m, ":-moz-") + u : u;
      case 1e3:
        switch (b = u.substring(13).trim(), $ = b.indexOf("-") + 1, b.charCodeAt(0) + b.charCodeAt($)) {
          case 226:
            b = u.replace(h, "tb");
            break;
          case 232:
            b = u.replace(h, "tb-rl");
            break;
          case 220:
            b = u.replace(h, "lr");
            break;
          default:
            return u;
        }
        return "-webkit-" + u + "-ms-" + b + u;
      case 1017:
        if (u.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch ($ = (u = S).length - 10, b = (u.charCodeAt($) === 33 ? u.substring(0, $) : u).substring(S.indexOf(":", 7) + 1).trim(), F = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8))
              break;
          case 115:
            u = u.replace(b, "-webkit-" + b) + ";" + u;
            break;
          case 207:
          case 102:
            u = u.replace(b, "-webkit-" + (102 < F ? "inline-" : "") + "box") + ";" + u.replace(b, "-webkit-" + b) + ";" + u.replace(b, "-ms-" + b + "box") + ";" + u;
        }
        return u + ";";
      case 938:
        if (u.charCodeAt(5) === 45)
          switch (u.charCodeAt(6)) {
            case 105:
              return b = u.replace("-items", ""), "-webkit-" + u + "-webkit-box-" + b + "-ms-flex-" + b + u;
            case 115:
              return "-webkit-" + u + "-ms-flex-item-" + u.replace(L, "") + u;
            default:
              return "-webkit-" + u + "-ms-flex-line-pack" + u.replace("align-content", "").replace(L, "") + u;
          }
        break;
      case 973:
      case 989:
        if (u.charCodeAt(3) !== 45 || u.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (R.test(S) === !0)
          return (b = S.substring(S.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(S.replace("stretch", "fill-available"), $, O, P).replace(":fill-available", ":stretch") : u.replace(b, "-webkit-" + b) + u.replace(b, "-moz-" + b.replace("fill-", "")) + u;
        break;
      case 962:
        if (u = "-webkit-" + u + (u.charCodeAt(5) === 102 ? "-ms-" + u : "") + u, O + P === 211 && u.charCodeAt(13) === 105 && 0 < u.indexOf("transform", 10))
          return u.substring(0, u.indexOf(";", 27) + 1).replace(M, "$1-webkit-$2") + u;
    }
    return u;
  }
  function s(S, $) {
    var O = S.indexOf($ === 1 ? ":" : "{"), P = S.substring(0, $ !== 3 ? O : 10);
    return O = S.substring(O + 1, S.length - 1), H($ !== 2 ? P : P.replace(Y, "$1"), O, $);
  }
  function i(S, $) {
    var O = o($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return O !== $ + ";" ? O.replace(E, " or ($1)").substring(4) : "(" + $ + ")";
  }
  function a(S, $, O, P, u, F, b, J, G, q) {
    for (var y = 0, se = $, ce; y < I; ++y)
      switch (ce = g[y].call(d, S, se, O, P, u, F, b, J, G, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          se = ce;
      }
    if (se !== $)
      return se;
  }
  function l(S) {
    switch (S) {
      case void 0:
      case null:
        I = g.length = 0;
        break;
      default:
        if (typeof S == "function")
          g[I++] = S;
        else if (typeof S == "object")
          for (var $ = 0, O = S.length; $ < O; ++$)
            l(S[$]);
        else
          X = !!S | 0;
    }
    return l;
  }
  function c(S) {
    return S = S.prefix, S !== void 0 && (H = null, S ? typeof S != "function" ? w = 1 : (w = 2, H = S) : w = 0), c;
  }
  function d(S, $) {
    var O = S;
    if (33 > O.charCodeAt(0) && (O = O.trim()), ee = O, O = [ee], 0 < I) {
      var P = a(-1, $, O, O, A, V, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && ($ = P);
    }
    var u = n(D, O, $, 0, 0);
    return 0 < I && (P = a(-2, u, O, O, A, V, u.length, 0, 0, 0), P !== void 0 && (u = P)), ee = "", x = 0, V = A = 1, u;
  }
  var p = /^\0+/g, f = /[\0\r\f]/g, m = /: */g, v = /zoo|gra/, M = /([,: ])(transform)/g, k = /,\r+?/g, _ = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, N = /:(read-only)/g, h = /[svh]\w+-[tblr]{2}/, C = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, L = /-self|flex-/g, Y = /[^]*?(:[rp][el]a[\w-]+)[^]*/, R = /stretch|:\s*\w+\-(?:conte|avail)/, Q = /([^-])(image-set\()/, V = 1, A = 1, x = 0, w = 1, D = [], g = [], I = 0, H = null, X = 0, ee = "";
  return d.use = l, d.set = c, e !== void 0 && c(e), d;
}
var ir = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function ar(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var cr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gt = /* @__PURE__ */ ar(
  function(e) {
    return cr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Nt = We, lr = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, dr = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ur = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, $n = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Lt = {};
Lt[Nt.ForwardRef] = ur;
Lt[Nt.Memo] = $n;
function Ut(e) {
  return Nt.isMemo(e) ? $n : Lt[e.$$typeof] || lr;
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyNames, Xt = Object.getOwnPropertySymbols, pr = Object.getOwnPropertyDescriptor, mr = Object.getPrototypeOf, Jt = Object.prototype;
function kn(e, n, t) {
  if (typeof n != "string") {
    if (Jt) {
      var r = mr(n);
      r && r !== Jt && kn(e, r, t);
    }
    var o = fr(n);
    Xt && (o = o.concat(Xt(n)));
    for (var s = Ut(e), i = Ut(n), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!dr[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var c = pr(n, l);
        try {
          hr(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var vr = kn;
function xe() {
  return (xe = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var qt = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, gt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !We.typeOf(e);
}, it = Object.freeze([]), Pe = Object.freeze({});
function Ye(e) {
  return typeof e == "function";
}
function wt(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Zt(e) {
  return e && typeof e.styledComponentId == "string";
}
var ze = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Wt = typeof window < "u" && "HTMLElement" in window, yr = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), gr = {}, wr = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function xr() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Ee(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(xr.apply(void 0, [wr[e]].concat(t)).trim());
}
var br = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Ee(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var a = s; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), c = 0, d = r.length; c < d; c++)
      this.tag.insertRule(l, r[c]) && (this.groupSizes[t]++, l++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, a = s; a < i; a++)
      r += this.tag.getRule(a) + `/*!sc*/
`;
    return r;
  }, e;
}(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Ke = 1, tt = function(e) {
  if (ot.has(e))
    return ot.get(e);
  for (; at.has(Ke); )
    Ke++;
  var n = Ke++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Ee(16, "" + n), ot.set(e, n), at.set(n, e), n;
}, Cr = function(e) {
  return at.get(e);
}, Sr = function(e, n) {
  n >= Ke && (Ke = n + 1), ot.set(e, n), at.set(n, e);
}, $r = "style[" + ze + '][data-styled-version="5.3.8"]', kr = new RegExp("^" + ze + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Er = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Mr = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var a = i.match(kr);
      if (a) {
        var l = 0 | parseInt(a[1], 10), c = a[2];
        l !== 0 && (Sr(c, l), Er(e, c, a[3]), e.getTag().insertRules(l, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, _r = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, En = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(a) {
    for (var l = a.childNodes, c = l.length; c >= 0; c--) {
      var d = l[c];
      if (d && d.nodeType === 1 && d.hasAttribute(ze))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(ze, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = _r();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, Or = function() {
  function e(t) {
    var r = this.element = En(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, a = s.length; i < a; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Ee(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), Pr = function() {
  function e(t) {
    var r = this.element = En(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Ar = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Kt = Wt, Tr = { isServer: !Wt, useCSSOMInjection: !yr }, ct = function() {
  function e(t, r, o) {
    t === void 0 && (t = Pe), r === void 0 && (r = {}), this.options = xe({}, Tr, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Wt && Kt && (Kt = !1, function(s) {
      for (var i = document.querySelectorAll($r), a = 0, l = i.length; a < l; a++) {
        var c = i[a];
        c && c.getAttribute(ze) !== "active" && (Mr(s, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this));
  }
  e.registerId = function(t) {
    return tt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(xe({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new Ar(i) : s ? new Or(i) : new Pr(i), new br(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (tt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(tt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(tt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var a = Cr(i);
        if (a !== void 0) {
          var l = t.names.get(a), c = r.getGroup(i);
          if (l && c && l.size) {
            var d = ze + ".g" + i + '[id="' + a + '"]', p = "";
            l !== void 0 && l.forEach(function(f) {
              f.length > 0 && (p += f + ",");
            }), s += "" + c + d + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Rr = /(a)(d)/gi, Qt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = Qt(n % 52) + t;
  return (Qt(n % 52) + t).replace(Rr, "$1-$2");
}
var De = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Mn = function(e) {
  return De(5381, e);
};
function _n(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Ye(t) && !Zt(t))
      return !1;
  }
  return !0;
}
var Dr = Mn("5.3.8"), Ir = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && _n(n), this.componentId = t, this.baseHash = De(Dr, t), this.baseStyle = r, ct.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = Le(this.rules, n, t, r).join(""), a = xt(De(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, a)) {
          var l = r(i, "." + a, void 0, o);
          t.insertRules(o, a, l);
        }
        s.push(a), this.staticRulesId = a;
      }
    else {
      for (var c = this.rules.length, d = De(this.baseHash, r.hash), p = "", f = 0; f < c; f++) {
        var m = this.rules[f];
        if (typeof m == "string")
          p += m, process.env.NODE_ENV !== "production" && (d = De(d, m + f));
        else if (m) {
          var v = Le(m, n, t, r), M = Array.isArray(v) ? v.join("") : v;
          d = De(d, M + f), p += M;
        }
      }
      if (p) {
        var k = xt(d >>> 0);
        if (!t.hasNameForId(o, k)) {
          var _ = r(p, "." + k, void 0, o);
          t.insertRules(o, k, _);
        }
        s.push(k);
      }
    }
    return s.join(" ");
  }, e;
}(), Nr = /^\s*\/\/.*$/gm, Lr = [":", "[", ".", "#"];
function Zr(e) {
  var n, t, r, o, s = e === void 0 ? Pe : e, i = s.options, a = i === void 0 ? Pe : i, l = s.plugins, c = l === void 0 ? it : l, d = new sr(a), p = [], f = function(M) {
    function k(_) {
      if (_)
        try {
          M(_ + "}");
        } catch {
        }
    }
    return function(_, z, Z, N, h, C, E, L, Y, R) {
      switch (_) {
        case 1:
          if (Y === 0 && z.charCodeAt(0) === 64)
            return M(z + ";"), "";
          break;
        case 2:
          if (L === 0)
            return z + "/*|*/";
          break;
        case 3:
          switch (L) {
            case 102:
            case 112:
              return M(Z[0] + z), "";
            default:
              return z + (R === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(k);
      }
    };
  }(function(M) {
    p.push(M);
  }), m = function(M, k, _) {
    return k === 0 && Lr.indexOf(_[t.length]) !== -1 || _.match(o) ? M : "." + n;
  };
  function v(M, k, _, z) {
    z === void 0 && (z = "&");
    var Z = M.replace(Nr, ""), N = k && _ ? _ + " " + k + " { " + Z + " }" : Z;
    return n = z, t = k, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(_ || !k ? "" : k, N);
  }
  return d.use([].concat(c, [function(M, k, _) {
    M === 2 && _.length && _[0].lastIndexOf(t) > 0 && (_[0] = _[0].replace(r, m));
  }, f, function(M) {
    if (M === -2) {
      var k = p;
      return p = [], k;
    }
  }])), v.hash = c.length ? c.reduce(function(M, k) {
    return k.name || Ee(15), De(M, k.name);
  }, 5381).toString() : "", v;
}
var On = Ne.createContext();
On.Consumer;
var Pn = Ne.createContext(), Wr = (Pn.Consumer, new ct()), bt = Zr();
function An() {
  return Re(On) || Wr;
}
function Tn() {
  return Re(Pn) || bt;
}
var Rn = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = bt);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Ee(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = bt), this.name + n.hash;
  }, e;
}(), Yr = /([A-Z])/, zr = /([A-Z])/g, Hr = /^ms-/, Br = function(e) {
  return "-" + e.toLowerCase();
};
function en(e) {
  return Yr.test(e) ? e.replace(zr, Br).replace(Hr, "-ms-") : e;
}
var tn = function(e) {
  return e == null || e === !1 || e === "";
};
function Le(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, a = e.length; i < a; i += 1)
      (o = Le(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (tn(e))
    return "";
  if (Zt(e))
    return "." + e.styledComponentId;
  if (Ye(e)) {
    if (typeof (c = e) != "function" || c.prototype && c.prototype.isReactComponent || !n)
      return e;
    var l = e(n);
    return process.env.NODE_ENV !== "production" && We.isElement(l) && console.warn(wt(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Le(l, n, t, r);
  }
  var c;
  return e instanceof Rn ? t ? (e.inject(t, r), e.getName(r)) : e : gt(e) ? function d(p, f) {
    var m, v, M = [];
    for (var k in p)
      p.hasOwnProperty(k) && !tn(p[k]) && (Array.isArray(p[k]) && p[k].isCss || Ye(p[k]) ? M.push(en(k) + ":", p[k], ";") : gt(p[k]) ? M.push.apply(M, d(p[k], k)) : M.push(en(k) + ": " + (m = k, (v = p[k]) == null || typeof v == "boolean" || v === "" ? "" : typeof v != "number" || v === 0 || m in ir ? String(v).trim() : v + "px") + ";"));
    return f ? [f + " {"].concat(M, ["}"]) : M;
  }(e) : e.toString();
}
var nn = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Yt(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return Ye(e) || gt(e) ? nn(Le(qt(it, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : nn(Le(qt(e, t)));
}
var rn = /invalid hook call/i, nt = /* @__PURE__ */ new Set(), Dn = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (rn.test(s))
          o = !1, nt.delete(t);
        else {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            a[l - 1] = arguments[l];
          r.apply(void 0, [s].concat(a));
        }
      }, ve(), o && !nt.has(t) && (console.warn(t), nt.add(t));
    } catch (s) {
      rn.test(s.message) && nt.delete(t);
    } finally {
      console.error = r;
    }
  }
}, In = function(e, n, t) {
  return t === void 0 && (t = Pe), e.theme !== t.theme && e.theme || n || t.theme;
}, jr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fr = /(^-|-$)/g;
function ft(e) {
  return e.replace(jr, "-").replace(Fr, "");
}
var zt = function(e) {
  return xt(Mn(e) >>> 0);
};
function rt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ct = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Vr = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Gr(e, n, t) {
  var r = e[t];
  Ct(n) && Ct(r) ? Nn(r, n) : e[t] = n;
}
function Nn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Ct(i))
      for (var a in i)
        Vr(a) && Gr(e, i[a], a);
  }
  return e;
}
var He = Ne.createContext();
He.Consumer;
function Ur(e) {
  var n = Re(He), t = $e(function() {
    return function(r, o) {
      if (!r)
        return Ee(14);
      if (Ye(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Ee(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Ee(8) : o ? xe({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? Ne.createElement(He.Provider, { value: t }, e.children) : null;
}
var pt = {};
function Ln(e, n, t) {
  var r = Zt(e), o = !rt(e), s = n.attrs, i = s === void 0 ? it : s, a = n.componentId, l = a === void 0 ? function(z, Z) {
    var N = typeof z != "string" ? "sc" : ft(z);
    pt[N] = (pt[N] || 0) + 1;
    var h = N + "-" + zt("5.3.8" + N + pt[N]);
    return Z ? Z + "-" + h : h;
  }(n.displayName, n.parentComponentId) : a, c = n.displayName, d = c === void 0 ? function(z) {
    return rt(z) ? "styled." + z : "Styled(" + wt(z) + ")";
  }(e) : c, p = n.displayName && n.componentId ? ft(n.displayName) + "-" + n.componentId : n.componentId || l, f = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, m = n.shouldForwardProp;
  r && e.shouldForwardProp && (m = n.shouldForwardProp ? function(z, Z, N) {
    return e.shouldForwardProp(z, Z, N) && n.shouldForwardProp(z, Z, N);
  } : e.shouldForwardProp);
  var v, M = new Ir(t, p, r ? e.componentStyle : void 0), k = M.isStatic && i.length === 0, _ = function(z, Z) {
    return function(N, h, C, E) {
      var L = N.attrs, Y = N.componentStyle, R = N.defaultProps, Q = N.foldedComponentIds, V = N.shouldForwardProp, A = N.styledComponentId, x = N.target;
      process.env.NODE_ENV !== "production" && jt(A);
      var w = function(P, u, F) {
        P === void 0 && (P = Pe);
        var b = xe({}, u, { theme: P }), J = {};
        return F.forEach(function(G) {
          var q, y, se, ce = G;
          for (q in Ye(ce) && (ce = ce(b)), ce)
            b[q] = J[q] = q === "className" ? (y = J[q], se = ce[q], y && se ? y + " " + se : y || se) : ce[q];
        }), [b, J];
      }(In(h, Re(He), R) || Pe, h, L), D = w[0], g = w[1], I = function(P, u, F, b) {
        var J = An(), G = Tn(), q = u ? P.generateAndInjectStyles(Pe, J, G) : P.generateAndInjectStyles(F, J, G);
        return process.env.NODE_ENV !== "production" && jt(q), process.env.NODE_ENV !== "production" && !u && b && b(q), q;
      }(Y, E, D, process.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), H = C, X = g.$as || h.$as || g.as || h.as || x, ee = rt(X), S = g !== h ? xe({}, h, {}, g) : h, $ = {};
      for (var O in S)
        O[0] !== "$" && O !== "as" && (O === "forwardedAs" ? $.as = S[O] : (V ? V(O, Gt, X) : !ee || Gt(O)) && ($[O] = S[O]));
      return h.style && g.style !== h.style && ($.style = xe({}, h.style, {}, g.style)), $.className = Array.prototype.concat(Q, A, I !== A ? I : null, h.className, g.className).filter(Boolean).join(" "), $.ref = H, er(X, $);
    }(v, z, Z, k);
  };
  return _.displayName = d, (v = Ne.forwardRef(_)).attrs = f, v.componentStyle = M, v.displayName = d, v.shouldForwardProp = m, v.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : it, v.styledComponentId = p, v.target = r ? e.target : e, v.withComponent = function(z) {
    var Z = n.componentId, N = function(C, E) {
      if (C == null)
        return {};
      var L, Y, R = {}, Q = Object.keys(C);
      for (Y = 0; Y < Q.length; Y++)
        L = Q[Y], E.indexOf(L) >= 0 || (R[L] = C[L]);
      return R;
    }(n, ["componentId"]), h = Z && Z + "-" + (rt(z) ? z : ft(wt(z)));
    return Ln(z, xe({}, N, { attrs: f, componentId: h }), t);
  }, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = r ? Nn({}, e.defaultProps, z) : z;
  } }), process.env.NODE_ENV !== "production" && (Dn(d, p), v.warnTooManyClasses = function(z, Z) {
    var N = {}, h = !1;
    return function(C) {
      if (!h && (N[C] = !0, Object.keys(N).length >= 200)) {
        var E = Z ? ' with the id of "' + Z + '"' : "";
        console.warn("Over 200 classes were generated for component " + z + E + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), h = !0, N = {};
      }
    };
  }(d, p)), v.toString = function() {
    return "." + v.styledComponentId;
  }, o && vr(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), v;
}
var St = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Pe), !We.isValidElementType(r))
      return Ee(1, String(r));
    var s = function() {
      return t(r, o, Yt.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, xe({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, xe({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(Ln, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  St[e] = St(e);
});
var Xr = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = _n(t), ct.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(Le(this.rules, r, o, s).join(""), ""), a = this.componentId + t;
    o.insertRules(a, a, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && ct.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function Jr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Yt.apply(void 0, [e].concat(t)), s = "sc-global-" + zt(JSON.stringify(o)), i = new Xr(o, s);
  function a(c) {
    var d = An(), p = Tn(), f = Re(He), m = ve(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Ne.Children.count(c.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(v) {
      return typeof v == "string" && v.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(m, c, d, f, p), Cn(function() {
      if (!d.server)
        return l(m, c, d, f, p), function() {
          return i.removeStyles(m, d);
        };
    }, [m, c, d, f, p]), null;
  }
  function l(c, d, p, f, m) {
    if (i.isStatic)
      i.renderStyles(c, gr, p, m);
    else {
      var v = xe({}, d, { theme: In(d, f, a.defaultProps) });
      i.renderStyles(c, v, p, m);
    }
  }
  return process.env.NODE_ENV !== "production" && Dn(s), Ne.memo(a);
}
function qr(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Yt.apply(void 0, [e].concat(t)).join(""), s = zt(o);
  return new Rn(s, o);
}
var Ht = function() {
  return Re(He);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const W = St, qe = "reactSchedulerOutsideWrapper", Kr = Jr`

  #${qe} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${qe} *,
 #${qe} *:before,
 #${qe} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ae = {
  navHeight: "44px",
  colors: {
    black: "#1C222F",
    grey400: "#D2D2D2",
    grey600: "#777777",
    blue900: "#3B3C5F",
    blue100: "#F8F8FD",
    blue300: "#C9E5FF",
    blue400: "#0A11EB",
    blue200: "#E6F3FF",
    red400: "#EF4444",
    white: "#FFFFFF"
  }
}, je = `
margin: 0;
padding: 0;
`, Zn = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
W.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const ue = 50, Me = 24, Fe = 16, Ie = 40, Be = Ie + Fe + Me, Se = 84, ge = 56, Ae = 196, ke = 12, on = 52, sn = ae.colors.blue100, Te = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, be = 3, Qr = 1.6, eo = 4.5, $t = 12, to = "reactSchedulerCanvasHeaderWrapper", Wn = "reactSchedulerCanvasWrapper", Bt = qe, no = 4, ro = 48, Oe = 5, oo = 40, so = 8, Yn = Me / 2 + 2, zn = Fe / 2 + Me + 1, an = 2, cn = 4, Ze = 60, io = "rgb(114,141,226)";
var lt = {}, ao = {
  get exports() {
    return lt;
  },
  set exports(e) {
    lt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", a = "minute", l = "hour", c = "day", d = "week", p = "month", f = "quarter", m = "year", v = "date", M = "Invalid Date", k = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, z = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var x = ["th", "st", "nd", "rd"], w = A % 100;
      return "[" + A + (x[(w - 20) % 10] || x[w] || x[0]) + "]";
    } }, Z = function(A, x, w) {
      var D = String(A);
      return !D || D.length >= x ? A : "" + Array(x + 1 - D.length).join(w) + A;
    }, N = { s: Z, z: function(A) {
      var x = -A.utcOffset(), w = Math.abs(x), D = Math.floor(w / 60), g = w % 60;
      return (x <= 0 ? "+" : "-") + Z(D, 2, "0") + ":" + Z(g, 2, "0");
    }, m: function A(x, w) {
      if (x.date() < w.date())
        return -A(w, x);
      var D = 12 * (w.year() - x.year()) + (w.month() - x.month()), g = x.clone().add(D, p), I = w - g < 0, H = x.clone().add(D + (I ? -1 : 1), p);
      return +(-(D + (w - g) / (I ? g - H : H - g)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: p, y: m, w: d, d: c, D: v, h: l, m: a, s: i, ms: s, Q: f }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, h = "en", C = {};
    C[h] = z;
    var E = function(A) {
      return A instanceof Q;
    }, L = function A(x, w, D) {
      var g;
      if (!x)
        return h;
      if (typeof x == "string") {
        var I = x.toLowerCase();
        C[I] && (g = I), w && (C[I] = w, g = I);
        var H = x.split("-");
        if (!g && H.length > 1)
          return A(H[0]);
      } else {
        var X = x.name;
        C[X] = x, g = X;
      }
      return !D && g && (h = g), g || !D && h;
    }, Y = function(A, x) {
      if (E(A))
        return A.clone();
      var w = typeof x == "object" ? x : {};
      return w.date = A, w.args = arguments, new Q(w);
    }, R = N;
    R.l = L, R.i = E, R.w = function(A, x) {
      return Y(A, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var Q = function() {
      function A(w) {
        this.$L = L(w.locale, null, !0), this.parse(w);
      }
      var x = A.prototype;
      return x.parse = function(w) {
        this.$d = function(D) {
          var g = D.date, I = D.utc;
          if (g === null)
            return new Date(NaN);
          if (R.u(g))
            return new Date();
          if (g instanceof Date)
            return new Date(g);
          if (typeof g == "string" && !/Z$/i.test(g)) {
            var H = g.match(k);
            if (H) {
              var X = H[2] - 1 || 0, ee = (H[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(H[1], X, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee)) : new Date(H[1], X, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, ee);
            }
          }
          return new Date(g);
        }(w), this.$x = w.x || {}, this.init();
      }, x.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, x.$utils = function() {
        return R;
      }, x.isValid = function() {
        return this.$d.toString() !== M;
      }, x.isSame = function(w, D) {
        var g = Y(w);
        return this.startOf(D) <= g && g <= this.endOf(D);
      }, x.isAfter = function(w, D) {
        return Y(w) < this.startOf(D);
      }, x.isBefore = function(w, D) {
        return this.endOf(D) < Y(w);
      }, x.$g = function(w, D, g) {
        return R.u(w) ? this[D] : this.set(g, w);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(w, D) {
        var g = this, I = !!R.u(D) || D, H = R.p(w), X = function(b, J) {
          var G = R.w(g.$u ? Date.UTC(g.$y, J, b) : new Date(g.$y, J, b), g);
          return I ? G : G.endOf(c);
        }, ee = function(b, J) {
          return R.w(g.toDate()[b].apply(g.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), g);
        }, S = this.$W, $ = this.$M, O = this.$D, P = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case m:
            return I ? X(1, 0) : X(31, 11);
          case p:
            return I ? X(1, $) : X(0, $ + 1);
          case d:
            var u = this.$locale().weekStart || 0, F = (S < u ? S + 7 : S) - u;
            return X(I ? O - F : O + (6 - F), $);
          case c:
          case v:
            return ee(P + "Hours", 0);
          case l:
            return ee(P + "Minutes", 1);
          case a:
            return ee(P + "Seconds", 2);
          case i:
            return ee(P + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(w) {
        return this.startOf(w, !1);
      }, x.$set = function(w, D) {
        var g, I = R.p(w), H = "set" + (this.$u ? "UTC" : ""), X = (g = {}, g[c] = H + "Date", g[v] = H + "Date", g[p] = H + "Month", g[m] = H + "FullYear", g[l] = H + "Hours", g[a] = H + "Minutes", g[i] = H + "Seconds", g[s] = H + "Milliseconds", g)[I], ee = I === c ? this.$D + (D - this.$W) : D;
        if (I === p || I === m) {
          var S = this.clone().set(v, 1);
          S.$d[X](ee), S.init(), this.$d = S.set(v, Math.min(this.$D, S.daysInMonth())).$d;
        } else
          X && this.$d[X](ee);
        return this.init(), this;
      }, x.set = function(w, D) {
        return this.clone().$set(w, D);
      }, x.get = function(w) {
        return this[R.p(w)]();
      }, x.add = function(w, D) {
        var g, I = this;
        w = Number(w);
        var H = R.p(D), X = function($) {
          var O = Y(I);
          return R.w(O.date(O.date() + Math.round($ * w)), I);
        };
        if (H === p)
          return this.set(p, this.$M + w);
        if (H === m)
          return this.set(m, this.$y + w);
        if (H === c)
          return X(1);
        if (H === d)
          return X(7);
        var ee = (g = {}, g[a] = r, g[l] = o, g[i] = t, g)[H] || 1, S = this.$d.getTime() + w * ee;
        return R.w(S, this);
      }, x.subtract = function(w, D) {
        return this.add(-1 * w, D);
      }, x.format = function(w) {
        var D = this, g = this.$locale();
        if (!this.isValid())
          return g.invalidDate || M;
        var I = w || "YYYY-MM-DDTHH:mm:ssZ", H = R.z(this), X = this.$H, ee = this.$m, S = this.$M, $ = g.weekdays, O = g.months, P = function(J, G, q, y) {
          return J && (J[G] || J(D, I)) || q[G].slice(0, y);
        }, u = function(J) {
          return R.s(X % 12 || 12, J, "0");
        }, F = g.meridiem || function(J, G, q) {
          var y = J < 12 ? "AM" : "PM";
          return q ? y.toLowerCase() : y;
        }, b = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: S + 1, MM: R.s(S + 1, 2, "0"), MMM: P(g.monthsShort, S, O, 3), MMMM: P(O, S), D: this.$D, DD: R.s(this.$D, 2, "0"), d: String(this.$W), dd: P(g.weekdaysMin, this.$W, $, 2), ddd: P(g.weekdaysShort, this.$W, $, 3), dddd: $[this.$W], H: String(X), HH: R.s(X, 2, "0"), h: u(1), hh: u(2), a: F(X, ee, !0), A: F(X, ee, !1), m: String(ee), mm: R.s(ee, 2, "0"), s: String(this.$s), ss: R.s(this.$s, 2, "0"), SSS: R.s(this.$ms, 3, "0"), Z: H };
        return I.replace(_, function(J, G) {
          return G || b[J] || H.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(w, D, g) {
        var I, H = R.p(D), X = Y(w), ee = (X.utcOffset() - this.utcOffset()) * r, S = this - X, $ = R.m(this, X);
        return $ = (I = {}, I[m] = $ / 12, I[p] = $, I[f] = $ / 3, I[d] = (S - ee) / 6048e5, I[c] = (S - ee) / 864e5, I[l] = S / o, I[a] = S / r, I[i] = S / t, I)[H] || S, g ? $ : R.a($);
      }, x.daysInMonth = function() {
        return this.endOf(p).$D;
      }, x.$locale = function() {
        return C[this.$L];
      }, x.locale = function(w, D) {
        if (!w)
          return this.$L;
        var g = this.clone(), I = L(w, D, !0);
        return I && (g.$L = I), g;
      }, x.clone = function() {
        return R.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), V = Q.prototype;
    return Y.prototype = V, [["$ms", s], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", p], ["$y", m], ["$D", v]].forEach(function(A) {
      V[A[1]] = function(x) {
        return this.$g(x, A[0], A[1]);
      };
    }), Y.extend = function(A, x) {
      return A.$i || (A(x, Q, Y), A.$i = !0), Y;
    }, Y.locale = L, Y.isDayjs = E, Y.unix = function(A) {
      return Y(1e3 * A);
    }, Y.en = C[h], Y.Ls = C, Y.p = {}, Y;
  });
})(ao);
const j = lt, ln = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Hn = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, Bn = (e, n) => j(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), jn = (e) => ({
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Hn(e),
  isCurrentDay: e.isSame(j(), "day"),
  year: parseInt(e.format("YYYY"))
}), Fn = (e, n, t, r, o, s) => {
  e.strokeStyle = ae.colors.grey400, s ? e.fillStyle = ae.colors.blue200 : o ? e.fillStyle = "transparent" : e.fillStyle = ae.colors.blue100, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, ge), e.strokeRect(n + 0.5, t + 0.5, r, ge);
}, co = (e, n, t, r) => {
  for (let o = 0; o < n; o++)
    for (let s = 0; s <= t; s++) {
      const i = j(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        s,
        "days"
      ), a = i.isSame(j(), "day");
      Fn(e, s * ue, o * ge, ue, Hn(i), a);
    }
}, lo = (e, n, t) => {
  e.setLineDash([5, 5]), e.strokeStyle = ae.colors.grey400, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, uo = (e, n, t, r) => {
  let o = 0, s = -(r.dayOfMonth - 1) * ke;
  for (let i = 0; i <= t; i++) {
    const l = j(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      i,
      "weeks"
    ).isSame(j(), "week");
    for (let c = 0; c < n; c++)
      Fn(e, o, c * ge, Se, !0, l);
    o += Se;
  }
  for (let i = 0; i < t; i++) {
    const a = Bn(r, i) * ke;
    lo(e, s, n * ge), s += a;
  }
}, ho = (e, n, t, r, o) => {
  e.clearRect(0, 0, e.canvas.width, e.canvas.height), document.getElementById(Wn) && (n === 1 ? co(e, t, r, o) : uo(e, t, r, o));
};
var kt = {}, fo = {
  get exports() {
    return kt;
  },
  set exports(e) {
    kt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = "week", r = "year";
    return function(o, s, i) {
      var a = s.prototype;
      a.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(r).add(1, r).date(c), p = i(this).endOf(t);
          if (d.isBefore(p))
            return 1;
        }
        var f = i(this).startOf(r).date(c).startOf(t).subtract(1, "millisecond"), m = this.diff(f, t, !0);
        return m < 0 ? i(this).startOf("week").week() : Math.ceil(m);
      }, a.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(fo);
const po = kt;
var Et = {}, mo = {
  get exports() {
    return Et;
  },
  set exports(e) {
    Et = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(mo);
const vo = Et;
var Mt = {}, yo = {
  get exports() {
    return Mt;
  },
  set exports(e) {
    Mt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = "day";
    return function(r, o, s) {
      var i = function(c) {
        return c.add(4 - c.isoWeekday(), t);
      }, a = o.prototype;
      a.isoWeekYear = function() {
        return i(this).year();
      }, a.isoWeek = function(c) {
        if (!this.$utils().u(c))
          return this.add(7 * (c - this.isoWeek()), t);
        var d, p, f, m, v = i(this), M = (d = this.isoWeekYear(), p = this.$u, f = (p ? s.utc : s)().year(d).startOf("year"), m = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (m += 7), f.add(m, t));
        return v.diff(M, "week") + 1;
      }, a.isoWeekday = function(c) {
        return this.$utils().u(c) ? this.day() || 7 : this.day(this.day() % 7 ? c : c - 7);
      };
      var l = a.startOf;
      a.startOf = function(c, d) {
        var p = this.$utils(), f = !!p.u(d) || d;
        return p.p(c) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(c, d);
      };
    };
  });
})(yo);
const go = Mt;
var _t = {}, wo = {
  get exports() {
    return _t;
  },
  set exports(e) {
    _t = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, a, l) {
        var c = o(s), d = o(i), p = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (p ? this.isAfter(c, a) : !this.isBefore(c, a)) && (f ? this.isBefore(d, a) : !this.isAfter(d, a)) || (p ? this.isBefore(c, a) : !this.isAfter(c, a)) && (f ? this.isAfter(d, a) : !this.isBefore(d, a));
      };
    };
  });
})(wo);
const xo = _t;
var Ot = {}, bo = {
  get exports() {
    return Ot;
  },
  set exports(e) {
    Ot = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, a = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c = 31536e6, d = 2592e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: c, months: d, days: a, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, m = function(h) {
      return h instanceof N;
    }, v = function(h, C, E) {
      return new N(h, E, C.$l);
    }, M = function(h) {
      return r.p(h) + "s";
    }, k = function(h) {
      return h < 0;
    }, _ = function(h) {
      return k(h) ? Math.ceil(h) : Math.floor(h);
    }, z = function(h) {
      return Math.abs(h);
    }, Z = function(h, C) {
      return h ? k(h) ? { negative: !0, format: "" + z(h) + C } : { negative: !1, format: "" + h + C } : { negative: !1, format: "" };
    }, N = function() {
      function h(E, L, Y) {
        var R = this;
        if (this.$d = {}, this.$l = Y, E === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), L)
          return v(E * f[M(L)], this);
        if (typeof E == "number")
          return this.$ms = E, this.parseFromMilliseconds(), this;
        if (typeof E == "object")
          return Object.keys(E).forEach(function(A) {
            R.$d[M(A)] = E[A];
          }), this.calMilliseconds(), this;
        if (typeof E == "string") {
          var Q = E.match(p);
          if (Q) {
            var V = Q.slice(2).map(function(A) {
              return A != null ? Number(A) : 0;
            });
            return this.$d.years = V[0], this.$d.months = V[1], this.$d.weeks = V[2], this.$d.days = V[3], this.$d.hours = V[4], this.$d.minutes = V[5], this.$d.seconds = V[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var C = h.prototype;
      return C.calMilliseconds = function() {
        var E = this;
        this.$ms = Object.keys(this.$d).reduce(function(L, Y) {
          return L + (E.$d[Y] || 0) * f[Y];
        }, 0);
      }, C.parseFromMilliseconds = function() {
        var E = this.$ms;
        this.$d.years = _(E / c), E %= c, this.$d.months = _(E / d), E %= d, this.$d.days = _(E / a), E %= a, this.$d.hours = _(E / i), E %= i, this.$d.minutes = _(E / s), E %= s, this.$d.seconds = _(E / o), E %= o, this.$d.milliseconds = E;
      }, C.toISOString = function() {
        var E = Z(this.$d.years, "Y"), L = Z(this.$d.months, "M"), Y = +this.$d.days || 0;
        this.$d.weeks && (Y += 7 * this.$d.weeks);
        var R = Z(Y, "D"), Q = Z(this.$d.hours, "H"), V = Z(this.$d.minutes, "M"), A = this.$d.seconds || 0;
        this.$d.milliseconds && (A += this.$d.milliseconds / 1e3);
        var x = Z(A, "S"), w = E.negative || L.negative || R.negative || Q.negative || V.negative || x.negative, D = Q.format || V.format || x.format ? "T" : "", g = (w ? "-" : "") + "P" + E.format + L.format + R.format + D + Q.format + V.format + x.format;
        return g === "P" || g === "-P" ? "P0D" : g;
      }, C.toJSON = function() {
        return this.toISOString();
      }, C.format = function(E) {
        var L = E || "YYYY-MM-DDTHH:mm:ss", Y = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return L.replace(l, function(R, Q) {
          return Q || String(Y[R]);
        });
      }, C.as = function(E) {
        return this.$ms / f[M(E)];
      }, C.get = function(E) {
        var L = this.$ms, Y = M(E);
        return Y === "milliseconds" ? L %= 1e3 : L = Y === "weeks" ? _(L / f[Y]) : this.$d[Y], L === 0 ? 0 : L;
      }, C.add = function(E, L, Y) {
        var R;
        return R = L ? E * f[M(L)] : m(E) ? E.$ms : v(E, this).$ms, v(this.$ms + R * (Y ? -1 : 1), this);
      }, C.subtract = function(E, L) {
        return this.add(E, L, !0);
      }, C.locale = function(E) {
        var L = this.clone();
        return L.$l = E, L;
      }, C.clone = function() {
        return v(this.$ms, this);
      }, C.humanize = function(E) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!E);
      }, C.milliseconds = function() {
        return this.get("milliseconds");
      }, C.asMilliseconds = function() {
        return this.as("milliseconds");
      }, C.seconds = function() {
        return this.get("seconds");
      }, C.asSeconds = function() {
        return this.as("seconds");
      }, C.minutes = function() {
        return this.get("minutes");
      }, C.asMinutes = function() {
        return this.as("minutes");
      }, C.hours = function() {
        return this.get("hours");
      }, C.asHours = function() {
        return this.as("hours");
      }, C.days = function() {
        return this.get("days");
      }, C.asDays = function() {
        return this.as("days");
      }, C.weeks = function() {
        return this.get("weeks");
      }, C.asWeeks = function() {
        return this.as("weeks");
      }, C.months = function() {
        return this.get("months");
      }, C.asMonths = function() {
        return this.as("months");
      }, C.years = function() {
        return this.get("years");
      }, C.asYears = function() {
        return this.as("years");
      }, h;
    }();
    return function(h, C, E) {
      t = E, r = E().$utils(), E.duration = function(R, Q) {
        var V = E.locale();
        return v(R, { $l: V }, Q);
      }, E.isDuration = m;
      var L = C.prototype.add, Y = C.prototype.subtract;
      C.prototype.add = function(R, Q) {
        return m(R) && (R = R.asMilliseconds()), L.bind(this)(R, Q);
      }, C.prototype.subtract = function(R, Q) {
        return m(R) && (R = R.asMilliseconds()), Y.bind(this)(R, Q);
      };
    };
  });
})(bo);
const Co = Ot;
var So = "Expected a function", dn = 0 / 0, $o = "[object Symbol]", ko = /^\s+|\s+$/g, Eo = /^[-+]0x[0-9a-f]+$/i, Mo = /^0b[01]+$/i, _o = /^0o[0-7]+$/i, Oo = parseInt, Po = typeof ye == "object" && ye && ye.Object === Object && ye, Ao = typeof self == "object" && self && self.Object === Object && self, To = Po || Ao || Function("return this")(), Ro = Object.prototype, Do = Ro.toString, Io = Math.max, No = Math.min, mt = function() {
  return To.Date.now();
};
function Lo(e, n, t) {
  var r, o, s, i, a, l, c = 0, d = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(So);
  n = un(n) || 0, Pt(t) && (d = !!t.leading, p = "maxWait" in t, s = p ? Io(un(t.maxWait) || 0, n) : s, f = "trailing" in t ? !!t.trailing : f);
  function m(C) {
    var E = r, L = o;
    return r = o = void 0, c = C, i = e.apply(L, E), i;
  }
  function v(C) {
    return c = C, a = setTimeout(_, n), d ? m(C) : i;
  }
  function M(C) {
    var E = C - l, L = C - c, Y = n - E;
    return p ? No(Y, s - L) : Y;
  }
  function k(C) {
    var E = C - l, L = C - c;
    return l === void 0 || E >= n || E < 0 || p && L >= s;
  }
  function _() {
    var C = mt();
    if (k(C))
      return z(C);
    a = setTimeout(_, M(C));
  }
  function z(C) {
    return a = void 0, f && r ? m(C) : (r = o = void 0, i);
  }
  function Z() {
    a !== void 0 && clearTimeout(a), c = 0, r = l = o = a = void 0;
  }
  function N() {
    return a === void 0 ? i : z(mt());
  }
  function h() {
    var C = mt(), E = k(C);
    if (r = arguments, o = this, l = C, E) {
      if (a === void 0)
        return v(l);
      if (p)
        return a = setTimeout(_, n), m(l);
    }
    return a === void 0 && (a = setTimeout(_, n)), i;
  }
  return h.cancel = Z, h.flush = N, h;
}
function Pt(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function Zo(e) {
  return !!e && typeof e == "object";
}
function Wo(e) {
  return typeof e == "symbol" || Zo(e) && Do.call(e) == $o;
}
function un(e) {
  if (typeof e == "number")
    return e;
  if (Wo(e))
    return dn;
  if (Pt(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Pt(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(ko, "");
  var t = Mo.test(e);
  return t || _o.test(e) ? Oo(e.slice(2), t ? 2 : 8) : Eo.test(e) ? dn : +e;
}
var At = Lo;
const st = [0, 1], Yo = (e) => st.includes(e), dt = (e, n) => {
  const t = n === 0 ? Math.ceil(window.innerWidth / Se) * 3 : Math.ceil(window.innerWidth / ue) * 3, r = n === 0 ? e.subtract(t / 3 + 3, "weeks").set("day", 1) : e.subtract(t / 3 + 3, "days"), o = n === 0 ? r.add(t, "weeks") : r.add(t, "days");
  return {
    startDate: r,
    endDate: o
  };
}, zo = (e, n) => {
  const t = dt(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, vt = (e) => e === 0 ? Math.ceil(window.innerWidth / Se) * be : Math.ceil(window.innerWidth / ue) * be, Vn = Sn({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: j(),
  isLoading: !1,
  cols: 0,
  startDate: {
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
j.extend(po);
j.extend(vo);
j.extend(go);
j.extend(xo);
j.extend(Co);
const Ho = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = j(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: a
}) => {
  const { zoom: l, maxRecordsPerPage: c = 50 } = r, [d, p] = pe(l), [f, m] = pe(j()), [v, M] = pe(!1), [k, _] = pe(vt(d)), z = st[d] !== st[st.length - 1], Z = d !== 0, N = $e(() => zo(f, d), [f, d]), h = dt(f, d).startDate, C = j(h).dayOfYear(), E = jn(h), L = ve(null), [Y, R] = pe([{ x: 0, y: 0 }]), Q = 2, V = me(
    (P, u = "smooth") => {
      var F, b, J, G;
      switch (P) {
        case "back":
          return (F = L.current) == null ? void 0 : F.scrollTo({
            behavior: u,
            left: d === 0 ? Se * be : ue * be
          });
        case "forward":
          return (b = L.current) == null ? void 0 : b.scrollTo({
            behavior: u,
            left: d === 0 ? window.innerWidth + (k / be - be + Q) * Se : window.innerWidth + (k / be - be + Q) * ue
          });
        case "middle":
          return (J = L.current) == null ? void 0 : J.scrollTo({
            behavior: u,
            left: window.innerWidth
          });
        default:
          return (G = L.current) == null ? void 0 : G.scrollTo({
            behavior: u,
            left: window.innerWidth
          });
      }
    },
    [k, d]
  ), A = (P) => {
    R(P);
  }, x = me(
    (P) => {
      At(() => {
        switch (P) {
          case "back":
            m((F) => F.subtract(cn, "weeks"));
            break;
          case "forward":
            m((F) => F.add(cn, "weeks"));
            break;
          case "middle":
            m(j());
            break;
        }
        s == null || s(N);
      }, 300)();
    },
    [s, N]
  );
  fe(() => {
    L.current = document.getElementById(Bt);
  }, []), fe(() => {
    const P = () => _(vt(d));
    return window.addEventListener("resize", P), () => window.removeEventListener("resize", P);
  }, [d]), fe(() => {
    s == null || s(N);
  }, [s, N]), fe(() => {
    M(!1);
  }, [o]), fe(() => {
    v || (V("middle", "auto"), M(!0), m(o));
  }, [o, v, V]);
  const w = () => {
    t || (m((P) => P.add(an, "weeks")), s == null || s(N));
  }, D = me(() => {
    t || (x("forward"), V("forward"));
  }, [t, x, V]), g = () => {
    t || (m((P) => P.subtract(an, "weeks")), s == null || s(N));
  }, I = me(() => {
    !v || t || (x("back"), V("back"));
  }, [v, t, x, V]), H = me(() => {
    t || (x("middle"), V("middle"));
  }, [t, x, V]), X = () => S(d + 1), ee = () => S(d - 1), S = (P) => {
    Yo(P) && (p(P), _(vt(P)), s == null || s(N));
  }, $ = () => i == null ? void 0 : i(), { Provider: O } = Vn;
  return /* @__PURE__ */ T(
    O,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: w,
        handleScrollNext: D,
        handleGoPrev: g,
        handleScrollPrev: I,
        handleGoToday: H,
        zoomIn: X,
        zoomOut: ee,
        zoom: d,
        isNextZoom: z,
        isPrevZoom: Z,
        date: f,
        isLoading: t,
        cols: k,
        startDate: E,
        dayOfYear: C,
        handleFilterData: $,
        tilesCoords: Y,
        updateTilesCoords: A,
        recordsThreshold: c,
        onClearFilterData: a
      },
      children: n
    }
  );
}, Ve = () => Re(Vn), Gn = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Bo = W.div`
  height: calc(100vh - headerHeight);
`, jo = W.div`
  position: relative;
`, Fo = W.canvas``;
W.canvas``;
const hn = W.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, Vo = tr(function({ zoom: n, rows: t, data: r, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: a, date: l, isLoading: c, cols: d, startDate: p } = Ve(), f = ve(null), m = ve(null), v = ve(null), M = me(
    (k) => {
      const _ = window.innerWidth * be, z = t * ge + 1;
      Gn(k, _, z), ho(k, n, t, d, p);
    },
    [d, p, t, n]
  );
  return fe(() => {
    if (!f.current)
      return;
    const k = f.current.getContext("2d");
    if (!k)
      return;
    const _ = () => M(k);
    return window.addEventListener("resize", _), () => window.removeEventListener("resize", _);
  }, [M]), fe(() => {
    const k = f.current;
    if (!k)
      return;
    k.style.letterSpacing = "1px";
    const _ = k.getContext("2d");
    _ && M(_);
  }, [l, t, n, M]), fe(() => {
    if (!m.current)
      return;
    const k = new IntersectionObserver(
      (_) => _[0].isIntersecting ? i() : null
    );
    return k.observe(m.current), () => k.disconnect();
  }, [i]), fe(() => {
    if (!v.current)
      return;
    const k = new IntersectionObserver(
      (_) => _[0].isIntersecting ? a() : null,
      { rootMargin: `0px 0px 0px -${Ae}px` }
    );
    return k.observe(v.current), () => k.disconnect();
  }, [a]), /* @__PURE__ */ T(Bo, { id: Wn, children: /* @__PURE__ */ oe(jo, { ref: s, children: [
    /* @__PURE__ */ T(hn, { position: "left", ref: v }),
    /* @__PURE__ */ T(yn, { isLoading: c, position: "left" }),
    /* @__PURE__ */ T(Fo, { ref: f }),
    /* @__PURE__ */ T($i, { data: r, zoom: n, onTileClick: o }),
    /* @__PURE__ */ T(hn, { ref: m, position: "right" }),
    /* @__PURE__ */ T(yn, { isLoading: c, position: "right" })
  ] }) });
}), Un = (e) => {
  const n = j.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, Xn = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / Ze);
    t += o.hours + s, r += n % Ze, r >= Ze && (t++, r -= Ze);
  }), { hours: t, minutes: r };
}, Jn = (e, n) => {
  const t = n === 0 ? oo : so, r = () => {
    let s = t - e.hours - 1, i = Ze - e.minutes;
    return i === Ze && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, Go = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((c) => {
    const d = j(c.startDate).isoWeek(), p = j(c.startDate).isoWeekday(), f = j(c.endDate).isoWeek(), m = j(c.endDate).isoWeekday(), { hours: v, minutes: M } = Un(c.occupancy);
    if (r === d) {
      const k = (Oe + 1 - p) * v, _ = (Oe + 1 - p) * M;
      return { hours: Math.max(0, k), minutes: _ };
    } else if (r === f) {
      const k = m > Oe ? Oe * v : m * v, _ = m > Oe ? Oe * M : m * M;
      return { hours: k, minutes: _ };
    } else if (j(n).isBetween(c.startDate, c.endDate))
      return { hours: Oe * v, minutes: Oe * M };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = Xn(o), { free: a, overtime: l } = Jn({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: a,
    overtime: l
  };
}, Uo = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((d) => {
    const { hours: p, minutes: f } = Un(d.occupancy);
    return o <= (r ? 7 : 5) ? { hours: p, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: a } = Xn(s), { free: l, overtime: c } = Jn({ hours: i, minutes: a }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, a) },
    free: l,
    overtime: c
  };
}, Xo = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 0 ? j(i.startDate).isBetween(
    j(t),
    j(t).add(6, "days"),
    "day",
    "[]"
  ) || j(t).isBetween(j(i.startDate), j(i.endDate), "day", "[]") : j(t).isBetween(i.startDate, i.endDate, "day", "[]"));
  return r === 0 ? Go(s, t, r) : Uo(s, t, r, o);
}, Jo = (e, n, t, r, o, s = !1) => {
  const i = o === 0 ? Se : ue, a = Math.ceil(n.x / i), l = j(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(
    a - 1,
    o === 0 ? "weeks" : "days"
  ), c = Math.ceil(n.y / ge), d = t.findIndex((v, M, k) => k.slice(0, M + 1).reduce((z, Z) => z + Z, 0) >= c), p = a * i, f = (c - 1) * ge + ge, m = Xo(
    r[d],
    d,
    l,
    o,
    s
  );
  return { coords: { x: p, y: f }, resourceIndex: d, disposition: m };
}, qo = (e, n, t, r) => {
  const o = [];
  let s = 0, i = [], a = 0;
  return n.length > r ? (n.forEach((l, c) => {
    const d = { id: e[c].id, label: e[c].label, data: l };
    a >= r && (o.push(i), s += i.length, i = [], a = 0), a++, i.push(d);
  }), t.slice(s).length <= r && (i = [], n.slice(s).forEach((l, c) => {
    const d = {
      id: e[c + s].id,
      label: e[c + s].label,
      data: l
    };
    i.push(d), c === n.length - s - 1 && o.push(i);
  })), o) : (n.forEach((l, c) => {
    const d = { id: e[c].id, label: e[c].label, data: l };
    i.push(d);
  }), o.push(i), o);
}, Ko = (e, n) => {
  const t = [];
  for (const r of e) {
    let o = !1;
    if (t.length)
      for (const s of t) {
        let i = !1;
        for (let a = 0; a < s.length; a++) {
          if (j(r.startDate).isBetween(s[a].startDate, s[a].endDate, null, "[]") || j(r.endDate).isBetween(s[a].startDate, s[a].endDate, null, "[]")) {
            i = !0;
            break;
          }
          if (j(r.startDate).isBefore(n.startDate, "day") && j(r.endDate).isAfter(n.endDate, "day")) {
            i = !0;
            break;
          }
        }
        if (!i) {
          s.push(r), o = !0;
          break;
        }
      }
    o || t.push([r]);
  }
  return t;
}, Qo = (e, n) => {
  const t = [[], []], [r, o] = e.reduce((s, i) => {
    const a = Ko(i.data, n);
    return s[0].push(a), s[1].push(Math.max(a.length, 1)), s;
  }, t);
  return { projectsPerPerson: r, rowsPerPerson: o };
}, es = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, ts = (e, n) => {
  const { recordsThreshold: t } = Ve(), [r, o] = pe(0), [s, i] = pe(0), a = ve(null);
  fe(() => {
    a.current = document.getElementById(Bt);
  }, []);
  const { projectsPerPerson: l, rowsPerPerson: c } = $e(
    () => Qo(e, n),
    [e, n]
  ), d = $e(
    () => qo(e, l, c, t),
    [e, l, t, c]
  ), p = me(() => {
    d[s].length && a.current && (a.current.scroll({ top: 0 }), o((_) => _ + d[Math.max(s, 0)].length), i((_) => Math.min(_ + 1, d.length - 1)), window.scroll({ top: 0 }));
  }, [s, d]), f = me(() => {
    d[s].length && (o((_) => Math.max(_ - d[s - 1].length, 0)), i((_) => Math.max(_ - 1, 0)));
  }, [s, d]), m = me(() => {
    o(0), i(0);
  }, []), v = r + d[s].length, M = $e(
    () => c.slice(r, v),
    [v, c, r]
  ), k = $e(
    () => l.slice(r, v),
    [v, l, r]
  );
  return {
    page: d[s],
    currentPageNum: s,
    pagesAmount: d.length,
    projectsPerPerson: k,
    rowsPerItem: M,
    totalRowsPerPage: es(d[s]),
    next: p,
    previous: f,
    reset: m
  };
};
var Tt = {}, ns = {
  get exports() {
    return Tt;
  },
  set exports(e) {
    Tt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(ns);
const rs = Tt;
var Rt = {}, os = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
};
(function(e, n) {
  (function(t, r) {
    e.exports = r(lt);
  })(ye, function(t) {
    function r(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var o = r(t);
    function s(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function i(f, m, v) {
      var M = f + " ";
      switch (v) {
        case "m":
          return m ? "minuta" : "minutę";
        case "mm":
          return M + (s(f) ? "minuty" : "minut");
        case "h":
          return m ? "godzina" : "godzinę";
        case "hh":
          return M + (s(f) ? "godziny" : "godzin");
        case "MM":
          return M + (s(f) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (s(f) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), c = /D MMMM/, d = function(f, m) {
      return c.test(m) ? a[f.month()] : l[f.month()];
    };
    d.s = l, d.f = a;
    var p = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(p, null, !0), p;
  });
})(os);
const ss = Rt, is = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, as = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Qe = [
  {
    id: "en",
    name: "ENGLISH",
    lang: is,
    translateCode: "en-GB"
  },
  {
    id: "pl",
    name: "POLISH",
    lang: as,
    translateCode: "pl-PL"
  }
], qn = Sn({
  locales: Qe,
  currentLocale: Qe[0],
  setCurrentLocale: () => {
  }
}), cs = ({ children: e, lang: n }) => {
  const [t, r] = pe("en"), o = me(() => {
    const c = Qe.find((d) => d.id === t);
    return (c == null ? void 0 : c.id) === "en" ? j.locale({ ...rs }) : j.locale({ ...ss }), c || Qe[0];
  }, [t]), [s, i] = pe(o()), a = (c) => {
    localStorage.setItem("locale", c.translateCode), i(c);
  };
  fe(() => {
    const c = localStorage.getItem("locale"), d = n ?? c ?? "en";
    localStorage.setItem("locale", d), r(d), i(o());
  }, [o, n]);
  const { Provider: l } = qn;
  return /* @__PURE__ */ T(l, { value: { currentLocale: s, locales: Qe, setCurrentLocale: a }, children: e });
}, Ge = () => Re(qn).currentLocale.lang, ls = (e) => /* @__PURE__ */ B.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ B.createElement("defs", null, /* @__PURE__ */ B.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ B.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ B.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ B.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ B.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ B.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ B.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ B.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ B.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ B.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), ds = W.div`
  position: absolute;
  height: 440px;
  width: 514px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`, us = W.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
`, hs = () => {
  const { feelingEmpty: e } = Ge();
  return /* @__PURE__ */ oe(ds, { children: [
    /* @__PURE__ */ T(ls, {}),
    /* @__PURE__ */ T(us, { children: e })
  ] });
}, fs = W.div`
  position: relative;
  display: flex;
`, ps = W.div`
  position: relative;
  margin-left: ${Ae};
  display: flex;
  flex-direction: column;
  contain: paint;
`, fn = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, ms = ({ data: e, onTileClick: n, onItemClick: t, topBarWidth: r }) => {
  const [o, s] = pe(fn), [i, a] = pe(e), [l, c] = pe(!1), [d, p] = pe(""), {
    zoom: f,
    startDate: m,
    date: v,
    config: { includeTakenHoursOnWeekendsInDayView: M, showTooltip: k }
  } = Ve(), _ = ve(null), z = $e(() => dt(v, f), [v, f]), {
    page: Z,
    projectsPerPerson: N,
    totalRowsPerPage: h,
    rowsPerItem: C,
    currentPageNum: E,
    pagesAmount: L,
    next: Y,
    previous: R,
    reset: Q
  } = ts(i, z), V = ve(
    At(
      (D, g, I, H, X) => {
        if (!_.current)
          return;
        const { left: ee, top: S } = _.current.getBoundingClientRect(), $ = { x: D.clientX - ee, y: D.clientY - S }, {
          coords: { x: O, y: P },
          resourceIndex: u,
          disposition: F
        } = Jo(
          g,
          $,
          I,
          H,
          X,
          M
        );
        s({ coords: { x: O, y: P }, resourceIndex: u, disposition: F }), c(!0);
      },
      300
    )
  ), A = ve(
    At((D, g) => {
      Q(), a(
        D.filter(
          (I) => I.label.title.toLowerCase().includes(g.toLowerCase())
        )
      );
    }, 500)
  ), x = (D) => {
    const g = D.target.value;
    p(g), A.current.cancel(), A.current(e, g);
  }, w = me(() => {
    V.current.cancel(), c(!1), s(fn);
  }, []);
  return fe(() => {
    const D = (I) => V.current(I, m, C, N, f), g = _.current;
    if (g)
      return g.addEventListener("mousemove", D), g.addEventListener("mouseleave", w), () => {
        g.removeEventListener("mousemove", D), g.removeEventListener("mouseleave", w);
      };
  }, [V, w, N, C, m, f]), fe(() => {
    d || a(e);
  }, [e, d]), /* @__PURE__ */ oe(fs, { children: [
    /* @__PURE__ */ T(
      Ks,
      {
        data: Z,
        pageNum: E,
        pagesAmount: L,
        rows: C,
        onLoadNext: Y,
        onLoadPrevious: R,
        searchInputValue: d,
        onSearchInputChange: x,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ oe(ps, { children: [
      /* @__PURE__ */ T(pi, { zoom: f, topBarWidth: r }),
      e.length ? /* @__PURE__ */ T(
        Vo,
        {
          data: Z,
          zoom: f,
          rows: h,
          ref: _,
          onTileClick: n
        }
      ) : /* @__PURE__ */ T(hs, {}),
      k && l && (o == null ? void 0 : o.resourceIndex) > -1 && /* @__PURE__ */ T(Pi, { tooltipData: o, zoom: f })
    ] })
  ] });
}, Kn = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, vs = W.div`
  width: calc(${({ width: e }) => e}px - ${Ae}px);
  position: sticky;
  top: 0;
  left: ${Ae}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, ys = W.div`
  display: flex;
  gap: 1.875rem;
`, pn = W.button`
  ${Kn};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  :not(:disabled) {
    cursor: pointer;
  }
`, gs = W.button`
  ${Kn};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.blue900};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, ws = W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
`, xs = W.div`
  display: flex;
`, bs = ({ width: e }) => {
  const { topbar: n } = Ge(), {
    data: t,
    config: r,
    handleGoNext: o,
    handleGoPrev: s,
    handleGoToday: i,
    zoomIn: a,
    zoomOut: l,
    isNextZoom: c,
    isPrevZoom: d,
    handleFilterData: p,
    onClearFilterData: f
  } = Ve(), { colors: m } = Ht(), { filterButtonState: v = -1 } = r, M = (k) => {
    k.stopPropagation(), f == null || f();
  };
  return /* @__PURE__ */ oe(vs, { width: e, children: [
    /* @__PURE__ */ T(xs, { children: v >= 0 && /* @__PURE__ */ oe(
      yt,
      {
        variant: v ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: p,
        children: [
          n.filters,
          !!v && /* @__PURE__ */ T("span", { onClick: M, children: /* @__PURE__ */ T(Ce, { iconName: "close", height: "16", width: "16" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ oe(ys, { children: [
      /* @__PURE__ */ oe(pn, { disabled: !(t != null && t.length), onClick: s, children: [
        /* @__PURE__ */ T(Ce, { iconName: "arrowLeft", height: "15", fill: "#3B3C5F" }),
        n.prev
      ] }),
      /* @__PURE__ */ T(gs, { onClick: i, children: n.today }),
      /* @__PURE__ */ oe(pn, { disabled: !(t != null && t.length), onClick: o, children: [
        n.next,
        /* @__PURE__ */ T(Ce, { iconName: "arrowRight", height: "15", fill: m.blue900 })
      ] })
    ] }),
    /* @__PURE__ */ oe(ws, { children: [
      n.view,
      /* @__PURE__ */ T(
        yt,
        {
          isDisabled: !d,
          onClick: l,
          isFullRounded: !0,
          iconName: "subtract",
          width: "14"
        }
      ),
      /* @__PURE__ */ T(
        yt,
        {
          isDisabled: !c,
          onClick: a,
          isFullRounded: !0,
          iconName: "add",
          width: "14"
        }
      )
    ] })
  ] });
}, Cs = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), Ss = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), $s = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), ks = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), Es = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), Ms = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), _s = (e) => /* @__PURE__ */ B.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), Os = (e) => /* @__PURE__ */ B.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), Ps = (e) => /* @__PURE__ */ B.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z", fill: "#0A11EB" })), As = (e) => /* @__PURE__ */ B.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z", fill: "#0A11EB" })), Ts = (e) => /* @__PURE__ */ B.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Rs = (e) => /* @__PURE__ */ B.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ B.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z", fill: "white" })), Ds = {
  add: Cs,
  subtract: Ss,
  filter: $s,
  arrowLeft: ks,
  arrowRight: Es,
  defaultAvatar: Ms,
  calendarWarning: _s,
  calendarFree: Os,
  arrowDown: As,
  arrowUp: Ps,
  search: Ts,
  close: Rs
}, Ce = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = Ht(), i = Ds[e];
  return i ? /* @__PURE__ */ T(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.blue400,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, Is = W.button`
  outline: none;
  background: ${({ theme: e, variant: n }) => n === "filled" ? e.colors.blue400 : "none"};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border: 1px solid
    ${({ theme: e, disabled: n }) => n ? e.colors.grey600 : e.colors.blue400};
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: pointer;
  color: ${({ theme: e, variant: n }) => n === "filled" ? e.colors.white : e.colors.blue400};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
`, yt = ({
  iconName: e,
  width: n,
  height: t,
  fill: r,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: a,
  isDisabled: l,
  variant: c = "outlined"
}) => {
  const { colors: d } = Ht();
  return /* @__PURE__ */ oe(
    Is,
    {
      onClick: s,
      isFullRounded: a,
      hasChildren: !!i,
      disabled: l,
      variant: c,
      children: [
        /* @__PURE__ */ T(
          Ce,
          {
            iconName: e,
            width: n,
            height: t,
            fill: l ? d.grey600 : r,
            className: o
          }
        ),
        i
      ]
    }
  );
}, Ns = W.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: white;
`, Ls = W.div`
  position: relative;
`, Ri = ({
  data: e,
  config: n,
  startDate: t,
  onRangeChange: r,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: a,
  isLoading: l
}) => {
  var v;
  const c = $e(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      ...n
    }),
    [n]
  ), d = ve(null), [p, f] = pe((v = d.current) == null ? void 0 : v.clientWidth), m = $e(() => j(t), [t]);
  return fe(() => {
    const M = () => {
      d.current && f(d.current.clientWidth);
    };
    return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, []), d.current, /* @__PURE__ */ oe(It, { children: [
    /* @__PURE__ */ T(Kr, {}),
    /* @__PURE__ */ T(Ur, { theme: ae, children: /* @__PURE__ */ T(cs, { lang: c.lang, children: /* @__PURE__ */ T(
      Ho,
      {
        data: e,
        isLoading: !!l,
        config: c,
        onRangeChange: r,
        defaultStartDate: m,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ T(
          Ns,
          {
            showScroll: !!e.length,
            id: Bt,
            ref: d,
            children: /* @__PURE__ */ T(Ls, { children: /* @__PURE__ */ T(
              ms,
              {
                data: e,
                onTileClick: o,
                topBarWidth: p ?? 0,
                onItemClick: a
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, Zs = W.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.grey400}` : "none"};
`, Ws = W.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme: e }) => e.colors.white};
  border: 1px solid ${({ theme: e }) => e.colors.blue400};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.blue400};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, Ys = W.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, zs = W.p`
  ${je}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, mn = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: a } = Ge(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${a} ${o}/${s}`;
  return /* @__PURE__ */ T(Zs, { intent: e, children: /* @__PURE__ */ oe(Ws, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ T(Ys, { children: t }),
    /* @__PURE__ */ T(zs, { children: l })
  ] }) });
}, Hs = W.div`
  min-width: ${Ae + "px"};
  max-width: ${Ae + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.white};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Bs = W.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Ae}px;
  background-color: ${({ theme: e }) => e.colors.white};
  z-index: 3;
`, js = W.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.grey600};
  }
`, Fs = W.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.blue100};
  border: 1px solid
    ${({ theme: e, isFocused: n }) => n ? e.colors.blue400 : e.colors.grey400};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, Vs = W.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${ge}px;
  height: calc(${ge}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.grey400};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.blue200};
  }
`, Gs = W.div`
  display: flex;
  align-items: center;
`, Us = W.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Xs = W.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, Js = W.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, vn = W.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? 1 + "px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e }) => e ? ae.colors.black : ae.colors.grey600};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, qs = ({ id: e, item: n, rows: t, onItemClick: r }) => /* @__PURE__ */ T(
  Vs,
  {
    title: n.title + " | " + n.subtitle,
    clickable: typeof r == "function",
    rows: t,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ oe(Gs, { children: [
      /* @__PURE__ */ T(Us, { children: n.icon ? /* @__PURE__ */ T(Xs, { src: n.icon, alt: "Icon" }) : /* @__PURE__ */ T(Ce, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ oe(Js, { children: [
        /* @__PURE__ */ T(vn, { isMain: !0, children: n.title }),
        /* @__PURE__ */ T(vn, { children: n.subtitle })
      ] })
    ] })
  }
), Ks = ({
  data: e,
  rows: n,
  onLoadNext: t,
  onLoadPrevious: r,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: a,
  onItemClick: l
}) => {
  const [c, d] = pe(!1), { search: p } = Ge(), f = () => d((m) => !m);
  return /* @__PURE__ */ oe(Hs, { children: [
    /* @__PURE__ */ oe(Bs, { children: [
      /* @__PURE__ */ oe(Fs, { isFocused: c, children: [
        /* @__PURE__ */ T(
          js,
          {
            placeholder: p,
            value: i,
            onChange: a,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ T(Ce, { iconName: "search" })
      ] }),
      /* @__PURE__ */ T(
        mn,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: r,
          icon: /* @__PURE__ */ T(Ce, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((m, v) => /* @__PURE__ */ T(
      qs,
      {
        id: m.id,
        item: m.label,
        rows: n[v],
        onItemClick: l
      },
      m.id
    )),
    /* @__PURE__ */ T(
      mn,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ T(Ce, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, Qs = W.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.blue200};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, ei = qr`
from{
    left: -100%;
}
to{
    left: 100%;
}`, ti = W.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${ei} 1s infinite;
`, ni = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ T(Qs, { position: n, children: /* @__PURE__ */ T(ti, {}) }) : null, yn = ni, ri = ae.colors.white, Ue = (e) => {
  const {
    ctx: n,
    x: t,
    y: r,
    width: o,
    height: s,
    textYPos: i,
    label: a,
    font: l,
    isBottomRow: c,
    fillStyle: d,
    topText: p,
    bottomText: f
  } = e;
  if (n.beginPath(), n.strokeStyle = ae.colors.grey400, n.setLineDash([]), a && l && i) {
    n.fillStyle = ri, n.fillRect(t, r, o, s), n.strokeRect(t + 0.5, r + 0.5, o, s), n.font = l;
    const m = t + o / 2 - n.measureText(a).width / 2;
    n.textBaseline = "middle", n.fillStyle = ae.colors.grey600, n.fillText(a, m, i);
  }
  if (c && d && p && f) {
    n.fillStyle = d, n.fillRect(t, r, o, s), n.strokeRect(t + 0.5, r + 0.5, o, s), n.font = p.font;
    const m = t + o / 2 - n.measureText(p.label).width / 2;
    n.fillStyle = p.color, n.fillText(p.label, m, p.y), n.font = f.font;
    const v = t + o / 2 - n.measureText(f.label).width / 2;
    n.fillStyle = f.color, n.fillText(f.label, v, f.y);
  }
}, Qn = (e) => {
  const { isCurrent: n, isBusinessDay: t, variant: r } = e;
  return r === "yearView" ? n ? ae.colors.blue300 : sn : n ? ae.colors.blue300 : t ? sn : ae.colors.blue200;
}, Dt = (e) => {
  const { isCurrent: n, isBusinessDay: t, variant: r } = e;
  return n ? r === "bottomRow" ? ae.colors.grey600 : ae.colors.blue400 : t ? r === "bottomRow" ? ae.colors.grey600 : ae.colors.black : ae.colors.grey600;
}, oi = (e, n, t) => {
  const r = Be - Ie / Qr, o = Be - Ie / eo, s = Me + Fe;
  let i = 0;
  for (let a = 0; a < n; a++) {
    const l = jn(
      j(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "days")
    );
    Ue({
      ctx: e,
      x: i,
      y: s,
      width: ue,
      height: Ie,
      isBottomRow: !0,
      fillStyle: Qn({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay }),
      topText: {
        y: r,
        label: l.dayName.toUpperCase(),
        font: Te.bottomRow.name,
        color: Dt({ isCurrent: l.isCurrentDay, isBusinessDay: l.isBusinessDay })
      },
      bottomText: {
        y: o,
        label: `${l.dayOfMonth}`,
        font: Te.bottomRow.number,
        color: Dt({
          isCurrent: l.isCurrentDay,
          isBusinessDay: l.isBusinessDay,
          variant: "bottomRow"
        })
      }
    }), i += ue;
  }
}, si = (e, n, t) => {
  let r = -(t.dayOfMonth - 1) * ke;
  const o = Me;
  let i = t.month;
  for (let a = 0; a < n; a++) {
    i >= $t && (i = 0);
    const l = Bn(t, a) * ke;
    Ue({
      ctx: e,
      x: r,
      y: o,
      width: l,
      height: Fe,
      textYPos: zn,
      label: j().month(i).format("MMMM").toUpperCase(),
      font: Te.bottomRow.number
    }), r += l, i++;
  }
}, ii = (e, n) => {
  let r = 0, o = 0, s = 0, i = j(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  r = -n.dayOfMonth * ue + ue;
  for (let a = 0; a < $t; a++)
    i > $t - 1 && (i = 0, s++), o = j(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(a, "months").daysInMonth() * ue, Ue({
      ctx: e,
      x: r,
      y: 0,
      width: o,
      height: Me,
      textYPos: Yn,
      label: j(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("MMMM").toUpperCase() + ` ${j(`${n.year + s}-${n.month + 1}-${n.dayOfMonth}`).month(i).format("YYYY")}`,
      font: Te.topRow
    }), r += o, i++;
}, ai = (e, n, t) => {
  const r = 7 * ue, o = Me, s = e.canvas.width / r + r, i = n.weekOfYear;
  let a = 0;
  for (let l = 0; l < s; l++) {
    const c = j(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let d = (i + l) % on;
    d <= 0 && (d += on), c !== 1 && l === 0 && (a = -c * ue + ue), Ue({
      ctx: e,
      x: a,
      y: o,
      width: r,
      height: Fe,
      textYPos: zn,
      label: `${t.toUpperCase()} ${d}`,
      font: Te.middleRow
    }), a += r;
  }
}, ci = (e, n, t, r) => {
  const o = Be - Ie / 1.6, s = Be - Ie / 4.5, i = Me + Fe;
  let a = 0;
  for (let l = 0; l < n; l++) {
    const c = j(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "weeks"
    ), d = c.isSame(j(), "week");
    Ue({
      ctx: e,
      x: a,
      y: i,
      width: Se,
      height: Ie,
      isBottomRow: !0,
      fillStyle: Qn({ isCurrent: d, variant: "yearView" }),
      topText: {
        y: o,
        label: c.isoWeek().toString(),
        font: Te.bottomRow.name,
        color: Dt({ isCurrent: d })
      },
      bottomText: {
        y: s,
        label: r.toUpperCase(),
        font: Te.middleRow,
        color: ae.colors.grey600
      }
    }), a += Se;
  }
}, li = (e, n, t) => {
  const o = n.year, s = e.canvas.width * 2;
  let i = 0, a = 0, l = (ln(o) - t + 1) * ke, c = 0;
  for (; i + c <= s; )
    a > 0 && (l = ln(o + a) * ke), c + l > s && a > 0 && (l = Math.ceil((s - c) / ke) * ke), Ue({
      ctx: e,
      x: i,
      y: 0,
      width: l,
      height: Me,
      textYPos: Yn,
      label: (o + a).toString(),
      font: Te.topRow
    }), i += l, c += l, a++;
}, di = (e, n, t, r, o, s) => {
  n === 0 ? (li(e, r, s), si(e, t, r), ci(e, t, r, o)) : (ii(e, r), ai(e, r, o), oi(e, t, r));
}, ui = W.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, hi = W.div`
  height: ${Be}px;
  display: block;
`, fi = W.canvas``, pi = ({ zoom: e, topBarWidth: n }) => {
  const { week: t } = Ge(), { date: r, cols: o, dayOfYear: s, startDate: i } = Ve(), a = ve(null), l = me(
    (c) => {
      const d = window.innerWidth * be, p = Be + 1;
      Gn(c, d, p), di(c, e, o, i, t, s);
    },
    [o, s, i, t, e]
  );
  return fe(() => {
    if (!a.current)
      return;
    const c = a.current.getContext("2d");
    if (!c)
      return;
    const d = () => l(c);
    return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [l]), fe(() => {
    const c = a.current;
    if (!c)
      return;
    c.style.letterSpacing = "1px";
    const d = c.getContext("2d");
    d && l(d);
  }, [r, e, l]), /* @__PURE__ */ oe(ui, { children: [
    /* @__PURE__ */ T(bs, { width: n }),
    /* @__PURE__ */ T(hi, { id: to, children: /* @__PURE__ */ T(fi, { ref: a }) })
  ] });
}, mi = (e, n, t) => {
  const r = t === 0 ? ke : ue, o = () => {
    const s = (e.startDate.diff(n.startDate, "day") + 1) * r;
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(n.startDate) && e.endDate.isBefore(n.endDate)) {
    const s = e.endDate.diff(e.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isBefore(n.endDate)) {
    const s = e.endDate.diff(n.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(n.startDate) && e.endDate.isAfter(n.endDate)) {
    const s = n.endDate.diff(e.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isAfter(n.endDate)) {
    const s = n.endDate.diff(n.startDate, "day") * r + r;
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, vi = (e, n, t, r, o, s) => {
  const i = e * ge + no, a = j(r).hour(0).minute(0), l = j(o).hour(23).minute(59);
  return {
    ...mi(
      { startDate: a, endDate: l },
      { startDate: n, endDate: t },
      s
    ),
    y: i
  };
}, yi = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, gi = W.button`
  ${je}
  height: ${ro}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: white;
  width: 100%;
  cursor: pointer;
`, wi = W.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, gn = W.p`
  ${je}
  ${Zn}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, xi = W.p`
  ${je}
  ${Zn}
`, bi = W.div`
  position: sticky;
  left: ${Ae + 16}px;
  overflow: hidden;
`, Ci = ({ row: e, data: n, zoom: t, onTileClick: r }) => {
  const { date: o } = Ve(), s = dt(o, t), { y: i, x: a, width: l } = vi(
    e,
    s.startDate,
    s.endDate,
    n.startDate,
    n.endDate,
    t
  );
  return /* @__PURE__ */ T(
    gi,
    {
      style: {
        left: `${a}px`,
        top: `${i}px`,
        backgroundColor: `${n.bgColor ?? io}`,
        width: `${l}px`,
        color: yi(n.bgColor ?? "")
      },
      onClick: () => r == null ? void 0 : r(n),
      children: /* @__PURE__ */ T(wi, { children: /* @__PURE__ */ oe(bi, { children: [
        /* @__PURE__ */ T(gn, { bold: !0, children: n.title }),
        /* @__PURE__ */ T(gn, { children: n.subtitle }),
        /* @__PURE__ */ T(xi, { children: n.description })
      ] }) })
    }
  );
}, Si = ({ data: e, zoom: n, onTileClick: t }) => {
  const r = me(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (a, l) => a.map((c) => /* @__PURE__ */ T(
        Ci,
        {
          row: l + o,
          data: c,
          zoom: n,
          onTileClick: t
        },
        c.id
      ))
    ))).flat(2);
  }, [e, t, n]);
  return /* @__PURE__ */ T(It, { children: r() });
}, $i = Si;
W.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
W.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
W.label`
  font-size: 14px;
`;
W.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
W.input`
  height: 18px;
  width: 18px;
`;
W.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
W.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const ki = W.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.blue900};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, Ei = W.div`
  width: 100%;
`, Mi = W.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.blue900};
`, _i = W.div``, wn = W.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, xn = W.div`
  ${je}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.white};
  line-height: 12px;
  letter-spacing: 0.5px;
`, bn = W.p`
  ${je}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.white};
`, Oi = W.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.red400};
`, Pi = ({ tooltipData: e, zoom: n }) => {
  const { taken: t, free: r, over: o } = Ge(), { coords: s, disposition: i } = e, a = ve(null), l = n === 0 ? Se : ue;
  return Cn(() => {
    if (!a.current)
      return;
    const { width: c } = a.current.getBoundingClientRect(), d = c / 2 + l / 2;
    a.current.style.left = `${s.x - d}px`, a.current.style.top = `${s.y + 8}px`;
  }, [s.x, l, i.overtime, s.y]), /* @__PURE__ */ oe(ki, { ref: a, children: [
    /* @__PURE__ */ T(Ei, { children: /* @__PURE__ */ oe(_i, { children: [
      /* @__PURE__ */ oe(wn, { children: [
        /* @__PURE__ */ T(Ce, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ oe(xn, { children: [
          /* @__PURE__ */ T(bn, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ oe(It, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ T(Oi, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ oe(wn, { children: [
        /* @__PURE__ */ T(Ce, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ T(xn, { children: /* @__PURE__ */ T(bn, { children: `${r}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ T(Mi, {})
  ] });
};
export {
  Ri as Scheduler
};
