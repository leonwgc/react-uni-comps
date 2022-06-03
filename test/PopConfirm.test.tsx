import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PopConfirm from '../src/PopConfirm';

const title = 'PopConfirm';

describe('PopConfirm test groups', () => {
  test('render', () => {
    render(
      <PopConfirm title="PopConfirm">
        <div title="hello">hello</div>
      </PopConfirm>
    );
    const el = screen.queryByTitle('PopConfirm');
    expect(el).toBeNull();
  });
});
