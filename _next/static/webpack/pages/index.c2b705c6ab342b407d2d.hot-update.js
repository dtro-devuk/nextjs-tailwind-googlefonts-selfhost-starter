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
  var fontData = {
    'Grandstander Variable': any,
    'Oswald Variable': any,
    'Merriweather Sans': any // Etc.

  };
  var link = document.createElement('link');
  link.href = allfontsCss; //baseFont; // basePath;

  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
  Object.keys(fontData).forEach(function (family) {
    var data = fontData[family];
    var obs = new FontFaceObserver(family, data);
    observers.push(obs.load());
  });
  Promise.all(observers).then(function (fonts) {
    fonts.forEach(function (font) {
      console.log(font.family + ' loaded'); // Map the result of the Promise back to our existing data,
      // to get the other properties we need.

      console.log(fontData[font.family]);
    });
  })["catch"](function (err) {
    console.warn('Some critical font are not available:', err);
  });
  var grandstanderV = 'Grandstander-VariableFont_wght.ttf';
  var oswaldV = 'Oswald-VariableFont_wght.ttf';
  var baseFont = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf' : '/static/fonts/google/grandstander/';
  var allfontsCss = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css' : '/static/fonts/fonts.css';
  console.log(debug);
  console.log(allfontsCss);
  var font = new FontFaceObserver('Grandstander Variable');
  var font = new FontFaceObserver('Oswald Variable');
  font.load().then(function () {
    console.log('Font has loaded.');
    document.documentElement.classList.add('Fonts-loaded');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiZm9udERhdGEiLCJhbnkiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImFsbGZvbnRzQ3NzIiwicmVsIiwidHlwZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZmFtaWx5IiwiZGF0YSIsIm9icyIsIm9ic2VydmVycyIsInB1c2giLCJsb2FkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJmb250cyIsImZvbnQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2FybiIsImdyYW5kc3RhbmRlclYiLCJvc3dhbGRWIiwiYmFzZUZvbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUdDLG1CQUFPLENBQUMsd0ZBQUQsQ0FBaEM7O0FBRU8sSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQ3ZDLE1BQU1DLEtBQUssT0FBWDtBQUVBLE1BQU1DLFFBQVEsR0FBRztBQUNmLDZCQUF5QkMsR0FEVjtBQUVmLHVCQUFtQkEsR0FGSjtBQUdmLHlCQUFxQkEsR0FITixDQUlmOztBQUplLEdBQWpCO0FBT0EsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRixNQUFJLENBQUNHLElBQUwsR0FBWUMsV0FBWixDQVh1QyxDQVdkOztBQUN6QkosTUFBSSxDQUFDSyxHQUFMLEdBQVcsWUFBWDtBQUNBTCxNQUFJLENBQUNNLElBQUwsR0FBWSxVQUFaO0FBRUFMLFVBQVEsQ0FBQ00sSUFBVCxDQUFjQyxXQUFkLENBQTBCUixJQUExQjtBQUVBUyxRQUFNLENBQUNDLElBQVAsQ0FBWVosUUFBWixFQUFzQmEsT0FBdEIsQ0FBOEIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3hDLFFBQU1DLElBQUksR0FBR2YsUUFBUSxDQUFDYyxNQUFELENBQXJCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHLElBQUlwQixnQkFBSixDQUFxQmtCLE1BQXJCLEVBQTZCQyxJQUE3QixDQUFaO0FBQ0FFLGFBQVMsQ0FBQ0MsSUFBVixDQUFlRixHQUFHLENBQUNHLElBQUosRUFBZjtBQUNELEdBSkQ7QUFNQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVosRUFDR0ssSUFESCxDQUNRLFVBQUNDLEtBQUQsRUFBVztBQUNmQSxTQUFLLENBQUNWLE9BQU4sQ0FBYyxVQUFDVyxJQUFELEVBQVU7QUFDdEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNWLE1BQUwsR0FBYyxTQUExQixFQURzQixDQUd0QjtBQUNBOztBQUNBVyxhQUFPLENBQUNDLEdBQVIsQ0FBWTFCLFFBQVEsQ0FBQ3dCLElBQUksQ0FBQ1YsTUFBTixDQUFwQjtBQUNELEtBTkQ7QUFPRCxHQVRILFdBVVMsVUFBQ2EsR0FBRCxFQUFTO0FBQ2RGLFdBQU8sQ0FBQ0csSUFBUixDQUFhLHVDQUFiLEVBQXNERCxHQUF0RDtBQUNELEdBWkg7QUFjQSxNQUFNRSxhQUFhLEdBQUcsb0NBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLDhCQUFoQjtBQUVBLE1BQU1DLFFBQVEsR0FBRyxDQUFDaEMsS0FBRCxHQUNiLG1IQURhLEdBRWIsb0NBRko7QUFJQSxNQUFNTyxXQUFXLEdBQUcsQ0FBQ1AsS0FBRCxHQUNoQixzRUFEZ0IsR0FFaEIseUJBRko7QUFJQTBCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZM0IsS0FBWjtBQUNBMEIsU0FBTyxDQUFDQyxHQUFSLENBQVlwQixXQUFaO0FBRUEsTUFBSWtCLElBQUksR0FBRyxJQUFJNUIsZ0JBQUosQ0FBcUIsdUJBQXJCLENBQVg7QUFDQSxNQUFJNEIsSUFBSSxHQUFHLElBQUk1QixnQkFBSixDQUFxQixpQkFBckIsQ0FBWDtBQUVBNEIsTUFBSSxDQUNETCxJQURILEdBRUdHLElBRkgsQ0FFUSxZQUFNO0FBQ1ZHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0F2QixZQUFRLENBQUM2QixlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsY0FBdkM7QUFDRCxHQUxILFdBTVMsWUFBTTtBQUNYVCxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNELEdBUkg7QUFTRCxDQS9ETTtBQWlFUDtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzJiNzA1YzZhYjM0MmI0MDdkMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvbnRGYWNlT2JzZXJ2ZXIgPSByZXF1aXJlKCdmb250ZmFjZW9ic2VydmVyJyk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR29vZ2xlRm9udExvYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBkZWJ1ZyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XHJcblxyXG4gIGNvbnN0IGZvbnREYXRhID0ge1xyXG4gICAgJ0dyYW5kc3RhbmRlciBWYXJpYWJsZSc6IGFueSxcclxuICAgICdPc3dhbGQgVmFyaWFibGUnOiBhbnksXHJcbiAgICAnTWVycml3ZWF0aGVyIFNhbnMnOiBhbnksXHJcbiAgICAvLyBFdGMuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICBsaW5rLmhyZWYgPSBhbGxmb250c0NzczsgLy9iYXNlRm9udDsgLy8gYmFzZVBhdGg7XHJcbiAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgbGluay50eXBlID0gJ3RleHQvY3NzJztcclxuXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgT2JqZWN0LmtleXMoZm9udERhdGEpLmZvckVhY2goKGZhbWlseSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGZvbnREYXRhW2ZhbWlseV07XHJcbiAgICBjb25zdCBvYnMgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihmYW1pbHksIGRhdGEpO1xyXG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzLmxvYWQoKSk7XHJcbiAgfSk7XHJcblxyXG4gIFByb21pc2UuYWxsKG9ic2VydmVycylcclxuICAgIC50aGVuKChmb250cykgPT4ge1xyXG4gICAgICBmb250cy5mb3JFYWNoKChmb250KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9udC5mYW1pbHkgKyAnIGxvYWRlZCcpO1xyXG5cclxuICAgICAgICAvLyBNYXAgdGhlIHJlc3VsdCBvZiB0aGUgUHJvbWlzZSBiYWNrIHRvIG91ciBleGlzdGluZyBkYXRhLFxyXG4gICAgICAgIC8vIHRvIGdldCB0aGUgb3RoZXIgcHJvcGVydGllcyB3ZSBuZWVkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvbnREYXRhW2ZvbnQuZmFtaWx5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUud2FybignU29tZSBjcml0aWNhbCBmb250IGFyZSBub3QgYXZhaWxhYmxlOicsIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgZ3JhbmRzdGFuZGVyViA9ICdHcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuICBjb25zdCBvc3dhbGRWID0gJ09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnO1xyXG5cclxuICBjb25zdCBiYXNlRm9udCA9ICFkZWJ1Z1xyXG4gICAgPyAnL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyL0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGYnXHJcbiAgICA6ICcvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvJztcclxuXHJcbiAgY29uc3QgYWxsZm9udHNDc3MgPSAhZGVidWdcclxuICAgID8gJy9uZXh0anMtdGFpbHdpbmQtZ29vZ2xlZm9udHMtc2VsZmhvc3Qtc3RhcnRlci9zdGF0aWMvZm9udHMvZm9udHMuY3NzJ1xyXG4gICAgOiAnL3N0YXRpYy9mb250cy9mb250cy5jc3MnO1xyXG5cclxuICBjb25zb2xlLmxvZyhkZWJ1Zyk7XHJcbiAgY29uc29sZS5sb2coYWxsZm9udHNDc3MpO1xyXG5cclxuICB2YXIgZm9udCA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdHcmFuZHN0YW5kZXIgVmFyaWFibGUnKTtcclxuICB2YXIgZm9udCA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdPc3dhbGQgVmFyaWFibGUnKTtcclxuXHJcbiAgZm9udFxyXG4gICAgLmxvYWQoKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRm9udCBoYXMgbG9hZGVkLicpO1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnRm9udHMtbG9hZGVkJyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0ZvbnQgU2FucyBmYWlsZWQgdG8gbG9hZC4nKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxue1xyXG4gIC8qIDxsaW5rXHJcbnJlbD1cInByZWxvYWRcIlxyXG5ocmVmPVwiL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyL0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGZcIlxyXG5hcz1cImZvbnRcIlxyXG50eXBlPVwiZm9udC90dGZcIlxyXG5jcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbi8+ICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==