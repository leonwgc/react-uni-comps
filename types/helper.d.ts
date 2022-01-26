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
 * @param {(l: T, r: T) => boolean} predicate 判断函数,数组重复条件, e.g. l===r / l.id===r.id
 * @return {*}  {T[]}
 */
export declare const uniqArray: <T>(arr: T[], predicate: (l: T, r: T) => boolean) => T[];
