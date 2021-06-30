(self["webpackChunkreact_h5_example"] = self["webpackChunkreact_h5_example"] || []).push([["mf-dep__mfsu-dev_mf-va_antd-mobile_lib_input-item_js"],{

/***/ "./.mfsu-dev/mf-va_antd-mobile_lib_input-item.js":
/*!*******************************************************!*\
  !*** ./.mfsu-dev/mf-va_antd-mobile_lib_input-item.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_liangskyli_test_node_modules_antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd-mobile/lib/input-item */ "./node_modules/antd-mobile/lib/input-item/index.js");
/* harmony import */ var E_liangskyli_test_node_modules_antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_liangskyli_test_node_modules_antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((E_liangskyli_test_node_modules_antd_mobile_lib_input_item__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./node_modules/antd-mobile/lib/_util/class.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/_util/class.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;

function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }

  var originClass = node.className;
  return (' ' + originClass + ' ').indexOf(' ' + className + ' ') > -1;
}

function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = node.className + ' ' + className;
    }
  }
}

function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      var originClass = node.className;
      node.className = (' ' + originClass + ' ').replace(' ' + className + ' ', '');
    }
  }
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/_util/exenv.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd-mobile/lib/_util/exenv.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var IS_IOS = exports.IS_IOS = canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent);

/***/ }),

/***/ "./node_modules/antd-mobile/lib/_util/getLocale.js":
/*!*********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/_util/getLocale.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function getComponentLocale(props, context, componentName, getDefaultLocale) {
  var locale = {};

  if (context && context.antLocale && context.antLocale[componentName]) {
    locale = context.antLocale[componentName];
  } else {
    var defaultLocale = getDefaultLocale(); // TODO: make default lang of antd be English
    // https://github.com/ant-design/ant-design/issues/6334

    locale = defaultLocale['default'] || defaultLocale;
  }

  var result = (0, _extends3['default'])({}, locale);

  if (props.locale) {
    result = (0, _extends3['default'])({}, result, props.locale);

    if (props.locale.lang) {
      result.lang = (0, _extends3['default'])({}, locale.lang, props.locale.lang);
    }
  }

  return result;
}

function getLocaleCode(context) {
  var localeCode = context.antLocale && context.antLocale.locale; // Had use LocaleProvide but didn't set locale

  if (context.antLocale && context.antLocale.exist && !localeCode) {
    return 'zh-cn';
  }

  return localeCode;
}

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/CustomInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/CustomInput.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

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

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _class = __webpack_require__(/*! ../_util/class */ "./node_modules/antd-mobile/lib/_util/class.js");

var _CustomKeyboard = __webpack_require__(/*! ./CustomKeyboard */ "./node_modules/antd-mobile/lib/input-item/CustomKeyboard.js");

var _CustomKeyboard2 = _interopRequireDefault(_CustomKeyboard);

var _Portal = __webpack_require__(/*! ./Portal */ "./node_modules/antd-mobile/lib/input-item/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _exenv = __webpack_require__(/*! ../_util/exenv */ "./node_modules/antd-mobile/lib/_util/exenv.js");

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

var customNumberKeyboard = null;
var IS_REACT_16 = !!ReactDOM.createPortal;

function getBodyScrollTop() {
  var el = document.scrollingElement || document.documentElement;
  return el && el.scrollTop || 0;
}

function setBodyScrollTop(scrollTop) {
  var el = document.scrollingElement || document.documentElement;
  el.scrollTop = scrollTop;
}

var NumberInput = function (_React$Component) {
  (0, _inherits3['default'])(NumberInput, _React$Component);

  function NumberInput(props) {
    (0, _classCallCheck3['default'])(this, NumberInput);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props));

    _this.onChange = function (value) {
      if (!('value' in _this.props)) {
        _this.setState({
          value: value.target.value
        });
      }

      _this.props.onChange(value);
    };

    _this.onConfirm = function (value) {
      _this.props.onVirtualKeyboardConfirm(value);
    };

    _this.addBlurListener = function () {
      document.addEventListener('click', _this.doBlur, false);
    };

    _this.removeBlurListener = function () {
      document.removeEventListener('click', _this.doBlur, false);
    };

    _this.saveRef = function (el) {
      if (IS_REACT_16 && el) {
        customNumberKeyboard = el;
      }
    };

    _this.doBlur = function (ev) {
      var value = _this.state.value;

      if (ev.target !== _this.inputRef) {
        _this.onInputBlur(value);
      }
    };

    _this.unLinkInput = function () {
      if (customNumberKeyboard && customNumberKeyboard.antmKeyboard && customNumberKeyboard.linkedInput && customNumberKeyboard.linkedInput === _this) {
        customNumberKeyboard.linkedInput = null;

        if (_this.props.autoAdjustHeight) {
          _this.getContainer().style.height = '0';
        }

        (0, _class.addClass)(customNumberKeyboard.antmKeyboard, _this.props.keyboardPrefixCls + '-wrapper-hide');
      } // for unmount


      _this.removeBlurListener();
    };

    _this.onInputBlur = function (value) {
      if (IS_REACT_16) {
        _this.keyBoard = null;
      }

      var focus = _this.state.focus;

      if (focus) {
        _this.setState({
          focus: false
        });

        _this.props.onBlur(value);

        setTimeout(function () {
          _this.unLinkInput();
        }, 50);
      }
    };

    _this.onInputFocus = function () {
      var value = _this.state.value;

      _this.props.onFocus(value);

      _this.setState({
        focus: true
      }, function () {
        if (customNumberKeyboard) {
          customNumberKeyboard.linkedInput = _this;

          if (customNumberKeyboard.antmKeyboard) {
            if (_this.props.autoAdjustHeight) {
              var keyBoardHeight = customNumberKeyboard.antmKeyboard.offsetHeight;
              _this.getContainer().style.height = keyBoardHeight + 'px';

              if (_this.inputRef) {
                var _this$inputRef$getBou = _this.inputRef.getBoundingClientRect(),
                    bottom = _this$inputRef$getBou.bottom;

                var clientHeight = window.innerHeight; // 计算输入框距离视窗的底部距离

                var distance = clientHeight - bottom;

                if (distance < keyBoardHeight) {
                  setBodyScrollTop(getBodyScrollTop() + keyBoardHeight - distance);
                }
              }
            }

            (0, _class.removeClass)(customNumberKeyboard.antmKeyboard, _this.props.keyboardPrefixCls + '-wrapper-hide');
          }

          customNumberKeyboard.confirmDisabled = value === '';

          if (customNumberKeyboard.confirmKeyboardItem) {
            if (value === '') {
              (0, _class.addClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
            } else {
              (0, _class.removeClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
            }
          }
        }
      });
    };

    _this.onKeyboardClick = function (KeyboardItemValue) {
      var maxLength = _this.props.maxLength;
      var value = _this.state.value; // tslint:disable-next-line:no-this-assignment

      var onChange = _this.onChange;
      var valueAfterChange = void 0; // 删除键

      if (KeyboardItemValue === 'delete') {
        valueAfterChange = value.substring(0, value.length - 1);
        onChange({
          target: {
            value: valueAfterChange
          }
        }); // 确认键
      } else if (KeyboardItemValue === 'confirm') {
        valueAfterChange = value;
        onChange({
          target: {
            value: valueAfterChange
          }
        });

        _this.onInputBlur(value);

        _this.onConfirm(value); // 收起键

      } else if (KeyboardItemValue === 'hide') {
        valueAfterChange = value;

        _this.onInputBlur(valueAfterChange);
      } else {
        if (maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength) {
          valueAfterChange = (value + KeyboardItemValue).substr(0, maxLength);
          onChange({
            target: {
              value: valueAfterChange
            }
          });
        } else {
          valueAfterChange = value + KeyboardItemValue;
          onChange({
            target: {
              value: valueAfterChange
            }
          });
        }
      }

      if (customNumberKeyboard) {
        customNumberKeyboard.confirmDisabled = valueAfterChange === '';

        if (customNumberKeyboard.confirmKeyboardItem) {
          if (valueAfterChange === '') {
            (0, _class.addClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
          } else {
            (0, _class.removeClass)(customNumberKeyboard.confirmKeyboardItem, _this.props.keyboardPrefixCls + '-item-disabled');
          }
        }
      }
    };

    _this.onFakeInputClick = function () {
      _this.focus();
    };

    _this.focus = function () {
      // this focus may invocked by users page button click, so this click may trigger blurEventListener at the same time
      _this.renderCustomKeyboard();

      _this.removeBlurListener();

      var focus = _this.state.focus;

      if (!focus) {
        _this.onInputFocus();
      }

      setTimeout(function () {
        _this.addBlurListener();
      }, 50);
    };

    _this.state = {
      focus: false,
      value: props.value || ''
    };
    return _this;
  }

  (0, _createClass3['default'])(NumberInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // focus:true unmount 不能触发 blur
      if (this.state.focus) {
        this.props.onBlur(this.state.value);
      }

      this.unLinkInput();
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      var _props = this.props,
          confirmLabel = _props.confirmLabel,
          backspaceLabel = _props.backspaceLabel,
          cancelKeyboardLabel = _props.cancelKeyboardLabel,
          keyboardPrefixCls = _props.keyboardPrefixCls,
          moneyKeyboardWrapProps = _props.moneyKeyboardWrapProps,
          moneyKeyboardHeader = _props.moneyKeyboardHeader,
          disabledKeys = _props.disabledKeys;
      return React.createElement(_CustomKeyboard2['default'], {
        ref: this.saveRef,
        onClick: this.onKeyboardClick,
        prefixCls: keyboardPrefixCls,
        confirmLabel: confirmLabel,
        backspaceLabel: backspaceLabel,
        cancelKeyboardLabel: cancelKeyboardLabel,
        wrapProps: moneyKeyboardWrapProps,
        header: moneyKeyboardHeader,
        disabledKeys: disabledKeys
      });
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      var keyboardPrefixCls = this.props.keyboardPrefixCls;
      var container = document.querySelector('#' + keyboardPrefixCls + '-container');

      if (!container) {
        container = document.createElement('div');
        container.setAttribute('id', keyboardPrefixCls + '-container');
        document.body.appendChild(container);
      }

      this.container = container;
      return this.container;
    }
  }, {
    key: 'renderCustomKeyboard',
    value: function renderCustomKeyboard() {
      var _this2 = this;

      if (IS_REACT_16) {
        this.keyBoard = React.createElement(_Portal2['default'], {
          getContainer: function getContainer() {
            return _this2.getContainer();
          }
        }, this.getComponent());
      } else {
        customNumberKeyboard = ReactDOM.unstable_renderSubtreeIntoContainer(this, this.getComponent(), this.getContainer());
      }
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      if (!IS_REACT_16 || !_exenv.canUseDOM) {
        return null;
      }

      return this.keyBoard;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          placeholder = _props2.placeholder,
          disabled = _props2.disabled,
          editable = _props2.editable,
          moneyKeyboardAlign = _props2.moneyKeyboardAlign;
      var _state = this.state,
          focus = _state.focus,
          value = _state.value;
      var preventKeyboard = disabled || !editable;
      var fakeInputCls = (0, _classnames2['default'])('fake-input', {
        focus: focus,
        'fake-input-disabled': disabled
      });
      var fakeInputContainerCls = (0, _classnames2['default'])('fake-input-container', {
        'fake-input-container-left': moneyKeyboardAlign === 'left'
      });
      return React.createElement('div', {
        className: fakeInputContainerCls
      }, value === '' && // tslint:disable-next-line:jsx-no-multiline-js
      React.createElement('div', {
        className: 'fake-input-placeholder'
      }, placeholder), React.createElement('div', {
        role: 'textbox',
        'aria-label': value || placeholder,
        className: fakeInputCls,
        ref: function ref(el) {
          return _this3.inputRef = el;
        },
        onClick: preventKeyboard ? function () {} : this.onFakeInputClick
      }, value), this.renderPortal());
    }
  }]);
  return NumberInput;
}(React.Component);

NumberInput.defaultProps = {
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onVirtualKeyboardConfirm: function onVirtualKeyboardConfirm() {},
  placeholder: '',
  disabled: false,
  editable: true,
  prefixCls: 'am-input',
  keyboardPrefixCls: 'am-number-keyboard',
  autoAdjustHeight: false
};
exports.default = NumberInput;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/CustomKeyboard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/CustomKeyboard.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.KeyboardItem = undefined;

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

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _exenv = __webpack_require__(/*! ../_util/exenv */ "./node_modules/antd-mobile/lib/_util/exenv.js");

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
/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param {array} arr The array to search in
 * @param {any} item  The value to search for
 */


function includes(arr, item) {
  if (!arr || !arr.length || !item) {
    return false;
  }

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

var KeyboardItem = exports.KeyboardItem = function (_React$Component) {
  (0, _inherits3['default'])(KeyboardItem, _React$Component);

  function KeyboardItem() {
    (0, _classCallCheck3['default'])(this, KeyboardItem);
    return (0, _possibleConstructorReturn3['default'])(this, (KeyboardItem.__proto__ || Object.getPrototypeOf(KeyboardItem)).apply(this, arguments));
  }

  (0, _createClass3['default'])(KeyboardItem, [{
    key: 'render',
    value: function render() {
      var _a = this.props,
          prefixCls = _a.prefixCls,
          _onClick = _a.onClick,
          className = _a.className,
          disabled = _a.disabled,
          children = _a.children,
          tdRef = _a.tdRef,
          label = _a.label,
          iconOnly = _a.iconOnly,
          restProps = __rest(_a, ["prefixCls", "onClick", "className", "disabled", "children", "tdRef", "label", "iconOnly"]);

      var value = children;

      if (className === 'keyboard-delete') {
        value = 'delete';
      } else if (className === 'keyboard-hide') {
        value = 'hide';
      } else if (className === 'keyboard-confirm') {
        value = 'confirm';
      }

      var extraCls = (0, _defineProperty3['default'])({}, prefixCls + '-item-disabled', disabled);
      var wrapCls = (0, _classnames2['default'])(prefixCls + '-item', className, extraCls);
      return React.createElement(_rmcFeedback2['default'], {
        disabled: disabled,
        activeClassName: prefixCls + '-item-active'
      }, React.createElement('td', (0, _extends3['default'])({
        ref: tdRef // tslint:disable-next-line:jsx-no-multiline-js
        ,
        onClick: function onClick(e) {
          _onClick(e, value);
        },
        className: wrapCls
      }, restProps), children, iconOnly && React.createElement('i', {
        className: 'sr-only'
      }, label)));
    }
  }]);
  return KeyboardItem;
}(React.Component);

KeyboardItem.defaultProps = {
  prefixCls: 'am-number-keyboard',
  onClick: function onClick() {},
  disabled: false
};

var CustomKeyboard = function (_React$Component2) {
  (0, _inherits3['default'])(CustomKeyboard, _React$Component2);

  function CustomKeyboard() {
    (0, _classCallCheck3['default'])(this, CustomKeyboard);

    var _this2 = (0, _possibleConstructorReturn3['default'])(this, (CustomKeyboard.__proto__ || Object.getPrototypeOf(CustomKeyboard)).apply(this, arguments));

    _this2.onKeyboardClick = function (e) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      e.nativeEvent.stopImmediatePropagation();

      if (_this2.props.disabledKeys && includes(_this2.props.disabledKeys, value)) {
        return null;
      }

      if (value === 'confirm' && _this2.confirmDisabled) {
        return null;
      } else {
        if (_this2.linkedInput) {
          _this2.linkedInput.onKeyboardClick(value);
        }
      }
    };

    _this2.renderKeyboardItem = function (item, index) {
      var disabled = false;

      if (_this2.props.disabledKeys && includes(_this2.props.disabledKeys, item)) {
        disabled = true;
      }

      return React.createElement(KeyboardItem, {
        onClick: _this2.onKeyboardClick,
        key: 'item-' + item + '-' + index,
        disabled: disabled
      }, item);
    };

    return _this2;
  }

  (0, _createClass3['default'])(CustomKeyboard, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          confirmLabel = _props.confirmLabel,
          backspaceLabel = _props.backspaceLabel,
          cancelKeyboardLabel = _props.cancelKeyboardLabel,
          wrapProps = _props.wrapProps,
          header = _props.header;
      var wrapperCls = (0, _classnames2['default'])(prefixCls + '-wrapper', prefixCls + '-wrapper-hide');
      return React.createElement('div', (0, _extends3['default'])({
        className: wrapperCls,
        ref: function ref(el) {
          return _this3.antmKeyboard = el;
        }
      }, wrapProps), header && React.cloneElement(header, {
        onClick: this.onKeyboardClick
      }), React.createElement('table', null, React.createElement('tbody', null, React.createElement('tr', null, ['1', '2', '3'].map(function (item, index) {
        return (// tslint:disable-next-line:jsx-no-multiline-js
          _this3.renderKeyboardItem(item, index)
        );
      }), React.createElement(KeyboardItem, (0, _extends3['default'])({
        className: 'keyboard-delete',
        rowSpan: 2,
        onClick: this.onKeyboardClick
      }, this.getAriaAttr(backspaceLabel)))), React.createElement('tr', null, ['4', '5', '6'].map(function (item, index) {
        return (// tslint:disable-next-line:jsx-no-multiline-js
          _this3.renderKeyboardItem(item, index)
        );
      })), React.createElement('tr', null, ['7', '8', '9'].map(function (item, index) {
        return (// tslint:disable-next-line:jsx-no-multiline-js
          _this3.renderKeyboardItem(item, index)
        );
      }), React.createElement(KeyboardItem, {
        className: 'keyboard-confirm',
        rowSpan: 2,
        onClick: this.onKeyboardClick,
        tdRef: function tdRef(el) {
          return _this3.confirmKeyboardItem = el;
        }
      }, confirmLabel)), React.createElement('tr', null, ['.', '0'].map(function (item, index) {
        return (// tslint:disable-next-line:jsx-no-multiline-js
          _this3.renderKeyboardItem(item, index)
        );
      }), React.createElement(KeyboardItem, (0, _extends3['default'])({
        className: 'keyboard-hide',
        onClick: this.onKeyboardClick
      }, this.getAriaAttr(cancelKeyboardLabel)))))));
    }
  }, {
    key: 'getAriaAttr',
    value: function getAriaAttr(label) {
      if (_exenv.IS_IOS) {
        return {
          label: label,
          iconOnly: true
        };
      } else {
        return {
          role: 'button',
          'aria-label': label
        };
      }
    }
  }]);
  return CustomKeyboard;
}(React.Component);

CustomKeyboard.defaultProps = {
  prefixCls: 'am-number-keyboard',
  disabledKeys: null
};
exports.default = CustomKeyboard;

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/Input.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/Input.js ***!
  \**********************************************************/
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

    newObj["default"] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
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

var Input = function (_React$Component) {
  (0, _inherits3["default"])(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3["default"])(this, Input);

    var _this = (0, _possibleConstructorReturn3["default"])(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

    _this.onInputBlur = function (e) {
      var value = e.target.value;

      if (_this.props.onBlur) {
        _this.props.onBlur(value);
      }
    };

    _this.onInputFocus = function (e) {
      // here should have a value definition but none.
      var value = e.target.value;

      if (_this.props.onFocus) {
        _this.props.onFocus(value);
      }
    };

    _this.focus = function () {
      if (_this.inputRef) {
        _this.inputRef.focus();
      }
    };

    return _this;
  }

  (0, _createClass3["default"])(Input, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          onBlur = _a.onBlur,
          onFocus = _a.onFocus,
          restProps = __rest(_a, ["onBlur", "onFocus"]);

      return React.createElement("input", (0, _extends3["default"])({
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        onBlur: this.onInputBlur,
        onFocus: this.onInputFocus
      }, restProps));
    }
  }]);
  return Input;
}(React.Component);

exports.default = Input;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/Portal.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/Portal.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

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

var createPortal = ReactDOM.createPortal;

var Portal = function (_React$Component) {
  (0, _inherits3['default'])(Portal, _React$Component);

  function Portal(props) {
    (0, _classCallCheck3['default'])(this, Portal);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this.container = _this.props.getContainer();
    return _this;
  }

  (0, _createClass3['default'])(Portal, [{
    key: 'render',
    value: function render() {
      if (this.props.children) {
        return createPortal(this.props.children, this.container);
      }

      return null;
    }
  }]);
  return Portal;
}(React.Component);

exports.default = Portal;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/index.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames3 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames4 = _interopRequireDefault(_classnames3);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _rmcFeedback = __webpack_require__(/*! rmc-feedback */ "./node_modules/rmc-feedback/es/index.js");

var _rmcFeedback2 = _interopRequireDefault(_rmcFeedback);

var _getLocale = __webpack_require__(/*! ../_util/getLocale */ "./node_modules/antd-mobile/lib/_util/getLocale.js");

var _CustomInput = __webpack_require__(/*! ./CustomInput */ "./node_modules/antd-mobile/lib/input-item/CustomInput.js");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/antd-mobile/lib/input-item/Input.js");

var _Input2 = _interopRequireDefault(_Input);

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
/* tslint:disable:jsx-no-multiline-js */


function noop() {}

function normalizeValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value + '';
}

var InputItem = function (_React$Component) {
  (0, _inherits3['default'])(InputItem, _React$Component);

  function InputItem(props) {
    (0, _classCallCheck3['default'])(this, InputItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (InputItem.__proto__ || Object.getPrototypeOf(InputItem)).call(this, props));

    _this.onInputChange = function (e) {
      var el = e.target;
      var rawVal = el.value;
      var prePos = 0;

      try {
        // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
        prePos = el.selectionEnd || 0;
      } catch (error) {
        console.warn('Get selection error:', error);
      }

      var _this$state$value = _this.state.value,
          preCtrlVal = _this$state$value === undefined ? '' : _this$state$value;
      var type = _this.props.type;
      var ctrlValue = rawVal;

      switch (type) {
        case 'bankCard':
          ctrlValue = rawVal.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
          break;

        case 'phone':
          ctrlValue = rawVal.replace(/\D/g, '').substring(0, 11);
          var valueLen = ctrlValue.length;

          if (valueLen > 3 && valueLen < 8) {
            ctrlValue = ctrlValue.substr(0, 3) + ' ' + ctrlValue.substr(3);
          } else if (valueLen >= 8) {
            ctrlValue = ctrlValue.substr(0, 3) + ' ' + ctrlValue.substr(3, 4) + ' ' + ctrlValue.substr(7);
          }

          break;

        case 'number':
          ctrlValue = rawVal.replace(/\D/g, '');
          break;

        case 'text':
        case 'password':
        default:
          break;
      }

      _this.handleOnChange(ctrlValue, ctrlValue !== rawVal, function () {
        switch (type) {
          case 'bankCard':
          case 'phone':
          case 'number':
            // controlled input type needs to adjust the position of the caret
            try {
              // some input type do not support selection, see https://html.spec.whatwg.org/multipage/input.html#do-not-apply
              var pos = _this.calcPos(prePos, preCtrlVal, rawVal, ctrlValue, [' '], /\D/g);

              if (type === 'phone' && (pos === 4 || pos === 9) || type === 'bankCard' && pos > 0 && pos % 5 === 0) {
                pos -= 1;
              }

              el.selectionStart = el.selectionEnd = pos;
            } catch (error) {
              console.warn('Set selection error:', error);
            }

            break;

          default:
            break;
        }
      });
    };

    _this.handleOnChange = function (value) {
      var isMutated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var adjustPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
      var onChange = _this.props.onChange;

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      } else {
        _this.setState({
          value: _this.props.value
        });
      }

      if (onChange) {
        if (isMutated) {
          setTimeout(function () {
            onChange(value);
            adjustPos();
          });
        } else {
          onChange(value);
          adjustPos();
        }
      } else {
        adjustPos();
      }
    };

    _this.onInputFocus = function (value) {
      if (_this.debounceTimeout) {
        clearTimeout(_this.debounceTimeout);
        _this.debounceTimeout = null;
      }

      _this.setState({
        focus: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(value);
      }
    };

    _this.onInputBlur = function (value) {
      if (_this.inputRef) {
        // this.inputRef may be null if customKeyboard unmount
        _this.debounceTimeout = window.setTimeout(function () {
          if (document.activeElement !== (_this.inputRef && _this.inputRef.inputRef)) {
            _this.setState({
              focus: false
            });
          }
        }, 200);
      }

      if (_this.props.onBlur) {
        // fix autoFocus item blur with flash
        setTimeout(function () {
          // fix ios12 wechat browser click failure after input
          if (document.body) {
            document.body.scrollTop = document.body.scrollTop;
          }
        }, 100);

        _this.props.onBlur(value);
      }
    };

    _this.clearInput = function () {
      if (_this.props.type !== 'password' && _this.props.updatePlaceholder) {
        _this.setState({
          placeholder: _this.props.value
        });
      }

      _this.setState({
        value: ''
      });

      if (_this.props.onChange) {
        _this.props.onChange('');
      }

      _this.focus();
    }; // this is instance method for user to use


    _this.focus = function () {
      if (_this.inputRef) {
        _this.inputRef.focus();
      }
    }; // calculate the position of the caret


    _this.calcPos = function (prePos, preCtrlVal, rawVal, ctrlVal, placeholderChars, maskReg) {
      var editLength = rawVal.length - preCtrlVal.length;
      var isAddition = editLength > 0;
      var pos = prePos;

      if (isAddition) {
        var additionStr = rawVal.substr(pos - editLength, editLength);
        var ctrlCharCount = additionStr.replace(maskReg, '').length;
        pos -= editLength - ctrlCharCount;
        var placeholderCharCount = 0;

        while (ctrlCharCount > 0) {
          if (placeholderChars.indexOf(ctrlVal.charAt(pos - ctrlCharCount + placeholderCharCount)) === -1) {
            ctrlCharCount--;
          } else {
            placeholderCharCount++;
          }
        }

        pos += placeholderCharCount;
      }

      return pos;
    };

    _this.state = {
      placeholder: props.placeholder,
      value: normalizeValue(props.value || props.defaultValue)
    };
    return _this;
  }

  (0, _createClass3['default'])(InputItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('placeholder' in nextProps && !nextProps.updatePlaceholder) {
        this.setState({
          placeholder: nextProps.placeholder
        });
      }

      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.debounceTimeout) {
        window.clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _classnames2,
          _this2 = this;

      var props = (0, _extends3['default'])({}, this.props);
      delete props.updatePlaceholder;

      var prefixCls = props.prefixCls,
          prefixListCls = props.prefixListCls,
          editable = props.editable,
          style = props.style,
          clear = props.clear,
          children = props.children,
          error = props.error,
          className = props.className,
          extra = props.extra,
          labelNumber = props.labelNumber,
          type = props.type,
          onExtraClick = props.onExtraClick,
          onErrorClick = props.onErrorClick,
          moneyKeyboardAlign = props.moneyKeyboardAlign,
          moneyKeyboardWrapProps = props.moneyKeyboardWrapProps,
          moneyKeyboardHeader = props.moneyKeyboardHeader,
          onVirtualKeyboardConfirm = props.onVirtualKeyboardConfirm,
          autoAdjustHeight = props.autoAdjustHeight,
          disabledKeys = props.disabledKeys,
          restProps = __rest(props, ["prefixCls", "prefixListCls", "editable", "style", "clear", "children", "error", "className", "extra", "labelNumber", "type", "onExtraClick", "onErrorClick", "moneyKeyboardAlign", "moneyKeyboardWrapProps", "moneyKeyboardHeader", "onVirtualKeyboardConfirm", "autoAdjustHeight", "disabledKeys"]);

      var name = restProps.name,
          disabled = restProps.disabled,
          maxLength = restProps.maxLength;
      var value = this.state.value; // tslint:disable-next-line:variable-name

      var _locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'InputItem', function () {
        return __webpack_require__(/*! ./locale/zh_CN */ "./node_modules/antd-mobile/lib/input-item/locale/zh_CN.js");
      });

      var confirmLabel = _locale.confirmLabel,
          backspaceLabel = _locale.backspaceLabel,
          cancelKeyboardLabel = _locale.cancelKeyboardLabel;
      var _state = this.state,
          focus = _state.focus,
          placeholder = _state.placeholder;
      var wrapCls = (0, _classnames4['default'])(prefixListCls + '-item', prefixCls + '-item', prefixListCls + '-item-middle', className, (_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-disabled', disabled), (0, _defineProperty3['default'])(_classnames, prefixCls + '-error', error), (0, _defineProperty3['default'])(_classnames, prefixCls + '-focus', focus), (0, _defineProperty3['default'])(_classnames, prefixCls + '-android', focus), _classnames));
      var labelCls = (0, _classnames4['default'])(prefixCls + '-label', (_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-2', labelNumber === 2), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-3', labelNumber === 3), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-4', labelNumber === 4), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-5', labelNumber === 5), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-6', labelNumber === 6), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-label-7', labelNumber === 7), _classnames2));
      var controlCls = prefixCls + '-control';
      var inputType = 'text';

      if (type === 'bankCard' || type === 'phone') {
        inputType = 'tel';
      } else if (type === 'password') {
        inputType = 'password';
      } else if (type === 'digit') {
        inputType = 'number';
      } else if (type !== 'text' && type !== 'number') {
        inputType = type;
      }

      var patternProps = void 0;

      if (type === 'number') {
        patternProps = {
          pattern: '[0-9]*'
        };
      }

      var classNameProps = void 0;

      if (type === 'digit') {
        classNameProps = {
          className: 'h5numInput'
        };
      }

      return React.createElement('div', {
        className: wrapCls
      }, React.createElement('div', {
        className: prefixListCls + '-line'
      }, children ? React.createElement('div', {
        className: labelCls
      }, children) : null, React.createElement('div', {
        className: controlCls
      }, type === 'money' ? React.createElement(_CustomInput2['default'], {
        value: normalizeValue(value),
        type: type,
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        maxLength: maxLength,
        placeholder: placeholder,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        onVirtualKeyboardConfirm: onVirtualKeyboardConfirm,
        disabled: disabled,
        editable: editable,
        prefixCls: prefixCls,
        style: style,
        confirmLabel: confirmLabel,
        backspaceLabel: backspaceLabel,
        cancelKeyboardLabel: cancelKeyboardLabel,
        moneyKeyboardAlign: moneyKeyboardAlign,
        moneyKeyboardWrapProps: moneyKeyboardWrapProps,
        moneyKeyboardHeader: moneyKeyboardHeader,
        autoAdjustHeight: autoAdjustHeight,
        disabledKeys: disabledKeys
      }) : React.createElement(_Input2['default'], (0, _extends3['default'])({}, patternProps, restProps, classNameProps, {
        value: normalizeValue(value),
        defaultValue: undefined,
        ref: function ref(el) {
          return _this2.inputRef = el;
        },
        style: style,
        type: inputType,
        maxLength: maxLength,
        name: name,
        placeholder: placeholder,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus,
        onBlur: this.onInputBlur,
        readOnly: !editable,
        disabled: disabled
      }))), clear && editable && !disabled && value && ('' + value).length > 0 ? React.createElement(_rmcFeedback2['default'], {
        activeClassName: prefixCls + '-clear-active'
      }, React.createElement('div', {
        className: prefixCls + '-clear',
        onClick: this.clearInput
      })) : null, error ? React.createElement('div', {
        className: prefixCls + '-error-extra',
        onClick: onErrorClick
      }) : null, extra !== '' ? React.createElement('div', {
        className: prefixCls + '-extra',
        onClick: onExtraClick
      }, extra) : null));
    }
  }]);
  return InputItem;
}(React.Component);

InputItem.defaultProps = {
  prefixCls: 'am-input',
  prefixListCls: 'am-list',
  type: 'text',
  editable: true,
  disabled: false,
  placeholder: '',
  clear: false,
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  extra: '',
  onExtraClick: noop,
  error: false,
  onErrorClick: noop,
  onVirtualKeyboardConfirm: noop,
  labelNumber: 5,
  updatePlaceholder: false,
  moneyKeyboardAlign: 'right',
  moneyKeyboardWrapProps: {},
  moneyKeyboardHeader: null,
  disabledKeys: null
};
InputItem.contextTypes = {
  antLocale: PropTypes.object
};
exports.default = InputItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd-mobile/lib/input-item/locale/zh_CN.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd-mobile/lib/input-item/locale/zh_CN.js ***!
  \*****************************************************************/
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = {
  confirmLabel: '确定',
  backspaceLabel: '退格',
  cancelKeyboardLabel: '收起键盘'
};
module.exports = exports['default'];

/***/ })

}]);