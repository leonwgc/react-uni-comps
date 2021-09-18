export declare type F = (...args: any[]) => void;
export declare const debounce: (fn: F, timeout?: number) => F;
/**
 * 截流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */
export declare const throttle: (fn: F, timeout?: number, last?: boolean) => F;
/** get filterd props */
export declare const getProps: (props: {}, propKeys: string[], isIncluded?: boolean) => Record<string, unknown>;
