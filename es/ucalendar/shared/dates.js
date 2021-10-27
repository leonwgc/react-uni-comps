/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getYear, getMonth as getMonthIndex, getCenturyStart, getPreviousCenturyStart, getNextCenturyStart, getCenturyEnd, getPreviousCenturyEnd, getCenturyRange, getDecadeStart, getPreviousDecadeStart, getNextDecadeStart, getDecadeEnd, getPreviousDecadeEnd, getDecadeRange, getYearStart, getPreviousYearStart, getNextYearStart, getYearEnd, getPreviousYearEnd, getYearRange, getMonthStart, getPreviousMonthStart, getNextMonthStart, getMonthEnd, getPreviousMonthEnd, getMonthRange, getDayStart, getDayEnd, getDayRange } from '@wojtekmaj/date-utils';
import { CALENDAR_TYPES, WEEKDAYS } from './const';
import { formatYear as defaultFormatYear } from './dateFormatter';
var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
/* Simple getters - getting a property of a given point in time */

export function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;

    case CALENDAR_TYPES.ARABIC:
      return (weekday + 1) % 7;

    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.US:
      return weekday;

    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Century
 */

export function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
/**
 * Decade
 */

export function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
/**
 * Week
 */

/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */

export function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
  var year = getYear(date);
  var monthIndex = getMonthIndex(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */

export function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.US ? CALENDAR_TYPES.US : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */

/**
 * Returns the beginning of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

export function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyStart(date);

    case 'decade':
      return getDecadeStart(date);

    case 'year':
      return getYearStart(date);

    case 'month':
      return getMonthStart(date);

    case 'day':
      return getDayStart(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
export function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getPreviousCenturyStart(date);

    case 'decade':
      return getPreviousDecadeStart(date);

    case 'year':
      return getPreviousYearStart(date);

    case 'month':
      return getPreviousMonthStart(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
export function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getNextCenturyStart(date);

    case 'decade':
      return getNextDecadeStart(date);

    case 'year':
      return getNextYearStart(date);

    case 'month':
      return getNextMonthStart(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
export var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getPreviousDecadeStart(date, -100);

    case 'year':
      return getPreviousYearStart(date, -10);

    case 'month':
      return getPreviousMonthStart(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
export var getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getNextDecadeStart(date, 100);

    case 'year':
      return getNextYearStart(date, 10);

    case 'month':
      return getNextMonthStart(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

export function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyEnd(date);

    case 'decade':
      return getDecadeEnd(date);

    case 'year':
      return getYearEnd(date);

    case 'month':
      return getMonthEnd(date);

    case 'day':
      return getDayEnd(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
export function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getPreviousCenturyEnd(date);

    case 'decade':
      return getPreviousDecadeEnd(date);

    case 'year':
      return getPreviousYearEnd(date);

    case 'month':
      return getPreviousMonthEnd(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
export var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return getPreviousDecadeEnd(date, -100);

    case 'year':
      return getPreviousYearEnd(date, -10);

    case 'month':
      return getPreviousMonthEnd(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

export function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return getCenturyRange(date);

    case 'decade':
      return getDecadeRange(date);

    case 'year':
      return getYearRange(date);

    case 'month':
      return getMonthRange(date);

    case 'day':
      return getDayRange(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */

export function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a - b;
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}

function toYearLabel(locale) {
  var formatYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultFormatYear;
  var dates = arguments.length > 2 ? arguments[2] : undefined;
  return dates.map(function (date) {
    return formatYear(locale, date);
  }).join(' – ');
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


export function getCenturyLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, getCenturyRange(date));
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */

export function getDecadeLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, getDecadeRange(date));
}
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */

export function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CALENDAR_TYPES.ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case CALENDAR_TYPES.ARABIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;

    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.US:
      return weekday === SATURDAY || weekday === SUNDAY;

    default:
      throw new Error('Unsupported calendar type.');
  }
}