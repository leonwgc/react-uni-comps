import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import useUnmount from '../../src/hooks/useUnmount';

describe('useUnmount', () => {
  test('init', () => {
    const fn = jest.fn();
    renderHook(() => useUnmount(fn));

    expect(fn).toBeCalledTimes(0);
  });

  test('unmount', () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useUnmount(fn));
    rerender();

    expect(fn).toBeCalledTimes(0);

    cleanup();

    expect(fn).toBeCalledTimes(1);
  });
});
