/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */
export declare function between(value: any, min: any, max: any): any;
export declare function isValueWithinRange(value: any, range: any): boolean;
export declare function isRangeWithinRange(greaterRange: any, smallerRange: any): boolean;
export declare function doRangesOverlap(range1: any, range2: any): boolean;
export declare function getTileClasses({ value, valueType, date, dateType, hover }?: {
    value: any;
    valueType: any;
    date: any;
    dateType: any;
    hover: any;
}): string[];
