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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var useInViewport__default = /*#__PURE__*/_interopDefaultLegacy(useInViewport);
var useUpdateEffect__default = /*#__PURE__*/_interopDefaultLegacy(useUpdateEffect);
var usePrevious__default = /*#__PURE__*/_interopDefaultLegacy(usePrevious);

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
var StyledMask = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  transition: opacity 600ms linear;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n\n  &.entering,\n  &.entered {\n    opacity: 1;\n    background-color: rgba(0, 0, 0, 0.35);\n  }\n\n  &.exiting,\n  &.exited {\n    opacity: 0;\n    z-index: -1;\n  }\n"])));
var StyledWrapper = styled__default['default'].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  transition: all ", "ms ease-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-in;\n    transform: translate(0, 0);\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transition-timing-function: ease-out;\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    transform: translate(-50%, -50%) scale(0);\n    opacity: 0;\n  }\n"])), function (props) {
  return props.duration;
});

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
      duration = _ref$duration === void 0 ? 240 : _ref$duration,
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
//#region types

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
}; // 子元素会分别添加from/to class， from代表初始状态，to代表动画最终状态


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
  }

  var type = children.type;

  if (typeof type === 'string') {
    // html element
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
    // comp
    return /*#__PURE__*/React__default['default'].createElement("span", {
      ref: ref
    }, /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
      "in": isInViewport && ls.current,
      appear: true,
      timeout: duration
    }, function (state) {
      return /*#__PURE__*/React__default['default'].cloneElement(children, {
        className: "".concat(className, " ").concat(getClassName(state, ls.current, fromClass, toClass)),
        style: newStyle
      });
    }));
  }
};

var AnimationElement = function AnimationElement(_ref) {
  var children = _ref.children,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 3000 : _ref$duration,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$timingFunc = _ref.timingFunc,
      timingFunc = _ref$timingFunc === void 0 ? 'ease' : _ref$timingFunc,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'normal' : _ref$direction,
      _ref$iterationCount = _ref.iterationCount,
      iterationCount = _ref$iterationCount === void 0 ? 'infinite' : _ref$iterationCount,
      _ref$fillMode = _ref.fillMode,
      fillMode = _ref$fillMode === void 0 ? 'none' : _ref$fillMode;
  var ref = React.useRef();
  var isInViewport = useInViewport__default['default'](ref);

  var _ref2 = (children === null || children === void 0 ? void 0 : children.props) || {},
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;

  var newStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    animation: "".concat(duration, "ms ").concat(timingFunc, " ").concat(delay, "ms ").concat(iterationCount, " ").concat(direction, " ").concat(fillMode, " ").concat(isInViewport ? 'running' : 'paused', " ").concat(name)
  });

  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement can have only one children');
  }

  var type = children.type;

  if (typeof type === 'string') {
    return /*#__PURE__*/React__default['default'].cloneElement(children, {
      ref: ref,
      style: newStyle
    });
  } else {
    return /*#__PURE__*/React__default['default'].createElement("span", {
      ref: ref
    }, /*#__PURE__*/React__default['default'].cloneElement(children, {
      style: newStyle
    }));
  }
};

var _excluded$1 = ["width", "height", "children"],
    _excluded2 = ["style"];

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
var StyledDiv = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  position: relative;\n  &:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    ", ": 1px solid ", ";\n\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n      width: 200%;\n      height: 200%;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n    }\n  }\n"])), function (_ref) {
  var position = _ref.position;
  return 'border-' + position;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});

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

// 等待了wait毫秒后，如果visible还是true才显示spinner, 防止spinner闪烁
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

exports.AnimationElement = AnimationElement;
exports.HairLineBox = HairLineBox;
exports.LazyLoadElement = LazyLoadElement;
exports.LazyLoadImage = LazyLoadImage;
exports.Popup = Popup;
exports.Pullup = Pullup;
exports.Space = Space;
exports.TransitionElement = TransitionElement;
exports.WaitLoading = WaitLoading;
