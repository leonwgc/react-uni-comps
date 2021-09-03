import { MutableRefObject } from 'react';
/**
 *  store value in ref and update it after effect
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useValueRef<T>(value: T): MutableRefObject<T>;
