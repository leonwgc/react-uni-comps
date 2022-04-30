var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

import { useState } from 'react';
import { nanoid } from 'nanoid';

function gid() {
  return nanoid(12);
}
/**
 * 数据列表
 *
 * @template T
 * @param {Array<T>} [arr=[]]
 * @return {*}  {List<T>}
 */


var useList = function useList(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var _a = useState(arr),
      list = _a[0],
      setList = _a[1];

  var _b = useState(function () {
    var len = arr.length;
    var r = [];

    for (var i = 0; i < len; i++) {
      r[i] = gid();
    }

    return r;
  }),
      keys = _b[0],
      setKeys = _b[1]; // add a new item


  var add = function add(value) {
    setList(__spreadArray(__spreadArray([], list, true), [value], false));
    setKeys(__spreadArray(__spreadArray([], keys, true), [gid()], false));
  }; // remove item at index


  var remove = function remove(index) {
    list.splice(index, 1);
    keys.splice(index, 1);
    setList(__spreadArray([], list, true));
    setKeys(__spreadArray([], keys, true));
  }; // set value at index


  var set = function set(index, value) {
    var _arr = list.slice();

    _arr[index] = value;
    setList(__spreadArray([], _arr, true));
  };

  var moveUp = function moveUp(index) {
    if (index > 0) {
      var t = list[index - 1];
      list[index - 1] = list[index];
      list[index] = t;
      setList(__spreadArray([], list, true));
    }
  };

  var moveDown = function moveDown(index) {
    if (index < list.length - 1) {
      var t = list[index + 1];
      list[index + 1] = list[index];
      list[index] = t;
      setList(__spreadArray([], list, true));
    }
  };

  return {
    list: list,
    add: add,
    remove: remove,
    keys: keys,
    set: set,
    moveUp: moveUp,
    moveDown: moveDown
  };
};

export default useList;