/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRange } from './dates';
import clsx from 'clsx';
/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */

export function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}
export function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
export function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
export function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}

function getRangeClassNames(valueRange, dateRange, baseClassName) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];

  if (isRange) {
    classes.push(baseClassName);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

    if (isRangeStart) {
      classes.push(baseClassName + "Start");
    }

    if (isRangeEnd) {
      classes.push(baseClassName + "End");
    }

    if (isRangeStart && isRangeEnd) {
      classes.push(baseClassName + "BothEnds");
    }
  }

  return classes;
}

export function getTileClasses(_a) {
  var value = _a.value,
      valueType = _a.valueType,
      date = _a.date,
      dateType = _a.dateType,
      hover = _a.hover;
  var className = 'tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!Array.isArray(date) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = Array.isArray(date) ? date : getRange(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push(className + "--now");
  }

  if (!value) {
    return classes;
  }

  if (!Array.isArray(value) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = Array.isArray(value) ? value : getRange(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push(className + "--active");
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push(className + "--hasActive");
  }

  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, className + "--range");
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = [].concat(value);

  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, className + "--hover");
    classes.push.apply(classes, hoverRangeClassNames);
  }

  return clsx(classes);
}