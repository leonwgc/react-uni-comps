export declare type F = (...args: any[]) => void;
/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
export declare const debounce: (fn: F, timeout?: number) => F;
/**
 * 节流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */
export declare const throttle: (fn: F, timeout?: number, last?: boolean) => F;
/**
 *  获取部分props
 *
 * @param {*} [props={}]
 * @param {string[]} propKeys
 * @param {boolean} [isIncluded=true]
 * @return {*}  {Record<string, unknown>}
 */
export declare const getProps: (props: {}, propKeys: string[], isIncluded?: boolean) => Record<string, unknown>;
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */
export declare const uniqArray: <T>(arr: T[], equalFn?: (a: T, b: T) => boolean) => T[];
export declare const isObject: (obj: any) => boolean;
/**
 * 扁平化对象数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @param {string} [childrenProp='children'] 子数组属性, 默认 children
 * @return {*}  {T[]}
 */
export declare const flatArray: <T extends Record<string, unknown>>(arr: T[], childrenProp?: string) => T[];
/**
 * 扁平化简单数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @return {*}  {T[]}
 */
export declare const flatSimpleArray: <T extends string | number>(arr: T[]) => T[];
