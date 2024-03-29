import { useEffect, useRef } from 'react';
/**
 * 返回前一个值
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {T}
 */

export default function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}