/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import { getMonthStart, getMonthEnd } from '@wojtekmaj/date-utils';

import Tile from '../Tile';

import {
  formatMonth as defaultFormatMonth,
  formatMonthYear as defaultFormatMonthYear,
} from '../shared/dateFormatter';

const className = 'year-view__months__month';

export default function Month({
  classes,
  formatMonth = defaultFormatMonth,
  formatMonthYear = defaultFormatMonthYear,
  ...otherProps
}) {
  const { date, locale } = otherProps;

  return (
    <Tile
      {...otherProps}
      classes={[].concat(classes, className)}
      formatAbbr={formatMonthYear}
      maxDateTransform={getMonthEnd}
      minDateTransform={getMonthStart}
      view="year"
    >
      {formatMonth(locale, date)}
    </Tile>
  );
}

// Month.propTypes = {
//   ...tileProps,
//   formatMonth: PropTypes.func,
//   formatMonthYear: PropTypes.func,
// };
