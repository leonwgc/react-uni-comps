import { useRef } from 'react';
/**
 *  get latest values from ref
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */

export default function useThisRef(value) {
  var ref = useRef(value);
  ref.current = value;
  return ref;
}