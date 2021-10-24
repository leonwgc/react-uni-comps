/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import clsx from 'clsx';
import Days from './MonthView/Days';
import Weekdays from './MonthView/Weekdays';
import WeekNumbers from './MonthView/WeekNumbers';
import { CALENDAR_TYPES, CALENDAR_TYPE_LOCALES } from './shared/const';

function getCalendarTypeFromLocale(locale) {
  return (
    Object.keys(CALENDAR_TYPE_LOCALES).find((calendarType) =>
      CALENDAR_TYPE_LOCALES[calendarType].includes(locale)
    ) || CALENDAR_TYPES.ISO_8601
  );
}

export default function MonthView(props) {
  const { activeStartDate, locale, onMouseLeave, showFixedNumberOfWeeks } = props;
  const {
    calendarType = getCalendarTypeFromLocale(locale),
    formatShortWeekday,
    onClickWeekNumber,
    showWeekNumbers,
    ...childProps
  } = props;

  function renderWeekdays() {
    return (
      <Weekdays
        calendarType={calendarType}
        formatShortWeekday={formatShortWeekday}
        locale={locale}
        onMouseLeave={onMouseLeave}
      />
    );
  }

  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }

    return (
      <WeekNumbers
        activeStartDate={activeStartDate}
        calendarType={calendarType}
        onClickWeekNumber={onClickWeekNumber}
        onMouseLeave={onMouseLeave}
        showFixedNumberOfWeeks={showFixedNumberOfWeeks}
      />
    );
  }

  function renderDays() {
    return <Days calendarType={calendarType} {...childProps} />;
  }

  const className = 'month-view';

  return (
    <div className={clsx(className, showWeekNumbers ? `${className}--weekNumbers` : '')}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {renderWeekNumbers()}
        <div
          style={{
            flexGrow: 1,
            width: '100%',
          }}
        >
          {renderWeekdays()}
          {renderDays()}
        </div>
      </div>
    </div>
  );
}
