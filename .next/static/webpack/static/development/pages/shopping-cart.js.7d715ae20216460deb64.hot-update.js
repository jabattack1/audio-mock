webpackHotUpdate("static/development/pages/shopping-cart.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart.js */ "./components/cart.js");
/* harmony import */ var _navbar3_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar3.js */ "./components/navbar3.js");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/artist.css */ "./css/artist.css");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_artist_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../css/shoppingCart.css */ "./css/shoppingCart.css");
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_19__);










var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/shopping-cart.js";











var ShoppingCart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(ShoppingCart, _React$Component);

  function ShoppingCart() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ShoppingCart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(ShoppingCart).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {});

    console.log(typeof localStorage);

    if (typeof localStorage === "undefined" || localStorage.getItem('state') === null) {
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
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "ah",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "$"), "l"))));
      } else if (this.state.data.length == undefined) {
        console.log('loca');
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: "1",
          i: "1",
          data: this.state.data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "$"), "l"))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, this.state.data.map(function (data, i) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this2.parsedData, {
            key: i,
            i: i,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }));
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
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
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
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
        }, "$"), "l"))));
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
      if (localStorage.getItem('state') !== null) {
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
  }]);

  return ShoppingCart;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCart);

/***/ })

})
//# sourceMappingURL=shopping-cart.js.7d715ae20216460deb64.hot-update.js.map