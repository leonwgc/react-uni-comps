import { useRef, useEffect } from 'react';
/**
 *  store value in ref and update it after effect
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */

export default function useValueRef(value) {
  var ref = useRef(value);
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
}