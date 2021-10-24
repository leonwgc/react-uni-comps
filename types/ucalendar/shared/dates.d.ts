export declare function getDayOfWeek(date: any, calendarType?: string): any;
/**
 * Century
 */
export declare function getBeginOfCenturyYear(date: any): any;
/**
 * Decade
 */
export declare function getBeginOfDecadeYear(date: any): any;
/**
 * Week
 */
/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */
export declare function getBeginOfWeek(date: any, calendarType?: string): Date;
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {string} calendarType Calendar type. Can be ISO 8601 or US.
 */
export declare function getWeekNumber(date: any, calendarType?: string): number;
/**
 * Others
 */
/**
 * Returns the beginning of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
export declare function getBegin(rangeType: any, date: any): any;
export declare function getBeginPrevious(rangeType: any, date: any): any;
export declare function getBeginNext(rangeType: any, date: any): any;
export declare const getBeginPrevious2: (rangeType: any, date: any) => any;
export declare const getBeginNext2: (rangeType: any, date: any) => any;
/**
 * Returns the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
export declare function getEnd(rangeType: any, date: any): any;
export declare function getEndPrevious(rangeType: any, date: any): any;
export declare const getEndPrevious2: (rangeType: any, date: any) => any;
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */
export declare function getRange(rangeType: any, date: any): any;
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {string} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */
export declare function getValueRange(rangeType: any, date1: any, date2: any): any[];
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */
export declare function getCenturyLabel(locale: any, formatYear: any, date: any): any;
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */
export declare function getDecadeLabel(locale: any, formatYear: any, date: any): any;
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */
export declare function isWeekend(date: any, calendarType?: string): boolean;
