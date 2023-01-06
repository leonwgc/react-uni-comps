import { useEffect, useRef } from 'react';
/**
 * 返回前一个值
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {T}
 */
export default function usePrevious<T>(value: T): T {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
