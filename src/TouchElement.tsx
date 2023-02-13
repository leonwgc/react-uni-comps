import * as React from 'react';
import Touch, { Options } from 'w-touch';

type Props = {
  /** 手势操作元素,如果是组件，需要forwardRef到dom */
  children: React.ReactElement;
} & Options;

const checkFailed = () => {
  throw new Error('TouchElement: 子元素必须是dom/forwardRef到dom的组件');
};

/** 给子元素添加手势操作 */
const TouchElement = React.forwardRef<Element, Props>((props, ref) => {
  const { children, ...rest } = props;
  const elRef = React.useRef<Element>(null);

  React.useImperativeHandle(ref, () => elRef.current as Element);

  React.useLayoutEffect(() => {
    const el = elRef.current;
    if (!(el instanceof Element)) {
      checkFailed();
    }

    const fg = new Touch(el as Element, rest as Options);

    return () => {
      fg.destroy();
    };
  }, []);

  if (!React.isValidElement(children)) {
    checkFailed();
  }

  return <children.type {...(children.props as Record<string, unknown>)} ref={elRef} />;
});

TouchElement.displayName = 'TouchElement';

export default TouchElement;
