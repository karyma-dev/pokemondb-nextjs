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
eval("__webpack_require__.r(__webpack_exports__);\nconst pokemons = ['pikachu', 'eevee', 'bulbasaur'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (pokemons);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RhdGEvUG9rZW1vbnMudHN4P2JiNGQiXSwibmFtZXMiOlsicG9rZW1vbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFHLENBQ2IsU0FEYSxFQUViLE9BRmEsRUFHYixXQUhhLENBQWpCO0FBTWVBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9kYXRhL1Bva2Vtb25zLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBva2Vtb25zID0gW1xuICAgICdwaWthY2h1JyxcbiAgICAnZWV2ZWUnLFxuICAgICdidWxiYXNhdXInXG5dXG5cbmV4cG9ydCBkZWZhdWx0IHBva2Vtb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/data/Pokemons.tsx\n");

/***/ }),

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/data/Pokemons */ \"./src/assets/data/Pokemons.tsx\");\n/* harmony import */ var _assets_data_Berries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/data/Berries */ \"./src/assets/data/Berries.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/SuggestionBox.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst SuggestionBox = ({\n  text,\n  autoComplete\n}) => {\n  const renderSuggestions = () => {\n    let suggestions = [];\n    _assets_data_Pokemons__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(pokemon => {\n      if (pokemon.includes(text.toLowerCase())) {\n        suggestions = [...suggestions, {\n          [pokemon]: 'pokedex'\n        }];\n      }\n    });\n    _assets_data_Berries__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach(berry => {\n      if (berry.includes(text.toLowerCase())) {\n        suggestions = [...suggestions, {\n          [berry]: 'berries'\n        }];\n      }\n    });\n\n    function sortByKey(array, key) {\n      return array.sort((a, b) => {\n        let x = a[key];\n        let y = b[key];\n        return x < y ? -1 : x > y ? 1 : 0;\n      });\n    }\n\n    suggestions.sort((a, b) => {\n      if (Object.keys(a) > Object.keys(b)) {\n        return 1;\n      } else {\n        return -1;\n      }\n    });\n    return suggestions.map((data, i) => __jsx(\"li\", {\n      key: i,\n      onClick: () => autoComplete(data),\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 45\n      }\n    }, Object.keys(data)));\n  };\n\n  const render = text ? renderSuggestions() : null;\n  return __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, render);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestionBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU3VnZ2VzdGlvbkJveC50c3g/ODU1YiJdLCJuYW1lcyI6WyJTdWdnZXN0aW9uQm94IiwidGV4dCIsImF1dG9Db21wbGV0ZSIsInJlbmRlclN1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnMiLCJQb2tlbW9ucyIsImZvckVhY2giLCJwb2tlbW9uIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsIkJlcnJpZXMiLCJiZXJyeSIsInNvcnRCeUtleSIsImFycmF5Iiwia2V5Iiwic29ydCIsImEiLCJiIiwieCIsInkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZGF0YSIsImkiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFDQyxNQUFEO0FBQU9DO0FBQVAsQ0FBRCxLQUEwQjtBQUM1QyxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUVBQyxpRUFBUSxDQUFDQyxPQUFULENBQWlCQyxPQUFPLElBQUk7QUFDeEIsVUFBR0EsT0FBTyxDQUFDQyxRQUFSLENBQWlCUCxJQUFJLENBQUNRLFdBQUwsRUFBakIsQ0FBSCxFQUF3QztBQUNwQ0wsbUJBQVcsR0FBRyxDQUFDLEdBQUdBLFdBQUosRUFBaUI7QUFBRSxXQUFDRyxPQUFELEdBQVc7QUFBYixTQUFqQixDQUFkO0FBQ0g7QUFDSixLQUpEO0FBTUFHLGdFQUFPLENBQUNKLE9BQVIsQ0FBZ0JLLEtBQUssSUFBSTtBQUNyQixVQUFHQSxLQUFLLENBQUNILFFBQU4sQ0FBZVAsSUFBSSxDQUFDUSxXQUFMLEVBQWYsQ0FBSCxFQUFzQztBQUNsQ0wsbUJBQVcsR0FBRyxDQUFDLEdBQUdBLFdBQUosRUFBaUI7QUFBRSxXQUFDTyxLQUFELEdBQVM7QUFBWCxTQUFqQixDQUFkO0FBQ0g7QUFDSixLQUpEOztBQU1BLGFBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxHQUExQixFQUErQjtBQUMzQixhQUFPRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUMxQixZQUFJQyxDQUFDLEdBQUdGLENBQUMsQ0FBQ0YsR0FBRCxDQUFUO0FBQ0EsWUFBSUssQ0FBQyxHQUFHRixDQUFDLENBQUNILEdBQUQsQ0FBVDtBQUVBLGVBQVNJLENBQUMsR0FBR0MsQ0FBTCxHQUFVLENBQUMsQ0FBWCxHQUFpQkQsQ0FBQyxHQUFHQyxDQUFMLEdBQVUsQ0FBVixHQUFjLENBQXRDO0FBQ0QsT0FMTSxDQUFQO0FBTUg7O0FBRURmLGVBQVcsQ0FBQ1csSUFBWixDQUFpQixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUN2QixVQUFHRyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsQ0FBWixJQUFpQkksTUFBTSxDQUFDQyxJQUFQLENBQVlKLENBQVosQ0FBcEIsRUFBbUM7QUFDL0IsZUFBTyxDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxDQUFDLENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFRQSxXQUFPYixXQUFXLENBQUNrQixHQUFaLENBQWdCLENBQUNDLElBQUQsRUFBT0MsQ0FBUCxLQUFhO0FBQUksU0FBRyxFQUFFQSxDQUFUO0FBQVksYUFBTyxFQUFFLE1BQU10QixZQUFZLENBQUNxQixJQUFELENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0RILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRSxJQUFaLENBQWhELENBQTdCLENBQVA7QUFDSCxHQWpDRDs7QUFtQ0EsUUFBTUUsTUFBTSxHQUFHeEIsSUFBSSxHQUFHRSxpQkFBaUIsRUFBcEIsR0FBeUIsSUFBNUM7QUFFQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3NCLE1BREwsQ0FESjtBQUtILENBM0NEOztBQTZDZXpCLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1N1Z2dlc3Rpb25Cb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBva2Vtb25zIGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhL1Bva2Vtb25zJ1xuaW1wb3J0IEJlcnJpZXMgZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEvQmVycmllcydcblxuY29uc3QgU3VnZ2VzdGlvbkJveCA9ICh7dGV4dCwgYXV0b0NvbXBsZXRlfSkgPT4ge1xuICAgIGNvbnN0IHJlbmRlclN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VnZ2VzdGlvbnMgPSBbXVxuXG4gICAgICAgIFBva2Vtb25zLmZvckVhY2gocG9rZW1vbiA9PiB7XG4gICAgICAgICAgICBpZihwb2tlbW9uLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSkpe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zID0gWy4uLnN1Z2dlc3Rpb25zLCB7IFtwb2tlbW9uXTogJ3Bva2VkZXgnIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgQmVycmllcy5mb3JFYWNoKGJlcnJ5ID0+IHtcbiAgICAgICAgICAgIGlmKGJlcnJ5LmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSkpe1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zID0gWy4uLnN1Z2dlc3Rpb25zLCB7IFtiZXJyeV06ICdiZXJyaWVzJyB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGZ1bmN0aW9uIHNvcnRCeUtleShhcnJheSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICBsZXQgeCA9IGFba2V5XTtcbiAgICAgICAgICAgICAgbGV0IHkgPSBiW2tleV07XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VnZ2VzdGlvbnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMoYSkgPiBPYmplY3Qua2V5cyhiKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25zLm1hcCgoZGF0YSwgaSkgPT4gPGxpIGtleT17aX0gb25DbGljaz17KCkgPT4gYXV0b0NvbXBsZXRlKGRhdGEpfT57T2JqZWN0LmtleXMoZGF0YSl9PC9saT4pXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gdGV4dCA/IHJlbmRlclN1Z2dlc3Rpb25zKCkgOiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cmVuZGVyfVxuICAgICAgICA8L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbkJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchBar/SuggestionBox.tsx\n");

/***/ }),

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SuggestionBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuggestionBox */ \"./src/components/SearchBar/SuggestionBox.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/SearchBar/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst SearchBar = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: text,\n    1: setText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const autoComplete = data => {\n    const a = Object.values(data);\n    const b = Object.keys(data);\n    const route = `/${a}/${b}`;\n    router.push(route);\n  };\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    onChange: e => setText(e.target.value),\n    value: text,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), __jsx(_SuggestionBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: text,\n    autoComplete: autoComplete,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4P2VkMGIiXSwibmFtZXMiOlsiU2VhcmNoQmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidGV4dCIsInNldFRleHQiLCJ1c2VTdGF0ZSIsImF1dG9Db21wbGV0ZSIsImRhdGEiLCJhIiwiT2JqZWN0IiwidmFsdWVzIiwiYiIsImtleXMiLCJyb3V0ZSIsInB1c2giLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxNQUFNO0FBQ3BCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFHQSxRQUFNQyxZQUFZLEdBQUlDLElBQUQsSUFBVTtBQUMzQixVQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxJQUFkLENBQVY7QUFDQSxVQUFNSSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZTCxJQUFaLENBQVY7QUFDQSxVQUFNTSxLQUFLLEdBQUksSUFBR0wsQ0FBRSxJQUFHRyxDQUFFLEVBQXpCO0FBRUFWLFVBQU0sQ0FBQ2EsSUFBUCxDQUFZRCxLQUFaO0FBQ0gsR0FORDs7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLFlBQVEsRUFBR0UsQ0FBRCxJQUFPWCxPQUFPLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQS9CO0FBQWlELFNBQUssRUFBRWQsSUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxzREFBRDtBQUFlLFFBQUksRUFBRUEsSUFBckI7QUFBMkIsZ0JBQVksRUFBRUcsWUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSCxDQW5CRDs7QUFxQmVOLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgU3VnZ2VzdGlvbkJveCBmcm9tICcuL1N1Z2dlc3Rpb25Cb3gnXG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKVxuICAgIFxuXG4gICAgY29uc3QgYXV0b0NvbXBsZXRlID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgYSA9IE9iamVjdC52YWx1ZXMoZGF0YSlcbiAgICAgICAgY29uc3QgYiA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgIGNvbnN0IHJvdXRlID0gYC8ke2F9LyR7Yn1gXG5cbiAgICAgICAgcm91dGVyLnB1c2gocm91dGUpXG4gICAgfVxuXG4gICAgcmV0dXJuICAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3RleHR9Lz5cbiAgICAgICAgICAgIDxTdWdnZXN0aW9uQm94IHRleHQ9e3RleHR9IGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SearchBar/index.tsx\n");

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