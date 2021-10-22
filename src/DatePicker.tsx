import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import clsx from 'clsx';
import Calendar, { ValueRefType } from './Calendar';
import { getThemeColorCss } from './themeHelper';
import Popover from './Popover';
import Input from './Input';
import Popup from './Popup';
import useUpdateEffect from './hooks/useUpdateEffect';
import dayjs from 'dayjs';

const offset = {
  x: 86,
  y: 2,
};

const formatDate = (v, dateFormat) => {
  if (Array.isArray(v)) {
    if (v.length === 2) {
      return dayjs(v[0]).format(dateFormat) + '~' + dayjs(v[1]).format(dateFormat);
    }
  } else {
    return v && dayjs(v).format(dateFormat);
  }
};

type Props = {
  /** 是否弹出 */
  visible?: boolean;
  /** 关闭 */
  onClose?: () => void;
  /** 移动端不会触发onChange, 请使用onOk 点击确认触发*/
  onChange?: (val: Date | Date[]) => void;
  value?: Date | Date[];
  style?: React.CSSProperties;
  className?: string;
  /** 自定义头  */
  header?: React.ReactNode;
  /** 自定义底部  */
  footer?: React.ReactNode;
  /** US */
  calendarType?: string;
  /** zh-CN */
  locale?: string;
  formatDay?: (locale: string, date: Date) => number;
  minDetail?: string;
  /** 点击遮罩是否关闭,默认true*/
  closeOnMaskClick?: boolean;
  okText?: React.ReactNode;
  title?: React.ReactNode;
  cancelText?: React.ReactNode;
  /** 移动端点击确认触发*/
  onOk?: (value: Date | Date[]) => void;
  /** input左边内容 */
  prefix?: React.ReactNode;
  /** input右边内容 */
  suffix?: React.ReactNode;
  /** 自定义日期格式, YYYY-MM-DD */
  format?: string;
  todayText?: string;
};

// header for mobile
const StyledHeader = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  touch-action: none;

  .ok {
    ${getThemeColorCss('color')}
  }
  .cancel {
    color: #999;
  }
  .title {
    color: #333;
  }
`;

const StyledToday = styled.div`
  padding: 12px;
  text-align: right;
  span {
    cursor: pointer;
    ${getThemeColorCss('color')}
  }
`;

const StyledMobileFooter = styled.div`
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
`;

/** 日期选择  */
const DatePicker = (props: Props): React.ReactNode => {
  const {
    className,
    okText = '确定',
    cancelText = '取消',
    title = '日期选择',
    todayText = '今天',
    value,
    onChange,
    onOk,
    style,
    prefix,
    suffix,
    format = 'YYYY-MM-DD',
    ...rest
  } = props;

  const cRef = useRef<ValueRefType>();
  const [v, setV] = useState(false);
  const [val, setVal] = useState<Date | Date[]>(value);

  const onClose = () => setV(false);

  useUpdateEffect(() => {
    if (value !== val) {
      setVal(value);
    }
  }, [value]);

  const popHeader = isMobile && (
    <StyledHeader>
      <div className="cancel" onClick={onClose}>
        {cancelText}
      </div>
      <div className="title">{title}</div>
      <div
        className="ok"
        onClick={() => {
          const v = cRef.current.value;
          onOk?.(v);
          setVal(v);
          onClose?.();
        }}
      >
        {okText}
      </div>
    </StyledHeader>
  );

  const todayFooter = !isMobile && (
    <StyledToday>
      <span
        onClick={() => {
          setVal(new Date());
          onClose();
        }}
      >
        {todayText}
      </span>
    </StyledToday>
  );

  const inputRender = (
    <Input
      prefix={prefix}
      suffix={suffix}
      className={clsx('uc-datepick', className)}
      style={style}
      readOnly
      value={formatDate(val, format)}
      onFocus={() => setV(true)}
    />
  );

  const calendarProps = {
    ...rest,
    value: val,
    ref: cRef,
  };

  // mobile do't trigger onChange
  return isMobile ? (
    <>
      {inputRender}
      <Popup visible={v} onClose={onClose} position="bottom">
        <Calendar {...calendarProps} header={popHeader} footer={<StyledMobileFooter />} />
      </Popup>
    </>
  ) : (
    <Popover
      onClose={onClose}
      visible={v}
      arrow={false}
      offset={offset}
      closeOnMaskClick
      mask
      maskStyle={{ backgroundColor: 'transparent' }}
      content={
        <Calendar
          {...calendarProps}
          onChange={(v) => {
            setVal(v);
            onChange?.(v);
            onClose();
          }}
          footer={todayFooter}
        />
      }
    >
      {inputRender}
    </Popover>
  );
};

DatePicker.displayName = 'UC-DatePicker';

export default DatePicker;
