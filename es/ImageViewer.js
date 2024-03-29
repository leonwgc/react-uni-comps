import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useEffect, useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Slide from './Slide';
import useLatest from './hooks/useLatest';
import Space from './Space';
import useUpdateEffect from './hooks/useUpdateEffect';
import Icon from './Icon';
import Mask from './Mask';
import Button from './Button';
import IconArrow from './IconArrow';
var StyledImageViewer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1200;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  touch-action: none;\n  user-select: none;\n  flex-direction: column;\n\n  .page {\n    position: absolute;\n    left: 50%;\n    top: 16px;\n    transform: translate3d(-50%, 0, 0);\n    color: #e6e6e6;\n    font-size: 14px;\n  }\n\n  .close {\n    position: absolute;\n    right: 32px;\n    top: 32px;\n    color: #e6e6e6;\n    font-size: 24px;\n  }\n\n  .close {\n    position: fixed;\n    right: 16px;\n    top: 16px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 16px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    object-fit: scale-down;\n  }\n"], ["\n  position: fixed;\n  z-index: 1200;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  touch-action: none;\n  user-select: none;\n  flex-direction: column;\n\n  .page {\n    position: absolute;\n    left: 50%;\n    top: 16px;\n    transform: translate3d(-50%, 0, 0);\n    color: #e6e6e6;\n    font-size: 14px;\n  }\n\n  .close {\n    position: absolute;\n    right: 32px;\n    top: 32px;\n    color: #e6e6e6;\n    font-size: 24px;\n  }\n\n  .close {\n    position: fixed;\n    right: 16px;\n    top: 16px;\n    cursor: pointer;\n    color: #fff;\n    font-size: 16px;\n  }\n\n  .uc-icon-arrow {\n    cursor: pointer;\n  }\n\n  img {\n    width: 100%;\n    object-fit: scale-down;\n  }\n"])));
/** 图片查看器 */

var ImageViewer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      onClose = props.onClose,
      images = props.images,
      onIndexChange = props.onIndexChange,
      _a = props.prev,
      prev = _a === void 0 ? /*#__PURE__*/React.createElement(IconArrow, {
    direction: "left"
  }) : _a,
      _b = props.next,
      next = _b === void 0 ? /*#__PURE__*/React.createElement(IconArrow, {
    direction: "right"
  }) : _b,
      _c = props.showPrevNextButton,
      showPrevNextButton = _c === void 0 ? false : _c,
      maskStyle = props.maskStyle,
      rest = __rest(props, ["className", "visible", "onClose", "images", "onIndexChange", "prev", "next", "showPrevNextButton", "maskStyle"]);

  var _d = useState(Array.isArray(images) ? images : [images]),
      urls = _d[0],
      setUrls = _d[1];

  var _e = useState(0),
      index = _e[0],
      setIndex = _e[1];

  var onIndexChangeRef = useLatest(onIndexChange);
  var slideRef = useRef();
  useEffect(function () {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);
  useUpdateEffect(function () {
    if (!visible) {
      setIndex(0);
    }
  }, [visible]);
  var slides = useMemo(function () {
    return /*#__PURE__*/React.createElement(Slide, {
      ref: slideRef,
      showPageIndicator: false,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      direction: "horizontal",
      height: '70vh',
      onPageChange: function onPageChange(index) {
        var _a;

        setIndex(index);
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, index);
      },
      autoPlay: false
    }, urls.map(function (url) {
      return /*#__PURE__*/React.createElement("img", {
        src: url,
        key: url
      });
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urls, slideRef]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Mask, {
    visible: visible,
    style: maskStyle,
    duration: 0
  }), visible && /*#__PURE__*/React.createElement(StyledImageViewer, __assign({
    onClick: function onClick(e) {
      if (e.target.nodeName === 'IMG') {
        return;
      }

      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, rest, {
    ref: ref,
    className: clsx('uc-image-viewer', className)
  }), slides, urls.length > 1 && showPrevNextButton && /*#__PURE__*/React.createElement(Space, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: function onClick(e) {
      e.stopPropagation();
      slideRef.current.prev();
    }
  }, prev), /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: function onClick(e) {
      e.stopPropagation();
      slideRef.current.next();
    }
  }, next)), urls.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: clsx('page')
  }, /*#__PURE__*/React.createElement(Space, {
    size: 4
  }, index + 1, " / ", urls.length)), /*#__PURE__*/React.createElement("div", {
    className: "close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-guanbi"
  }))));
});
ImageViewer.displayName = 'UC-ImageViewer';
export default ImageViewer;
var templateObject_1;