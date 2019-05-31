webpackHotUpdate("static/development/pages/shopping-cart.js",{

/***/ "./components/shopping-cart.js":
/*!*************************************!*\
  !*** ./components/shopping-cart.js ***!
  \*************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart.js */ "./components/cart.js");
/* harmony import */ var _navbar3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar3.js */ "./components/navbar3.js");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/artist.css */ "./css/artist.css");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_artist_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/shoppingCart.css */ "./css/shoppingCart.css");
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/shopping-cart.js";











var ShoppingCart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ShoppingCart, _React$Component);

  function ShoppingCart() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ShoppingCart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ShoppingCart).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    if (typeof localStorage === "undefined") {
      _this.state = {
        data: ''
      };
    } else if (localStorage.getItem('state') !== null && localStorage.getItem('state') !== 'nothing') {
      var data = localStorage.getItem('state');
      var parsedData = JSON.parse(data);
      _this.state = {
        data: parsedData
      };
    } else {
      _this.state = {
        data: ''
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ShoppingCart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.data === '') {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        })));
      } else if (this.state.data.length == undefined) {
        console.log('loca');
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: "1",
          i: "1",
          data: this.state.data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), ")}"));
      } else {
        console.log('Titacion');
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, this.state.data.map(function (data, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.parsedData, {
            key: i,
            i: i,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }));
        })));
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      console.log('famicon');
      localStorage.clear();
      location.reload();
      localStorage.setItem('state', 'nothing');
      console.log(localStorage.getItem('state'));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }]);

  return ShoppingCart;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCart);

/***/ })

})
//# sourceMappingURL=shopping-cart.js.dd789ea38c8860aadb96.hot-update.js.map