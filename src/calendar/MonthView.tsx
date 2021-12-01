import React, { useRef, useImperativeHandle, useCallback, useLayoutEffect } from 'react';
import clsx from 'clsx';
import utils from './utils';

export interface RefType {
  anchor: () => void;
}

function renderDate(date: Date) {
  return date.getDate();
}

function disableDate() {
  return false;
}

const CalendarMonthView = React.forwardRef<RefType, any>((props, ref) => {
  const {
    value = [],
    dateMonth = new Date(),
    onDateClick,
    min = new Date(),
    max = new Date(),
    dateRender = renderDate,
    disabledDate = disableDate,
    locale = 'zh',
  } = props;

  const lastInRef = useRef();
  const nodeRef = useRef<HTMLDivElement>();

  const year = dateMonth.getFullYear();
  const month = dateMonth.getMonth();
  const monthKey = `${year}-${month}`;
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    // auto anchor to value date / now
    const target = value[0] || new Date();
    const key = `${target.getFullYear()}-${target.getMonth()}`;

    if (key === monthKey) {
      nodeRef.current.scrollIntoView({ behavior: !mountedRef.current ? 'auto' : 'smooth' });
    }

    if (!mountedRef.current) {
      mountedRef.current = true;
    }
  }, [value, monthKey]);

  useImperativeHandle(ref, () => ({
    anchor: () => {
      if (nodeRef.current && nodeRef.current.scrollIntoView) {
        nodeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  const title =
    locale?.yearText === '年'
      ? year + locale.yearText + locale.months[month]
      : `${locale?.months[month]} ${year}`;

  // 日期状态: 选中，区间
  const checkStatus = useCallback(
    (date: Date) => {
      const disabled = date < utils.cloneDate(min, 'd', 0) || date > utils.cloneDate(max, 'd', 0);
      const res = {
        disabled: disabled || disabledDate?.(date),
        isSelected: value.some((item) => utils.isOneDay(date, item)),
        isRange: value.length > 1 && date > value[0] && date < value[value.length - 1],
        rangeStart: value.length > 1 && utils.isOneDay(date, value[0]),
        rangeEnd: value.length > 1 && utils.isOneDay(date, value[value.length - 1]),
      };
      lastInRef.current = lastInRef.current || res.isSelected || res.isRange;
      return res;
    },
    [disabledDate, max, min, value]
  );

  const renderDay = useCallback(
    (day: number, year: number, month: number, firstDay: number) => {
      const date = new Date(year, month, day);
      const isToday =
        new Date().getFullYear() === year &&
        new Date().getMonth() === month &&
        new Date().getDate() === day;
      const status = checkStatus(date);

      const txt = (date && dateRender?.(date)) || '';

      return (
        <li
          key={`${year}-${month}-${day}`}
          className={clsx(`day`, {
            'd6': (day + firstDay) % 7 === 0,
            'd7': (day + firstDay) % 7 === 1,
            [`day--disabled`]: status.disabled,
            [`day--today`]: isToday,
            [`day--selected`]: status.isSelected,
            [`day--range`]: status.isRange,
            'range-start': status.rangeStart,
            'range-end': status.rangeEnd,
            [`firstday-${firstDay}`]: day === 1 && firstDay,
          })}
          onClick={() => !status.disabled && date && onDateClick?.(date)}
        >
          {(txt && <div className={`day__content`}>{txt}</div>) || ''}
        </li>
      );
    },
    [checkStatus, dateRender, onDateClick]
  );

  const renderContent = (year: number, month: number) => {
    const data = utils.getCurrMonthInfo(year, month);
    const { firstDay, dayCount } = data;
    return Array.from({ length: dayCount }).map((_item, i) =>
      renderDay(i + 1, year, month, firstDay)
    );
  };

  return (
    <div className={`month`} title={title} ref={nodeRef}>
      <ul>{renderContent(year, month)}</ul>
    </div>
  );
});

CalendarMonthView.displayName = 'CalendarMonthView';

export default CalendarMonthView;
