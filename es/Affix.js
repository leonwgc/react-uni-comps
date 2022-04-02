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

import React, { useEffect, useRef, useState, useCallback } from 'react';
import useCallbackRef from './hooks/useCallbackRef';
import { throttle } from './helper';
import clsx from 'clsx';
/** 将页面元素钉在可视范围*/

var Affix = function Affix(props) {
  var children = props.children,
      offsetTop = props.offsetTop,
      offsetBottom = props.offsetBottom,
      _a = props.zIndex,
      zIndex = _a === void 0 ? 100 : _a,
      target = props.target,
      onChange = props.onChange,
      rest = __rest(props, ["children", "offsetTop", "offsetBottom", "zIndex", "target", "onChange"]);

  var _b = useState({
    affixed: false,
    width: 0,
    height: 0
  }),
      data = _b[0],
      setData = _b[1];

  var onChangeRef = useCallbackRef(onChange);
  var targetRef = useRef(target);
  var wrapElRef = useRef();
  var fixedElRef = useRef();
  var targetRectRef = useRef({
    top: 0,
    bottom: 0
  });
  var wrapElTopRef = useRef('offsetBottom' in props ? -10000 : 10000);
  var offsetRef = useRef({
    offsetBottom: offsetBottom,
    offsetTop: typeof offsetTop === 'number' ? offsetTop : typeof offsetBottom !== 'number' && 0
  });
  var getAffixed = useCallback(function () {
    var targetRect = targetRectRef.current;
    var wrapElTop = wrapElTopRef.current;
    var _a = offsetRef.current,
        offsetTop = _a.offsetTop,
        offsetBottom = _a.offsetBottom;

    if (typeof offsetBottom === 'number' && wrapElTop + offsetBottom >= targetRect.bottom) {
      return true;
    }

    if (typeof offsetBottom !== 'number' && typeof offsetTop === 'number' && wrapElTop - offsetTop <= targetRect.top) {
      return true;
    }

    return false;
  }, []);
  var getAffixeStyle = useCallback(function () {
    var targetRect = targetRectRef.current;
    var _a = offsetRef.current,
        offsetTop = _a.offsetTop,
        offsetBottom = _a.offsetBottom;
    var width = data.width,
        height = data.height;
    var affixed = getAffixed();

    if (affixed && typeof offsetBottom === 'number') {
      return {
        position: 'fixed',
        bottom: offsetBottom,
        width: width,
        height: height,
        zIndex: zIndex
      };
    }

    if (affixed && typeof offsetTop === 'number') {
      return {
        position: 'fixed',
        top: targetRect.top + offsetTop,
        width: width,
        height: height,
        zIndex: zIndex
      };
    }

    return {};
  }, [getAffixed, data, zIndex]);
  useEffect(function () {
    var _a;

    var t = ((_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.call(targetRef)) || window;
    targetRectRef.current = t !== window ? t.getBoundingClientRect() : {
      top: 0,
      bottom: t.innerHeight,
      width: 0,
      height: 0
    };
  }, [targetRef, targetRectRef]);
  var onScrollUpdate = useCallback(function () {
    var _a;

    var affixed = data.affixed;
    var wrapEl = wrapElRef.current;
    if (!wrapEl) return;

    var _b = wrapEl.getBoundingClientRect(),
        top = _b.top,
        width = _b.width,
        height = _b.height;

    wrapElTopRef.current = top;
    var currentAffixed = getAffixed();

    if (currentAffixed !== affixed) {
      setData({
        affixed: currentAffixed,
        width: width === 0 ? 'auto' : width,
        height: height === 0 ? 'auto' : height
      });
      (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, currentAffixed);
    }
  }, [getAffixed, onChangeRef, data]);
  useEffect(function () {
    var _a;

    var onScroll = throttle(onScrollUpdate, 16, false);
    var t = ((_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.call(targetRef)) || window;
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
    return /*#__PURE__*/React.createElement("div", {
      ref: wrapElRef,
      className: "uc-affix"
    }, children);
  }

  return /*#__PURE__*/React.createElement("div", {
    ref: wrapElRef,
    className: clsx('uc-affix', 'affixed')
  }, /*#__PURE__*/React.createElement("div", __assign({
    ref: fixedElRef
  }, rest, {
    style: getAffixeStyle()
  }), children));
};

Affix.displayName = 'UC-Affix';
export default Affix;