var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import CalendarMonthView from './MonthView';
import * as locales from './locale';
import utils from './utils';
import { getThemeColorCss } from '../themeHelper';
import { boxShadow } from '../vars';
import color from 'color'; //#region styled

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fff;\n  user-select: none;\n\n  ul {\n    list-style-type: disc;\n\n    li {\n      display: inline-block;\n      width: 14.28571%;\n      text-align: center;\n      vertical-align: middle;\n    }\n  }\n\n  .head {\n    display: flex;\n    flex-wrap: wrap;\n    color: #909090;\n    box-shadow: ", ";\n    font-size: 14px;\n    margin: 0;\n    padding: 0 15px;\n    list-style-type: disc;\n\n    .item {\n      height: 40px;\n      line-height: 40px;\n    }\n  }\n\n  .body {\n    padding: 10px 0;\n    overflow: auto;\n    max-height: 50vh;\n\n    .month {\n      padding: 0 15px;\n      color: #343434;\n\n      &:before {\n        content: attr(title);\n        display: block;\n        margin: 15px auto;\n        font-size: 17px;\n        font-weight: 500;\n        padding-left: 15px;\n      }\n\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      .day {\n        margin: 10px 0;\n        position: relative;\n        font-size: 16px;\n        cursor: pointer;\n      }\n      .day__content {\n        width: 30px;\n        height: 30px;\n        background-color: transparent;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 auto;\n      }\n      .day.firstday-1 {\n        margin-left: 14.28571%;\n      }\n      .day.firstday-2 {\n        margin-left: 28.57142%;\n      }\n      .day.firstday-3 {\n        margin-left: 42.85713%;\n      }\n      .day.firstday-4 {\n        margin-left: 57.14284%;\n      }\n      .day.firstday-5 {\n        margin-left: 71.42855%;\n      }\n      .day.firstday-6 {\n        margin-left: 85.71426%;\n      }\n      .day--today .day__content {\n        background-color: ", ";\n        ", "\n      }\n\n      .day--selected {\n        .day__content {\n          background-color: ", ";\n          color: #fff;\n          ", "\n        }\n      }\n\n      .day--disabled {\n        cursor: auto;\n      }\n      .day--disabled .day__content {\n        color: #bcbcbc;\n      }\n\n      .day--range {\n        background-color: ", ";\n        ", "\n\n        .day__content {\n          background-color: transparent;\n        }\n      }\n\n      .day.range-start.range-end {\n        background-image: none;\n      }\n      .day.range-start:not(.range-end):not(.d6):not(:last-child) {\n        background-image: linear-gradient(\n          to right,\n          transparent 0,\n          transparent 50%,\n          ", " 50%\n        );\n      }\n      .day.range-end:not(.range-start):not(.d7):not(:first-child) {\n        background-image: linear-gradient(\n          to left,\n          transparent 0,\n          transparent 50%,\n          ", " 50%\n        );\n      }\n    }\n  }\n"], ["\n  background-color: #fff;\n  user-select: none;\n\n  ul {\n    list-style-type: disc;\n\n    li {\n      display: inline-block;\n      width: 14.28571%;\n      text-align: center;\n      vertical-align: middle;\n    }\n  }\n\n  .head {\n    display: flex;\n    flex-wrap: wrap;\n    color: #909090;\n    box-shadow: ", ";\n    font-size: 14px;\n    margin: 0;\n    padding: 0 15px;\n    list-style-type: disc;\n\n    .item {\n      height: 40px;\n      line-height: 40px;\n    }\n  }\n\n  .body {\n    padding: 10px 0;\n    overflow: auto;\n    max-height: 50vh;\n\n    .month {\n      padding: 0 15px;\n      color: #343434;\n\n      &:before {\n        content: attr(title);\n        display: block;\n        margin: 15px auto;\n        font-size: 17px;\n        font-weight: 500;\n        padding-left: 15px;\n      }\n\n      ul {\n        margin: 0;\n        padding: 0;\n      }\n\n      .day {\n        margin: 10px 0;\n        position: relative;\n        font-size: 16px;\n        cursor: pointer;\n      }\n      .day__content {\n        width: 30px;\n        height: 30px;\n        background-color: transparent;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0 auto;\n      }\n      .day.firstday-1 {\n        margin-left: 14.28571%;\n      }\n      .day.firstday-2 {\n        margin-left: 28.57142%;\n      }\n      .day.firstday-3 {\n        margin-left: 42.85713%;\n      }\n      .day.firstday-4 {\n        margin-left: 57.14284%;\n      }\n      .day.firstday-5 {\n        margin-left: 71.42855%;\n      }\n      .day.firstday-6 {\n        margin-left: 85.71426%;\n      }\n      .day--today .day__content {\n        background-color: ", ";\n        ", "\n      }\n\n      .day--selected {\n        .day__content {\n          background-color: ", ";\n          color: #fff;\n          ", "\n        }\n      }\n\n      .day--disabled {\n        cursor: auto;\n      }\n      .day--disabled .day__content {\n        color: #bcbcbc;\n      }\n\n      .day--range {\n        background-color: ", ";\n        ", "\n\n        .day__content {\n          background-color: transparent;\n        }\n      }\n\n      .day.range-start.range-end {\n        background-image: none;\n      }\n      .day.range-start:not(.range-end):not(.d6):not(:last-child) {\n        background-image: linear-gradient(\n          to right,\n          transparent 0,\n          transparent 50%,\n          ", " 50%\n        );\n      }\n      .day.range-end:not(.range-start):not(.d7):not(:first-child) {\n        background-image: linear-gradient(\n          to left,\n          transparent 0,\n          transparent 50%,\n          ", " 50%\n        );\n      }\n    }\n  }\n"])), boxShadow, function (props) {
  return color(props.theme.color).fade(0.72);
}, getThemeColorCss('color'), function (props) {
  return color(props.theme.color);
}, getThemeColorCss('box-shadow', '0 2px 5px 0'), function (props) {
  return color(props.theme.color).fade(0.72);
}, getThemeColorCss('color'), function (props) {
  return color(props.theme.color).fade(0.72);
}, function (props) {
  return color(props.theme.color).fade(0.72);
}); //#endregion

/** 移动端日历  */

var Calendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var range = props.range,
      className = props.className,
      _a = props.locale,
      locale = _a === void 0 ? 'zh' : _a,
      dateRender = props.dateRender,
      disabledDate = props.disabledDate,
      onChange = props.onChange,
      _b = props.value,
      value = _b === void 0 ? new Date() : _b,
      rest = __rest(props, ["range", "className", "locale", "dateRender", "disabledDate", "onChange", "value"]);

  var max = props.max,
      min = props.min;

  var _c = useState(function () {
    return (Array.isArray(value) ? value : [value || new Date()]).map(function (d) {
      return utils.parseDay(d);
    });
  }),
      val = _c[0],
      setVal = _c[1];

  var _d = useState(0),
      index = _d[0],
      setIndex = _d[1];

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
        setVal(__spreadArray([], val));
        onChange === null || onChange === void 0 ? void 0 : onChange(val);
        setIndex(0);
      }
    } else {
      setVal([date]);
      onChange === null || onChange === void 0 ? void 0 : onChange(date);
    }
  };

  var renderMonth = function renderMonth(dateMonth) {
    var key = dateMonth.getFullYear() + "-" + dateMonth.getMonth();
    return /*#__PURE__*/React.createElement(CalendarMonthView, {
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
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-calendar', className)
  }), /*#__PURE__*/React.createElement("ul", {
    className: "head"
  }, locales[locale].weeks.map(function (week) {
    return /*#__PURE__*/React.createElement("li", {
      key: week,
      className: "item"
    }, week);
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, arr.map(function (_item, i) {
    return renderMonth(utils.cloneDate(startMonth, 'm', i));
  })));
});
Calendar.displayName = 'UC-Calendar';
export default Calendar;
var templateObject_1;