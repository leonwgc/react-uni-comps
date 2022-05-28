import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Button from '../src/Button';

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

  test('wait', async () => {
    render(<Button wait>button</Button>);
    const btn = screen.getByText('button');
    await (async () => {
      userEvent.click(btn);
      expect(btn).toHaveClass('disabled');
    });

    // jest.advanceTimersByTime(1000);
    expect(btn).not.toHaveClass('disabled');
  });

  test.each([
    ['htmlType', 'submit'],
    ['htmlType', 'reset'],
    ['htmlType', 'button'],
  ])('htmlType', (htmlType, value: any) => {
    render(<Button htmlType={value}>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveAttribute('type', value);
  });

  test('loading', () => {
    render(<Button loading>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveTextContent('button');
    expect(btn).not.toHaveClass('disabled');
  });

  test('block', () => {
    render(<Button block>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveTextContent('button');
    expect(btn).toHaveClass('block');
  });
  test('circle', () => {
    render(<Button circle>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveTextContent('button');
    expect(btn).toHaveClass('circle');
  });
  test('dashed', () => {
    render(<Button dashed>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveTextContent('button');
    expect(btn).toHaveClass('dashed');
  });
  test('ghost', () => {
    render(<Button ghost>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveTextContent('button');
    expect(btn).toHaveClass('ghost');
  });
  test('danger', () => {
    render(<Button danger>button</Button>);
    const btn = screen.getByText('button');
    expect(btn).toHaveTextContent('button');
    expect(btn).toHaveClass('danger');
  });

  test('icon', () => {
    render(<Button icon={'icon'}>button</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('icon');
  });

  test('only icon', () => {
    render(<Button icon={'icon'}></Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('icon');
  });

  test('classname', () => {
    render(<Button className="mybutton"></Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass('mybutton');
  });
});
