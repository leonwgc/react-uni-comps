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

const StyledCalendar = styled.div`
  width: 280px;
  font-size: 14px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  line-height: inherit;
  box-sizing: border-box;

  &.mobile {
    width: 100%;
  }

  abbr {
    font-size: 1em;
    text-decoration: none;
    cursor: default;
  }

  .react-calendar--doubleView {
    width: 700px;

    .react-calendar__viewContainer {
      display: flex;
      margin: -0.5em;

      > * {
        width: 50%;
        margin: 0.5em;
      }
    }
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

  .react-calendar__navigation {
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

  .react-calendar__month-view {
    .react-calendar__month-view__weekdays {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75em;

      .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
      }
    }

    .react-calendar__weekNumbers {
      .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        font-weight: bold;
        padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
      }
    }
  }
  .react-calendar__month-view__days__day--weekend {
    /* color: rgb(209, 0, 0); */
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc;
  }

  .react-calendar__year-view,
  .react-calendar__decade-view,
  .react-calendar__century-view {
    .react-calendar__tile {
      padding: 1em 0.5em;
    }
  }

  .react-calendar__century-view {
    .react-calendar__tile {
      padding: 1em 0;
      font-size: 12px;
    }
  }

  .react-calendar__tile {
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

    &.react-calendar__tile--active,
    &.react-calendar__tile--hasActive {
      ${getThemeColorCss('background-color')}
      color:#fff;
      &:hover,
      &:focus {
        ${getThemeColorCss('background-color')}
        color: #fff;
      }
    }

    &.react-calendar__tile--range {
      ${getThemeColorCss('background-color')}
      opacity: 0.4;
    }
    &.react-calendar__tile--rangeStart,
    &.react-calendar__tile--rangeEnd {
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
    <StyledCalendar className={clsx('uc-calendar', className, { mobile: isMobile })} style={style}>
      {header}
      <ReactCalendar
        {...rest}
        onChange={setVal}
        calendarType={calendarType}
        locale={locale}
        minDetail={minDetail}
        formatDay={formatDay}
      />
      {footer}
    </StyledCalendar>
  );
});

Calendar.displayName = 'UC-Calendar';

export default Calendar;
