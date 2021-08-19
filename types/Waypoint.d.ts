import React from 'react';
export declare type Props = {
    onEnter?: (el: HTMLSpanElement) => void;
    onLeave?: (el: HTMLSpanElement) => void;
};
/** waypoint 路标 */
declare const Waypoint: (props: Props) => React.ReactElement;
export default Waypoint;
