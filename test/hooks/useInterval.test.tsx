import { renderHook } from '@testing-library/react-hooks';
import useInterval from '../../src/hooks/useInterval';

describe('useInterval', () => {
  test('1s', () => {
    const fn = jest.fn();
    renderHook(() => useInterval(fn, 1000));

    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(fn).toBeCalledTimes(3);
  });
});
