import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Tooltip from '../src/Tooltip';

const title = 'Tooltip';

describe('Tooltip test groups', () => {
  test('render', () => {
    render(
      <Tooltip title="Tooltip">
        <button />
      </Tooltip>
    );
    const el = screen.queryByTitle('Tooltip');
    expect(el).toBeNull();
  });
});
