webpackHotUpdate("static/development/pages/shopping-cart.js",{

/***/ "./components/cart.js":
false,

/***/ "./components/navbar3.js":
false,

/***/ "./components/shopping-cart.js":
/*!*************************************!*\
  !*** ./components/shopping-cart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-float.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-float.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-float.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.parse-int.js":
false,

/***/ "./node_modules/lodash.throttle/index.js":
false,

/***/ "./node_modules/react-horizontal-scrolling-menu/build/index.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Button.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Element.js":
false,

/***/ "./node_modules/react-scroll/modules/components/Link.js":
false,

/***/ "./node_modules/react-scroll/modules/index.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
false,

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
false,

/***/ "./pages/shopping-cart.js":
/*!********************************!*\
  !*** ./pages/shopping-cart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_shopping_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shopping-cart.js */ "./components/shopping-cart.js");
/* harmony import */ var _components_shopping_cart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_shopping_cart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout3.js */ "./components/layout3.js");
/* harmony import */ var _data_artistList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/artistList.js */ "./data/artistList.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/bootstrap.css */ "./css/bootstrap.css");
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/pages/shopping-cart.js";










var ShoppingCartPage = function ShoppingCartPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout3_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "shoppingList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shopping_cart_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartPage);

/***/ })

})
//# sourceMappingURL=shopping-cart.js.f6811146ce222ad26df8.hot-update.js.map