webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _components_parent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/parent.js */ "./components/parent.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _data_artistList_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/artistList.js */ "./data/artistList.js");
/* harmony import */ var _data_news_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/news.js */ "./data/news.js");
/* harmony import */ var _data_store_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/store.js */ "./data/store.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../scroll.js */ "./scroll.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../css/skeleton.css */ "./css/skeleton.css");
/* harmony import */ var _css_skeleton_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_css_skeleton_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../css/bootstrap.css */ "./css/bootstrap.css");
/* harmony import */ var _css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../css/styleStore.css */ "./css/styleStore.css");
/* harmony import */ var _css_styleStore_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_css_styleStore_css__WEBPACK_IMPORTED_MODULE_22__);








var _jsxFileName = "/Users/peterhahn/src/new/audio-boy/pages/index.js";















localStorage.clear();

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      trigger: ''
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      this.art = _data_artistList_js__WEBPACK_IMPORTED_MODULE_14__["default"];
      this.news = _data_news_js__WEBPACK_IMPORTED_MODULE_15__["default"];
      this.store = _data_store_js__WEBPACK_IMPORTED_MODULE_16__["default"];
      var SETTINGS = {
        navBarTravelling: false,
        navBarTravelDirection: "",
        navBarTravelDistance: 500
      };
      var colours = {
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
      document.documentElement.classList.add("js"); // Out advancer buttons

      var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
      var pnAdvancerRight = document.getElementById("pnAdvancerRight"); // the indicator

      var pnIndicator = document.getElementById("pnIndicator");
      var pnProductNav = document.getElementById("pnProductNav");
      var pnProductNavContents = document.getElementById("pnProductNavContents");
      pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav)); // Set the indicator

      moveIndicator(pnProductNav.querySelector("[aria-selected=\"true\"]"), colours[0]); // Handle the scroll of the horizontal container

      var last_known_scroll_position = 0;
      var ticking = false;

      function doSomething(scroll_pos) {
        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
      }

      pnProductNav.addEventListener("scroll", function () {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
          window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
          });
        }

        ticking = true;
      });
      pnAdvancerLeft.addEventListener("click", function () {
        // If in the middle of a move return
        if (SETTINGS.navBarTravelling === true) {
          return;
        } // If we have content overflowing both sides or on the left


        if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
          // Find how far this panel has been scrolled
          var availableScrollLeft = pnProductNav.scrollLeft; // If the space available is less than two lots of our desired distance, just move the whole amount
          // otherwise, move by the amount in the settings

          if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
            pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
          } else {
            pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
          } // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that


          pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition"); // Update our settings

          SETTINGS.navBarTravelDirection = "left";
          SETTINGS.navBarTravelling = true;
        } // Now update the attribute in the DOM


        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
      });
      pnAdvancerRight.addEventListener("click", function () {
        console.log('slave'); // If in the middle of a move return

        if (SETTINGS.navBarTravelling === true) {
          return;
        } // If we have content overflowing both sides or on the right


        if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
          // Get the right edge of the container and content
          var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
          var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right; // Now we know how much space we have available to scroll

          var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge); // If the space available is less than two lots of our desired distance, just move the whole amount
          // otherwise, move by the amount in the settings

          if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
            pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
          } else {
            pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
          } // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that


          pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition"); // Update our settings

          SETTINGS.navBarTravelDirection = "right";
          SETTINGS.navBarTravelling = true;
        } // Now update the attribute in the DOM


        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
      });
      pnProductNavContents.addEventListener("transitionend", function () {
        // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
        var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
        var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform"); // If there is no transition we want to default to 0 and not null

        var amount = Math.abs(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(tr.split(",")[4]) || 0);
        pnProductNavContents.style.transform = "none";
        pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition"); // Now lets set the scroll position

        if (SETTINGS.navBarTravelDirection === "left") {
          pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
        } else {
          pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
        }

        SETTINGS.navBarTravelling = false;
      }, false); // Handle setting the currently active link

      pnProductNavContents.addEventListener("click", function (e) {
        var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
        links.forEach(function (item) {
          item.setAttribute("aria-selected", "false");
        });
        e.target.setAttribute("aria-selected", "true"); // Pass the clicked item and it's colour to the move indicator function

        moveIndicator(e.target, colours[links.indexOf(e.target)]);
      }); // var count = 0;

      function moveIndicator(item, color) {
        var textPosition = item.getBoundingClientRect();
        var container = pnProductNavContents.getBoundingClientRect().left;
        var distance = textPosition.left - container;
        var scroll = pnProductNavContents.scrollLeft;
        pnIndicator.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")"; // count = count += 100;
        // pnIndicator.style.transform = "translateX(" + count + "px)";

        if (color) {
          pnIndicator.style.backgroundColor = color;
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
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_parent_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
        artists: _data_artistList_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        news: _data_news_js__WEBPACK_IMPORTED_MODULE_15__["default"],
        store: _data_store_js__WEBPACK_IMPORTED_MODULE_16__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.04f9b7262fbce5d078b9.hot-update.js.map