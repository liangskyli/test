(self["webpackChunkreact_h5_example"] = self["webpackChunkreact_h5_example"] || []).push([["mf-dep__mfsu-dev_mf-va_antd-mobile_lib_button_js"],{

/***/ "./.mfsu-dev/mf-va_antd-mobile_lib_button.js":
/*!***************************************************!*\
  !*** ./.mfsu-dev/mf-va_antd-mobile_lib_button.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_liangskyli_test_node_modules_antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd-mobile/lib/button */ "./node_modules/antd-mobile/lib/button/index.js");
/* harmony import */ var E_liangskyli_test_node_modules_antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_liangskyli_test_node_modules_antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((E_liangskyli_test_node_modules_antd_mobile_lib_button__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./node_modules/antd-mobile/lib/button/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd-mobile/lib/button/index.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd-mobile/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

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

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
} // Insert one space between two chinese characters automatically.


function insertSpace(child) {
  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return React.cloneElement(child, {}, child.props.children.split('').join(' '));
  }

  if (isString(child)) {
    if (isTwoCNChar(child)) {
      child = child.split('').join(' ');
    }

    return React.createElement('span', null, child);
  }

  return child;
}

var Button = function (_React$Component) {
  (0, _inherits3['default'])(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3['default'])(this, Button);
    return (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Button, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _a = this.props,
          children = _a.children,
          className = _a.className,
          prefixCls = _a.prefixCls,
          type = _a.type,
          size = _a.size,
          inline = _a.inline,
          disabled = _a.disabled,
          icon = _a.icon,
          loading = _a.loading,
          activeStyle = _a.activeStyle,
          activeClassName = _a.activeClassName,
          onClick = _a.onClick,
          restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "inline", "disabled", "icon", "loading", "activeStyle", "activeClassName", "onClick"]);

      var iconType = loading ? 'loading' : icon;
      var wrapCls = (0, _classnames3['default'])(prefixCls, className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-primary', type === 'primary'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-ghost', type === 'ghost'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-warning', type === 'warning'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-small', size === 'small'), (0, _defineProperty3['default'])(_classnames, prefixCls + '-inline', inline), (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classnames, prefixCls + '-icon', !!iconType), _classnames));
      var kids = React.Children.map(children, insertSpace);
      var iconEl = void 0;

      if (typeof iconType === 'string') {
        iconEl = React.createElement(_icon2['default'], {
          'aria-hidden': 'true',
          type: iconType,
          size: size === 'small' ? 'xxs' : 'md',
          className: prefixCls + '-icon'
        });
      } else if (iconType) {
        var rawCls = iconType.props && iconType.props.className;
        var cls = (0, _classnames3['default'])('am-icon', prefixCls + '-icon', size === 'small' ? 'am-icon-xxs' : 'am-icon-md');
        iconEl = React.cloneElement(iconType, {
          className: rawCls ? rawCls + ' ' + cls : cls
        });
      } // use div, button native is buggy @yiminghe


      return React.createElement(_rmcFeedback2['default'] // tslint:disable-next-line:jsx-no-multiline-js
      , {
        activeClassName: activeClassName || (activeStyle ? prefixCls + '-active' : undefined),
        disabled: disabled,
        activeStyle: activeStyle
      }, React.createElement('a', (0, _extends3['default'])({
        role: 'button',
        className: wrapCls
      }, restProps, {
        onClick: disabled ? undefined : onClick,
        'aria-disabled': disabled
      }), iconEl, kids));
    }
  }]);
  return Button;
}(React.Component);

Button.defaultProps = {
  prefixCls: 'am-button',
  size: 'large',
  inline: false,
  disabled: false,
  loading: false,
  activeStyle: {}
};
exports.default = Button;
module.exports = exports['default'];

/***/ })

}]);