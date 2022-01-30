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

var defaultEqualFn = function defaultEqualFn(a, b) {
  return a === b;
};
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */


export var uniqArray = function uniqArray(arr, equalFn) {
  if (equalFn === void 0) {
    equalFn = defaultEqualFn;
  }

  var rt = [];

  if (Array.isArray(arr)) {
    arr.map(function (item) {
      if (!rt.find(function (d) {
        return equalFn(item, d);
      })) {
        rt.push(item);
      }
    });
  }

  return rt;
};
export var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * 扁平化对象数组
 *
 * @template T
 * @param {*} arr 待处理数组
 * @param {string} [childrenProp='children'] 子数组属性
 * @return {*}
 */

export var flatArray = function flatArray(arr, childrenProp) {
  if (childrenProp === void 0) {
    childrenProp = 'children';
  }

  if (Array.isArray(arr)) {
    return arr.reduce(function (a, v) {
      if (Array.isArray(v)) {
        a = a.concat(flatArray(v, childrenProp));
      } else if (isObject(v)) {
        a = a.concat(v);

        if (Array.isArray(v[childrenProp])) {
          a = a.concat(flatArray(v[childrenProp], childrenProp));
        }
      }

      return a;
    }, []);
  }

  return arr;
};
/**
 * 扁平化简单数组(元素不是对象)
 *
 * @template T
 * @param {*} arr 待处理数组
 * @return {*}
 */

export var flatSimpleArray = function flatSimpleArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(function (a, v) {
      return a.concat(Array.isArray(v) ? flatSimpleArray(v) : v);
    }, []);
  }

  return arr;
};