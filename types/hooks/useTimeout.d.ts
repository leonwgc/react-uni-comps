import type { Func } from '../types';
/**
 * 定时器setTimeout
 *
 * @param {Func} fn
 * @param {number} delay
 */
declare function useTimeout(fn: Func, delay: number): void;
export default useTimeout;
