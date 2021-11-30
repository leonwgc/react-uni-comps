'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactTransitionGroup = require('react-transition-group');
require('intersection-observer');
var clsx = require('clsx');
var styled = require('styled-components');
var reactIs = require('react-is');
var copy = require('copy-text-to-clipboard');
var SignaturePad = require('signature_pad');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var copy__default = /*#__PURE__*/_interopDefaultLegacy(copy);
var SignaturePad__default = /*#__PURE__*/_interopDefaultLegacy(SignaturePad);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
/** 是否支持passive事件选项 */


var passiveIfSupported = _passiveIfSupported;

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
 * @return {*}  {Promise<void>}
 */

var loadResource = function loadResource(url) {
  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise(function (resolve) {
        var el;
        var isCss = cssRegex.test(url);

        if (isCss) {
          el = document.createElement('link');
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          el.src = url;
        }

        el.onload = resolve;

        if (isCss) {
          var head = document.getElementsByTagName('head')[0];
          head.appendChild(el);
        } else {
          document.body.appendChild(el);
        }
      });
    }
  } else {
    return Promise.reject('请输入js/css文件地址');
  }
};

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

/** 统一浅色边框色 */
var border = '#eee';
var disabledText = 'rgba(0, 0, 0, 0.25)';
var primary = '#004bcc';
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

var _excluded = ["children", "className", "hideOverflow"];

var _templateObject;
var StyledMask = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  transition: opacity 0.22s linear;\n  touch-action: none;\n\n  &.from {\n    opacity: 0.4;\n  }\n  &.to {\n    opacity: 0.45;\n  }\n"])));

/** 遮罩层 */
var Mask = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      _props$hideOverflow = props.hideOverflow,
      hideOverflow = _props$hideOverflow === void 0 ? true : _props$hideOverflow,
      rest = _objectWithoutProperties(props, _excluded);

  React.useEffect(function () {
    return function () {
      document.body.style.overflow = '';
    };
  }, []);
  React.useEffect(function () {
    if (hideOverflow) {
      document.body.style.overflow = hideOverflow ? 'hidden' : '';
    }
  }, [hideOverflow]);
  return /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement(StyledMask, _extends({}, rest, {
    className: clsx__default['default']('uc-mask', className)
  }), children));
});
Mask.displayName = 'UC-Mask';

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
/** 弹框，可以从上，下，左，右，中间弹出 */


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
        dialogEl.style.transformOrigin = 'unset';
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
  return /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-popup-container-' + position)
  }, mask && visible && /*#__PURE__*/React__default['default'].createElement(Mask, {
    ref: maskRef,
    className: maskClass,
    style: maskStyle,
    onClick: function onClick() {
      return closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    "in": visible,
    timeout: duration
  }, function (status) {
    return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, {
      ref: wrapRef,
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        position: showPosition,
        transitionDuration: duration + 'ms'
      }),
      className: clsx__default['default']('uc-popup-wrap', className, position, status, position + '-' + status, {
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

var _excluded$1 = ["size", "align", "className", "children", "direction", "split", "style", "wrap"];

var _templateObject$2;

function SpaceItem(_ref) {
  var className = _ref.className,
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
/** 间距容器,参考 https://ant.design/components/space-cn/ */

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
  })) : /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: elRef
  });
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

var _excluded$4 = ["size", "color", "className", "style"];

var _templateObject$4;
var StyledLoading = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  @-webkit-keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n  @keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n\n  display: inline-flex;\n  position: relative;\n  width: 1em;\n  height: 1em;\n  vertical-align: middle;\n  animation: loading 1s steps(60, end) infinite;\n  :before,\n  :after {\n    content: '';\n    display: block;\n    width: 0.5em;\n    height: 1em;\n    box-sizing: border-box;\n    border: 0.125em solid;\n    border-color: currentColor;\n  }\n  :before {\n    border-right-width: 0;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n    mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n  :after {\n    border-left-width: 0;\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n"])));
/** Spinner 加载中 */

var Spinner = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      color = _ref.color,
      className = _ref.className,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React__default['default'].createElement(StyledLoading, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-spinner'),
    style: _objectSpread2({
      fontSize: size,
      color: color
    }, style)
  }));
});
Spinner.displayName = 'UC-Spinner';

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

var _excluded$5 = ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "finished", "className", "useWindowScroll"];

var _templateObject$5;
var StyledPullupContainer = styled__default['default'].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  &.dom-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  &.window-scroll {\n    .uc-pullup-footer {\n      padding-bottom: 34px;\n    }\n  }\n\n  .uc-pullup-footer {\n    padding: 16px 0;\n    display: flex;\n    color: #909090;\n    font-size: 14px;\n    justify-content: center;\n    align-items: center;\n  }\n"]))); // check isInViewport in vertical direction

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

/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */
var Pullup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$dataList = props.dataList,
      dataList = _props$dataList === void 0 ? [] : _props$dataList,
      _props$dataRender = props.dataRender,
      dataRender = _props$dataRender === void 0 ? function () {
    return null;
  } : _props$dataRender,
      fetchData = props.fetchData,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Spinner, {
    color: "#999"
  }), "\u52A0\u8F7D\u4E2D") : _props$loadingText,
      _props$finishedText = props.finishedText,
      finishedText = _props$finishedText === void 0 ? '我是有底线的' : _props$finishedText,
      _props$finished = props.finished,
      finished = _props$finished === void 0 ? false : _props$finished,
      className = props.className,
      _props$useWindowScrol = props.useWindowScroll,
      useWindowScroll = _props$useWindowScrol === void 0 ? true : _props$useWindowScrol,
      rest = _objectWithoutProperties(props, _excluded$5);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var waypointRef = React.useRef();
  var containerRef = React.useRef();
  var isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : containerRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  React.useImperativeHandle(ref, function () {
    return containerRef.current;
  });
  React.useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(waypointRef.current, useWindowScroll ? null : containerRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      })["catch"](function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);
  return /*#__PURE__*/React__default['default'].createElement(StyledPullupContainer, _extends({}, rest, {
    className: clsx__default['default']('uc-pullup-container', className, {
      'dom-scroll': !useWindowScroll,
      'window-scroll': useWindowScroll
    }),
    ref: containerRef
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-pullup-wrapper"
  }, dataList.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: idx
    }, dataRender(item, idx));
  })), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "uc-pullup-waypoint",
    style: {
      fontSize: 0
    },
    ref: waypointRef
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-pullup-footer"
  }, loading ? loadingText : finished ? finishedText : null));
});
Pullup.displayName = 'UC-Pullup';

var _excluded$6 = ["position", "color"];

var _templateObject$6;
/** 显示1px的边 */

var StyledDiv = styled__default['default'].div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    ", ": 1px solid ", ";\n\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n      width: 200%;\n      height: 200%;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n    }\n  }\n"])), function (_ref) {
  var position = _ref.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});
/** 包含1px的边的容器div */

var HairLineBox = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$color = props.color,
      color = _props$color === void 0 ? '#dcdcdc' : _props$color,
      rest = _objectWithoutProperties(props, _excluded$6);

  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, _extends({}, rest, {
    ref: ref,
    position: position,
    color: color
  }));
});
HairLineBox.displayName = 'UC-HairLineBox';

/**  等待wait毫秒且visible是true才渲染子元素, 一般用于防止loading闪烁等问题 */
var WaitLoading = function WaitLoading(props) {
  var _props$wait = props.wait,
      wait = _props$wait === void 0 ? 600 : _props$wait,
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

var supportedGestures = ['onMultipointStart', 'onMultipointEnd', 'onTap', 'onDoubleTap', 'onLongTap', 'onSingleTap', 'onRotate', 'onPinch', 'onPressMove', 'onSwipe', 'onTwoFingerPressMove'];

var getLen = function getLen(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
};

function dot(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}

function getAngle(v1, v2) {
  var mr = getLen(v1) * getLen(v2);
  if (mr === 0) return 0;
  var r = dot(v1, v2) / mr;
  if (r > 1) r = 1;
  return Math.acos(r);
}

function cross(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}

function getRotateAngle(v1, v2) {
  var angle = getAngle(v1, v2);

  if (cross(v1, v2) > 0) {
    angle *= -1;
  }

  return angle * 180 / Math.PI;
}

var HandlerAdmin = function HandlerAdmin(el) {
  this.handlers = [];
  this.el = el;
};

HandlerAdmin.prototype.add = function (handler) {
  this.handlers.push(handler);
};

HandlerAdmin.prototype.del = function (handler) {
  if (!handler) this.handlers = [];

  for (var i = this.handlers.length; i >= 0; i--) {
    if (this.handlers[i] === handler) {
      this.handlers.splice(i, 1);
    }
  }
};

HandlerAdmin.prototype.dispatch = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0, len = this.handlers.length; i < len; i++) {
    var _handler$apply;

    var handler = this.handlers[i];
    (_handler$apply = handler.apply) === null || _handler$apply === void 0 ? void 0 : _handler$apply.call(handler, this.el, args);
  }
};

function wrapFunc(el, handler) {
  var handlerAdmin = new HandlerAdmin(el);
  handlerAdmin.add(handler);
  return handlerAdmin;
}

/** 手势操作 */
var FingerGesture = function FingerGesture(el, option) {
  this.element = el;
  this.start = this.start.bind(this);
  this.move = this.move.bind(this);
  this.end = this.end.bind(this);
  this.cancel = this.cancel.bind(this);
  this.element.addEventListener('touchstart', this.start, passiveIfSupported);
  this.element.addEventListener('touchmove', this.move, passiveIfSupported);
  this.element.addEventListener('touchend', this.end, passiveIfSupported);
  this.element.addEventListener('touchcancel', this.cancel, passiveIfSupported);
  this.preV = {
    x: null,
    y: null
  };
  this.pinchStartLen = null;
  this.scale = 1;
  this.isDoubleTap = false; // eslint-disable-next-line @typescript-eslint/no-empty-function

  var noop = function noop() {};

  this.rotate = wrapFunc(this.element, option.onRotate || noop);
  /** native events special care prevent from twice invoke  */

  this.touchStart = new HandlerAdmin(this.element);
  this.touchMove = new HandlerAdmin(this.element);
  this.touchEnd = new HandlerAdmin(this.element);
  this.touchCancel = new HandlerAdmin(this.element);
  this.multipointStart = wrapFunc(this.element, option.onMultipointStart || noop);
  this.multipointEnd = wrapFunc(this.element, option.onMultipointEnd || noop);
  this.pinch = wrapFunc(this.element, option.onPinch || noop);
  this.swipe = wrapFunc(this.element, option.onSwipe || noop);
  this.tap = wrapFunc(this.element, option.onTap || noop);
  this.doubleTap = wrapFunc(this.element, option.onDoubleTap || noop);
  this.longTap = wrapFunc(this.element, option.onLongTap || noop);
  this.singleTap = wrapFunc(this.element, option.onSingleTap || noop);
  this.pressMove = wrapFunc(this.element, option.onPressMove || noop);
  this.twoFingerPressMove = wrapFunc(this.element, option.onTwoFingerPressMove || noop);
  this._cancelAllHandler = this.cancelAll.bind(this);
  window.addEventListener('scroll', this._cancelAllHandler);
  this.delta = null;
  this.last = null;
  this.now = null;
  this.tapTimeout = null;
  this.singleTapTimeout = null;
  this.longTapTimeout = null;
  this.swipeTimeout = null;
  this.x1 = this.x2 = this.y1 = this.y2 = null;
  this.preTapPosition = {
    x: null,
    y: null
  };
};

FingerGesture.prototype = {
  start: function start(evt) {
    if (!evt.touches) return;
    this.now = Date.now();
    this.x1 = evt.touches[0].pageX;
    this.y1 = evt.touches[0].pageY;
    this.delta = this.now - (this.last || this.now);
    this.touchStart.dispatch(evt, this.element);

    if (this.preTapPosition.x !== null) {
      this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
      if (this.isDoubleTap) clearTimeout(this.singleTapTimeout);
    }

    this.preTapPosition.x = this.x1;
    this.preTapPosition.y = this.y1;
    this.last = this.now;
    var preV = this.preV,
        len = evt.touches.length;

    if (len > 1) {
      this._cancelLongTap();

      this._cancelSingleTap();

      var v = {
        x: evt.touches[1].pageX - this.x1,
        y: evt.touches[1].pageY - this.y1
      };
      preV.x = v.x;
      preV.y = v.y;
      this.pinchStartLen = getLen(preV);
      this.multipointStart.dispatch(evt, this.element);
    }

    this._preventTap = false;
    this.longTapTimeout = setTimeout(function () {
      this.longTap.dispatch(evt, this.element);
      this._preventTap = true;
    }.bind(this), 750);
  },
  move: function move(evt) {
    if (!evt.touches) return;
    var preV = this.preV,
        len = evt.touches.length,
        currentX = evt.touches[0].pageX,
        currentY = evt.touches[0].pageY;
    this.isDoubleTap = false;

    if (len > 1) {
      var sCurrentX = evt.touches[1].pageX,
          sCurrentY = evt.touches[1].pageY;
      var v = {
        x: evt.touches[1].pageX - currentX,
        y: evt.touches[1].pageY - currentY
      };

      if (preV.x !== null) {
        if (this.pinchStartLen > 0) {
          evt.scale = getLen(v) / this.pinchStartLen;
          this.pinch.dispatch(evt, this.element);
        }

        evt.angle = getRotateAngle(v, preV);
        this.rotate.dispatch(evt, this.element);
      }

      preV.x = v.x;
      preV.y = v.y;

      if (this.x2 !== null && this.sx2 !== null) {
        evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
        evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }

      this.twoFingerPressMove.dispatch(evt, this.element);
      this.sx2 = sCurrentX;
      this.sy2 = sCurrentY;
    } else {
      if (this.x2 !== null) {
        evt.deltaX = currentX - this.x2;
        evt.deltaY = currentY - this.y2; //move事件中添加对当前触摸点到初始触摸点的判断，
        //如果曾经大于过某个距离(比如10),就认为是移动到某个地方又移回来，应该不再触发tap事件才对。

        var movedX = Math.abs(this.x1 - this.x2),
            movedY = Math.abs(this.y1 - this.y2);

        if (movedX > 10 || movedY > 10) {
          this._preventTap = true;
        }
      } else {
        evt.deltaX = 0;
        evt.deltaY = 0;
      }

      this.pressMove.dispatch(evt, this.element);
    }

    this.touchMove.dispatch(evt, this.element);

    this._cancelLongTap();

    this.x2 = currentX;
    this.y2 = currentY;

    if (len > 1) {
      evt.preventDefault();
    }
  },
  end: function end(evt) {
    if (!evt.changedTouches) return;

    this._cancelLongTap();

    var self = this;

    if (evt.touches.length < 2) {
      this.multipointEnd.dispatch(evt, this.element);
      this.sx2 = this.sy2 = null;
    } //swipe


    if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) {
      evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
      this.swipeTimeout = setTimeout(function () {
        self.swipe.dispatch(evt, self.element);
      }, 0);
    } else {
      this.tapTimeout = setTimeout(function () {
        if (!self._preventTap) {
          self.tap.dispatch(evt, self.element);
        } // trigger double tap immediately


        if (self.isDoubleTap) {
          self.doubleTap.dispatch(evt, self.element);
          self.isDoubleTap = false;
        }
      }, 0);

      if (!self.isDoubleTap) {
        self.singleTapTimeout = setTimeout(function () {
          self.singleTap.dispatch(evt, self.element);
        }, 250);
      }
    }

    this.touchEnd.dispatch(evt, this.element);
    this.preV.x = 0;
    this.preV.y = 0;
    this.scale = 1;
    this.pinchStartLen = null;
    this.x1 = this.x2 = this.y1 = this.y2 = null;
  },
  cancelAll: function cancelAll() {
    this._preventTap = true;
    clearTimeout(this.singleTapTimeout);
    clearTimeout(this.tapTimeout);
    clearTimeout(this.longTapTimeout);
    clearTimeout(this.swipeTimeout);
  },
  cancel: function cancel(evt) {
    this.cancelAll();
    this.touchCancel.dispatch(evt, this.element);
  },
  _cancelLongTap: function _cancelLongTap() {
    clearTimeout(this.longTapTimeout);
  },
  _cancelSingleTap: function _cancelSingleTap() {
    clearTimeout(this.singleTapTimeout);
  },
  _swipeDirection: function _swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'left' : 'right' : y1 - y2 > 0 ? 'up' : 'down';
  },
  on: function on(evt, handler) {
    if (this[evt]) {
      this[evt].add(handler);
    }
  },
  off: function off(evt, handler) {
    if (this[evt]) {
      this[evt].del(handler);
    }
  },
  destroy: function destroy() {
    if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
    if (this.tapTimeout) clearTimeout(this.tapTimeout);
    if (this.longTapTimeout) clearTimeout(this.longTapTimeout);
    if (this.swipeTimeout) clearTimeout(this.swipeTimeout);
    this.element.removeEventListener('touchstart', this.start, passiveIfSupported);
    this.element.removeEventListener('touchmove', this.move, passiveIfSupported);
    this.element.removeEventListener('touchend', this.end, passiveIfSupported);
    this.element.removeEventListener('touchcancel', this.cancel, passiveIfSupported);
    this.rotate.del();
    this.touchStart.del();
    this.multipointStart.del();
    this.multipointEnd.del();
    this.pinch.del();
    this.swipe.del();
    this.tap.del();
    this.doubleTap.del();
    this.longTap.del();
    this.singleTap.del();
    this.pressMove.del();
    this.twoFingerPressMove.del();
    this.touchMove.del();
    this.touchEnd.del();
    this.touchCancel.del();
    this.preV = this.pinchStartLen = this.scale = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
    window.removeEventListener('scroll', this._cancelAllHandler);
    return null;
  }
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
/**
 *  获取部分props
 *
 * @param {*} [props={}]
 * @param {string[]} propKeys
 * @param {boolean} [isIncluded=true]
 * @return {*}  {Record<string, unknown>}
 */

var getProps = function getProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propKeys = arguments.length > 1 ? arguments[1] : undefined;
  var isIncluded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var required = {};
  var rest = {};
  var keys = Object.keys(props);

  if (propKeys === null || propKeys === void 0 ? void 0 : propKeys.length) {
    keys.map(function (k) {
      if (propKeys.includes(k)) {
        required[k] = props[k];
      } else {
        rest[k] = props[k];
      }
    });
  } else {
    required = {};
    rest = props;
  }

  return isIncluded ? required : rest;
};

/* eslint-disable react-hooks/exhaustive-deps */

var useGesture = function useGesture(elRef, option) {
  React.useEffect(function () {
    if (elRef.current instanceof Element) {
      var gestureProps = getProps(option, supportedGestures);
      var fg = new FingerGesture(elRef.current, gestureProps);
      return function () {
        fg.destroy();
      };
    }
  }, [option]);
};

var _templateObject$7, _templateObject2;
/**
 *  get a css snippet with theme color
 *
 * @param {string} prop
 * @param {string} [leftValue='']
 * @return {*}  {*}
 */

var getThemeColorCss = function getThemeColorCss(prop) {
  var leftValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  // mobile css variable first
  if (isMobile) {
    return styled.css(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n      ", ":", " ", ";\n      ", ":", " var(--uc-color, ", ");\n    "])), prop, leftValue, function (props) {
      return props.theme.color || primary;
    }, prop, leftValue, primary);
  } else {
    return styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", ":", " var(--uc-color, ", ");\n      ", ":", " ", ";\n    "])), prop, leftValue, primary, prop, leftValue, function (props) {
      return props.theme.color;
    });
  }
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

var _excluded$7 = ["children", "underline", "value", "defaultValue", "border", "onChange", "extra", "swipe", "className"];

var _templateObject$8, _templateObject2$1;
var isMobileEnv = isMobile;
var StyledWrapper$1 = styled__default['default'].div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  .uc-tabs-content-wrap {\n    overflow: hidden;\n  }\n  .uc-tabs-header-wrap {\n    display: flex;\n    height: 44px;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    .uc-tabs-extra {\n      margin-left: 16px;\n    }\n  }\n"])), border);
var StyledTabHeadItem = styled__default['default'].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 56px;\n  user-select: none;\n\n  &.active {\n    ", "\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    &.uc-tabs-header-line {\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transition: transform 0.3s ease;\n      transform: translateX(", ");\n\n      .line {\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        ", "\n      }\n    }\n  }\n"])), getThemeColorCss('color'), disabledText, function (props) {
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
  return children;
};
/**
 * 选项卡切换
 */


var Tabs = function Tabs(_ref2) {
  var children = _ref2.children,
      _ref2$underline = _ref2.underline,
      underline = _ref2$underline === void 0 ? true : _ref2$underline,
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

  var _useState = React.useState(typeof value === 'undefined' ? defaultValue : value),
      _useState2 = _slicedToArray(_useState, 2),
      _v = _useState2[0],
      _setV = _useState2[1];

  useGesture(contentWrapElRef, {
    onSwipe: function onSwipe(e) {
      e.preventDefault();

      if (e.direction === 'right' && _v > 0) {
        // go to left tab
        var prevIndex = _v - 1;

        _setV(prevIndex);

        onChange === null || onChange === void 0 ? void 0 : onChange(prevIndex);
      } else if (e.direction === 'left' && _v < count - 1) {
        // go to right tab
        var nextIndex = _v + 1;

        _setV(nextIndex);

        onChange === null || onChange === void 0 ? void 0 : onChange(nextIndex);
      }
    }
  });
  useUpdateEffect(function () {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);
  var setUnderlineSize = React.useCallback(function () {
    if (underline) {
      var underlineEl = underlineElRef.current;
      var next = underlineEl.nextSibling;

      if (next) {
        underlineEl.style.width = next.offsetWidth + 'px';
      }
    }
  }, [underline]);
  React.useLayoutEffect(function () {
    setUnderlineSize();
  }, [setUnderlineSize]);
  React.useEffect(function () {
    var throttledSetUnderlineSize = throttle(setUnderlineSize, 34);
    window.addEventListener('resize', throttledSetUnderlineSize);
    return function () {
      window.removeEventListener('resize', throttledSetUnderlineSize);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$1, _extends({}, rest, {
    className: clsx__default['default']('uc-tabs', className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-tabs-header-wrap', {
      'no-border': !border
    })
  }, underline ? /*#__PURE__*/React__default['default'].createElement(StyledTabHeadItem, {
    ref: underlineElRef,
    className: clsx__default['default']('uc-tabs-header-item', 'uc-tabs-header-line'),
    count: count,
    value: _v
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "line",
    style: {
      width: typeof underline === 'boolean' ? '100%' : underline
    }
  })) : null, React__default['default'].Children.map(children, function (child, index) {
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
  }), extra ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('uc-tabs-extra', {
      underline: underline
    })
  }, extra) : null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-tabs-content-wrap",
    ref: isMobileEnv && swipe ? contentWrapElRef : null
  }, React__default['default'].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      var _ref4 = child.props,
          _children = _ref4.children,
          disabled = _ref4.disabled;
      var style = {};

      if (index !== _v || disabled) {
        style.display = 'none';
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: index,
        style: style
      }, _children);
    }
  })));
};
/** Tab直接子元素 */


Tabs.Tab = Tab;

var _excluded$8 = ["title", "description", "className", "content", "lineColor", "children"];

var _templateObject$9;
var StyledCell = styled__default['default'].div(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  background-color: #fff;\n  padding-left: 12px;\n  &.clickable {\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  .cell-inner {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 12px 10px 0;\n    overflow: hidden;\n    font-size: 14px;\n    line-height: 24px;\n\n    .cell-title {\n      box-sizing: border-box;\n      margin-right: 12px;\n      text-align: left;\n      flex: 1;\n\n      .title {\n        color: #333;\n      }\n\n      .description {\n        color: #999;\n        margin-top: 4px;\n        line-height: 18px;\n      }\n\n      &.input {\n        word-wrap: break-word;\n        width: 6.2em;\n        flex: none;\n      }\n    }\n    .cell-content {\n      flex: 1;\n      position: relative;\n      overflow: visible;\n      color: #999;\n      text-align: right;\n      vertical-align: middle;\n      word-wrap: break-word;\n\n      &.input {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n"])), activeBg);
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var title = props.title,
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

  return /*#__PURE__*/React__default['default'].createElement(StyledCell, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-cell', className, {
      clickable: typeof rest.onClick === 'function'
    })
  }), /*#__PURE__*/React__default['default'].createElement(HairLineBox, {
    color: lineColor,
    className: "cell-line"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-inner')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-title', {
      input: !!children
    })
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: "title"
  }, title), description && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "description"
  }, description)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-content', {
      input: !!children
    })
  }, content, children))));
});
Cell.displayName = 'UC-Cell';

var _excluded$9 = ["animate", "width", "height", "shape"],
    _excluded2 = ["style", "className"];

var _templateObject$a;
var StyledSkeletonBase = styled__default['default'].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"])));
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$animate = props.animate,
      animate = _props$animate === void 0 ? true : _props$animate,
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
      pulse: animate
    }, className),
    style: _objectSpread2({
      width: width,
      height: height
    }, style)
  }));
});
SkeletonBase.displayName = 'UC-SkeletonBase';

var _excluded$a = ["animate", "row", "rowWidth", "rowHeight", "avatar", "avatarSize", "children", "loading"],
    _excluded2$1 = ["className"];

var _templateObject$b;

var StyledSkeleton = styled__default['default'].div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  .uc-skeleton {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n\n    &:nth-child(2) {\n      margin-top: 20px;\n    }\n  }\n\n  &.avatar {\n    display: flex;\n\n    > .avatar {\n      flex: none;\n    }\n\n    > .rows {\n      flex: 1;\n      margin-left: 16px;\n      padding-top: 8px;\n    }\n  }\n"])));
/** 骨架屏 */

var Skeleton = function Skeleton(props) {
  var _props$animate = props.animate,
      animate = _props$animate === void 0 ? true : _props$animate,
      _props$row = props.row,
      row = _props$row === void 0 ? 4 : _props$row,
      _props$rowWidth = props.rowWidth,
      rowWidth = _props$rowWidth === void 0 ? ['40%', '100%', '100%', '60%'] : _props$rowWidth,
      _props$rowHeight = props.rowHeight,
      rowHeight = _props$rowHeight === void 0 ? 16 : _props$rowHeight,
      _props$avatar = props.avatar,
      avatar = _props$avatar === void 0 ? false : _props$avatar,
      _props$avatarSize = props.avatarSize,
      avatarSize = _props$avatarSize === void 0 ? 32 : _props$avatarSize,
      children = props.children,
      loading = props.loading,
      other = _objectWithoutProperties(props, _excluded$a);

  if (row < 1) {
    throw new Error('row必须设置>=1,默认4');
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

  var _other$className = other.className,
      className = _other$className === void 0 ? '' : _other$className,
      rest = _objectWithoutProperties(other, _excluded2$1);

  return loading ? avatar ? /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({}, rest, {
    className: clsx__default['default']({
      avatar: avatar
    }, className)
  }), /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
    animate: animate,
    shape: "circle",
    className: "avatar",
    width: avatarSize,
    height: avatarSize
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "rows"
  }, rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
      animate: animate,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  }))) : /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({}, rest, {
    style: {
      display: 'block'
    },
    className: clsx__default['default']({
      avatar: avatar
    }, className)
  }), rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
      animate: animate,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  })) : children;
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

var _excluded$b = ["type", "disabled", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "loading", "ghost"];

var _templateObject$c;
var StyledButton = styled__default['default'].button(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  -moz-appearance: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  padding: 4px 16px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    ", " {\n      opacity: 0.8;\n    }\n    &.pc:hover {\n      ", "\n      ", "\n    }\n\n    &.mobile:active {\n      background-color: ", ";\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.primary {\n    ", "\n    ", "\n    color: #fff;\n\n    ", " {\n      opacity: 0.8;\n    }\n\n    &.ghost,\n    &.ghost:hover,\n    &.ghost:active {\n      background-color: transparent !important;\n      ", "\n      ", "\n\n      &.danger {\n        color: ", ";\n      }\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.anchor {\n    border: none;\n    ", "\n  }\n\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:active {\n    opacity: 0.6;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"])), border, isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), activeBg, danger, danger, getThemeColorCss('background-color'), getThemeColorCss('border-color'), isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), danger, danger, danger, getThemeColorCss('color'), border, border);
/** 按钮 */

var Button = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      disabled = props.disabled,
      block = props.block,
      className = props.className,
      children = props.children,
      htmlType = props.htmlType,
      circle = props.circle,
      dashed = props.dashed,
      danger = props.danger,
      loading = props.loading,
      ghost = props.ghost,
      rest = _objectWithoutProperties(props, _excluded$b);

  var icon = props.icon || (loading ? /*#__PURE__*/React__default['default'].createElement(Spinner, {
    color: type === 'primary' ? '#fff' : '#999'
  }) : null);
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    type: htmlType,
    className: clsx__default['default']('uc-btn', type, {
      disabled: disabled || loading,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost,
      danger: danger,
      mobile: isMobile,
      pc: !isMobile,
      anchor: rest.as === 'a'
    }, className)
  }), icon && children ? /*#__PURE__*/React__default['default'].createElement(Space, null, icon, children) : icon ? icon : children);
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

var _excluded$d = ["size", "className", "button", "onChange", "style", "defaultChecked", "mode", "checked", "disabled", "children"];

var _templateObject$e, _templateObject2$2;
var StyledButton$1 = styled__default['default'](Button)(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  &.fill {\n    &.checked {\n      ", "\n      ", "\n    color: #fff;\n    }\n  }\n  &.outline {\n    &.checked {\n      ", "\n      ", "\n    }\n  }\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('border-color'), getThemeColorCss('border-color'), getThemeColorCss('color'));
var StyledCheckboxBaseWrapper = styled__default['default'].div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n\n  .text {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.pc {\n    .checkbox:hover {\n      ", "\n    }\n  }\n\n  &.radio {\n    .checkbox {\n      border-radius: 50%;\n    }\n  }\n\n  &.checked {\n    .checkbox {\n      ", "\n      ", "\n    }\n  }\n\n  &.disabled {\n    .checkbox {\n      border-color: ", ";\n    }\n  }\n\n  .checkbox {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background: #fff;\n    transition: all 0.24s ease-in-out;\n    color: #fff;\n  }\n"])), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('border', '1px solid'), border, border);
/** Checkbox/Radiobox 的基础 */

var CheckboxBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 18 : _props$size,
      className = props.className,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      onChange = props.onChange,
      style = props.style,
      defaultChecked = props.defaultChecked,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'checkbox' : _props$mode,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$d);

  var _useState = React.useState(typeof checked === 'boolean' ? checked : defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      c = _useState2[0],
      setC = _useState2[1];

  var onChangeRef = useCallbackRef(onChange);
  useUpdateEffect(function () {
    var _onChangeRef$current;

    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, c);
  }, [c]);
  useUpdateEffect(function () {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);
  return button ? /*#__PURE__*/React__default['default'].createElement(StyledButton$1, {
    onClick: function onClick() {
      if (disabled) return;

      if (mode === 'checkbox' || c !== true) {
        setC(!c);
      }
    },
    className: clsx__default['default']({
      fill: button === 'fill',
      outline: button === 'outline' || button === true,
      checked: c,
      disabled: disabled
    })
  }, children) : /*#__PURE__*/React__default['default'].createElement(StyledCheckboxBaseWrapper, {
    ref: ref,
    className: clsx__default['default']('uc-checkbox', mode, {
      disabled: disabled,
      checked: c,
      mobile: isMobile,
      pc: !isMobile
    }),
    onClick: function onClick() {
      if (disabled) return;

      if (mode === 'checkbox' || c !== true) {
        setC(!c);
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    className: clsx__default['default']('checkbox', className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      width: size,
      height: size,
      fontSize: size
    })
  }), /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-tick"
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
  }), options.map(function (option) {
    if (typeof option === 'string') {
      return /*#__PURE__*/React__default['default'].createElement(Checkbox, {
        button: button,
        disabled: disabled,
        key: option,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option);
        },
        checked: value.indexOf(option) > -1
      }, option);
    } else {
      return /*#__PURE__*/React__default['default'].createElement(Checkbox, {
        button: button,
        disabled: disabled,
        key: option.value,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option.value);
        },
        checked: value.indexOf(option.value) > -1
      }, option.label);
    }
  }));
});
CheckboxGroup.displayName = 'UC-CheckboxGroup';

var _excluded$f = ["size"];

/** 单选框 */
var Radio = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 20 : _props$size,
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
/** 一组复选框 */

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
    className: clsx__default['default'](className, 'uc-checkbox-group')
  }), options.map(function (option) {
    if (typeof option === 'string') {
      return /*#__PURE__*/React__default['default'].createElement(Radio, {
        button: button,
        disabled: disabled,
        key: option,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option);
        },
        checked: value === option
      }, option);
    } else {
      return /*#__PURE__*/React__default['default'].createElement(Radio, {
        button: button,
        disabled: disabled,
        key: option.value,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option.value);
        },
        checked: value === option.value
      }, option.label);
    }
  }));
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

var StyledDivider = styled__default['default'].div(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #000000d9;\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  border: none;\n  border-top: 1px solid ", ";\n\n  &.horizontal {\n    display: flex;\n    clear: both;\n    width: 100%;\n    min-width: 100%;\n  }\n\n  &.dashed {\n    border-top-style: dashed;\n  }\n\n  &.text {\n    border-top: 0;\n    .inner-text {\n      display: inline-block;\n      padding: 0 1em;\n      white-space: nowrap;\n      text-align: center;\n    }\n\n    &::before,\n    &::after {\n      width: 50%;\n      border-top: 1px solid ", ";\n      transform: translateY(50%);\n      content: '';\n    }\n\n    &.dashed {\n      &::before,\n      &::after {\n        border-top-style: dashed;\n      }\n    }\n\n    &.left {\n      &::before {\n        width: 5%;\n      }\n      &::after {\n        width: 95%;\n      }\n    }\n    &.right {\n      &::before {\n        width: 95%;\n      }\n      &::after {\n        width: 5%;\n      }\n    }\n  }\n\n  &.vertical {\n    position: relative;\n    top: -0.06em;\n    display: inline-block;\n    height: 0.9em;\n    margin: 0 8px;\n    vertical-align: middle;\n    border-top: 0;\n    border-left: 1px solid ", ";\n  }\n"])), function (_ref) {
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
  return /*#__PURE__*/React__default['default'].createElement(StyledDivider, _extends({
    color: color,
    className: clsx__default['default']('uc-divider', type, hasText ? textPosition : '', className, {
      dashed: dashed,
      text: hasText
    })
  }, rest), hasText ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "inner-text"
  }, children) : null);
};

var _excluded$j = ["onChange", "disabled", "multiple", "accept", "capture", "children", "className"];

var _templateObject$j;
var StyledFileInputTrigger = styled__default['default'].div(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"])));
/** 弹出选择文件窗口, 代替input.file使用，表层是div,可自定义样式，也可包裹一个组件,按包裹组件呈现 */

var FileInputTrigger = function FileInputTrigger(props) {
  var inputRef = React.useRef();

  var _onChange = props.onChange,
      disabled = props.disabled,
      multiple = props.multiple,
      accept = props.accept,
      capture = props.capture,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$j);

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
};

var _excluded$k = ["onVisible", "onInVisible"];

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
var Waypoint = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var elRef = React.useRef();

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
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
    style: {
      fontSize: 0
    },
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
 * windows回到顶部
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var ScrollTop = function ScrollTop(props) {
  var children = props.children,
      _props$visibilityHeig = props.visibilityHeight,
      visibilityHeight = _props$visibilityHeig === void 0 ? 100 : _props$visibilityHeig;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var top = 0;
  React.useEffect(function () {
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

ScrollTop.displayName = 'UC-ScrollTop';

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

var _excluded$l = ["placement", "content", "arrow", "visible", "closable", "onVisibleChange", "onClose", "className", "style", "children", "mask", "maskStyle", "maskClass", "mountContainer", "closeOnClickOutside", "closeOnMaskClick", "offset"];

var _templateObject$l;

var StyledPopover = styled__default['default'].div(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  border-radius: 2px;\n\n  box-shadow: ", ";\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    z-index: 10;\n    top: 12px;\n    right: 12px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n    font-size: 16px;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    z-index: -1;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n"])), boxShadow);

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
      closeOnClickOutside = props.closeOnClickOutside,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? {} : _props$offset,
      rest = _objectWithoutProperties(props, _excluded$l);

  var childrenRef = React.useRef();
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
      setArrowStyle = _useState4[1];

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  React.useEffect(function () {
    offsetRef.current = offset;
  }, [offset]);
  useUpdateEffect(function () {
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(visible);
  }, [visible]);
  React.useEffect(function () {
    var anchorEl = childrenRef.current;
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
    var anchor = childrenRef.current;

    if (el && !el.contains(e.target) && !anchor.contains(e.target)) {
      var _onCloseRef$current;

      (_onCloseRef$current = onCloseRef.current) === null || _onCloseRef$current === void 0 ? void 0 : _onCloseRef$current.call(onCloseRef);
    }
  }, [onCloseRef]);
  React.useEffect(function () {
    if (closeOnClickOutside) {
      window.addEventListener('click', closeOutsideHandler);
      return function () {
        window.removeEventListener('click', closeOutsideHandler);
      };
    }
  }, [closeOnClickOutside, closeOutsideHandler]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: childrenRef
  }), visible ? /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-popover-wrap')
  }, mask && /*#__PURE__*/React__default['default'].createElement(Mask, {
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
    style: _objectSpread2(_objectSpread2({}, modalStyle), style)
  }), arrow && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('uc-popover-arrow'),
    style: arrowStyle
  }), closable && /*#__PURE__*/React__default['default'].createElement(Icon, {
    type: "uc-icon-guanbi",
    className: clsx__default['default']('uc-popover-close'),
    onClick: onClose
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-popover-content')
  }, content))), mountNode) : null);
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

/** 复制文本到剪贴板 */
var CopyToClipboard = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var text = props.text,
      onCopy = props.onCopy,
      children = props.children;
  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: ref,
    onClick: function onClick() {
      var _children$props$onCli, _children$props;

      if (copy__default['default'](text)) {
        onCopy === null || onCopy === void 0 ? void 0 : onCopy();
      }

      (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props);
    }
  });
});
CopyToClipboard.displayName = 'UC-CopyToClipboard';

var _excluded$n = ["lines", "children", "className"];

var _templateObject$n, _templateObject2$3;
var StyledMultiLines = styled__default['default'].div(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.lines;
});
var StyledLine = styled__default['default'].div(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
var Text = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$lines = props.lines,
      lines = _props$lines === void 0 ? 1 : _props$lines,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$n);

  return /*#__PURE__*/React__default['default'].createElement(lines > 1 ? StyledMultiLines : StyledLine, _objectSpread2(_objectSpread2({}, rest), {}, {
    className: clsx__default['default']('uc-text', className),
    ref: ref,
    lines: lines
  }), children);
});
Text.displayName = 'UC-Text';

var _excluded$o = ["content", "visible", "modal", "maskStyle", "className"],
    _excluded2$2 = ["duration"];

var _templateObject$o;
var StyledToast = styled__default['default'].div(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["\n  z-index: 1000;\n  padding: 12px 16px;\n  display: inline-block;\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  &.from {\n    opacity: 0;\n  }\n\n  &.to {\n    opacity: 1;\n  }\n"])));

/** 黑背景轻提示 */
var Toast = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      visible = props.visible,
      _props$modal = props.modal,
      modal = _props$modal === void 0 ? true : _props$modal,
      maskStyle = props.maskStyle,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$o);

  return visible ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, modal && visible && /*#__PURE__*/React__default['default'].createElement(Mask, {
    style: _objectSpread2({
      opacity: 0
    }, maskStyle)
  }), /*#__PURE__*/React__default['default'].createElement(StyledToast, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-toast', className)
  }), content)) : null;
});
var transitionDuration = 240;
/** 黑背景提示,静态调用 */

Toast.show = function (props) {
  var toastProps = {};
  var _duration = 1500;

  if (_typeof(props) === 'object' && 'content' in props) {
    var _props$duration = props.duration,
        duration = _props$duration === void 0 ? 1500 : _props$duration,
        rest = _objectWithoutProperties(props, _excluded2$2);

    toastProps = rest;
    _duration = duration;
  } else {
    toastProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-toast', transitionDuration);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    duration: transitionDuration
  }, /*#__PURE__*/React__default['default'].createElement(Toast, _extends({}, toastProps, {
    visible: true
  }))), container);
  window.setTimeout(function () {
    dispose(beforeDispose);
  }, _duration);
};

Toast.displayName = 'UC-Toast';

var _excluded$p = ["color", "style", "direction", "className", "size"];

var _templateObject$p;
var StyledArrow = styled__default['default'].div(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"])));
/** 箭头 */

var IconArrow = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      style = props.style,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'bottom' : _props$direction,
      className = props.className,
      _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$p);

  return /*#__PURE__*/React__default['default'].createElement(StyledArrow, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-icon-arrow', className, _defineProperty({}, direction, direction)),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      width: size,
      height: size
    })
  }), /*#__PURE__*/React__default['default'].createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: color
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
});
IconArrow.displayName = 'UC-IconArrow';

var _excluded$q = ["content", "delay", "icon", "speed", "closeable", "className", "onClose", "extra"];

var _templateObject$q;
var StyledNoticeBar = styled__default['default'].div(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["\n  height: 30px;\n  font-size: 14px;\n  line-height: 30px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n  overflow: hidden;\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    .content-text {\n      transition-property: transform;\n      transition-timing-function: linear;\n      white-space: nowrap;\n      flex: 1;\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));

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
      rest = _objectWithoutProperties(props, _excluded$q);

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

var _excluded$r = ["children", "offsetTop", "offsetBottom", "target", "onChange"];
/**  port from zarm Affix & refactor  */

/** 将页面元素钉在可视范围*/
var Affix = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      offsetTop = props.offsetTop,
      offsetBottom = props.offsetBottom,
      target = props.target,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$r);

  var innerRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return innerRef.current;
  });

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
      return t.removeEventListener('scroll', onScroll);
    };
  }, [offsetRef, onScrollUpdate]);
  var affixed = data.affixed;

  if (!affixed) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      ref: wrapElRef
    }, /*#__PURE__*/React__default['default'].cloneElement(children, {
      ref: innerRef
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: wrapElRef,
    className: clsx__default['default']('uc-affix-wrap')
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: fixedElRef
  }, rest, {
    style: getAffixeStyle()
  }), /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: innerRef
  })));
});
Affix.displayName = 'UC-Affix';

var _excluded$s = ["visible", "actions", "cancelText", "closeOnMaskClick", "onClose", "className", "extra"];

var _templateObject$r;
var StyledActionSheet = styled__default['default'](Popup)(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: hidden;\n  width: 100%;\n\n  .wrap {\n    background-color: #fff;\n  }\n\n  .extra {\n    display: flex;\n    justify-content: center;\n    color: #999;\n    font-size: 15px;\n    padding: 18px 16px;\n    border-bottom: 1px solid ", ";\n  }\n\n  .button-list {\n    .wrapper {\n      background-color: #ffffff;\n      border-top: 1px solid ", ";\n\n      &.disabled {\n        color: #999;\n\n        &:active {\n          background-color: unset;\n        }\n      }\n      &:first-child {\n        border-top: none;\n      }\n      &:active {\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      button {\n        width: 100%;\n        padding: 14px;\n        height: 55px;\n        text-align: center;\n        background-color: transparent;\n        border: none;\n        border-radius: 0;\n        display: flex;\n        flex-direction: column;\n        font-size: 18px;\n        &:disabled {\n          background-color: #fff;\n          color: #999;\n        }\n\n        .button-item-name {\n          color: #333;\n          &.disabled {\n            color: #999 !important;\n          }\n        }\n\n        .button-item-description {\n          font-size: 12px;\n          margin-top: 4px;\n          color: #999;\n        }\n      }\n    }\n  }\n\n  .uc-actionsheet-cancel {\n    background-color: #f5f5f5;\n    padding-top: 8px;\n\n    .wrapper {\n      background-color: #fff;\n      button {\n        padding: 14px;\n        text-align: center;\n        border-radius: 0;\n      }\n    }\n  }\n"])), border, border);
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
      rest = _objectWithoutProperties(props, _excluded$s);

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

var _excluded$t = ["visible", "title", "content", "onConfirm", "onCancel", "confirmText", "cancelText", "closeOnMaskClick", "buttonSpace", "buttonWidth", "closable", "mask", "maskStyle", "maskClass", "onClose", "className", "wrapStyle"];

var _templateObject$s;
var StyledAlertDialog = styled__default['default'](Popup)(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["\n  // effect\n  &.from {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.5);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.5);\n    }\n  }\n\n  &.to {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n  // end effect\n\n  &.mobile {\n    width: 280px;\n    padding: 20px 0 0;\n\n    .title {\n      text-align: center;\n    }\n\n    .content {\n      padding: 16px;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n\n    .footer {\n      position: relative;\n      display: flex;\n      height: 48px;\n      padding: 0;\n      overflow: hidden;\n      .confirm {\n        ", "\n      }\n\n      .m-btn {\n        height: 48px;\n        line-height: 48px;\n        text-align: center;\n        flex: 1;\n        user-select: none;\n        &:active {\n          background-color: rgba(0, 0, 0, 0.1);\n        }\n      }\n\n      &:after {\n        content: '';\n        pointer-events: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        border-top: 1px solid ", ";\n\n        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n          width: 200%;\n          height: 200%;\n          transform: scale(0.5);\n          transform-origin: 0 0;\n        }\n      }\n    }\n  }\n\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\n  background-color: #fff;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: initial;\n  border-radius: 8px;\n  padding: 32px 32px 24px;\n  box-sizing: border-box;\n  white-space: normal;\n  max-width: calc(100vw - 56px);\n  max-height: calc(100vh - 112px);\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .title {\n    font-size: 16px;\n    line-height: 20px;\n    color: #333;\n    box-sizing: border-box;\n    font-weight: 500;\n  }\n  .content {\n    font-size: 14px;\n    line-height: 20px;\n    min-height: 46px;\n    max-height: calc(100vh - 256px);\n    padding: 24px 0 32px;\n    flex: 1;\n\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  .footer {\n    text-align: right;\n  }\n"])), getThemeColorCss('color'), border);

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
      _props$buttonWidth = props.buttonWidth,
      buttonWidth = _props$buttonWidth === void 0 ? 80 : _props$buttonWidth,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      onClose = props.onClose,
      className = props.className,
      wrapStyle = props.wrapStyle,
      rest = _objectWithoutProperties(props, _excluded$t);

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
    className: clsx__default['default']('title')
  }, title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content')
  }, content), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('footer')
  }, !isMobile ? /*#__PURE__*/React__default['default'].createElement(Space, {
    size: buttonSpace
  }, cancelText ? /*#__PURE__*/React__default['default'].createElement(Button, {
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    className: clsx__default['default']('cancel'),
    style: {
      width: buttonWidth
    }
  }, cancelText) : null, /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "primary",
    className: clsx__default['default']('confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    style: {
      width: buttonWidth
    }
  }, confirmText)) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, cancelText ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('m-btn', 'cancel'),
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();

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
  })) : null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('m-btn', 'confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText))));
});
AlertDialog.displayName = 'UC-AlertDialog';
var transitionDuration$1 = 240;

AlertDialog.show = function (title, content) {
  var confirmText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '确定';
  var onConfirm = arguments.length > 3 ? arguments[3] : undefined;
  var cancelText = arguments.length > 4 ? arguments[4] : undefined;
  var onCancel = arguments.length > 5 ? arguments[5] : undefined;
  var wrapStyle = arguments.length > 6 ? arguments[6] : undefined;
  if (!content) return;
  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-popup-wrap', transitionDuration$1);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    duration: transitionDuration$1
  }, /*#__PURE__*/React__default['default'].createElement(AlertDialog, {
    title: title,
    content: content,
    visible: true,
    confirmText: confirmText,
    cancelText: cancelText,
    wrapStyle: wrapStyle,
    onConfirm: function (_onConfirm) {
      function onConfirm() {
        return _onConfirm.apply(this, arguments);
      }

      onConfirm.toString = function () {
        return _onConfirm.toString();
      };

      return onConfirm;
    }(function () {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
      dispose(beforeDispose);
    }),
    onClose: function onClose() {
      dispose(beforeDispose);
    },
    onCancel: function (_onCancel) {
      function onCancel() {
        return _onCancel.apply(this, arguments);
      }

      onCancel.toString = function () {
        return _onCancel.toString();
      };

      return onCancel;
    }(function () {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();
      dispose(beforeDispose);
    }),
    mountContainer: function mountContainer() {
      return container;
    }
  })), container);
};

var _excluded$u = ["value", "length", "className", "mask", "autoFocus", "virtualKeyboard", "onFinish", "onFocus", "onChange"];

var _templateObject$t;
var StyledPasswordInput = styled__default['default'].div(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["\n  user-select: none;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n  border: 1px solid ", ";\n  margin: 0 16px;\n\n  .item {\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    font-size: 20px;\n    line-height: 1.2;\n    background-color: #fff;\n\n    &:not(:first-child) {\n      border-left: 1px solid ", ";\n    }\n\n    .dot {\n      width: 10px;\n      height: 10px;\n      background-color: #000;\n      border-radius: 100%;\n    }\n    input {\n      height: 100%;\n      width: 100%;\n      display: inline-block;\n      font-size: 16px;\n      text-align: center;\n      background-color: transparent;\n      border: 0;\n      resize: none;\n      outline: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-appearance: none;\n      box-shadow: none;\n    }\n    @keyframes blink {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .virtual-input {\n      &.blink {\n        width: 1px;\n        height: 50%;\n        background-color: #333;\n        animation: 1s blink infinite;\n      }\n    }\n  }\n"])), border, border);

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
      _props$virtualKeyboar = props.virtualKeyboard,
      virtualKeyboard = _props$virtualKeyboar === void 0 ? isMobile : _props$virtualKeyboar,
      onFinish = props.onFinish,
      onFocus = props.onFocus,
      _onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$u);

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
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledPasswordInput, _extends({}, rest, {
    className: clsx__default['default']('uc-password-input', className)
  }), arRef.current.map(function (n, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('item'),
      key: n
    }, value.length >= n ? mask ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "dot"
    }) : value[idx] : !virtualKeyboard ? /*#__PURE__*/React__default['default'].createElement("input", {
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
        if (!prevInputCheck(idx)) {
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

var _excluded$v = ["onClick", "okText", "customKey", "className"];

var _templateObject$u, _templateObject2$4;
var StyledNumberKeyboardBase = styled__default['default'].div(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  padding-bottom: 22px;\n  background-color: #f2f3f5;\n  user-select: none;\n\n  .body {\n    display: flex;\n    padding: 6px 0 0 6px;\n\n    .keys {\n      display: flex;\n      flex: 3;\n      flex-wrap: wrap;\n\n      &.sidebar {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        max-width: 33%;\n\n        .key {\n          max-width: 100%;\n        }\n      }\n\n      .key {\n        position: relative;\n        flex: 1;\n        flex-basis: 33%;\n        box-sizing: border-box;\n        padding: 0 6px 6px 0;\n\n        &.zero {\n          flex-basis: 66%;\n        }\n        &.empty {\n          display: none;\n        }\n      }\n    }\n  }\n"])));
var Styledkey = styled__default['default'](Button)(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  font-size: 28px;\n  line-height: 1.5;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"])));
/** 数字键盘基础 */

var NumberKeyboardBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _onClick = props.onClick,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$customKey = props.customKey,
      customKey = _props$customKey === void 0 ? '' : _props$customKey,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$v);

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

var _excluded$w = ["visible", "okText", "closeOnMaskClick", "maxLength", "customKey", "onOk", "onClose", "onChange", "className"];

var _templateObject$v;
var StyledNumberKeyboard = styled__default['default'](Popup)(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n"])));
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
      rest = _objectWithoutProperties(props, _excluded$w);

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

var _excluded$x = ["children"];

/** 手势操作元素 */
var FingerGestureElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _children$props;

  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$x);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useGesture(elRef, rest);
  return /*#__PURE__*/React__default['default'].cloneElement(children, _objectSpread2(_objectSpread2({}, getProps(rest, supportedGestures, false)), {}, {
    // filter out gesture evts
    ref: elRef,
    style: _objectSpread2(_objectSpread2({}, children === null || children === void 0 ? void 0 : (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.style), {}, {
      touchAction: 'none'
    })
  }));
});
FingerGestureElement.displayName = 'UC-FingerGestureElement';

var _templateObject$w, _templateObject2$5;
var StyledSwipeAction = styled__default['default'].div(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["\n  user-select: none;\n  position: relative;\n  display: block;\n  overflow: hidden;\n\n  .wrap {\n    transition: transform 0.3s ease-in-out;\n    overflow: visible;\n    display: flex;\n    flex-wrap: nowrap;\n\n    .left-part,\n    .right-part {\n      position: absolute;\n      top: 0;\n      height: 100%;\n    }\n\n    .left-part {\n      left: 0px;\n      transform: translate(-100%);\n    }\n    .right-part {\n      right: 0px;\n      transform: translate(100%);\n    }\n    .center-part {\n      display: block;\n      line-height: 20px;\n      padding: 13px 16px;\n      background: #fff;\n      font-size: 14px;\n      color: #666;\n      box-sizing: border-box;\n    }\n  }\n"])));
var StyledButton$2 = styled__default['default'](Button)(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  color: #fff;\n  font-size: 15px;\n"])));
/** SwipeAction 滑动操作 */

var SwipeAction = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
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
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useEffect(function () {
    if (isOpen) {
      onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    } else {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, [isOpen]);
  var startTransform = React.useCallback(function (transformStr, x) {
    var v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    setTimeout(function () {
      v.el.style.transform = "".concat(transformStr);
    });
  }, [thisRef]);
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
      style: {
        backgroundColor: item.color || primary
      }
    }, item.text);
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledSwipeAction, {
    className: clsx__default['default']('uc-swipe-action')
  }, /*#__PURE__*/React__default['default'].createElement(FingerGestureElement, {
    ref: elRef,
    onTouchStart: function onTouchStart() {
      thisRef.current.el.style.transitionProperty = 'none';
    },
    onTouchEnd: function onTouchEnd() {
      var v = thisRef.current;

      if (v.x < 0) {
        // open right
        if (Math.abs(v.x) < v.rightWidth / 2) {
          // no more than half way
          startTransform('translate3d(0,0,0)', 0);

          if (isOpen) {
            setIsOpen(false);
          }
        } else {
          startTransform("translate3d(-".concat(v.rightWidth, "px,0,0)"), -1 * v.rightWidth);

          if (!isOpen) {
            setIsOpen(true);
          }
        }
      } else if (v.x > 0) {
        if (Math.abs(v.x) < v.leftWidth / 2) {
          // no more than half way
          startTransform('translate3d(0,0,0)', 0);
          v.x = 0;

          if (isOpen) {
            setIsOpen(false);
          }
        } else {
          startTransform("translate3d(".concat(v.leftWidth, "px,0,0)"), v.leftWidth);

          if (!isOpen) {
            setIsOpen(true);
          }
        }
      }
    },
    onPressMove: function onPressMove(e) {
      var v = thisRef.current;
      v.x += e.deltaX; // x<0:swipe left & show right

      if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
        v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
      } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
        v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wrap",
    onClick: function onClick() {
      if (autoClose) {
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
    className: "center-part"
  }, children), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: function ref(_ref2) {
      return thisRef.current.rightEl = _ref2;
    },
    className: clsx__default['default']('right-part')
  }, right.map(function (item, idx) {
    return renderAction(item, idx);
  })))));
});
SwipeAction.displayName = 'UC-SwipeAction';

var _excluded$y = ["className", "style", "prefix", "value", "onChange", "suffix", "autoHeight", "textarea", "ime"];

var _templateObject$x;
var StyledInput = styled__default['default'].div(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 4px 12px;\n  font-size: 14px;\n  width: 100%;\n  background-color: #fff;\n  overflow: hidden;\n\n  &.pc {\n    background-image: none;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    transition: all 0.3s;\n    &:hover {\n      ", "\n    }\n  }\n  &.mobile {\n    border: none;\n    padding: 0 4px;\n    line-height: 24px;\n  }\n\n  .prefix {\n    margin-right: 8px;\n  }\n  .suffix {\n    margin-left: 8px;\n    color: #999;\n  }\n\n  input,\n  textarea {\n    flex: 1;\n    position: relative;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: #333;\n    line-height: inherit;\n    text-align: left;\n    background-color: transparent;\n    border: 0;\n    resize: none;\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-appearance: none;\n    box-shadow: none;\n    width: 100%;\n  }\n\n  textarea {\n    resize: none;\n    word-break: break-all;\n    word-wrap: break-word;\n    & + * {\n      align-self: flex-end;\n    }\n  }\n"])), border, getThemeColorCss('border-color'));
/** 单行/多行输入框 input/textarea */

var Input = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      prefix = props.prefix,
      value = props.value,
      _onChange = props.onChange,
      suffix = props.suffix,
      _props$autoHeight = props.autoHeight,
      autoHeight = _props$autoHeight === void 0 ? true : _props$autoHeight,
      textarea = props.textarea,
      ime = props.ime,
      rest = _objectWithoutProperties(props, _excluded$y);

  var inputRef = React.useRef();
  var isImeModeRef = React.useRef(false);

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      compositionValue = _useState2[0],
      setCompositionValue = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  React.useEffect(function () {
    if (textarea && autoHeight) {
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

  return /*#__PURE__*/React__default['default'].createElement(StyledInput, {
    style: style,
    className: clsx__default['default']('uc-input', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }, prefix && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('prefix')
  }, prefix), /*#__PURE__*/React__default['default'].createElement(textarea ? 'textarea' : 'input', _objectSpread2(_objectSpread2(_objectSpread2({}, rest), inputProps), {}, {
    ref: inputRef
  })), suffix && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('suffix')
  }, suffix));
});
Input.displayName = 'UC-Input';

var _excluded$z = ["className", "style", "header", "children", "footer", "position"];

var _templateObject$y;
var StyledDrawer = styled__default['default'](Popup)(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  position: relative;\n\n  .body {\n    flex: 1;\n  }\n"])));
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

var _excluded$A = ["okText", "cancelText", "title", "onClose", "visible", "onOk", "className", "value", "data", "cols"];

var _templateObject$z;
var StyledDrawer$1 = styled__default['default'](Drawer)(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    width: 100%;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n  .picker-wrap {\n    display: flex;\n    position: relative;\n    background-color: #fff;\n    height: 245px;\n    width: 100%;\n    touch-action: none;\n\n    .mask {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n        linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n      background-repeat: no-repeat;\n      background-position: top, bottom;\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      pointer-events: none;\n      background-size: 100% 105px;\n    }\n\n    .hairline {\n      position: absolute;\n      height: 35px;\n      width: 100%;\n      border: 1px solid #d8d8d8;\n      border-left: 0;\n      border-right: 0;\n      top: 105px;\n    }\n\n    .columnitem {\n      width: 0;\n      flex-grow: 1;\n      height: 100%;\n\n      .wheel {\n        display: flex;\n        position: relative;\n        text-align: center;\n        overflow-y: hidden;\n        height: 100%;\n\n        .wrapper {\n          transform: translate3d(0px, 105px, 0px);\n          transition-duration: 0.24s;\n          transition-property: transform;\n          transition-timing-function: ease-in-out;\n          .item {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 35px;\n            font-size: 18px;\n            color: #333;\n          }\n        }\n      }\n    }\n  }\n"])), getThemeColorCss('color'));
var itemHeight = 35;
var firstItemY = 105;
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

var Wheel = function Wheel(props) {
  var onChange = props.onChange,
      isUnLinked = props.isUnLinked,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$list = props.list,
      list = _props$list === void 0 ? [] : _props$list,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$valueIndex = props.valueIndex,
      valueIndex = _props$valueIndex === void 0 ? 0 : _props$valueIndex,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 1 : _props$cols;
  var elRef = React.useRef();
  var yRef = React.useRef(firstItemY);
  var scrollToIndex = React.useCallback(function (index) {
    if (elRef.current) {
      elRef.current.style.transitionProperty = 'transform';
      var y = firstItemY - itemHeight * index;
      yRef.current = y;
      setTimeout(function () {
        if (elRef.current) {
          elRef.current.style.transform = "translate3d(0,".concat(y, "px,0)");
        }
      });
    }
  }, [yRef]);
  var getIndexByY = React.useCallback(function () {
    var y = yRef.current;
    var d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef]);
  React.useEffect(function () {
    var i = data.findIndex(function (d) {
      return d.value === value[valueIndex];
    });
    scrollToIndex(i > -1 ? i : 0);
  }, [scrollToIndex, data, valueIndex, value]);

  var onTouchEnd = function onTouchEnd() {
    var _data$index;

    var min = -1 * (data.length - 1) * itemHeight + firstItemY;
    var max = firstItemY;
    var index;

    if (yRef.current >= max - itemHeight / 2) {
      index = 0;
    } else if (yRef.current <= min) {
      index = data.length - 1;
    } else {
      index = getIndexByY();
    }

    scrollToIndex(index);
    value[valueIndex] = (_data$index = data[index]) === null || _data$index === void 0 ? void 0 : _data$index.value;
    var vIndex = valueIndex + 1;

    while (vIndex <= cols - 1) {
      // next wheel refresh  & update value to next&first
      if (!isUnLinked) {
        var _list$index, _list$vIndex$;

        list[vIndex] = ((_list$index = list[vIndex - 1][index]) === null || _list$index === void 0 ? void 0 : _list$index.children) || [];
        value[vIndex] = ((_list$vIndex$ = list[vIndex][0]) === null || _list$vIndex$ === void 0 ? void 0 : _list$vIndex$.value) || '';
      }

      vIndex++;
    }

    var cv = _toConsumableArray(value);

    vIndex = valueIndex - 1;

    while (vIndex >= 0) {
      // prev wheel check
      if (typeof cv[vIndex] === 'undefined') {
        var _list$vIndex$2;

        // left not scrolled
        cv[vIndex] = ((_list$vIndex$2 = list[vIndex][0]) === null || _list$vIndex$2 === void 0 ? void 0 : _list$vIndex$2.value) || '';
      }

      vIndex--;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(cv);
  };

  return /*#__PURE__*/React__default['default'].createElement(FingerGestureElement, {
    ref: elRef,
    onTouchStart: function onTouchStart() {
      elRef.current.style.transitionProperty = 'none';
    },
    onTouchEnd: onTouchEnd,
    onPressMove: function onPressMove(e) {
      yRef.current += e.deltaY;
      elRef.current.style.transform = "translate3d(0,".concat(yRef.current, "px,0)");
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wrapper",
    style: {
      width: 100 / cols + '%',
      touchAction: 'none'
    }
  }, data.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "item",
      key: item.value
    }, item.label);
  })));
};
/** picker 选择器 */


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
      className = props.className,
      _props$value2 = props.value,
      value = _props$value2 === void 0 ? [] : _props$value2,
      _props$data2 = props.data,
      data = _props$data2 === void 0 ? [] : _props$data2,
      _props$cols2 = props.cols,
      cols = _props$cols2 === void 0 ? 1 : _props$cols2,
      rest = _objectWithoutProperties(props, _excluded$A); // 是否非级联


  var isUnLinked = (data === null || data === void 0 ? void 0 : data.length) > 0 && Array.isArray(data[0]);
  var list = React.useMemo(function () {
    return convertPickerData(data, cols, value);
  }, [data, cols, value]);

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

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
        if (list.length) {
          var cv = _toConsumableArray(val);

          var i = cols - 1;

          while (i >= 0) {
            if (typeof cv[i] === 'undefined') {
              var _list$i;

              cv[i] = ((_list$i = list[i][val[i] || 0]) === null || _list$i === void 0 ? void 0 : _list$i.value) || '';
            }

            i--;
          }

          onOk === null || onOk === void 0 ? void 0 : onOk(cv);
        } else {
          onOk === null || onOk === void 0 ? void 0 : onOk([]);
        }

        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }, okText))
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "picker-wrap",
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mask"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "hairline"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "columnitem"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wheel"
  }, list === null || list === void 0 ? void 0 : list.map(function (listItem, idx) {
    return /*#__PURE__*/React__default['default'].createElement(Wheel, {
      cols: cols,
      data: listItem,
      key: idx,
      value: val,
      valueIndex: idx,
      list: list,
      isUnLinked: isUnLinked,
      onChange: setVal
    });
  })))));
});
Picker.displayName = 'UC-Picker';

var _excluded$B = ["current", "dotStyle", "className", "direction", "steps"];

var _templateObject$A;
var StyledSteps = styled__default['default'].div(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .step {\n    .step-box {\n      position: relative;\n      &::after {\n        content: '';\n        position: absolute;\n        background-color: #909ca4;\n      }\n\n      .step-circle {\n        position: relative;\n        display: flex;\n        width: 25px;\n        height: 25px;\n        font-size: 13px;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        color: #909ca4;\n        border: 1px solid #909ca4;\n        border-radius: 50%;\n        background-color: #fff;\n        padding: 0;\n\n        &.dot {\n          width: 8px;\n          height: 8px;\n        }\n      }\n    }\n\n    &.finish {\n      .step-box {\n        &::after {\n          ", "\n        }\n      }\n      .step-circle {\n        ", "\n        ", "\n      }\n    }\n    &.current {\n      .step-circle {\n        color: #fff;\n        ", "\n        border:0;\n      }\n    }\n\n    &.finish,\n    &.current {\n      .step-title {\n        ", "\n      }\n      .step-circle {\n        &.dot {\n          ", "\n        }\n      }\n    }\n\n    &:last-child {\n      .step-box::after {\n        display: none;\n      }\n    }\n  }\n\n  &.horizontal {\n    display: flex;\n    justify-content: space-around;\n    padding: 8px 0;\n\n    .step {\n      flex: 1;\n\n      .step-box {\n        width: 100%;\n        height: 24px;\n        &::after {\n          left: 50%;\n          top: 50%;\n          height: 1px;\n          transform: translateY(-50%);\n          width: 100%;\n        }\n        .step-circle {\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n    }\n\n    .step-content {\n      text-align: center;\n      font-size: 14px;\n      padding-top: 12px;\n      color: #999;\n      .step-title {\n      }\n      .step-description {\n        margin-top: 2px;\n      }\n    }\n  }\n\n  &.vertical {\n    padding: 8px 16px;\n\n    .step {\n      display: flex;\n\n      .step-box {\n        flex: none;\n        width: 24px;\n        margin-right: 8px;\n\n        &::after {\n          left: 50%;\n          top: 13px;\n          width: 1px;\n          transform: translateX(-50%);\n          height: 100%;\n        }\n        .step-circle {\n          top: 13px;\n          left: 50%;\n          transform: translate(-50%, -50%);\n        }\n      }\n\n      &:last-child {\n        .step-content {\n          padding-bottom: 0;\n        }\n      }\n      .step-content {\n        flex: auto;\n        padding-bottom: 14px;\n        font-size: 14px;\n        color: #999;\n        .step-title {\n        }\n        .step-description {\n          margin-top: 10px;\n        }\n      }\n    }\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('background-color'));
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
      rest = _objectWithoutProperties(props, _excluded$B);

  return /*#__PURE__*/React__default['default'].createElement(StyledSteps, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, direction)
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
        dot: dotStyle
      })
    }, dotStyle ? null : item.icon ? item.icon : idx + 1)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-content"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-title"
    }, item.title), !!item.description && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-description"
    }, item.description)));
  }));
});
Steps.displayName = 'UC-Steps';

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
    var signaturePad = padRef.current = new SignaturePad__default['default'](canvas, options);

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

var _excluded$C = ["padColor", "penColor", "className"];

var _templateObject$B;
var StyledSignature = styled__default['default'].div(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["\n  position: relative;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n"])), border);
/** 签名 */

var Signature = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var padColor = props.padColor,
      penColor = props.penColor,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$C);

  var elRef = React.useRef();
  var canvasRef = React.useRef();

  var _useSigPad = App(canvasRef, {
    useLandscape: false,
    penColor: penColor,
    backgroundColor: padColor
  }),
      padRef = _useSigPad.padRef,
      _clear = _useSigPad.clear;

  React.useImperativeHandle(ref, function () {
    return {
      getData: function getData() {
        return padRef.current.toDataURL();
      },
      clear: function clear() {
        _clear();
      }
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

var _excluded$D = ["value", "defaultValue", "allowHalf", "readonly", "count", "char", "onChange", "className", "allowClear"];

var _templateObject$C;
var StyledRate = styled__default['default'].div(_templateObject$C || (_templateObject$C = _taggedTemplateLiteral(["\n  display: inline-flex;\n  .box {\n    position: relative;\n  }\n\n  .char {\n    padding: calc(24px / 8);\n    line-height: 24px;\n    font-size: 24px;\n    color: #ccc;\n    text-align: center;\n    overflow: hidden;\n    cursor: pointer;\n    &.half {\n      padding-right: 0;\n      width: 50%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n    &.active {\n      color: #ffd21e;\n    }\n    &.readonly {\n      cursor: unset;\n    }\n  }\n"])));
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
      rest = _objectWithoutProperties(props, _excluded$D);

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

var _excluded$E = ["list", "stayTime", "icon", "closeable", "className", "onClose", "extra"];

var _templateObject$D;
var StyledNoticeList = styled__default['default'].div(_templateObject$D || (_templateObject$D = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 0px 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n\n    .list {\n      height: 100%;\n      transition-property: transform;\n      transition-duration: 0.8s;\n      transition-timing-function: ease-in-out;\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));

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
      rest = _objectWithoutProperties(props, _excluded$E);

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
  }, data.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: item.text,
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

var _excluded$F = ["autoPlay", "loop", "onPageChange", "direction", "interval", "children", "className", "height", "style", "showDot", "ratio"];

var _templateObject$E;
var StyledSlide = styled__default['default'].div(_templateObject$E || (_templateObject$E = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n\n  .wrap {\n    position: relative;\n    display: flex;\n    flex-wrap: nowrap;\n    transition: transform ", "ms ease-in-out;\n    touch-action: none;\n\n    &.vertical {\n      flex-direction: column;\n    }\n\n    .uc-slide-page {\n      backface-visibility: hidden;\n      width: 100%;\n      flex-shrink: 0;\n    }\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertical {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"])), animationSlow);

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
      children = props.children,
      className = props.className,
      _props$height = props.height,
      height = _props$height === void 0 ? 160 : _props$height,
      style = props.style,
      _props$showDot = props.showDot,
      showDot = _props$showDot === void 0 ? true : _props$showDot,
      _props$ratio = props.ratio,
      ratio = _props$ratio === void 0 ? 0.1 : _props$ratio,
      rest = _objectWithoutProperties(props, _excluded$F);

  var containerRef = React.useRef();
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
    lastX: 0,
    y: 0,
    lastY: 0,
    wrapHeight: 0,
    wrapWidth: 0,
    inTransition: false
  });

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pageIndex = _useState4[0],
      setPageIndex = _useState4[1]; // !loop:0~len-1, loop: -1~len


  var exp = count > len; // expanded

  var slideToPageIndex = React.useCallback(function (newPageIndex) {
    var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var s = thisRef.current;
    wrapElRef.current.style.transitionProperty = transition ? 'transform' : 'none';

    if (direction === 'horizontal') {
      var x = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapWidth;
      wrapElRef.current.style.transform = "translate3d(".concat(x, "px, 0, 0)");
      s.x = x;
    } else {
      var y = (newPageIndex + (exp ? 1 : 0)) * -1 * s.wrapHeight;
      wrapElRef.current.style.transform = "translate3d(0, ".concat(y, "px, 0)");
      s.y = y;
    }

    s.inTransition = transition;
    setPageIndex(newPageIndex);
  }, [thisRef, direction, exp]);
  React.useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        return slideToPageIndex(pageIndex > 0 ? pageIndex - 1 : 0);
      },
      next: function next() {
        return slideToPageIndex(pageIndex < len - 1 ? pageIndex + 1 : len - 1);
      }
    };
  });
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
      if (pageIndex >= len) {
        slideToPageIndex(0, false);
      } else if (pageIndex === -1) {
        slideToPageIndex(len - 1, false);
      }

      var timer = window.setTimeout(function () {
        slideToPageIndex(pageIndex + 1);
      }, interval);
      return function () {
        window.clearTimeout(timer);
      };
    }
  }, [pageIndex, slideToPageIndex, autoPlay, interval, len]);

  var dotRender = function dotRender() {
    if (!showDot || len <= 1) return null;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('uc-slide-dot-wrapper', {
        vertical: direction === 'vertical'
      })
    }, React__default['default'].Children.map(children, function (c, idx) {
      return /*#__PURE__*/React__default['default'].createElement("span", {
        key: idx,
        className: clsx__default['default']('dot', {
          active: pageIndex === idx
        }),
        onClick: function onClick() {
          return slideToPageIndex(idx);
        }
      });
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledSlide, _extends({
    ref: containerRef
  }, rest, {
    className: clsx__default['default']('uc-slide', className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    })
  }), /*#__PURE__*/React__default['default'].createElement(FingerGestureElement, {
    ref: wrapElRef,
    onTouchStart: function onTouchStart() {
      var s = thisRef.current;
      wrapElRef.current.style.transitionProperty = 'none';
      s.lastX = s.x;
      s.lastY = s.y;
    },
    onTouchEnd: function onTouchEnd() {
      var s = thisRef.current;

      if (direction === 'horizontal' && Math.abs(s.x - s.lastX) > s.wrapWidth * ratio) {
        slideToPageIndex(pageIndex + (s.x < s.lastX ? 1 : -1));
      } else if (direction === 'vertical' && Math.abs(s.y - s.lastY) > s.wrapHeight * ratio) {
        slideToPageIndex(pageIndex + (s.y < s.lastY ? 1 : -1));
      } else {
        // reset
        slideToPageIndex(pageIndex);
      }
    },
    onPressMove: function onPressMove(e) {
      var s = thisRef.current;

      if (s.inTransition) {
        return setTimeout(function () {
          s.inTransition = false;
        }, 300);
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
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('wrap', {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      thisRef.current.inTransition = false; // loop

      if (pageIndex >= len) {
        slideToPageIndex(0, false);
      } else if (pageIndex === -1) {
        slideToPageIndex(len - 1, false);
      }
    }
  }, items)), dotRender());
});
Slide.displayName = 'UC-Slide';

var _excluded$G = ["children", "progress", "strokeLinecap", "strokeWidth", "size", "className", "style"];

var _templateObject$F;
var StyledProgressCircle = styled__default['default'].div(_templateObject$F || (_templateObject$F = _taggedTemplateLiteral(["\n  position: relative;\n  .content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])));
/** 环形进度条 */

var ProgressCircle = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$progress = props.progress,
      progress = _props$progress === void 0 ? 0 : _props$progress,
      _props$strokeLinecap = props.strokeLinecap,
      strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 10 : _props$strokeWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 120 : _props$size,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$G);

  var theme = styled.useTheme();
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
  }), progress > 0 ? /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: color,
    strokeDasharray: "".concat(progress * 314 / 100, ",314"),
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

var _templateObject$G;

var StyledWaterMark = styled__default['default'].div(_templateObject$G || (_templateObject$G = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  pointer-events: none;\n  background-repeat: repeat;\n"])));
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

var _excluded$H = ["content", "style", "className"],
    _excluded2$3 = ["duration"];

var _templateObject$H;
var transitionDuration$2 = animationNormal;
var StyledNotify = styled__default['default'].div(_templateObject$H || (_templateObject$H = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: ", "ms;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate(0, -100%);\n    opacity: 0;\n  }\n\n  &.to {\n    transform: none;\n    opacity: 1;\n  }\n\n  .content {\n    padding: 8px 12px;\n  }\n\n  &.pc {\n    top: 16px;\n    .content {\n      box-shadow: ", ";\n      background-color: #fff;\n      border-radius: 2px;\n    }\n  }\n\n  &.mobile {\n    .content {\n      ", ";\n      color: #fff;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"])), transitionDuration$2, boxShadow, getThemeColorCss('background-color'));
var allNotifies = [];
/** 顶部全局消息通知 */

var Notify = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      style = props.style,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$H);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useLayoutEffect(function () {
    if (elRef.current) {
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
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, isMobile && /*#__PURE__*/React__default['default'].createElement(Mask, {
    style: {
      background: 'transparent'
    }
  }), /*#__PURE__*/React__default['default'].createElement(StyledNotify, _extends({}, rest, {
    ref: elRef,
    className: clsx__default['default']('uc-notify', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content'),
    style: style
  }, content)));
});
/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */

Notify.show = function (props) {
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
  }, _duration);
};

Notify.displayName = 'UC-Notify';

var _excluded$I = ["children", "className", "content", "badgeStyle"];

var _templateObject$I;
var StyledBadge = styled__default['default'].div(_templateObject$I || (_templateObject$I = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n\n  .badge {\n    display: inline-block;\n    color: #fff;\n    text-align: center;\n    vertical-align: middle;\n    box-sizing: border-box;\n    border-radius: 100px;\n    padding: 2px 4px;\n    font-size: 9px;\n    line-height: 1.2;\n    white-space: nowrap;\n    position: absolute;\n    z-index: 1;\n    transform: translate(50%, -50%);\n    top: 0;\n    right: 0;\n    ", "\n\n    &.dot {\n      padding: 0;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n    }\n    &.without-children {\n      position: static;\n      transform: none;\n    }\n  }\n"])), getThemeColorCss('background-color'));
/** 徽标:右上角添加标记 */

var Badge = function Badge(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      badgeStyle = props.badgeStyle,
      rest = _objectWithoutProperties(props, _excluded$I);

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

var _excluded$J = ["size", "className", "shape", "style", "children"];

var _templateObject$J;
var StyledAvatar = styled__default['default'].div(_templateObject$J || (_templateObject$J = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  display: inline-flex;\n  overflow: hidden;\n  color: #666;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center;\n  background: #ccc;\n\n  &.circle {\n    border-radius: 50%;\n  }\n  &.square {\n    border-radius: 2px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n"])));
/** 头像 */

var Avatar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      className = props.className,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$J);

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

var _excluded$K = ["className", "visible", "maskStyle", "onClose", "images", "onIndexChange"];

var _templateObject$K;
var StyledImageViewer = styled__default['default'].div(_templateObject$K || (_templateObject$K = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n\n  .text {\n    z-index: 1100;\n    position: absolute;\n    left: 50%;\n    top: 12px;\n    transform: translateX(-50%);\n    color: #e6e6e6;\n    font-size: 18px;\n  }\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n  .slide-page {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 70vh;\n    width: 100vw;\n\n    img {\n      object-position: center;\n      max-width: 100%;\n      touch-action: none;\n    }\n  }\n"])));
/** 图片查看器 */

var ImageViewer = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      maskStyle = props.maskStyle,
      onClose = props.onClose,
      images = props.images,
      onIndexChange = props.onIndexChange,
      rest = _objectWithoutProperties(props, _excluded$K);

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
      showDot: false,
      style: {
        zIndex: 101,
        width: '100%'
      },
      direction: "horizontal",
      height: "60vh",
      onPageChange: function onPageChange(index) {
        var _onIndexChangeRef$cur;

        setIndex(index);
        (_onIndexChangeRef$cur = onIndexChangeRef.current) === null || _onIndexChangeRef$cur === void 0 ? void 0 : _onIndexChangeRef$cur.call(onIndexChangeRef, index);
      },
      loop: false,
      autoPlay: false,
      ratio: 0.1
    }, urls.map(function (url) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "slide-page",
        key: url
      }, /*#__PURE__*/React__default['default'].createElement("img", {
        src: url
      }));
    }));
  }, [urls, onIndexChangeRef, slideRef]);

  var textRender = function textRender() {
    if (urls.length > 1) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx__default['default']('text')
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
  }), /*#__PURE__*/React__default['default'].createElement(Mask, {
    style: maskStyle,
    onClick: onClose
  }), textRender(), slides);
});
ImageViewer.displayName = 'UC-ImageViewer';

var _excluded$L = ["closable", "visible", "onClose", "className", "header", "children", "footer"];

var _templateObject$L;
var StyledModal = styled__default['default'](Popup)(_templateObject$L || (_templateObject$L = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-width: 30px;\n  background-color: #fff;\n  padding: 32px 32px 24px;\n  position: relative;\n  border-radius: 8px;\n  box-shadow: ", ";\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n    transition: color 0.3s ease;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .body {\n    flex: 1;\n  }\n"])), boxShadow);
/** 对话框,基于Popup */

var Modal = function Modal(props) {
  var closable = props.closable,
      visible = props.visible,
      onClose = props.onClose,
      className = props.className,
      header = props.header,
      children = props.children,
      footer = props.footer,
      rest = _objectWithoutProperties(props, _excluded$L);

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

var _excluded$M = ["content", "trigger", "placement", "arrow", "offset", "className", "closeOnClick", "hoverDelay", "closeOnClickOutside", "children"];

var _templateObject$M;
var StyledPopover$1 = styled__default['default'](Popover)(_templateObject$M || (_templateObject$M = _taggedTemplateLiteral(["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"])), boxShadow);

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
      popoverRest = _objectWithoutProperties(props, _excluded$M);

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
      active: visible
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

var _excluded$N = ["placement", "icon", "className", "children", "title", "okText", "okButtonProps", "cancelButtonProps", "cancelText", "arrow", "onOk", "closeOnClick", "onCancel"];

var _templateObject$N;
var StyledMenu = styled__default['default'](PopMenu)(_templateObject$N || (_templateObject$N = _taggedTemplateLiteral(["\n  padding: 16px;\n\n  .popconfirm-content {\n    min-width: 120px;\n    .title {\n      display: flex;\n      color: #1a1a1a;\n      font-size: 14px;\n      align-items: center;\n      .pop-icon {\n        margin-right: 8px;\n        font-size: 20px;\n        color: #fab20a;\n      }\n    }\n\n    .ops {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 24px;\n\n      button {\n        height: 28px;\n        &:first-child {\n          margin-right: 12px;\n        }\n      }\n    }\n  }\n"])));

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
      popomenuRest = _objectWithoutProperties(props, _excluded$N);

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

Object.keys(reactTransitionGroup).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return reactTransitionGroup[k];
    }
  });
});
Object.defineProperty(exports, 'clsx', {
  enumerable: true,
  get: function () {
    return clsx__default['default'];
  }
});
Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () {
    return styled__default['default'];
  }
});
exports.ActionSheet = ActionSheet;
exports.Affix = Affix;
exports.AlertDialog = AlertDialog;
exports.AnimationElement = AnimationElement;
exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Button = Button;
exports.Cell = Cell;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.CopyToClipboard = CopyToClipboard;
exports.Divider = Divider;
exports.Drag = Drag;
exports.Drawer = Drawer;
exports.ErrorBoundary = ErrorBoundary;
exports.FileInputTrigger = FileInputTrigger;
exports.FingerGestureElement = FingerGestureElement;
exports.HairLineBox = HairLineBox;
exports.Icon = Icon;
exports.IconArrow = IconArrow;
exports.ImageViewer = ImageViewer;
exports.IndexList = IndexList;
exports.Input = Input;
exports.LazyLoadElement = LazyLoadElement;
exports.LazyLoadImage = LazyLoadImage;
exports.Mask = Mask;
exports.Modal = Modal;
exports.NoticeBar = NoticeBar;
exports.NoticeList = NoticeList;
exports.Notify = Notify;
exports.NumberKeyboard = NumberKeyboard;
exports.NumberKeyboardBase = NumberKeyboardBase;
exports.PasswordInput = PasswordInput;
exports.Picker = Picker;
exports.PopConfirm = PopConfirm;
exports.PopMenu = PopMenu;
exports.Popover = Popover;
exports.Popup = Popup;
exports.ProgressCircle = ProgressCircle;
exports.Pullup = Pullup;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Rate = Rate;
exports.ScrollTop = ScrollTop;
exports.Signature = Signature;
exports.Skeleton = Skeleton;
exports.SkeletonBase = SkeletonBase;
exports.Slide = Slide;
exports.Space = Space;
exports.Spinner = Spinner;
exports.Steps = Steps;
exports.SwipeAction = SwipeAction;
exports.Switch = Switch;
exports.Tabs = Tabs;
exports.Text = Text;
exports.ThemeProvider = ThemeProvider;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.TransitionElement = TransitionElement;
exports.WaitLoading = WaitLoading;
exports.WaterMark = WaterMark;
exports.Waypoint = Waypoint;
exports.debounce = debounce;
exports.isBrowser = isBrowser;
exports.isMobile = isMobile;
exports.loadResource = loadResource;
exports.observe = observe;
exports.throttle = throttle;
exports.unobserve = unobserve;
exports.useCallbackRef = useCallbackRef;
exports.useCountdown = useCountdown;
exports.useDebounce = useDebounce;
exports.useInViewport = useInViewport;
exports.useThrottle = useThrottle;
exports.useUpdateEffect = useUpdateEffect;
exports.useUpdateLayoutEffect = useUpdateLayoutEffect;
