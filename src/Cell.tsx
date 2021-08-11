import React from 'react';
import styled from 'styled-components';
import HairLineBox from './HairLineBox';

export type Props = {
  label?: React.ReactNode /** 标题 */;
  content?: React.ReactNode /** 内容 */;
  lineColor?: string /** 底部线条颜色,默认#dcdcdc,不想要线条，设置为透明 */;
};

const StyledCell = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;

  .cell__title {
    box-sizing: border-box;
    width: 6.2em;
    margin-right: 12px;
    text-align: left;
    word-wrap: break-word;
  }
  .cell__value {
    flex: 1;
    position: relative;
    overflow: visible;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;

    .field__body {
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
        line-height: inherit;
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
const Cell: React.FC<Props> = ({ label, content, lineColor = '#dcdcdc', children }) => {
  if (content && children) {
    throw new Error(`don't set content and children at the same time`);
  }
  return (
    <HairLineBox color={lineColor}>
      <StyledCell>
        <div className="cell__title">
          <span>{label}</span>
        </div>
        <div className="cell__value">
          <span>{content}</span>
          {children ? <div className="field__body">{children}</div> : null}
        </div>
      </StyledCell>
    </HairLineBox>
  );
};

export default Cell;
