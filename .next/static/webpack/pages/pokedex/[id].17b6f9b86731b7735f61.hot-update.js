webpackHotUpdate_N_E("pages/pokedex/[id]",{

/***/ "./src/pages/pokedex/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/pokedex/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/pokedex/[id].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Pokedex = function Pokedex() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      pokemon = _useState[0],\n      setPokemon = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var name = router.query.id;\n\n    if (name) {\n      var pokemonData;\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"https://pokeapi.co/api/v2/pokemon/\".concat(name.toLowerCase())).then(function (res) {\n        pokemonData = res.data;\n        return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(res.data.species.url);\n      }).then(function (res) {\n        pokemonData = _objectSpread(_objectSpread({}, pokemonData), {}, {\n          species: res.data\n        });\n        setPokemon(pokemonData);\n        setLoading(false);\n      });\n    }\n  }, [router]);\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 16\n      }\n    }, \"Loading...\");\n  } else {\n    return null;\n  }\n};\n\n_s(Pokedex, \"P42YINU1lX/wudGY2A6LRaaLNBY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Pokedex;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokedex);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pokedex\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bva2VkZXgvLnRzeD83YTgzIl0sIm5hbWVzIjpbIlBva2VkZXgiLCJ1c2VTdGF0ZSIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJuYW1lIiwicXVlcnkiLCJpZCIsInBva2Vtb25EYXRhIiwiYXhpb3MiLCJnZXQiLCJ0b0xvd2VyQ2FzZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3BlY2llcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLElBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFWUYsc0RBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUEsTUFFWEcsT0FGVztBQUFBLE1BRUZDLFVBRkU7O0FBSWxCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsRUFBMUI7O0FBQ0EsUUFBR0YsSUFBSCxFQUFRO0FBQ0osVUFBSUcsV0FBSjtBQUNBQyxrREFBSyxDQUFDQyxHQUFOLDZDQUErQ0wsSUFBSSxDQUFDTSxXQUFMLEVBQS9DLEdBQ0tDLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVEwsbUJBQVcsR0FBR0ssR0FBRyxDQUFDQyxJQUFsQjtBQUNBLGVBQU9MLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUcsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE9BQVQsQ0FBaUJDLEdBQTNCLENBQVA7QUFDSCxPQUpMLEVBS0tKLElBTEwsQ0FLVSxVQUFBQyxHQUFHLEVBQUk7QUFDVEwsbUJBQVcsbUNBQU9BLFdBQVA7QUFBb0JPLGlCQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFBakMsVUFBWDtBQUVBZixrQkFBVSxDQUFDUyxXQUFELENBQVY7QUFDQVAsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxPQVZMO0FBV0g7QUFDSixHQWhCUSxFQWdCTixDQUFDQyxNQUFELENBaEJNLENBQVQ7O0FBa0JBLE1BQUdGLE9BQUgsRUFBWTtBQUNSLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0E3QkQ7O0dBQU1KLE87VUFJYU8scUQ7OztLQUpiUCxPO0FBK0JTQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb2tlZGV4L1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBQb2tlZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIGlmKG5hbWUpe1xuICAgICAgICAgICAgbGV0IHBva2Vtb25EYXRhXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke25hbWUudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBva2Vtb25EYXRhID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldChyZXMuZGF0YS5zcGVjaWVzLnVybClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBva2Vtb25EYXRhID0gey4uLnBva2Vtb25EYXRhLCBzcGVjaWVzOiByZXMuZGF0YSB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0UG9rZW1vbihwb2tlbW9uRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pXG5cbiAgICBpZihsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2VkZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[id].tsx\n");

/***/ })

})