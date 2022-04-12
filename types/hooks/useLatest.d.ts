import { MutableRefObject } from 'react';
/**
 * 保存最新的值在ref中
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useLatest<T>(value: T): MutableRefObject<T>;
