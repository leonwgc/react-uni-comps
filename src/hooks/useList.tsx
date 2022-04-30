import { useState } from 'react';
import { nanoid } from 'nanoid';

function gid() {
  return nanoid(12);
}

type List<T> = {
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
 * 数据列表
 *
 * @template T
 * @param {Array<T>} [arr=[]]
 * @return {*}  {List<T>}
 */
const useList = <T,>(arr: Array<T> = []): List<T> => {
  const [list, setList] = useState<T[]>(arr);

  const [keys, setKeys] = useState<string[]>(() => {
    const len = arr.length;
    const r = [];
    for (let i = 0; i < len; i++) {
      r[i] = gid();
    }

    return r;
  });

  // add a new item
  const add = (value: T): void => {
    setList([...list, value]);
    setKeys([...keys, gid()]);
  };

  // remove item at index
  const remove = (index: number): void => {
    list.splice(index, 1);
    keys.splice(index, 1);
    setList([...list]);
    setKeys([...keys]);
  };

  const update = (index: number, value: T): void => {
    const _arr = list.slice();
    _arr[index] = value;
    setList([..._arr]);
  };

  const moveUp = (index: number): void => {
    if (index > 0) {
      const t = list[index - 1];
      list[index - 1] = list[index];
      list[index] = t;

      setList([...list]);
    }
  };

  const moveDown = (index: number): void => {
    if (index < list.length - 1) {
      const t = list[index + 1];
      list[index + 1] = list[index];
      list[index] = t;

      setList([...list]);
    }
  };

  return { list, add, remove, keys, update, moveUp, moveDown };
};

export default useList;
