import { useEffect } from 'react';
import useLatest from './useLatest';
/**
 * 定时器setInterval
 *
 * @param {Func} fn
 * @param {number} delay
 */

function useInterval(fn, delay) {
  var fnRef = useLatest(fn);
  useEffect(function () {
    if (typeof delay !== 'number' || delay < 0) return;
    var timer = setInterval(function () {
      fnRef.current();
    }, delay);
    return function () {
      clearInterval(timer);
    };
  }, [delay]);
}

export default useInterval;