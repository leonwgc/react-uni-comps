import type { Func } from '../types';
/**
 * 定时器setInterval
 *
 * @param {Func} fn
 * @param {number} delay
 */
declare function useInterval(fn: Func, delay: number): void;
export default useInterval;
