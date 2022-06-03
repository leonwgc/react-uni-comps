import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Pullup from '../src/Pullup';

const title = 'Pullup';

describe('Pullup test groups', () => {
  test('render', () => {
    const fetchData = jest.fn();
    render(
      <Pullup title="Pullup" fetchData={fetchData} finished>
        <div></div>
      </Pullup>
    );
    const el = screen.queryByTitle('Pullup');
    expect(el).not.toBeNull();
  });
});
