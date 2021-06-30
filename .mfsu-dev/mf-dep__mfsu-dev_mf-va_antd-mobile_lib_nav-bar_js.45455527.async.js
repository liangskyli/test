(self["webpackChunkreact_h5_example"] = self["webpackChunkreact_h5_example"] || []).push([["mf-dep__mfsu-dev_mf-va_antd-mobile_lib_nav-bar_js"],{

/***/ "./.mfsu-dev/mf-va_antd-mobile_lib_nav-bar.js":
/*!****************************************************!*\
  !*** ./.mfsu-dev/mf-va_antd-mobile_lib_nav-bar.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_liangskyli_test_node_modules_antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd-mobile/lib/nav-bar */ "./node_modules/antd-mobile/lib/nav-bar/index.js");
/* harmony import */ var E_liangskyli_test_node_modules_antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_liangskyli_test_node_modules_antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((E_liangskyli_test_node_modules_antd_mobile_lib_nav_bar__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./node_modules/antd-mobile/lib/nav-bar/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd-mobile/lib/nav-bar/index.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj['default'] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var NavBar = function (_React$Component) {
  (0, _inherits3['default'])(NavBar, _React$Component);

  function NavBar() {
    (0, _classCallCheck3['default'])(this, NavBar);
    return (0, _possibleConstructorReturn3['default'])(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  (0, _createClass3['default'])(NavBar, [{
    key: 'render',
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          mode = _a.mode,
          icon = _a.icon,
          onLeftClick = _a.onLeftClick,
          leftContent = _a.leftContent,
          rightContent = _a.rightContent,
          restProps = __rest(_a, ["prefixCls", "className", "children", "mode", "icon", "onLeftClick", "leftContent", "rightContent"]);

      return React.createElement('div', (0, _extends3['default'])({}, restProps, {
        className: (0, _classnames2['default'])(className, prefixCls, prefixCls + '-' + mode)
      }), React.createElement('div', {
        className: prefixCls + '-left',
        role: 'button',
        onClick: onLeftClick
      }, icon ? // tslint:disable-next-line:jsx-no-multiline-js
      React.createElement('span', {
        className: prefixCls + '-left-icon',
        'aria-hidden': 'true'
      }, icon) : null, leftContent), React.createElement('div', {
        className: prefixCls + '-title'
      }, children), React.createElement('div', {
        className: prefixCls + '-right'
      }, rightContent));
    }
  }]);
  return NavBar;
}(React.Component);

exports.default = NavBar;
NavBar.defaultProps = {
  prefixCls: 'am-navbar',
  mode: 'dark',
  onLeftClick: function onLeftClick() {}
};
module.exports = exports['default'];

/***/ })

}]);