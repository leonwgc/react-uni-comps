import React, { useRef, useImperativeHandle, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Button from './Button';
import Space from './Space';
import IconArrow from './IconArrow';
import useUpdateEffect from './hooks/useUpdateEffect';
import type { BaseProps } from './types';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** 可视按钮数量 */
  visiblePageCount?: number;
  /** 首页文本 */
  firstText?: string;
  /** 尾页文本 */
  lastText?: string;
  /** 只有一页时是否显示, false */
  showIfOnePage?: boolean;
  /** 是否显示首页尾页, false */
  showFirstLastText?: boolean;
  /** 总页数 */
  pageCount?: number;
  /** 当前页,1~n */
  currentPage?: number;
  /** 当前页改变回调 */
  onPageChange?: (page: number) => void;
} & BaseProps;

/**
 * get pages arr
 *
 * @param {number} currentPage
 * @param {number} pageCount
 * @param {number} visiblePageCount
 * @return {*}  {Array<number>}
 */
function getPages(currentPage: number, pageCount: number, visiblePageCount: number): Array<number> {
  let low, high, v;

  const pages = [];

  if (pageCount === 0) {
    return pages;
  }

  if (currentPage > pageCount) {
    currentPage = 1;
  }

  if (pageCount <= visiblePageCount) {
    low = 1;
    high = pageCount;
  } else {
    v = Math.ceil(visiblePageCount / 2);
    low = Math.max(currentPage - v, 1);
    high = Math.min(low + visiblePageCount - 1, pageCount);

    if (pageCount - high < v) {
      low = high - visiblePageCount + 1;
    }
  }

  for (; low <= high; low++) {
    pages.push(low);
  }

  return pages;
}

const StyledWrap = styled.div`
  font-size: 14px;
  .uc-button {
    width: 32px;
    padding: 0;
    transition: none;
  }

  &.no-page {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

/** 分页 */
const Pagination = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    currentPage = 1,
    pageCount,
    visiblePageCount = 10,
    firstText = <Button as="a">首页</Button>,
    lastText = <Button as="a">末页</Button>,
    showFirstLastText,
    showIfOnePage,
    onPageChange,
    className,
    ...rest
  } = props;

  const domRef = useRef();

  const [page, setPage] = useState(currentPage);

  const [pages, setPages] = useState(() => {
    return getPages(page, pageCount, visiblePageCount);
  });

  useUpdateEffect(() => {
    onPageChange?.(page);
  }, [page]);

  // outside
  useUpdateEffect(() => {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [currentPage]);

  useUpdateEffect(() => {
    setPages(getPages(page, pageCount, visiblePageCount));
  }, [visiblePageCount, page, pageCount]);

  useImperativeHandle(ref, () => domRef.current);

  const renderPage = () => {
    return (
      <>
        {showFirstLastText && (
          <Button className="first-page" onClick={() => setPage(1)} as="a">
            {firstText}
          </Button>
        )}
        <Button
          className="prev-page"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          <IconArrow direction="left" />
        </Button>
        {pages.map((p) => {
          return (
            <Button
              outlined={p === page}
              className={clsx('page-item', { active: p === page })}
              key={p}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          );
        })}
        <Button
          className="next-page"
          disabled={page === pageCount}
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
        >
          <IconArrow direction="right" />
        </Button>
        {showFirstLastText && (
          <Button className="last-page" onClick={() => setPage(pageCount)} as="a">
            {lastText}
          </Button>
        )}
      </>
    );
  };

  return (
    (showIfOnePage || pageCount > 1) && (
      <StyledWrap
        {...rest}
        ref={domRef}
        className={clsx('uc-pagination', className, { 'no-page': visiblePageCount === 0 })}
      >
        {visiblePageCount === 0 && renderPage()}
        {visiblePageCount > 0 && <Space>{renderPage()}</Space>}
      </StyledWrap>
    )
  );
});

Pagination.displayName = 'UC-Pagination';

export default Pagination;
