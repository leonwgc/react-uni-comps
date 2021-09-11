import { MutableRefObject } from 'react';
/**
 *  get/set the latest value from ref
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useValueRef<T>(value: T): MutableRefObject<T>;
