function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || 'zh-CN', options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatDayOptions = {
  day: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatYearOptions = {
  year: 'numeric'
};
export var formatDate = getSafeFormatter(formatDateOptions);
export var formatDay = getSafeFormatter(formatDayOptions);
export var formatLongDate = getSafeFormatter(formatLongDateOptions);
export var formatMonth = getSafeFormatter(formatMonthOptions);
export var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
export var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
export var formatWeekday = getSafeFormatter(formatWeekdayOptions);
export var formatYear = getSafeFormatter(formatYearOptions);