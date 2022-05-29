import { renderHook, act } from '@testing-library/react-hooks';
import { render } from 'react-dom';
import usePrevious from '../../src/hooks/usePrevious';

describe('usePrevious', () => {
  test('init', () => {
    let a = 1;
    const { result } = renderHook(() => usePrevious(a));

    expect(result.current).toBeUndefined();
  });

  test('rerender', () => {
    let a = 1;
    const { result, rerender } = renderHook(() => usePrevious(a));

    expect(result.current).toBeUndefined();

    rerender();
    expect(result.current).toBe(1);
  });
});
