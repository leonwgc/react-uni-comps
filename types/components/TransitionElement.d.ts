import React from 'react';
export declare type Props = {
    children: React.ReactElement;
    duration?: number;
    transitionProp?: string;
    timingFunc?: string;
    delay?: number;
    fromClass: 'from';
    toClass: 'to';
    once?: boolean;
};
declare const TransitionElement: React.FC<Props>;
export default TransitionElement;
