webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: siteTitle, description, profileName, licenseInfo, codeLinkUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileName", function() { return profileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "licenseInfo", function() { return licenseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLinkUrl", function() { return codeLinkUrl; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Head */ "./components/Head.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Footer */ "./components/Footer.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);


var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-tailwind-googlefonts-selfhost-starter\\components\\Container.js",
    _this = undefined;

/**
 * Container
 * @description Main Container for the App
 * @author dtro-devuk @github:dtro-devuk.io
 */



 // const version = require('@/package.json');



var siteTitle = 'Nextjs 10, Tailwind CSS 2.0+ and Google Fonts Self-Hosting Demo';
var description = 'A simple demo to show how to use self-hosted Google fonts. "font-dispay:swap" is used to stop FOUT and FOIT. Try refreshing the page, there is no signs of either of these.';
var profileName = 'dtro-devuk';
var licenseInfo = 'It is important to always read the license for every font that you use. All of the Google fonts used here use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.';
var codeLinkUrl = 'https://github.com/dtro-devuk/nextjs-tailwind-googlefonts-selfhost-starter';

var Container = function Container(_ref) {
  var children = _ref.children;
  var versionInfo = _package_json__WEBPACK_IMPORTED_MODULE_5__["version"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "container",
    className: "bg-gray-300",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: siteTitle,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      caption: siteTitle,
      author: profileName,
      description: description,
      licenseInfo: licenseInfo,
      codeLinkUrl: codeLinkUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "main-content",
      role: "main",
      "aria-label": "main content area for the page",
      className: "flex-1 p-3 overflow-y-hidden justify-center\r mx-2 sm:my-12 sm:text-sm\r md:mx-8 \r leading-relaxed\r bg-white",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      caption: siteTitle,
      author: profileName,
      versionInfo: versionInfo,
      licenseInfo: licenseInfo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9maWxlTmFtZSIsImxpY2Vuc2VJbmZvIiwiY29kZUxpbmtVcmwiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsInZlcnNpb25JbmZvIiwidmVyc2lvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxpRUFBbEI7QUFDQSxJQUFNQyxXQUFXLEdBQ3RCLDZLQURLO0FBRUEsSUFBTUMsV0FBVyxHQUFHLFlBQXBCO0FBQ0EsSUFBTUMsV0FBVyxHQUN0Qix3T0FESztBQUVBLElBQU1DLFdBQVcsR0FDdEIsNEVBREs7O0FBR1AsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbEMsTUFBTUMsV0FBVyxHQUFHQyxxREFBcEI7QUFFQSxzQkFDRTtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQW9CLGFBQVMsRUFBQyxhQUE5QjtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFFUixTQUFiO0FBQXdCLGlCQUFXLEVBQUVDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDBEQUFEO0FBQ0UsYUFBTyxFQUFFRCxTQURYO0FBRUUsWUFBTSxFQUFFRSxXQUZWO0FBR0UsaUJBQVcsRUFBRUQsV0FIZjtBQUlFLGlCQUFXLEVBQUVFLFdBSmY7QUFLRSxpQkFBVyxFQUFFQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVNFO0FBQ0UsUUFBRSxFQUFDLGNBREw7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLG9CQUFXLGdDQUhiO0FBSUUsZUFBUyxFQUFDLGdIQUpaO0FBQUEsZ0JBVUdFO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBcUJFLHFFQUFDLDBEQUFEO0FBQ0UsYUFBTyxFQUFFTixTQURYO0FBRUUsWUFBTSxFQUFFRSxXQUZWO0FBR0UsaUJBQVcsRUFBRUssV0FIZjtBQUlFLGlCQUFXLEVBQUVKO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQWpDRDs7S0FBTUUsUztBQW1DU0Esd0VBQWY7QUFFQUEsU0FBUyxDQUFDSSxTQUFWLEdBQXNCO0FBQ3BCSCxVQUFRLEVBQUVJLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMTBiM2RkODYwZjZkMTc4YTY4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbnRhaW5lclxyXG4gKiBAZGVzY3JpcHRpb24gTWFpbiBDb250YWluZXIgZm9yIHRoZSBBcHBcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbi8vIGNvbnN0IHZlcnNpb24gPSByZXF1aXJlKCdAL3BhY2thZ2UuanNvbicpO1xyXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHsgcmVwb3NpdG9yeSB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ05leHRqcyAxMCwgVGFpbHdpbmQgQ1NTIDIuMCsgYW5kIEdvb2dsZSBGb250cyBTZWxmLUhvc3RpbmcgRGVtbyc7XHJcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgJ0Egc2ltcGxlIGRlbW8gdG8gc2hvdyBob3cgdG8gdXNlIHNlbGYtaG9zdGVkIEdvb2dsZSBmb250cy4gXCJmb250LWRpc3BheTpzd2FwXCIgaXMgdXNlZCB0byBzdG9wIEZPVVQgYW5kIEZPSVQuIFRyeSByZWZyZXNoaW5nIHRoZSBwYWdlLCB0aGVyZSBpcyBubyBzaWducyBvZiBlaXRoZXIgb2YgdGhlc2UuJztcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gJ2R0cm8tZGV2dWsnO1xyXG5leHBvcnQgY29uc3QgbGljZW5zZUluZm8gPVxyXG4gICdJdCBpcyBpbXBvcnRhbnQgdG8gYWx3YXlzIHJlYWQgdGhlIGxpY2Vuc2UgZm9yIGV2ZXJ5IGZvbnQgdGhhdCB5b3UgdXNlLiBBbGwgb2YgdGhlIEdvb2dsZSBmb250cyB1c2VkIGhlcmUgdXNlIHRoZSBTSUwgT3BlbiBGb250IExpY2Vuc2UsIHYxLjEuIFNvbWUgZm9udHMgdXNlIHRoZSBBcGFjaGUgMiBsaWNlbnNlLiBUaGUgVWJ1bnR1IGZvbnRzIHVzZSB0aGUgVWJ1bnR1IEZvbnQgTGljZW5zZSB2MS4wLic7XHJcbmV4cG9ydCBjb25zdCBjb2RlTGlua1VybCA9XHJcbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9kdHJvLWRldnVrL25leHRqcy10YWlsd2luZC1nb29nbGVmb250cy1zZWxmaG9zdC1zdGFydGVyJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB2ZXJzaW9uSW5mbyA9IHZlcnNpb247XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDBcIj5cclxuICAgICAgPEhlYWQgdGl0bGU9e3NpdGVUaXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgY2FwdGlvbj17c2l0ZVRpdGxlfVxyXG4gICAgICAgIGF1dGhvcj17cHJvZmlsZU5hbWV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIGxpY2Vuc2VJbmZvPXtsaWNlbnNlSW5mb31cclxuICAgICAgICBjb2RlTGlua1VybD17Y29kZUxpbmtVcmx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgaWQ9XCJtYWluLWNvbnRlbnRcIlxyXG4gICAgICAgIHJvbGU9XCJtYWluXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwibWFpbiBjb250ZW50IGFyZWEgZm9yIHRoZSBwYWdlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcC0zIG92ZXJmbG93LXktaGlkZGVuIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgbXgtMiBzbTpteS0xMiBzbTp0ZXh0LXNtXHJcbiAgICAgICAgbWQ6bXgtOCBcclxuICAgICAgICBsZWFkaW5nLXJlbGF4ZWRcclxuICAgICAgICAgYmctd2hpdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXJcclxuICAgICAgICBjYXB0aW9uPXtzaXRlVGl0bGV9XHJcbiAgICAgICAgYXV0aG9yPXtwcm9maWxlTmFtZX1cclxuICAgICAgICB2ZXJzaW9uSW5mbz17dmVyc2lvbkluZm99XHJcbiAgICAgICAgbGljZW5zZUluZm89e2xpY2Vuc2VJbmZvfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcclxuXHJcbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=