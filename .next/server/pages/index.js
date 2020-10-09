module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Navbar = () => {\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzgwNWYiXSwibmFtZXMiOlsiTmF2YmFyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLFNBQU8sSUFBUDtBQUNILENBRkQ7O0FBSWVBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suggestions */ \"./src/components/SearchBar/Suggestions.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SuggestionBox = ({\n  text\n}) => {\n  const renderSuggestions = () => {\n    const filteredSuggestions = _Suggestions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filter(data => {\n      if (data.includes(text)) {\n        return true;\n      }\n    });\n    return filteredSuggestions.map(data => __jsx(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 50\n      }\n    }, data));\n  };\n\n  const autoComplete = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, autoComplete);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3g/ODU1YiJdLCJuYW1lcyI6WyJTdWdnZXN0aW9uQm94IiwidGV4dCIsInJlbmRlclN1Z2dlc3Rpb25zIiwiZmlsdGVyZWRTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwiZGF0YSIsImluY2x1ZGVzIiwibWFwIiwiYXV0b0NvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVk7QUFDOUIsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM1QixVQUFNQyxtQkFBbUIsR0FBR0Msb0RBQVcsQ0FBQ0MsTUFBWixDQUFvQkMsSUFBRCxJQUFVO0FBQ3JELFVBQUdBLElBQUksQ0FBQ0MsUUFBTCxDQUFjTixJQUFkLENBQUgsRUFBdUI7QUFDbkIsZUFBTyxJQUFQO0FBQ0g7QUFDSixLQUoyQixDQUE1QjtBQU1BLFdBQU9FLG1CQUFtQixDQUFDSyxHQUFwQixDQUF5QkYsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBTCxDQUFsQyxDQUFQO0FBQ0gsR0FSRDs7QUFVQSxRQUFNRyxZQUFZLEdBQUdSLElBQUksR0FBR0MsaUJBQWlCLEVBQXBCLEdBQXlCLElBQWxEO0FBR0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tPLFlBREwsQ0FESjtBQUtILENBbkJEOztBQXFCZVQsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3VnZ2VzdGlvbnMgZnJvbSAnLi9TdWdnZXN0aW9ucydcblxuY29uc3QgU3VnZ2VzdGlvbkJveCA9ICh7dGV4dH0pID0+IHtcbiAgICBjb25zdCByZW5kZXJTdWdnZXN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRTdWdnZXN0aW9ucyA9IFN1Z2dlc3Rpb25zLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYoZGF0YS5pbmNsdWRlcyh0ZXh0KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRTdWdnZXN0aW9ucy5tYXAoKGRhdGEpID0+IDxsaT57ZGF0YX08L2xpPilcbiAgICB9XG5cbiAgICBjb25zdCBhdXRvQ29tcGxldGUgPSB0ZXh0ID8gcmVuZGVyU3VnZ2VzdGlvbnMoKSA6IG51bGxcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge2F1dG9Db21wbGV0ZX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25Cb3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/Suggestions.tsx":
/*!**************************************************!*\
  !*** ./src/components/SearchBar/Suggestions.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Suggestions = ['pikachu', 'eevee', 'bulbasaur'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Suggestions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbnMudHN4Pzg0ODIiXSwibmFtZXMiOlsiU3VnZ2VzdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsV0FBVyxHQUFHLENBQ2hCLFNBRGdCLEVBRWhCLE9BRmdCLEVBR2hCLFdBSGdCLENBQXBCO0FBTWVBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN1Z2dlc3Rpb25zID0gW1xuICAgICdwaWthY2h1JyxcbiAgICAnZWV2ZWUnLFxuICAgICdidWxiYXNhdXInXG5dXG5cbmV4cG9ydCBkZWZhdWx0IFN1Z2dlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/Suggestions.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SuggestionBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuggestionBox */ \"./src/components/SearchBar/SuggestionBox.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst SearchBar = () => {\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    onChange: e => setText(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }), __jsx(_SuggestionBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    text: text,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4P2VkMGIiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUVBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sWUFBUSxFQUFHQyxDQUFELElBQU9GLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxzREFBRDtBQUFlLFFBQUksRUFBRUwsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSCxDQVREOztBQVdlRCx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTdWdnZXN0aW9uQm94IGZyb20gJy4vU3VnZ2VzdGlvbkJveCdcblxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgcmV0dXJuICAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgPFN1Z2dlc3Rpb25Cb3ggdGV4dD17dGV4dH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchBar/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchBar */ \"./src/components/SearchBar/index.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Homepage = () => {\n  return __jsx(\"div\", {\n    className: \"home\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }), __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZXBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNuQixTQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJ1xuXG5jb25zdCBIb21lcGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

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