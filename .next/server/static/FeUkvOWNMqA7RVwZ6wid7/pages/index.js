module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+EWW":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0T/a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2jw7");
var core = __webpack_require__("p9MR");
var ctx = __webpack_require__("vCXk");
var hide = __webpack_require__("jOCL");
var has = __webpack_require__("Q8jq");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "14Ie":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2jw7":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "5aCR":
/***/ (function(module, exports) {



/***/ }),

/***/ "5foh":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VKpo");

/***/ }),

/***/ "8v5W":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "D4ny":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Ev2A":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("b4pn");
var document = __webpack_require__("2jw7").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "Fuct":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
var $parseInt = __webpack_require__("dwSY");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "LqFA":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("b4pn");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "OtwA":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("D4ny");
var IE8_DOM_DEFINE = __webpack_require__("pH/F");
var toPrimitive = __webpack_require__("LqFA");
var dP = Object.defineProperty;

exports.f = __webpack_require__("fZVS") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "Q8jq":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./css/normalize.css
var normalize = __webpack_require__("5aCR");

// EXTERNAL MODULE: ./css/skeleton.css
var skeleton = __webpack_require__("RjQN");

// CONCATENATED MODULE: ./components/parent.js















var parent_Parent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parent, _React$Component);

  function Parent(props) {
    var _this;

    _classCallCheck(this, Parent);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Parent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    if (_this.props.peter !== null) {
      ;
      var initial = _this.props.peter;
      _this.state = {
        checked: initial.checked,
        adults1: initial.adults1,
        children1: initial.children1,
        adults2: initial.adults2,
        children2: initial.children2,
        adults3: initial.adults3,
        children3: initial.children3,
        adults4: initial.adults4,
        children4: initial.children4
      };
    } else {
      _this.state = {
        checked: '',
        adults1: 1,
        children1: 0,
        adults2: 1,
        children2: 0,
        adults3: 1,
        children3: 0,
        adults4: 1,
        children4: 0
      };
    }

    return _this;
  }

  _createClass(Parent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var room1Value = function room1Value(value) {
        if (value[0] === true && _this2.state.checked === '') {
          _this2.setState({
            checked: ''
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults1: value[2],
            children1: value[3]
          }, function () {});
        }
      };

      var room2Value = function room2Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults2: value[2],
            children2: value[3]
          }, function () {});
        }
      };

      var room3Value = function room3Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: parse_int_default()(3)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false && _this2.state.checked > value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults3: value[2],
            children3: value[3]
          }, function () {});
        }
      };

      var room4Value = function room4Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: parse_int_default()(4)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: parse_int_default()(3)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults4: value[2],
            children4: value[3]
          }, function () {});
        }
      };

      var children = '';

      if (this.props.peter !== null) {
        var chips = this.props.peter;

        if (this.state.checked === 2) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        } else if (this.state.checked === 3) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        } else if (this.state.checked === 4) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: true
          }));
        } else {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        }
      } else {
        if (this.state.checked === 2) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            check: false
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        } else if (this.state.checked === 3) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            check: true
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        } else if (this.state.checked === 4) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            check: true
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            check: true
          }));
        } else {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(Room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(Room2, {
            fromChildToParentCallback: room2Value,
            check: false
          }), external_react_default.a.createElement(Room3, {
            fromChildToParentCallback: room3Value,
            check: false
          }), external_react_default.a.createElement(Room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        }
      }

      return external_react_default.a.createElement("gridWrap", null, children, external_react_default.a.createElement(Submit, {
        type: "button",
        onClick: function onClick() {
          return _this2.storeStuff();
        }
      }, "Submit"), external_react_default.a.createElement(Clear, {
        type: "button",
        onClick: function onClick() {
          return _this2.eraseStuff();
        }
      }, "Clear"));
    }
  }, {
    key: "storeStuff",
    value: function storeStuff() {
      var status = this.state;
      localStorage.setItem('submittedData', stringify_default()(status));
    }
  }, {
    key: "eraseStuff",
    value: function eraseStuff() {
      localStorage.clear();
    }
  }]);

  return Parent;
}(external_react_default.a.Component);

/* harmony default export */ var components_parent = (parent_Parent);
// CONCATENATED MODULE: ./pages/index.js












var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        class: "container"
      }, components_parent));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "RjQN":
/***/ (function(module, exports) {



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VKpo":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Fuct");
module.exports = __webpack_require__("p9MR").parseInt;


/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Yzr4":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("0T/a");
var defined = __webpack_require__("5foh");
var fails = __webpack_require__("14Ie");
var spaces = __webpack_require__("cCpf");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "b4pn":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "cCpf":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dwSY":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("2jw7").parseInt;
var $trim = __webpack_require__("Yzr4").trim;
var ws = __webpack_require__("cCpf");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "fZVS":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("14Ie")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "jOCL":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("OtwA");
var createDesc = __webpack_require__("+EWW");
module.exports = __webpack_require__("fZVS") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p9MR":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.8' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "pH/F":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("fZVS") && !__webpack_require__("14Ie")(function () {
  return Object.defineProperty(__webpack_require__("Ev2A")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "vCXk":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("8v5W");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });