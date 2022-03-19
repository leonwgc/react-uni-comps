import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';

export type ResultProps = {
  /** 图片下方的描述文字 */
  desc?: React.ReactNode;
  /** 自定义图片, 节点/图片链接 */
  image?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** 最下面的自定义节点 */
  extra?: React.ReactNode;
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .image {
    line-height: 1;
    img {
      max-width: 100%;
    }
  }
  .desc {
  }
  .extra {
  }
`;

/** 结果 */
const Result: React.FC<ResultProps> = (props) => {
  const { image, desc, className, extra, ...rest } = props;

  const imgNode = typeof image === 'string' ? <img src={image} alt="" /> : image;

  return (
    <StyledWrap {...rest} className={clsx('uc-result', className)}>
      <div className="image">{imgNode}</div>
      <div className="desc">{desc}</div>
      {extra && <div className="extra">{extra}</div>}
    </StyledWrap>
  );
};

Result.displayName = 'UC-Result';

export default Result;
