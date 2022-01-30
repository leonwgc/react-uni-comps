import React from 'react';
import clsx from 'clsx';

type Props = {
  /** 安全区的位置,默认bottom */
  position?: 'top' | 'bottom' | 'right' | 'left';
  className?: string;
  style?: React.CSSProperties;
};

/** 安全区 */
const SafeArea = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { position = 'bottom', className, style, children, ...rest } = props;

  const styles: React.CSSProperties = {
    display: 'block',
    width: '100%',
    ...style,
    [`padding-${position}`]: `constant(safe-area-inset-${position})`,
    [`padding-${position}`]: `env(safe-area-inset-${position})`,
  };

  return (
    <div {...rest} ref={ref} className={clsx('uc-safe-area', className)} style={styles}>
      {children}
    </div>
  );
});

SafeArea.displayName = 'UC-SafeArea';

export default SafeArea;