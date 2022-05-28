import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Icon from '../src/Icon';

const title = 'Icon';

describe('Icon test groups', () => {
  test('render', () => {
    render(<Icon title={title} type="uc-icon-horn"></Icon>);
    const item = screen.getByTitle(title);

    expect(item).toHaveClass('uc-icon');
    expect(item).toHaveStyle({
      color: 'inherit',
    });
  });

  test('size ', () => {
    render(<Icon title={title} style={{ fontSize: 30 }} type="uc-icon-horn"></Icon>);
    const item = screen.getByTitle(title);

    expect(item).toHaveClass('uc-icon');
    expect(item).toHaveStyle({
      'font-size': '30px',
    });
  });

  test('color ', () => {
    render(<Icon title={title} style={{ color: 'red' }} type="uc-icon-horn"></Icon>);
    const item = screen.getByTitle(title);

    expect(item).toHaveClass('uc-icon');
    expect(item).toHaveStyle({
      color: 'red',
    });
  });
});
