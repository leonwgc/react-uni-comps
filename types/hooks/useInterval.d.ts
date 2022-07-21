import type { Func } from '../types';
/**
 * 定时器setInterval
 *
 * @param {Func} fn, fn返回false 计时器停止
 * @param {number} delay
 */
declare function useInterval(fn: Func | (() => boolean), delay: number): void;
export default useInterval;
