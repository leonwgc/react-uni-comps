import { __assign, __awaiter, __generator, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle, useCallback, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { getScrollTop } from './dom';
import Spin from './Spin';
import Space from './Space';
import { sleep } from './helper';
import Touch from 'w-touch';
import useCallbackRef from './hooks/useCallbackRef';
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
      useWindowScroll = props.useWindowScroll,
      onRefresh = props.onRefresh,
      _f = props.headHeight,
      headHeight = _f === void 0 ? 40 : _f,
      _g = props.threshold,
      threshold = _g === void 0 ? 60 : _g,
      className = props.className,
      renderText = props.renderText,
      children = props.children,
      style = props.style,
      rest = __rest(props, ["pullingText", "canReleaseText", "refreshingText", "completeText", "completeDelay", "useWindowScroll", "onRefresh", "headHeight", "threshold", "className", "renderText", "children", "style"]);

  var _h = useState('init'),
      status = _h[0],
      setStatus = _h[1];

  var statusRef = useCallbackRef(status);
  var dRef = useRef(0);

  var _j = useSpring(function () {
    return {
      from: {
        height: 0
      }
    };
  }),
      springStyles = _j[0],
      api = _j[1];

  var wrapRef = useRef(null); // could be wrapper / children El instance

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
                          height: 0,
                          onRest: function onRest() {
                            return setStatus('init');
                          }
                        })];

                      case 1:
                        _a.sent();

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
                          height: 0,
                          onRest: function onRest() {
                            return setStatus('init');
                          }
                        })];

                      case 1:
                        _a.sent();

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

    if (status === 'init') return null;
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
            isPullingRef.current = false;
            return [2
            /*return*/
            ];
        }
      });
    });
  }, [api, status]);
  useLayoutEffect(function () {
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

  useLayoutEffect(function () {
    var el = wrapRef.current;
    var fg = new Touch(el, {
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
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({
    ref: wrapRef
  }, rest, {
    className: clsx('uc-pull-to-refresh', className, {
      'use-dom-scroll': !useWindowScroll,
      'use-window-scroll': useWindowScroll
    }),
    style: __assign(__assign({}, style), {
      touchAction: 'pan-y'
    })
  }), statusText, /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, {
    ref: wrapRef
  }) : children);
});
PullToRefresh.displayName = 'UC-PullToRefresh';
export default PullToRefresh;
var templateObject_1;