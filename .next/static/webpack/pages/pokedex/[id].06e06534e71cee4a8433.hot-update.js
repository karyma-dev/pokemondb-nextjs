webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./src/components/Pokemon/Evolution/Description.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Pokemon/Evolution/Description.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Description_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description.module.css */ \"./src/components/Pokemon/Evolution/Description.module.css\");\n/* harmony import */ var _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Description_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution/Description.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Description = function Description(_ref) {\n  var evoChain = _ref.evoChain,\n      multi = _ref.multi;\n\n  if (multi) {\n    var basic_pokemon = evoChain[0].species_name;\n    var filteredList = evoChain.filter(function (pokemon) {\n      if (pokemon.species_name === basic_pokemon) {\n        return false;\n      }\n\n      return true;\n    }).map(function (pokemon, i) {\n      return __jsx(\"div\", {\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }\n      }, __jsx(\"a\", {\n        href: \"/pokedex/\".concat(basic_pokemon),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }\n      }, __jsx(\"span\", {\n        className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cap,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 25\n        }\n      }, basic_pokemon)), \" \", \"evolves to\", \" \", __jsx(\"a\", {\n        href: \"/pokedex/\".concat(pokemon.species_name),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }\n      }, __jsx(\"span\", {\n        className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cap,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 25\n        }\n      }, pokemon.species_name)), \".\", \" \");\n    });\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, filteredList);\n  } else if (!multi) {}\n};\n\n_c = Description;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\n\nvar _c;\n\n$RefreshReg$(_c, \"Description\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24vRGVzY3JpcHRpb24udHN4P2Y5YjMiXSwibmFtZXMiOlsiRGVzY3JpcHRpb24iLCJldm9DaGFpbiIsIm11bHRpIiwiYmFzaWNfcG9rZW1vbiIsInNwZWNpZXNfbmFtZSIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsInBva2Vtb24iLCJtYXAiLCJpIiwic3R5bGVzIiwiY2FwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBdUI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXOztBQUV2QyxNQUFHQSxLQUFILEVBQVU7QUFDTixRQUFJQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUcsWUFBaEM7QUFFQSxRQUFNQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDNUMsVUFBR0EsT0FBTyxDQUFDSCxZQUFSLEtBQXlCRCxhQUE1QixFQUEyQztBQUN2QyxlQUFPLEtBQVA7QUFDSDs7QUFFRCxhQUFPLElBQVA7QUFDSCxLQU5vQixFQU1sQkssR0FOa0IsQ0FNZCxVQUFDRCxPQUFELEVBQVVFLENBQVYsRUFBZ0I7QUFDbkIsYUFDSTtBQUFLLFdBQUcsRUFBRUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxZQUFJLHFCQUFjTixhQUFkLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0saUJBQVMsRUFBRU8sOERBQU0sQ0FBQ0MsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QlIsYUFBOUIsQ0FESixDQURKLEVBSUssR0FKTCxnQkFNSyxHQU5MLEVBT0k7QUFBRyxZQUFJLHFCQUFjSSxPQUFPLENBQUNILFlBQXRCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0saUJBQVMsRUFBRU0sOERBQU0sQ0FBQ0MsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QkosT0FBTyxDQUFDSCxZQUF0QyxDQURKLENBUEosT0FXSyxHQVhMLENBREo7QUFlSCxLQXRCb0IsQ0FBckI7QUF3QkEsV0FDSSxtRUFDS0MsWUFETCxDQURKO0FBS0gsR0FoQ0QsTUFnQ08sSUFBRyxDQUFDSCxLQUFKLEVBQVUsQ0FFaEI7QUFDSixDQXJDRDs7S0FBTUYsVztBQXVDU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9EZXNjcmlwdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGVzY3JpcHRpb24ubW9kdWxlLmNzcydcblxuY29uc3QgRGVzY3JpcHRpb24gPSAoe2V2b0NoYWluLCBtdWx0aX0pID0+IHtcblxuICAgIGlmKG11bHRpKSB7XG4gICAgICAgIGxldCBiYXNpY19wb2tlbW9uID0gZXZvQ2hhaW5bMF0uc3BlY2llc19uYW1lXG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gZXZvQ2hhaW4uZmlsdGVyKHBva2Vtb24gPT4ge1xuICAgICAgICAgICAgaWYocG9rZW1vbi5zcGVjaWVzX25hbWUgPT09IGJhc2ljX3Bva2Vtb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSkubWFwKChwb2tlbW9uLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb2tlZGV4LyR7YmFzaWNfcG9rZW1vbn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNhcH0+e2Jhc2ljX3Bva2Vtb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+IFxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIGV2b2x2ZXMgdG8gXG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9wb2tlZGV4LyR7cG9rZW1vbi5zcGVjaWVzX25hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jYXB9Pntwb2tlbW9uLnNwZWNpZXNfbmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkTGlzdH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfSBlbHNlIGlmKCFtdWx0aSl7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution/Description.tsx\n");

/***/ })

})