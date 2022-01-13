import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import useUpdateLayoutEffect from './hooks/useUpdateLayoutEffect';
import clsx from 'clsx';
import QRCodeMaker from './tp/QRCode';

type Props = {
  /** 生成二维码文本 */
  text: string;
  /** 二维码颜色,默认#000 */
  colorDark?: string;
  /** 二维码背景颜色,默认#fff */
  colorLight?: string;
  /** 二维码宽高,默认128px */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

type QRProps = {
  makeCode: (text: string) => void;
  clear: () => void;
};

/** 二维码 */
const QRCode = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    text,
    colorDark = '#000',
    colorLight = '#fff',
    size = 128,
    className,
    style,
    ...rest
  } = props;

  const domRef = useRef();
  const qrRef = useRef<QRProps>();

  useImperativeHandle(ref, () => domRef.current);

  useLayoutEffect(() => {
    qrRef.current = new QRCodeMaker(domRef.current, {
      text: text,
      width: size,
      height: size,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: QRCodeMaker.CorrectLevel.H,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUpdateLayoutEffect(() => {
    if (qrRef.current) {
      qrRef.current.makeCode(text);
    }

    return () => qrRef.current.clear();
  }, [text]);

  return (
    <div
      {...rest}
      ref={domRef}
      className={clsx('uc-qrcode', className)}
      style={{ width: size, height: size, ...style }}
    ></div>
  );
});

QRCode.displayName = 'UC-QRCode';

export default QRCode;
