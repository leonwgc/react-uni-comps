import { useEffect, useRef } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useForceUpdate from '../../src/hooks/useForceUpdate';

describe('useForceUpdate', () => {
  test('forcerender', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => {
      useEffect(() => fn());
      return useForceUpdate();
    });

    expect(fn).toBeCalledTimes(1);
    act(() => result.current());
    expect(fn).toBeCalledTimes(2);
  });
});
