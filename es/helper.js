/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
export var debounce = function debounce(fn, timeout) {
  if (timeout === void 0) {
    timeout = 100;
  }

  var timer = 0;
  return function a() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var that = this;

    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, args);
    }, timeout);
  };
};
/**
 * 节流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */

export var throttle = function throttle(fn, timeout, last) {
  if (timeout === void 0) {
    timeout = 200;
  }

  if (last === void 0) {
    last = true;
  }

  var start = 0;
  var timer = 0;

  var ensureExecute = function ensureExecute(now, args, that) {
    if (!last) return;

    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }

    timer = window.setTimeout(function () {
      fn.apply(that, args);
      start = now;
    }, timeout);
  };

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var that = this;
    var now = Date.now();

    if (!start) {
      start = now;
      ensureExecute(now, args, that);
      return;
    }

    if (now - start >= timeout) {
      ensureExecute(now, args, that);
      fn.apply(that, args);
      start = now;
    }
  };
};
/**
 *  获取部分props
 *
 * @param {*} [props={}]
 * @param {string[]} propKeys
 * @param {boolean} [isIncluded=true]
 * @return {*}  {Record<string, unknown>}
 */

export var getProps = function getProps(props, propKeys, isIncluded) {
  if (props === void 0) {
    props = {};
  }

  if (isIncluded === void 0) {
    isIncluded = true;
  }

  var required = {};
  var rest = {};
  var keys = Object.keys(props);

  if (propKeys === null || propKeys === void 0 ? void 0 : propKeys.length) {
    keys.map(function (k) {
      if (propKeys.includes(k)) {
        required[k] = props[k];
      } else {
        rest[k] = props[k];
      }
    });
  } else {
    required = {};
    rest = props;
  }

  return isIncluded ? required : rest;
};
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(l: T, r: T) => boolean} predicate 判断函数,数组重复条件, e.g. l===r / l.id===r.id
 * @return {*}  {T[]}
 */

export var uniqArray = function uniqArray(arr, predicate) {
  var rt = [];

  if (Array.isArray(arr)) {
    arr.map(function (item) {
      if (!rt.find(function (d) {
        return predicate(item, d);
      })) {
        rt.push(item);
      }
    });
  }

  return rt;
};