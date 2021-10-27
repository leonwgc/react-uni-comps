export function getDayOfWeek(date: any, calendarType?: string): any;
/**
 * Century
 */
export function getBeginOfCenturyYear(date: any): any;
/**
 * Decade
 */
export function getBeginOfDecadeYear(date: any): any;
/**
 * Week
 */
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */
export function getBeginOfWeek(date: Date, calendarType?: string): Date;
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */
export function getWeekNumber(date: Date, calendarType?: string): number;
/**
 * Others
 */
/**
 * Returns the beginning of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
export function getBegin(rangeType: string, date: Date): any;
export function getBeginPrevious(rangeType: any, date: any): any;
export function getBeginNext(rangeType: any, date: any): any;
/**
 * Returns the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
export function getEnd(rangeType: string, date: Date): any;
export function getEndPrevious(rangeType: any, date: any): any;
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
export function getRange(rangeType: string, date: Date): any;
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */
export function getValueRange(rangeType: string, date1: Date, date2: Date): any[];
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */
export function getCenturyLabel(locale: any, formatYear: any, date: Date | string | number): any;
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */
export function getDecadeLabel(locale: any, formatYear: any, date: Date | string | number): any;
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */
export function isWeekend(date: Date, calendarType?: string): boolean;
export function getBeginPrevious2(rangeType: any, date: any): any;
export function getBeginNext2(rangeType: any, date: any): any;
export function getEndPrevious2(rangeType: any, date: any): any;
