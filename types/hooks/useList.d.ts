declare type List<T> = {
    /** 添加数据 */
    add: (value: T) => void;
    /** 删除数据 */
    remove: (index: number) => void;
    /** 数据列表 */
    list: T[];
    /** 数据keys列表 */
    keys: string[];
    /** 更新数据 */
    update: (index: number, value: T) => void;
    /** 上移数据 */
    moveUp: (index: number) => void;
    /** 下移数据 */
    moveDown: (index: number) => void;
};
/**
 * 数据列表,包含增删改排序
 *
 * @template T
 * @param {Array<T>} [arr=[]]
 * @return {*}  {List<T>}
 */
declare const useList: <T>(arr?: T[]) => List<T>;
export default useList;
