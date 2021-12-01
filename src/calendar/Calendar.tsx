/** refer to: zarm calendar (https://zarm.gitee.io/)  */

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import CalendarMonthView from './MonthView';
import * as locales from './locale';
import utils from './utils';
// import color from 'color';
// import * as vars from './vars';

type Props = {
  /**  最小可选日期,默认当前日期*/
  min?: Date;
  /**  最大可选日期,默认min+1年*/
  max?: Date;
  value?: Date | Date[];
  /** 是否选择一段时间范围,默认false */
  multiple: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** 自定义日期渲染函数 */
  dateRender?: (date?: Date) => void;
  /** 日期是否禁止选择 */
  disabledDate?: (date?: Date) => boolean;
  /** 日期选择发生变化时触发的回调函数 */
  onChange?: (value?: Date | Date[]) => void;
  /** 语言,默认中文 */
  locale?: 'zh' | 'en';
};

//#region styled

const StyledWrap = styled.div`
  background-color: #fff;
  user-select: none;

  ul {
    list-style-type: disc;

    li {
      display: inline-block;
      width: 14.28571%;
      text-align: center;
      vertical-align: middle;
    }
  }

  .bar {
    display: flex;
    flex-wrap: wrap;
    color: #909090;
    background-color: #f2f2f2;
    font-size: 14px;
    margin: 0;
    padding: 0 15px;
    list-style-type: disc;

    .item {
      height: 40px;
      line-height: 40px;
    }
  }

  .body {
    padding: 10px 0;
    overflow: auto;
    max-height: 50vh;

    .month {
      padding: 0 15px;
      color: #343434;

      &:before {
        content: attr(title);
        display: block;
        margin: 15px auto;
        font-size: 17px;
        font-weight: 500;
        padding-left: 15px;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      .day {
        margin: 10px 0;
        position: relative;
        font-size: 16px;
        cursor: pointer;
      }
      .day__content {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
      .day.firstday-1 {
        margin-left: 14.28571%;
      }
      .day.firstday-2 {
        margin-left: 28.57142%;
      }
      .day.firstday-3 {
        margin-left: 42.85713%;
      }
      .day.firstday-4 {
        margin-left: 57.14284%;
      }
      .day.firstday-5 {
        margin-left: 71.42855%;
      }
      .day.firstday-6 {
        margin-left: 85.71426%;
      }
      .day--today .day__content {
        background-color: hsl(156, 100%, 95%);
        color: hsl(156, 100%, 36.9%);
      }

      .day--selected .day__content {
        background-color: hsl(156, 100%, 36.9%);

        color: #fff;
        -webkit-box-shadow: 0 2px 5px 0 hsl(156, 100%, 95%);
        box-shadow: 0 2px 5px 0 hsl(156, 100%, 95%);
      }

      .day--disabled {
        cursor: auto;
      }
      .day--disabled .day__content {
        color: #bcbcbc;
      }

      .day--range {
        background-color: hsl(156, 100%, 95%);
        color: hsl(156, 100%, 36.9%);
      }
      .day--range .day__content {
        background-color: hsl(156, 100%, 95%);
      }

      .day--range.d6 {
        background-color: transparent;

        background-image: linear-gradient(
          to left,
          transparent 0,
          transparent 50%,
          hsl(155.7, 100%, 95%) 50%
        );
      }
      .day--range.d7 {
        background-color: transparent;
        background-image: linear-gradient(
          to right,
          transparent 0,
          transparent 50%,
          hsl(155.7, 100%, 95%) 50%
        );
      }
      .day--range:first-child:not(.d6) {
        background-color: transparent;

        background-image: linear-gradient(
          to right,
          transparent 0,
          transparent 50%,
          hsl(155.7, 100%, 95%) 50%
        );
      }
      .day--range:last-child:not(.d7) {
        background-color: transparent;
        background-image: linear-gradient(
          to left,
          transparent 0,
          transparent 50%,
          hsl(155.7, 100%, 95%) 50%
        );
      }
      .day--range:last-child.d7,
      .day--range:first-child.d6 {
        background-image: none;
      }

      .day.range-start.range-end {
        background-image: none;
      }
      .day.range-start:not(.range-end):not(.d6):not(:last-child) {
        background-image: linear-gradient(
          to right,
          transparent 0,
          transparent 50%,
          hsl(155.7, 100%, 95%) 50%
        );
      }
      .day.range-end:not(.range-start):not(.d7):not(:first-child) {
        background-image: linear-gradient(
          to left,
          transparent 0,
          transparent 50%,
          hsl(155.7, 100%, 95%) 50%
        );
      }
    }
  }
`;

//#endregion

/** 日历  */
const Calendar = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { multiple, className, locale = 'zh', dateRender, disabledDate, onChange, value } = props;

  let { max, min } = props;

  const [val, setVal] = useState(() => {
    return ((Array.isArray(value) ? value : [value || new Date()]) as Date[]).map((d) =>
      utils.parseDay(d)
    );
  });

  const [index, setIndex] = useState(0);

  min = min ? utils.parseDay(min) : new Date();
  max = max ? utils.parseDay(max) : utils.cloneDate(min, 'y', 1);

  const startMonth = utils.cloneDate(min, 'dd', 1);

  const handleDateClick = (date: Date) => {
    if (multiple) {
      if (index === 0) {
        setVal([date]);
        setIndex(1);
      } else if (index === 1) {
        val[1] = date;
        val.sort((a, b) => a.getTime() - b.getTime());
        setVal([...val]);
        onChange?.(val);
        setIndex(0);
      }
    } else {
      setVal([date]);
      onChange?.(date);
    }
  };

  const renderWeekBar = useCallback(() => {
    const content = locales[locale].weeks.map((week) => (
      <li key={week} className={`item`}>
        {week}
      </li>
    ));
    return <ul className={`bar`}>{content}</ul>;
  }, [locale]);

  const renderMonth = (dateMonth: Date) => {
    const key = `${dateMonth.getFullYear()}-${dateMonth.getMonth()}`;
    return (
      <CalendarMonthView
        key={key}
        min={min}
        max={max}
        value={val}
        dateMonth={dateMonth}
        dateRender={dateRender}
        disabledDate={disabledDate}
        onDateClick={handleDateClick}
        locale={locales[locale]}
      />
    );
  };

  // 生成日历内容
  const renderMonths = () => {
    const arr = Array.from({ length: utils.getMonthCount(startMonth, max) });
    const content = arr.map((_item, i) => renderMonth(utils.cloneDate(startMonth, 'm', i)));
    return <section className={`body`}>{content}</section>;
  };

  return (
    <StyledWrap ref={ref} className={clsx('uc-calendar', className)}>
      {renderWeekBar()}
      {renderMonths()}
    </StyledWrap>
  );
});

Calendar.displayName = 'UC-Calendar';

export default Calendar;
