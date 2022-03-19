//#region  top
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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Sortable from 'sortablejs';
import { nanoid } from 'nanoid';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""]))); //#endregion

var addKeyToList = function addKeyToList(list) {
  for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];

    if (!item._key) {
      item._key = nanoid(6);
    }
  }

  return list;
};
/**
 * 拖拽排序列表
 */


var SortableList = function SortableList(props) {
  var _a = props.dataList,
      dataList = _a === void 0 ? [] : _a,
      dataRender = props.dataRender,
      onSort = props.onSort,
      config = props.config,
      className = props.className,
      rest = __rest(props, ["dataList", "dataRender", "onSort", "config", "className"]);

  var wrapElRef = useRef();
  var keyedList = addKeyToList(dataList);
  var ref = useRef({
    list: keyedList,
    onSort: onSort,
    config: config
  });
  ref.current = {
    list: keyedList,
    onSort: onSort,
    config: config
  };
  useEffect(function () {
    var el = wrapElRef.current;
    var st;

    if (el) {
      st = Sortable.create(el, __assign(__assign({}, ref.current.config), {
        dataIdAttr: 'data-id',
        store: {
          set: function set(ss) {
            var _a, _b;

            var ar = ss.toArray();
            var newList = ref.current.list.sort(function (a, b) {
              return ar.indexOf(a._key) - ar.indexOf(b._key);
            });
            (_b = (_a = ref.current).onSort) === null || _b === void 0 ? void 0 : _b.call(_a, __spreadArray([], newList, true));
          }
        }
      }));
    }

    return function () {
      st.destroy();
    };
  }, [ref]);
  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    ref: wrapElRef,
    className: clsx('uc-sortable-list', className)
  }), keyedList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item._key,
      "data-id": item._key,
      className: "uc-sortable-item"
    }, dataRender(item));
  }));
};

SortableList.displayName = 'UC-SortableList';
export default SortableList;
var templateObject_1;