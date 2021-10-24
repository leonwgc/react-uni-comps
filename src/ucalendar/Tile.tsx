/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import clsx from 'clsx';

function getValue(nextProps, prop) {
  const { activeStartDate, date, view } = nextProps;

  return typeof prop === 'function' ? prop({ activeStartDate, date, view }) : prop;
}

export default class Tile extends Component<any, any> {
  static getDerivedStateFromProps(nextProps, prevState) {
    const { tileClassName, tileContent } = nextProps;

    const nextState: any = {};

    if (tileClassName !== prevState.tileClassNameProps) {
      nextState.tileClassName = getValue(nextProps, tileClassName);
      nextState.tileClassNameProps = tileClassName;
    }

    if (tileContent !== prevState.tileContentProps) {
      nextState.tileContent = getValue(nextProps, tileContent);
      nextState.tileContentProps = tileContent;
    }

    return nextState;
  }

  state = {};

  render() {
    const {
      activeStartDate,
      children,
      className,
      date,
      formatAbbr,
      locale,
      maxDate,
      maxDateTransform,
      minDate,
      minDateTransform,
      onClick,
      onMouseOver,
      style,
      tileDisabled,
      view,
    } = this.props;
    const { tileClassName = '', tileContent = '' } = this.state as any;

    return (
      <button
        className={clsx(className, tileClassName)}
        disabled={
          (minDate && minDateTransform(minDate) > date) ||
          (maxDate && maxDateTransform(maxDate) < date) ||
          (tileDisabled && tileDisabled({ activeStartDate, date, view }))
        }
        onClick={onClick && ((event) => onClick(date, event))}
        onFocus={onMouseOver && (() => onMouseOver(date))}
        onMouseOver={onMouseOver && (() => onMouseOver(date))}
        style={style}
        type="button"
      >
        {formatAbbr ? <abbr aria-label={formatAbbr(locale, date)}>{children}</abbr> : children}
        {tileContent}
      </button>
    );
  }
}
