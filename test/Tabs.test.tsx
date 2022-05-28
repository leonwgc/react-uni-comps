import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Tabs from '../src/Tabs';

const title = 'Tabs';

describe('Tabs test groups', () => {
  test('render without children', () => {
    render(
      <div title={title}>
        <Tabs></Tabs>
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item).toBeEmptyDOMElement();
  });

  test('render children', () => {
    render(
      <Tabs title={title}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    expect(item).toHaveTextContent('tab1');
    const tab1 = screen.getByText('tab1');
    expect(tab1).toHaveClass('active');
  });

  test('render', () => {
    render(
      <Tabs title={title} defaultValue={1}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const tab1 = screen.getByText('tab2');
    expect(tab1).toHaveClass('active');
  });

  test('tab content', () => {
    render(
      <Tabs title={title}>
        <Tabs.Tab title="tab1">content1</Tabs.Tab>
        <Tabs.Tab title="tab2">content2</Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const wrap = item.querySelector('.uc-tabs-content-wrap');
    expect(wrap).toHaveTextContent('content1');
  });

  test('tabWidth', () => {
    render(
      <Tabs title={title} tabWidth={100}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const tab1 = screen.getByText('tab1');
    expect(tab1).toHaveStyle({
      width: '100px',
    });
  });

  test('extra', () => {
    render(
      <Tabs title={title} extra={<button>extra</button>}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const extra = screen.getByRole('button');
    expect(extra).toHaveTextContent('extra');
  });

  test('click', () => {
    render(
      <Tabs title={title}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const tab1 = screen.getByText('tab1');
    expect(tab1).toHaveClass('active');
    const tab2 = screen.getByText('tab2');
    userEvent.click(tab2);
    expect(tab2).toHaveClass('active');
  });

  test('underline default', () => {
    render(
      <Tabs title={title}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const line = item.querySelector('.line');
    expect(line).toHaveStyle({
      width: '50%',
    });
  });

  test('underline true', () => {
    render(
      <Tabs title={title} underline>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const line = item.querySelector('.line');
    expect(line).toHaveStyle({
      width: '100%',
    });
  });

  test('underline false', () => {
    render(
      <Tabs title={title} underline={false}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const line = item.querySelector('.line');
    expect(line).toBeNull();
  });

  test('underline 100', () => {
    render(
      <Tabs title={title} underline={100}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const line = item.querySelector('.line');
    expect(line).toHaveStyle({
      width: '100px',
    });
  });

  test('underline 100px', () => {
    render(
      <Tabs title={title} underline={'100px'}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const line = item.querySelector('.line');
    expect(line).toHaveStyle({
      width: '100px',
    });
  });

  test('border', () => {
    render(
      <Tabs title={title}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const wrap = item.querySelector('.uc-tabs-header-wrap');
    expect(wrap).toHaveStyle({
      'border-bottom': '1px solid #eee',
    });
  });

  test('no border', () => {
    render(
      <Tabs title={title} border={false}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );
    const item = screen.getByTitle(title);
    const wrap = item.querySelector('.uc-tabs-header-wrap');
    expect(wrap).toHaveStyle({
      'border-bottom': '',
    });
  });

  test('onChange', () => {
    const onChangeFn = jest.fn();
    render(
      <Tabs title={title} onChange={onChangeFn}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2"></Tabs.Tab>
      </Tabs>
    );

    userEvent.click(screen.getByText('tab2'));
    expect(onChangeFn).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByText('tab1'));
    expect(onChangeFn).toHaveBeenCalledTimes(2);
  });

  test('onChange with disabled', () => {
    const onChangeFn = jest.fn();
    render(
      <Tabs title={title} onChange={onChangeFn}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2" disabled></Tabs.Tab>
      </Tabs>
    );

    userEvent.click(screen.getByText('tab2'));
    expect(onChangeFn).toHaveBeenCalledTimes(0);
    userEvent.click(screen.getByText('tab1'));
    expect(onChangeFn).toHaveBeenCalledTimes(0);
  });

  test('controlled value', () => {
    const onChangeFn = jest.fn();

    const { rerender } = render(
      <Tabs title={title} value={0} onChange={onChangeFn}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2" disabled></Tabs.Tab>
      </Tabs>
    );

    expect(screen.getByText('tab1')).toHaveClass('active');

    rerender(
      <Tabs title={title} value={1} onChange={onChangeFn}>
        <Tabs.Tab title="tab1"></Tabs.Tab>
        <Tabs.Tab title="tab2" disabled></Tabs.Tab>
      </Tabs>
    );

    expect(screen.getByText('tab2')).toHaveClass('active');
  });
});
