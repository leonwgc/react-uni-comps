import React from 'react';
import type { Props as BaseProps } from './CheckboxBase';
declare type Props = Omit<BaseProps, 'mode'>;
/** 单选框 */
declare const Radio: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Radio;
