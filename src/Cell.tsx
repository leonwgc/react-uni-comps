import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import { isMobile } from './dom';
import HairLineBox from './HairLineBox';
import clsx from 'clsx';

export type Props = {
  /** 是否显示红色*标记 */
  required?: boolean;
  title?: React.ReactNode;
  /** 标题 */
  label?: React.ReactNode;
  /** 标题宽度*/
  labelWidth?: number;
  /** 标题下方描述 */
  description?: React.ReactNode;
  /** 右侧内容 */
  content?: React.ReactNode;
  /** 底部线条颜色,默认#eee,不想要线条，设置为透明 */
  lineColor?: string;
  className?: string;
  style?: React.CSSProperties;
  /** 通常放input/textarea等输入控件 */
  children?: React.ReactNode | React.ReactNode[];
} & HTMLAttributes<HTMLDivElement>;

const StyledCell = styled.div`
  background-color: #fff;

  &.clickable {
    &:active {
      background-color: ${vars.activeBg};
    }
  }

  &.has-label {
    padding-left: 12px;
  }

  .cell-inner {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 12px 10px 0;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;

    &.pc {
      align-items: center;
    }

    .cell-label {
      box-sizing: border-box;
      margin-right: 12px;
      text-align: left;
      flex: 1;

      .label {
        color: #333;

        &.required::before {
          content: '*';
          margin-right: 2px;
          color: ${vars.danger};
          vertical-align: middle;
        }
      }

      .description {
        color: #999;
        margin-top: 4px;
        line-height: 18px;
        font-size: 12px;
      }

      &.input {
        word-wrap: break-word;
        width: 6.2em;
        flex: none;
      }
    }
    .cell-content {
      flex: 1;
      position: relative;
      overflow: visible;
      color: #999;
      text-align: right;
      vertical-align: middle;
      word-wrap: break-word;

      &.input {
        display: flex;
        align-items: center;
      }
    }
  }
`;

/** 列表项，通常用于移动端 */
const Cell = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    title,
    required,
    label,
    labelWidth,
    description,
    className,
    content,
    lineColor = vars.border,
    children,
    ...rest
  } = props;
  if (content && children) {
    throw new Error(`Cell: 不能同时设置content和子元素`);
  }

  const hasInput = !!children;
  const hasLabel = label || title;

  return (
    <StyledCell
      {...rest}
      ref={ref}
      className={clsx('uc-cell', className, {
        'clickable': typeof rest.onClick === 'function',
        'has-label': hasLabel,
      })}
    >
      <HairLineBox color={lineColor} className="cell-line">
        <div className={clsx('cell-inner', { mobile: isMobile, pc: !isMobile })}>
          {hasLabel && (
            <div className={clsx('cell-label', { input: hasInput })} style={{ width: labelWidth }}>
              <span className={clsx('label', { required: required })}>{label || title}</span>
              {description && <div className="description">{description}</div>}
            </div>
          )}
          <div className={clsx('cell-content', { input: hasInput })}>
            {content}
            {children}
          </div>
        </div>
      </HairLineBox>
    </StyledCell>
  );
});

Cell.displayName = 'UC-Cell';

export default Cell;
