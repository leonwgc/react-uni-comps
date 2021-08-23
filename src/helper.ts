export type F = (...args) => void;

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

export const throttle = (fn: F, timeout = 200): F => {
  let start = 0;
  let timer = 0;
  const ensureExecute = (now, args, that) => {
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
