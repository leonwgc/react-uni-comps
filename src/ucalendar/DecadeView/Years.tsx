/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import TileGroup from '../TileGroup';
import Year from './Year';

import { getBeginOfDecadeYear } from '../shared/dates';

export default function Years(props) {
  const { activeStartDate } = props;
  const start = getBeginOfDecadeYear(activeStartDate);
  const end = start + 9;

  return (
    <TileGroup
      {...props}
      className="decade-view__years"
      dateTransform={(year) => {
        const date = new Date();
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }}
      dateType="year"
      end={end}
      start={start}
      tile={Year}
    />
  );
}

// Years.propTypes = {
//   ...tileGroupProps,
// };
