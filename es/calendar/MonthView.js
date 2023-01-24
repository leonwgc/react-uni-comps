import React, { useRef, useImperativeHandle, useCallback } from 'react';
import clsx from 'clsx';
import utils from './utils';
import useIsomorphicLayoutEffect from '../hooks/useisomorphicLayoutEffect';

function renderDate(date) {
  return date.getDate();
}

function disableDate() {
  return false;
}

var CalendarMonthView = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.value,
      value = _a === void 0 ? [] : _a,
      _b = props.dateMonth,
      dateMonth = _b === void 0 ? new Date() : _b,
      onDateClick = props.onDateClick,
      _c = props.min,
      min = _c === void 0 ? new Date() : _c,
      _d = props.max,
      max = _d === void 0 ? new Date() : _d,
      _e = props.dateRender,
      dateRender = _e === void 0 ? renderDate : _e,
      _f = props.disabledDate,
      disabledDate = _f === void 0 ? disableDate : _f,
      _g = props.locale,
      locale = _g === void 0 ? 'zh' : _g;
  var lastInRef = useRef();
  var nodeRef = useRef();
  var year = dateMonth.getFullYear();
  var month = dateMonth.getMonth();
  var monthKey = "".concat(year, "-").concat(month);
  var mountedRef = useRef(false);
  useIsomorphicLayoutEffect(function () {
    var _a, _b; // auto anchor to value date / now


    var target = value[0] || new Date();
    var key = "".concat(target.getFullYear(), "-").concat(target.getMonth());

    if (key === monthKey) {
      (_b = (_a = nodeRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView) === null || _b === void 0 ? void 0 : _b.call(_a, {
        behavior: !mountedRef.current ? 'auto' : 'smooth'
      });
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
    }
  }, [value, monthKey]);
  useImperativeHandle(ref, function () {
    return {
      anchor: function anchor() {
        var _a, _b;

        if (nodeRef.current && nodeRef.current.scrollIntoView) {
          (_b = (_a = nodeRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView) === null || _b === void 0 ? void 0 : _b.call(_a, {
            behavior: 'smooth'
          });
        }
      }
    };
  });
  var title = (locale === null || locale === void 0 ? void 0 : locale.yearText) === '年' ? year + locale.yearText + locale.months[month] : "".concat(locale === null || locale === void 0 ? void 0 : locale.months[month], " ").concat(year); // 日期状态: 选中，区间

  var checkStatus = useCallback(function (date) {
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
  var renderDay = useCallback(function (day, year, month, firstDay) {
    var _a;

    var date = new Date(year, month, day);
    var isToday = new Date().getFullYear() === year && new Date().getMonth() === month && new Date().getDate() === day;
    var status = checkStatus(date);
    var txt = date && (dateRender === null || dateRender === void 0 ? void 0 : dateRender(date)) || '';
    return /*#__PURE__*/React.createElement("li", {
      key: "".concat(year, "-").concat(month, "-").concat(day),
      className: clsx("day", (_a = {
        'd6': (day + firstDay) % 7 === 0,
        'd7': (day + firstDay) % 7 === 1
      }, _a["day--disabled"] = status.disabled, _a["day--today"] = isToday, _a["day--selected"] = status.isSelected, _a["day--range"] = status.isRange, _a['range-start'] = status.rangeStart, _a['range-end'] = status.rangeEnd, _a["firstday-".concat(firstDay)] = day === 1 && firstDay, _a)),
      onClick: function onClick() {
        return !status.disabled && date && (onDateClick === null || onDateClick === void 0 ? void 0 : onDateClick(date));
      }
    }, txt && /*#__PURE__*/React.createElement("div", {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "month",
    title: title,
    ref: nodeRef
  }, /*#__PURE__*/React.createElement("ul", null, renderContent(year, month)));
});
CalendarMonthView.displayName = 'CalendarMonthView';
export default CalendarMonthView;