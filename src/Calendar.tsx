import React from 'react';
import styled from 'styled-components';
import ReactCalendar from 'react-calendar';
import { getThemeColorCss } from './themeHelper';
import { isMobile } from './dom';
import clsx from 'clsx';

// props refer: https://www.npmjs.com/package/react-calendar

type Props = {
  style: React.CSSProperties;
  className?: string;
  /** US */
  calendarType?: string;
  /** zh-CN */
  locale?: string;
  formatDay?: (locale: string, date: Date) => number;
  minDetail?: string;
};

const StyledCalendar = styled.div`
  width: 350px;
  font-size: 14px;
  background: #fff;
  box-shadow: 0 2px 16px 0 rgb(0 0 0 / 10%);
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
    margin-bottom: 1em;

    button {
      min-width: 44px;
      background: none;

      &:enabled {
        &:hover,
        &:focus {
          background-color: rgb(230, 230, 230);
        }
      }

      &[disabled] {
        background-color: rgb(240, 240, 240);
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
    padding: 0.75em 0.5em;
    background: none;

    &:disabled {
      background-color: rgb(240, 240, 240);
    }

    &:hover,
    &:focus {
      background-color: rgb(230, 230, 230);
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

/** 日历,基于react-calendar  */
const Calendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    formatDay = _formatDay,
    locale = 'zh-CN',
    calendarType = 'US',
    minDetail = 'decade',
    style,
    ...rest
  } = props;

  return (
    <StyledCalendar className={clsx('uc-calendar', className, { mobile: isMobile })} style={style}>
      <ReactCalendar
        ref={ref}
        {...rest}
        calendarType={calendarType}
        locale={locale}
        minDetail={minDetail}
        formatDay={formatDay}
      />
    </StyledCalendar>
  );
});

Calendar.displayName = 'UC-Calendar';

export default Calendar;
