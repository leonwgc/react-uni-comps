declare type F = (...args: unknown[]) => void;
/**
 * 返回节流函数
 *
 * @param {F} fn fn改变throttle fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
declare const useThrottle: (fn: F, timeout?: number, fnDeps?: Array<unknown>) => F;
export default useThrottle;
