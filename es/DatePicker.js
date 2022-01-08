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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

import React, { useState } from 'react';
import clsx from 'clsx';
import dateUtils from './calendar/utils';
import Picker from './Picker';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';
var locales = {
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
  var c = dateUtils.getDaysInMonth(year, month);

  for (var i = 1; i <= c; i++) {
    days.push(i);
  }

  return days;
};

var getData = function getData(minYear, maxYear, locale) {
  if (locale === void 0) {
    locale = 'zh';
  }

  var years = [];
  var monthes = [];
  var days = [];

  for (var i = minYear; i <= maxYear; i++) {
    years.push({
      label: i + locales[locale].year,
      value: i
    });
  }

  for (var j = 1; j <= 12; j++) {
    monthes.push({
      label: j + locales[locale].month,
      value: j
    });
  }

  for (var z = 1; z <= 30; z++) {
    days.push({
      label: z + locales[locale].day,
      value: z
    });
  }

  return [years, monthes, days];
}; //#endregion

/** 移动端日期选择 */


var DatePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.value,
      value = _a === void 0 ? new Date() : _a,
      _onOk = props.onOk,
      _onChange = props.onChange,
      _b = props.minYear,
      minYear = _b === void 0 ? 1980 : _b,
      _c = props.maxYear,
      maxYear = _c === void 0 ? 2030 : _c,
      _d = props.locale,
      locale = _d === void 0 ? 'zh' : _d,
      rest = __rest(props, ["className", "value", "onOk", "onChange", "minYear", "maxYear", "locale"]);

  var _e = useState(getData(minYear, maxYear, locale)),
      list = _e[0],
      setList = _e[1];

  useUpdateLayoutEffect(function () {
    setList(getData(minYear, maxYear, locale));
  }, [minYear, maxYear, locale]);

  var _f = useState(function () {
    var d = dateUtils.parseDate(value || new Date());
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  }),
      val = _f[0],
      setVal = _f[1];

  return /*#__PURE__*/React.createElement(Picker, __assign({}, rest, {
    cols: 3,
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
              label: v + locales[locale].day,
              value: v
            };
          });

          if (val[2] > days.length) {
            // keep the days original , but when origin val > lastday of curent month , set to last day
            val[2] = list[2][list[2].length - 1].value;
          }

          setList(__spreadArray([], list, true));
        }
      }

      setVal(__spreadArray([], val, true));
    },
    ref: ref,
    className: clsx('uc-datepicker', className)
  }));
});
DatePicker.displayName = 'UC-DatePicker';
export default DatePicker;