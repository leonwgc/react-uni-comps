import React from 'react';
import type { Props as BaseProps } from './CheckboxBase';
declare type Props = Omit<BaseProps, 'mode'>;
/** 复选框 */
declare const Checkbox: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Checkbox;
