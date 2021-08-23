import React, { HTMLAttributes } from 'react';
export declare type Props = {
    children?: React.ReactElement;
} & HTMLAttributes<HTMLSpanElement>;
/** ScrollTo top */
declare const ScrollTop: {
    (props: Props): React.ReactElement;
    displayName: string;
};
export default ScrollTop;
