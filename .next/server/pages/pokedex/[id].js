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

/***/ "./src/components/Pokemon/Evolution/Description.module.css":
/*!*****************************************************************!*\
  !*** ./src/components/Pokemon/Evolution/Description.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cap\": \"Description_cap__3s8rl\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9EZXNjcmlwdGlvbi5tb2R1bGUuY3NzP2VkNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9EZXNjcmlwdGlvbi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FwXCI6IFwiRGVzY3JpcHRpb25fY2FwX18zczhybFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution/Description.module.css\n");

/***/ }),

/***/ "./src/components/Pokemon/Evolution/Description.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Pokemon/Evolution/Description.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Description_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description.module.css */ \"./src/components/Pokemon/Evolution/Description.module.css\");\n/* harmony import */ var _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Description_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution/Description.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Description = ({\n  evoChain,\n  multi\n}) => {\n  if (multi) {\n    let a = evoChain[0].species_name;\n    const filteredList = evoChain.filter(pokemon => {\n      if (pokemon.species_name === a) {\n        return false;\n      }\n\n      return true;\n    }).map(pokemon => {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"span\", {\n        className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cap,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }\n      }, a), \" evolves to \", __jsx(\"span\", {\n        className: _Description_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cap,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 72\n        }\n      }, pokemon.species_name), \".\", \"  \");\n    });\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, filteredList);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9EZXNjcmlwdGlvbi50c3g/ZjliMyJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsImV2b0NoYWluIiwibXVsdGkiLCJhIiwic3BlY2llc19uYW1lIiwiZmlsdGVyZWRMaXN0IiwiZmlsdGVyIiwicG9rZW1vbiIsIm1hcCIsInN0eWxlcyIsImNhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFDQyxVQUFEO0FBQVdDO0FBQVgsQ0FBRCxLQUF1QjtBQUV2QyxNQUFHQSxLQUFILEVBQVU7QUFDTixRQUFJQyxDQUFDLEdBQUdGLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUcsWUFBcEI7QUFFQSxVQUFNQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQkMsT0FBTyxJQUFJO0FBQzVDLFVBQUdBLE9BQU8sQ0FBQ0gsWUFBUixLQUF5QkQsQ0FBNUIsRUFBK0I7QUFDM0IsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsYUFBTyxJQUFQO0FBQ0gsS0FOb0IsRUFNbEJLLEdBTmtCLENBTWRELE9BQU8sSUFBSTtBQUNkLGFBQ0ksbUVBQ0k7QUFBTSxpQkFBUyxFQUFFRSw4REFBTSxDQUFDQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCUCxDQUE5QixDQURKLGtCQUN1RDtBQUFNLGlCQUFTLEVBQUVNLDhEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEJILE9BQU8sQ0FBQ0gsWUFBdEMsQ0FEdkQsT0FDbUgsSUFEbkgsQ0FESjtBQUtILEtBWm9CLENBQXJCO0FBY0EsV0FDSSxtRUFDS0MsWUFETCxDQURKO0FBS0g7QUFDSixDQXpCRDs7QUEyQmVMLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24vRGVzY3JpcHRpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Rlc2NyaXB0aW9uLm1vZHVsZS5jc3MnXG5cbmNvbnN0IERlc2NyaXB0aW9uID0gKHtldm9DaGFpbiwgbXVsdGl9KSA9PiB7XG5cbiAgICBpZihtdWx0aSkge1xuICAgICAgICBsZXQgYSA9IGV2b0NoYWluWzBdLnNwZWNpZXNfbmFtZVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGV2b0NoYWluLmZpbHRlcihwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIGlmKHBva2Vtb24uc3BlY2llc19uYW1lID09PSBhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0pLm1hcChwb2tlbW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FwfT57YX08L3NwYW4+IGV2b2x2ZXMgdG8gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FwfT57cG9rZW1vbi5zcGVjaWVzX25hbWV9PC9zcGFuPi57XCIgIFwifVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZExpc3R9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution/Description.tsx\n");

/***/ }),

/***/ "./src/components/Pokemon/Evolution/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Pokemon/Evolution/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Description */ \"./src/components/Pokemon/Evolution/Description.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/components/Pokemon/Evolution/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Evolution = ({\n  evolution_chain,\n  pokemon_name\n}) => {\n  const {\n    0: evolution,\n    1: setEvolution\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(evolution_chain.url).then(res => {\n      setEvolution(res.data);\n    });\n  }, []);\n\n  if (evolution) {\n    let evoChain = [];\n    let evoData = evolution.chain;\n\n    if (evoData.evolves_to.length > 1) {\n      evoChain = [...evoChain, {\n        \"species_name\": evoData.species.name,\n        \"min_level\": null,\n        \"min_happiness\": null,\n        \"trigger_name\": null,\n        \"item\": null\n      }];\n      evoData.evolves_to.forEach(evoData => {\n        let evoDetails = evoData.evolution_details[0];\n        evoChain = [...evoChain, {\n          \"species_name\": evoData.species.name,\n          \"min_level\": evoDetails ? evoDetails.min_level : null,\n          \"min_happiness\": evoDetails ? evoDetails.min_happiness : null,\n          \"trigger_name\": evoDetails ? evoDetails.trigger.name : null,\n          \"item\": evoDetails ? evoDetails.item : null\n        }];\n      });\n      return __jsx(_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        evoChain: evoChain,\n        multi: true,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 20\n        }\n      });\n    } else {\n      do {\n        let evoDetails = evoData.evolution_details[0];\n        evoChain.push({\n          \"species_name\": evoData.species.name,\n          \"min_level\": !evoDetails ? null : evoDetails.min_level,\n          \"min_happiness\": !evoDetails ? null : evoDetails.min_happiness,\n          \"trigger_name\": !evoDetails ? null : evoDetails.trigger.name,\n          \"item\": !evoDetails ? null : evoDetails.item\n        });\n        evoData = evoData.evolves_to[0];\n      } while (!!evoData && evoData.hasOwnProperty('evolves_to'));\n\n      return __jsx(_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        evoChain: evoChain,\n        multi: false,\n        __self: undefined,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 20\n        }\n      });\n    }\n  } else {\n    return null;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Evolution);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2tlbW9uL0V2b2x1dGlvbi9pbmRleC50c3g/NjMxMCJdLCJuYW1lcyI6WyJFdm9sdXRpb24iLCJldm9sdXRpb25fY2hhaW4iLCJwb2tlbW9uX25hbWUiLCJldm9sdXRpb24iLCJzZXRFdm9sdXRpb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidXJsIiwidGhlbiIsInJlcyIsImRhdGEiLCJldm9DaGFpbiIsImV2b0RhdGEiLCJjaGFpbiIsImV2b2x2ZXNfdG8iLCJsZW5ndGgiLCJzcGVjaWVzIiwibmFtZSIsImZvckVhY2giLCJldm9EZXRhaWxzIiwiZXZvbHV0aW9uX2RldGFpbHMiLCJtaW5fbGV2ZWwiLCJtaW5faGFwcGluZXNzIiwidHJpZ2dlciIsIml0ZW0iLCJwdXNoIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxDQUFDO0FBQUNDLGlCQUFEO0FBQWtCQztBQUFsQixDQUFELEtBQXFDO0FBQ25ELFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxnREFBSyxDQUFDQyxHQUFOLENBQVVQLGVBQWUsQ0FBQ1EsR0FBMUIsRUFDS0MsSUFETCxDQUNVQyxHQUFHLElBQUk7QUFDVFAsa0JBQVksQ0FBQ08sR0FBRyxDQUFDQyxJQUFMLENBQVo7QUFDSCxLQUhMO0FBSUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxNQUFHVCxTQUFILEVBQWM7QUFFVixRQUFJVSxRQUFRLEdBQUcsRUFBZjtBQUNBLFFBQUlDLE9BQU8sR0FBR1gsU0FBUyxDQUFDWSxLQUF4Qjs7QUFFQSxRQUFHRCxPQUFPLENBQUNFLFVBQVIsQ0FBbUJDLE1BQW5CLEdBQTRCLENBQS9CLEVBQWtDO0FBQzlCSixjQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFKLEVBQWM7QUFDckIsd0JBQWdCQyxPQUFPLENBQUNJLE9BQVIsQ0FBZ0JDLElBRFg7QUFFckIscUJBQWEsSUFGUTtBQUdyQix5QkFBaUIsSUFISTtBQUlyQix3QkFBZ0IsSUFKSztBQUtyQixnQkFBUTtBQUxhLE9BQWQsQ0FBWDtBQVFBTCxhQUFPLENBQUNFLFVBQVIsQ0FBbUJJLE9BQW5CLENBQTRCTixPQUFELElBQWE7QUFDcEMsWUFBSU8sVUFBVSxHQUFHUCxPQUFPLENBQUNRLGlCQUFSLENBQTBCLENBQTFCLENBQWpCO0FBQ0FULGdCQUFRLEdBQUcsQ0FBQyxHQUFHQSxRQUFKLEVBQWM7QUFDckIsMEJBQWdCQyxPQUFPLENBQUNJLE9BQVIsQ0FBZ0JDLElBRFg7QUFFckIsdUJBQWFFLFVBQVUsR0FBR0EsVUFBVSxDQUFDRSxTQUFkLEdBQTBCLElBRjVCO0FBR3JCLDJCQUFpQkYsVUFBVSxHQUFHQSxVQUFVLENBQUNHLGFBQWQsR0FBOEIsSUFIcEM7QUFJckIsMEJBQWdCSCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQk4sSUFBdEIsR0FBNkIsSUFKbEM7QUFLckIsa0JBQVFFLFVBQVUsR0FBR0EsVUFBVSxDQUFDSyxJQUFkLEdBQXFCO0FBTGxCLFNBQWQsQ0FBWDtBQU9ILE9BVEQ7QUFXQSxhQUFPLE1BQUMsb0RBQUQ7QUFBYSxnQkFBUSxFQUFFYixRQUF2QjtBQUFpQyxhQUFLLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUVILEtBdEJELE1Bc0JPO0FBRUgsU0FBRztBQUNDLFlBQUlRLFVBQVUsR0FBR1AsT0FBTyxDQUFDUSxpQkFBUixDQUEwQixDQUExQixDQUFqQjtBQUVBVCxnQkFBUSxDQUFDYyxJQUFULENBQWM7QUFDViwwQkFBZ0JiLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkMsSUFEdEI7QUFFVix1QkFBYSxDQUFDRSxVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDRSxTQUZuQztBQUdWLDJCQUFpQixDQUFDRixVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDRyxhQUh2QztBQUlWLDBCQUFnQixDQUFDSCxVQUFELEdBQWMsSUFBZCxHQUFxQkEsVUFBVSxDQUFDSSxPQUFYLENBQW1CTixJQUo5QztBQUtWLGtCQUFRLENBQUNFLFVBQUQsR0FBYyxJQUFkLEdBQXFCQSxVQUFVLENBQUNLO0FBTDlCLFNBQWQ7QUFRQVosZUFBTyxHQUFHQSxPQUFPLENBQUNFLFVBQVIsQ0FBbUIsQ0FBbkIsQ0FBVjtBQUVILE9BYkQsUUFhUyxDQUFDLENBQUNGLE9BQUYsSUFBYUEsT0FBTyxDQUFDYyxjQUFSLENBQXVCLFlBQXZCLENBYnRCOztBQWVBLGFBQU8sTUFBQyxvREFBRDtBQUFhLGdCQUFRLEVBQUVmLFFBQXZCO0FBQWlDLGFBQUssRUFBRSxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUFDSDtBQUNKLEdBOUNELE1BOENPO0FBQ0gsV0FBTyxJQUFQO0FBQ0g7QUFDSixDQTNERDs7QUE2RGViLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9rZW1vbi9Fdm9sdXRpb24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb24nXG5cbmNvbnN0IEV2b2x1dGlvbiA9ICh7ZXZvbHV0aW9uX2NoYWluLCBwb2tlbW9uX25hbWV9KSA9PiB7XG4gICAgY29uc3QgW2V2b2x1dGlvbiwgc2V0RXZvbHV0aW9uXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoZXZvbHV0aW9uX2NoYWluLnVybClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RXZvbHV0aW9uKHJlcy5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGlmKGV2b2x1dGlvbikge1xuXG4gICAgICAgIGxldCBldm9DaGFpbiA9IFtdXG4gICAgICAgIGxldCBldm9EYXRhID0gZXZvbHV0aW9uLmNoYWluXG5cbiAgICAgICAgaWYoZXZvRGF0YS5ldm9sdmVzX3RvLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGV2b0NoYWluID0gWy4uLmV2b0NoYWluLCB7XG4gICAgICAgICAgICAgICAgXCJzcGVjaWVzX25hbWVcIjogZXZvRGF0YS5zcGVjaWVzLm5hbWUsXG4gICAgICAgICAgICAgICAgXCJtaW5fbGV2ZWxcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm1pbl9oYXBwaW5lc3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInRyaWdnZXJfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiaXRlbVwiOiBudWxsXG4gICAgICAgICAgICB9XVxuXG4gICAgICAgICAgICBldm9EYXRhLmV2b2x2ZXNfdG8uZm9yRWFjaCgoZXZvRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldm9EZXRhaWxzID0gZXZvRGF0YS5ldm9sdXRpb25fZGV0YWlsc1swXVxuICAgICAgICAgICAgICAgIGV2b0NoYWluID0gWy4uLmV2b0NoYWluLCB7XG4gICAgICAgICAgICAgICAgICAgIFwic3BlY2llc19uYW1lXCI6IGV2b0RhdGEuc3BlY2llcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBcIm1pbl9sZXZlbFwiOiBldm9EZXRhaWxzID8gZXZvRGV0YWlscy5taW5fbGV2ZWwgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm1pbl9oYXBwaW5lc3NcIjogZXZvRGV0YWlscyA/IGV2b0RldGFpbHMubWluX2hhcHBpbmVzcyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwidHJpZ2dlcl9uYW1lXCI6IGV2b0RldGFpbHMgPyBldm9EZXRhaWxzLnRyaWdnZXIubmFtZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiaXRlbVwiOiBldm9EZXRhaWxzID8gZXZvRGV0YWlscy5pdGVtIDogbnVsbFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gPERlc2NyaXB0aW9uIGV2b0NoYWluPXtldm9DaGFpbn0gbXVsdGkvPlxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBsZXQgZXZvRGV0YWlscyA9IGV2b0RhdGEuZXZvbHV0aW9uX2RldGFpbHNbMF1cbiAgICBcbiAgICAgICAgICAgICAgICBldm9DaGFpbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcGVjaWVzX25hbWVcIjogZXZvRGF0YS5zcGVjaWVzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwibWluX2xldmVsXCI6ICFldm9EZXRhaWxzID8gbnVsbCA6IGV2b0RldGFpbHMubWluX2xldmVsLFxuICAgICAgICAgICAgICAgICAgICBcIm1pbl9oYXBwaW5lc3NcIjogIWV2b0RldGFpbHMgPyBudWxsIDogZXZvRGV0YWlscy5taW5faGFwcGluZXNzLFxuICAgICAgICAgICAgICAgICAgICBcInRyaWdnZXJfbmFtZVwiOiAhZXZvRGV0YWlscyA/IG51bGwgOiBldm9EZXRhaWxzLnRyaWdnZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtXCI6ICFldm9EZXRhaWxzID8gbnVsbCA6IGV2b0RldGFpbHMuaXRlbVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGV2b0RhdGEgPSBldm9EYXRhLmV2b2x2ZXNfdG9bMF1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gd2hpbGUgKCEhZXZvRGF0YSAmJiBldm9EYXRhLmhhc093blByb3BlcnR5KCdldm9sdmVzX3RvJykpXG5cbiAgICAgICAgICAgIHJldHVybiA8RGVzY3JpcHRpb24gZXZvQ2hhaW49e2V2b0NoYWlufSBtdWx0aT17ZmFsc2V9Lz5cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdm9sdXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pokemon/Evolution/index.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pokemon */ \"./src/components/Pokemon/index.tsx\");\nvar _jsxFileName = \"/Users/karyma/Desktop/Github/Pokemondb/src/pages/pokedex/[id].tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst Pokedex = () => {\n  const {\n    0: pokemon,\n    1: setPokemon\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const name = router.query.id;\n\n    if (name) {\n      let pokemonData;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {\n        pokemonData = res.data;\n        return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(res.data.species.url);\n      }).then(res => {\n        pokemonData = _objectSpread(_objectSpread({}, pokemonData), {}, {\n          species: res.data\n        });\n        setPokemon(pokemonData);\n        setLoading(false);\n      });\n    }\n  }, [router]);\n  console.log(pokemon);\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 16\n      }\n    }, \"Loading...\");\n  } else {\n    return __jsx(_components_Pokemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      pokemon: pokemon,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokedex);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9rZWRleC8udHN4PzdhODMiXSwibmFtZXMiOlsiUG9rZWRleCIsInBva2Vtb24iLCJzZXRQb2tlbW9uIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIm5hbWUiLCJxdWVyeSIsImlkIiwicG9rZW1vbkRhdGEiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3BlY2llcyIsInVybCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUVBLFFBQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUMsRUFBMUI7O0FBQ0EsUUFBR0YsSUFBSCxFQUFRO0FBQ0osVUFBSUcsV0FBSjtBQUVBQyxrREFBSyxDQUFDQyxHQUFOLENBQVcscUNBQW9DTCxJQUFLLEVBQXBELEVBQ0tNLElBREwsQ0FDVUMsR0FBRyxJQUFJO0FBQ1RKLG1CQUFXLEdBQUdJLEdBQUcsQ0FBQ0MsSUFBbEI7QUFDQSxlQUFPSiw0Q0FBSyxDQUFDQyxHQUFOLENBQVVFLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxPQUFULENBQWlCQyxHQUEzQixDQUFQO0FBQ0gsT0FKTCxFQUtLSixJQUxMLENBS1VDLEdBQUcsSUFBSTtBQUNUSixtQkFBVyxtQ0FBT0EsV0FBUDtBQUFvQk0saUJBQU8sRUFBRUYsR0FBRyxDQUFDQztBQUFqQyxVQUFYO0FBRUFmLGtCQUFVLENBQUNVLFdBQUQsQ0FBVjtBQUNBUCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNILE9BVkw7QUFXSDtBQUNKLEdBakJRLEVBaUJOLENBQUNDLE1BQUQsQ0FqQk0sQ0FBVDtBQW1CQWMsU0FBTyxDQUFDQyxHQUFSLENBQVlwQixPQUFaOztBQUVBLE1BQUdHLE9BQUgsRUFBWTtBQUNSLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sTUFBQywyREFBRDtBQUFTLGFBQU8sRUFBRUgsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0g7QUFDSixDQWhDRDs7QUFrQ2VELHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bva2VkZXgvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9rZW1vbidcblxuY29uc3QgUG9rZWRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbcG9rZW1vbiwgc2V0UG9rZW1vbl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJvdXRlci5xdWVyeS5pZFxuICAgICAgICBpZihuYW1lKXtcbiAgICAgICAgICAgIGxldCBwb2tlbW9uRGF0YVxuXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke25hbWV9YClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb2tlbW9uRGF0YSA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQocmVzLmRhdGEuc3BlY2llcy51cmwpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwb2tlbW9uRGF0YSA9IHsuLi5wb2tlbW9uRGF0YSwgc3BlY2llczogcmVzLmRhdGEgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFBva2Vtb24ocG9rZW1vbkRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXJdKVxuXG4gICAgY29uc29sZS5sb2cocG9rZW1vbilcblxuICAgIGlmKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPFBva2Vtb24gcG9rZW1vbj17cG9rZW1vbn0vPlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZWRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/pokedex/[id].tsx\n");

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