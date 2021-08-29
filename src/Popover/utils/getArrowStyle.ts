import React from 'react';
import { getReversePosition } from './getReversePosition';
import { Placement, SinglePlacement } from '../types';
import * as theme from '../../colors';

export const getArrowStyle = (
  modalEl: Element,
  placement: Placement = 'bottom',
  backdrop = false,
  margin = 12,
  diagonalWidth = 6 // make it the same as arrow w/h
): Record<string, string | number> => {
  const modalPos = modalEl.getBoundingClientRect();

  const [firstPlacement, lastPlacement] = (placement as string).split('-') as SinglePlacement[];

  const boxShadowmMap = {
    top: `1px 1px 1px 0px ${theme.border}`,
    right: `-1px 1px 1px 0px ${theme.border}`,
    bottom: `-1px -1px 1px 0px ${theme.border}`,
    left: `1px -1px 1px 0px ${theme.border}`,
  };

  const extraStyle = {
    boxShadow: backdrop ? 'none' : boxShadowmMap[firstPlacement],
    [getReversePosition(firstPlacement)]: -diagonalWidth / 2,
  };

  if (!lastPlacement) {
    const style: React.CSSProperties = {};
    if (['bottom', 'top'].includes(firstPlacement)) {
      style['right'] = (modalPos.width - diagonalWidth) / 2;
    }
    if (['left', 'right'].includes(firstPlacement)) {
      style['top'] = (modalPos.height - diagonalWidth) / 2;
    }
    return {
      ...style,
      ...extraStyle,
    };
  } else {
    return {
      [lastPlacement]: margin * 2,
      ...extraStyle,
    };
  }
};
