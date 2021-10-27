function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var allViews = ['century', 'decade', 'year', 'month'];
export var isMinDate = function isMinDate(props, propName, componentName) {
  var _a = props,
      _b = propName,
      minDate = _a[_b];

  if (!minDate) {
    return null;
  }

  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `" + propName + "` of type `" + _typeof(minDate) + "` supplied to `" + componentName + "`, expected instance of `Date`.");
  }

  var maxDate = props.maxDate;

  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `" + propName + "` of type `" + _typeof(minDate) + "` supplied to `" + componentName + "`, minDate cannot be larger than maxDate.");
  }

  return null;
};
export var isMaxDate = function isMaxDate(props, propName, componentName) {
  var _a = props,
      _b = propName,
      maxDate = _a[_b];

  if (!maxDate) {
    return null;
  }

  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `" + propName + "` of type `" + _typeof(maxDate) + "` supplied to `" + componentName + "`, expected instance of `Date`.");
  }

  var minDate = props.minDate;

  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `" + propName + "` of type `" + _typeof(maxDate) + "` supplied to `" + componentName + "`, maxDate cannot be smaller than minDate.");
  }

  return null;
};
export var isView = function isView(props, propName, componentName) {
  var _a = props,
      _b = propName,
      view = _a[_b];
  var views = props.views;
  var allowedViews = views || allViews;

  if (view !== undefined && allowedViews.indexOf(view) === -1) {
    return new Error("Invalid prop `" + propName + "` of value `" + view + "` supplied to `" + componentName + "`, expected one of [" + allowedViews.map(function (a) {
      return "\"" + a + "\"";
    }).join(', ') + "].");
  } // Everything is fine


  return null;
};

isView.isRequired = function (props, propName, componentName) {
  var _a = props,
      _b = propName,
      view = _a[_b];

  if (!view) {
    return new Error("The prop `" + propName + "` is marked as required in `" + componentName + "`, but its value is `" + view + "`.");
  }

  return isView(props, propName, componentName);
}; // export const tileGroupProps = {
//   activeStartDate: PropTypes.instanceOf(Date).isRequired,
//   hover: PropTypes.instanceOf(Date),
//   locale: PropTypes.string,
//   maxDate: isMaxDate,
//   minDate: isMinDate,
//   onClick: PropTypes.func,
//   onMouseOver: PropTypes.func,
//   tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
//   tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
//   value: isValue,
//   valueType: PropTypes.string,
// };
// export const tileProps = {
//   activeStartDate: PropTypes.instanceOf(Date).isRequired,
//   classes: PropTypes.arrayOf(PropTypes.string).isRequired,
//   date: PropTypes.instanceOf(Date).isRequired,
//   locale: PropTypes.string,
//   maxDate: isMaxDate,
//   minDate: isMinDate,
//   onClick: PropTypes.func,
//   onMouseOver: PropTypes.func,
//   style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
//   tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
//   tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
//   tileDisabled: PropTypes.func,
// };