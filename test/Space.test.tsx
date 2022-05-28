import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Space from '../src/Space';

describe('Space test groups', () => {
  test('render', () => {
    render(
      <Space title="space">
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveTextContent('1');
    expect(item).toHaveTextContent('2');
    expect(item).toHaveClass('uc-space');
    expect(item).toHaveStyle({
      'column-gap': '8px',
      'row-gap': '8px',
    });
  });

  test('style', () => {
    render(
      <Space title="space">
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '8px',
      'row-gap': '8px',
    });
  });

  test('size', () => {
    render(
      <Space title="space" size={10}>
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '10px',
      'row-gap': '10px',
    });
  });

  test('size array', () => {
    render(
      <Space title="space" size={[10, 20]}>
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '10px',
      'row-gap': '20px',
    });
  });

  test('direction', () => {
    render(
      <Space title="space" direction="horizontal">
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '8px',
      'row-gap': '8px',
    });
  });

  test('direction vertical', () => {
    render(
      <Space title="space" direction="vertical">
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '8px',
      'row-gap': '8px',
      'flex-direction': 'column',
    });
  });

  test('split', () => {
    render(
      <Space title="space" split="|">
        <span>1</span>
        <span>2</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveTextContent('|');
  });

  test('wrap', () => {
    render(
      <Space title="space" wrap>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '8px',
      'row-gap': '8px',
      'flex-wrap': 'wrap',
    });
  });

  test('align', () => {
    render(
      <Space title="space" align="flex-start">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Space>
    );
    const item = screen.getByTitle('space');
    expect(item).toHaveStyle({
      'column-gap': '8px',
      'row-gap': '8px',
      'align-items': 'flex-start',
    });
  });
});
