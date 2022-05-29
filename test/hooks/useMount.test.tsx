import { renderHook, act } from '@testing-library/react-hooks';
import useMount from '../../src/hooks/useMount';

describe('useMount', () => {
  test('init', () => {
    const fn = jest.fn();
    renderHook(() => useMount(fn));

    expect(fn).toBeCalledTimes(1);
  });

  test('rerender', () => {
    const fn = jest.fn();
    const { rerender } = renderHook(() => useMount(fn));
    rerender();

    expect(fn).toBeCalledTimes(1);
  });
});
