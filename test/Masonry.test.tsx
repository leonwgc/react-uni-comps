import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Masonry from '../src/Masonry';

const title = 'Masonry';

describe('Masonry test groups', () => {
  test('render', () => {
    render(
      <Masonry title="Masonry">
        <div>1</div>
        <div>2</div>
      </Masonry>
    );
    // const el = screen.getByTitle('Masonry');
    // expect(el).toBeDefined();
  });
});
