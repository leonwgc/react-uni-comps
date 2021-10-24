/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { getYearStart, getYearEnd } from '@wojtekmaj/date-utils';
import Tile from '../Tile';
import clsx from 'clsx';
import { formatYear as defaultFormatYear } from '../shared/dateFormatter';

const className = 'decade-view__years__year';

export default function Year({ classes, formatYear = defaultFormatYear, ...otherProps }) {
  const { date, locale } = otherProps;

  return (
    <Tile
      {...otherProps}
      classes={clsx(classes, className)}
      maxDateTransform={getYearEnd}
      minDateTransform={getYearStart}
      view="decade"
    >
      {formatYear(locale, date)}
    </Tile>
  );
}
