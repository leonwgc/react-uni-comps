import { renderHook, act } from '@testing-library/react-hooks';
import useLatest from '../../src/hooks/useLatest';

describe('useLatest', () => {
  test('get', () => {
    const { result } = renderHook(() => useLatest(1));

    expect(result.current.current).toBe(1);
  });

  test('rerender', () => {
    const { result, rerender } = renderHook(() => useLatest(1));

    expect(result.current.current).toBe(1);

    // won't change
    rerender();

    expect(result.current.current).toBe(1);
  });

  test('rerender and update', () => {
    const { result, rerender } = renderHook(() => useLatest(1));

    expect(result.current.current).toBe(1);

    // won't change
    rerender();

    act(() => {
      result.current.current = 10;
    });

    expect(result.current.current).toBe(10);
  });
});
