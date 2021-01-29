webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-tailwind-googlefonts-selfhost-starter\\components\\Header.js",
    _this = undefined;

/**
 * Header Component
 * @description Site Header including the Navigation menu
 * @author dtro-devuk @github:dtro-devuk.io
 */


var Header = function Header(_ref) {
  var caption = _ref.caption,
      author = _ref.author,
      description = _ref.description,
      licenseInfo = _ref.licenseInfo;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    id: "header",
    role: "banner",
    className: "sticky-header\r flex flex-col items-center text-center\r bg-gray-800",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-3 font-black font-Oswald-VariableFont\r text-lg md:text-3xl lg:text-4xl\r text-white",
      children: caption || ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "font-bold italic\r font-Grandstander-VariableFont\r text-lg md:text-3xl lg:text-4xl\r text-blue-400",
      children: ["@", author || '']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden bg-gray-500 w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        "aria-label": "Demo description",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "p-3 font-normal text-white italic font-serif text-center",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);
Header.propTypes = {
  caption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  licenseInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2FwdGlvbiIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwibGljZW5zZUluZm8iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFtRDtBQUFBLE1BQWhEQyxPQUFnRCxRQUFoREEsT0FBZ0Q7QUFBQSxNQUF2Q0MsTUFBdUMsUUFBdkNBLE1BQXVDO0FBQUEsTUFBL0JDLFdBQStCLFFBQS9CQSxXQUErQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDaEUsc0JBQ0U7QUFDRSxNQUFFLEVBQUMsUUFETDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsYUFBUyxFQUFDLHNFQUhaO0FBQUEsNEJBT0U7QUFDRSxlQUFTLEVBQUMsd0ZBRFo7QUFBQSxnQkFLR0gsT0FBTyxJQUFJO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBY0U7QUFDRSxlQUFTLEVBQUMscUdBRFo7QUFBQSxzQkFNSUMsTUFBTSxJQUFJLEVBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEYsZUFzQkU7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBQSw2QkFDRTtBQUFTLHNCQUFXLGtCQUFwQjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQywwREFBZDtBQUFBLG9CQUNHQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWpDRDs7S0FBTUgsTTtBQW1DU0EscUVBQWY7QUFFQUEsTUFBTSxDQUFDSyxTQUFQLEdBQW1CO0FBQ2pCSixTQUFPLEVBQUVLLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFQ7QUFFakJOLFFBQU0sRUFBRUksaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGUjtBQUdqQkwsYUFBVyxFQUFFRyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhiO0FBSWpCSixhQUFXLEVBQUVFLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBSmIsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGZlMmRlMjkzNjQ5MTM4OWJjMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIZWFkZXIgQ29tcG9uZW50XHJcbiAqIEBkZXNjcmlwdGlvbiBTaXRlIEhlYWRlciBpbmNsdWRpbmcgdGhlIE5hdmlnYXRpb24gbWVudVxyXG4gKiBAYXV0aG9yIGR0cm8tZGV2dWsgQGdpdGh1YjpkdHJvLWRldnVrLmlvXHJcbiAqL1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2FwdGlvbiwgYXV0aG9yLCBkZXNjcmlwdGlvbiwgbGljZW5zZUluZm8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGlkPVwiaGVhZGVyXCJcclxuICAgICAgcm9sZT1cImJhbm5lclwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInN0aWNreS1oZWFkZXJcclxuICAgICAgICAgICAgICAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyXHJcbiAgICAgICAgICAgICAgICBiZy1ncmF5LTgwMFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJwLTMgZm9udC1ibGFjayBmb250LU9zd2FsZC1WYXJpYWJsZUZvbnRcclxuICAgICAgICAgICAgICAgICB0ZXh0LWxnIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXHJcbiAgICAgICAgICAgICAgICAgdGV4dC13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y2FwdGlvbiB8fCAnJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgaXRhbGljXHJcbiAgICAgICAgICAgICAgICBmb250LUdyYW5kc3RhbmRlci1WYXJpYWJsZUZvbnRcclxuICAgICAgICAgICAgICAgIHRleHQtbGcgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGxcclxuICAgICAgICAgICAgICAgIHRleHQtYmx1ZS00MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQHthdXRob3IgfHwgJyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBiZy1ncmF5LTUwMCB3LWZ1bGxcIj5cclxuICAgICAgICA8c2VjdGlvbiBhcmlhLWxhYmVsPVwiRGVtbyBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInAtMyBmb250LW5vcm1hbCB0ZXh0LXdoaXRlIGl0YWxpYyBmb250LXNlcmlmIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdXRob3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxpY2Vuc2VJbmZvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=