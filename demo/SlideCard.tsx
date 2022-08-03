import React, { useState } from 'react';
import { Slide, styled } from 'react-uni-comps';

const StyledCard = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

const StyledWrap = styled.div`
  .indicator {
    display: flex;
    justify-content: flex-end;
    height: 44px;
    align-items: center;
    padding-right: 12px;
  }
`;

const colors = ['rgb(0, 188, 112)', 'rgb(24, 144, 255)', 'rgb(245, 34, 45)', 'rgb(113, 47, 209)'];

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <StyledWrap>
      <div className="indicator">
        {index + 1} / {colors.length}
      </div>
      <Slide onPageChange={(page) => setIndex(page)} showPageIndicator={false}>
        {colors.map((item, index) => (
          <StyledCard key={index} style={{ background: item }}>
            {index + 1}
          </StyledCard>
        ))}
      </Slide>
    </StyledWrap>
  );
}
