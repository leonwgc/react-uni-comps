import React from 'react';
import type { StringOrNumber } from './types';
/** 加载指示器,三个跳动的小球 */
declare const SyncLoader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * ball size
     * @default 3
     */
    size?: number;
    /**
     * ball gap
     * @default 4
     */
    gap?: number;
    /**
     * ball color
     * @default #D9D9D9
     */
    color?: string;
    /**
     * animation duration, ms
     * @default 600
     */
    duration?: number;
    /**
     * animation iteration count
     * @default 1
     */
    iterationCount?: StringOrNumber;
} & React.RefAttributes<HTMLDivElement>>;
export default SyncLoader;
