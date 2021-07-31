import React from 'react';
export declare type Props = {
    children: React.ReactElement;
    duration?: number;
    name: string;
    timingFunc?: string;
    direction?: string;
    delay?: number;
    fillMode?: string;
    iterationCount?: string | number;
};
declare const AnimationElement: React.FC<Props>;
export default AnimationElement;
