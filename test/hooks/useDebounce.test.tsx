import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from '../../src/hooks/useDebounce';

describe('useDebounce', () => {
  test('timeout default 180', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useDebounce(fn));

    result.current();
    result.current();
    result.current();

    jest.advanceTimersByTime(180);

    expect(fn).toBeCalledTimes(1);
  });

  test('timeout', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useDebounce(fn, 2000));

    result.current();
    result.current();
    result.current();

    jest.advanceTimersByTime(180);
    expect(fn).toBeCalledTimes(0);

    jest.advanceTimersByTime(2000);
    expect(fn).toBeCalledTimes(1);
  });
});
