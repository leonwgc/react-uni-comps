import { __assign, __rest } from "tslib";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import useLatest from './hooks/useLatest';
import clsx from 'clsx';
import useEventListener from './hooks/useEventListener';
import useThrottle from './hooks/useThrottle';
import { getTargetElement } from './helper';
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

  var onChangeRef = useLatest(onChange);
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
    var t = getTargetElement(targetRef.current) || window;
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
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [getAffixed, data]);
  var onScroll = useThrottle(onScrollUpdate, 16);
  useEventListener(target, 'scroll', onScroll);
  var affixed = data.affixed;

  if (!affixed) {
    return /*#__PURE__*/React.createElement("div", {
      ref: wrapElRef,
      className: "uc-affix"
    }, children);
  }

  return /*#__PURE__*/React.createElement("div", __assign({}, rest, {
    ref: wrapElRef,
    className: clsx('uc-affix', 'affixed')
  }), /*#__PURE__*/React.createElement("div", {
    ref: fixedElRef,
    style: getAffixeStyle()
  }, children));
};

Affix.displayName = 'UC-Affix';
export default Affix;