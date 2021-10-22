declare type F = (...args: unknown[]) => void;
/**
 * 返回防抖函数
 *
 * @param {F} fn fn改变debounce fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
declare const useDebounce: (fn: F, timeout?: number, fnDeps?: Array<unknown>) => F;
export default useDebounce;
