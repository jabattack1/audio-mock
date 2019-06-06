webpackHotUpdate("static/development/pages/index.js",{

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
      day: '',
      phone: '' // (document).ready(function() {
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
      day: '',
      phone: ''
    };
    _this.isNumberKeyMonth = _this.isNumberKeyMonth.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.isNumberKeyYear = _this.isNumberKeyYear.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.isNumberKeyDay = _this.isNumberKeyDay.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "render",
    value: function render() {
      if (typeof window !== 'undefined') {
        // Get the modal
        var modal = document.getElementById("myModal"); // Get the button that opens the modal

        var btn = document.getElementById("myBtn"); // Get the <span> element that closes the modal

        var span = document.getElementsByClassName("close")[0]; // When the user clicks on the button, open the modal 

        btn.onclick = function () {
          modal.style.display = "block";
        }; // When the user clicks on <span> (x), close the modal


        span.onclick = function () {
          modal.style.display = "none";
        }; // When the user clicks anywhere outside of the modal, close it


        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }

      console.log(this.state);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "myModal",
        class: "modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        class: "modal-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        class: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "signUpBox",
        id: "signBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "signUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        id: "signUpHeading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "GET BLASTED BY EMAILS FROM"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://i.imgur.com/QpsNlJb.png",
        id: "signUpImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        id: "signUpSay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Sign up and get exclusive promotional discounts on merchandise and information on upcoming events. We promise not to blast you with a ton of emails."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "first_name",
        id: "firstNameSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "First Name"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "first_name",
        id: "firstNameSignup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "last_name",
        id: "lastNameSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "last_name",
        id: "lastNameSignup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "email",
        id: "emailSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "email_field",
        id: "emailSignUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "phone",
        id: "phoneSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "tel",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        name: "phone_field",
        id: "phoneSignUp",
        onChange: this.isNumberKeyPhone,
        value: this.state.phone,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "genderStuff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "gender",
        id: "genderSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Gender"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        id: "femaleCheck",
        className: "signupOption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "femaleCheckActual",
        className: "signupCheckBox",
        value: "female",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "checkboxTextFemale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "FEMALE")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        id: "maleCheck",
        className: "signupOption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        htmlFor: "gender",
        id: "maleCheckActual",
        name: "sex",
        className: "signupCheckBox",
        value: "male",
        onClick: this.checkMale,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: "checkboxTextMale",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "MALE")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "gender",
        id: "gender",
        hidden: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "birthdayStuff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "dob",
        id: "birthdaySignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Birthday"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "month",
        id: "monthSignup",
        pattern: "[0-9]*",
        minLength: "2",
        maxLength: "2",
        autoComplete: "off",
        onChange: this.isNumberKeyMonth,
        value: this.state.month,
        placeholder: "MO",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "day",
        id: "daySignup",
        pattern: "[0-9]*",
        minLength: "2",
        maxLength: "2",
        autoComplete: "off",
        onChange: this.isNumberKeyDay,
        value: this.state.day,
        placeholder: "DAY",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "year",
        id: "yearSignup",
        pattern: "[0-9]*",
        minLength: "4",
        maxLength: "4",
        autoComplete: "off",
        onChange: this.isNumberKeyYear,
        value: this.state.year,
        placeholder: "YEAR",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "country",
        id: "countrySignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Country of Origin"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "country_field",
        id: "countrySignUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: "fav_artist",
        id: "artistSignUpText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Favorite Artist"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: "fav_artist",
        id: "artistSignup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        id: "signupButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
//# sourceMappingURL=index.js.dcbfae0e0f138bec8212.hot-update.js.map