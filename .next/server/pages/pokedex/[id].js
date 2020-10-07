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

/***/ "./src/components/Pokemon/Evolution/Description.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Pokemon/Evolution/Description.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution/Description.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Description = ({\n  evoChain,\n  multi,\n  child\n}) => {\n  if (multi) {\n    let paragraph = `<span class=\"capitalize\"><a href=\"${child}\">${child}</a></span> evolves to `;\n    console.log(evoChain);\n\n    for (let i = 0; i < evoChain.length; i++) {\n      let pokemon = evoChain[i];\n      paragraph += `<span class=\"capitalize\"><a href=\"${pokemon}\">${pokemon}</a></span>`;\n\n      if (i === evoChain.length - 1) {\n        paragraph += '.';\n      } else {\n        paragraph += ' / ';\n      }\n    }\n\n    return __jsx(\"p\", {\n      dangerouslySetInnerHTML: {\n        __html: paragraph\n      },\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9EZXNjcmlwdGlvbi50c3g/ZjliMyJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsImV2b0NoYWluIiwibXVsdGkiLCJjaGlsZCIsInBhcmFncmFwaCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwicG9rZW1vbiIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDO0FBQUNDLFVBQUQ7QUFBV0MsT0FBWDtBQUFrQkM7QUFBbEIsQ0FBRCxLQUE4QjtBQUM5QyxNQUFHRCxLQUFILEVBQVM7QUFDTCxRQUFJRSxTQUFTLEdBQUkscUNBQW9DRCxLQUFNLEtBQUlBLEtBQU0seUJBQXJFO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaOztBQUNBLFNBQUksSUFBSU0sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHTixRQUFRLENBQUNPLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXdDO0FBQ3BDLFVBQUlFLE9BQU8sR0FBR1IsUUFBUSxDQUFDTSxDQUFELENBQXRCO0FBQ0FILGVBQVMsSUFBSyxxQ0FBb0NLLE9BQVEsS0FBSUEsT0FBUSxhQUF0RTs7QUFFQSxVQUFHRixDQUFDLEtBQUtOLFFBQVEsQ0FBQ08sTUFBVCxHQUFrQixDQUEzQixFQUE2QjtBQUN6QkosaUJBQVMsSUFBSSxHQUFiO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLGlCQUFTLElBQUksS0FBYjtBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUFHLDZCQUF1QixFQUFFO0FBQUVNLGNBQU0sRUFBRU47QUFBVixPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDSDtBQUNKLENBakJEOztBQW1CZUosMEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9EZXNjcmlwdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRGVzY3JpcHRpb24ubW9kdWxlLmNzcydcblxuY29uc3QgRGVzY3JpcHRpb24gPSAoe2V2b0NoYWluLCBtdWx0aSwgY2hpbGR9KSA9PiB7XG4gICAgaWYobXVsdGkpe1xuICAgICAgICBsZXQgcGFyYWdyYXBoID0gYDxzcGFuIGNsYXNzPVwiY2FwaXRhbGl6ZVwiPjxhIGhyZWY9XCIke2NoaWxkfVwiPiR7Y2hpbGR9PC9hPjwvc3Bhbj4gZXZvbHZlcyB0byBgXG4gICAgICAgIGNvbnNvbGUubG9nKGV2b0NoYWluKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXZvQ2hhaW4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHBva2Vtb24gPSBldm9DaGFpbltpXVxuICAgICAgICAgICAgcGFyYWdyYXBoICs9IGA8c3BhbiBjbGFzcz1cImNhcGl0YWxpemVcIj48YSBocmVmPVwiJHtwb2tlbW9ufVwiPiR7cG9rZW1vbn08L2E+PC9zcGFuPmBcblxuICAgICAgICAgICAgaWYoaSA9PT0gZXZvQ2hhaW4ubGVuZ3RoIC0gMSl7XG4gICAgICAgICAgICAgICAgcGFyYWdyYXBoICs9ICcuJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGggKz0gJyAvICdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8cCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBhcmFncmFwaCB9fT48L3A+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution/Description.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Evolution/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Pokemon/Evolution/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Description */ \"./src/components/Pokemon/Evolution/Description.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Evolution = ({\n  evolution_chain,\n  pokemon_name\n}) => {\n  const {\n    0: evolution,\n    1: setEvolution\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(res => {\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    let evoChain = [];\n    let evoData = evolution.chain;\n\n    if (evoData.evolves_to.length > 1) {\n      evoData.evolves_to.forEach(evoData => {\n        evoChain = [...evoChain, evoData.species.name];\n      });\n      return __jsx(_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        evoChain: evoChain,\n        child: evoData.species.name,\n        multi: true,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 20\n        }\n      });\n    } else {\n      do {\n        evoChain.push({\n          \"species_name\": evoData.species.name\n        });\n        evoData = evoData.evolves_to[0];\n      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));\n\n      return __jsx(_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        evoChain: evoChain,\n        multi: false,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 20\n        }\n      });\n    }\n  } else {\n    return null;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9pbmRleC50c3g/NjMxMCJdLCJuYW1lcyI6WyJFdm9sdXRpb24iLCJldm9sdXRpb25fY2hhaW4iLCJwb2tlbW9uX25hbWUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJldm9DaGFpbiIsImV2b0RhdGEiLCJjaGFpbiIsImV2b2x2ZXNfdG8iLCJsZW5ndGgiLCJmb3JFYWNoIiwic3BlY2llcyIsIm5hbWUiLCJwdXNoIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUNDLGlCQUFEO0FBQWtCQztBQUFsQixDQUFELEtBQXFDO0FBQ25ELFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLENBQVVQLGVBQWUsQ0FBQ1EsR0FBMUIsRUFDS0MsSUFETCxDQUNVQyxHQUFHLElBQUk7QUFDVFAsa0JBQVksQ0FBQ08sR0FBRyxDQUFDQyxJQUFMLENBQVo7QUFDSCxLQUhMO0FBSUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxNQUFHVCxTQUFILEVBQWM7QUFFVixRQUFJVSxRQUFRLEdBQUcsRUFBZjtBQUNBLFFBQUlDLE9BQU8sR0FBR1gsU0FBUyxDQUFDWSxLQUF4Qjs7QUFFQSxRQUFHRCxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLE1BQW5CLEdBQTRCLENBQS9CLEVBQWtDO0FBQzlCSCxhQUFPLENBQUNFLFVBQVIsQ0FBbUJFLE9BQW5CLENBQTRCSixPQUFELElBQWE7QUFDcENELGdCQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFKLEVBQWNDLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsSUFBOUIsQ0FBWDtBQUNILE9BRkQ7QUFJQSxhQUFPLE1BQUMsb0RBQUQ7QUFBYSxnQkFBUSxFQUFFUCxRQUF2QjtBQUFpQyxhQUFLLEVBQUVDLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkMsSUFBeEQ7QUFBOEQsYUFBSyxNQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFFSCxLQVBELE1BT087QUFFSCxTQUFHO0FBQ0NQLGdCQUFRLENBQUNRLElBQVQsQ0FBYztBQUNWLDBCQUFnQlAsT0FBTyxDQUFDSyxPQUFSLENBQWdCQztBQUR0QixTQUFkO0FBSUFOLGVBQU8sR0FBR0EsT0FBTyxDQUFDRSxVQUFSLENBQW1CLENBQW5CLENBQVY7QUFFSCxPQVBELFFBT1MsQ0FBQyxDQUFDRixPQUFGLElBQWFBLE9BQU8sQ0FBQ1EsY0FBUixDQUF1QixZQUF2QixDQVB0Qjs7QUFTQSxhQUFPLE1BQUMsb0RBQUQ7QUFBYSxnQkFBUSxFQUFFVCxRQUF2QjtBQUFpQyxhQUFLLEVBQUUsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0g7QUFDSixHQXpCRCxNQXlCTztBQUNILFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0F0Q0Q7O0FBd0NlYix3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Bva2Vtb24vRXZvbHV0aW9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJ1xuXG5jb25zdCBFdm9sdXRpb24gPSAoe2V2b2x1dGlvbl9jaGFpbiwgcG9rZW1vbl9uYW1lfSkgPT4ge1xuICAgIGNvbnN0IFtldm9sdXRpb24sIHNldEV2b2x1dGlvbl0gPSB1c2VTdGF0ZShudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KGV2b2x1dGlvbl9jaGFpbi51cmwpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldEV2b2x1dGlvbihyZXMuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBpZihldm9sdXRpb24pIHtcblxuICAgICAgICBsZXQgZXZvQ2hhaW4gPSBbXVxuICAgICAgICBsZXQgZXZvRGF0YSA9IGV2b2x1dGlvbi5jaGFpblxuXG4gICAgICAgIGlmKGV2b0RhdGEuZXZvbHZlc190by5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBldm9EYXRhLmV2b2x2ZXNfdG8uZm9yRWFjaCgoZXZvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGV2b0NoYWluID0gWy4uLmV2b0NoYWluLCBldm9EYXRhLnNwZWNpZXMubmFtZV1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiA8RGVzY3JpcHRpb24gZXZvQ2hhaW49e2V2b0NoYWlufSBjaGlsZD17ZXZvRGF0YS5zcGVjaWVzLm5hbWV9IG11bHRpLz5cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgZXZvQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIFwic3BlY2llc19uYW1lXCI6IGV2b0RhdGEuc3BlY2llcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGV2b0RhdGEgPSBldm9EYXRhLmV2b2x2ZXNfdG9bMF1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gd2hpbGUgKCEhZXZvRGF0YSAmJiBldm9EYXRhLmhhc093blByb3BlcnR5KCdldm9sdmVzX3RvJykpXG5cbiAgICAgICAgICAgIHJldHVybiA8RGVzY3JpcHRpb24gZXZvQ2hhaW49e2V2b0NoYWlufSBtdWx0aT17ZmFsc2V9Lz5cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution/index.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Held.tsx":
/*!*****************************************!*\
  !*** ./src/components/Pokemon/Held.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Held.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Held = ({\n  held_items\n}) => {\n  const HeldItems = held_items.map(({\n    item\n  }, i) => {\n    return __jsx(\"div\", {\n      key: i,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 13\n      }\n    }, item.name);\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Holds:\", HeldItems);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Held);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0hlbGQudHN4PzE1MDUiXSwibmFtZXMiOlsiSGVsZCIsImhlbGRfaXRlbXMiLCJIZWxkSXRlbXMiLCJtYXAiLCJpdGVtIiwiaSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWtCO0FBQzNCLFFBQU1DLFNBQVMsR0FBR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUsQ0FBQztBQUFDQztBQUFELEdBQUQsRUFBU0MsQ0FBVCxLQUFlO0FBQzVDLFdBQ0k7QUFBSyxTQUFHLEVBQUVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxJQUFJLENBQUNFLElBRFYsQ0FESjtBQUtILEdBTmlCLENBQWxCO0FBUUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRUtKLFNBRkwsQ0FESjtBQU9ILENBaEJEOztBQWtCZUYsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0hlbGQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIZWxkID0gKHtoZWxkX2l0ZW1zfSkgPT4ge1xuICAgIGNvbnN0IEhlbGRJdGVtcyA9IGhlbGRfaXRlbXMubWFwKCh7aXRlbX0sIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEhvbGRzOlxuICAgICAgICAgICAge0hlbGRJdGVtc31cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Held.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Sprites.tsx":
/*!********************************************!*\
  !*** ./src/components/Pokemon/Sprites.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Sprites.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Sprites = ({\n  sprites\n}) => {\n  const spriteUrl = sprites.front_default;\n  return __jsx(\"img\", {\n    src: spriteUrl,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 12\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprites);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL1Nwcml0ZXMudHN4PzkyYzUiXSwibmFtZXMiOlsiU3ByaXRlcyIsInNwcml0ZXMiLCJzcHJpdGVVcmwiLCJmcm9udF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQzdCLFFBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDRSxhQUExQjtBQUVBLFNBQU87QUFBSyxPQUFHLEVBQUVELFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0gsQ0FKRDs7QUFNZUYsc0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL1Nwcml0ZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3ByaXRlcyA9ICh7IHNwcml0ZXMgfSkgPT4ge1xuICAgIGNvbnN0IHNwcml0ZVVybCA9IHNwcml0ZXMuZnJvbnRfZGVmYXVsdFxuXG4gICAgcmV0dXJuIDxpbWcgc3JjPXtzcHJpdGVVcmx9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Sprites.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Pokemon/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Evolution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evolution */ \"./src/components/Pokemon/Evolution/index.tsx\");\n/* harmony import */ var _Held__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Held */ \"./src/components/Pokemon/Held.tsx\");\n/* harmony import */ var _Sprites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprites */ \"./src/components/Pokemon/Sprites.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Pokemon = ({\n  pokemon\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(_Sprites__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sprites: pokemon.sprites,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, pokemon.name)), __jsx(_Evolution__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    pokemon_name: pokemon.name,\n    evolution_chain: pokemon.species.evolution_chain,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }), __jsx(_Held__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    held_items: pokemon.held_items,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL2luZGV4LnRzeD8zYmJiIl0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwic3ByaXRlcyIsIm5hbWUiLCJzcGVjaWVzIiwiZXZvbHV0aW9uX2NoYWluIiwiaGVsZF9pdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUI7QUFDN0IsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBUyxXQUFPLEVBQUVBLE9BQU8sQ0FBQ0MsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxPQUFPLENBQUNFLElBRGIsQ0FGSixDQURKLEVBUUksTUFBQyxrREFBRDtBQUFXLGdCQUFZLEVBQUVGLE9BQU8sQ0FBQ0UsSUFBakM7QUFBdUMsbUJBQWUsRUFBRUYsT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxlQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSSxNQUFDLDZDQUFEO0FBQU0sY0FBVSxFQUFFSixPQUFPLENBQUNLLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKO0FBYUgsQ0FkRDs7QUFnQmVOLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBFdm9sdXRpb24gZnJvbSAnLi9Fdm9sdXRpb24nXG5pbXBvcnQgSGVsZCBmcm9tICcuL0hlbGQnXG5pbXBvcnQgU3ByaXRlcyBmcm9tICcuL1Nwcml0ZXMnXG5cbmNvbnN0IFBva2Vtb24gPSAoeyBwb2tlbW9uIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3ByaXRlcyBzcHJpdGVzPXtwb2tlbW9uLnNwcml0ZXN9Lz4gXG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEV2b2x1dGlvbiBwb2tlbW9uX25hbWU9e3Bva2Vtb24ubmFtZX0gZXZvbHV0aW9uX2NoYWluPXtwb2tlbW9uLnNwZWNpZXMuZXZvbHV0aW9uX2NoYWlufS8+XG4gICAgICAgICAgICA8SGVsZCBoZWxkX2l0ZW1zPXtwb2tlbW9uLmhlbGRfaXRlbXN9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/index.tsx\n");

/***/ }),

/***/ "./src/pages/pokedex/[id].tsx":
/*!************************************!*\
  !*** ./src/pages/pokedex/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pokemon */ \"./src/components/Pokemon/index.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/pokedex/[id].tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst Pokedex = () => {\n  const {\n    0: pokemon,\n    1: setPokemon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const name = router.query.id;\n\n    if (name) {\n      let pokemonData;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {\n        pokemonData = res.data;\n        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(res.data.species.url);\n      }).then(res => {\n        pokemonData = _objectSpread(_objectSpread({}, pokemonData), {}, {\n          species: res.data\n        });\n        setPokemon(pokemonData);\n        setLoading(false);\n      });\n    }\n  }, [router]);\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 16\n      }\n    }, \"Loading...\");\n  } else {\n    return __jsx(_components_Pokemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      pokemon: pokemon,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokedex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9rZWRleC8udHN4PzdhODMiXSwibmFtZXMiOlsiUG9rZWRleCIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJxdWVyeSIsImlkIiwicG9rZW1vbkRhdGEiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3BlY2llcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBRUEsUUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUExQjs7QUFDQSxRQUFHRixJQUFILEVBQVE7QUFDSixVQUFJRyxXQUFKO0FBRUFDLGtEQUFLLENBQUNDLEdBQU4sQ0FBVyxxQ0FBb0NMLElBQUssRUFBcEQsRUFDS00sSUFETCxDQUNVQyxHQUFHLElBQUk7QUFDVEosbUJBQVcsR0FBR0ksR0FBRyxDQUFDQyxJQUFsQjtBQUNBLGVBQU9KLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUUsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE9BQVQsQ0FBaUJDLEdBQTNCLENBQVA7QUFDSCxPQUpMLEVBS0tKLElBTEwsQ0FLVUMsR0FBRyxJQUFJO0FBQ1RKLG1CQUFXLG1DQUFPQSxXQUFQO0FBQW9CTSxpQkFBTyxFQUFFRixHQUFHLENBQUNDO0FBQWpDLFVBQVg7QUFFQWYsa0JBQVUsQ0FBQ1UsV0FBRCxDQUFWO0FBQ0FQLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsT0FWTDtBQVdIO0FBQ0osR0FqQlEsRUFpQk4sQ0FBQ0MsTUFBRCxDQWpCTSxDQUFUOztBQW1CQSxNQUFHRixPQUFILEVBQVk7QUFDUixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxXQUFPLE1BQUMsMkRBQUQ7QUFBUyxhQUFPLEVBQUVILE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNIO0FBQ0osQ0E5QkQ7O0FBZ0NlRCxzRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb2tlZGV4L1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgUG9rZW1vbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bva2Vtb24nXG5cbmNvbnN0IFBva2VkZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bva2Vtb24sIHNldFBva2Vtb25dID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSByb3V0ZXIucXVlcnkuaWRcbiAgICAgICAgaWYobmFtZSl7XG4gICAgICAgICAgICBsZXQgcG9rZW1vbkRhdGFcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtuYW1lfWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9rZW1vbkRhdGEgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KHJlcy5kYXRhLnNwZWNpZXMudXJsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcG9rZW1vbkRhdGEgPSB7Li4ucG9rZW1vbkRhdGEsIHNwZWNpZXM6IHJlcy5kYXRhIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXRQb2tlbW9uKHBva2Vtb25EYXRhKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSlcblxuICAgIGlmKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFBva2Vtb24gcG9rZW1vbj17cG9rZW1vbn0vPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZWRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[id].tsx\n");

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