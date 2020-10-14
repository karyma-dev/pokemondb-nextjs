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

/***/ "./src/assets/data/Berries.tsx":
/*!*************************************!*\
  !*** ./src/assets/data/Berries.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Berries = ['Aguav', 'Aspear'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Berries);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RhdGEvQmVycmllcy50c3g/YWRiMCJdLCJuYW1lcyI6WyJCZXJyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBRyxDQUNaLE9BRFksRUFFWixRQUZZLENBQWhCO0FBS2VBLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9kYXRhL0JlcnJpZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmVycmllcyA9IFtcbiAgICAnQWd1YXYnLFxuICAgICdBc3BlYXInXG5dXG5cbmV4cG9ydCBkZWZhdWx0IEJlcnJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/data/Berries.tsx\n");

/***/ }),

/***/ "./src/assets/data/Pokemons.tsx":
/*!**************************************!*\
  !*** ./src/assets/data/Pokemons.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Pokemons = ['pikachu', 'eevee', 'bulbasaur'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemons);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RhdGEvUG9rZW1vbnMudHN4P2JiNGQiXSwibmFtZXMiOlsiUG9rZW1vbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFHLENBQ2IsU0FEYSxFQUViLE9BRmEsRUFHYixXQUhhLENBQWpCO0FBTWVBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9kYXRhL1Bva2Vtb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBva2Vtb25zID0gW1xuICAgICdwaWthY2h1JyxcbiAgICAnZWV2ZWUnLFxuICAgICdidWxiYXNhdXInXG5dXG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/data/Pokemons.tsx\n");

/***/ }),

/***/ "./src/assets/img/icons/Search.svg":
/*!*****************************************!*\
  !*** ./src/assets/img/icons/Search.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yMC43NDM0IDE5LjUwNzJMMTQuNzcxNiAxMy41MzUzQzE1LjkyODMgMTIuMTA2NSAxNi42MjQ4IDEwLjI5MDkgMTYuNjI0OCA4LjMxMzQxQzE2LjYyNDggMy43MzAyIDEyLjg5NTYgMC4wMDA5NzY1NjIgOC4zMTIzOSAwLjAwMDk3NjU2MkMzLjcyOTE5IDAuMDAwOTc2NTYyIDAgMy43MzAxNiAwIDguMzEzMzdDMCAxMi44OTY2IDMuNzI5MjMgMTYuNjI1OCA4LjMxMjQzIDE2LjYyNThDMTAuMjg5OSAxNi42MjU4IDEyLjEwNTUgMTUuOTI5MyAxMy41MzQ0IDE0Ljc3MjZMMTkuNTA2MiAyMC43NDQ0QzE5LjY3NjggMjAuOTE1IDE5LjkwMDggMjEuMDAwOCAyMC4xMjQ4IDIxLjAwMDhDMjAuMzQ4OCAyMS4wMDA4IDIwLjU3MjggMjAuOTE1IDIwLjc0MzQgMjAuNzQ0NEMyMS4wODU2IDIwLjQwMjMgMjEuMDg1NiAxOS44NDkzIDIwLjc0MzQgMTkuNTA3MlpNOC4zMTI0MyAxNC44NzU4QzQuNjkzNDUgMTQuODc1OCAxLjc1IDExLjkzMjMgMS43NSA4LjMxMzM3QzEuNzUgNC42OTQzOSA0LjY5MzQ1IDEuNzUwOTMgOC4zMTI0MyAxLjc1MDkzQzExLjkzMTQgMS43NTA5MyAxNC44NzQ5IDQuNjk0MzkgMTQuODc0OSA4LjMxMzM3QzE0Ljg3NDkgMTEuOTMyMyAxMS45MzE0IDE0Ljg3NTggOC4zMTI0MyAxNC44NzU4WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9pY29ucy9TZWFyY2guc3ZnP2U5NmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUNBQXFDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9pbWcvaWNvbnMvU2VhcmNoLnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakVpSUdobGFXZG9kRDBpTWpFaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TVNBeU1TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEdjZ1kyeHBjQzF3WVhSb1BTSjFjbXdvSTJOc2FYQXdLU0krQ2p4d1lYUm9JR1E5SWsweU1DNDNORE0wSURFNUxqVXdOekpNTVRRdU56Y3hOaUF4TXk0MU16VXpRekUxTGpreU9ETWdNVEl1TVRBMk5TQXhOaTQyTWpRNElERXdMakk1TURrZ01UWXVOakkwT0NBNExqTXhNelF4UXpFMkxqWXlORGdnTXk0M016QXlJREV5TGpnNU5UWWdNQzR3TURBNU56WTFOaklnT0M0ek1USXpPU0F3TGpBd01EazNOalUyTWtNekxqY3lPVEU1SURBdU1EQXdPVGMyTlRZeUlEQWdNeTQzTXpBeE5pQXdJRGd1TXpFek16ZERNQ0F4TWk0NE9UWTJJRE11TnpJNU1qTWdNVFl1TmpJMU9DQTRMak14TWpReklERTJMall5TlRoRE1UQXVNamc1T1NBeE5pNDJNalU0SURFeUxqRXdOVFVnTVRVdU9USTVNeUF4TXk0MU16UTBJREUwTGpjM01qWk1NVGt1TlRBMk1pQXlNQzQzTkRRMFF6RTVMalkzTmpnZ01qQXVPVEUxSURFNUxqa3dNRGdnTWpFdU1EQXdPQ0F5TUM0eE1qUTRJREl4TGpBd01EaERNakF1TXpRNE9DQXlNUzR3TURBNElESXdMalUzTWpnZ01qQXVPVEUxSURJd0xqYzBNelFnTWpBdU56UTBORU15TVM0d09EVTJJREl3TGpRd01qTWdNakV1TURnMU5pQXhPUzQ0TkRreklESXdMamMwTXpRZ01Ua3VOVEEzTWxwTk9DNHpNVEkwTXlBeE5DNDROelU0UXpRdU5qa3pORFVnTVRRdU9EYzFPQ0F4TGpjMUlERXhMamt6TWpNZ01TNDNOU0E0TGpNeE16TTNRekV1TnpVZ05DNDJPVFF6T1NBMExqWTVNelExSURFdU56VXdPVE1nT0M0ek1USTBNeUF4TGpjMU1Ea3pRekV4TGprek1UUWdNUzQzTlRBNU15QXhOQzQ0TnpRNUlEUXVOamswTXprZ01UUXVPRGMwT1NBNExqTXhNek0zUXpFMExqZzNORGtnTVRFdU9UTXlNeUF4TVM0NU16RTBJREUwTGpnM05UZ2dPQzR6TVRJME15QXhOQzQ0TnpVNFdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BDOW5QZ284WkdWbWN6NEtQR05zYVhCUVlYUm9JR2xrUFNKamJHbHdNQ0krQ2p4eVpXTjBJSGRwWkhSb1BTSXlNU0lnYUdWcFoyaDBQU0l5TVNJZ1ptbHNiRDBpZDJocGRHVWlMejRLUEM5amJHbHdVR0YwYUQ0S1BDOWtaV1p6UGdvOEwzTjJaejRLXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/img/icons/Search.svg\n");

/***/ }),

/***/ "./src/components/Navbar.module.css":
/*!******************************************!*\
  !*** ./src/components/Navbar.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Navbar_navbar__1DtW9\",\n\t\"link\": \"Navbar_link__UtjCG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIubW9kdWxlLmNzcz9jYTNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdmJhcl9uYXZiYXJfXzFEdFc5XCIsXG5cdFwibGlua1wiOiBcIk5hdmJhcl9saW5rX19VdGpDR1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.module.css\n");

/***/ }),

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ \"./src/components/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Navbar.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Navbar = () => {\n  return __jsx(\"ul\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, __jsx(\"li\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, \"Pokemon\"), __jsx(\"li\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.link,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }, \"Berries\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzgwNWYiXSwibmFtZXMiOlsiTmF2YmFyIiwic3R5bGVzIiwibmF2YmFyIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNqQixTQUNJO0FBQUksYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxNQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVELHlEQUFNLENBQUNFLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQUksYUFBUyxFQUFFRix5REFBTSxDQUFDRSxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VILHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcydcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlBva2Vtb248L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkJlcnJpZXM8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/SuggestionBox.module.css":
/*!***********************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"list\": \"SuggestionBox_list__295ff\",\n\t\"item\": \"SuggestionBox_item__oNZ-Y\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC5tb2R1bGUuY3NzP2E4ODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TdWdnZXN0aW9uQm94Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaXN0XCI6IFwiU3VnZ2VzdGlvbkJveF9saXN0X18yOTVmZlwiLFxuXHRcIml0ZW1cIjogXCJTdWdnZXN0aW9uQm94X2l0ZW1fX29OWi1ZXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.module.css\n");

/***/ }),

/***/ "./src/components/SearchBar/SuggestionBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/SearchBar/SuggestionBox.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\n/* harmony import */ var _assets_data_Berries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/Berries */ \"./src/assets/data/Berries.tsx\");\n/* harmony import */ var _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuggestionBox.module.css */ \"./src/components/SearchBar/SuggestionBox.module.css\");\n/* harmony import */ var _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst SuggestionBox = ({\n  text,\n  autoComplete\n}) => {\n  const renderSuggestions = () => {\n    let suggestions = [];\n    let lowerCaseText = text.toLowerCase();\n    _assets_data_Berries__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach(berry => {\n      let lowerCaseBerry = berry.toLowerCase();\n\n      if (lowerCaseBerry.includes(lowerCaseText)) {\n        suggestions = [...suggestions, {\n          [berry]: 'berry'\n        }];\n      }\n    });\n    _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(pokemon => {\n      let lowerCasePokemon = pokemon.toLowerCase();\n\n      if (lowerCasePokemon.includes(lowerCaseText)) {\n        suggestions = [...suggestions, {\n          [pokemon]: 'pokedex'\n        }];\n      }\n    });\n    suggestions.sort((a, b) => {\n      if (Object.keys(a) > Object.keys(b)) {\n        return 1;\n      } else {\n        return -1;\n      }\n    });\n    return suggestions.map((data, i) => __jsx(\"li\", {\n      className: _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.item,\n      key: i,\n      onClick: () => autoComplete(data),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 45\n      }\n    }, Object.keys(data)));\n  };\n\n  const render = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    className: _SuggestionBox_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, render);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3g/ODU1YiJdLCJuYW1lcyI6WyJTdWdnZXN0aW9uQm94IiwidGV4dCIsImF1dG9Db21wbGV0ZSIsInJlbmRlclN1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnMiLCJsb3dlckNhc2VUZXh0IiwidG9Mb3dlckNhc2UiLCJCZXJyaWVzIiwiZm9yRWFjaCIsImJlcnJ5IiwibG93ZXJDYXNlQmVycnkiLCJpbmNsdWRlcyIsIlBva2Vtb25zIiwicG9rZW1vbiIsImxvd2VyQ2FzZVBva2Vtb24iLCJzb3J0IiwiYSIsImIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZGF0YSIsImkiLCJzdHlsZXMiLCJpdGVtIiwicmVuZGVyIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFDQyxNQUFEO0FBQU9DO0FBQVAsQ0FBRCxLQUEwQjtBQUM1QyxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFFBQUlDLGFBQWEsR0FBR0osSUFBSSxDQUFDSyxXQUFMLEVBQXBCO0FBRUFDLGdFQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEtBQUssSUFBSTtBQUNyQixVQUFJQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0gsV0FBTixFQUFyQjs7QUFDQSxVQUFHSSxjQUFjLENBQUNDLFFBQWYsQ0FBd0JOLGFBQXhCLENBQUgsRUFBMEM7QUFDdENELG1CQUFXLEdBQUcsQ0FBQyxHQUFHQSxXQUFKLEVBQWlCO0FBQUUsV0FBQ0ssS0FBRCxHQUFTO0FBQVgsU0FBakIsQ0FBZDtBQUNIO0FBQ0osS0FMRDtBQU9BRyxpRUFBUSxDQUFDSixPQUFULENBQWlCSyxPQUFPLElBQUk7QUFDeEIsVUFBSUMsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQ1AsV0FBUixFQUF2Qjs7QUFDQSxVQUFHUSxnQkFBZ0IsQ0FBQ0gsUUFBakIsQ0FBMEJOLGFBQTFCLENBQUgsRUFBNEM7QUFDeENELG1CQUFXLEdBQUcsQ0FBQyxHQUFHQSxXQUFKLEVBQWlCO0FBQUUsV0FBQ1MsT0FBRCxHQUFXO0FBQWIsU0FBakIsQ0FBZDtBQUNIO0FBQ0osS0FMRDtBQU9BVCxlQUFXLENBQUNXLElBQVosQ0FBaUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDdkIsVUFBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILENBQVosSUFBaUJFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixDQUFaLENBQXBCLEVBQW1DO0FBQy9CLGVBQU8sQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSixLQU5EO0FBUUEsV0FBT2IsV0FBVyxDQUFDZ0IsR0FBWixDQUFnQixDQUFDQyxJQUFELEVBQU9DLENBQVAsS0FBYTtBQUFJLGVBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsSUFBdEI7QUFBNEIsU0FBRyxFQUFFRixDQUFqQztBQUFvQyxhQUFPLEVBQUUsTUFBTXBCLFlBQVksQ0FBQ21CLElBQUQsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF3RUgsTUFBTSxDQUFDQyxJQUFQLENBQVlFLElBQVosQ0FBeEUsQ0FBN0IsQ0FBUDtBQUNILEdBM0JEOztBQTZCQSxRQUFNSSxNQUFNLEdBQUd4QixJQUFJLEdBQUdFLGlCQUFpQixFQUFwQixHQUF5QixJQUE1QztBQUVBLFNBQ0k7QUFBSSxhQUFTLEVBQUVvQixnRUFBTSxDQUFDRyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tELE1BREwsQ0FESjtBQUtILENBckNEOztBQXVDZXpCLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBva2Vtb25zIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL1Bva2Vtb25zJ1xuaW1wb3J0IEJlcnJpZXMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvQmVycmllcydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N1Z2dlc3Rpb25Cb3gubW9kdWxlLmNzcydcblxuY29uc3QgU3VnZ2VzdGlvbkJveCA9ICh7dGV4dCwgYXV0b0NvbXBsZXRlfSkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VnZ2VzdGlvbnMgPSBbXVxuICAgICAgICBsZXQgbG93ZXJDYXNlVGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgIEJlcnJpZXMuZm9yRWFjaChiZXJyeSA9PiB7XG4gICAgICAgICAgICBsZXQgbG93ZXJDYXNlQmVycnkgPSBiZXJyeS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICBpZihsb3dlckNhc2VCZXJyeS5pbmNsdWRlcyhsb3dlckNhc2VUZXh0KSl7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMgPSBbLi4uc3VnZ2VzdGlvbnMsIHsgW2JlcnJ5XTogJ2JlcnJ5JyB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFBva2Vtb25zLmZvckVhY2gocG9rZW1vbiA9PiB7XG4gICAgICAgICAgICBsZXQgbG93ZXJDYXNlUG9rZW1vbiA9IHBva2Vtb24udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgaWYobG93ZXJDYXNlUG9rZW1vbi5pbmNsdWRlcyhsb3dlckNhc2VUZXh0KSl7XG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnMgPSBbLi4uc3VnZ2VzdGlvbnMsIHsgW3Bva2Vtb25dOiAncG9rZWRleCcgfV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzdWdnZXN0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyhhKSA+IE9iamVjdC5rZXlzKGIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbnMubWFwKChkYXRhLCBpKSA9PiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiBhdXRvQ29tcGxldGUoZGF0YSl9PntPYmplY3Qua2V5cyhkYXRhKX08L2xpPilcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXIgPSB0ZXh0ID8gcmVuZGVyU3VnZ2VzdGlvbnMoKSA6IG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICAgIHtyZW5kZXJ9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uQm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/index.module.css":
/*!***************************************************!*\
  !*** ./src/components/SearchBar/index.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"SearchBar_form__3VAaj\",\n\t\"input\": \"SearchBar_input__3IyX8\",\n\t\"container\": \"SearchBar_container__1fp81\",\n\t\"icon\": \"SearchBar_icon__3vi9m\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgubW9kdWxlLmNzcz8wMzQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiU2VhcmNoQmFyX2Zvcm1fXzNWQWFqXCIsXG5cdFwiaW5wdXRcIjogXCJTZWFyY2hCYXJfaW5wdXRfXzNJeVg4XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiU2VhcmNoQmFyX2NvbnRhaW5lcl9fMWZwODFcIixcblx0XCJpY29uXCI6IFwiU2VhcmNoQmFyX2ljb25fXzN2aTltXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SearchBar/index.module.css\n");

/***/ }),

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBox */ \"./src/components/SearchBar/SuggestionBox.tsx\");\n/* harmony import */ var _assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/icons/Search.svg */ \"./src/assets/img/icons/Search.svg\");\n/* harmony import */ var _assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./src/components/SearchBar/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst SearchBar = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const autoComplete = data => {\n    const a = Object.values(data);\n    const b = Object.keys(data);\n    const route = `/${a}/${b}`;\n    router.push(route);\n  };\n\n  return __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,\n    onChange: e => setText(e.target.value),\n    value: text,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }), __jsx(\"img\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon,\n    src: _assets_img_icons_Search_svg__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"Search Icon\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  })), __jsx(_SuggestionBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: text,\n    autoComplete: autoComplete,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4P2VkMGIiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImF1dG9Db21wbGV0ZSIsImRhdGEiLCJhIiwiT2JqZWN0IiwidmFsdWVzIiwiYiIsImtleXMiLCJyb3V0ZSIsInB1c2giLCJzdHlsZXMiLCJmb3JtIiwiY29udGFpbmVyIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpY29uIiwiU2VhcmNoSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7O0FBR0EsUUFBTUMsWUFBWSxHQUFJQyxJQUFELElBQVU7QUFDM0IsVUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsSUFBZCxDQUFWO0FBQ0EsVUFBTUksQ0FBQyxHQUFHRixNQUFNLENBQUNHLElBQVAsQ0FBWUwsSUFBWixDQUFWO0FBQ0EsVUFBTU0sS0FBSyxHQUFJLElBQUdMLENBQUUsSUFBR0csQ0FBRSxFQUF6QjtBQUVBVixVQUFNLENBQUNhLElBQVAsQ0FBWUQsS0FBWjtBQUNILEdBTkQ7O0FBUUEsU0FDSTtBQUFLLGFBQVMsRUFBRUUsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFRCx3REFBTSxDQUFDRSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUVGLHdEQUFNLENBQUNHLEtBQXpCO0FBQWdDLFlBQVEsRUFBR0MsQ0FBRCxJQUFPZixPQUFPLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXhEO0FBQTBFLFNBQUssRUFBRWxCLElBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFFWSx3REFBTSxDQUFDTyxJQUF2QjtBQUE2QixPQUFHLEVBQUVDLG1FQUFsQztBQUE4QyxPQUFHLEVBQUMsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSSxNQUFDLHNEQUFEO0FBQWUsUUFBSSxFQUFFcEIsSUFBckI7QUFBMkIsZ0JBQVksRUFBRUcsWUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREo7QUFTSCxDQXRCRDs7QUF3QmVOLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgU3VnZ2VzdGlvbkJveCBmcm9tICcuL1N1Z2dlc3Rpb25Cb3gnXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2ljb25zL1NlYXJjaC5zdmcnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJylcbiAgICBcblxuICAgIGNvbnN0IGF1dG9Db21wbGV0ZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBPYmplY3QudmFsdWVzKGRhdGEpXG4gICAgICAgIGNvbnN0IGIgPSBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICBjb25zdCByb3V0ZSA9IGAvJHthfS8ke2J9YFxuXG4gICAgICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICAgIH1cblxuICAgIHJldHVybiAgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3RleHR9Lz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz17U2VhcmNoSWNvbn0gYWx0PVwiU2VhcmNoIEljb25cIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTdWdnZXN0aW9uQm94IHRleHQ9e3RleHR9IGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchBar/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SearchBar */ \"./src/components/SearchBar/index.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Homepage = () => {\n  return __jsx(\"div\", {\n    className: \"home background\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }), __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZXBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNuQixTQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcidcblxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZSBiYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

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