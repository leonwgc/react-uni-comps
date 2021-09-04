import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import * as colors from './colors';
import HairLineBox from './HairLineBox';
import clsx from 'clsx';

export type Props = {
  /** 标题 */
  title?: React.ReactNode;
  /** 右侧内容 */
  content?: React.ReactNode;
  /** 底部线条颜色,默认#eee,不想要线条，设置为透明 */
  lineColor?: string;
  /** 通常放input/textarea等输入控件 */
  children?: React.ReactNode | React.ReactNode[];
} & HTMLAttributes<HTMLDivElement>;

const StyledWrapper = styled.div`
  padding-left: 12px;
  &.clickable {
    &:active {
      background-color: ${colors.activeBg};
    }
  }
`;

const StyledCell = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px 12px 0;
  overflow: hidden;
  color: #333;
  font-size: 14px;
  line-height: 24px;

  .uc-cell-title {
    box-sizing: border-box;
    margin-right: 12px;
    text-align: left;
    word-wrap: break-word;

    &.not-edit-mode {
      width: auto;
      flex: 1;
    }
  }
  .uc-cell-value {
    flex: 1;
    position: relative;
    overflow: visible;
    color: #999;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;

    .uc-field-body {
      display: flex;
      align-items: center;

      > input,
      textarea {
        display: block;
        box-sizing: border-box;
        flex: 1;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        color: #323233;
        line-height: 24px;
        font-size: 14px;
        text-align: left;
        background-color: transparent;
        border: 0;
        resize: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: none;
        box-shadow: none;
        padding-right: 4px;
      }
      > textarea {
        resize: none;
        word-break: break-all;
        word-wrap: break-word;

        & + * {
          align-self: flex-end;
        }
      }
    }
  }
`;

/** 列表项，通常用于移动端 */
const Cell = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { title, content, lineColor = colors.border, children, ...rest } = props;
  if (content && children) {
    throw new Error(`don't set content and children at the same time`);
  }

  return (
    <StyledWrapper
      className={clsx('uc-cell-wrapper', { clickable: typeof rest.onClick === 'function' })}
    >
      <HairLineBox color={lineColor}>
        <StyledCell ref={ref} className={clsx('uc-cell')} {...rest}>
          <div className={clsx('uc-cell-title', { 'not-edit-mode': content })}>{title}</div>
          <div className="uc-cell-value">
            {content}
            {children ? <div className="uc-field-body">{children}</div> : null}
          </div>
        </StyledCell>
      </HairLineBox>
    </StyledWrapper>
  );
});

Cell.displayName = 'UC-Cell';

export default Cell;
