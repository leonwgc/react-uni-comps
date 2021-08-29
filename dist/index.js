'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactTransitionGroup = require('react-transition-group');
var useInViewport = require('react-use-lib/es/useInViewport');
var useUpdateEffect = require('react-use-lib/es/useUpdateEffect');
var styled = require('styled-components');
var clsx = require('clsx');
var reactIs = require('react-is');
var usePrevious = require('react-use-lib/es/usePrevious');
var Color = require('color');
var BScroll = require('@better-scroll/core');
var SlidePlugin = require('@better-scroll/slide');
var copy = require('copy-text-to-clipboard');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var useInViewport__default = /*#__PURE__*/_interopDefaultLegacy(useInViewport);
var useUpdateEffect__default = /*#__PURE__*/_interopDefaultLegacy(useUpdateEffect);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var usePrevious__default = /*#__PURE__*/_interopDefaultLegacy(usePrevious);
var Color__default = /*#__PURE__*/_interopDefaultLegacy(Color);
var BScroll__default = /*#__PURE__*/_interopDefaultLegacy(BScroll);
var SlidePlugin__default = /*#__PURE__*/_interopDefaultLegacy(SlidePlugin);
var copy__default = /*#__PURE__*/_interopDefaultLegacy(copy);

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

var getClassName = function getClassName(state, c) {
  var fromClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'from';
  var toClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'to';

  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return c ? fromClass : toClass; //exited
  }
};
/** 子元素执行从from到to类名过渡(过渡时间由duration定义),给子元素定义transition应用过渡 */


var TransitionElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 240 : _props$duration,
      _props$once = props.once,
      once = _props$once === void 0 ? true : _props$once,
      _props$fromClass = props.fromClass,
      fromClass = _props$fromClass === void 0 ? 'from' : _props$fromClass,
      _props$toClass = props.toClass,
      toClass = _props$toClass === void 0 ? 'to' : _props$toClass;
  var childrenRef = React.useRef();
  var ls = React.useRef(true);
  var isInViewport = useInViewport__default['default'](childrenRef);

  var _ref = (children === null || children === void 0 ? void 0 : children.props) || {},
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  React.useImperativeHandle(ref, function () {
    return childrenRef.current;
  });

  var newStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    //  transition: `${transitionProp} ${duration}ms ${timingFunc} ${delay}ms`,
    transitionDuration: duration + 'ms'
  });

  useUpdateEffect__default['default'](function () {
    ls.current = !once;
  }, [isInViewport, once]);
  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement can have only one children');
  }

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
      "in": isInViewport && ls.current,
      appear: true,
      timeout: duration
    }, function (state) {
      return /*#__PURE__*/React__default['default'].cloneElement(children, {
        ref: childrenRef,
        className: "".concat(className, " ").concat(getClassName(state, ls.current, fromClass, toClass)),
        style: newStyle
      });
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('TransitionElement:children must be ReactElement');
    }

    return children;
  }
});
TransitionElement.displayName = 'UC-TransitionElement';

var _excluded = ["children", "hideOverflow"];

var _templateObject;
var StyledBackdrop = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  transition: opacity 0.1s linear;\n\n  &.from {\n    opacity: 0.4;\n  }\n  &.to {\n    opacity: 0.55;\n  }\n"])));

/** 遮罩层 */
var Backdrop = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$hideOverflow = props.hideOverflow,
      hideOverflow = _props$hideOverflow === void 0 ? true : _props$hideOverflow,
      rest = _objectWithoutProperties(props, _excluded);

  var lastBodyFlow = React.useRef('');
  React.useEffect(function () {
    lastBodyFlow.current = document.body.style.overflow;
    return function () {
      document.body.style.overflow = lastBodyFlow.current;
    };
  }, []);
  React.useEffect(function () {
    if (hideOverflow) {
      document.body.style.overflow = hideOverflow ? 'hidden' : lastBodyFlow.current;
    }
  }, [hideOverflow]);
  return /*#__PURE__*/React__default['default'].createElement(TransitionElement, null, /*#__PURE__*/React__default['default'].createElement(StyledBackdrop, _extends({
    className: "uc-backdrop",
    ref: ref
  }, rest), children));
});
Backdrop.displayName = 'UC-Backdrop';

var _templateObject$1;
var StyledWrapper = styled__default['default'].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 200;\n  transition: transform ", "ms ease;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transition: none;\n  }\n\n  @keyframes showUp {\n    from {\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0.9);\n    }\n    90% {\n      opacity: 0.9;\n      transform: translate(-50%, -50%) scale(1.01);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n  }\n  &.center-entering,\n  &.center-entered {\n    display: '';\n    animation: showUp ease ", "ms forwards;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    display: none;\n  }\n\n  &.no-trasition {\n    animation: none;\n    transition: none;\n  }\n"])), function (props) {
  return props.duration;
}, function (props) {
  return props.duration;
});

/** 弹框，可以从上，下，左，右，中间弹出 */
var Popup = function Popup(props) {
  var children = props.children,
      visible = props.visible,
      _props$backdrop = props.backdrop,
      backdrop = _props$backdrop === void 0 ? true : _props$backdrop,
      backdropStyle = props.backdropStyle,
      onBackdropClick = props.onBackdropClick,
      _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 280 : _props$duration,
      _props$mountContainer = props.mountContainer,
      mountContainer = _props$mountContainer === void 0 ? function () {
    return document.body;
  } : _props$mountContainer,
      style = props.style,
      className = props.className;
  var wrapRef = React.useRef();
  return /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, backdrop && visible ? /*#__PURE__*/React__default['default'].createElement(Backdrop, {
    style: backdropStyle,
    onClick: onBackdropClick
  }) : null, /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    "in": visible,
    timeout: duration
  }, function (status) {
    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(StyledWrapper, {
      ref: wrapRef,
      duration: duration,
      style: style,
      className: clsx__default['default']('uc-popup', className, position, status, position + '-' + status)
    }, children));
  })), mountContainer());
};

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

var flexGapSupported;
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
var isBrowser = !!(typeof window !== 'undefined' && window);
var isMobile = function isMobile() {
  return isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);
};

var _excluded$1 = ["size", "align", "className", "children", "direction", "split", "style", "wrap"];

var _templateObject$2;

//#endregion
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
    className: className,
    style: _objectSpread2(_objectSpread2({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/React.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes));
};

/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
var AnimationElement = function AnimationElement(_ref) {
  var children = _ref.children,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? '1s' : _ref$duration,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'none' : _ref$name,
      _ref$timingFunc = _ref.timingFunc,
      timingFunc = _ref$timingFunc === void 0 ? 'ease' : _ref$timingFunc,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? '0s' : _ref$delay,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'normal' : _ref$direction,
      _ref$iterationCount = _ref.iterationCount,
      iterationCount = _ref$iterationCount === void 0 ? 1 : _ref$iterationCount,
      _ref$fillMode = _ref.fillMode,
      fillMode = _ref$fillMode === void 0 ? 'backwards' : _ref$fillMode,
      _ref$once = _ref.once,
      once = _ref$once === void 0 ? true : _ref$once;
  var ref = React.useRef();
  var vRef = React.useRef();
  var isInViewport = useInViewport__default['default'](ref);

  var _ref2 = (children === null || children === void 0 ? void 0 : children.props) || {},
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;

  var newStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    animation: "".concat(duration, " ").concat(timingFunc, " ").concat(delay, " ").concat(iterationCount, " ").concat(direction, " ").concat(fillMode, " running ").concat(name)
  });

  React.useEffect(function () {
    if (ref.current) {
      var dom = ref.current;
      dom.addEventListener('animationend', function () {
        dom.style.animationName = 'none';
      });
      dom.addEventListener('webkitAnimationEnd', function () {
        dom.style.webkitAnimationName = 'none';
      });
    }
  }, []);
  React.useEffect(function () {
    if (ref.current) {
      var dom = ref.current;

      if (!vRef.current && isInViewport && !once) {
        dom.style.webkitAnimationName = name;
        dom.style.animationName = name;
      }

      vRef.current = isInViewport;
    }
  }, [isInViewport, name, once]);
  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement can have only one ReactElement children');
  }

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].cloneElement(children, {
      ref: ref,
      style: newStyle
    });
  } else {
    return children;
  }
};

var _excluded$2 = ["width", "height", "children"],
    _excluded2 = ["style"];

/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
var LazyLoadElement = function LazyLoadElement(_ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$2);

  var ref = React.useRef();
  var isInViewport = useInViewport__default['default'](ref);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  React.useEffect(function () {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);

  var style = props.style,
      otherProps = _objectWithoutProperties(props, _excluded2);

  var newStyle = !ready ? _objectSpread2({
    display: 'inline-block',
    width: width,
    height: height
  }, style) : style;
  return !ready ? /*#__PURE__*/React__default['default'].createElement("span", _extends({
    ref: ref,
    style: newStyle
  }, otherProps)) : React__default['default'].Children.only(children);
};

var _excluded$3 = ["width", "height", "src"],
    _excluded2$1 = ["style"];

/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
var LazyLoadImage = function LazyLoadImage(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var ref = React.useRef();
  var isInViewport = useInViewport__default['default'](ref);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1];

  React.useEffect(function () {
    if (isInViewport && !ready) {
      setReady(true);
    }
  }, [isInViewport, ready]);

  var style = props.style,
      otherProps = _objectWithoutProperties(props, _excluded2$1);

  var newStyle = !ready || !loaded ? _objectSpread2({
    display: 'inline-block',
    filter: "blur(2px)",
    width: width,
    height: height
  }, style) : style;

  var onImageLoaded = function onImageLoaded() {
    setLoaded(true);
  };

  return !ready ? /*#__PURE__*/React__default['default'].createElement("span", _extends({
    ref: ref,
    style: newStyle
  }, otherProps)) : /*#__PURE__*/React__default['default'].createElement("img", _extends({
    ref: ref,
    onLoad: onImageLoaded,
    width: width,
    height: height,
    src: src,
    style: newStyle
  }, otherProps));
};

var border = '#e0e0e0';
var disabledText = 'rgba(0, 0, 0, 0.25)'; // text

var disabledBg = '#f5f5f5';
var primary = '#004bcc';
var danger = '#ff4d4f';

/**
 *  获得主题色,主题色优先,没有配置，则取colors定义的主题色
 *
 * @export
 * @param {string} fallbackColor
 * @return {*}  {string}
 */

function useThemeColor() {
  var fallbackColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : primary;
  var theme = React.useContext(styled.ThemeContext);
  var color = fallbackColor;

  if (typeof (theme === null || theme === void 0 ? void 0 : theme.color) === 'string') {
    color = theme.color;
  }

  return color;
}

var _templateObject$3;
var StyledLoading = styled__default['default'].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  @-webkit-keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n  @keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n\n  font-size: ", "px;\n  display: inline-flex;\n  position: relative;\n  width: 1em;\n  height: 1em;\n  vertical-align: middle;\n  color: ", ";\n  animation: loading 1s steps(60, end) infinite;\n  :before,\n  :after {\n    content: '';\n    display: block;\n    width: 0.5em;\n    height: 1em;\n    box-sizing: border-box;\n    border: 0.125em solid;\n    border-color: currentColor;\n  }\n  :before {\n    border-right-width: 0;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n    mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n  :after {\n    border-left-width: 0;\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.color;
});
/** Spinner 加载中 */

var Spinner = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      color = _ref.color;

  var _color = useThemeColor();

  return /*#__PURE__*/React__default['default'].createElement(StyledLoading, {
    ref: ref,
    size: size,
    color: color || _color
  });
});
Spinner.displayName = 'UC-Spinner';

var _excluded$4 = ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "finished", "className", "useWindowScroll"];

var _templateObject$4;
var StyledPullupContainer = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  &.div-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  > .uc-pullup-footer {\n    padding: 10px 0;\n    display: flex;\n    color: #909090;\n    font-size: 14px;\n    justify-content: center;\n    align-items: center;\n  }\n"]))); // check isInViewport in vertical direction

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
var Pullup = function Pullup(props) {
  var _props$dataList = props.dataList,
      dataList = _props$dataList === void 0 ? [] : _props$dataList,
      _props$dataRender = props.dataRender,
      dataRender = _props$dataRender === void 0 ? function () {
    return null;
  } : _props$dataRender,
      fetchData = props.fetchData,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Spinner, {
    color: "#909090"
  }), "\u52A0\u8F7D\u4E2D") : _props$loadingText,
      _props$finishedText = props.finishedText,
      finishedText = _props$finishedText === void 0 ? '我是有底线的' : _props$finishedText,
      _props$finished = props.finished,
      finished = _props$finished === void 0 ? false : _props$finished,
      className = props.className,
      _props$useWindowScrol = props.useWindowScroll,
      useWindowScroll = _props$useWindowScrol === void 0 ? true : _props$useWindowScrol,
      restProps = _objectWithoutProperties(props, _excluded$4);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var ref = React.useRef();
  var wrapRef = React.useRef();
  var isAtBottom = useInViewport__default['default'](ref, useWindowScroll ? null : wrapRef);
  var lastIsAtBottom = usePrevious__default['default'](isAtBottom);
  React.useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(ref.current, useWindowScroll ? null : wrapRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      })["catch"](function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);
  return /*#__PURE__*/React__default['default'].createElement(StyledPullupContainer, _extends({
    className: clsx__default['default']('uc-pullup-container', className, {
      'div-scroll': !useWindowScroll
    }),
    ref: wrapRef
  }, restProps), /*#__PURE__*/React__default['default'].createElement("div", {
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
    ref: ref
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-pullup-footer"
  }, loading ? loadingText : finished ? finishedText : null));
};

var _excluded$5 = ["position", "color"];

var _templateObject$5;
/** 显示1px的边 */

var StyledDiv = styled__default['default'].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    ", ": 1px solid ", ";\n\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n      width: 200%;\n      height: 200%;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n    }\n  }\n"])), function (_ref) {
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
      rest = _objectWithoutProperties(props, _excluded$5);

  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, _extends({
    ref: ref,
    position: position,
    color: color
  }, rest));
});
HairLineBox.displayName = 'UC-HairLineBox';

/**  等待wait毫秒如果visible是true才渲染子元素,包裹spinner可以防止spinner闪烁 */
var WaitLoading = function WaitLoading(_ref) {
  var _ref$wait = _ref.wait,
      wait = _ref$wait === void 0 ? 600 : _ref$wait,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children;

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
  return show ? React__default['default'].Children.only(children) : null;
};

var _excluded$6 = ["children", "underlineWidth", "defaultIndex", "underline", "border", "onIndexChange", "className"];

var _templateObject$6, _templateObject2, _templateObject3;
var StyledTabHeaderWrap = styled__default['default'].div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 44px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: scroll;\n  border-bottom: 1px solid ", ";\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  &.no-border {\n    border-bottom: none;\n  }\n"])), border);
var StyledTabHeadItem = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 56px;\n  user-select: none;\n  /* transition: all 0.3s ease-in-out; */\n\n  &.active {\n    color: ", ";\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    &.uc-tabs-header-line {\n      position: relative;\n      background-color: transparent !important;\n      transition: transform 0.3s ease;\n      transform: translate3d(", ", 0px, 0px);\n\n      &::after {\n        content: ' ';\n        position: absolute;\n        bottom: 0;\n        width: ", ";\n        height: 2px;\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.color;
}, disabledText, function (props) {
  return (props.activeIndex - props.count) * 100 + '%';
}, function (props) {
  return props.underlineWidth;
}, function (props) {
  return props.theme.color;
});
var StyledTabContentWrap = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  overflow: hidden;\n"])));
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

var isValidtTabElement = function isValidtTabElement(el) {
  return /*#__PURE__*/React__default['default'].isValidElement(el) && el.type === Tab;
};
/**
 * 选项卡切换
 *
 * @param {*} {
 *   children,
 *   color = colors.primary,
 *   underlineWidth = '100%',
 *   defaultIndex = 0,
 *   underline = true,
 *   onIndexChange,
 *   className,
 *   ...otherProps
 * }
 * @return {*}
 */


var Tabs = function Tabs(_ref2) {
  var children = _ref2.children,
      _ref2$underlineWidth = _ref2.underlineWidth,
      underlineWidth = _ref2$underlineWidth === void 0 ? '100%' : _ref2$underlineWidth,
      _ref2$defaultIndex = _ref2.defaultIndex,
      defaultIndex = _ref2$defaultIndex === void 0 ? 0 : _ref2$defaultIndex,
      _ref2$underline = _ref2.underline,
      underline = _ref2$underline === void 0 ? true : _ref2$underline,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? true : _ref2$border,
      onIndexChange = _ref2.onIndexChange,
      className = _ref2.className,
      otherProps = _objectWithoutProperties(_ref2, _excluded$6);

  var _useState = React.useState(defaultIndex),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var count = React__default['default'].Children.count(children);
  var color = useThemeColor();
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: {
      color: color
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends({}, otherProps, {
    className: clsx__default['default']('uc-tabs', className)
  }), /*#__PURE__*/React__default['default'].createElement(StyledTabHeaderWrap, {
    className: clsx__default['default']('uc-tabs-header-wrap', {
      'no-border': !border
    })
  }, React__default['default'].Children.map(children, function (child, index) {
    if (isValidtTabElement(child)) {
      var _ref3 = child.props,
          _ref3$title = _ref3.title,
          title = _ref3$title === void 0 ? '' : _ref3$title,
          disabled = _ref3.disabled;
      return /*#__PURE__*/React__default['default'].createElement(StyledTabHeadItem, {
        key: index,
        className: clsx__default['default']('uc-tabs-header-item', {
          active: index === activeIndex,
          disabled: disabled
        }),
        onClick: function onClick() {
          if (!disabled && index !== activeIndex) {
            setActiveIndex(index);

            if (typeof onIndexChange === 'function') {
              onIndexChange(index);
            }
          }
        }
      }, title);
    }
  }), underline ? /*#__PURE__*/React__default['default'].createElement(StyledTabHeadItem, {
    className: clsx__default['default']('uc-tabs-header-item', 'uc-tabs-header-line'),
    count: count,
    underlineWidth: underlineWidth,
    activeIndex: activeIndex
  }) : null), /*#__PURE__*/React__default['default'].createElement(StyledTabContentWrap, {
    className: "uc-tabs-content-wrap"
  }, React__default['default'].Children.map(children, function (child, index) {
    if (isValidtTabElement(child)) {
      var _ref4 = child.props,
          _children = _ref4.children;
      var style = {};

      if (index !== activeIndex) {
        style.display = 'none';
      }

      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: index,
        style: style
      }, _children);
    } else {
      throw new Error('Tabs can only contain Tab element');
    }
  }))));
};
/** Tab直接子元素 */


Tabs.Tab = Tab;

var _excluded$7 = ["label", "content", "lineColor", "children"];

var _templateObject$7;
var StyledCell = styled__default['default'].div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 16px;\n  overflow: hidden;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n\n  .uc-cell-title {\n    box-sizing: border-box;\n    margin-right: 12px;\n    text-align: left;\n    word-wrap: break-word;\n\n    &.not-edit-mode {\n      width: auto;\n      flex: 1;\n    }\n  }\n  .uc-cell-value {\n    flex: 1;\n    position: relative;\n    overflow: visible;\n    color: #969799;\n    text-align: right;\n    vertical-align: middle;\n    word-wrap: break-word;\n\n    .uc-field-body {\n      display: flex;\n      align-items: center;\n\n      > input,\n      textarea {\n        display: block;\n        box-sizing: border-box;\n        flex: 1;\n        width: 100%;\n        min-width: 0;\n        margin: 0;\n        padding: 0;\n        color: #323233;\n        line-height: inherit;\n        text-align: left;\n        background-color: transparent;\n        border: 0;\n        resize: none;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-appearance: none;\n        box-shadow: none;\n        padding-right: 4px;\n      }\n      > textarea {\n        resize: none;\n        word-break: break-all;\n        word-wrap: break-word;\n\n        & + * {\n          align-self: flex-end;\n        }\n      }\n    }\n  }\n"])));
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var label = props.label,
      content = props.content,
      _props$lineColor = props.lineColor,
      lineColor = _props$lineColor === void 0 ? '#dcdcdc' : _props$lineColor,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$7);

  if (content && children) {
    throw new Error("don't set content and children at the same time");
  }

  var titleClsx = clsx__default['default']('uc-cell-title', {
    'not-edit-mode': content
  });
  return /*#__PURE__*/React__default['default'].createElement(HairLineBox, {
    color: lineColor
  }, /*#__PURE__*/React__default['default'].createElement(StyledCell, _extends({
    ref: ref,
    className: "uc-cell"
  }, rest), /*#__PURE__*/React__default['default'].createElement("div", {
    className: titleClsx
  }, label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-cell-value"
  }, content, children ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-field-body"
  }, children) : null)));
});
Cell.displayName = 'UC-Cell';

var _excluded$8 = ["animate", "width", "height", "shape"],
    _excluded2$2 = ["style", "className"];

var _templateObject$8;
var StyledSkeletonBase = styled__default['default'].div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"])));
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$animate = props.animate,
      animate = _props$animate === void 0 ? true : _props$animate,
      width = props.width,
      _props$height = props.height,
      height = _props$height === void 0 ? 16 : _props$height,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'rect' : _props$shape,
      other = _objectWithoutProperties(props, _excluded$8);

  var _other$style = other.style,
      style = _other$style === void 0 ? {} : _other$style,
      _other$className = other.className,
      className = _other$className === void 0 ? '' : _other$className,
      rest = _objectWithoutProperties(other, _excluded2$2);

  return /*#__PURE__*/React__default['default'].createElement(StyledSkeletonBase, _extends({
    ref: ref,
    className: clsx__default['default']('uc-skeleton', shape, {
      pulse: animate
    }, className),
    style: _objectSpread2({
      width: width,
      height: height
    }, style)
  }, rest));
});
SkeletonBase.displayName = 'UC-SkeletonBase';

var _excluded$9 = ["animate", "row", "rowWidth", "rowHeight", "avatar", "avatarSize", "children", "loading"],
    _excluded2$3 = ["className"];

var _templateObject$9;

var StyledSkeleton = styled__default['default'].div(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  .uc-skeleton {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n\n    &:nth-child(2) {\n      margin-top: 20px;\n    }\n  }\n\n  &.avatar {\n    display: flex;\n\n    > .avatar {\n      flex: none;\n    }\n\n    > .rows {\n      flex: 1;\n      margin-left: 16px;\n      padding-top: 8px;\n    }\n  }\n"])));
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
      other = _objectWithoutProperties(props, _excluded$9);

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
      rest = _objectWithoutProperties(other, _excluded2$3);

  return loading ? avatar ? /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({
    className: clsx__default['default']({
      avatar: avatar
    }, className)
  }, rest), /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
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
  }))) : /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({
    style: {
      display: 'block'
    },
    className: clsx__default['default']({
      avatar: avatar
    }, className)
  }, rest), rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React__default['default'].createElement(SkeletonBase, {
      animate: animate,
      key: idx,
      shape: "rect",
      width: v,
      height: rowHeight
    });
  })) : children;
};

var _excluded$a = ["color", "size"];

var _templateObject$a;
var StyledTick = styled__default['default'].div(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n"])), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
});
/** 勾勾 */

var IconTick = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$a);

  return /*#__PURE__*/React__default['default'].createElement(StyledTick, _extends({
    className: clsx__default['default']('uc-icon-tick'),
    ref: ref,
    size: size
  }, rest), /*#__PURE__*/React__default['default'].createElement("svg", {
    width: size,
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M10.113 1.273a1.085 1.085 0 011.526-.082c.433.386.481 1.041.118 1.485l-.035.04-7.245 8.01a1.083 1.083 0 01-1.474.126l-.047-.039-2.59-2.277A1.076 1.076 0 01.274 7.01a1.085 1.085 0 011.483-.126l.042.035 1.786 1.57 6.528-7.216z",
    fill: color
  })));
});
IconTick.displayName = 'UC-IconTick';

var _templateObject$b, _templateObject2$1;
var StyledCheckboxWrapper = styled__default['default'].div(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), disabledText);
var StyledCheckbox = styled__default['default'].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &.checked {\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n    opacity: 0.4;\n  }\n"])), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, border, function (_ref3) {
  var borderRadius = _ref3.borderRadius;
  return borderRadius;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, function (_ref5) {
  var color = _ref5.color;
  return color;
}, function (_ref6) {
  var color = _ref6.color;
  return color;
}, disabledBg, border);
/** Checkbox, Radiobox带checked状态的 */

var Checkbox = function Checkbox(props) {
  var color = props.color,
      _props$size = props.size,
      size = _props$size === void 0 ? 18 : _props$size,
      _props$borderRadius = props.borderRadius,
      borderRadius = _props$borderRadius === void 0 ? '2px' : _props$borderRadius,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children;

  var _color = useThemeColor();

  var _useState = React.useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _checked = _useState2[0],
      _setChecked = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(StyledCheckboxWrapper, {
    className: clsx__default['default']('uc-checkbox', {
      disabled: disabled
    }),
    onClick: function onClick() {
      if (disabled) return;

      if (typeof onChange === 'function') {
        onChange(!_checked);
      }

      _setChecked(!_checked);
    }
  }, /*#__PURE__*/React__default['default'].createElement(StyledCheckbox, {
    className: clsx__default['default']({
      checked: _checked,
      disabled: disabled
    }),
    borderRadius: borderRadius,
    size: size,
    disabled: disabled,
    color: color || _color
  }, /*#__PURE__*/React__default['default'].createElement(IconTick, {
    size: size * 0.6,
    color: "#fff"
  })), children ? /*#__PURE__*/React__default['default'].createElement("span", null, children) : null);
};

var _excluded$b = ["type", "disabled", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "ghost"];

var _templateObject$c;
var StyledButton = styled__default['default'].button(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  -moz-appearance: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  padding: 4px 16px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    ", " {\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n  &.primary {\n    background-color: ", ";\n    border-color: ", ";\n    color: #fff;\n\n    ", " {\n      background-color: ", ";\n    }\n\n    &.ghost,\n    &.ghost:hover {\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.disabled,\n  &.disabled:hover {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"])), border, isMobile() ? '&:active' : '&:hover', function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var color = _ref4.color;
  return color;
}, isMobile() ? '&:active' : '&:hover', function (_ref5) {
  var color = _ref5.color;
  return Color__default['default'](color).lighten(0.16).hex();
}, function (_ref6) {
  var color = _ref6.color;
  return color;
}, function (_ref7) {
  var color = _ref7.color;
  return color;
}, disabledBg, border, disabledText, border, border);
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
      danger$1 = props.danger,
      ghost = props.ghost,
      rest = _objectWithoutProperties(props, _excluded$b);

  var color = useThemeColor();
  var themeColor = disabled ? disabledText : danger$1 ? danger : color;
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends({
    ref: ref,
    color: themeColor,
    disabled: disabled,
    type: htmlType,
    className: clsx__default['default']('uc-btn', type, {
      disabled: disabled,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost
    }, className)
  }, rest), children);
});
Button.displayName = 'UC-Button';

var _excluded$c = ["disabled", "checked", "defaultChecked", "className", "style", "onChange"];

var _templateObject$d;
var StyledSwitch = styled__default['default'].button(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  border-radius: 100px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  transition: all 0.3s ease;\n\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  -moz-appearance: none;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n\n  &::after {\n    background-color: #fff;\n    position: absolute;\n    left: 2px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    content: ' ';\n    cursor: pointer;\n    transition: left 0.3s ease-in-out;\n  }\n\n  &.checked {\n    background-color: ", ";\n    border-color: ", ";\n\n    &::after {\n      left: calc(100% - 18px - 2px);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n\n    &::after {\n      cursor: not-allowed;\n    }\n  }\n"])), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});
/** 开关 */

var Switch = function Switch(props) {
  var disabled = props.disabled,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      className = props.className,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$c);

  var color = useThemeColor();

  var _useState = React.useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _checked = _useState2[0],
      _setChecked = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(StyledSwitch, _extends({
    color: color,
    onClick: function onClick() {
      if (typeof onChange === 'function') {
        onChange(!_checked);
      }

      _setChecked(!_checked);
    },
    style: _objectSpread2({}, style),
    disabled: disabled,
    className: clsx__default['default']('uc-switch', className, {
      disabled: disabled,
      checked: _checked
    })
  }, rest));
};

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

var _excluded$d = ["type", "textPosition", "className", "dashed", "color", "children"];

var _templateObject$e;

var StyledDivider = styled__default['default'].div(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: #000000d9;\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  border: none;\n  border-top: 1px solid ", ";\n\n  &.horizontal {\n    display: flex;\n    clear: both;\n    width: 100%;\n    min-width: 100%;\n    margin: 24px 0;\n  }\n\n  &.dashed {\n    border-top-style: dashed;\n  }\n\n  &.text {\n    border-top: 0;\n    .inner-text {\n      display: inline-block;\n      padding: 0 1em;\n      white-space: nowrap;\n      margin: 16px 0;\n      text-align: center;\n    }\n\n    &::before,\n    &::after {\n      width: 50%;\n      border-top: 1px solid ", ";\n      transform: translateY(50%);\n      content: '';\n    }\n\n    &.dashed {\n      &::before,\n      &::after {\n        border-top-style: dashed;\n      }\n    }\n\n    &.left {\n      &::before {\n        width: 5%;\n      }\n      &::after {\n        width: 95%;\n      }\n    }\n    &.right {\n      &::before {\n        width: 95%;\n      }\n      &::after {\n        width: 5%;\n      }\n    }\n  }\n\n  &.vertical {\n    position: relative;\n    top: -0.06em;\n    display: inline-block;\n    height: 0.9em;\n    margin: 0 8px;\n    vertical-align: middle;\n    border-top: 0;\n    border-left: 1px solid ", ";\n  }\n"])), function (_ref) {
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
      color = _props$color === void 0 ? 'rgba(0, 0, 0, 0.06)' : _props$color,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$d);

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

var _excluded$e = ["onChange", "disabled", "multiple", "accept", "capture", "children", "className"];

var _templateObject$f;
var StyledFileInputTrigger = styled__default['default'].div(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n\n  &.disabled {\n    opacity: 0.4;\n    cursor: not-allowed;\n  }\n"])));
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
      rest = _objectWithoutProperties(props, _excluded$e);

  return /*#__PURE__*/React__default['default'].createElement(StyledFileInputTrigger, _extends({
    onClick: function onClick() {
      inputRef.current.value = '';
      inputRef.current.click();
    },
    className: clsx__default['default']('uc-file-input-trigger', className, {
      disabled: disabled
    })
  }, rest), /*#__PURE__*/React__default['default'].createElement("input", {
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

var _excluded$f = ["onVisible", "onInVisible"];

/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */
var Waypoint = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var wpRef = React.useRef();
  var visible = useInViewport__default['default'](wpRef);

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      rest = _objectWithoutProperties(props, _excluded$f);

  var vv = React.useRef(onVisible);
  var vi = React.useRef(onInVisible);
  React.useEffect(function () {
    vv.current = onVisible;
  }, [onVisible]);
  React.useEffect(function () {
    vi.current = onInVisible;
  }, [onInVisible]);
  React.useEffect(function () {
    if (visible === true && typeof vv.current === 'function') {
      vv.current(wpRef.current);
    }

    if (visible === false && typeof vi.current === 'function') {
      vi.current(wpRef.current);
    }
  }, [visible]);
  React.useImperativeHandle(ref, function () {
    return wpRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement("span", _extends({
    "data-role": "waypoint",
    style: {
      fontSize: 0
    },
    ref: wpRef
  }, rest));
});
Waypoint.displayName = 'UC-Waypoint';

var _templateObject$g;
var StyledContainer = styled__default['default'].div(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["\n  .uc-indexbar-side {\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 2;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    transform: translateY(-50%);\n    cursor: pointer;\n    user-select: none;\n\n    .uc-indexbar-side-item {\n      padding: 0 8px 0 16px;\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 14px;\n\n      &.active {\n        color: ", ";\n      }\n    }\n  }\n\n  .bar-title {\n    top: 0;\n    z-index: 1;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 14px;\n    padding: 8px 16px;\n    background-color: #f5f5f5;\n    &.active {\n      color: ", ";\n    }\n  }\n\n  .bar-item {\n    color: #666;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    overflow: hidden;\n    font-size: 14px;\n    background-color: #fff;\n    position: relative;\n    margin: 0;\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n\n      border-bottom: 1px solid #e0e0e0;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n"])), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});

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

var renderItem = function renderItem(item, index, activeIndex, setIndex, containerRef, onChange) {
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
        if (typeof onChange === 'function') {
          onChange(item);
        }
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
      onChange = props.onChange;
  var ref = React.useRef();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var color = useThemeColor();
  return /*#__PURE__*/React__default['default'].createElement(StyledContainer, {
    className: clsx__default['default']('uc-indexbar'),
    color: color,
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement("dl", null, data.map(function (item, idx) {
    return renderItem(item, idx, index, setIndex, ref, onChange);
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "uc-indexbar-side"
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('uc-indexbar-side-item', {
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

var _excluded$g = ["autoplay", "loop", "defaultPageIndex", "onPageChange", "direction", "interval", "children", "className", "height", "style", "showDot"];

var _templateObject$h;
var StyledSlide = styled__default['default'].div(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n\n  .uc-slide-page {\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    width: 100%;\n  }\n\n  .uc-slide-dot-wrapper {\n    position: absolute;\n    bottom: 4px;\n    left: 50%;\n    transform: translateX(-50%);\n\n    .dot {\n      display: inline-block;\n      margin: 0 4px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: #eee;\n      transition: all ease-in-out 0.3s;\n\n      &.active {\n        width: 20px;\n        border-radius: 5px;\n      }\n    }\n\n    &.vertial {\n      position: absolute;\n      right: 8px;\n      top: 50%;\n      left: unset;\n      transform: translateY(-50%);\n\n      .dot {\n        display: block;\n        margin: 4px 0;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #eee;\n\n        &.active {\n          width: 8px;\n          height: 20px;\n          border-radius: 5px;\n        }\n      }\n    }\n  }\n"])));

/**  轮播焦点图/全屏分页 */
var Slide = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$autoplay = props.autoplay,
      autoplay = _props$autoplay === void 0 ? true : _props$autoplay,
      _props$loop = props.loop,
      loop = _props$loop === void 0 ? true : _props$loop,
      _props$defaultPageInd = props.defaultPageIndex,
      defaultPageIndex = _props$defaultPageInd === void 0 ? 0 : _props$defaultPageInd,
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
      rest = _objectWithoutProperties(props, _excluded$g);

  var containerRef = React.useRef();
  var bsRef = React.useRef();
  var onPageChangeRef = React.useRef(onPageChange);

  var _useState = React.useState(defaultPageIndex),
      _useState2 = _slicedToArray(_useState, 2),
      pageIndex = _useState2[0],
      setPageIndex = _useState2[1];

  var slide = React.useMemo(function () {
    var scrollX = direction === 'horizontal';
    var options = {
      autoplay: autoplay,
      loop: loop,
      threshold: 0.1,
      speed: 300,
      listenFlick: true,
      interval: interval
    };

    if (scrollX) {
      options.startPageXIndex = defaultPageIndex;
    } else {
      options.startPageYIndex = defaultPageIndex;
    }

    return options;
  }, [autoplay, interval, loop, direction, defaultPageIndex]);
  React.useEffect(function () {
    BScroll__default['default'].use(SlidePlugin__default['default']);
    var scrollX = direction === 'horizontal';
    var scrollY = !scrollX;
    bsRef.current = new BScroll__default['default'](containerRef.current, {
      click: true,
      scrollX: scrollX,
      scrollY: scrollY,
      slide: slide,
      momentum: false,
      bounce: false,
      probeType: 3
    });
    bsRef.current.on('slideWillChange', function (page) {
      setPageIndex(page["page".concat(scrollX ? 'X' : 'Y')]);
    });
    bsRef.current.on('slidePageChanged', function (page) {
      if (typeof onPageChangeRef.current === 'function') {
        onPageChangeRef.current(page["page".concat(scrollX ? 'X' : 'Y')]);
      }
    });
    return function () {
      bsRef.current.destroy();
    };
  }, [slide, direction, setPageIndex]);
  React.useImperativeHandle(ref, function () {
    return {
      goToPage: function goToPage(pageIndex) {
        if (direction === 'horizontal') {
          bsRef.current.goToPage(pageIndex, 0);
        } else {
          bsRef.current.goToPage(0, pageIndex);
        }
      },
      prev: function prev() {
        return bsRef.current.prev();
      },
      next: function next() {
        return bsRef.current.next();
      },
      bs: bsRef.current
    };
  });

  var dotRender = function dotRender() {
    if (!showDot) return null;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('uc-slide-dot-wrapper', {
        vertial: direction === 'vertical'
      })
    }, React__default['default'].Children.map(children, function (c, idx) {
      return /*#__PURE__*/React__default['default'].createElement("span", {
        key: idx,
        className: clsx__default['default']('dot', {
          active: pageIndex === idx
        })
      });
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledSlide, _extends({
    className: clsx__default['default']('uc-slide', className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    }),
    ref: containerRef
  }, rest), /*#__PURE__*/React__default['default'].createElement("div", null, React__default['default'].Children.map(children, function (c, idx) {
    return /*#__PURE__*/React__default['default'].cloneElement(c, {
      key: idx,
      className: clsx__default['default'](c.props.className, 'uc-slide-page'),
      style: _objectSpread2(_objectSpread2({}, c.props.style), {}, {
        height: height
      })
    });
  })), dotRender());
});
Slide.displayName = 'UC-Slide';

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
var throttle = function throttle(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var start = 0;
  var timer = 0;

  var ensureExecute = function ensureExecute(now, args, that) {
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
      throw new Error('ScrollTop:children must be a valid react element');
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

var _excluded$h = ["size", "color"];

var _templateObject$i;
var StyledCross = styled__default['default'].div(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n"])), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
});
/** 用于关闭的 x */

var IconCross = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      rest = _objectWithoutProperties(props, _excluded$h);

  return /*#__PURE__*/React__default['default'].createElement(StyledCross, _extends({
    className: clsx__default['default']('uc-icon-cross'),
    ref: ref,
    size: size
  }, rest), /*#__PURE__*/React__default['default'].createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("rect", {
    fillOpacity: "0.01",
    fill: "#FFFFFF",
    x: "0",
    y: "0",
    width: "48",
    height: "48",
    strokeWidth: "4",
    stroke: "none",
    fillRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14,14 L34,34",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M14,34 L34,14",
    stroke: color,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  })))));
});
IconCross.displayName = 'UC-IconCross';

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
  var customOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
    x: 0,
    y: 0
  };
  var modalPos = modalEl.getBoundingClientRect();
  var anchorPos = anchorEl.getBoundingClientRect();
  var parentPos = parentEl.getBoundingClientRect();
  var scrollTop = scrollContainer.scrollTop;
  var isParentBody = getNodeName(parentEl) === 'body';
  var isAnchorFixed = getComputedStyle(anchorEl).position === 'fixed';
  var anchorOffsetTop = getOffsetTop(anchorEl);
  var scrollY = isAnchorFixed ? anchorPos.top : isParentBody ? anchorPos.top + scrollTop : anchorOffsetTop;
  /* The distance between the top of the offsetParent and the top of the anchor.
   *
   * We don't simply use anchorEl.offsetTop but the below code instead due to the following reason:
   * for the cases with no mask, the anchorEl's should be positioned relative to the body rather than
   * its real offsetParent.
   */

  var top = scrollY;
  var bottom = anchorPos.height + scrollY;
  var left = anchorPos.left - parentPos.left;
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
    top: position.top + offset.y,
    left: position.left + offset.x
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
    top: "1px 1px 1px 0px ".concat(border),
    right: "-1px 1px 1px 0px ".concat(border),
    bottom: "-1px -1px 1px 0px ".concat(border),
    left: "1px -1px 1px 0px ".concat(border)
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

var _excluded$i = ["placement", "content", "arrow", "visible", "closable", "onClose", "className", "style", "children", "backdrop"];

var _templateObject$j;

var StyledPopover = styled__default['default'].div(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 1100;\n  background: #fff;\n  border-radius: 2px;\n  /* box-shadow: 0px 0px 4px 0px ", ", 0px 2px 6px 0px ", ";\n   */\n\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n\n  &.backdrop {\n    box-shadow: none;\n\n    .uc-popover-arrow {\n      box-shadow: none !important;\n    }\n  }\n\n  transition: transform 0.24s ease-out;\n  &.from {\n    transform: translateY(0.5%);\n  }\n  &.to {\n    transform: none;\n  }\n"])), border, border);
var MARGIN$1 = 12;
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
      onClose = props.onClose,
      className = props.className,
      style = props.style,
      children = props.children,
      backdrop = props.backdrop,
      rest = _objectWithoutProperties(props, _excluded$i);

  var childrenRef = React.useRef();
  var popoverRef = React.useRef(null);
  var resizeTimerRef = React.useRef(0);

  var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      modalStyle = _useState2[0],
      setModalStyle = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      arrowStyle = _useState4[0],
      setArrowStyle = _useState4[1];

  React.useEffect(function () {
    var anchorEl = childrenRef.current;
    var scrollContainer = getScrollContainer(anchorEl);

    var calculateStyle = function calculateStyle(anchorEl, scrollContainer) {
      var modalEl = popoverRef.current;
      var modalStyle = getModalStyle(modalEl, anchorEl, document.body, scrollContainer, placement, {
        x: 0,
        y: 0
      } // offset
      );
      var arrowStyle = getArrowStyle(modalEl, placement, false, 12);
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

    var handleScroll = function handleScroll() {
      var modalEl = popoverRef.current;
      var anchorPos = anchorEl.getBoundingClientRect();
      var modalPos = modalEl.getBoundingClientRect();
      var scrollPos = scrollContainer.getBoundingClientRect();
      var isScrollContainerHtml = getNodeName(scrollContainer) === 'html';
      /* scroll the scroll container to show the modal */

      var visibleHeight = scrollContainer.clientHeight;
      var scrollContainerTop = isScrollContainerHtml ? 0 : scrollPos.top;

      if ( // Modal is below the viewport
      anchorPos.top - scrollContainerTop + anchorPos.height + modalPos.height + MARGIN$1 >= visibleHeight || // Modal is above the viewport
      anchorPos.top <= modalPos.height + MARGIN$1) {
        // scrolls to a particular set of coordinates inside a given element.
        scrollContainer.scrollTo({
          left: 0,
          top: scrollContainer.scrollTop + anchorPos.top - scrollContainerTop + anchorPos.height / 2 - visibleHeight / 2 + MARGIN$1,
          behavior: 'smooth'
        });
      }

      if (getNodeName(scrollContainer) === 'html') return;
      var documentEl = document.documentElement;
      /* scroll to show the scroll container */

      if ( // Modal is below the viewport
      scrollPos.top + scrollPos.height >= window.innerHeight || // Modal is above the viewport
      scrollPos.bottom > scrollPos.height) {
        // scrolls to a particular set of coordinates inside a given element.
        documentEl.scrollTo({
          left: 0,
          top: documentEl.scrollTop + scrollPos.top + scrollPos.height / 2 - window.innerHeight / 2 + MARGIN$1,
          behavior: 'smooth'
        });
      }
    };

    if (visible) {
      handleScroll();
      calculateStyle(anchorEl, scrollContainer);
      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [visible, placement]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: childrenRef
  }), visible ? /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, backdrop ? /*#__PURE__*/React__default['default'].createElement(Backdrop, {
    onClick: onClose
  }) : null, /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    ref: popoverRef
  }, /*#__PURE__*/React__default['default'].createElement(StyledPopover, _extends({
    className: clsx__default['default'](className, 'uc-popover', {
      backdrop: backdrop
    }),
    style: _objectSpread2(_objectSpread2({}, modalStyle), style)
  }, rest), arrow && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('uc-popover-arrow'),
    style: arrowStyle
  }), closable && /*#__PURE__*/React__default['default'].createElement(IconCross, {
    className: clsx__default['default']('uc-popover-close'),
    size: 20,
    onClick: onClose
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('uc-popover-content')
  }, content)))), document.body) : null);
};

var _templateObject$k;
var StylePopover = styled__default['default'](Popover)(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["\n  color: #fff;\n  padding: 8px;\n  opacity: 0.85;\n\n  .uc-tooltip-content {\n    display: inline-block;\n    min-width: 30px;\n    max-width: 240px;\n  }\n"])));

/** 文字提示 */
var Tooltip = function Tooltip(props) {
  var title = props.title,
      _props$bgColor = props.bgColor,
      bgColor = _props$bgColor === void 0 ? 'black' : _props$bgColor,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      children = props.children; // 鼠标移到popover内容区，不关闭popover

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
      }, 300);
    },
    onFocus: function onFocus() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    }
  };

  var titleRender = function titleRender() {
    var otherProps = {
      className: clsx__default['default']('uc-tooltip-content')
    };

    if ( /*#__PURE__*/React__default['default'].isValidElement(title)) {
      return /*#__PURE__*/React__default['default'].cloneElement(title, otherProps);
    } else {
      return /*#__PURE__*/React__default['default'].createElement("span", otherProps, title);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(StylePopover, _extends({
    className: clsx__default['default']('uc-tooltip'),
    style: {
      background: bgColor
    },
    visible: visible,
    placement: placement,
    content: titleRender(),
    arrow: arrow
  }, actionProps), /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, actionProps) : /*#__PURE__*/React__default['default'].createElement("span", actionProps, children));
};

Tooltip.displayName = 'UC-Tooltip';

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

/** 拖拽包裹的元素 */
var Drag = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      boundRef = props.boundRef;
  var elRef = React.useRef();

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React__default['default'].isValidElement(children)) {
      throw new Error('Drag:children must be a valid react element');
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

var _excluded$j = ["lines", "children"];

var _templateObject$l, _templateObject2$2;
var StyledSpanMultiLines = styled__default['default'].span(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.lines;
});
var StyledSpanOneline = styled__default['default'].span(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
var Text = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$lines = props.lines,
      lines = _props$lines === void 0 ? 1 : _props$lines,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$j);

  if (typeof children !== 'string' || typeof lines !== 'number') {
    return children;
  }

  return /*#__PURE__*/React__default['default'].createElement(lines > 1 ? StyledSpanMultiLines : StyledSpanOneline, _objectSpread2({
    ref: ref,
    lines: lines
  }, rest), children);
});
Text.displayName = 'UC-Text';

var _templateObject$m;
var StyleToast = styled__default['default'](Popup)(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["\n  padding: 12px 16px;\n  background-color: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  border-radius: 2px;\n  text-align: center;\n"])));

var getContainer = function getContainer() {
  if (isBrowser) {
    var div = document.querySelector('.uc-toast-static');

    if (!div) {
      div = document.createElement('div');
      div.className = 'uc-toast-static';
      document.body.appendChild(div);
    }

    return div;
  }

  return null;
};
/** 黑背景提示 */


var Toast = function Toast(props) {
  var content = props.content,
      visible = props.visible,
      modal = props.modal;
  var toastProps = {};

  if (modal) {
    toastProps.backdrop = true;
    toastProps.backdropStyle = {
      opacity: 0
    };
  } else {
    toastProps.backdrop = false;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyleToast, _extends({
    position: "center",
    visible: visible,
    className: clsx__default['default']('uc-toast')
  }, toastProps), content);
};
/** 黑背景提示,静态调用 */


Toast.show = function (content) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var modal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!content) return;
  var container = getContainer();
  ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(Toast, {
    content: content,
    visible: true,
    modal: modal
  }), container);
  window.setTimeout(function () {
    ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(Toast, {
      content: content,
      visible: false,
      modal: modal
    }), container);
  }, duration);
};

Toast.displayName = 'UC-Toast';

var _excluded$k = ["color", "direction", "size"];

var _templateObject$n;
var StyledArrow = styled__default['default'].div(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"])), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
});
/** 勾勾 */

var IconArrow = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'bottom' : _props$direction,
      _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$k);

  return /*#__PURE__*/React__default['default'].createElement(StyledArrow, _extends({
    ref: ref,
    className: clsx__default['default']('uc-icon-arrow', _defineProperty({}, direction, direction)),
    size: size
  }, rest), /*#__PURE__*/React__default['default'].createElement("svg", {
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

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function () {
    return styled.ThemeProvider;
  }
});
exports.AnimationElement = AnimationElement;
exports.Backdrop = Backdrop;
exports.Button = Button;
exports.Cell = Cell;
exports.Checkbox = Checkbox;
exports.CopyToClipboard = CopyToClipboard;
exports.Divider = Divider;
exports.Drag = Drag;
exports.ErrorBoundary = ErrorBoundary;
exports.FileInputTrigger = FileInputTrigger;
exports.HairLineBox = HairLineBox;
exports.IconArrow = IconArrow;
exports.IconCross = IconCross;
exports.IconTick = IconTick;
exports.IndexList = IndexList;
exports.LazyLoadElement = LazyLoadElement;
exports.LazyLoadImage = LazyLoadImage;
exports.Popover = Popover;
exports.Popup = Popup;
exports.Pullup = Pullup;
exports.ScrollTop = ScrollTop;
exports.Skeleton = Skeleton;
exports.SkeletonBase = SkeletonBase;
exports.Slide = Slide;
exports.Space = Space;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Tabs = Tabs;
exports.Text = Text;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.TransitionElement = TransitionElement;
exports.WaitLoading = WaitLoading;
exports.Waypoint = Waypoint;
exports.debounce = debounce;
exports.throttle = throttle;
