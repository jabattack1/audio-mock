webpackHotUpdate("static/development/pages/sign-up-page.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/mobile.css */ "./css/mobile.css");
/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_mobile_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_scroller_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/scroller.css */ "./css/scroller.css");
/* harmony import */ var _css_scroller_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_scroller_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _css_sign_up_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/sign-up.css */ "./css/sign-up.css");
/* harmony import */ var _css_sign_up_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_sign_up_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/shoppingCart.css */ "./css/shoppingCart.css");
/* harmony import */ var _css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_shoppingCart_css__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/sign-up.js";










var SignUp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SignUp, _React$Component);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SignUp).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      month: '',
      yearh: '',
      day: '' // (document).ready(function() {
      // $("#male").click(function (evt) { 
      // if($('#male').prop('checked') == true){
      //   $('#gender').val('male');
      //   $('#maleCheck').removeClass('signupOption').addClass('highlight');
      //   $('#female').attr('checked', false);
      //   $('#femaleCheck').removeClass('highlight').addClass('signupOption');
      //   evt.stopPropagation();
      // }
      // else{
      //   $('#maleCheck').removeClass('highlight').addClass('signupOption');
      //   evt.stopPropagation();
      //   $('#gender').val('');
      // }
      // });

    });

    _this.state = {
      month: '',
      year: '',
      day: ''
    };
    _this.isNumberKeyMonth = _this.isNumberKeyMonth.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.isNumberKeyYear = _this.isNumberKeyYear.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.isNumberKeyDay = _this.isNumberKeyDay.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        id: "myBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Open Modal"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "myModal",
        class: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        class: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Some text in the Modal.."))));
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
    key: "checkMale",
    value: function checkMale() {
      var checkbox = document.getElementById("maleCheck");
      checkbox.addEventListener('change', function (e) {
        if (checkbox.children[0].checked) {
          console.log('the lion');
        }
      }); // console.log('stimpy');
      // var isChecked= document.getElementById('femaleCheck').checked;
      // console.log(isChecked);
      // if(document.getElementById('maleCheck').check == true){
      // 	console.log('time');
      // $('#gender').val('female');
      // $('#femaleCheck').removeClass('signupOption').addClass('highlight');
      // $('#male').attr('checked', false);
      // $('#maleCheck').removeClass('highlight').addClass('signupOption');
      // evt.stopPropagation();
      // }
      // else{
      // $('#femaleCheck').removeClass('highlight').addClass('signupOption');
      // evt.stopPropagation();
      // $('#gender').val('');
      // }
    }
  }, {
    key: "validEmail",
    value: function validEmail(v) {
      var r = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
      return v.match(r) == null ? false : true;
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=sign-up-page.js.c6381ba40c1004c7f002.hot-update.js.map