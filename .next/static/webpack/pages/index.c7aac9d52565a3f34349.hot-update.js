webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBox */ \"./src/components/SearchBar/SuggestionBox.tsx\");\n/* harmony import */ var _assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/icons/Search.svg */ \"./src/assets/img/icons/Search.svg\");\n/* harmony import */ var _assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/SearchBar/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar SearchBar = function SearchBar() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var autoComplete = function autoComplete(data) {\n    var a = Object.values(data);\n    var b = Object.keys(data);\n    var route = \"/\".concat(a, \"/\").concat(b);\n    router.push(route);\n  };\n\n  return __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,\n    onChange: function onChange(e) {\n      return setText(e.target.value);\n    },\n    value: text,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }), __jsx(\"img\", {\n    src: _assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Search Icon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(_SuggestionBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: text,\n    autoComplete: autoComplete,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(SearchBar, \"TvzjpqPtF30IM/5RmpFNsYxoW8w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeD9lZDBiIl0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJhdXRvQ29tcGxldGUiLCJkYXRhIiwiYSIsIk9iamVjdCIsInZhbHVlcyIsImIiLCJrZXlzIiwicm91dGUiLCJwdXNoIiwic3R5bGVzIiwiZm9ybSIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiU2VhcmNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9CLGtCQUVJQyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRWJDLElBRmE7QUFBQSxNQUVQQyxPQUZPOztBQUtwQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDM0IsUUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsSUFBZCxDQUFWO0FBQ0EsUUFBTUksQ0FBQyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUwsSUFBWixDQUFWO0FBQ0EsUUFBTU0sS0FBSyxjQUFPTCxDQUFQLGNBQVlHLENBQVosQ0FBWDtBQUVBVixVQUFNLENBQUNhLElBQVAsQ0FBWUQsS0FBWjtBQUNILEdBTkQ7O0FBUUEsU0FDSTtBQUFLLGFBQVMsRUFBRUUsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFFRCx3REFBTSxDQUFDRSxLQUF6QjtBQUFnQyxZQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxhQUFPYixPQUFPLENBQUNhLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQSxLQUExQztBQUEwRSxTQUFLLEVBQUVoQixJQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLE9BQUcsRUFBRWlCLG1FQUFWO0FBQXNCLE9BQUcsRUFBQyxhQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFakIsSUFBckI7QUFBMkIsZ0JBQVksRUFBRUUsWUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREo7QUFPSCxDQXBCRDs7R0FBTU4sUztVQUNhRSxxRDs7O0tBRGJGLFM7QUFzQlNBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgU3VnZ2VzdGlvbkJveCBmcm9tICcuL1N1Z2dlc3Rpb25Cb3gnXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2ljb25zL1NlYXJjaC5zdmcnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBcblxuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgICAgIGNvbnN0IGIgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICBjb25zdCByb3V0ZSA9IGAvJHthfS8ke2J9YFxuXG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICAgIH1cblxuICAgIHJldHVybiAgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dGV4dH0vPlxuICAgICAgICAgICAgPGltZyBzcmM9e1NlYXJjaEljb259IGFsdD1cIlNlYXJjaCBJY29uXCIvPlxuICAgICAgICAgICAgPFN1Z2dlc3Rpb25Cb3ggdGV4dD17dGV4dH0gYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/index.tsx\n");

/***/ })

})