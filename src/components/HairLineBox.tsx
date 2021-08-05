import React from 'react';
import styled from 'styled-components';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type Props = {
  position: Position;
  color: string;
};

const StyledDiv = styled.div<{ position: Position; color: string }>`
  position: relative;
  &:after {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    ${({ position }) => 'border-' + position}: 1px solid ${({ color }) => color};

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
  }
`;

const HairLineBox: React.FC<Props> = ({ position = 'bottom', color = '#dcdcdc', ...props }) => {
  return <StyledDiv position={position} color={color} {...props}></StyledDiv>;
};

export default HairLineBox;
