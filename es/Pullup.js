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

import React, { useEffect, useRef, useState, useImperativeHandle, useCallback } from 'react';
import Spin from './Spin';
import Space from './Space';
import useInViewport from './hooks/useInViewport';
import usePrevious from './hooks/usePrevious';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import clsx from 'clsx';
import { getScrollTop, isTouch } from './dom';
import { animationNormal, animationSlow } from './vars';
import useCallbackRef from './hooks/useCallbackRef';
var RefreshDistance = 30;
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.dom-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  transition: transform ", "ms ease-in-out;\n\n  .loading {\n    color: #909090;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    height: 50px;\n\n    .uc-spin {\n      font-size: 20px;\n    }\n  }\n\n  .refresh {\n    transition: height ", "ms ease-in-out;\n    height: 0;\n    &.active {\n      height: 40px;\n    }\n  }\n"], ["\n  &.dom-scroll {\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  transition: transform ", "ms ease-in-out;\n\n  .loading {\n    color: #909090;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    height: 50px;\n\n    .uc-spin {\n      font-size: 20px;\n    }\n  }\n\n  .refresh {\n    transition: height ", "ms ease-in-out;\n    height: 0;\n    &.active {\n      height: 40px;\n    }\n  }\n"])), animationSlow, animationNormal); // check isInViewport in vertical direction

function isInViewport(el, container) {
  var _a = el.getBoundingClientRect(),
      top = _a.top,
      bottom = _a.bottom;

  if (!container) {
    return bottom >= 0 && top < window.innerHeight;
  } else {
    var brc = container.getBoundingClientRect();
    return bottom <= brc.bottom && top >= brc.top;
  }
}

var DefaultLoadingText = /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Spin, null), "\u52A0\u8F7D\u4E2D");
/** 上拉加载更多数据/下拉刷新
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */

var Pullup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.dataList,
      dataList = _a === void 0 ? [] : _a,
      _b = props.dataRender,
      dataRender = _b === void 0 ? function () {
    return null;
  } : _b,
      fetchData = props.fetchData,
      _c = props.loadingText,
      loadingText = _c === void 0 ? DefaultLoadingText : _c,
      _d = props.finishedText,
      finishedText = _d === void 0 ? '我是有底线的' : _d,
      _e = props.refreshText,
      refreshText = _e === void 0 ? DefaultLoadingText : _e,
      _f = props.finished,
      finished = _f === void 0 ? false : _f,
      className = props.className,
      useWindowScroll = props.useWindowScroll,
      refresh = props.refresh,
      footer = props.footer,
      rest = __rest(props, ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "refreshText", "finished", "className", "useWindowScroll", "refresh", "footer"]);

  var _g = useState(false),
      loading = _g[0],
      setLoading = _g[1];

  var waypointRef = useRef();
  var wrapRef = useRef();
  var isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : wrapRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  var moveRef = useRef({
    isMoving: false,
    y: 0
  });

  var _h = useState(false),
      isRefreshing = _h[0],
      setIsRefreshing = _h[1];

  var refreshRef = useCallbackRef(refresh);
  useImperativeHandle(ref, function () {
    return wrapRef.current;
  });
  useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(waypointRef.current, useWindowScroll ? null : wrapRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);
  var resetRefreshStatus = useCallback(function () {
    var el = wrapRef.current;
    var moveInfo = moveRef.current;
    setIsRefreshing(false);
    moveInfo.y = 0;
    el.style.transform = 'none';
    el.style.touchAction = 'auto';
  }, []);
  useEffect(function () {
    // no refresh no pulldown handle
    var supportRefresh = typeof refreshRef.current === 'function';
    if (!supportRefresh) return;
    var el = wrapRef.current;
    var moveInfo = moveRef.current;

    var touchStart = function touchStart() {
      el.style.transitionProperty = 'none';
      el.style.touchAction = 'none';
      document.body.offsetHeight;
      moveInfo.isMoving = true;
      moveInfo.y = 0;
    };

    var touchEnd = function touchEnd() {
      if (moveInfo.isMoving) {
        moveInfo.isMoving = false;
        setTimeout(resetRefreshStatus, 300);
      }
    };

    el.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

    if (!isTouch) {
      document.addEventListener('mouseup', touchEnd);
    } else {
      el.addEventListener('touchend', touchEnd);
    }

    return function () {
      if (!supportRefresh) return;
      el.removeEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);

      if (!isTouch) {
        document.removeEventListener('mouseup', touchEnd);
      } else {
        el.removeEventListener('touchend', touchEnd);
      }
    };
  }, [resetRefreshStatus, refreshRef]);
  var setRefreshStatus = useCallback(function (scrollTop, isRefreshing, y) {
    if (scrollTop <= 0 && !isRefreshing && y === RefreshDistance) {
      var el = wrapRef.current;
      setIsRefreshing(true);
      el.style.transitionProperty = 'transform';
      refreshRef.current().then(resetRefreshStatus).catch(resetRefreshStatus);
    }
  }, [resetRefreshStatus, refreshRef]);
  return /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: wrapRef,
    onPressMove: function onPressMove(e) {
      // no refresh no pulldown handle
      if (typeof refreshRef.current !== 'function') return;
      var el = wrapRef.current;
      var moveInfo = moveRef.current;
      el.style.touchAction = e.deltaY > 0 ? 'none' : 'auto';

      if (!moveInfo.isMoving) {
        return resetRefreshStatus();
      }

      var scrollTop = getScrollTop(useWindowScroll ? window : el);
      moveInfo.y = Math.min(RefreshDistance, moveInfo.y + e.deltaY);

      if (moveInfo.y > 0 && moveInfo.y < RefreshDistance) {
        // down
        el.style.transform = "translate3d(0, ".concat(moveInfo.y, "px, 0)");
      }

      setRefreshStatus(scrollTop, isRefreshing, moveInfo.y); // double check to reset status

      setTimeout(function () {
        if (!isRefreshing) {
          resetRefreshStatus();
        }
      }, 1000);
    }
  }, /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx('uc-pullup', className, {
      'dom-scroll': !useWindowScroll,
      'window-scroll': useWindowScroll
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('loading refresh', {
      active: isRefreshing
    })
  }, isRefreshing && refreshText), dataList.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: idx
    }, dataRender(item, idx));
  }), /*#__PURE__*/React.createElement("span", {
    className: "waypoint",
    style: {
      fontSize: 0
    },
    ref: waypointRef
  }), typeof footer === 'function' ? footer(loading, finished) : /*#__PURE__*/React.createElement("div", {
    className: "loading"
  }, loading ? loadingText : finished ? finishedText : null)));
});
Pullup.displayName = 'UC-Pullup';
export default Pullup;
var templateObject_1;