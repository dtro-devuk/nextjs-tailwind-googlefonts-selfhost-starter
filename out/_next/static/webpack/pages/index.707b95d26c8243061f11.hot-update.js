webpackHotUpdate_N_E("pages/index",{

/***/ "./components/GitHubCodeLink.js":
/*!**************************************!*\
  !*** ./components/GitHubCodeLink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");


var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-tailwind-googlefonts-selfhost-starter\\components\\GitHubCodeLink.js",
    _this = undefined;

/**
 * Link to associated Github code
 * @description footer elements to be included here
 * @author dtro-devuk @github:dtro-devuk.io
 */




var GitHubCodeLink = function GitHubCodeLink(_ref) {
  var codeLinkUrl = _ref.codeLinkUrl,
      inNewTab = _ref.inNewTab,
      caption = _ref.caption;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: codeLinkUrl,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "lg:inline-flex lg:w-auto w-full px-3 py-2 text-sm md:text-lg \n                     text-yellow-500 hover:text-white active:text-yellow-600 focus:outline-none\"\n                    transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
      target: inNewTab ? '_blank' : '_self',
      rel: "noopener noreferrer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: ['fab', 'github'],
        size: "lg",
        className: "text-white text-center mr-2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "font-normal ml-2",
        children: caption || '[see code...]'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = GitHubCodeLink;
GitHubCodeLink.propTypes = {
  codeLinkUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  inNewTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  caption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (GitHubCodeLink);

var _c;

$RefreshReg$(_c, "GitHubCodeLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HaXRIdWJDb2RlTGluay5qcyJdLCJuYW1lcyI6WyJHaXRIdWJDb2RlTGluayIsImNvZGVMaW5rVXJsIiwiaW5OZXdUYWIiLCJjYXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQXdDO0FBQUEsTUFBckNDLFdBQXFDLFFBQXJDQSxXQUFxQztBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDN0Qsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVGLFdBQVo7QUFBQSwyQkFDRTtBQUNFLGVBQVMsNE1BRWUsc0RBRmYsQ0FEWDtBQUlFLFlBQU0sRUFBRUMsUUFBUSxHQUFHLFFBQUgsR0FBYyxPQUpoQztBQUtFLFNBQUcsRUFBQyxxQkFMTjtBQUFBLDhCQU9FLHFFQUFDLDhFQUFEO0FBQ0UsWUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FEUjtBQUVFLFlBQUksRUFBQyxJQUZQO0FBR0UsaUJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQVlFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtCQUFtQ0MsT0FBTyxJQUFJO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0FuQkQ7O0tBQU1ILGM7QUFxQk5BLGNBQWMsQ0FBQ0ksU0FBZixHQUEyQjtBQUN6QkgsYUFBVyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURMO0FBRXpCTCxVQUFRLEVBQUVHLGlEQUFTLENBQUNHLElBQVYsQ0FBZUQsVUFGQTtBQUd6QkosU0FBTyxFQUFFRSxpREFBUyxDQUFDQztBQUhNLENBQTNCO0FBTWVOLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwN2I5NWQyNmM4MjQzMDYxZjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTGluayB0byBhc3NvY2lhdGVkIEdpdGh1YiBjb2RlXHJcbiAqIEBkZXNjcmlwdGlvbiBmb290ZXIgZWxlbWVudHMgdG8gYmUgaW5jbHVkZWQgaGVyZVxyXG4gKiBAYXV0aG9yIGR0cm8tZGV2dWsgQGdpdGh1YjpkdHJvLWRldnVrLmlvXHJcbiAqL1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuXHJcbmNvbnN0IEdpdEh1YkNvZGVMaW5rID0gKHsgY29kZUxpbmtVcmwsIGluTmV3VGFiLCBjYXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17Y29kZUxpbmtVcmx9PlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGxnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMyBweS0yIHRleHQtc20gbWQ6dGV4dC1sZyBcclxuICAgICAgICAgICAgICAgICAgICAgdGV4dC15ZWxsb3ctNTAwIGhvdmVyOnRleHQtd2hpdGUgYWN0aXZlOnRleHQteWVsbG93LTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkeydob3ZlcjpzY2FsZS14LTkwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwJ31gfVxyXG4gICAgICAgIHRhcmdldD17aW5OZXdUYWIgPyAnX2JsYW5rJyA6ICdfc2VsZid9XHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBpY29uPXtbJ2ZhYicsICdnaXRodWInXX1cclxuICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG1yLTJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCBtbC0yXCI+e2NhcHRpb24gfHwgJ1tzZWUgY29kZS4uLl0nfTwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkdpdEh1YkNvZGVMaW5rLnByb3BUeXBlcyA9IHtcclxuICBjb2RlTGlua1VybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGluTmV3VGFiOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRIdWJDb2RlTGluaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==