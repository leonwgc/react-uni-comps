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
 * 截流
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
