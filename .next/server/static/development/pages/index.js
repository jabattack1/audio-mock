module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/about-label.js":
/*!***********************************!*\
  !*** ./components/about-label.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/about-label.js";






var AboutLabel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutLabel, _React$Component);

  function AboutLabel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutLabel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutLabel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutLabel, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "gridWrapperAbout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "aboutContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "aboutImage",
        src: "https://i.imgur.com/hG0vG7Q.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), "Audio Boy is an independent recording company with ambitions of becoming home to the very best forward-thinking and innovative artists. Our reputation in the music industry is something we feel a great responsibility for and we pride ourselves as a company who offers an unparalleled experience for the artists and listeners alike. With a focus on influencing the world's pop culture without any boundaries, and a passionate approach towards discovering and nurturing musical talent - Audio Boy is currently home to The Electronic Auditory Rebels and many more to come in the future!")));
    }
  }]);

  return AboutLabel;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AboutLabel);

/***/ }),

/***/ "./components/artists-grid.js":
/*!************************************!*\
  !*** ./components/artists-grid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _artists_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./artists.js */ "./components/artists.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/artists-grid.js";







var ArtistsGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ArtistsGrid, _React$Component);

  function ArtistsGrid() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ArtistsGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ArtistsGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ArtistsGrid, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "gridWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "artists-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.artists.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_artists_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.props, {
          key: i,
          i: i,
          artist: post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }));
      })));
    }
  }]);

  return ArtistsGrid;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ArtistsGrid);

/***/ }),

/***/ "./components/artists.js":
/*!*******************************!*\
  !*** ./components/artists.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/artists.js";







var Artists =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Artists, _React$Component);

  function Artists() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Artists);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Artists).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Artists, [{
    key: "render",
    value: function render() {
      var _this$props$artist = this.props.artist,
          artist = _this$props$artist.artist,
          i = _this$props$artist.i;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure", {
        className: "grid-figure",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grid-figure-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/auditory?code=".concat(this.props.artist.code),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.artist.display_src,
        alt: this.props.artist.name,
        className: "grid-artist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }))));
    }
  }]);

  return Artists;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Artists);

/***/ }),

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ "react-horizontal-scrolling-menu");
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/shoppingCart.css */ "./css/shoppingCart.css");
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/cart.js";










var Cart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Cart, _React$Component);

  function Cart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Cart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Cart, [{
    key: "render",
    value: function render() {
      // console.log(this.props.data);
      if (this.props.data) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "cartList",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "/store?code=".concat(this.props.data.code),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          className: "cartItemImage",
          src: this.props.data.image1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, this.props.data.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemSize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, this.props.data.size), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemQuantity",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Qty:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "custom-select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
          className: "select-selected",
          id: "quantity",
          onMouseOver: this.setQuantity,
          defaultValue: this.props.data.quantity,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "3"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "4"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "5"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "6"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "7"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "8"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "9"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "10"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "dollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "$"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemPrice",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, this.props.data.price), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemOrigPrice",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, this.props.data.orig), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "deleteItem",
          id: "x",
          onMouseOver: this.deleteItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "\u2715"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "empty",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Your shopping cart is empty."));
      }
    }
  }, {
    key: "setQuantity",
    value: function setQuantity() {
      console.log('SELECT');
      "use strict";

      var items = document.querySelectorAll(".cartList");
      var myData = localStorage.getItem('state');
      var data = JSON.parse(myData);

      var _loop = function _loop() {
        items[k].index = k;
        var selected = items[k];
        selectOption = items[k].children[3];
        selectOption.addEventListener("change", function () {
          var id = selected.index;

          if (data.length === undefined) {
            console.log('oneA');
            data.quantity = selected.children[3].children[0].value;
            var multiple = selected.children[3].children[0].value;
            var total = multiple * selected.children[6].innerHTML;
            data.price = total.toFixed(2);
            localStorage.clear();
            localStorage.setItem('state', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
            location.reload();
          } else if (data.length === 1) {
            console.log('oneB');
            data[0].quantity = selected.children[3].children[0].value;
            var multiple = selected.children[3].children[0].value;
            var total = multiple * selected.children[6].innerHTML;
            data[0].price = total.toFixed(2);
            localStorage.clear();
            localStorage.setItem('state', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
            location.reload();
          } else {
            for (var i = 0; i < data.length; i++) {
              if (i === id) {
                console.log('two or more'); // var items = document.querySelectorAll(".cartList");

                data[i].quantity = items[i].children[3].children[0].value;
                var multiple = items[i].children[3].children[0].value;
                var total = multiple * items[i].children[6].innerHTML;
                data[i].price = total.toFixed(2);
                localStorage.clear();
                localStorage.setItem('state', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
                location.reload();
              }
            }
          }
        });
      };

      for (var k = 0; k < items.length; k++) {
        var selectOption;

        _loop();
      }

      ;
    }
  }, {
    key: "deleteItem",
    value: function deleteItem() {
      console.log('DELETE');
      "use strict";

      var items = document.querySelectorAll(".cartList");
      var myData = localStorage.getItem('state');
      var data = JSON.parse(myData);

      var _loop2 = function _loop2() {
        items[i].index = i;
        deleteButton = items[i].children[7];
        var ufo = items[i];
        deleteButton.addEventListener("click", function (e) {
          var id = ufo.index;

          if (data.length === undefined || data.length === 1) {
            localStorage.clear();
            location.reload();
          } else {
            for (var i = 0; i < data.length; i++) {
              if (i === id) {
                var s = data.splice(i, 1);
                localStorage.clear();
                localStorage.setItem('state', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
                location.reload();
              }
            }
          }
        });
      };

      for (var i = 0; i < items.length; i++) {
        var deleteButton;

        _loop2();
      }

      ;
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/contact.js";






var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _React$Component);

  function Contact() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "gridWrapperContact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contactContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "contactLinks",
        href: "info@audio-boy.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Inquiries/Questions: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "info@audio-boy.com")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "contactLinks",
        href: "pr@audio-boy.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Media: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "pr@audio-boy.com")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "contactLinks",
        href: "hr@audio-boy.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Legal: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), "legal@audio-boy.com"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "contactLinks",
        href: "info@audio-boy.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Store: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "info@audio-boy.com")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "contactLinks",
        href: "pr@audio-boy.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Ads: ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "pr@audio-boy.com")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "solicitation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "serious",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Audio-Boy does not accept unsolicited material"))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
  href: "https://imgur.com/ebTCU1p",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
  src: "https://i.imgur.com/ebTCU1p.gif",
  title: "source: imgur.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}));

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/footer.js";



function year() {
  if (false) { var spit, theDate; }

  return spit;
}

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footerWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\xA9 ", year(), " Audio-Boy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/privacy-policy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Privay Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/terms-of-use",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Terms of Use")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/ad-choices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Ad Choices")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/cookie-policy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Cookie Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/jobs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Jobs"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.js */ "./components/navbar.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ "./components/footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/layout.js";






var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Audio-Boy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "https://i.imgur.com/msETczs.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topBanner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Subscribe ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "NOW"), " for our updates & promotions! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "linkHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "OVER HERE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "goToCart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Shopping Cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "containerWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/navbar.js";








var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar).call(this, props));
    _this.scrollToTop = _this.scrollToTop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        className: "audioLetters",
        activeClass: "active",
        to: "artists",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "ARTISTS")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        className: "audioLetters",
        activeClass: "active",
        to: "news",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "NEWS")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        className: "audioLetters",
        activeClass: "active",
        to: "label",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "THE LABEL")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        className: "audioLetters",
        activeClass: "active",
        to: "store",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "STORE")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        className: "audioLetters",
        activeClass: "active",
        to: "contact",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "CONTACT"))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToTop();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, {
    key: "scrollToWithContainer",
    value: function scrollToWithContainer() {
      var goToContainer = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register('end', function () {
          resolve();
          react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.remove('end');
        });
        react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      });
      goToContainer.then(function () {
        return react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.remove('begin');
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.remove('end');
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/navbar3.js":
/*!*******************************!*\
  !*** ./components/navbar3.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/navbar3.js";








var Navbar3 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Navbar3, _React$Component);

  function Navbar3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbar3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar3).call(this, props));
    _this.scrollToTop = _this.scrollToTop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.state = {
      name: props.name
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar3, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "link3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "parrot",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "artistHeadLine",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.state.name));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToTop();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, {
    key: "scrollToWithContainer",
    value: function scrollToWithContainer() {
      var goToContainer = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.register('end', function () {
          resolve();
          react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.remove('end');
        });
        react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      });
      goToContainer.then(function () {
        return react_scroll__WEBPACK_IMPORTED_MODULE_10__["scroller"].scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.remove('begin');
      react_scroll__WEBPACK_IMPORTED_MODULE_10__["Events"].scrollEvent.remove('end');
    }
  }]);

  return Navbar3;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar3);

/***/ }),

/***/ "./components/news-grid-scroll.js":
/*!****************************************!*\
  !*** ./components/news-grid-scroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _news_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news.js */ "./components/news.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scroll.js */ "./scroll.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/news-grid-scroll.js";









var NewsGridScroll =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(NewsGridScroll, _React$Component);

  function NewsGridScroll() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsGridScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsGridScroll)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsGridScroll, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pn-ProductNav_Wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        id: "pnProductNav",
        className: "pn-ProductNav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "pnProductNavContents",
        className: "pn-ProductNav_Contents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.news.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_news_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.props, {
          key: i,
          i: i,
          news: post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        id: "pnIndicator",
        className: "pn-ProductNav_Indicator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        id: "pnAdvancerLeft",
        className: "pn-Advancer pn-Advancer_Left",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "leftArrow",
        src: "https://i.imgur.com/BZ7AKsn.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        id: "pnAdvancerRight",
        className: "pn-Advancer pn-Advancer_Right",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "rightArrow",
        src: "https://i.imgur.com/2K5BYIz.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })));
    }
  }]);

  return NewsGridScroll;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NewsGridScroll);

/***/ }),

/***/ "./components/news-grid.js":
/*!*********************************!*\
  !*** ./components/news-grid.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _news_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news.js */ "./components/news.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/news-grid.js";







var NewsGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(NewsGrid, _React$Component);

  function NewsGrid() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NewsGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NewsGrid, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "gridWrapperNews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "news-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.news.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_news_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.props, {
          key: i,
          i: i,
          news: post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }));
      })));
    }
  }]);

  return NewsGrid;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NewsGrid);

/***/ }),

/***/ "./components/news.js":
/*!****************************!*\
  !*** ./components/news.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ "react-horizontal-scrolling-menu");
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/news.js";








var News =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(News, _React$Component);

  function News() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, News);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(News).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(News, [{
    key: "render",
    value: function render() {
      var _this$props$news = this.props.news,
          news = _this$props$news.news,
          i = _this$props$news.i;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "pn-ProductNav_Link",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure", {
        className: "grid-figureNews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grid-figure-wrapNews",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        alt: this.props.news.code,
        className: "grid-news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "newsImage",
        src: this.props.news.display_src,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "newsDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.news.date), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "newsHeadline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.news.headline), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "newsContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.news.content)))));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./components/parent.js":
/*!******************************!*\
  !*** ./components/parent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _artists_grid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./artists-grid.js */ "./components/artists-grid.js");
/* harmony import */ var _news_grid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news-grid.js */ "./components/news-grid.js");
/* harmony import */ var _about_label_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-label.js */ "./components/about-label.js");
/* harmony import */ var _store_grid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store-grid.js */ "./components/store-grid.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact.js */ "./components/contact.js");
/* harmony import */ var _news_grid_scroll_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./news-grid-scroll.js */ "./components/news-grid-scroll.js");
/* harmony import */ var _store_grid_scroll_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store-grid-scroll.js */ "./components/store-grid-scroll.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_18__);






var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/parent.js";














var Parent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Parent, _React$Component);

  function Parent(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Parent);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Parent).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Parent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "one-half column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bannerWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "image123",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "imgContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "frontLogo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "tech-slideshow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bannerSun",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://i.imgur.com/QEuTfm8.gif",
        className: "spaceDrop",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://i.imgur.com/SMLpXaX.png",
        title: "source: imgur.com",
        className: "auditorySign",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "moon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://i.imgur.com/imjFfzu.png",
        title: "source: imgur.com",
        className: "singleSun",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "sun",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "I DON'T WANT TO GO AND SEE THE SUN"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "titleWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        name: "artists",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Artists")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_artists_grid_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "titleWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        name: "news",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "News - ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Scroll Right to See More"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_news_grid_scroll_js__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "newsLabelSpacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "titleWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        id: "labelHeader",
        name: "label",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "The Label")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_about_label_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "labelStoreSpacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "titleWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        id: "storeHeader",
        name: "store",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_store_grid_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "storeContactSpacer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "titleWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Element"], {
        id: "contactHeader",
        name: "contact",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_contact_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))))));
    }
  }]);

  return Parent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Parent);

/***/ }),

/***/ "./components/shopping-cart.js":
/*!*************************************!*\
  !*** ./components/shopping-cart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart.js */ "./components/cart.js");
/* harmony import */ var _store_grid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store-grid.js */ "./components/store-grid.js");
/* harmony import */ var _navbar3_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar3.js */ "./components/navbar3.js");
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../data/store.js */ "./data/store.js");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/artist.css */ "./css/artist.css");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_artist_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../css/shoppingCart.css */ "./css/shoppingCart.css");
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_21__);










var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/shopping-cart.js";












var up;

var ShoppingCart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ShoppingCart, _React$Component);

  function ShoppingCart() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ShoppingCart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ShoppingCart).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {});

    if (typeof localStorage === "undefined" || localStorage.getItem('state') === null) {
      console.log('undefined');
      _this.state = {
        data: '',
        total: '0.00',
        shipping: '0.00',
        tax: '0.00',
        totalAmount: '0.00'
      };
    } else if (localStorage.getItem('state') === 'nothing') {
      console.log('undefined');
      _this.state = {
        data: '',
        total: '0.00',
        shipping: '0.00',
        tax: '0.00',
        totalAmount: '0.00'
      };
    } else if (localStorage.getItem('state') !== null && localStorage.getItem('state') !== 'nothing') {
      // localStorage.clear();
      var data = localStorage.getItem('state');
      var parsedData = JSON.parse(data); // console.log('steph');
      // console.log(parsedData);

      _this.state = {
        data: parsedData,
        total: '',
        shipping: 9.99,
        tax: '',
        totalAmount: ''
      };
    } else {
      console.log('control');
      _this.state = {
        data: '',
        total: '',
        shipping: 9.99,
        tax: '',
        totalAmount: ''
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ShoppingCart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.state);
      if (this.state.data === '') {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "ah",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxPromo",
          id: "boxPromo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Do you have a promo code?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          id: "promoArrow",
          onClick: this.showPromo,
          src: "https://i.imgur.com/vp4niLu.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion",
          onClick: this.showPopup,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking \"See Details\" where the promotion was found online or in the footer of the email or mail."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "promoField",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
          id: "promoForm",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          className: "promoButton",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "APPLY"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion1",
          onClick: this.showPopup1,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup1",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          src: "https://i.imgur.com/y6GROgd.png",
          id: "popQuestion2",
          onClick: this.showPopup2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup2",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "$"), "l"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "titleWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Element"], {
          id: "labelHeader",
          name: "label",
          className: "element",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "You Might Also Like")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_store_grid_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          store: _data_store_js__WEBPACK_IMPORTED_MODULE_17__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }));
      } else if (this.state.data.length == undefined) {
        console.log('loca');
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: "1",
          i: "1",
          data: this.state.data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxPromo",
          id: "boxPromo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, "Do you have a promo code?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          id: "promoArrow",
          onClick: this.showPromo,
          src: "https://i.imgur.com/vp4niLu.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion",
          onClick: this.showPopup,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, "If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking \"See Details\" where the promotion was found online or in the footer of the email or mail."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "promoField",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
          id: "promoForm",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          className: "promoButton",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, "APPLY"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion1",
          onClick: this.showPopup1,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup1",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          src: "https://i.imgur.com/y6GROgd.png",
          id: "popQuestion2",
          onClick: this.showPopup2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup2",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, "$"), "l"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "titleWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Element"], {
          id: "labelHeader",
          name: "label",
          className: "element",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "You Might Also Like")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_store_grid_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          store: _data_store_js__WEBPACK_IMPORTED_MODULE_17__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Link"], {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, this.state.data.map(function (data, i) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this2.parsedData, {
            key: i,
            i: i,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }));
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxPromo",
          id: "boxPromo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "Do you have a promo code?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          id: "promoArrow",
          onClick: this.showPromo,
          src: "https://i.imgur.com/vp4niLu.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion",
          onClick: this.showPopup,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking \"See Details\" where the promotion was found online or in the footer of the email or mail."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "promoField",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
          id: "promoForm",
          type: "text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          className: "promoButton",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "APPLY"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion1",
          onClick: this.showPopup1,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup1",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          src: "https://i.imgur.com/y6GROgd.png",
          id: "popQuestion2",
          onClick: this.showPopup2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup2",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        }, "$"), "l"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "titleWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_12__["Element"], {
          id: "labelHeader",
          name: "label",
          className: "element",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, "You Might Also Like")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_store_grid_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          store: _data_store_js__WEBPACK_IMPORTED_MODULE_17__["default"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }));
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      // console.log('famicon');
      localStorage.clear();
      location.reload();
      localStorage.setItem('state', 'nothing');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.addEventListener('click', this.twoClicks);
      document.getElementById("popup1").style.display = "none";
      document.getElementById("popup2").style.display = "none";

      if (localStorage.getItem('state') !== null && localStorage.getItem('state') !== 'nothing') {
        console.log('hit');
        var items = document.querySelectorAll(".cartList");
        var total = 0;
        var totalQuantity = 0;
        var baseShipping = this.state.shipping;

        for (var i = 0; i < items.length; i++) {
          var prices = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(items[i].children[5].innerHTML);

          total = total + prices;
        }

        ;

        for (var i = 0; i < items.length; i++) {
          var quantity = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(items[i].children[3].children[0].value);

          totalQuantity = totalQuantity + quantity;
        }

        ;
        var shipping = totalQuantity / 3 * 4.49 + baseShipping;
        var tax = total * .0725;
        var totalAmount = total + shipping + tax;
        this.setState({
          total: total.toFixed(2),
          shipping: shipping.toFixed(2),
          tax: tax.toFixed(2),
          totalAmount: totalAmount.toFixed(2)
        });
      }
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      // console.log('pop1');
      var x = document.getElementById("popup");
      var y = document.getElementById("popup1");
      var z = document.getElementById("popup2");

      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
      } else {
        x.style.display = "none";
      }
    }
  }, {
    key: "showPopup1",
    value: function showPopup1() {
      // console.log('pop1');
      var x = document.getElementById("popup");
      var y = document.getElementById("popup1");
      var z = document.getElementById("popup2");

      if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
      } else {
        y.style.display = "none";
      }
    }
  }, {
    key: "showPopup2",
    value: function showPopup2() {
      // console.log('pop2');
      var x = document.getElementById("popup");
      var y = document.getElementById("popup1");
      var z = document.getElementById("popup2");

      if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
      } else {
        z.style.display = "none";
      }
    }
  }, {
    key: "showPromo",
    value: function showPromo() {
      var box = document.getElementById('boxPromo');
      var icon = document.getElementById('promoArrow');
      var promo = document.getElementById('promoField');

      if (up === true) {
        console.log(promo);
        promo.className = 'promoUp';
        icon.className = 'fa-arrow-down';
        up = false; // promo.style.display = "none";
      } else {
        console.log(promo);
        promo.className = 'promoDown';
        icon.className = 'fa-arrow-up';
        promo.style.display = "block";
        up = true;
      }
    } // twoClicks(){
    // 	// console.log('twos');
    // 	var x = document.getElementById("popup1");
    // 	var y = document.getElementById("popup2");
    // 	// console.log(y.style.display);
    // if (x.style.display === "block") {
    // 	x.style.display = "none";
    // } 
    // else{
    // 	x.style.display = "none";
    // }
    // if(y.style.display === "block") {
    // 	y.style.display = "none";
    // } 
    // else{
    // 	y.style.display = "none";
    // }
    // }

  }]);

  return ShoppingCart;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCart);

/***/ }),

/***/ "./components/store-grid-scroll.js":
/*!*****************************************!*\
  !*** ./components/store-grid-scroll.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store.js */ "./components/store.js");
/* harmony import */ var _scrollStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scrollStore.js */ "./scrollStore.js");
/* harmony import */ var _scrollStore_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scrollStore_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/styleStore.css */ "./css/styleStore.css");
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_styleStore_css__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/store-grid-scroll.js";









var StoreGridScroll =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StoreGridScroll, _React$Component);

  function StoreGridScroll() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StoreGridScroll);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StoreGridScroll).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StoreGridScroll, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pn-ProductNav_WrapperStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        id: "pnProductNavStore",
        className: "pn-ProductNavStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "pnProductNavContentsStore",
        className: "pn-ProductNav_ContentsStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.store.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_store_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
          key: i,
          i: i,
          store: post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "pnIndicatorStore",
        className: "pn-ProductNav_IndicatorStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "pnAdvancerLeftStore",
        className: "pn-AdvancerStore pn-Advancer_LeftStore",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "leftArrowStore",
        src: "https://i.imgur.com/BZ7AKsn.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "pnAdvancerRightStore",
        className: "pn-AdvancerStore pn-Advancer_RightStore",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "rightArrowStore",
        src: "https://i.imgur.com/lgw31BS.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })));
    }
  }]);

  return StoreGridScroll;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StoreGridScroll);

/***/ }),

/***/ "./components/store-grid.js":
/*!**********************************!*\
  !*** ./components/store-grid.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store.js */ "./components/store.js");
/* harmony import */ var _shopping_cart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-cart.js */ "./components/shopping-cart.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/store-grid.js";








var StoreGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(StoreGrid, _React$Component);

  function StoreGrid() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StoreGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StoreGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StoreGrid, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "storeWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "storeBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.store.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_store_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.props, {
          key: i,
          i: i,
          store: post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }));
      })));
    }
  }]);

  return StoreGrid;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StoreGrid);

/***/ }),

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/styleStore.css */ "./css/styleStore.css");
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_styleStore_css__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/store.js";








var Store =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Store, _React$Component);

  function Store() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Store);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Store).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Store, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure", {
        className: "grid-figureStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grid-figure-wrapStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/store?code=".concat(this.props.store.code),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        alt: this.props.store.code,
        className: "grid-store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.store.display_src,
        alt: this.props.store.name,
        className: "itemPhoto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "itemName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.store.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "itemColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.store.color), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "itemQuick",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.store.quick), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "itemPrice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "$", this.props.store.price)))));
    }
  }]);

  return Store;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./css/artist.css":
/*!************************!*\
  !*** ./css/artist.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/bootstrap.css":
/*!***************************!*\
  !*** ./css/bootstrap.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/normalize.css":
/*!***************************!*\
  !*** ./css/normalize.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/shoppingCart.css":
/*!******************************!*\
  !*** ./css/shoppingCart.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/skeleton.css":
/*!**************************!*\
  !*** ./css/skeleton.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/styleStore.css":
/*!****************************!*\
  !*** ./css/styleStore.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./data/artistList.js":
/*!****************************!*\
  !*** ./data/artistList.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var artistList = [{
  "code": "abcd",
  "name": "The Electronic Auditory Rebels",
  "id": "1",
  "url": "/auditory",
  "mv": "https://www.youtube.com/embed/U9z9jWbHY08",
  "bio": "This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture.This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture. This is the band that will help change pop culture.",
  "display_src": "https://i.imgur.com/AwJ6kdN.jpg",
  "youtube": '',
  "twitter": '',
  "instagram": '',
  "facebook": '' // {
  //     "code": "dbcde",
  //     "name": "Britney Spears",
  //     "id": "1",
  //     "url":"/auditory2",
  //     "mv":"https://www.youtube.com/embed/7LEmer7wwHI",
  //     "bio":"This is the qsdfdafdband that will help change pop culture.",
  //     "display_src": `https://i.imgur.com/K0MuJet.png`
  // },
  // 	{
  //     "code": "dbcde",
  //     "name": "Britney Spears",
  //     "id": "1",
  //     "url":"/auditory2",
  //     "mv":"https://www.youtube.com/embed/7LEmer7wwHI",
  //     "bio":"This is the qsdfdafdband that will help change pop culture.",
  //     "display_src": `https://i.imgur.com/K0MuJet.png`
  // }

}];
/* harmony default export */ __webpack_exports__["default"] = (artistList); //  {
//   "code": "abcde",
//   "name": "Britney Spears",
//   "id": "1",
//   "display_src": `https://i.imgur.com/K0MuJet.png`
// }

/***/ }),

/***/ "./data/news.js":
/*!**********************!*\
  !*** ./data/news.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var news = [{
  "code": "news12345",
  "headline": "The Electronic Auditory Rebels release debut single",
  "id": "1",
  "display_src": "https://i.imgur.com/8nqyC9t.jpg",
  "date": "May-23-2019",
  "content": "The release date will be moved to whichever date the song catches on."
}, {
  "code": "news12345",
  "headline": "Chocolate Chip Cookies: Recipe",
  "id": "1",
  "display_src": "https://i.imgur.com/P0MSSTp.jpg",
  "date": "May-1-2019",
  "content": "1 cup salted butter softened. 1 cup white (granulated) sugar. 1 cup light brown sugar packed. 2 tsp pure vanilla extract. 2 large eggs. 3 cups all-purpose flour. 1 tsp baking soda.½ tsp baking powder."
}, {
  "code": "news12345",
  "headline": "The New York Knicks lose all their marbles",
  "id": "1",
  "display_src": "https://i.imgur.com/1p1i2jR.jpg",
  "date": "February-17-2019",
  "content": "The New York Knicks Suck."
}, {
  "code": "news12345",
  "headline": "Music biz: Another way to get rid of unwanted fat",
  "id": "1",
  "display_src": "https://i.imgur.com/QCepu4Y.jpg",
  "date": "Bullshit day",
  "content": "Really. You should try it."
}, {
  "code": "news12345",
  "headline": "Happy days are days you feel like doing something",
  "id": "1",
  "display_src": "https://i.imgur.com/99YFl0a.jpg",
  "date": "today",
  "content": "Science has proven over and over again that there is no way to prove anything."
}];
/* harmony default export */ __webpack_exports__["default"] = (news);

/***/ }),

/***/ "./data/store.js":
/*!***********************!*\
  !*** ./data/store.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var store = [{
  "code": "1",
  "name": "Audio-Boy T-Shirt (Limited)",
  "id": "1",
  "display_src": "https://i.imgur.com/Ag5EuDG.jpg",
  "price": "29.99",
  "description": "Audio-Boy delivers to you a minimalistic style soft cotton slim fit t-shirt that will keep you comfortable and styling all day long.",
  "color": "Black/White",
  "quick": "Men's T-Shirt",
  "size": '',
  "quantity": "1"
}, {
  "code": "2",
  "name": "Audio-Boy Sweatshirt (Limited)",
  "id": "1",
  "display_src": "https://i.imgur.com/3y7G9NA.png",
  "price": "49.99",
  "description": "Audio-Boy delivers to you a minimalistic style soft cotton slim fit t-shirt that will keep you comfortable and styling all day long.",
  "color": "Black/White",
  "quick": "Men's Sweatshirt",
  "size": "",
  "quantity": "1"
}, {
  "code": "3",
  "name": "Audio-Boy Sweatshirt (Limited)",
  "id": "1",
  "display_src": "https://i.imgur.com/3y7G9NA.png",
  "price": "49.99",
  "description": "Audio-Boy delivers to you a minimalistic style soft cotton slim fit t-shirt that will keep you comfortable and styling all day long.",
  "color": "Black/White",
  "quick": "Men's Sweatshirt",
  "size": '',
  "quantity": "1"
}, {
  "code": "4",
  "name": "Audio-Boy Sweatshirt (Limited)",
  "id": "1",
  "display_src": "https://i.imgur.com/3y7G9NA.png",
  "price": "49.99",
  "description": "Audio-Boy delivers to you a minimalistic style soft cotton slim fit t-shirt that will keep you comfortable and styling all day long.",
  "color": "Black/White",
  "quick": "Men's Sweatshirt",
  "size": '',
  "quantity": "1"
}, {
  "code": "5",
  "name": "Audio-Boy Sweatshirt (Limited)",
  "id": "1",
  "display_src": "https://i.imgur.com/3y7G9NA.png",
  "price": "49.99",
  "description": "Audio-Boy delivers to you a minimalistic style soft cotton slim fit t-shirt that will keep you comfortable and styling all day long.",
  "color": "Black/White",
  "quick": "Men's Sweatshirt",
  "size": '',
  "quantity": "1"
}, {
  "code": "6",
  "name": "Audio-Boy Sweatshirt (Limited)",
  "id": "1",
  "display_src": "https://i.imgur.com/3y7G9NA.png",
  "price": "49.99",
  "description": "Audio-Boy delivers to you a minimalistic style soft cotton slim fit t-shirt that will keep you comfortable and styling all day long.",
  "color": "Black/White",
  "quick": "Men's Sweatshirt",
  "size": '',
  "quantity": "1"
}];
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-float.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-float.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-float.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").parseFloat;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.8' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-float.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-float.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_parent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/parent.js */ "./components/parent.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _data_artistList_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/artistList.js */ "./data/artistList.js");
/* harmony import */ var _data_news_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/news.js */ "./data/news.js");
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/store.js */ "./data/store.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../scroll.js */ "./scroll.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../css/bootstrap.css */ "./css/bootstrap.css");
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../css/styleStore.css */ "./css/styleStore.css");
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_css_styleStore_css__WEBPACK_IMPORTED_MODULE_22__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/pages/index.js";
















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      trigger: ''
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      this.art = _data_artistList_js__WEBPACK_IMPORTED_MODULE_14__["default"];
      this.news = _data_news_js__WEBPACK_IMPORTED_MODULE_15__["default"];
      this.store = _data_store_js__WEBPACK_IMPORTED_MODULE_16__["default"];
      var loc = window.location.pathname;

      if (loc == '/') {
        var doSomething = function doSomething(scroll_pos) {
          pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
        };

        // var count = 0;
        var moveIndicator = function moveIndicator(item, color) {
          var textPosition = item.getBoundingClientRect();
          var container = pnProductNavContents.getBoundingClientRect().left;
          var distance = textPosition.left - container;
          var scroll = pnProductNavContents.scrollLeft;
          pnIndicator.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")"; // count = count += 100;
          // pnIndicator.style.transform = "translateX(" + count + "px)";

          if (color) {
            pnIndicator.style.backgroundColor = color;
          }
        };

        var determineOverflow = function determineOverflow(content, container) {
          var containerMetrics = container.getBoundingClientRect();
          var containerMetricsRight = Math.floor(containerMetrics.right);
          var containerMetricsLeft = Math.floor(containerMetrics.left);
          var contentMetrics = content.getBoundingClientRect();
          var contentMetricsRight = Math.floor(contentMetrics.right);
          var contentMetricsLeft = Math.floor(contentMetrics.left);

          if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
            return "both";
          } else if (contentMetricsLeft < containerMetricsLeft) {
            return "left";
          } else if (contentMetricsRight > containerMetricsRight) {
            return "right";
          } else {
            return "none";
          }
        };

        console.log(loc);
        var SETTINGS = {
          navBarTravelling: false,
          navBarTravelDirection: "",
          navBarTravelDistance: 500
        };
        var colours = {
          0: "#867100",
          1: "#7F4200",
          2: "#99813D",
          3: "#40FEFF",
          4: "#14CC99",
          5: "#00BAFF",
          6: "#0082B2",
          7: "#B25D7A",
          8: "#00FF17",
          9: "#006B49",
          10: "#00B27A",
          11: "#996B3D",
          12: "#CC7014",
          13: "#40FF8C",
          14: "#FF3400",
          15: "#ECBB5E",
          16: "#ECBB0C",
          17: "#B9D912",
          18: "#253A93",
          19: "#125FB9"
        };
        document.documentElement.classList.remove("no-js");
        document.documentElement.classList.add("js"); // Out advancer buttons

        var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
        var pnAdvancerRight = document.getElementById("pnAdvancerRight"); // the indicator

        var pnIndicator = document.getElementById("pnIndicator");
        var pnProductNav = document.getElementById("pnProductNav");
        var pnProductNavContents = document.getElementById("pnProductNavContents");
        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav)); // Set the indicator

        moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]); // Handle the scroll of the horizontal container

        var last_known_scroll_position = 0;
        var ticking = false;
        pnProductNav.addEventListener("scroll", function () {
          last_known_scroll_position = window.scrollY;

          if (!ticking) {
            window.requestAnimationFrame(function () {
              doSomething(last_known_scroll_position);
              ticking = false;
            });
          }

          ticking = true;
        });
        pnAdvancerLeft.addEventListener("click", function () {
          // If in the middle of a move return
          if (SETTINGS.navBarTravelling === true) {
            return;
          } // If we have content overflowing both sides or on the left


          if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
            // Find how far this panel has been scrolled
            var availableScrollLeft = pnProductNav.scrollLeft; // If the space available is less than two lots of our desired distance, just move the whole amount
            // otherwise, move by the amount in the settings

            if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
              pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
            } else {
              pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
            } // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that


            pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition"); // Update our settings

            SETTINGS.navBarTravelDirection = "left";
            SETTINGS.navBarTravelling = true;
          } // Now update the attribute in the DOM


          pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
        });
        pnAdvancerRight.addEventListener("click", function () {
          console.log('slave'); // If in the middle of a move return

          if (SETTINGS.navBarTravelling === true) {
            return;
          } // If we have content overflowing both sides or on the right


          if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
            // Get the right edge of the container and content
            var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
            var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right; // Now we know how much space we have available to scroll

            var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge); // If the space available is less than two lots of our desired distance, just move the whole amount
            // otherwise, move by the amount in the settings

            if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
              pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
            } else {
              pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
            } // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that


            pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition"); // Update our settings

            SETTINGS.navBarTravelDirection = "right";
            SETTINGS.navBarTravelling = true;
          } // Now update the attribute in the DOM


          pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
        });
        pnProductNavContents.addEventListener("transitionend", function () {
          // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
          var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
          var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform"); // If there is no transition we want to default to 0 and not null

          var amount = Math.abs(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(tr.split(",")[4]) || 0);
          pnProductNavContents.style.transform = "none";
          pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition"); // Now lets set the scroll position

          if (SETTINGS.navBarTravelDirection === "left") {
            pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
          } else {
            pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
          }

          SETTINGS.navBarTravelling = false;
        }, false); // Handle setting the currently active link

        pnProductNavContents.addEventListener("click", function (e) {
          var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
          links.forEach(function (item) {
            item.setAttribute("aria-selected", "false");
          });
          e.target.setAttribute("aria-selected", "true"); // Pass the clicked item and it's colour to the move indicator function

          moveIndicator(e.target, colours[links.indexOf(e.target)]);
        });

        (function (root, factory) {
          if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/next/node_modules/webpack/buildin/amd-options.js")) {
            define(['exports'], factory);
          } else if (typeof exports !== 'undefined') {
            factory(exports);
          } else {
            factory(root.dragscroll = {});
          }
        })(this, function (exports) {
          var _window = window;
          var _document = document;
          var mousemove = 'mousemove';
          var mouseup = 'mouseup';
          var mousedown = 'mousedown';
          var EventListener = 'EventListener';
          var addEventListener = 'add' + EventListener;
          var removeEventListener = 'remove' + EventListener;
          var newScrollX, newScrollY;
          var dragged = [];

          var reset = function reset(i, el) {
            for (i = 0; i < dragged.length;) {
              el = dragged[i++];
              el = el.container || el;
              el[removeEventListener](mousedown, el.md, 0);

              _window[removeEventListener](mouseup, el.mu, 0);

              _window[removeEventListener](mousemove, el.mm, 0);
            } // cloning into array since HTMLCollection is updated dynamically


            dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));

            for (i = 0; i < dragged.length;) {
              (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
                (cont = el.container || el)[addEventListener](mousedown, cont.md = function (e) {
                  if (!el.hasAttribute('nochilddrag') || _document.elementFromPoint(e.pageX, e.pageY) == cont) {
                    pushed = 1;
                    lastClientX = e.clientX;
                    lastClientY = e.clientY;
                    e.preventDefault();
                  }
                }, 0);

                _window[addEventListener](mouseup, cont.mu = function () {
                  pushed = 0;
                }, 0);

                _window[addEventListener](mousemove, cont.mm = function (e) {
                  if (pushed) {
                    (scroller = el.scroller || el).scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);
                    scroller.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);

                    if (el == _document.body) {
                      (scroller = _document.documentElement).scrollLeft -= newScrollX;
                      scroller.scrollTop -= newScrollY;
                    }
                  }
                }, 0);
              })(dragged[i++]);
            }
          };

          if (_document.readyState == 'complete') {
            reset();
          } else {
            _window[addEventListener]('load', reset, 0);
          }

          exports.reset = reset;
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_parent_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        artists: _data_artistList_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        news: _data_news_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        store: _data_store_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./scroll.js":
/*!*******************!*\
  !*** ./scroll.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);


if (false) {}

/***/ }),

/***/ "./scrollStore.js":
/*!************************!*\
  !*** ./scrollStore.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// if (process.browser){
// window.onload = function(){
// var SETTINGSStore = {
//     navBarTravellingStore: false,
//     navBarTravelDirectionStore: "",
//     navBarTravelDistanceStore: 250
// }
// var coloursStore = {
//     0: "#867100",
//     1: "#7F4200",
//     2: "#99813D",
//     3: "#40FEFF",
//     4: "#14CC99",
//     5: "#00BAFF",
//     6: "#0082B2",
//     7: "#B25D7A",
//     8: "#00FF17",
//     9: "#006B49",
//     10: "#00B27A",
//     11: "#996B3D",
//     12: "#CC7014",
//     13: "#40FF8C",
//     14: "#FF3400",
//     15: "#ECBB5E",
//     16: "#ECBB0C",
//     17: "#B9D912",
//     18: "#253A93",
//     19: "#125FB9",
// }
// document.documentElement.classList.remove("no-js");
// document.documentElement.classList.add("js");
// console.log('lion2');
// // Out advancer buttons
// var pnAdvancerLeftStore = document.getElementById("pnAdvancerLeftStore");
// var pnAdvancerRightStore = document.getElementById("pnAdvancerRightStore");
// // the indicator
// var pnIndicatorStore = document.getElementById("pnIndicatorStore");
// var pnProductNavStore = document.getElementById("pnProductNavStore");
// var pnProductNavContentsStore = document.getElementById("pnProductNavContentsStore");
// pnProductNavStore.setAttribute("data-overflowing", determineOverflowStore(pnProductNavContentsStore, pnProductNavStore));
// // Set the indicator
// moveIndicatorStore(pnProductNavStore.querySelector("[aria-selected=\"true\"]"), coloursStore[0]);
// // Handle the scroll of the horizontal container
// var last_known_scroll_positionStore = 0;
// var tickingStore = false;
// function doSomethingStore(scroll_pos) {
//     pnProductNavStore.setAttribute("data-overflowing", determineOverflowStore(pnProductNavContentsStore, pnProductNavStore));
// }
// pnProductNavStore.addEventListener("scroll", function() {
//     last_known_scroll_positionStore = window.scrollY;
//     if (!tickingStore) {
//         window.requestAnimationFrame(function() {
//             doSomethingStore(last_known_scroll_positionStore);
//             tickingStore = false;
//         });
//     }
//     tickingStore = true;
// });
// pnAdvancerLeftStore.addEventListener("click", function() {
//     // If in the middle of a move return
//     if (SETTINGSStore.navBarTravellingStore === true) {
//         return;
//     }
//     // If we have content overflowing both sides or on the left
//     if (determineOverflowStore(pnProductNavContentsStore, pnProductNavStore) === "left" || determineOverflowStore(pnProductNavContentsStore, pnProductNavStore) === "both") {
//         // Find how far this panel has been scrolled
//         var availableScrollLeftStore = pnProductNavStore.scrollLeft;
//         // If the space available is less than two lots of our desired distance, just move the whole amount
//         // otherwise, move by the amount in the settingsStore
//         if (availableScrollLeftStore < SETTINGSStore.navBarTravelDistanceStore * 2) {
//             pnProductNavContentsStore.style.transform = "translateX(" + availableScrollLeftStore + "px)";
//         } else {
//             pnProductNavContentsStore.style.transform = "translateX(" + SETTINGSStore.navBarTravelDistanceStore + "px)";
//         }
//         // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
//         pnProductNavContentsStore.classList.remove("pn-ProductNav_Contents-no-transition");
//         // Update our settingsStore
//         SETTINGSStore.navBarTravelDirectionStore = "left";
//         SETTINGSStore.navBarTravellingStore = true;
//     }
//     // Now update the attribute in the DOM
//     pnProductNavStore.setAttribute("data-overflowing", determineOverflowStore(pnProductNavContentsStore, pnProductNavStore));
// });
// pnAdvancerRightStore.addEventListener("click", function() {
//     // If in the middle of a move return
//     if (SETTINGSStore.navBarTravellingStore === true) {
//         return;
//     }
//     // If we have content overflowing both sides or on the right
//     if (determineOverflowStore(pnProductNavContentsStore, pnProductNavStore) === "right" || determineOverflowStore(pnProductNavContentsStore, pnProductNavStore) === "both") {
//         // Get the right edge of the container and content
//         var navBarRightEdgeStore = pnProductNavContentsStore.getBoundingClientRect().right;
//         var navBarScrollerRightEdgeStore = pnProductNavStore.getBoundingClientRect().right;
//         // Now we know how much space we have available to scroll
//         var availableScrollRightStore = Math.floor(navBarRightEdgeStore - navBarScrollerRightEdgeStore);
//         // If the space available is less than two lots of our desired distance, just move the whole amount
//         // otherwise, move by the amount in the settingsStore
//         if (availableScrollRightStore < SETTINGSStore.navBarTravelDistanceStore * 2) {
//             pnProductNavContentsStore.style.transform = "translateX(-" + availableScrollRightStore + "px)";
//         } else {
//             pnProductNavContentsStore.style.transform = "translateX(-" + SETTINGSStore.navBarTravelDistanceStore + "px)";
//         }
//         // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
//         pnProductNavContentsStore.classList.remove("pn-ProductNav_Contents-no-transition");
//         // Update our settingsStore
//         SETTINGSStore.navBarTravelDirectionStore = "right";
//         SETTINGSStore.navBarTravellingStore = true;
//     }
//     // Now update the attribute in the DOM
//     pnProductNavStore.setAttribute("data-overflowing", determineOverflowStore(pnProductNavContentsStore, pnProductNavStore));
// });
// pnProductNavContentsStore.addEventListener(
//     "transitionend",
//     function() {
//         // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
//         var styleOfTransformStore = window.getComputedStyle(pnProductNavContentsStore, null);
//         var trStore = styleOfTransformStore.getPropertyValue("-webkit-transform") || styleOfTransformStore.getPropertyValue("transform");
//         // If there is no transition we want to default to 0 and not null
//         var amountStore = Math.abs(parseInt(trStore.split(",")[4]) || 0);
//         pnProductNavContentsStore.style.transform = "none";
//         pnProductNavContentsStore.classList.add("pn-ProductNav_Contents-no-transition");
//         // Now lets set the scroll position
//         if (SETTINGSStore.navBarTravelDirectionStore === "left") {
//             pnProductNavStore.scrollLeft = pnProductNavStore.scrollLeft - amountStore;
//         } else {
//             pnProductNavStore.scrollLeft = pnProductNavStore.scrollLeft + amountStore;
//         }
//         SETTINGSStore.navBarTravellingStore = false;
//     },
//     false
// );
// // Handle setting the currently active link
// pnProductNavContentsStore.addEventListener("click", function(e) {
//     var linksStore = [].slice.call(document.querySelectorAll(".pn-ProductNav_LinkStore"));
//     linksStore.forEach(function(item) {
//         item.setAttribute("aria-selected", "false");
//     })
//     e.target.setAttribute("aria-selected", "true");
//     // Pass the clicked item and it's colour to the move indicator function
//     moveIndicatorStore(e.target, coloursStore[linksStore.indexOf(e.target)]);
// });
// // var count = 0;
// function moveIndicatorStore(item, color) {
//     var textPosition = item.getBoundingClientRect();
//     var container = pnProductNavContentsStore.getBoundingClientRect().left;
//     var distance = textPosition.left - container;
//      var scroll = pnProductNavContentsStore.scrollLeft;
//     pnIndicatorStore.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")";
//     // count = count += 100;
//     // pnIndicator.style.transform = "translateX(" + count + "px)";
//     if (color) {
//         pnIndicatorStore.style.backgroundColor = color;
//     }
// }
// function determineOverflowStore(content, container) {
//     var containerMetrics = container.getBoundingClientRect();
//     var containerMetricsRight = Math.floor(containerMetrics.right);
//     var containerMetricsLeft = Math.floor(containerMetrics.left);
//     var contentMetrics = content.getBoundingClientRect();
//     var contentMetricsRight = Math.floor(contentMetrics.right);
//     var contentMetricsLeft = Math.floor(contentMetrics.left);
//      if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
//         return "both";
//     } else if (contentMetricsLeft < containerMetricsLeft) {
//         return "left";
//     } else if (contentMetricsRight > containerMetricsRight) {
//         return "right";
//     } else {
//         return "none";
//     }
// }
// /**
//  * @fileoverview dragscroll - scroll area by dragging
//  * @version 0.0.8
//  * 
//  * @license MIT, see https://github.com/asvd/dragscroll
//  * @copyright 2015 asvd <heliosframework@gmail.com> 
//  */
// (function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         define(['exports'], factory);
//     } else if (typeof exports !== 'undefined') {
//         factory(exports);
//     } else {
//         factory((root.dragscroll = {}));
//     }
// }(this, function (exports) {
//     var _windowStore = window;
//     var _documentStore = document;
//     var mousemoveStore = 'mousemove';
//     var mouseupStore  = 'mouseup';
//     var mousedownStore  = 'mousedown';
//     var EventListenerStore = 'EventListener';
//     var addEventListenerStore  = 'add'+EventListenerStore;
//     var removeEventListenerStore  = 'remove'+EventListenerStore;
//     var newScrollXStore, newScrollYStore;
//     var dragged = [];
//     var resetStore = function(i, el) {
//         for (i = 0; i < dragged.length;) {
//             el = dragged[i++];
//             el = el.container || el;
//             el[removeEventListenerStore ](mousedownStore , el.md, 0);
//             _windowStore[removeEventListenerStore ](mouseupStore , el.mu, 0);
//             _windowStore[removeEventListenerStore ](mousemoveStore , el.mm, 0);
//         }
//         // cloning into array since HTMLCollection is updated dynamically
//         dragged = [].slice.call(_documentStore.getElementsByClassName('dragscroll'));
//         for (i = 0; i < dragged.length;) {
//             (function(el, lastClientX, lastClientY, pushed, scroller, cont){
//                 (cont = el.container || el)[addEventListenerStore ](
//                     mousedownStore ,
//                     cont.md = function(e) {
//                         if (!el.hasAttribute('nochilddrag') ||
//                             _documentStore.elementFromPoint(
//                                 e.pageX, e.pageY
//                             ) == cont
//                         ) {
//                             pushed = 1;
//                             lastClientX = e.clientX;
//                             lastClientY = e.clientY;
//                             e.preventDefault();
//                         }
//                     }, 0
//                 );
//                 _windowStore[addEventListenerStore ](
//                     mouseupStore , cont.mu = function() {pushed = 0;}, 0
//                 );
//                 _windowStore[addEventListenerStore ](
//                     mousemoveStore ,
//                     cont.mm = function(e) {
//                         if (pushed) {
//                             (scroller = el.scroller||el).scrollLeft -=
//                                 newScrollXStore = (- lastClientX + (lastClientX=e.clientX));
//                             scroller.scrollTop -=
//                                 newScrollYStore = (- lastClientY + (lastClientY=e.clientY));
//                             if (el == _documentStore.body) {
//                                 (scroller = _documentStore.documentElement).scrollLeft -= newScrollXStore;
//                                 scroller.scrollTop -= newScrollYStore;
//                             }
//                         }
//                     }, 0
//                 );
//              })(dragged[i++]);
//         }
//     }
//     if (_documentStore.readyState == 'complete') {
//         resetStore();
//     } else {
//         _windowStore[addEventListenerStore ]('load', resetStore, 0);
//     }
//     exports.resetStore = resetStore;
// }));
// }
// }

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peterhahn/src/new/audio-boy/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-horizontal-scrolling-menu":
/*!**************************************************!*\
  !*** external "react-horizontal-scrolling-menu" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-horizontal-scrolling-menu");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map