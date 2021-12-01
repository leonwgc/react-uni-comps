/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable operator-linebreak */

/** port from: zarm calendar (https://zarm.gitee.io/)  */

import React, { PureComponent } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import CalendarMonthView from './MonthView';
import * as locales from './locale';
import utils from './utils';
import color from 'color';
import * as vars from './vars';

type Props = {
  /**  最小可选日期,默认当前日期*/
  min?: Date;
  /**  最大可选日期,默认min+1年*/
  max?: Date;
  value?: Date | Date[];
  defaultValue?: Date | Date[];
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

const parseProps = (props: Props) => {
  const { defaultValue, multiple } = props;
  let { value } = props;

  let tmpValue: Date[];

  value = value || defaultValue;
  value = (
    Object.prototype.toString.call(value) === '[object Array]' ? value : (value && [value]) || []
  ) as Date[];

  tmpValue = value.slice(0, multiple ? 2 : 1).map((item: Date) => utils.parseDay(item));
  tmpValue = tmpValue.sort((item1: Date, item2: Date) => +item1 - +item2);
  const min = props.min ? utils.parseDay(props.min) : new Date();
  const startMonth = utils.cloneDate(min, 'dd', 1);
  const max = props.max ? utils.parseDay(props.max) : utils.cloneDate(min, 'y', 1);
  const endMonth = utils.cloneDate(max, 'dd', utils.getDaysByDate(max));

  // min、max 排序
  const duration = [min, max].sort((item1: Date, item2: Date) => +item1 - +item2);

  const tmp = {
    value: tmpValue,
    min: duration[0],
    max: duration[1],
    startMonth,
    endMonth,
    steps: multiple ? 2 : 1,
    multiple,
  };

  return tmp;
};

export interface CalendarStates {
  value: Date[];
  min: Date;
  max: Date;
  startMonth: Date;
  endMonth: Date;
  steps: number;
  step: number;
  multiple: boolean;
}

export default class CalendarView extends PureComponent<any, any> {
  static displayName = 'UC-Calendar';

  static defaultProps: any = {
    multiple: false,
    min: new Date(),
    dateRender: (date: Date) => date.getDate(),
    disabledDate: () => false,
  };

  // 当前月份dom数据缓存
  private nodes?: any;

  constructor(props) {
    super(props);
    this.nodes = {};
  }

  state = {
    ...parseProps(this.props),
    step: 1,
  };

  //   componentDidMount() {
  //     this.anchor();
  //   }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      ('value' in nextProps && nextProps.value !== prevState.prevValue) ||
      ('multiple' in nextProps && nextProps.multiple !== prevState.prevMultiple) ||
      ('min' in nextProps && nextProps.min !== prevState.prevMin) ||
      ('max' in nextProps && nextProps.max !== prevState.prevMax)
    ) {
      return {
        ...parseProps(nextProps),
        step: prevState.step ? 1 : prevState.step,
        refresh: !prevState.refresh,
        prevValue: nextProps.value,
        prevMax: nextProps.max,
        prevMin: nextProps.min,
        prevMultiple: nextProps.multiple,
      };
    }
    return null;
  }

  // 日期点击事件，注意排序
  handleDateClick = (date: Date) => {
    const { step, steps, value, multiple } = this.state;
    const { onChange } = this.props;
    if (step === 1) {
      value.splice(0, value.length);
    }
    value[step - 1] = date;
    value.sort((item1: Date, item2: Date) => +item1 - +item2);
    this.setState(
      {
        value,
        step: step >= steps ? 1 : step + 1,
      },
      () => {
        step >= steps && onChange?.(multiple ? value : value[0]);
      }
    );
  };

  renderWeekBar = (locale) => {
    const content = locales[locale].weeks.map((week) => (
      <li key={week} className={`item`}>
        {week}
      </li>
    ));
    return <ul className={`bar`}>{content}</ul>;
  };

  renderMonth = (dateMonth: Date, locale) => {
    const { value, min, max } = this.state;
    const { dateRender, disabledDate } = this.props;
    const key = `${dateMonth.getFullYear()}-${dateMonth.getMonth()}`;
    return (
      <CalendarMonthView
        key={key}
        min={min}
        max={max}
        value={value}
        dateMonth={dateMonth}
        dateRender={dateRender}
        disabledDate={disabledDate}
        onDateClick={this.handleDateClick}
        locale={locale}
        ref={(n) => {
          this.nodes[key] = n;
        }}
      />
    );
  };

  // 生成日历内容
  renderMonths(locale) {
    const { startMonth, max } = this.state;
    const arr = Array.from({ length: utils.getMonthCount(startMonth, max) });
    const content = arr.map((_item, i) =>
      this.renderMonth(utils.cloneDate(startMonth, 'm', i), locale)
    );
    return <section className={`body`}>{content}</section>;
  }

  render() {
    const { className, locale = 'zh' } = this.props;
    return (
      <StyledWrap className={clsx('uc-calendar', className)}>
        {this.renderWeekBar(locale)}
        {this.renderMonths(locales[locale])}
      </StyledWrap>
    );
  }
}
