import React, { useState } from 'react';
import PageWrap from './common/PageWrap';
import DemoBlock from './common/DemoBlock';
import { Pagination, Space, styled } from 'react-uni-comps';

const StyledPagination = styled(Pagination)`
  .uc-button {
    border-width: 0;

    &.active {
      border-width: 1px;
      width: 24px;
      height: 24px;
    }
  }
`;

export default function App() {
  const [page, setPage] = useState(2);
  return (
    <PageWrap>
      <DemoBlock title="默认">
        <Pagination pageCount={4} />
      </DemoBlock>
      <DemoBlock title="显示首尾页">
        <Space direction="vertical" size={24}>
          <Pagination pageCount={2} showFirstLastText />

          <Pagination pageCount={2} showFirstLastText firstText="first" lastText="last" />
        </Space>
      </DemoBlock>
      <DemoBlock title="可视页按钮数量">
        <Space direction="vertical" size={24}>
          <Pagination
            pageCount={4}
            currentPage={page}
            onPageChange={(p) => {
              setPage(p);
            }}
            visiblePageCount={0}
          />

          <Pagination
            pageCount={4}
            currentPage={page}
            onPageChange={setPage}
            visiblepageCount={4}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title="只有一页">
        <Pagination pageCount={1} />

        <Pagination pageCount={1} showIfOnePage />
      </DemoBlock>

      <DemoBlock title="自定义样式">
        <StyledPagination pageCount={4} />
      </DemoBlock>
    </PageWrap>
  );
}
