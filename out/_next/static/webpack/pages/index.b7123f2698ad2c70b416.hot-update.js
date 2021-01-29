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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-tailwind-googlefonts-selfhost-starter\\lib\\hooks.js",
    _this = undefined;

/**
 * A simple hook to Load self-hosted Google Fonts famalies
 *
 * We are use Font Face Observer npm package to load the
 *
 * @see : https://github.com/bramstein/fontfaceobserver
 *
 */
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");

var useGoogleFontLoader = function useGoogleFontLoader() {
  var debug = true;
  var baseFont = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf' : '/static/fonts/google/grandstander/Grandstander-VariableFont_wght.ttf'; // const allfontsCss = !debug
  //   ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css'
  //   : '/static/fonts/fonts.css';

  var link = document.createElement('link');
  link.href = baseFont; // link.rel = 'stylesheet';

  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/ttf';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link); // const font = new FontFaceObserver('Grandstander Variable');
  // font
  //   .load()
  //   .then(() => {
  //     console.log('Font has loaded.');
  //     document.documentElement.classList.add('Grandstander Variable');
  //   })
  //   .catch(() => {
  //     console.log('Font Sans failed to load.');
  //   });

  var fontData = {
    'Grandstander Variable': {},
    'Oswald Variable': {},
    'Merriweather Sans': {} // Etc.

  };
  var fontGrandstanderV = getGrandstanderPath(debug);
  var fontOswaldV = getOswaldPath(debug);
  addFontPreloadLink(fontGrandstanderV);
  addFontPreloadLink(fontOswaldV); // document.head.appendChild(link);

  LoadTheFonts(); // loadAllFonts(fontData);
  // const grandstanderV = 'Grandstander-VariableFont_wght.ttf';
  // const oswaldV = 'Oswald-VariableFont_wght.ttf';
  // console.log(debug);
  // console.log(allfontsCss);
};

var getGrandstanderPath = function getGrandstanderPath(debug) {
  var fontV = 'Grandstander-VariableFont_wght.ttf';
  var pathTo = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/grandstander/' + fontV : '/static/fonts/google/grandstander/' + fontV;
  return pathTo;
};

var getOswaldPath = function getOswaldPath(debug) {
  var fontV = 'Oswald-VariableFont_wght.ttf';
  var pathTo = !debug ? '/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/google/oswald/' + fontV : '/static/fonts/google/oswald/' + fontV;
  return pathTo;
};

var LoadTheFonts = function LoadTheFonts() {
  var one = new FontFaceObserver('Grandstander Variable');
  var two = new FontFaceObserver('Oswald Variable');
  var three = new FontFaceObserver('Merriweather Sans');
  Promise.all([one.load(), two.load(), three.load()]).then(function () {
    console.log('The critical fonts are have loaded');
  })["catch"](function (err) {
    console.warn('Some critical font are not available:', err);
  });
};

_c = LoadTheFonts;

var loadAllFonts = function loadAllFonts(fontData) {
  var observers = [];
  Object.keys(fontData).forEach(function (family) {
    var data = fontData[family];
    var obs = new FontFaceObserver(family, data);
    observers.push(obs.load());
  });
  Promise.all(observers).then(function (fonts) {
    /*#__PURE__*/
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fonts", {
      className: "foreach"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 8
    }, _this)(function (font) {
      console.log(font.family + ' loaded'); // Map the result of the Promise back to our existing data,
      // to get the other properties we need.

      console.log(fontData[font.family]);
    });
  })["catch"](function (err) {
    console.warn('Some critical font are not available:', err);
  });
};

var addFontPreloadLink = function addFontPreloadLink(fontLink) {
  var flink = document.createElement('link');
  flink.href = fontLink;
  flink.rel = 'preload';
  flink.as = 'font';
  flink.type = 'font/ttf';
  flink.crossOrigin = 'anonymous';
  document.head.appendChild(flink);
  console.log("Font preloaded: ".concat(fontLink));
};

var _c;

$RefreshReg$(_c, "LoadTheFonts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJyZXF1aXJlIiwidXNlR29vZ2xlRm9udExvYWRlciIsImRlYnVnIiwiYmFzZUZvbnQiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImFzIiwidHlwZSIsImNyb3NzT3JpZ2luIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiZm9udERhdGEiLCJmb250R3JhbmRzdGFuZGVyViIsImdldEdyYW5kc3RhbmRlclBhdGgiLCJmb250T3N3YWxkViIsImdldE9zd2FsZFBhdGgiLCJhZGRGb250UHJlbG9hZExpbmsiLCJMb2FkVGhlRm9udHMiLCJmb250ViIsInBhdGhUbyIsIm9uZSIsInR3byIsInRocmVlIiwiUHJvbWlzZSIsImFsbCIsImxvYWQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImVyciIsIndhcm4iLCJsb2FkQWxsRm9udHMiLCJvYnNlcnZlcnMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImZhbWlseSIsImRhdGEiLCJvYnMiLCJwdXNoIiwiZm9udHMiLCJmb250IiwiZm9udExpbmsiLCJmbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBR0MsbUJBQU8sQ0FBQyx3RkFBRCxDQUFoQzs7QUFFTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsTUFBTUMsS0FBSyxPQUFYO0FBRUEsTUFBTUMsUUFBUSxHQUFHLENBQUNELEtBQUQsR0FDYixtSEFEYSxHQUViLHNFQUZKLENBSHVDLENBT3ZDO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0FGLE1BQUksQ0FBQ0csSUFBTCxH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QUFDO0FBQU8sZUFBUyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRCxDQUFzQyxVQUFDQyxJQUFELEVBQVU7QUFDOUNkLGFBQU8sQ0FBQ0MsR0FBUixDQUFZYSxJQUFJLENBQUNMLE1BQUwsR0FBYyxTQUExQixFQUQ4QyxDQUU5QztBQUNBOztBQUNBVCxhQUFPLENBQUNDLEdBQVIsQ0FBWWpCLFFBQVEsQ0FBQzhCLElBQUksQ0FBQ0wsTUFBTixDQUFwQjtBQUNELEtBTEQ7QUFNRCxHQVJILFdBU1MsVUFBQ1AsR0FBRCxFQUFTO0FBQ2RGLFdBQU8sQ0FBQ0csSUFBUixDQUFhLHVDQUFiLEVBQXNERCxHQUF0RDtBQUNELEdBWEg7QUFZRCxDQXJCRDs7QUF1QkEsSUFBTWIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDMEIsUUFBRCxFQUFjO0FBQ3ZDLE1BQUlDLEtBQUssR0FBR3pDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0F3QyxPQUFLLENBQUN2QyxJQUFOLEdBQWFzQyxRQUFiO0FBQ0FDLE9BQUssQ0FBQ3RDLEdBQU4sR0FBWSxTQUFaO0FBQ0FzQyxPQUFLLENBQUNyQyxFQUFOLEdBQVcsTUFBWDtBQUNBcUMsT0FBSyxDQUFDcEMsSUFBTixHQUFhLFVBQWI7QUFDQW9DLE9BQUssQ0FBQ25DLFdBQU4sR0FBb0IsV0FBcEI7QUFFQU4sVUFBUSxDQUFDTyxJQUFULENBQWNDLFdBQWQsQ0FBMEJpQyxLQUExQjtBQUVBaEIsU0FBTyxDQUFDQyxHQUFSLDJCQUErQmMsUUFBL0I7QUFDRCxDQVhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI3MTIzZjI2OThhZDJjNzBiNDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQSBzaW1wbGUgaG9vayB0byBMb2FkIHNlbGYtaG9zdGVkIEdvb2dsZSBGb250cyBmYW1hbGllc1xyXG4gKlxyXG4gKiBXZSBhcmUgdXNlIEZvbnQgRmFjZSBPYnNlcnZlciBucG0gcGFja2FnZSB0byBsb2FkIHRoZVxyXG4gKlxyXG4gKiBAc2VlIDogaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi9mb250ZmFjZW9ic2VydmVyXHJcbiAqXHJcbiAqL1xyXG5jb25zdCBGb250RmFjZU9ic2VydmVyID0gcmVxdWlyZSgnZm9udGZhY2VvYnNlcnZlcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUdvb2dsZUZvbnRMb2FkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xyXG5cclxuICBjb25zdCBiYXNlRm9udCA9ICFkZWJ1Z1xyXG4gICAgPyAnL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyL3N0YXRpYy9mb250cy9nb29nbGUvZ3JhbmRzdGFuZGVyL0dyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRfd2dodC50dGYnXHJcbiAgICA6ICcvc3RhdGljL2ZvbnRzL2dvb2dsZS9ncmFuZHN0YW5kZXIvR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0Zic7XHJcblxyXG4gIC8vIGNvbnN0IGFsbGZvbnRzQ3NzID0gIWRlYnVnXHJcbiAgLy8gICA/ICcvbmV4dGpzLXRhaWx3aW5kLWdvb2dsZWZvbnRzLXNlbGZob3N0LXN0YXJ0ZXIvc3RhdGljL2ZvbnRzL2ZvbnRzLmNzcydcclxuICAvLyAgIDogJy9zdGF0aWMvZm9udHMvZm9udHMuY3NzJztcclxuXHJcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICBsaW5rLmhyZWYgPSBiYXNlRm9udDtcclxuICAvLyBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICBsaW5rLnJlbCA9ICdwcmVsb2FkJztcclxuICBsaW5rLmFzID0gJ2ZvbnQnO1xyXG4gIGxpbmsudHlwZSA9ICdmb250L3R0Zic7XHJcbiAgbGluay5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG5cclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICAvLyBjb25zdCBmb250ID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ0dyYW5kc3RhbmRlciBWYXJpYWJsZScpO1xyXG5cclxuICAvLyBmb250XHJcbiAgLy8gICAubG9hZCgpXHJcbiAgLy8gICAudGhlbigoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdGb250IGhhcyBsb2FkZWQuJyk7XHJcbiAgLy8gICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdHcmFuZHN0YW5kZXIgVmFyaWFibGUnKTtcclxuICAvLyAgIH0pXHJcbiAgLy8gICAuY2F0Y2goKCkgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnRm9udCBTYW5zIGZhaWxlZCB0byBsb2FkLicpO1xyXG4gIC8vICAgfSk7XHJcblxyXG4gIGNvbnN0IGZvbnREYXRhID0ge1xyXG4gICAgJ0dyYW5kc3RhbmRlciBWYXJpYWJsZSc6IHt9LFxyXG4gICAgJ09zd2FsZCBWYXJpYWJsZSc6IHt9LFxyXG4gICAgJ01lcnJpd2VhdGhlciBTYW5zJzoge30sXHJcbiAgICAvLyBFdGMuXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9udEdyYW5kc3RhbmRlclYgPSBnZXRHcmFuZHN0YW5kZXJQYXRoKGRlYnVnKTtcclxuICBjb25zdCBmb250T3N3YWxkViA9IGdldE9zd2FsZFBhdGgoZGVidWcpO1xyXG5cclxuICBhZGRGb250UHJlbG9hZExpbmsoZm9udEdyYW5kc3RhbmRlclYpO1xyXG4gIGFkZEZvbnRQcmVsb2FkTGluayhmb250T3N3YWxkVik7XHJcblxyXG4gIC8vIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG4gIExvYWRUaGVGb250cygpO1xyXG4gIC8vIGxvYWRBbGxGb250cyhmb250RGF0YSk7XHJcblxyXG4gIC8vIGNvbnN0IGdyYW5kc3RhbmRlclYgPSAnR3JhbmRzdGFuZGVyLVZhcmlhYmxlRm9udF93Z2h0LnR0Zic7XHJcbiAgLy8gY29uc3Qgb3N3YWxkViA9ICdPc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZGVidWcpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGFsbGZvbnRzQ3NzKTtcclxufTtcclxuXHJcbmNvbnN0IGdldEdyYW5kc3RhbmRlclBhdGggPSAoZGVidWcpID0+IHtcclxuICBjb25zdCBmb250ViA9ICdHcmFuZHN0YW5kZXItVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuICBjb25zdCBwYXRoVG8gPSAhZGVidWdcclxuICAgID8gJy9uZXh0anMtdGFpbHdpbmQtZ29vZ2xlZm9udHMtc2VsZmhvc3Qtc3RhcnRlci9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci8nICsgZm9udFZcclxuICAgIDogJy9zdGF0aWMvZm9udHMvZ29vZ2xlL2dyYW5kc3RhbmRlci8nICsgZm9udFY7XHJcbiAgcmV0dXJuIHBhdGhUbztcclxufTtcclxuXHJcbmNvbnN0IGdldE9zd2FsZFBhdGggPSAoZGVidWcpID0+IHtcclxuICBjb25zdCBmb250ViA9ICdPc3dhbGQtVmFyaWFibGVGb250X3dnaHQudHRmJztcclxuICBjb25zdCBwYXRoVG8gPSAhZGVidWdcclxuICAgID8gJy9uZXh0anMtdGFpbHdpbmQtZ29vZ2xlZm9udHMtc2VsZmhvc3Qtc3RhcnRlci9zdGF0aWMvZm9udHMvZ29vZ2xlL29zd2FsZC8nICsgZm9udFZcclxuICAgIDogJy9zdGF0aWMvZm9udHMvZ29vZ2xlL29zd2FsZC8nICsgZm9udFY7XHJcbiAgcmV0dXJuIHBhdGhUbztcclxufTtcclxuXHJcbmNvbnN0IExvYWRUaGVGb250cyA9ICgpID0+IHtcclxuICB2YXIgb25lID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ0dyYW5kc3RhbmRlciBWYXJpYWJsZScpO1xyXG4gIHZhciB0d28gPSBuZXcgRm9udEZhY2VPYnNlcnZlcignT3N3YWxkIFZhcmlhYmxlJyk7XHJcbiAgdmFyIHRocmVlID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ01lcnJpd2VhdGhlciBTYW5zJyk7XHJcblxyXG4gIFByb21pc2UuYWxsKFtvbmUubG9hZCgpLCB0d28ubG9hZCgpLCB0aHJlZS5sb2FkKCldKVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlIGNyaXRpY2FsIGZvbnRzIGFyZSBoYXZlIGxvYWRlZCcpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUud2FybignU29tZSBjcml0aWNhbCBmb250IGFyZSBub3QgYXZhaWxhYmxlOicsIGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRBbGxGb250cyA9IChmb250RGF0YSkgPT4ge1xyXG4gIGxldCBvYnNlcnZlcnMgPSBbXTtcclxuXHJcbiAgT2JqZWN0LmtleXMoZm9udERhdGEpLmZvckVhY2goKGZhbWlseSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGZvbnREYXRhW2ZhbWlseV07XHJcbiAgICBjb25zdCBvYnMgPSBuZXcgRm9udEZhY2VPYnNlcnZlcihmYW1pbHksIGRhdGEpO1xyXG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzLmxvYWQoKSk7XHJcbiAgfSk7XHJcblxyXG4gIFByb21pc2UuYWxsKG9ic2VydmVycylcclxuICAgIC50aGVuKChmb250cykgPT4ge1xyXG4gICAgICAoPGZvbnRzIGNsYXNzTmFtZT1cImZvcmVhY2hcIj48L2ZvbnRzPikoKGZvbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb250LmZhbWlseSArICcgbG9hZGVkJyk7XHJcbiAgICAgICAgLy8gTWFwIHRoZSByZXN1bHQgb2YgdGhlIFByb21pc2UgYmFjayB0byBvdXIgZXhpc3RpbmcgZGF0YSxcclxuICAgICAgICAvLyB0byBnZXQgdGhlIG90aGVyIHByb3BlcnRpZXMgd2UgbmVlZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhmb250RGF0YVtmb250LmZhbWlseV0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1NvbWUgY3JpdGljYWwgZm9udCBhcmUgbm90IGF2YWlsYWJsZTonLCBlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRGb250UHJlbG9hZExpbmsgPSAoZm9udExpbmspID0+IHtcclxuICBsZXQgZmxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgZmxpbmsuaHJlZiA9IGZvbnRMaW5rO1xyXG4gIGZsaW5rLnJlbCA9ICdwcmVsb2FkJztcclxuICBmbGluay5hcyA9ICdmb250JztcclxuICBmbGluay50eXBlID0gJ2ZvbnQvdHRmJztcclxuICBmbGluay5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG5cclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZsaW5rKTtcclxuXHJcbiAgY29uc29sZS5sb2coYEZvbnQgcHJlbG9hZGVkOiAke2ZvbnRMaW5rfWApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9