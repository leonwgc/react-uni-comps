import { MutableRefObject } from 'react';
/**
 *  get latest values from ref
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useThisRef<T>(value: T): MutableRefObject<T>;
