﻿"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2617], {
    42617: function(A, f, v) {
        v.r(f),
        v.d(f, {
            default: function() {
                return t
            }
        });
        var I = v(85893),
            X = v(67288),
            r = v.n(X),
            u = v(67294),
        function t() {
            var A = (0, u.useRef)(null);
            return (0, u.useEffect)((function() {
                var f;
                return A.current && (f = r().loadAnimation({
                    container: A.current,
                    animationData: b,
                    loop: !1
                })), function() {
                    f && f.destroy()
                }
            }), []), (0, I.jsx)("div", {
                className: "absolute inset-x-0 z-10 -bottom-36 xs:-bottom-40 lg:-bottom-44",
                ref: A
            })
        }
    }
}]);
