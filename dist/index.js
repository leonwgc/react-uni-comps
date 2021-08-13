'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactTransitionGroup = require('react-transition-group');
var styled = require('styled-components');
var reactIs = require('react-is');
var useInViewport = require('react-use-lib/es/useInViewport');
var useUpdateEffect = require('react-use-lib/es/useUpdateEffect');
var usePrevious = require('react-use-lib/es/usePrevious');
var clsx = require('clsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var useInViewport__default = /*#__PURE__*/_interopDefaultLegacy(useInViewport);
var useUpdateEffect__default = /*#__PURE__*/_interopDefaultLegacy(useUpdateEffect);
var usePrevious__default = /*#__PURE__*/_interopDefaultLegacy(usePrevious);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject, _templateObject2;
var StyledMask = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  transition: opacity 0.15s linear;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n\n  &.entering,\n  &.entered {\n    opacity: 0.5;\n    background-color: #000;\n  }\n\n  &.exiting,\n  &.exited {\n    opacity: 0;\n    z-index: -1;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n"])));
var StyledWrapper = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  transition: transform ", "ms ease-in-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transition: none;\n  }\n\n  @keyframes showUp {\n    from {\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0.618);\n    }\n    90% {\n      opacity: 0.9;\n      transform: translate(-50%, -50%) scale(1.01);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n  }\n  &.center-entering,\n  &.center-entered {\n    display: '';\n    animation: showUp ease ", "ms forwards;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    display: none;\n  }\n"])), function (props) {
  return props.duration;
}, function (props) {
  return props.duration;
});

/** 弹框，可以从上，下，左，右，中间弹出 */
var Popup = function Popup(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      _ref$showMask = _ref.showMask,
      showMask = _ref$showMask === void 0 ? true : _ref$showMask,
      _ref$onMaskClick = _ref.onMaskClick,
      onMaskClick = _ref$onMaskClick === void 0 ? null : _ref$onMaskClick,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom' : _ref$position,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 300 : _ref$duration,
      _ref$mountContainer = _ref.mountContainer,
      mountContainer = _ref$mountContainer === void 0 ? function () {
    return document.body;
  } : _ref$mountContainer,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  var wrapRef = React.useRef();

  var clickMask = function clickMask(e) {
    if (e.target === e.currentTarget && typeof onMaskClick === 'function') {
      onMaskClick();
    }
  };

  React.useEffect(function () {
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);
  return /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    "in": visible,
    timeout: duration
  }, function (status) {
    return /*#__PURE__*/React__default['default'].createElement("div", null, showMask ? /*#__PURE__*/React__default['default'].createElement(StyledMask, {
      className: status,
      onClick: clickMask
    }) : null, /*#__PURE__*/React__default['default'].createElement(StyledWrapper, {
      ref: wrapRef,
      duration: duration,
      style: style,
      className: "react-uni-comps-popup ".concat(className, " ").concat(position, " ").concat(status, " ").concat(position, "-").concat(status)
    }, children));
  }), mountContainer());
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

var _excluded = ["size", "align", "className", "children", "direction", "split", "style", "wrap"];

var _templateObject$1;

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
var StyledSpace = styled__default['default'].div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: ", ";\n  align-items: ", ";\n"])), function (_ref3) {
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
      otherProps = _objectWithoutProperties(props, _excluded);

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

var getClassName = function getClassName(state, c) {
  var fromClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'from';
  var toClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'to';

  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return c ? fromClass : toClass; //exited
  }
};
/** 给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画 */


var TransitionElement = function TransitionElement(_ref) {
  var children = _ref.children,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 240 : _ref$duration,
      _ref$transitionProp = _ref.transitionProp,
      transitionProp = _ref$transitionProp === void 0 ? 'all' : _ref$transitionProp,
      _ref$timingFunc = _ref.timingFunc,
      timingFunc = _ref$timingFunc === void 0 ? 'ease-out' : _ref$timingFunc,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$once = _ref.once,
      once = _ref$once === void 0 ? true : _ref$once,
      _ref$fromClass = _ref.fromClass,
      fromClass = _ref$fromClass === void 0 ? 'from' : _ref$fromClass,
      _ref$toClass = _ref.toClass,
      toClass = _ref$toClass === void 0 ? 'to' : _ref$toClass;
  var ref = React.useRef();
  var ls = React.useRef(true);
  var isInViewport = useInViewport__default['default'](ref);

  var _ref2 = (children === null || children === void 0 ? void 0 : children.props) || {},
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;

  var newStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    transition: "".concat(transitionProp, " ").concat(duration, "ms ").concat(timingFunc, " ").concat(delay, "ms")
  });

  useUpdateEffect__default['default'](function () {
    ls.current = !once;
  }, [isInViewport, once]);
  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement can have only one children');
  } // chidren 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement


  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
      "in": isInViewport && ls.current,
      appear: true,
      timeout: duration
    }, function (state) {
      return /*#__PURE__*/React__default['default'].cloneElement(children, {
        ref: ref,
        className: "".concat(className, " ").concat(getClassName(state, ls.current, fromClass, toClass)),
        style: newStyle
      });
    });
  } else {
    // console.warn('TransitionElement:children must be ReactElement');
    return children;
  }
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

      if (typeof dom.style.animation === 'string') {
        dom.addEventListener('animationend', function () {
          dom.style.animationName = 'none';
        });
      } else if (typeof dom.style.webkitAnimation === 'string') {
        dom.addEventListener('webkitAnimationEnd', function () {
          dom.style.webkitAnimationName = 'none';
        });
      }
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

var _excluded$1 = ["width", "height", "children"],
    _excluded2 = ["style"];

/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
var LazyLoadElement = function LazyLoadElement(_ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$1);

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

var _excluded$2 = ["width", "height", "src"],
    _excluded2$1 = ["style"];

/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
var LazyLoadImage = function LazyLoadImage(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src,
      props = _objectWithoutProperties(_ref, _excluded$2);

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

var _excluded$3 = ["dataList", "dataRender", "fetchData", "spinner", "endText", "hasMoreData", "footerStyle"];

var footerRender = function footerRender(isLoading, hasMoreData, spinner, endText, footerStyle) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: _objectSpread2({
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, footerStyle)
  }, isLoading ? spinner : !hasMoreData ? endText : null);
};
/** 上滑加载更多数据 */


var Pullup = function Pullup(_ref) {
  var _ref$dataList = _ref.dataList,
      dataList = _ref$dataList === void 0 ? [] : _ref$dataList,
      _ref$dataRender = _ref.dataRender,
      dataRender = _ref$dataRender === void 0 ? function () {
    return null;
  } : _ref$dataRender,
      fetchData = _ref.fetchData,
      _ref$spinner = _ref.spinner,
      spinner = _ref$spinner === void 0 ? '加载中...' : _ref$spinner,
      _ref$endText = _ref.endText,
      endText = _ref$endText === void 0 ? '我是有底线的~' : _ref$endText,
      _ref$hasMoreData = _ref.hasMoreData,
      hasMoreData = _ref$hasMoreData === void 0 ? true : _ref$hasMoreData,
      footerStyle = _ref.footerStyle,
      otherProps = _objectWithoutProperties(_ref, _excluded$3);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var ref = React.useRef();
  var wrapRef = React.useRef();
  var isAtBottom = useInViewport__default['default'](ref, wrapRef);
  var lastIsAtBottom = usePrevious__default['default'](isAtBottom);
  var style = otherProps.style,
      className = otherProps.className;
  React.useEffect(function () {
    if (!isLoading && isAtBottom && hasMoreData && !lastIsAtBottom) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      })["catch"](function () {
        setLoading(false);
      });
    }
  }, [isLoading, isAtBottom, hasMoreData, setLoading, fetchData, lastIsAtBottom]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className,
    style: style,
    ref: wrapRef
  }, dataList.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: idx
    }, dataRender(item, idx));
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: ref
  }, footerRender(isLoading, hasMoreData, spinner, endText, footerStyle)));
};

var _excluded$4 = ["position", "color"];

var _templateObject$2;
/** 显示1px的边 */

var StyledDiv = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    ", ": 1px solid ", ";\n\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n      width: 200%;\n      height: 200%;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n    }\n  }\n"])), function (_ref) {
  var position = _ref.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});
/** 包含1px的边的容器div */

var HairLineBox = function HairLineBox(_ref3) {
  var _ref3$position = _ref3.position,
      position = _ref3$position === void 0 ? 'bottom' : _ref3$position,
      _ref3$color = _ref3.color,
      color = _ref3$color === void 0 ? '#dcdcdc' : _ref3$color,
      props = _objectWithoutProperties(_ref3, _excluded$4);

  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, _extends({
    position: position,
    color: color
  }, props));
};

/**  等待了wait毫秒后，如果visible还是true才显示spinner, 防止spinner闪烁 */
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

var _templateObject$3;
var StyledLoading = styled__default['default'].div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  @-webkit-keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n  @keyframes loading {\n    0% {\n      -webkit-transform: rotate3d(0, 0, 1, 0deg);\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      -webkit-transform: rotate3d(0, 0, 1, 360deg);\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n  }\n\n  font-size: ", "px;\n  display: inline-flex;\n  position: relative;\n  width: 1em;\n  height: 1em;\n  vertical-align: middle;\n  color: ", ";\n  animation: loading 1s steps(60, end) infinite;\n  :before,\n  :after {\n    content: '';\n    display: block;\n    width: 0.5em;\n    height: 1em;\n    box-sizing: border-box;\n    border: 0.125em solid;\n    border-color: currentColor;\n  }\n  :before {\n    border-right-width: 0;\n    border-top-left-radius: 1em;\n    border-bottom-left-radius: 1em;\n    mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, #000000 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n  :after {\n    border-left-width: 0;\n    border-top-right-radius: 1em;\n    border-bottom-right-radius: 1em;\n    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n    -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.3) 95%);\n  }\n"])), function (props) {
  return props.size;
}, function (props) {
  return props.color;
});
/** Spinner 加载中 */

var Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#606060' : _ref$color;
  return /*#__PURE__*/React__default['default'].createElement(StyledLoading, {
    size: size,
    color: color
  });
};

var _excluded$5 = ["children", "themeColor", "lineWidth", "defaultIndex", "onIndexChange"];

var _templateObject$4, _templateObject2$1, _templateObject3, _templateObject4;
var StyledTabHeaderWrap = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 44px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: scroll;\n  border-bottom: 1px solid #e8e8e8;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));
var StyledTabHeadItem = styled__default['default'].div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  flex: 1 0;\n  font-size: 16px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 60px;\n  user-select: none;\n\n  &.active {\n    color: ", ";\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: #bcbcbc;\n  }\n"])), function (props) {
  return props.theme.color;
});
var StyledLine = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: ", ";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: transform 0.3s ease;\n  transform: translate3d(", ", 0px, 0px);\n  display: flex;\n  justify-content: center;\n  > .line {\n    width: ", ";\n    background-color: ", ";\n    height: ", "px;\n  }\n"])), function (props) {
  return props.itemWidth;
}, function (props) {
  return props.activeIndex * 100 + '%';
}, function (props) {
  return typeof props.lineWidth === 'number' ? props.lineWidth + 'px' : props.lineWidth;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.height;
});
var StyledTabContentWrap = styled__default['default'].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  overflow: hidden;\n"])));

var Tab = function Tab(_ref) {
  var children = _ref.children;
  return children;
};

var isValidtTabElement = function isValidtTabElement(el) {
  return /*#__PURE__*/React__default['default'].isValidElement(el) && el.type === Tab;
};

var Tabs = function Tabs(_ref2) {
  var children = _ref2.children,
      _ref2$themeColor = _ref2.themeColor,
      themeColor = _ref2$themeColor === void 0 ? '#1890ff' : _ref2$themeColor,
      _ref2$lineWidth = _ref2.lineWidth,
      lineWidth = _ref2$lineWidth === void 0 ? '100%' : _ref2$lineWidth,
      _ref2$defaultIndex = _ref2.defaultIndex,
      defaultIndex = _ref2$defaultIndex === void 0 ? 0 : _ref2$defaultIndex,
      onIndexChange = _ref2.onIndexChange,
      otherProps = _objectWithoutProperties(_ref2, _excluded$5);

  var _useState = React.useState(defaultIndex),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var len = React__default['default'].Children.count(children);
  var itemWidth = 100 / len + '%';
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: {
      color: themeColor
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", otherProps, /*#__PURE__*/React__default['default'].createElement(StyledTabHeaderWrap, {
    className: "tab-header-wrap"
  }, React__default['default'].Children.map(children, function (child, index) {
    if (isValidtTabElement(child)) {
      var _ref3 = child.props,
          _ref3$title = _ref3.title,
          title = _ref3$title === void 0 ? '' : _ref3$title,
          _ref3$disabled = _ref3.disabled,
          disabled = _ref3$disabled === void 0 ? false : _ref3$disabled;
      var itemCls = clsx__default['default']('tab-header-item', {
        active: index === activeIndex,
        disabled: disabled
      });
      return /*#__PURE__*/React__default['default'].createElement(StyledTabHeadItem, {
        key: index,
        className: itemCls,
        onClick: function onClick() {
          if (!disabled) {
            setActiveIndex(index);

            if (typeof onIndexChange === 'function') {
              onIndexChange(index);
            }
          }
        }
      }, title);
    }
  }), /*#__PURE__*/React__default['default'].createElement(StyledLine, {
    itemWidth: itemWidth,
    lineWidth: lineWidth,
    height: 2,
    activeIndex: activeIndex
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "line"
  }))), /*#__PURE__*/React__default['default'].createElement(StyledTabContentWrap, {
    className: "tab-content-wrap"
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

var _templateObject$5;
var StyledCell = styled__default['default'].div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 16px;\n  overflow: hidden;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n\n  .cell__title {\n    box-sizing: border-box;\n    width: 6.2em;\n    margin-right: 12px;\n    text-align: left;\n    word-wrap: break-word;\n\n    &.not-edit-mode {\n      width: auto;\n      flex: 1;\n    }\n  }\n  .cell__value {\n    flex: 1;\n    position: relative;\n    overflow: visible;\n    color: #969799;\n    text-align: right;\n    vertical-align: middle;\n    word-wrap: break-word;\n\n    .field__body {\n      display: flex;\n      align-items: center;\n\n      > input,\n      textarea {\n        display: block;\n        box-sizing: border-box;\n        flex: 1;\n        width: 100%;\n        min-width: 0;\n        margin: 0;\n        padding: 0;\n        color: #323233;\n        line-height: inherit;\n        text-align: left;\n        background-color: transparent;\n        border: 0;\n        resize: none;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-appearance: none;\n        box-shadow: none;\n        padding-right: 4px;\n      }\n      > textarea {\n        resize: none;\n        word-break: break-all;\n        word-wrap: break-word;\n\n        & + * {\n          align-self: flex-end;\n        }\n      }\n    }\n  }\n"])));
/** 列表项，通常用于移动端 */

var Cell = function Cell(_ref) {
  var label = _ref.label,
      content = _ref.content,
      _ref$lineColor = _ref.lineColor,
      lineColor = _ref$lineColor === void 0 ? '#dcdcdc' : _ref$lineColor,
      children = _ref.children;

  if (content && children) {
    throw new Error("don't set content and children at the same time");
  }

  var titleClsx = clsx__default['default']('cell__title', {
    'not-edit-mode': content
  });
  return /*#__PURE__*/React__default['default'].createElement(HairLineBox, {
    color: lineColor
  }, /*#__PURE__*/React__default['default'].createElement(StyledCell, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: titleClsx
  }, label), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "cell__value"
  }, content, children ? /*#__PURE__*/React__default['default'].createElement("div", {
    className: "field__body"
  }, children) : null)));
};

var _excluded$6 = ["animate", "width", "height", "shape"],
    _excluded2$2 = ["style", "className"];

var _templateObject$6;
var StyledSkeletonBase = styled__default['default'].div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"])));
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonBase = function SkeletonBase(props) {
  var _props$animate = props.animate,
      animate = _props$animate === void 0 ? true : _props$animate,
      width = props.width,
      _props$height = props.height,
      height = _props$height === void 0 ? 16 : _props$height,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'rect' : _props$shape,
      other = _objectWithoutProperties(props, _excluded$6);

  var _other$style = other.style,
      style = _other$style === void 0 ? {} : _other$style,
      _other$className = other.className,
      className = _other$className === void 0 ? '' : _other$className,
      rest = _objectWithoutProperties(other, _excluded2$2);

  return /*#__PURE__*/React__default['default'].createElement(StyledSkeletonBase, _extends({
    className: clsx__default['default']('uc-skeleton', shape, {
      pulse: animate
    }, className),
    style: _objectSpread2({
      width: width,
      height: height
    }, style)
  }, rest));
};

var _excluded$7 = ["animate", "row", "rowWidth", "rowHeight", "avatar", "avatarSize", "children", "loading"],
    _excluded2$3 = ["className"];

var _templateObject$7;

var StyledSkeleton = styled__default['default'].div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  .uc-skeleton {\n    &:not(:first-child) {\n      margin-top: 12px;\n    }\n\n    &:nth-child(2) {\n      margin-top: 20px;\n    }\n  }\n\n  &.avatar {\n    display: flex;\n\n    > .avatar {\n      flex: none;\n    }\n\n    > .rows {\n      flex: 1;\n      margin-left: 16px;\n      padding-top: 8px;\n    }\n  }\n"])));
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
      other = _objectWithoutProperties(props, _excluded$7);

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

var border = '#d9d9d9';
var disabled = 'rgba(0, 0, 0, 0.25)';

var _templateObject$8, _templateObject2$2;
var StyledCheckboxWrapper = styled__default['default'].div(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), disabled);
var StyledCheckbox = styled__default['default'].div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &::before {\n    transform: rotate(45deg);\n    opacity: 0;\n    transition: transform 0.3s ease;\n    content: '';\n    width: calc(", "px / 3.5);\n    height: calc(", "px / 2);\n    border: calc(", "px / 9) solid ", ";\n    border-top: 0;\n    border-left: 0;\n    margin-top: calc(", "px / -12);\n    margin-left: calc(", "px / ", ");\n    transition: all 0.2s ease;\n  }\n\n  &.checked {\n    background-color: ", ";\n    border: 1px solid ", ";\n    &::before {\n      transform: rotate(45deg);\n      opacity: 1;\n      border-color: #fff;\n    }\n  }\n\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"])), function (_ref) {
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
  var size = _ref5.size;
  return size;
}, function (_ref6) {
  var size = _ref6.size;
  return size;
}, function (_ref7) {
  var size = _ref7.size;
  return size;
}, function (_ref8) {
  var color = _ref8.color;
  return color;
}, function (_ref9) {
  var size = _ref9.size;
  return size;
}, function (_ref10) {
  var size = _ref10.size;
  return size;
}, function (_ref11) {
  var size = _ref11.size;
  return size;
}, function (_ref12) {
  var color = _ref12.color;
  return color;
}, function (_ref13) {
  var color = _ref13.color;
  return color;
}, disabled, disabled);
/** Checkbox, Radiobox带checked状态的 */

var Checkbox = function Checkbox(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? '#004bcc' : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 18 : _props$size,
      _props$borderRadius = props.borderRadius,
      borderRadius = _props$borderRadius === void 0 ? '2px' : _props$borderRadius,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children;

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
    color: color
  }), children ? /*#__PURE__*/React__default['default'].createElement("span", null, children) : null);
};

exports.AnimationElement = AnimationElement;
exports.Cell = Cell;
exports.Checkbox = Checkbox;
exports.HairLineBox = HairLineBox;
exports.LazyLoadElement = LazyLoadElement;
exports.LazyLoadImage = LazyLoadImage;
exports.Popup = Popup;
exports.Pullup = Pullup;
exports.Skeleton = Skeleton;
exports.SkeletonBase = SkeletonBase;
exports.Space = Space;
exports.Spinner = Spinner;
exports.Tabs = Tabs;
exports.TransitionElement = TransitionElement;
exports.WaitLoading = WaitLoading;
