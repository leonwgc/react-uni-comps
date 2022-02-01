import { useReducer } from 'react';

/**
 * 强制render组件
 *
 * @return {*}
 */
const useForceUpdate = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  return forceUpdate;
};

export default useForceUpdate;
