import React from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import { isMobile } from './dom';
import HairLineBox from './HairLineBox';
import clsx from 'clsx';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 是否显示红色*标记 */
  required?: boolean | string;
  /**
   * 老代码label
   * @deprecated
   */
  title?: React.ReactNode;
  /** 标题 */
  label?: React.ReactNode;
  /** 标题下方描述 */
  description?: React.ReactNode;
  /** 右侧内容 */
  content?: React.ReactNode;
  /**
   * 底部线条颜色,不要线条，设置为透明
   * @default #eee
   *  */
  lineColor?: string;
  /** 通常放input/textarea等输入控件 */
  children?: React.ReactNode;
  /**
   * label左边是否加12px的padding
   * @default true
   */
  withPaddingLeft?: boolean;
};

const StyledCell = styled.div`
  background-color: #fff;

  &.clickable {
    &:active {
      background-color: ${vars.activeBg};
    }
  }

  &.label-padding {
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
      text-align: left;
      flex: 1;

      .label {
        color: #333;

        &.required::before {
          content: attr(data-required);
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
    description,
    className,
    content,
    lineColor = vars.border,
    children,
    withPaddingLeft = true,
    ...rest
  } = props;
  if (content && children) {
    throw new Error(`Cell: 不能同时设置content和子元素`);
  }

  const hasInput = !!children;
  const hasLabel = label || title;
  const hasContent = content || children;

  const dataRequired = required ? (typeof required === 'boolean' ? '*' : required) : undefined;

  return (
    <StyledCell
      {...rest}
      ref={ref}
      className={clsx('uc-cell', className, {
        'clickable': typeof rest.onClick === 'function',
        'label-padding': hasLabel && withPaddingLeft,
      })}
    >
      <HairLineBox color={lineColor} className="cell-line">
        <div className={clsx('cell-inner', { mobile: isMobile, pc: !isMobile })}>
          {hasLabel && (
            <div className={clsx('cell-label', { input: hasInput })}>
              <span
                data-required={dataRequired}
                className={clsx('label', { required: !!required })}
              >
                {label || title}
              </span>
              {description && <div className="description">{description}</div>}
            </div>
          )}
          {hasContent && (
            <div className={clsx('cell-content', { input: hasInput })}>
              {content}
              {children}
            </div>
          )}
        </div>
      </HairLineBox>
    </StyledCell>
  );
});

Cell.displayName = 'UC-Cell';

export default Cell;
