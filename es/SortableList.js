//#region  top
import { __assign, __makeTemplateObject, __rest, __spreadArray } from "tslib";
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Sortable from 'sortablejs';
import { nanoid } from 'nanoid';
import { prefixClassName } from './helper';
import useLatest from './hooks/useLatest';
var getClassName = prefixClassName('uc-sortable-list');
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
  var ref = useLatest({
    list: keyedList,
    onSort: onSort,
    config: config
  });
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
    className: clsx(getClassName(), className)
  }), keyedList.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item._key,
      "data-id": item._key,
      className: getClassName('item')
    }, dataRender(item));
  }));
};

SortableList.displayName = 'UC-SortableList';
export default SortableList;
var templateObject_1;