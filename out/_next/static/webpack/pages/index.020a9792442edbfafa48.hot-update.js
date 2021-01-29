webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: siteTitle, description, profileName, licenseInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileName", function() { return profileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licenseInfo", function() { return licenseInfo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Head */ "./components/Head.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");


var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-tailwind-googlefonts-selfhost-starter\\components\\Container.js",
    _this = undefined;

/**
 * Container
 * @description Main Container for the App
 * @author dtro-devuk @github:dtro-devuk.io
 */




var siteTitle = 'Next.js, Tailwind CSS and Google Fonts Self-Hosting Demo';
var description = 'A simple demo to show how to use self-hosted Google fonts. The use of font-dispay attribute is used to stop FOUT and FOIT. Try refreshing the page, there is no signs of either of these.';
var profileName = 'dtro-devuk';
var licenseInfo = 'It is important to always read the license for every font that you use. All of the Google fonts used here use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.';

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "container",
    className: "bg-gray-300",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: siteTitle,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      caption: siteTitle,
      author: profileName,
      description: description,
      licenseInfo: licenseInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "main-content",
      role: "main",
      "aria-label": "main content area for the page",
      className: "flex-1 p-3 overflow-y-hidden justify-center\r mx-2 sm:my-12 sm:text-sm\r md:mx-8 \r leading-relaxed\r bg-white",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      caption: siteTitle,
      licenseInfo: licenseInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);
Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

var _c;

$RefreshReg$(_c, "Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9maWxlTmFtZSIsImxpY2Vuc2VJbmZvIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLDBEQUFsQjtBQUNBLElBQU1DLFdBQVcsR0FDdEIsMkxBREs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsWUFBcEI7QUFDQSxJQUFNQyxXQUFXLEdBQ3RCLHdPQURLOztBQUdQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2xDLHNCQUNFO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBb0IsYUFBUyxFQUFDLGFBQTlCO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxXQUFLLEVBQUVMLFNBQWI7QUFBd0IsaUJBQVcsRUFBRUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsMERBQUQ7QUFDRSxhQUFPLEVBQUVELFNBRFg7QUFFRSxZQUFNLEVBQUVFLFdBRlY7QUFHRSxpQkFBVyxFQUFFRCxXQUhmO0FBSUUsaUJBQVcsRUFBRUU7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFRRTtBQUNFLFFBQUUsRUFBQyxjQURMO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxvQkFBVyxnQ0FIYjtBQUlFLGVBQVMsRUFBQyxnSEFKWjtBQUFBLGdCQVVHRTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQW9CRSxxRUFBQywwREFBRDtBQUFRLGFBQU8sRUFBRUwsU0FBakI7QUFBNEIsaUJBQVcsRUFBRUc7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQXpCRDs7S0FBTUMsUztBQTJCU0Esd0VBQWY7QUFFQUEsU0FBUyxDQUFDRSxTQUFWLEdBQXNCO0FBQ3BCRCxVQUFRLEVBQUVFLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjBhOTc5MjQ0MmVkYmZhZmE0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbnRhaW5lclxyXG4gKiBAZGVzY3JpcHRpb24gTWFpbiBDb250YWluZXIgZm9yIHRoZSBBcHBcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ05leHQuanMsIFRhaWx3aW5kIENTUyBhbmQgR29vZ2xlIEZvbnRzIFNlbGYtSG9zdGluZyBEZW1vJztcclxuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAnQSBzaW1wbGUgZGVtbyB0byBzaG93IGhvdyB0byB1c2Ugc2VsZi1ob3N0ZWQgR29vZ2xlIGZvbnRzLiBUaGUgdXNlIG9mIGZvbnQtZGlzcGF5IGF0dHJpYnV0ZSBpcyB1c2VkIHRvIHN0b3AgRk9VVCBhbmQgRk9JVC4gVHJ5IHJlZnJlc2hpbmcgdGhlIHBhZ2UsIHRoZXJlIGlzIG5vIHNpZ25zIG9mIGVpdGhlciBvZiB0aGVzZS4nO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSAnZHRyby1kZXZ1ayc7XHJcbmV4cG9ydCBjb25zdCBsaWNlbnNlSW5mbyA9XHJcbiAgJ0l0IGlzIGltcG9ydGFudCB0byBhbHdheXMgcmVhZCB0aGUgbGljZW5zZSBmb3IgZXZlcnkgZm9udCB0aGF0IHlvdSB1c2UuIEFsbCBvZiB0aGUgR29vZ2xlIGZvbnRzIHVzZWQgaGVyZSB1c2UgdGhlIFNJTCBPcGVuIEZvbnQgTGljZW5zZSwgdjEuMS4gU29tZSBmb250cyB1c2UgdGhlIEFwYWNoZSAyIGxpY2Vuc2UuIFRoZSBVYnVudHUgZm9udHMgdXNlIHRoZSBVYnVudHUgRm9udCBMaWNlbnNlIHYxLjAuJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwXCI+XHJcbiAgICAgIDxIZWFkIHRpdGxlPXtzaXRlVGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNhcHRpb249e3NpdGVUaXRsZX1cclxuICAgICAgICBhdXRob3I9e3Byb2ZpbGVOYW1lfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBsaWNlbnNlSW5mbz17bGljZW5zZUluZm99XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgaWQ9XCJtYWluLWNvbnRlbnRcIlxyXG4gICAgICAgIHJvbGU9XCJtYWluXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwibWFpbiBjb250ZW50IGFyZWEgZm9yIHRoZSBwYWdlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcC0zIG92ZXJmbG93LXktaGlkZGVuIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgbXgtMiBzbTpteS0xMiBzbTp0ZXh0LXNtXHJcbiAgICAgICAgbWQ6bXgtOCBcclxuICAgICAgICBsZWFkaW5nLXJlbGF4ZWRcclxuICAgICAgICAgYmctd2hpdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgY2FwdGlvbj17c2l0ZVRpdGxlfSBsaWNlbnNlSW5mbz17bGljZW5zZUluZm99IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==