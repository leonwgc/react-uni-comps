/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable operator-linebreak */

/** port from: zarm calendar (https://zarm.gitee.io/)  */

import React, { PureComponent } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import CalendarMonthView from './MonthView';
import * as locales from './locale';
import utils from './utils';

const prefixCls = 'uc-calendar';

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

  .uc-calendar__bar {
    display: flex;
    flex-wrap: wrap;
    color: #909090;
    background-color: #f2f2f2;
    font-size: 14px;
    margin: 0;
    padding: 0 15px;
    list-style-type: disc;
  }
  .uc-calendar__bar__item {
    height: 40px;
    line-height: 40px;
  }

  .uc-calendar__body {
    padding: 10px 0;
    overflow: auto;
    max-height: 50vh;
  }

  .uc-calendar__month {
    padding: 0 15px;
    color: #343434;
  }
  .uc-calendar__month ul {
    margin: 0;
    padding: 0;
  }
  .uc-calendar__month:before {
    content: attr(title);
    display: block;
    margin: 15px auto;
    font-size: 17px;
    font-weight: 500;
    padding-left: 15px;
  }

  .uc-calendar__day {
    margin: 10px 0;
    position: relative;
    font-size: 16px;
    cursor: pointer;
  }
  .uc-calendar__day__content {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .uc-calendar__day.firstday-1 {
    margin-left: 14.28571%;
  }
  .uc-calendar__day.firstday-2 {
    margin-left: 28.57142%;
  }
  .uc-calendar__day.firstday-3 {
    margin-left: 42.85713%;
  }
  .uc-calendar__day.firstday-4 {
    margin-left: 57.14284%;
  }
  .uc-calendar__day.firstday-5 {
    margin-left: 71.42855%;
  }
  .uc-calendar__day.firstday-6 {
    margin-left: 85.71426%;
  }
  .uc-calendar__day--today .uc-calendar__day__content {
    background-color: hsl(156, 100%, 95%);
    color: hsl(156, 100%, 36.9%);
    color: var(--calendar-day-today-color);
  }

  .uc-calendar__day--selected .uc-calendar__day__content {
    background-color: hsl(156, 100%, 36.9%);

    color: #fff;
    -webkit-box-shadow: 0 2px 5px 0 hsl(156, 100%, 95%);
    box-shadow: 0 2px 5px 0 hsl(156, 100%, 95%);
  }

  .uc-calendar__day--disabled {
    cursor: auto;
  }
  .uc-calendar__day--disabled .uc-calendar__day__content {
    color: #bcbcbc;
  }

  .uc-calendar__day--range {
    background-color: hsl(156, 100%, 95%);

    color: hsl(156, 100%, 36.9%);
  }
  .uc-calendar__day--range .uc-calendar__day__content {
    background-color: hsl(156, 100%, 95%);
  }

  .uc-calendar__day--range.d6 {
    background-color: transparent;

    background-image: linear-gradient(
      to left,
      transparent 0,
      transparent 50%,
      hsl(155.7, 100%, 95%) 50%
    );
  }
  .uc-calendar__day--range.d7 {
    background-color: transparent;
    background-image: linear-gradient(
      to right,
      transparent 0,
      transparent 50%,
      hsl(155.7, 100%, 95%) 50%
    );
  }
  .uc-calendar__day--range:first-child:not(.d6) {
    background-color: transparent;

    background-image: linear-gradient(
      to right,
      transparent 0,
      transparent 50%,
      hsl(155.7, 100%, 95%) 50%
    );
  }
  .uc-calendar__day--range:last-child:not(.d7) {
    background-color: transparent;
    background-image: linear-gradient(
      to left,
      transparent 0,
      transparent 50%,
      hsl(155.7, 100%, 95%) 50%
    );
  }
  .uc-calendar__day--range:last-child.d7,
  .uc-calendar__day--range:first-child.d6 {
    background-image: none;
  }

  .uc-calendar__day.range-start.range-end {
    background-image: none;
  }
  .uc-calendar__day.range-start:not(.range-end):not(.d6):not(:last-child) {
    background-image: linear-gradient(
      to right,
      transparent 0,
      transparent 50%,
      hsl(155.7, 100%, 95%) 50%
    );
  }
  .uc-calendar__day.range-end:not(.range-start):not(.d7):not(:first-child) {
    background-image: linear-gradient(
      to left,
      transparent 0,
      transparent 50%,
      hsl(155.7, 100%, 95%) 50%
    );
  }
`;

//#endregion

const parseState = (props: {
  min?: Date;
  max?: Date;
  value?: Date | Date[];
  defaultValue?: Date | Date[];
  multiple: boolean;
}) => {
  const { defaultValue, multiple } = props;
  let { value } = props;

  let tmpValue: Date[];

  value = value || defaultValue;
  value = (
    Object.prototype.toString.call(value) === '[object Array]' ? value : (value && [value]) || []
  ) as Date[];

  // 注掉该逻辑，强制根据 multiple 控制节点个数，后面改进
  // tmpValue = value.map(item => DateTool.parseDay(item));
  tmpValue = value.slice(0, multiple ? 2 : 1).map((item: Date) => utils.parseDay(item));
  // 排序过滤
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
    // 是否是入参更新(主要是月份跨度更新，需要重新定位)
    refresh: false,
    // 注掉该逻辑，强制根据 multiple 控制节点个数，后面改进
    // steps:Math.max(tmp.value.length, tmp.defaultValue.length);
    steps: multiple ? 2 : 1,
    // 初始化点击步数
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
  // 是否是入参更新(主要是月份跨度更新，需要重新定位)
  refresh: boolean;
  // 注掉该逻辑，强制根据 multiple 控制节点个数，后面改进
  // steps:Math.max(tmp.value.length; tmp.defaultValue.length);
  // steps 是总的选择的个数 via zouhuan
  steps: number;
  // 初始化点击步数
  // step 是为了扩展的，以后如果是三选，四选之类的，用这个，step 标注每次事件是第几次选择 via zouhuan
  step: number;
  multiple: boolean;
}

export default class CalendarView extends PureComponent<any, any> {
  static displayName = 'CalendarView';

  static defaultProps: any = {
    prefixCls: 'uc-calendar',
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
    ...parseState(this.props),
    step: 1,
  };

  componentDidMount() {
    this.anchor();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      ('value' in nextProps && nextProps.value !== prevState.prevValue) ||
      ('multiple' in nextProps && nextProps.multiple !== prevState.prevMultiple) ||
      ('min' in nextProps && nextProps.min !== prevState.prevMin) ||
      ('max' in nextProps && nextProps.max !== prevState.prevMax)
    ) {
      return {
        ...parseState(nextProps),
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

  componentDidUpdate(_prevProps, prevState) {
    const { refresh } = this.state;
    if (refresh !== prevState.refresh) {
      this.anchor();
    }
  }

  // 日期点击事件，注意排序
  handleDateClick = (date: Date) => {
    const { step, steps, value } = this.state;
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
        step >= steps && typeof onChange === 'function' && onChange(value);
      }
    );
  };

  // 月历定位
  anchor = () => {
    const { value } = this.state;
    const target = value[0] || new Date();
    const key = `${target.getFullYear()}-${target.getMonth()}`;
    const node = this.nodes[key];
    if (node && Object.prototype.toString.call(node.anchor) === '[object Function]') {
      node.anchor();
    }
  };

  // 生成星期条
  renderWeekBar = (locale) => {
    const { prefixCls } = this.props;
    const content = locales[locale].weeks.map((week) => (
      <li key={week} className={`${prefixCls}__bar__item`}>
        {week}
      </li>
    ));
    return <ul className={`${prefixCls}__bar`}>{content}</ul>;
  };

  renderMonth = (dateMonth: Date, locale) => {
    const { value, min, max } = this.state;
    const { dateRender, disabledDate } = this.props;
    const key = `${dateMonth.getFullYear()}-${dateMonth.getMonth()}`;
    return (
      <CalendarMonthView
        prefixCls={prefixCls}
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
    return <section className={`${prefixCls}__body`}>{content}</section>;
  }

  render() {
    const { className, locale = 'zh' } = this.props;
    return (
      <StyledWrap className={clsx(prefixCls, className)}>
        {this.renderWeekBar(locale)}
        {this.renderMonths(locales[locale])}
      </StyledWrap>
    );
  }
}
