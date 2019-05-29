webpackHotUpdate("static/development/pages/store.js",{

/***/ "./components/items.js":
/*!*****************************!*\
  !*** ./components/items.js ***!
  \*****************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _navbar3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar3.js */ "./components/navbar3.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../script.js */ "./script.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/artist.css */ "./css/artist.css");
/* harmony import */ var _css_artist_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_artist_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/items.js";









var Items =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Items, _React$Component);

  function Items(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Items);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Items).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    var store = _this.props.store;
    var itemNumber = _this.props.code.code;
    var result = store.filter(function (obj) {
      return obj.code === itemNumber;
    });
    result.map(function (e) {
      return _this.state = {
        image1: e.display_src,
        name: e.name,
        price: e.price,
        description: e.description,
        color: e.color
      };
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Items, [{
    key: "render",
    value: function render() {
      var check = function check(el) {
        var button = document.getElementById("button");
        var nbr_checked_radios = document.querySelectorAll('input[type=radio]:checked').length;

        if (nbr_checked_radios > 0) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      };

      var addToCart = function addToCart(props) {
        var itemSize;
        var itemName = document.getElementById('itemName').value;

        if (document.getElementById('s-option').checked) {
          itemSize = document.getElementById('s-option').value;
        } else if (document.getElementById('m-option').checked) {
          itemSize = document.getElementById('m-option').value;
        } else if (document.getElementById('l-option').checked) {
          itemSize = document.getElementById('l-option').value;
        } else if (document.getElementById('xl-option').checked) {
          itemSize = document.getElementById('xl-option').value;
        }

        console.log(this);
        console.log(itemSize);
        console.log(itemName); //       return(
        // 	<div className='shoppigCartWrapper'>
        // 		<ShoppingCart size={itemSize} item={item}/>
        // 	</div>
        // )
      };

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "always",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_navbar3_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: this.state.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "itemMainPhoto",
        src: this.state.image1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "itemMainPrice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "$", this.state.price), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "itemMainDescription",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, this.state.description), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "sizeSelect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Size Select:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "sizeOptions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "s-option",
        value: "small",
        name: "selector",
        onClick: check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "s-option",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "S"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "m-option",
        value: "medium",
        name: "selector",
        onClick: check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "m-option",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "M"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "inside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "l-option",
        value: "large",
        name: "selector",
        onClick: check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "l-option",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "L"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "inside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "xl-option",
        value: "x-large",
        name: "selector",
        onClick: check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "xl-option",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "XL"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "inside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "itemMainColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.color), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "AddCart",
        id: "button",
        value: this.state.name,
        onClick: addToCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Add to Cart"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (true) {
        document.getElementById("button").disabled = true;
      }
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ })

})
//# sourceMappingURL=store.js.a20704a07049302dd9e0.hot-update.js.map