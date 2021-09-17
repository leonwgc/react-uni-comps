import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import * as colors from './colors';
import HairLineBox from './HairLineBox';
import clsx from 'clsx';

type Props = {
  /** 标题 */
  title?: React.ReactNode;
  /** 标题下方描述 */
  description?: React.ReactNode;
  /** 右侧内容 */
  content?: React.ReactNode;
  /** 底部线条颜色,默认#eee,不想要线条，设置为透明 */
  lineColor?: string;
  /** 通常放input/textarea等输入控件 */
  children?: React.ReactNode | React.ReactNode[];
} & HTMLAttributes<HTMLDivElement>;

const StyledCell = styled.div`
  background-color: #fff;
  padding-left: 12px;
  &.clickable {
    &:active {
      background-color: ${colors.activeBg};
    }
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

    .cell-title {
      box-sizing: border-box;
      margin-right: 12px;
      text-align: left;
      flex: 1;

      .title {
        color: #333;
      }

      .description {
        color: #999;
        margin-top: 4px;
        line-height: 18px;
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
  const { title, description, content, lineColor = colors.border, children, ...rest } = props;
  if (content && children) {
    throw new Error(`Cell: 不能同时设置content和子元素`);
  }

  return (
    <StyledCell
      {...rest}
      ref={ref}
      className={clsx('uc-cell', { clickable: typeof rest.onClick === 'function' })}
    >
      <HairLineBox color={lineColor} className="cell-line">
        <div className={clsx('cell-inner')}>
          <div className={clsx('cell-title', { input: !!children })}>
            <span className="title">{title}</span>
            {description && <div className="description">{description}</div>}
          </div>
          <div className={clsx('cell-content', { input: !!children })}>
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
