import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Affix from '../src/Affix';

const title = 'Affix';

describe('Affix test groups', () => {
  test('render', () => {
    render(<Affix title="Affix" />);
    const el = screen.getByTitle('Affix');
    expect(el).toBeDefined();
  });
});
