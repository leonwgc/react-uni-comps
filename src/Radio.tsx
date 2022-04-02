import React from 'react';
import CheckboxBase from './CheckboxBase';
import type { Props as BaseProps } from './CheckboxBase';

type Props = Omit<BaseProps, 'mode'>;

/** 单选框 */
const Radio = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size = 16, ...rest } = props;
  return <CheckboxBase {...rest} size={size} mode="radio" ref={ref} />;
});

Radio.displayName = 'UC-Radio';

export default Radio;
