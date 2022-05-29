import { renderHook, act } from '@testing-library/react-hooks';
import useCountdown from '../../src/hooks/useCountdown';

describe('useCountdown', () => {
  test('init', () => {
    const { result } = renderHook(() => useCountdown());

    expect(result.current.countdown).toBe(60);
  });

  test('start', () => {
    const { result, rerender } = renderHook(() => useCountdown());

    expect(result.current.countdown).toBe(60);

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBe(true);
  });

  test('tick', () => {
    const { result, rerender } = renderHook(() => useCountdown());

    expect(result.current.countdown).toBe(60);

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBe(true);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.countdown).toBe(59);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.countdown).toBe(58);
  });

  test('isReStarted', () => {
    const { result, rerender } = renderHook(() => useCountdown());

    expect(result.current.countdown).toBe(60);

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBe(true);

    expect(result.current.isReStarted).toBe(false);

    act(() => {
      result.current.reset();
    });

    expect(result.current.isRunning).toBe(false);
  });
});
