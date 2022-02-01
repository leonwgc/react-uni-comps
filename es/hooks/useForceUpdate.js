import { useReducer } from 'react';
/**
 * 强制render组件
 *
 * @return {*}
 */

var useForceUpdate = function useForceUpdate() {
  var _a = useReducer(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _a[1];

  return forceUpdate;
};

export default useForceUpdate;