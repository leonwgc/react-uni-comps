import React from 'react';
import { render, screen } from '../test/test-utils';
import '@testing-library/jest-dom';
import Button from './Button';

describe('button test groups', () => {
  test('render as button', () => {
    render(<Button>button</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('button');
  });

  test('classname check', () => {
    render(<Button>button</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('uc-button');
    expect(btn).toHaveClass('uc-btn');
  });

  test('classname default to default', () => {
    render(<Button>button</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('default');
  });

  test('type', () => {
    render(<Button type="primary">button</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('primary');
  });

  test('outlined', () => {
    render(
      <Button type="primary" outlined>
        button
      </Button>
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('outlined');
  });

  test('disabled', () => {
    render(<Button disabled>button</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
  });

  test('as', () => {
    render(<Button as="a">link</Button>);
    const btn = screen.getByText('link');
    expect(btn).toHaveTextContent('link');
  });
});
