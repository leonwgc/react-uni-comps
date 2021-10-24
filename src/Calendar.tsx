import React, { useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import ReactCalendar from './ucalendar';
import { getThemeColorCss } from './themeHelper';
import { isMobile } from './dom';
import useUpdateEffect from './hooks/useUpdateEffect';
import clsx from 'clsx';
import * as colors from './colors';

// props refer: https://www.npmjs.com/package/react-calendar
export type DateType = Date | Date[];

type Props = {
  style?: React.CSSProperties;
  className?: string;
  /** 自定义头  */
  header?: React.ReactNode;
  /** 自定义底部  */
  footer?: React.ReactNode;
  /** US */
  calendarType?: string;
  /** zh-CN */
  locale?: string;
  formatDay?: (locale: string, date: Date) => number;
  minDetail?: string;
  onChange?: (val: DateType) => void;
  value?: DateType;
  defaultValue?: DateType;
};

const StyledCalendarWrap = styled.div`
  font-size: 14px;
  background: #fff;
  line-height: inherit;
  box-sizing: border-box;
  &.pc {
    width: 280px;
  }
`;

const StyledCalendar = styled(ReactCalendar)`
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  &.double-view {
    min-width: 520px;
    .viewContainer {
      display: flex;
      margin: -0.5em;
      flex-wrap: nowrap;

      > * {
        width: 50%;
        margin: 0.5em;
      }
    }
  }

  abbr {
    font-size: 1em;
    text-decoration: none;
    cursor: default;
  }

  &,
  & *,
  & *:before,
  & *:after {
    box-sizing: border-box;
  }

  button {
    margin: 0;
    border: 0;
    outline: none;

    &:enabled {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .navigation {
    display: flex;
    height: 44px;
    margin-bottom: 0.5em;
    border-bottom: 1px solid ${colors.border};

    button {
      min-width: 44px;
      background: none;
      color: #999;
      white-space: nowrap;
      user-select: none;
      padding: 0;

      &:enabled {
        &:hover,
        &:focus {
          color: #333;
        }
      }

      &[disabled] {
        color: #999;
      }
    }
  }

  .month-view {
    .month-view__weekdays {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75em;

      .month-view__weekdays__weekday {
        padding: 0.5em;
      }
    }

    .weekNumbers {
      .tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        font-weight: bold;
        padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
      }
    }
  }
  .month-view__days__day--weekend {
    /* color: rgb(209, 0, 0); */
  }
  .month-view__days__day--neighboringMonth {
    color: #ccc;
  }

  .year-view,
  .decade-view,
  .century-view {
    .tile {
      padding: 1em 0.5em;
    }
  }

  .century-view {
    .tile {
      padding: 1em 0;
      font-size: 12px;
    }
  }

  .tile {
    max-width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 0.5em;
    background: none;

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
      abbr {
        cursor: not-allowed;
      }
    }

    &:enabled {
      &:hover,
      &:focus {
        background-color: rgb(230, 230, 230);
      }
    }

    &.tile--active,
    &.tile--hasActive {
      ${getThemeColorCss('background-color')}
      color:#fff;
      &:hover,
      &:focus {
        ${getThemeColorCss('background-color')}
        color: #fff;
      }
    }

    &.tile--range {
      ${getThemeColorCss('background-color')}
      opacity: 0.4;
    }
    &.tile--rangeStart,
    &.tile--rangeEnd {
      ${getThemeColorCss('background-color')}
      opacity: 1;
      color: #fff;
    }
  }
`;

const _formatDay = (locale: string, date: Date) => {
  return date.getDate();
};

export type ValueRefType = {
  value?: DateType;
};

/** 日历,基于react-calendar  */
const Calendar = React.forwardRef<ValueRefType, Props>((props, ref) => {
  const {
    className,
    formatDay = _formatDay,
    locale = 'zh-CN',
    calendarType = 'US',
    minDetail = 'decade',
    value,
    defaultValue,
    onChange,
    header,
    footer,
    style,
    ...rest
  } = props;
  const [val, setVal] = useState<DateType>(value || defaultValue || new Date());

  useImperativeHandle(ref, () => ({
    value: val,
  }));

  useUpdateEffect(() => {
    onChange?.(val);
  }, [val, onChange]);

  return (
    <StyledCalendarWrap
      className={clsx('uc-calendar-wrap', className, { mobile: isMobile, pc: !isMobile })}
      style={style}
    >
      {header}
      <StyledCalendar
        {...rest}
        onChange={setVal}
        calendarType={calendarType}
        locale={locale}
        minDetail={minDetail}
        formatDay={formatDay}
      />
      {footer}
    </StyledCalendarWrap>
  );
});

Calendar.displayName = 'UC-Calendar';

export default Calendar;
