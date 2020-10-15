module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/pokedex/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Pokemon/Abilities.tsx":
/*!**********************************************!*\
  !*** ./src/components/Pokemon/Abilities.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Abilities.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Abilities = props => {\n  const abilities = props.abilities.map(({\n    ability\n  }, i) => __jsx(\"li\", {\n    className: \"capitalize\",\n    key: i,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 61\n    }\n  }, ability.name));\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"Abilities\", abilities);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Abilities);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0FiaWxpdGllcy50c3g/YjEyZCJdLCJuYW1lcyI6WyJBYmlsaXRpZXMiLCJwcm9wcyIsImFiaWxpdGllcyIsIm1hcCIsImFiaWxpdHkiLCJpIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFFBQU1DLFNBQVMsR0FBR0QsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixDQUFDO0FBQUNDO0FBQUQsR0FBRCxFQUFZQyxDQUFaLEtBQWtCO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBMkIsT0FBRyxFQUFFQSxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DRCxPQUFPLENBQUNFLElBQTVDLENBQXRDLENBQWxCO0FBR0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUVLSixTQUZMLENBREo7QUFNSCxDQVZEOztBQVllRix3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vQWJpbGl0aWVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFiaWxpdGllcyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGFiaWxpdGllcyA9IHByb3BzLmFiaWxpdGllcy5tYXAoKHthYmlsaXR5fSwgaSkgPT4gPGxpIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIiBrZXk9e2l9PnthYmlsaXR5Lm5hbWV9PC9saT4pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBBYmlsaXRpZXNcbiAgICAgICAgICAgIHthYmlsaXRpZXN9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Abilities.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Held.tsx":
/*!*****************************************!*\
  !*** ./src/components/Pokemon/Held.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Held.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Held = props => {\n  const held = props.held.length > 0 ? props.held.map(({\n    item\n  }, i) => __jsx(\"li\", {\n    key: i,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 72\n    }\n  }, item.name)) : \"none\";\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, \"Held Items\", held);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Held);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0hlbGQudHN4PzE1MDUiXSwibmFtZXMiOlsiSGVsZCIsInByb3BzIiwiaGVsZCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBQ3BCLFFBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFOLENBQVdDLE1BQVgsR0FBb0IsQ0FBcEIsR0FBd0JGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxHQUFYLENBQWUsQ0FBQztBQUFDQztBQUFELEdBQUQsRUFBU0MsQ0FBVCxLQUFlO0FBQUksT0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYUQsSUFBSSxDQUFDRSxJQUFsQixDQUE5QixDQUF4QixHQUFzRixNQUFuRztBQUVBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFS0wsSUFGTCxDQURKO0FBTUgsQ0FURDs7QUFXZUYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0hlbGQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGVsZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGhlbGQgPSBwcm9wcy5oZWxkLmxlbmd0aCA+IDAgPyBwcm9wcy5oZWxkLm1hcCgoe2l0ZW19LCBpKSA9PiA8bGkga2V5PXtpfT57aXRlbS5uYW1lfTwvbGk+KSA6IFwibm9uZVwiXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSGVsZCBJdGVtc1xuICAgICAgICAgICAge2hlbGR9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Held.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Moves/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Pokemon/Moves/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Moves/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Moves = props => {\n  let o = {};\n  const generation = props.moves.reduce((total, currentValue) => {\n    if (typeof total !== 'object') {\n      total = {};\n    }\n\n    currentValue.version_group_details.forEach(move => {\n      const key = move.version_group.name;\n      const newObj = {\n        move: currentValue.move.name,\n        level: move.level_learned_at,\n        method: move.move_learn_method.name,\n        mId: move.move_learn_method.url.match(/\\/[0-9]+\\//)[0],\n        vId: move.version_group.url.match(/\\/[0-9]+\\//)[0]\n      };\n\n      if (typeof total[key] === 'undefined') {\n        total[key] = [];\n        total[key].push(newObj);\n      } else {\n        total[key].push(newObj);\n      }\n    });\n    return total;\n  });\n  console.log(generation);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Moves);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL01vdmVzL2luZGV4LnRzeD9hYWU5Il0sIm5hbWVzIjpbIk1vdmVzIiwicHJvcHMiLCJvIiwiZ2VuZXJhdGlvbiIsIm1vdmVzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50VmFsdWUiLCJ2ZXJzaW9uX2dyb3VwX2RldGFpbHMiLCJmb3JFYWNoIiwibW92ZSIsImtleSIsInZlcnNpb25fZ3JvdXAiLCJuYW1lIiwibmV3T2JqIiwibGV2ZWwiLCJsZXZlbF9sZWFybmVkX2F0IiwibWV0aG9kIiwibW92ZV9sZWFybl9tZXRob2QiLCJtSWQiLCJ1cmwiLCJtYXRjaCIsInZJZCIsInB1c2giLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFDckIsTUFBSUMsQ0FBQyxHQUFHLEVBQVI7QUFHQSxRQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxNQUFaLENBQW1CLENBQUNDLEtBQUQsRUFBUUMsWUFBUixLQUF5QjtBQUMzRCxRQUFHLE9BQU9ELEtBQVAsS0FBaUIsUUFBcEIsRUFBNkI7QUFDekJBLFdBQUssR0FBRyxFQUFSO0FBQ0g7O0FBRURDLGdCQUFZLENBQUNDLHFCQUFiLENBQW1DQyxPQUFuQyxDQUEyQ0MsSUFBSSxJQUFJO0FBQy9DLFlBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxhQUFMLENBQW1CQyxJQUEvQjtBQUNBLFlBQU1DLE1BQU0sR0FBRztBQUNYSixZQUFJLEVBQUVILFlBQVksQ0FBQ0csSUFBYixDQUFrQkcsSUFEYjtBQUVYRSxhQUFLLEVBQUVMLElBQUksQ0FBQ00sZ0JBRkQ7QUFHWEMsY0FBTSxFQUFFUCxJQUFJLENBQUNRLGlCQUFMLENBQXVCTCxJQUhwQjtBQUlYTSxXQUFHLEVBQUVULElBQUksQ0FBQ1EsaUJBQUwsQ0FBdUJFLEdBQXZCLENBQTJCQyxLQUEzQixDQUFpQyxZQUFqQyxFQUErQyxDQUEvQyxDQUpNO0FBS1hDLFdBQUcsRUFBRVosSUFBSSxDQUFDRSxhQUFMLENBQW1CUSxHQUFuQixDQUF1QkMsS0FBdkIsQ0FBNkIsWUFBN0IsRUFBMkMsQ0FBM0M7QUFMTSxPQUFmOztBQVFBLFVBQUcsT0FBT2YsS0FBSyxDQUFDSyxHQUFELENBQVosS0FBc0IsV0FBekIsRUFBc0M7QUFDbENMLGFBQUssQ0FBQ0ssR0FBRCxDQUFMLEdBQWEsRUFBYjtBQUNBTCxhQUFLLENBQUNLLEdBQUQsQ0FBTCxDQUFXWSxJQUFYLENBQWdCVCxNQUFoQjtBQUNILE9BSEQsTUFHTztBQUNIUixhQUFLLENBQUNLLEdBQUQsQ0FBTCxDQUFXWSxJQUFYLENBQWdCVCxNQUFoQjtBQUNIO0FBQ0osS0FoQkQ7QUFrQkEsV0FBT1IsS0FBUDtBQUNILEdBeEJrQixDQUFuQjtBQTBCQWtCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsVUFBWjtBQUVBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBS0gsQ0FyQ0Q7O0FBdUNlSCxvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vTW92ZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW92ZXMgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgbyA9IHt9XG5cblxuICAgIGNvbnN0IGdlbmVyYXRpb24gPSBwcm9wcy5tb3Zlcy5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50VmFsdWUpID0+IHtcbiAgICAgICAgaWYodHlwZW9mIHRvdGFsICE9PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICB0b3RhbCA9IHt9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VmFsdWUudmVyc2lvbl9ncm91cF9kZXRhaWxzLmZvckVhY2gobW92ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBtb3ZlLnZlcnNpb25fZ3JvdXAubmFtZVxuICAgICAgICAgICAgY29uc3QgbmV3T2JqID0ge1xuICAgICAgICAgICAgICAgIG1vdmU6IGN1cnJlbnRWYWx1ZS5tb3ZlLm5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IG1vdmUubGV2ZWxfbGVhcm5lZF9hdCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1vdmUubW92ZV9sZWFybl9tZXRob2QubmFtZSxcbiAgICAgICAgICAgICAgICBtSWQ6IG1vdmUubW92ZV9sZWFybl9tZXRob2QudXJsLm1hdGNoKC9cXC9bMC05XStcXC8vKVswXSxcbiAgICAgICAgICAgICAgICB2SWQ6IG1vdmUudmVyc2lvbl9ncm91cC51cmwubWF0Y2goL1xcL1swLTldK1xcLy8pWzBdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiB0b3RhbFtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRvdGFsW2tleV0gPSBbXVxuICAgICAgICAgICAgICAgIHRvdGFsW2tleV0ucHVzaChuZXdPYmopXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvdGFsW2tleV0ucHVzaChuZXdPYmopXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRvdGFsXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKGdlbmVyYXRpb24pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Moves/index.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Sprite.tsx":
/*!*******************************************!*\
  !*** ./src/components/Pokemon/Sprite.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Sprite.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Spirite = ({\n  name,\n  sprites\n}) => {\n  return __jsx(\"img\", {\n    src: sprites.front_default,\n    alt: `Sprite of ${name}`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 12\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spirite);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL1Nwcml0ZS50c3g/MTdjZiJdLCJuYW1lcyI6WyJTcGlyaXRlIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBdUI7QUFDbkMsU0FBTztBQUFLLE9BQUcsRUFBRUEsT0FBTyxDQUFDQyxhQUFsQjtBQUFpQyxPQUFHLEVBQUcsYUFBWUYsSUFBSyxFQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDSCxDQUZEOztBQUllRCxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vU3ByaXRlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNwaXJpdGUgPSAoeyBuYW1lLCBzcHJpdGVzIH0pID0+IHtcbiAgICByZXR1cm4gPGltZyBzcmM9e3Nwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PXtgU3ByaXRlIG9mICR7bmFtZX1gfS8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaXJpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Sprite.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Stats.tsx":
/*!******************************************!*\
  !*** ./src/components/Pokemon/Stats.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Stats.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Stats = props => {\n  const stats = props.stats.map((stats, i) => {\n    const stat = stats.stat;\n    return __jsx(\"li\", {\n      key: i,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 16\n      }\n    }, stat.name, \": \", stats.base_stat);\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Stats:\", stats);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL1N0YXRzLnRzeD9hZmQyIl0sIm5hbWVzIjpbIlN0YXRzIiwicHJvcHMiLCJzdGF0cyIsIm1hcCIsImkiLCJzdGF0IiwibmFtZSIsImJhc2Vfc3RhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3JCLFFBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsQ0FBQ0QsS0FBRCxFQUFRRSxDQUFSLEtBQWM7QUFDeEMsVUFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNHLElBQW5CO0FBRUEsV0FBTztBQUFJLFNBQUcsRUFBRUQsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFDLElBQUksQ0FBQ0MsSUFBbEIsUUFBMEJKLEtBQUssQ0FBQ0ssU0FBaEMsQ0FBUDtBQUNILEdBSmEsQ0FBZDtBQU1BLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUVLTCxLQUZMLENBREo7QUFNSCxDQWJEOztBQWVlRixvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vU3RhdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3RhdHMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBzdGF0cyA9IHByb3BzLnN0YXRzLm1hcCgoc3RhdHMsIGkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdCA9IHN0YXRzLnN0YXRcblxuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+e3N0YXQubmFtZX06IHtzdGF0cy5iYXNlX3N0YXR9PC9saT5cbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN0YXRzOlxuICAgICAgICAgICAge3N0YXRzfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Stats.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Type.tsx":
/*!*****************************************!*\
  !*** ./src/components/Pokemon/Type.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Type.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Type = props => {\n  const types = props.types.map(({\n    type\n  }, i) => __jsx(\"li\", {\n    key: i,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 2,\n      columnNumber: 51\n    }\n  }, type.name));\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, \"Types:\", types);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Type);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL1R5cGUudHN4PzUzMmMiXSwibmFtZXMiOlsiVHlwZSIsInByb3BzIiwidHlwZXMiLCJtYXAiLCJ0eXBlIiwiaSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUNwQixRQUFNQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUFaLENBQWdCLENBQUM7QUFBQ0M7QUFBRCxHQUFELEVBQVNDLENBQVQsS0FBZ0I7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRCxJQUFJLENBQUNFLElBQWxCLENBQWhDLENBQWQ7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFFS0osS0FGTCxDQURKO0FBTUgsQ0FURDs7QUFXZUYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL1R5cGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHlwZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHR5cGVzID0gcHJvcHMudHlwZXMubWFwKCh7dHlwZX0sIGkgKSA9PiA8bGkga2V5PXtpfT57dHlwZS5uYW1lfTwvbGk+KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFR5cGVzOlxuICAgICAgICAgICAge3R5cGVzfVxuICAgICAgICA8L2Rpdj5cbiAgICApIFxufVxuXG5leHBvcnQgZGVmYXVsdCBUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Type.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/index.module.css":
/*!*************************************************!*\
  !*** ./src/components/Pokemon/index.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Pokemon_container__48O9e\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL2luZGV4Lm1vZHVsZS5jc3M/MjI0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vaW5kZXgubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBva2Vtb25fY29udGFpbmVyX180OE85ZVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/index.module.css\n");

/***/ }),

/***/ "./src/components/Pokemon/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Pokemon/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Abilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Abilities */ \"./src/components/Pokemon/Abilities.tsx\");\n/* harmony import */ var _Held__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Held */ \"./src/components/Pokemon/Held.tsx\");\n/* harmony import */ var _Moves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Moves */ \"./src/components/Pokemon/Moves/index.tsx\");\n/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stats */ \"./src/components/Pokemon/Stats.tsx\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sprite */ \"./src/components/Pokemon/Sprite.tsx\");\n/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Type */ \"./src/components/Pokemon/Type.tsx\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/Pokemon/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst Pokemon = ({\n  pokemon\n}) => {\n  const {\n    abilities,\n    base_experience,\n    held_items,\n    id,\n    moves,\n    name,\n    sprites,\n    stats,\n    types\n  } = pokemon;\n  return __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_Sprite__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sprites: sprites,\n    name: name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }), \"Name: \", name, \"National No: \", id, \"Base Exp: \", base_experience, __jsx(_Abilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    abilities: abilities,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }), __jsx(_Held__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    held: held_items,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), __jsx(_Stats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    stats: stats,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(_Type__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    types: types,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(_Moves__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    moves: moves,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL2luZGV4LnRzeD8zYmJiIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwiYWJpbGl0aWVzIiwiYmFzZV9leHBlcmllbmNlIiwiaGVsZF9pdGVtcyIsImlkIiwibW92ZXMiLCJuYW1lIiwic3ByaXRlcyIsInN0YXRzIiwidHlwZXMiLCJzdHlsZXMiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQzdCLFFBQU07QUFBRUMsYUFBRjtBQUFhQyxtQkFBYjtBQUE4QkMsY0FBOUI7QUFBMENDLE1BQTFDO0FBQThDQyxTQUE5QztBQUFxREMsUUFBckQ7QUFBMkRDLFdBQTNEO0FBQW9FQyxTQUFwRTtBQUEyRUM7QUFBM0UsTUFBcUZULE9BQTNGO0FBRUEsU0FDSTtBQUFLLGFBQVMsRUFBRVUsd0RBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0NBQUQ7QUFBUSxXQUFPLEVBQUVKLE9BQWpCO0FBQTBCLFFBQUksRUFBRUQsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLFlBRVdBLElBRlgsbUJBR2tCRixFQUhsQixnQkFJZUYsZUFKZixFQUtJLE1BQUMsa0RBQUQ7QUFBVyxhQUFTLEVBQUVELFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JLE1BQUMsNkNBQUQ7QUFBTSxRQUFJLEVBQUVFLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0ksTUFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBRUssS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSSxNQUFDLDZDQUFEO0FBQU0sU0FBSyxFQUFFQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUVKLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREo7QUFhSCxDQWhCRDs7QUFrQmVOLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJpbGl0aWVzIGZyb20gJy4vQWJpbGl0aWVzJ1xuaW1wb3J0IEhlbGQgZnJvbSAnLi9IZWxkJ1xuaW1wb3J0IE1vdmVzIGZyb20gJy4vTW92ZXMnXG5pbXBvcnQgU3RhdHMgZnJvbSAnLi9TdGF0cydcbmltcG9ydCBTcHJpdGUgZnJvbSAnLi9TcHJpdGUnXG5pbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBQb2tlbW9uID0gKHsgcG9rZW1vbiB9KSA9PiB7XG4gICAgY29uc3QgeyBhYmlsaXRpZXMsIGJhc2VfZXhwZXJpZW5jZSwgaGVsZF9pdGVtcywgaWQsIG1vdmVzLCBuYW1lLCBzcHJpdGVzLCBzdGF0cywgdHlwZXMgfSA9IHBva2Vtb25cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxTcHJpdGUgc3ByaXRlcz17c3ByaXRlc30gbmFtZT17bmFtZX0gLz5cbiAgICAgICAgICAgIE5hbWU6IHtuYW1lfVxuICAgICAgICAgICAgTmF0aW9uYWwgTm86IHtpZH1cbiAgICAgICAgICAgIEJhc2UgRXhwOiB7YmFzZV9leHBlcmllbmNlfVxuICAgICAgICAgICAgPEFiaWxpdGllcyBhYmlsaXRpZXM9e2FiaWxpdGllc30gLz5cbiAgICAgICAgICAgIDxIZWxkIGhlbGQ9e2hlbGRfaXRlbXN9IC8+XG4gICAgICAgICAgICA8U3RhdHMgc3RhdHM9e3N0YXRzfSAvPlxuICAgICAgICAgICAgPFR5cGUgdHlwZXM9e3R5cGVzfSAvPlxuICAgICAgICAgICAgPE1vdmVzIG1vdmVzPXttb3Zlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/index.tsx\n");

/***/ }),

/***/ "./src/pages/pokedex/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/pokedex/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Pokemon */ \"./src/components/Pokemon/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/pokedex/[id].tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst Pokedex = () => {\n  const {\n    0: pokemon,\n    1: setPokemon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const name = router.query.id;\n\n    if (name) {\n      let pokemonData;\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://pokeapi.co/api/v2/pokemon/${String(name).toLowerCase()}`).then(res => {\n        pokemonData = res.data;\n        return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(res.data.species.url);\n      }).then(res => {\n        pokemonData = _objectSpread(_objectSpread({}, pokemonData), {}, {\n          species: res.data\n        });\n        setPokemon(pokemonData);\n        setLoading(false);\n      });\n    }\n  }, [router]);\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 16\n      }\n    }, \"Loading...\");\n  } else {\n    return __jsx(_components_Pokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      pokemon: pokemon,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokedex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9rZWRleC8udHN4PzdhODMiXSwibmFtZXMiOlsiUG9rZWRleCIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJxdWVyeSIsImlkIiwicG9rZW1vbkRhdGEiLCJheGlvcyIsImdldCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwidGhlbiIsInJlcyIsImRhdGEiLCJzcGVjaWVzIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFFQSxRQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSSxLQUFQLENBQWFDLEVBQTFCOztBQUNBLFFBQUdGLElBQUgsRUFBUTtBQUNKLFVBQUlHLFdBQUo7QUFDQUMsa0RBQUssQ0FBQ0MsR0FBTixDQUFXLHFDQUFvQ0MsTUFBTSxDQUFDTixJQUFELENBQU4sQ0FBYU8sV0FBYixFQUEyQixFQUExRSxFQUNLQyxJQURMLENBQ1VDLEdBQUcsSUFBSTtBQUNUTixtQkFBVyxHQUFHTSxHQUFHLENBQUNDLElBQWxCO0FBQ0EsZUFBT04sNENBQUssQ0FBQ0MsR0FBTixDQUFVSSxHQUFHLENBQUNDLElBQUosQ0FBU0MsT0FBVCxDQUFpQkMsR0FBM0IsQ0FBUDtBQUNILE9BSkwsRUFLS0osSUFMTCxDQUtVQyxHQUFHLElBQUk7QUFDVE4sbUJBQVcsbUNBQU9BLFdBQVA7QUFBb0JRLGlCQUFPLEVBQUVGLEdBQUcsQ0FBQ0M7QUFBakMsVUFBWDtBQUVBakIsa0JBQVUsQ0FBQ1UsV0FBRCxDQUFWO0FBQ0FQLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsT0FWTDtBQVdIO0FBQ0osR0FoQlEsRUFnQk4sQ0FBQ0MsTUFBRCxDQWhCTSxDQUFUOztBQWtCQSxNQUFHRixPQUFILEVBQVk7QUFDUixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLE1BQUMsMkRBQUQ7QUFBUyxhQUFPLEVBQUVILE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNIO0FBQ0osQ0E3QkQ7O0FBK0JlRCxzRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb2tlZGV4L1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9rZW1vbidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBQb2tlZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIGlmKG5hbWUpe1xuICAgICAgICAgICAgbGV0IHBva2Vtb25EYXRhXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke1N0cmluZyhuYW1lKS50b0xvd2VyQ2FzZSgpfWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9rZW1vbkRhdGEgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHJlcy5kYXRhLnNwZWNpZXMudXJsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9rZW1vbkRhdGEgPSB7Li4ucG9rZW1vbkRhdGEsIHNwZWNpZXM6IHJlcy5kYXRhIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXRQb2tlbW9uKHBva2Vtb25EYXRhKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSlcblxuICAgIGlmKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFBva2Vtb24gcG9rZW1vbj17cG9rZW1vbn0vPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZWRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[id].tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });