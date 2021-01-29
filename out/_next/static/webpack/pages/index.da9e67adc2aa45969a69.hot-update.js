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
    'Grandstander Variable': {},
    'Oswald Variable': {},
    'Merriweather Sans': {} // Etc.

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
  }); // const grandstanderV = 'Grandstander-VariableFont_wght.ttf';
  // const oswaldV = 'Oswald-VariableFont_wght.ttf';
  // const baseFont = !debug
  //   ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf'
  //   : '/static/fonts/google/grandstander/';
  // const allfontsCss = !debug
  //   ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css'
  //   : '/static/fonts/fonts.css';
  // console.log(debug);
  // console.log(allfontsCss);
  // var font = new FontFaceObserver('Grandstander Variable');
  // var font = new FontFaceObserver('Oswald Variable');
  // font
  //   .load()
  //   .then(() => {
  //     console.log('Font has loaded.');
  //     document.documentElement.classList.add('Fonts-loaded');
  //   })
  //   .catch(() => {
  //     console.log('Font Sans failed to load.');
  //   });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiZm9udERhdGEiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImFsbGZvbnRzQ3NzIiwicmVsIiwidHlwZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZmFtaWx5IiwiZGF0YSIsIm9icyIsIm9ic2VydmVycyIsInB1c2giLCJsb2FkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJmb250cyIsImZvbnQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFNQSxnQkFBZ0IsR0FBR0MsbUJBQU8sQ0FBQyx3RkFBRCxDQUFoQzs7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsTUFBTUMsS0FBSyxPQUFYO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2YsNkJBQXlCLEVBRFY7QUFFZix1QkFBbUIsRUFGSjtBQUdmLHlCQUFxQixFQUhOLENBSWY7O0FBSmUsR0FBakI7QUFPQSxNQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0FGLE1BQUksQ0FBQ0csSUFBTCxHQUFZQyxXQUFaLENBWHVDLENBV2Q7O0FBQ3pCSixNQUFJLENBQUNLLEdBQUwsR0FBVyxZQUFYO0FBQ0FMLE1BQUksQ0FBQ00sSUFBTCxHQUFZLFVBQVo7QUFFQUwsVUFBUSxDQUFDTSxJQUFULENBQWNDLFdBQWQsQ0FBMEJSLElBQTFCO0FBRUFTLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZWCxRQUFaLEVBQXNCWSxPQUF0QixDQUE4QixVQUFDQyxNQUFELEVBQVk7QUFDeEMsUUFBTUMsSUFBSSxHQUFHZCxRQUFRLENBQUNhLE1BQUQsQ0FBckI7QUFDQSxRQUFNRSxHQUFHLEdBQUcsSUFBSW5CLGdCQUFKLENBQXFCaUIsTUFBckIsRUFBNkJDLElBQTdCLENBQVo7QUFDQUUsYUFBUyxDQUFDQyxJQUFWLENBQWVGLEdBQUcsQ0FBQ0csSUFBSixFQUFmO0FBQ0QsR0FKRDtBQU1BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWixFQUNHSyxJQURILENBQ1EsVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLFNBQUssQ0FBQ1YsT0FBTixDQUFjLFVBQUNXLElBQUQsRUFBVTtBQUN0QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ1YsTUFBTCxHQUFjLFNBQTFCLEVBRHNCLENBR3RCO0FBQ0E7O0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZekIsUUFBUSxDQUFDdUIsSUFBSSxDQUFDVixNQUFOLENBQXBCO0FBQ0QsS0FORDtBQU9ELEdBVEgsV0FVUyxVQUFDYSxHQUFELEVBQVM7QUFDZEYsV0FBTyxDQUFDRyxJQUFSLENBQWEsdUNBQWIsRUFBc0RELEdBQXREO0FBQ0QsR0FaSCxFQXZCdUMsQ0FxQ3ZDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBL0RNO0FBaUVQO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYTllNjdhZGMyYWE0NTk2OWE2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9udEZhY2VPYnNlcnZlciA9IHJlcXVpcmUoJ2ZvbnRmYWNlb2JzZXJ2ZXInKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHb29nbGVGb250TG9hZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcclxuXHJcbiAgY29uc3QgZm9udERhdGEgPSB7XHJcbiAgICAnR3JhbmRzdGFuZGVyIFZhcmlhYmxlJzoge30sXHJcbiAgICAnT3N3YWxkIFZhcmlhYmxlJzoge30sXHJcbiAgICAnTWVycml3ZWF0aGVyIFNhbnMnOiB7fSxcclxuICAgIC8vIEV0Yy5cclxuICB9O1xyXG5cclxuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gIGxpbmsuaHJlZiA9IGFsbGZvbnRzQ3NzOyAvL2Jhc2VGb250OyAvLyBiYXNlUGF0aDtcclxuICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xyXG5cclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICBPYmplY3Qua2V5cyhmb250RGF0YSkuZm9yRWFjaCgoZmFtaWx5KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gZm9udERhdGFbZmFtaWx5XTtcclxuICAgIGNvbnN0IG9icyA9IG5ldyBGb250RmFjZU9ic2VydmVyKGZhbWlseSwgZGF0YSk7XHJcbiAgICBvYnNlcnZlcnMucHVzaChvYnMubG9hZCgpKTtcclxuICB9KTtcclxuXHJcbiAgUHJvbWlzZS5hbGwob2JzZXJ2ZXJzKVxyXG4gICAgLnRoZW4oKGZvbnRzKSA9PiB7XHJcbiAgICAgIGZvbnRzLmZvckVhY2goKGZvbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb250LmZhbWlseSArICcgbG9hZGVkJyk7XHJcblxyXG4gICAgICAgIC8vIE1hcCB0aGUgcmVzdWx0IG9mIHRoZSBQcm9taXNlIGJhY2sgdG8gb3VyIGV4aXN0aW5nIGRhdGEsXHJcbiAgICAgICAgLy8gdG8gZ2V0IHRoZSBvdGhlciBwcm9wZXJ0aWVzIHdlIG5lZWQuXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9udERhdGFbZm9udC5mYW1pbHldKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS53YXJuKCdTb21lIGNyaXRpY2FsIGZvbnQgYXJlIG5vdCBhdmFpbGFibGU6JywgZXJyKTtcclxuICAgIH0pO1xyXG5cclxuICAvLyBjb25zdCBncmFuZHN0YW5kZXJWID0gJ0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGYnO1xyXG4gIC8vIGNvbnN0IG9zd2FsZFYgPSAnT3N3YWxkLVZhcmlhYmxlRm9udF93Z2h0LnR0Zic7XHJcblxyXG4gIC8vIGNvbnN0IGJhc2VGb250ID0gIWRlYnVnXHJcbiAgLy8gICA/ICcvbmV4dGpzLXRhaWx3aW5kLWdvb2dsZWZvbnRzLXNlbGZob3N0LXN0YXJ0ZXIvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0ZidcclxuICAvLyAgIDogJy9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci8nO1xyXG5cclxuICAvLyBjb25zdCBhbGxmb250c0NzcyA9ICFkZWJ1Z1xyXG4gIC8vICAgPyAnL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyL3N0YXRpYy9mb250cy9mb250cy5jc3MnXHJcbiAgLy8gICA6ICcvc3RhdGljL2ZvbnRzL2ZvbnRzLmNzcyc7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGRlYnVnKTtcclxuICAvLyBjb25zb2xlLmxvZyhhbGxmb250c0Nzcyk7XHJcblxyXG4gIC8vIHZhciBmb250ID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ0dyYW5kc3RhbmRlciBWYXJpYWJsZScpO1xyXG4gIC8vIHZhciBmb250ID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ09zd2FsZCBWYXJpYWJsZScpO1xyXG5cclxuICAvLyBmb250XHJcbiAgLy8gICAubG9hZCgpXHJcbiAgLy8gICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdGb250IGhhcyBsb2FkZWQuJyk7XHJcbiAgLy8gICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdGb250cy1sb2FkZWQnKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2goKCkgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnRm9udCBTYW5zIGZhaWxlZCB0byBsb2FkLicpO1xyXG4gIC8vICAgfSk7XHJcbn07XHJcblxyXG57XHJcbiAgLyogPGxpbmtcclxucmVsPVwicHJlbG9hZFwiXHJcbmhyZWY9XCIvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiXHJcbmFzPVwiZm9udFwiXHJcbnR5cGU9XCJmb250L3R0ZlwiXHJcbmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuLz4gKi9cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9