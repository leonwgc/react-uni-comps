import { useEffect } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useUpdateEffect from '../../src/hooks/useUpdateEffect';

describe('useUpdateEffect', () => {
  test('init', () => {
    const fn = jest.fn();
    let a = 1;
    const { rerender } = renderHook(() => useUpdateEffect(fn, [a]));

    a = 2;
    rerender();
    expect(fn).toBeCalledTimes(1);
  });
});
