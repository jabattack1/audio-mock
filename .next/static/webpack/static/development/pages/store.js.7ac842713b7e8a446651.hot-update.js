webpackHotUpdate("static/development/pages/store.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ "./node_modules/react-horizontal-scrolling-menu/build/index.js");
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "cartItemImageContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          className: "cartItemImage",
          src: this.props.data.image1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemName",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, this.props.data.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemSize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, this.props.data.size), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemQuantity",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Quantity"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "custom-select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("select", {
          className: "select-selected",
          id: "quantity",
          onMouseOver: this.setQuantity,
          defaultValue: this.props.data.quantity,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "3"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "4"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "5"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "6"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "7",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "7"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "8"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "9"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", {
          value: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "10"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "dollarSign",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "$"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemPrice",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, this.props.data.price), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "cartItemOrigPrice",
          hidden: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, this.props.data.orig), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "deleteItem",
          id: "x",
          onMouseOver: this.deleteItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Remove"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "empty",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
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
            console.log(data.price);
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

/***/ })

})
//# sourceMappingURL=store.js.7ac842713b7e8a446651.hot-update.js.map