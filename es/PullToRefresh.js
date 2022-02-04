var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useRef, useImperativeHandle, useCallback, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { getScrollTop, isTouch } from './dom';
import Spin from './Spin';
import Space from './Space';
import { sleep } from './helper';
import FingerGesture from './FingerGesture';
var StyledWrap = styled(animated.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #999;\n  .head {\n    overflow: hidden;\n    position: relative;\n    .status-text {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"], ["\n  color: #999;\n  .head {\n    overflow: hidden;\n    position: relative;\n    .status-text {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"])));
/** 下拉刷新 */

var PullToRefresh = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.pullingText,
      pullingText = _a === void 0 ? '下拉刷新' : _a,
      _b = props.canReleaseText,
      canReleaseText = _b === void 0 ? '释放立即刷新' : _b,
      _c = props.refreshingText,
      refreshingText = _c === void 0 ? /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Spin, null), "\u52A0\u8F7D\u4E2D...") : _c,
      _d = props.completeText,
      completeText = _d === void 0 ? '刷新成功' : _d,
      _e = props.completeDelay,
      completeDelay = _e === void 0 ? 500 : _e,
      _f = props.useWindowScroll,
      useWindowScroll = _f === void 0 ? true : _f,
      onRefresh = props.onRefresh,
      _g = props.headHeight,
      headHeight = _g === void 0 ? 40 : _g,
      _h = props.threshold,
      threshold = _h === void 0 ? 60 : _h,
      className = props.className,
      renderText = props.renderText,
      children = props.children,
      style = props.style,
      rest = __rest(props, ["pullingText", "canReleaseText", "refreshingText", "completeText", "completeDelay", "useWindowScroll", "onRefresh", "headHeight", "threshold", "className", "renderText", "children", "style"]);

  var _j = useState('pulling'),
      status = _j[0],
      setStatus = _j[1];

  var dRef = useRef(0);

  var _k = useSpring(function () {
    return {
      from: {
        height: 0
      }
    };
  }),
      springStyles = _k[0],
      api = _k[1];

  var wrapRef = useRef(null);
  var isPullingRef = useRef(false);
  useImperativeHandle(ref, function () {
    return wrapRef.current;
  });

  function doRefresh() {
    return __awaiter(this, void 0, void 0, function () {
      var e_1;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            api.start({
              height: headHeight
            });
            setStatus('refreshing');
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh()];

          case 2:
            _a.sent();

            setStatus('complete');
            return [3
            /*break*/
            , 4];

          case 3:
            e_1 = _a.sent();
            api.start({
              to: function to(next) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , next({
                          height: 0
                        })];

                      case 1:
                        _a.sent();

                        setStatus('pulling');
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            });
            throw e_1;

          case 4:
            if (!(completeDelay > 0)) return [3
            /*break*/
            , 6];
            return [4
            /*yield*/
            , sleep(completeDelay)];

          case 5:
            _a.sent();

            _a.label = 6;

          case 6:
            api.start({
              to: function to(next) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , next({
                          height: 0
                        })];

                      case 1:
                        _a.sent();

                        setStatus('pulling');
                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  var renderStatusText = function renderStatusText() {
    if (renderText) {
      return renderText(status);
    }

    if (status === 'pulling') return pullingText;
    if (status === 'canRelease') return canReleaseText;
    if (status === 'refreshing') return refreshingText;
    if (status === 'complete') return completeText;
  };

  var touchEnd = useCallback(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            dRef.current = 0;

            if (!isPullingRef.current) {
              return [2
              /*return*/
              ];
            }

            isPullingRef.current = false;

            if (status === 'refreshing' || status === 'complete') {
              return [2
              /*return*/
              ];
            }

            if (!(status === 'canRelease')) return [3
            /*break*/
            , 5];
            _a.label = 1;

          case 1:
            _a.trys.push([1,, 3, 4]);

            return [4
            /*yield*/
            , doRefresh()];

          case 2:
            _a.sent();

            return [3
            /*break*/
            , 4];

          case 3:
            setStatus('pulling');
            return [7
            /*endfinally*/
            ];

          case 4:
            return [3
            /*break*/
            , 6];

          case 5:
            api.start({
              height: 0
            });
            _a.label = 6;

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, [api, status]);
  useLayoutEffect(function () {
    // https://zhuanlan.zhihu.com/p/322525887
    var y = 0;

    var _touchStart = function _touchStart(e) {
      return y = e.touches[0].pageY;
    };

    var _touchEnd = function _touchEnd() {
      y = 0;
      touchEnd();
    };

    var _touchMove = function _touchMove(e) {
      var el = wrapRef.current;
      var scrollTop = getScrollTop(useWindowScroll ? window : el);
      var y1 = e.touches[0].pageY;

      if (y1 - y > 0 && scrollTop === 0) {
        e.preventDefault();
        isPullingRef.current = true;
      }
    };

    var options = {
      passive: false
    };
    document.addEventListener('touchstart', function (e) {
      y = e.touches[0].pageY;
    });
    document.addEventListener('touchmove', _touchMove, options);
    document.addEventListener('touchend', _touchEnd);
    return function () {
      document.removeEventListener('touchstart', _touchStart);
      document.removeEventListener('touchmove', _touchMove, options);
      document.removeEventListener('touchend', _touchEnd);
    };
  }, [useWindowScroll, touchEnd]);
  var evtProps = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = function () {
    dRef.current = 0;
  };

  var statusText = /*#__PURE__*/React.createElement(animated.div, {
    style: springStyles,
    className: "head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "status-text",
    style: {
      height: headHeight
    }
  }, renderStatusText()));

  if (children && ! /*#__PURE__*/React.isValidElement(children)) {
    throw Error('children must be a valid ReactElement');
  }

  var childrenProps = __assign(__assign({}, children === null || children === void 0 ? void 0 : children.props), {
    ref: wrapRef
  });

  if (!useWindowScroll) {
    // Pullup or any other comp
    childrenProps.children = statusText;
  }

  useLayoutEffect(function () {
    var el = wrapRef.current;
    var fg = new FingerGesture(el, {
      onPressMove: function onPressMove(e) {
        if (!isPullingRef.current) return;
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
  }, [api, threshold]);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({
    ref: wrapRef
  }, rest, {
    className: clsx(className, 'uc-pull-to-refresh'),
    style: __assign(__assign({}, style), {
      touchAction: 'pan-y'
    })
  }), useWindowScroll && statusText, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, childrenProps) : children));
});
PullToRefresh.displayName = 'UC-PullToRefresh';
export default PullToRefresh;
var templateObject_1;