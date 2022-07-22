import { __extends } from "tslib";
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
      return this.props.fallback;
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(React.Component);

export default ErrorBoundary;