
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Text from '../src/Text';

const title = 'Text';

describe('Text test groups', () => {
    test('render', () => {
      render(<Text title="Text"/>);
      const el = screen.getByTitle('Text');
      expect(el).toBeDefined();
    });
});
