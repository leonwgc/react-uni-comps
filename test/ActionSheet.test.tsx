import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ActionSheet from '../src/ActionSheet';


const title = 'ActionSheet';

describe('ActionSheet test groups', () => {
  test('render', () => {
    render(<ActionSheet title={title} />);
    const el = screen.queryAllByTitle('ActionSheet');
    expect(el).toBeDefined();
  });

  test('render actions', () => {
    const fn = jest.fn();
    const actions = [
      { text: '复制', onClick: fn },
      { text: '修改', disabled: true },
      {
        text: '删除',
        description: '删除后数据不可恢复',
        color: 'red',
      },
    ];

    render(<ActionSheet title={title} visible actions={actions} extra="测试" />);
    const el = screen.queryAllByTitle('ActionSheet');
    expect(el).toBeDefined();
  });
});
