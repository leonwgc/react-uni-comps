export type F = (...args) => void;
/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
export const debounce = (fn: F, timeout = 100): F => {
  let timer = 0;

  return function a(...args) {
    const that = this;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = window.setTimeout(() => {
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
export const throttle = (fn: F, timeout = 200, last = true): F => {
  let start = 0;
  let timer = 0;
  const ensureExecute = (now, args, that) => {
    if (!last) return;
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = window.setTimeout(() => {
      fn.apply(that, args);
      start = now;
    }, timeout);
  };
  return function (...args) {
    const that = this;
    const now = Date.now();
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
export const getProps = (
  props = {},
  propKeys: string[],
  isIncluded = true
): Record<string, unknown> => {
  let required = {};
  let rest = {};
  const keys = Object.keys(props);

  if (propKeys?.length) {
    keys.map((k) => {
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

const defaultEqualFn = (a, b) => a === b;

/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */
export const uniqArray = <T>(arr: T[], equalFn: (a: T, b: T) => boolean = defaultEqualFn): T[] => {
  const rt: T[] = [];

  if (Array.isArray(arr)) {
    arr.map((item) => {
      if (!rt.find((d) => equalFn(item, d))) {
        rt.push(item);
      }
    });
  }

  return rt;
};

export const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

/**
 * 扁平化对象数组
 *
 * @template T
 * @param {*} arr 待处理数组
 * @param {string} [childrenProp='children'] 子数组属性
 * @return {*}
 */
export const flatArray = <T>(arr: T[], childrenProp = 'children'): T[] => {
  if (Array.isArray(arr)) {
    return arr.reduce((a, v) => {
      if (Array.isArray(v)) {
        a = a.concat(flatArray(v as T[], childrenProp));
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
export const flatSimpleArray = <T>(arr: T[]): T[] => {
  if (Array.isArray(arr)) {
    return arr.reduce((a, v) => {
      return a.concat(Array.isArray(v) ? flatSimpleArray(v) : v);
    }, []);
  }

  return arr;
};
