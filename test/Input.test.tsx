import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Input from '../src/Input';

const title = 'Input';

describe('Input test groups', () => {
  test('render', () => {
    render(
      <div title={title}>
        <Input />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.firstChild).toHaveClass('uc-input');
  });

  test('readOnly', () => {
    render(
      <div title={title}>
        <Input readOnly />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('input')).toHaveAttribute('readonly');
  });

  test('onPressEnter', () => {
    const enterFn = jest.fn();
    render(
      <div title={title}>
        <Input onPressEnter={enterFn} />
      </div>
    );
    const item = screen.getByTitle(title);
    const input = item.querySelector('input');
    userEvent.type(input, '{enter}');
    expect(enterFn).toBeCalledTimes(1);
  });

  test('onChange', () => {
    const onChangeFn = jest.fn();
    render(
      <div title={title}>
        <Input onChange={onChangeFn} />
      </div>
    );
    const item = screen.getByTitle(title);
    const input = item.querySelector('input');
    userEvent.type(input, 'abc');
    expect(onChangeFn).toBeCalledTimes(3);
  });

  test('onFocus', () => {
    const focusFn = jest.fn();
    render(
      <div title={title}>
        <Input onFocus={focusFn} />
      </div>
    );
    const item = screen.getByTitle(title);
    const input = item.querySelector('input');
    userEvent.type(input, '1');
    expect(focusFn).toBeCalledTimes(1);
  });

  test('ime', () => {
    //TODO: change
    render(
      <div title={title}>
        <Input ime value="222" />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('input')).toHaveValue('222');
  });

  test('clearable', () => {
    render(
      <div title={title}>
        <Input value="123" onChange={jest.fn()} clearable />
      </div>
    );
    const item = screen.getByTitle(title);
    userEvent.type(item.querySelector('input'), 'hello');
    expect(item.querySelector('.clear')).not.toBeNull();
  });

  test('disabled', () => {
    render(
      <div title={title}>
        <Input disabled />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('input')).toBeDisabled();
  });

  test('prefix', () => {
    render(
      <div title={title}>
        <Input prefix={'prefix'} />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-input')).toHaveTextContent('prefix');
    expect(item.querySelector('.prefix')).toHaveTextContent('prefix');
  });

  test('suffix', () => {
    render(
      <div title={title}>
        <Input suffix={'suffix'} />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-input')).toHaveTextContent('suffix');
    expect(item.querySelector('.suffix')).toHaveTextContent('suffix');
  });

  test('textArea', () => {
    render(
      <div title={title}>
        <Input rows={1} />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('textarea')).not.toBeNull();
  });

  test('textArea row>1', () => {
    render(
      <div title={title}>
        <Input rows={2} />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('textarea')).toHaveAttribute('rows', '2');
  });

  test('textArea row>1', () => {
    const onChange = jest.fn();
    render(
      <div title={title}>
        <Input rows={2} value="" onChange={onChange} autoHeight />
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('textarea')).toHaveAttribute('rows', '2');
  });
});
