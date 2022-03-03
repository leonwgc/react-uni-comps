'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactTransitionGroup = require('react-transition-group');
var styled = require('styled-components');
var clsx = require('clsx');
var web = require('@react-spring/web');
var reactIs = require('react-is');
require('intersection-observer');
var Touch = require('w-touch');
var color = require('color');
var Sortable = require('sortablejs');
var nanoid = require('nanoid');
var RcForm = require('rc-field-form');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var Touch__default = /*#__PURE__*/_interopDefaultLegacy(Touch);
var color__default = /*#__PURE__*/_interopDefaultLegacy(color);
var Sortable__default = /*#__PURE__*/_interopDefaultLegacy(Sortable);
var RcForm__default = /*#__PURE__*/_interopDefaultLegacy(RcForm);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 *  组件卸载执行回调
 *
 * @param {() => void} fn 执行的回调
 */

var useUnmount = function useUnmount(fn) {
  React.useLayoutEffect(function () {
    return function () {
      fn === null || fn === void 0 ? void 0 : fn();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/** 统一浅色边框色 */
var border = '#eee';
var disabledText = 'rgba(0, 0, 0, 0.25)';
var primary = '#005cff';
var danger = '#ff4d4f';
var activeBg = 'rgba(0, 0, 0, 0.1)';
/** 统一边框阴影 */

var boxShadow = '0 2px 12px 0 rgba(0, 0, 0, 0.1)';
/** 慢速动画时间, 单位:ms */

var animationSlow = 280;
/** 中速动画时间, 单位:ms */

var animationNormal = 220;
/** 快速动画时间, 单位:ms  */

var animationFast = 160;

var _excluded = ["children", "className", "visible", "duration", "style", "hideOverflow"];

var _templateObject;
var StyledMask = styled__default['default'](web.animated.div)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  touch-action: none;\n"])));

/** 遮罩层 */
var Mask = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      visible = props.visible,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? animationNormal : _props$duration,
      style = props.style,
      _props$hideOverflow = props.hideOverflow,
      hideOverflow = _props$hideOverflow === void 0 ? true : _props$hideOverflow,
      rest = _objectWithoutProperties(props, _excluded); // animation effect


  var _useState = React.useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var styles = web.useSpring({
    opacity: visible ? 0.45 : 0,
    onStart: function onStart() {
      setActive(true);
    },
    onRest: function onRest() {
      setActive(visible);
    },
    config: {
      duration: duration
    }
  });
  React.useEffect(function () {
    document.body.style.overflow = visible && hideOverflow ? 'hidden' : '';
  }, [visible, hideOverflow]);
  useUnmount(function () {
    document.body.style.overflow = '';
  });
  return active || visible ? /*#__PURE__*/React__default['default'].createElement(StyledMask, _extends({
    ref: ref
  }, rest, {
    className: clsx__default['default']('uc-mask', className),
    style: _objectSpread2(_objectSpread2({}, styles), style)
  }), children) : null;
});
Mask.displayName = 'UC-Mask';

var flexGapSupported;
/**
 * 检查浏览器支持gap
 *
 * @return {*}  {boolean}
 */

var detectFlexGapSupported = function detectFlexGapSupported() {
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }

  if (typeof window === 'undefined') {
    return false;
  }

  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};
/** 是否是浏览器 */

var isBrowser = !!(typeof window !== 'undefined' && window);
/** 是否是移动端 */

var isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);
var _passiveIfSupported = false;

try {
  isBrowser && window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function get() {
      _passiveIfSupported = {
        passive: true
      };
    }
  }));
} catch (err) {}

/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用(Notify,Toast,AlertDialog)
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */
var beforeDisposeGen = function beforeDisposeGen(container, selector, timeout) {
  return function () {
    return new Promise(function (dispose) {
      var el = container.querySelector(selector);

      if (el) {
        el.classList.remove('to');
        el.classList.add('from');
      }

      setTimeout(dispose, timeout);
    });
  };
};
/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */

var renderElement = function renderElement(element, container) {
  var dom = container || document.createElement('div');
  document.body.appendChild(dom);
  ReactDOM__default['default'].render(element, dom);

  var dispose = function dispose() {
    ReactDOM__default['default'].unmountComponentAtNode(dom);

    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom);
    }
  };

  return function (beforeDispose) {
    if (typeof beforeDispose === 'function') {
      // play transition here before unmount
      beforeDispose().then(dispose);
    } else {
      dispose();
    }
  };
};
var cssRegex = /\.css$/i;
var resourceRegex = /\.(css|js)$/i;
var resourceLoadedList = new Set();
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */

var loadResource = function loadResource(url) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise(function (resolve, reject) {
        var el;
        var isCss = cssRegex.test(url);

        if (isCss) {
          el = document.createElement('link');
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.src = url;
        }

        el.onload = resolve;
        el.onerror = reject;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(el);
      });
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.reject('请输入js/css文件地址');
  }
};
/** 是否支持触屏 */

var isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;
/** get el scrollTop */

var getScrollTop = function getScrollTop(ele) {
  if (ele === window) {
    return window.pageYOffset;
  }

  return ele.scrollTop;
};
var isCssVarSupported = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports('--a', '0');

var _templateObject$1;
var StyledWrapper = styled__default['default'].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0);\n    }\n  }\n\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.4);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.4);\n    }\n  }\n"])));
var mousePosition = null;

if (isBrowser) {
  var getClickPosition = function getClickPosition(e) {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
    setTimeout(function () {
      mousePosition = null;
    }, 100);
  };

  document.documentElement.addEventListener('click', getClickPosition, true);
}
/**
 *
 * 弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */


var Popup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      visible = props.visible,
      onClose = props.onClose,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? animationFast : _props$duration,
      _props$flip = props.flip,
      flip = _props$flip === void 0 ? true : _props$flip,
      mountContainer = props.mountContainer,
      _props$unmountOnExit = props.unmountOnExit,
      unmountOnExit = _props$unmountOnExit === void 0 ? true : _props$unmountOnExit,
      style = props.style,
      className = props.className;
  var wrapRef = React.useRef();
  var maskRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  }); // const lastMousePositionRef = useRef<MousePosition>();

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  var showPosition = mountNode === document.body ? 'fixed' : 'absolute';
  var setTransformOrigin = React.useCallback(function (mousePosition) {
    var dialogEl = wrapRef.current;

    if (mousePosition && mousePosition.x >= 0 && mousePosition.y >= 0 && dialogEl && dialogEl.getBoundingClientRect) {
      var _dialogEl$getBounding = dialogEl.getBoundingClientRect(),
          x = _dialogEl$getBounding.left,
          y = _dialogEl$getBounding.top;

      var origin = "".concat(mousePosition.x - x, "px ").concat(mousePosition.y - y, "px 0");
      dialogEl.style.transformOrigin = origin;
      dialogEl.style.transitionDuration = '0s'; // flip: hey yoo reflow

      document.body.offsetHeight;
      dialogEl.style.transitionDuration = duration + 'ms';
    } else {
      setTimeout(function () {
        if (dialogEl) {
          dialogEl.style.transformOrigin = 'unset';
        }
      }, duration);
    }
  }, [duration]);
  React.useLayoutEffect(function () {
    if (!isMobile && position === 'center' && flip) {
      if (visible) {
        setTransformOrigin(mousePosition);
      } else {
        setTransformOrigin(null);
      }
    }
  }, [visible, position, setTransformOrigin, flip]);
  React.useLayoutEffect(function () {
    if (mask && visible && maskRef.current) {
      var wrapZIndex = window.getComputedStyle(wrapRef.current, null).getPropertyValue('z-index');

      if (wrapZIndex) {
        maskRef.current.style.zIndex = wrapZIndex;
      }
    }
  }, [mask, visible]);
  return /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(Mask, {
    visible: visible && mask,
    ref: maskRef,
    className: maskClass,
    duration: duration,
    style: _objectSpread2({
      position: showPosition
    }, maskStyle),
    onClick: function onClick() {
      return closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    "in": visible,
    timeout: duration,
    unmountOnExit: unmountOnExit
  }, function (status) {
    return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, {
      ref: wrapRef,
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        position: showPosition,
        transitionDuration: duration + 'ms'
      }),
      className: clsx__default['default']('uc-popup', className, position, status, position + '-' + status, {
        mobile: isMobile,
        pc: !isMobile
      })
    }, children);
  })), mountNode);
});
Popup.displayName = 'UC-Popup';

function toArray(children) {
  var ret = [];
  React.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (reactIs.isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
/**
 * attach static props to component
 *
 * @export
 * @template C
 * @template P
 * @param {C} component
 * @param {P} properties
 * @return {*}  {(C & P)}
 */

function attachPropertiesToComponent(component, properties) {
  var ret = component;

  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }

  return ret;
}

var _excluded$1 = ["size", "align", "className", "children", "direction", "split", "style", "wrap"];

var _templateObject$2;

function SpaceItem(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'uc-space-item' : _ref$className,
      direction = _ref.direction,
      index = _ref.index,
      marginDirection = _ref.marginDirection,
      children = _ref.children,
      split = _ref.split,
      wrap = _ref.wrap;

  var _React$useContext = React.useContext(SpaceContext),
      horizontalSize = _React$useContext.horizontalSize,
      verticalSize = _React$useContext.verticalSize,
      latestIndex = _React$useContext.latestIndex,
      supportFlexGap = _React$useContext.supportFlexGap;

  var style = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        };
      }
    } else {
      style = _objectSpread2(_objectSpread2({}, index < latestIndex && _defineProperty({}, marginDirection, horizontalSize / (split ? 2 : 1))), wrap && {
        paddingBottom: verticalSize
      });
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-split"),
    style: style
  }, split));
}

var SpaceContext = /*#__PURE__*/React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
var flexDirectionMap = {
  horizontal: 'row',
  vertical: 'column'
};
var StyledSpace = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"])), function (_ref3) {
  var direction = _ref3.direction;
  return flexDirectionMap[direction];
}, function (_ref4) {
  var align = _ref4.align;
  return align;
});
/** 间距 */

var Space = function Space(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 8 : _props$size,
      align = props.align,
      className = props.className,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      split = props.split,
      style = props.style,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? false : _props$wrap,
      otherProps = _objectWithoutProperties(props, _excluded$1);

  var supportFlexGap = detectFlexGapSupported();

  var _React$useMemo = React.useMemo(function () {
    return Array.isArray(size) ? size : [size, size];
  }, [size]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      horizontalSize = _React$useMemo2[0],
      verticalSize = _React$useMemo2[1];

  var childNodes = toArray(children);
  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var marginDirection = 'marginRight'; // Calculate latest one

  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */


    return /*#__PURE__*/React.createElement(SpaceItem, {
      className: className,
      key: i,
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
    /* eslint-enable */
  });
  var spaceContext = React.useMemo(function () {
    return {
      horizontalSize: horizontalSize,
      verticalSize: verticalSize,
      latestIndex: latestIndex,
      supportFlexGap: supportFlexGap
    };
  }, [horizontalSize, verticalSize, latestIndex, supportFlexGap]);

  if (childNodes.length === 0) {
    return null;
  }

  var gapStyle = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return /*#__PURE__*/React.createElement(StyledSpace, _extends({
    direction: direction,
    align: mergedAlign,
    className: clsx__default['default'](className, 'uc-space'),
    style: _objectSpread2(_objectSpread2({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/React.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes));
};

Space.displayName = 'UC-Space';

var intersectionObserver;
var handlers = new Map();

if (isBrowser) {
  intersectionObserver = new IntersectionObserver(function (entries) {
    var _iterator = _createForOfIteratorHelper(entries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        var el = entry.target;

        if (handlers.has(el)) {
          var _handlers$get;

          (_handlers$get = handlers.get(el)) === null || _handlers$get === void 0 ? void 0 : _handlers$get(entry.isIntersecting);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}
/**
 * 使用IntersectionObserver监视dom元素在文档视口的可见性
 *
 * @param {Element} el 监听dom元素
 * @param {Handler} action 元素isIntersecting状态变化回调
 */


var observe = function observe(el, action) {
  if (el) {
    var _intersectionObserver, _intersectionObserver2;

    (_intersectionObserver = (_intersectionObserver2 = intersectionObserver).observe) === null || _intersectionObserver === void 0 ? void 0 : _intersectionObserver.call(_intersectionObserver2, el);
    handlers.set(el, action);
  }
};
/**
 * 取消监视
 *
 * @param {Element} el
 */

var unobserve = function unobserve(el) {
  if (el) {
    var _intersectionObserver3, _intersectionObserver4;

    (_intersectionObserver3 = (_intersectionObserver4 = intersectionObserver).unobserve) === null || _intersectionObserver3 === void 0 ? void 0 : _intersectionObserver3.call(_intersectionObserver4, el);
    handlers["delete"](el);
  }
};

/* eslint-disable react-hooks/exhaustive-deps */
/**
 * 监视元素在文档视口的可见性，可见性变化时触发回调
 *
 * @param {RefObject<HTMLElement>} elRef 监视元素ref
 * @param {(visible: boolean) => void} onVisibleChange 回调
 * @param {boolean} [unobserveWhenVisible=true] 元素可见时取消监控，默认true
 */

var useVisibleObserve = function useVisibleObserve(elRef, onVisibleChange) {
  var unobserveWhenVisible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  React.useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      onVisibleChange(visible);

      if (unobserveWhenVisible && visible) {
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);
};

var getClassName = function getClassName(state) {
  var fromClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'from';
  var toClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'to';

  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return fromClass;
  }
};
/**
 *  子元素执行transition过渡动画
 *  fromClass定义初始状态类名，默认:from
 *  toClass 定义最终状态类名，默认:to
 *  执行时机:
 *  1.初次mount并在可视区域
 *  2.从不可见到可见状态
 */


var TransitionElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? animationNormal : _props$duration,
      _props$fromClass = props.fromClass,
      fromClass = _props$fromClass === void 0 ? 'from' : _props$fromClass,
      _props$toClass = props.toClass,
      toClass = _props$toClass === void 0 ? 'to' : _props$toClass;
  var elRef = React.useRef();

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isInViewport = _useState2[0],
      setIsInViewport = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useVisibleObserve(elRef, setIsInViewport);
  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
      "in": isInViewport,
      timeout: duration
    }, function (state) {
      var _children$props, _children$props2;

      return /*#__PURE__*/React__default['default'].cloneElement(children, {
        ref: elRef,
        className: clsx__default['default']((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, getClassName(state, fromClass, toClass)),
        style: _objectSpread2(_objectSpread2({}, (_children$props2 = children.props) === null || _children$props2 === void 0 ? void 0 : _children$props2.style), {}, {
          transitionDuration: duration + 'ms'
        })
      });
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('TransitionElement:子元素必须为ReactElement');
    }

    return children;
  }
});
TransitionElement.displayName = 'UC-TransitionElement';

/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
var AnimationElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? '1s' : _props$duration,
      _props$name = props.name,
      name = _props$name === void 0 ? 'none' : _props$name,
      _props$timingFunc = props.timingFunc,
      timingFunc = _props$timingFunc === void 0 ? 'ease' : _props$timingFunc,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? '0s' : _props$delay,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'normal' : _props$direction,
      _props$iterationCount = props.iterationCount,
      iterationCount = _props$iterationCount === void 0 ? 1 : _props$iterationCount,
      _props$fillMode = props.fillMode,
      fillMode = _props$fillMode === void 0 ? 'backwards' : _props$fillMode;
  var elRef = React.useRef();

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isInViewport = _useState2[0],
      setIsInViewport = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });

  var _ref = (children === null || children === void 0 ? void 0 : children.props) || {},
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  useVisibleObserve(elRef, setIsInViewport);

  var newStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    animation: "".concat(duration, " ").concat(timingFunc, " ").concat(delay, " ").concat(iterationCount, " ").concat(direction, " ").concat(fillMode, " ").concat(isInViewport ? 'running' : 'paused', " ").concat(name)
  });

  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].cloneElement(children, {
      ref: elRef,
      style: newStyle
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('AnimationElement:子元素必须为ReactElement');
    }

    return children;
  }
});
AnimationElement.displayName = 'UC-AnimationElement';

var _excluded$2 = ["width", "height", "style", "children"];

/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
var LazyLoadElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$2);

  var elRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        setReady(true);
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
  var newStyle = !ready ? _objectSpread2({
    display: 'inline-block',
    width: width,
    height: height
  }, style) : style;
  return !ready ? /*#__PURE__*/React__default['default'].createElement("span", _extends({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: elRef
  }) : children;
});
LazyLoadElement.displayName = 'UC-LazyLoadElement';

var _excluded$3 = ["width", "height", "style", "src"];

var _templateObject$3;
var StyledPlaceholder = styled__default['default'].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n"])));
/** 懒加载图片，当做img标签使用, 在视口才加载图片 */

var LazyLoadImage = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      src = props.src,
      rest = _objectWithoutProperties(props, _excluded$3);

  var elRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        setReady(true);
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
  var newStyle = !ready || !loaded ? _objectSpread2({
    width: width,
    height: height
  }, style) : style;

  var onImageLoaded = function onImageLoaded() {
    setLoaded(true);
  };

  return !ready ? /*#__PURE__*/React__default['default'].createElement(StyledPlaceholder, _extends({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React__default['default'].createElement("img", _extends({}, rest, {
    ref: elRef,
    onLoad: onImageLoaded,
    width: width,
    height: height,
    src: src,
    style: newStyle
  }));
});
LazyLoadImage.displayName = 'UC-LazyLoadImage';

/** 延迟渲染子元素, 一般用于防止loading闪烁等问题 */
var WaitLoading = function WaitLoading(props) {
  var _props$wait = props.wait,
      wait = _props$wait === void 0 ? 700 : _props$wait,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      children = props.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var ref = React.useRef();
  React.useEffect(function () {
    if (visible) {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      ref.current = window.setTimeout(function () {
        setShow(true);
      }, wait);
    } else {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setShow(false);
    }

    return function () {
      setShow(false);
      clearTimeout(ref.current);
    };
  }, [visible, wait]);
  return show ? children : null;
};

var _excluded$4 = ["wait", "loading", "className"];

var _templateObject$4;
var StyledSpin = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  @-webkit-keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n  @keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n\n  display: inline-flex;\n  position: relative;\n  width: 1em;\n  height: 1em;\n  vertical-align: middle;\n  animation: loading 1s steps(60, end) infinite;\n  :before,\n  :after {\n    content: '';\n    display: block;\n    width: 0.5em;\n    height: 1em;\n    box-sizing: border-box;\n    border: 0.125em solid;\n    border-color: currentColor;\n  }\n  :before {\n    border-right-width: 0;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n    mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n  :after {\n    border-left-width: 0;\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n"])));
/** 加载中指示器,继承父容器颜色和字体大小 */

var Spin = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var wait = _ref.wait,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? true : _ref$loading,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$4);

  var waitTime = typeof wait === 'number' && wait > 0 ? wait : typeof wait === 'boolean' && wait === true ? 700 : 0;
  var el = /*#__PURE__*/React__default['default'].createElement(StyledSpin, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-spin')
  }));
  return waitTime > 0 ? /*#__PURE__*/React__default['default'].createElement(WaitLoading, {
    visible: loading,
    wait: waitTime
  }, el) : el;
});
Spin.displayName = 'UC-Spin';

/**
 * 监听元素是否在视口内
 *
 * @param {RefObject<HTMLElement>} ref
 * @param {*} [rootRef=null]
 * @param {({
 *     rootMargin?: string;
 *     threshold?: number | number[];
 *   })} [options]
 * @return {*}  {boolean}
 */

function useInViewport(ref) {
  var rootRef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var options = arguments.length > 2 ? arguments[2] : undefined;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      inViewPort = _useState2[0],
      setInViewport = _useState2[1];

  React.useEffect(function () {
    if (ref.current) {
      // eslint-disable-next-line no-undef
      var opt = _objectSpread2({}, options);

      if (rootRef) {
        opt.root = rootRef.current;
      }

      var observer = new IntersectionObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.isIntersecting) {
              setInViewport(true);
            } else {
              setInViewport(false);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }, opt);
      observer.observe(ref.current);
      return function () {
        observer.disconnect();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return inViewPort;
}

/**
 * 使用前一个值
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {T}
 */

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var _excluded$5 = ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "finished", "className", "useWindowScroll", "style", "height", "children", "footer"];

var _templateObject$5;
var StyledWrap = styled__default['default'].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  user-select: none;\n  position: relative;\n  &.use-dom-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .loading {\n    color: #999;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n  }\n"]))); // check isInViewport in vertical direction

function isInViewport(el, container) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      bottom = _el$getBoundingClient.bottom;

  if (!container) {
    return bottom >= 0 && top < window.innerHeight;
  } else {
    var brc = container.getBoundingClientRect();
    return bottom <= brc.bottom && top >= brc.top;
  }
}

var DefaultLoadingText = /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Spin, null), "\u52A0\u8F7D\u4E2D");
/**
 *  上拉无限滚动
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */

var Pullup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$dataList = props.dataList,
      dataList = _props$dataList === void 0 ? [] : _props$dataList,
      _props$dataRender = props.dataRender,
      dataRender = _props$dataRender === void 0 ? function () {
    return null;
  } : _props$dataRender,
      fetchData = props.fetchData,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? DefaultLoadingText : _props$loadingText,
      _props$finishedText = props.finishedText,
      finishedText = _props$finishedText === void 0 ? '我是有底线的' : _props$finishedText,
      _props$finished = props.finished,
      finished = _props$finished === void 0 ? false : _props$finished,
      className = props.className,
      _props$useWindowScrol = props.useWindowScroll,
      useWindowScroll = _props$useWindowScrol === void 0 ? true : _props$useWindowScrol,
      style = props.style,
      height = props.height,
      children = props.children,
      footer = props.footer,
      rest = _objectWithoutProperties(props, _excluded$5);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var waypointRef = React.useRef();
  var wrapRef = React.useRef();
  var isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : wrapRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  });
  React.useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(waypointRef.current, useWindowScroll ? null : wrapRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      })["catch"](function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);

  if (!useWindowScroll && !height) {
    throw new Error('Pullup: useWindowScroll为false，必须通过height设置容器高度');
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap, _extends({
    ref: wrapRef
  }, rest, {
    className: clsx__default['default']('uc-pullup', className, {
      'use-dom-scroll': !useWindowScroll,
      'use-window-scroll': useWindowScroll
    }),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    })
  }), children, dataList.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: idx
    }, dataRender(item, idx));
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "waypoint",
    style: {
      fontSize: 0
    },
    ref: waypointRef
  }), typeof footer === 'function' ? footer(loading, finished) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "loading"
  }, loading ? loadingText : finished ? finishedText : null));
});
Pullup.displayName = 'UC-Pullup';

var _excluded$6 = ["position", "borderRadius", "color", "className", "mobile", "children"];

var _templateObject$6;
/** 显示1px的边 */

var StyledDiv = styled__default['default'].div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  position: relative;\n\n  &.mobile {\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      border-radius: ", "px;\n      ", ": 1px solid ", ";\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n\n  &.pc {\n    border-radius: ", "px;\n    ", ": 1px solid ", ";\n  }\n"])), function (_ref) {
  var borderRadius = _ref.borderRadius;
  return borderRadius;
}, function (_ref2) {
  var position = _ref2.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var borderRadius = _ref4.borderRadius;
  return borderRadius;
}, function (_ref5) {
  var position = _ref5.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_ref6) {
  var color = _ref6.color;
  return color;
});
/** 移动端1像素边框容器 */

var HairLineBox = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$borderRadius = props.borderRadius,
      borderRadius = _props$borderRadius === void 0 ? 0 : _props$borderRadius,
      _props$color = props.color,
      color = _props$color === void 0 ? '#dcdcdc' : _props$color,
      className = props.className,
      _props$mobile = props.mobile,
      mobile = _props$mobile === void 0 ? true : _props$mobile,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$6);

  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-hairlinebox', className, {
      mobile: isMobile,
      pc: !isMobile && !mobile
    }),
    position: position,
    color: color,
    borderRadius: borderRadius
  }), children);
});
HairLineBox.displayName = 'UC-HairLineBox';

var _templateObject$7;
/**
 *  获取包含主题色的styled-components css片段
 *
 * @param {string} css属性
 * @param {string} [leftValue=''] 左侧值
 * @return {*}  {*}
 */

var getThemeColorCss = function getThemeColorCss(prop) {
  var leftValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return styled.css(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n    ", ":", " ", ";\n    ", ":", " var(--uc-color, ", ");\n  "])), prop, leftValue, function (props) {
    return props.theme.color || primary;
  }, prop, leftValue, primary);
};
/**
 *  get theme color from root el
 *
 * @return {*}
 */

var getRootCssVarColor = function getRootCssVarColor() {
  return isBrowser && document.documentElement.style.getPropertyValue('--uc-color');
};

/* eslint-disable react-hooks/exhaustive-deps */
/**
 *  执行异步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateEffect = function useUpdateEffect(effect) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isMounted = React.useRef(false);
  React.useEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
var debounce = function debounce(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timer = 0;
  return function a() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var that = this;

    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, args);
    }, timeout);
  };
};
/**
 * 节流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */

var throttle = function throttle(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var start = 0;
  var timer = 0;

  var ensureExecute = function ensureExecute(now, args, that) {
    if (!last) return;

    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, args);
      start = now;
    }, timeout);
  };

  return function () {
    var that = this;
    var now = Date.now();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!start) {
      start = now;
      ensureExecute(now, args, that);
      return;
    }

    if (now - start >= timeout) {
      ensureExecute(now, args, that);
      fn.apply(that, args);
      start = now;
    }
  };
};

var defaultEqualFn = function defaultEqualFn(a, b) {
  return a === b;
};
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */


var uniqArray = function uniqArray(arr) {
  var equalFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualFn;
  var rt = [];

  if (Array.isArray(arr)) {
    arr.map(function (item) {
      if (!rt.find(function (d) {
        return equalFn(item, d);
      })) {
        rt.push(item);
      }
    });
  }

  return rt;
};
var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * 扁平化对象数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @param {string} [childrenProp='children'] 子数组属性, 默认 children
 * @return {*}  {T[]}
 */

var flatArray = function flatArray(arr) {
  var childrenProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

  if (Array.isArray(arr)) {
    return arr.reduce(function (a, v) {
      if (Array.isArray(v)) {
        a = a.concat(flatArray(v, childrenProp));
      } else if (isObject(v)) {
        a = a.concat(v);

        if (Array.isArray(v[childrenProp])) {
          a = a.concat(flatArray(v[childrenProp], childrenProp));
        }
      }

      return a;
    }, []);
  }

  return arr;
};
/**
 * 扁平化简单数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @return {*}  {T[]}
 */

var flatSimpleArray = function flatSimpleArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(function (a, v) {
      return a.concat(Array.isArray(v) ? flatSimpleArray(v) : v);
    }, []);
  }

  return arr;
};
/**
 *  sleep 一段时间
 *
 * @param {number} time
 */

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};
/**
 * 深复制
 *
 * @template T
 * @param {T} src
 * @return {*}  {T}
 */

var deepClone = function deepClone(src) {
  if (!src || _typeof(src) !== 'object') return src;
  var dest = Array.isArray(src) ? [] : {};

  for (var _i = 0, _Object$keys = Object.keys(src); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (!dest.hasOwnProperty(key)) {
      var val = src[key];
      dest[key] = deepClone(val);
    }
  }

  return dest;
};

/**
 *  保存最新的值在ref中
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */

function useCallbackRef(value) {
  var ref = React.useRef(value);
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* eslint-disable react-hooks/exhaustive-deps */
/**
 *  组件加载执行回调
 *
 * @param {() => void} fn 加载执行的回调
 */

var useMount = function useMount(fn) {
  var isMounted = React.useRef(false);
  React.useLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
      fn === null || fn === void 0 ? void 0 : fn();
    }
  }, []);
};

var _excluded$7 = ["children", "underline", "value", "defaultValue", "border", "onChange", "extra", "swipe", "className"];

var _templateObject$8, _templateObject2;
var StyledWrapper$1 = styled__default['default'].div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  -webkit-tap-highlight-color: transparent;\n  .uc-tabs-content-wrap {\n    overflow: hidden;\n  }\n  .uc-tabs-header-wrap {\n    display: flex;\n    height: 44px;\n    box-sizing: border-box;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    .uc-tabs-extra {\n      margin-left: 16px;\n    }\n  }\n"])), border);
var StyledTabHeadItem = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  flex: none;\n  width: 56px;\n  user-select: none;\n\n  &.active {\n    ", "\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    &.uc-tabs-header-line {\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transition: transform 0.3s ease;\n      transform: translate3d(", ", 0, 0);\n\n      .line {\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        ", "\n      }\n    }\n  }\n"])), getThemeColorCss('color'), disabledText, function (props) {
  return props.value * 100 + '%';
}, getThemeColorCss('background-color'));
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */

var Tab = function Tab(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children);
}; //#endregion

/**
 * 选项卡切换
 */


var Tabs = function Tabs(_ref2) {
  var children = _ref2.children,
      _ref2$underline = _ref2.underline,
      underline = _ref2$underline === void 0 ? '50%' : _ref2$underline,
      value = _ref2.value,
      _ref2$defaultValue = _ref2.defaultValue,
      defaultValue = _ref2$defaultValue === void 0 ? 0 : _ref2$defaultValue,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? true : _ref2$border,
      onChange = _ref2.onChange,
      extra = _ref2.extra,
      swipe = _ref2.swipe,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, _excluded$7);

  var count = React__default['default'].Children.count(children);
  var underlineElRef = React.useRef();
  var contentWrapElRef = React.useRef();
  var headerWrapElRef = React.useRef();

  var _useState = React.useState(typeof value === 'undefined' ? defaultValue : value),
      _useState2 = _slicedToArray(_useState, 2),
      _v = _useState2[0],
      _setV = _useState2[1];

  var valRef = useCallbackRef(_v);
  var onChangeRef = useCallbackRef(onChange);
  React.useLayoutEffect(function () {
    var fg;

    if (swipe && contentWrapElRef.current) {
      var el = contentWrapElRef.current;
      fg = new Touch__default['default'](el, {
        onSwipe: function onSwipe(e) {
          if (e.direction === 'right' && valRef.current > 0) {
            var _onChangeRef$current;

            // go to left tab
            var prevIndex = valRef.current - 1;

            _setV(prevIndex);

            (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, prevIndex);
          } else if (e.direction === 'left' && valRef.current < count - 1) {
            var _onChangeRef$current2;

            // go to right tab
            var nextIndex = valRef.current + 1;

            _setV(nextIndex);

            (_onChangeRef$current2 = onChangeRef.current) === null || _onChangeRef$current2 === void 0 ? void 0 : _onChangeRef$current2.call(onChangeRef, nextIndex);
          }
        }
      });
    }

    return function () {
      if (swipe && fg) {
        var _fg;

        (_fg = fg) === null || _fg === void 0 ? void 0 : _fg.destroy();
      }
    };
  }, [swipe, valRef, count, onChangeRef]);
  useUpdateEffect(function () {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);
  React.useLayoutEffect(function () {
    var setUnderlineSize = throttle(function () {
      var underlineEl = underlineElRef.current;

      if (underline && underlineEl) {
        var next = underlineEl.nextSibling;

        if (next) {
          underlineEl.style.width = next.offsetWidth + 'px';
        }
      }
    }, 34);

    if (underline) {
      window.addEventListener('resize', setUnderlineSize);
    }

    setUnderlineSize();
    return function () {
      if (underline) {
        window.removeEventListener('resize', setUnderlineSize);
      }
    };
  }, [underline]);
  var prevVal = usePrevious(_v);
  React.useEffect(function () {
    var headerWrapEl = headerWrapElRef.current;

    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      var itemEl = headerWrapEl.querySelector('.uc-tabs-header-item');

      if (itemEl) {
        if (_v > prevVal) {
          // right
          headerWrapEl.scroll({
            left: (_v + 3) * itemEl.offsetWidth - headerWrapEl.offsetWidth,
            behavior: 'smooth'
          });
        } else {
          // left
          headerWrapEl.scroll({
            left: (_v - 2) * itemEl.offsetWidth,
            behavior: 'smooth'
          });
        }
      } else if (itemEl.offsetWidth * (_v + 1) <= headerWrapEl.offsetWidth && headerWrapEl.scrollLeft > 0) {
        headerWrapEl.scroll({
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }, [_v, prevVal]);
  useMount(function () {
    var headerWrapEl = headerWrapElRef.current;

    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      var itemEl = headerWrapEl.querySelector('.uc-tabs-header-item'); // scroll

      headerWrapEl.scroll({
        left: (_v - 2) * itemEl.offsetWidth
      });
    }
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$1, _extends({}, rest, {
    className: clsx__default['default']('uc-tabs', className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-tabs-header-wrap', {
      'no-border': !border
    }),
    ref: headerWrapElRef
  }, underline && /*#__PURE__*/React__default['default'].createElement(StyledTabHeadItem, {
    ref: underlineElRef,
    className: clsx__default['default']('uc-tabs-header-item', 'uc-tabs-header-line'),
    count: count,
    value: _v
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "line",
    style: {
      width: typeof underline === 'boolean' ? '100%' : underline
    }
  })), React__default['default'].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      var _ref3 = child.props,
          _ref3$title = _ref3.title,
          title = _ref3$title === void 0 ? '' : _ref3$title,
          disabled = _ref3.disabled;
      return /*#__PURE__*/React__default['default'].createElement(StyledTabHeadItem, {
        key: index,
        className: clsx__default['default']('uc-tabs-header-item', {
          active: index === _v,
          disabled: disabled
        }),
        onClick: function onClick() {
          if (!disabled && index !== _v) {
            onChange === null || onChange === void 0 ? void 0 : onChange(index);

            _setV(index);
          }
        }
      }, title);
    }
  }), extra && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('uc-tabs-extra', {
      underline: underline
    })
  }, extra)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-tabs-content-wrap",
    ref: contentWrapElRef
  }, React__default['default'].Children.map(children, function (child, index) {
    if (_v === index && /*#__PURE__*/React__default['default'].isValidElement(child)) {
      return child;
    }
  })));
};

var Tabs$1 = attachPropertiesToComponent(Tabs, {
  /** 子项 */
  Tab: Tab
});

var _excluded$8 = ["title", "required", "label", "labelWidth", "description", "className", "content", "lineColor", "children"];

var _templateObject$9;
var StyledCell = styled__default['default'].div(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  background-color: #fff;\n\n  &.clickable {\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  &.has-label {\n    padding-left: 12px;\n  }\n\n  .cell-inner {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 12px 10px 0;\n    overflow: hidden;\n    font-size: 14px;\n    line-height: 24px;\n\n    &.pc {\n      align-items: center;\n    }\n\n    .cell-label {\n      box-sizing: border-box;\n      margin-right: 12px;\n      text-align: left;\n      flex: 1;\n\n      .label {\n        color: #333;\n\n        &.required::before {\n          content: '*';\n          margin-right: 2px;\n          color: ", ";\n          vertical-align: middle;\n        }\n      }\n\n      .description {\n        color: #999;\n        margin-top: 4px;\n        line-height: 18px;\n        font-size: 12px;\n      }\n\n      &.input {\n        word-wrap: break-word;\n        width: 6.2em;\n        flex: none;\n      }\n    }\n    .cell-content {\n      flex: 1;\n      position: relative;\n      overflow: visible;\n      color: #999;\n      text-align: right;\n      vertical-align: middle;\n      word-wrap: break-word;\n\n      &.input {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n"])), activeBg, danger);
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var title = props.title,
      required = props.required,
      label = props.label,
      labelWidth = props.labelWidth,
      description = props.description,
      className = props.className,
      content = props.content,
      _props$lineColor = props.lineColor,
      lineColor = _props$lineColor === void 0 ? border : _props$lineColor,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$8);

  if (content && children) {
    throw new Error("Cell: \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6Econtent\u548C\u5B50\u5143\u7D20");
  }

  var hasInput = !!children;
  var hasLabel = label || title;
  return /*#__PURE__*/React__default['default'].createElement(StyledCell, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-cell', className, {
      'clickable': typeof rest.onClick === 'function',
      'has-label': hasLabel
    })
  }), /*#__PURE__*/React__default['default'].createElement(HairLineBox, {
    color: lineColor,
    className: "cell-line"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-inner', {
      mobile: isMobile,
      pc: !isMobile
    })
  }, hasLabel && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-label', {
      input: hasInput
    }),
    style: {
      width: labelWidth
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('label', {
      required: required
    })
  }, label || title), description && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "description"
  }, description)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-content', {
      input: hasInput
    })
  }, content, children))));
});
Cell.displayName = 'UC-Cell';

var _excluded$9 = ["animated", "width", "height", "shape"],
    _excluded2 = ["style", "className"];

var _templateObject$a;
var StyledSkeletonBase = styled__default['default'].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"])));
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$animated = props.animated,
      animated = _props$animated === void 0 ? true : _props$animated,
      width = props.width,
      _props$height = props.height,
      height = _props$height === void 0 ? 16 : _props$height,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'rect' : _props$shape,
      other = _objectWithoutProperties(props, _excluded$9);

  var _other$style = other.style,
      style = _other$style === void 0 ? {} : _other$style,
      _other$className = other.className,
      className = _other$className === void 0 ? '' : _other$className,
      rest = _objectWithoutProperties(other, _excluded2);

  return /*#__PURE__*/React__default['default'].createElement(StyledSkeletonBase, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-skeleton', shape, {
      pulse: animated
    }, className),
    style: _objectSpread2({
      width: width,
      height: height
    }, style)
  }));
});
SkeletonBase.displayName = 'UC-SkeletonBase';

var _excluded$a = ["animated", "row", "rowWidth", "rowHeight", "avatar", "avatarSize", "className", "children", "loading"];

var _templateObject$b;
var StyledSkeleton = styled__default['default'].div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  .uc-skeleton {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n\n    &:nth-child(2) {\n      margin-top: 20px;\n    }\n  }\n\n  &.avatar {\n    display: flex;\n\n    > .avatar {\n      flex: none;\n    }\n\n    > .rows {\n      flex: 1;\n      margin-left: 16px;\n      padding-top: 8px;\n    }\n  }\n"])));
/** 骨架屏 */

var Skeleton = function Skeleton(props) {
  var _props$animated = props.animated,
      animated = _props$animated === void 0 ? true : _props$animated,
      _props$row = props.row,
      row = _props$row === void 0 ? 4 : _props$row,
      _props$rowWidth = props.rowWidth,
      rowWidth = _props$rowWidth === void 0 ? ['40%', '100%', '100%', '60%'] : _props$rowWidth,
      _props$rowHeight = props.rowHeight,
      rowHeight = _props$rowHeight === void 0 ? 16 : _props$rowHeight,
      avatar = props.avatar,
      _props$avatarSize = props.avatarSize,
      avatarSize = _props$avatarSize === void 0 ? 32 : _props$avatarSize,
      className = props.className,
      children = props.children,
      loading = props.loading,
      rest = _objectWithoutProperties(props, _excluded$a);

  if (row < 1) {
    throw new Error('row必须大于等于1,默认4');
  }

  var rowWidthAr = [];

  if (Array.isArray(rowWidth)) {
    if (row <= rowWidth.length) {
      rowWidthAr = rowWidth.slice(0, row);
    } else {
      while (rowWidth.length < row) {
        rowWidth.push('100%');
      }

      rowWidthAr = rowWidth;
    }
  } else {
    rowWidthAr = Array.from(new Array(row), function () {
      return rowWidth;
    });
  }

  return loading ? avatar ? /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({}, rest, {
    className: clsx__default['default']('uc-skeleton', {
      avatar: avatar
    }, className)
  }), /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
    animated: animated,
    shape: "circle",
    className: "avatar",
    width: avatarSize,
    height: avatarSize
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "rows"
  }, rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
      animated: animated,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  }))) : /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({}, rest, {
    className: clsx__default['default']({
      avatar: avatar
    }, className)
  }), rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
      animated: animated,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  })) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children);
};

var _excluded$b = ["type", "disabled", "active", "outlined", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "loading", "ghost", "onClick", "wait"];

var _templateObject$c;
var StyledButton = styled__default['default'].button(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  box-sizing: border-box;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  padding: 4px 16px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    ", " {\n      opacity: 0.8;\n    }\n    &.pc:hover,\n    &.outlined {\n      ", "\n      ", "\n    }\n\n    &.mobile:active {\n      background-color: ", ";\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.primary {\n    ", "\n    ", "\n    color: #fff;\n\n    ", " {\n      opacity: 0.8;\n    }\n\n    &.ghost,\n    &.ghost:hover,\n    &.ghost:active {\n      background-color: transparent !important;\n      ", "\n      ", "\n\n      &.danger {\n        color: ", ";\n      }\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.anchor {\n    border: none;\n    ", "\n    height: unset;\n    padding: unset;\n    margin: unset;\n    background: unset;\n  }\n\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:active {\n    opacity: 0.6;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"])), border, isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), activeBg, danger, danger, getThemeColorCss('background-color'), getThemeColorCss('border-color'), isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), danger, danger, danger, getThemeColorCss('color'), border, border);
/** 按钮 */

var Button = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      disabled = props.disabled,
      active = props.active,
      outlined = props.outlined,
      block = props.block,
      className = props.className,
      children = props.children,
      htmlType = props.htmlType,
      circle = props.circle,
      dashed = props.dashed,
      danger = props.danger,
      loading = props.loading,
      ghost = props.ghost,
      _onClick = props.onClick,
      wait = props.wait,
      rest = _objectWithoutProperties(props, _excluded$b);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      waiting = _useState2[0],
      setWaiting = _useState2[1];

  var waitTime = typeof wait === 'number' && wait > 0 ? wait : typeof wait === 'boolean' && wait === true ? 1000 : 0;
  var usingWait = waitTime > 0;
  var icon = props.icon || (loading ? /*#__PURE__*/React__default['default'].createElement(Spin, null) : null);
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    type: htmlType,
    onClick: function onClick(e) {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);

      if (usingWait) {
        setWaiting(true);
        setTimeout(function () {
          setWaiting(false);
        }, waitTime);
      }
    },
    className: clsx__default['default']('uc-btn', 'uc-button', type, {
      disabled: disabled || loading || waiting,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost,
      danger: danger,
      mobile: isMobile,
      pc: !isMobile,
      anchor: rest.as === 'a',
      outlined: outlined || active
    }, className)
  }), /*#__PURE__*/React__default['default'].createElement(Space, null, icon, children));
});
Button.displayName = 'UC-Button';

var _excluded$c = ["type", "className"];

var _templateObject$d;
var StyledIcon = styled__default['default'].span(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"])));
var SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
};
/** 图标 */

var Icon = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var type = props.type,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$c);

  return /*#__PURE__*/React__default['default'].createElement(StyledIcon, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-icon', className, type)
  }), /*#__PURE__*/React__default['default'].createElement("svg", SVGProps, /*#__PURE__*/React__default['default'].createElement("use", {
    xlinkHref: "#".concat(type)
  })));
});
Icon.displayName = 'UC-Icon';
/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */

Icon.loadFromIconfontCN = function (scriptUrl) {
  isBrowser && loadResource(scriptUrl);
}; // load ruc icons


Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');

var _excluded$d = ["size", "className", "button", "onChange", "defaultChecked", "mode", "checked", "disabled", "children", "indeterminate"];

var _templateObject$e, _templateObject2$1;
var StyledButton$1 = styled__default['default'](Button)(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  &.fill {\n    &.checked.default {\n      ", "\n      ", "\n      color: #fff;\n    }\n  }\n  &.outline {\n    &.checked {\n      ", "\n      ", "\n    }\n  }\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('border-color'), getThemeColorCss('border-color'), getThemeColorCss('color'));
var StyledCheckboxBaseWrapper = styled__default['default'].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n\n  .text {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.pc {\n    .checkbox:hover {\n      ", "\n    }\n  }\n\n  &.radio {\n    .checkbox {\n      border-radius: 50%;\n    }\n  }\n\n  &.checked {\n    .checkbox {\n      ", "\n      ", "\n    }\n  }\n\n  &.disabled {\n    .checkbox {\n      border-color: ", ";\n    }\n  }\n\n  .checkbox {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background: #fff;\n    color: #fff;\n  }\n"])), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('border', '1px solid'), border, border);
/** Checkbox/Radiobox 的基础 */

var CheckboxBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      className = props.className,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'checkbox' : _props$mode,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children,
      indeterminate = props.indeterminate,
      rest = _objectWithoutProperties(props, _excluded$d);

  var _useState = React.useState(typeof checked === 'boolean' ? checked : defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      c = _useState2[0],
      setC = _useState2[1];

  useUpdateEffect(function () {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);

  var onClick = function onClick() {
    if (disabled) return;

    if (mode === 'checkbox' || c !== true) {
      var n = !c;
      setC(n);
      onChange === null || onChange === void 0 ? void 0 : onChange(n);
    }
  };

  return button ? /*#__PURE__*/React__default['default'].createElement(StyledButton$1, _extends({}, rest, {
    ref: ref,
    onClick: onClick,
    className: clsx__default['default'](className, {
      fill: button === 'fill',
      outline: button === 'outline' || button === true,
      checked: c,
      disabled: disabled
    })
  }), children) : /*#__PURE__*/React__default['default'].createElement(StyledCheckboxBaseWrapper, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-checkbox', mode, className, {
      disabled: disabled,
      checked: c || indeterminate,
      mobile: isMobile,
      pc: !isMobile
    }),
    onClick: onClick
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('checkbox'),
    style: {
      width: size,
      height: size,
      fontSize: indeterminate ? size * 0.8 : size
    }
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: !indeterminate ? 'uc-icon-tick' : 'uc-icon-jian2'
  })), children && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, children));
});
CheckboxBase.displayName = 'UC-CheckboxBase';

/** 复选框 */
var Checkbox = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default['default'].createElement(CheckboxBase, _extends({}, props, {
    mode: "checkbox",
    ref: ref
  }));
});
Checkbox.displayName = 'UC-Checkbox';

var _excluded$e = ["className", "button", "onChange", "options", "value", "disabled"];

var _templateObject$f;
var StyledCheckboxGroup = styled__default['default'].div(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral([""])));
/** 一组复选框 */

var CheckboxGroup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      button = props.button,
      onChange = props.onChange,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$e);

  var onChangeRef = useCallbackRef(onChange);
  var onCheckboxChange = React.useCallback(function (checked, v) {
    var _onChangeRef$current;

    var vIndex = value.indexOf(v);

    if (!checked) {
      if (vIndex > -1) {
        value.splice(vIndex, 1);
      }
    } else {
      if (vIndex === -1) {
        value.push(v);
      }
    }

    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, _toConsumableArray(value));
  }, [value, onChangeRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledCheckboxGroup, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-checkbox-group')
  }), /*#__PURE__*/React__default['default'].createElement(Space, null, options.map(function (option) {
    var item = {};

    if (isObject(option)) {
      item.label = option.label;
      item.value = option.value;
    } else {
      item.label = option;
      item.value = option;
    }

    return /*#__PURE__*/React__default['default'].createElement(Checkbox, {
      className: "uc-checkbox-group-item",
      button: button,
      disabled: disabled,
      key: item.value,
      onChange: function onChange(c) {
        return onCheckboxChange(c, item.value);
      },
      checked: value.indexOf(item.value) > -1
    }, item.label);
  })));
});
CheckboxGroup.displayName = 'UC-CheckboxGroup';

var _excluded$f = ["size"];

/** 单选框 */
var Radio = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$f);

  return /*#__PURE__*/React__default['default'].createElement(CheckboxBase, _extends({}, rest, {
    size: size,
    mode: "radio",
    ref: ref
  }));
});
Radio.displayName = 'UC-Radio';

var _excluded$g = ["className", "button", "onChange", "options", "value", "disabled"];

var _templateObject$g;
var StyledRadioGroup = styled__default['default'].div(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral([""])));
/** 一组单选框 */

var RadioGroup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      button = props.button,
      onChange = props.onChange,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$g);

  var onChangeRef = useCallbackRef(onChange);
  var onCheckboxChange = React.useCallback(function (checked, v) {
    if (checked) {
      var _onChangeRef$current;

      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, v);
    }
  }, [onChangeRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledRadioGroup, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-radio-group')
  }), /*#__PURE__*/React__default['default'].createElement(Space, null, options.map(function (option) {
    var item = {};

    if (isObject(option)) {
      item.label = option.label;
      item.value = option.value;
    } else {
      item.label = option;
      item.value = option;
    }

    return /*#__PURE__*/React__default['default'].createElement(Radio, {
      button: button,
      disabled: disabled,
      key: item.value,
      onChange: function onChange(c) {
        return onCheckboxChange(c, item.value);
      },
      checked: value === item.value
    }, item.label);
  })));
});
RadioGroup.displayName = 'UC-RadioGroup';

var _excluded$h = ["disabled", "checked", "defaultChecked", "className", "onChange"];

var _templateObject$h;
var StyledSwitch = styled__default['default'].div(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  border-radius: 100px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  transition: all 0.3s ease;\n\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  -moz-appearance: none;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n\n  &::after {\n    background-color: #fff;\n    position: absolute;\n    left: 2px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    content: ' ';\n    cursor: pointer;\n    transition: left 0.3s ease-in-out;\n  }\n\n  &.checked {\n    ", "\n    ", "\n\n    &::after {\n      left: calc(100% - 20px);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n\n    &::after {\n      cursor: not-allowed;\n    }\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('border-color'));
/** 开关 */

var Switch = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var disabled = props.disabled,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      className = props.className,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$h);

  var _useState = React.useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _checked = _useState2[0],
      _setChecked = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(StyledSwitch, _extends({
    ref: ref,
    onClick: function onClick() {
      if (!disabled) {
        _setChecked(!_checked);

        onChange === null || onChange === void 0 ? void 0 : onChange(!_checked);
      }
    },
    className: clsx__default['default']('uc-switch', className, {
      disabled: disabled,
      checked: _checked
    })
  }, rest));
});
Switch.displayName = 'UC-Switch';

/**
 * 错误边界
 *
 * @export
 * @class ErrorBoundary
 * @extends {React.Component}
 */
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false,
      error: null
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var _this$props$onError, _this$props;

      (_this$props$onError = (_this$props = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props, error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(React__default['default'].Component);

var _excluded$i = ["type", "textPosition", "className", "dashed", "color", "children"];

var _templateObject$i;
var StyledDivider = styled__default['default'].div(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 16px 0;\n  padding: 0;\n  color: #000000d9;\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  border: none;\n  border-top: 1px solid ", ";\n\n  &.horizontal {\n    display: flex;\n    clear: both;\n    width: 100%;\n    min-width: 100%;\n  }\n\n  &.dashed {\n    border-top-style: dashed;\n  }\n\n  &.text {\n    border-top: 0;\n    .inner-text {\n      display: inline-block;\n      padding: 0 1em;\n      white-space: nowrap;\n      text-align: center;\n    }\n    &::before,\n    &::after {\n      width: 50%;\n      border-top: 1px solid ", ";\n      transform: translateY(50%);\n      content: '';\n    }\n\n    &.dashed {\n      &::before,\n      &::after {\n        border-top-style: dashed;\n      }\n    }\n\n    &.left {\n      &::before {\n        width: 5%;\n      }\n      &::after {\n        width: 95%;\n      }\n    }\n    &.right {\n      &::before {\n        width: 95%;\n      }\n      &::after {\n        width: 5%;\n      }\n    }\n  }\n\n  &.vertical {\n    position: relative;\n    top: -0.06em;\n    display: inline-block;\n    height: 0.9em;\n    margin: 0 8px;\n    vertical-align: middle;\n    border-top: 0;\n    border-left: 1px solid ", ";\n  }\n"])), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
});
/** 分割线 */

var Divider = function Divider(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'horizontal' : _props$type,
      _props$textPosition = props.textPosition,
      textPosition = _props$textPosition === void 0 ? 'center' : _props$textPosition,
      className = props.className,
      dashed = props.dashed,
      _props$color = props.color,
      color = _props$color === void 0 ? border : _props$color,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$i);

  var hasText = !!children;
  return /*#__PURE__*/React__default['default'].createElement(StyledDivider, _extends({}, rest, {
    color: color,
    className: clsx__default['default']('uc-divider', type, hasText ? textPosition : '', className, {
      dashed: dashed,
      text: hasText
    })
  }), hasText ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "inner-text"
  }, children) : null);
};

var _excluded$j = ["onChange", "disabled", "multiple", "accept", "capture", "children", "className"];

var _templateObject$j;
var StyledFileInputTrigger = styled__default['default'].div(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"])));
/** 触发文件上传 */

var FileInputTrigger = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var inputRef = React.useRef();

  var _onChange = props.onChange,
      disabled = props.disabled,
      multiple = props.multiple,
      accept = props.accept,
      capture = props.capture,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$j);

  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledFileInputTrigger, _extends({}, rest, {
    onClick: function onClick() {
      inputRef.current.value = '';
      inputRef.current.click();
    },
    className: clsx__default['default']('uc-file-input-trigger', className, {
      disabled: disabled
    })
  }), /*#__PURE__*/React__default['default'].createElement("input", {
    style: {
      display: 'none'
    },
    type: "file",
    ref: inputRef,
    accept: accept,
    multiple: multiple,
    capture: capture,
    disabled: disabled,
    onChange: function onChange(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.target.files && typeof _onChange === 'function') {
        _onChange(e.target.files);
      }
    }
  }), children);
});
FileInputTrigger.displayName = 'UC-FileInputTrigger';

var _excluded$k = ["onVisible", "onInVisible", "style", "className"];

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
var Waypoint = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var elRef = React.useRef();

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      style = props.style,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$k);

  var vv = useCallbackRef(onVisible);
  var vi = useCallbackRef(onInVisible);
  React.useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        var _vv$current;

        (_vv$current = vv.current) === null || _vv$current === void 0 ? void 0 : _vv$current.call(vv, elRef.current);
      } else {
        var _vi$current;

        (_vi$current = vi.current) === null || _vi$current === void 0 ? void 0 : _vi$current.call(vi, elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, [vv, vi]);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement("span", _extends({}, rest, {
    "data-role": "waypoint",
    className: clsx__default['default']('uc-waypoint', className),
    style: _objectSpread2({
      fontSize: 0
    }, style),
    ref: elRef
  }));
});
Waypoint.displayName = 'UC-Waypoint';

var _templateObject$k;
var StyledContainer = styled__default['default'].div(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["\n  .uc-indexlist-side {\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    transform: translateY(-50%);\n    cursor: pointer;\n    user-select: none;\n\n    .uc-indexlist-side-item {\n      padding: 0 8px 0 16px;\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 14px;\n      user-select: none;\n\n      &.active {\n        ", "\n      }\n    }\n  }\n\n  .bar-title {\n    top: 0;\n    z-index: 1;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 14px;\n    padding: 8px 16px;\n    background-color: #f5f5f5;\n    &.active {\n      ", "\n    }\n  }\n\n  .bar-item {\n    color: #666;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    overflow: hidden;\n    font-size: 14px;\n    background-color: #fff;\n    position: relative;\n    margin: 0;\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n\n      border-bottom: 1px solid #e0e0e0;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n"])), getThemeColorCss('color'), getThemeColorCss('color'));

var setActiveIndex = function setActiveIndex(containerRef, setIndex) {
  var els = _toConsumableArray(containerRef.current.querySelectorAll('.wp'));

  var _iterator = _createForOfIteratorHelper(els),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;

      if (el.dataset.visible === '1') {
        setIndex(Number(el.dataset.index));
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var renderItem = function renderItem(item, index, activeIndex, setIndex, containerRef, onItemClick) {
  var label = item.label,
      _item$subItems = item.subItems,
      subItems = _item$subItems === void 0 ? [] : _item$subItems;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
    key: index
  }, /*#__PURE__*/React__default['default'].createElement("dt", {
    id: "index-bar-" + index,
    className: clsx__default['default']('bar-title', {
      active: activeIndex === index
    })
  }, label, /*#__PURE__*/React__default['default'].createElement(Waypoint, {
    className: "wp",
    "data-index": index,
    onVisible: function onVisible(p) {
      p.dataset.visible = '1';
      setActiveIndex(containerRef, setIndex);
    },
    onInVisible: function onInVisible(p) {
      p.dataset.visible = '0';
      setActiveIndex(containerRef, setIndex);
    }
  })), subItems.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("dd", {
      className: "bar-item",
      onClick: function onClick() {
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
      },
      key: idx,
      "data-value": item.value
    }, item.label);
  }));
};
/** 索引列表 */


var IndexList = function IndexList(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      onItemClick = props.onItemClick,
      className = props.className;
  var ref = React.useRef();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(StyledContainer, {
    className: clsx__default['default']('uc-indexlist', className),
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement("dl", null, data.map(function (item, idx) {
    return renderItem(item, idx, index, setIndex, ref, onItemClick);
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-indexlist-side"
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('uc-indexlist-side-item', {
        active: idx === index
      }),
      key: idx,
      onClick: function onClick() {
        var el = ref.current.querySelector('#index-bar-' + idx);
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, item.label);
  })));
};

IndexList.displayName = 'UC-IndexList';

/**
 * 回到页面顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var ScrollToTop = function ScrollToTop(props) {
  var children = props.children,
      _props$visibilityHeig = props.visibilityHeight,
      visibilityHeight = _props$visibilityHeig === void 0 ? 100 : _props$visibilityHeig;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var top = 0;
  React.useLayoutEffect(function () {
    var onScroll = throttle(function () {
      if (window.pageYOffset >= visibilityHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [visibilityHeight]);

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React__default['default'].isValidElement(children)) {
      throw new Error('ScrollTop:子元素必须为ReactElement');
    }
  }

  return visible ? /*#__PURE__*/React__default['default'].cloneElement(children, {
    onClick: function onClick() {
      var _children$props$onCli, _children$props;

      (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props);
      var step = Math.abs(window.pageYOffset - top) / 20;

      var cb = function cb() {
        if (window.pageYOffset > top) {
          window.scrollTo(0, window.pageYOffset - step >= top ? window.pageYOffset - step : top);
          requestAnimationFrame(cb);
        }
      };

      requestAnimationFrame(cb);
    }
  }) : null;
};

ScrollToTop.displayName = 'UC-ScrollToTop';

/**
 * Get the window object using this function rather then simply use `window` because
 * there are cases where the window object we are seeking to reference is not in
 * the same window scope as the code we are running. (https://stackoverflow.com/a/37638629)
 */
var getWindow = function getWindow(node) {
  // if node is not the window object
  if (node.toString() !== '[object Window]') {
    // get the top-level document object of the node, or null if node is a document.
    var ownerDocument = node.ownerDocument; // get the window object associated with the document, or null if none is available.

    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
};
var getDocument = function getDocument(node) {
  return (isElement(node) ? node.ownerDocument : node.document) || window.document;
};
/* Get the Element that is the root element of the document which contains the node
 * (for example, the <html> element for HTML documents).
 */

var getDocumentElement = function getDocumentElement(node) {
  return getDocument(node).documentElement;
};
/* Get node's style info */

var getComputedStyle = function getComputedStyle(node) {
  return getWindow(node).getComputedStyle(node);
};
/* Get node's node name */

var getNodeName = function getNodeName(node) {
  return node ? (node.nodeName || '').toLowerCase() : '';
};
var getParentNode = function getParentNode(node) {
  if (!node || getNodeName(node) === 'html') {
    return node;
  }

  return (// If node is rooted at a custom element, meaning the node is part of a shadow DOM
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || // DOM Element detected
    // node.host || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
};
/* Check if node is an Element or a customized Element */

var isElement = function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
};
/* Check if node is an HTMLElement or a customized HTMLElement */

var isHTMLElement = function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}; // Check if node is an HTMLElement or a customized HTMLElement

var isTableElement = function isTableElement(node) {
  return ['table', 'td', 'th'].indexOf(getNodeName(node)) >= 0;
};

/** Get the containing block for fixed positioned element as they don't have offsetParent */

var getContainingBlock = function getContainingBlock(node, callback) {
  callback === null || callback === void 0 ? void 0 : callback(node);
  var currentNode = getParentNode(node);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    callback === null || callback === void 0 ? void 0 : callback(currentNode);
    var css = getComputedStyle(currentNode);
    /**
     * If the position property is absolute or fixed,
     * the containing block may also be formed by the
     * edge of the padding box of the nearest ancestor
     * element that has the following:
     */

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    }

    currentNode = getParentNode(currentNode);
  }

  return currentNode;
};
var getTrueOffsetParent = function getTrueOffsetParent(node) {
  if (!isHTMLElement(node) || getComputedStyle(node).position === 'fixed') {
    return null;
  }
  /**
   *  If there is no positioned ancestor element, the nearest ancestor td, th,
   *  table will be returned, or the body if there are no ancestor table elements either.
   */


  return node.offsetParent;
};
/**
 * Gets the closest ancestor positioned element.
 * Handles some edge cases, such as table ancestors and cross browser bugs.
 */

var getOffsetParent = function getOffsetParent(node, callback) {
  var window = getWindow(node);
  callback === null || callback === void 0 ? void 0 : callback(node);
  var offsetParent = getTrueOffsetParent(node);
  /* A Table element cannot be used as an offset parent,
   * as a <div> cannot appear as a child of <table>.
   */

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    callback === null || callback === void 0 ? void 0 : callback(offsetParent);
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  return offsetParent || getContainingBlock(node, callback) || window;
};
var getOffsetTop = function getOffsetTop(node) {
  var offsetTop = 0;
  getOffsetParent(node, function (node) {
    offsetTop += node.offsetTop;
  });
  return offsetTop;
};

var getScrollContainer = function getScrollContainer(node, callback) {
  var currentNode = getParentNode(node);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    var overflowY = css.overflowY;
    var isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';
    callback === null || callback === void 0 ? void 0 : callback(currentNode);

    if (isScrollable && currentNode.scrollHeight > currentNode.clientHeight) {
      return currentNode;
    }

    currentNode = currentNode.parentNode;
  }

  return getDocumentElement(node);
};

/** popup距离trigger el的距离 */

var MARGIN = 12;

/**
 * 根据选择器所选元素、modal 的长宽、用户定义的 placement 和 offset，获取 modal 的位置
 * Calculate the modal's position based on its anchor element, user-defined placement and offset
 * @param {HTMLElement} modalEl
 * @param {Element} anchorEl
 * @param {Element} parentEl
 * @param {string} placement
 * @param {object} customOffset
 */
var getModalStyle = function getModalStyle(modalEl, anchorEl, parentEl, scrollContainer) {
  var placement = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'bottom';
  var customOffset = arguments.length > 5 ? arguments[5] : undefined;
  var modalPos = modalEl.getBoundingClientRect();
  var anchorPos = anchorEl.getBoundingClientRect();
  var parentPos = parentEl.getBoundingClientRect(); // const { scrollTop } = scrollContainer;

  var isParentBody = getNodeName(parentEl) === 'body';
  var isAnchorFixed = getComputedStyle(anchorEl).position === 'fixed'; // const anchorOffsetTop = getOffsetTop(anchorEl);
  // backup
  // const scrollY = isAnchorFixed
  //   ? anchorPos.top
  //   : isParentBody
  //   ? anchorPos.top + scrollTop
  //   : anchorOffsetTop;

  var anchorTop = isAnchorFixed ? anchorPos.top : isParentBody ? anchorPos.top + window.pageYOffset : getOffsetTop(anchorEl);
  /* The distance between the top of the offsetParent and the top of the anchor.
   *
   * We don't simply use anchorEl.offsetTop but the below code instead due to the following reason:
   * for the cases with no mask, the anchorEl's should be positioned relative to the body rather than
   * its real offsetParent.
   */

  var top = anchorTop;
  var bottom = anchorPos.height + anchorTop;
  var left = anchorPos.left - (isAnchorFixed ? 0 : parentPos.left);
  var width = anchorPos.width,
      height = anchorPos.height;
  var transform = {
    'top': {
      // modal放到内容的上面
      top: top - modalPos.height - MARGIN,
      left: left + width / 2 - modalPos.width / 2
    },
    'bottom': {
      // modal放到内容的下面
      top: bottom + MARGIN,
      left: left + width / 2 - modalPos.width / 2
    },
    'left': {
      // modal放到内容的左边
      top: top + height / 2 - modalPos.height / 2,
      left: left - modalPos.width - MARGIN
    },
    'right': {
      // modal放到内容的右边
      top: top + height / 2 - modalPos.height / 2,
      left: left + width + MARGIN
    },
    'top-right': {
      // modal的bottom-border紧贴内容的top-border，right-borders水平对齐
      top: top - modalPos.height - MARGIN,
      left: left + width - modalPos.width
    },
    'top-left': {
      // modal的bottom-border紧贴内容的top-border，left-borders水平对齐
      top: top - modalPos.height - MARGIN,
      left: left
    },
    'bottom-right': {
      // modal的top-border紧贴内容的bottom-border，right-borders水平对齐
      top: bottom + MARGIN,
      left: left + width - modalPos.width
    },
    'bottom-left': {
      // modal的top-border紧贴内容的bottom-border，left-borders水平对齐
      top: bottom + MARGIN,
      left: left
    },
    'right-top': {
      // modal的left-border紧贴内容的right-border，top-borders水平对齐
      top: top,
      left: left + width + MARGIN
    },
    'left-top': {
      // modal的right-border紧贴内容的left-border，top-borders水平对齐
      top: top,
      left: left - modalPos.width - MARGIN
    },
    'right-bottom': {
      // modal的left-border紧贴内容的right-border，bottom-borders水平对齐
      top: bottom - modalPos.height,
      left: left + width + MARGIN
    },
    'left-bottom': {
      // modal的right-border紧贴内容的left-border，bottom-borders水平对齐
      top: bottom - modalPos.height,
      left: left - modalPos.width - MARGIN
    }
  };
  var offset = {
    x: customOffset.x || 0,
    y: customOffset.y || 0
  };
  var position = transform[placement];
  return {
    position: isAnchorFixed ? 'fixed' : 'absolute',
    top: Math.max(position.top + offset.y, 0),
    // keep in view
    left: Math.max(position.left + offset.x, 0)
  };
};

var getReversePosition = function getReversePosition(position) {
  var map = {
    bottom: 'top',
    top: 'bottom',
    left: 'right',
    right: 'left'
  };
  return map[position];
};

var getArrowStyle = function getArrowStyle(modalEl) {
  var placement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bottom';
  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var margin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;
  var diagonalWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 6;
  var modalPos = modalEl.getBoundingClientRect();

  var _ref = placement.split('-'),
      _ref2 = _slicedToArray(_ref, 2),
      firstPlacement = _ref2[0],
      lastPlacement = _ref2[1];

  var boxShadowmMap = {
    top: "1px 1px 1px 0px rgba(0, 0, 0, 0.05)",
    right: "-1px 1px 1px 0px rgba(0, 0, 0, 0.05)",
    bottom: "-1px -1px 1px 0px rgba(0, 0, 0, 0.05)",
    left: "1px -1px 1px 0px rgba(0, 0, 0, 0.05)"
  };

  var extraStyle = _defineProperty({
    boxShadow: mask ? 'none' : boxShadowmMap[firstPlacement]
  }, getReversePosition(firstPlacement), -diagonalWidth / 2);

  if (!lastPlacement) {
    var style = {};

    if (['bottom', 'top'].includes(firstPlacement)) {
      style['right'] = (modalPos.width - diagonalWidth) / 2;
    }

    if (['left', 'right'].includes(firstPlacement)) {
      style['top'] = (modalPos.height - diagonalWidth) / 2;
    }

    return _objectSpread2(_objectSpread2({}, style), extraStyle);
  } else {
    return _objectSpread2(_defineProperty({}, lastPlacement, margin * 2), extraStyle);
  }
};

var _excluded$l = ["placement", "content", "arrow", "visible", "closable", "onVisibleChange", "onClose", "className", "style", "children", "mask", "maskStyle", "maskClass", "mountContainer", "closeOnClickOutside", "closeOnMaskClick", "animated", "offset"];

var _templateObject$l;

var StyledPopover = styled__default['default'](web.animated.div)(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  border-radius: 2px;\n\n  box-shadow: ", ";\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    z-index: 10;\n    top: 12px;\n    right: 12px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n    font-size: 16px;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    z-index: -1;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n"])), boxShadow);

/**
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var Popover = function Popover(props) {
  var _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom' : _props$placement,
      content = props.content,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      visible = props.visible,
      closable = props.closable,
      onVisibleChange = props.onVisibleChange,
      onClose = props.onClose,
      className = props.className,
      style = props.style,
      children = props.children,
      mask = props.mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      mountContainer = props.mountContainer,
      _props$closeOnClickOu = props.closeOnClickOutside,
      closeOnClickOutside = _props$closeOnClickOu === void 0 ? true : _props$closeOnClickOu,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      _props$animated = props.animated,
      animated = _props$animated === void 0 ? true : _props$animated,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? {} : _props$offset,
      rest = _objectWithoutProperties(props, _excluded$l);

  var anchorRef = React.useRef();
  var popoverRef = React.useRef(null);
  var resizeTimerRef = React.useRef(0);
  var offsetRef = React.useRef(offset);
  var onCloseRef = useCallbackRef(onClose);

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      modalStyle = _useState2[0],
      setModalStyle = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      arrowStyle = _useState4[0],
      setArrowStyle = _useState4[1]; // animation effect


  var _useState5 = React.useState(visible),
      _useState6 = _slicedToArray(_useState5, 2),
      active = _useState6[0],
      setActive = _useState6[1];

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  React.useEffect(function () {
    offsetRef.current = offset;
  }, [offset]);
  useUpdateEffect(function () {
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(visible);
  }, [visible]);
  React.useEffect(function () {
    var anchorEl = anchorRef.current;
    var scrollContainer = getScrollContainer(anchorEl); // todo: support cust scroll container , by now it's window

    var calculateStyle = function calculateStyle(anchorEl, scrollContainer) {
      var modalEl = popoverRef.current;
      var modalStyle = getModalStyle(modalEl, anchorEl, document.body, scrollContainer, placement, offsetRef.current);
      var arrowStyle = getArrowStyle(modalEl, placement, mask, MARGIN);
      setModalStyle(modalStyle);
      setArrowStyle(arrowStyle);
    };

    var handleResize = function handleResize() {
      if (resizeTimerRef.current) {
        window.cancelAnimationFrame(resizeTimerRef.current);
      }

      resizeTimerRef.current = window.requestAnimationFrame(function () {
        calculateStyle(anchorEl, scrollContainer);
      });
    };

    if (visible) {
      calculateStyle(anchorEl, scrollContainer);
      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [visible, placement, mask]);
  var closeOutsideHandler = React.useCallback(function (e) {
    var el = popoverRef.current;
    var anchor = anchorRef.current;

    if (el && !el.contains(e.target) && !anchor.contains(e.target)) {
      var _onCloseRef$current;

      (_onCloseRef$current = onCloseRef.current) === null || _onCloseRef$current === void 0 ? void 0 : _onCloseRef$current.call(onCloseRef);
    }
  }, [onCloseRef]);
  React.useEffect(function () {
    if (closeOnClickOutside) {
      window.addEventListener('click', closeOutsideHandler, false);
      return function () {
        window.removeEventListener('click', closeOutsideHandler, false);
      };
    }
  }, [closeOnClickOutside, closeOutsideHandler]);

  var _useSpring = web.useSpring({
    translate: visible ? 0 : 10,
    opacity: visible ? 1 : 0,
    onStart: function onStart() {
      setActive(true);
    },
    onRest: function onRest() {
      setActive(visible);
    },
    immediate: !animated,
    config: {
      duration: animationNormal,
      easing: web.easings.easeInOutQuart
    }
  }),
      translate = _useSpring.translate,
      opacity = _useSpring.opacity;

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: anchorRef
  }), /*#__PURE__*/ReactDOM__default['default'].createPortal((visible || active) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-popover-wrap')
  }, /*#__PURE__*/React__default['default'].createElement(Mask, {
    visible: mask,
    className: maskClass,
    style: maskStyle,
    onClick: function onClick() {
      closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React__default['default'].createElement(StyledPopover, _extends({}, rest, {
    ref: popoverRef,
    className: clsx__default['default'](className, 'uc-popover', {
      mask: mask
    }),
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, modalStyle), style), {}, {
      opacity: opacity,
      transform: translate.to(function (v) {
        var p = placement.split('-')[0];

        if (p === 'bottom') {
          return "translate(0, -".concat(v, "%)");
        }

        if (p === 'top') {
          return "translate(0, ".concat(v, "%)");
        }

        if (p === 'left') {
          return "translate(".concat(v, "%, 0)");
        }

        if (p === 'right') {
          return "translate(-".concat(v, "%, 0)");
        }

        return 'none';
      })
    })
  }), arrow && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('uc-popover-arrow'),
    style: arrowStyle
  }), closable && /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-guanbi",
    className: clsx__default['default']('uc-popover-close'),
    onClick: onClose
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-popover-content')
  }, content))), mountNode));
};

var _excluded$m = ["title", "hoverDelay", "placement", "arrow", "offset", "className", "children"];

var _templateObject$m;
var StylePopover = styled__default['default'](Popover)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["\n  color: #fff;\n  background-color: rgb(0, 0, 0, 0.85);\n  padding: 12px;\n"])));

/** 文字提示气泡框, 基于Popover */
var Tooltip = function Tooltip(props) {
  var _children$props;

  var title = props.title,
      _props$hoverDelay = props.hoverDelay,
      hoverDelay = _props$hoverDelay === void 0 ? 100 : _props$hoverDelay,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      offset = props.offset,
      className = props.className,
      children = props.children,
      popoverRest = _objectWithoutProperties(props, _excluded$m); // 鼠标移到popover内容区，不关闭popover


  var ref = React.useRef(0);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var actionProps = {
    onMouseEnter: function onMouseEnter() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      ref.current = window.setTimeout(function () {
        setVisible(false);
      }, hoverDelay);
    },
    onFocus: function onFocus() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    }
  }; // add active class to trigger el

  var otherProps = {
    className: clsx__default['default']( /*#__PURE__*/React__default['default'].isValidElement(children) ? (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className : '', {
      active: visible
    })
  };
  return /*#__PURE__*/React__default['default'].createElement(StylePopover, _extends({}, popoverRest, {
    className: clsx__default['default']('uc-tooltip', className),
    visible: visible,
    placement: placement,
    content: title,
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, _objectSpread2(_objectSpread2({}, actionProps), otherProps)) : /*#__PURE__*/React__default['default'].createElement("span", _extends({}, actionProps, otherProps), children));
};

Tooltip.displayName = 'UC-Tooltip';

/**
 * 主题色设置
 *
 * @export
 * @param {{
 *   color: string;
 *   children: ReactElement;
 * }} {
 *   color = colors.primary,
 *   children,
 * }
 * @return {*}  {React.ReactElement}
 */
var ThemeProvider = function ThemeProvider(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? primary : _props$color,
      children = props.children;
  React.useLayoutEffect(function () {
    document.documentElement.style.setProperty('--uc-color', color);
  }, [color]);
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: {
      color: color
    }
  }, children);
};

ThemeProvider.displayName = 'UC-ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

var _isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;

var getPosition = function getPosition(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
};

var useDragMove = function useDragMove(elRef, boundRef, onStart, onEnd) {
  React.useEffect(function () {
    if (elRef.current) {
      var ox, oy;
      var ol, ot;
      var isMoving = false;
      var elRect = elRef.current.getBoundingClientRect();
      var boundRect = null;

      if (boundRef) {
        boundRect = boundRef.current.getBoundingClientRect();
      }

      var setPosition = function setPosition(left, top, bottom, right) {
        if (left != undefined) {
          elRef.current.style.left = left + 'px';
        }

        if (top != undefined) {
          elRef.current.style.top = top + 'px';
        }

        if (bottom != undefined) {
          elRef.current.style.top = 'unset';
          elRef.current.style.bottom = bottom + 'px';
        }

        if (right != undefined) {
          elRef.current.style.left = 'unset';
          elRef.current.style.right = right + 'px';
        }
      };

      var moveHanlder = function moveHanlder(e) {
        if (!isMoving) return;

        if (e.touches) {
          e = e.touches[0];
        }

        var left = ol + e.clientX - ox;
        var top = ot + e.clientY - oy;
        var bottom, right;

        if (boundRef) {
          if (left <= 0) {
            left = 0;
          }

          if (left + elRect.width > boundRect.width) {
            right = 0;
          }

          if (top <= 0) {
            top = 0;
          }

          if (top + elRect.height > boundRect.height) {
            bottom = 0;
          }
        }

        setPosition(left, top, bottom, right);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      elRef.current.addEventListener(_isTouch ? 'touchstart' : 'mousedown', function (e) {
        e.stopPropagation();

        if (typeof e.cancelable !== 'boolean' || e.cancelable) {
          e.preventDefault();
        }

        onStart === null || onStart === void 0 ? void 0 : onStart(e, getPosition(e.target));

        if (!isMoving) {
          isMoving = true;
        }

        if (e.touches) {
          e = e.touches[0];
        }

        ox = e.clientX;
        oy = e.clientY;
        ol = elRef.current.offsetLeft;
        ot = elRef.current.offsetTop;
        document.addEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder);
      });

      var touchEndHandler = function touchEndHandler(e) {
        if (isMoving) {
          isMoving = false;
        }

        document.removeEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder);

        if (typeof onEnd === 'function' && elRef.current === e.target) {
          onEnd(e, getPosition(e.target));
        }
      };

      document.addEventListener(_isTouch ? 'touchend' : 'mouseup', touchEndHandler);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
};

/** 拖拽 */
var Drag = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      boundRef = props.boundRef;
  var elRef = React.useRef();

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React__default['default'].isValidElement(children)) {
      throw new Error('Drag:子元素必须为ReactElement');
    }
  }

  useDragMove(elRef, boundRef, function (e, position) {
    var _props$onDragStart;

    (_props$onDragStart = props.onDragStart) === null || _props$onDragStart === void 0 ? void 0 : _props$onDragStart.call(props, e, position);
  }, function (e, position) {
    var _props$onDragEnd;

    (_props$onDragEnd = props.onDragEnd) === null || _props$onDragEnd === void 0 ? void 0 : _props$onDragEnd.call(props, e, position);
  });
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: elRef,
    style: _objectSpread2(_objectSpread2({}, children.props.style), {
      position: 'absolute'
    })
  });
});
Drag.displayName = 'UC-Drag';

// https://github.com/sindresorhus/copy-text-to-clipboard

/**
 * 复制文本
 *
 * @param {string} text
 * @param {HTMLElement} [{ target = document.body }={}]
 * @return {boolean}
 */
function copy(text) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? document.body : _ref$target;

  var element = document.createElement('textarea');
  var previouslyFocusedElement = document.activeElement;
  element.value = text; // Prevent keyboard from showing on mobile

  element.setAttribute('readonly', '');
  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  var selection = document.getSelection();
  var originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
  target.append(element);
  element.select(); // Explicit selection workaround for iOS

  element.selectionStart = 0;
  element.selectionEnd = text.length;
  var isSuccess = false;

  try {
    isSuccess = document.execCommand('copy');
  } catch (_unused) {}

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  } // Get the focus back on the previously focused element, if any


  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }

  return isSuccess;
}

var _excluded$n = ["text", "onClick", "onCopy", "children", "className"];

var _templateObject$n;
var StyledWrap$1 = styled__default['default'].div(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["\n  display: inline-flex;\n  cursor: pointer;\n"])));
/** 复制文本*/

var CopyToClipboard = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var text = props.text,
      _onClick = props.onClick,
      onCopy = props.onCopy,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$n);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$1, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-copy-to-clipboard', className),
    onClick: function onClick() {
      copy(text) && (onCopy === null || onCopy === void 0 ? void 0 : onCopy());
      _onClick === null || _onClick === void 0 ? void 0 : _onClick();
    }
  }), children);
});
CopyToClipboard.displayName = 'UC-CopyToClipboard';

var _excluded$o = ["lines", "children", "className"];

var _templateObject$o, _templateObject2$2;
var StyledMultiLines = styled__default['default'].div(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.lines;
});
var StyledLine = styled__default['default'].div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
var Text = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$lines = props.lines,
      lines = _props$lines === void 0 ? 1 : _props$lines,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$o);

  return /*#__PURE__*/React__default['default'].createElement(lines > 1 ? StyledMultiLines : StyledLine, _objectSpread2(_objectSpread2({}, rest), {}, {
    className: clsx__default['default']('uc-text', className),
    ref: ref,
    lines: lines
  }), children);
});
Text.displayName = 'UC-Text';

var _excluded$p = ["content", "visible", "modal", "maskStyle", "className"],
    _excluded2$1 = ["duration"];

var _templateObject$p;
var StyledToast = styled__default['default'].div(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["\n  z-index: 1000;\n  padding: 12px 16px;\n  display: inline-block;\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  border-radius: 4px;\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));

/** 轻提示 */
var Toast = function Toast(props) {
  var content = props.content,
      visible = props.visible,
      _props$modal = props.modal,
      modal = _props$modal === void 0 ? true : _props$modal,
      maskStyle = props.maskStyle,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$p);

  return visible ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Mask, {
    visible: modal,
    style: _objectSpread2({
      opacity: 0
    }, maskStyle)
  }), /*#__PURE__*/React__default['default'].createElement(StyledToast, _extends({}, rest, {
    className: clsx__default['default']('uc-toast', className)
  }), content)) : null;
};

var transitionDuration = 240;

Toast.show = function (props) {
  var toastProps = {};
  var _duration = 1500;
  var isToastProps = _typeof(props) === 'object' && 'content' in props;

  if (isToastProps) {
    var _props$duration = props.duration,
        duration = _props$duration === void 0 ? 1500 : _props$duration,
        rest = _objectWithoutProperties(props, _excluded2$1);

    toastProps = rest;
    _duration = duration;
  } else {
    toastProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-toast', transitionDuration);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(Toast, _extends({}, toastProps, {
    visible: true
  })), container);

  var hide = function hide() {
    dispose(beforeDispose);

    if (isToastProps) {
      var _props$afterClose;

      (_props$afterClose = props.afterClose) === null || _props$afterClose === void 0 ? void 0 : _props$afterClose.call(props);
    }
  };

  window.setTimeout(function () {
    hide();
  }, _duration);
  return hide;
};

Toast.displayName = 'UC-Toast';

var _excluded$q = ["direction", "className"];

var _templateObject$q;
var StyledArrow = styled__default['default'].div(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n\n  svg {\n    transition: transform ", "ms ease-in-out;\n  }\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"])), animationSlow);
var SVGProps$1 = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
};
/** 箭头 */

var IconArrow = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'bottom' : _props$direction,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$q);

  return /*#__PURE__*/React__default['default'].createElement(StyledArrow, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-icon-arrow', className, _defineProperty({}, direction, direction))
  }), /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, SVGProps$1), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
});
IconArrow.displayName = 'UC-IconArrow';

var _excluded$r = ["content", "delay", "icon", "speed", "closeable", "className", "onClose", "extra"];

var _templateObject$r;
var StyledNoticeBar = styled__default['default'].div(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["\n  height: 30px;\n  font-size: 14px;\n  line-height: 30px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n  overflow: hidden;\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    .content-text {\n      transition-property: transform;\n      transition-timing-function: linear;\n      white-space: nowrap;\n      flex: 1;\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));

/** 通告栏  */
var NoticeBar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var content = props.content,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 2000 : _props$delay,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-horn"
  }) : _props$icon,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? 50 : _props$speed,
      _props$closeable = props.closeable,
      closeable = _props$closeable === void 0 ? false : _props$closeable,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = _objectWithoutProperties(props, _excluded$r);

  var wrapRef = React.useRef();
  var contentRef = React.useRef();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      v = _useState2[0],
      setV = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  React.useLayoutEffect(function () {
    var container = wrapRef.current;
    var text = contentRef.current;
    if (container.offsetWidth >= text.offsetWidth) return;
    var timeout = window.setTimeout(function () {
      text.style.transitionDuration = "".concat(Math.round(text.offsetWidth / speed), "s");
      text.style.transform = "translateX(-".concat(text.offsetWidth, "px)");
    }, delay);
    return function () {
      window.clearTimeout(timeout);
    };
  }, [delay, speed]);
  React.useLayoutEffect(function () {
    var container = wrapRef.current;
    var text = contentRef.current;

    if (container.offsetWidth >= text.offsetWidth || v === 0) {
      return;
    }

    text.style.transform = "translateX(".concat(container.offsetWidth, "px)");
    text.style.transitionDuration = "".concat(Math.round((container.offsetWidth + text.offsetWidth) / speed), "s");
    text.style.transform = "translateX(-".concat(text.offsetWidth, "px)"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);
  return /*#__PURE__*/React__default['default'].createElement(StyledNoticeBar, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-noticebar', {
      hide: !visible
    })
  }), icon && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "icon-part"
  }, icon), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-text",
    key: v,
    onTransitionEnd: function onTransitionEnd() {
      setV(function (v) {
        return v + 1;
      });
    },
    ref: contentRef
  }, content)), (closeable || extra) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content-extra')
  }, /*#__PURE__*/React__default['default'].createElement(Space, null, props.extra, props.closeable && /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-guanbi",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setVisible(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }))));
});
NoticeBar.displayName = 'UC-NoticeBar';

var _excluded$s = ["children", "offsetTop", "offsetBottom", "target", "onChange"];

/** 将页面元素钉在可视范围*/
var Affix = function Affix(props) {
  var children = props.children,
      offsetTop = props.offsetTop,
      offsetBottom = props.offsetBottom,
      target = props.target,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$s);

  var _useState = React.useState({
    affixed: false,
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var onChangeRef = useCallbackRef(onChange);
  var targetRef = React.useRef(target);
  var wrapElRef = React.useRef();
  var fixedElRef = React.useRef();
  var targetRectRef = React.useRef({
    top: 0,
    bottom: 0
  });
  var wrapElTopRef = React.useRef('offsetBottom' in props ? -10000 : 10000);
  var offsetRef = React.useRef({
    offsetBottom: offsetBottom,
    offsetTop: typeof offsetTop === 'number' ? offsetTop : typeof offsetBottom !== 'number' && 0
  });
  var getAffixed = React.useCallback(function () {
    var targetRect = targetRectRef.current;
    var wrapElTop = wrapElTopRef.current;
    var _offsetRef$current = offsetRef.current,
        offsetTop = _offsetRef$current.offsetTop,
        offsetBottom = _offsetRef$current.offsetBottom;

    if (typeof offsetBottom === 'number' && wrapElTop + offsetBottom >= targetRect.bottom) {
      return true;
    }

    if (typeof offsetBottom !== 'number' && typeof offsetTop === 'number' && wrapElTop - offsetTop <= targetRect.top) {
      return true;
    }

    return false;
  }, []);
  var getAffixeStyle = React.useCallback(function () {
    var targetRect = targetRectRef.current;
    var _offsetRef$current2 = offsetRef.current,
        offsetTop = _offsetRef$current2.offsetTop,
        offsetBottom = _offsetRef$current2.offsetBottom;
    var width = data.width,
        height = data.height;
    var affixed = getAffixed();

    if (affixed && typeof offsetBottom === 'number') {
      return {
        position: 'fixed',
        bottom: offsetBottom,
        width: width,
        height: height,
        zIndex: 100
      };
    }

    if (affixed && typeof offsetTop === 'number') {
      return {
        position: 'fixed',
        top: targetRect.top + offsetTop,
        width: width,
        height: height,
        zIndex: 100
      };
    }

    return {};
  }, [getAffixed, data]);
  React.useEffect(function () {
    var _targetRef$current;

    var t = ((_targetRef$current = targetRef.current) === null || _targetRef$current === void 0 ? void 0 : _targetRef$current.call(targetRef)) || window;
    targetRectRef.current = t !== window ? t.getBoundingClientRect() : {
      top: 0,
      bottom: t.innerHeight,
      width: 0,
      height: 0
    };
  }, [targetRef, targetRectRef]);
  var onScrollUpdate = React.useCallback(function () {
    var affixed = data.affixed;
    var wrapEl = wrapElRef.current;
    if (!wrapEl) return;

    var _wrapEl$getBoundingCl = wrapEl.getBoundingClientRect(),
        top = _wrapEl$getBoundingCl.top,
        width = _wrapEl$getBoundingCl.width,
        height = _wrapEl$getBoundingCl.height;

    wrapElTopRef.current = top;
    var currentAffixed = getAffixed();

    if (currentAffixed !== affixed) {
      var _onChangeRef$current;

      setData({
        affixed: currentAffixed,
        width: width === 0 ? 'auto' : width,
        height: height === 0 ? 'auto' : height
      });
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, currentAffixed);
    }
  }, [getAffixed, onChangeRef, data]);
  React.useEffect(function () {
    var _targetRef$current2;

    var onScroll = throttle(onScrollUpdate, 16, false);
    var t = ((_targetRef$current2 = targetRef.current) === null || _targetRef$current2 === void 0 ? void 0 : _targetRef$current2.call(targetRef)) || window;
    t.addEventListener('scroll', onScroll);
    onScroll();
    return function () {
      if (t) {
        t.removeEventListener('scroll', onScroll);
      }
    };
  }, [offsetRef, onScrollUpdate]);
  var affixed = data.affixed;

  if (!affixed) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      ref: wrapElRef,
      className: "uc-affix"
    }, children);
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: wrapElRef,
    className: clsx__default['default']('uc-affix', 'affixed')
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: fixedElRef
  }, rest, {
    style: getAffixeStyle()
  }), children));
};

Affix.displayName = 'UC-Affix';

var _excluded$t = ["visible", "actions", "cancelText", "closeOnMaskClick", "onClose", "className", "extra"];

var _templateObject$s;
var StyledActionSheet = styled__default['default'](Popup)(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: hidden;\n  width: 100%;\n\n  .wrap {\n    background-color: #fff;\n  }\n\n  .extra {\n    display: flex;\n    justify-content: center;\n    color: #999;\n    font-size: 15px;\n    padding: 18px 16px;\n    border-bottom: 1px solid ", ";\n  }\n\n  .button-list {\n    .wrapper {\n      background-color: #ffffff;\n      border-top: 1px solid ", ";\n\n      &.disabled {\n        color: #999;\n\n        &:active {\n          background-color: unset;\n        }\n      }\n      &:first-child {\n        border-top: none;\n      }\n      &:active {\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      button {\n        width: 100%;\n        padding: 14px;\n        height: 55px;\n        text-align: center;\n        background-color: transparent;\n        border: none;\n        border-radius: 0;\n        display: flex;\n        flex-direction: column;\n        font-size: 18px;\n        &:disabled {\n          background-color: #fff;\n          color: #999;\n        }\n\n        .button-item-name {\n          color: #333;\n          &.disabled {\n            color: #999 !important;\n          }\n        }\n\n        .button-item-description {\n          font-size: 12px;\n          margin-top: 4px;\n          color: #999;\n        }\n      }\n    }\n  }\n\n  .uc-actionsheet-cancel {\n    background-color: #f5f5f5;\n    padding-top: 8px;\n\n    .wrapper {\n      background-color: #fff;\n      button {\n        padding: 14px;\n        text-align: center;\n        border-radius: 0;\n      }\n    }\n  }\n"])), border, border);
/** 动作面板 */

var ActionSheet = function ActionSheet(props) {
  var _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$actions = props.actions,
      actions = _props$actions === void 0 ? [] : _props$actions,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '' : _props$cancelText,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      onClose = props.onClose,
      className = props.className,
      extra = props.extra,
      rest = _objectWithoutProperties(props, _excluded$t);

  return /*#__PURE__*/React__default['default'].createElement(StyledActionSheet, _extends({}, rest, {
    className: clsx__default['default']('uc-actionsheet', className),
    visible: visible,
    position: "bottom",
    closeOnMaskClick: closeOnMaskClick,
    onClose: onClose
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wrap"
  }, extra && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "extra"
  }, extra), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "button-list"
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: index,
      className: clsx__default['default']('wrapper', {
        disabled: action.disabled
      }),
      onClick: function onClick() {
        var _action$onClick;

        (_action$onClick = action.onClick) === null || _action$onClick === void 0 ? void 0 : _action$onClick.call(action);
      }
    }, /*#__PURE__*/React__default['default'].createElement(Button, {
      disabled: action.disabled
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('button-item-name', {
        disabled: action.disabled
      }),
      style: {
        color: action.color || '#333'
      }
    }, action.text), action.description && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "button-item-description"
    }, action.description)));
  })), cancelText && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-actionsheet-cancel button-list"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    className: "button-item",
    onClick: function onClick() {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "button-item-name"
  }, cancelText))))));
};

ActionSheet.displayName = 'UC-ActionSheet';

var _excluded$u = ["visible", "title", "content", "onConfirm", "onCancel", "confirmText", "cancelText", "closeOnMaskClick", "buttonSpace", "closable", "mask", "maskStyle", "maskClass", "onClose", "className", "wrapStyle", "wait"],
    _excluded2$2 = ["title", "content", "confirmText", "onConfirm", "cancelText", "onCancel", "wait", "wrapStyle"];

var _templateObject$t;
var StyledAlertDialog = styled__default['default'](Popup)(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["\n  overflow: hidden;\n  // effect\n  &.from {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.5);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.5);\n    }\n  }\n\n  &.to {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n  // end effect\n\n  &.mobile {\n    width: 280px;\n    padding: 20px 0 0;\n\n    .header {\n      text-align: center;\n    }\n\n    .body {\n      padding: 16px;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n\n    .footer {\n      position: relative;\n      display: flex;\n      height: 48px;\n      padding: 0;\n      overflow: hidden;\n      .confirm {\n        ", "\n      }\n\n      .uc-btn {\n        height: 48px;\n        border: none;\n        flex: 1;\n      }\n\n      &:after {\n        content: '';\n        pointer-events: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        border-top: 1px solid ", ";\n\n        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n          width: 200%;\n          height: 200%;\n          transform: scale(0.5);\n          transform-origin: 0 0;\n        }\n      }\n    }\n  }\n\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\n  background-color: #fff;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: initial;\n  border-radius: 8px;\n  padding: 32px 32px 24px;\n  box-sizing: border-box;\n  white-space: normal;\n  max-width: calc(100vw - 56px);\n  max-height: calc(100vh - 112px);\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .header {\n    font-size: 16px;\n    line-height: 20px;\n    color: #333;\n    box-sizing: border-box;\n    font-weight: 500;\n  }\n  .body {\n    font-size: 14px;\n    line-height: 20px;\n    max-height: calc(100vh - 256px);\n    padding: 24px 0 32px;\n    flex: 1;\n\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  .footer {\n    text-align: right;\n\n    .uc-btn {\n      min-width: 80px;\n    }\n  }\n"])), getThemeColorCss('color'), border);

/** 移动端/pc端两种风格的 alert/confirm弹窗 */
var AlertDialog = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      title = props.title,
      content = props.content,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? '确定' : _props$confirmText,
      cancelText = props.cancelText,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? false : _props$closeOnMaskCli,
      _props$buttonSpace = props.buttonSpace,
      buttonSpace = _props$buttonSpace === void 0 ? 16 : _props$buttonSpace,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      onClose = props.onClose,
      className = props.className,
      wrapStyle = props.wrapStyle,
      wait = props.wait,
      rest = _objectWithoutProperties(props, _excluded$u);

  return /*#__PURE__*/React__default['default'].createElement(StyledAlertDialog, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-alert-dialog', className, {
      mobile: isMobile
    }),
    visible: visible,
    onClose: onClose,
    position: "center",
    mask: mask,
    style: wrapStyle,
    maskStyle: maskStyle,
    maskClass: maskClass,
    closeOnMaskClick: closeOnMaskClick
  }), closable && /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('header')
  }, title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('body')
  }, content), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('footer')
  }, !isMobile ? /*#__PURE__*/React__default['default'].createElement(Space, {
    size: buttonSpace
  }, cancelText ? /*#__PURE__*/React__default['default'].createElement(Button, {
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(onClose);

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    className: clsx__default['default']('cancel')
  }, cancelText) : null, /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "primary",
    wait: wait,
    className: clsx__default['default']('confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(onClose);

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText)) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, cancelText ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Button, {
    className: clsx__default['default']('cancel'),
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(onClose);

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, cancelText), /*#__PURE__*/React__default['default'].createElement(Divider, {
    type: "vertical",
    style: {
      height: '100%',
      color: border,
      margin: 0
    }
  })) : null, /*#__PURE__*/React__default['default'].createElement(Button, {
    className: clsx__default['default']('confirm'),
    wait: wait,
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(onClose);

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText))));
});
AlertDialog.displayName = 'UC-AlertDialog';
var transitionDuration$1 = 240;

AlertDialog.show = function (props) {
  var title = props.title,
      content = props.content,
      _props$confirmText2 = props.confirmText,
      confirmText = _props$confirmText2 === void 0 ? '确定' : _props$confirmText2,
      _onConfirm = props.onConfirm,
      cancelText = props.cancelText,
      _onCancel = props.onCancel,
      wait = props.wait,
      wrapStyle = props.wrapStyle,
      rest = _objectWithoutProperties(props, _excluded2$2);

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-popup', transitionDuration$1);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    duration: transitionDuration$1
  }, /*#__PURE__*/React__default['default'].createElement(AlertDialog, _extends({}, rest, {
    title: title,
    content: content,
    visible: true,
    confirmText: confirmText,
    cancelText: cancelText,
    wrapStyle: wrapStyle,
    wait: wait,
    onConfirm: function onConfirm() {
      _onConfirm === null || _onConfirm === void 0 ? void 0 : _onConfirm(function () {
        return dispose(beforeDispose);
      });
    },
    onClose: function onClose() {
      dispose(beforeDispose);
    },
    onCancel: function onCancel() {
      _onCancel === null || _onCancel === void 0 ? void 0 : _onCancel(function () {
        return dispose(beforeDispose);
      });
    },
    mountContainer: function mountContainer() {
      return container;
    }
  }))), container);
};

var _excluded$v = ["value", "length", "className", "mask", "autoFocus", "userVirtualInput", "onFinish", "onFocus", "onChange"];

var _templateObject$u;
var StyledPasswordInput = styled__default['default'].div(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["\n  user-select: none;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n  border: 1px solid ", ";\n  margin: 0 16px;\n\n  .item {\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    font-size: 20px;\n    line-height: 1.2;\n    background-color: #fff;\n\n    &:not(:first-child) {\n      border-left: 1px solid ", ";\n    }\n\n    .dot {\n      width: 10px;\n      height: 10px;\n      background-color: #000;\n      border-radius: 100%;\n    }\n    input {\n      height: 100%;\n      width: 100%;\n      display: inline-block;\n      font-size: 16px;\n      text-align: center;\n      background-color: transparent;\n      border: 0;\n      resize: none;\n      outline: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-appearance: none;\n      box-shadow: none;\n    }\n    @keyframes blink {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .virtual-input {\n      &.blink {\n        width: 1px;\n        height: 50%;\n        background-color: #333;\n        animation: 1s blink infinite;\n      }\n    }\n  }\n"])), border, border);

var getArray = function getArray(len) {
  var ar = [];

  for (var i = 0; i < len; i++) {
    ar.push(i + 1);
  }

  return ar;
};

/** 密码输入框 */
var PasswordInput = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$length = props.length,
      length = _props$length === void 0 ? 6 : _props$length,
      className = props.className,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      userVirtualInput = props.userVirtualInput,
      onFinish = props.onFinish,
      onFocus = props.onFocus,
      _onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$v);

  var arRef = React.useRef(getArray(length));
  var inputRefArray = React.useRef([]);
  var autoFocusRef = useCallbackRef(autoFocus);
  var vRef = useCallbackRef(value);
  var inputValueRef = useCallbackRef(value.split(''));
  var onFinishRef = useCallbackRef(onFinish);
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        setTimeout(function () {
          var _inputRefArray$curren, _inputRefArray$curren2;

          (_inputRefArray$curren = inputRefArray.current[vRef.current.length]) === null || _inputRefArray$curren === void 0 ? void 0 : (_inputRefArray$curren2 = _inputRefArray$curren.focus) === null || _inputRefArray$curren2 === void 0 ? void 0 : _inputRefArray$curren2.call(_inputRefArray$curren);
        }, 60);
      }
    };
  });
  React.useEffect(function () {
    if (value.length === length) {
      var _onFinishRef$current;

      (_onFinishRef$current = onFinishRef.current) === null || _onFinishRef$current === void 0 ? void 0 : _onFinishRef$current.call(onFinishRef, value);
    }
  }, [value, onFinishRef, length]);
  React.useEffect(function () {
    if (autoFocusRef.current) {
      var _inputRefArray$curren3, _inputRefArray$curren4;

      (_inputRefArray$curren3 = inputRefArray.current[vRef.current.length]) === null || _inputRefArray$curren3 === void 0 ? void 0 : (_inputRefArray$curren4 = _inputRefArray$curren3.focus) === null || _inputRefArray$curren4 === void 0 ? void 0 : _inputRefArray$curren4.call(_inputRefArray$curren3);
    }
  }, [autoFocusRef, vRef]); // prev value check

  var prevInputCheck = React.useCallback(function (idx) {
    for (var i = 0; i < idx; i++) {
      if (!inputValueRef.current[i]) {
        return false;
      }
    }

    return true;
  }, [inputValueRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledPasswordInput, _extends({}, rest, {
    className: clsx__default['default']('uc-password-input', className)
  }), arRef.current.map(function (n, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('item'),
      key: n
    }, value.length >= n ? mask ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "dot"
    }) : value[idx] : !userVirtualInput ? /*#__PURE__*/React__default['default'].createElement("input", {
      ref: function ref(r) {
        inputRefArray.current[idx] = r;
      },
      onChange: function onChange(e) {
        inputValueRef.current[idx] = e.target.value;
        var newValue = inputValueRef.current.join('');
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(newValue);

        if (n < length) {
          var _inputRefArray$curren5;

          (_inputRefArray$curren5 = inputRefArray.current[idx + 1]) === null || _inputRefArray$curren5 === void 0 ? void 0 : _inputRefArray$curren5.focus();
        }
      },
      onKeyDown: function onKeyDown(e) {
        if (e.code === 'Backspace' || e.which === 8) {
          // back
          if (idx > 0) {
            var _v = inputValueRef.current.slice(0, idx - 1).join('');

            _onChange === null || _onChange === void 0 ? void 0 : _onChange(_v);
            setTimeout(function () {
              var _inputRefArray$curren6;

              (_inputRefArray$curren6 = inputRefArray.current[Math.max(0, idx - 1)]) === null || _inputRefArray$curren6 === void 0 ? void 0 : _inputRefArray$curren6.focus();
            }, 100);
          } else {
            var _inputRefArray$curren7;

            (_inputRefArray$curren7 = inputRefArray.current[0]) === null || _inputRefArray$curren7 === void 0 ? void 0 : _inputRefArray$curren7.focus();
          }
        } else if (!prevInputCheck(idx)) {
          e.preventDefault();
        }
      },
      onFocus: onFocus
    }) : /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('virtual-input', {
        blink: value.length === idx
      })
    }));
  }));
});
PasswordInput.displayName = 'UC-PasswordInput';

var _excluded$w = ["onClick", "okText", "customKey", "className"];

var _templateObject$v, _templateObject2$3;
var StyledNumberKeyboardBase = styled__default['default'].div(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  padding-bottom: 22px;\n  background-color: #f2f3f5;\n  user-select: none;\n\n  .body {\n    display: flex;\n    padding: 6px 0 0 6px;\n\n    .keys {\n      display: flex;\n      flex: 3;\n      flex-wrap: wrap;\n\n      &.sidebar {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        max-width: 33%;\n\n        .key {\n          max-width: 100%;\n        }\n      }\n\n      .key {\n        position: relative;\n        flex: 1;\n        flex-basis: 33%;\n        box-sizing: border-box;\n        padding: 0 6px 6px 0;\n\n        &.zero {\n          flex-basis: 66%;\n        }\n        &.empty {\n          display: none;\n        }\n      }\n    }\n  }\n"])));
var Styledkey = styled__default['default'](Button)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  font-size: 28px;\n  line-height: 1.5;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"])));
/** 数字键盘基础 */

var NumberKeyboardBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _onClick = props.onClick,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$customKey = props.customKey,
      customKey = _props$customKey === void 0 ? '' : _props$customKey,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$w);

  var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', customKey];
  return /*#__PURE__*/React__default['default'].createElement(StyledNumberKeyboardBase, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-number-keyboard', className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('body')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "keys"
  }, keys.map(function (key) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('key', {
        'zero': key === '0',
        'custom-key': key === customKey,
        'empty': key === ''
      }),
      key: key
    }, /*#__PURE__*/React__default['default'].createElement(Styledkey, {
      onClick: function onClick() {
        _onClick === null || _onClick === void 0 ? void 0 : _onClick(key);
      }
    }, key));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('sidebar', 'keys')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('key'),
    key: 'backspace'
  }, /*#__PURE__*/React__default['default'].createElement(Styledkey, {
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('backspace');
    }
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('key'),
    key: 'ok'
  }, /*#__PURE__*/React__default['default'].createElement(Styledkey, {
    type: "primary",
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('ok');
    }
  }, okText)))));
});
NumberKeyboardBase.displayName = 'UC-NumberKeyboardBase';

var _excluded$x = ["visible", "okText", "closeOnMaskClick", "maxLength", "customKey", "onOk", "onClose", "onChange", "className"];

var _templateObject$w;
var StyledNumberKeyboard = styled__default['default'](Popup)(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n"])));
/** 数字键盘 */

var NumberKeyboard = function NumberKeyboard(props) {
  var visible = props.visible,
      okText = props.okText,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      maxLength = props.maxLength,
      _props$customKey = props.customKey,
      customKey = _props$customKey === void 0 ? '' : _props$customKey,
      onOk = props.onOk,
      onClose = props.onClose,
      onChange = props.onChange,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$x);

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(StyledNumberKeyboard, _extends({}, rest, {
    closeOnMaskClick: closeOnMaskClick,
    visible: visible,
    onClose: onClose,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    position: "bottom",
    className: clsx__default['default']('uc-number-keyboard-picker', className)
  }), /*#__PURE__*/React__default['default'].createElement(NumberKeyboardBase, {
    okText: okText,
    customKey: customKey,
    onClick: function onClick(k) {
      if (k === 'ok') {
        onOk === null || onOk === void 0 ? void 0 : onOk(value);
        onClose === null || onClose === void 0 ? void 0 : onClose();
      } else if (k === 'backspace') {
        if (value.length) {
          setValue(value.slice(0, value.length - 1));
        }
      } else {
        if (typeof maxLength === 'number' && value.length < maxLength || typeof maxLength === 'undefined') {
          setValue(function (v) {
            return v + k;
          });
        }
      }
    }
  }));
};

NumberKeyboard.displayName = 'UC-NumberKeyboard';

var _templateObject$x, _templateObject2$4;
var StyledSwipeAction = styled__default['default'].div(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["\n  user-select: none;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  cursor: grab;\n  box-sizing: border-box;\n\n  .wrap {\n    transition: transform 0.3s ease-in-out;\n    overflow: visible;\n    display: flex;\n    flex-wrap: nowrap;\n\n    .left-part,\n    .right-part {\n      position: absolute;\n      top: 0;\n      height: 100%;\n    }\n\n    .left-part {\n      left: 0px;\n      transform: translate3d(-100%, 0, 0);\n    }\n    .right-part {\n      right: 0px;\n      transform: translate3d(100%, 0, 0);\n    }\n    .middle-part {\n      width: 100%;\n      box-sizing: border-box;\n      position: relative;\n      height: 44px;\n      padding: 0 16px;\n      display: flex;\n      align-items: center;\n      background: #fff;\n      color: #666;\n      box-sizing: border-box;\n    }\n\n    .swipe-action-item {\n      * {\n        pointer-events: none;\n      }\n    }\n  }\n"])));
var StyledButton$2 = styled__default['default'](Button)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n"])));
/** SwipeAction 滑动操作 */

var SwipeAction = function SwipeAction(props) {
  var _props$left = props.left,
      left = _props$left === void 0 ? [] : _props$left,
      _props$right = props.right,
      right = _props$right === void 0 ? [] : _props$right,
      onClose = props.onClose,
      onOpen = props.onOpen,
      _props$autoClose = props.autoClose,
      autoClose = _props$autoClose === void 0 ? true : _props$autoClose,
      _props$closeOnClickOu = props.closeOnClickOutside,
      closeOnClickOutside = _props$closeOnClickOu === void 0 ? true : _props$closeOnClickOu,
      children = props.children;
  var elRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var thisRef = React.useRef({
    x: 0,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0
  });
  React.useEffect(function () {
    if (isOpen) {
      onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    } else {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, [isOpen, onOpen, onClose]);
  var startTransform = React.useCallback(function (transformStr, x) {
    var v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    v.el.style.transform = "".concat(transformStr);
  }, []);
  React.useEffect(function () {
    var v = thisRef.current;

    if (closeOnClickOutside) {
      var closeHandler = function closeHandler(e) {
        if (!isOpen) {
          return;
        }

        if (!v.el.contains(e.target)) {
          startTransform('translate3d(0,0,0)', 0);
          setIsOpen(false);
        }
      };

      window.addEventListener('click', closeHandler);
      return function () {
        window.removeEventListener('click', closeHandler);
      };
    }
  }, [closeOnClickOutside, startTransform, isOpen]);
  React.useLayoutEffect(function () {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);
  var renderAction = React.useCallback(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(StyledButton$2, {
      onClick: item.onClick,
      key: idx,
      className: "swipe-action-item",
      style: {
        backgroundColor: item.color || primary
      }
    }, item.text);
  }, []);
  var touchStart = React.useCallback(function () {
    thisRef.current.el.style.transitionProperty = 'none';
  }, []);
  var touchEnd = React.useCallback(function () {
    var v = thisRef.current;

    if (v.x < 0) {
      // open right
      if (Math.abs(v.x) < v.rightWidth / 2) {
        // no more than half way
        startTransform('translate3d(0,0,0)', 0);
        setIsOpen(false);
      } else {
        startTransform("translate3d(-".concat(v.rightWidth, "px,0,0)"), -1 * v.rightWidth);
        setIsOpen(true);
      }
    } else if (v.x > 0) {
      if (Math.abs(v.x) < v.leftWidth / 2) {
        // no more than half way
        startTransform('translate3d(0,0,0)', 0);
        v.x = 0;
        setIsOpen(false);
      } else {
        startTransform("translate3d(".concat(v.leftWidth, "px,0,0)"), v.leftWidth);
        setIsOpen(true);
      }
    }
  }, [startTransform]);
  React.useEffect(function () {
    elRef.current.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);
    elRef.current.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
  }, [touchEnd, touchStart]);
  React.useLayoutEffect(function () {
    var el = elRef.current;
    var fg = new Touch__default['default'](el, {
      onPressMove: function onPressMove(e) {
        var v = thisRef.current;
        v.x += e.deltaX; // x<0:swipe left & show right

        if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
          v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
        } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
          v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
        }
      }
    });
    return function () {
      fg === null || fg === void 0 ? void 0 : fg.destroy();
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledSwipeAction, {
    className: clsx__default['default']('uc-swipe-action')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: elRef,
    className: "wrap",
    onClick: function onClick(e) {
      var _e$target, _e$target$classList;

      if (autoClose && ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$classList = _e$target.classList) === null || _e$target$classList === void 0 ? void 0 : _e$target$classList.contains('swipe-action-item'))) {
        startTransform('translate3d(0,0,0)', 0);
        setIsOpen(false);
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: function ref(_ref) {
      return thisRef.current.leftEl = _ref;
    },
    className: clsx__default['default']('left-part')
  }, left.map(function (item, idx) {
    return renderAction(item, idx);
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "middle-part"
  }, children), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: function ref(_ref2) {
      return thisRef.current.rightEl = _ref2;
    },
    className: clsx__default['default']('right-part')
  }, right.map(function (item, idx) {
    return renderAction(item, idx);
  }))));
};

SwipeAction.displayName = 'UC-SwipeAction';

var _excluded$y = ["className", "style", "prefix", "value", "onChange", "suffix", "autoHeight", "disabled", "readOnly", "rows", "ime", "clearable", "onClear", "onEnter"];

var _templateObject$y;
//#region  style
var StyledInput = styled__default['default'].div(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 4px 12px;\n  font-size: 14px;\n  width: 100%;\n  background-color: #fff;\n  overflow: hidden;\n  box-sizing: border-box;\n  color: #333;\n\n  &.pc {\n    background-image: none;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    transition: all 0.3s;\n    &:hover:not(.disabled, .read-only) {\n      ", "\n    }\n\n    &.focused:not(.disabled, .read-only) {\n      ", "\n      box-shadow: 0 0 2px 2px ", ";\n    }\n  }\n  &.mobile {\n    border: none;\n    padding: 0 4px;\n    line-height: 24px;\n  }\n\n  &.disabled {\n    color: #666;\n  }\n\n  &.read-only {\n  }\n\n  .prefix {\n    margin-right: 8px;\n  }\n  .suffix {\n    margin-left: 8px;\n    color: #999;\n  }\n\n  .clear {\n    color: #bcbcbc;\n    cursor: pointer;\n  }\n\n  input,\n  textarea {\n    flex: 1;\n    position: relative;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n    line-height: inherit;\n    text-align: left;\n    background-color: transparent;\n    border: 0;\n    resize: none;\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-appearance: none;\n    box-shadow: none;\n    width: 100%;\n  }\n\n  textarea {\n    resize: none;\n    word-break: break-all;\n    word-wrap: break-word;\n    & + * {\n      align-self: flex-end;\n    }\n  }\n"])), border, getThemeColorCss('border-color'), getThemeColorCss('border-color'), function (props) {
  return color__default['default'](getRootCssVarColor() || props.theme.color || primary).fade(0.85);
}); //#endregion

/** 单行/多行输入框 input/textarea */
var Input = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      prefix = props.prefix,
      value = props.value,
      _onChange = props.onChange,
      suffix = props.suffix,
      autoHeight = props.autoHeight,
      disabled = props.disabled,
      readOnly = props.readOnly,
      rows = props.rows,
      ime = props.ime,
      clearable = props.clearable,
      onClear = props.onClear,
      onEnter = props.onEnter,
      rest = _objectWithoutProperties(props, _excluded$y);

  var inputRef = React.useRef();
  var isImeModeRef = React.useRef(false);

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      compositionValue = _useState2[0],
      setCompositionValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var isTextArea = rows && typeof rows === 'number';
  React.useEffect(function () {
    if (isTextArea && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.scrollTop = 0;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  });
  var inputProps = {
    onChange: function onChange(e) {
      var val = e.target.value;

      if (!isImeModeRef.current) {
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(e.target.value);
      } else {
        setCompositionValue(val);
      }
    },
    value: isImeModeRef.current ? compositionValue : value
  };

  if (ime) {
    inputProps.onCompositionStart = function () {
      isImeModeRef.current = true;
    };

    inputProps.onCompositionEnd = function (e) {
      isImeModeRef.current = false;
      var val = e.target.value;
      setCompositionValue(val);
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(val);
    };
  }

  var elProps = _objectSpread2(_objectSpread2(_objectSpread2({}, rest), inputProps), {}, {
    ref: inputRef,
    readOnly: readOnly,
    disabled: disabled,
    onKeyDown: function onKeyDown(e) {
      var _props$onKeyDown;

      if (typeof props.onEnter === 'function' && (e.code === 'Enter' || e.which === 13)) {
        props.onEnter(e);
      }

      (_props$onKeyDown = props.onKeyDown) === null || _props$onKeyDown === void 0 ? void 0 : _props$onKeyDown.call(props, e);
    },
    onFocus: function onFocus(e) {
      var _props$onFocus;

      setFocused(true);
      (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props, e);
    },
    onBlur: function onBlur(e) {
      var _props$onBlur;

      (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props, e);
      setTimeout(function () {
        setFocused(false);
      }, 300);
    }
  });

  if (isTextArea) {
    elProps.rows = rows;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledInput, {
    style: style,
    className: clsx__default['default']('uc-input', className, {
      'mobile': isMobile,
      'pc': !isMobile,
      'focused': focused,
      'disabled': disabled,
      'read-only': readOnly
    })
  }, prefix && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('prefix')
  }, prefix), /*#__PURE__*/React__default['default'].createElement(isTextArea ? 'textarea' : 'input', elProps), clearable && focused && typeof _onChange === 'function' && (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('suffix', 'clear')
  }, /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-clear",
    onClick: function onClick() {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange('');
      onClear === null || onClear === void 0 ? void 0 : onClear();
    }
  })), suffix && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('suffix')
  }, suffix));
});
Input.displayName = 'UC-Input';

var _excluded$z = ["className", "style", "header", "children", "footer", "position"];

var _templateObject$z;
var StyledDrawer = styled__default['default'](Popup)(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  position: relative;\n\n  .body {\n    flex: 1;\n  }\n"])));
/** 抽屉 */

var Drawer = function Drawer(props) {
  var className = props.className,
      style = props.style,
      header = props.header,
      children = props.children,
      footer = props.footer,
      _props$position = props.position,
      position = _props$position === void 0 ? 'right' : _props$position,
      rest = _objectWithoutProperties(props, _excluded$z);

  var _style = position === 'left' || position === 'right' ? {
    height: '100vh'
  } : {
    width: '100vw'
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledDrawer, _extends({}, rest, {
    className: clsx__default['default']('uc-drawer', className),
    style: _objectSpread2(_objectSpread2({}, _style), style),
    position: position
  }), header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "footer"
  }, footer));
};

Drawer.displayName = 'UC-Drawer';

/**
 * 返回防抖函数
 *
 * @param {F} fn fn改变debounce fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
var useDebounce = function useDebounce(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 180;
  var fnDeps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return (// eslint-disable-next-line react-hooks/exhaustive-deps
    React.useMemo(function () {
      return debounce(fn, timeout);
    }, fnDeps)
  );
};

var _excluded$A = ["onIndexChange", "itemHeight", "style", "data", "labelRender", "index", "className"];

var _templateObject$A;
var StyledWrap$2 = styled__default['default'](web.animated.div)(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral(["\n  transform: translate3d(0px, 105px, 0px);\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    user-select: none;\n    cursor: grab;\n  }\n"]))); // 惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var defaultLabelRender = function defaultLabelRender(item) {
  return item.label;
};

var Wheel = function Wheel(props) {
  var onIndexChange = props.onIndexChange,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 35 : _props$itemHeight,
      style = props.style,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$labelRender = props.labelRender,
      labelRender = _props$labelRender === void 0 ? defaultLabelRender : _props$labelRender,
      _props$index = props.index,
      index = _props$index === void 0 ? 0 : _props$index,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$A);

  var firstItemY = itemHeight * 3;
  var elRef = React.useRef();
  var onIndexChangeRef = useCallbackRef(onIndexChange);
  var yRef = React.useRef(firstItemY);

  var _useState = React.useState(index),
      _useState2 = _slicedToArray(_useState, 2),
      _index = _useState2[0],
      _setIndex = _useState2[1];

  var isMovingRef = React.useRef(false);
  var momentumRef = React.useRef({
    touchStartTime: 0
  });

  var _useSpring = web.useSpring(function () {
    return {
      y: 105,
      config: web.config["default"]
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      api = _useSpring2[1];

  var scrollToIndex = useDebounce(function (index) {
    var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    yRef.current = firstItemY - itemHeight * index;
    api.start({
      y: yRef.current,
      immediate: !effect
    });
  }, 100, [api, yRef]);
  var getIndexByY = React.useCallback(function () {
    var y = yRef.current;
    var d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef, itemHeight, firstItemY]); // eslint-disable-next-line react-hooks/exhaustive-deps

  React.useEffect(function () {
    // guard to prevent from index out of range
    if (_index < 0) {
      _setIndex(0);
    } else if (_index >= data.length && data.length) {
      _setIndex(data.length - 1);
    }
  }); // sync outside

  useUpdateEffect(function () {
    if (_index !== index) {
      _setIndex(index);
    }
  }, [index]);
  useUpdateEffect(function () {
    onIndexChangeRef === null || onIndexChangeRef === void 0 ? void 0 : onIndexChangeRef.current(_index);
  }, [_index]);
  React.useEffect(function () {
    scrollToIndex(_index, false);
  }, [_index, scrollToIndex]);
  var touchEnd = React.useCallback(function () {
    if (!isMovingRef.current) {
      return;
    }

    isMovingRef.current = false;
    var min = -1 * (data.length - 1) * itemHeight + firstItemY;
    var max = firstItemY;
    var newIndex;

    if (yRef.current >= max - itemHeight / 2) {
      newIndex = 0;
    } else if (yRef.current <= min) {
      newIndex = Math.max(data.length - 1, 0);
    } else {
      newIndex = getIndexByY();
    }

    scrollToIndex(newIndex);
    setTimeout(function () {
      _setIndex(newIndex);
    }, 300);
  }, [scrollToIndex, itemHeight, firstItemY, getIndexByY, data]);
  var evtProps = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = function () {
    isMovingRef.current = true;
    momentumRef.current.touchStartTime = Date.now();
  };

  React.useLayoutEffect(function () {
    document.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
    return function () {
      document.removeEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
    };
  }, [touchEnd]);
  React.useLayoutEffect(function () {
    var el = elRef.current;
    var fg = new Touch__default['default'](el, {
      onPressMove: function onPressMove(e) {
        yRef.current += e.deltaY;
        var distance = e.deltaY;
        var duration = Date.now() - momentumRef.current.touchStartTime;
        api.start({
          y: yRef.current
        });

        if (duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE) {
          // momentum effect
          var speed = Math.abs(distance / duration);
          yRef.current += speed / 0.003 * (distance < 0 ? -1 : 1);
          scrollToIndex(getIndexByY());
        }
      }
    });
    return function () {
      return fg.destroy();
    };
  }, [api, getIndexByY, scrollToIndex]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$2, _extends({
    ref: elRef
  }, rest, evtProps, {
    className: clsx__default['default']('uc-wheel', className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      transform: styles.y.to(function (v) {
        return "translate3d(0,".concat(v, "px,0)");
      })
    })
  }), data.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(Text, {
      className: "item",
      key: item.value,
      style: {
        height: itemHeight
      }
    }, labelRender(item));
  }));
};

Wheel.displayName = 'UC-Wheel';

/**
 * 强制render组件
 *
 * @return {*}
 */

var useForceUpdate = function useForceUpdate() {
  var _useReducer = React.useReducer(function (x) {
    return x + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      forceUpdate = _useReducer2[1];

  return forceUpdate;
};

var _excluded$B = ["className", "onChange", "onWheelChange", "itemHeight", "labelRender", "value", "data"];

var _templateObject$B;
var StyledWrap$3 = styled__default['default'].div(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: ", "px;\n  touch-action: none;\n\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n      linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    pointer-events: none;\n    background-size: 100% ", "px;\n  }\n\n  .hairline {\n    position: absolute;\n    height: ", "px;\n    width: 100%;\n    border-left: 0;\n    border-right: 0;\n    top: ", "px;\n\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      border-top: 1px solid #d8d8d8;\n      border-bottom: 1px solid #d8d8d8;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n\n  .columnitem {\n    width: 0;\n    flex-grow: 1;\n    height: 100%;\n\n    .wheel-wrap {\n      display: flex;\n      position: relative;\n      text-align: center;\n      overflow-y: hidden;\n      height: 100%;\n    }\n  }\n"])), function (props) {
  return props.itemHeight * 7;
}, function (props) {
  return props.itemHeight * 3;
}, function (props) {
  return props.itemHeight;
}, function (props) {
  return props.itemHeight * 3;
});
/**
 *  convert data to 2 dimension array ;
 *
 * @param {DataItem[]} data
 * @param {number} [cols=1]
 * @param {*} [value=[]]
 * @return {*}
 */

var convertPickerData = function convertPickerData(data) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var ret = [];

  for (var i = 0; i < cols; i++) {
    ret.push([]);
  }

  data === null || data === void 0 ? void 0 : data.map(function (d) {
    ret[0].push(d);
  });

  if (cols > 1) {
    if (!Array.isArray(data[0])) {
      // linked
      var lastIndex = data.findIndex(function (d) {
        return d.value === value[0];
      });
      lastIndex = lastIndex === -1 ? 0 : lastIndex;
      ret[1] = data[lastIndex].children || [];

      if (cols === 3) {
        lastIndex = data.findIndex(function (d) {
          return d.value === value[1];
        });
        lastIndex = lastIndex === -1 ? 0 : lastIndex;
        ret[2] = ret[1][lastIndex].children || [];
      }
    } else {
      // unlinked
      for (var _i = 0; _i < cols; _i++) {
        ret[_i] = data[_i];
      }
    }
  }

  return ret;
};

var getIndexArrayFromValue = function getIndexArrayFromValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var list = arguments.length > 1 ? arguments[1] : undefined;
  var cols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var ar = new Array(cols).fill(0);

  if (list.length > 0 && value.length > 0) {
    list.map(function (e, i) {
      var index = list[i].findIndex(function (e) {
        return e.value === value[i];
      });
      ar[i] = index === -1 ? 0 : index;
    });
  }

  return ar;
};

var formatSimpleData = function formatSimpleData() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.map(function (i) {
    return {
      label: i,
      value: i
    };
  });
}; //#endregion

/** 平铺选择器 */


var PickerView = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _cdata, _listRef$current;

  var className = props.className,
      onChange = props.onChange,
      onWheelChange = props.onWheelChange,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 35 : _props$itemHeight,
      labelRender = props.labelRender,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      rest = _objectWithoutProperties(props, _excluded$B);

  var cols = 1;
  var cdata = data || []; // 非级联

  var isUnLinked = true;

  if (!((_cdata = cdata) === null || _cdata === void 0 ? void 0 : _cdata.length)) {
    cols = 1;
  } else {
    var firstItem = cdata[0];

    if (Array.isArray(firstItem)) {
      // 非级联
      isUnLinked = true;
      cols = cdata.length;
    } else if (!isObject(firstItem)) {
      cdata = formatSimpleData(cdata);
    } else {
      var c = 1;
      var t = firstItem;

      while (Array.isArray(t.children)) {
        if (isUnLinked) {
          isUnLinked = false;
        } // linked


        c++;
        t = t.children[0];
      }

      cols = c;
    }
  }

  var forceUpdate = useForceUpdate();
  var listRef = React.useRef(convertPickerData(cdata, cols, value));
  var indexArrRef = React.useRef(getIndexArrayFromValue(value, listRef.current, cols));
  React.useImperativeHandle(ref, function () {
    return {
      getValue: function getValue() {
        return listRef.current.map(function (e, i) {
          return e[indexArrRef.current[i]].value;
        });
      }
    };
  });
  useUpdateEffect(function () {
    var list = convertPickerData(cdata, cols, value);
    listRef.current = list;
    indexArrRef.current = getIndexArrayFromValue(value, list, cols);
    forceUpdate();
  }, [data]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$3, _extends({}, rest, {
    className: clsx__default['default']('uc-pickerview', className),
    itemHeight: itemHeight
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mask"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "hairline"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "columnitem"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wheel-wrap"
  }, (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.map(function (listItem, idx) {
    return /*#__PURE__*/React__default['default'].createElement(Wheel, {
      labelRender: labelRender,
      itemHeight: itemHeight,
      data: listItem,
      key: idx,
      style: {
        width: "".concat(100 / cols, "%")
      },
      index: indexArrRef.current[idx],
      onIndexChange: function onIndexChange(index) {
        indexArrRef.current[idx] = index;
        var nextIndex = idx + 1;

        if (nextIndex <= cols - 1) {
          while (nextIndex <= cols - 1) {
            // next wheel refresh  & update value to next&first
            if (!isUnLinked) {
              var _listRef$current$inde, _listRef$current$next;

              // linked
              listRef.current[nextIndex] = ((_listRef$current$inde = listRef.current[nextIndex - 1][indexArrRef.current[nextIndex - 1]]) === null || _listRef$current$inde === void 0 ? void 0 : _listRef$current$inde.children) || [];

              if ((!indexArrRef.current[nextIndex] || indexArrRef.current[nextIndex] === -1) && indexArrRef.current[nextIndex] < ((_listRef$current$next = listRef.current[nextIndex]) === null || _listRef$current$next === void 0 ? void 0 : _listRef$current$next.length)) {
                indexArrRef.current[nextIndex] = 0;
              }
            }

            nextIndex++;
          }

          listRef.current = _toConsumableArray(listRef.current);
          indexArrRef.current = _toConsumableArray(indexArrRef.current);
          forceUpdate();
        }

        onChange === null || onChange === void 0 ? void 0 : onChange(listRef.current.map(function (e, i) {
          var _e$index;

          var index = indexArrRef.current[i];

          if (index > (e === null || e === void 0 ? void 0 : e.length) - 1) {
            index = 0;
          }

          return (_e$index = e[index]) === null || _e$index === void 0 ? void 0 : _e$index.value;
        }));
        onWheelChange === null || onWheelChange === void 0 ? void 0 : onWheelChange(index, idx);
      }
    });
  }))));
});
PickerView.displayName = 'UC-PickerView';

var _excluded$C = ["okText", "cancelText", "title", "onClose", "visible", "onOk", "onChange", "onWheelChange", "itemHeight", "labelRender", "className", "value", "data"];

var _templateObject$C;
var StyledDrawer$1 = styled__default['default'](Drawer)(_templateObject$C || (_templateObject$C = _taggedTemplateLiteral(["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n    user-select: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n"])), getThemeColorCss('color')); //#endregion

/** picker 下方弹出选择器 */

var Picker = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$title = props.title,
      title = _props$title === void 0 ? '请选择' : _props$title,
      onClose = props.onClose,
      visible = props.visible,
      onOk = props.onOk,
      onChange = props.onChange,
      onWheelChange = props.onWheelChange,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 35 : _props$itemHeight,
      labelRender = props.labelRender,
      className = props.className,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      rest = _objectWithoutProperties(props, _excluded$C);

  var pickerViewRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return pickerViewRef.current;
  });

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var onChangeRef = useCallbackRef(onChange);
  var onValueChange = React.useCallback(function (value) {
    var _onChangeRef$current;

    setVal(value);
    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, value);
  }, [onChangeRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledDrawer$1, _extends({}, rest, {
    className: clsx__default['default']('uc-picker', className),
    position: "bottom",
    visible: visible,
    onClose: onClose,
    header: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "cancel-text",
      onClick: onClose
    }, cancelText), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "title"
    }, title), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ok-text",
      onClick: function onClick() {
        onOk === null || onOk === void 0 ? void 0 : onOk(pickerViewRef.current.getValue());
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }, okText))
  }), /*#__PURE__*/React__default['default'].createElement(PickerView, {
    labelRender: labelRender,
    itemHeight: itemHeight,
    ref: pickerViewRef,
    data: data,
    value: val,
    onChange: onValueChange,
    onWheelChange: onWheelChange
  }));
});
Picker.displayName = 'UC-Picker';

var _excluded$D = ["current", "dotStyle", "className", "direction", "steps"];

var _templateObject$D;
var StyledSteps = styled__default['default'].div(_templateObject$D || (_templateObject$D = _taggedTemplateLiteral(["\n  .step {\n    .step-box {\n      position: relative;\n      &::after {\n        content: '';\n        position: absolute;\n        background-color: #909ca4;\n      }\n\n      .step-circle {\n        position: relative;\n        display: flex;\n        width: 25px;\n        height: 25px;\n        font-size: 13px;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        color: #909ca4;\n        border: 1px solid #909ca4;\n        border-radius: 50%;\n        background-color: #fff;\n        padding: 0;\n\n        &.dot {\n          width: 8px;\n          height: 8px;\n        }\n\n        &.icon {\n          border: none;\n        }\n      }\n    }\n\n    &.finish {\n      .step-box {\n        &::after {\n          ", "\n        }\n      }\n      .step-circle {\n        ", "\n        ", "\n      }\n    }\n    &.current {\n      .step-circle {\n        color: #fff;\n        ", "\n        border:0;\n      }\n    }\n\n    &.finish,\n    &.current {\n      .step-title {\n        ", "\n      }\n      .step-circle {\n        &.dot {\n          ", "\n        }\n      }\n    }\n\n    &:last-child {\n      .step-box::after {\n        display: none;\n      }\n    }\n  }\n\n  &.horizontal {\n    display: flex;\n\n    .step {\n      &:not(:last-child) {\n        width: ", "px;\n      }\n      position: relative;\n\n      .step-box {\n        width: 24px;\n        height: 24px;\n        &::after {\n          left: 50%;\n          top: 50%;\n          height: 1px;\n          transform: translateY(-50%);\n          width: ", "px;\n          position: absolute;\n        }\n        .step-circle {\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n    }\n\n    .step-content {\n      font-size: 14px;\n      padding-top: 12px;\n      color: #999;\n      .step-title {\n      }\n      .step-description {\n        margin-top: 2px;\n      }\n    }\n  }\n\n  &.vertical {\n    .step {\n      display: flex;\n\n      &:not(:last-child) {\n        height: ", "px;\n      }\n\n      .step-box {\n        flex: none;\n        width: 24px;\n        margin-right: 8px;\n\n        &::after {\n          left: 50%;\n          top: 13px;\n          width: 1px;\n          transform: translateX(-50%);\n          height: 100%;\n        }\n        .step-circle {\n          top: 13px;\n          left: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n\n      &:last-child {\n        .step-content {\n          padding-bottom: 0;\n        }\n      }\n      .step-content {\n        flex: auto;\n        padding: 3px 0 14px;\n        font-size: 14px;\n        color: #999;\n        .step-title {\n        }\n        .step-description {\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('background-color'), function (props) {
  return props.space;
}, function (props) {
  return props.space;
}, function (props) {
  return props.space;
});
/** 步骤条 */

var Steps = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      _props$dotStyle = props.dotStyle,
      dotStyle = _props$dotStyle === void 0 ? false : _props$dotStyle,
      className = props.className,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$steps = props.steps,
      steps = _props$steps === void 0 ? [] : _props$steps,
      rest = _objectWithoutProperties(props, _excluded$D);

  var domRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var _useState = React.useState(80),
      _useState2 = _slicedToArray(_useState, 2),
      space = _useState2[0],
      setSpace = _useState2[1];

  React.useLayoutEffect(function () {
    var isHorizontal = direction === 'horizontal';

    var resizeHandler = function resizeHandler() {
      if (steps.length > 1) {
        var domEl = domRef.current;
        setSpace(Math.max((isHorizontal ? domEl.offsetWidth : domEl.offsetHeight) / steps.length, 60));
      }
    };

    var throttleResizeHandler = throttle(resizeHandler);

    if (isHorizontal) {
      window.addEventListener('resize', throttleResizeHandler);
    }

    resizeHandler();
    return function () {
      if (isHorizontal) {
        window.removeEventListener('resize', throttleResizeHandler);
      }
    };
  }, [steps, direction]);
  return /*#__PURE__*/React__default['default'].createElement(StyledSteps, _extends({}, rest, {
    ref: domRef,
    className: clsx__default['default']('uc-steps', className, direction),
    space: space
  }), steps.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: idx,
      className: clsx__default['default']('step', {
        finish: idx < current,
        current: idx === current
      })
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-box"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']("step-circle", {
        dot: dotStyle && !item.icon,
        icon: item.icon
      })
    }, item.icon ? item.icon : dotStyle ? null : idx + 1)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-content"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-title"
    }, item.title), !!item.description && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-description"
    }, item.description)));
  }));
});
Steps.displayName = 'UC-Steps';

var Point = /*#__PURE__*/function () {
  function Point(x, y, pressure, time) {
    _classCallCheck(this, Point);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "pressure", void 0);

    _defineProperty(this, "time", void 0);

    if (isNaN(x) || isNaN(y)) {
      throw new Error("Point is invalid: (".concat(x, ", ").concat(y, ")"));
    }

    this.x = +x;
    this.y = +y;
    this.pressure = pressure || 0;
    this.time = time || Date.now();
  }

  _createClass(Point, [{
    key: "distanceTo",
    value: function distanceTo(start) {
      return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return this.x === other.x && this.y === other.y && this.pressure === other.pressure && this.time === other.time;
    }
  }, {
    key: "velocityFrom",
    value: function velocityFrom(start) {
      return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 0;
    }
  }]);

  return Point;
}();

var Bezier = /*#__PURE__*/function () {
  function Bezier(startPoint, control2, control1, endPoint, startWidth, endWidth) {
    _classCallCheck(this, Bezier);
  } // Returns approximated length. Code taken from https://www.lemoda.net/maths/bezier-length/index.html.


  _createClass(Bezier, [{
    key: "length",
    value: function length() {
      var steps = 10;
      var length = 0;
      var px;
      var py;

      for (var i = 0; i <= steps; i += 1) {
        var t = i / steps;
        var cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
        var cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);

        if (i > 0) {
          var xdiff = cx - px;
          var ydiff = cy - py;
          length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        }

        px = cx;
        py = cy;
      }

      return length;
    } // Calculate parametric value of x or y given t and the four point coordinates of a cubic bezier curve.

  }, {
    key: "point",
    value: function point(t, start, c1, c2, end) {
      // prettier-ignore
      return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
    }
  }], [{
    key: "fromPoints",
    value: function fromPoints(points, widths) {
      var c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
      var c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
      return new Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
    }
  }, {
    key: "calculateControlPoints",
    value: function calculateControlPoints(s1, s2, s3) {
      var dx1 = s1.x - s2.x;
      var dy1 = s1.y - s2.y;
      var dx2 = s2.x - s3.x;
      var dy2 = s2.y - s3.y;
      var m1 = {
        x: (s1.x + s2.x) / 2.0,
        y: (s1.y + s2.y) / 2.0
      };
      var m2 = {
        x: (s2.x + s3.x) / 2.0,
        y: (s2.y + s3.y) / 2.0
      };
      var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      var dxm = m1.x - m2.x;
      var dym = m1.y - m2.y;
      var k = l2 / (l1 + l2);
      var cm = {
        x: m2.x + dxm * k,
        y: m2.y + dym * k
      };
      var tx = s2.x - cm.x;
      var ty = s2.y - cm.y;
      return {
        c1: new Point(m1.x + tx, m1.y + ty),
        c2: new Point(m2.x + tx, m2.y + ty)
      };
    }
  }]);

  return Bezier;
}();

var SignatureEventTarget = /*#__PURE__*/function () {
  /* tslint:disable: variable-name */

  /* tslint:enable: variable-name */
  function SignatureEventTarget() {
    _classCallCheck(this, SignatureEventTarget);

    _defineProperty(this, "_et", void 0);

    try {
      this._et = new EventTarget();
    } catch (error) {
      // Using document as EventTarget to support iOS 13 and older.
      // Because EventTarget constructor just exists at iOS 14 and later.
      this._et = document;
    }
  }

  _createClass(SignatureEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener, options) {
      this._et.addEventListener(type, listener, options);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      return this._et.dispatchEvent(event);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, callback, options) {
      this._et.removeEventListener(type, callback, options);
    }
  }]);

  return SignatureEventTarget;
}();

var SignaturePad = /*#__PURE__*/function (_SignatureEventTarget) {
  _inherits(SignaturePad, _SignatureEventTarget);

  var _super = _createSuper(SignaturePad);

  // Public stuff
  // Private stuff

  /* tslint:disable: variable-name */
  // Stores up to 4 most recent points; used to generate a new curve
  // Stores all points in groups (one group per line or dot)

  /* tslint:enable: variable-name */
  function SignaturePad(canvas) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SignaturePad);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "dotSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "minWidth", void 0);

    _defineProperty(_assertThisInitialized(_this), "maxWidth", void 0);

    _defineProperty(_assertThisInitialized(_this), "penColor", void 0);

    _defineProperty(_assertThisInitialized(_this), "minDistance", void 0);

    _defineProperty(_assertThisInitialized(_this), "velocityFilterWeight", void 0);

    _defineProperty(_assertThisInitialized(_this), "backgroundColor", void 0);

    _defineProperty(_assertThisInitialized(_this), "throttle", void 0);

    _defineProperty(_assertThisInitialized(_this), "_ctx", void 0);

    _defineProperty(_assertThisInitialized(_this), "_drawningStroke", void 0);

    _defineProperty(_assertThisInitialized(_this), "_isEmpty", void 0);

    _defineProperty(_assertThisInitialized(_this), "_lastPoints", void 0);

    _defineProperty(_assertThisInitialized(_this), "_data", void 0);

    _defineProperty(_assertThisInitialized(_this), "_lastVelocity", void 0);

    _defineProperty(_assertThisInitialized(_this), "_lastWidth", void 0);

    _defineProperty(_assertThisInitialized(_this), "_strokeMoveUpdate", void 0);

    _defineProperty(_assertThisInitialized(_this), "_handleMouseDown", function (event) {
      if (event.buttons === 1) {
        _this._drawningStroke = true;

        _this._strokeBegin(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleMouseMove", function (event) {
      if (_this._drawningStroke) {
        _this._strokeMoveUpdate(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleMouseUp", function (event) {
      if (event.buttons === 1 && _this._drawningStroke) {
        _this._drawningStroke = false;

        _this._strokeEnd(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleTouchStart", function (event) {
      // Prevent scrolling.
      event.preventDefault();

      if (event.targetTouches.length === 1) {
        var touch = event.changedTouches[0];

        _this._strokeBegin(touch);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleTouchMove", function (event) {
      // Prevent scrolling.
      event.preventDefault();
      var touch = event.targetTouches[0];

      _this._strokeMoveUpdate(touch);
    });

    _defineProperty(_assertThisInitialized(_this), "_handleTouchEnd", function (event) {
      var wasCanvasTouched = event.target === _this.canvas;

      if (wasCanvasTouched) {
        event.preventDefault();
        var touch = event.changedTouches[0];

        _this._strokeEnd(touch);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handlePointerStart", function (event) {
      _this._drawningStroke = true;
      event.preventDefault();

      _this._strokeBegin(event);
    });

    _defineProperty(_assertThisInitialized(_this), "_handlePointerMove", function (event) {
      if (_this._drawningStroke) {
        event.preventDefault();

        _this._strokeMoveUpdate(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handlePointerEnd", function (event) {
      _this._drawningStroke = false;
      var wasCanvasTouched = event.target === _this.canvas;

      if (wasCanvasTouched) {
        event.preventDefault();

        _this._strokeEnd(event);
      }
    });

    _this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
    _this.minWidth = options.minWidth || 0.5;
    _this.maxWidth = options.maxWidth || 2.5;
    _this.throttle = 'throttle' in options ? options.throttle : 16; // in milisecondss

    _this.minDistance = 'minDistance' in options ? options.minDistance : 5; // in pixels

    _this.dotSize = options.dotSize || 0;
    _this.penColor = options.penColor || 'black';
    _this.backgroundColor = options.backgroundColor || 'rgba(0,0,0,0)';
    _this._strokeMoveUpdate = _this.throttle ? throttle(SignaturePad.prototype._strokeUpdate, _this.throttle) : SignaturePad.prototype._strokeUpdate;
    _this._ctx = canvas.getContext('2d');

    _this.clear(); // Enable mouse and touch event handlers


    _this.on();

    return _this;
  }

  _createClass(SignaturePad, [{
    key: "clear",
    value: function clear() {
      var ctx = this._ctx,
          canvas = this.canvas; // Clear canvas using background color

      ctx.fillStyle = this.backgroundColor;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this._data = [];

      this._reset();

      this._isEmpty = true;
    }
  }, {
    key: "fromDataURL",
    value: function fromDataURL(dataUrl) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        var image = new Image();
        var ratio = options.ratio || window.devicePixelRatio || 1;
        var width = options.width || _this2.canvas.width / ratio;
        var height = options.height || _this2.canvas.height / ratio;
        var xOffset = options.xOffset || 0;
        var yOffset = options.yOffset || 0;

        _this2._reset();

        image.onload = function () {
          _this2._ctx.drawImage(image, xOffset, yOffset, width, height);

          resolve();
        };

        image.onerror = function (error) {
          reject(error);
        };

        image.crossOrigin = 'anonymous';
        image.src = dataUrl;
        _this2._isEmpty = false;
      });
    }
  }, {
    key: "toDataURL",
    value: function toDataURL() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'image/png';
      var encoderOptions = arguments.length > 1 ? arguments[1] : undefined;

      switch (type) {
        case 'image/svg+xml':
          return this._toSVG();

        default:
          return this.canvas.toDataURL(type, encoderOptions);
      }
    }
  }, {
    key: "on",
    value: function on() {
      // Disable panning/zooming when touching canvas element
      this.canvas.style.touchAction = 'none';
      this.canvas.style.msTouchAction = 'none';
      var isIOS = /Macintosh/.test(navigator.userAgent) && 'ontouchstart' in document; // The "Scribble" feature of iOS intercepts point events. So that we can lose some of them when tapping rapidly.
      // Use touch events for iOS platforms to prevent it. See https://developer.apple.com/forums/thread/664108 for more information.

      if (window.PointerEvent && !isIOS) {
        this._handlePointerEvents();
      } else {
        this._handleMouseEvents();

        if ('ontouchstart' in window) {
          this._handleTouchEvents();
        }
      }
    }
  }, {
    key: "off",
    value: function off() {
      // Enable panning/zooming when touching canvas element
      this.canvas.style.touchAction = 'auto';
      this.canvas.style.msTouchAction = 'auto';
      this.canvas.removeEventListener('pointerdown', this._handlePointerStart);
      this.canvas.removeEventListener('pointermove', this._handlePointerMove);
      document.removeEventListener('pointerup', this._handlePointerEnd);
      this.canvas.removeEventListener('mousedown', this._handleMouseDown);
      this.canvas.removeEventListener('mousemove', this._handleMouseMove);
      document.removeEventListener('mouseup', this._handleMouseUp);
      this.canvas.removeEventListener('touchstart', this._handleTouchStart);
      this.canvas.removeEventListener('touchmove', this._handleTouchMove);
      this.canvas.removeEventListener('touchend', this._handleTouchEnd);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._isEmpty;
    }
  }, {
    key: "fromData",
    value: function fromData(pointGroups) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$clear = _ref.clear,
          clear = _ref$clear === void 0 ? true : _ref$clear;

      if (clear) {
        this.clear();
      }

      this._fromData(pointGroups, this._drawCurve.bind(this), this._drawDot.bind(this));

      this._data = clear ? pointGroups : this._data.concat(pointGroups);
    }
  }, {
    key: "toData",
    value: function toData() {
      return this._data;
    } // Event handlers

  }, {
    key: "_strokeBegin",
    value: // Private methods
    function _strokeBegin(event) {
      this.dispatchEvent(new CustomEvent('beginStroke', {
        detail: event
      }));
      var newPointGroup = {
        dotSize: this.dotSize,
        minWidth: this.minWidth,
        maxWidth: this.maxWidth,
        penColor: this.penColor,
        points: []
      };

      this._data.push(newPointGroup);

      this._reset();

      this._strokeUpdate(event);
    }
  }, {
    key: "_strokeUpdate",
    value: function _strokeUpdate(event) {
      if (this._data.length === 0) {
        // This can happen if clear() was called while a signature is still in progress,
        // or if there is a race condition between start/update events.
        this._strokeBegin(event);

        return;
      }

      this.dispatchEvent(new CustomEvent('beforeUpdateStroke', {
        detail: event
      }));
      var x = event.clientX;
      var y = event.clientY;
      var pressure = event.pressure !== undefined ? event.pressure : event.force !== undefined ? event.force : 0;

      var point = this._createPoint(x, y, pressure);

      var lastPointGroup = this._data[this._data.length - 1];
      var lastPoints = lastPointGroup.points;
      var lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
      var isLastPointTooClose = lastPoint ? point.distanceTo(lastPoint) <= this.minDistance : false;
      var penColor = lastPointGroup.penColor,
          dotSize = lastPointGroup.dotSize,
          minWidth = lastPointGroup.minWidth,
          maxWidth = lastPointGroup.maxWidth; // Skip this point if it's too close to the previous one

      if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
        var curve = this._addPoint(point);

        if (!lastPoint) {
          this._drawDot(point, {
            penColor: penColor,
            dotSize: dotSize,
            minWidth: minWidth,
            maxWidth: maxWidth
          });
        } else if (curve) {
          this._drawCurve(curve, {
            penColor: penColor,
            dotSize: dotSize,
            minWidth: minWidth,
            maxWidth: maxWidth
          });
        }

        lastPoints.push({
          time: point.time,
          x: point.x,
          y: point.y,
          pressure: point.pressure
        });
      }

      this.dispatchEvent(new CustomEvent('afterUpdateStroke', {
        detail: event
      }));
    }
  }, {
    key: "_strokeEnd",
    value: function _strokeEnd(event) {
      this._strokeUpdate(event);

      this.dispatchEvent(new CustomEvent('endStroke', {
        detail: event
      }));
    }
  }, {
    key: "_handlePointerEvents",
    value: function _handlePointerEvents() {
      this._drawningStroke = false;
      this.canvas.addEventListener('pointerdown', this._handlePointerStart);
      this.canvas.addEventListener('pointermove', this._handlePointerMove);
      document.addEventListener('pointerup', this._handlePointerEnd);
    }
  }, {
    key: "_handleMouseEvents",
    value: function _handleMouseEvents() {
      this._drawningStroke = false;
      this.canvas.addEventListener('mousedown', this._handleMouseDown);
      this.canvas.addEventListener('mousemove', this._handleMouseMove);
      document.addEventListener('mouseup', this._handleMouseUp);
    }
  }, {
    key: "_handleTouchEvents",
    value: function _handleTouchEvents() {
      this.canvas.addEventListener('touchstart', this._handleTouchStart);
      this.canvas.addEventListener('touchmove', this._handleTouchMove);
      this.canvas.addEventListener('touchend', this._handleTouchEnd);
    } // Called when a new line is started

  }, {
    key: "_reset",
    value: function _reset() {
      this._lastPoints = [];
      this._lastVelocity = 0;
      this._lastWidth = (this.minWidth + this.maxWidth) / 2;
      this._ctx.fillStyle = this.penColor;
    }
  }, {
    key: "_createPoint",
    value: function _createPoint(x, y, pressure) {
      var rect = this.canvas.getBoundingClientRect();
      return new Point(x - rect.left, y - rect.top, pressure, new Date().getTime());
    } // Add point to _lastPoints array and generate a new curve if there are enough points (i.e. 3)

  }, {
    key: "_addPoint",
    value: function _addPoint(point) {
      var _lastPoints = this._lastPoints;

      _lastPoints.push(point);

      if (_lastPoints.length > 2) {
        // To reduce the initial lag make it work with 3 points
        // by copying the first point to the beginning.
        if (_lastPoints.length === 3) {
          _lastPoints.unshift(_lastPoints[0]);
        } // _points array will always have 4 points here.


        var widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2]);

        var curve = Bezier.fromPoints(_lastPoints, widths); // Remove the first element from the list, so that there are no more than 4 points at any time.

        _lastPoints.shift();

        return curve;
      }

      return null;
    }
  }, {
    key: "_calculateCurveWidths",
    value: function _calculateCurveWidths(startPoint, endPoint) {
      var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

      var newWidth = this._strokeWidth(velocity);

      var widths = {
        end: newWidth,
        start: this._lastWidth
      };
      this._lastVelocity = velocity;
      this._lastWidth = newWidth;
      return widths;
    }
  }, {
    key: "_strokeWidth",
    value: function _strokeWidth(velocity) {
      return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
    }
  }, {
    key: "_drawCurveSegment",
    value: function _drawCurveSegment(x, y, width) {
      var ctx = this._ctx;
      ctx.moveTo(x, y);
      ctx.arc(x, y, width, 0, 2 * Math.PI, false);
      this._isEmpty = false;
    }
  }, {
    key: "_drawCurve",
    value: function _drawCurve(curve, options) {
      var ctx = this._ctx;
      var widthDelta = curve.endWidth - curve.startWidth; // '2' is just an arbitrary number here. If only lenght is used, then
      // there are gaps between curve segments :/

      var drawSteps = Math.ceil(curve.length()) * 2;
      ctx.beginPath();
      ctx.fillStyle = options.penColor;

      for (var i = 0; i < drawSteps; i += 1) {
        // Calculate the Bezier (x, y) coordinate for this step.
        var t = i / drawSteps;
        var tt = t * t;
        var ttt = tt * t;
        var u = 1 - t;
        var uu = u * u;
        var uuu = uu * u;
        var x = uuu * curve.startPoint.x;
        x += 3 * uu * t * curve.control1.x;
        x += 3 * u * tt * curve.control2.x;
        x += ttt * curve.endPoint.x;
        var y = uuu * curve.startPoint.y;
        y += 3 * uu * t * curve.control1.y;
        y += 3 * u * tt * curve.control2.y;
        y += ttt * curve.endPoint.y;
        var width = Math.min(curve.startWidth + ttt * widthDelta, options.maxWidth);

        this._drawCurveSegment(x, y, width);
      }

      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "_drawDot",
    value: function _drawDot(point, options) {
      var ctx = this._ctx;
      var width = options.dotSize > 0 ? options.dotSize : (options.minWidth + options.maxWidth) / 2;
      ctx.beginPath();

      this._drawCurveSegment(point.x, point.y, width);

      ctx.closePath();
      ctx.fillStyle = options.penColor;
      ctx.fill();
    }
  }, {
    key: "_fromData",
    value: function _fromData(pointGroups, drawCurve, drawDot) {
      var _iterator = _createForOfIteratorHelper(pointGroups),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          var penColor = group.penColor,
              dotSize = group.dotSize,
              minWidth = group.minWidth,
              maxWidth = group.maxWidth,
              points = group.points;

          if (points.length > 1) {
            for (var j = 0; j < points.length; j += 1) {
              var basicPoint = points[j];
              var point = new Point(basicPoint.x, basicPoint.y, basicPoint.pressure, basicPoint.time); // All points in the group have the same color, so it's enough to set
              // penColor just at the beginning.

              this.penColor = penColor;

              if (j === 0) {
                this._reset();
              }

              var curve = this._addPoint(point);

              if (curve) {
                drawCurve(curve, {
                  penColor: penColor,
                  dotSize: dotSize,
                  minWidth: minWidth,
                  maxWidth: maxWidth
                });
              }
            }
          } else {
            this._reset();

            drawDot(points[0], {
              penColor: penColor,
              dotSize: dotSize,
              minWidth: minWidth,
              maxWidth: maxWidth
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_toSVG",
    value: function _toSVG() {
      var pointGroups = this._data;
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      var minX = 0;
      var minY = 0;
      var maxX = this.canvas.width / ratio;
      var maxY = this.canvas.height / ratio;
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', this.canvas.width.toString());
      svg.setAttribute('height', this.canvas.height.toString());

      this._fromData(pointGroups, function (curve, _ref2) {
        var penColor = _ref2.penColor;
        var path = document.createElement('path'); // Need to check curve for NaN values, these pop up when drawing
        // lines on the canvas that are not continuous. E.g. Sharp corners
        // or stopping mid-stroke and than continuing without lifting mouse.

        /* eslint-disable no-restricted-globals */

        if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
          var attr = "M ".concat(curve.startPoint.x.toFixed(3), ",").concat(curve.startPoint.y.toFixed(3), " ") + "C ".concat(curve.control1.x.toFixed(3), ",").concat(curve.control1.y.toFixed(3), " ") + "".concat(curve.control2.x.toFixed(3), ",").concat(curve.control2.y.toFixed(3), " ") + "".concat(curve.endPoint.x.toFixed(3), ",").concat(curve.endPoint.y.toFixed(3));
          path.setAttribute('d', attr);
          path.setAttribute('stroke-width', (curve.endWidth * 2.25).toFixed(3));
          path.setAttribute('stroke', penColor);
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke-linecap', 'round');
          svg.appendChild(path);
        }
        /* eslint-enable no-restricted-globals */

      }, function (point, _ref3) {
        var penColor = _ref3.penColor,
            dotSize = _ref3.dotSize,
            minWidth = _ref3.minWidth,
            maxWidth = _ref3.maxWidth;
        var circle = document.createElement('circle');
        var size = dotSize > 0 ? dotSize : (minWidth + maxWidth) / 2;
        circle.setAttribute('r', size.toString());
        circle.setAttribute('cx', point.x.toString());
        circle.setAttribute('cy', point.y.toString());
        circle.setAttribute('fill', penColor);
        svg.appendChild(circle);
      });

      var prefix = 'data:image/svg+xml;base64,';
      var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + " viewBox=\"".concat(minX, " ").concat(minY, " ").concat(this.canvas.width, " ").concat(this.canvas.height, "\"") + " width=\"".concat(maxX, "\"") + " height=\"".concat(maxY, "\"") + '>';
      var body = svg.innerHTML; // IE hack for missing innerHTML property on SVGElement

      if (body === undefined) {
        var dummy = document.createElement('dummy');
        var nodes = svg.childNodes;
        dummy.innerHTML = ''; // tslint:disable-next-line: prefer-for-of

        for (var i = 0; i < nodes.length; i += 1) {
          dummy.appendChild(nodes[i].cloneNode(true));
        }

        body = dummy.innerHTML;
      }

      var footer = '</svg>';
      var data = header + body + footer;
      return prefix + btoa(data);
    }
  }]);

  return SignaturePad;
}(SignatureEventTarget);

function _dataURLToBlob(dataURL) {
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
}

function _download(dataURL, filename) {
  var blob = _dataURLToBlob(dataURL);

  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

function App(cavansRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    backgroundColor: 'rgb(255, 255, 255,0)',
    penColor: 'black',
    useLandscape: true
  };
  var padRef = React.useRef();
  React.useEffect(function () {
    var canvas = cavansRef.current;
    var signaturePad = padRef.current = new SignaturePad(canvas, options);

    function resizeCanvas() {
      var useLandscape = options.useLandscape;
      var w = canvas.offsetWidth;
      var h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      if (useLandscape) {
        var ctx = canvas.getContext('2d');
        ctx.rotate(1.5 * Math.PI);
        ctx.translate(-canvas.height, 0);
      }

      signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    return function () {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [cavansRef, options]);

  var download = function download(fileName) {
    var dataURL = padRef.current.toDataURL();

    _download(dataURL, fileName);
  };

  var undo = function undo() {
    if (options.useLandscape) {
      return;
    }

    var data = padRef.current.toData();

    if (data) {
      data.pop(); // remove the last dot or line

      padRef.current.fromData(data);
    }
  };

  var setPenColor = function setPenColor(color) {
    padRef.current.penColor = color;
  };

  var clear = function clear() {
    padRef.current.clear();

    if (options.useLandscape) {
      var canvas = cavansRef.current;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    }
  };

  return {
    download: download,
    padRef: padRef,
    undo: undo,
    setPenColor: setPenColor,
    clear: clear
  };
}

var _excluded$E = ["padColor", "penColor", "className"];

var _templateObject$E;
var StyledSignature = styled__default['default'].div(_templateObject$E || (_templateObject$E = _taggedTemplateLiteral(["\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n"])), border);
/** 签名 */

var Signature = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var padColor = props.padColor,
      penColor = props.penColor,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$E);

  var elRef = React.useRef();
  var canvasRef = React.useRef();

  var _useSigPad = App(canvasRef, {
    useLandscape: false,
    penColor: penColor,
    backgroundColor: padColor
  }),
      padRef = _useSigPad.padRef,
      _clear = _useSigPad.clear,
      download = _useSigPad.download;

  React.useImperativeHandle(ref, function () {
    return {
      getData: function getData() {
        return padRef.current.toDataURL();
      },
      clear: function clear() {
        _clear();
      },
      download: download
    };
  });
  React.useLayoutEffect(function () {
    // read size from container
    canvasRef.current.width = elRef.current.offsetWidth;
    canvasRef.current.height = elRef.current.offsetHeight;
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledSignature, _extends({}, rest, {
    className: clsx__default['default']('uc-signature', className),
    ref: elRef
  }), /*#__PURE__*/React__default['default'].createElement("canvas", {
    ref: canvasRef
  }));
});
Signature.displayName = 'UC-Signature';

var _excluded$F = ["value", "defaultValue", "allowHalf", "readonly", "count", "char", "onChange", "className", "allowClear"];

var _templateObject$F;
var StyledRate = styled__default['default'].div(_templateObject$F || (_templateObject$F = _taggedTemplateLiteral(["\n  display: inline-flex;\n  .box {\n    position: relative;\n  }\n\n  .char {\n    padding: calc(24px / 8);\n    line-height: 24px;\n    font-size: 24px;\n    color: #ccc;\n    text-align: center;\n    overflow: hidden;\n    cursor: pointer;\n    &.half {\n      padding-right: 0;\n      width: 50%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n    &.active {\n      color: #ffd21e;\n    }\n    &.readonly {\n      cursor: unset;\n    }\n  }\n"])));
var defaultChar = /*#__PURE__*/React__default['default'].createElement("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "star",
  width: "1em",
  height: "1em",
  fill: "currentColor"
}, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
}));
/** 评分 */

var Rate = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var value = props.value,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? 0 : _props$defaultValue,
      _props$allowHalf = props.allowHalf,
      allowHalf = _props$allowHalf === void 0 ? false : _props$allowHalf,
      readonly = props.readonly,
      _props$count = props.count,
      count = _props$count === void 0 ? 5 : _props$count,
      _props$char = props["char"],
      _char = _props$char === void 0 ? defaultChar : _props$char,
      onChange = props.onChange,
      className = props.className,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
      rest = _objectWithoutProperties(props, _excluded$F);

  var _useState = React.useState(typeof value === 'number' ? value : defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var starList = Array(count).fill(null);
  var onChangeRef = useCallbackRef(onChange);
  useUpdateEffect(function () {
    var _onChangeRef$current;

    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, val);
  }, [val]);
  useUpdateEffect(function () {
    if (val !== value) {
      setVal(value);
    }
  }, [value]);
  var renderChar = React.useCallback(function (v, val, half) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']("char", {
        active: val >= v,
        half: half,
        readonly: readonly
      }),
      onClick: function onClick() {
        if (readonly) return;

        if (allowClear && val === v) {
          setVal(0);
        } else {
          setVal(v);
        }
      }
    }, _char);
  }, [allowClear, _char, readonly]);
  return /*#__PURE__*/React__default['default'].createElement(StyledRate, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className)
  }), starList.map(function (_, i) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: i,
      className: clsx__default['default']("box")
    }, allowHalf && renderChar(i + 0.5, val, true), renderChar(i + 1, val, false));
  }));
});
Rate.displayName = 'UC-Rate';

var _excluded$G = ["list", "stayTime", "icon", "closeable", "className", "onClose", "extra"];

var _templateObject$G;
var StyledNoticeList = styled__default['default'].div(_templateObject$G || (_templateObject$G = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 0px 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n\n    .list {\n      height: 100%;\n      transition-property: transform;\n      transition-duration: 0.8s;\n      transition-timing-function: ease-in-out;\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));

/** 多条信息垂直滚动通知栏  */
var NoticeList = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$list = props.list,
      list = _props$list === void 0 ? [] : _props$list,
      _props$stayTime = props.stayTime,
      stayTime = _props$stayTime === void 0 ? 3000 : _props$stayTime,
      icon = props.icon,
      _props$closeable = props.closeable,
      closeable = _props$closeable === void 0 ? false : _props$closeable,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = _objectWithoutProperties(props, _excluded$G);

  var listRef = React.useRef();
  var wrapRef = React.useRef();
  var timerRef = React.useRef();

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = React.useState(list),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  React.useEffect(function () {
    setData(list);
  }, [list]);
  React.useEffect(function () {
    var wrap = wrapRef.current;
    var list = listRef.current;

    if (data.length > 1 && visible) {
      timerRef.current = window.setTimeout(function () {
        list.style.transitionProperty = 'transform';
        list.style.transform = "translateY(-".concat(wrap.offsetHeight, "px)");
      }, stayTime);
      return function () {
        window.clearTimeout(timerRef.current);
      };
    }
  }, [stayTime, data, visible]);
  return /*#__PURE__*/React__default['default'].createElement(StyledNoticeList, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-noticelist', {
      hide: !visible
    })
  }), icon && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "icon-part"
  }, icon), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list",
    ref: listRef,
    onTransitionEnd: function onTransitionEnd() {
      // move
      listRef.current.style.transitionProperty = 'none';
      listRef.current.style.transform = 'none';
      var lIndex = data.length - 1;

      if (lIndex > 0) {
        data.push(data[0]);
        data.shift();
        setData(_toConsumableArray(data));
      }
    }
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: idx,
      onClick: function onClick() {
        if (item.link) {
          location.href = item.link;
        }
      },
      className: clsx__default['default']('item')
    }, /*#__PURE__*/React__default['default'].createElement(Text, null, item.text));
  }))), (closeable || extra) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content-extra')
  }, /*#__PURE__*/React__default['default'].createElement(Space, null, props.extra, props.closeable && /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-guanbi",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setVisible(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }))));
});
NoticeList.displayName = 'UC-NoticeList';

var _excluded$H = ["autoPlay", "loop", "onPageChange", "direction", "interval", "duration", "children", "className", "height", "style", "showPageIndicator", "ratio"];

var _templateObject$H;
var StyledSlide = styled__default['default'].div(_templateObject$H || (_templateObject$H = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    touch-action: none;\n    width: 100%;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .pager {\n    position: absolute;\n    bottom: 8px;\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n\n    .item {\n      cursor: pointer;\n      display: inline-block;\n      width: 19px;\n      height: 4px;\n      background: rgba(255, 255, 255, 0.6);\n      transition: all ease-in-out ", "ms;\n\n      &:not(:last-child) {\n        margin-right: 4px;\n      }\n\n      &.active {\n        background: #fff;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translate3d(0, -50%, 0);\n\n      .item {\n        display: block;\n        width: 4px;\n        height: 19px;\n        &:not(:last-child) {\n          margin-bottom: 4px;\n        }\n      }\n    }\n  }\n"])), animationNormal);

var getItems = function getItems(children, loop, height) {
  var items = [].concat(children),
      firstItem = items[0],
      lastItem = items[items.length - 1];

  if (loop && items.length > 1) {
    items.push(firstItem);
    items.unshift(lastItem);
  }

  return React__default['default'].Children.map(items, function (c, index) {
    var _c$props, _c$props2;

    return /*#__PURE__*/React__default['default'].cloneElement(c, {
      key: index,
      className: clsx__default['default']('uc-slide-page', (_c$props = c.props) === null || _c$props === void 0 ? void 0 : _c$props.className),
      style: _objectSpread2(_objectSpread2({}, (_c$props2 = c.props) === null || _c$props2 === void 0 ? void 0 : _c$props2.style), {}, {
        height: height
      })
    });
  });
};
/**
 *  轮播
 *
 *  ref: {
 *    prev: () => void;
 *    next: () => void;
 * }
 *
 *
 */


var Slide = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$autoPlay = props.autoPlay,
      autoPlay = _props$autoPlay === void 0 ? false : _props$autoPlay,
      _props$loop = props.loop,
      loop = _props$loop === void 0 ? true : _props$loop,
      onPageChange = props.onPageChange,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 3000 : _props$interval,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 280 : _props$duration,
      children = props.children,
      className = props.className,
      _props$height = props.height,
      height = _props$height === void 0 ? 160 : _props$height,
      style = props.style,
      _props$showPageIndica = props.showPageIndicator,
      showPageIndicator = _props$showPageIndica === void 0 ? true : _props$showPageIndica,
      _props$ratio = props.ratio,
      ratio = _props$ratio === void 0 ? 0.1 : _props$ratio,
      rest = _objectWithoutProperties(props, _excluded$H);

  var containerRef = React.useRef(null);
  var wrapElRef = React.useRef();

  var _useState = React.useState(function () {
    return getItems(children, loop, height);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var count = items.length;
  var len = React__default['default'].Children.count(children);
  var thisRef = React.useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    isMoving: false
  });

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pageIndex = _useState4[0],
      setPageIndex = _useState4[1]; // !loop:0~len-1, loop: -1~len


  var exp = count > len; // expanded

  var min = exp ? -1 : 0;
  var max = exp ? len : len - 1;
  var autoRef = useCallbackRef({
    pageIndex: pageIndex,
    min: min,
    max: max,
    exp: exp
  });
  var slideToPageIndex = React.useCallback(function (newPageIndex) {
    var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var s = thisRef.current;
    var el = wrapElRef.current;

    if (el) {
      el.style.transitionProperty = transition ? 'transform' : 'none';

      if (direction === 'horizontal') {
        var x = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapWidth;
        el.style.transform = "translate3d(".concat(x, "px, 0, 0)");
        s.x = x;
      } else {
        var y = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapHeight;
        el.style.transform = "translate3d(0, ".concat(y, "px, 0)");
        s.y = y;
      }

      setPageIndex(newPageIndex);
    }
  }, [thisRef, direction, exp]);
  React.useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        slideToPageIndex(Math.max(autoRef.current.min, pageIndex - 1));
      },
      next: function next() {
        slideToPageIndex(Math.min(autoRef.current.max, pageIndex + 1));
      }
    };
  });
  var ensurePageIndex = React.useCallback(function () {
    if (pageIndex >= len) {
      slideToPageIndex(0, false);
    } else if (pageIndex === -1) {
      slideToPageIndex(len - 1, false);
    }
  }, [slideToPageIndex, len, pageIndex]);
  useUpdateEffect(function () {
    setItems(getItems(children, loop, height));
    slideToPageIndex(0, false);
  }, [children, loop, height, slideToPageIndex]);
  useUpdateEffect(function () {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    }
  }, [pageIndex]);
  React.useLayoutEffect(function () {
    var s = thisRef.current;
    var container = containerRef.current;
    s.wrapWidth = container.offsetWidth;
    s.wrapHeight = container.offsetHeight;
    slideToPageIndex(0, false);
  }, [slideToPageIndex]);
  React.useEffect(function () {
    if (autoPlay && len > 1) {
      var timer = window.setInterval(function (p) {
        if (!thisRef.current.isMoving) {
          slideToPageIndex(p + 1);
        }
      }, interval, pageIndex);
      return function () {
        window.clearInterval(timer);
      };
    }
  }, [slideToPageIndex, autoPlay, interval, len, exp, pageIndex]);

  var pagerRender = function pagerRender() {
    if (!showPageIndicator || len <= 1) return null;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('pager', {
        vertical: direction === 'vertical'
      })
    }, React__default['default'].Children.map(children, function (c, idx) {
      return /*#__PURE__*/React__default['default'].createElement("span", {
        key: idx,
        className: clsx__default['default']('item', {
          active: pageIndex === idx
        }),
        onClick: function onClick() {
          return slideToPageIndex(idx);
        }
      });
    }));
  };

  var evtProps = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = function (e) {
    !isMobile && e.preventDefault();
    var s = thisRef.current;
    s.isMoving = true;
    wrapElRef.current.style.transitionProperty = 'none';
    s.lastX = s.x;
    s.lastY = s.y;
  };

  evtProps[isTouch ? 'onTouchEnd' : 'onMouseUp'] = function () {
    var s = thisRef.current;

    if (!s.isMoving) {
      return;
    }

    var instance = autoRef.current;

    if (instance.exp && (instance.max === instance.pageIndex || instance.min === instance.pageIndex)) {
      slideToPageIndex(instance.pageIndex === max ? 0 : len - 1, false);
      return;
    }

    s.isMoving = false;

    if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
      slideToPageIndex(pageIndex + (s.x < s.lastX ? 1 : -1));
    } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
      slideToPageIndex(pageIndex + (s.y < s.lastY ? 1 : -1));
    } else {
      // reset
      slideToPageIndex(pageIndex);
    }
  };

  React.useLayoutEffect(function () {
    var wrapEl = wrapElRef.current;
    var fg = new Touch__default['default'](wrapEl, {
      onPressMove: function onPressMove(e) {
        var s = thisRef.current;
        var instance = autoRef.current;

        if (instance.exp && (instance.max === instance.pageIndex || instance.min === instance.pageIndex)) {
          return;
        }

        if (direction === 'horizontal') {
          if (s.x > 0 || s.x < -1 * (count - 1) * s.wrapWidth) {
            return;
          }

          s.x += e.deltaX;
          wrapElRef.current.style.transform = "translate3d(".concat(s.x, "px, 0, 0)");
        } else {
          if (s.y > 0 || s.y < -1 * (count - 1) * s.wrapHeight) {
            return;
          }

          s.y += e.deltaY;
          wrapElRef.current.style.transform = "translate3d(0, ".concat(s.y, "px, 0)");
        }
      }
    });
    return function () {
      return fg.destroy();
    };
  }, [count, direction, autoRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledSlide, _extends({
    ref: containerRef
  }, rest, {
    className: clsx__default['default']('uc-slide', className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    })
  }), /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: wrapElRef,
    className: clsx__default['default']('wrap', {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      ensurePageIndex();
    }
  }, evtProps, {
    style: {
      transition: "transform ".concat(duration, "ms ease-in-out")
    }
  }), items), pagerRender());
});
Slide.displayName = 'UC-Slide';

var _excluded$I = ["children", "percent", "strokeLinecap", "strokeWidth", "size", "className", "style"];

var _templateObject$I;
var StyledProgressCircle = styled__default['default'].div(_templateObject$I || (_templateObject$I = _taggedTemplateLiteral(["\n  position: relative;\n  .content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])));
/** 环形进度条 */

var ProgressCircle = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$strokeLinecap = props.strokeLinecap,
      strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 10 : _props$strokeWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 120 : _props$size,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$I);

  var theme = styled.useTheme() || {};
  var color = props.color || theme.color || primary;
  return /*#__PURE__*/React__default['default'].createElement(StyledProgressCircle, _extends({
    className: clsx__default['default'](className, 'uc-progress-circle'),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      width: size,
      height: size
    })
  }, rest, {
    ref: ref
  }), /*#__PURE__*/React__default['default'].createElement("svg", {
    height: size,
    width: size,
    viewBox: "0 0 120 120",
    "x-mlns": "http://www.w3.org/200/svg"
  }, /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "#d9d9d9",
    strokeWidth: strokeWidth,
    fill: "none"
  }), percent > 0 ? /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: color,
    strokeDasharray: "".concat(percent * 314 / 100, ",314"),
    strokeWidth: strokeWidth,
    fill: "none",
    transform: "rotate(-90,60,60)",
    strokeLinecap: strokeLinecap,
    style: {
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s"
    }
  }) : null), children && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content"
  }, children));
});
ProgressCircle.displayName = 'UC-ProgressCircle';

var _templateObject$J;
var StyledWaterMark = styled__default['default'].div(_templateObject$J || (_templateObject$J = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  pointer-events: none;\n  background-repeat: repeat;\n"])));
/** 图片/文字水印 */

var WaterMark = function WaterMark(props) {
  var style = props.style,
      className = props.className,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 2000 : _props$zIndex,
      _props$gapX = props.gapX,
      gapX = _props$gapX === void 0 ? 24 : _props$gapX,
      _props$gapY = props.gapY,
      gapY = _props$gapY === void 0 ? 48 : _props$gapY,
      _props$width = props.width,
      width = _props$width === void 0 ? 120 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 64 : _props$height,
      _props$rotate = props.rotate,
      rotate = _props$rotate === void 0 ? -22 : _props$rotate,
      image = props.image,
      _props$imageWidth = props.imageWidth,
      imageWidth = _props$imageWidth === void 0 ? 120 : _props$imageWidth,
      _props$imageHeight = props.imageHeight,
      imageHeight = _props$imageHeight === void 0 ? 64 : _props$imageHeight,
      content = props.content,
      _props$fontStyle = props.fontStyle,
      fontStyle = _props$fontStyle === void 0 ? 'normal' : _props$fontStyle,
      _props$fontWeight = props.fontWeight,
      fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
      _props$fontColor = props.fontColor,
      fontColor = _props$fontColor === void 0 ? 'rgba(0,0,0,.15)' : _props$fontColor,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 14 : _props$fontSize,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'sans-serif' : _props$fontFamily;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      base64Url = _useState2[0],
      setBase64Url = _useState2[1];

  React.useEffect(function () {
    var canvas = document.createElement('canvas');
    var ratio = window.devicePixelRatio;
    var ctx = canvas.getContext('2d');
    var canvasWidth = "".concat((gapX + width) * ratio, "px");
    var canvasHeight = "".concat((gapY + height) * ratio, "px");
    var markWidth = width * ratio;
    var markHeight = height * ratio;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;

        img.onload = function () {
          ctx.drawImage(img, -imageWidth * ratio / 2, -imageHeight * ratio / 2, imageWidth * ratio, imageHeight * ratio);
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center'; // 文字绕中间旋转

        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var markSize = Number(fontSize) * ratio;
        ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error('当前环境不支持Canvas');
    }
  }, [gapX, gapY, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, content, fontSize, imageHeight, imageWidth]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWaterMark, {
    className: clsx__default['default']('uc-watermark', className),
    style: _objectSpread2({
      zIndex: zIndex,
      backgroundSize: "".concat(gapX + width, "px"),
      backgroundImage: "url('".concat(base64Url, "')")
    }, style)
  });
};

WaterMark.displayName = 'UC-WaterMark';

var _excluded$J = ["content", "style", "className"],
    _excluded2$3 = ["duration"];

var _templateObject$K;
var transitionDuration$2 = animationNormal;
var StyledNotify = styled__default['default'].div(_templateObject$K || (_templateObject$K = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 600;\n  transition: all ", "ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate3d(0, -100%, 0);\n    opacity: 0;\n  }\n\n  &.to {\n    transform: none;\n    opacity: 1;\n  }\n\n  .content {\n    padding: 8px 12px;\n    height: 40px;\n    min-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &.pc {\n    top: 16px;\n    .content {\n      box-shadow: ", ";\n      background-color: #fff;\n      border-radius: 2px;\n    }\n  }\n\n  &.mobile {\n    .content {\n      ", ";\n      color: #fff;\n      width: 100%;\n    }\n  }\n"])), transitionDuration$2, boxShadow, getThemeColorCss('background-color'));
var allNotifies = [];
/** 顶部全局消息通知 */

var Notify = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      style = props.style,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$J);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useLayoutEffect(function () {
    if (!isMobile && elRef.current) {
      if (allNotifies.length > 0) {
        var lastElPos = allNotifies[allNotifies.length - 1];
        elRef.current.style.top = lastElPos.top + lastElPos.height + 16 + 'px';
      }

      var css = window.getComputedStyle(elRef.current);
      allNotifies.push({
        top: parseInt(css.getPropertyValue('top'), 10),
        height: parseInt(css.getPropertyValue('height'), 10),
        el: elRef.current
      });
      return function () {
        var item = allNotifies.shift();

        if (allNotifies.length > 0 && item) {
          var h = item.height;
          allNotifies.map(function (n) {
            n.el.style.top = parseInt(n.el.style.top, 10) - h + 'px';
          });
        }
      };
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledNotify, _extends({}, rest, {
    ref: elRef,
    className: clsx__default['default']('uc-notify', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }), /*#__PURE__*/React__default['default'].createElement(Mask, {
    style: {
      background: 'transparent'
    },
    visible: isMobile
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content'),
    style: style
  }, content));
});
var t = 0;
/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */

Notify.show = function (props) {
  if (isMobile && t > 0) {
    return;
  }

  t++;
  var notifyProps = {};
  var _duration = 2000;

  if (_typeof(props) === 'object' && 'content' in props) {
    var _props$duration = props.duration,
        duration = _props$duration === void 0 ? 2000 : _props$duration,
        rest = _objectWithoutProperties(props, _excluded2$3);

    notifyProps = rest;
    _duration = duration;
  } else {
    notifyProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-notify', transitionDuration$2);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    duration: transitionDuration$2
  }, /*#__PURE__*/React__default['default'].createElement(Notify, notifyProps)), container);
  window.setTimeout(function () {
    dispose(beforeDispose);

    if (t > 0) {
      t = 0;
    }
  }, _duration);
};

Notify.displayName = 'UC-Notify';

var _excluded$K = ["children", "className", "content", "badgeStyle"];

var _templateObject$L;
var StyledBadge = styled__default['default'].div(_templateObject$L || (_templateObject$L = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n\n  .badge {\n    display: inline-block;\n    color: #fff;\n    text-align: center;\n    vertical-align: middle;\n    box-sizing: border-box;\n    border-radius: 100px;\n    padding: 2px 4px;\n    font-size: 9px;\n    line-height: 1.2;\n    white-space: nowrap;\n    position: absolute;\n    z-index: 1;\n    transform: translate(50%, -50%);\n    top: 0;\n    right: 0;\n    ", "\n\n    &.dot {\n      padding: 0;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n    }\n    &.without-children {\n      position: static;\n      transform: none;\n    }\n  }\n"])), getThemeColorCss('background-color'));
/** 徽标:右上角添加标记 */

var Badge = function Badge(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      badgeStyle = props.badgeStyle,
      rest = _objectWithoutProperties(props, _excluded$K);

  return /*#__PURE__*/React__default['default'].createElement(StyledBadge, _extends({}, rest, {
    className: clsx__default['default']('uc-badge', className)
  }), children, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('badge', {
      'dot': !content,
      'without-children': !children
    }),
    style: badgeStyle
  }, content));
};

Badge.displayName = 'UC-Badge';

var _excluded$L = ["size", "className", "shape", "style", "children"];

var _templateObject$M;
var StyledAvatar = styled__default['default'].div(_templateObject$M || (_templateObject$M = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-flex;\n  overflow: hidden;\n  color: #666;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  background: #ccc;\n\n  &.circle {\n    border-radius: 50%;\n  }\n  &.square {\n    border-radius: 2px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])));
/** 头像 */

var Avatar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      className = props.className,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$L);

  var s = _objectSpread2({
    width: size,
    height: size,
    fontSize: size * 0.6
  }, style);

  return /*#__PURE__*/React__default['default'].createElement(StyledAvatar, _extends({}, rest, {
    ref: ref,
    style: s,
    className: clsx__default['default']('uc-avatar', className, shape)
  }), children || /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-avatar"
  }));
});
Avatar.displayName = 'UC-Avatar';

var _excluded$M = ["className", "visible", "onClose", "images", "onIndexChange"];

var _templateObject$N;
var StyledImageViewer = styled__default['default'].div(_templateObject$N || (_templateObject$N = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 300;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  background-color: #000;\n\n  .navs {\n    position: absolute;\n    left: 50%;\n    top: 16px;\n    transform: translate3d(-50%, 0, 0);\n    color: #fff;\n    font-size: 18px;\n  }\n  .close {\n    position: fixed;\n    right: 24px;\n    top: 24px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 32px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    max-height: 70vh;\n    object-fit: contain;\n    flex-basis: 100vw;\n  }\n"])));
/** 图片查看器 */

var ImageViewer = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      onClose = props.onClose,
      images = props.images,
      onIndexChange = props.onIndexChange,
      rest = _objectWithoutProperties(props, _excluded$M);

  var _useState = React.useState(Array.isArray(images) ? images : [images]),
      _useState2 = _slicedToArray(_useState, 2),
      urls = _useState2[0],
      setUrls = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var onIndexChangeRef = useCallbackRef(onIndexChange);
  var slideRef = React.useRef();
  React.useEffect(function () {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);
  useUpdateEffect(function () {
    if (!visible) {
      setIndex(0);
    }
  }, [visible]);
  var slides = React.useMemo(function () {
    return /*#__PURE__*/React__default['default'].createElement(Slide, {
      ref: slideRef,
      showPageIndicator: false,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      direction: "horizontal",
      height: '100vh',
      onPageChange: function onPageChange(index) {
        var _onIndexChangeRef$cur;

        setIndex(index);
        (_onIndexChangeRef$cur = onIndexChangeRef.current) === null || _onIndexChangeRef$cur === void 0 ? void 0 : _onIndexChangeRef$cur.call(onIndexChangeRef, index);
      },
      autoPlay: false
    }, urls.map(function (url) {
      return /*#__PURE__*/React__default['default'].createElement("img", {
        src: url,
        key: url
      });
    }));
  }, [urls, onIndexChangeRef, slideRef]);

  var navRender = function navRender() {
    if (urls.length > 1) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx__default['default']('navs')
      }, /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Button, {
        style: {
          border: 'none'
        },
        ghost: true,
        onClick: function onClick(e) {
          var _slideRef$current;

          e.stopPropagation();
          (_slideRef$current = slideRef.current) === null || _slideRef$current === void 0 ? void 0 : _slideRef$current.prev();
        },
        icon: /*#__PURE__*/React__default['default'].createElement(IconArrow, {
          direction: "left"
        })
      }), /*#__PURE__*/React__default['default'].createElement("span", null, index + 1, " / ", urls.length), /*#__PURE__*/React__default['default'].createElement(Button, {
        ghost: true,
        style: {
          border: 'none'
        },
        onClick: function onClick(e) {
          var _slideRef$current2;

          e.stopPropagation();
          (_slideRef$current2 = slideRef.current) === null || _slideRef$current2 === void 0 ? void 0 : _slideRef$current2.next();
        },
        icon: /*#__PURE__*/React__default['default'].createElement(IconArrow, {
          direction: "right"
        })
      })));
    }
  };

  return visible && /*#__PURE__*/React__default['default'].createElement(StyledImageViewer, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-image-viewer', className)
  }), slides, /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-clear",
    className: "close",
    onClick: onClose
  }), navRender());
});
ImageViewer.displayName = 'UC-ImageViewer';

var _excluded$N = ["closable", "visible", "onClose", "className", "header", "children", "footer"];

var _templateObject$O;
var StyledModal = styled__default['default'](Popup)(_templateObject$O || (_templateObject$O = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-width: 30px;\n  background-color: #fff;\n  padding: 32px 32px 24px;\n  position: relative;\n  border-radius: 8px;\n  box-shadow: ", ";\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .body {\n    flex: 1;\n  }\n"])), boxShadow);
/** 对话框,基于Popup */

var Modal = function Modal(props) {
  var closable = props.closable,
      visible = props.visible,
      onClose = props.onClose,
      className = props.className,
      header = props.header,
      children = props.children,
      footer = props.footer,
      rest = _objectWithoutProperties(props, _excluded$N);

  return /*#__PURE__*/React__default['default'].createElement(StyledModal, _extends({}, rest, {
    visible: visible,
    onClose: onClose,
    className: clsx__default['default']('uc-modal', className),
    position: 'center'
  }), closable && /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "footer"
  }, footer));
};

Modal.displayName = 'UC-Modal';

var _excluded$O = ["content", "trigger", "placement", "arrow", "offset", "className", "closeOnClick", "hoverDelay", "closeOnClickOutside", "children"];

var _templateObject$P;
var StyledPopover$1 = styled__default['default'](Popover)(_templateObject$P || (_templateObject$P = _taggedTemplateLiteral(["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"])), boxShadow);

/**
 * click/hover 弹出菜单, 默认click, 基于Popover
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var PopMenu = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _children$props;

  var content = props.content,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom-right' : _props$placement,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      offset = props.offset,
      className = props.className,
      _props$closeOnClick = props.closeOnClick,
      closeOnClick = _props$closeOnClick === void 0 ? true : _props$closeOnClick,
      _props$hoverDelay = props.hoverDelay,
      hoverDelay = _props$hoverDelay === void 0 ? 100 : _props$hoverDelay,
      _props$closeOnClickOu = props.closeOnClickOutside,
      closeOnClickOutside = _props$closeOnClickOu === void 0 ? true : _props$closeOnClickOu,
      children = props.children,
      popoverRest = _objectWithoutProperties(props, _excluded$O);

  var timerRef = React.useRef(0);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return {
      show: function show() {
        return setVisible(true);
      },
      hide: function hide() {
        return setVisible(false);
      }
    };
  });
  var actionProps = {};

  if (trigger === 'click') {
    actionProps = {
      onClick: function onClick() {
        setVisible(true);
      }
    };
  } else if (trigger === 'hover') {
    actionProps = {
      onMouseEnter: function onMouseEnter() {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        timerRef.current = window.setTimeout(function () {
          setVisible(false);
        }, hoverDelay);
      }
    };
  }

  var onClose = React.useCallback(function () {
    setVisible(false);
  }, []); // add active class to trigger el

  var otherProps = {
    className: clsx__default['default']( /*#__PURE__*/React__default['default'].isValidElement(children) ? (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className : '', {
      active: visible,
      visible: visible
    })
  };
  return /*#__PURE__*/React__default['default'].createElement(StyledPopover$1, _extends({}, popoverRest, {
    className: clsx__default['default']('uc-popmenu', className),
    visible: visible,
    onClose: onClose,
    placement: placement,
    closeOnClickOutside: closeOnClickOutside,
    content: /*#__PURE__*/React__default['default'].createElement("div", {
      onClick: function onClick(e) {
        e.stopPropagation();

        if (closeOnClick) {
          onClose();
        }
      }
    }, content),
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, _objectSpread2(_objectSpread2({}, actionProps), otherProps)) : /*#__PURE__*/React__default['default'].createElement("span", _extends({}, actionProps, otherProps), children));
});
PopMenu.displayName = 'UC-PopMenu';

var _excluded$P = ["placement", "icon", "className", "children", "title", "okText", "okButtonProps", "cancelButtonProps", "cancelText", "arrow", "onOk", "closeOnClick", "onCancel"];

var _templateObject$Q;
var StyledMenu = styled__default['default'](PopMenu)(_templateObject$Q || (_templateObject$Q = _taggedTemplateLiteral(["\n  padding: 16px;\n\n  .popconfirm-content {\n    min-width: 120px;\n    .title {\n      display: flex;\n      color: #1a1a1a;\n      font-size: 14px;\n      align-items: center;\n      .pop-icon {\n        margin-right: 8px;\n        font-size: 20px;\n        color: #fab20a;\n      }\n    }\n\n    .ops {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 24px;\n\n      button {\n        height: 28px;\n        &:first-child {\n          margin-right: 12px;\n        }\n      }\n    }\n  }\n"])));

/**
 * 点击元素，弹出气泡式的确认框。基于PopMenu
 *
 * target: pc
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var PopConfirm = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-jinggao"
  }) : _props$icon,
      className = props.className,
      children = props.children,
      title = props.title,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      onOk = props.onOk,
      _props$closeOnClick = props.closeOnClick,
      closeOnClick = _props$closeOnClick === void 0 ? true : _props$closeOnClick,
      onCancel = props.onCancel,
      popomenuRest = _objectWithoutProperties(props, _excluded$P);

  var popmenuRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return popmenuRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledMenu, _extends({
    ref: popmenuRef
  }, popomenuRest, {
    className: clsx__default['default']('uc-popconfirm', className),
    placement: placement,
    arrow: arrow,
    content: /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('popconfirm-content'),
      onClick: function onClick(e) {
        if (!closeOnClick) {
          e.stopPropagation();
        }
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "title"
    }, icon && /*#__PURE__*/React__default['default'].createElement("span", {
      className: "pop-icon"
    }, icon), " ", title), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ops"
    }, /*#__PURE__*/React__default['default'].createElement(Button, _extends({}, cancelButtonProps, {
      onClick: function onClick() {
        var _popmenuRef$current;

        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        (_popmenuRef$current = popmenuRef.current) === null || _popmenuRef$current === void 0 ? void 0 : _popmenuRef$current.hide();
      }
    }), cancelText), /*#__PURE__*/React__default['default'].createElement(Button, _extends({
      type: "primary"
    }, okButtonProps, {
      onClick: function onClick(e) {
        if (!closeOnClick) {
          e.stopPropagation(); // prevent popmenu closeOnClick in out wrapper
        }

        onOk === null || onOk === void 0 ? void 0 : onOk();
      }
    }), okText)))
  }), children);
});
PopConfirm.displayName = 'UC-PopConfirm';

var utils = {
  // 返回月份中的第一天是星期几
  firstDayOfMonth: function firstDayOfMonth(date) {
    var d = date.constructor === Date ? date : this.cloneDate(date, 'dd', 1);
    return d.getDay();
  },
  // 获取当月天数
  getDaysInMonth: function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  },
  // 获取当月天数
  getDaysByDate: function getDaysByDate(date) {
    var tmp = this.parseDate(date);
    return new Date(tmp.getFullYear(), tmp.getMonth() + 1, 0).getDate();
  },
  // 获取当月信息
  getCurrMonthInfo: function getCurrMonthInfo(year, month) {
    return {
      dayCount: new Date(year, month + 1, 0).getDate(),
      // 总天数
      firstDay: new Date(year, month, 1).getDay() // 第一天是周几

    };
  },
  // 判断闰年还是平年
  isLeapYear: function isLeapYear(year) {
    if (year === '' || !Number.isSafeInteger(+year)) {
      throw new Error('年份格式不正确');
    }

    year = +year;

    if (year < 1790) {
      throw new Error('年份不能低于1790');
    }

    return +year % 4 === 0 && +year % 100 !== 0 || +year % 400 === 0;
  },
  // 获取时间差的月份数
  getMonthCount: function getMonthCount(date1, date2) {
    var tmp1 = this.parseDate(date1);
    var tmp2 = this.parseDate(date2);
    var dur = (tmp2.getFullYear() - tmp1.getFullYear()) * 12 + (tmp2.getMonth() - tmp1.getMonth());
    return Math.abs(dur) + 1;
  },
  // 是否是今天(只判断年月日)
  isToday: function isToday(date) {
    return this.isOneDay(date, new Date());
  },
  // 两个日期是否同一天
  isOneDay: function isOneDay(date1, date2) {
    if (!date1 || !date2) {
      return false;
    }

    var tmp1 = this.parseDate(date1);
    var tmp2 = this.parseDate(date2);
    return tmp1.toDateString() === tmp2.toDateString();
  },
  // 两个日期是否同一个月
  isOneMonth: function isOneMonth(date1, date2) {
    if (!date1 || !date2) {
      return false;
    }

    var tmp1 = this.parseDate(date1);
    var tmp2 = this.parseDate(date2);
    return tmp1.getFullYear() === tmp2.getFullYear() && tmp1.getMonth() === tmp2.getMonth();
  },
  // 周几
  getDay: function getDay(date, opt) {
    var realDate = this.cloneDate(date);
    var array = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    if (opt && opt instanceof Array) {
      array = opt;
    }

    return array[realDate.getDay()];
  },
  // 标准化日期, 时间均为00:00:00
  parseDay: function parseDay(date) {
    var tmp = this.parseDate(date);
    return new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
  },
  // 标准化时间
  parseDate: function parseDate(date) {
    if (date.constructor === Date) {
      return date;
    }

    if (date.constructor === String) {
      if (+date) {
        return new Date(+date);
      }

      date = date.replace(/-/gi, '/');
    }

    return new Date(date);
  },
  // 克隆日期
  cloneDate: function cloneDate(date, type, during) {
    var tmp = new Date(this.parseDate(date));

    if (!type || !during) {
      return tmp;
    }

    switch (type) {
      case 'y':
        tmp.setFullYear(tmp.getFullYear() + during);
        break;

      case 'yyyy':
        tmp.setFullYear(during);
        break;

      case 'm':
        tmp.setMonth(tmp.getMonth() + during);
        break;

      case 'mm':
        tmp.setMonth(during);
        break;

      case 'd':
        tmp.setDate(tmp.getDate() + during);
        break;

      case 'dd':
        tmp.setDate(during);
        break;
    }

    return tmp;
  }
};

function renderDate(date) {
  return date.getDate();
}

function disableDate() {
  return false;
}

var CalendarMonthView = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$dateMonth = props.dateMonth,
      dateMonth = _props$dateMonth === void 0 ? new Date() : _props$dateMonth,
      onDateClick = props.onDateClick,
      _props$min = props.min,
      min = _props$min === void 0 ? new Date() : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? new Date() : _props$max,
      _props$dateRender = props.dateRender,
      dateRender = _props$dateRender === void 0 ? renderDate : _props$dateRender,
      _props$disabledDate = props.disabledDate,
      disabledDate = _props$disabledDate === void 0 ? disableDate : _props$disabledDate,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh' : _props$locale;
  var lastInRef = React.useRef();
  var nodeRef = React.useRef();
  var year = dateMonth.getFullYear();
  var month = dateMonth.getMonth();
  var monthKey = "".concat(year, "-").concat(month);
  var mountedRef = React.useRef(false);
  React.useLayoutEffect(function () {
    // auto anchor to value date / now
    var target = value[0] || new Date();
    var key = "".concat(target.getFullYear(), "-").concat(target.getMonth());

    if (key === monthKey) {
      nodeRef.current.scrollIntoView({
        behavior: !mountedRef.current ? 'auto' : 'smooth'
      });
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
    }
  }, [value, monthKey]);
  React.useImperativeHandle(ref, function () {
    return {
      anchor: function anchor() {
        if (nodeRef.current && nodeRef.current.scrollIntoView) {
          nodeRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
  });
  var title = (locale === null || locale === void 0 ? void 0 : locale.yearText) === '年' ? year + locale.yearText + locale.months[month] : "".concat(locale === null || locale === void 0 ? void 0 : locale.months[month], " ").concat(year); // 日期状态: 选中，区间

  var checkStatus = React.useCallback(function (date) {
    var disabled = date < utils.cloneDate(min, 'd', 0) || date > utils.cloneDate(max, 'd', 0);
    var res = {
      disabled: disabled || (disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date)),
      isSelected: value.some(function (item) {
        return utils.isOneDay(date, item);
      }),
      isRange: value.length > 1 && date > value[0] && date < value[value.length - 1],
      rangeStart: value.length > 1 && utils.isOneDay(date, value[0]),
      rangeEnd: value.length > 1 && utils.isOneDay(date, value[value.length - 1])
    };
    lastInRef.current = lastInRef.current || res.isSelected || res.isRange;
    return res;
  }, [disabledDate, max, min, value]);
  var renderDay = React.useCallback(function (day, year, month, firstDay) {
    var _clsx;

    var date = new Date(year, month, day);
    var isToday = new Date().getFullYear() === year && new Date().getMonth() === month && new Date().getDate() === day;
    var status = checkStatus(date);
    var txt = date && (dateRender === null || dateRender === void 0 ? void 0 : dateRender(date)) || '';
    return /*#__PURE__*/React__default['default'].createElement("li", {
      key: "".concat(year, "-").concat(month, "-").concat(day),
      className: clsx__default['default']("day", (_clsx = {
        'd6': (day + firstDay) % 7 === 0,
        'd7': (day + firstDay) % 7 === 1
      }, _defineProperty(_clsx, "day--disabled", status.disabled), _defineProperty(_clsx, "day--today", isToday), _defineProperty(_clsx, "day--selected", status.isSelected), _defineProperty(_clsx, "day--range", status.isRange), _defineProperty(_clsx, 'range-start', status.rangeStart), _defineProperty(_clsx, 'range-end', status.rangeEnd), _defineProperty(_clsx, "firstday-".concat(firstDay), day === 1 && firstDay), _clsx)),
      onClick: function onClick() {
        return !status.disabled && date && (onDateClick === null || onDateClick === void 0 ? void 0 : onDateClick(date));
      }
    }, txt && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "day__content"
    }, txt) || '');
  }, [checkStatus, dateRender, onDateClick]);

  var renderContent = function renderContent(year, month) {
    var data = utils.getCurrMonthInfo(year, month);
    var firstDay = data.firstDay,
        dayCount = data.dayCount;
    return Array.from({
      length: dayCount
    }).map(function (_item, i) {
      return renderDay(i + 1, year, month, firstDay);
    });
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "month",
    title: title,
    ref: nodeRef
  }, /*#__PURE__*/React__default['default'].createElement("ul", null, renderContent(year, month)));
});
CalendarMonthView.displayName = 'CalendarMonthView';

var zh = {
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yearText: '年'
};
var en = {
  weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yearText: ''
};

var locales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  zh: zh,
  en: en
});

var _excluded$Q = ["position", "className", "style", "children"];

function upperFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
/** 安全区 */


var SafeArea = function SafeArea(props) {
  var _objectSpread2$1;

  var _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      className = props.className,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$Q);

  var styles = _objectSpread2(_objectSpread2({
    display: 'block',
    width: '100%'
  }, style), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "padding".concat(upperFirstLetter(position)), "constant(safe-area-inset-".concat(position, ")")), _defineProperty(_objectSpread2$1, "padding".concat(upperFirstLetter(position)), "env(safe-area-inset-".concat(position, ")")), _objectSpread2$1));

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    className: clsx__default['default']('uc-safe-area', className),
    style: styles
  }), children);
};

SafeArea.displayName = 'UC-SafeArea';

var _excluded$R = ["range", "className", "locale", "dateRender", "disabledDate", "onChange", "value"];

var _templateObject$R;
/** refer : zarm calendar (https://zarm.gitee.io/)  */

//#region styled
var StyledWrap$4 = styled__default['default'].div(_templateObject$R || (_templateObject$R = _taggedTemplateLiteral(["\n  background-color: #fff;\n  user-select: none;\n\n  ul {\n    list-style-type: disc;\n\n    li {\n      display: inline-block;\n      width: 14.28571%;\n      text-align: center;\n      vertical-align: middle;\n    }\n  }\n\n  .head {\n    display: flex;\n    font-size: 14px;\n    color: #999;\n    margin: 0;\n    padding: 0;\n    list-style-type: disc;\n\n    .item {\n      height: 40px;\n      line-height: 40px;\n    }\n    box-shadow: ", ";\n  }\n\n  .body {\n    padding: 10px 0;\n    overflow: auto;\n    max-height: 50vh;\n\n    .month {\n      color: #343434;\n\n      &:before {\n        content: attr(title);\n        display: block;\n        margin: 15px auto;\n        font-size: 17px;\n        font-weight: 500;\n        padding-left: 15px;\n      }\n\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      .day {\n        margin: 10px 0;\n        position: relative;\n        font-size: 16px;\n        cursor: pointer;\n        white-space: nowrap;\n      }\n      .day__content {\n        width: 30px;\n        height: 30px;\n        background-color: transparent;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 auto;\n      }\n      .day.firstday-1 {\n        margin-left: 14.28571%;\n      }\n      .day.firstday-2 {\n        margin-left: 28.57142%;\n      }\n      .day.firstday-3 {\n        margin-left: 42.85713%;\n      }\n      .day.firstday-4 {\n        margin-left: 57.14284%;\n      }\n      .day.firstday-5 {\n        margin-left: 71.42855%;\n      }\n      .day.firstday-6 {\n        margin-left: 85.71426%;\n      }\n      /* .day--today .day__content {\n        background-color: ", ";\n        ", "\n      } */\n\n      .day--selected {\n        .day__content {\n          ", "\n          ", "\n          color: #fff;\n        }\n      }\n\n      .day--disabled {\n        cursor: auto;\n      }\n      .day--disabled .day__content {\n        color: #bcbcbc;\n      }\n\n      .day--range {\n        background-color: ", ";\n        ", "\n\n        .day__content {\n          background-color: transparent;\n        }\n      }\n\n      .day.range-start.range-end {\n        background-image: none;\n      }\n      .day.range-start:not(.range-end):not(.d6):not(:last-child) {\n        background-image: linear-gradient(\n          to right,\n          transparent 0,\n          transparent 50%,\n          ", " 50%\n        );\n      }\n      .day.range-end:not(.range-start):not(.d7):not(:first-child) {\n        background-image: linear-gradient(\n          to left,\n          transparent 0,\n          transparent 50%,\n          ", " 50%\n        );\n      }\n    }\n  }\n"])), boxShadow, function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}, getThemeColorCss('color'), getThemeColorCss('background-color'), getThemeColorCss('box-shadow', '0 0 4px 0'), function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}, getThemeColorCss('color'), function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}, function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}); //#endregion

/** 移动端日历  */

var Calendar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var range = props.range,
      className = props.className,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh' : _props$locale,
      dateRender = props.dateRender,
      disabledDate = props.disabledDate,
      onChange = props.onChange,
      _props$value = props.value,
      value = _props$value === void 0 ? new Date() : _props$value,
      rest = _objectWithoutProperties(props, _excluded$R);

  var max = props.max,
      min = props.min;

  var _useState = React.useState(function () {
    return (Array.isArray(value) ? value : [value || new Date()]).map(function (d) {
      return utils.parseDay(d);
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  min = min ? utils.parseDay(min) : new Date();
  max = max ? utils.parseDay(max) : utils.cloneDate(min, 'y', 1);
  var startMonth = utils.cloneDate(min, 'dd', 1);

  var handleDateClick = function handleDateClick(date) {
    if (range) {
      if (index === 0) {
        setVal([date]);
        setIndex(1);
      } else if (index === 1) {
        val[1] = date;
        val.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
        setVal(_toConsumableArray(val));
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
        setIndex(0);
      }
    } else {
      setVal([date]);
      onChange === null || onChange === void 0 ? void 0 : onChange(date);
    }
  };

  var renderMonth = function renderMonth(dateMonth) {
    var key = "".concat(dateMonth.getFullYear(), "-").concat(dateMonth.getMonth());
    return /*#__PURE__*/React__default['default'].createElement(CalendarMonthView, {
      key: key,
      min: min,
      max: max,
      value: val,
      dateMonth: dateMonth,
      dateRender: dateRender,
      disabledDate: disabledDate,
      onDateClick: handleDateClick,
      locale: locales[locale]
    });
  };

  var arr = Array.from({
    length: utils.getMonthCount(startMonth, max)
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$4, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-calendar', className)
  }), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "head"
  }, locales[locale].weeks.map(function (week) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      key: week,
      className: "item"
    }, week);
  })), /*#__PURE__*/React__default['default'].createElement(SafeArea, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "body"
  }, arr.map(function (_item, i) {
    return renderMonth(utils.cloneDate(startMonth, 'm', i));
  }))));
});
Calendar.displayName = 'UC-Calendar';

/* eslint-disable react-hooks/exhaustive-deps */
/**
 *  执行同步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateLayoutEffect = function useUpdateLayoutEffect(effect) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isMounted = React.useRef(false);
  React.useLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

var _excluded$S = ["className", "value", "onOk", "onChange", "minYear", "maxYear", "locale"];
var locales$1 = {
  zh: {
    year: '年',
    month: '月',
    day: '日'
  },
  en: {
    year: '',
    month: '',
    day: ''
  }
};

var getDays = function getDays(year, month) {
  var days = [];
  var c = utils.getDaysInMonth(year, month);

  for (var i = 1; i <= c; i++) {
    days.push(i);
  }

  return days;
};

var getData = function getData(minYear, maxYear) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'zh';
  var years = [];
  var monthes = [];
  var days = [];

  for (var i = minYear; i <= maxYear; i++) {
    years.push({
      label: i + locales$1[locale].year,
      value: i
    });
  }

  for (var j = 1; j <= 12; j++) {
    monthes.push({
      label: j + locales$1[locale].month,
      value: j
    });
  }

  for (var z = 1; z <= 30; z++) {
    days.push({
      label: z + locales$1[locale].day,
      value: z
    });
  }

  return [years, monthes, days];
}; //#endregion

/** 移动端日期选择 */


var DatePicker = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$value = props.value,
      value = _props$value === void 0 ? new Date() : _props$value,
      _onOk = props.onOk,
      _onChange = props.onChange,
      _props$minYear = props.minYear,
      minYear = _props$minYear === void 0 ? 1980 : _props$minYear,
      _props$maxYear = props.maxYear,
      maxYear = _props$maxYear === void 0 ? 2030 : _props$maxYear,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh' : _props$locale,
      rest = _objectWithoutProperties(props, _excluded$S);

  var _useState = React.useState(getData(minYear, maxYear, locale)),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  useUpdateLayoutEffect(function () {
    setList(getData(minYear, maxYear, locale));
  }, [minYear, maxYear, locale]);

  var _useState3 = React.useState(function () {
    var d = utils.parseDate(value || new Date());
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      val = _useState4[0],
      setVal = _useState4[1];

  return /*#__PURE__*/React__default['default'].createElement(Picker, _extends({}, rest, {
    data: list,
    onOk: function onOk(v) {
      _onOk === null || _onOk === void 0 ? void 0 : _onOk(new Date(v[0], v[1] - 1, v[2]));
    },
    value: val,
    onChange: function onChange(v) {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(new Date(v[0], v[1] - 1, v[2]));
    },
    onWheelChange: function onWheelChange(index, wheelIndex) {
      if (index >= list[wheelIndex].length) {
        // fix feb
        index = list[wheelIndex].length - 1;
      }

      var v = list[wheelIndex][index].value;
      val[wheelIndex] = v;

      if (wheelIndex === 1) {
        // month change
        var days = getDays(val[0], v);

        if (days.length !== list[2].length) {
          list[2] = days.map(function (v) {
            return {
              label: v + locales$1[locale].day,
              value: v
            };
          });

          if (val[2] > days.length) {
            // keep the days original , but when origin val > lastday of curent month , set to last day
            val[2] = list[2][list[2].length - 1].value;
          }

          setList(_toConsumableArray(list));
        }
      }

      setVal(_toConsumableArray(val));
    },
    ref: ref,
    className: clsx__default['default']('uc-datepicker', className)
  }));
});
DatePicker.displayName = 'UC-DatePicker';

/* eslint-disable */
// ref:https://github.com/davidshimjs/qrcodejs & refactor
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
  this.parsedData = []; // Added to support UTF-8 Characters

  for (var i = 0, l = this.data.length; i < l; i++) {
    var byteArray = [];
    var code = this.data.charCodeAt(i);

    if (code > 0x10000) {
      byteArray[0] = 0xf0 | (code & 0x1c0000) >>> 18;
      byteArray[1] = 0x80 | (code & 0x3f000) >>> 12;
      byteArray[2] = 0x80 | (code & 0xfc0) >>> 6;
      byteArray[3] = 0x80 | code & 0x3f;
    } else if (code > 0x800) {
      byteArray[0] = 0xe0 | (code & 0xf000) >>> 12;
      byteArray[1] = 0x80 | (code & 0xfc0) >>> 6;
      byteArray[2] = 0x80 | code & 0x3f;
    } else if (code > 0x80) {
      byteArray[0] = 0xc0 | (code & 0x7c0) >>> 6;
      byteArray[1] = 0x80 | code & 0x3f;
    } else {
      byteArray[0] = code;
    }

    this.parsedData.push(byteArray);
  }

  this.parsedData = Array.prototype.concat.apply([], this.parsedData);

  if (this.parsedData.length != this.data.length) {
    this.parsedData.unshift(191);
    this.parsedData.unshift(187);
    this.parsedData.unshift(239);
  }
}

QR8bitByte.prototype = {
  getLength: function getLength(buffer) {
    return this.parsedData.length;
  },
  write: function write(buffer) {
    for (var i = 0, l = this.parsedData.length; i < l; i++) {
      buffer.put(this.parsedData[i], 8);
    }
  }
};

function QRCodeModel(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = [];
}

QRCodeModel.prototype = {
  addData: function addData(data) {
    var newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = null;
  },
  isDark: function isDark(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + ',' + col);
    }

    return this.modules[row][col];
  },
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  make: function make() {
    this.makeImpl(false, this.getBestMaskPattern());
  },
  makeImpl: function makeImpl(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);

    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);

      for (var col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null;
      }
    }

    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);

    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }

    if (this.dataCache == null) {
      this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }

    this.mapData(this.dataCache, maskPattern);
  },
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;

        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  getBestMaskPattern: function getBestMaskPattern() {
    var minLostPoint = 0;
    var pattern = 0;

    for (var i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      var lostPoint = QRUtil.getLostPoint(this);

      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }

    return pattern;
  },
  createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
    var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
    var cs = 1;
    this.make();

    for (var row = 0; row < this.modules.length; row++) {
      var y = row * cs;

      for (var col = 0; col < this.modules[row].length; col++) {
        var x = col * cs;
        var dark = this.modules[row][col];

        if (dark) {
          qr_mc.beginFill(0, 100);
          qr_mc.moveTo(x, y);
          qr_mc.lineTo(x + cs, y);
          qr_mc.lineTo(x + cs, y + cs);
          qr_mc.lineTo(x, y + cs);
          qr_mc.endFill();
        }
      }
    }

    return qr_mc;
  },
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }

      this.modules[r][6] = r % 2 == 0;
    }

    for (var c = 8; c < this.moduleCount - 8; c++) {
      if (this.modules[6][c] != null) {
        continue;
      }

      this.modules[6][c] = c % 2 == 0;
    }
  },
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);

    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];

        if (this.modules[row][col] != null) {
          continue;
        }

        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    }

    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = this.errorCorrectLevel << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);

    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;

      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
    }

    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;

      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }

    this.modules[this.moduleCount - 8][8] = !test;
  },
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;

    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;

      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;

            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }

            var mask = QRUtil.getMask(maskPattern, row, col - c);

            if (mask) {
              dark = !dark;
            }

            this.modules[row][col - c] = dark;
            bitIndex--;

            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }

        row += inc;

        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
};
QRCodeModel.PAD0 = 0xec;
QRCodeModel.PAD1 = 0x11;

QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new QRBitBuffer();

  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  }

  var totalDataCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }

  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error('code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')');
  }

  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  }

  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  }

  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCodeModel.PAD0, 8);

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCodeModel.PAD1, 8);
  }

  return QRCodeModel.createBytes(buffer, rsBlocks);
};

QRCodeModel.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);

  for (var r = 0; r < rsBlocks.length; r++) {
    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);

    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    }

    offset += dcCount;
    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);

    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }

  var totalCodeCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }

  var data = new Array(totalCodeCount);
  var index = 0;

  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }

  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }

  return data;
};

var QRMode = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3
};
var QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
};
var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};
var QRUtil = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }

    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }

    return data << 12 | d;
  },
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;

    while (data != 0) {
      digit++;
      data >>>= 1;
    }

    return digit;
  },
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;

      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;

      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;

      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;

      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;

      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;

      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;

      default:
        throw new Error('bad maskPattern:' + maskPattern);
    }
  },
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);

    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }

    return a;
  },
  getLengthInBits: function getLengthInBits(mode, type) {
    if (1 <= type && type < 10) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;

        case QRMode.MODE_ALPHA_NUM:
          return 9;

        case QRMode.MODE_8BIT_BYTE:
          return 8;

        case QRMode.MODE_KANJI:
          return 8;

        default:
          throw new Error('mode:' + mode);
      }
    } else if (type < 27) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;

        case QRMode.MODE_ALPHA_NUM:
          return 11;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 10;

        default:
          throw new Error('mode:' + mode);
      }
    } else if (type < 41) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;

        case QRMode.MODE_ALPHA_NUM:
          return 13;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 12;

        default:
          throw new Error('mode:' + mode);
      }
    } else {
      throw new Error('type:' + type);
    }
  },
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0;

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);

        for (var r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    }

    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;

        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    }

    var darkCount = 0;

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
};
var QRMath = {
  glog: function glog(n) {
    if (n < 1) {
      throw new Error('glog(' + n + ')');
    }

    return QRMath.LOG_TABLE[n];
  },
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};

for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}

for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}

for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}

function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + '/' + shift);
  }

  var offset = 0;

  while (offset < num.length && num[offset] == 0) {
    offset++;
  }

  this.num = new Array(num.length - offset + shift);

  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}

QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);

    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }

    return new QRPolynomial(num, 0);
  },
  mod: function mod(e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }

    var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
    var num = new Array(this.getLength());

    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }

    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
    }

    return new QRPolynomial(num, 0).mod(e);
  }
};

function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

  if (rsBlock == undefined) {
    throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + errorCorrectLevel);
  }

  var length = rsBlock.length / 3;
  var list = [];

  for (var i = 0; i < length; i++) {
    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];

    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }

  return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

    default:
      return undefined;
  }
};

function QRBitBuffer() {
  this.buffer = [];
  this.length = 0;
}

QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  },
  getLengthInBits: function getLengthInBits() {
    return this.length;
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);

    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
};
var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];

function _isSupportCanvas() {
  return typeof CanvasRenderingContext2D != 'undefined';
} // android 2.x doesn't support Data-URI spec


function _getAndroid() {
  var android = false;
  var sAgent = navigator.userAgent;

  if (/android/i.test(sAgent)) {
    // android
    android = true;
    var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

    if (aMat && aMat[1]) {
      android = parseFloat(aMat[1]);
    }
  }

  return android;
} //#region  svgDrawer


function svgDrawer(el, htOption) {
  this._el = el;
  this._htOption = htOption;
}

svgDrawer.prototype.draw = function (oQRCode) {
  var _htOption = this._htOption;
  var _el = this._el;
  var nCount = oQRCode.getModuleCount();
  var nWidth = Math.floor(_htOption.width / nCount);
  var nHeight = Math.floor(_htOption.height / nCount);
  this.clear();

  function makeSVG(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);

    for (var k in attrs) {
      if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
    }

    return el;
  }

  var svg = makeSVG('svg', {
    viewBox: '0 0 ' + String(nCount) + ' ' + String(nCount),
    width: '100%',
    height: '100%',
    fill: _htOption.colorLight
  });
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');

  _el.appendChild(svg);

  svg.appendChild(makeSVG('rect', {
    fill: _htOption.colorLight,
    width: '100%',
    height: '100%'
  }));
  svg.appendChild(makeSVG('rect', {
    fill: _htOption.colorDark,
    width: '1',
    height: '1',
    id: 'template'
  }));

  for (var row = 0; row < nCount; row++) {
    for (var col = 0; col < nCount; col++) {
      if (oQRCode.isDark(row, col)) {
        var child = makeSVG('use', {
          x: String(col),
          y: String(row)
        });
        child.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#template');
        svg.appendChild(child);
      }
    }
  }
};

svgDrawer.prototype.clear = function () {
  while (this._el.hasChildNodes()) {
    this._el.removeChild(this._el.lastChild);
  }
}; //#endregion svgDrawer
//#region  DrawingSvg


function DrawingSvg(el, htOption) {
  this._el = el;
  this._htOption = htOption;
}
/**
 * Draw the QRCode
 *
 * @param {QRCode} oQRCode
 */


DrawingSvg.prototype.draw = function (oQRCode) {
  var _htOption = this._htOption;
  var _el = this._el;
  var nCount = oQRCode.getModuleCount();
  var nWidth = Math.floor(_htOption.width / nCount);
  var nHeight = Math.floor(_htOption.height / nCount);
  var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

  for (var row = 0; row < nCount; row++) {
    aHTML.push('<tr>');

    for (var col = 0; col < nCount; col++) {
      aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
    }

    aHTML.push('</tr>');
  }

  aHTML.push('</table>');
  _el.innerHTML = aHTML.join(''); // Fix the margin values as real size.

  var elTable = _el.childNodes[0];
  var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
  var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

  if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
    elTable.style.margin = nTopMarginTable + 'px ' + nLeftMarginTable + 'px';
  }
};
/**
 * Clear the QRCode
 */


DrawingSvg.prototype.clear = function () {
  this._el.innerHTML = '';
}; //#endregion DrawingSvg
//#region  DrawingCanvas
// Drawing in Canvas


function _onMakeImage() {
  this._elImage.src = this._elCanvas.toDataURL('image/png');
  this._elImage.style.display = 'block';
  this._elCanvas.style.display = 'none';
}

var _android = _getAndroid(); // Android 2.1 bug workaround
// http://code.google.com/p/android/issues/detail?id=5141


if (_android && _android <= 2.1) {
  var factor = 1 / window.devicePixelRatio;
  var drawImage = CanvasRenderingContext2D.prototype.drawImage;

  CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
    if ('nodeName' in image && /img/i.test(image.nodeName)) {
      for (var i = arguments.length - 1; i >= 1; i--) {
        arguments[i] = arguments[i] * factor;
      }
    } else if (typeof dw == 'undefined') {
      arguments[1] *= factor;
      arguments[2] *= factor;
      arguments[3] *= factor;
      arguments[4] *= factor;
    }

    drawImage.apply(this, arguments);
  };
}
/**
 * Check whether the user's browser supports Data URI or not
 *
 * @private
 * @param {Function} fSuccess Occurs if it supports Data URI
 * @param {Function} fFail Occurs if it doesn't support Data URI
 */


function _safeSetDataURI(fSuccess, fFail) {
  var self = this;
  self._fFail = fFail;
  self._fSuccess = fSuccess; // Check it just once

  if (self._bSupportDataURI === null) {
    var el = document.createElement('img');

    var fOnError = function fOnError() {
      self._bSupportDataURI = false;

      if (self._fFail) {
        self._fFail.call(self);
      }
    };

    var fOnSuccess = function fOnSuccess() {
      self._bSupportDataURI = true;

      if (self._fSuccess) {
        self._fSuccess.call(self);
      }
    };

    el.onabort = fOnError;
    el.onerror = fOnError;
    el.onload = fOnSuccess;
    el.src = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='; // the Image contains 1px data.

    return;
  } else if (self._bSupportDataURI === true && self._fSuccess) {
    self._fSuccess.call(self);
  } else if (self._bSupportDataURI === false && self._fFail) {
    self._fFail.call(self);
  }
}
/**
 * Drawing QRCode by using canvas
 *
 * @constructor
 * @param {HTMLElement} el
 * @param {Object} htOption QRCode Options
 */


function DrawingCanvas(el, htOption) {
  this._bIsPainted = false;
  this._android = _getAndroid();
  this._htOption = htOption;
  this._elCanvas = document.createElement('canvas');
  this._elCanvas.width = htOption.width;
  this._elCanvas.height = htOption.height;
  el.appendChild(this._elCanvas);
  this._el = el;
  this._oContext = this._elCanvas.getContext('2d');
  this._bIsPainted = false;
  this._elImage = document.createElement('img');
  this._elImage.alt = 'Scan me!';
  this._elImage.style.display = 'none';

  this._el.appendChild(this._elImage);

  this._bSupportDataURI = null;
}
/**
 * Draw the QRCode
 *
 * @param {QRCode} oQRCode
 */


DrawingCanvas.prototype.draw = function (oQRCode) {
  var _elImage = this._elImage;
  var _oContext = this._oContext;
  var _htOption = this._htOption;
  var nCount = oQRCode.getModuleCount();
  var nWidth = _htOption.width / nCount;
  var nHeight = _htOption.height / nCount;
  var nRoundedWidth = Math.round(nWidth);
  var nRoundedHeight = Math.round(nHeight);
  _elImage.style.display = 'none';
  this.clear();

  for (var row = 0; row < nCount; row++) {
    for (var col = 0; col < nCount; col++) {
      var bIsDark = oQRCode.isDark(row, col);
      var nLeft = col * nWidth;
      var nTop = row * nHeight;
      _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
      _oContext.lineWidth = 1;
      _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;

      _oContext.fillRect(nLeft, nTop, nWidth, nHeight); // 안티 앨리어싱 방지 처리


      _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);

      _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
    }
  }

  this._bIsPainted = true;
};
/**
 * Make the image from Canvas if the browser supports Data URI.
 */


DrawingCanvas.prototype.makeImage = function () {
  if (this._bIsPainted) {
    _safeSetDataURI.call(this, _onMakeImage);
  }
};
/**
 * Return whether the QRCode is painted or not
 *
 * @return {Boolean}
 */


DrawingCanvas.prototype.isPainted = function () {
  return this._bIsPainted;
};
/**
 * Clear the QRCode
 */


DrawingCanvas.prototype.clear = function () {
  this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);

  this._bIsPainted = false;
};
/**
 * @private
 * @param {Number} nNumber
 */


DrawingCanvas.prototype.round = function (nNumber) {
  if (!nNumber) {
    return nNumber;
  }

  return Math.floor(nNumber * 1000) / 1000;
}; //#endregion DrawingCanvas


var useSVG = document.documentElement.tagName.toLowerCase() === 'svg'; // Drawing in DOM by using Table tag

var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? DrawingSvg : DrawingCanvas;
/**
 * Get the type by string length
 *
 * @private
 * @param {String} sText
 * @param {Number} nCorrectLevel
 * @return {Number} type
 */

function _getTypeNumber(sText, nCorrectLevel) {
  var nType = 1;

  var length = _getUTF8Length(sText);

  for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
    var nLimit = 0;

    switch (nCorrectLevel) {
      case QRErrorCorrectLevel.L:
        nLimit = QRCodeLimitLength[i][0];
        break;

      case QRErrorCorrectLevel.M:
        nLimit = QRCodeLimitLength[i][1];
        break;

      case QRErrorCorrectLevel.Q:
        nLimit = QRCodeLimitLength[i][2];
        break;

      case QRErrorCorrectLevel.H:
        nLimit = QRCodeLimitLength[i][3];
        break;
    }

    if (length <= nLimit) {
      break;
    } else {
      nType++;
    }
  }

  if (nType > QRCodeLimitLength.length) {
    throw new Error('Too long data');
  }

  return nType;
}

function _getUTF8Length(sText) {
  var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
  return replacedText.length + (replacedText.length != sText ? 3 : 0);
}
/**
 * @class QRCode
 * @constructor
 * @example
 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
 *
 * @example
 * var oQRCode = new QRCode("test", {
 *    text : "http://naver.com",
 *    width : 128,
 *    height : 128
 * });
 *
 * oQRCode.clear(); // Clear the QRCode.
 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
 *
 * @param {HTMLElement|String} el target element or 'id' attribute of element.
 * @param {Object|String} vOption
 * @param {String} vOption.text QRCode link data
 * @param {Number} [vOption.width=256]
 * @param {Number} [vOption.height=256]
 * @param {String} [vOption.colorDark="#000000"]
 * @param {String} [vOption.colorLight="#ffffff"]
 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
 */


function QRCode(el, vOption) {
  this._htOption = {
    width: 256,
    height: 256,
    typeNumber: 4,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRErrorCorrectLevel.H
  };

  if (typeof vOption === 'string') {
    vOption = {
      text: vOption
    };
  } // Overwrites options


  if (vOption) {
    for (var i in vOption) {
      this._htOption[i] = vOption[i];
    }
  }

  if (typeof el == 'string') {
    el = document.getElementById(el);
  }

  if (this._htOption.useSVG) {
    Drawing = svgDrawer;
  }

  this._android = _getAndroid();
  this._el = el;
  this._oQRCode = null;
  this._oDrawing = new Drawing(this._el, this._htOption);

  if (this._htOption.text) {
    this.makeCode(this._htOption.text);
  }
}
/**
 * Make the QRCode
 *
 * @param {String} sText link data
 */


QRCode.prototype.makeCode = function (sText) {
  this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);

  this._oQRCode.addData(sText);

  this._oQRCode.make();

  this._el.title = sText;

  this._oDrawing.draw(this._oQRCode);

  this.makeImage();
};
/**
 * Make the Image from Canvas element
 * - It occurs automatically
 * - Android below 3 doesn't support Data-URI spec.
 *
 * @private
 */


QRCode.prototype.makeImage = function () {
  if (typeof this._oDrawing.makeImage == 'function' && (!this._android || this._android >= 3)) {
    this._oDrawing.makeImage();
  }
};
/**
 * Clear the QRCode
 */


QRCode.prototype.clear = function () {
  this._oDrawing.clear();
};
/**
 * @name QRCode.CorrectLevel
 */


QRCode.CorrectLevel = QRErrorCorrectLevel;

var _excluded$T = ["text", "colorDark", "colorLight", "size", "className", "style"];

/** 二维码 */
var QRCode$1 = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var text = props.text,
      _props$colorDark = props.colorDark,
      colorDark = _props$colorDark === void 0 ? '#000' : _props$colorDark,
      _props$colorLight = props.colorLight,
      colorLight = _props$colorLight === void 0 ? '#fff' : _props$colorLight,
      _props$size = props.size,
      size = _props$size === void 0 ? 128 : _props$size,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$T);

  var domRef = React.useRef();
  var qrRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return domRef.current;
  });
  React.useLayoutEffect(function () {
    qrRef.current = new QRCode(domRef.current, {
      text: text,
      width: size,
      height: size,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: QRCode.CorrectLevel.H
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useUpdateLayoutEffect(function () {
    if (qrRef.current) {
      qrRef.current.makeCode(text);
    }

    return function () {
      return qrRef.current.clear();
    };
  }, [text]);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    ref: domRef,
    className: clsx__default['default']('uc-qrcode', className),
    style: _objectSpread2({
      width: size,
      height: size
    }, style)
  }));
});
QRCode$1.displayName = 'UC-QRCode';

var _excluded$U = ["children", "onChange", "className", "animated", "keys"];

var _templateObject$S;

/**
 *  子项，放在Collapse里面
 *
 * @param {*}
 * @return {*}
 */
var Item = function Item(props) {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, props.children);
};

var StyledWrapper$2 = styled__default['default'].div(_templateObject$S || (_templateObject$S = _taggedTemplateLiteral(["\n  -webkit-tap-highlight-color: transparent;\n\n  .item {\n    overflow: hidden;\n\n    &.disabled {\n      opacity: 0.4;\n    }\n\n    .header {\n      background: #fff;\n      height: 50px;\n      color: #333;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      cursor: pointer;\n    }\n\n    .content {\n      color: #999;\n    }\n  }\n"])));
/**
 *  content renderer
 *
 * @param {*} props
 * @return {*}
 */

var ItemContent = function ItemContent(props) {
  var visible = props.visible,
      children = props.children;
  var innerRef = React.useRef(null);

  var _useSpring = web.useSpring(function () {
    return {
      from: {
        height: 0,
        opacity: 0
      },
      config: {
        duration: animationNormal
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      api = _useSpring2[1];

  useMount(function () {
    if (!visible) return;
    var inner = innerRef.current;
    if (!inner) return;
    api.start({
      height: inner.offsetHeight,
      opacity: 1,
      immediate: true
    });
  });
  useUpdateLayoutEffect(function () {
    var inner = innerRef.current;
    if (!inner) return;

    if (visible) {
      api.start({
        height: inner.offsetHeight,
        opacity: 1
      });
    } else {
      api.start({
        from: {
          height: inner.offsetHeight,
          opacity: 1
        },
        to: {
          height: 0,
          opacity: 0
        }
      });
    }
  }, [visible]);
  return /*#__PURE__*/React__default['default'].createElement(web.animated.div, {
    className: "content",
    style: styles
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: innerRef
  }, children));
};
/**
 * 折叠面板
 */


var Collapse = function Collapse(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      className = _ref.className,
      animated = _ref.animated,
      _ref$keys = _ref.keys,
      keys = _ref$keys === void 0 ? '' : _ref$keys,
      rest = _objectWithoutProperties(_ref, _excluded$U);

  var count = React__default['default'].Children.count(children); // 手风琴模式

  var isSingleMode = !Array.isArray(keys); // inner keys

  var _useState = React.useState(keys),
      _useState2 = _slicedToArray(_useState, 2),
      _keys = _useState2[0],
      _setKeys = _useState2[1];

  useUpdateEffect(function () {
    _setKeys(keys);
  }, [keys]);

  if (count === 0) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$2, _extends({}, rest, {
    className: clsx__default['default']('uc-collapse', className)
  }), React__default['default'].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      var key = child.key;
      key = key || index;
      var _ref2 = child.props,
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? '' : _ref2$title,
          _disabled = _ref2.disabled,
          _ref2$arrow = _ref2.arrow,
          arrow = _ref2$arrow === void 0 ? true : _ref2$arrow,
          _children = _ref2.children;

      var _active = isSingleMode ? _keys === key : _keys.indexOf(key) > -1;

      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: key,
        className: clsx__default['default']('item', {
          active: _active,
          disabled: _disabled
        }),
        onClick: function onClick() {
          if (!_disabled) {
            var _keys2;

            if (_active) {
              if (isSingleMode) {
                _keys2 = '';
              } else {
                var idx = _keys.indexOf(key);

                _keys.splice(idx, 1);

                _keys2 = _toConsumableArray(_keys);
              }
            } else {
              if (isSingleMode) {
                _keys2 = key;
              } else {
                _keys2 = [].concat(_toConsumableArray(_keys), [key]);
              }
            }

            _setKeys(_keys2);

            onChange === null || onChange === void 0 ? void 0 : onChange(_keys2);
          }
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx__default['default']('header', {
          disabled: _disabled
        })
      }, /*#__PURE__*/React__default['default'].createElement("span", null, typeof title === 'function' ? title(_active, _disabled) : title), /*#__PURE__*/React__default['default'].createElement("span", null, arrow && /*#__PURE__*/React__default['default'].createElement(IconArrow, {
        direction: _active ? 'top' : 'down'
      }))), animated ? /*#__PURE__*/React__default['default'].createElement(ItemContent, {
        visible: _active
      }, _children) : _active && /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx__default['default']('content')
      }, _children));
    }
  }));
};

Collapse.displayName = 'UC-Collapse';
var Collapse$1 = attachPropertiesToComponent(Collapse, {
  Item: Item
});

var _excluded$V = ["trackColor", "fillColor", "height", "percent", "className", "style"];

/** 进度条 */
var ProgressBar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$trackColor = props.trackColor,
      trackColor = _props$trackColor === void 0 ? '#e5e5e5' : _props$trackColor,
      fillColor = props.fillColor,
      _props$height = props.height,
      height = _props$height === void 0 ? 4 : _props$height,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$V);

  var theme = styled.useTheme() || {};
  var color = theme.color || primary;
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-progress-bar', className),
    style: _objectSpread2({
      height: height,
      backgroundColor: trackColor,
      overflow: 'hidden'
    }, style)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']("path"),
    style: {
      height: '100%',
      width: "".concat(percent, "%"),
      background: fillColor || color,
      transition: "width ".concat(animationSlow, "ms ease-in-out")
    }
  }));
});
ProgressBar.displayName = 'UC-ProgressBar';

var _excluded$W = ["children"];

var _templateObject$T;
var StyledWrap$5 = styled__default['default'].div(_templateObject$T || (_templateObject$T = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  .content {\n    flex: 0 1 auto;\n  }\n"])));
/** 自动居中 */

var AutoCenter = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$W);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$5, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-auto-center')
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content"
  }, children));
});
AutoCenter.displayName = 'UC-AutoCenter';

var _excluded$X = ["number", "delay", "className"];

/** 滚动数字 */
var RollingNumber = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var number = props.number,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 200 : _props$delay,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$X);

  var spring = web.useSpring({
    from: {
      number: 0
    },
    number: number,
    delay: delay,
    config: web.config.molasses
  });
  return /*#__PURE__*/React__default['default'].createElement(web.animated.span, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-rolling-number', className)
  }), spring.number.to(function (n) {
    return ~~n;
  }));
});
RollingNumber.displayName = 'UC-RollingNumber';

var _excluded$Y = ["className", "color", "onClick", "duration", "startScale", "children"];

var _templateObject$U;
var StyledWrap$6 = styled__default['default'].div(_templateObject$U || (_templateObject$U = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  .ripple-el {\n    position: absolute;\n    z-index: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 50%;\n  }\n"])));
/** 波纹效果,给子元素添加点击波纹效果 */

var Ripple = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _triggerProps;

  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? '#ccc' : _props$color,
      onClick = props.onClick,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 300 : _props$duration,
      _props$startScale = props.startScale,
      startScale = _props$startScale === void 0 ? 0.2 : _props$startScale,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$Y);

  var elRef = React.useRef(null);
  var isRunningRef = React.useRef(false);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });

  var _useSpring = web.useSpring(function () {
    return {
      from: {
        scale: 1,
        opacity: 0,
        width: '',
        height: '',
        top: '',
        left: ''
      },
      config: {
        duration: duration,
        easing: web.easings.easeInOutQuart
      },
      onStart: function onStart() {
        isRunningRef.current = true;
      },
      onRest: function onRest() {
        isRunningRef.current = false;
        api.start({
          width: '',
          height: '',
          top: '',
          left: '',
          immediate: true
        });
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      api = _useSpring2[1];

  var start = React__default['default'].useCallback(function (event) {
    if (isRunningRef.current) {
      return;
    }

    var element = elRef.current;
    var rect = element.getBoundingClientRect();

    var _ref = event.touches ? event.touches[0] : event,
        clientX = _ref.clientX,
        clientY = _ref.clientY;

    var rippleX = Math.round(clientX - rect.left);
    var rippleY = Math.round(clientY - rect.top);
    var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
    var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
    var rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    api.start({
      width: rippleSize + 'px',
      height: rippleSize + 'px',
      top: -(rippleSize / 2) + rippleY + 'px',
      left: -(rippleSize / 2) + rippleX + 'px',
      immediate: true,
      scale: startScale
    });
    api.start({
      scale: 1
    });
  }, [api, startScale]);
  var triggerProps = (_triggerProps = {}, _defineProperty(_triggerProps, isTouch ? 'onTouchStart' : 'onMouseDown', function (e) {
    start(e);

    if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
      var _children$props$onCli, _children$props;

      (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props, e);
    }
  }), _defineProperty(_triggerProps, "onClick", onClick), _triggerProps);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$6, _extends({}, rest, triggerProps, {
    ref: elRef,
    className: clsx__default['default']('uc-ripple', className)
  }), children, /*#__PURE__*/React__default['default'].createElement(web.animated.div, {
    className: "ripple-el",
    style: _objectSpread2(_objectSpread2({}, styles), {}, {
      opacity: styles.scale.to([0, 0.4, 0.9, 1], [0.1, 0.2, 0.3, 0]),
      backgroundColor: color
    })
  }));
});
Ripple.displayName = 'UC-Ripple';

var _excluded$Z = ["pullingText", "canReleaseText", "refreshingText", "completeText", "completeDelay", "useWindowScroll", "onRefresh", "headHeight", "threshold", "className", "renderText", "children", "style"];

var _templateObject$V;
var StyledWrap$7 = styled__default['default'](web.animated.div)(_templateObject$V || (_templateObject$V = _taggedTemplateLiteral(["\n  color: #999;\n  .head {\n    overflow: hidden;\n    position: relative;\n    .status-text {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"])));

/** 下拉刷新 */
var PullToRefresh = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$pullingText = props.pullingText,
      pullingText = _props$pullingText === void 0 ? '下拉刷新' : _props$pullingText,
      _props$canReleaseText = props.canReleaseText,
      canReleaseText = _props$canReleaseText === void 0 ? '释放立即刷新' : _props$canReleaseText,
      _props$refreshingText = props.refreshingText,
      refreshingText = _props$refreshingText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Spin, null), "\u52A0\u8F7D\u4E2D...") : _props$refreshingText,
      _props$completeText = props.completeText,
      completeText = _props$completeText === void 0 ? '刷新成功' : _props$completeText,
      _props$completeDelay = props.completeDelay,
      completeDelay = _props$completeDelay === void 0 ? 500 : _props$completeDelay,
      useWindowScroll = props.useWindowScroll,
      onRefresh = props.onRefresh,
      _props$headHeight = props.headHeight,
      headHeight = _props$headHeight === void 0 ? 40 : _props$headHeight,
      _props$threshold = props.threshold,
      threshold = _props$threshold === void 0 ? 60 : _props$threshold,
      className = props.className,
      renderText = props.renderText,
      children = props.children,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$Z);

  var _useState = React.useState('init'),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var statusRef = useCallbackRef(status);
  var dRef = React.useRef(0);

  var _useSpring = web.useSpring(function () {
    return {
      from: {
        height: 0
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springStyles = _useSpring2[0],
      api = _useSpring2[1];

  var wrapRef = React.useRef(null); // could be wrapper / children El instance

  var isPullingRef = React.useRef(false);
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  });

  function doRefresh() {
    return _doRefresh.apply(this, arguments);
  }

  function _doRefresh() {
    _doRefresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              api.start({
                height: headHeight
              });
              setStatus('refreshing');
              _context4.prev = 2;
              _context4.next = 5;
              return onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();

            case 5:
              setStatus('complete');
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
              api.start({
                to: function () {
                  var _to = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(next) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return next({
                              height: 0,
                              onRest: function onRest() {
                                return setStatus('init');
                              }
                            });

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  function to(_x) {
                    return _to.apply(this, arguments);
                  }

                  return to;
                }()
              });
              throw _context4.t0;

            case 12:
              if (!(completeDelay > 0)) {
                _context4.next = 15;
                break;
              }

              _context4.next = 15;
              return sleep(completeDelay);

            case 15:
              api.start({
                to: function () {
                  var _to2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(next) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return next({
                              height: 0,
                              onRest: function onRest() {
                                return setStatus('init');
                              }
                            });

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  function to(_x2) {
                    return _to2.apply(this, arguments);
                  }

                  return to;
                }()
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 8]]);
    }));
    return _doRefresh.apply(this, arguments);
  }

  var renderStatusText = function renderStatusText() {
    if (renderText) {
      return renderText(status);
    }

    if (status === 'init') return null;
    if (status === 'pulling') return pullingText;
    if (status === 'canRelease') return canReleaseText;
    if (status === 'refreshing') return refreshingText;
    if (status === 'complete') return completeText;
  };

  var touchEnd = React.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dRef.current = 0;

            if (isPullingRef.current) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if (!(status === 'refreshing' || status === 'complete')) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            if (!(status === 'canRelease')) {
              _context.next = 13;
              break;
            }

            _context.prev = 6;
            _context.next = 9;
            return doRefresh();

          case 9:
            _context.prev = 9;
            return _context.finish(9);

          case 11:
            _context.next = 14;
            break;

          case 13:
            api.start({
              height: 0
            });

          case 14:
            isPullingRef.current = false; // eslint-disable-next-line react-hooks/exhaustive-deps

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6,, 9, 11]]);
  })), [api, status]);
  React.useLayoutEffect(function () {
    var y = 0;
    var el = wrapRef.current;

    var _touchStart = function _touchStart(e) {
      return y = e.touches[0].pageY;
    };

    var _touchEnd = function _touchEnd() {
      y = 0;
      touchEnd();
    };

    var _touchMove = function _touchMove(e) {
      var scrollTop = getScrollTop(useWindowScroll ? window : el);
      var y1 = e.touches[0].pageY;

      if (y1 - y > 0 && scrollTop === 0 && e.cancelable) {
        e.preventDefault();
        isPullingRef.current = true;
        setStatus('pulling');
      }
    };

    var options = {
      passive: false
    };

    if (el) {
      el.addEventListener('touchstart', function (e) {
        y = e.touches[0].pageY;
      });
      el.addEventListener('touchmove', _touchMove, options);
      el.addEventListener('touchend', _touchEnd);
    }

    return function () {
      if (el) {
        el.removeEventListener('touchstart', _touchStart);
        el.removeEventListener('touchmove', _touchMove, options);
        el.removeEventListener('touchend', _touchEnd);
      }
    };
  }, [useWindowScroll, touchEnd]);
  var statusText = /*#__PURE__*/React__default['default'].createElement(web.animated.div, {
    style: springStyles,
    className: "head"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "status-text",
    style: {
      height: headHeight
    }
  }, renderStatusText()));

  if (children && ! /*#__PURE__*/React__default['default'].isValidElement(children)) {
    throw Error('children must be a valid ReactElement');
  }

  React.useLayoutEffect(function () {
    var el = wrapRef.current;
    var fg = new Touch__default['default'](el, {
      onPressMove: function onPressMove(e) {
        if (!isPullingRef.current || statusRef.current === 'refreshing' || statusRef.current === 'complete') return;
        dRef.current = Math.min(threshold + 30, dRef.current + e.deltaY);
        api.start({
          height: dRef.current
        });
        setStatus(dRef.current > threshold ? 'canRelease' : 'pulling');
      }
    });
    return function () {
      fg === null || fg === void 0 ? void 0 : fg.destroy();
    };
  }, [api, threshold, statusRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$7, _extends({
    ref: wrapRef
  }, rest, {
    className: clsx__default['default']('uc-pull-to-refresh', className, {
      'use-dom-scroll': !useWindowScroll,
      'use-window-scroll': useWindowScroll
    }),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      touchAction: 'pan-y'
    })
  }), statusText, /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: wrapRef
  }) : children);
});
PullToRefresh.displayName = 'UC-PullToRefresh';

var _excluded$_ = ["currentPage", "pageCount", "visiblePageCount", "firstText", "lastText", "showFirstLastText", "showIfOnePage", "onPageChange", "className"];

var _templateObject$W;

/**
 * get pages arr
 *
 * @param {number} currentPage
 * @param {number} pageCount
 * @param {number} visiblePageCount
 * @return {*}  {Array<number>}
 */
function getPages(currentPage, pageCount, visiblePageCount) {
  var low, high, v;
  var pages = [];

  if (pageCount === 0) {
    return pages;
  }

  if (currentPage > pageCount) {
    currentPage = 1;
  }

  if (pageCount <= visiblePageCount) {
    low = 1;
    high = pageCount;
  } else {
    v = Math.ceil(visiblePageCount / 2);
    low = Math.max(currentPage - v, 1);
    high = Math.min(low + visiblePageCount - 1, pageCount);

    if (pageCount - high < v) {
      low = high - visiblePageCount + 1;
    }
  }

  for (; low <= high; low++) {
    pages.push(low);
  }

  return pages;
}

var StyledWrap$8 = styled__default['default'].div(_templateObject$W || (_templateObject$W = _taggedTemplateLiteral(["\n  font-size: 14px;\n  .uc-button {\n    width: 32px;\n    padding: 0;\n    transition: none;\n  }\n\n  &.no-page {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n"])));
/** 分页 */

var Pagination = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$currentPage = props.currentPage,
      currentPage = _props$currentPage === void 0 ? 1 : _props$currentPage,
      pageCount = props.pageCount,
      _props$visiblePageCou = props.visiblePageCount,
      visiblePageCount = _props$visiblePageCou === void 0 ? 10 : _props$visiblePageCou,
      _props$firstText = props.firstText,
      firstText = _props$firstText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Button, {
    as: "a"
  }, "\u9996\u9875") : _props$firstText,
      _props$lastText = props.lastText,
      lastText = _props$lastText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Button, {
    as: "a"
  }, "\u672B\u9875") : _props$lastText,
      showFirstLastText = props.showFirstLastText,
      showIfOnePage = props.showIfOnePage,
      onPageChange = props.onPageChange,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$_);

  var domRef = React.useRef();

  var _useState = React.useState(currentPage),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = React.useState(function () {
    return getPages(page, pageCount, visiblePageCount);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pages = _useState4[0],
      setPages = _useState4[1];

  useUpdateEffect(function () {
    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(page);
  }, [page]); // outside

  useUpdateEffect(function () {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [currentPage]);
  useUpdateEffect(function () {
    setPages(getPages(page, pageCount, visiblePageCount));
  }, [visiblePageCount, page, pageCount]);
  React.useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var renderPage = function renderPage() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, showFirstLastText && /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "first-page",
      onClick: function onClick() {
        return setPage(1);
      },
      as: "a"
    }, firstText), /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "prev-page",
      disabled: page === 1,
      onClick: function onClick() {
        return setPage(function (p) {
          return Math.max(1, p - 1);
        });
      }
    }, /*#__PURE__*/React__default['default'].createElement(IconArrow, {
      direction: "left"
    })), pages.map(function (p) {
      return /*#__PURE__*/React__default['default'].createElement(Button, {
        outlined: p === page,
        className: clsx__default['default']('page-item', {
          active: p === page
        }),
        key: p,
        onClick: function onClick() {
          return setPage(p);
        }
      }, p);
    }), /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "next-page",
      disabled: page === pageCount,
      onClick: function onClick() {
        return setPage(function (p) {
          return Math.min(pageCount, p + 1);
        });
      }
    }, /*#__PURE__*/React__default['default'].createElement(IconArrow, {
      direction: "right"
    })), showFirstLastText && /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "last-page",
      onClick: function onClick() {
        return setPage(pageCount);
      },
      as: "a"
    }, lastText));
  };

  return (showIfOnePage || pageCount > 1) && /*#__PURE__*/React__default['default'].createElement(StyledWrap$8, _extends({}, rest, {
    ref: domRef,
    className: clsx__default['default']('uc-pagination', className, {
      'no-page': visiblePageCount === 0
    })
  }), visiblePageCount === 0 && renderPage(), visiblePageCount > 0 && /*#__PURE__*/React__default['default'].createElement(Space, null, renderPage()));
});
Pagination.displayName = 'UC-Pagination';

var _excluded$$ = ["image", "description", "className"];

var _templateObject$X;
var StyledWrap$9 = styled__default['default'].div(_templateObject$X || (_templateObject$X = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n\n  .img {\n    width: 64px;\n  }\n  .desc {\n    color: #ccc;\n    font-size: 14px;\n  }\n"])));
var img = /*#__PURE__*/React__default['default'].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 41"
}, /*#__PURE__*/React__default['default'].createElement("g", {
  transform: "translate(0 1)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default['default'].createElement("ellipse", {
  fill: "#f5f5f5",
  cx: "32",
  cy: "33",
  rx: "32",
  ry: "7"
}), /*#__PURE__*/React__default['default'].createElement("g", {
  stroke: "#d9d9d9"
}, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
  fill: "#fafafa"
}))));
/** 空状态 */

var Empty = function Empty(props) {
  var _props$image = props.image,
      image = _props$image === void 0 ? img : _props$image,
      _props$description = props.description,
      description = _props$description === void 0 ? '暂无数据' : _props$description,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$$);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$9, _extends({}, rest, {
    className: clsx__default['default']('uc-empty', className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "img"
  }, image), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "desc"
  }, description));
};

Empty.displayName = 'UC-Empty';

var _excluded$10 = ["items", "index", "defaultIndex", "onChange", "className"];

var _templateObject$Y;
var StyledWrapper$3 = styled__default['default'].div(_templateObject$Y || (_templateObject$Y = _taggedTemplateLiteral(["\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 14px;\n  background-color: #fff;\n  user-select: none;\n  display: inline-flex;\n  flex-direction: column;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .uc-sidebar-item {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 14px 12px;\n    background-color: #f5f5f5;\n\n    &.active {\n      ", "\n      background-color: #fff;\n      border-radius: 0;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n    &.prev {\n      border-radius: 0 0 8px 0;\n    }\n    &.next {\n      border-radius: 0 8px 0 0;\n    }\n  }\n"])), getThemeColorCss('color'), disabledText); //#endregion

/**
 * 侧边导航
 */

var SideBar = function SideBar(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      index = _ref.index,
      _ref$defaultIndex = _ref.defaultIndex,
      defaultIndex = _ref$defaultIndex === void 0 ? 0 : _ref$defaultIndex,
      onChange = _ref.onChange,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$10);

  var _useState = React.useState(typeof index === 'undefined' ? defaultIndex : index),
      _useState2 = _slicedToArray(_useState, 2),
      _v = _useState2[0],
      _setV = _useState2[1];

  var wrapElRef = React.useRef();
  useUpdateEffect(function () {
    if (index !== _v) {
      _setV(index);
    }
  }, [index]);
  useMount(function () {
    var wrapEl = wrapElRef.current;

    if (wrapEl && wrapEl.scrollHeight > wrapEl.offsetHeight) {
      var itemEl = wrapEl.querySelector('.uc-sidebar-item'); // scroll

      wrapEl.scroll({
        top: (_v - 1) * itemEl.offsetHeight
      });
    }
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$3, _extends({}, rest, {
    ref: wrapElRef,
    className: clsx__default['default']('uc-sidebar', className)
  }), items.map(function (item, idx) {
    var title = item.title,
        disabled = item.disabled;
    var prev = _v - 1 === idx;
    var next = _v + 1 === idx;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: item.key || idx,
      className: clsx__default['default']('uc-sidebar-item', {
        active: idx === _v,
        disabled: disabled,
        prev: prev,
        next: next
      }),
      onClick: function onClick() {
        if (!disabled && idx !== _v) {
          onChange === null || onChange === void 0 ? void 0 : onChange(idx);

          _setV(idx);
        }
      }
    }, title);
  }));
};

var _excluded$11 = ["dataList", "dataRender", "onSort", "config", "className"];

var _templateObject$Z;
var StyledWrapper$4 = styled__default['default'].div(_templateObject$Z || (_templateObject$Z = _taggedTemplateLiteral([""]))); //#endregion

var addKeyToList = function addKeyToList(list) {
  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!item._key) {
        item._key = nanoid.nanoid(6);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return list;
};
/**
 * 拖拽排序列表
 */


var SortableList = function SortableList(props) {
  var _props$dataList = props.dataList,
      dataList = _props$dataList === void 0 ? [] : _props$dataList,
      dataRender = props.dataRender,
      onSort = props.onSort,
      config = props.config,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$11);

  var wrapElRef = React.useRef();
  var keyedList = addKeyToList(dataList);
  var ref = React.useRef({
    list: keyedList,
    onSort: onSort,
    config: config
  });
  ref.current = {
    list: keyedList,
    onSort: onSort,
    config: config
  };
  React.useEffect(function () {
    var el = wrapElRef.current;
    var st;

    if (el) {
      st = Sortable__default['default'].create(el, _objectSpread2(_objectSpread2({}, ref.current.config), {}, {
        dataIdAttr: 'data-id',
        store: {
          set: function set(ss) {
            var _ref$current$onSort, _ref$current;

            var ar = ss.toArray();
            var newList = ref.current.list.sort(function (a, b) {
              return ar.indexOf(a._key) - ar.indexOf(b._key);
            });
            (_ref$current$onSort = (_ref$current = ref.current).onSort) === null || _ref$current$onSort === void 0 ? void 0 : _ref$current$onSort.call(_ref$current, newList);
          }
        }
      }));
    }

    return function () {
      st.destroy();
    };
  }, [ref]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$4, _extends({}, rest, {
    ref: wrapElRef,
    className: clsx__default['default']('uc-sortable-list', className)
  }), keyedList.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: item._key,
      "data-id": item._key,
      className: "uc-sortable-item"
    }, dataRender(item));
  }));
};

SortableList.displayName = 'UC-SortableList';

var _excluded$12 = ["className", "style", "defaultValue", "value", "step", "min", "max", "disabled", "onChange"];

var _templateObject$_;
//#region  style
var StyledWrap$a = styled__default['default'].div(_templateObject$_ || (_templateObject$_ = _taggedTemplateLiteral(["\n  width: 110px;\n  display: inline-flex;\n  .uc-button {\n    flex: none;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    font-weight: normal;\n    ", "\n  }\n\n  .uc-input {\n    flex: 1;\n    background-color: #f5f5f5;\n    border: none;\n    padding: 0;\n    height: 28px;\n    margin: 0 2px;\n\n    input {\n      text-align: center;\n    }\n\n    &:hover:not(.disabled, .read-only) {\n      border: none;\n    }\n\n    &.focused:not(.disabled, .read-only) {\n      border: none;\n      box-shadow: none;\n    }\n  }\n"])), getThemeColorCss('color')); //#endregion

/** 步进器 */

var Stepper = function Stepper(props) {
  var className = props.className,
      style = props.style,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '0' : _props$defaultValue,
      value = props.value,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      min = props.min,
      max = props.max,
      disabled = props.disabled,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$12);

  var _useState = React.useState(value || defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var onAdd = React.useCallback(function () {
    setVal(function (v) {
      var n = Number(v) + step;

      if (typeof max === 'number') {
        return Math.min(n, max);
      }

      return n;
    });
  }, [step, max]);
  var onMinus = React.useCallback(function () {
    setVal(function (v) {
      var n = Number(v) - step;

      if (typeof min === 'number') {
        return Math.max(min, n);
      }

      return n;
    });
  }, [step, min]);
  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(Number(val));
  }, [val]);
  useUpdateEffect(function () {
    if (value != val) {
      setVal(value);
    }
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$a, _extends({}, rest, {
    style: style,
    className: clsx__default['default']('uc-stepper', className)
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(Icon, {
      type: "uc-icon-jian2"
    }),
    onClick: onMinus,
    disabled: disabled
  }), /*#__PURE__*/React__default['default'].createElement(Input, _extends({}, rest, {
    disabled: disabled,
    value: val + '',
    onChange: function onChange(v) {
      var num = Number(v);

      if (num === num) {
        setVal(v + ''); // v maybe ''
      }
    }
  })), /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(Icon, {
      type: "uc-icon-jia2"
    }),
    onClick: onAdd,
    disabled: disabled
  }));
};

Stepper.displayName = 'UC-Stepper';

var _excluded$13 = ["content"];

var _templateObject$$;
var StyledLoading = styled__default['default'](Toast)(_templateObject$$ || (_templateObject$$ = _taggedTemplateLiteral(["\n  display: inline-flex;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n  line-height: 1.15;\n  border-radius: 4px;\n  min-width: 80px;\n  min-height: 80px;\n  font-size: 16px;\n"])));

/** 加载Loading */
var Loading = function Loading(_ref) {
  var content = _ref.content,
      restProps = _objectWithoutProperties(_ref, _excluded$13);

  return /*#__PURE__*/React__default['default'].createElement(StyledLoading, _extends({
    visible: true
  }, restProps, {
    content: content ? content : /*#__PURE__*/React__default['default'].createElement(Spin, {
      style: {
        fontSize: 36
      }
    })
  }));
};

var _hide = null;

var show = function show(content) {
  var _hide2;

  var container = document.createElement('div');
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(Loading, {
    className: "uc-loading",
    content: content
  }), container);
  (_hide2 = _hide) === null || _hide2 === void 0 ? void 0 : _hide2();
  _hide = dispose;
};

var hide = function hide() {
  var _hide3;

  return (_hide3 = _hide) === null || _hide3 === void 0 ? void 0 : _hide3();
};

attachPropertiesToComponent(Loading, {
  show: show,
  hide: hide
});

/**
 * 返回节流函数
 *
 * @param {F} fn fn改变throttle fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
var useThrottle = function useThrottle(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 180;
  var fnDeps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return (// eslint-disable-next-line react-hooks/exhaustive-deps
    React.useMemo(function () {
      return throttle(fn, timeout);
    }, fnDeps)
  );
};

/**
 * 倒计时，常用于获取验证码
 *
 * @param {number} [defaultCountdown=60] 默认从60秒开始倒计时
 * @param {boolean} [defaultStarted=false] 默认开始否
 * @return {*} {
  countdown: number;
  isRunning: boolean;
  isReStarted: boolean;
  start: () => void;
  reset: () => void;
}
 */
var useCountdown = function useCountdown() {
  var defaultCountdown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
  var defaultStarted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _useState = React.useState(defaultCountdown),
      _useState2 = _slicedToArray(_useState, 2),
      countdown = _useState2[0],
      setCountdown = _useState2[1];

  var _useState3 = React.useState(defaultStarted),
      _useState4 = _slicedToArray(_useState3, 2),
      started = _useState4[0],
      setStarted = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isReStarted = _useState6[0],
      setIsReStarted = _useState6[1];

  var start = React.useCallback(function () {
    setStarted(true);
  }, []);
  var reset = React.useCallback(function () {
    setStarted(false);
  }, []);
  React.useEffect(function () {
    if (countdown > 0 && started) {
      setTimeout(function () {
        setCountdown(function (cd) {
          return --cd;
        });
      }, 1000);

      if (countdown === 1) {
        // mark the end of this round
        setIsReStarted(true);
      }
    } else {
      setStarted(false);
      setCountdown(defaultCountdown);
    }
  }, [countdown, started, defaultCountdown]);
  return {
    countdown: countdown,
    isRunning: started,
    start: start,
    reset: reset,
    isReStarted: isReStarted
  };
};

var _excluded$14 = ["children", "label", "name"],
    _excluded2$4 = ["children", "gap", "labelWidth", "requiredMark", "layout", "className", "onFinishFailed", "toastError", "scrollIntoErrorField"];

var FormItem = function FormItem(props) {
  var _useContext = React.useContext(FormContext),
      labelWidth = _useContext.labelWidth,
      requiredMark = _useContext.requiredMark;

  var children = props.children,
      label = props.label,
      name = props.name,
      fieldProps = _objectWithoutProperties(props, _excluded$14);

  var required = false;

  if ('rules' in fieldProps) {
    var rules = fieldProps.rules;

    if (Array.isArray(rules)) {
      required = rules.some(function (rule) {
        if (rule && _typeof(rule) === 'object' && rule.required) {
          return true;
        }

        return false;
      });
    }
  }

  return /*#__PURE__*/React__default['default'].createElement(Cell, {
    labelWidth: labelWidth,
    label: label,
    "data-name": name,
    required: requiredMark && required
  }, /*#__PURE__*/React__default['default'].createElement(RcForm.Field, _extends({
    name: name
  }, fieldProps), children));
};
/** 排列方式 */


var FormContext = /*#__PURE__*/React__default['default'].createContext(null);
/** 表单 */

var Form = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$gap = props.gap,
      gap = _props$gap === void 0 ? 16 : _props$gap,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 80 : _props$labelWidth,
      _props$requiredMark = props.requiredMark,
      requiredMark = _props$requiredMark === void 0 ? true : _props$requiredMark,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'vertical' : _props$layout,
      className = props.className,
      _onFinishFailed = props.onFinishFailed,
      _props$toastError = props.toastError,
      toastError = _props$toastError === void 0 ? isMobile : _props$toastError,
      _props$scrollIntoErro = props.scrollIntoErrorField,
      scrollIntoErrorField = _props$scrollIntoErro === void 0 ? isMobile : _props$scrollIntoErro,
      rest = _objectWithoutProperties(props, _excluded2$4);

  return /*#__PURE__*/React__default['default'].createElement(RcForm__default['default'], _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-form', className),
    onFinishFailed: function onFinishFailed(errInfo) {
      if (toastError) {
        Toast.show(errInfo.errorFields[0].errors[0]);
      }

      if (scrollIntoErrorField) {
        var name = errInfo.errorFields[0].name[0];
        var el = document.querySelector("[data-name=".concat(name, "]"));

        if (el instanceof HTMLElement) {
          el === null || el === void 0 ? void 0 : el.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }

      _onFinishFailed === null || _onFinishFailed === void 0 ? void 0 : _onFinishFailed(errInfo);
    }
  }), /*#__PURE__*/React__default['default'].createElement(FormContext.Provider, {
    value: {
      labelWidth: labelWidth,
      requiredMark: requiredMark
    }
  }, /*#__PURE__*/React__default['default'].createElement(Space, {
    direction: layout,
    size: gap,
    style: {
      width: '100%'
    }
  }, children)));
});
FormItem.displayName = 'UC-FormItem';
Form.displayName = 'UC-Form';
var Form$1 = attachPropertiesToComponent(Form, {
  /** 表单项 */
  Item: FormItem
});

Object.keys(reactTransitionGroup).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return reactTransitionGroup[k];
    }
  });
});
Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () {
    return styled__default['default'];
  }
});
Object.defineProperty(exports, 'clsx', {
  enumerable: true,
  get: function () {
    return clsx__default['default'];
  }
});
Object.defineProperty(exports, 'animated', {
  enumerable: true,
  get: function () {
    return web.animated;
  }
});
Object.defineProperty(exports, 'easings', {
  enumerable: true,
  get: function () {
    return web.easings;
  }
});
Object.defineProperty(exports, 'useSpring', {
  enumerable: true,
  get: function () {
    return web.useSpring;
  }
});
Object.defineProperty(exports, 'Touch', {
  enumerable: true,
  get: function () {
    return Touch__default['default'];
  }
});
Object.defineProperty(exports, 'TouchElement', {
  enumerable: true,
  get: function () {
    return Touch.TouchElement;
  }
});
Object.defineProperty(exports, 'nanoid', {
  enumerable: true,
  get: function () {
    return nanoid.nanoid;
  }
});
exports.ActionSheet = ActionSheet;
exports.Affix = Affix;
exports.AlertDialog = AlertDialog;
exports.AnimationElement = AnimationElement;
exports.AutoCenter = AutoCenter;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Cell = Cell;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.Collapse = Collapse$1;
exports.CopyToClipboard = CopyToClipboard;
exports.DatePicker = DatePicker;
exports.Divider = Divider;
exports.Drag = Drag;
exports.Drawer = Drawer;
exports.Empty = Empty;
exports.ErrorBoundary = ErrorBoundary;
exports.FileInputTrigger = FileInputTrigger;
exports.Form = Form$1;
exports.HairLineBox = HairLineBox;
exports.Icon = Icon;
exports.IconArrow = IconArrow;
exports.ImageViewer = ImageViewer;
exports.IndexList = IndexList;
exports.Input = Input;
exports.LazyLoadElement = LazyLoadElement;
exports.LazyLoadImage = LazyLoadImage;
exports.Loading = Loading;
exports.Mask = Mask;
exports.Modal = Modal;
exports.NoticeBar = NoticeBar;
exports.NoticeList = NoticeList;
exports.Notify = Notify;
exports.NumberKeyboard = NumberKeyboard;
exports.NumberKeyboardBase = NumberKeyboardBase;
exports.Pagination = Pagination;
exports.PasswordInput = PasswordInput;
exports.Picker = Picker;
exports.PickerView = PickerView;
exports.PopConfirm = PopConfirm;
exports.PopMenu = PopMenu;
exports.Popover = Popover;
exports.Popup = Popup;
exports.ProgressBar = ProgressBar;
exports.ProgressCircle = ProgressCircle;
exports.PullToRefresh = PullToRefresh;
exports.Pullup = Pullup;
exports.QRCode = QRCode$1;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Rate = Rate;
exports.Ripple = Ripple;
exports.RollingNumber = RollingNumber;
exports.SafeArea = SafeArea;
exports.ScrollToTop = ScrollToTop;
exports.SideBar = SideBar;
exports.Signature = Signature;
exports.Skeleton = Skeleton;
exports.SkeletonBase = SkeletonBase;
exports.Slide = Slide;
exports.SortableList = SortableList;
exports.Space = Space;
exports.Spin = Spin;
exports.Stepper = Stepper;
exports.Steps = Steps;
exports.SwipeAction = SwipeAction;
exports.Switch = Switch;
exports.Tabs = Tabs$1;
exports.Text = Text;
exports.ThemeProvider = ThemeProvider;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.TransitionElement = TransitionElement;
exports.WaitLoading = WaitLoading;
exports.WaterMark = WaterMark;
exports.Waypoint = Waypoint;
exports.copy = copy;
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.flatArray = flatArray;
exports.flatSimpleArray = flatSimpleArray;
exports.getThemeColorCss = getThemeColorCss;
exports.isBrowser = isBrowser;
exports.isMobile = isMobile;
exports.isTouch = isTouch;
exports.loadResource = loadResource;
exports.observe = observe;
exports.throttle = throttle;
exports.uniqArray = uniqArray;
exports.unobserve = unobserve;
exports.useCallbackRef = useCallbackRef;
exports.useCountdown = useCountdown;
exports.useDebounce = useDebounce;
exports.useForceUpdate = useForceUpdate;
exports.useInViewport = useInViewport;
exports.useMount = useMount;
exports.useThrottle = useThrottle;
exports.useUnmount = useUnmount;
exports.useUpdateEffect = useUpdateEffect;
exports.useUpdateLayoutEffect = useUpdateLayoutEffect;
