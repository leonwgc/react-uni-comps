import React, { useState } from 'react';
import clsx from 'clsx';
import dateUtils from './calendar/utils';
import Picker, { DataItem } from './Picker';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';

//#region def

type Props = {
  /** 值 */
  value?: string | number;
  /** 关闭回调 */
  onClose: () => void;
  /** 点击确定回调 */
  onOk?: (value: Date) => void;
  /** 是否显示 */
  visible?: boolean;
  /** 确定文本 */
  okText?: React.ReactNode;
  /** 中间标题 */
  title?: React.ReactNode;
  /** 最小年份, 默认1980 */
  minYear?: number;
  /** 最大年份, 默认2030 */
  maxYear?: number;
  /** 取消文本 */
  cancelText?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** 语言,默认中文 */
  locale?: 'zh' | 'en';
};

const locales = {
  zh: { year: '年', month: '月', day: '日' },
  en: { year: '', month: '', day: '' },
};

const getDays = (year: number, month: number) => {
  const days = [];
  const c = dateUtils.getDaysInMonth(year, month);
  for (let i = 1; i <= c; i++) {
    days.push(i);
  }

  return days;
};

const getData = (minYear: number, maxYear: number, locale = 'zh') => {
  const years: DataItem[] = [];
  const monthes: DataItem[] = [];
  const days: DataItem[] = [];
  for (let i = minYear; i <= maxYear; i++) {
    years.push({ label: i + locales[locale].year, value: i });
  }

  for (let j = 1; j <= 12; j++) {
    monthes.push({ label: j + locales[locale].month, value: j });
  }

  for (let z = 1; z <= 30; z++) {
    days.push({ label: z + locales[locale].day, value: z });
  }

  return [years, monthes, days];
};

//#endregion

/** 移动端日期选择 */
const DatePicker = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    className,
    value = new Date(),
    onOk,
    minYear = 1980,
    maxYear = 2030,
    locale = 'zh',
    ...rest
  } = props;

  const [list, setList] = useState(getData(minYear, maxYear, locale));

  useUpdateLayoutEffect(() => {
    setList(getData(minYear, maxYear, locale));
  }, [minYear, maxYear, locale]);

  const [val, setVal] = useState<Array<number>>(() => {
    const d = dateUtils.parseDate(value || new Date());
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  });

  return (
    <Picker
      {...rest}
      cols={3}
      data={list}
      onOk={(v: number[]) => {
        onOk?.(new Date(v[0], v[1] - 1, v[2]));
      }}
      value={val}
      onWheelChange={(index: number, wheelIndex: number) => {
        if (index >= list[wheelIndex].length) {
          // fix feb
          index = list[wheelIndex].length - 1;
        }
        const v = list[wheelIndex][index].value as number;
        val[wheelIndex] = v;
        if (wheelIndex === 1) {
          // month change
          const days = getDays(val[0], v);

          if (days.length !== list[2].length) {
            list[2] = days.map((v) => ({
              label: v + locales[locale].day,
              value: v,
            })) as DataItem[];

            if (val[2] > days.length) {
              // keep the days original , but when origin val > lastday of curent month , set to first day
              val[2] = list[2][list[2].length - 1].value as number;
            }
            setList([...list]);
          }
        }
        setVal([...val]);
      }}
      ref={ref}
      className={clsx('uc-datepicker', className)}
    ></Picker>
  );
});

DatePicker.displayName = 'UC-DatePicker';

export default DatePicker;
