import React from 'react';
/** ball spin */
declare const BallSpin: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * animation duration (unit: ms)
     * @default 600
     */
    duration?: number;
} & React.RefAttributes<HTMLDivElement>>;
export default BallSpin;
