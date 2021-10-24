/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Flex from './Flex';
import { getTileClasses } from './shared/utils';

export default function TileGroup({
  className,
  count = 3,
  dateTransform,
  dateType,
  end,
  hover,
  offset,
  start,
  step = 1,
  tile: Tile,
  value,
  valueType,
  ...tileProps
}) {
  const tiles: any = [];
  for (let point = start; point <= end; point += step) {
    const date = dateTransform(point);

    tiles.push(
      <Tile
        key={date.getTime()}
        className={getTileClasses({
          value,
          valueType,
          date,
          dateType,
          hover,
        })}
        date={date}
        point={point}
        {...tileProps}
      />
    );
  }

  return (
    <Flex className={className} count={count} offset={offset} wrap>
      {tiles}
    </Flex>
  );
}
