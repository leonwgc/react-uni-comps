import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useImperativeHandle, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Button from './Button';
import Space from './Space';
import IconArrow from './IconArrow';
import useUpdateEffect from './hooks/useUpdateEffect';
/**
 * get pages arr
 *
 * @param {number} currentPage
 * @param {number} pageCount
 * @param {number} visiblePageCount
 * @return {*}  {Array<number>}
 */

function getPages(currentPage, pageCount, visiblePageCount) {
  var low, high, v;
  var pages = [];

  if (pageCount === 0) {
    return pages;
  }

  if (currentPage > pageCount) {
    currentPage = 1;
  }

  if (pageCount <= visiblePageCount) {
    low = 1;
    high = pageCount;
  } else {
    v = Math.ceil(visiblePageCount / 2);
    low = Math.max(currentPage - v, 1);
    high = Math.min(low + visiblePageCount - 1, pageCount);

    if (pageCount - high < v) {
      low = high - visiblePageCount + 1;
    }
  }

  for (; low <= high; low++) {
    pages.push(low);
  }

  return pages;
}

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  .uc-button {\n    width: 32px;\n    padding: 0;\n    transition: none;\n  }\n\n  &.no-page {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n"], ["\n  font-size: 14px;\n  .uc-button {\n    width: 32px;\n    padding: 0;\n    transition: none;\n  }\n\n  &.no-page {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n"])));
/** 分页 */

var Pagination = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.currentPage,
      currentPage = _a === void 0 ? 1 : _a,
      pageCount = props.pageCount,
      _b = props.visiblePageCount,
      visiblePageCount = _b === void 0 ? 10 : _b,
      _c = props.firstText,
      firstText = _c === void 0 ? /*#__PURE__*/React.createElement(Button, {
    as: "a"
  }, "\u9996\u9875") : _c,
      _d = props.lastText,
      lastText = _d === void 0 ? /*#__PURE__*/React.createElement(Button, {
    as: "a"
  }, "\u672B\u9875") : _d,
      showFirstLastText = props.showFirstLastText,
      showIfOnePage = props.showIfOnePage,
      onPageChange = props.onPageChange,
      className = props.className,
      rest = __rest(props, ["currentPage", "pageCount", "visiblePageCount", "firstText", "lastText", "showFirstLastText", "showIfOnePage", "onPageChange", "className"]);

  var domRef = useRef();

  var _e = useState(currentPage),
      page = _e[0],
      setPage = _e[1];

  var _f = useState(function () {
    return getPages(page, pageCount, visiblePageCount);
  }),
      pages = _f[0],
      setPages = _f[1];

  useUpdateEffect(function () {
    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(page);
  }, [page]); // outside

  useUpdateEffect(function () {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [currentPage]);
  useUpdateEffect(function () {
    setPages(getPages(page, pageCount, visiblePageCount));
  }, [visiblePageCount, page, pageCount]);
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var renderPage = function renderPage() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, showFirstLastText && /*#__PURE__*/React.createElement(Button, {
      className: "first-page",
      onClick: function onClick() {
        return setPage(1);
      },
      as: "a"
    }, firstText), /*#__PURE__*/React.createElement(Button, {
      className: "prev-page",
      disabled: page === 1,
      onClick: function onClick() {
        return setPage(function (p) {
          return Math.max(1, p - 1);
        });
      }
    }, /*#__PURE__*/React.createElement(IconArrow, {
      direction: "left"
    })), pages.map(function (p) {
      return /*#__PURE__*/React.createElement(Button, {
        outlined: p === page,
        className: clsx('page-item', {
          active: p === page
        }),
        key: p,
        onClick: function onClick() {
          return setPage(p);
        }
      }, p);
    }), /*#__PURE__*/React.createElement(Button, {
      className: "next-page",
      disabled: page === pageCount,
      onClick: function onClick() {
        return setPage(function (p) {
          return Math.min(pageCount, p + 1);
        });
      }
    }, /*#__PURE__*/React.createElement(IconArrow, {
      direction: "right"
    })), showFirstLastText && /*#__PURE__*/React.createElement(Button, {
      className: "last-page",
      onClick: function onClick() {
        return setPage(pageCount);
      },
      as: "a"
    }, lastText));
  };

  return (showIfOnePage || pageCount > 1) && /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: domRef,
    className: clsx('uc-pagination', className, {
      'no-page': visiblePageCount === 0
    })
  }), visiblePageCount === 0 && renderPage(), visiblePageCount > 0 && /*#__PURE__*/React.createElement(Space, null, renderPage()));
});
Pagination.displayName = 'UC-Pagination';
export default Pagination;
var templateObject_1;