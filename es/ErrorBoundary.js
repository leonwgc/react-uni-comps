var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

import React from 'react';
/**
 * 错误边界
 *
 * @export
 * @class ErrorBoundary
 * @extends {React.Component}
 */

var ErrorBoundary =
/** @class */
function (_super) {
  __extends(ErrorBoundary, _super);

  function ErrorBoundary() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function (error) {
    return {
      hasError: true,
      error: error
    };
  };

  ErrorBoundary.prototype.componentDidCatch = function (error, info) {
    var _a, _b;

    (_b = (_a = this.props).onError) === null || _b === void 0 ? void 0 : _b.call(_a, error, info);
  };

  ErrorBoundary.prototype.render = function () {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(React.Component);

export default ErrorBoundary;