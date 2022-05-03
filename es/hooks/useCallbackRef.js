import { useRef, useEffect } from 'react';
/**
 *  保存最新的值在ref中
 *
 * @deprecated
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */

export default function useCallbackRef(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}