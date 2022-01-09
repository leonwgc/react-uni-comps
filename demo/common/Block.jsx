import React from 'react';
import { styled } from 'react-uni-comps';

const StyledBlock = styled.div`
  font-size: 14px;

  .title {
    padding: 12px 8px 6px;
    color: #969696;
    font-size: 14px;
  }

  .main {
    border: solid 1px #eee;
    border-right: none;
    border-left: none;
  }
`;

export default function Block({
  title,
  padding = '12px',
  background = '#fff',
  border,
  children,
  ...rest
}) {
  return (
    <StyledBlock {...rest}>
      <div className="title">{title}</div>
      <div
        className="main"
        style={{
          padding,
          background,
          border,
        }}
      >
        {children}
      </div>
    </StyledBlock>
  );
}
