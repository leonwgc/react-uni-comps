import { renderHook } from '@testing-library/react-hooks';
import useTimeout from '../../src/hooks/useTimeout';

describe('useTimeout', () => {
  test('1s', () => {
    const fn = jest.fn();
    renderHook(() => useTimeout(fn, 1000));

    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
  });
});
