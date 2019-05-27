webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/store-grid-scroll.js":
/*!*****************************************!*\
  !*** ./components/store-grid-scroll.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store.js */ "./components/store.js");
/* harmony import */ var _scrollStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scrollStore.js */ "./scrollStore.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../css/styleStore.css */ "./css/styleStore.css");
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_styleStore_css__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/components/store-grid-scroll.js";









var StoreGridScroll =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StoreGridScroll, _React$Component);

  function StoreGridScroll() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, StoreGridScroll);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(StoreGridScroll).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(StoreGridScroll, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pn-ProductNav_WrapperStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        id: "pnProductNavStore",
        className: "pn-ProductNavStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "pnProductNavContentsStore",
        className: "pn-ProductNav_ContentsStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.store.map(function (post, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_store_js__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
          key: i,
          i: i,
          store: post,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        id: "pnIndicatorStore",
        className: "pn-ProductNav_IndicatorStore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "pnAdvancerLeftStore",
        className: "pn-AdvancerStore pn-Advancer_LeftStore",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "leftArrowStore",
        src: "https://i.imgur.com/uOKhqK5.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "pnAdvancerRightStore",
        className: "pn-AdvancerStore pn-Advancer_RightStore",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "rightArrowStore",
        src: "https://i.imgur.com/lgw31BS.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })));
    }
  }]);

  return StoreGridScroll;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StoreGridScroll);

/***/ }),

/***/ "./scrollStore.js":
/*!************************!*\
  !*** ./scrollStore.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);


if (true) {
  window.onload = function () {
    var SETTINGSStore = {
      navBarTravelling: false,
      navBarTravelDirection: "",
      navBarTravelDistance: 500
    };
    var coloursStore = {
      0: "#867100",
      1: "#7F4200",
      2: "#99813D",
      3: "#40FEFF",
      4: "#14CC99",
      5: "#00BAFF",
      6: "#0082B2",
      7: "#B25D7A",
      8: "#00FF17",
      9: "#006B49",
      10: "#00B27A",
      11: "#996B3D",
      12: "#CC7014",
      13: "#40FF8C",
      14: "#FF3400",
      15: "#ECBB5E",
      16: "#ECBB0C",
      17: "#B9D912",
      18: "#253A93",
      19: "#125FB9"
    };
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
    console.log('lion');
    console.log(document.getElementById("pnAdvancerLeftStore")); // Out advancer buttons

    var pnAdvancerLeftStore = document.getElementById("pnAdvancerLeftStore");
    var pnAdvancerRightStore = document.getElementById("pnAdvancerRightStore"); // the indicator

    var pnIndicatorStore = document.getElementById("pnIndicatorStore");
    var pnProductNavStore = document.getElementById("pnProductNavStore");
    var pnProductNavContentsStore = document.getElementById("pnProductNavContentsStore");
    pnProductNavStore.setAttribute("data-overflowing", determineOverflow(pnProductNavContentsStore, pnProductNavStore)); // Set the indicator

    moveIndicator(pnProductNavStore.querySelector("[aria-selected=\"true\"]"), coloursStore[0]); // Handle the scroll of the horizontal container

    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
      pnProductNavStore.setAttribute("data-overflowing", determineOverflow(pnProductNavContentsStore, pnProductNavStore));
    }

    pnProductNavStore.addEventListener("scroll", function () {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }

      ticking = true;
    });
    pnAdvancerLeftStore.addEventListener("click", function () {
      // If in the middle of a move return
      if (SETTINGSStore.navBarTravelling === true) {
        return;
      } // If we have content overflowing both sides or on the left


      if (determineOverflow(pnProductNavContentsStore, pnProductNavStore) === "left" || determineOverflow(pnProductNavContentsStore, pnProductNavStore) === "both") {
        // Find how far this panel has been scrolled
        var availableScrollLeft = pnProductNavStore.scrollLeft; // If the space available is less than two lots of our desired distance, just move the whole amount
        // otherwise, move by the amount in the settingsStore

        if (availableScrollLeft < SETTINGSStore.navBarTravelDistance * 2) {
          pnProductNavContentsStore.style.transform = "translateX(" + availableScrollLeft + "px)";
        } else {
          pnProductNavContentsStore.style.transform = "translateX(" + SETTINGSStore.navBarTravelDistance + "px)";
        } // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that


        pnProductNavContentsStore.classList.remove("pn-ProductNav_Contents-no-transition"); // Update our settingsStore

        SETTINGSStore.navBarTravelDirection = "left";
        SETTINGSStore.navBarTravelling = true;
      } // Now update the attribute in the DOM


      pnProductNavStore.setAttribute("data-overflowing", determineOverflow(pnProductNavContentsStore, pnProductNavStore));
    });
    pnAdvancerRightStore.addEventListener("click", function () {
      // If in the middle of a move return
      if (SETTINGSStore.navBarTravelling === true) {
        return;
      } // If we have content overflowing both sides or on the right


      if (determineOverflow(pnProductNavContentsStore, pnProductNavStore) === "right" || determineOverflow(pnProductNavContentsStore, pnProductNavStore) === "both") {
        // Get the right edge of the container and content
        var navBarRightEdge = pnProductNavContentsStore.getBoundingClientRect().right;
        var navBarScrollerRightEdge = pnProductNavStore.getBoundingClientRect().right; // Now we know how much space we have available to scroll

        var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge); // If the space available is less than two lots of our desired distance, just move the whole amount
        // otherwise, move by the amount in the settingsStore

        if (availableScrollRight < SETTINGSStore.navBarTravelDistance * 2) {
          pnProductNavContentsStore.style.transform = "translateX(-" + availableScrollRight + "px)";
        } else {
          pnProductNavContentsStore.style.transform = "translateX(-" + SETTINGSStore.navBarTravelDistance + "px)";
        } // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that


        pnProductNavContentsStore.classList.remove("pn-ProductNav_Contents-no-transition"); // Update our settingsStore

        SETTINGSStore.navBarTravelDirection = "right";
        SETTINGSStore.navBarTravelling = true;
      } // Now update the attribute in the DOM


      pnProductNavStore.setAttribute("data-overflowing", determineOverflow(pnProductNavContentsStore, pnProductNavStore));
    });
    pnProductNavContentsStore.addEventListener("transitionend", function () {
      // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
      var styleOfTransform = window.getComputedStyle(pnProductNavContentsStore, null);
      var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform"); // If there is no transition we want to default to 0 and not null

      var amount = Math.abs(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(tr.split(",")[4]) || 0);
      pnProductNavContentsStore.style.transform = "none";
      pnProductNavContentsStore.classList.add("pn-ProductNav_Contents-no-transition"); // Now lets set the scroll position

      if (SETTINGSStore.navBarTravelDirection === "left") {
        pnProductNavStore.scrollLeft = pnProductNavStore.scrollLeft - amount;
      } else {
        pnProductNavStore.scrollLeft = pnProductNavStore.scrollLeft + amount;
      }

      SETTINGSStore.navBarTravelling = false;
    }, false); // Handle setting the currently active link

    pnProductNavContentsStore.addEventListener("click", function (e) {
      var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_LinkStore"));
      links.forEach(function (item) {
        item.setAttribute("aria-selected", "false");
      });
      e.target.setAttribute("aria-selected", "true"); // Pass the clicked item and it's colour to the move indicator function

      moveIndicator(e.target, coloursStore[links.indexOf(e.target)]);
    }); // var count = 0;

    function moveIndicator(item, color) {
      var textPosition = item.getBoundingClientRect();
      var container = pnProductNavContentsStore.getBoundingClientRect().left;
      var distance = textPosition.left - container;
      var scroll = pnProductNavContentsStore.scrollLeft;
      pnIndicatorStore.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")"; // count = count += 100;
      // pnIndicator.style.transform = "translateX(" + count + "px)";

      if (color) {
        pnIndicatorStore.style.backgroundColor = color;
      }
    }

    function determineOverflow(content, container) {
      var containerMetrics = container.getBoundingClientRect();
      var containerMetricsRight = Math.floor(containerMetrics.right);
      var containerMetricsLeft = Math.floor(containerMetrics.left);
      var contentMetrics = content.getBoundingClientRect();
      var contentMetricsRight = Math.floor(contentMetrics.right);
      var contentMetricsLeft = Math.floor(contentMetrics.left);

      if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
        return "both";
      } else if (contentMetricsLeft < containerMetricsLeft) {
        return "left";
      } else if (contentMetricsRight > containerMetricsRight) {
        return "right";
      } else {
        return "none";
      }
    }
    /**
     * @fileoverview dragscroll - scroll area by dragging
     * @version 0.0.8
     * 
     * @license MIT, see https://github.com/asvd/dragscroll
     * @copyright 2015 asvd <heliosframework@gmail.com> 
     */


    (function (root, factory) {
      if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/next/node_modules/webpack/buildin/amd-options.js")) {
        define(['exports'], factory);
      } else if (typeof exports !== 'undefined') {
        factory(exports);
      } else {
        factory(root.dragscroll = {});
      }
    })(this, function (exports) {
      var _window = window;
      var _document = document;
      var mousemove = 'mousemove';
      var mouseup = 'mouseup';
      var mousedown = 'mousedown';
      var EventListener = 'EventListener';
      var addEventListener = 'add' + EventListener;
      var removeEventListener = 'remove' + EventListener;
      var newScrollX, newScrollY;
      var dragged = [];

      var reset = function reset(i, el) {
        for (i = 0; i < dragged.length;) {
          el = dragged[i++];
          el = el.container || el;
          el[removeEventListener](mousedown, el.md, 0);

          _window[removeEventListener](mouseup, el.mu, 0);

          _window[removeEventListener](mousemove, el.mm, 0);
        } // cloning into array since HTMLCollection is updated dynamically


        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));

        for (i = 0; i < dragged.length;) {
          (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
            (cont = el.container || el)[addEventListener](mousedown, cont.md = function (e) {
              if (!el.hasAttribute('nochilddrag') || _document.elementFromPoint(e.pageX, e.pageY) == cont) {
                pushed = 1;
                lastClientX = e.clientX;
                lastClientY = e.clientY;
                e.preventDefault();
              }
            }, 0);

            _window[addEventListener](mouseup, cont.mu = function () {
              pushed = 0;
            }, 0);

            _window[addEventListener](mousemove, cont.mm = function (e) {
              if (pushed) {
                (scroller = el.scroller || el).scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);
                scroller.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);

                if (el == _document.body) {
                  (scroller = _document.documentElement).scrollLeft -= newScrollX;
                  scroller.scrollTop -= newScrollY;
                }
              }
            }, 0);
          })(dragged[i++]);
        }
      };

      if (_document.readyState == 'complete') {
        reset();
      } else {
        _window[addEventListener]('load', reset, 0);
      }

      exports.reset = reset;
    });
  };
}

/***/ })

})
//# sourceMappingURL=index.js.52af32796c929d66caa0.hot-update.js.map