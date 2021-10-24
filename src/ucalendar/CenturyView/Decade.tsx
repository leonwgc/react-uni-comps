/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { getDecadeStart, getDecadeEnd } from '@wojtekmaj/date-utils';

import Tile from '../Tile';
import clsx from 'clsx';
import { getDecadeLabel } from '../shared/dates';
import { formatYear as defaultFormatYear } from '../shared/dateFormatter';

export default function Decade({ className, formatYear = defaultFormatYear, ...otherProps }) {
  const { date, locale } = otherProps;

  return (
    <Tile
      {...otherProps}
      className={clsx('century-view__decades__decade', className)}
      maxDateTransform={getDecadeEnd}
      minDateTransform={getDecadeStart}
      view="century"
    >
      {getDecadeLabel(locale, formatYear, date)}
    </Tile>
  );
}
