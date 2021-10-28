import { MutableRefObject, useRef, useEffect } from 'react';
/**
 *  保存最新的值在ref中
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useCallbackRef<T>(value: T): MutableRefObject<T> {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
}
