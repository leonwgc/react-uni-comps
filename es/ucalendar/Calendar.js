function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Navigation from './Calendar/Navigation';
import CenturyView from './CenturyView';
import DecadeView from './DecadeView';
import YearView from './YearView';
import MonthView from './MonthView';
import { getBegin, getBeginNext, getEnd, getValueRange } from './shared/dates';
import { isCalendarType, isClassName, isMaxDate, isMinDate, isRef, isValue, isView } from './shared/propTypes';
import { between } from './shared/utils';
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(8.64e15);
var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];

var allValueTypes = __spreadArray(__spreadArray([], allViews.slice(1)), ['day']);

function toDate(value) {
  if (value instanceof Date) {
    return value;
  }

  return new Date(value);
}
/**
 * Returns views array with disallowed values cut off.
 */


function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
}
/**
 * Determines whether a given view is allowed with currently applied settings.
 */


function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */


function getView(view, minDetail, maxDetail) {
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }

  return maxDetail;
}
/**
 * Returns value type that can be returned with currently applied settings.
 */


function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
}

function getValue(value, index) {
  if (!value) {
    return null;
  }

  var rawValue = Array.isArray(value) && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  var valueDate = toDate(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: " + value);
  }

  return valueDate;
}

function getDetailValue(_a, index) {
  var value = _a.value,
      minDate = _a.minDate,
      maxDate = _a.maxDate,
      maxDetail = _a.maxDetail;
  var valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  var valueType = getValueType(maxDetail);
  var detailValueFrom = [getBegin, getEnd][index](valueType, valuePiece);
  return between(detailValueFrom, minDate, maxDate);
}

var getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

var getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

var getDetailValueArray = function getDetailValueArray(args) {
  var value = args.value;

  if (Array.isArray(value)) {
    return value;
  }

  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};

function getActiveStartDate(props) {
  var maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value: value,
    minDate: minDate,
    maxDate: maxDate,
    maxDetail: maxDetail
  }) || new Date();
  return getBegin(rangeType, valueFrom);
}

function getInitialActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      defaultActiveStartDate = props.defaultActiveStartDate,
      defaultValue = props.defaultValue,
      defaultView = props.defaultView,
      maxDetail = props.maxDetail,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view,
      otherProps = __rest(props, ["activeStartDate", "defaultActiveStartDate", "defaultValue", "defaultView", "maxDetail", "minDetail", "value", "view"]);

  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;

  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }

  return getActiveStartDate(__assign({
    maxDetail: maxDetail,
    minDetail: minDetail,
    value: value || defaultValue,
    view: view || defaultView
  }, otherProps));
}

var getIsSingleValue = function getIsSingleValue(value) {
  return value && [].concat(value).length === 1;
};

var Calendar =
/** @class */
function (_super) {
  __extends(Calendar, _super);

  function Calendar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      /* eslint-disable react/destructuring-assignment */
      activeStartDate: _this.props.defaultActiveStartDate,
      value: _this.props.defaultValue,
      view: _this.props.defaultView
      /* eslint-enable react/destructuring-assignment */

    };

    _this.setStateAndCallCallbacks = function (nextState, event, callback) {
      var _a = _this,
          previousActiveStartDate = _a.activeStartDate,
          previousView = _a.view;
      var _b = _this.props,
          allowPartialRange = _b.allowPartialRange,
          onActiveStartDateChange = _b.onActiveStartDateChange,
          onChange = _b.onChange,
          onViewChange = _b.onViewChange,
          selectRange = _b.selectRange;
      var prevArgs = {
        activeStartDate: previousActiveStartDate,
        view: previousView
      };

      _this.setState(nextState, function () {
        var args = {
          action: nextState.action,
          activeStartDate: nextState.activeStartDate || _this.activeStartDate,
          value: nextState.value || _this.value,
          view: nextState.view || _this.view
        };

        function shouldUpdate(key) {
          return (// Key must exist, and…
            key in nextState && ( // …key changed from undefined to defined or the other way around, or…
            _typeof(nextState[key]) !== _typeof(prevArgs[key]) || ( // …value changed.
            nextState[key] instanceof Date ? nextState[key].getTime() !== prevArgs[key].getTime() : nextState[key] !== prevArgs[key]))
          );
        }

        if (shouldUpdate('activeStartDate')) {
          if (onActiveStartDateChange) onActiveStartDateChange(args);
        }

        if (shouldUpdate('view')) {
          if (onViewChange) onViewChange(args);
        }

        if (shouldUpdate('value')) {
          if (onChange) {
            if (selectRange) {
              var isSingleValue = getIsSingleValue(nextState.value);

              if (!isSingleValue) {
                onChange(nextState.value, event);
              } else if (allowPartialRange) {
                onChange([nextState.value], event);
              }
            } else {
              onChange(nextState.value, event);
            }
          }
        }

        if (callback) callback(args);
      });
    };
    /**
     * Called when the user uses navigation buttons.
     */


    _this.setActiveStartDate = function (nextActiveStartDate, action) {
      _this.setStateAndCallCallbacks({
        action: action,
        activeStartDate: nextActiveStartDate
      });
    };

    _this.drillDown = function (nextActiveStartDate, event) {
      if (!_this.drillDownAvailable) {
        return;
      }

      _this.onClickTile(nextActiveStartDate, event);

      var _a = _this,
          view = _a.view,
          views = _a.views;
      var onDrillDown = _this.props.onDrillDown;
      var nextView = views[views.indexOf(view) + 1];

      _this.setStateAndCallCallbacks({
        action: 'drillDown',
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, undefined, onDrillDown);
    };

    _this.drillUp = function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _a = _this,
          activeStartDate = _a.activeStartDate,
          view = _a.view,
          views = _a.views;
      var onDrillUp = _this.props.onDrillUp;
      var nextView = views[views.indexOf(view) - 1];
      var nextActiveStartDate = getBegin(nextView, activeStartDate);

      _this.setStateAndCallCallbacks({
        action: 'drillUp',
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, undefined, onDrillUp);
    };

    _this.onChange = function (value, event) {
      var selectRange = _this.props.selectRange;

      _this.onClickTile(value, event);

      var nextValue;

      if (selectRange) {
        // Range selection turned on
        var _a = _this,
            previousValue = _a.value,
            valueType = _a.valueType;

        if (!getIsSingleValue(previousValue)) {
          // Value has 0 or 2 elements - either way we're starting a new array
          // First value
          nextValue = getBegin(valueType, value);
        } else {
          // Second value
          nextValue = getValueRange(valueType, previousValue, value);
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);
      }

      var nextActiveStartDate = getActiveStartDate(__assign(__assign({}, _this.props), {
        value: nextValue
      }));
      event.persist();

      _this.setStateAndCallCallbacks({
        action: 'onChange',
        activeStartDate: nextActiveStartDate,
        value: nextValue
      }, event);
    };

    _this.onClickTile = function (value, event) {
      var view = _this.view;
      var _a = _this.props,
          onClickDay = _a.onClickDay,
          onClickDecade = _a.onClickDecade,
          onClickMonth = _a.onClickMonth,
          onClickYear = _a.onClickYear;

      var callback = function () {
        switch (view) {
          case 'century':
            return onClickDecade;

          case 'decade':
            return onClickYear;

          case 'year':
            return onClickMonth;

          case 'month':
            return onClickDay;

          default:
            throw new Error("Invalid view: " + view + ".");
        }
      }();

      if (callback) callback(value, event);
    };

    _this.onMouseOver = function (value) {
      _this.setState(function (prevState) {
        if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
          return null;
        }

        return {
          hover: value
        };
      });
    };

    _this.onMouseLeave = function () {
      _this.setState({
        hover: null
      });
    };

    return _this;
  }

  Object.defineProperty(Calendar.prototype, "activeStartDate", {
    get: function get() {
      var activeStartDateProps = this.props.activeStartDate;
      var activeStartDateState = this.state.activeStartDate;
      return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "value", {
    get: function get() {
      var _a = this.props,
          selectRange = _a.selectRange,
          valueProps = _a.value;
      var valueState = this.state.value; // In the middle of range selection, use value from state

      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }

      return valueProps !== undefined ? valueProps : valueState;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "valueType", {
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "view", {
    get: function get() {
      var _a = this.props,
          minDetail = _a.minDetail,
          maxDetail = _a.maxDetail,
          viewProps = _a.view;
      var viewState = this.state.view;
      return getView(viewProps || viewState, minDetail, maxDetail);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "views", {
    get: function get() {
      var _a = this.props,
          minDetail = _a.minDetail,
          maxDetail = _a.maxDetail;
      return getLimitedViews(minDetail, maxDetail);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "hover", {
    get: function get() {
      var selectRange = this.props.selectRange;
      var hover = this.state.hover;
      return selectRange ? hover : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "drillDownAvailable", {
    get: function get() {
      var _a = this,
          view = _a.view,
          views = _a.views;

      return views.indexOf(view) < views.length - 1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Calendar.prototype, "drillUpAvailable", {
    get: function get() {
      var _a = this,
          view = _a.view,
          views = _a.views;

      return views.indexOf(view) > 0;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Gets current value in a desired format.
   */

  Calendar.prototype.getProcessedValue = function (value) {
    var _a = this.props,
        minDate = _a.minDate,
        maxDate = _a.maxDate,
        maxDetail = _a.maxDetail,
        returnValue = _a.returnValue;

    var processFunction = function () {
      switch (returnValue) {
        case 'start':
          return getDetailValueFrom;

        case 'end':
          return getDetailValueTo;

        case 'range':
          return getDetailValueArray;

        default:
          throw new Error('Invalid returnValue.');
      }
    }();

    return processFunction({
      value: value,
      minDate: minDate,
      maxDate: maxDate,
      maxDetail: maxDetail
    });
  };

  Calendar.prototype.renderContent = function (next) {
    var _a = this,
        currentActiveStartDate = _a.activeStartDate,
        onMouseOver = _a.onMouseOver,
        valueType = _a.valueType,
        value = _a.value,
        view = _a.view;

    var _b = this.props,
        calendarType = _b.calendarType,
        locale = _b.locale,
        maxDate = _b.maxDate,
        minDate = _b.minDate,
        selectRange = _b.selectRange,
        tileClassName = _b.tileClassName,
        tileContent = _b.tileContent,
        tileDisabled = _b.tileDisabled;
    var hover = this.hover;
    var activeStartDate = next ? getBeginNext(view, currentActiveStartDate) : getBegin(view, currentActiveStartDate);
    var onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
    var commonProps = {
      activeStartDate: activeStartDate,
      hover: hover,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      onClick: onClick,
      onMouseOver: selectRange ? onMouseOver : null,
      tileClassName: tileClassName,
      tileContent: tileContent,
      tileDisabled: tileDisabled,
      value: value,
      valueType: valueType
    };

    switch (view) {
      case 'century':
        {
          var formatYear = this.props.formatYear;
          return /*#__PURE__*/React.createElement(CenturyView, __assign({
            formatYear: formatYear
          }, commonProps));
        }

      case 'decade':
        {
          var formatYear = this.props.formatYear;
          return /*#__PURE__*/React.createElement(DecadeView, __assign({
            formatYear: formatYear
          }, commonProps));
        }

      case 'year':
        {
          var _c = this.props,
              formatMonth = _c.formatMonth,
              formatMonthYear = _c.formatMonthYear;
          return /*#__PURE__*/React.createElement(YearView, __assign({
            formatMonth: formatMonth,
            formatMonthYear: formatMonthYear
          }, commonProps));
        }

      case 'month':
        {
          var _d = this.props,
              formatDay = _d.formatDay,
              formatLongDate = _d.formatLongDate,
              formatShortWeekday = _d.formatShortWeekday,
              onClickWeekNumber = _d.onClickWeekNumber,
              showDoubleView = _d.showDoubleView,
              showFixedNumberOfWeeks = _d.showFixedNumberOfWeeks,
              showNeighboringMonth = _d.showNeighboringMonth,
              showWeekNumbers = _d.showWeekNumbers;
          var onMouseLeave = this.onMouseLeave;
          return /*#__PURE__*/React.createElement(MonthView, __assign({
            calendarType: calendarType,
            formatDay: formatDay,
            formatLongDate: formatLongDate,
            formatShortWeekday: formatShortWeekday,
            onClickWeekNumber: onClickWeekNumber,
            onMouseLeave: selectRange ? onMouseLeave : null,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks || showDoubleView,
            showNeighboringMonth: showNeighboringMonth,
            showWeekNumbers: showWeekNumbers
          }, commonProps));
        }

      default:
        throw new Error("Invalid view: " + view + ".");
    }
  };

  Calendar.prototype.renderNavigation = function () {
    var showNavigation = this.props.showNavigation;

    if (!showNavigation) {
      return null;
    }

    var _a = this,
        activeStartDate = _a.activeStartDate,
        view = _a.view,
        views = _a.views;

    var _b = this.props,
        formatMonthYear = _b.formatMonthYear,
        formatYear = _b.formatYear,
        locale = _b.locale,
        maxDate = _b.maxDate,
        minDate = _b.minDate,
        navigationAriaLabel = _b.navigationAriaLabel,
        navigationAriaLive = _b.navigationAriaLive,
        navigationLabel = _b.navigationLabel,
        next2AriaLabel = _b.next2AriaLabel,
        next2Label = _b.next2Label,
        nextAriaLabel = _b.nextAriaLabel,
        nextLabel = _b.nextLabel,
        prev2AriaLabel = _b.prev2AriaLabel,
        prev2Label = _b.prev2Label,
        prevAriaLabel = _b.prevAriaLabel,
        prevLabel = _b.prevLabel,
        showDoubleView = _b.showDoubleView;
    return /*#__PURE__*/React.createElement(Navigation, {
      activeStartDate: activeStartDate,
      drillUp: this.drillUp,
      formatMonthYear: formatMonthYear,
      formatYear: formatYear,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      navigationAriaLabel: navigationAriaLabel,
      navigationAriaLive: navigationAriaLive,
      navigationLabel: navigationLabel,
      next2AriaLabel: next2AriaLabel,
      next2Label: next2Label,
      nextAriaLabel: nextAriaLabel,
      nextLabel: nextLabel,
      prev2AriaLabel: prev2AriaLabel,
      prev2Label: prev2Label,
      prevAriaLabel: prevAriaLabel,
      prevLabel: prevLabel,
      setActiveStartDate: this.setActiveStartDate,
      showDoubleView: showDoubleView,
      view: view,
      views: views
    });
  };

  Calendar.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        inputRef = _a.inputRef,
        selectRange = _a.selectRange,
        showDoubleView = _a.showDoubleView;

    var _b = this,
        onMouseLeave = _b.onMouseLeave,
        value = _b.value;

    var valueArray = [].concat(value);
    return /*#__PURE__*/React.createElement("div", {
      className: clsx(baseClassName, selectRange && valueArray.length === 1 && baseClassName + "--selectRange", showDoubleView && baseClassName + "--doubleView", className),
      ref: inputRef
    }, this.renderNavigation(), /*#__PURE__*/React.createElement("div", {
      className: baseClassName + "__viewContainer",
      onBlur: selectRange ? onMouseLeave : null,
      onMouseLeave: selectRange ? onMouseLeave : null
    }, this.renderContent(), showDoubleView && this.renderContent(true)));
  };

  return Calendar;
}(Component);

export default Calendar;
Calendar.defaultProps = {
  maxDate: defaultMaxDate,
  maxDetail: 'month',
  minDate: defaultMinDate,
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true
};
var isActiveStartDate = PropTypes.instanceOf(Date);
var isLooseValue = PropTypes.oneOfType([PropTypes.string, isValue]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: PropTypes.bool,
  calendarType: isCalendarType,
  className: isClassName,
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isLooseValue,
  defaultView: isView,
  formatDay: PropTypes.func,
  formatLongDate: PropTypes.func,
  formatMonth: PropTypes.func,
  formatMonthYear: PropTypes.func,
  formatShortWeekday: PropTypes.func,
  formatYear: PropTypes.func,
  inputRef: isRef,
  locale: PropTypes.string,
  maxDate: isMaxDate,
  maxDetail: PropTypes.oneOf(allViews),
  minDate: isMinDate,
  minDetail: PropTypes.oneOf(allViews),
  navigationAriaLabel: PropTypes.string,
  navigationAriaLive: PropTypes.oneOf(['off', 'polite', 'assertive']),
  navigationLabel: PropTypes.func,
  next2AriaLabel: PropTypes.string,
  next2Label: PropTypes.node,
  nextAriaLabel: PropTypes.string,
  nextLabel: PropTypes.node,
  onActiveStartDateChange: PropTypes.func,
  onChange: PropTypes.func,
  onClickDay: PropTypes.func,
  onClickDecade: PropTypes.func,
  onClickMonth: PropTypes.func,
  onClickWeekNumber: PropTypes.func,
  onClickYear: PropTypes.func,
  onDrillDown: PropTypes.func,
  onDrillUp: PropTypes.func,
  onViewChange: PropTypes.func,
  prev2AriaLabel: PropTypes.string,
  prev2Label: PropTypes.node,
  prevAriaLabel: PropTypes.string,
  prevLabel: PropTypes.node,
  returnValue: PropTypes.oneOf(['start', 'end', 'range']),
  selectRange: PropTypes.bool,
  showDoubleView: PropTypes.bool,
  showFixedNumberOfWeeks: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNeighboringMonth: PropTypes.bool,
  showWeekNumbers: PropTypes.bool,
  tileClassName: PropTypes.oneOfType([PropTypes.func, isClassName]),
  tileContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  tileDisabled: PropTypes.func,
  value: isLooseValue,
  view: isView
};