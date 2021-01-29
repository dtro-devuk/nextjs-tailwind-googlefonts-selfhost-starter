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
  var baseFont = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf' : '/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf';
  var basePath = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css' : '/static/fonts/fonts.css';
  console.log(debug);
  console.log(basePath);
  var link = document.createElement('link');
  link.href = basePath;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var font = new FontFaceObserver('Grandstander Variable');
  font.load().then(function () {
    console.log('Font has loaded.');
    document.documentElement.classList.add('Grandstander Variable');
  })["catch"](function () {
    console.log('Font Sans failed to load.');
  });
};
{
  /* <link
  rel="preload"
  href="/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf"
  as="font"
  type="font/ttf"
  crossOrigin="anonymous"
  /> */
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiYmFzZUZvbnQiLCJiYXNlUGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImZvbnQiLCJsb2FkIiwidGhlbiIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFNQSxnQkFBZ0IsR0FBR0MsbUJBQU8sQ0FBQyx3RkFBRCxDQUFoQzs7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsTUFBTUMsS0FBSyxPQUFYO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUNELEtBQUQsR0FDYixtSEFEYSxHQUViLHNFQUZKO0FBSUEsTUFBTUUsUUFBUSxHQUFHLENBQUNGLEtBQUQsR0FDYixzRUFEYSxHQUViLHlCQUZKO0FBSUFHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBRUEsTUFBTUcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRixNQUFJLENBQUNHLElBQUwsR0FBWU4sUUFBWjtBQUNBRyxNQUFJLENBQUNJLEdBQUwsR0FBVyxZQUFYO0FBRUFILFVBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCTixJQUExQjtBQUVBLE1BQUlPLElBQUksR0FBRyxJQUFJZixnQkFBSixDQUFxQix1QkFBckIsQ0FBWDtBQUVBZSxNQUFJLENBQ0RDLElBREgsR0FFR0MsSUFGSCxDQUVRLFlBQU07QUFDVlgsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQUUsWUFBUSxDQUFDUyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsdUJBQXZDO0FBQ0QsR0FMSCxXQU1TLFlBQU07QUFDWGQsV0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDRCxHQVJIO0FBU0QsQ0E5Qk07QUFnQ1A7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNzc0MDJhZWU3Y2JiMGViNWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb250RmFjZU9ic2VydmVyID0gcmVxdWlyZSgnZm9udGZhY2VvYnNlcnZlcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdvb2dsZUZvbnRMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xyXG4gIGNvbnN0IGJhc2VGb250ID0gIWRlYnVnXHJcbiAgICA/ICcvbmV4dGpzLXRhaWx3aW5kLWdvb2dsZWZvbnRzLXNlbGZob3N0LXN0YXJ0ZXIvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0ZidcclxuICAgIDogJy9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci9HcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuXHJcbiAgY29uc3QgYmFzZVBhdGggPSAhZGVidWdcclxuICAgID8gJy9uZXh0anMtdGFpbHdpbmQtZ29vZ2xlZm9udHMtc2VsZmhvc3Qtc3RhcnRlci9zdGF0aWMvZm9udHMvZm9udHMuY3NzJ1xyXG4gICAgOiAnL3N0YXRpYy9mb250cy9mb250cy5jc3MnO1xyXG5cclxuICBjb25zb2xlLmxvZyhkZWJ1Zyk7XHJcbiAgY29uc29sZS5sb2coYmFzZVBhdGgpO1xyXG5cclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gIGxpbmsuaHJlZiA9IGJhc2VQYXRoO1xyXG4gIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG5cclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICB2YXIgZm9udCA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdHcmFuZHN0YW5kZXIgVmFyaWFibGUnKTtcclxuXHJcbiAgZm9udFxyXG4gICAgLmxvYWQoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRm9udCBoYXMgbG9hZGVkLicpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnR3JhbmRzdGFuZGVyIFZhcmlhYmxlJyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0ZvbnQgU2FucyBmYWlsZWQgdG8gbG9hZC4nKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxue1xyXG4gIC8qIDxsaW5rXHJcbnJlbD1cInByZWxvYWRcIlxyXG5ocmVmPVwiL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyL0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGZcIlxyXG5hcz1cImZvbnRcIlxyXG50eXBlPVwiZm9udC90dGZcIlxyXG5jcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbi8+ICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==