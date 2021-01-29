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
  var grandstanderV = 'Grandstander-VariableFont_wght.ttf';
  var oswaldV = 'Oswald-VariableFont_wght.ttf';
  var baseFont = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf' : '/static/fonts/google/grandstander/';
  var allfontsCss = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css' : '/static/fonts/fonts.css';
  console.log(debug);
  console.log(allfontsCss);
  var link = document.createElement('link');
  link.href = allfontsCss; //baseFont; // basePath;

  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
  var font = new FontFaceObserver('Grandstander Variable');
  var font = new FontFaceObserver('Oswald Variable');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiZ3JhbmRzdGFuZGVyViIsIm9zd2FsZFYiLCJiYXNlRm9udCIsImFsbGZvbnRzQ3NzIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwicmVsIiwidHlwZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImZvbnQiLCJsb2FkIiwidGhlbiIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFNQSxnQkFBZ0IsR0FBR0MsbUJBQU8sQ0FBQyx3RkFBRCxDQUFoQzs7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsTUFBTUMsS0FBSyxPQUFYO0FBRUEsTUFBTUMsYUFBYSxHQUFHLG9DQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyw4QkFBaEI7QUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0gsS0FBRCxHQUNiLG1IQURhLEdBRWIsb0NBRko7QUFJQSxNQUFNSSxXQUFXLEdBQUcsQ0FBQ0osS0FBRCxHQUNoQixzRUFEZ0IsR0FFaEIseUJBRko7QUFJQUssU0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVlGLFdBQVo7QUFFQSxNQUFNRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0FGLE1BQUksQ0FBQ0csSUFBTCxHQUFZTixXQUFaLENBbEJ1QyxDQWtCZDs7QUFDekJHLE1BQUksQ0FBQ0ksR0FBTCxHQUFXLFlBQVg7QUFDQUosTUFBSSxDQUFDSyxJQUFMLEdBQVksVUFBWjtBQUVBSixVQUFRLENBQUNLLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlAsSUFBMUI7QUFFQSxNQUFJUSxJQUFJLEdBQUcsSUFBSWxCLGdCQUFKLENBQXFCLHVCQUFyQixDQUFYO0FBQ0EsTUFBSWtCLElBQUksR0FBRyxJQUFJbEIsZ0JBQUosQ0FBcUIsaUJBQXJCLENBQVg7QUFFQWtCLE1BQUksQ0FDREMsSUFESCxHQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWWixXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBRSxZQUFRLENBQUNVLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1Qyx1QkFBdkM7QUFDRCxHQUxILFdBTVMsWUFBTTtBQUNYZixXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELEdBUkg7QUFTRCxDQXBDTTtBQXNDUDtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJjY2NjZjU4YjUzY2Q4NDg3MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvbnRGYWNlT2JzZXJ2ZXIgPSByZXF1aXJlKCdmb250ZmFjZW9ic2VydmVyJyk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR29vZ2xlRm9udExvYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcblxyXG4gIGNvbnN0IGdyYW5kc3RhbmRlclYgPSAnR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0Zic7XHJcbiAgY29uc3Qgb3N3YWxkViA9ICdPc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuXHJcbiAgY29uc3QgYmFzZUZvbnQgPSAhZGVidWdcclxuICAgID8gJy9uZXh0anMtdGFpbHdpbmQtZ29vZ2xlZm9udHMtc2VsZmhvc3Qtc3RhcnRlci9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci9HcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmJ1xyXG4gICAgOiAnL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyLyc7XHJcblxyXG4gIGNvbnN0IGFsbGZvbnRzQ3NzID0gIWRlYnVnXHJcbiAgICA/ICcvbmV4dGpzLXRhaWx3aW5kLWdvb2dsZWZvbnRzLXNlbGZob3N0LXN0YXJ0ZXIvc3RhdGljL2ZvbnRzL2ZvbnRzLmNzcydcclxuICAgIDogJy9zdGF0aWMvZm9udHMvZm9udHMuY3NzJztcclxuXHJcbiAgY29uc29sZS5sb2coZGVidWcpO1xyXG4gIGNvbnNvbGUubG9nKGFsbGZvbnRzQ3NzKTtcclxuXHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICBsaW5rLmhyZWYgPSBhbGxmb250c0NzczsgLy9iYXNlRm9udDsgLy8gYmFzZVBhdGg7XHJcbiAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgbGluay50eXBlID0gJ3RleHQvY3NzJztcclxuXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgdmFyIGZvbnQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignR3JhbmRzdGFuZGVyIFZhcmlhYmxlJyk7XHJcbiAgdmFyIGZvbnQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignT3N3YWxkIFZhcmlhYmxlJyk7XHJcblxyXG4gIGZvbnRcclxuICAgIC5sb2FkKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0ZvbnQgaGFzIGxvYWRlZC4nKTtcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0dyYW5kc3RhbmRlciBWYXJpYWJsZScpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGb250IFNhbnMgZmFpbGVkIHRvIGxvYWQuJyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbntcclxuICAvKiA8bGlua1xyXG5yZWw9XCJwcmVsb2FkXCJcclxuaHJlZj1cIi9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci9HcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmXCJcclxuYXM9XCJmb250XCJcclxudHlwZT1cImZvbnQvdHRmXCJcclxuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4vPiAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=