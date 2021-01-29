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
  var allfontsCss = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css' : '/static/fonts/fonts.css';
  var link = document.createElement('link');
  link.href = allfontsCss; //baseFont; // basePath;

  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
  var observers = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiZm9udERhdGEiLCJhbGxmb250c0NzcyIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwicmVsIiwidHlwZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm9ic2VydmVycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiZmFtaWx5IiwiZGF0YSIsIm9icyIsInB1c2giLCJsb2FkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJmb250cyIsImZvbnQiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxJQUFNQSxnQkFBZ0IsR0FBR0MsbUJBQU8sQ0FBQyx3RkFBRCxDQUFoQzs7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsTUFBTUMsS0FBSyxPQUFYO0FBRUEsTUFBTUMsUUFBUSxHQUFHO0FBQ2YsNkJBQXlCLEVBRFY7QUFFZix1QkFBbUIsRUFGSjtBQUdmLHlCQUFxQixFQUhOLENBSWY7O0FBSmUsR0FBakI7QUFPQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsS0FBRCxHQUNoQixzRUFEZ0IsR0FFaEIseUJBRko7QUFJQSxNQUFNRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0FGLE1BQUksQ0FBQ0csSUFBTCxHQUFZSixXQUFaLENBZnVDLENBZWQ7O0FBQ3pCQyxNQUFJLENBQUNJLEdBQUwsR0FBVyxZQUFYO0FBQ0FKLE1BQUksQ0FBQ0ssSUFBTCxHQUFZLFVBQVo7QUFFQUosVUFBUSxDQUFDSyxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLElBQTFCO0FBRUEsTUFBSVEsU0FBUyxHQUFHLEVBQWhCO0FBRUFDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZWixRQUFaLEVBQXNCYSxPQUF0QixDQUE4QixVQUFDQyxNQUFELEVBQVk7QUFDeEMsUUFBTUMsSUFBSSxHQUFHZixRQUFRLENBQUNjLE1BQUQsQ0FBckI7QUFDQSxRQUFNRSxHQUFHLEdBQUcsSUFBSXBCLGdCQUFKLENBQXFCa0IsTUFBckIsRUFBNkJDLElBQTdCLENBQVo7QUFDQUwsYUFBUyxDQUFDTyxJQUFWLENBQWVELEdBQUcsQ0FBQ0UsSUFBSixFQUFmO0FBQ0QsR0FKRDtBQU1BQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsU0FBWixFQUNHVyxJQURILENBQ1EsVUFBQ0MsS0FBRCxFQUFXO0FBQ2ZBLFNBQUssQ0FBQ1QsT0FBTixDQUFjLFVBQUNVLElBQUQsRUFBVTtBQUN0QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ1QsTUFBTCxHQUFjLFNBQTFCLEVBRHNCLENBR3RCO0FBQ0E7O0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZekIsUUFBUSxDQUFDdUIsSUFBSSxDQUFDVCxNQUFOLENBQXBCO0FBQ0QsS0FORDtBQU9ELEdBVEgsV0FVUyxVQUFDWSxHQUFELEVBQVM7QUFDZEYsV0FBTyxDQUFDRyxJQUFSLENBQWEsdUNBQWIsRUFBc0RELEdBQXREO0FBQ0QsR0FaSCxFQTdCdUMsQ0EyQ3ZDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBakVNO0FBbUVQO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDU3OTVjZTgwMDg1Yjg1YWY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9udEZhY2VPYnNlcnZlciA9IHJlcXVpcmUoJ2ZvbnRmYWNlb2JzZXJ2ZXInKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHb29nbGVGb250TG9hZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcclxuXHJcbiAgY29uc3QgZm9udERhdGEgPSB7XHJcbiAgICAnR3JhbmRzdGFuZGVyIFZhcmlhYmxlJzoge30sXHJcbiAgICAnT3N3YWxkIFZhcmlhYmxlJzoge30sXHJcbiAgICAnTWVycml3ZWF0aGVyIFNhbnMnOiB7fSxcclxuICAgIC8vIEV0Yy5cclxuICB9O1xyXG5cclxuICBjb25zdCBhbGxmb250c0NzcyA9ICFkZWJ1Z1xyXG4gICAgPyAnL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyL3N0YXRpYy9mb250cy9mb250cy5jc3MnXHJcbiAgICA6ICcvc3RhdGljL2ZvbnRzL2ZvbnRzLmNzcyc7XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgbGluay5ocmVmID0gYWxsZm9udHNDc3M7IC8vYmFzZUZvbnQ7IC8vIGJhc2VQYXRoO1xyXG4gIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xyXG4gIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcblxyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG4gIHZhciBvYnNlcnZlcnMgPSBbXTtcclxuXHJcbiAgT2JqZWN0LmtleXMoZm9udERhdGEpLmZvckVhY2goKGZhbWlseSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGZvbnREYXRhW2ZhbWlseV07XHJcbiAgICBjb25zdCBvYnMgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihmYW1pbHksIGRhdGEpO1xyXG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzLmxvYWQoKSk7XHJcbiAgfSk7XHJcblxyXG4gIFByb21pc2UuYWxsKG9ic2VydmVycylcclxuICAgIC50aGVuKChmb250cykgPT4ge1xyXG4gICAgICBmb250cy5mb3JFYWNoKChmb250KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9udC5mYW1pbHkgKyAnIGxvYWRlZCcpO1xyXG5cclxuICAgICAgICAvLyBNYXAgdGhlIHJlc3VsdCBvZiB0aGUgUHJvbWlzZSBiYWNrIHRvIG91ciBleGlzdGluZyBkYXRhLFxyXG4gICAgICAgIC8vIHRvIGdldCB0aGUgb3RoZXIgcHJvcGVydGllcyB3ZSBuZWVkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvbnREYXRhW2ZvbnQuZmFtaWx5XSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUud2FybignU29tZSBjcml0aWNhbCBmb250IGFyZSBub3QgYXZhaWxhYmxlOicsIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgLy8gY29uc3QgZ3JhbmRzdGFuZGVyViA9ICdHcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuICAvLyBjb25zdCBvc3dhbGRWID0gJ09zd2FsZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnO1xyXG5cclxuICAvLyBjb25zdCBiYXNlRm9udCA9ICFkZWJ1Z1xyXG4gIC8vICAgPyAnL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyL0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGYnXHJcbiAgLy8gICA6ICcvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvJztcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGVidWcpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGFsbGZvbnRzQ3NzKTtcclxuXHJcbiAgLy8gdmFyIGZvbnQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignR3JhbmRzdGFuZGVyIFZhcmlhYmxlJyk7XHJcbiAgLy8gdmFyIGZvbnQgPSBuZXcgRm9udEZhY2VPYnNlcnZlcignT3N3YWxkIFZhcmlhYmxlJyk7XHJcblxyXG4gIC8vIGZvbnRcclxuICAvLyAgIC5sb2FkKClcclxuICAvLyAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ0ZvbnQgaGFzIGxvYWRlZC4nKTtcclxuICAvLyAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ0ZvbnRzLWxvYWRlZCcpO1xyXG4gIC8vICAgfSlcclxuICAvLyAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdGb250IFNhbnMgZmFpbGVkIHRvIGxvYWQuJyk7XHJcbiAgLy8gICB9KTtcclxufTtcclxuXHJcbntcclxuICAvKiA8bGlua1xyXG5yZWw9XCJwcmVsb2FkXCJcclxuaHJlZj1cIi9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci9HcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmXCJcclxuYXM9XCJmb250XCJcclxudHlwZT1cImZvbnQvdHRmXCJcclxuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4vPiAqL1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=