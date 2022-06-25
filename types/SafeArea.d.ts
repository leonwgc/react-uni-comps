import React from 'react';
/** 安全区容器 */
declare const SafeArea: React.ForwardRefExoticComponent<{
    /**
     * 安全区的位置
     * @default bottom
     * */
    position?: 'top' | 'bottom';
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default SafeArea;
