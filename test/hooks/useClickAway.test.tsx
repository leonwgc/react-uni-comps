import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import useClickAway from '../../src/hooks/useClickAway';

const TestDemo = ({ onClickAway, ...rest }) => {
  const ref = React.createRef<HTMLDivElement>();
  useClickAway(ref, onClickAway);

  return (
    <div {...rest}>
      <div title="child1" ref={ref} />
      <div title="child2" />
    </div>
  );
};

const TestDemo2 = ({ onClickAway, ...rest }) => {
  const ref = React.createRef<HTMLDivElement>();
  const ref1 = React.createRef<HTMLDivElement>();
  useClickAway([ref, ref1], onClickAway);

  return (
    <div {...rest}>
      <div title="child1" ref={ref} />
      <div title="child2" ref={ref1} />
      <div title="child3" />
    </div>
  );
};

const title = 'useClickAway';

describe('useClickAway', () => {
  test('one target', () => {
    const fn = jest.fn();
    render(<TestDemo title={title} onClickAway={fn} />);

    expect(fn).toBeCalledTimes(0);

    fireEvent.click(screen.getByTitle('child2'));
    expect(fn).toBeCalledTimes(1);

    fireEvent.click(screen.getByTitle('child2'));
    expect(fn).toBeCalledTimes(2);

    fireEvent.click(screen.getByTitle('child2'));
    expect(fn).toBeCalledTimes(3);
  });

  test('two targets', () => {
    const fn = jest.fn();
    render(<TestDemo2 title={title} onClickAway={fn} />);

    expect(fn).toBeCalledTimes(0);

    fireEvent.click(screen.getByTitle('child1'));
    expect(fn).toBeCalledTimes(0);

    fireEvent.click(screen.getByTitle('child2'));
    expect(fn).toBeCalledTimes(0);

    fireEvent.click(screen.getByTitle('child3'));
    expect(fn).toBeCalledTimes(1);

    fireEvent.click(screen.getByTitle('child3'));
    expect(fn).toBeCalledTimes(2);
  });
});
