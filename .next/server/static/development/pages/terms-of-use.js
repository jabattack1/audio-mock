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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer2.js":
/*!*******************************!*\
  !*** ./components/footer2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/peterhahn/src/new/audio-boy-mock/components/footer2.js";



function year() {
  if (false) { var spit, theDate; }

  return spit;
}

var Footer2 = function Footer2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footerWrapper2",
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
  }, "Jobs")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footerContacts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "email",
    href: "info@audio-boy.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "info@audio-boy.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "email",
    href: "pr@audio-boy.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "pr@audio-boy.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footerLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "email",
    href: "hr@audio-boy.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "legal@audio-boy.com"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer2);

/***/ }),

/***/ "./components/layout2.js":
/*!*******************************!*\
  !*** ./components/layout2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar2.js */ "./components/navbar2.js");
/* harmony import */ var _footer2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer2.js */ "./components/footer2.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sign_up_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sign-up.js */ "./components/sign-up.js");
var _jsxFileName = "/Users/peterhahn/src/new/audio-boy-mock/components/layout2.js";





 // var total=0;
// if (typeof window !== 'undefined') {
// 	console.log('shine');
//     var data = localStorage.getItem('state');
//     console.log(data)
//     if(data !== 'nothing'){
// 		var parsedData = JSON.parse(data);
// 		console.log('parsedData'+parsedData);
// 		if(parsedData!==null){
// 			if(parsedData.length<1){
// 				for(var i in parsedData) {
// 					total= total + parseInt(parsedData[i].quantity);
// 			    }
// 			}
// 			else{
// 				total=parseInt(parsedData.quantity);
// 			}
// 		}
// 	}
// 	console.log('wtf'+total);
// }

var Layout2 = function Layout2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Mock Records"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "https://i.imgur.com/Xc2Et4w.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topBanner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Subscribe ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "NOW"), " for our updates & promotions! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "linkHere",
    id: "myBtn",
    onClick: testClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "OVER HERE"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar2_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "containerWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sign_up_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), props.children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer2_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
};

function testClick() {
  if (document.getElementById("myModal")) {
    // Get the modal
    var modal = document.getElementById("myModal"); // Get the button that opens the modal

    var btn = document.getElementById("myBtn"); // Get the <span> element that closes the modal

    var span = document.getElementsByClassName("close")[0]; // When the user clicks on the button, open the modal 

    modal.style.display = "block"; // When the user clicks on <span> (x), close the modal

    if (span) {
      span.onclick = function () {
        modal.style.display = "none";
      };
    } // When the user clicks anywhere outside of the modal, close it


    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Layout2);

/***/ }),

/***/ "./components/navbar2.js":
/*!*******************************!*\
  !*** ./components/navbar2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy-mock/components/navbar2.js";










var Navbar2 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Navbar2, _React$Component);

  function Navbar2(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Navbar2);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar2).call(this, props));
    _this.scrollToTop = _this.scrollToTop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar2, [{
    key: "render",
    value: function render() {
      var total = 0;

      if (typeof window !== 'undefined') {
        var data = localStorage.getItem('state');

        if (data !== 'nothing') {
          var parsedData = JSON.parse(data);

          if (parsedData !== null) {
            if (parsedData.length !== undefined) {
              for (var i in parsedData) {
                total = total + _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(parsedData[i].quantity);
              }
            } else {
              total = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(parsedData.quantity);
            }
          }
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "navLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "policyNav",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "HOME")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "navLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "policyNav",
        href: "/privacy-policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "PRIVACY POLICY")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "navLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "policyNav",
        href: "/terms-of-use",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "TERMS OF USE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "navLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "policyNav",
        href: "/ad-choices",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "AD CHOICES")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "navLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "policyNav",
        href: "/cookie-policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "COOKIE POLICY")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "navLinks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "policyNav",
        href: "/jobs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "JOBS"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/shopping-cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "goToCart2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://i.imgur.com/O4wSpvB.png",
        className: "cartImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "cartQuantity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, total))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "emailUsLink2",
        href: "mailto:info@audio-boy.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "https://i.imgur.com/tWjrmNt.png",
        className: "emailUs2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_11__["Events"].scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
      react_scroll__WEBPACK_IMPORTED_MODULE_11__["Events"].scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      react_scroll__WEBPACK_IMPORTED_MODULE_11__["animateScroll"].scrollToTop();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      react_scroll__WEBPACK_IMPORTED_MODULE_11__["scroller"].scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, {
    key: "scrollToWithContainer",
    value: function scrollToWithContainer() {
      var goToContainer = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        react_scroll__WEBPACK_IMPORTED_MODULE_11__["Events"].scrollEvent.register('end', function () {
          resolve();
          react_scroll__WEBPACK_IMPORTED_MODULE_11__["Events"].scrollEvent.remove('end');
        });
        react_scroll__WEBPACK_IMPORTED_MODULE_11__["scroller"].scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      });
      goToContainer.then(function () {
        return react_scroll__WEBPACK_IMPORTED_MODULE_11__["scroller"].scrollTo('scroll-container-second-element', {
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
      react_scroll__WEBPACK_IMPORTED_MODULE_11__["Events"].scrollEvent.remove('begin');
      react_scroll__WEBPACK_IMPORTED_MODULE_11__["Events"].scrollEvent.remove('end');
    }
  }]);

  return Navbar2;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar2);

/***/ }),

/***/ "./components/sign-up.js":
/*!*******************************!*\
  !*** ./components/sign-up.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/mobile.css */ "./css/mobile.css");
/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_mobile_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_scroller_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/scroller.css */ "./css/scroller.css");
/* harmony import */ var _css_scroller_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_scroller_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_sign_up_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/sign-up.css */ "./css/sign-up.css");
/* harmony import */ var _css_sign_up_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_sign_up_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/shoppingCart.css */ "./css/shoppingCart.css");
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/Users/peterhahn/src/new/audio-boy-mock/components/sign-up.js";










var Inputmask = __webpack_require__(/*! inputmask */ "inputmask");

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUp, _React$Component);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp).call(this, props));
    _this.state = {
      fields: {
        gender: 'male',
        country: 'USA'
      },
      errors: {}
    };
    _this.isNumberKeyPhone = _this.isNumberKeyPhone.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.checkMale = _this.checkMale.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.checkFemale = _this.checkFemale.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      if (typeof window !== 'undefined') {}

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "myModal",
        className: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "signUpBox",
        id: "signBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "signUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        id: "signUpHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "GET BLASTED BY EMAILS FROM"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "https://i.imgur.com/QpsNlJb.png",
        id: "signUpImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        id: "signUpSay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Sign up and get exclusive promotional discounts on merchandise and information on upcoming events. We promise not to blast you with a ton of emails."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "first_name",
        id: "firstNameSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "First Name", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "firstNameError",
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.state.errors["first_name"])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: "first_name",
        type: "text",
        name: "first_name",
        id: "firstNameSignup",
        onChange: this.handleChange.bind(this, "first_name"),
        value: this.state.fields["first_name"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "greenCheck",
        id: "firstNameCheck",
        style: {
          color: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u2713"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "last_name",
        id: "lastNameSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Last Name", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "lastNameError",
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.state.errors["last_name"])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: "last_name",
        type: "text",
        name: "last_name",
        id: "lastNameSignup",
        onChange: this.handleChange.bind(this, "last_name"),
        value: this.state.fields["last_name"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "greenCheck",
        id: "lastNameCheck",
        style: {
          color: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u2713"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "email",
        id: "emailSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Email", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "emailError",
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.state.errors["email"])), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: "email",
        type: "text",
        name: "email_field",
        id: "emailSignUp",
        onChange: this.handleChange.bind(this, "email"),
        value: this.state.fields["email"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "greenCheck",
        id: "emailCheck",
        style: {
          color: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u2713"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "phone",
        id: "phoneSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        ref: "phone",
        type: "tel",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        name: "phone_field",
        id: "phoneSignUp",
        onChange: this.handleChange.bind(this, "phone"),
        value: this.state.fields["phone"],
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "greenCheck",
        id: "phoneCheck",
        style: {
          color: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u2713"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "genderStuff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "gender",
        id: "genderSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Gender"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        id: "femaleCheck",
        className: "signupOption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "femaleCheckActual",
        className: "signupCheckBox",
        onClick: this.checkFemale.bind(this, 'gender'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "checkboxTextFemale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "FEMALE"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        id: "maleCheck",
        className: "signupOption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "maleCheckActual",
        className: "signupCheckBox",
        onClick: this.checkMale.bind(this, 'gender'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "checkboxTextMale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "MALE"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        name: "gender",
        id: "gender",
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "birthdayStuff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "dob",
        id: "birthdaySignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Birthday"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "date",
        name: "bday",
        id: "bdaySignup",
        onChange: this.handleChange.bind(this, "dob"),
        value: this.state.fields["dob"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "country",
        id: "countrySignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Country of Origin"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
        name: "country_field",
        id: "countrySignUp",
        onChange: this.handleChange.bind(this, "country"),
        value: this.state.fields["country"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AFG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Afghanistan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ALA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\xC5land Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ALB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Albania"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "DZA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Algeria"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ASM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "American Samoa"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AND",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Andorra"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AGO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Angola"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AIA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Anguilla"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ATA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Antarctica"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ATG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Antigua and Barbuda"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ARG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Argentina"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ARM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Armenia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ABW",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "Aruba"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AUS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Australia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AUT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Austria"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "AZE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Azerbaijan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BHS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Bahamas"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BHR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Bahrain"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BGD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Bangladesh"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BRB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Barbados"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BLR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Belarus"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BEL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Belgium"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BLZ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Belize"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BEN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Benin"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BMU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Bermuda"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BTN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Bhutan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BOL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Bolivia, Plurinational State of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BES",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Bonaire, Sint Eustatius and Saba"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BIH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Bosnia and Herzegovina"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BWA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Botswana"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BVT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Bouvet Island"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BRA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Brazil"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IOT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "British Indian Ocean Territory"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BRN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Brunei Darussalam"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BGR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Bulgaria"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BFA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Burkina Faso"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BDI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Burundi"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KHM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Cambodia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CMR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Cameroon"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CAN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Canada"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CPV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Cape Verde"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CYM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Cayman Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CAF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Central African Republic"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TCD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Chad"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CHL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Chile"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CHN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "China"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CXR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Christmas Island"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CCK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Cocos (Keeling) Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "COL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Colombia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "COM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Comoros"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "COG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Congo"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "COD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Congo, the Democratic Republic of the"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "COK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Cook Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CRI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Costa Rica"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CIV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "C\xF4te d'Ivoire"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "HRV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Croatia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CUB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Cuba"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CUW",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Cura\xE7ao"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CYP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Cyprus"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CZE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Czech Republic"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "DNK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Denmark"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "DJI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Djibouti"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "DMA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Dominica"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "DOM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Dominican Republic"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ECU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Ecuador"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "EGY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Egypt"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SLV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "El Salvador"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GNQ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Equatorial Guinea"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ERI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Eritrea"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "EST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Estonia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ETH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Ethiopia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "FLK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Falkland Islands (Malvinas)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "FRO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Faroe Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "FJI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Fiji"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "FIN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Finland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "FRA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "France"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GUF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "French Guiana"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PYF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "French Polynesia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ATF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "French Southern Territories"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GAB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Gabon"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GMB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Gambia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GEO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Georgia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "DEU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Germany"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GHA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Ghana"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GIB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Gibraltar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GRC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Greece"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GRL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Greenland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GRD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Grenada"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GLP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Guadeloupe"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GUM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Guam"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GTM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Guatemala"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GGY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Guernsey"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GIN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Guinea"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GNB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Guinea-Bissau"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GUY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Guyana"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "HTI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Haiti"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "HMD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Heard Island and McDonald Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VAT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Holy See (Vatican City State)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "HND",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Honduras"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "HKG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Hong Kong"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "HUN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Hungary"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ISL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Iceland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IND",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "India"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IDN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Indonesia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IRN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Iran, Islamic Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IRQ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Iraq"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IRL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Ireland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "IMN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Isle of Man"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ISR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Israel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ITA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Italy"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "JAM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Jamaica"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "JPN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Japan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "JEY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Jersey"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "JOR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Jordan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KAZ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Kazakhstan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KEN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Kenya"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KIR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Kiribati"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PRK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Korea, Democratic People's Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KOR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Korea, Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KWT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Kuwait"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KGZ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Kyrgyzstan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LAO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Lao People's Democratic Republic"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LVA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Latvia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LBN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Lebanon"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LSO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Lesotho"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LBR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Liberia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LBY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "Libya"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LIE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "Liechtenstein"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LTU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Lithuania"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LUX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Luxembourg"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MAC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Macao"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MKD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "Macedonia, the former Yugoslav Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MDG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Madagascar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MWI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "Malawi"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MYS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Malaysia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MDV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Maldives"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MLI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Mali"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MLT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Malta"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MHL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Marshall Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MTQ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Martinique"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MRT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Mauritania"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MUS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Mauritius"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MYT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Mayotte"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MEX",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Mexico"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "FSM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Micronesia, Federated States of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MDA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Moldova, Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MCO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Monaco"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Mongolia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MNE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Montenegro"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MSR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Montserrat"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MAR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Morocco"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MOZ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "Mozambique"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MMR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "Myanmar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NAM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Namibia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NRU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Nauru"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NPL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Nepal"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NLD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "Netherlands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NCL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "New Caledonia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NZL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "New Zealand"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NIC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Nicaragua"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NER",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Niger"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NGA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Nigeria"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NIU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Niue"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NFK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Norfolk Island"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MNP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Northern Mariana Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "NOR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Norway"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "OMN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Oman"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PAK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Pakistan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PLW",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Palau"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PSE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Palestinian Territory, Occupied"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PAN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Panama"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PNG",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Papua New Guinea"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PRY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Paraguay"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PER",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Peru"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PHL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "Philippines"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PCN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Pitcairn"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "POL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "Poland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PRT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Portugal"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "PRI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Puerto Rico"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "QAT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Qatar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "REU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "R\xE9union"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ROU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "Romania"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "RUS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Russian Federation"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "RWA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Rwanda"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "BLM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Saint Barth\xE9lemy"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SHN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "Saint Helena, Ascension and Tristan da Cunha"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "KNA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Saint Kitts and Nevis"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LCA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Saint Lucia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "MAF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Saint Martin (French part)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SPM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Saint Pierre and Miquelon"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VCT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Saint Vincent and the Grenadines"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "WSM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "Samoa"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SMR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "San Marino"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "STP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Sao Tome and Principe"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SAU",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Saudi Arabia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SEN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Senegal"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SRB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Serbia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SYC",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Seychelles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SLE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Sierra Leone"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SGP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Singapore"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SXM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Sint Maarten (Dutch part)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SVK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "Slovakia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SVN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Slovenia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SLB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Solomon Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SOM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Somalia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ZAF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, "South Africa"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SGS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "South Georgia and the South Sandwich Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SSD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "South Sudan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ESP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "Spain"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "LKA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "Sri Lanka"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SDN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Sudan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Suriname"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SJM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Svalbard and Jan Mayen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SWZ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Swaziland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SWE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Sweden"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "CHE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Switzerland"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "SYR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Syrian Arab Republic"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TWN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "Taiwan, Province of China"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TJK",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Tajikistan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TZA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Tanzania, United Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "THA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "Thailand"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TLS",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Timor-Leste"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TGO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Togo"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TKL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "Tokelau"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TON",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Tonga"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TTO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Trinidad and Tobago"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TUN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Tunisia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TUR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "Turkey"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TKM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, "Turkmenistan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TCA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Turks and Caicos Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "TUV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "Tuvalu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "UGA",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "Uganda"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "UKR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Ukraine"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ARE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "United Arab Emirates"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "GBR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "United Kingdom"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "USA",
        selected: "selected",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "United States"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "UMI",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "United States Minor Outlying Islands"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "URY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Uruguay"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "UZB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "Uzbekistan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VUT",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "Vanuatu"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VEN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Venezuela, Bolivarian Republic of"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VNM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "Viet Nam"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VGB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Virgin Islands, British"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "VIR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "Virgin Islands, U.S."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "WLF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Wallis and Futuna"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ESH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "Western Sahara"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "YEM",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Yemen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ZMB",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "Zambia"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
        value: "ZWE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "Zimbabwe")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "fav_artist",
        id: "artistSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Favorite Artist"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "fav_artist",
        id: "artistSignup",
        onChange: this.handleChange.bind(this, "fav"),
        value: this.state.fields["fav"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "greenCheck",
        id: "artistCheck",
        style: {
          color: "green"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "\u2713"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "signupButton",
        onClick: this.contactSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "REGISTER")))))));
    }
  }, {
    key: "isNumberKeyMonth",
    value: function isNumberKeyMonth(e) {
      var re = /^[0-9\b]+$/;

      if (e.target.value == '' || re.test(e.target.value)) {
        this.setState({
          month: e.target.value
        });
      } else {
        return false;
      }
    }
  }, {
    key: "isNumberKeyYear",
    value: function isNumberKeyYear(e) {
      var re = /^[0-9\b]+$/;

      if (e.target.value == '' || re.test(e.target.value)) {
        this.setState({
          year: e.target.value
        });
      } else {
        return false;
      }
    }
  }, {
    key: "isNumberKeyDay",
    value: function isNumberKeyDay(e) {
      var re = /^[0-9\b]+$/;

      if (e.target.value == '' || re.test(e.target.value)) {
        this.setState({
          day: e.target.value
        });
      } else {
        return false;
      }
    }
  }, {
    key: "isNumberKeyPhone",
    value: function isNumberKeyPhone(e) {
      var re = /^[0-9\b]+$/;

      if (e.target.value == '' || re.test(e.target.value)) {
        this.setState({
          phone: e.target.value
        });
      } else {
        return false;
      }
    }
  }, {
    key: "checkMale",
    value: function checkMale(field, e) {
      console.log('the lion');
      var maleColor = document.getElementById('maleCheck').style.backgroundColor;
      var femaleColor = document.getElementById('femaleCheck').style.backgroundColor;

      if (femaleColor === 'white') {} else {
        document.getElementById('checkboxTextMale').style.color = 'white';
        document.getElementById('maleCheck').style.backgroundColor = 'black';
        document.getElementById('checkboxTextFemale').style.color = 'black';
        document.getElementById('femaleCheck').style.backgroundColor = 'white';
        var fields = this.state.fields;
        fields[field] = 'male';
        this.setState({
          fields: fields
        });
      }
    }
  }, {
    key: "checkFemale",
    value: function checkFemale(field, e) {
      console.log('the lioness');
      var femaleColor = document.getElementById('femaleCheck').style.backgroundColor;
      var maleColor = document.getElementById('maleCheck').style.backgroundColor;

      if (maleColor === 'white') {} else {
        document.getElementById('checkboxTextFemale').style.color = 'white';
        document.getElementById('femaleCheck').style.backgroundColor = 'black';
        document.getElementById('checkboxTextMale').style.color = 'black';
        document.getElementById('maleCheck').style.backgroundColor = 'white';
        var fields = this.state.fields;
        fields[field] = 'female';
        this.setState({
          fields: fields
        });
      }
    }
  }, {
    key: "handleValidation",
    value: function handleValidation() {
      console.log('vietnam');
      var fields = this.state.fields;
      var errors = {};
      var formIsValid = true; //Name

      if (!fields["first_name"]) {
        console.log('vietnamNoName');
        formIsValid = false;
        errors["first_name"] = "You can't leave this blank";
      }

      if (typeof fields["first_name"] !== "undefined") {
        console.log('vietnamName');

        if (!fields["first_name"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["first_name"] = "Only letters";
        }
      } //Name


      if (!fields["last_name"]) {
        console.log('vietnamNoLastName');
        formIsValid = false;
        errors["last_name"] = "You can't leave this blank";
      }

      if (typeof fields["last_name"] !== "undefined") {
        console.log('vietnamLastName');

        if (!fields["last_name"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["last_name"] = "Only letters";
        }
      } //Email


      if (!fields["email"]) {
        console.log('vietnamNoEmail');
        formIsValid = false;
        errors["email"] = "You can't leave this blank";
      }

      if (typeof fields["email"] !== "undefined") {
        console.log('vietnamEmail');
        var lastAtPos = fields["email"].lastIndexOf('@');
        var lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && fields["email"].length - lastDotPos > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      } // Phone


      if (!fields["phone"]) {
        console.log('vietnamNoPhone');
        formIsValid = false;
        errors["phone"] = "Cannot be empty";
      }

      if (typeof fields["phone"] !== "undefined") {}

      console.log(this.state);
      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  }, {
    key: "contactSubmit",
    value: function contactSubmit(e) {
      e.preventDefault();

      if (this.handleValidation()) {
        console.log('7');
        alert("Thank you! You'll be receiving a confirmation email shortly.");
        console.log(this.state);
        location.reload();
      } else {}
    }
  }, {
    key: "handleChange",
    value: function handleChange(field, e) {
      var fields = this.state.fields;
      fields[field] = e.target.value;
      var firstCheck = document.getElementById("firstNameCheck");
      var lastCheck = document.getElementById("lastNameCheck");
      var emCheck = document.getElementById("emailCheck");
      var phCheck = document.getElementById("phoneCheck");
      var favCheck = document.getElementById("artistCheck");
      var birthCheck = document.getElementById("birthCheck");

      if (fields['first_name']) {
        if (fields["first_name"].length > 1) {
          firstCheck.style.display = "block";
        } else {
          firstCheck.style.display = "none";
        }
      }

      if (fields['last_name']) {
        if (fields["last_name"].length > 1) {
          lastCheck.style.display = "block";
        } else {
          lastCheck.style.display = "none";
        }
      }

      if (fields['email']) {
        if (this.email(fields['email']) === true) {
          emCheck.style.display = "block";
        } else {
          emCheck.style.display = "none";
        }
      }

      if (fields['phone']) {
        if (this.phone(fields['phone']) === true) {
          phCheck.style.display = "block";
        } else {
          phCheck.style.display = "none";
        }
      }

      if (fields['fav']) {
        if (fields["fav"].length > 1) {
          artistCheck.style.display = "block";
        } else {
          artistCheck.style.display = "none";
        }
      }

      this.setState({
        fields: fields
      });
    }
  }, {
    key: "email",
    value: function email(value) {
      return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
    }
  }, {
    key: "phone",
    value: function phone(value) {
      console.log(value);
      return /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/i.test(value);
    } // dob(value){
    // 	var d = /\d{4}\/\d{1,2}\/\d{1,2}/;		
    // 	return d.test(value);
    // }

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var selector = document.getElementById("phoneSignUp");
      var im = new Inputmask({
        "mask": "(999) 999-9999"
      });
      im.mask(selector);
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "./components/terms.js":
/*!*****************************!*\
  !*** ./components/terms.js ***!
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/peterhahn/src/new/audio-boy-mock/components/terms.js";






var Terms =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Terms, _React$Component);

  function Terms() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Terms);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Terms).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Terms, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "LAST UPDATED:  May 24, 2019", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "centerWords",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Terms of Use"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), "Please read this Terms of Use agreement carefully.  Your use of the Site (as defined below) constitutes your agreement to this Terms of Use agreement.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), "This site (together with any successor site(s) and all Services (as defined below), the \u201CSite\u201D) is operated by Audio-Boy (\u201Cwe,\u201D \u201Cus\u201D).  We provide Site users with access to content and services related to us and our artists, including music, images, forums, games, text, data and other content (such content and services, collectively, the \u201CServices\u201D).  Your use of the Site is governed by these Terms of Use (this \u201CAgreement\u201D), regardless of how you access the Site (including through the Internet, through Wireless Access Protocol (commonly referred to as \u201CWAP\u201D), through a mobile network, or otherwise). This Agreement is between you and us.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), "PLEASE NOTE:  The Site may include or be used in connection with certain Third Party Applications (as defined in Section 16 below).  Your access to or use of such Third Party Applications may be governed by additional terms and conditions that are not set forth in this Agreement and that are made available by the particular providers of such Third Party Applications.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), "1.         Acceptance of Terms.  By using the Site, you agree to the terms of this Agreement and to any additional rules and guidelines that we post on the Site.  We may make changes to this Agreement from time to time; we may notify you of such changes by any reasonable means, including by posting the revised version of this Agreement on the Site.  You can determine when we last changed this Agreement by referring to the \u201CLAST UPDATED\u201D legend above.  Your use of the Site following changes to this Agreement will constitute your acceptance of those changes; provided, however, any material change to this Agreement shall not apply retroactively to any claim or dispute between you and us in connection with this Agreement that arose prior to the \u201CLAST UPDATED\u201D date applicable to that version of this Agreement in which we included such material change.  We may, at any time, modify or discontinue all or part of the Site; charge, modify or waive fees required to use the Site; or offer opportunities to some or all Site users.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), "2.         Jurisdiction.  The Site is controlled and/or operated from the United States, and is not intended to subject us to non-U.S. jurisdiction or laws, except as otherwise expressly stated in this Agreement.  The Site may not be appropriate or available for use in some jurisdictions outside of the United States.  If you access the Site, you do so at your own risk, and you are responsible for complying with all local laws, rules and regulations.  We may limit the Site\u2019s availability, in whole or in part, to any person, geographic area or jurisdiction we choose, at any time and in our sole discretion.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), "3.         Information You Submit.  Your submission of information through the Site is governed by our Privacy Policy, which is located at www.audio-boy.com/privacy-policy  (the \u201CPrivacy Policy\u201D).  Further, to the extent that you submit any personally identifiable information to any third party (for example, a Provider (as defined in Section 6(b) below)) in connection with the Site (for example, via a Third Party Application, as defined in Section 16 below), such third party\u2019s collection, use and disclosure of such information may be governed by its own privacy policy, and not by our Privacy Policy.  In any event, we are not responsible for the information collection, usage and disclosure practices of third parties.  You agree that all information you provide to us is true, accurate and complete, and you will maintain and update such information regularly.  If you choose to make any of your personally identifiable or other information publicly available on the Site, you do so at your own risk.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), "4.         Rules of Conduct.  In using the Site, you agree to obey the law, respect the rights of others and avoid objectionable, defamatory or disruptive behavior.  In addition, you will comply with the following \u201CRules of Conduct\u201D as updated from time to time by us.  You will not:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), "\xB7          Post, transmit, or otherwise make available, through or in connection with the Site:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), "o        Anything that is or may be (a) threatening, harassing, degrading, hateful or intimidating; (b) defamatory; (c) fraudulent or tortious; (d) obscene, indecent, pornographic or otherwise objectionable; or (e) protected by copyright, trademark, trade secret, right of publicity or other proprietary right without the express prior consent of the owner of such right.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), "o        Any material that would give rise to criminal or civil liability; that encourages conduct that constitutes a criminal offense; that promotes gambling; or that encourages or provides instructional information about illegal activities or activities such as \u201Chacking,\u201D \u201Ccracking\u201D or \u201Cphreaking.\u201D", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), "o        Any virus, worm, Trojan horse, Easter egg, time bomb, spyware or other computer code, file, or program that is harmful or invasive or may or is intended to damage or hijack the operation of, or to monitor the use of, any hardware, software or equipment.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), "o        Any unsolicited or unauthorized advertising, promotional materials, \"junk mail,\" \"spam,\" \"chain letter,\" \"pyramid scheme\" or investment opportunity, or any other form of solicitation.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), "o        Any material non-public information about a company without the proper authorization to do so.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), "\xB7          Use the Site for any fraudulent or unlawful purpose.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), "\xB7          Use the Site to defame, abuse, harass, stalk, threaten or otherwise violate the legal rights of others, including without limitation others\u2019 privacy rights or rights of publicity, or harvest or collect personally identifiable information about other users of the Site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), "\xB7          Impersonate any person or entity, including any of our (or our affiliates\u2019) representatives; falsely state or otherwise misrepresent your affiliation with any person or entity; or express or imply that we endorse any statement or posting you make.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), "\xB7          Interfere with or disrupt the operation of the Site or the servers or networks used to make the Site available; or violate any requirements, procedures, policies or regulations of such networks.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), "\xB7          Restrict or inhibit any other person from using the Site (including by hacking or defacing any portion of the Site).", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), "\xB7          Use the Site to advertise or offer to sell or buy any goods or services without our express prior written consent.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), "\xB7          Reproduce, duplicate, copy, sell, resell or otherwise exploit for any commercial purposes, any portion of, use of, or access to the Site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), "\xB7          Except as expressly permitted by applicable law, modify, adapt, translate, reverse engineer, decompile or disassemble any portion of the Site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), "\xB7          Remove any copyright, trademark or other proprietary rights notice from the Site or materials originating from the Site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), "\xB7          Frame or mirror any part of the Site without our express prior written consent.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), "\xB7          Create a database by systematically downloading and storing all or any Site content.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), "\xB7          Use any robot, spider, site search/retrieval application or other manual or automatic device to retrieve, index, \"scrape,\" \"data mine\" or in any way reproduce or circumvent the navigational structure or presentation of the Site, without our express prior, written consent.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), "We may terminate your use of the Site for any conduct that we consider to be inappropriate, or for your breach of this Agreement, including the Rules of Conduct (including, without limitation, if you repeatedly engage in copyright infringement via or in connection with the Site).", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), "5.         Registration.  You may need to register to use any part(s) of the Site.  We may reject, or require that you change, any user name, password or other information that you provide to us in registering.  Your user name and password are for your personal use only and should be kept confidential; you are responsible for any use of your user name and password, and you agree to promptly notify us of any confidentiality breach or unauthorized use of your user name and password, or your Site account.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), "6.         Submissions.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), "a.         Generally.  The Site may contain areas where you can post information and materials, including, without limitation, text, images, photographs, graphics, music, videos, audiovisual works, data, files, links and other materials (each, a \u201CSubmission\u201D).  For purposes of clarity, you retain ownership of any Submissions that you post, subject to the terms and conditions of this Agreement (including the license grant in Section 6(b) below).", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), "b.         License Grant.  For each Submission that you post, you hereby grant to us a world-wide, royalty free, fully paid-up, non-exclusive, perpetual, irrevocable, transferable, and fully sublicensable (through multiple tiers) license, without additional consideration to you or any third party, to:  (i) reproduce, distribute, transmit, communicate to the public, perform and display (publicly or otherwise), edit, modify, adapt, create derivative works from and otherwise use such Submission, in any format or media now known or hereafter developed, on or in connection with the Site or any of our (or our Affiliates\u2019) similar services or products (e.g., any web sites, and any desktop, mobile or other applications, widgets or APIs) (such services or products, collectively, the \u201CSite-Related Services\u201D); (ii) exercise all trademark, publicity and other proprietary rights with regard to such Submission; (iii) use your name, photograph, portrait, picture, voice, likeness and biographical information as provided by you in connection with your Submission for any promotional purposes related to the Site or the Site-Related Services, in each case, in connection with your Submission; and (iv) use your Submission (including the contents thereof) for any promotional or other business purposes related to the Site, the Site-Related Services, and Artists.  For the purpose of clarification, nothing in this Agreement shall be deemed to authorize you to incorporate into any Submission any content or material owned by us, our Affiliates or our respective artists (\u201CArtists\u201D), directors, officers, employees, agents and representatives (\u201CRepresentatives\u201D) and licensors and service providers (collectively, \u201CProviders\u201D).  IF YOU DO NOT WISH TO GRANT THE RIGHTS GRANTED IN THIS SECTION 6, PLEASE DO NOT POST ANY SUBMISSIONS ON THE SITE.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), "c.         Disclaimers.  It is possible that Site visitors will post information or materials on the Site that are wrong or misleading or that otherwise violate this Agreement.  We, our Affiliates and our respective Artists, Representatives and Providers do not endorse and are not responsible for any information or materials made available through the Site or your use of such information or materials.  All Submissions will be deemed to be non-confidential and may be used by us (i) without any confidentiality or other non-disclosure obligations and (ii) without attribution to you or any third party.  We reserve the right, in our sole discretion and at any time, to set limits on the number and size of any Submissions that may be posted on the Site or the amount of storage space available for Submissions.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), "d.         Acknowledgement.  You hereby acknowledge and agree that (i) you have received good and valuable consideration in exchange for the rights granted by you hereunder in and to any Submission that you post, including, without limitation, the ability to participate in activities on the Site and the possibility that publicity or favorable exposure may arise from our or our Affiliates\u2019 use of such Submission or any derivative works incorporating or embodying such Submission; and (ii) you are not entitled to any further compensation for any use or other exploitation of such Submission by us or our Affiliates or any other party (including, without limitation, our or our Affiliates\u2019 Artists, Representatives and Providers) pursuant to the rights in such Submission that have been granted hereunder and/or that are available under applicable law.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), "e.         Representations and Warranties.  You hereby represent and warrant that: (i) you have the legal right and authority to enter into this Agreement; (ii) you solely own, or otherwise have the full right and permission to exploit, all of the rights in, to, and under any Submission that you post and to grant the rights and licenses set forth herein, and with respect to any third party materials that appear in or are otherwise incorporated or embodied in any Submission that you post, you have obtained express, written clearances from all owners of and rights holders in such third party materials as necessary to grant the rights and licenses set forth herein; (iii) you have obtained the written consent, release, and/or permission of every identifiable individual who appears in any Submission that you post, to use such individual\u2019s name and likeness for purposes of using and otherwise exploiting such Submission(s) in the manner contemplated by the Agreement, or, if any such identifiable individual is under the age of eighteen (18), you have obtained such written consent, release and/or permission from such individual\u2019s parent or guardian (and you agree to provide to us a copy of any such consents, releases and/or permissions upon our request); (iv) any Submission that you post, and the use thereof by us, our Affiliates, and our and their respective designees (including, without limitation, our and their respective Artists, Representatives and Providers), do not and shall not infringe upon or violate any patent, copyright, trademark, trade secret, or other intellectual property rights or other rights of any third party; (v) any Submission that you post is not confidential and does not contain any confidential information; and (vi) in creating, preparing and posting any Submission, you (A) have complied and will comply in all respects with all applicable laws, rules (including, without limitation, our Rules of Conduct), and regulations and (B) have not violated and will not violate any understanding by which you are explicitly or implicitly bound (including without limitation any agreement with any third party).  If you do post a Submission that contains the likeness of an identifiable individual, we strongly encourage you not to include any identifying information (such as the individual\u2019s name or address) within such Submission.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), "f.          Waiver; Further Assurances; Indemnity.  To the extent permitted under applicable law, you agree to forever release, discharge and waive all claims against us, our Affiliates and our and their respective Artists, Representatives and Providers from, and covenant not to initiate, file, maintain, or proceed upon any suit, claim, demand, or cause of action against us, our Affiliates and our and their respective Artists, Representatives and Providers with respect to, any and all claims, demands, actions, losses, costs, damages, liabilities, judgments, settlements and expenses (including, without limitation, reasonable attorneys\u2019 fees) that relate in any way to this Agreement and/or the use of any Submission in a manner consistent with the rights granted under this Agreement, including, without limitation, any claim for idea misappropriation.  Additionally, to the extent permitted under applicable law, you hereby waive any and all rights that you may have under laws worldwide that concern \u201Cmoral rights\u201D or \u201Cdroit moral,\u201D or similar rights, in connection with any Submission that you post (and you hereby represent and warrant that you have obtained clear, express written waivers from any applicable third parties with respect to any and all rights that such third parties may have under such laws in connection with any Submission that you post).  At any time upon our request, you shall:  (i) take or cause to be taken all such actions as we may reasonably deem necessary or desirable in order for us and our Affiliates to obtain the full benefits of this Agreement and any licenses granted by you hereunder, and (ii) execute a non-electronic hard copy of this Agreement.  Without limiting any other provision herein, you agree to indemnify us, our Affiliates, and our and their respective Artists, Representatives and Providers as further set forth herein, including in Section 20 below.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), "g.         No Obligation to Use.  For the purpose of clarification, it shall be in our sole discretion whether or not to exercise any right granted to us under this Agreement, and we shall have no obligation to use or otherwise exploit any Submission.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), "7.         Unsolicited Submissions.  Notwithstanding anything to the contrary in this Agreement, we and our Affiliates do not accept, invite or consider unsolicited submissions of ideas, proposals or suggestions (\u201CUnsolicited Submissions\u201D), whether related to the Site, our Products or otherwise.  We do not treat Unsolicited Submissions as confidential, and any Unsolicited Submission will become our or our Affiliates\u2019 sole property.  We and our Affiliates have no obligations with respect to Unsolicited Submissions and may use them for any purpose whatsoever without compensation to you or any other person.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), "8.         Monitoring.  We may, but have no obligation to:  (a) monitor, evaluate or alter Submissions before or after they appear on the Site; (b) seek to verify that all rights, consents, releases and permissions in or relating to such Submission have been obtained by you in accordance with your representations above; (c) refuse, reject or remove any Submission at any time or for any reason (including, without limitation, if we determine, in our sole discretion, that all rights, consents, releases and permissions have not been obtained by you despite your representations above).  You agree to cooperate with us in our verification or inquiries related to the foregoing.  We may disclose any Submissions and the circumstances surrounding their transmission to anyone for any reason or purpose, and in accordance with our Privacy Policy.  If you become aware of any unlawful, offensive or objectionable material(s) on the Site (except for material that infringes copyright, which is addressed in Section 26 below), contact us at privacypolicy@wmg.com with your name and address, a description of the material(s) at issue and the URL or location of such materials.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), "9.         Products.  All rights in any products available through the Site, such as music, ring tones, ring back tones, SMS tones, images (e.g., screen savers), video, artwork, text, software and other copyrightable materials (collectively, the \u201CProducts\u201D) are owned by us, our Affiliates and/or our (or their) licensors.  If a separate agreement provided by us or an Affiliate governs a particular Transaction (as defined in Section 10 below) or Product, or your use of a particular Product, and the terms of such separate agreement conflict with the terms of this Agreement, the terms of such separate agreement will govern such transaction or use.  Subject to your compliance with the terms and conditions of this Agreement and any other applicable terms and conditions imposed by us, our Affiliates and/or our licensors, you have a limited right to use those Products that you purchase or access through the Site solely for your personal, noncommercial use in accordance with the terms and conditions of this Agreement and any other terms and conditions that may apply to such Products, which right you cannot sublicense to others.  Any burning or exporting capabilities, if any, of any Product shall not constitute a grant or waiver of any of our rights or those of any copyright or other rights owners in such Product, any other Product or any content, sound recording, underlying musical composition, artwork or other copyrightable matter embodied in or associated with such Product or any other Product.  You understand that the Site and the Products may include and/or rely on a security framework using technology that protects digital information and imposes usage rules established by us, our Affiliates and our (or their) licensors, and you hereby agree to abide by such usage rules, including those set forth below.  Unless we expressly provide otherwise, all Transactions, all Products and your use of such Products are subject to this Agreement.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), "10.        Purchases.  If you wish to purchase any Products made available through the Site (each such purchase, a \u201CTransaction\u201D), you may be asked to supply certain information in connection with such Transaction, including without limitation your credit card number or other payment account number (for example, your wireless account number), your billing address, and your shipping information.  BY INITIATING A TRANSACTION, YOU REPRESENT AND WARRANT THAT YOU (A) ARE EIGHTEEN (18) YEARS OF AGE OR OLDER AND (B) HAVE THE LEGAL RIGHT TO USE THE PAYMENT MEANS SELECTED BY YOU.  By submitting such information, you grant us the right to use such information in accordance with our Privacy Policy, including, without limitation, by providing such information to third parties for purposes of facilitating the completion of Transactions initiated by you or on your behalf.  Verification of information may be required prior to the acknowledgment or completion of any Transaction.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), "Descriptions and images of, and references to, Products on the Site do not imply our endorsement of such Products.  Except to the extent prohibited by applicable law, we reserve the right, with or without prior notice, to change such descriptions, images, and references; to limit the available quantity of any Product; to honor, or impose conditions on the honoring of, any coupon, coupon code, promotional code or other similar promotions; to bar any user from making any or all Transaction(s); and/or to refuse to provide any user with any Product.  Price and availability of any Product offered through the Site are subject to change without notice.  In the event that a Product is listed at an incorrect price or with other incorrect information, we have the right to refuse or cancel any Transaction for such Product.  You shall pay all charges that may be incurred by you or on your behalf through the Site, at the price(s) in effect when such charges are incurred, including without limitation all shipping and handling charges, and any applicable network, data or other charges in respect of mobile downloads.  In addition, you remain responsible for any taxes (including, if applicable, VAT and/or any import duties) that may be applicable to your Transaction(s).", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), "Except to the extent applicable law provides otherwise, all sales through the Site are final, and all charges from those sales are nonrefundable, except as otherwise expressly set forth in this Agreement.  We or our third party designees may automatically process charges against your selected payment method on the receipt page or when we provide you with a \"Download Now\" link.  We or our third party designees will inform you if all or any portion of your order is canceled or if additional or different information is required to accept your order.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), "11.        Product Delivery.  Except to the extent prohibited by applicable law, we reserve the right to change Product delivery options without notice.  On occasion, technical and other problems may delay or prevent delivery of a particular Product.  Except to the extent that applicable law provides otherwise, your sole and exclusive remedy with respect to any Product that is not delivered within a reasonable period will be either replacement of such Product or a refund of the purchase price paid for such Product, as determined by us in our sole discretion. ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), "12.        Usage Restrictions for Products.  All Products you purchase, obtain or access on or through the Site are solely for your personal, non-commercial use.  Except as otherwise expressly provided herein, you may not reproduce, publish, transmit, distribute, display, broadcast, re-broadcast, modify, create derivative works from, sell or participate in any sale of or exploit in any way, in whole or in part, directly or indirectly, any of the Products or any related software.  Except as permitted under applicable law, you may not reverse engineer, decompile, disassemble, modify or disable any Products or any copyright protection or use limitation systems associated with the Products.  You may not play and then re-digitize any Products, or upload any Products or derivatives thereof to the Internet.  Unless expressly permitted by us (e.g., a \u201CCreate Your Own Video\u201D contest offered on the Site), you may not use the Products in conjunction with any other content, including without limitation, in conjunction with any other Products (e.g., to provide sound for video).  You may not transfer, sell or offer to sell the Products, including, without limitation, posting any Product for auction on any Internet auction site or \u201Ctrading\u201D the Products for money, goods or services.  You are not granted any commercial sale, resale, reproduction, distribution or promotional use rights in connection with Products.  Additionally, the following usage restrictions apply based on the type of Product you are purchasing or obtaining through the Site:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), "PRODUCT TYPE", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), "TERMS OF USAGE", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), "Full Permanent Non-MP3 Digital Audio Downloads", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), "Personal Computers:  You may not activate any audio track purchased or obtained via the Site on more than three (3) traditional personal computers.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), "CD Burning:  You may not make more than seven (7) burns of a particular playlist (such as an album) to a CD.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), "Portable Devices:  You may not transfer audio tracks purchased or obtained via the Site from personal computers to more than three (3) traditional portable devices (or to any cellular telephone or other device capable of cellular or WAP communication).", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), "Full Permanent Digital Video Downloads", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), "Personal Computers:  You may not activate each video purchased or obtained via the Site on more than three (3) traditional personal computers.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), "No DVD Burning:  You may not burn to DVD any digital copy of a purchased video.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), "Portable Devices:  You may not transfer videos purchased or obtained via the Site from personal computers to more than three (3) traditional portable devices (or to any cellular telephone or other device capable of cellular or WAP communication).", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), "Digital Video Rentals", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), "Limited-time downloads or limited-access streaming to a personal computer or portable device, including mobile devices, is permitted for a period of 24 hours or such other limited time period as specified in the particular offering pursuant to which the rental occurs.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), "Other", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), "Any other types of digital products sold or offered on or in connection with this Site are subject to the terms set forth in the specific offering pursuant to which the sale or other type of offering occurs. In the event of a conflict between these Terms of Usage and the terms and conditions set forth in such specific offering, the terms of the specific offering shall govern.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), "13.        Product Requirements; Compatibility.  You acknowledge that use of our Products requires other hardware and software tools (e.g., in the case of full permanent audio downloads, for making copies of Products on physical media and rendering performance of Products on authorized digital player devices), and that such hardware and software, including, without limitation, all charges therefor, are your sole responsibility.  To the extent permissible under applicable law, we, our Affiliates and our (and their) Artists and Representatives or Providers shall not be responsible or liable for the loss or damage of any Product.  Except to the extent prohibited by applicable law, we reserve the right to change at any time, with or without prior notice to you, the software or hardware required to download, transfer, copy and/or use or limit the use of any Products.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), "14.        Rules for Promotions.  Any sweepstakes, contests, raffles or other promotions (collectively, \u201CPromotions\u201D) made available through the Site may be governed by rules that are separate from this Agreement.  If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy.  If the rules for a Promotion conflict with this Agreement, the Promotion rules will apply.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), "15.        Our Proprietary Rights.  We, our Affiliates and our respective licensors and suppliers own the information and materials made available through the Site.  Such information and materials are protected by copyright, trademark, patent and/or other proprietary rights and laws.  Except as expressly authorized in advance by us, you agree not to reproduce, modify, rent, lease, loan, sell, distribute or create derivative works based on, all or any part of the Site or any information or materials made available through the Site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), "We, our Affiliates and/or our respective licensors or suppliers own the trade names, trademarks and service marks on the Site, including without limitation  Audio-Boy and any associated logos.  All trademarks and service marks on the Site not owned by us or our Affiliates are the property of their respective owners.  You may not use our trade names, trademarks and service marks in connection with any product or service that is not ours, or in any manner that is likely to cause confusion.  Nothing contained on the Site should be construed as granting any license or right to use any trade names, trademarks or service marks without express prior written consent of the owner.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), "PLEASE NOTE THAT UNAUTHORIZED USE OF ANY SERVICE OR PRODUCT, INCLUDING, WITHOUT LIMITATION, ANY SOFTWARE USED BY THE SERVICES, MAY SUBJECT YOU TO CIVIL AND CRIMINAL PENALTIES, (INCLUDING, WITHOUT LIMITATION, POSSIBLE MONETARY DAMAGES), INCLUDING, WITHOUT LIMITATION, FOR COPYRIGHT INFRINGEMENT.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), "16.        Third Party Applications.  The Site may include third party software applications and services (or links thereto) that are made available by our Providers (\u201CThird Party Applications\u201D).  Because we do not control Third Party Applications, you agree that neither we nor our Affiliates, nor our respective Artists and Representatives, are responsible or liable for any Third Party Applications, including the performance, accuracy, integrity, quality, legality, usefulness, or safety of, or intellectual property rights relating to, Third Party Applications or their use.  We have no obligation to monitor Third Party Applications, and we may remove or restrict access to any Third Party Applications (in whole or part) from the Site at any time.  The availability of Third Party Applications on the Site does not imply our endorsement of, or our affiliation with any Provider of, such Third Party Applications.  Further, your use of Third Party Applications may be governed by additional terms and conditions that are not set forth in this Agreement or our Privacy Policy (for example, terms and conditions that are made available by Providers themselves in connection with Third Party Applications).  This Agreement does not create any legal relationship between you and Providers with respect to Third Party Applications, and nothing in this Agreement shall be deemed to be a representation or warranty by us, or any of our Affiliates, or our respective Artists, Representatives or Providers, with respect to any Third Party Application.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), "17.        Third Party Content.  The Site may incorporate certain functionality that allows, via the system or network of which the Site is a component, the routing and transmission of, and online access to, certain digital communications and content made available by third parties (\u201CThird Party Content\u201D).  By using such Site functionality, you acknowledge and agree that you are directing us to access and transmit to you Third Party Content associated with such functionality.  Because we do not control Third Party Content, you agree that we are neither responsible nor liable for any Third Party Content, including the accuracy, integrity, quality, legality, usefulness, or safety of, or intellectual property rights relating to, Third Party Content.  We have no obligation to monitor Third Party Content, and we may block or disable access to any Third Party Content (in whole or part) via the Site at any time.  Your access to or receipt of Third Party Content via the Site does not imply our endorsement of, or our affiliation with any provider of, such Third Party Content.  Further, your use of Third Party Content may be governed by additional terms and conditions that are not set forth in this Agreement or our Privacy Policy (for example, terms and conditions that are made available by the providers of such Third Party Content).  This Agreement does not create any legal relationship between you and the providers of such Third Party Content with respect to such Third Party Content, and nothing in this Agreement shall be deemed to be a representation or warranty by us, or any of our Affiliates, or our respective Artists, Representatives or Providers, with respect to any Third Party Content.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), "18.        Links and Feeds.  The Site may provide links to or feeds from other web sites and online resources.  We and our Affiliates are not responsible for and do not endorse such external sites or resources.  Other sites may link to the Site with or without our authorization, and we may block any links to or from the Site.  YOUR ACCESS TO AND USE OF THIRD PARTY WEB SITES, CONTENT AND RESOURCES IS AT YOUR OWN RISK.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), "19.        Limitations of Liability and Disclaimers.  THE SITE AND ALL GOODS, SERVICES, PRODUCTS, THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION AND MATERIALS MADE AVAILABLE THROUGH THE SITE ARE PROVIDED TO YOU \"AS IS\u201D WITHOUT ANY EXPRESS REPRESENTATIONS OR WARRANTIES OF ANY KIND, AND WE, OUR AFFILIATES AND OUR RESPECTIVE ARTISTS, REPRESENTATIVES AND PROVIDERS DISCLAIM ALL STATUTORY OR IMPLIED REPRESENTATIONS, WARRANTIES, TERMS AND CONDITIONS WITH RESPECT TO THE SITE AND ALL GOODS, SERVICES, PRODUCTS, THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION AND MATERIALS MADE AVAILABLE THROUGH THE SITE, INCLUDING THE REPRESENTATIONS AND WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NONINFRINGEMENT AND TITLE.  (CERTAIN PROVIDERS MAY SEPARATELY PROVIDE LIMITED REPRESENTATIONS AND/OR WARRANTIES REGARDING THEIR THIRD PARTY APPLICATIONS; PLEASE CHECK WITH SUCH PROVIDERS FOR FURTHER INFORMATION.)  WE MAKE NO REPRESENTATION OR WARRANTY THAT THE SITE (OR ANY PART THEREOF), OR ANY GOODS, SERVICES, PRODUCTS, THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION OR MATERIALS MADE AVAILABLE THROUGH THE SITE IS OR WILL BE ACCURATE, COMPLETE, ERROR-FREE, OR COMPATIBLE WITH ANY PARTICULAR SOFTWARE OR HARDWARE. FURTHER, WE MAKE NO REPRESENTATION OR WARRANTY THAT ANY SOFTWARE, HARDWARE, EQUIPMENT OR OTHER DEVICE OR SYSTEM USING THE SITE OR ANY GOODS, SERVICES, PRODUCTS, THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION OR MATERIALS MADE AVAILABLE THROUGH THE SITE WILL FUNCTION IN ANY MANNER.  YOU HEREBY AGREE THAT IT IS YOUR SOLE RESPONSIBILITY TO (A) OBTAIN AND PAY FOR ANY SOFTWARE, HARDWARE OR SERVICES (INCLUDING INTERNET CONNECTIVITY) NEEDED TO USE THE SITE AND (B) ENSURE THAT ANY SOFTWARE, HARDWARE, EQUIPMENT, DEVICES, SYSTEMS OR SERVICES THAT YOU USE WILL FUNCTION CORRECTLY WITH THE SITE AND ANY GOODS, SERVICES, PRODUCTS, THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION OR MATERIALS MADE AVAILABLE THROUGH THE SITE.  YOU AGREE THAT YOU MUST EVALUATE, AND THAT YOU BEAR ALL RISKS ASSOCIATED WITH, THE USE OF THE SITE, INCLUDING ANY RELIANCE ON THE ACCURACY, COMPLETENESS, OR USEFULNESS OF ANY THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION OR MATERIALS MADE AVAILABLE THROUGH THE SITE.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), "WE, OUR AFFILIATES AND OUR RESPECTIVE ARTISTS, REPRESENTATIVES AND PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES OF ANY KIND IN CONNECTION WITH THE SITE, NOR FOR ANY DAMAGES FOR LOSS OF PROFITS, LOSS OR INTERRUPTION OF BUSINESS, LOSS OF USE, LOSS OF DATA, LOSS OF OTHER INTANGIBLES, LOSS OF SECURITY OF INFORMATION YOU HAVE PROVIDED IN CONNECTION WITH YOUR USE OF THE SITE (INCLUDING, WITHOUT LIMITATION, IN CONNECTION WITH YOUR USE OR RECEIPT OF ANY THIRD PARTY APPLICATIONS OR THIRD PARTY CONTENT), OR UNAUTHORIZED INTERCEPTION OF ANY SUCH INFORMATION BY THIRD PARTIES, EVEN IF ADVISED IN ADVANCE OF SUCH DAMAGES OR LOSSES.  FURTHER, WE, OUR AFFILIATES AND OUR RESPECTIVE ARTISTS, REPRESENTATIVES AND PROVIDERS WILL NOT BE LIABLE FOR DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF THE SITE OR FROM ANY THIRD PARTY APPLICATIONS, THIRD PARTY CONTENT, INFORMATION OR MATERIALS ON THE SITE.  YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THE SITE IS TO STOP USING THE SITE.  OUR MAXIMUM LIABILITY FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE) OR OTHERWISE SHALL BE THE TOTAL AMOUNT PAID BY YOU TO US TO ACCESS AND USE THE SITE.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), "IT IS POSSIBLE THAT APPLICABLE LAW MAY NOT ALLOW FOR LIMITATIONS ON CERTAIN IMPLIED WARRANTIES OR EXCLUSIONS OR LIMITATIONS OF CERTAIN DAMAGES; SOLELY TO THE EXTENT THAT SUCH LAW APPLIES TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), "While we try to maintain the security of the Site, we do not guarantee that the Site or any Third Party Applications will be secure or that any use of the Site or any Third Party Applications will be uninterrupted.  Additionally, third parties may make unauthorized alterations to the Site or any Third Party Applications.  If you become aware of any unauthorized third party alterations to the Site, contact us at privacypolicy@wmg.com with a description of the material(s) at issue and the URL or location of such materials.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), "20.        Indemnity.  Except to the extent prohibited under applicable law, you agree to defend, indemnify and hold harmless us, our Affiliates and our and their respective Artists, Representatives and Providers, from and against all claims, losses, costs and expenses (including attorneys fees) arising out of (a) your use of, or activities in connection with, the Site; (b) any violation of this Agreement by you; (c) any use or other exploitation, or failure or omission to use or otherwise exploit, any Submission (including any portion thereof) that you post; or (d) any claim that your Submission or any use or exploitation thereof caused damage to or infringed upon or violated the rights of a third party, including without limitation past, present or future infringement, misappropriation, libel, defamation, invasion of privacy or right of publicity or violation of rights related to the foregoing.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), "21.        Termination.  This Agreement is effective until terminated.  We may, at any time and for any reason, terminate your access to or use of:  (a) the Site, (b) your user name and password or (c) any files or information associated with your user name and password.  If we terminate your access to the Site, you will not have the right to bring claims against us, our Affiliates or our respective Artists, Representatives and Providers with respect to such termination.  We and our Affiliates and our respective Artists, Representatives and Providers, shall not be liable for any termination of your access to the Site or to any such information or files, and shall not be required to make such information or files available to you after any such termination.  We may take steps that we believe are appropriate to enforce or verify compliance with any part of this Agreement (including our right to cooperate with any legal process relating to your use of the Site, any Products or any third party claim that your use of the Site or Products is unlawful or infringes such third party\u2019s rights).  Sections 2, 6-8, 15-23, 25-27 and 29 shall survive any expiration or termination of this Agreement.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), "22.        Governing Law; Dispute Resolution.  You hereby agree that this Agreement (and any claim or dispute arising in connection with this Agreement or your use of the Site) is governed by and shall be construed in accordance with the laws of the State of New York, U.S.A., without regard to its principles of conflicts of law, and you consent to the exclusive jurisdiction of the federal and state courts located in New York, New York, U.S.A., and waive any jurisdictional, venue or inconvenient forum objections thereto.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), "You further agree that the United Nations Convention on the International Sale of Goods will not apply to this Agreement.  You agree that any unauthorized use of the Site, the Products or any related software or materials, or any Third Party Applications, would result in irreparable injury to us, our Affiliates or our respective Artists, Representatives and Providers for which money damages would be inadequate, and in such event we, our Affiliates or our respective Artists, Representatives and Providers, as applicable, shall have the right, in addition to other remedies available at law and in equity, to immediate injunctive relief against you.  Nothing contained in this section or elsewhere in this Agreement shall be construed to limit remedies or relief available pursuant to statutory or other claims that we, our Affiliates or our respective Artists, Representatives and Providers may have under separate legal authority, including, without limitation, any claim for intellectual property infringement.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), "23.        Filtering.  Pursuant to 47 U.S.C. Section 230(d) as amended, we hereby notify you that parental control protections are commercially available that may assist you in limiting access to material that is harmful to minors.  Information about how to protect your child\u2019s privacy online is available at:  http://onguardonline.gov/ .  Please note that we do not endorse any products or services listed at this site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }), "24.        Information or Complaints.  Under California Civil Code Section 1789.3, California users are entitled to the following consumer rights notice:  If you have a question or complaint regarding the Site, please feel free to contact us via e-mail at privacypolicy@wmg.com.  E-mail communications are not necessarily secure, so please do not include credit card information or other sensitive information in any e-mail to us.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), "25.        Forward-Looking Statements.  Statements appearing on the Site that concern us, our Affiliates or our and their management and that are not historical facts are \u201CForward-Looking Statements.\u201D  Forward-Looking Statements are only predictions, and actual future events may differ materially from those discussed in any Forward-Looking Statement.  Various external factors and risks affect our operations, markets, products, services and prices.  These factors and risks are described in our current annual report filed with the SEC and in other filings we make with the SEC.  You can access our most recent SEC filings via the SEC EDGAR system located at www.sec.gov, or you may obtain these filings directly from us at no charge.  We disclaim any obligation or responsibility to update, revise or supplement any Forward-Looking Statement or any other statements appearing on the Site.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), "26.        Claims of Copyright Infringement.  The Digital Millennium Copyright Act of 1998 (the \u201CDMCA\u201D) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under U.S. copyright law.  If you believe in good faith that materials available on the Site infringe your copyright, you (or your agent) may send us a notice requesting that we remove the material or disable access to it.  If you believe in good faith that someone has wrongly filed a notice of copyright infringement against you, the DMCA permits you to send us a counter-notice.  Notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA.  See http://www.copyright.gov for details.  Notices and counter-notices should be sent to:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), "Email: legal@audio-boy.com", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }), "We suggest that you consult your legal advisor before filing a notice or counter-notice.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), "27.        Ability to Enter Into This Agreement.  By using the Site, you affirm that you are of legal age to enter into this Agreement or, if you are not, that you have obtained parental or guardian consent to enter into this Agreement.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), "28.        Contact Us.  If you have any questions regarding the meaning or application of this Agreement, please direct such questions to privacypolicy@wmg.com.  E-mail communications are not necessarily secure, so please do not include credit card information or other sensitive information in any e-mail to us.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), "29.        Miscellaneous.  This Agreement does not create any partnership, joint venture, employer-employee, agency or franchisor-franchisee relationship between you and us.  If any provision of this Agreement is found to be unenforceable, that provision will not affect the validity and enforceability of any other provision.  You may not assign, transfer or sublicense any or all of your rights or obligations under this Agreement without our express prior written consent.  No waiver by either party of any breach or default hereunder will be deemed to be a waiver of any preceding or subsequent breach or default.  This Agreement hereby incorporates by this reference any additional terms that we post on the Site (including, without limitation, our Privacy Policy) and, except as otherwise expressly stated herein, this Agreement is the entire Agreement between you and us relating to the subject matter herein and supersedes any and all prior or contemporaneous written or oral agreements or understandings between you and us relating to such subject matter.  Notices to you may be made via posting to the Site, by e-mail or by regular mail, in our discretion.  We may also provide notice of changes to this Agreement or other matters by displaying such notices or by providing links to such notices.  You agree that a printed version of this Agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this Agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.  We will not be responsible for failure to fulfill any obligation due to causes beyond our control.  Except as expressly set forth in the following sentence, nothing in this Agreement, express or implied, is intended to confer, nor shall anything herein confer on, any person other than the parties and the respective successors or permitted assigns of the parties, any rights, remedies, obligations or liabilities.  Notwithstanding the previous sentence, you agree that our Affiliates and our and their respective Artists, Representatives and those Providers who are content owners and service providers from whom we have obtained a license or other rights to use their content and services, as applicable, in connection with the Site) are third-party beneficiaries under this Agreement with the right to enforce the provisions of this Agreement that directly apply to such parties.  Notwithstanding the immediately preceding sentence, our right to enter into, rescind or terminate any variation, waiver or settlement under this Agreement is not subject to the consent of any third party.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), "All materials \xA9 2019 Audio-Boy unless otherwise noted.  All rights reserved."));
    }
  }]);

  return Terms;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ }),

/***/ "./css/bootstrap.css":
/*!***************************!*\
  !*** ./css/bootstrap.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/mobile.css":
/*!************************!*\
  !*** ./css/mobile.css ***!
  \************************/
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

/***/ "./css/scroller.css":
/*!**************************!*\
  !*** ./css/scroller.css ***!
  \**************************/
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

/***/ "./css/sign-up.css":
/*!*************************!*\
  !*** ./css/sign-up.css ***!
  \*************************/
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

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

var core = module.exports = { version: '2.6.9' };
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

/***/ "./pages/terms-of-use.js":
/*!*******************************!*\
  !*** ./pages/terms-of-use.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_terms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/terms.js */ "./components/terms.js");
/* harmony import */ var _components_layout2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout2 */ "./components/layout2.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/bootstrap.css */ "./css/bootstrap.css");
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/peterhahn/src/new/audio-boy-mock/pages/terms-of-use.js";









var TermsPage = function TermsPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_terms_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TermsPage);

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/terms-of-use.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peterhahn/src/new/audio-boy-mock/pages/terms-of-use.js */"./pages/terms-of-use.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

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

/***/ "inputmask":
/*!****************************!*\
  !*** external "inputmask" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inputmask");

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
//# sourceMappingURL=terms-of-use.js.map