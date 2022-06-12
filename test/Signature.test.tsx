import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Signature from '../src/Signature';

const title = 'Signature';

describe('Signature test groups', () => {
  test('render', () => {
    // render(<Signature title="Signature" />);
    // const el = screen.queryByTitle('Signature');
    // expect(el).not.toBeNull();
  });
});
