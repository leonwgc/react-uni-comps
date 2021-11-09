/**
 *  执行异步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
declare const useUpdateEffect: (effect: () => void, deps?: Array<unknown>) => void;
export default useUpdateEffect;
