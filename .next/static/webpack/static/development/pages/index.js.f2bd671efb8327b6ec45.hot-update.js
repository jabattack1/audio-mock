webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        activeClass: "active",
        className: "test1",
        to: "test1",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Artists")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "tutorials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "News")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Label Info")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Contact"))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var Section =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Section, _React$Component2);

  function Section(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Section);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Section).call(this, props));
    _this2.scrollToTop = _this2.scrollToTop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Section, [{
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
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "navbar navbar-default navbar-fixed-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "bs-example-navbar-collapse-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test1",
        to: "test1",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Test 1")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test2",
        to: "test2",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Test 2")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test3",
        to: "test3",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Test 3")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test4",
        to: "test4",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Test 4")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test5",
        to: "test5",
        spy: true,
        smooth: true,
        duration: 500,
        delay: 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Test 5 ( delay )")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test6",
        to: "anchor",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Test 6 (anchor)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollTo(100);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Scroll To 100!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollToBottom();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Scroll To Bottom")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollMore(500);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Scroll 500 More!")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return react_scroll__WEBPACK_IMPORTED_MODULE_10__["animateScroll"].scrollMore(1000, {
            delay: 1500
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Scroll 1000 More! ( delay ) ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test8",
        to: "same",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Same target")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        className: "test9",
        to: "same",
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Same target")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "test1",
        to: "test1",
        onClick: function onClick() {
          return _this3.scrollTo();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "Scroll to element")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "test1",
        to: "test1",
        onClick: function onClick() {
          return _this3.scrollToWithContainer();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Scroll to element within container")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "test1",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "test 1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "test2",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "test 2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "test3",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "test 3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "test4",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "test 4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "test5",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "test 5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "anchor",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "test 6 (anchor)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        to: "firstInsideContainer",
        spy: true,
        smooth: true,
        duration: 250,
        containerId: "containerElement",
        style: {
          display: 'inline-block',
          margin: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Go to first element inside container"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        activeClass: "active",
        to: "secondInsideContainer",
        spy: true,
        smooth: true,
        duration: 250,
        containerId: "containerElement",
        style: {
          display: 'inline-block',
          margin: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "Go to second element inside container"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "test7",
        className: "element",
        id: "containerElement",
        style: {
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "firstInsideContainer",
        style: {
          marginBottom: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "first element inside container"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "secondInsideContainer",
        style: {
          marginBottom: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "second element inside container")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        id: "same",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Two links point to this"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "scroll-to-element",
        className: "element",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, "Scroll to element"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        className: "element",
        id: "scroll-container",
        style: {
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "scroll-container-first-element",
        style: {
          marginBottom: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "first element inside container"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_10__["Element"], {
        name: "scroll-container-second-element",
        style: {
          marginBottom: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "second element inside container")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: this.scrollToTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "To the top!"));
    }
  }]);

  return Section;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["render"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Section, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264
  },
  __self: undefined
}), document.getElementById('root'));

/***/ })

})
//# sourceMappingURL=index.js.f2bd671efb8327b6ec45.hot-update.js.map