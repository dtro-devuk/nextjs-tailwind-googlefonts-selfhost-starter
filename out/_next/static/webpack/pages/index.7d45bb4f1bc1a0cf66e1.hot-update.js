webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/hooks.js":
/*!**********************!*\
  !*** ./lib/hooks.js ***!
  \**********************/
/*! exports provided: useGoogleFontLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleFontLoader", function() { return useGoogleFontLoader; });
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

var useGoogleFontLoader = function useGoogleFontLoader() {
  var debug = true;
  var basePath = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf' : '/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf';
  console.log(debug);
  console.log(basePath);
  var link = document.createElement('link');
  link.href = basePath;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var font = new FontFaceObserver('Grandstander Variable');
  font.load().then(function () {
    console.log('Output Sans has loaded.');
    document.documentElement.classList.add('Grandstander Variable');
  })["catch"](function () {
    console.log('Output Sans failed to load.');
  });
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiYmFzZVBhdGgiLCJjb25zb2xlIiwibG9nIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJyZWwiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJmb250IiwibG9hZCIsInRoZW4iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUdDLG1CQUFPLENBQUMsd0ZBQUQsQ0FBaEM7O0FBRU8sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLE1BQU1DLEtBQUssT0FBWDtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDRCxLQUFELEdBQ2IsbUhBRGEsR0FFYiwrREFGSjtBQUlBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUVBLE1BQU1HLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQUYsTUFBSSxDQUFDRyxJQUFMLEdBQVlOLFFBQVo7QUFDQUcsTUFBSSxDQUFDSSxHQUFMLEdBQVcsWUFBWDtBQUVBSCxVQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sSUFBMUI7QUFFQSxNQUFJTyxJQUFJLEdBQUcsSUFBSWQsZ0JBQUosQ0FBcUIsdUJBQXJCLENBQVg7QUFFQWMsTUFBSSxDQUNEQyxJQURILEdBRUdDLElBRkgsQ0FFUSxZQUFNO0FBQ1ZYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0FFLFlBQVEsQ0FBQ1MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLHVCQUF2QztBQUNELEdBTEgsV0FNUyxZQUFZO0FBQ2pCZCxXQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNELEdBUkg7QUFTRCxDQTFCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZDQ1YmI0ZjFiYzFhMGNmNjZlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9udEZhY2VPYnNlcnZlciA9IHJlcXVpcmUoJ2ZvbnRmYWNlb2JzZXJ2ZXInKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHb29nbGVGb250TG9hZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcclxuICBjb25zdCBiYXNlUGF0aCA9ICFkZWJ1Z1xyXG4gICAgPyAnL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyL0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGYnXHJcbiAgICA6ICcvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci9HcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuXHJcbiAgY29uc29sZS5sb2coZGVidWcpO1xyXG4gIGNvbnNvbGUubG9nKGJhc2VQYXRoKTtcclxuXHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICBsaW5rLmhyZWYgPSBiYXNlUGF0aDtcclxuICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgdmFyIGZvbnQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignR3JhbmRzdGFuZGVyIFZhcmlhYmxlJyk7XHJcblxyXG4gIGZvbnRcclxuICAgIC5sb2FkKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ091dHB1dCBTYW5zIGhhcyBsb2FkZWQuJyk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdHcmFuZHN0YW5kZXIgVmFyaWFibGUnKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnT3V0cHV0IFNhbnMgZmFpbGVkIHRvIGxvYWQuJyk7XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==