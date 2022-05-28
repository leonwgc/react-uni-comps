import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Spin from '../src/Spin';

const title = 'Spin';

describe('Spin test groups', () => {
  test('render', () => {
    render(<Spin title={title}></Spin>);
    const item = screen.getByTitle(title);
    expect(item).toHaveClass('uc-spin');
  });

  test('size ', () => {
    render(<Spin title={title} style={{ fontSize: 30 }} />);
    const item = screen.getByTitle(title);
    expect(item).toHaveStyle({
      'font-size': '30px',
    });
  });

  test('color ', () => {
    render(<Spin title={title} style={{ color: 'red' }} />);
    const item = screen.getByTitle(title);
    expect(item).toHaveStyle({
      color: 'red',
    });
  });
});
