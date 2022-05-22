import React from 'react';
import type { BaseProps } from './types';
declare type Props = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * 安全区的位置
     * @default bottom
     * */
    position?: 'top' | 'bottom' | 'right' | 'left';
} & BaseProps;
/** 安全区 */
declare const SafeArea: React.FC<Props>;
export default SafeArea;
