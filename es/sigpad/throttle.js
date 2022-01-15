/* eslint-disable @typescript-eslint/no-explicit-any */
// Slightly simplified version of http://stackoverflow.com/a/27078401/815507
export function throttle(fn, wait) {
  if (wait === void 0) {
    wait = 250;
  }

  var previous = 0;
  var timeout = null;
  var result;
  var storedContext;
  var storedArgs;

  var later = function later() {
    previous = Date.now();
    timeout = null;
    result = fn.apply(storedContext, storedArgs);

    if (!timeout) {
      storedContext = null;
      storedArgs = [];
    }
  };

  return function wrapper() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var now = Date.now();
    var remaining = wait - (now - previous);
    storedContext = this;
    storedArgs = args;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = fn.apply(storedContext, storedArgs);

      if (!timeout) {
        storedContext = null;
        storedArgs = [];
      }
    } else if (!timeout) {
      timeout = window.setTimeout(later, remaining);
    }

    return result;
  };
}