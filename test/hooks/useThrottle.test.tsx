import { renderHook, act } from '@testing-library/react-hooks';
import useThrottle from '../../src/hooks/useThrottle';

describe('useThrottle', () => {
  test('timeout default 180', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useThrottle(fn));

    result.current();

    jest.advanceTimersByTime(180);
    expect(fn).toBeCalledTimes(1);
  });

  test('timeout', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useThrottle(fn, 1000));

    result.current();
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
    result.current();
    expect(fn).toBeCalledTimes(2);
  });
});
