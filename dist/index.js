'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var reactTransitionGroup = require('react-transition-group');
var styled = require('styled-components');
var clsx = require('clsx');
var web = require('@react-spring/web');
var reactIs = require('react-is');
require('intersection-observer');
var Popover = require('w-popover');
var Touch = require('w-touch');
var color = require('color');
var SignaturePad = require('signature_pad');
var WQRCode = require('w-qrcode');
var Sortable = require('sortablejs');
var nanoid = require('nanoid');
var i18n = require('i18next');
var reactI18next = require('react-i18next');
var RcForm = require('rc-field-form');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);
var Popover__default = /*#__PURE__*/_interopDefaultLegacy(Popover);
var Touch__default = /*#__PURE__*/_interopDefaultLegacy(Touch);
var color__default = /*#__PURE__*/_interopDefaultLegacy(color);
var SignaturePad__default = /*#__PURE__*/_interopDefaultLegacy(SignaturePad);
var WQRCode__default = /*#__PURE__*/_interopDefaultLegacy(WQRCode);
var Sortable__default = /*#__PURE__*/_interopDefaultLegacy(Sortable);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
var RcForm__default = /*#__PURE__*/_interopDefaultLegacy(RcForm);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 *  组件卸载执行回调
 *
 * @param {() => void} fn 执行的回调
 */

var useUnmount = function useUnmount(fn) {
  React.useEffect(function () {
    return function () {
      fn === null || fn === void 0 ? void 0 : fn();
    };
  }, []);
};

/** 统一浅色边框色 */
var border = '#d9d9d9';
var disabledText = 'rgba(0, 0, 0, 0.25)';
var primary = '#005cff';
var danger = '#ff4d4f';
var activeBg = 'rgba(0, 0, 0, 0.1)';
/** 统一边框阴影 */

var boxShadow = '0 2px 12px 0 rgba(0, 0, 0, 0.1)';
/** 慢速动画时间, 单位:ms */

var animationSlow = 280;
/** 中速动画时间, 单位:ms */

var animationNormal = 220;
/** 快速动画时间, 单位:ms  */

var animationFast = 160;

var _excluded = ["className", "visible", "duration", "style", "hideOverflow", "opacity"];
var StyledMask = /*#__PURE__*/styled__default['default'](web.animated.div).withConfig({
  displayName: "Mask__StyledMask",
  componentId: "sc-1t93aio-0"
})(["background-color:rgba(0,0,0);z-index:100;position:fixed;left:0;top:0;bottom:0;right:0;width:100%;touch-action:none;"]);

/** 遮罩层 */
var Mask = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? animationSlow : _props$duration,
      style = props.style,
      _props$hideOverflow = props.hideOverflow,
      hideOverflow = _props$hideOverflow === void 0 ? true : _props$hideOverflow,
      _props$opacity = props.opacity,
      opacity = _props$opacity === void 0 ? 0.45 : _props$opacity,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = React.useState(visible),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var styles = web.useSpring({
    opacity: visible ? opacity : 0,
    immediate: duration === 0,
    onStart: function onStart() {
      setActive(true);
    },
    onRest: function onRest() {
      setActive(visible);
    },
    config: {
      duration: duration
    }
  });
  React.useEffect(function () {
    document.body.style.overflow = visible && hideOverflow ? 'hidden' : '';
  }, [visible, hideOverflow]);
  useUnmount(function () {
    document.body.style.overflow = '';
  });
  return active || visible ? /*#__PURE__*/React__default['default'].createElement(StyledMask, _extends({
    ref: ref
  }, rest, {
    className: clsx__default['default']('uc-mask', className),
    style: _objectSpread2(_objectSpread2({}, styles), style)
  })) : null;
});
Mask.displayName = 'UC-Mask';

/** 是否是浏览器 */

var isBrowser = !!(typeof window !== 'undefined' && window);
/** 是否是移动端 */

var isMobile = isBrowser && /(iPhone|iPad|iPod|iOS|android)/i.test(navigator.userAgent);
/**
 *
 * 是否支持某个css属性
 * @param {string} prop
 * @return {*}  {boolean}
 */

var isCssPropExist = function isCssPropExist(prop) {
  return isBrowser && prop && prop in document.documentElement.style;
};
var _passiveIfSupported = false;

try {
  isBrowser && window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function get() {
      _passiveIfSupported = {
        passive: true
      };
    }
  }));
} catch (err) {}

/**
 *  container内部元素卸载前执行过渡动画, 配合renderElement使用(Notify,Toast,AlertDialog)
 *
 * @param {HTMLElement} container
 * @param {string} selector
 * @param {number} timeout
 * @return {*}  {Promise<void>}
 */
var beforeDisposeGen = function beforeDisposeGen(container, selector, timeout) {
  return function () {
    return new Promise(function (dispose) {
      var el = container.querySelector(selector);

      if (el) {
        el.classList.remove('to');
        el.classList.add('from');
      }

      setTimeout(dispose, timeout);
    });
  };
};
/**
 * 自定义渲染元素到容器
 *
 * @param {ReactElement} element
 * @param {HTMLElement} [container]
 * @return {Dispose}  dispose
 */

var renderElement = function renderElement(element, container) {
  var dom = container || document.createElement('div');
  document.body.appendChild(dom);
  ReactDOM__default['default'].render(element, dom);

  var dispose = function dispose() {
    ReactDOM__default['default'].unmountComponentAtNode(dom);

    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom);
    }
  };

  return function (beforeDispose) {
    if (typeof beforeDispose === 'function') {
      // play transition here before unmount
      beforeDispose().then(dispose);
    } else {
      dispose();
    }
  };
};
var cssRegex = /\.css$/i;
var resourceRegex = /\.(css|js)$/i;
var resourceLoadedList = new Set();
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */

var loadResource = function loadResource(url) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (resourceRegex.test(url)) {
    if (!resourceLoadedList.has(url)) {
      resourceLoadedList.add(url);
      return new Promise(function (resolve, reject) {
        var el;
        var isCss = cssRegex.test(url);

        if (isCss) {
          el = document.createElement('link');
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.rel = 'stylesheet';
          el.href = url;
        } else {
          el = document.createElement('script');
          el.setAttribute('data-namespace', url);
          Object.keys(attrs).map(function (key) {
            el.setAttribute(key, attrs[key]);
          });
          el.src = url;
        }

        el.onload = resolve;
        el.onerror = reject;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(el);
      });
    } else {
      return Promise.resolve();
    }
  } else {
    return Promise.reject('请输入js/css文件地址');
  }
};
/** 是否支持触屏 */

var isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;
var isCssVarSupported = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports('--a', '0');
var overflowScrollReg = /scroll|auto|overlay/i;
var ELEMENT_NODE_TYPE = 1;

function isElement(node) {
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}
/**
 *
 * 获取最近的滚动父元素，如果没有，则返回root, root默认是window
 *
 * @export
 * @param {Element} el
 * @param {(ScrollElement | null | undefined)} [root=window]
 * @return {*}
 */


function getScrollParent(el) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var node = el;

  while (node && node !== root && isElement(node)) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      return node;
    }

    node = node.parentNode;
  }

  return root;
}
/**
 * get scroll parent's scrollTop
 *
 * @param {Element} el
 * @return {*}  {number}
 */

var getScrollTop = function getScrollTop(el) {
  var scrollParent = getScrollParent(el);

  if (scrollParent === window) {
    return window.pageYOffset;
  }

  return scrollParent.scrollTop;
};

/**
 *  组件加载执行回调
 *
 * @param {() => void} fn 加载执行的回调
 */

var useMount = function useMount(fn) {
  React.useEffect(function () {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};

/**
 * 强制render组件
 *
 * @return {*}
 */

var useForceUpdate = function useForceUpdate() {
  var _useReducer = React.useReducer(function (x) {
    return x + 1;
  }, 0),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      forceUpdate = _useReducer2[1];

  return forceUpdate;
};

/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
var debounce = function debounce(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var timer = 0;
  return function a() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
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

var throttle = function throttle(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var last = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
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
    var that = this;
    var now = Date.now();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

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


var uniqArray = function uniqArray(arr) {
  var equalFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualFn;
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
var isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * 扁平化对象数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @param {string} [childrenProp='children'] 子数组属性, 默认 children
 * @return {*}  {T[]}
 */

var flatArray = function flatArray(arr) {
  var childrenProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

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
 * 扁平化简单数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @return {*}  {T[]}
 */

var flatSimpleArray = function flatSimpleArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(function (a, v) {
      return a.concat(Array.isArray(v) ? flatSimpleArray(v) : v);
    }, []);
  }

  return arr;
};
/**
 *  sleep 一段时间
 *
 * @param {number} time
 */

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};
/**
 * 深复制
 *
 * @template T
 * @param {T} src
 * @return {*}  {T}
 */

var deepClone = function deepClone(src) {
  if (!src || _typeof(src) !== 'object') return src;
  var dest = Array.isArray(src) ? [] : {};

  for (var _i = 0, _Object$keys = Object.keys(src); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (!dest.hasOwnProperty(key)) {
      var val = src[key];
      dest[key] = deepClone(val);
    }
  }

  return dest;
};
/**
 * Get element from fn/ref/el
 *
 * @param {TargetElementType} target
 * @return {*}  {Element}
 */

var getTargetElement = function getTargetElement(target) {
  var node;

  if (target instanceof Element) {
    node = target;
  } else if (isObject(target) && 'current' in target) {
    node = target.current;
  } else if (typeof target === 'function') {
    node = target === null || target === void 0 ? void 0 : target();
  }

  return node;
};
/**
 * className with prefix gen
 *
 * @param {string} prefix
 */

var prefixClassName = function prefixClassName(prefix) {
  return function () {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    className = className.trim();
    return className ? prefix + '-' + className : prefix;
  };
};

/**
 * 同构 useLayoutEffect
 *
 */

var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

var _excluded$1 = ["children", "visible", "onClose", "closeOnMaskClick", "mask", "maskStyle", "maskClass", "position", "duration", "flip", "mountContainer", "unmountOnExit", "style", "className"];
var StyledWrapper = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Popup__StyledWrapper",
  componentId: "sc-yrsb3w-0"
})(["position:fixed;z-index:200;transition-property:all;transition-timing-function:ease-in-out;background-color:#fff;&.bottom{left:0;bottom:0;}&.entering,&.entered{transition-timing-function:ease-out;transform:none;visibility:visible;}&.exiting{transition-timing-function:ease-in;}&.exited{visibility:hidden;}&.bottom-exited,&.bottom-exiting{transform:translate(0,100%);}&.left{left:0;top:0;bottom:0;}&.left-exited,&.left-exiting{transform:translate(-100%,0);}&.right{right:0;top:0;bottom:0;}&.right-exited,&.right-exiting{transform:translate(100%,0);}&.top{left:0;top:0;right:0;}&.top-exited,&.top-exiting{transform:translate(0,-100%);}&.center{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);&.pc{top:200px;transform:translate(-50%,0);}}&.center-entering,&.center-entered{transform:translate(-50%,-50%) scale(1);&.pc{top:160px;transform:translate(-50%,0) scale(1);}opacity:1;}&.center-exited,&.center-exiting{opacity:0;transform:translate(-50%,-50%) scale(0.4);&.pc{top:160px;transform:translate(-50%,0) scale(0.4);}}"]);
var mousePosition = null;

if (isBrowser) {
  var getClickPosition = function getClickPosition(e) {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
    setTimeout(function () {
      mousePosition = null;
    }, 100);
  };

  document.documentElement.addEventListener('click', getClickPosition, true);
}
/**
 *
 * 弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */


var Popup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      visible = props.visible,
      onClose = props.onClose,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? animationFast : _props$duration,
      _props$flip = props.flip,
      flip = _props$flip === void 0 ? true : _props$flip,
      _props$mountContainer = props.mountContainer,
      mountContainer = _props$mountContainer === void 0 ? document.body : _props$mountContainer,
      _props$unmountOnExit = props.unmountOnExit,
      unmountOnExit = _props$unmountOnExit === void 0 ? true : _props$unmountOnExit,
      style = props.style,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$1);

  var wrapRef = React.useRef();
  var maskRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  });
  var forceUpdate = useForceUpdate();
  var mountNode = getTargetElement(mountContainer);
  var showPosition = mountNode === document.body ? 'fixed' : 'absolute';
  useMount(function () {
    // fix container render at the same time / but not ready
    if (!mountNode) {
      forceUpdate();
    }
  });
  var setTransformOrigin = React.useCallback(function (mousePosition) {
    var dialogEl = wrapRef.current;

    if (mousePosition && mousePosition.x >= 0 && mousePosition.y >= 0 && dialogEl && dialogEl.getBoundingClientRect) {
      var _dialogEl$getBounding = dialogEl.getBoundingClientRect(),
          x = _dialogEl$getBounding.left,
          y = _dialogEl$getBounding.top;

      var origin = "".concat(mousePosition.x - x, "px ").concat(mousePosition.y - y, "px 0");
      dialogEl.style.transformOrigin = origin;
      dialogEl.style.transitionDuration = '0s'; // flip: hey yoo reflow

      document.body.offsetHeight;
      dialogEl.style.transitionDuration = duration + 'ms';
    } else {
      setTimeout(function () {
        if (dialogEl) {
          dialogEl.style.transformOrigin = 'unset';
        }
      }, duration);
    }
  }, [duration]);
  useIsomorphicLayoutEffect(function () {
    if (!isMobile && position === 'center' && flip) {
      if (visible) {
        setTransformOrigin(mousePosition);
      } else {
        setTransformOrigin(null);
      }
    }
  }, [visible, position, setTransformOrigin, flip]);
  useIsomorphicLayoutEffect(function () {
    if (mask && visible && maskRef.current) {
      var wrapZIndex = window.getComputedStyle(wrapRef.current, null).getPropertyValue('z-index');

      if (wrapZIndex) {
        maskRef.current.style.zIndex = wrapZIndex;
      }
    }
  }, [mask, visible]);
  return mountNode ? /*#__PURE__*/ReactDOM__default['default'].createPortal( /*#__PURE__*/React__default['default'].createElement("div", rest, /*#__PURE__*/React__default['default'].createElement(Mask, {
    visible: visible && mask,
    ref: maskRef,
    className: maskClass,
    duration: duration,
    style: _objectSpread2({
      position: showPosition
    }, maskStyle),
    onClick: function onClick() {
      return closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    in: visible,
    timeout: duration,
    unmountOnExit: unmountOnExit
  }, function (status) {
    return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, {
      ref: wrapRef,
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        position: showPosition,
        transitionDuration: duration + 'ms'
      }),
      className: clsx__default['default']('uc-popup', className, position, status, position + '-' + status, {
        mobile: isMobile,
        pc: !isMobile
      })
    }, children);
  })), mountNode) : null;
});
Popup.displayName = 'UC-Popup';

function toArray(children) {
  var ret = [];
  React.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (reactIs.isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
/**
 * attach static props to component
 *
 * @export
 * @template C
 * @template P
 * @param {C} component
 * @param {P} properties
 * @return {*}  {(C & P)}
 */

function attachPropertiesToComponent(component, properties) {
  var ret = component;

  for (var key in properties) {
    if (properties.hasOwnProperty(key)) {
      ret[key] = properties[key];
    }
  }

  return ret;
}

var _excluded$2 = ["size", "align", "className", "children", "direction", "split", "style", "wrap"];

function SpaceItem(_ref) {
  var direction = _ref.direction,
      index = _ref.index,
      marginDirection = _ref.marginDirection,
      children = _ref.children,
      split = _ref.split,
      wrap = _ref.wrap;

  var _React$useContext = React.useContext(SpaceContext),
      horizontalSize = _React$useContext.horizontalSize,
      verticalSize = _React$useContext.verticalSize,
      latestIndex = _React$useContext.latestIndex,
      supportFlexGap = _React$useContext.supportFlexGap;

  var style = {};

  if (!supportFlexGap) {
    if (direction === 'vertical') {
      if (index < latestIndex) {
        style = {
          marginBottom: horizontalSize / (split ? 2 : 1)
        };
      }
    } else {
      style = _objectSpread2(_objectSpread2({}, index < latestIndex && _defineProperty({}, marginDirection, horizontalSize / (split ? 2 : 1))), wrap && {
        paddingBottom: verticalSize
      });
    }
  }

  if (children === null || children === undefined) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: style
  }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
    style: style
  }, split));
}

var SpaceContext = /*#__PURE__*/React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false
});
var flexDirectionMap = {
  horizontal: 'row',
  vertical: 'column'
};
var StyledSpace = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Space__StyledSpace",
  componentId: "sc-uxqxim-0"
})(["display:inline-flex;flex-direction:", ";align-items:", ";"], function (_ref3) {
  var direction = _ref3.direction;
  return flexDirectionMap[direction];
}, function (_ref4) {
  var align = _ref4.align;
  return align;
});
/** 间距 */

var Space = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 8 : _props$size,
      align = props.align,
      className = props.className,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      split = props.split,
      style = props.style,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? false : _props$wrap,
      otherProps = _objectWithoutProperties(props, _excluded$2);

  var supportFlexGap = isCssPropExist('gap');

  var _React$useMemo = React.useMemo(function () {
    return Array.isArray(size) ? size : [size, size];
  }, [size]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      horizontalSize = _React$useMemo2[0],
      verticalSize = _React$useMemo2[1];

  var childNodes = toArray(children);
  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var marginDirection = 'marginRight'; // Calculate latest one

  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */


    return /*#__PURE__*/React.createElement(SpaceItem, {
      key: i,
      direction: direction,
      index: i,
      marginDirection: marginDirection,
      split: split,
      wrap: wrap
    }, child);
    /* eslint-enable */
  });
  var spaceContext = React.useMemo(function () {
    return {
      horizontalSize: horizontalSize,
      verticalSize: verticalSize,
      latestIndex: latestIndex,
      supportFlexGap: supportFlexGap
    };
  }, [horizontalSize, verticalSize, latestIndex, supportFlexGap]);

  if (childNodes.length === 0) {
    return null;
  }

  var gapStyle = {};

  if (wrap) {
    gapStyle.flexWrap = 'wrap';

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return /*#__PURE__*/React.createElement(StyledSpace, _extends({
    ref: ref,
    direction: direction,
    align: mergedAlign,
    className: clsx__default['default'](className, 'uc-space'),
    style: _objectSpread2(_objectSpread2({}, gapStyle), style)
  }, otherProps), /*#__PURE__*/React.createElement(SpaceContext.Provider, {
    value: spaceContext
  }, nodes));
});
Space.displayName = 'UC-Space';

var intersectionObserver;
var handlers = new Map();

if (isBrowser) {
  intersectionObserver = new IntersectionObserver(function (entries) {
    var _iterator = _createForOfIteratorHelper(entries),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var entry = _step.value;
        var el = entry.target;

        if (handlers.has(el)) {
          var _handlers$get;

          (_handlers$get = handlers.get(el)) === null || _handlers$get === void 0 ? void 0 : _handlers$get(entry.isIntersecting);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}
/**
 * 使用IntersectionObserver监视dom元素在文档视口的可见性
 *
 * @param {Element} el 监听dom元素
 * @param {Handler} action 元素isIntersecting状态变化回调
 */


var observe = function observe(el, action) {
  if (el) {
    var _intersectionObserver, _intersectionObserver2;

    (_intersectionObserver = (_intersectionObserver2 = intersectionObserver).observe) === null || _intersectionObserver === void 0 ? void 0 : _intersectionObserver.call(_intersectionObserver2, el);
    handlers.set(el, action);
  }
};
/**
 * 取消监视
 *
 * @param {Element} el
 */

var unobserve = function unobserve(el) {
  if (el) {
    var _intersectionObserver3, _intersectionObserver4;

    (_intersectionObserver3 = (_intersectionObserver4 = intersectionObserver).unobserve) === null || _intersectionObserver3 === void 0 ? void 0 : _intersectionObserver3.call(_intersectionObserver4, el);
    handlers.delete(el);
  }
};

/**
 * 监视元素在文档视口的可见性，可见性变化时触发回调
 *
 * @param {RefObject<HTMLElement>} elRef 监视元素ref
 * @param {(visible: boolean) => void} onVisibleChange 回调
 * @param {boolean} [unobserveWhenVisible=true] 元素可见时取消监控，默认true
 */

var useVisibleObserve = function useVisibleObserve(elRef, onVisibleChange) {
  var unobserveWhenVisible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  useIsomorphicLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      onVisibleChange(visible);

      if (unobserveWhenVisible && visible) {
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);
};

var getClassName = function getClassName(state) {
  var fromClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'from';
  var toClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'to';

  if (state === 'entering' || state === 'entered') {
    return toClass;
  } else {
    return fromClass;
  }
};
/**
 *  子元素执行transition过渡动画
 *  fromClass定义初始状态类名，默认:from
 *  toClass 定义最终状态类名，默认:to
 *  执行时机:
 *  1.初次mount并在可视区域
 *  2.从不可见到可见状态
 */


var TransitionElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? animationNormal : _props$duration,
      _props$fromClass = props.fromClass,
      fromClass = _props$fromClass === void 0 ? 'from' : _props$fromClass,
      _props$toClass = props.toClass,
      toClass = _props$toClass === void 0 ? 'to' : _props$toClass;
  var elRef = React.useRef();

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isInViewport = _useState2[0],
      setIsInViewport = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useVisibleObserve(elRef, setIsInViewport);
  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('TransitionElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
      in: isInViewport,
      timeout: duration
    }, function (state) {
      var _children$props, _children$props2;

      return /*#__PURE__*/React__default['default'].cloneElement(children, {
        ref: elRef,
        className: clsx__default['default']((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, getClassName(state, fromClass, toClass)),
        style: _objectSpread2(_objectSpread2({}, (_children$props2 = children.props) === null || _children$props2 === void 0 ? void 0 : _children$props2.style), {}, {
          transitionDuration: duration + 'ms'
        })
      });
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('TransitionElement:子元素必须为ReactElement');
    }

    return children;
  }
});
TransitionElement.displayName = 'UC-TransitionElement';

/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
var AnimationElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? '1s' : _props$duration,
      _props$name = props.name,
      name = _props$name === void 0 ? 'none' : _props$name,
      _props$timingFunc = props.timingFunc,
      timingFunc = _props$timingFunc === void 0 ? 'ease' : _props$timingFunc,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? '0s' : _props$delay,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'normal' : _props$direction,
      _props$iterationCount = props.iterationCount,
      iterationCount = _props$iterationCount === void 0 ? 1 : _props$iterationCount,
      _props$fillMode = props.fillMode,
      fillMode = _props$fillMode === void 0 ? 'backwards' : _props$fillMode;
  var elRef = React.useRef();

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      isInViewport = _useState2[0],
      setIsInViewport = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });

  var _ref = (children === null || children === void 0 ? void 0 : children.props) || {},
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  useVisibleObserve(elRef, setIsInViewport);

  var newStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    animation: "".concat(duration, " ").concat(timingFunc, " ").concat(delay, " ").concat(iterationCount, " ").concat(direction, " ").concat(fillMode, " ").concat(isInViewport ? 'running' : 'paused', " ").concat(name)
  });

  var count = React__default['default'].Children.count(children);

  if (count > 1) {
    throw new Error('AnimationElement:只能包含一个子元素.');
  }

  if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
    return /*#__PURE__*/React__default['default'].cloneElement(children, {
      ref: elRef,
      style: newStyle
    });
  } else {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error('AnimationElement:子元素必须为ReactElement');
    }

    return children;
  }
});
AnimationElement.displayName = 'UC-AnimationElement';

var _excluded$3 = ["width", "height", "style", "children"];

/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
var LazyLoadElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$3);

  var elRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useIsomorphicLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        setReady(true);
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
  var newStyle = !ready ? _objectSpread2({
    display: 'inline-block',
    width: width,
    height: height
  }, style) : style;
  return !ready ? /*#__PURE__*/React__default['default'].createElement("span", _extends({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: elRef
  }) : children;
});
LazyLoadElement.displayName = 'UC-LazyLoadElement';

var _excluded$4 = ["width", "height", "style", "src"];
var StyledPlaceholder = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "LazyLoadImage__StyledPlaceholder",
  componentId: "sc-1wfvsd5-0"
})(["display:inline-flex;align-items:center;justify-content:center;"]);
/** 懒加载图片，当做img标签使用, 在视口才加载图片 */

var LazyLoadImage = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var width = props.width,
      height = props.height,
      style = props.style,
      src = props.src,
      rest = _objectWithoutProperties(props, _excluded$4);

  var elRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1];

  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useIsomorphicLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        setReady(true);
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
  var newStyle = !ready || !loaded ? _objectSpread2({
    width: width,
    height: height
  }, style) : style;

  var onImageLoaded = function onImageLoaded() {
    setLoaded(true);
  };

  return !ready ? /*#__PURE__*/React__default['default'].createElement(StyledPlaceholder, _extends({}, rest, {
    ref: elRef,
    style: newStyle
  })) : /*#__PURE__*/React__default['default'].createElement("img", _extends({}, rest, {
    ref: elRef,
    onLoad: onImageLoaded,
    width: width,
    height: height,
    src: src,
    style: newStyle
  }));
});
LazyLoadImage.displayName = 'UC-LazyLoadImage';

var _excluded$5 = ["className"];

var _templateObject;
var loading = styled.keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   0% {\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n\n    100% {\n      transform: rotate3d(0, 0, 1, 360deg);\n    }\n"])));
var StyledSpin = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Spin__StyledSpin",
  componentId: "sc-g3ipak-0"
})(["display:inline-flex;position:relative;width:1em;height:1em;vertical-align:middle;animation:", " 1s steps(60,end) infinite;:before,:after{content:'';display:block;width:0.5em;height:1em;box-sizing:border-box;border:0.125em solid;border-color:currentColor;}:before{border-right-width:0;border-top-left-radius:1em;border-bottom-left-radius:1em;mask-image:linear-gradient(180deg,#000000 8%,rgba(0,0,0,0.3) 95%);-webkit-mask-image:linear-gradient(180deg,#000000 8%,rgba(0,0,0,0.3) 95%);}:after{border-left-width:0;border-top-right-radius:1em;border-bottom-right-radius:1em;mask-image:linear-gradient(180deg,rgba(0,0,0,0) 8%,rgba(0,0,0,0.3) 95%);-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0) 8%,rgba(0,0,0,0.3) 95%);}"], loading);
/** 加载中 */

var Spin = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React__default['default'].createElement(StyledSpin, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-spin')
  }));
});
Spin.displayName = 'UC-Spin';

/**
 * 监听元素是否在视口内
 *
 * @param {RefObject<HTMLElement>} ref
 * @param {*} [rootRef=null]
 * @param {({
 *     rootMargin?: string;
 *     threshold?: number | number[];
 *   })} [options]
 * @return {*}  {boolean}
 */

function useInViewport(ref) {
  var rootRef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var options = arguments.length > 2 ? arguments[2] : undefined;

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      inViewPort = _useState2[0],
      setInViewport = _useState2[1];

  React.useEffect(function () {
    if (ref.current) {
      // eslint-disable-next-line no-undef
      var opt = _objectSpread2({}, options);

      if (rootRef) {
        opt.root = rootRef.current;
      }

      var observer = new IntersectionObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.isIntersecting) {
              setInViewport(true);
            } else {
              setInViewport(false);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }, opt);
      observer.observe(ref.current);
      return function () {
        observer.disconnect();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return inViewPort;
}

/**
 * 返回前一个值
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {T}
 */

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

var _excluded$6 = ["dataList", "dataRender", "fetchData", "loadingText", "finishedText", "finished", "className", "useWindowScroll", "style", "height", "children", "footer"];
var StyledWrap = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Pullup__StyledWrap",
  componentId: "sc-1sn57cv-0"
})(["user-select:none;position:relative;&.use-dom-scroll{overflow-y:scroll;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}}.loading{color:#999;display:flex;justify-content:center;align-items:center;height:50px;}"]); // check isInViewport in vertical direction

function isInViewport(el, container) {
  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      bottom = _el$getBoundingClient.bottom;

  if (!container) {
    return bottom >= 0 && top < window.innerHeight;
  } else {
    var brc = container.getBoundingClientRect();
    return bottom <= brc.bottom && top >= brc.top;
  }
}

var DefaultLoadingText = /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Spin, null), "\u52A0\u8F7D\u4E2D");
/**
 *  上拉无限滚动
 *  注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器
 */

var Pullup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$dataList = props.dataList,
      dataList = _props$dataList === void 0 ? [] : _props$dataList,
      _props$dataRender = props.dataRender,
      dataRender = _props$dataRender === void 0 ? function () {
    return null;
  } : _props$dataRender,
      fetchData = props.fetchData,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? DefaultLoadingText : _props$loadingText,
      _props$finishedText = props.finishedText,
      finishedText = _props$finishedText === void 0 ? '我是有底线的' : _props$finishedText,
      _props$finished = props.finished,
      finished = _props$finished === void 0 ? false : _props$finished,
      className = props.className,
      _props$useWindowScrol = props.useWindowScroll,
      useWindowScroll = _props$useWindowScrol === void 0 ? true : _props$useWindowScrol,
      style = props.style,
      height = props.height,
      children = props.children,
      footer = props.footer,
      rest = _objectWithoutProperties(props, _excluded$6);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var waypointRef = React.useRef();
  var wrapRef = React.useRef();
  var isAtBottom = useInViewport(waypointRef, useWindowScroll ? null : wrapRef);
  var lastIsAtBottom = usePrevious(isAtBottom);
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  });
  React.useEffect(function () {
    if (!loading && !finished && (!lastIsAtBottom && isAtBottom || isInViewport(waypointRef.current, useWindowScroll ? null : wrapRef.current))) {
      setLoading(true);
      fetchData().then(function () {
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    }
  }, [loading, isAtBottom, finished, setLoading, fetchData, lastIsAtBottom, useWindowScroll]);

  if (!useWindowScroll && !height) {
    throw new Error('Pullup: useWindowScroll为false，必须通过height设置容器高度');
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap, _extends({
    ref: wrapRef
  }, rest, {
    className: clsx__default['default']('uc-pullup', className, {
      'use-dom-scroll': !useWindowScroll,
      'use-window-scroll': useWindowScroll
    }),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    })
  }), children, dataList.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
      key: idx
    }, dataRender(item, idx));
  }), /*#__PURE__*/React__default['default'].createElement("span", {
    className: "waypoint",
    style: {
      fontSize: 0
    },
    ref: waypointRef
  }), typeof footer === 'function' ? footer(loading, finished) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: "loading"
  }, loading ? loadingText : finished ? finishedText : null));
});
Pullup.displayName = 'UC-Pullup';

var _excluded$7 = ["position", "borderRadius", "color", "className", "children"];
var StyledDiv = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "HairLineBox__StyledDiv",
  componentId: "sc-1jb427w-0"
})(["position:relative;&:after{content:'';pointer-events:none;position:absolute;width:100%;height:100%;left:0;top:0;border-radius:", "px;", ":1px solid ", ";@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){width:200%;height:200%;transform:scale(0.5);transform-origin:0 0;}}"], function (_ref) {
  var borderRadius = _ref.borderRadius;
  return borderRadius;
}, function (_ref2) {
  var position = _ref2.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_ref3) {
  var $color = _ref3.$color;
  return $color;
});
/** 移动端1像素边框容器 */

var HairLineBox = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$borderRadius = props.borderRadius,
      borderRadius = _props$borderRadius === void 0 ? 0 : _props$borderRadius,
      _props$color = props.color,
      color = _props$color === void 0 ? border : _props$color,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$7);

  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-hairlinebox', className),
    position: position,
    $color: color,
    borderRadius: borderRadius
  }), children);
});
HairLineBox.displayName = 'UC-HairLineBox';

/** 延迟渲染子元素, 用于防止loading闪烁等问题 */
var WaitLoading = function WaitLoading(props) {
  var _props$wait = props.wait,
      wait = _props$wait === void 0 ? 400 : _props$wait,
      children = props.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  React.useEffect(function () {
    var timer = setTimeout(function () {
      setShow(true);
    }, wait);
    return function () {
      window.clearTimeout(timer);
    };
  }, [wait]);
  return show && children;
};

var _templateObject$1;
/**
 *  获取包含主题色的css片段
 * @param prop 属性
 * @param leftValue 属性值 (左侧部分)
 * @returns
 */

var getThemeColorCss = function getThemeColorCss(prop) {
  var leftValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return styled.css(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n    ", ":", " ", ";\n    ", ":", " var(--uc-color, ", ");\n  "])), prop, leftValue, function (props) {
    return props.theme.color || primary;
  }, prop, leftValue, primary);
};
/**
 *  获取主题色
 */

var getThemeColor = function getThemeColor() {
  return isBrowser && document.documentElement.dataset.themeColor;
};

/**
 * 保存最新的值在ref中
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */

function useLatest(value) {
  var ref = React.useRef(value);
  ref.current = value;
  return ref;
}

/* eslint-disable react-hooks/exhaustive-deps */
/**
 *  执行异步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateEffect = function useUpdateEffect(effect) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isMounted = React.useRef(false);
  var latestFn = useLatest(effect);
  React.useEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      var _latestFn$current;

      return (_latestFn$current = latestFn.current) === null || _latestFn$current === void 0 ? void 0 : _latestFn$current.call(latestFn);
    }
  }, deps);
};

var _excluded$8 = ["children", "underline", "value", "defaultValue", "border", "onChange", "tabWidth", "extra", "className"];
var getClassName$1 = prefixClassName('uc-tabs');
var StyledWrapper$1 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Tabs__StyledWrapper",
  componentId: "sc-1ouhc8q-0"
})(["-webkit-tap-highlight-color:transparent;.", "{display:flex;height:44px;position:relative;overflow-x:scroll;border-bottom:1px solid ", ";align-items:center;&::-webkit-scrollbar{display:none;}&.no-border{border-bottom:none;}}.", "{overflow:hidden;}.", "{}.", "{white-space:nowrap;text-overflow:ellipsis;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0 12px;user-select:none;height:100%;cursor:pointer;flex:none;&.active{", " font-weight:500;}&.disabled{cursor:not-allowed;color:", ";}}.", "{position:absolute;left:0;top:0;pointer-events:none;transition:transform 0.3s ease;height:100%;display:flex;justify-content:center;.line{position:absolute;bottom:0;height:2px;", "}}"], getClassName$1('header-wrap'), border, getClassName$1('content-wrap'), getClassName$1('extra'), getClassName$1('header-item'), getThemeColorCss('color'), disabledText, getClassName$1('header-line'), getThemeColorCss('background-color'));
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */

var Tab = function Tab(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, children);
}; //#endregion

/**
 * 选项卡切换
 */


var Tabs = function Tabs(_ref2) {
  var children = _ref2.children,
      _ref2$underline = _ref2.underline,
      underline = _ref2$underline === void 0 ? '50%' : _ref2$underline,
      value = _ref2.value,
      _ref2$defaultValue = _ref2.defaultValue,
      defaultValue = _ref2$defaultValue === void 0 ? 0 : _ref2$defaultValue,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? true : _ref2$border,
      onChange = _ref2.onChange,
      tabWidth = _ref2.tabWidth,
      extra = _ref2.extra,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, _excluded$8);

  var underlineElRef = React.useRef();
  var contentWrapElRef = React.useRef();
  var headerWrapElRef = React.useRef();
  var mountedRef = React.useRef(false);
  var tabRef = React.useRef([]);

  var _useState = React.useState(typeof value === 'undefined' ? defaultValue : value),
      _useState2 = _slicedToArray(_useState, 2),
      _v = _useState2[0],
      _setV = _useState2[1];

  useUpdateEffect(function () {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);
  var prevVal = usePrevious(_v);
  React.useEffect(function () {
    var underlineEl = underlineElRef.current;

    if (underlineEl && underline) {
      underlineEl.style.transform = "translateX(".concat(tabRef.current[_v].offsetLeft, "px)");
      underlineEl.style.width = tabRef.current[_v].offsetWidth + 'px';
    }
  }, [_v, underline]);
  React.useEffect(function () {
    var headerWrapEl = headerWrapElRef.current;

    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      var count = React__default['default'].Children.count(children);
      var size = ~~(headerWrapEl.scrollWidth / count);

      if (!mountedRef.current) {
        mountedRef.current = true;
        headerWrapEl.scroll({
          left: (_v + 1) * size - headerWrapEl.offsetWidth
        });
      } else {
        if (typeof prevVal !== 'undefined') {
          if (_v > prevVal) {
            // right
            headerWrapEl.scroll({
              left: (_v + 2) * size - headerWrapEl.offsetWidth,
              behavior: 'smooth'
            });
          } else if (_v < prevVal) {
            // left
            headerWrapEl.scroll({
              left: (_v - 1) * size,
              behavior: 'smooth'
            });
          } else ;
        } else if (size * (_v + 1) <= headerWrapEl.offsetWidth && headerWrapEl.scrollLeft > 0) {
          headerWrapEl.scroll({
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [_v, prevVal]);

  if (React__default['default'].Children.count(children) === 0) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$1, _extends({}, rest, {
    className: clsx__default['default'](getClassName$1(), className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](getClassName$1('header-wrap'), {
      'no-border': !border
    }),
    ref: headerWrapElRef
  }, !!underline && /*#__PURE__*/React__default['default'].createElement("div", {
    ref: underlineElRef,
    className: clsx__default['default'](getClassName$1('header-line'), getClassName$1('header-item')),
    style: {
      width: tabWidth
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "line",
    style: {
      width: typeof underline === 'boolean' ? '100%' : underline
    }
  })), React__default['default'].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      var _ref3 = child.props,
          _ref3$title = _ref3.title,
          title = _ref3$title === void 0 ? '' : _ref3$title,
          disabled = _ref3.disabled;
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: index,
        className: clsx__default['default'](getClassName$1('header-item'), {
          active: index === _v,
          disabled: disabled
        }),
        ref: function ref(e) {
          return tabRef.current[index] = e;
        },
        style: {
          width: tabWidth
        },
        onClick: function onClick() {
          if (!disabled && index !== _v) {
            onChange === null || onChange === void 0 ? void 0 : onChange(index);

            _setV(index);
          }
        }
      }, title);
    }
  }), extra && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default'](getClassName$1('extra'))
  }, extra)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$1('content-wrap'),
    ref: contentWrapElRef
  }, React__default['default'].Children.map(children, function (child, index) {
    if (_v === index && /*#__PURE__*/React__default['default'].isValidElement(child)) {
      return child;
    }
  })));
};

var Tabs$1 = attachPropertiesToComponent(Tabs, {
  /** 子项 */
  Tab: Tab
});

var _excluded$9 = ["title", "required", "label", "description", "className", "content", "lineColor", "labelStyle", "children"];
var StyledCell = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Cell__StyledCell",
  componentId: "sc-11yoqxc-0"
})(["background:#fff;padding-left:12px;&.clickable{&:active{background-color:", ";}}.cell-inner{position:relative;display:flex;box-sizing:border-box;width:100%;padding:10px 12px 10px 0;overflow:hidden;.cell-label{box-sizing:border-box;text-align:left;flex:1;.label{color:#333;&.required::before{content:attr(data-required);margin-right:2px;color:", ";vertical-align:middle;}}.description{color:#999;margin-top:4px;line-height:18px;font-size:12px;}&.input{word-wrap:break-word;width:6.2em;flex:none;}}.cell-content{flex:1;position:relative;overflow:visible;color:#999;text-align:right;vertical-align:middle;word-wrap:break-word;&.input{display:flex;align-items:center;}}}"], activeBg, danger);
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var title = props.title,
      required = props.required,
      label = props.label,
      description = props.description,
      className = props.className,
      content = props.content,
      _props$lineColor = props.lineColor,
      lineColor = _props$lineColor === void 0 ? border : _props$lineColor,
      labelStyle = props.labelStyle,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$9);

  if (content && children) {
    throw new Error("Cell: \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6Econtent\u548C\u5B50\u5143\u7D20");
  }

  var hasInput = !!children;
  var hasLabel = label || title;
  var hasContent = content || children;
  var dataRequired = required ? typeof required === 'boolean' ? '*' : required : undefined;
  return /*#__PURE__*/React__default['default'].createElement(StyledCell, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-cell', className, {
      clickable: typeof rest.onClick === 'function'
    })
  }), /*#__PURE__*/React__default['default'].createElement(HairLineBox, {
    color: lineColor
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-inner')
  }, hasLabel && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-label', {
      input: hasInput
    }),
    style: labelStyle
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    "data-required": dataRequired,
    className: clsx__default['default']('label', {
      required: !!required
    })
  }, label || title), description && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "description"
  }, description)), hasContent && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('cell-content', {
      input: hasInput
    })
  }, content, children))));
});
Cell.displayName = 'UC-Cell';

var _excluded$a = ["shape", "className"];

var _templateObject$2;
var pulse = styled.keyframes(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n   0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n"])));
var StyledWrap$1 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "SkeletonElement__StyledWrap",
  componentId: "sc-1nka7lt-0"
})(["background-color:rgba(0,0,0,0.08);animation:", " 1.5s ease-in-out 0.5s infinite;&.rect{height:1.2em;}&.circle{border-radius:50%;display:inline-block;}"], pulse);
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonElement = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'rect' : _props$shape,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$a);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$1, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-skeleton-element', shape, className)
  }));
});
SkeletonElement.displayName = 'UC-SkeletonElement';

var _excluded$b = ["rowCount", "rowWidth", "rowHeight", "round", "className"];
var getClassName$2 = prefixClassName('uc-skeleton');
var StyledSkeleton = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Skeleton__StyledSkeleton",
  componentId: "sc-10ncp1x-0"
})([".uc-skeleton-element{&:not(:first-child){margin-top:12px;}}&.", "{display:flex;}.", "{flex:1;margin-left:16px;}"], getClassName$2('round'), getClassName$2('rows'));
/** 骨架屏, 包行两种风格, 基于SkeletonElement封装 */

var Skeleton = function Skeleton(props) {
  var _props$rowCount = props.rowCount,
      rowCount = _props$rowCount === void 0 ? 3 : _props$rowCount,
      _props$rowWidth = props.rowWidth,
      rowWidth = _props$rowWidth === void 0 ? ['40%', '100%', '60%'] : _props$rowWidth,
      _props$rowHeight = props.rowHeight,
      rowHeight = _props$rowHeight === void 0 ? 12 : _props$rowHeight,
      round = props.round,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$b);

  if (rowCount < 1) {
    throw new Error('row必须大于等于1,默认4');
  }

  var rowWidthAr = [];

  if (Array.isArray(rowWidth)) {
    if (rowCount <= rowWidth.length) {
      rowWidthAr = rowWidth.slice(0, rowCount);
    } else {
      while (rowWidth.length < rowCount) {
        rowWidth.push('100%');
      }

      rowWidthAr = rowWidth;
    }
  } else {
    rowWidthAr = Array.from(new Array(rowCount), function () {
      return rowWidth;
    });
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledSkeleton, _extends({}, rest, {
    className: clsx__default['default'](getClassName$2(), _defineProperty({}, getClassName$2('round'), round), className)
  }), round && /*#__PURE__*/React__default['default'].createElement(SkeletonElement, {
    shape: "circle",
    className: "round",
    style: {
      width: round,
      height: round
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$2('rows')
  }, rowWidthAr.map(function (v, idx) {
    return /*#__PURE__*/React__default['default'].createElement(SkeletonElement, {
      key: idx,
      shape: "rect",
      style: {
        width: v,
        height: rowHeight
      }
    });
  })));
};

var _excluded$c = ["className", "duration", "showCircle"];

var _templateObject$3;
var id = 0;
var circle = styled.keyframes(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n 0% {\n    stroke-dasharray: 0, 314; // 2piR\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 120, 314;\n    stroke-dashoffset: -37;\n  }\n\n \n  100% {\n    stroke-dasharray: 0, 314;\n    stroke-dashoffset: -157;\n  }\n"])));
var StyledLoader = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "BallSpin__StyledLoader",
  componentId: "sc-1f3hu62-0"
})(["display:inline-flex;vertical-align:middle;.my-circle{animation:", " ", "ms linear infinite;}"], circle, function (_ref) {
  var $duration = _ref.$duration;
  return $duration;
});
var SVGProps = {
  width: '1em',
  height: '1em',
  strokeWidth: 8,
  fill: 'none'
};
/** 转圈圈spin */

var BallSpin = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 800 : _props$duration,
      showCircle = props.showCircle,
      rest = _objectWithoutProperties(props, _excluded$c);

  var elRef = React__default['default'].useRef();
  var idRef = React__default['default'].useRef(id++);
  React__default['default'].useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledLoader, _extends({
    ref: elRef,
    $duration: duration
  }, rest, {
    className: clsx__default['default'](className, 'uc-ball-spin')
  }), /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    viewBox: "0 0 120 120"
  }, SVGProps), /*#__PURE__*/React__default['default'].createElement("defs", null, /*#__PURE__*/React__default['default'].createElement("linearGradient", {
    id: idRef.current + '',
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React__default['default'].createElement("stop", {
    offset: "0%",
    style: {
      stopOpacity: 1,
      stopColor: 'currentColor'
    }
  }), /*#__PURE__*/React__default['default'].createElement("stop", {
    offset: "50%",
    style: {
      stopOpacity: 0.7,
      stopColor: 'currentColor'
    }
  }), /*#__PURE__*/React__default['default'].createElement("stop", {
    offset: "100%",
    style: {
      stopOpacity: 0.1,
      stopColor: 'currentColor'
    }
  }))), /*#__PURE__*/React__default['default'].createElement("circle", {
    className: "my-circle",
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "url(#".concat(idRef.current, ")"),
    strokeLinecap: "round",
    transform: "rotate(-180,60,60)"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    className: "my-circle",
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "url(#".concat(idRef.current, ")"),
    strokeLinecap: "round",
    transform: "rotate(0,60,60)"
  }), showCircle && /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "14",
    cx: "60",
    cy: "60",
    stroke: "currentColor"
  })));
});
BallSpin.displayName = 'UC-BallSpin';

var _excluded$d = ["type", "disabled", "outlined", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "loading", "ghost", "onClick", "wait"];
var StyledButton = /*#__PURE__*/styled__default['default'].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-15o16bj-0"
})(["color:inherit;cursor:pointer;margin:0;display:inline-flex;box-sizing:border-box;outline:0;position:relative;align-items:center;user-select:none;justify-content:center;text-decoration:none;background-color:transparent;appearance:none;-webkit-tap-highlight-color:transparent;font-weight:400;white-space:nowrap;background-image:none;transition:all 0.3s ease;user-select:none;touch-action:manipulation;font-size:14px;border-radius:2px;border:1px solid transparent;padding:0px 16px;height:32px;&.default{background-color:#fff;border-color:", ";", "{opacity:0.8;}&.pc:hover,&.outlined{", " ", "}&.mobile:active{background-color:", ";}&.danger,&.danger:hover,&.danger:active{color:", ";border-color:", ";}}&.primary{", " ", " color:#fff;", "{opacity:0.8;}&.ghost,&.ghost:hover,&.ghost:active{background-color:transparent !important;", " ", " &.danger{color:", ";}}&.danger,&.danger:hover,&.danger:active{background-color:", ";border-color:", ";}}&.block{width:100%;}&.circle{min-width:32px;padding:0;border-radius:50%;}&.dashed{border-style:dashed;}&.anchor{border:none;", " height:unset;padding:unset;margin:unset;background:unset;font-size:unset;}&.disabled,&.disabled:hover,&.disabled:active{opacity:0.6;cursor:not-allowed;pointer-events:none;}&.ghost,&.ghost:hover{background-color:transparent;border-color:", ";color:", ";}"], border, isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), activeBg, danger, danger, getThemeColorCss('background-color'), getThemeColorCss('border-color'), isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), danger, danger, danger, getThemeColorCss('color'), border, border);
/** 按钮 */

var Button = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      disabled = props.disabled,
      outlined = props.outlined,
      block = props.block,
      className = props.className,
      children = props.children,
      htmlType = props.htmlType,
      circle = props.circle,
      dashed = props.dashed,
      danger = props.danger,
      loading = props.loading,
      ghost = props.ghost,
      _onClick = props.onClick,
      wait = props.wait,
      rest = _objectWithoutProperties(props, _excluded$d);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      waiting = _useState2[0],
      setWaiting = _useState2[1];

  var waitTime = typeof wait === 'number' && wait > 0 ? wait : typeof wait === 'boolean' && wait === true ? 1000 : 0;
  var usingWait = waitTime > 0;
  var icon = loading || waiting ? /*#__PURE__*/React__default['default'].createElement(BallSpin, {
    showCircle: false
  }) : props.icon;
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends({}, rest, {
    ref: ref,
    disabled: disabled,
    type: htmlType,
    onClick: function onClick(e) {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);

      if (usingWait) {
        setWaiting(true);
        setTimeout(function () {
          setWaiting(false);
        }, waitTime);
      }
    },
    className: clsx__default['default']('uc-btn', 'uc-button', type, {
      disabled: disabled || loading || waiting,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost,
      danger: danger,
      mobile: isMobile,
      pc: !isMobile,
      anchor: rest.as === 'a',
      outlined: outlined
    }, className)
  }), icon && children ? /*#__PURE__*/React__default['default'].createElement(Space, null, icon, children) : children || icon);
});
Button.displayName = 'UC-Button';

var _excluded$e = ["type", "className"];
var StyledIcon = /*#__PURE__*/styled__default['default'].span.withConfig({
  displayName: "Icon__StyledIcon",
  componentId: "sc-vk5gmu-0"
})(["display:inline-flex;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-0.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"]);
var SVGProps$1 = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
};
/** 图标 */

var Icon = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var type = props.type,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$e);

  return /*#__PURE__*/React__default['default'].createElement(StyledIcon, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-icon', className, type)
  }), /*#__PURE__*/React__default['default'].createElement("svg", SVGProps$1, /*#__PURE__*/React__default['default'].createElement("use", {
    xlinkHref: "#".concat(type)
  })));
});
Icon.displayName = 'UC-Icon';
/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */

var loadFromIconfontCN = function loadFromIconfontCN(scriptUrl) {
  isBrowser && loadResource(scriptUrl);
}; // load ruc icons


loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');
var Icon$1 = attachPropertiesToComponent(Icon, {
  loadFromIconfontCN: loadFromIconfontCN
});

var _excluded$f = ["size", "className", "button", "onChange", "defaultChecked", "mode", "checked", "disabled", "children", "indeterminate", "render"];
var StyledButton$1 = /*#__PURE__*/styled__default['default'](Button).withConfig({
  displayName: "CheckboxBase__StyledButton",
  componentId: "sc-1rcmrlp-0"
})(["&.fill{&.checked.default{", " ", " color:#fff;}}&.outline{&.checked{", " ", "}}&:not(:first-child){margin-left:8px;}"], getThemeColorCss('background-color'), getThemeColorCss('border-color'), getThemeColorCss('border-color'), getThemeColorCss('color'));
var StyledCheckboxBaseWrapper = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "CheckboxBase__StyledCheckboxBaseWrapper",
  componentId: "sc-1rcmrlp-1"
})(["display:inline-flex;align-items:center;cursor:pointer;user-select:none;vertical-align:middle;-webkit-tap-highlight-color:transparent;white-space:nowrap;.text{margin-left:8px;}&.disabled{cursor:not-allowed;opacity:0.5;}.checkbox:hover{", "}&.radio{.checkbox{border-radius:50%;}}&.checked{.checkbox{", " ", "}}&.disabled{.checkbox{border-color:", ";}}.checkbox{display:inline-flex;align-items:center;justify-content:center;border:1px solid ", ";border-radius:2px;background:#fff;color:#fff;}"], getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('border', '1px solid'), border, border);
/** Checkbox/Radiobox 的基础 */

var CheckboxBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      className = props.className,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'checkbox' : _props$mode,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children,
      indeterminate = props.indeterminate,
      render = props.render,
      rest = _objectWithoutProperties(props, _excluded$f);

  var _useState = React.useState(typeof checked === 'boolean' ? checked : defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      c = _useState2[0],
      setC = _useState2[1];

  useUpdateEffect(function () {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);

  var onClick = function onClick() {
    if (disabled) return;

    if (mode === 'checkbox' || c !== true) {
      var n = !c;
      setC(n);
      onChange === null || onChange === void 0 ? void 0 : onChange(n);
    }
  };

  if (typeof render === 'function') {
    return /*#__PURE__*/React__default['default'].createElement("span", _extends({}, rest, {
      ref: ref,
      className: clsx__default['default']('uc-checkbox-cust', className),
      onClick: onClick
    }), render(c, disabled));
  }

  return button ? /*#__PURE__*/React__default['default'].createElement(StyledButton$1, _extends({}, rest, {
    ref: ref,
    onClick: onClick,
    className: clsx__default['default'](className, {
      fill: button === 'fill',
      outline: button === 'outline' || button === true,
      checked: c,
      disabled: disabled
    })
  }), children) : /*#__PURE__*/React__default['default'].createElement(StyledCheckboxBaseWrapper, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-checkbox', mode, className, {
      disabled: disabled,
      checked: c || indeterminate
    }),
    onClick: onClick
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('checkbox'),
    style: {
      width: size,
      height: size,
      fontSize: indeterminate ? size * 0.8 : size
    }
  }, /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: !indeterminate ? 'uc-icon-tick' : 'uc-icon-jian2'
  })), children && /*#__PURE__*/React__default['default'].createElement("span", {
    className: "text"
  }, children));
});
CheckboxBase.displayName = 'UC-CheckboxBase';

/** 复选框 */
var Checkbox = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default['default'].createElement(CheckboxBase, _extends({}, props, {
    mode: "checkbox",
    ref: ref
  }));
});
Checkbox.displayName = 'UC-Checkbox';

var _excluded$g = ["className", "button", "onChange", "options", "value", "disabled"];
var StyledCheckboxGroup = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "CheckboxGroup__StyledCheckboxGroup",
  componentId: "sc-1bljibr-0"
})([""]);
/** 一组复选框 */

var CheckboxGroup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      button = props.button,
      onChange = props.onChange,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$g);

  var onChangeRef = useLatest(onChange);
  var onCheckboxChange = React.useCallback(function (checked, v) {
    var _onChangeRef$current;

    var vIndex = value.indexOf(v);

    if (!checked) {
      if (vIndex > -1) {
        value.splice(vIndex, 1);
      }
    } else {
      if (vIndex === -1) {
        value.push(v);
      }
    }

    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, _toConsumableArray(value));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [value]);
  return /*#__PURE__*/React__default['default'].createElement(StyledCheckboxGroup, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-checkbox-group')
  }), /*#__PURE__*/React__default['default'].createElement(Space, null, options.map(function (option) {
    var item = {};

    if (isObject(option)) {
      item.label = option.label;
      item.value = option.value;
    } else {
      item.label = option;
      item.value = option;
    }

    return /*#__PURE__*/React__default['default'].createElement(Checkbox, {
      className: "uc-checkbox-group-item",
      button: button,
      disabled: disabled,
      key: item.value,
      onChange: function onChange(c) {
        return onCheckboxChange(c, item.value);
      },
      checked: value.indexOf(item.value) > -1
    }, item.label);
  })));
});
CheckboxGroup.displayName = 'UC-CheckboxGroup';

var _excluded$h = ["size"];

/** 单选框 */
var Radio = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 16 : _props$size,
      rest = _objectWithoutProperties(props, _excluded$h);

  return /*#__PURE__*/React__default['default'].createElement(CheckboxBase, _extends({}, rest, {
    size: size,
    mode: "radio",
    ref: ref
  }));
});
Radio.displayName = 'UC-Radio';

var _excluded$i = ["className", "button", "onChange", "options", "value", "disabled"];
var StyledRadioGroup = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "RadioGroup__StyledRadioGroup",
  componentId: "sc-psd39l-0"
})([""]);
/** 一组单选框 */

var RadioGroup = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      button = props.button,
      onChange = props.onChange,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$i);

  var onChangeRef = useLatest(onChange);
  var onCheckboxChange = React.useCallback(function (checked, v) {
    if (checked) {
      var _onChangeRef$current;

      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, v);
    }
  }, [onChangeRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledRadioGroup, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-radio-group')
  }), /*#__PURE__*/React__default['default'].createElement(Space, null, options.map(function (option) {
    var item = {};

    if (isObject(option)) {
      item.label = option.label;
      item.value = option.value;
    } else {
      item.label = option;
      item.value = option;
    }

    return /*#__PURE__*/React__default['default'].createElement(Radio, {
      button: button,
      disabled: disabled,
      key: item.value,
      onChange: function onChange(c) {
        return onCheckboxChange(c, item.value);
      },
      checked: value === item.value
    }, item.label);
  })));
});
RadioGroup.displayName = 'UC-RadioGroup';

var _excluded$j = ["disabled", "checked", "defaultChecked", "checkedText", "unCheckedText", "className", "onChange"];
var getClassName$3 = prefixClassName('uc-switch');
var StyledSwitch = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Switch__StyledSwitch",
  componentId: "sc-1p80du9-0"
})(["position:relative;box-sizing:border-box;width:44px;height:22px;border-radius:100px;border:none;background-color:rgba(0,0,0,0.4);cursor:pointer;transition:all 0.2s ease-in-out;color:inherit;cursor:pointer;margin:0;display:inline-flex;align-items:center;outline:0;position:relative;user-select:none;-moz-appearance:none;text-decoration:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;&::after{background-color:#fff;position:absolute;left:2px;width:18px;height:18px;border-radius:50%;content:' ';cursor:pointer;transition:left 0.2s ease-in-out;}&.checked{", " ", " &::after{left:calc(100% - 20px);}}&.disabled{cursor:not-allowed;opacity:0.6;&::after{cursor:not-allowed;}}.", "{font-size:12px;color:#fff;margin:0 7px 0 25px;transition:margin 0.2s ease-in-out;&.checked{margin:0 25px 0 7px;}}"], getThemeColorCss('background-color'), getThemeColorCss('border-color'), getClassName$3('text'));
/** 开关 */

var Switch = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var disabled = props.disabled,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      checkedText = props.checkedText,
      unCheckedText = props.unCheckedText,
      className = props.className,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$j);

  var _useState = React.useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _checked = _useState2[0],
      _setChecked = _useState2[1];

  useUpdateEffect(function () {
    if (_checked !== checked) {
      _setChecked(checked);
    }
  }, [checked]);
  return /*#__PURE__*/React__default['default'].createElement(StyledSwitch, _extends({
    ref: ref,
    onClick: function onClick() {
      if (!disabled) {
        _setChecked(!_checked);

        onChange === null || onChange === void 0 ? void 0 : onChange(!_checked);
      }
    },
    className: clsx__default['default'](getClassName$3(), className, {
      disabled: disabled,
      checked: _checked
    })
  }, rest), /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default'](getClassName$3('text'), {
      checked: _checked
    })
  }, _checked ? checkedText : unCheckedText));
});
Switch.displayName = 'UC-Switch';

/**
 * 错误边界
 *
 * @export
 * @class ErrorBoundary
 * @extends {React.Component}
 */
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var _this$props$onError, _this$props;

      (_this$props$onError = (_this$props = this.props).onError) === null || _this$props$onError === void 0 ? void 0 : _this$props$onError.call(_this$props, error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return this.props.fallback || null;
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(React__default['default'].Component);

var _excluded$k = ["type", "textPosition", "className", "dashed", "color", "children"];
var StyledDivider = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Divider__StyledDivider",
  componentId: "sc-wvxm3u-0"
})(["box-sizing:border-box;margin:16px 0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:'tnum';border:none;border-top:1px solid ", ";&.horizontal{display:flex;clear:both;width:100%;min-width:100%;}&.dashed{border-top-style:dashed;}&.text{border-top:0;.inner-text{display:inline-block;padding:0 1em;white-space:nowrap;text-align:center;}&::before,&::after{width:50%;border-top:1px solid ", ";transform:translateY(50%);content:'';}&.dashed{&::before,&::after{border-top-style:dashed;}}&.left{&::before{width:5%;}&::after{width:95%;}}&.right{&::before{width:95%;}&::after{width:5%;}}}&.vertical{position:relative;top:-0.06em;display:inline-block;height:0.9em;margin:0 8px;vertical-align:middle;border-top:0;border-left:1px solid ", ";}"], function (_ref) {
  var $color = _ref.$color;
  return $color;
}, function (_ref2) {
  var $color = _ref2.$color;
  return $color;
}, function (_ref3) {
  var color = _ref3.$color;
  return color;
});
/** 分割线 */

var Divider = function Divider(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'horizontal' : _props$type,
      _props$textPosition = props.textPosition,
      textPosition = _props$textPosition === void 0 ? 'center' : _props$textPosition,
      className = props.className,
      dashed = props.dashed,
      _props$color = props.color,
      color = _props$color === void 0 ? border : _props$color,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$k);

  var hasText = !!children;
  return /*#__PURE__*/React__default['default'].createElement(StyledDivider, _extends({}, rest, {
    $color: color,
    className: clsx__default['default']('uc-divider', type, hasText ? textPosition : '', className, {
      dashed: dashed,
      text: hasText
    })
  }), hasText ? /*#__PURE__*/React__default['default'].createElement("span", {
    className: "inner-text"
  }, children) : null);
};

var _excluded$l = ["onChange", "disabled", "multiple", "accept", "capture", "children", "className"];
var StyledFileInputTrigger = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "FileInputTrigger__StyledFileInputTrigger",
  componentId: "sc-z4rp1z-0"
})(["position:relative;display:inline-block;vertical-align:middle;&.disabled{opacity:0.4;cursor:not-allowed;}"]);
/** 触发文件上传 */

var FileInputTrigger = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var inputRef = React.useRef();

  var _onChange = props.onChange,
      disabled = props.disabled,
      multiple = props.multiple,
      accept = props.accept,
      capture = props.capture,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$l);

  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledFileInputTrigger, _extends({}, rest, {
    onClick: function onClick() {
      inputRef.current.value = '';
      inputRef.current.click();
    },
    className: clsx__default['default']('uc-file-input-trigger', className, {
      disabled: disabled
    })
  }), /*#__PURE__*/React__default['default'].createElement("input", {
    style: {
      display: 'none'
    },
    type: "file",
    ref: inputRef,
    accept: accept,
    multiple: multiple,
    capture: capture,
    disabled: disabled,
    onChange: function onChange(e) {
      e.preventDefault();
      e.stopPropagation();

      if (e.target.files && typeof _onChange === 'function') {
        _onChange(e.target.files);
      }
    }
  }), children);
});
FileInputTrigger.displayName = 'UC-FileInputTrigger';

var _excluded$m = ["onVisible", "onInVisible", "className"];

/** 路标,可见性发生变化执行回调 */
var Waypoint = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var elRef = React.useRef();

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$m);

  var vv = useLatest(onVisible);
  var vi = useLatest(onInVisible);
  useIsomorphicLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      if (visible) {
        var _vv$current;

        (_vv$current = vv.current) === null || _vv$current === void 0 ? void 0 : _vv$current.call(vv, elRef.current);
      } else {
        var _vi$current;

        (_vi$current = vi.current) === null || _vi$current === void 0 ? void 0 : _vi$current.call(vi, elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement("span", _extends({}, rest, {
    className: clsx__default['default']('uc-waypoint', className),
    ref: elRef
  }), props.children);
});
Waypoint.displayName = 'UC-Waypoint';

var getEventTarget = function getEventTarget(target, defaultTarget) {
  if (!isBrowser) {
    return undefined;
  }

  if (!target) {
    return defaultTarget;
  }

  var targetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else if (isObject(target) && 'current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
};
/**
 * 事件监听
 *
 * @export
 * @param {EventTargetType} target 绑定事件对象, 找不到则用window
 * @param {string}  事件类型
 * @param {(e:Event) => void} [handler] 事件处理
 * @param {(boolean | AddEventListenerOptions | undefined)} [options=undefined]
 */


function useEventListener(target, type, handler) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var handlerRef = useLatest(handler);
  var typeRef = useLatest(type);
  var targetRef = useLatest(target);
  var optionsRef = useLatest(options);
  React.useEffect(function () {
    var targetElement = getEventTarget(targetRef.current, window);

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var eventListener = function eventListener(e) {
      return handlerRef.current(e);
    };

    var type = typeRef.current;
    var options = optionsRef.current;
    targetElement.addEventListener(type, eventListener, options);
    return function () {
      targetElement.removeEventListener(type, eventListener, options);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 * 返回节流函数
 *
 * @param {F} fn fn改变throttle fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
var useThrottle = function useThrottle(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 180;
  var fnDeps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fnRef = useLatest(fn); // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useMemo(function () {
    return throttle(function () {
      var _fnRef$current;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
    }, timeout);
  }, fnDeps);
};

var _excluded$n = ["data", "onItemClick", "className"];
var getClassName$4 = prefixClassName('uc-index-list');
var StyledWrap$2 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "IndexList__StyledWrap",
  componentId: "sc-6nas4t-0"
})(["height:100%;position:relative;overflow:hidden;.", "{overflow:scroll;height:100%;width:100%;&::-webkit-scrollbar{display:none;}}.", "{}.", "{position:sticky;top:0;left:0;box-sizing:border-box;color:#333;font-size:14px;padding:8px 16px;background-color:#f5f5f5;}.", "{color:#666;display:flex;align-items:center;box-sizing:border-box;padding:10px 16px;font-size:14px;background-color:#fff;margin:0;}.", "{position:absolute;top:50%;transform:translateY(-50%);right:12px;z-index:300;.", "{cursor:pointer;color:#999;width:16px;height:16px;display:flex;justify-content:center;align-items:center;-webkit-tap-highlight-color:transparent;font-size:12px;&.active{", ";color:#fff;border-radius:50%;}}}"], getClassName$4('body'), getClassName$4('anchor'), getClassName$4('title'), getClassName$4('item'), getClassName$4('side'), getClassName$4('side-item'), getThemeColorCss('background-color'));
/** 索引列表 */

var IndexList = function IndexList(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      onItemClick = props.onItemClick,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$n);

  var bodyRef = React.useRef();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var onScrollSpy = useThrottle(function () {
    var bodyEl = bodyRef.current;
    var children = bodyEl.children;

    for (var i = 0; i < children.length; i++) {
      var el = children[i];

      if (el.offsetTop + el.offsetHeight > bodyEl.scrollTop) {
        setActiveIndex(i);
        return;
      }
    }
  });
  useEventListener(bodyRef, 'scroll', onScrollSpy);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$2, _extends({}, rest, {
    className: clsx__default['default'](getClassName$4(), className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$4('body'),
    ref: bodyRef
  }, data.map(function (dataItem, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: index,
      "data-index": index,
      className: getClassName$4('anchor')
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$4('title')
    }, dataItem.title), dataItem.children.map(function (item, idx) {
      return /*#__PURE__*/React__default['default'].createElement("dd", {
        className: getClassName$4('item'),
        onClick: function onClick() {
          onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        },
        key: idx,
        "data-value": item.value
      }, item.label);
    }));
  })), /*#__PURE__*/React__default['default'].createElement(Space, {
    className: getClassName$4('side'),
    direction: "vertical",
    size: 2
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("a", {
      className: clsx__default['default'](getClassName$4('side-item'), {
        active: idx === activeIndex
      }),
      key: idx,
      onClick: function onClick() {
        setActiveIndex(idx);
        var anchors = bodyRef.current.children;
        var anchor = anchors[idx];
        bodyRef.current.scrollTo({
          top: anchor.offsetTop,
          left: 0
        });
      }
    }, item.title);
  })));
};

IndexList.displayName = 'uc-index-list';

/**
 * 回到页面顶部
 *
 */
var BackTop = function BackTop(props) {
  var children = props.children,
      target = props.target,
      _props$visibilityHeig = props.visibilityHeight,
      visibilityHeight = _props$visibilityHeig === void 0 ? 100 : _props$visibilityHeig;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var top = 0;
  var onScroll = useThrottle(function () {
    var targetEl = getTargetElement(target) || window;

    if (targetEl === window && window.pageYOffset >= visibilityHeight || targetEl.scrollTop >= visibilityHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  useEventListener(target, 'scroll', onScroll);

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React__default['default'].isValidElement(children)) {
      throw new Error('ScrollTop:子元素必须为ReactElement');
    }
  }

  return visible ? /*#__PURE__*/React__default['default'].cloneElement(children, {
    onClick: function onClick() {
      var _props$onClick, _props;

      (_props$onClick = (_props = children.props).onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(_props);
      var step = Math.abs(window.pageYOffset - top) / 20;
      var targetEl = getTargetElement(target) || window;

      var cb = function cb() {
        if (targetEl === window) {
          if (window.pageYOffset > top) {
            window.scrollTo(0, window.pageYOffset - step >= top ? window.pageYOffset - step : top);
            requestAnimationFrame(cb);
          }
        } else {
          targetEl.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      };

      requestAnimationFrame(cb);
    }
  }) : null;
};

BackTop.displayName = 'UC-BackTop';

/**
 * 获得系统颜色模式
 * @returns 'light' | 'dark'
 */
var useTheme = function useTheme() {
  var _React$useState = React__default['default'].useState('light'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      theme = _React$useState2[0],
      setTheme = _React$useState2[1];

  useMount(function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
  useEventListener(function () {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }, 'change', function (event) {
    if (event.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  });
  return theme;
};

/**
 * @description 主题色设置
 * @param {Props} props
 * @return {*}
 */
var ThemeProvider = function ThemeProvider(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? primary : _props$color,
      children = props.children;
  var theme = useTheme();
  useIsomorphicLayoutEffect(function () {
    document.documentElement.style.setProperty('--uc-color', color);
    document.documentElement.setAttribute('data-theme-color', color);
  }, [color]);
  useIsomorphicLayoutEffect(function () {
    document.documentElement.setAttribute('data-theme-mode', theme);
  }, [theme]);
  return /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
    theme: {
      color: color,
      theme: theme
    }
  }, children);
};

ThemeProvider.displayName = 'UC-ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

var _isTouch = typeof window !== 'undefined' && window.ontouchstart !== undefined;

var getPosition = function getPosition(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
};

var useDragMove = function useDragMove(elRef, boundRef, onStart, onEnd) {
  React.useEffect(function () {
    if (elRef.current) {
      var ox, oy;
      var ol, ot;
      var isMoving = false;
      var elRect = elRef.current.getBoundingClientRect();
      var boundRect = null;

      if (boundRef) {
        boundRect = boundRef.current.getBoundingClientRect();
      }

      var setPosition = function setPosition(left, top, bottom, right) {
        if (left != undefined) {
          elRef.current.style.left = left + 'px';
        }

        if (top != undefined) {
          elRef.current.style.top = top + 'px';
        }

        if (bottom != undefined) {
          elRef.current.style.top = 'unset';
          elRef.current.style.bottom = bottom + 'px';
        }

        if (right != undefined) {
          elRef.current.style.left = 'unset';
          elRef.current.style.right = right + 'px';
        }
      };

      var moveHanlder = function moveHanlder(e) {
        if (!isMoving) return;

        if (e.touches) {
          e = e.touches[0];
        }

        var left = ol + e.clientX - ox;
        var top = ot + e.clientY - oy;
        var bottom, right;

        if (boundRef) {
          if (left <= 0) {
            left = 0;
          }

          if (left + elRect.width > boundRect.width) {
            right = 0;
          }

          if (top <= 0) {
            top = 0;
          }

          if (top + elRect.height > boundRect.height) {
            bottom = 0;
          }
        }

        setPosition(left, top, bottom, right);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      elRef.current.addEventListener(_isTouch ? 'touchstart' : 'mousedown', function (e) {
        e.stopPropagation();

        if (typeof e.cancelable !== 'boolean' || e.cancelable) {
          e.preventDefault();
        }

        onStart === null || onStart === void 0 ? void 0 : onStart(e, getPosition(e.target));

        if (!isMoving) {
          isMoving = true;
        }

        if (e.touches) {
          e = e.touches[0];
        }

        ox = e.clientX;
        oy = e.clientY;
        ol = elRef.current.offsetLeft;
        ot = elRef.current.offsetTop;
        document.addEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder);
      });

      var touchEndHandler = function touchEndHandler(e) {
        if (isMoving) {
          isMoving = false;
        }

        document.removeEventListener(_isTouch ? 'touchmove' : 'mousemove', moveHanlder);

        if (typeof onEnd === 'function' && elRef.current === e.target) {
          onEnd(e, getPosition(e.target));
        }
      };

      document.addEventListener(_isTouch ? 'touchend' : 'mouseup', touchEndHandler);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
};

/** 拖拽 */
var Drag = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      boundRef = props.boundRef;
  var elRef = React.useRef();

  if (process.env.NODE_ENV !== 'production') {
    if (! /*#__PURE__*/React__default['default'].isValidElement(children)) {
      throw new Error('Drag:子元素必须为ReactElement');
    }
  }

  useDragMove(elRef, boundRef, function (e, position) {
    var _props$onDragStart;

    (_props$onDragStart = props.onDragStart) === null || _props$onDragStart === void 0 ? void 0 : _props$onDragStart.call(props, e, position);
  }, function (e, position) {
    var _props$onDragEnd;

    (_props$onDragEnd = props.onDragEnd) === null || _props$onDragEnd === void 0 ? void 0 : _props$onDragEnd.call(props, e, position);
  });
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: elRef,
    style: _objectSpread2({
      position: 'absolute',
      cursor: 'move'
    }, children.props.style)
  });
});
Drag.displayName = 'UC-Drag';

// https://github.com/sindresorhus/copy-text-to-clipboard

/**
 * 复制文本
 *
 * @param {string} text
 * @param {HTMLElement} [{ target = document.body }={}]
 * @return {boolean}
 */
function copy(text) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? document.body : _ref$target;

  var element = document.createElement('textarea');
  var previouslyFocusedElement = document.activeElement;
  element.value = text; // Prevent keyboard from showing on mobile

  element.setAttribute('readonly', '');
  element.style.contain = 'strict';
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.style.fontSize = '12pt'; // Prevent zooming on iOS

  var selection = document.getSelection();
  var originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);
  target.append(element);
  element.select(); // Explicit selection workaround for iOS

  element.selectionStart = 0;
  element.selectionEnd = text.length;
  var isSuccess = false;

  try {
    isSuccess = document.execCommand('copy');
  } catch (_unused) {}

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  } // Get the focus back on the previously focused element, if any


  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }

  return isSuccess;
}

var _excluded$o = ["text", "onCopy", "children", "className"];
var StyledWrap$3 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "CopyToClipboard__StyledWrap",
  componentId: "sc-16edrok-0"
})(["display:inline-flex;cursor:pointer;"]);
/** 复制文本*/

var CopyToClipboard = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var text = props.text,
      onCopy = props.onCopy,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$o);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$3, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-copy-to-clipboard', className),
    onClick: function onClick() {
      copy(text) && (onCopy === null || onCopy === void 0 ? void 0 : onCopy());
    }
  }), children);
});
CopyToClipboard.displayName = 'UC-CopyToClipboard';

var _excluded$p = ["lines", "children", "className"];
var StyledMultiLines = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Text__StyledMultiLines",
  componentId: "sc-1lf0pma-0"
})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:", ";overflow:hidden;"], function (props) {
  return props.$lines;
});
var StyledLine = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Text__StyledLine",
  componentId: "sc-1lf0pma-1"
})(["display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */
var Text = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$lines = props.lines,
      lines = _props$lines === void 0 ? 1 : _props$lines,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$p);

  return /*#__PURE__*/React__default['default'].createElement(lines > 1 ? StyledMultiLines : StyledLine, _objectSpread2(_objectSpread2({}, rest), {}, {
    className: clsx__default['default']('uc-text', className),
    ref: ref,
    $lines: lines
  }), children);
});
Text.displayName = 'UC-Text';

var _excluded$q = ["content", "visible", "modal", "maskStyle", "className"],
    _excluded2 = ["duration"];
var StyledToast = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Toast__StyledToast",
  componentId: "sc-1evhb0v-0"
})(["z-index:2000;padding:12px 16px;display:inline-block;margin:0 auto;background-color:rgba(0,0,0,0.7);color:#fff;border-radius:4px;text-align:center;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);"]);

/** 轻提示 */
var Toast = function Toast(props) {
  var content = props.content,
      visible = props.visible,
      _props$modal = props.modal,
      modal = _props$modal === void 0 ? true : _props$modal,
      maskStyle = props.maskStyle,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$q);

  return visible ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Mask, {
    visible: modal,
    style: _objectSpread2({
      opacity: 0
    }, maskStyle)
  }), /*#__PURE__*/React__default['default'].createElement(StyledToast, _extends({}, rest, {
    className: clsx__default['default']('uc-toast', className)
  }), content)) : null;
};

var transitionDuration = 240;
var _hide = null;
var num = 0;

Toast.show = function (props) {
  if (num > 0) {
    // skip
    return;
  }

  num++;
  var toastProps = {};
  var _duration = 1500;
  var isToastProps = _typeof(props) === 'object' && 'content' in props;

  if (isToastProps) {
    var _props$duration = props.duration,
        duration = _props$duration === void 0 ? 1500 : _props$duration,
        rest = _objectWithoutProperties(props, _excluded2);

    toastProps = rest;
    _duration = duration;
  } else {
    toastProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-toast', transitionDuration);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(Toast, _extends({}, toastProps, {
    visible: true
  })), container);

  var hide = function hide() {
    num--;
    dispose(beforeDispose);

    if (isToastProps) {
      var _props$afterClose;

      (_props$afterClose = props.afterClose) === null || _props$afterClose === void 0 ? void 0 : _props$afterClose.call(props);
    }
  };

  window.setTimeout(function () {
    hide();
  }, _duration);
  _hide = hide;
  return hide;
};

Toast.hide = function () {
  var _hide2;

  (_hide2 = _hide) === null || _hide2 === void 0 ? void 0 : _hide2();
};

Toast.displayName = 'UC-Toast';

var _excluded$r = ["direction", "className"];
var StyledArrow = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "IconArrow__StyledArrow",
  componentId: "sc-vejiu7-0"
})(["display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;svg{transition:transform ", "ms ease-in-out;}&.right{svg{transform:rotate(-90deg);}}&.left{svg{transform:rotate(90deg);}}&.top{svg{transform:rotate(-180deg);}}&.bottom{}"], animationSlow);
var SVGProps$2 = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
};
/** 箭头 */

var IconArrow = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'bottom' : _props$direction,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$r);

  return /*#__PURE__*/React__default['default'].createElement(StyledArrow, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-icon-arrow', className, _defineProperty({}, direction, direction))
  }), /*#__PURE__*/React__default['default'].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, SVGProps$2), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
});
IconArrow.displayName = 'UC-IconArrow';

var _excluded$s = ["content", "delay", "icon", "speed", "closeable", "className", "onClose", "extra"];
var StyledNoticeBar = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "NoticeBar__StyledNoticeBar",
  componentId: "sc-zrqize-0"
})(["height:30px;font-size:14px;line-height:30px;padding:0 12px;display:flex;align-items:center;justify-content:space-between;background-color:rgba(236,146,49,0.1);color:rgb(236,146,49);overflow:hidden;&.hide{display:none;}.icon-part{flex-shrink:0;margin-right:8px;}.content-wrap{flex:1 1;overflow:hidden;height:100%;display:flex;align-items:center;.content-text{transition-property:transform;transition-timing-function:linear;white-space:nowrap;flex:1;}}.content-extra{display:inline-block;flex-shrink:0;margin-left:12px;}"]);

/** 通告栏  */
var NoticeBar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var content = props.content,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 2000 : _props$delay,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-horn"
  }) : _props$icon,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? 50 : _props$speed,
      _props$closeable = props.closeable,
      closeable = _props$closeable === void 0 ? false : _props$closeable,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = _objectWithoutProperties(props, _excluded$s);

  var wrapRef = React.useRef();
  var contentRef = React.useRef();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      v = _useState2[0],
      setV = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  useIsomorphicLayoutEffect(function () {
    var container = wrapRef.current;
    var text = contentRef.current;
    if (container.offsetWidth >= text.offsetWidth) return;
    var timeout = window.setTimeout(function () {
      text.style.transitionDuration = "".concat(Math.round(text.offsetWidth / speed), "s");
      text.style.transform = "translateX(-".concat(text.offsetWidth, "px)");
    }, delay);
    return function () {
      window.clearTimeout(timeout);
    };
  }, [delay, speed]);
  useIsomorphicLayoutEffect(function () {
    var container = wrapRef.current;
    var text = contentRef.current;

    if (container.offsetWidth >= text.offsetWidth || v === 0) {
      return;
    }

    text.style.transform = "translateX(".concat(container.offsetWidth, "px)");
    text.style.transitionDuration = "".concat(Math.round((container.offsetWidth + text.offsetWidth) / speed), "s");
    text.style.transform = "translateX(-".concat(text.offsetWidth, "px)"); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);
  return /*#__PURE__*/React__default['default'].createElement(StyledNoticeBar, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-noticebar', {
      hide: !visible
    })
  }), icon && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "icon-part"
  }, icon), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-text",
    key: v,
    onTransitionEnd: function onTransitionEnd() {
      setV(function (v) {
        return v + 1;
      });
    },
    ref: contentRef
  }, content)), (closeable || extra) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content-extra')
  }, /*#__PURE__*/React__default['default'].createElement(Space, null, props.extra, props.closeable && /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-guanbi",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setVisible(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }))));
});
NoticeBar.displayName = 'UC-NoticeBar';

var _excluded$t = ["children", "offsetTop", "offsetBottom", "zIndex", "target", "onChange"];

/** 将页面元素钉在可视范围*/
var Affix = function Affix(props) {
  var children = props.children,
      offsetTop = props.offsetTop,
      offsetBottom = props.offsetBottom,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 100 : _props$zIndex,
      target = props.target,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$t);

  var _useState = React.useState({
    affixed: false,
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var onChangeRef = useLatest(onChange);
  var targetRef = React.useRef(target);
  var wrapElRef = React.useRef();
  var fixedElRef = React.useRef();
  var targetRectRef = React.useRef({
    top: 0,
    bottom: 0
  });
  var wrapElTopRef = React.useRef('offsetBottom' in props ? -10000 : 10000);
  var offsetRef = React.useRef({
    offsetBottom: offsetBottom,
    offsetTop: typeof offsetTop === 'number' ? offsetTop : typeof offsetBottom !== 'number' && 0
  });
  var getAffixed = React.useCallback(function () {
    var targetRect = targetRectRef.current;
    var wrapElTop = wrapElTopRef.current;
    var _offsetRef$current = offsetRef.current,
        offsetTop = _offsetRef$current.offsetTop,
        offsetBottom = _offsetRef$current.offsetBottom;

    if (typeof offsetBottom === 'number' && wrapElTop + offsetBottom >= targetRect.bottom) {
      return true;
    }

    if (typeof offsetBottom !== 'number' && typeof offsetTop === 'number' && wrapElTop - offsetTop <= targetRect.top) {
      return true;
    }

    return false;
  }, []);
  var getAffixeStyle = React.useCallback(function () {
    var targetRect = targetRectRef.current;
    var _offsetRef$current2 = offsetRef.current,
        offsetTop = _offsetRef$current2.offsetTop,
        offsetBottom = _offsetRef$current2.offsetBottom;
    var width = data.width,
        height = data.height;
    var affixed = getAffixed();

    if (affixed && typeof offsetBottom === 'number') {
      return {
        position: 'fixed',
        bottom: offsetBottom,
        width: width,
        height: height,
        zIndex: zIndex
      };
    }

    if (affixed && typeof offsetTop === 'number') {
      return {
        position: 'fixed',
        top: targetRect.top + offsetTop,
        width: width,
        height: height,
        zIndex: zIndex
      };
    }

    return {};
  }, [getAffixed, data, zIndex]);
  React.useEffect(function () {
    var t = getTargetElement(targetRef.current) || window;
    targetRectRef.current = t !== window ? t.getBoundingClientRect() : {
      top: 0,
      bottom: t.innerHeight,
      width: 0,
      height: 0
    };
  }, [targetRef, targetRectRef]);
  var onScrollUpdate = React.useCallback(function () {
    var affixed = data.affixed;
    var wrapEl = wrapElRef.current;
    if (!wrapEl) return;

    var _wrapEl$getBoundingCl = wrapEl.getBoundingClientRect(),
        top = _wrapEl$getBoundingCl.top,
        width = _wrapEl$getBoundingCl.width,
        height = _wrapEl$getBoundingCl.height;

    wrapElTopRef.current = top;
    var currentAffixed = getAffixed();

    if (currentAffixed !== affixed) {
      var _onChangeRef$current;

      setData({
        affixed: currentAffixed,
        width: width === 0 ? 'auto' : width,
        height: height === 0 ? 'auto' : height
      });
      (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, currentAffixed);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [getAffixed, data]);
  var onScroll = useThrottle(onScrollUpdate, 16);
  useEventListener(target, 'scroll', onScroll);
  var affixed = data.affixed;

  if (!affixed) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      ref: wrapElRef,
      className: "uc-affix"
    }, children);
  }

  return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    ref: wrapElRef,
    className: clsx__default['default']('uc-affix', 'affixed')
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: fixedElRef,
    style: getAffixeStyle()
  }, children));
};

Affix.displayName = 'UC-Affix';

var _excluded$u = ["position", "className", "children"];
var getClassName$5 = prefixClassName('uc-safe-area');
var StyledWrap$4 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "SafeArea__StyledWrap",
  componentId: "sc-622652-0"
})(["display:block;width:100%;&.", "{padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top);}&.", "{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);}"], getClassName$5('top'), getClassName$5('bottom'));

/** 安全区容器 */
var SafeArea = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$u);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$4, _extends({
    ref: ref
  }, rest, {
    className: clsx__default['default'](getClassName$5(), getClassName$5(position), className)
  }), children);
});
SafeArea.displayName = 'UC-SafeArea';

var _excluded$v = ["visible", "actions", "cancelText", "onCancel", "closeOnMaskClick", "onClose", "className", "extra", "borderColor"];
var getClassName$6 = prefixClassName('uc-actionsheet');
var StyledActionSheet = /*#__PURE__*/styled__default['default'](Popup).withConfig({
  displayName: "ActionSheet__StyledActionSheet",
  componentId: "sc-1wphsp-0"
})(["border-top-left-radius:8px;border-top-right-radius:8px;overflow:hidden;width:100%;background-color:#f5f5f5;user-select:none;.", "{background-color:#fff;display:flex;justify-content:center;color:#999;font-size:15px;padding:18px 16px;border-bottom:1px solid ", ";}.", "{border-top:1px solid ", ";background-color:#fff;width:100%;padding:14px;height:55px;text-align:center;border:none;border-radius:0;display:flex;flex-direction:column;font-size:18px;color:#333;&.disabled{opacity:1;color:#999;}&.default.pc:hover{border-color:", ";}.", "{font-size:12px;margin-top:4px;color:#999;}&:not(:last-child){border-bottom:1px solid ", ";}&.cancel{margin-top:8px;border-bottom:none;}}"], getClassName$6('extra'), function (_ref) {
  var $border = _ref.$border;
  return $border;
}, getClassName$6('action-item'), function (_ref2) {
  var $border = _ref2.$border;
  return $border;
}, function (_ref3) {
  var $border = _ref3.$border;
  return $border;
}, getClassName$6('action-item-description'), function (_ref4) {
  var $border = _ref4.$border;
  return $border;
});
/** 动作面板 */

var ActionSheet = function ActionSheet(props) {
  var _props$visible = props.visible,
      visible = _props$visible === void 0 ? false : _props$visible,
      _props$actions = props.actions,
      actions = _props$actions === void 0 ? [] : _props$actions,
      cancelText = props.cancelText,
      onCancel = props.onCancel,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      onClose = props.onClose,
      className = props.className,
      extra = props.extra,
      _props$borderColor = props.borderColor,
      borderColor = _props$borderColor === void 0 ? '#dcdcdc' : _props$borderColor,
      rest = _objectWithoutProperties(props, _excluded$v);

  return /*#__PURE__*/React__default['default'].createElement(StyledActionSheet, _extends({}, rest, {
    $border: borderColor,
    className: clsx__default['default'](getClassName$6(), className),
    visible: visible,
    position: "bottom",
    closeOnMaskClick: closeOnMaskClick,
    onClose: onClose
  }), /*#__PURE__*/React__default['default'].createElement(SafeArea, {
    className: getClassName$6('action-list')
  }, extra && /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$6('extra')
  }, extra), actions.map(function (action, index) {
    return /*#__PURE__*/React__default['default'].createElement(Button, {
      key: index,
      disabled: action.disabled,
      style: {
        color: action.color
      },
      className: clsx__default['default'](getClassName$6('action-item'), {
        disabled: action.disabled
      }),
      onClick: function onClick() {
        var _action$onClick;

        (_action$onClick = action.onClick) === null || _action$onClick === void 0 ? void 0 : _action$onClick.call(action);
      }
    }, action.text, action.description && /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$6('action-item-description')
    }, action.description));
  }), cancelText && /*#__PURE__*/React__default['default'].createElement(Button, {
    className: clsx__default['default'](getClassName$6('action-item'), 'cancel'),
    onClick: function onClick() {
      onClose === null || onClose === void 0 ? void 0 : onClose();
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    }
  }, cancelText)));
};

ActionSheet.displayName = 'UC-ActionSheet';

var _excluded$w = ["visible", "title", "content", "onConfirm", "onCancel", "confirmText", "cancelText", "closeOnMaskClick", "buttonSpace", "closable", "mask", "maskStyle", "maskClass", "onClose", "className", "wrapStyle", "mobile", "wait"],
    _excluded2$1 = ["title", "content", "confirmText", "onConfirm", "cancelText", "onCancel", "mobile", "wait", "wrapStyle"];
var StyledAlertDialog = /*#__PURE__*/styled__default['default'](Popup).withConfig({
  displayName: "AlertDialog__StyledAlertDialog",
  componentId: "sc-1ifj2xy-0"
})(["overflow:hidden;&.from{opacity:0;transform:translate(-50%,-50%) scale(0.5);&.pc{top:160px;transform:translate(-50%,0) scale(0.5);}}&.to{transform:translate(-50%,-50%) scale(1);&.pc{top:160px;transform:translate(-50%,0) scale(1);}opacity:1;}&.mobile{width:280px;padding:20px 0 0;.header{text-align:center;}.body{padding:16px;overflow-y:scroll;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}}.footer{position:relative;display:flex;height:48px;padding:0;overflow:hidden;.confirm{", "}.uc-btn{height:48px;border:none;flex:1;}&:after{content:'';pointer-events:none;position:absolute;width:100%;height:100%;left:0;top:0;border-top:1px solid ", ";@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){width:200%;height:200%;transform:scale(0.5);transform-origin:0 0;}}}}box-shadow:0 2px 12px 0 rgb(0 0 0 / 10%);background-color:#fff;position:relative;display:inline-block;vertical-align:middle;text-align:initial;border-radius:8px;padding:24px 24px 16px;box-sizing:border-box;white-space:normal;max-width:calc(100vw - 56px);max-height:calc(100vh - 112px);width:420px;display:flex;flex-direction:column;.close{top:16px;right:16px;color:#999;position:absolute;display:inline-block;cursor:pointer;font-size:16px;&:hover{color:#666;}}.header{font-size:16px;line-height:20px;color:#333;box-sizing:border-box;font-weight:500;}.body{font-size:14px;line-height:20px;max-height:calc(100vh - 256px);padding:24px 0 32px;flex:1;overflow-y:scroll;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}}.footer{text-align:right;.uc-btn{min-width:80px;}}"], getThemeColorCss('color'), border);

/** 移动端/pc端两种风格的 alert/confirm弹窗 */
var AlertDialog = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      title = props.title,
      content = props.content,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      _props$confirmText = props.confirmText,
      confirmText = _props$confirmText === void 0 ? '确定' : _props$confirmText,
      cancelText = props.cancelText,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? false : _props$closeOnMaskCli,
      _props$buttonSpace = props.buttonSpace,
      buttonSpace = _props$buttonSpace === void 0 ? 16 : _props$buttonSpace,
      _props$closable = props.closable,
      closable = _props$closable === void 0 ? false : _props$closable,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      onClose = props.onClose,
      className = props.className,
      wrapStyle = props.wrapStyle,
      mobile = props.mobile,
      wait = props.wait,
      rest = _objectWithoutProperties(props, _excluded$w);

  return /*#__PURE__*/React__default['default'].createElement(StyledAlertDialog, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-alert-dialog', className, {
      mobile: mobile
    }),
    visible: visible,
    onClose: onClose,
    position: "center",
    mask: mask,
    style: wrapStyle,
    maskStyle: maskStyle,
    maskClass: maskClass,
    closeOnMaskClick: closeOnMaskClick
  }), closable && /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), title && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('header')
  }, title), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('body')
  }, content), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('footer')
  }, !mobile ? /*#__PURE__*/React__default['default'].createElement(Space, {
    size: buttonSpace
  }, cancelText ? /*#__PURE__*/React__default['default'].createElement(Button, {
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(onClose);

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    className: clsx__default['default']('cancel')
  }, cancelText) : null, confirmText && /*#__PURE__*/React__default['default'].createElement(Button, {
    type: "primary",
    wait: wait,
    className: clsx__default['default']('confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(onClose);

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText)) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, cancelText ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Button, {
    className: clsx__default['default']('cancel'),
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(onClose);

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, cancelText), /*#__PURE__*/React__default['default'].createElement(Divider, {
    type: "vertical",
    style: {
      height: '100%',
      color: border,
      margin: 0
    }
  })) : null, /*#__PURE__*/React__default['default'].createElement(Button, {
    className: clsx__default['default']('confirm'),
    wait: wait,
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(onClose);

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText))));
});
AlertDialog.displayName = 'UC-AlertDialog';
var transitionDuration$1 = 240;

var show = function show(props) {
  var title = props.title,
      content = props.content,
      _props$confirmText2 = props.confirmText,
      confirmText = _props$confirmText2 === void 0 ? '确定' : _props$confirmText2,
      _onConfirm = props.onConfirm,
      cancelText = props.cancelText,
      _onCancel = props.onCancel,
      mobile = props.mobile,
      wait = props.wait,
      wrapStyle = props.wrapStyle,
      rest = _objectWithoutProperties(props, _excluded2$1);

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-popup', transitionDuration$1);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    duration: transitionDuration$1
  }, /*#__PURE__*/React__default['default'].createElement(AlertDialog, _extends({}, rest, {
    mobile: mobile,
    title: title,
    content: content,
    visible: true,
    confirmText: confirmText,
    cancelText: cancelText,
    wrapStyle: wrapStyle,
    wait: wait,
    onConfirm: function onConfirm() {
      _onConfirm === null || _onConfirm === void 0 ? void 0 : _onConfirm(function () {
        return dispose(beforeDispose);
      });
    },
    onClose: function onClose() {
      dispose(beforeDispose);
    },
    onCancel: function onCancel() {
      _onCancel === null || _onCancel === void 0 ? void 0 : _onCancel(function () {
        return dispose(beforeDispose);
      });
    },
    mountContainer: function mountContainer() {
      return container;
    }
  }))), container);
};

var AlertDialog$1 = attachPropertiesToComponent(AlertDialog, {
  show: show
});

var _excluded$x = ["value", "length", "className", "mask", "autoFocus", "userVirtualInput", "onFinish", "onFocus", "onChange"];
var StyledPasswordInput = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "PasswordInput__StyledPasswordInput",
  componentId: "sc-10w2tte-0"
})(["user-select:none;height:50px;cursor:pointer;display:flex;background-color:#fff;border-radius:4px;padding:8px;border:1px solid ", ";margin:0 16px;.item{flex:1;display:inline-flex;align-items:center;justify-content:center;height:100%;font-size:20px;line-height:1.2;background-color:#fff;&:not(:first-child){border-left:1px solid ", ";}.dot{width:10px;height:10px;background-color:#000;border-radius:100%;}input{height:100%;width:100%;display:inline-block;font-size:16px;text-align:center;background-color:transparent;border:0;resize:none;outline:none;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;box-shadow:none;}@keyframes blink{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}.virtual-input{&.blink{width:1px;height:50%;background-color:#333;animation:1s blink infinite;}}}"], border, border);

var getArray = function getArray(len) {
  var ar = [];

  for (var i = 0; i < len; i++) {
    ar.push(i + 1);
  }

  return ar;
};

/** 密码输入框 */
var PasswordInput = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$length = props.length,
      length = _props$length === void 0 ? 6 : _props$length,
      className = props.className,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? true : _props$mask,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      userVirtualInput = props.userVirtualInput,
      onFinish = props.onFinish,
      onFocus = props.onFocus,
      _onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$x);

  var arRef = React.useRef(getArray(length));
  var inputRefArray = React.useRef([]);
  var autoFocusRef = useLatest(autoFocus);
  var vRef = useLatest(value);
  var inputValueRef = useLatest(value.split(''));
  var onFinishRef = useLatest(onFinish);
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        setTimeout(function () {
          var _inputRefArray$curren, _inputRefArray$curren2;

          (_inputRefArray$curren = inputRefArray.current[vRef.current.length]) === null || _inputRefArray$curren === void 0 ? void 0 : (_inputRefArray$curren2 = _inputRefArray$curren.focus) === null || _inputRefArray$curren2 === void 0 ? void 0 : _inputRefArray$curren2.call(_inputRefArray$curren);
        }, 60);
      }
    };
  });
  React.useEffect(function () {
    if (value.length === length) {
      var _onFinishRef$current;

      (_onFinishRef$current = onFinishRef.current) === null || _onFinishRef$current === void 0 ? void 0 : _onFinishRef$current.call(onFinishRef, value);
    }
  }, [value, onFinishRef, length]);
  React.useEffect(function () {
    if (autoFocusRef.current) {
      var _inputRefArray$curren3, _inputRefArray$curren4;

      (_inputRefArray$curren3 = inputRefArray.current[vRef.current.length]) === null || _inputRefArray$curren3 === void 0 ? void 0 : (_inputRefArray$curren4 = _inputRefArray$curren3.focus) === null || _inputRefArray$curren4 === void 0 ? void 0 : _inputRefArray$curren4.call(_inputRefArray$curren3);
    }
  }, [autoFocusRef, vRef]); // prev value check

  var prevInputCheck = React.useCallback(function (idx) {
    for (var i = 0; i < idx; i++) {
      if (!inputValueRef.current[i]) {
        return false;
      }
    }

    return true;
  }, [inputValueRef]);
  return /*#__PURE__*/React__default['default'].createElement(StyledPasswordInput, _extends({}, rest, {
    className: clsx__default['default']('uc-password-input', className)
  }), arRef.current.map(function (n, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('item'),
      key: n
    }, value.length >= n ? mask ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: "dot"
    }) : value[idx] : !userVirtualInput ? /*#__PURE__*/React__default['default'].createElement("input", {
      ref: function ref(r) {
        inputRefArray.current[idx] = r;
      },
      onChange: function onChange(e) {
        inputValueRef.current[idx] = e.target.value;
        var newValue = inputValueRef.current.join('');
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(newValue);

        if (n < length) {
          var _inputRefArray$curren5;

          (_inputRefArray$curren5 = inputRefArray.current[idx + 1]) === null || _inputRefArray$curren5 === void 0 ? void 0 : _inputRefArray$curren5.focus();
        }
      },
      onKeyDown: function onKeyDown(e) {
        if (e.code === 'Backspace' || e.which === 8) {
          // back
          if (idx > 0) {
            var _v = inputValueRef.current.slice(0, idx - 1).join('');

            _onChange === null || _onChange === void 0 ? void 0 : _onChange(_v);
            setTimeout(function () {
              var _inputRefArray$curren6;

              (_inputRefArray$curren6 = inputRefArray.current[Math.max(0, idx - 1)]) === null || _inputRefArray$curren6 === void 0 ? void 0 : _inputRefArray$curren6.focus();
            }, 100);
          } else {
            var _inputRefArray$curren7;

            (_inputRefArray$curren7 = inputRefArray.current[0]) === null || _inputRefArray$curren7 === void 0 ? void 0 : _inputRefArray$curren7.focus();
          }
        } else if (!prevInputCheck(idx)) {
          e.preventDefault();
        }
      },
      onFocus: onFocus
    }) : /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('virtual-input', {
        blink: value.length === idx
      })
    }));
  }));
});
PasswordInput.displayName = 'UC-PasswordInput';

var _excluded$y = ["onClick", "okText", "customKey", "className", "height"];
var getClassName$7 = prefixClassName('uc-number-keyboard');
var StyledNumberKeyboardBase = /*#__PURE__*/styled__default['default'](SafeArea).withConfig({
  displayName: "NumberKeyboardBase__StyledNumberKeyboardBase",
  componentId: "sc-1pcvc0u-0"
})(["width:100%;background-color:#f2f3f5;user-select:none;.", "{display:flex;padding:6px 0 0 6px;height:100%;.", "{display:flex;flex:3;flex-wrap:wrap;&.", "{display:flex;flex:1;flex-direction:column;max-width:33%;.", "{max-width:100%;}}.", "{position:relative;flex:1;flex-basis:33%;box-sizing:border-box;padding:0 6px 6px 0;&.zero{flex-basis:66%;}&.empty{display:none;}}}}"], getClassName$7('body'), getClassName$7('keys'), getClassName$7('sidebar'), getClassName$7('key'), getClassName$7('key'));
var Styledkey = /*#__PURE__*/styled__default['default'](Button).withConfig({
  displayName: "NumberKeyboardBase__Styledkey",
  componentId: "sc-1pcvc0u-1"
})(["display:flex;align-items:center;justify-content:center;height:48px;font-size:28px;line-height:1.5;background-color:#fff;border-radius:8px;cursor:pointer;width:100%;height:100%;border:0;"]);
/** 数字键盘基础 */

var NumberKeyboardBase = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _onClick = props.onClick,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$customKey = props.customKey,
      customKey = _props$customKey === void 0 ? '' : _props$customKey,
      className = props.className,
      _props$height = props.height,
      height = _props$height === void 0 ? 260 : _props$height,
      rest = _objectWithoutProperties(props, _excluded$y);

  var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', customKey];
  return /*#__PURE__*/React__default['default'].createElement(StyledNumberKeyboardBase, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](getClassName$7(), className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$7('body'),
    style: {
      height: height
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$7('keys')
  }, keys.map(function (key) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default'](getClassName$7('key'), {
        'zero': key === '0',
        'custom-key': key === customKey,
        'empty': key === ''
      }),
      key: key
    }, /*#__PURE__*/React__default['default'].createElement(Styledkey, {
      onClick: function onClick() {
        _onClick === null || _onClick === void 0 ? void 0 : _onClick(key);
      }
    }, key));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](getClassName$7('sidebar'), getClassName$7('keys'))
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$7('key'),
    key: 'backspace'
  }, /*#__PURE__*/React__default['default'].createElement(Styledkey, {
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('backspace');
    }
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$7('key'),
    key: 'ok'
  }, /*#__PURE__*/React__default['default'].createElement(Styledkey, {
    type: "primary",
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('ok');
    }
  }, okText)))));
});
NumberKeyboardBase.displayName = 'UC-NumberKeyboardBase';

var _excluded$z = ["visible", "okText", "closeOnMaskClick", "maxLength", "customKey", "onOk", "onClose", "onChange", "className", "style", "height"];
var getClassName$8 = prefixClassName('uc-number-keyboard-picker');
var StyledPopup = /*#__PURE__*/styled__default['default'](Popup).withConfig({
  displayName: "NumberKeyboard__StyledPopup",
  componentId: "sc-z3xmg5-0"
})(["width:100%;background-color:transparent;"]);
/** 数字键盘 */

var NumberKeyboard = function NumberKeyboard(props) {
  var visible = props.visible,
      okText = props.okText,
      _props$closeOnMaskCli = props.closeOnMaskClick,
      closeOnMaskClick = _props$closeOnMaskCli === void 0 ? true : _props$closeOnMaskCli,
      maxLength = props.maxLength,
      _props$customKey = props.customKey,
      customKey = _props$customKey === void 0 ? '' : _props$customKey,
      onOk = props.onOk,
      onClose = props.onClose,
      onChange = props.onChange,
      className = props.className,
      style = props.style,
      _props$height = props.height,
      height = _props$height === void 0 ? 260 : _props$height,
      rest = _objectWithoutProperties(props, _excluded$z);

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(StyledPopup, _extends({}, rest, {
    closeOnMaskClick: closeOnMaskClick,
    visible: visible,
    onClose: onClose,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    position: "bottom",
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    }),
    className: clsx__default['default'](getClassName$8(), className)
  }), /*#__PURE__*/React__default['default'].createElement(NumberKeyboardBase, {
    okText: okText,
    customKey: customKey,
    height: height,
    onClick: function onClick(k) {
      if (k === 'ok') {
        onOk === null || onOk === void 0 ? void 0 : onOk(value);
        onClose === null || onClose === void 0 ? void 0 : onClose();
      } else if (k === 'backspace') {
        if (value.length) {
          setValue(value.slice(0, value.length - 1));
        }
      } else {
        if (typeof maxLength === 'number' && value.length < maxLength || typeof maxLength === 'undefined') {
          setValue(function (v) {
            return v + k;
          });
        }
      }
    }
  }));
};

NumberKeyboard.displayName = 'UC-NumberKeyboard';

/**
 * 监听点击元素外部事件
 *
 * @export
 * @param {(TargetElementType | TargetElementType[])} target 监听dom对象
 * @param {(e) => void} [onClickAway] 点击外部事件触发回调
 * @param {string} [eventName='click'] 监听事件类型
 */

function useClickAway(
/** 监听dom对象 */
target,
/** 点击外部事件触发回调 */
onClickAway) {
  var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';
  var onClickAwayRef = useLatest(onClickAway);
  var targetRef = useLatest(target);
  var handler = React__default['default'].useCallback(function (e) {
    var _onClickAwayRef$curre;

    var targets = Array.isArray(targetRef.current) ? targetRef.current : [targetRef.current];

    if (targets.some(function (targetItem) {
      var _targetElement$contai;

      var targetElement = getTargetElement(targetItem);
      return !targetElement || ((_targetElement$contai = targetElement.contains) === null || _targetElement$contai === void 0 ? void 0 : _targetElement$contai.call(targetElement, e.target));
    })) {
      return;
    }

    (_onClickAwayRef$curre = onClickAwayRef.current) === null || _onClickAwayRef$curre === void 0 ? void 0 : _onClickAwayRef$curre.call(onClickAwayRef, e);
  }, []);
  useEventListener(function () {
    return document;
  }, eventName, handler);
}

var _excluded$A = ["left", "right", "onClose", "onOpen", "autoClose", "closeOnClickOutside", "className", "children"];
var getClassName$9 = prefixClassName('uc-swipe-action');
var StyledSwipeAction = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "SwipeAction__StyledSwipeAction",
  componentId: "sc-k9tztb-0"
})(["user-select:none;position:relative;display:block;overflow:hidden;cursor:grab;box-sizing:border-box;.", "{transition:transform 0.3s ease-in-out;overflow:visible;display:flex;flex-wrap:nowrap;.", ",.", "{position:absolute;top:0;height:100%;}.", "{left:0px;transform:translate3d(-100%,0,0);}.", "{right:0px;transform:translate3d(100%,0,0);}.", "{width:100%;box-sizing:border-box;position:relative;height:44px;padding:0 16px;display:flex;align-items:center;background:#fff;color:#666;box-sizing:border-box;}.", "{*{pointer-events:none;}}}"], getClassName$9('wrap'), getClassName$9('left'), getClassName$9('right'), getClassName$9('left'), getClassName$9('right'), getClassName$9('middle'), getClassName$9('item'));
var StyledButton$2 = /*#__PURE__*/styled__default['default'](Button).withConfig({
  displayName: "SwipeAction__StyledButton",
  componentId: "sc-k9tztb-1"
})(["height:100%;border-radius:0;border:0;color:#fff;font-size:15px;"]);
/** SwipeAction 滑动操作 */

var SwipeAction = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$left = props.left,
      left = _props$left === void 0 ? [] : _props$left,
      _props$right = props.right,
      right = _props$right === void 0 ? [] : _props$right,
      onClose = props.onClose,
      onOpen = props.onOpen,
      _props$autoClose = props.autoClose,
      autoClose = _props$autoClose === void 0 ? true : _props$autoClose,
      _props$closeOnClickOu = props.closeOnClickOutside,
      closeOnClickOutside = _props$closeOnClickOu === void 0 ? true : _props$closeOnClickOu,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$A);

  var elRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var thisRef = React.useRef({
    x: 0,
    el: null,
    leftEl: null,
    rightEl: null,
    leftWidth: 0,
    rightWidth: 0
  });
  var onOpenRef = useLatest(onOpen);
  var onCloseRef = useLatest(onClose);
  useUpdateEffect(function () {
    if (isOpen) {
      var _onOpenRef$current;

      (_onOpenRef$current = onOpenRef.current) === null || _onOpenRef$current === void 0 ? void 0 : _onOpenRef$current.call(onOpenRef);
    } else {
      var _onCloseRef$current;

      (_onCloseRef$current = onCloseRef.current) === null || _onCloseRef$current === void 0 ? void 0 : _onCloseRef$current.call(onCloseRef);
    }
  }, [isOpen]);
  var startTransform = React.useCallback(function (transformStr, x) {
    var v = thisRef.current;
    v.x = x;
    v.el.style.transitionProperty = 'transform';
    v.el.style.transform = "".concat(transformStr);
  }, []);
  useClickAway(elRef, function () {
    if (closeOnClickOutside) {
      startTransform('translate3d(0,0,0)', 0);
      setIsOpen(false);
    }
  });
  useIsomorphicLayoutEffect(function () {
    thisRef.current.el = elRef.current;
    thisRef.current.leftWidth = thisRef.current.leftEl.offsetWidth;
    thisRef.current.rightWidth = thisRef.current.rightEl.offsetWidth;
  }, [thisRef]);
  var renderAction = React.useCallback(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement(StyledButton$2, {
      onClick: item.onClick,
      key: idx,
      className: getClassName$9('item'),
      style: {
        backgroundColor: item.color || primary
      }
    }, item.text);
  }, []);
  useIsomorphicLayoutEffect(function () {
    var el = elRef.current;
    var fg = new Touch__default['default'](el, {
      onPressMove: function onPressMove(e) {
        var v = thisRef.current;
        v.x += e.deltaX; // x<0:swipe left & show right

        if (v.x < 0 && Math.abs(v.x) < v.rightWidth) {
          v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
        } else if (v.x > 0 && Math.abs(v.x) < v.leftWidth) {
          v.el.style.transform = "translate3d(".concat(v.x, "px,0,0)");
        }
      },
      onTouchStart: function onTouchStart() {
        thisRef.current.el.style.transitionProperty = 'none';
      },
      onTouchEnd: function onTouchEnd() {
        var v = thisRef.current;

        if (v.x < 0) {
          // open right
          if (Math.abs(v.x) < v.rightWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            setIsOpen(false);
          } else {
            startTransform("translate3d(-".concat(v.rightWidth, "px,0,0)"), -1 * v.rightWidth);
            setIsOpen(true);
          }
        } else if (v.x > 0) {
          if (Math.abs(v.x) < v.leftWidth / 2) {
            // no more than half way
            startTransform('translate3d(0,0,0)', 0);
            v.x = 0;
            setIsOpen(false);
          } else {
            startTransform("translate3d(".concat(v.leftWidth, "px,0,0)"), v.leftWidth);
            setIsOpen(true);
          }
        }
      }
    });
    return function () {
      fg === null || fg === void 0 ? void 0 : fg.destroy();
    };
  }, [startTransform]);
  return /*#__PURE__*/React__default['default'].createElement(StyledSwipeAction, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](getClassName$9(), className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: elRef,
    className: getClassName$9('wrap'),
    onClick: function onClick(e) {
      var _e$target, _e$target$classList;

      if (autoClose && ((_e$target = e.target) === null || _e$target === void 0 ? void 0 : (_e$target$classList = _e$target.classList) === null || _e$target$classList === void 0 ? void 0 : _e$target$classList.contains(getClassName$9('item')))) {
        startTransform('translate3d(0,0,0)', 0);
        setIsOpen(false);
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: function ref(_ref) {
      return thisRef.current.leftEl = _ref;
    },
    className: getClassName$9('left')
  }, left.map(function (item, idx) {
    return renderAction(item, idx);
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$9('middle')
  }, children), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: function ref(_ref2) {
      return thisRef.current.rightEl = _ref2;
    },
    className: getClassName$9('right')
  }, right.map(function (item, idx) {
    return renderAction(item, idx);
  }))));
});
SwipeAction.displayName = 'UC-SwipeAction';

var _excluded$B = ["className", "style", "prefix", "value", "onChange", "suffix", "autoHeight", "disabled", "readOnly", "rows", "ime", "clearable", "onClear", "mobile", "onPressEnter"];
var getClassName$a = prefixClassName('uc-input');
//#region  style
var StyledInput = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Input__StyledInput",
  componentId: "sc-1k64vsa-0"
})(["display:flex;align-items:center;padding:4px 12px;font-size:14px;width:100%;background-color:#fff;overflow:hidden;box-sizing:border-box;color:#333;&.pc{background-image:none;border:1px solid ", ";border-radius:2px;transition:all 0.3s;&:hover:not(.disabled,.read-only){", "}&.focused:not(.disabled,.read-only){", " box-shadow:0 0 2px 2px ", ";}}&.mobile{border:none;padding:0 4px;line-height:24px;}&.disabled{color:#666;}&.read-only{}.prefix{margin-right:8px;user-select:none;}.suffix{margin-left:8px;user-select:none;}.clear{color:#00000040;cursor:pointer;transition:color 0.3s;&:hover{color:#00000073;}}input,textarea{flex:1;position:relative;box-sizing:border-box;margin:0;padding:0;line-height:inherit;text-align:left;background-color:transparent;border:0;resize:none;outline:none;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;box-shadow:none;width:100%;&::placeholder{color:#bfbfbf;user-select:none;}}textarea{resize:none;word-break:break-all;word-wrap:break-word;& + *{align-self:flex-end;}}"], border, getThemeColorCss('border-color'), getThemeColorCss('border-color'), function (props) {
  return color__default['default'](getThemeColor() || props.theme.color || primary).fade(0.85);
}); //#endregion

/** 单行/多行输入框 input/textarea */
var Input = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      prefix = props.prefix,
      value = props.value,
      _onChange = props.onChange,
      suffix = props.suffix,
      autoHeight = props.autoHeight,
      disabled = props.disabled,
      readOnly = props.readOnly,
      rows = props.rows,
      ime = props.ime,
      clearable = props.clearable,
      onClear = props.onClear,
      mobile = props.mobile,
      onPressEnter = props.onPressEnter,
      rest = _objectWithoutProperties(props, _excluded$B);

  var inputRef = React.useRef();
  var isImeModeRef = React.useRef(false);

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      compositionValue = _useState2[0],
      setCompositionValue = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  React.useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  var isTextArea = rows && typeof rows === 'number';
  React.useEffect(function () {
    if (isTextArea && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.scrollTop = 0;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  });
  var inputProps = {
    onChange: function onChange(e) {
      var val = e.target.value;

      if (!isImeModeRef.current) {
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(e.target.value);
      } else {
        setCompositionValue(val);
      }
    },
    value: isImeModeRef.current ? compositionValue : value
  };

  if (ime) {
    inputProps.onCompositionStart = function () {
      isImeModeRef.current = true;
    };

    inputProps.onCompositionEnd = function (e) {
      isImeModeRef.current = false;
      var val = e.target.value;
      setCompositionValue(val);
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(val);
    };
  }

  var elProps = _objectSpread2(_objectSpread2(_objectSpread2({}, rest), inputProps), {}, {
    ref: inputRef,
    readOnly: readOnly,
    disabled: disabled,
    onKeyDown: function onKeyDown(e) {
      var _props$onKeyDown;

      if (typeof onPressEnter === 'function' && (e.code === 'Enter' || e.which === 13)) {
        onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(e.target.value);
      }

      (_props$onKeyDown = props.onKeyDown) === null || _props$onKeyDown === void 0 ? void 0 : _props$onKeyDown.call(props, e);
    },
    onFocus: function onFocus(e) {
      var _props$onFocus;

      setFocused(true);
      (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props, e);
    },
    onBlur: function onBlur(e) {
      var _props$onBlur;

      (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props, e);
      setTimeout(function () {
        setFocused(false);
      }, 300);
    }
  });

  if (isTextArea) {
    elProps.rows = rows;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledInput, {
    style: style,
    className: clsx__default['default'](getClassName$a(), className, {
      'mobile': mobile,
      'pc': !mobile,
      'focused': focused,
      'disabled': disabled,
      'read-only': readOnly
    })
  }, prefix && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('prefix', getClassName$a('prefix'))
  }, prefix), /*#__PURE__*/React__default['default'].createElement(isTextArea ? 'textarea' : 'input', elProps), clearable && typeof _onChange === 'function' && (value === null || value === void 0 ? void 0 : value.length) > 0 && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('suffix', 'clear', getClassName$a('suffix'), getClassName$a('clear'))
  }, /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-clear",
    onClick: function onClick() {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange('');
      onClear === null || onClear === void 0 ? void 0 : onClear();
    }
  })), suffix && /*#__PURE__*/React__default['default'].createElement("span", {
    className: clsx__default['default']('suffix', getClassName$a('suffix'))
  }, suffix));
});
Input.displayName = 'UC-Input';

var _excluded$C = ["className", "style", "header", "children", "footer", "position"];
var StyledDrawer = /*#__PURE__*/styled__default['default'](Popup).withConfig({
  displayName: "Drawer__StyledDrawer",
  componentId: "sc-lvm6xc-0"
})(["display:flex;flex-direction:column;background-color:#fff;position:relative;.body{flex:1;}"]);
/** 抽屉 */

var Drawer = function Drawer(props) {
  var className = props.className,
      style = props.style,
      header = props.header,
      children = props.children,
      footer = props.footer,
      _props$position = props.position,
      position = _props$position === void 0 ? 'right' : _props$position,
      rest = _objectWithoutProperties(props, _excluded$C);

  var _style = position === 'left' || position === 'right' ? {
    height: '100vh'
  } : {
    width: '100vw'
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledDrawer, _extends({}, rest, {
    className: clsx__default['default']('uc-drawer', className),
    style: _objectSpread2(_objectSpread2({}, _style), style),
    position: position
  }), header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "footer"
  }, footer));
};

Drawer.displayName = 'UC-Drawer';

var _excluded$D = ["onIndexChange", "itemHeight", "style", "data", "labelRender", "index", "className"];
var Outer = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Wheel__Outer",
  componentId: "sc-otlop6-0"
})(["flex:1;height:100%;"]);
var StyledWrap$5 = /*#__PURE__*/styled__default['default'](web.animated.div).withConfig({
  displayName: "Wheel__StyledWrap",
  componentId: "sc-otlop6-1"
})(["transform:translate3d(0px,105px,0px);touch-action:none;.item{display:flex;justify-content:center;align-items:center;height:35px;font-size:18px;user-select:none;cursor:grab;}"]); // 惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var defaultLabelRender = function defaultLabelRender(item) {
  return item.label;
};

var Wheel = function Wheel(props) {
  var onIndexChange = props.onIndexChange,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 35 : _props$itemHeight,
      style = props.style,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$labelRender = props.labelRender,
      labelRender = _props$labelRender === void 0 ? defaultLabelRender : _props$labelRender,
      _props$index = props.index,
      index = _props$index === void 0 ? 0 : _props$index,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$D);

  var firstItemY = itemHeight * 3;
  var elRef = React.useRef();
  var onIndexChangeRef = useLatest(onIndexChange);
  var yRef = React.useRef(firstItemY);

  var _useState = React.useState(index),
      _useState2 = _slicedToArray(_useState, 2),
      _index = _useState2[0],
      _setIndex = _useState2[1];

  var isMovingRef = React.useRef(false);
  var momentumRef = React.useRef({
    touchStartTime: 0
  });
  var thisRef = React.useRef({
    data: data
  });
  thisRef.current = _objectSpread2(_objectSpread2({}, thisRef.current), {}, {
    data: data
  });

  var _useSpring = web.useSpring(function () {
    return {
      y: itemHeight * 3
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      api = _useSpring2[1];

  var scrollToIndex = React.useCallback(function (index) {
    var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    yRef.current = firstItemY - itemHeight * index;
    api.start({
      y: yRef.current,
      immediate: !effect
    });
  }, [api, yRef, firstItemY, itemHeight]);
  var getIndexByY = React.useCallback(function () {
    var y = yRef.current;
    var d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef, itemHeight, firstItemY]); // eslint-disable-next-line react-hooks/exhaustive-deps

  React.useEffect(function () {
    // guard to prevent from index out of range
    if (_index < 0) {
      _setIndex(0);
    } else if (_index >= data.length && data.length) {
      _setIndex(data.length - 1);
    }
  }); // sync outside

  useUpdateEffect(function () {
    if (_index !== index) {
      _setIndex(index);
    }
  }, [index]);
  useUpdateEffect(function () {
    onIndexChangeRef === null || onIndexChangeRef === void 0 ? void 0 : onIndexChangeRef.current(_index);
  }, [_index]);
  React.useEffect(function () {
    scrollToIndex(_index, false);
  }, [_index, scrollToIndex]);
  useIsomorphicLayoutEffect(function () {
    var el = elRef.current;
    var fg = new Touch__default['default'](el, {
      onTouchStart: function onTouchStart() {
        isMovingRef.current = true;
        momentumRef.current.touchStartTime = Date.now();
      },
      onTouchEnd: function onTouchEnd() {
        if (!isMovingRef.current) {
          return;
        }

        var data = thisRef.current.data;
        isMovingRef.current = false;
        var min = -1 * (data.length - 1) * itemHeight + firstItemY;
        var max = firstItemY;
        var newIndex;

        if (yRef.current >= max - itemHeight / 2) {
          newIndex = 0;
        } else if (yRef.current <= min) {
          newIndex = Math.max(data.length - 1, 0);
        } else {
          newIndex = getIndexByY();
        }

        scrollToIndex(newIndex);
        setTimeout(function () {
          _setIndex(newIndex);
        }, 300);
      },
      onPressMove: function onPressMove(e) {
        yRef.current += e.deltaY * 0.5; // slow down

        var distance = e.deltaY;
        var duration = Date.now() - momentumRef.current.touchStartTime;
        api.start({
          y: yRef.current,
          immediate: true
        });

        if (duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE) {
          // momentum
          var speed = Math.abs(distance / duration);
          yRef.current += speed / 0.006 * (distance < 0 ? -1 : 1);
          scrollToIndex(getIndexByY());
        }
      }
    });
    return function () {
      return fg.destroy();
    };
  }, [api, getIndexByY, scrollToIndex, itemHeight, firstItemY, thisRef]);
  return /*#__PURE__*/React__default['default'].createElement(Outer, _extends({
    ref: elRef
  }, rest, {
    className: clsx__default['default']('uc-wheel', className),
    style: style
  }), /*#__PURE__*/React__default['default'].createElement(StyledWrap$5, {
    style: {
      transform: styles.y.to(function (v) {
        return "translate3d(0,".concat(v, "px,0)");
      })
    }
  }, data.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(Text, {
      className: "item",
      key: item.value,
      style: {
        height: itemHeight
      }
    }, labelRender(item));
  })));
};

Wheel.displayName = 'UC-Wheel';

var _excluded$E = ["className", "onChange", "onWheelChange", "itemHeight", "labelRender", "value", "data"];
var StyledWrap$6 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "PickerView__StyledWrap",
  componentId: "sc-1ne1yls-0"
})(["display:flex;position:relative;background-color:#fff;height:", "px;touch-action:none;.mask{position:absolute;top:0;left:0;z-index:1;width:100%;height:100%;background-image:linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4)),linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-transform:translateZ(0);transform:translateZ(0);pointer-events:none;background-size:100% ", "px;}.hairline{position:absolute;height:", "px;width:100%;border-left:0;border-right:0;top:", "px;&:after{content:'';pointer-events:none;position:absolute;width:100%;height:100%;left:0;top:0;border-top:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx){width:200%;height:200%;transform:scale(0.5);transform-origin:0 0;}}}.columnitem{width:0;flex-grow:1;height:100%;.wheel-wrap{display:flex;position:relative;text-align:center;overflow-y:hidden;height:100%;}}"], function (props) {
  return props.itemHeight * 7;
}, function (props) {
  return props.itemHeight * 3;
}, function (props) {
  return props.itemHeight;
}, function (props) {
  return props.itemHeight * 3;
});
/**
 *  convert data to 2 dimension array ;
 *
 * @param {DataItem[]} data
 * @param {number} [cols=1]
 * @param {*} [value=[]]
 * @return {*}
 */

var convertPickerData = function convertPickerData(data) {
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var ret = [];

  for (var i = 0; i < cols; i++) {
    ret.push([]);
  }

  data === null || data === void 0 ? void 0 : data.map(function (d) {
    ret[0].push(d);
  });

  if (cols > 1) {
    if (!Array.isArray(data[0])) {
      // linked
      var lastIndex = data.findIndex(function (d) {
        return d.value === value[0];
      });
      lastIndex = lastIndex === -1 ? 0 : lastIndex;
      ret[1] = data[lastIndex].children || [];

      if (cols === 3) {
        lastIndex = data.findIndex(function (d) {
          return d.value === value[1];
        });
        lastIndex = lastIndex === -1 ? 0 : lastIndex;
        ret[2] = ret[1][lastIndex].children || [];
      }
    } else {
      // unlinked
      for (var _i = 0; _i < cols; _i++) {
        ret[_i] = data[_i];
      }
    }
  }

  return ret;
};

var getIndexArrayFromValue = function getIndexArrayFromValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var list = arguments.length > 1 ? arguments[1] : undefined;
  var cols = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var ar = new Array(cols).fill(0);

  if (list.length > 0 && value.length > 0) {
    list.map(function (e, i) {
      var index = list[i].findIndex(function (e) {
        return e.value === value[i];
      });
      ar[i] = index === -1 ? 0 : index;
    });
  }

  return ar;
};

var formatSimpleData = function formatSimpleData() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.map(function (i) {
    return {
      label: i,
      value: i
    };
  });
}; //#endregion

/** 平铺选择器 */


var PickerView = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _cdata, _listRef$current;

  var className = props.className,
      onChange = props.onChange,
      onWheelChange = props.onWheelChange,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 35 : _props$itemHeight,
      labelRender = props.labelRender,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      rest = _objectWithoutProperties(props, _excluded$E);

  var cols = 1;
  var cdata = data || []; // 非级联

  var isUnLinked = true;

  if (!((_cdata = cdata) === null || _cdata === void 0 ? void 0 : _cdata.length)) {
    cols = 1;
  } else {
    var firstItem = cdata[0];

    if (Array.isArray(firstItem)) {
      // 非级联
      isUnLinked = true;
      cols = cdata.length;
    } else if (!isObject(firstItem)) {
      cdata = formatSimpleData(cdata);
    } else {
      var c = 1;
      var t = firstItem;

      while (Array.isArray(t.children)) {
        if (isUnLinked) {
          isUnLinked = false;
        } // linked


        c++;
        t = t.children[0];
      }

      cols = c;
    }
  }

  var forceUpdate = useForceUpdate();
  var listRef = React.useRef(convertPickerData(cdata, cols, value));
  var indexArrRef = React.useRef(getIndexArrayFromValue(value, listRef.current, cols));
  React.useImperativeHandle(ref, function () {
    return {
      getValue: function getValue() {
        return listRef.current.map(function (e, i) {
          return e[indexArrRef.current[i]].value;
        });
      }
    };
  });
  useUpdateEffect(function () {
    var list = convertPickerData(cdata, cols, value);
    listRef.current = list;
    indexArrRef.current = getIndexArrayFromValue(value, list, cols);
    forceUpdate();
  }, [data]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$6, _extends({}, rest, {
    className: clsx__default['default']('uc-pickerview', className),
    itemHeight: itemHeight
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "mask"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "hairline"
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "columnitem"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wheel-wrap"
  }, (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.map(function (listItem, idx) {
    return /*#__PURE__*/React__default['default'].createElement(Wheel, {
      labelRender: labelRender,
      itemHeight: itemHeight,
      data: listItem,
      key: idx,
      style: {
        width: "".concat(100 / cols, "%")
      },
      index: indexArrRef.current[idx],
      onIndexChange: function onIndexChange(index) {
        indexArrRef.current[idx] = index;
        var nextIndex = idx + 1;

        if (nextIndex <= cols - 1) {
          while (nextIndex <= cols - 1) {
            // next wheel refresh  & update value to next&first
            if (!isUnLinked) {
              var _listRef$current$inde, _listRef$current$next;

              // linked
              listRef.current[nextIndex] = ((_listRef$current$inde = listRef.current[nextIndex - 1][indexArrRef.current[nextIndex - 1]]) === null || _listRef$current$inde === void 0 ? void 0 : _listRef$current$inde.children) || [];

              if ((!indexArrRef.current[nextIndex] || indexArrRef.current[nextIndex] === -1) && indexArrRef.current[nextIndex] < ((_listRef$current$next = listRef.current[nextIndex]) === null || _listRef$current$next === void 0 ? void 0 : _listRef$current$next.length)) {
                indexArrRef.current[nextIndex] = 0;
              }
            }

            nextIndex++;
          }

          listRef.current = _toConsumableArray(listRef.current);
          indexArrRef.current = _toConsumableArray(indexArrRef.current);
          forceUpdate();
        }

        onChange === null || onChange === void 0 ? void 0 : onChange(listRef.current.map(function (e, i) {
          var _e$index;

          var index = indexArrRef.current[i];

          if (index > (e === null || e === void 0 ? void 0 : e.length) - 1) {
            index = 0;
          }

          return (_e$index = e[index]) === null || _e$index === void 0 ? void 0 : _e$index.value;
        }));
        onWheelChange === null || onWheelChange === void 0 ? void 0 : onWheelChange(index, idx);
      }
    });
  }))));
});
PickerView.displayName = 'UC-PickerView';

var _excluded$F = ["okText", "cancelText", "title", "onClose", "visible", "onOk", "onChange", "onWheelChange", "itemHeight", "labelRender", "className", "value", "data"];

var StyledDrawer$1 = /*#__PURE__*/styled__default['default'](Drawer).withConfig({
  displayName: "Picker__StyledDrawer",
  componentId: "sc-1j9idoi-0"
})([".header{display:flex;height:45px;align-items:center;justify-content:space-between;padding:0 16px;background-color:#f7f7f7;font-size:16px;touch-action:none;user-select:none;.ok-text{", "}.cancel-text{color:#999;}.title{color:#333;}}"], getThemeColorCss('color'));

var isSameArr = function isSameArr(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }

  var _iterator = _createForOfIteratorHelper(ar1),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!ar2.includes(item)) {
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}; //#endregion

/** picker 下方弹出选择器 */


var Picker = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$title = props.title,
      title = _props$title === void 0 ? '请选择' : _props$title,
      onClose = props.onClose,
      visible = props.visible,
      onOk = props.onOk,
      onChange = props.onChange,
      onWheelChange = props.onWheelChange,
      _props$itemHeight = props.itemHeight,
      itemHeight = _props$itemHeight === void 0 ? 35 : _props$itemHeight,
      labelRender = props.labelRender,
      className = props.className,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      rest = _objectWithoutProperties(props, _excluded$F);

  var pickerViewRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return pickerViewRef.current;
  });

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var onChangeRef = useLatest(onChange);
  var onValueChange = React.useCallback(function (value) {
    var _onChangeRef$current;

    setVal(value);
    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, value); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var prevValue = usePrevious(value);
  useUpdateEffect(function () {
    if (!isSameArr(value, prevValue)) {
      onValueChange(value);
    }
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(StyledDrawer$1, _extends({}, rest, {
    className: clsx__default['default']('uc-picker', className),
    position: "bottom",
    visible: visible,
    onClose: onClose,
    header: /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "cancel-text",
      onClick: onClose
    }, cancelText), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "title"
    }, title), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ok-text",
      onClick: function onClick() {
        onOk === null || onOk === void 0 ? void 0 : onOk(pickerViewRef.current.getValue());
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }, okText))
  }), /*#__PURE__*/React__default['default'].createElement(PickerView, {
    labelRender: labelRender,
    itemHeight: itemHeight,
    ref: pickerViewRef,
    data: data,
    value: val,
    onChange: onValueChange,
    onWheelChange: onWheelChange
  }));
});
Picker.displayName = 'UC-Picker';

var _excluded$G = ["current", "dotStyle", "className", "direction", "steps"];
var StyledSteps = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Steps__StyledSteps",
  componentId: "sc-1lhd3k3-0"
})([".step{.step-box{position:relative;&::after{content:'';position:absolute;background-color:#909ca4;}.step-circle{position:relative;display:flex;width:25px;height:25px;font-size:13px;align-items:center;justify-content:center;z-index:1;color:#909ca4;border:1px solid #909ca4;border-radius:50%;background-color:#fff;padding:0;&.dot{width:8px;height:8px;}&.icon{border:none;}}}&.finish{.step-box{&::after{", "}}.step-circle{", " ", "}}&.current{.step-circle{color:#fff;", " border:0;}}&.finish,&.current{.step-title{", "}.step-circle{&.dot{", "}}}&:last-child{.step-box::after{display:none;}}}&.horizontal{display:flex;.step{&:not(:last-child){width:", "px;}position:relative;.step-box{width:24px;height:24px;&::after{left:50%;top:50%;height:1px;transform:translateY(-50%);width:", "px;position:absolute;}.step-circle{left:50%;top:50%;transform:translate(-50%,-50%);}}}.step-content{font-size:14px;padding-top:12px;color:#999;.step-title{}.step-description{margin-top:2px;}}}&.vertical{.step{display:flex;&:not(:last-child){height:", "px;}.step-box{flex:none;width:24px;margin-right:8px;&::after{left:50%;top:13px;width:1px;transform:translateX(-50%);height:100%;}.step-circle{top:13px;left:50%;transform:translate(-50%,-50%);}}&:last-child{.step-content{padding-bottom:0;}}.step-content{flex:auto;padding:3px 0 14px;font-size:14px;color:#999;.step-title{}.step-description{margin-top:10px;}}}}"], getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('color'), getThemeColorCss('background-color'), function (props) {
  return props.space;
}, function (props) {
  return props.space;
}, function (props) {
  return props.space;
});
/** 步骤条 */

var Steps = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$current = props.current,
      current = _props$current === void 0 ? 0 : _props$current,
      _props$dotStyle = props.dotStyle,
      dotStyle = _props$dotStyle === void 0 ? false : _props$dotStyle,
      className = props.className,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$steps = props.steps,
      steps = _props$steps === void 0 ? [] : _props$steps,
      rest = _objectWithoutProperties(props, _excluded$G);

  var domRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var _useState = React.useState(80),
      _useState2 = _slicedToArray(_useState, 2),
      space = _useState2[0],
      setSpace = _useState2[1];

  useIsomorphicLayoutEffect(function () {
    var isHorizontal = direction === 'horizontal';

    var resizeHandler = function resizeHandler() {
      if (steps.length > 1) {
        var domEl = domRef.current;
        setSpace(Math.max((isHorizontal ? domEl.offsetWidth : domEl.offsetHeight) / steps.length, 60));
      }
    };

    var throttleResizeHandler = throttle(resizeHandler);

    if (isHorizontal) {
      window.addEventListener('resize', throttleResizeHandler);
    }

    resizeHandler();
    return function () {
      if (isHorizontal) {
        window.removeEventListener('resize', throttleResizeHandler);
      }
    };
  }, [steps, direction]);
  return /*#__PURE__*/React__default['default'].createElement(StyledSteps, _extends({}, rest, {
    ref: domRef,
    className: clsx__default['default']('uc-steps', className, direction),
    space: space
  }), steps.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: idx,
      className: clsx__default['default']('step', {
        finish: idx < current,
        current: idx === current
      })
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-box"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']("step-circle", {
        dot: dotStyle && !item.icon,
        icon: item.icon
      })
    }, item.icon ? item.icon : dotStyle ? null : idx + 1)), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-content"
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-title"
    }, item.title), !!item.description && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "step-description"
    }, item.description)));
  }));
});
Steps.displayName = 'UC-Steps';

function _dataURLToBlob(dataURL) {
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
}

function _download(dataURL, filename) {
  var blob = _dataURLToBlob(dataURL);

  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

function App(cavansRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    backgroundColor: '#fff',
    penColor: '#000',
    useLandscape: true
  };
  var padRef = React.useRef();
  React.useEffect(function () {
    var canvas = cavansRef.current;
    var signaturePad = padRef.current = new SignaturePad__default['default'](canvas, options);

    function resizeCanvas() {
      var useLandscape = options.useLandscape;
      var w = canvas.offsetWidth;
      var h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      if (useLandscape) {
        var ctx = canvas.getContext('2d');
        ctx.rotate(1.5 * Math.PI);
        ctx.translate(-canvas.height, 0);
      }

      signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    return function () {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [cavansRef, options]);

  var download = function download(fileName) {
    var dataURL = padRef.current.toDataURL();

    _download(dataURL, fileName);
  };

  var undo = function undo() {
    if (options.useLandscape) {
      return;
    }

    var data = padRef.current.toData();

    if (data) {
      data.pop(); // remove the last dot or line

      padRef.current.fromData(data);
    }
  };

  var setPenColor = function setPenColor(color) {
    padRef.current.penColor = color;
  };

  var clear = function clear() {
    padRef.current.clear();

    if (options.useLandscape) {
      var canvas = cavansRef.current;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    }
  };

  return {
    download: download,
    padRef: padRef,
    undo: undo,
    setPenColor: setPenColor,
    clear: clear
  };
}

var _excluded$H = ["padColor", "penColor", "className"];
var StyledSignature = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Signature__StyledSignature",
  componentId: "sc-iq8pms-0"
})(["position:relative;border:1px solid ", ";box-sizing:border-box;"], border);
/** 签名 */

var Signature = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var padColor = props.padColor,
      penColor = props.penColor,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$H);

  var elRef = React.useRef();
  var canvasRef = React.useRef();

  var _useSigPad = App(canvasRef, {
    useLandscape: false,
    penColor: penColor,
    backgroundColor: padColor
  }),
      padRef = _useSigPad.padRef,
      _clear = _useSigPad.clear,
      download = _useSigPad.download;

  React.useImperativeHandle(ref, function () {
    return {
      getData: function getData() {
        return padRef.current.toDataURL();
      },
      clear: function clear() {
        _clear();
      },
      download: download
    };
  });
  useIsomorphicLayoutEffect(function () {
    // read size from container
    canvasRef.current.width = elRef.current.offsetWidth;
    canvasRef.current.height = elRef.current.offsetHeight;
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledSignature, _extends({}, rest, {
    className: clsx__default['default']('uc-signature', className),
    ref: elRef
  }), /*#__PURE__*/React__default['default'].createElement("canvas", {
    ref: canvasRef
  }));
});
Signature.displayName = 'UC-Signature';

var _excluded$I = ["value", "defaultValue", "allowHalf", "readonly", "count", "char", "onChange", "className", "color", "allowClear"];
var StyledRate = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Rate__StyledRate",
  componentId: "sc-784nos-0"
})(["display:inline-flex;.box{position:relative;}.char{padding:calc(24px / 8);line-height:24px;font-size:24px;color:#ccc;text-align:center;overflow:hidden;cursor:pointer;&.half{padding-right:0;width:50%;position:absolute;left:0;top:0;}&.active{color:", ";}&.readonly{cursor:unset;}}"], function (props) {
  return props.$color;
});
var defaultChar = /*#__PURE__*/React__default['default'].createElement("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "star",
  width: "1em",
  height: "1em",
  fill: "currentColor"
}, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
}));
/** 评分 */

var Rate = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var value = props.value,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? 0 : _props$defaultValue,
      _props$allowHalf = props.allowHalf,
      allowHalf = _props$allowHalf === void 0 ? false : _props$allowHalf,
      readonly = props.readonly,
      _props$count = props.count,
      count = _props$count === void 0 ? 5 : _props$count,
      _props$char = props.char,
      char = _props$char === void 0 ? defaultChar : _props$char,
      onChange = props.onChange,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? '#ffd21e' : _props$color,
      _props$allowClear = props.allowClear,
      allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
      rest = _objectWithoutProperties(props, _excluded$I);

  var _useState = React.useState(typeof value === 'number' ? value : defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var starList = Array(count).fill(null);
  var onChangeRef = useLatest(onChange);
  useUpdateEffect(function () {
    var _onChangeRef$current;

    (_onChangeRef$current = onChangeRef.current) === null || _onChangeRef$current === void 0 ? void 0 : _onChangeRef$current.call(onChangeRef, val);
  }, [val]);
  useUpdateEffect(function () {
    if (val !== value) {
      setVal(value);
    }
  }, [value]);
  var renderChar = React.useCallback(function (v, val, half) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']("char", {
        active: val >= v,
        half: half,
        readonly: readonly
      }),
      onClick: function onClick() {
        if (readonly) return;

        if (allowClear && val === v) {
          setVal(0);
        } else {
          setVal(v);
        }
      }
    }, char);
  }, [allowClear, char, readonly]);
  return /*#__PURE__*/React__default['default'].createElement(StyledRate, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className),
    $color: color
  }), starList.map(function (_, i) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: i,
      className: clsx__default['default']("box")
    }, allowHalf && renderChar(i + 0.5, val, true), renderChar(i + 1, val, false));
  }));
});
Rate.displayName = 'UC-Rate';

var _excluded$J = ["list", "stayTime", "icon", "closeable", "className", "onClose", "extra"];
var StyledNoticeList = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "NoticeList__StyledNoticeList",
  componentId: "sc-1cr8sap-0"
})(["font-size:14px;padding:0px 12px;height:40px;display:flex;align-items:center;justify-content:space-between;background-color:rgba(236,146,49,0.1);color:rgb(236,146,49);&.hide{display:none;}.icon-part{flex-shrink:0;margin-right:8px;}.content-wrap{flex:1 1;overflow:hidden;height:100%;.list{height:100%;transition-property:transform;transition-duration:0.8s;transition-timing-function:ease-in-out;.item{height:100%;display:flex;align-items:center;}}}.content-extra{display:inline-block;flex-shrink:0;margin-left:12px;}"]);

/** 多条信息垂直滚动通知栏  */
var NoticeList = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$list = props.list,
      list = _props$list === void 0 ? [] : _props$list,
      _props$stayTime = props.stayTime,
      stayTime = _props$stayTime === void 0 ? 3000 : _props$stayTime,
      icon = props.icon,
      _props$closeable = props.closeable,
      closeable = _props$closeable === void 0 ? false : _props$closeable,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = _objectWithoutProperties(props, _excluded$J);

  var listRef = React.useRef();
  var wrapRef = React.useRef();
  var timerRef = React.useRef();

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = React.useState(list),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  React.useEffect(function () {
    setData(list);
  }, [list]);
  React.useEffect(function () {
    var wrap = wrapRef.current;
    var list = listRef.current;

    if (data.length > 1 && visible) {
      timerRef.current = window.setTimeout(function () {
        list.style.transitionProperty = 'transform';
        list.style.transform = "translateY(-".concat(wrap.offsetHeight, "px)");
      }, stayTime);
      return function () {
        window.clearTimeout(timerRef.current);
      };
    }
  }, [stayTime, data, visible]);
  return /*#__PURE__*/React__default['default'].createElement(StyledNoticeList, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](className, 'uc-noticelist', {
      hide: !visible
    })
  }), icon && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "icon-part"
  }, icon), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "list",
    ref: listRef,
    onTransitionEnd: function onTransitionEnd() {
      // move
      listRef.current.style.transitionProperty = 'none';
      listRef.current.style.transform = 'none';
      var lIndex = data.length - 1;

      if (lIndex > 0) {
        data.push(data[0]);
        data.shift();
        setData(_toConsumableArray(data));
      }
    }
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: idx,
      onClick: function onClick() {
        if (item.link) {
          location.href = item.link;
        }
      },
      className: clsx__default['default']('item')
    }, /*#__PURE__*/React__default['default'].createElement(Text, null, item.text));
  }))), (closeable || extra) && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content-extra')
  }, /*#__PURE__*/React__default['default'].createElement(Space, null, props.extra, props.closeable && /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-guanbi",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setVisible(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }))));
});
NoticeList.displayName = 'UC-NoticeList';

var _excluded$K = ["autoPlay", "loop", "onPageChange", "direction", "interval", "duration", "children", "className", "height", "style", "showPageIndicator", "ratio", "pageStyle", "pageClassName"];
var getClassName$b = prefixClassName('uc-slide');
var StyledSlide = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Slide__StyledSlide",
  componentId: "sc-ncbe2q-0"
})(["overflow:hidden;position:relative;.", "{position:relative;display:flex;flex-wrap:nowrap;touch-action:none;width:100%;transition-property:transform;backface-visibility:hidden;&.vertical{flex-direction:column;}}.", "{width:100%;flex-shrink:0;}.", "{position:absolute;bottom:6px;left:50%;transform:translate3d(-50%,0,0);line-height:6px;.", "{cursor:pointer;display:inline-block;width:6px;height:6px;background-color:#fff;transition:all 0.3s ease;border-radius:50%;&.active{border-radius:3px;width:14px;}}&.vertical{position:absolute;right:6px;top:50%;left:unset;bottom:unset;transform:translate3d(0,-50%,0);.", "{display:block;width:6px;height:6px;border-radius:50%;&.active{border-radius:3px;height:14px;}}}}"], getClassName$b('wrap'), getClassName$b('page'), getClassName$b('indicator'), getClassName$b('item'), getClassName$b('item')); //#endregion

var getItems = function getItems(children, loop, height) {
  var items = [].concat(children),
      firstItem = items[0],
      lastItem = items[items.length - 1];

  if (loop && items.length > 1) {
    items.push(firstItem);
    items.unshift(lastItem);
  }

  return React__default['default'].Children.map(items, function (c, index) {
    var _c$props, _c$props2;

    return /*#__PURE__*/React__default['default'].cloneElement(c, {
      key: index,
      className: clsx__default['default'](getClassName$b('page'), (_c$props = c.props) === null || _c$props === void 0 ? void 0 : _c$props.className),
      style: _objectSpread2(_objectSpread2({}, (_c$props2 = c.props) === null || _c$props2 === void 0 ? void 0 : _c$props2.style), {}, {
        height: height
      })
    });
  });
};
/**
 *  轮播
 *
 *  ref: {
 *    prev: () => void;
 *    next: () => void;
 * }
 *
 *
 */


var Slide = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$autoPlay = props.autoPlay,
      autoPlay = _props$autoPlay === void 0 ? false : _props$autoPlay,
      _props$loop = props.loop,
      loop = _props$loop === void 0 ? true : _props$loop,
      onPageChange = props.onPageChange,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      _props$interval = props.interval,
      interval = _props$interval === void 0 ? 3000 : _props$interval,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 280 : _props$duration,
      children = props.children,
      className = props.className,
      _props$height = props.height,
      height = _props$height === void 0 ? 160 : _props$height,
      style = props.style,
      _props$showPageIndica = props.showPageIndicator,
      showPageIndicator = _props$showPageIndica === void 0 ? true : _props$showPageIndica,
      _props$ratio = props.ratio,
      ratio = _props$ratio === void 0 ? 0.1 : _props$ratio,
      pageStyle = props.pageStyle,
      pageClassName = props.pageClassName,
      rest = _objectWithoutProperties(props, _excluded$K);

  var containerRef = React.useRef(null);
  var wrapElRef = React.useRef();
  var pageWrapElRef = React.useRef();

  var _useState = React.useState(function () {
    return getItems(children, loop, height);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var count = items.length;
  var len = React__default['default'].Children.count(children);

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pageIndex = _useState4[0],
      setPageIndex = _useState4[1]; // !loop:0~len-1, loop: -1~len


  var exp = count > len; // expanded

  var min = exp ? -1 : 0;
  var max = exp ? len : len - 1;
  var pageIndexRef = useLatest(pageIndex);
  var propsRef = useLatest({
    exp: exp,
    ratio: ratio,
    direction: direction,
    pageIndex: pageIndex,
    len: len,
    min: min,
    max: max,
    count: count
  });
  var thisRef = React.useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    isMoving: false,
    timer: 0
  });
  var slideToPageIndex = React.useCallback(function (newPageIndex) {
    var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var _propsRef$current = propsRef.current,
        direction = _propsRef$current.direction,
        exp = _propsRef$current.exp;
    var el = wrapElRef.current;

    if (el) {
      var _containerRef$current = containerRef.current,
          wrapWidth = _containerRef$current.offsetWidth,
          wrapHeight = _containerRef$current.offsetHeight;
      el.style.transitionProperty = transition ? 'transform' : 'none';

      if (direction === 'horizontal') {
        var x = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapWidth;
        el.style.transform = "translate3d(".concat(x, "px, 0, 0)");
        thisRef.current.x = x;
      } else {
        var y = (newPageIndex + (exp ? 1 : 0)) * -1 * wrapHeight;
        el.style.transform = "translate3d(0, ".concat(y, "px, 0)");
        thisRef.current.y = y;
      }

      setPageIndex(newPageIndex);
    }
  }, []);
  React.useImperativeHandle(ref, function () {
    return {
      prev: function prev() {
        slideToPageIndex(Math.max(min, pageIndex - 1));
      },
      next: function next() {
        slideToPageIndex(Math.min(max, pageIndex + 1));
      }
    };
  });
  useUpdateEffect(function () {
    if (pageIndex >= 0 && pageIndex < len) {
      onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(pageIndex);
    }
  }, [pageIndex]);
  useMount(function () {
    slideToPageIndex(0, false);
  });
  useUpdateEffect(function () {
    var items = getItems(children, loop, height);
    setItems(items);
    var count = React__default['default'].Children.count(children);
    propsRef.current.exp = items.length > count;
    propsRef.current.count = count;

    if (pageIndexRef.current >= count - 1) {
      slideToPageIndex(count - 1);
    } else if (pageIndexRef.current <= -1) {
      slideToPageIndex(0);
    }
  }, [children, loop, height]);
  React.useEffect(function () {
    var len = React__default['default'].Children.count(children);

    if (autoPlay && len > 1 && !thisRef.current.isMoving) {
      thisRef.current.timer = window.setInterval(function () {
        if (!thisRef.current.isMoving) {
          slideToPageIndex(pageIndexRef.current + 1);
        }
      }, interval);
      return function () {
        window.clearInterval(thisRef.current.timer);
      };
    }
  }, [autoPlay, interval, children]);
  useIsomorphicLayoutEffect(function () {
    var el = wrapElRef.current;
    var _containerRef$current2 = containerRef.current,
        wrapWidth = _containerRef$current2.offsetWidth,
        wrapHeight = _containerRef$current2.offsetHeight;
    var fg = new Touch__default['default'](el, {
      onTouchStart: function onTouchStart() {
        el.style.transitionProperty = 'none';
        thisRef.current.isMoving = true;
        thisRef.current.lastX = thisRef.current.x;
        thisRef.current.lastY = thisRef.current.y;
      },
      onTouchEnd: function onTouchEnd() {
        if (!thisRef.current.isMoving) {
          return;
        }

        thisRef.current.isMoving = false;
        var _propsRef$current2 = propsRef.current,
            ratio = _propsRef$current2.ratio,
            pageIndex = _propsRef$current2.pageIndex,
            max = _propsRef$current2.max,
            len = _propsRef$current2.len,
            exp = _propsRef$current2.exp;

        if (exp && (max === pageIndex || min === pageIndex)) {
          slideToPageIndex(pageIndex === max ? 0 : len - 1, false);
          return;
        }

        if (direction === 'horizontal' && Math.abs(thisRef.current.x - thisRef.current.lastX) > wrapWidth * ratio) {
          slideToPageIndex(pageIndex + (thisRef.current.x < thisRef.current.lastX ? 1 : -1));
        } else if (direction === 'vertical' && Math.abs(thisRef.current.y - thisRef.current.lastY) > wrapHeight * ratio) {
          slideToPageIndex(pageIndex + (thisRef.current.y < thisRef.current.lastY ? 1 : -1));
        } else {
          // reset
          slideToPageIndex(pageIndex);
        }
      },
      onPressMove: function onPressMove(e) {
        var _propsRef$current3 = propsRef.current,
            pageIndex = _propsRef$current3.pageIndex,
            max = _propsRef$current3.max,
            exp = _propsRef$current3.exp,
            count = _propsRef$current3.count,
            direction = _propsRef$current3.direction;

        if (exp && (max === pageIndex || min === pageIndex)) {
          return;
        }

        if (direction === 'horizontal') {
          if (thisRef.current.x > 0 || thisRef.current.x < -1 * (count - 1) * wrapWidth) {
            return;
          }

          thisRef.current.x += e.deltaX;
          el.style.transform = "translate3d(".concat(thisRef.current.x, "px, 0, 0)");
        } else {
          if (thisRef.current.y > 0 || thisRef.current.y < -1 * (count - 1) * wrapHeight) {
            return;
          }

          thisRef.current.y += e.deltaY;
          el.style.transform = "translate3d(0, ".concat(thisRef.current.y, "px, 0)");
        }
      }
    });
    return function () {
      return fg.destroy();
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledSlide, _extends({
    ref: containerRef
  }, rest, {
    className: clsx__default['default'](getClassName$b(), className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      height: height
    })
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: wrapElRef,
    className: clsx__default['default'](getClassName$b('wrap'), {
      vertical: direction === 'vertical'
    }),
    onTransitionEnd: function onTransitionEnd() {
      if (pageIndex >= len) {
        slideToPageIndex(0, false);
      } else if (pageIndex === -1) {
        slideToPageIndex(len - 1, false);
      }
    },
    style: {
      transitionDuration: "".concat(duration, "ms")
    }
  }, items), showPageIndicator && len > 1 && /*#__PURE__*/React__default['default'].createElement(Space, {
    size: 4,
    direction: direction,
    ref: pageWrapElRef,
    className: clsx__default['default'](getClassName$b('indicator'), pageClassName, {
      vertical: direction === 'vertical'
    }),
    style: pageStyle
  }, React__default['default'].Children.map(children, function (c, idx) {
    return /*#__PURE__*/React__default['default'].createElement("span", {
      key: idx,
      className: clsx__default['default'](getClassName$b('item'), {
        active: pageIndex === idx
      }),
      onClick: function onClick() {
        return slideToPageIndex(idx);
      }
    });
  })));
});
Slide.displayName = 'UC-Slide';

var _excluded$L = ["children", "percent", "strokeLinecap", "strokeWidth", "size", "className", "style"];
var StyledProgressCircle = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "ProgressCircle__StyledProgressCircle",
  componentId: "sc-y56d1s-0"
})(["position:relative;.content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}"]);
/** 环形进度条 */

var ProgressCircle = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$strokeLinecap = props.strokeLinecap,
      strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 10 : _props$strokeWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 60 : _props$size,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$L);

  var theme = styled.useTheme() || {};
  var color = props.color || theme.color || primary;
  return /*#__PURE__*/React__default['default'].createElement(StyledProgressCircle, _extends({
    className: clsx__default['default'](className, 'uc-progress-circle'),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      width: size,
      height: size
    })
  }, rest, {
    ref: ref
  }), /*#__PURE__*/React__default['default'].createElement("svg", {
    height: size,
    width: size,
    viewBox: "0 0 120 120",
    "x-mlns": "http://www.w3.org/200/svg"
  }, /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "#d9d9d9",
    strokeWidth: strokeWidth,
    fill: "none"
  }), percent > 0 ? /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: color,
    strokeDasharray: "".concat(percent * 314 / 100, ",314"),
    strokeWidth: strokeWidth,
    fill: "none",
    transform: "rotate(-90,60,60)",
    strokeLinecap: strokeLinecap,
    style: {
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s"
    }
  }) : null), children && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content"
  }, children));
});
ProgressCircle.displayName = 'UC-ProgressCircle';

var _excluded$M = ["style", "className", "zIndex", "gapX", "gapY", "width", "height", "rotate", "image", "imageWidth", "imageHeight", "content", "fontStyle", "fontWeight", "fontColor", "fontSize", "fontFamily"];
var StyledWaterMark = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "WaterMark__StyledWaterMark",
  componentId: "sc-1sjiaa1-0"
})(["position:fixed;left:0;right:0;bottom:0;top:0;pointer-events:none;background-repeat:repeat;"]);
/** 图片/文字水印 */

var WaterMark = function WaterMark(props) {
  var style = props.style,
      className = props.className,
      _props$zIndex = props.zIndex,
      zIndex = _props$zIndex === void 0 ? 2000 : _props$zIndex,
      _props$gapX = props.gapX,
      gapX = _props$gapX === void 0 ? 24 : _props$gapX,
      _props$gapY = props.gapY,
      gapY = _props$gapY === void 0 ? 48 : _props$gapY,
      _props$width = props.width,
      width = _props$width === void 0 ? 120 : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 64 : _props$height,
      _props$rotate = props.rotate,
      rotate = _props$rotate === void 0 ? -22 : _props$rotate,
      image = props.image,
      _props$imageWidth = props.imageWidth,
      imageWidth = _props$imageWidth === void 0 ? 120 : _props$imageWidth,
      _props$imageHeight = props.imageHeight,
      imageHeight = _props$imageHeight === void 0 ? 64 : _props$imageHeight,
      content = props.content,
      _props$fontStyle = props.fontStyle,
      fontStyle = _props$fontStyle === void 0 ? 'normal' : _props$fontStyle,
      _props$fontWeight = props.fontWeight,
      fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight,
      _props$fontColor = props.fontColor,
      fontColor = _props$fontColor === void 0 ? 'rgba(0,0,0,.15)' : _props$fontColor,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 14 : _props$fontSize,
      _props$fontFamily = props.fontFamily,
      fontFamily = _props$fontFamily === void 0 ? 'sans-serif' : _props$fontFamily,
      rest = _objectWithoutProperties(props, _excluded$M);

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      base64Url = _useState2[0],
      setBase64Url = _useState2[1];

  React.useEffect(function () {
    var canvas = document.createElement('canvas');
    var ratio = window.devicePixelRatio;
    var ctx = canvas.getContext('2d');
    var canvasWidth = "".concat((gapX + width) * ratio, "px");
    var canvasHeight = "".concat((gapY + height) * ratio, "px");
    var markWidth = width * ratio;
    var markHeight = height * ratio;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);

    if (ctx) {
      if (image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;

        img.onload = function () {
          ctx.drawImage(img, -imageWidth * ratio / 2, -imageHeight * ratio / 2, imageWidth * ratio, imageHeight * ratio);
          ctx.restore();
          setBase64Url(canvas.toDataURL());
        };
      } else if (content) {
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center'; // 文字绕中间旋转

        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var markSize = Number(fontSize) * ratio;
        ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
        ctx.fillStyle = fontColor;
        ctx.fillText(content, 0, 0);
        ctx.restore();
        setBase64Url(canvas.toDataURL());
      }
    } else {
      throw new Error('当前环境不支持Canvas');
    }
  }, [gapX, gapY, rotate, fontStyle, fontWeight, width, height, fontFamily, fontColor, image, content, fontSize, imageHeight, imageWidth]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWaterMark, _extends({}, rest, {
    className: clsx__default['default']('uc-watermark', className),
    style: _objectSpread2({
      zIndex: zIndex,
      backgroundSize: "".concat(gapX + width, "px"),
      backgroundImage: "url('".concat(base64Url, "')")
    }, style)
  }));
};

WaterMark.displayName = 'UC-WaterMark';

var _excluded$N = ["content", "style", "className"],
    _excluded2$2 = ["duration"];
var transitionDuration$2 = animationNormal;
var StyledNotify = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Notify__StyledNotify",
  componentId: "sc-1ilq3lf-0"
})(["position:fixed;z-index:600;transition:all ", "ms ease-in-out;top:0;left:0;right:0;display:flex;justify-content:center;&.from{transform:translate3d(0,-100%,0);opacity:0;}&.to{transform:none;opacity:1;}.content{padding:8px 12px;height:40px;min-height:40px;display:flex;align-items:center;justify-content:center;}&.pc{top:16px;.content{box-shadow:", ";background-color:#fff;border-radius:2px;}}&.mobile{.content{", ";color:#fff;width:100%;}}"], transitionDuration$2, boxShadow, getThemeColorCss('background-color'));
var allNotifies = [];
/** 顶部全局消息通知 */

var Notify = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      style = props.style,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$N);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useIsomorphicLayoutEffect(function () {
    if (!isMobile && elRef.current) {
      if (allNotifies.length > 0) {
        var lastElPos = allNotifies[allNotifies.length - 1];
        elRef.current.style.top = lastElPos.top + lastElPos.height + 16 + 'px';
      }

      var css = window.getComputedStyle(elRef.current);
      allNotifies.push({
        top: parseInt(css.getPropertyValue('top'), 10),
        height: parseInt(css.getPropertyValue('height'), 10),
        el: elRef.current
      });
      return function () {
        var item = allNotifies.shift();

        if (allNotifies.length > 0 && item) {
          var h = item.height;
          allNotifies.map(function (n) {
            n.el.style.top = parseInt(n.el.style.top, 10) - h + 'px';
          });
        }
      };
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(StyledNotify, _extends({}, rest, {
    ref: elRef,
    className: clsx__default['default']('uc-notify', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }), /*#__PURE__*/React__default['default'].createElement(Mask, {
    style: {
      background: 'transparent'
    },
    visible: isMobile
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('content'),
    style: style
  }, content));
});
var t = 0;
/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */

Notify.show = function (props) {
  if (isMobile && t > 0) {
    return;
  }

  t++;
  var notifyProps = {};
  var _duration = 2000;

  if (_typeof(props) === 'object' && 'content' in props) {
    var _props$duration = props.duration,
        duration = _props$duration === void 0 ? 2000 : _props$duration,
        rest = _objectWithoutProperties(props, _excluded2$2);

    notifyProps = rest;
    _duration = duration;
  } else {
    notifyProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-notify', transitionDuration$2);
  var dispose = renderElement( /*#__PURE__*/React__default['default'].createElement(TransitionElement, {
    duration: transitionDuration$2
  }, /*#__PURE__*/React__default['default'].createElement(Notify, notifyProps)), container);
  window.setTimeout(function () {
    dispose(beforeDispose);

    if (t > 0) {
      t = 0;
    }
  }, _duration);
};

Notify.displayName = 'UC-Notify';

var _excluded$O = ["children", "className", "content", "badgeStyle"];
var StyledBadge = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Badge__StyledBadge",
  componentId: "sc-usucgg-0"
})(["display:inline-block;position:relative;.badge{display:inline-block;color:#fff;text-align:center;vertical-align:middle;box-sizing:border-box;border-radius:100px;padding:2px 4px;font-size:9px;line-height:1.2;white-space:nowrap;position:absolute;z-index:1;transform:translate(50%,-50%);top:0;right:0;", " &.dot{padding:0;width:10px;height:10px;border-radius:50%;}&.without-children{position:static;transform:none;}}"], getThemeColorCss('background-color'));
/** 徽标:右上角添加标记 */

var Badge = function Badge(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      badgeStyle = props.badgeStyle,
      rest = _objectWithoutProperties(props, _excluded$O);

  return /*#__PURE__*/React__default['default'].createElement(StyledBadge, _extends({}, rest, {
    className: clsx__default['default']('uc-badge', className)
  }), children, /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('badge', {
      'dot': !content,
      'without-children': !children
    }),
    style: badgeStyle
  }, content));
};

Badge.displayName = 'UC-Badge';

var _excluded$P = ["size", "className", "shape", "style", "children"];
var StyledAvatar = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Avatar__StyledAvatar",
  componentId: "sc-1moyxql-0"
})(["box-sizing:border-box;margin:0;padding:0;list-style:none;position:relative;display:inline-flex;overflow:hidden;color:#666;white-space:nowrap;text-align:center;vertical-align:middle;align-items:center;justify-content:center;background:#ccc;&.circle{border-radius:50%;}&.square{border-radius:2px;}img{width:100%;height:100%;object-fit:cover;object-position:center;}"]);
/** 头像 */

var Avatar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 40 : _props$size,
      className = props.className,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? 'circle' : _props$shape,
      style = props.style,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$P);

  var s = _objectSpread2({
    width: size,
    height: size,
    fontSize: size * 0.6
  }, style);

  return /*#__PURE__*/React__default['default'].createElement(StyledAvatar, _extends({}, rest, {
    ref: ref,
    style: s,
    className: clsx__default['default']('uc-avatar', className, shape)
  }), children || /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-avatar"
  }));
});
Avatar.displayName = 'UC-Avatar';

var _excluded$Q = ["className", "visible", "onClose", "images", "onIndexChange", "prev", "next", "showPrevNextButton", "maskStyle"];
var StyledImageViewer = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "ImageViewer__StyledImageViewer",
  componentId: "sc-oqxxes-0"
})(["position:fixed;z-index:1200;left:0;right:0;bottom:0;top:0;width:100vw;height:100vh;display:flex;justify-content:center;touch-action:none;user-select:none;flex-direction:column;.page{position:absolute;left:50%;top:16px;transform:translate3d(-50%,0,0);color:#e6e6e6;font-size:14px;}.close{position:absolute;right:32px;top:32px;color:#e6e6e6;font-size:24px;}.close{position:fixed;right:16px;top:16px;cursor:pointer;color:#fff;font-size:16px;}.uc-icon-arrow{cursor:pointer;}img{width:100%;object-fit:scale-down;}"]);
/** 图片查看器 */

var ImageViewer = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      visible = props.visible,
      onClose = props.onClose,
      images = props.images,
      onIndexChange = props.onIndexChange,
      _props$prev = props.prev,
      prev = _props$prev === void 0 ? /*#__PURE__*/React__default['default'].createElement(IconArrow, {
    direction: "left"
  }) : _props$prev,
      _props$next = props.next,
      next = _props$next === void 0 ? /*#__PURE__*/React__default['default'].createElement(IconArrow, {
    direction: "right"
  }) : _props$next,
      _props$showPrevNextBu = props.showPrevNextButton,
      showPrevNextButton = _props$showPrevNextBu === void 0 ? false : _props$showPrevNextBu,
      maskStyle = props.maskStyle,
      rest = _objectWithoutProperties(props, _excluded$Q);

  var _useState = React.useState(Array.isArray(images) ? images : [images]),
      _useState2 = _slicedToArray(_useState, 2),
      urls = _useState2[0],
      setUrls = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  var onIndexChangeRef = useLatest(onIndexChange);
  var slideRef = React.useRef();
  React.useEffect(function () {
    setUrls(Array.isArray(images) ? images : [images]);
  }, [images]);
  useUpdateEffect(function () {
    if (!visible) {
      setIndex(0);
    }
  }, [visible]);
  var slides = React.useMemo(function () {
    return /*#__PURE__*/React__default['default'].createElement(Slide, {
      ref: slideRef,
      showPageIndicator: false,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      direction: "horizontal",
      height: '70vh',
      onPageChange: function onPageChange(index) {
        var _onIndexChangeRef$cur;

        setIndex(index);
        (_onIndexChangeRef$cur = onIndexChangeRef.current) === null || _onIndexChangeRef$cur === void 0 ? void 0 : _onIndexChangeRef$cur.call(onIndexChangeRef, index);
      },
      autoPlay: false
    }, urls.map(function (url) {
      return /*#__PURE__*/React__default['default'].createElement("img", {
        src: url,
        key: url
      });
    })); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urls, slideRef]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(Mask, {
    visible: visible,
    style: maskStyle,
    duration: 0
  }), visible && /*#__PURE__*/React__default['default'].createElement(StyledImageViewer, _extends({
    onClick: function onClick(e) {
      if (e.target.nodeName === 'IMG') {
        return;
      }

      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, rest, {
    ref: ref,
    className: clsx__default['default']('uc-image-viewer', className)
  }), slides, urls.length > 1 && showPrevNextButton && /*#__PURE__*/React__default['default'].createElement(Space, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
      marginTop: 24
    }
  }, /*#__PURE__*/React__default['default'].createElement(Button, {
    ghost: true,
    onClick: function onClick(e) {
      e.stopPropagation();
      slideRef.current.prev();
    }
  }, prev), /*#__PURE__*/React__default['default'].createElement(Button, {
    ghost: true,
    onClick: function onClick(e) {
      e.stopPropagation();
      slideRef.current.next();
    }
  }, next)), urls.length > 1 && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']('page')
  }, /*#__PURE__*/React__default['default'].createElement(Space, {
    size: 4
  }, index + 1, " / ", urls.length)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "close",
    onClick: onClose
  }, /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-guanbi"
  }))));
});
ImageViewer.displayName = 'UC-ImageViewer';

var _excluded$R = ["closable", "visible", "onClose", "className", "header", "children", "footer"];
var StyledModal = /*#__PURE__*/styled__default['default'](Popup).withConfig({
  displayName: "Modal__StyledModal",
  componentId: "sc-1wtmr6p-0"
})(["display:flex;flex-direction:column;min-width:30px;background-color:#fff;padding:20px;position:relative;border-radius:8px;box-shadow:", ";.close{top:16px;right:16px;color:#999;position:absolute;display:inline-block;cursor:pointer;font-size:16px;transition:color 0.3s ease;&:hover{color:#666;}}.body{flex:1;padding:16px 0;}.footer{display:flex;justify-content:flex-end;}"], boxShadow);
/** 对话框,基于Popup */

var Modal = function Modal(props) {
  var closable = props.closable,
      visible = props.visible,
      onClose = props.onClose,
      className = props.className,
      header = props.header,
      children = props.children,
      footer = props.footer,
      rest = _objectWithoutProperties(props, _excluded$R);

  return /*#__PURE__*/React__default['default'].createElement(StyledModal, _extends({}, rest, {
    visible: visible,
    onClose: onClose,
    className: clsx__default['default']('uc-modal', className),
    position: 'center'
  }), closable && /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), header && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "footer"
  }, footer));
};

Modal.displayName = 'UC-Modal';

var _excluded$S = ["content", "trigger", "placement", "arrow", "offset", "className", "closeOnClick", "hoverDelay", "closeOnClickOutside", "children"];
var StyledPopover = /*#__PURE__*/styled__default['default'](Popover__default['default']).withConfig({
  displayName: "PopMenu__StyledPopover",
  componentId: "sc-28uxwy-0"
})(["background:#fff;border-radius:2px;box-shadow:", ";"], boxShadow);

/**
 * click/hover 弹出菜单, 默认click, 基于Popover
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var PopMenu = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _children$props;

  var content = props.content,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom-right' : _props$placement,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      offset = props.offset,
      className = props.className,
      _props$closeOnClick = props.closeOnClick,
      closeOnClick = _props$closeOnClick === void 0 ? true : _props$closeOnClick,
      _props$hoverDelay = props.hoverDelay,
      hoverDelay = _props$hoverDelay === void 0 ? 100 : _props$hoverDelay,
      _props$closeOnClickOu = props.closeOnClickOutside,
      closeOnClickOutside = _props$closeOnClickOu === void 0 ? true : _props$closeOnClickOu,
      children = props.children,
      popoverRest = _objectWithoutProperties(props, _excluded$S);

  var timerRef = React.useRef(0);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  React.useImperativeHandle(ref, function () {
    return {
      show: function show() {
        return setVisible(true);
      },
      hide: function hide() {
        return setVisible(false);
      }
    };
  });
  var actionProps = {};

  if (trigger === 'click') {
    actionProps = {
      onClick: function onClick() {
        setVisible(true);
      }
    };
  } else if (trigger === 'hover') {
    actionProps = {
      onMouseEnter: function onMouseEnter() {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        setVisible(true);
      },
      onMouseLeave: function onMouseLeave() {
        timerRef.current = window.setTimeout(function () {
          setVisible(false);
        }, hoverDelay);
      }
    };
  }

  var onClose = React.useCallback(function () {
    setVisible(false);
  }, []); // add active class to trigger el

  var otherProps = {
    className: clsx__default['default']( /*#__PURE__*/React__default['default'].isValidElement(children) ? (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className : '', {
      active: visible,
      visible: visible
    })
  };
  return /*#__PURE__*/React__default['default'].createElement(StyledPopover, _extends({}, popoverRest, {
    className: clsx__default['default']('uc-popmenu', className),
    visible: visible,
    transitionDuration: 350,
    onClose: onClose,
    placement: placement,
    closeOnClickOutside: closeOnClickOutside,
    content: /*#__PURE__*/React__default['default'].createElement("div", {
      onClick: function onClick(e) {
        e.stopPropagation();

        if (closeOnClick) {
          onClose();
        }
      }
    }, content),
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, _objectSpread2(_objectSpread2({}, actionProps), otherProps)) : /*#__PURE__*/React__default['default'].createElement("span", _extends({}, actionProps, otherProps), children));
});
PopMenu.displayName = 'UC-PopMenu';

var _excluded$T = ["placement", "icon", "className", "children", "title", "okText", "okButtonProps", "cancelButtonProps", "cancelText", "arrow", "onOk", "closeOnClick", "onCancel"];
var StyledMenu = /*#__PURE__*/styled__default['default'](PopMenu).withConfig({
  displayName: "PopConfirm__StyledMenu",
  componentId: "sc-1xornwa-0"
})(["padding:16px;.popconfirm-content{min-width:120px;.title{display:flex;color:#1a1a1a;font-size:14px;align-items:center;.pop-icon{margin-right:8px;font-size:20px;color:#fab20a;}}.ops{display:flex;justify-content:flex-end;margin-top:24px;button{height:28px;&:first-child{margin-right:12px;}}}}"]);

/**
 * 点击元素，弹出气泡式的确认框。基于PopMenu
 *
 * target: pc
 *
 *  ref: {
 *      show: () => void;
 *      hide: () => void;
 *  }
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */
var PopConfirm = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'top' : _props$placement,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React__default['default'].createElement(Icon$1, {
    type: "uc-icon-jinggao"
  }) : _props$icon,
      className = props.className,
      children = props.children,
      title = props.title,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      okButtonProps = props.okButtonProps,
      cancelButtonProps = props.cancelButtonProps,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? true : _props$arrow,
      onOk = props.onOk,
      _props$closeOnClick = props.closeOnClick,
      closeOnClick = _props$closeOnClick === void 0 ? true : _props$closeOnClick,
      onCancel = props.onCancel,
      popomenuRest = _objectWithoutProperties(props, _excluded$T);

  var popmenuRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return popmenuRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledMenu, _extends({
    ref: popmenuRef
  }, popomenuRest, {
    className: clsx__default['default']('uc-popconfirm', className),
    placement: placement,
    arrow: arrow,
    content: /*#__PURE__*/React__default['default'].createElement("div", {
      className: clsx__default['default']('popconfirm-content'),
      onClick: function onClick(e) {
        if (!closeOnClick) {
          e.stopPropagation();
        }
      }
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: "title"
    }, icon && /*#__PURE__*/React__default['default'].createElement("span", {
      className: "pop-icon"
    }, icon), " ", title), /*#__PURE__*/React__default['default'].createElement("div", {
      className: "ops"
    }, /*#__PURE__*/React__default['default'].createElement(Button, _extends({}, cancelButtonProps, {
      onClick: function onClick() {
        var _popmenuRef$current;

        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
        (_popmenuRef$current = popmenuRef.current) === null || _popmenuRef$current === void 0 ? void 0 : _popmenuRef$current.hide();
      }
    }), cancelText), /*#__PURE__*/React__default['default'].createElement(Button, _extends({
      type: "primary"
    }, okButtonProps, {
      onClick: function onClick(e) {
        if (!closeOnClick) {
          e.stopPropagation(); // prevent popmenu closeOnClick in out wrapper
        }

        onOk === null || onOk === void 0 ? void 0 : onOk();
      }
    }), okText)))
  }), children);
});
PopConfirm.displayName = 'UC-PopConfirm';

var utils = {
  // 返回月份中的第一天是星期几
  firstDayOfMonth: function firstDayOfMonth(date) {
    var d = date.constructor === Date ? date : this.cloneDate(date, 'dd', 1);
    return d.getDay();
  },
  // 获取当月天数
  getDaysInMonth: function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  },
  // 获取当月天数
  getDaysByDate: function getDaysByDate(date) {
    var tmp = this.parseDate(date);
    return new Date(tmp.getFullYear(), tmp.getMonth() + 1, 0).getDate();
  },
  // 获取当月信息
  getCurrMonthInfo: function getCurrMonthInfo(year, month) {
    return {
      dayCount: new Date(year, month + 1, 0).getDate(),
      // 总天数
      firstDay: new Date(year, month, 1).getDay() // 第一天是周几

    };
  },
  // 判断闰年还是平年
  isLeapYear: function isLeapYear(year) {
    if (year === '' || !Number.isSafeInteger(+year)) {
      throw new Error('年份格式不正确');
    }

    year = +year;

    if (year < 1790) {
      throw new Error('年份不能低于1790');
    }

    return +year % 4 === 0 && +year % 100 !== 0 || +year % 400 === 0;
  },
  // 获取时间差的月份数
  getMonthCount: function getMonthCount(date1, date2) {
    var tmp1 = this.parseDate(date1);
    var tmp2 = this.parseDate(date2);
    var dur = (tmp2.getFullYear() - tmp1.getFullYear()) * 12 + (tmp2.getMonth() - tmp1.getMonth());
    return Math.abs(dur) + 1;
  },
  // 是否是今天(只判断年月日)
  isToday: function isToday(date) {
    return this.isOneDay(date, new Date());
  },
  // 两个日期是否同一天
  isOneDay: function isOneDay(date1, date2) {
    if (!date1 || !date2) {
      return false;
    }

    var tmp1 = this.parseDate(date1);
    var tmp2 = this.parseDate(date2);
    return tmp1.toDateString() === tmp2.toDateString();
  },
  // 两个日期是否同一个月
  isOneMonth: function isOneMonth(date1, date2) {
    if (!date1 || !date2) {
      return false;
    }

    var tmp1 = this.parseDate(date1);
    var tmp2 = this.parseDate(date2);
    return tmp1.getFullYear() === tmp2.getFullYear() && tmp1.getMonth() === tmp2.getMonth();
  },
  // 周几
  getDay: function getDay(date, opt) {
    var realDate = this.cloneDate(date);
    var array = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

    if (opt && opt instanceof Array) {
      array = opt;
    }

    return array[realDate.getDay()];
  },
  // 标准化日期, 时间均为00:00:00
  parseDay: function parseDay(date) {
    var tmp = this.parseDate(date);
    return new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
  },
  // 标准化时间
  parseDate: function parseDate(date) {
    if (date.constructor === Date) {
      return date;
    }

    if (date.constructor === String) {
      if (+date) {
        return new Date(+date);
      }

      date = date.replace(/-/gi, '/');
    }

    return new Date(date);
  },
  // 克隆日期
  cloneDate: function cloneDate(date, type, during) {
    var tmp = new Date(this.parseDate(date));

    if (!type || !during) {
      return tmp;
    }

    switch (type) {
      case 'y':
        tmp.setFullYear(tmp.getFullYear() + during);
        break;

      case 'yyyy':
        tmp.setFullYear(during);
        break;

      case 'm':
        tmp.setMonth(tmp.getMonth() + during);
        break;

      case 'mm':
        tmp.setMonth(during);
        break;

      case 'd':
        tmp.setDate(tmp.getDate() + during);
        break;

      case 'dd':
        tmp.setDate(during);
        break;
    }

    return tmp;
  }
};

function renderDate(date) {
  return date.getDate();
}

function disableDate() {
  return false;
}

var CalendarMonthView = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      _props$dateMonth = props.dateMonth,
      dateMonth = _props$dateMonth === void 0 ? new Date() : _props$dateMonth,
      onDateClick = props.onDateClick,
      _props$min = props.min,
      min = _props$min === void 0 ? new Date() : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? new Date() : _props$max,
      _props$dateRender = props.dateRender,
      dateRender = _props$dateRender === void 0 ? renderDate : _props$dateRender,
      _props$disabledDate = props.disabledDate,
      disabledDate = _props$disabledDate === void 0 ? disableDate : _props$disabledDate,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh' : _props$locale;
  var lastInRef = React.useRef();
  var nodeRef = React.useRef();
  var year = dateMonth.getFullYear();
  var month = dateMonth.getMonth();
  var monthKey = "".concat(year, "-").concat(month);
  var mountedRef = React.useRef(false);
  useIsomorphicLayoutEffect(function () {
    // auto anchor to value date / now
    var target = value[0] || new Date();
    var key = "".concat(target.getFullYear(), "-").concat(target.getMonth());

    if (key === monthKey) {
      var _nodeRef$current, _nodeRef$current$scro;

      (_nodeRef$current = nodeRef.current) === null || _nodeRef$current === void 0 ? void 0 : (_nodeRef$current$scro = _nodeRef$current.scrollIntoView) === null || _nodeRef$current$scro === void 0 ? void 0 : _nodeRef$current$scro.call(_nodeRef$current, {
        behavior: !mountedRef.current ? 'auto' : 'smooth'
      });
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
    }
  }, [value, monthKey]);
  React.useImperativeHandle(ref, function () {
    return {
      anchor: function anchor() {
        if (nodeRef.current && nodeRef.current.scrollIntoView) {
          var _nodeRef$current2, _nodeRef$current2$scr;

          (_nodeRef$current2 = nodeRef.current) === null || _nodeRef$current2 === void 0 ? void 0 : (_nodeRef$current2$scr = _nodeRef$current2.scrollIntoView) === null || _nodeRef$current2$scr === void 0 ? void 0 : _nodeRef$current2$scr.call(_nodeRef$current2, {
            behavior: 'smooth'
          });
        }
      }
    };
  });
  var title = (locale === null || locale === void 0 ? void 0 : locale.yearText) === '年' ? year + locale.yearText + locale.months[month] : "".concat(locale === null || locale === void 0 ? void 0 : locale.months[month], " ").concat(year); // 日期状态: 选中，区间

  var checkStatus = React.useCallback(function (date) {
    var disabled = date < utils.cloneDate(min, 'd', 0) || date > utils.cloneDate(max, 'd', 0);
    var res = {
      disabled: disabled || (disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date)),
      isSelected: value.some(function (item) {
        return utils.isOneDay(date, item);
      }),
      isRange: value.length > 1 && date > value[0] && date < value[value.length - 1],
      rangeStart: value.length > 1 && utils.isOneDay(date, value[0]),
      rangeEnd: value.length > 1 && utils.isOneDay(date, value[value.length - 1])
    };
    lastInRef.current = lastInRef.current || res.isSelected || res.isRange;
    return res;
  }, [disabledDate, max, min, value]);
  var renderDay = React.useCallback(function (day, year, month, firstDay) {
    var _clsx;

    var date = new Date(year, month, day);
    var isToday = new Date().getFullYear() === year && new Date().getMonth() === month && new Date().getDate() === day;
    var status = checkStatus(date);
    var txt = date && (dateRender === null || dateRender === void 0 ? void 0 : dateRender(date)) || '';
    return /*#__PURE__*/React__default['default'].createElement("li", {
      key: "".concat(year, "-").concat(month, "-").concat(day),
      className: clsx__default['default']("day", (_clsx = {
        'd6': (day + firstDay) % 7 === 0,
        'd7': (day + firstDay) % 7 === 1
      }, _defineProperty(_clsx, "day--disabled", status.disabled), _defineProperty(_clsx, "day--today", isToday), _defineProperty(_clsx, "day--selected", status.isSelected), _defineProperty(_clsx, "day--range", status.isRange), _defineProperty(_clsx, 'range-start', status.rangeStart), _defineProperty(_clsx, 'range-end', status.rangeEnd), _defineProperty(_clsx, "firstday-".concat(firstDay), day === 1 && firstDay), _clsx)),
      onClick: function onClick() {
        return !status.disabled && date && (onDateClick === null || onDateClick === void 0 ? void 0 : onDateClick(date));
      }
    }, txt && /*#__PURE__*/React__default['default'].createElement("div", {
      className: "day__content"
    }, txt) || '');
  }, [checkStatus, dateRender, onDateClick]);

  var renderContent = function renderContent(year, month) {
    var data = utils.getCurrMonthInfo(year, month);
    var firstDay = data.firstDay,
        dayCount = data.dayCount;
    return Array.from({
      length: dayCount
    }).map(function (_item, i) {
      return renderDay(i + 1, year, month, firstDay);
    });
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "month",
    title: title,
    ref: nodeRef
  }, /*#__PURE__*/React__default['default'].createElement("ul", null, renderContent(year, month)));
});
CalendarMonthView.displayName = 'CalendarMonthView';

var zh = {
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yearText: '年'
};
var en = {
  weeks: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yearText: ''
};

var locales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  zh: zh,
  en: en
});

var _excluded$U = ["range", "className", "locale", "dateRender", "disabledDate", "onChange", "value"];
//#region styled
var StyledWrap$7 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "calendar__StyledWrap",
  componentId: "sc-lwn702-0"
})(["background-color:#fff;user-select:none;ul{list-style-type:disc;li{display:inline-block;width:14.28571%;text-align:center;vertical-align:middle;}}.head{display:flex;font-size:14px;color:#999;margin:0;padding:0;list-style-type:disc;.item{height:40px;line-height:40px;}box-shadow:", ";}.body{padding:10px 0;overflow:auto;max-height:50vh;.month{color:#343434;&:before{content:attr(title);display:block;margin:15px auto;font-size:17px;font-weight:500;padding-left:15px;}ul{margin:0;padding:0;}.day{margin:10px 0;position:relative;font-size:16px;cursor:pointer;white-space:nowrap;}.day__content{width:30px;height:30px;background-color:transparent;border-radius:50%;display:flex;justify-content:center;align-items:center;margin:0 auto;}.day.firstday-1{margin-left:14.28571%;}.day.firstday-2{margin-left:28.57142%;}.day.firstday-3{margin-left:42.85713%;}.day.firstday-4{margin-left:57.14284%;}.day.firstday-5{margin-left:71.42855%;}.day.firstday-6{margin-left:85.71426%;}.day--selected{.day__content{", " ", " color:#fff;}}.day--disabled{cursor:auto;}.day--disabled .day__content{color:#bcbcbc;}.day--range{background-color:", ";", " .day__content{background-color:transparent;}}.day.range-start.range-end{background-image:none;}.day.range-start:not(.range-end):not(.d6):not(:last-child){background-image:linear-gradient( to right,transparent 0,transparent 50%,", " 50% );}.day.range-end:not(.range-start):not(.d7):not(:first-child){background-image:linear-gradient( to left,transparent 0,transparent 50%,", " 50% );}}}"], boxShadow, getThemeColorCss('background-color'), getThemeColorCss('box-shadow', '0 0 4px 0'), function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}, getThemeColorCss('color'), function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}, function (props) {
  return color__default['default'](props.theme.color).fade(0.72);
}); //#endregion

/** 移动端日历  */

var Calendar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var range = props.range,
      className = props.className,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh' : _props$locale,
      dateRender = props.dateRender,
      disabledDate = props.disabledDate,
      onChange = props.onChange,
      _props$value = props.value,
      value = _props$value === void 0 ? new Date() : _props$value,
      rest = _objectWithoutProperties(props, _excluded$U);

  var max = props.max,
      min = props.min;

  var _useState = React.useState(function () {
    return (Array.isArray(value) ? value : [value || new Date()]).map(function (d) {
      return utils.parseDay(d);
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      index = _useState4[0],
      setIndex = _useState4[1];

  min = min ? utils.parseDay(min) : new Date();
  max = max ? utils.parseDay(max) : utils.cloneDate(min, 'y', 1);
  var startMonth = utils.cloneDate(min, 'dd', 1);

  var handleDateClick = function handleDateClick(date) {
    if (range) {
      if (index === 0) {
        setVal([date]);
        setIndex(1);
      } else if (index === 1) {
        val[1] = date;
        val.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
        setVal(_toConsumableArray(val));
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
        setIndex(0);
      }
    } else {
      setVal([date]);
      onChange === null || onChange === void 0 ? void 0 : onChange(date);
    }
  };

  var renderMonth = function renderMonth(dateMonth) {
    var key = "".concat(dateMonth.getFullYear(), "-").concat(dateMonth.getMonth());
    return /*#__PURE__*/React__default['default'].createElement(CalendarMonthView, {
      key: key,
      min: min,
      max: max,
      value: val,
      dateMonth: dateMonth,
      dateRender: dateRender,
      disabledDate: disabledDate,
      onDateClick: handleDateClick,
      locale: locales[locale]
    });
  };

  var arr = Array.from({
    length: utils.getMonthCount(startMonth, max)
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$7, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-calendar', className)
  }), /*#__PURE__*/React__default['default'].createElement("ul", {
    className: "head"
  }, locales[locale].weeks.map(function (week) {
    return /*#__PURE__*/React__default['default'].createElement("li", {
      key: week,
      className: "item"
    }, week);
  })), /*#__PURE__*/React__default['default'].createElement(SafeArea, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "body"
  }, arr.map(function (_item, i) {
    return renderMonth(utils.cloneDate(startMonth, 'm', i));
  }))));
});
Calendar.displayName = 'UC-Calendar';

/* eslint-disable react-hooks/exhaustive-deps */
/**
 *  执行同步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateLayoutEffect = function useUpdateLayoutEffect(effect) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isMounted = React.useRef(false);
  useIsomorphicLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

var _excluded$V = ["className", "value", "onOk", "onChange", "minYear", "maxYear", "locale"];
var locales$1 = {
  zh: {
    year: '年',
    month: '月',
    day: '日'
  },
  en: {
    year: '',
    month: '',
    day: ''
  }
};

var getDays = function getDays(year, month) {
  var days = [];
  var c = utils.getDaysInMonth(year, month);

  for (var i = 1; i <= c; i++) {
    days.push(i);
  }

  return days;
};

var getData = function getData(minYear, maxYear) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'zh';
  var years = [];
  var monthes = [];
  var days = [];

  for (var i = minYear; i <= maxYear; i++) {
    years.push({
      label: i + locales$1[locale].year,
      value: i
    });
  }

  for (var j = 1; j <= 12; j++) {
    monthes.push({
      label: j + locales$1[locale].month,
      value: j
    });
  }

  for (var z = 1; z <= 30; z++) {
    days.push({
      label: z + locales$1[locale].day,
      value: z
    });
  }

  return [years, monthes, days];
}; //#endregion

/** 移动端日期选择 */


var DatePicker = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$value = props.value,
      value = _props$value === void 0 ? new Date() : _props$value,
      _onOk = props.onOk,
      _onChange = props.onChange,
      _props$minYear = props.minYear,
      minYear = _props$minYear === void 0 ? 1980 : _props$minYear,
      _props$maxYear = props.maxYear,
      maxYear = _props$maxYear === void 0 ? 2030 : _props$maxYear,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh' : _props$locale,
      rest = _objectWithoutProperties(props, _excluded$V);

  var _useState = React.useState(getData(minYear, maxYear, locale)),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  useUpdateLayoutEffect(function () {
    setList(getData(minYear, maxYear, locale));
  }, [minYear, maxYear, locale]);

  var _useState3 = React.useState(function () {
    var d = utils.parseDate(value || new Date());
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      val = _useState4[0],
      setVal = _useState4[1];

  return /*#__PURE__*/React__default['default'].createElement(Picker, _extends({}, rest, {
    data: list,
    onOk: function onOk(v) {
      _onOk === null || _onOk === void 0 ? void 0 : _onOk(new Date(v[0], v[1] - 1, v[2]));
    },
    value: val,
    onChange: function onChange(v) {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(new Date(v[0], v[1] - 1, v[2]));
    },
    onWheelChange: function onWheelChange(index, wheelIndex) {
      if (index >= list[wheelIndex].length) {
        // fix feb
        index = list[wheelIndex].length - 1;
      }

      var v = list[wheelIndex][index].value;
      val[wheelIndex] = v;

      if (wheelIndex === 1) {
        // month change
        var days = getDays(val[0], v);

        if (days.length !== list[2].length) {
          list[2] = days.map(function (v) {
            return {
              label: v + locales$1[locale].day,
              value: v
            };
          });

          if (val[2] > days.length) {
            // keep the days original , but when origin val > lastday of curent month , set to last day
            val[2] = list[2][list[2].length - 1].value;
          }

          setList(_toConsumableArray(list));
        }
      }

      setVal(_toConsumableArray(val));
    },
    ref: ref,
    className: clsx__default['default']('uc-datepicker', className)
  }));
});
DatePicker.displayName = 'UC-DatePicker';

var _excluded$W = ["text", "colorDark", "colorLight", "size", "className", "style"];

/** 二维码 */
var QRCode = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var text = props.text,
      _props$colorDark = props.colorDark,
      colorDark = _props$colorDark === void 0 ? '#000' : _props$colorDark,
      _props$colorLight = props.colorLight,
      colorLight = _props$colorLight === void 0 ? '#fff' : _props$colorLight,
      _props$size = props.size,
      size = _props$size === void 0 ? 128 : _props$size,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$W);

  var domRef = React.useRef();
  var qrRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return domRef.current;
  });
  useIsomorphicLayoutEffect(function () {
    qrRef.current = new WQRCode__default['default'](domRef.current, {
      text: text,
      width: size,
      height: size,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: WQRCode__default['default'].CorrectLevel.H
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useUpdateLayoutEffect(function () {
    if (qrRef.current) {
      qrRef.current.makeCode(text);
    }

    return function () {
      return qrRef.current.clear();
    };
  }, [text]);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    ref: domRef,
    className: clsx__default['default']('uc-qrcode', className),
    style: _objectSpread2({
      width: size,
      height: size
    }, style)
  }));
});
QRCode.displayName = 'UC-QRCode';

var _excluded$X = ["children", "onChange", "className", "animated", "keys"];

/**
 *  子项，放在Collapse里面
 *
 * @param {*}
 * @return {*}
 */
var Item = function Item(props) {
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, props.children);
};

var StyledWrapper$2 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Collapse__StyledWrapper",
  componentId: "sc-sngxxh-0"
})(["-webkit-tap-highlight-color:transparent;.item{overflow:hidden;&.disabled{opacity:0.4;}.header{background:#fff;height:50px;color:#333;display:flex;justify-content:space-between;align-items:center;width:100%;cursor:pointer;}.content{color:#999;}}"]);
/**
 *  content renderer
 *
 * @param {*} props
 * @return {*}
 */

var ItemContent = function ItemContent(props) {
  var visible = props.visible,
      children = props.children;
  var innerRef = React.useRef(null);

  var _useSpring = web.useSpring(function () {
    return {
      from: {
        height: 0,
        opacity: 0
      },
      config: {
        duration: animationNormal
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      api = _useSpring2[1];

  useMount(function () {
    if (!visible) return;
    var inner = innerRef.current;
    if (!inner) return;
    api.start({
      height: inner.offsetHeight,
      opacity: 1,
      immediate: true
    });
  });
  useUpdateLayoutEffect(function () {
    var inner = innerRef.current;
    if (!inner) return;

    if (visible) {
      api.start({
        height: inner.offsetHeight,
        opacity: 1
      });
    } else {
      api.start({
        from: {
          height: inner.offsetHeight,
          opacity: 1
        },
        to: {
          height: 0,
          opacity: 0
        }
      });
    }
  }, [visible]);
  return /*#__PURE__*/React__default['default'].createElement(web.animated.div, {
    className: "content",
    style: styles
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    ref: innerRef
  }, children));
};
/**
 * 折叠面板
 */


var Collapse = function Collapse(_ref) {
  var children = _ref.children,
      onChange = _ref.onChange,
      className = _ref.className,
      animated = _ref.animated,
      _ref$keys = _ref.keys,
      keys = _ref$keys === void 0 ? '' : _ref$keys,
      rest = _objectWithoutProperties(_ref, _excluded$X);

  var count = React__default['default'].Children.count(children); // 手风琴模式

  var isSingleMode = !Array.isArray(keys); // inner keys

  var _useState = React.useState(keys),
      _useState2 = _slicedToArray(_useState, 2),
      _keys = _useState2[0],
      _setKeys = _useState2[1];

  useUpdateEffect(function () {
    _setKeys(keys);
  }, [keys]);

  if (count === 0) {
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$2, _extends({}, rest, {
    className: clsx__default['default']('uc-collapse', className)
  }), React__default['default'].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      var key = child.key;
      key = key || index;
      var _ref2 = child.props,
          _ref2$title = _ref2.title,
          title = _ref2$title === void 0 ? '' : _ref2$title,
          _disabled = _ref2.disabled,
          _ref2$arrow = _ref2.arrow,
          arrow = _ref2$arrow === void 0 ? true : _ref2$arrow,
          _children = _ref2.children;

      var _active = isSingleMode ? _keys === key : _keys.indexOf(key) > -1;

      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: key,
        className: clsx__default['default']('item', {
          active: _active,
          disabled: _disabled
        }),
        onClick: function onClick() {
          if (!_disabled) {
            var _keys2;

            if (_active) {
              if (isSingleMode) {
                _keys2 = '';
              } else {
                var idx = _keys.indexOf(key);

                _keys.splice(idx, 1);

                _keys2 = _toConsumableArray(_keys);
              }
            } else {
              if (isSingleMode) {
                _keys2 = key;
              } else {
                _keys2 = [].concat(_toConsumableArray(_keys), [key]);
              }
            }

            _setKeys(_keys2);

            onChange === null || onChange === void 0 ? void 0 : onChange(_keys2);
          }
        }
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx__default['default']('header', {
          disabled: _disabled
        })
      }, /*#__PURE__*/React__default['default'].createElement("span", null, typeof title === 'function' ? title(_active, _disabled) : title), /*#__PURE__*/React__default['default'].createElement("span", null, arrow && /*#__PURE__*/React__default['default'].createElement(IconArrow, {
        direction: _active ? 'top' : 'down'
      }))), animated ? /*#__PURE__*/React__default['default'].createElement(ItemContent, {
        visible: _active
      }, _children) : _active && /*#__PURE__*/React__default['default'].createElement("div", {
        className: clsx__default['default']('content')
      }, _children));
    }
  }));
};

Collapse.displayName = 'UC-Collapse';
var Collapse$1 = attachPropertiesToComponent(Collapse, {
  Item: Item
});

var _excluded$Y = ["trackColor", "fillColor", "height", "percent", "className", "style"];

/** 进度条 */
var ProgressBar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$trackColor = props.trackColor,
      trackColor = _props$trackColor === void 0 ? '#e5e5e5' : _props$trackColor,
      fillColor = props.fillColor,
      _props$height = props.height,
      height = _props$height === void 0 ? 4 : _props$height,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$Y);

  var theme = styled.useTheme() || {};
  var color = theme.color || primary;
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-progress-bar', className),
    style: _objectSpread2({
      height: height,
      backgroundColor: trackColor,
      overflow: 'hidden'
    }, style)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default']("path"),
    style: {
      height: '100%',
      width: "".concat(percent, "%"),
      background: fillColor || color,
      transition: "width ".concat(animationSlow, "ms ease-in-out")
    }
  }));
});
ProgressBar.displayName = 'UC-ProgressBar';

var _excluded$Z = ["children"];
var StyledWrap$8 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "AutoCenter__StyledWrap",
  componentId: "sc-eqv38w-0"
})(["display:flex;justify-content:center;.content{flex:0 1 auto;}"]);
/** 自动居中 */

var AutoCenter = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$Z);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$8, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-auto-center')
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "content"
  }, children));
});
AutoCenter.displayName = 'UC-AutoCenter';

var _excluded$_ = ["number", "delay", "className"];

/** 滚动数字 */
var RollingNumber = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var number = props.number,
      _props$delay = props.delay,
      delay = _props$delay === void 0 ? 200 : _props$delay,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$_);

  var spring = web.useSpring({
    from: {
      number: 0
    },
    number: Number(number),
    delay: delay,
    config: web.config.molasses
  });
  return /*#__PURE__*/React__default['default'].createElement(web.animated.span, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-rolling-number', className)
  }), spring.number.to(function (n) {
    return ~~n;
  }));
});
RollingNumber.displayName = 'UC-RollingNumber';

var _excluded$$ = ["className", "color", "duration", "startScale", "children", "block"];
var StyledWrap$9 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Ripple__StyledWrap",
  componentId: "sc-cbwg15-0"
})(["overflow:hidden;position:relative;display:inline-block;cursor:pointer;&.block{display:block;}.ripple-el{position:absolute;z-index:0;top:0;right:0;bottom:0;left:0;border-radius:50%;}> *{position:relative;z-index:1;}"]);
/** 波纹效果,给子元素添加点击波纹效果 */

var Ripple = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? '#ccc' : _props$color,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 300 : _props$duration,
      _props$startScale = props.startScale,
      startScale = _props$startScale === void 0 ? 0.3 : _props$startScale,
      children = props.children,
      block = props.block,
      rest = _objectWithoutProperties(props, _excluded$$);

  var elRef = React.useRef(null);
  var isRunningRef = React.useRef(false);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });

  var _useSpring = web.useSpring(function () {
    return {
      from: {
        scale: 1,
        opacity: 0,
        width: '',
        height: '',
        top: '',
        left: ''
      },
      config: {
        duration: duration,
        easing: web.easings.easeInOutQuart
      },
      onStart: function onStart() {
        isRunningRef.current = true;
      },
      onRest: function onRest() {
        isRunningRef.current = false;
        api.start({
          width: '',
          height: '',
          top: '',
          left: '',
          immediate: true
        });
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      styles = _useSpring2[0],
      api = _useSpring2[1];

  var start = React__default['default'].useCallback(function (event) {
    if (isRunningRef.current) {
      return;
    }

    var element = elRef.current;
    var rect = element.getBoundingClientRect();

    var _ref = event.touches ? event.touches[0] : event,
        clientX = _ref.clientX,
        clientY = _ref.clientY;

    var rippleX = Math.round(clientX - rect.left);
    var rippleY = Math.round(clientY - rect.top);
    var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
    var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
    var rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    api.start({
      width: rippleSize + 'px',
      height: rippleSize + 'px',
      top: -(rippleSize / 2) + rippleY + 'px',
      left: -(rippleSize / 2) + rippleX + 'px',
      immediate: true,
      scale: startScale
    });
    api.start({
      scale: 1
    });
  }, [api, startScale]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$9, _extends({}, rest, {
    onClick: function onClick(e) {
      var _props$onClick;

      start(e);
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, e);

      if ( /*#__PURE__*/React__default['default'].isValidElement(children)) {
        var _children$props$onCli, _children$props;

        (_children$props$onCli = (_children$props = children.props).onClick) === null || _children$props$onCli === void 0 ? void 0 : _children$props$onCli.call(_children$props, e);
      }
    },
    ref: elRef,
    className: clsx__default['default']('uc-ripple', className, {
      block: block
    })
  }), children, /*#__PURE__*/React__default['default'].createElement(web.animated.div, {
    className: "ripple-el",
    style: _objectSpread2(_objectSpread2({}, styles), {}, {
      opacity: styles.scale.to([0, 0.4, 0.9, 1], [0.1, 0.2, 0.3, 0]),
      backgroundColor: color
    })
  }));
});
Ripple.displayName = 'UC-Ripple';

var _excluded$10 = ["pullingText", "canReleaseText", "refreshingText", "completeText", "completeDelay", "onRefresh", "headHeight", "threshold", "className", "renderText", "children", "style"];
var StyledWrap$a = /*#__PURE__*/styled__default['default'](web.animated.div).withConfig({
  displayName: "PullToRefresh__StyledWrap",
  componentId: "sc-159qm0m-0"
})(["color:#999;.head{overflow:hidden;position:relative;.status-text{position:absolute;bottom:0;left:0;width:100%;display:flex;justify-content:center;align-items:center;}}"]);

/** 下拉刷新 */
var PullToRefresh = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$pullingText = props.pullingText,
      pullingText = _props$pullingText === void 0 ? '下拉刷新' : _props$pullingText,
      _props$canReleaseText = props.canReleaseText,
      canReleaseText = _props$canReleaseText === void 0 ? '释放立即刷新' : _props$canReleaseText,
      _props$refreshingText = props.refreshingText,
      refreshingText = _props$refreshingText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Space, null, /*#__PURE__*/React__default['default'].createElement(Spin, null), "\u52A0\u8F7D\u4E2D...") : _props$refreshingText,
      _props$completeText = props.completeText,
      completeText = _props$completeText === void 0 ? '刷新成功' : _props$completeText,
      _props$completeDelay = props.completeDelay,
      completeDelay = _props$completeDelay === void 0 ? 500 : _props$completeDelay,
      onRefresh = props.onRefresh,
      _props$headHeight = props.headHeight,
      headHeight = _props$headHeight === void 0 ? 40 : _props$headHeight,
      _props$threshold = props.threshold,
      threshold = _props$threshold === void 0 ? 60 : _props$threshold,
      className = props.className,
      renderText = props.renderText,
      children = props.children,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$10);

  var _useState = React.useState('init'),
      _useState2 = _slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var statusRef = useLatest(status);

  var _useSpring = web.useSpring(function () {
    return {
      from: {
        height: 0
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      springStyles = _useSpring2[0],
      api = _useSpring2[1];

  var wrapRef = React.useRef(null);
  var elRef = React.useRef(null);
  var isPullingRef = React.useRef(false);
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  });

  function doRefresh() {
    return _doRefresh.apply(this, arguments);
  }

  function _doRefresh() {
    _doRefresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              api.start({
                height: headHeight
              });
              setStatus('refreshing');
              _context4.prev = 2;
              _context4.next = 5;
              return onRefresh === null || onRefresh === void 0 ? void 0 : onRefresh();

            case 5:
              setStatus('complete');
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](2);
              api.start({
                to: function () {
                  var _to = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(next) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return next({
                              height: 0,
                              onRest: function onRest() {
                                return setStatus('init');
                              }
                            });

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  function to(_x) {
                    return _to.apply(this, arguments);
                  }

                  return to;
                }()
              });
              throw _context4.t0;

            case 12:
              if (!(completeDelay > 0)) {
                _context4.next = 15;
                break;
              }

              _context4.next = 15;
              return sleep(completeDelay);

            case 15:
              api.start({
                to: function () {
                  var _to2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(next) {
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return next({
                              height: 0,
                              onRest: function onRest() {
                                return setStatus('init');
                              }
                            });

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  function to(_x2) {
                    return _to2.apply(this, arguments);
                  }

                  return to;
                }()
              });

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 8]]);
    }));
    return _doRefresh.apply(this, arguments);
  }

  var renderStatusText = function renderStatusText() {
    if (renderText) {
      return renderText(status);
    }

    if (status === 'init') return null;
    if (status === 'pulling') return pullingText;
    if (status === 'canRelease') return canReleaseText;
    if (status === 'refreshing') return refreshingText;
    if (status === 'complete') return completeText;
  };

  var touchEnd = React.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isPullingRef.current) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            if (!(status === 'refreshing' || status === 'complete')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            if (!(status === 'canRelease')) {
              _context.next = 12;
              break;
            }

            _context.prev = 5;
            _context.next = 8;
            return doRefresh();

          case 8:
            _context.prev = 8;
            return _context.finish(8);

          case 10:
            _context.next = 13;
            break;

          case 12:
            api.start({
              height: 0
            });

          case 13:
            isPullingRef.current = false; // eslint-disable-next-line react-hooks/exhaustive-deps

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5,, 8, 10]]);
  })), [api, status]);
  var touchEndRef = useLatest(touchEnd);
  var statusText = /*#__PURE__*/React__default['default'].createElement(web.animated.div, {
    style: springStyles,
    className: "head"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "status-text",
    style: {
      height: headHeight
    }
  }, renderStatusText()));
  useIsomorphicLayoutEffect(function () {
    var wrapEl = wrapRef.current;
    var el = elRef.current;
    var y = 0;
    var d = 0; // touch cacl in children

    var childrenElFg = new Touch__default['default'](el, {
      onTouchStart: function onTouchStart(e) {
        d = 0;

        if (e.touches) {
          y = e.touches[0].pageY;
        } else {
          y = e.pageY;
        }
      },
      onTouchMove: function onTouchMove(e) {
        var y1;

        if (e.touches) {
          y1 = e.touches[0].pageY;
        } else {
          y1 = e.pageY;
        }

        var scrollTop = getScrollTop(el);

        if (y1 - y > 0 && scrollTop === 0 && e.cancelable) {
          e.preventDefault();
          isPullingRef.current = true;
          setStatus('pulling');
        }
      },
      onTouchEnd: function onTouchEnd() {
        var _touchEndRef$current;

        y = 0;
        d = 0;
        (_touchEndRef$current = touchEndRef.current) === null || _touchEndRef$current === void 0 ? void 0 : _touchEndRef$current.call(touchEndRef);
      }
    }); // press move in wrap

    var fg = new Touch__default['default'](wrapEl, {
      onPressMove: function onPressMove(e) {
        if (!isPullingRef.current || statusRef.current === 'refreshing' || statusRef.current === 'complete') return;
        d = Math.min(threshold + 30, d + e.deltaY);
        api.start({
          height: d
        });
        setStatus(d > threshold ? 'canRelease' : 'pulling');
      }
    });
    return function () {
      fg === null || fg === void 0 ? void 0 : fg.destroy();
      childrenElFg === null || childrenElFg === void 0 ? void 0 : childrenElFg.destroy();
    };
  }, [api, threshold, statusRef, touchEndRef]);

  if (children && ! /*#__PURE__*/React__default['default'].isValidElement(children)) {
    throw Error('children must be ReactElement');
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$a, _extends({
    ref: wrapRef
  }, rest, {
    className: clsx__default['default']('uc-pull-to-refresh', className),
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      touchAction: 'pan-y'
    })
  }), statusText, /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, {
    ref: elRef
  }) : null);
});
PullToRefresh.displayName = 'UC-PullToRefresh';

var _excluded$11 = ["children"];

var checkFailed = function checkFailed() {
  throw new Error('TouchElement: 子元素必须是dom/forwardRef到dom的组件');
};
/** 给子元素添加手势操作 */


var TouchElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$11);

  var elRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  React.useLayoutEffect(function () {
    var el = elRef.current;

    if (!(el instanceof Element)) {
      checkFailed();
    }

    var fg = new Touch__default['default'](el, rest);
    return function () {
      fg.destroy();
    };
  }, []);

  if (! /*#__PURE__*/React.isValidElement(children)) {
    checkFailed();
  }

  return /*#__PURE__*/React.createElement(children.type, _extends({}, children.props, {
    ref: elRef
  }));
});
TouchElement.displayName = 'TouchElement';

var _excluded$12 = ["currentPage", "pageCount", "visiblePageCount", "firstText", "lastText", "showFirstLastText", "showIfOnePage", "onPageChange", "className"];

/**
 * get pages arr
 *
 * @param {number} currentPage
 * @param {number} pageCount
 * @param {number} visiblePageCount
 * @return {*}  {Array<number>}
 */
function getPages(currentPage, pageCount, visiblePageCount) {
  var low, high, v;
  var pages = [];

  if (pageCount === 0) {
    return pages;
  }

  if (currentPage > pageCount) {
    currentPage = 1;
  }

  if (pageCount <= visiblePageCount) {
    low = 1;
    high = pageCount;
  } else {
    v = Math.ceil(visiblePageCount / 2);
    low = Math.max(currentPage - v, 1);
    high = Math.min(low + visiblePageCount - 1, pageCount);

    if (pageCount - high < v) {
      low = high - visiblePageCount + 1;
    }
  }

  for (; low <= high; low++) {
    pages.push(low);
  }

  return pages;
}

var StyledWrap$b = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Pagination__StyledWrap",
  componentId: "sc-xuhhtx-0"
})(["font-size:14px;.uc-button{width:32px;padding:0;transition:none;}&.no-page{display:flex;width:100%;justify-content:space-between;}"]);
/** 分页 */

var Pagination = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var _props$currentPage = props.currentPage,
      currentPage = _props$currentPage === void 0 ? 1 : _props$currentPage,
      pageCount = props.pageCount,
      _props$visiblePageCou = props.visiblePageCount,
      visiblePageCount = _props$visiblePageCou === void 0 ? 10 : _props$visiblePageCou,
      _props$firstText = props.firstText,
      firstText = _props$firstText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Button, {
    as: "a"
  }, "\u9996\u9875") : _props$firstText,
      _props$lastText = props.lastText,
      lastText = _props$lastText === void 0 ? /*#__PURE__*/React__default['default'].createElement(Button, {
    as: "a"
  }, "\u672B\u9875") : _props$lastText,
      showFirstLastText = props.showFirstLastText,
      showIfOnePage = props.showIfOnePage,
      onPageChange = props.onPageChange,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$12);

  var domRef = React.useRef();

  var _useState = React.useState(currentPage),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = React.useState(function () {
    return getPages(page, pageCount, visiblePageCount);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pages = _useState4[0],
      setPages = _useState4[1];

  useUpdateEffect(function () {
    onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(page);
  }, [page]); // outside

  useUpdateEffect(function () {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [currentPage]);
  useUpdateEffect(function () {
    setPages(getPages(page, pageCount, visiblePageCount));
  }, [visiblePageCount, page, pageCount]);
  React.useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var renderPage = function renderPage() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, showFirstLastText && /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "first-page",
      onClick: function onClick() {
        return setPage(1);
      },
      as: "a"
    }, firstText), /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "prev-page",
      disabled: page === 1,
      onClick: function onClick() {
        return setPage(function (p) {
          return Math.max(1, p - 1);
        });
      }
    }, /*#__PURE__*/React__default['default'].createElement(IconArrow, {
      direction: "left"
    })), pages.map(function (p) {
      return /*#__PURE__*/React__default['default'].createElement(Button, {
        outlined: p === page,
        className: clsx__default['default']('page-item', {
          active: p === page
        }),
        key: p,
        onClick: function onClick() {
          return setPage(p);
        }
      }, p);
    }), /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "next-page",
      disabled: page === pageCount,
      onClick: function onClick() {
        return setPage(function (p) {
          return Math.min(pageCount, p + 1);
        });
      }
    }, /*#__PURE__*/React__default['default'].createElement(IconArrow, {
      direction: "right"
    })), showFirstLastText && /*#__PURE__*/React__default['default'].createElement(Button, {
      className: "last-page",
      onClick: function onClick() {
        return setPage(pageCount);
      },
      as: "a"
    }, lastText));
  };

  return (showIfOnePage || pageCount > 1) && /*#__PURE__*/React__default['default'].createElement(StyledWrap$b, _extends({}, rest, {
    ref: domRef,
    className: clsx__default['default']('uc-pagination', className, {
      'no-page': visiblePageCount === 0
    })
  }), visiblePageCount === 0 && renderPage(), visiblePageCount > 0 && /*#__PURE__*/React__default['default'].createElement(Space, null, renderPage()));
});
Pagination.displayName = 'UC-Pagination';

var _excluded$13 = ["image", "desc", "className", "extra"];
var StyledWrap$c = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Result__StyledWrap",
  componentId: "sc-1xsmtez-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;.image{line-height:1;img{max-width:100%;}}.desc{}.extra{}"]);
/** 结果 */

var Result = function Result(props) {
  var image = props.image,
      desc = props.desc,
      className = props.className,
      extra = props.extra,
      rest = _objectWithoutProperties(props, _excluded$13);

  var imgNode = typeof image === 'string' ? /*#__PURE__*/React__default['default'].createElement("img", {
    src: image,
    alt: ""
  }) : image;
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$c, _extends({}, rest, {
    className: clsx__default['default']('uc-result', className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "image"
  }, imgNode), /*#__PURE__*/React__default['default'].createElement("div", {
    className: "desc"
  }, desc), extra && /*#__PURE__*/React__default['default'].createElement("div", {
    className: "extra"
  }, extra));
};

Result.displayName = 'UC-Result';

var _excluded$14 = ["image", "desc", "className"];
var StyledResult = /*#__PURE__*/styled__default['default'](Result).withConfig({
  displayName: "Empty__StyledResult",
  componentId: "sc-1u07bdn-0"
})(["padding:24px 0;.image{width:64px;}.desc{color:#ccc;}"]);
var EmptySvg = /*#__PURE__*/React__default['default'].createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 41"
}, /*#__PURE__*/React__default['default'].createElement("g", {
  transform: "translate(0 1)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default['default'].createElement("ellipse", {
  fill: "#f5f5f5",
  cx: "32",
  cy: "33",
  rx: "32",
  ry: "7"
}), /*#__PURE__*/React__default['default'].createElement("g", {
  stroke: "#d9d9d9"
}, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
  fill: "#fafafa"
}))));
/** 空状态 */

var Empty = function Empty(props) {
  var _props$image = props.image,
      image = _props$image === void 0 ? EmptySvg : _props$image,
      _props$desc = props.desc,
      desc = _props$desc === void 0 ? '暂无数据' : _props$desc,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$14);

  return /*#__PURE__*/React__default['default'].createElement(StyledResult, _extends({}, rest, {
    className: clsx__default['default']('uc-empty', className),
    image: image,
    desc: desc
  }));
};

Empty.displayName = 'UC-Empty';

var _excluded$15 = ["items", "index", "defaultIndex", "onChange", "className"];
var StyledWrapper$3 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "SideBar__StyledWrapper",
  componentId: "sc-nyu3mo-0"
})(["-webkit-tap-highlight-color:transparent;overflow-y:scroll;box-sizing:border-box;position:relative;font-size:14px;background-color:#fff;user-select:none;display:inline-flex;flex-direction:column;&::-webkit-scrollbar{display:none;}.uc-sidebar-item{box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:14px 12px;background-color:#f5f5f5;&.active{", " background-color:#fff;border-radius:0;}&.disabled{cursor:not-allowed;color:", ";}&.prev{border-radius:0 0 8px 0;}&.next{border-radius:0 8px 0 0;}}"], getThemeColorCss('color'), disabledText); //#endregion

/**
 * 侧边导航
 */

var SideBar = function SideBar(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      index = _ref.index,
      _ref$defaultIndex = _ref.defaultIndex,
      defaultIndex = _ref$defaultIndex === void 0 ? 0 : _ref$defaultIndex,
      onChange = _ref.onChange,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$15);

  var _useState = React.useState(typeof index === 'undefined' ? defaultIndex : index),
      _useState2 = _slicedToArray(_useState, 2),
      _v = _useState2[0],
      _setV = _useState2[1];

  var wrapElRef = React.useRef();
  useUpdateEffect(function () {
    if (index !== _v) {
      _setV(index);
    }
  }, [index]);
  useMount(function () {
    var wrapEl = wrapElRef.current;

    if (wrapEl && wrapEl.scrollHeight > wrapEl.offsetHeight) {
      var itemEl = wrapEl.querySelector('.uc-sidebar-item'); // scroll

      wrapEl.scroll({
        top: (_v - 1) * itemEl.offsetHeight
      });
    }
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$3, _extends({}, rest, {
    ref: wrapElRef,
    className: clsx__default['default']('uc-sidebar', className)
  }), items.map(function (item, idx) {
    var title = item.title,
        disabled = item.disabled;
    var prev = _v - 1 === idx;
    var next = _v + 1 === idx;
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: item.key || idx,
      className: clsx__default['default']('uc-sidebar-item', {
        active: idx === _v,
        disabled: disabled,
        prev: prev,
        next: next
      }),
      onClick: function onClick() {
        if (!disabled && idx !== _v) {
          onChange === null || onChange === void 0 ? void 0 : onChange(idx);

          _setV(idx);
        }
      }
    }, title);
  }));
};

var _excluded$16 = ["dataList", "dataRender", "onSort", "config", "className"];
var getClassName$c = prefixClassName('uc-sortable-list');
var StyledWrapper$4 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "SortableList__StyledWrapper",
  componentId: "sc-tk9dv2-0"
})([""]); //#endregion

var addKeyToList = function addKeyToList(list) {
  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (!item._key) {
        item._key = nanoid.nanoid(6);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return list;
};
/**
 * 拖拽排序列表
 */


var SortableList = function SortableList(props) {
  var _props$dataList = props.dataList,
      dataList = _props$dataList === void 0 ? [] : _props$dataList,
      dataRender = props.dataRender,
      onSort = props.onSort,
      config = props.config,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$16);

  var wrapElRef = React.useRef();
  var keyedList = addKeyToList(dataList);
  var ref = useLatest({
    list: keyedList,
    onSort: onSort,
    config: config
  });
  React.useEffect(function () {
    var el = wrapElRef.current;
    var st;

    if (el) {
      st = Sortable__default['default'].create(el, _objectSpread2(_objectSpread2({}, ref.current.config), {}, {
        dataIdAttr: 'data-id',
        store: {
          set: function set(ss) {
            var _ref$current$onSort, _ref$current;

            var ar = ss.toArray();
            var newList = ref.current.list.sort(function (a, b) {
              return ar.indexOf(a._key) - ar.indexOf(b._key);
            });
            (_ref$current$onSort = (_ref$current = ref.current).onSort) === null || _ref$current$onSort === void 0 ? void 0 : _ref$current$onSort.call(_ref$current, _toConsumableArray(newList));
          }
        }
      }));
    }

    return function () {
      st.destroy();
    };
  }, [ref]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper$4, _extends({}, rest, {
    ref: wrapElRef,
    className: clsx__default['default'](getClassName$c(), className)
  }), keyedList.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: item._key,
      "data-id": item._key,
      className: getClassName$c('item')
    }, dataRender(item));
  }));
};

SortableList.displayName = 'UC-SortableList';

var _excluded$17 = ["className", "style", "defaultValue", "value", "step", "min", "max", "disabled", "onChange", "digits"];
//#region  style
var StyledWrap$d = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Stepper__StyledWrap",
  componentId: "sc-r5zxer-0"
})(["width:110px;display:inline-flex;.uc-button{flex:none;width:28px;height:28px;padding:0;background-color:#f5f5f5;border:none;font-weight:normal;", "}.uc-input{flex:1;background-color:#f5f5f5;border:none;padding:0;height:28px;margin:0 2px;input{text-align:center;}&:hover:not(.disabled,.read-only){border:none;}&.focused:not(.disabled,.read-only){border:none;box-shadow:none;}}"], getThemeColorCss('color')); //#endregion

var limit = function limit(val, min, max) {
  var digits = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var v = val;

  if (typeof max === 'number') {
    v = Math.min(v, max);
  }

  if (typeof min === 'number') {
    v = Math.max(min, v);
  }

  return Number(v.toFixed(digits));
};
/** 步进器 */


var Stepper = function Stepper(props) {
  var className = props.className,
      style = props.style,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '0' : _props$defaultValue,
      value = props.value,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      min = props.min,
      max = props.max,
      disabled = props.disabled,
      onChange = props.onChange,
      digits = props.digits,
      rest = _objectWithoutProperties(props, _excluded$17);

  var _useState = React.useState(value || defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  var onAdd = React.useCallback(function () {
    setVal(function (v) {
      var n = Number(v) + step;
      return limit(n, min, max, digits);
    });
  }, [step, min, max, digits]);
  var onMinus = React.useCallback(function () {
    setVal(function (v) {
      var n = Number(v) - step;
      return limit(n, min, max, digits);
    });
  }, [step, min, max, digits]);
  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(Number(val));
  }, [val]);
  useUpdateEffect(function () {
    if (value != val) {
      setVal(value);
    }
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$d, _extends({}, rest, {
    style: style,
    className: clsx__default['default']('uc-stepper', className)
  }), /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(Icon$1, {
      type: "uc-icon-jian2"
    }),
    onClick: onMinus,
    disabled: disabled
  }), /*#__PURE__*/React__default['default'].createElement(Input, _extends({}, rest, {
    disabled: disabled,
    value: val + '',
    onChange: function onChange(v) {
      var num = Number(v);

      if (num === num) {
        setVal(v);
      }
    },
    onBlur: function onBlur() {
      setVal(limit(Number(val), min, max, digits));
    }
  })), /*#__PURE__*/React__default['default'].createElement(Button, {
    icon: /*#__PURE__*/React__default['default'].createElement(Icon$1, {
      type: "uc-icon-jia2"
    }),
    onClick: onAdd,
    disabled: disabled
  }));
};

Stepper.displayName = 'UC-Stepper';

var _excluded$18 = ["className", "style", "onChange", "cancelText", "onFocus", "onCancel", "onSearch"];
var getClassName$d = prefixClassName('uc-search-bar');
//#region  style
var StyledWrap$e = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "SearchBar__StyledWrap",
  componentId: "sc-192vbqd-0"
})(["display:flex;align-items:center;.uc-input{flex:1;background:#f7f7f7;border-radius:16px;padding:4px 12px;line-height:24px;.prefix{.uc-icon{font-size:1.143em;color:#8c8c8c;}}}.", "{flex:none;display:inline-block;margin-left:12px;cursor:pointer;user-select:none;}"], getClassName$d('cancel')); //#endregion

/** 搜索框 */

var SearchBar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      onChange = props.onChange,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _onFocus = props.onFocus,
      onCancel = props.onCancel,
      onSearch = props.onSearch,
      inputProps = _objectWithoutProperties(props, _excluded$18);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$e, {
    ref: ref,
    style: style,
    className: clsx__default['default'](getClassName$d(), className)
  }, /*#__PURE__*/React__default['default'].createElement(Input, _extends({
    prefix: /*#__PURE__*/React__default['default'].createElement(Icon$1, {
      type: "uc-icon-sousuo"
    }),
    onFocus: function onFocus(e) {
      setFocused(true);
      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
    },
    onChange: onChange,
    onPressEnter: onSearch
  }, inputProps)), focused && cancelText && /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$d('cancel'),
    onClick: function onClick() {
      setFocused(false);
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();
      onChange === null || onChange === void 0 ? void 0 : onChange('');
    }
  }, cancelText));
});
SearchBar.displayName = 'UC-SearchBar';

var _excluded$19 = ["className", "defaultValue", "value", "min", "max", "onChange", "digits"];

//#region  style
//#endregion
var limit$1 = function limit(val, min, max) {
  var digits = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var v = val;

  if (typeof max === 'number') {
    v = Math.min(v, max);
  }

  if (typeof min === 'number') {
    v = Math.max(min, v);
  }

  return v.toFixed(digits);
};
/** 数字输入框 */


var InputNumber = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      min = props.min,
      max = props.max,
      onChange = props.onChange,
      digits = props.digits,
      rest = _objectWithoutProperties(props, _excluded$19);

  var _useState = React.useState(value || defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  }, [val]);
  useUpdateEffect(function () {
    if (value != val) {
      setVal(value);
    }
  }, [value]);
  return /*#__PURE__*/React__default['default'].createElement(Input, _extends({
    ref: ref,
    className: clsx__default['default']('uc-input-number', className)
  }, rest, {
    value: String(val),
    onChange: function onChange(v) {
      var tv = v.trim();
      var num = Number(tv);

      if (num === num || tv === '-') {
        setVal(tv);
      }
    },
    onBlur: function onBlur() {
      var tv = String(val).trim();

      if (tv.length > 0) {
        var num = Number(tv);

        if (num === num) {
          setVal(limit$1(Number(val), min, max, digits));
        } else {
          setVal('');
        }
      }
    }
  }));
});
InputNumber.displayName = 'UC-InputNumber';

var _excluded$1a = ["className", "children", "columnGap", "rowGap", "columnCount"];
var StyledWrap$f = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Masonry__StyledWrap",
  componentId: "sc-dzi4mt-0"
})(["display:flex;width:100%;overflow:hidden;.uc-masonry-col{display:flex;flex-direction:column;}"]);

/** 瀑布流布局 */
var Masonry = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      _props$columnGap = props.columnGap,
      columnGap = _props$columnGap === void 0 ? 10 : _props$columnGap,
      _props$rowGap = props.rowGap,
      rowGap = _props$rowGap === void 0 ? 10 : _props$rowGap,
      _props$columnCount = props.columnCount,
      columnCount = _props$columnCount === void 0 ? 2 : _props$columnCount,
      rest = _objectWithoutProperties(props, _excluded$1a);

  var wrapElRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return wrapElRef.current;
  });
  var forceUpdate = useForceUpdate();
  var colRef = React.useRef({
    colWidth: 'auto'
  });
  useIsomorphicLayoutEffect(function () {
    var getColWidth = function getColWidth() {
      var wrapEl = wrapElRef.current;

      if (wrapEl) {
        colRef.current.colWidth = (wrapEl.offsetWidth - (columnCount - 1) * columnGap) / columnCount;
        forceUpdate();
      }
    };

    getColWidth();
    var tGetColWidth = throttle(getColWidth);
    window.addEventListener('resize', tGetColWidth);
    return function () {
      window.removeEventListener('resize', tGetColWidth);
    };
  }, [columnCount, columnGap, forceUpdate]);
  var columnCountArr = new Array(columnCount);
  var items = React__default['default'].Children.toArray(children);

  for (var i = 0; i < items.length; i++) {
    var colIndex = i % columnCount;

    if (!columnCountArr[colIndex]) {
      columnCountArr[colIndex] = [];
    }

    columnCountArr[colIndex].push(items[i]);
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$f, _extends({
    ref: wrapElRef
  }, rest, {
    className: clsx__default['default'](className, 'uc-masonry')
  }), /*#__PURE__*/React__default['default'].createElement(Space, {
    align: "flex-start",
    className: "uc-masonry-col-wrap",
    size: columnGap
  }, columnCountArr.map(function (items, i) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: "uc-masonry-col",
      key: i,
      style: {
        width: colRef.current.colWidth
      }
    }, items.map(function (item, idx) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: item.key || idx,
        className: clsx__default['default']('uc-masonry-item'),
        style: {
          marginBottom: rowGap
        }
      }, item);
    }));
  })));
});
Masonry.displayName = 'UC-Masonry';

var _excluded$1b = ["className", "showIndicator", "indicatorStyle", "indicatorClass", "fillColor", "children"];
var getClassName$e = prefixClassName('uc-scroll-box');
//#region  style
var StyledWrap$g = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "ScrollBox__StyledWrap",
  componentId: "sc-1lxfvtx-0"
})(["position:relative;overflow:hidden;width:100%;.", "{display:flex;flex-wrap:nowrap;overflow-x:scroll;height:100%;width:100%;&::-webkit-scrollbar{display:none;}*{flex:none;}}.", "{position:relative;overflow:hidden;border-radius:2px;position:absolute;left:50%;transform:translateX(-50%);bottom:12px;height:3px;width:24px;background-color:#f0f0f0;visibility:hidden;}.", "{position:absolute;left:0;width:0;border-radius:inherit;height:100%;", " transition:left ", "ms ease;}"], getClassName$e('body'), getClassName$e('track'), getClassName$e('fill'), getThemeColorCss('background-color'), animationFast); //#endregion

/** 带指示器的水平滚动盒子 */

var ScrollBox = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      showIndicator = props.showIndicator,
      indicatorStyle = props.indicatorStyle,
      indicatorClass = props.indicatorClass,
      fillColor = props.fillColor,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$1b);

  var bodyRef = React.useRef();
  var fillRef = React.useRef();
  var showIndicatorRef = useLatest(showIndicator);
  var onScroll = useThrottle(function () {
    if (!showIndicatorRef.current) {
      return;
    }

    var body = bodyRef.current;
    var fill = fillRef.current;
    var track = fill.parentNode;
    var trackWidth = track.offsetWidth;

    if (body.scrollWidth > body.offsetWidth) {
      track.style.display = '';
      track.style.visibility = 'unset';
      var distance = body.scrollWidth - body.offsetWidth;
      fill.style.width = Math.floor(body.offsetWidth * trackWidth / body.scrollWidth) + 'px';

      if (body.scrollLeft >= 0) {
        fill.style.left = body.scrollLeft * (trackWidth - fill.offsetWidth) / distance + 'px';
      }
    } else {
      track.style.display = 'none';
    }
  }, 16);
  useMount(onScroll);
  useEventListener(bodyRef, 'scroll', onScroll);
  useEventListener(function () {
    return window;
  }, 'resize', onScroll);
  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$g, _extends({}, rest, {
    ref: ref,
    className: clsx__default['default'](getClassName$e(), className)
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$e('body'),
    ref: bodyRef
  }, children), showIndicator && /*#__PURE__*/React__default['default'].createElement("div", {
    className: clsx__default['default'](getClassName$e('track'), indicatorClass),
    style: indicatorStyle
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$e('fill'),
    style: {
      backgroundColor: fillColor
    },
    ref: fillRef
  })));
});
ScrollBox.displayName = 'UC-ScrollBox';

var _excluded$1c = ["children", "className", "ratio"];
var StyledWrap$h = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "AspectRatio__StyledWrap",
  componentId: "sc-1dp29mr-0"
})(["position:relative;&::before{height:0;content:'';display:block;padding-bottom:", ";}img{max-width:100%;object-fit:cover;}*{box-sizing:border-box;overflow:hidden;position:absolute;inset:0px;display:flex;align-items:center;width:100%;height:100%;}"], function (props) {
  return 1 * 100 / props.ratio + '%';
});
/** 宽高比 */

var AspectRatio = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      _props$ratio = props.ratio,
      ratio = _props$ratio === void 0 ? 4 / 3 : _props$ratio,
      rest = _objectWithoutProperties(props, _excluded$1c);

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$h, _extends({}, rest, {
    ref: ref,
    ratio: ratio,
    className: clsx__default['default']('uc-aspect-ratio', className)
  }), children);
});
AspectRatio.displayName = 'UC-AspectRatio';

var _excluded$1d = ["className", "style", "size", "gap", "iteration", "color"];

var _templateObject$4;
var getClassName$f = prefixClassName('uc-dot-spin');

var normalizePx = function normalizePx(n) {
  if (typeof n === 'number') {
    return n + 'px';
  } else {
    return n;
  }
};

var dance = styled.keyframes(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n    0% {\n      transform: translateY(0);\n    }\n\n    25% {\n      transform: translateY(-1em);\n    }\n\n    50% {\n      transform: translateY(0);\n    }\n\n    75% {\n      transform: translateY(1em);\n    }\n\n    100% {\n      transform: translateY(0);\n    }\n"])));
var StyledLoader$1 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "DotSpin__StyledLoader",
  componentId: "sc-10gb303-0"
})(["display:inline-flex;vertical-align:middle;.", "{width:1em;height:1em;border-radius:50%;animation:600ms linear 200ms ", " normal both running ", ";&:nth-child(2){animation-delay:360ms;}&:nth-child(3){animation-delay:520ms;}&:not(:first-child){margin-left:", ";}}"], getClassName$f('item'), function (_ref) {
  var $iteration = _ref.$iteration;
  return $iteration;
}, dance, function (_ref2) {
  var $gap = _ref2.$gap;
  return normalizePx($gap);
});
/** 加载指示器,三个跳动的小球 */

var DotSpin = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _props$size = props.size,
      size = _props$size === void 0 ? 3 : _props$size,
      _props$gap = props.gap,
      gap = _props$gap === void 0 ? 4 : _props$gap,
      _props$iteration = props.iteration,
      iteration = _props$iteration === void 0 ? 1 : _props$iteration,
      _props$color = props.color,
      color = _props$color === void 0 ? '#d9d9d9' : _props$color,
      rest = _objectWithoutProperties(props, _excluded$1d);

  return /*#__PURE__*/React__default['default'].createElement(StyledLoader$1, _extends({}, rest, {
    ref: ref,
    $gap: gap,
    $iteration: iteration,
    className: clsx__default['default'](className, getClassName$f()),
    style: _objectSpread2({
      fontSize: size
    }, style)
  }), [1, 2, 3].map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: item,
      className: getClassName$f('item'),
      style: {
        background: color
      }
    });
  }));
});
DotSpin.displayName = 'UC-DotSpin';

var _excluded$1e = ["className", "duration", "trackColor", "color", "size", "strokeWidth", "percent"];

var _templateObject$5;
var getClassName$g = prefixClassName('uc-circle-spin');

var ani = function ani(props) {
  return styled.keyframes(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n0% {\n     stroke-dasharray: ", ",\n       ", ";\n     stroke-dashoffset: 0;\n   }\n\n   100% {\n    stroke-dasharray: ", ",\n       ", ";\n     stroke-dashoffset: -339;\n   }\n"])), props.$percent * 339 / 100, 339 - props.$percent * 339 / 100, props.$percent * 339 / 100, 339 - props.$percent * 339 / 100);
};

var StyledLoader$2 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "CircleSpin__StyledLoader",
  componentId: "sc-cn0z0p-0"
})(["display:inline-flex;vertical-align:middle;.", "{animation:", " ", "ms linear infinite;}"], getClassName$g('circle'), function (props) {
  return ani(props);
}, function (_ref) {
  var $duration = _ref.$duration;
  return $duration;
});
/** 圆圈spin */

var CircleSpin = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 1000 : _props$duration,
      _props$trackColor = props.trackColor,
      trackColor = _props$trackColor === void 0 ? '#d9d9d9' : _props$trackColor,
      _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      _props$size = props.size,
      size = _props$size === void 0 ? 32 : _props$size,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 25 : _props$percent,
      rest = _objectWithoutProperties(props, _excluded$1e);

  var elRef = React__default['default'].useRef();
  React__default['default'].useImperativeHandle(ref, function () {
    return elRef.current;
  });

  if (typeof percent !== 'number' || percent <= 0 || percent >= 100) {
    throw new Error('percent 必须是0-100之间的数字');
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledLoader$2, _extends({
    ref: elRef,
    $duration: duration,
    $percent: percent
  }, rest, {
    className: clsx__default['default'](className, getClassName$g())
  }), /*#__PURE__*/React__default['default'].createElement("svg", {
    viewBox: "0 0 120 120",
    width: size,
    height: size,
    fill: "none",
    strokeWidth: Math.min(strokeWidth, 8)
  }, /*#__PURE__*/React__default['default'].createElement("circle", {
    r: "54",
    cx: "60",
    cy: "60",
    stroke: trackColor
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    className: getClassName$g('circle'),
    r: "54",
    cx: "60",
    cy: "60",
    stroke: color,
    strokeLinecap: "round",
    transform: "rotate(-90,60,60)"
  })));
});
CircleSpin.displayName = 'UC-CircleSpin';

var _excluded$1f = ["className", "style", "size", "color", "strokeWidth"];

var _templateObject$6, _templateObject2;
var circle$1 = styled.keyframes(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n    0% {\n        stroke-dasharray: 1,200;\n        stroke-dashoffset: 0\n    }\n\n    50% {\n        stroke-dasharray: 90,150;\n        stroke-dashoffset: -40\n    }\n\n    to {\n        stroke-dasharray: 90,150;\n        stroke-dashoffset: -120\n    }\n"])));
var rotate = styled.keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n   0% {\n        transform: rotate(0)\n    }\n\n    to {\n        transform: rotate(360deg)\n    }\n"])));
var SVGProps$3 = {
  width: '1em',
  height: '1em',
  fill: 'none'
};
var StyledLoader$3 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "RoundSpin__StyledLoader",
  componentId: "sc-evbanp-0"
})(["display:inline-flex;vertical-align:middle;animation:", " 2s linear infinite;svg{circle{animation:", " 1.5s ease-in-out infinite;}}"], rotate, circle$1);
/** 圈圈 spin */

var RoundSpin = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _props$size = props.size,
      size = _props$size === void 0 ? 30 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 3 : _props$strokeWidth,
      rest = _objectWithoutProperties(props, _excluded$1f);

  var elRef = React__default['default'].useRef();
  React__default['default'].useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledLoader$3, _extends({}, rest, {
    style: _objectSpread2({
      fontSize: size
    }, style),
    ref: elRef,
    className: clsx__default['default'](className, 'uc-round-spin')
  }), /*#__PURE__*/React__default['default'].createElement("svg", _extends({}, SVGProps$3, {
    stroke: color,
    viewBox: "25 25 50 50"
  }), /*#__PURE__*/React__default['default'].createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    strokeLinecap: "round",
    style: {
      strokeWidth: strokeWidth
    }
  })));
});
RoundSpin.displayName = 'UC-RoundSpin';

var _excluded$1g = ["className", "style", "size", "color"];

var _templateObject$7;
var rotate$1 = styled.keyframes(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n    0% {\n        transform: rotate(0)\n    }\n\n    to {\n        transform: rotate(360deg)\n    }\n"])));
var getClassName$h = prefixClassName('uc-flower-spin');
var StyledLoader$4 = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "ClockSpin__StyledLoader",
  componentId: "sc-11a5fov-0"
})(["display:inline-flex;vertical-align:middle;position:relative;animation:", " 0.8s steps(12) infinite;.", "{position:absolute;top:0;left:0;width:100%;height:100%;&::before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:' ';}&:nth-child(1){transform:rotate(0deg);opacity:1;}&:nth-child(2){transform:rotate(30deg);opacity:", ";}&:nth-child(3){transform:rotate(60deg);opacity:", ";}&:nth-child(4){transform:rotate(90deg);opacity:", ";}&:nth-child(5){transform:rotate(120deg);opacity:", ";}&:nth-child(6){transform:rotate(150deg);opacity:", ";}&:nth-child(7){transform:rotate(180deg);opacity:", ";}&:nth-child(8){transform:rotate(210deg);opacity:", ";}&:nth-child(9){transform:rotate(240deg);opacity:", ";}&:nth-child(10){transform:rotate(270deg);opacity:", ";}&:nth-child(11){transform:rotate(300deg);opacity:", ";}&:nth-child(12){transform:rotate(330deg);opacity:", ";}}"], rotate$1, getClassName$h('item'), 1 - 0.75 / 12, 1 - 0.75 / 12 * 2, 1 - 0.75 / 12 * 3, 1 - 0.75 / 12 * 4, 1 - 0.75 / 12 * 5, 1 - 0.75 / 12 * 6, 1 - 0.75 / 12 * 7, 1 - 0.75 / 12 * 8, 1 - 0.75 / 12 * 9, 1 - 0.75 / 12 * 10, 1 - 0.75 / 12 * 11);
var items = new Array(12).fill(0);
/** 菊花spin */

var FlowerSpin = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _props$size = props.size,
      size = _props$size === void 0 ? 30 : _props$size,
      _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      rest = _objectWithoutProperties(props, _excluded$1g);

  return /*#__PURE__*/React__default['default'].createElement(StyledLoader$4, _extends({
    style: _objectSpread2({
      color: color,
      width: size,
      height: size
    }, style),
    ref: ref
  }, rest, {
    className: clsx__default['default'](getClassName$h(), className)
  }), items.map(function (v, i) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: i,
      className: getClassName$h('item')
    });
  }));
});
FlowerSpin.displayName = 'UC-FlowerSpin';

/**
 * 定时器setInterval
 *
 * @param {Func} fn, fn返回false 计时器停止
 * @param {number} delay
 */
function useInterval(fn, delay) {
  var fnRef = useLatest(fn);
  React.useEffect(function () {
    if (typeof delay !== 'number' || delay < 0) return;
    var timer = setInterval(function () {
      var rt = fnRef.current();

      if (rt === false) {
        clearInterval(timer);
      }
    }, delay);
    return function () {
      clearInterval(timer);
    };
  }, [delay]);
}

var _excluded$1h = ["millisec", "value", "onFinish", "className", "children"];
var getClassName$i = prefixClassName('uc-countdown');

var getCountdown = function getCountdown(value) {
  if (!value) {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };
  }

  var diff = value.getTime() - Date.now();

  if (diff < 0) {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };
  }

  var day = Math.floor(diff / 86400000);
  var hour = Math.floor(diff % 86400000 / 3600000);
  var min = Math.floor(diff % 3600000 / 60000);
  var sec = Math.floor(diff % 60000 / 1000);
  var millisecond = Math.floor(diff % 60000 % 1000);
  return {
    day: day,
    hour: hour,
    min: min,
    sec: sec,
    millisec: millisecond
  };
};
/**
 * 倒计时
 * @param props
 * @returns
 */


var Countdown = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var millisec = props.millisec,
      value = props.value,
      onFinish = props.onFinish,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$1h);

  var _useState = React.useState(function () {
    return getCountdown(value);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var onFinishRef = useLatest(onFinish);
  var valueRef = useLatest(value);
  var finishedRef = React.useRef(false);
  useInterval(function () {
    if (!valueRef.current || finishedRef.current) {
      return false; // clear timer
    }

    var diff = valueRef.current.getTime() - Date.now();

    if (diff < 0) {
      var _onFinishRef$current;

      finishedRef.current = true;
      setDate({
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
        millisec: 0
      });
      (_onFinishRef$current = onFinishRef.current) === null || _onFinishRef$current === void 0 ? void 0 : _onFinishRef$current.call(onFinishRef);
      return;
    }

    setDate(getCountdown(valueRef.current));
  }, millisec ? 1 : 1000);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: ref,
    className: clsx__default['default'](getClassName$i(), className)
  }, rest), typeof children === 'function' && children(date));
});
Countdown.displayName = 'Countdown';

var _excluded$1i = ["className", "size", "prizeList", "round", "duration", "pointer", "borderColor", "onStart", "onEnd"];
var getClassName$j = prefixClassName('uc-turntable');
var StyledWrap$i = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Turntable__StyledWrap",
  componentId: "sc-1jrp0l7-0"
})(["position:relative;overflow:hidden;margin:0 auto;.", "{position:absolute;left:0;top:0;width:100%;height:100%;}.", "{position:absolute;left:50%;top:50%;z-index:99;transform:translate(-43.75%,-50%);}.", "{position:absolute;left:10px;top:20px;width:calc(100% - 20px);font-size:12px;text-align:center;color:#ff5722;}.", "{position:absolute;left:calc(50% - 30px / 2);top:60px;width:30px;height:30px;img{display:inline-block;width:100%;height:100%;}}.", "{position:absolute;left:25%;top:0;width:50%;height:50%;}.", "{position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:center bottom;}"], getClassName$j('inner'), getClassName$j('pointer'), getClassName$j('name'), getClassName$j('img'), getClassName$j('prize'), getClassName$j('item'));
var prizeBgColors = ['rgb(255, 231, 149)', 'rgb(255, 247, 223)', 'rgb(255, 231, 149)', 'rgb(255, 247, 223)', 'rgb(255, 231, 149)', 'rgb(255, 247, 223)'];
/** 转盘抽奖 */

var Turntable = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      _props$size = props.size,
      size = _props$size === void 0 ? 300 : _props$size,
      _props$prizeList = props.prizeList,
      prizeList = _props$prizeList === void 0 ? [] : _props$prizeList,
      _props$round = props.round,
      round = _props$round === void 0 ? 5 : _props$round,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 5 : _props$duration,
      pointer = props.pointer,
      _props$borderColor = props.borderColor,
      borderColor = _props$borderColor === void 0 ? '#ff9800' : _props$borderColor,
      onStart = props.onStart,
      onEnd = props.onEnd,
      rest = _objectWithoutProperties(props, _excluded$1i); // 用来锁定转盘，避免同时多次点击转动


  var lock = React.useRef(false); // 开始转动的角度

  var startRotateDegree = React.useRef(0); // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上

  var rotateAngle = React.useRef(0);
  var rotateTransition = React.useRef('');
  var wrapRef = React.useRef();
  var innerRef = React.useRef();
  var canvasDomRef = React.useRef();
  var forceUpdate = useForceUpdate();
  React.useImperativeHandle(ref, function () {
    return wrapRef.current;
  }); // 根据index计算每一格要旋转的角度的样式

  var getRotateAngle = function getRotateAngle(index) {
    var angle = 360 / prizeList.length * index + 180 / prizeList.length;
    return {
      transform: "rotate(".concat(angle, "deg)")
    };
  };

  useMount(function () {
    var prizeNum = prizeList.length; // 开始绘画

    var canvas = canvasDomRef.current;
    var luckdraw = wrapRef.current;
    var dpr = window.devicePixelRatio || 1;
    dpr = dpr >= 1 ? Math.ceil(dpr) : 1;

    if (canvas && luckdraw) {
      var canvasW = dpr * size; // 画板的高度

      var canvasH = dpr * size; // 画板的宽度

      canvas.width = canvasW;
      canvas.height = canvasH;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      var ctx = canvas.getContext('2d'); // translate方法重新映射画布上的 (0,0) 位置

      ctx.translate(0, canvasH); // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的

      ctx.rotate(-90 * Math.PI / 180); // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小

      var outRadius = canvasW / 2 - 1; // 圆环的内圆的半径

      var innerRadius = 0;
      var baseAngle = Math.PI * 2 / prizeNum; // 每个奖项所占角度数

      ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色

      ctx.strokeStyle = borderColor; // 设置画图线的颜色

      for (var _index = 0; _index < prizeNum; _index++) {
        var angle = _index * baseAngle;

        if (prizeList[_index]['color']) {
          ctx.fillStyle = prizeList[_index]['color'];
        } else {
          ctx.fillStyle = prizeBgColors[_index];
        }

        ctx.beginPath();
        ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false);
        ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
      }

      ctx.scale(dpr, dpr);
    }
  }); // 转动起来

  var rotate = function rotate(index) {
    if (index >= 0 && index < prizeList.length) {
      var rotateAngleValue = startRotateDegree.current + round * 360 + 360 - (180 / prizeList.length + 360 / prizeList.length * index) - startRotateDegree.current % 360;
      startRotateDegree.current = rotateAngleValue;
      rotateAngle.current = "rotate(".concat(rotateAngleValue, "deg)");
      rotateTransition.current = "transform ".concat(duration, "s cubic-bezier(0.250, 0.460, 0.455, 0.995)");
      forceUpdate();
      setTimeout(function () {
        // end
        lock.current = false;
        onEnd === null || onEnd === void 0 ? void 0 : onEnd(index);
      }, duration * 1000 + 500);
    }
  };

  var startTurns = function startTurns() {
    if (lock.current) {
      return false;
    }

    lock.current = true;
    onStart(rotate);
  };

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$i, _extends({}, rest, {
    className: clsx__default['default'](getClassName$j(), className),
    ref: wrapRef,
    style: {
      width: size,
      height: size
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$j('inner'),
    ref: innerRef,
    style: {
      transform: rotateAngle.current,
      transition: rotateTransition.current
    }
  }, /*#__PURE__*/React__default['default'].createElement("canvas", {
    ref: canvasDomRef
  }, "\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E"), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$j('prize')
  }, prizeList.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: index,
      className: getClassName$j('item'),
      style: getRotateAngle(index)
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$j('name')
    }, item.name), /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$j('img')
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      src: item.img
    })));
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: getClassName$j('pointer'),
    onClick: startTurns
  }, pointer));
});
Turntable.displayName = 'UC-Turntable';

var _excluded$1j = ["className", "pointer", "prizeList", "round", "speed", "onStart", "onEnd", "gap"];
var getClassName$k = prefixClassName('uc-sudoku');
var seq = [0, 1, 2, 5, 8, 7, 6, 3]; // turn sequence
// key top-down,left-right ,value: prizeList seq

var map = {
  0: 0,
  1: 1,
  2: 2,
  3: 7,
  5: 3,
  6: 6,
  7: 5,
  8: 4
};
var StyledWrap$j = /*#__PURE__*/styled__default['default'](Space).withConfig({
  displayName: "Sudoku__StyledWrap",
  componentId: "sc-1a4co3k-0"
})(["width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;.", "{color:#fff;background-color:#005cff;border-radius:8px;display:flex;align-items:center;justify-content:center;width:33%;&.active{background-size:100% 100%;background:rgba(0,0,0,0.1);color:#000;font-weight:bolder;}}.", "{font-size:14px;text-align:center;img{width:35px;}}img{max-width:100%;}.", "{cursor:pointer;-webkit-tap-highlight-color:transparent;}"], getClassName$k('item'), getClassName$k('prize'), getClassName$k('pointer'));
/** 9宫格抽奖 */

var Sudoku = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var className = props.className,
      pointer = props.pointer,
      _props$prizeList = props.prizeList,
      prizeList = _props$prizeList === void 0 ? [] : _props$prizeList,
      _props$round = props.round,
      round = _props$round === void 0 ? 30 : _props$round,
      _props$speed = props.speed,
      speed = _props$speed === void 0 ? 150 : _props$speed,
      onStart = props.onStart,
      onEnd = props.onEnd,
      _props$gap = props.gap,
      gap = _props$gap === void 0 ? 4 : _props$gap,
      rest = _objectWithoutProperties(props, _excluded$1j);

  var forceUpdate = useForceUpdate();
  var lock = React.useRef(false); // 转动到的商品的index

  var index = React.useRef(-1); // 转动次数

  var steps = React.useRef(0); // 初始速度

  var speedRef = React.useRef(speed);
  var roundRef = React.useRef(round);
  var timer = React.useRef(0);

  var _useState = React.useState('33%'),
      _useState2 = _slicedToArray(_useState, 2),
      w = _useState2[0],
      setW = _useState2[1];

  var wrapElRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return wrapElRef.current;
  });
  var resize = React.useCallback(function () {
    var wrapEl = wrapElRef.current;
    var w = Math.floor((wrapEl.offsetWidth - gap * 2) / 3);
    setW(w);
  }, []);
  useMount(resize);
  useEventListener(function () {
    return window;
  }, 'resize', resize);

  var rollup = function rollup(winIndex) {
    if (winIndex >= 0 && winIndex < 8) {
      steps.current += 1;
      var idx = index.current;
      var count = seq.length;
      idx += 1;

      if (idx > count - 1) {
        idx = 0;
      }

      index.current = idx;
      forceUpdate();
      getPrize(winIndex);
    }
  };

  var getPrize = function getPrize(winIndex) {
    if (steps.current > roundRef.current && winIndex === index.current) {
      clearTimeout(timer.current); // reset

      index.current = -1;
      timer.current = 0;
      steps.current = 0;
      speedRef.current = speed;
      roundRef.current = round;
      setTimeout(function () {
        index.current = seq[winIndex];
        lock.current = false;
        onEnd === null || onEnd === void 0 ? void 0 : onEnd(winIndex);
      }, 100);
    } else {
      if (steps.current < roundRef.current) {
        speedRef.current -= 4;
      } else {
        speedRef.current += 20;
      } // start to roll


      timer.current = window.setTimeout(function () {
        return rollup(winIndex);
      }, speedRef.current);
    }
  };

  var start = function start() {
    if (!lock.current) {
      lock.current = true;
      onStart(rollup);
    }
  };

  var renderBlock = function renderBlock(index) {
    var item = prizeList[index];
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$k('prize')
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$k('img')
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      alt: "prize",
      src: item.img
    })), /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$k('name')
    }, item.name));
  };

  if (!prizeList || prizeList.length !== 8) {
    // bad data
    return null;
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledWrap$j, _extends({}, rest, {
    className: (getClassName$k(), className),
    ref: wrapElRef,
    size: gap
  }), [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (v) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: v,
      style: {
        height: w,
        width: w
      },
      className: clsx__default['default'](getClassName$k('item'), {
        active: v === seq[index.current]
      })
    }, v === 4 ? /*#__PURE__*/React__default['default'].createElement("div", {
      className: getClassName$k('pointer'),
      onClick: start
    }, pointer) : renderBlock(map[v]));
  }));
});
Sudoku.displayName = 'UC-Sudoku';

var _excluded$1k = ["x", "y", "className", "children", "onRelease", "onPress"];
var StyledWrap$k = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "FloatingBubble__StyledWrap",
  componentId: "sc-1y55mct-0"
})(["width:48px;height:48px;border-radius:50%;position:fixed;display:flex;justify-content:center;align-items:center;overflow:hidden;cursor:pointer;user-select:none;touch-action:none;transition:all 0.15s ease;-webkit-tap-highlight-color:transparent;"]);
/** 浮动气泡  */

var FloatingBubble = function FloatingBubble(props) {
  var _props$x = props.x,
      x = _props$x === void 0 ? true : _props$x,
      _props$y = props.y,
      y = _props$y === void 0 ? true : _props$y,
      className = props.className,
      children = props.children,
      onRelease = props.onRelease,
      onPress = props.onPress,
      rest = _objectWithoutProperties(props, _excluded$1k);

  var ref = React__default['default'].useRef();
  var vRef = React.useRef({
    x: 0,
    y: 0
  });
  return /*#__PURE__*/React__default['default'].createElement(TouchElement, {
    ref: ref,
    onTouchStart: function onTouchStart() {
      ref.current.style.opacity = '0.8';
      ref.current.style.transitionDuration = '0s';
      onPress === null || onPress === void 0 ? void 0 : onPress(ref.current);
    },
    onTouchEnd: function onTouchEnd() {
      ref.current.style.opacity = '1';
      ref.current.style.transitionDuration = '0.15s';

      if (!x) {
        vRef.current.x = 0;
      }

      if (!y) {
        vRef.current.y = 0;
      }

      if (!x || !y) {
        ref.current.style.transform = "translate3d(".concat(vRef.current.x, "px,").concat(vRef.current.y, "px,0)");
        setTimeout(function () {
          onRelease === null || onRelease === void 0 ? void 0 : onRelease(ref.current);
        }, 150);
      } else {
        onRelease === null || onRelease === void 0 ? void 0 : onRelease(ref.current);
      }
    },
    onPressMove: function onPressMove(_ref) {
      var deltaX = _ref.deltaX,
          deltaY = _ref.deltaY;
      vRef.current.x += deltaX;
      vRef.current.y += deltaY;

      if (x || y) {
        ref.current.style.transform = "translate3d(".concat(vRef.current.x, "px,").concat(vRef.current.y, "px,0)");
      }
    }
  }, /*#__PURE__*/React__default['default'].createElement(StyledWrap$k, _extends({
    className: clsx__default['default']('uc-floating-bubble', className)
  }, rest), children));
};

FloatingBubble.displayName = 'UC-FloatingBubble';

var StyledLoading = /*#__PURE__*/styled__default['default'].div.withConfig({
  displayName: "Loading__StyledLoading",
  componentId: "sc-li19rl-0"
})(["display:inline-flex;width:100%;height:100%;box-sizing:border-box;align-items:center;justify-content:center;font-size:15px;"]);
/**
 * 加载中, 只有静态调用
 *
 * @return {*}
 */

var Loading = function Loading() {
  return null;
};

var renderSpin = function renderSpin(type, size) {
  switch (type) {
    case 'ball':
      {
        return /*#__PURE__*/React__default['default'].createElement(BallSpin, null);
      }

    case 'spin':
      {
        return /*#__PURE__*/React__default['default'].createElement(Spin, null);
      }

    case 'round':
      {
        return /*#__PURE__*/React__default['default'].createElement(RoundSpin, {
          size: size
        });
      }

    case 'clock':
      {
        return /*#__PURE__*/React__default['default'].createElement(FlowerSpin, {
          size: size
        });
      }
  }
};
/**
 * @description 显示Loading 提示
 * @param {React.ReactNode} text
 * @param {Config} config
 */


var show$1 = function show(text) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    type: 'ball',
    gap: 6,
    spinSize: 32
  };
  var _config$type = config.type,
      type = _config$type === void 0 ? 'ball' : _config$type,
      _config$gap = config.gap,
      gap = _config$gap === void 0 ? 6 : _config$gap,
      _config$spinSize = config.spinSize,
      spinSize = _config$spinSize === void 0 ? 32 : _config$spinSize,
      containerStyle = config.containerStyle;
  var size = text ? 120 : 80;
  Toast.show({
    content: /*#__PURE__*/React__default['default'].createElement(StyledLoading, null, text ? /*#__PURE__*/React__default['default'].createElement(Space, {
      direction: "vertical",
      size: gap
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      style: {
        fontSize: spinSize,
        display: 'inline-flex'
      }
    }, renderSpin(type, spinSize)), text) : /*#__PURE__*/React__default['default'].createElement("span", {
      style: {
        fontSize: spinSize,
        display: 'inline-flex'
      }
    }, renderSpin(type, spinSize))),
    duration: 24 * 60 * 60 * 1000,
    style: _objectSpread2({
      width: size,
      height: size,
      padding: 0
    }, containerStyle)
  });
};

var hide = function hide() {
  Toast.hide();
};

var Loading$1 = attachPropertiesToComponent(Loading, {
  /** 显示loading */
  show: show$1,

  /** 隐藏loading */
  hide: hide
});

/**
 * 返回防抖函数
 *
 * @param {F} fn fn改变debounce fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
var useDebounce = function useDebounce(fn) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 180;
  var fnDeps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var fnRef = useLatest(fn); // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useMemo(function () {
    return debounce(function () {
      var _fnRef$current;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
    }, timeout);
  }, fnDeps);
};

/**
 * 获取验证码倒计时
 *
 * @param {number} [defaultCountdown=60] 默认从60秒开始倒计时
 * @param {boolean} [defaultStarted=false] 默认开始否
 * @return {*} {
  countdown: number;
  isRunning: boolean;
  isReStarted: boolean;
  start: () => void;
  reset: () => void;
}
 */
var useCountdown = function useCountdown() {
  var defaultCountdown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
  var defaultStarted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _useState = React.useState(defaultCountdown),
      _useState2 = _slicedToArray(_useState, 2),
      countdown = _useState2[0],
      setCountdown = _useState2[1];

  var _useState3 = React.useState(defaultStarted),
      _useState4 = _slicedToArray(_useState3, 2),
      started = _useState4[0],
      setStarted = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isReStarted = _useState6[0],
      setIsReStarted = _useState6[1];

  var unmountRef = React.useRef(false);
  var start = React.useCallback(function () {
    setStarted(true);
  }, []);
  var reset = React.useCallback(function () {
    setStarted(false);
  }, []);
  useUnmount(function () {
    unmountRef.current = true;
  });
  React.useEffect(function () {
    if (countdown > 0 && started) {
      setTimeout(function () {
        if (!unmountRef.current) {
          setCountdown(function (cd) {
            return --cd;
          });
        }
      }, 1000);

      if (countdown === 1) {
        // mark the end of this round
        setIsReStarted(true);
      }
    } else {
      setStarted(false);
      setCountdown(defaultCountdown);
    }
  }, [countdown, started, defaultCountdown]);
  return {
    countdown: countdown,
    isRunning: started,
    start: start,
    reset: reset,
    isReStarted: isReStarted
  };
};

function gid() {
  return nanoid.nanoid(12);
}

/**
 * 数据列表,包含增删改排序
 *
 * @template T
 * @param {Array<T>} [arr=[]]
 * @return {*}  {List<T>}
 */
var useList = function useList() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _useState = React.useState(arr),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = React.useState(function () {
    var len = arr.length;
    var r = [];

    for (var i = 0; i < len; i++) {
      r[i] = gid();
    }

    return r;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      keys = _useState4[0],
      setKeys = _useState4[1];

  var add = function add(value) {
    setList([].concat(_toConsumableArray(list), [value]));
    setKeys([].concat(_toConsumableArray(keys), [gid()]));
  };

  var remove = function remove(index) {
    if (index >= 0 && index < list.length) {
      list.splice(index, 1);
      keys.splice(index, 1);
      setList(_toConsumableArray(list));
      setKeys(_toConsumableArray(keys));
    }
  };

  var update = function update(index, value) {
    if (index >= 0 && index < list.length) {
      list[index] = value;
      setList(_toConsumableArray(list));
    }
  };

  var moveUp = function moveUp(index) {
    if (index > 0) {
      var t = list[index - 1];
      list[index - 1] = list[index];
      list[index] = t;
      setList(_toConsumableArray(list));
    }
  };

  var moveDown = function moveDown(index) {
    if (index < list.length - 1) {
      var t = list[index + 1];
      list[index + 1] = list[index];
      list[index] = t;
      setList(_toConsumableArray(list));
    }
  };

  return {
    list: list,
    add: add,
    remove: remove,
    keys: keys,
    update: update,
    moveUp: moveUp,
    moveDown: moveDown
  };
};

/**
 * 定时器setTimeout
 *
 * @param {Func} fn
 * @param {number} delay
 */
function useTimeout(fn, delay) {
  var fnRef = useLatest(fn);
  React.useEffect(function () {
    if (typeof delay !== 'number' || delay < 0) return;
    var timer = setTimeout(function () {
      fnRef.current();
    }, delay);
    return function () {
      clearTimeout(timer);
    };
  }, [delay]);
}

/**
 * 注册mount,unmount回调
 *
 * @param {*} mount
 * @param {*} [unmount]
 */

var useLifecycles = function useLifecycles(mount, unmount) {
  React.useEffect(function () {
    if (mount) {
      mount();
    }

    return function () {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

/**
 * 刷新或关闭浏览器执行
 *
 * @param {string} [message]
 * @param {(boolean | (() => boolean))} [enabled=true]
 */

var useBeforeUnload = function useBeforeUnload(message) {
  var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var handler = React.useCallback(function (event) {
    var finalEnabled = typeof enabled === 'function' ? enabled() : true;

    if (!finalEnabled) {
      return;
    }

    event.preventDefault();

    if (message) {
      event.returnValue = message;
    }

    return message;
  }, [enabled, message]);
  useEventListener(function () {
    return window;
  }, 'beforeunload', handler);
};

var defaultInitOptions = {
  interpolation: {
    escapeValue: false // not needed for react!!

  }
};
/**
 * 初始化i18n
 * @param options i18next InitOptions
 */

var initI18n = function initI18n(options) {
  i18n__default['default'].use(reactI18next.initReactI18next) // bind react-i18next to the instance
  .init(_objectSpread2(_objectSpread2({}, defaultInitOptions), options));
};

var _excluded$1l = ["children", "label", "name"],
    _excluded2$3 = ["children", "gap", "requiredMark", "layout", "className", "onFinishFailed", "toastError", "scrollIntoErrorField", "cellProps"];
var StyledCell$1 = /*#__PURE__*/styled__default['default'](Cell).withConfig({
  displayName: "Form__StyledCell",
  componentId: "sc-ytccqm-0"
})(["padding-left:unset;.cell-inner{padding:0;}"]);

var FormItem = function FormItem(props) {
  var _ref = React.useContext(FormContext) || {},
      requiredMark = _ref.requiredMark,
      cellProps = _ref.cellProps;

  var children = props.children,
      label = props.label,
      name = props.name,
      fieldProps = _objectWithoutProperties(props, _excluded$1l);

  var required = false;

  if ('rules' in fieldProps) {
    var rules = fieldProps.rules;

    if (Array.isArray(rules)) {
      required = rules.some(function (rule) {
        if (rule && _typeof(rule) === 'object' && rule.required) {
          return true;
        }

        return false;
      });
    }
  }

  return /*#__PURE__*/React__default['default'].createElement(StyledCell$1, _extends({
    label: label,
    "data-name": name,
    required: requiredMark && required
  }, cellProps, {
    lineColor: "transparent"
  }), name ? /*#__PURE__*/React__default['default'].createElement(RcForm.Field, _extends({
    name: name
  }, fieldProps), children) : /*#__PURE__*/React__default['default'].isValidElement(children) ? /*#__PURE__*/React__default['default'].cloneElement(children, fieldProps) : children);
};
/** 排列方式 */


var FormContext = /*#__PURE__*/React__default['default'].createContext(null);
/** 表单 */

var Form = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
  var children = props.children,
      _props$gap = props.gap,
      gap = _props$gap === void 0 ? 16 : _props$gap,
      _props$requiredMark = props.requiredMark,
      requiredMark = _props$requiredMark === void 0 ? true : _props$requiredMark,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'vertical' : _props$layout,
      className = props.className,
      _onFinishFailed = props.onFinishFailed,
      toastError = props.toastError,
      scrollIntoErrorField = props.scrollIntoErrorField,
      cellProps = props.cellProps,
      rest = _objectWithoutProperties(props, _excluded2$3);

  return /*#__PURE__*/React__default['default'].createElement(RcForm__default['default'], _extends({}, rest, {
    ref: ref,
    className: clsx__default['default']('uc-form', className),
    onFinishFailed: function onFinishFailed(errInfo) {
      if (toastError) {
        Toast.show(errInfo.errorFields[0].errors[0]);
      }

      if (scrollIntoErrorField) {
        var name = errInfo.errorFields[0].name[0];
        var el = document.querySelector("[data-name=".concat(name, "]"));

        if (el instanceof HTMLElement) {
          el === null || el === void 0 ? void 0 : el.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }

      _onFinishFailed === null || _onFinishFailed === void 0 ? void 0 : _onFinishFailed(errInfo);
    }
  }), /*#__PURE__*/React__default['default'].createElement(FormContext.Provider, {
    value: {
      requiredMark: requiredMark,
      cellProps: cellProps
    }
  }, /*#__PURE__*/React__default['default'].createElement(Space, {
    direction: layout,
    wrap: true,
    size: gap,
    style: {
      width: '100%'
    }
  }, children)));
});
FormItem.displayName = 'UC-FormItem';
Form.displayName = 'UC-Form';
var Form$1 = attachPropertiesToComponent(Form, {
  /** 表单项 */
  Item: FormItem
});

Object.defineProperty(exports, 'CSSTransition', {
  enumerable: true,
  get: function () {
    return reactTransitionGroup.CSSTransition;
  }
});
Object.defineProperty(exports, 'Transition', {
  enumerable: true,
  get: function () {
    return reactTransitionGroup.Transition;
  }
});
Object.defineProperty(exports, 'TransitionGroup', {
  enumerable: true,
  get: function () {
    return reactTransitionGroup.TransitionGroup;
  }
});
Object.defineProperty(exports, 'ServerStyleSheet', {
  enumerable: true,
  get: function () {
    return styled.ServerStyleSheet;
  }
});
Object.defineProperty(exports, 'StyleSheetManager', {
  enumerable: true,
  get: function () {
    return styled.StyleSheetManager;
  }
});
Object.defineProperty(exports, 'createGlobalStyle', {
  enumerable: true,
  get: function () {
    return styled.createGlobalStyle;
  }
});
Object.defineProperty(exports, 'css', {
  enumerable: true,
  get: function () {
    return styled.css;
  }
});
Object.defineProperty(exports, 'isStyledComponent', {
  enumerable: true,
  get: function () {
    return styled.isStyledComponent;
  }
});
Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function () {
    return styled.keyframes;
  }
});
Object.defineProperty(exports, 'styled', {
  enumerable: true,
  get: function () {
    return styled__default['default'];
  }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () {
    return styled.useTheme;
  }
});
Object.defineProperty(exports, 'clsx', {
  enumerable: true,
  get: function () {
    return clsx__default['default'];
  }
});
Object.defineProperty(exports, 'animated', {
  enumerable: true,
  get: function () {
    return web.animated;
  }
});
Object.defineProperty(exports, 'easings', {
  enumerable: true,
  get: function () {
    return web.easings;
  }
});
Object.defineProperty(exports, 'useSpring', {
  enumerable: true,
  get: function () {
    return web.useSpring;
  }
});
Object.defineProperty(exports, 'Popover', {
  enumerable: true,
  get: function () {
    return Popover__default['default'];
  }
});
Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function () {
    return Popover.Tooltip;
  }
});
Object.defineProperty(exports, 'Touch', {
  enumerable: true,
  get: function () {
    return Touch__default['default'];
  }
});
Object.defineProperty(exports, 'Sortable', {
  enumerable: true,
  get: function () {
    return Sortable__default['default'];
  }
});
Object.defineProperty(exports, 'nanoid', {
  enumerable: true,
  get: function () {
    return nanoid.nanoid;
  }
});
Object.defineProperty(exports, 'i18n', {
  enumerable: true,
  get: function () {
    return i18n__default['default'];
  }
});
Object.defineProperty(exports, 'useTranslation', {
  enumerable: true,
  get: function () {
    return reactI18next.useTranslation;
  }
});
exports.ActionSheet = ActionSheet;
exports.Affix = Affix;
exports.AlertDialog = AlertDialog$1;
exports.AnimationElement = AnimationElement;
exports.AspectRatio = AspectRatio;
exports.AutoCenter = AutoCenter;
exports.Avatar = Avatar;
exports.BackTop = BackTop;
exports.Badge = Badge;
exports.BallSpin = BallSpin;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Cell = Cell;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.CircleSpin = CircleSpin;
exports.ClockSpin = FlowerSpin;
exports.Collapse = Collapse$1;
exports.CopyToClipboard = CopyToClipboard;
exports.Countdown = Countdown;
exports.DatePicker = DatePicker;
exports.Divider = Divider;
exports.DotSpin = DotSpin;
exports.Drag = Drag;
exports.Drawer = Drawer;
exports.Empty = Empty;
exports.ErrorBoundary = ErrorBoundary;
exports.FileInputTrigger = FileInputTrigger;
exports.FloatingBubble = FloatingBubble;
exports.Form = Form$1;
exports.HairLineBox = HairLineBox;
exports.Icon = Icon$1;
exports.IconArrow = IconArrow;
exports.ImageViewer = ImageViewer;
exports.IndexList = IndexList;
exports.Input = Input;
exports.InputNumber = InputNumber;
exports.LazyLoadElement = LazyLoadElement;
exports.LazyLoadImage = LazyLoadImage;
exports.Loading = Loading$1;
exports.Mask = Mask;
exports.Masonry = Masonry;
exports.Modal = Modal;
exports.NoticeBar = NoticeBar;
exports.NoticeList = NoticeList;
exports.Notify = Notify;
exports.NumberKeyboard = NumberKeyboard;
exports.NumberKeyboardBase = NumberKeyboardBase;
exports.Pagination = Pagination;
exports.PasswordInput = PasswordInput;
exports.Picker = Picker;
exports.PickerView = PickerView;
exports.PopConfirm = PopConfirm;
exports.PopMenu = PopMenu;
exports.Popup = Popup;
exports.ProgressBar = ProgressBar;
exports.ProgressCircle = ProgressCircle;
exports.PullToRefresh = PullToRefresh;
exports.Pullup = Pullup;
exports.QRCode = QRCode;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.Rate = Rate;
exports.Result = Result;
exports.Ripple = Ripple;
exports.RollingNumber = RollingNumber;
exports.RoundSpin = RoundSpin;
exports.SafeArea = SafeArea;
exports.ScrollBox = ScrollBox;
exports.SearchBar = SearchBar;
exports.SideBar = SideBar;
exports.Signature = Signature;
exports.Skeleton = Skeleton;
exports.SkeletonElement = SkeletonElement;
exports.Slide = Slide;
exports.SortableList = SortableList;
exports.Space = Space;
exports.Spin = Spin;
exports.Stepper = Stepper;
exports.Steps = Steps;
exports.Sudoku = Sudoku;
exports.SwipeAction = SwipeAction;
exports.Switch = Switch;
exports.Tabs = Tabs$1;
exports.Text = Text;
exports.ThemeProvider = ThemeProvider;
exports.Toast = Toast;
exports.TouchElement = TouchElement;
exports.TransitionElement = TransitionElement;
exports.Turntable = Turntable;
exports.WaitLoading = WaitLoading;
exports.WaterMark = WaterMark;
exports.Waypoint = Waypoint;
exports.copy = copy;
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.flatArray = flatArray;
exports.flatSimpleArray = flatSimpleArray;
exports.getScrollParent = getScrollParent;
exports.getThemeColor = getThemeColor;
exports.getThemeColorCss = getThemeColorCss;
exports.initI18n = initI18n;
exports.isBrowser = isBrowser;
exports.isMobile = isMobile;
exports.isTouch = isTouch;
exports.loadResource = loadResource;
exports.observe = observe;
exports.throttle = throttle;
exports.uniqArray = uniqArray;
exports.unobserve = unobserve;
exports.useBeforeUnload = useBeforeUnload;
exports.useClickAway = useClickAway;
exports.useCountdown = useCountdown;
exports.useDebounce = useDebounce;
exports.useEventListener = useEventListener;
exports.useForceUpdate = useForceUpdate;
exports.useInViewport = useInViewport;
exports.useInterval = useInterval;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
exports.useLatest = useLatest;
exports.useLifecycles = useLifecycles;
exports.useList = useList;
exports.useMount = useMount;
exports.usePrevious = usePrevious;
exports.useThrottle = useThrottle;
exports.useTimeout = useTimeout;
exports.useUnmount = useUnmount;
exports.useUpdateEffect = useUpdateEffect;
exports.useUpdateLayoutEffect = useUpdateLayoutEffect;
