import { renderHook, act } from '@testing-library/react-hooks';
import useUnmount from '../../src/hooks/useUnmount';

describe('useUnmount', () => {
  test('init', () => {
    const fn = jest.fn();
    renderHook(() => useUnmount(fn));

    expect(fn).toBeCalledTimes(0);
  });

  test('rerender', () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useUnmount(fn));
    rerender();

    expect(fn).toBeCalledTimes(0);
  });
});
