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










var down;

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
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "ah",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxPromo",
          id: "boxPromo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Do you have a promo code?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          id: "promoArrow",
          onClick: this.showPromo,
          src: "https://i.imgur.com/vp4niLu.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion",
          onClick: this.showPopup,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking \"See Details\" where the promotion was found online or in the footer of the email or mail.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion1",
          onClick: this.showPopup1,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup1",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          src: "https://i.imgur.com/y6GROgd.png",
          id: "popQuestion2",
          onClick: this.showPopup2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup2",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "$"), "l"))));
      } else if (this.state.data.length == undefined) {
        console.log('loca');
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: "1",
          i: "1",
          data: this.state.data,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxPromo",
          id: "boxPromo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "Do you have a promo code?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion",
          onClick: this.showPopup,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking \"See Details\" where the promotion was found online or in the footer of the email or mail.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion1",
          onClick: this.showPopup1,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup1",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          src: "https://i.imgur.com/y6GROgd.png",
          id: "popQuestion2",
          onClick: this.showPopup2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup2",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, "$"), "l"))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "shoppingCartArea",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
          name: "Shopping Cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/shopping-cart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "goToCartFromCart",
          onClick: this.clear,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "Delete All Items")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, this.state.data.map(function (data, i) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_cart_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _this2.parsedData, {
            key: i,
            i: i,
            data: data,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          }));
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "finalBox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "finalBoxHeading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, "SUMMARY"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "allTheNumber",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxPromo",
          id: "boxPromo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "Do you have a promo code?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion",
          onClick: this.showPopup,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, "If you are having trouble, please check the Terms & Conditions of the promotion, which are usually found by clicking \"See Details\" where the promotion was found online or in the footer of the email or mail.")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxSubtotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "Subtotal", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          id: "popQuestion1",
          onClick: this.showPopup1,
          src: "https://i.imgur.com/y6GROgd.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup1",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "The subtotal reflects the total price of your order before any applicable discounts. It does not include shipping costs and taxes."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, this.state.total), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxShipping",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Estimated Shipping & Handling", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, this.state.shipping), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTax",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "Estimated Tax", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          className: "questionMarkSub",
          src: "https://i.imgur.com/y6GROgd.png",
          id: "popQuestion2",
          onClick: this.showPopup2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          id: "popup2",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "The actual tax will be calculated based on the applicable state and local sales taxes when your order is shipped."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, this.state.tax), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, "$")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          className: "finalBoxTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "Tota", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "priceTotal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, this.state.totalAmount), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "finalBoxDollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
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

      if (down === true) {
        icon.className = 'fa fa-arrow-down';
        down = false;
      } else {
        icon.className = 'fa fa-arrow-up';
        down = true;
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

/***/ })

})
//# sourceMappingURL=shopping-cart.js.cbf9b765577bb9db2582.hot-update.js.map