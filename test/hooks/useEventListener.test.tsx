import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useEventListener from '../../src/hooks/useEventListener';

const TestDemo = ({ type, handler, options = undefined, ...rest }) => {
  const ref = React.createRef<HTMLDivElement>();
  useEventListener(ref, type, handler, options);

  return <div {...rest} ref={ref}></div>;
};

const title = 'useEventListener';

describe('useEventListener', () => {
  test('click', () => {
    const fn = jest.fn();
    render(<TestDemo title={title} handler={fn} type="click" />);

    expect(fn).toBeCalledTimes(0);

    const item = screen.getByTitle(title);
    userEvent.click(item);
    expect(fn).toBeCalledTimes(1);

    userEvent.click(item);
    expect(fn).toBeCalledTimes(2);
  });

  test('focusin', () => {
    const fn = jest.fn();
    render(<TestDemo title={title} handler={fn} type="focusin" />);

    expect(fn).toBeCalledTimes(0);

    const item = screen.getByTitle(title);
    fireEvent.focusIn(item);
    expect(fn).toBeCalledTimes(1);
  });

  test('options:once', () => {
    const fn = jest.fn();
    render(<TestDemo title={title} handler={fn} type="click" options={{ once: true }} />);

    expect(fn).toBeCalledTimes(0);

    const item = screen.getByTitle(title);
    fireEvent.click(item);
    expect(fn).toBeCalledTimes(1);

    fireEvent.click(item);
    expect(fn).toBeCalledTimes(1);

    fireEvent.click(item);
    expect(fn).toBeCalledTimes(1);
  });
});
