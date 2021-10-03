import 'intersection-observer';
import { isBrowser } from './dom'; // this is common viewport scope observer with default root margin.

var intersectionObserver;
var handlers = new Map();

if (isBrowser) {
  intersectionObserver = new IntersectionObserver(function (entries) {
    var _a;

    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var entry = entries_1[_i];
      var el = entry.target;

      if (handlers.has(el)) {
        (_a = handlers.get(el)) === null || _a === void 0 ? void 0 : _a(entry.isIntersecting);
      }
    }
  });
}
/**
 * observe el
 *
 * @param {Element} el
 */


export var observe = function observe(el, action) {
  var _a;

  if (el) {
    (_a = intersectionObserver.observe) === null || _a === void 0 ? void 0 : _a.call(intersectionObserver, el);
    handlers.set(el, action);
  }
};
/**
 * unobserve el
 *
 * @param {Element} el
 */

export var unobserve = function unobserve(el) {
  var _a;

  if (el) {
    (_a = intersectionObserver.unobserve) === null || _a === void 0 ? void 0 : _a.call(intersectionObserver, el);
    handlers.delete(el);
  }
};
export var disconnect = function disconnect() {
  var _a;

  return (_a = intersectionObserver.disconnect) === null || _a === void 0 ? void 0 : _a.call(intersectionObserver);
};