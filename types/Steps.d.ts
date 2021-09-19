import React from 'react';
declare type Step = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
};
declare type Props = {
    steps: Step[];
    current?: number;
    className?: string;
    direction?: 'horizontal' | 'vertical';
    dotStyle?: boolean;
};
/** 步骤条 */
declare const Steps: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Steps;
