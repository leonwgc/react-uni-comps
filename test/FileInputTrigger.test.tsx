
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import FileInputTrigger from '../src/FileInputTrigger';

const title = 'FileInputTrigger';

describe('FileInputTrigger test groups', () => {
    test('render', () => {
      render(<FileInputTrigger title="FileInputTrigger"/>);
      const el = screen.getByTitle('FileInputTrigger');
      expect(el).toBeDefined();
    });
});
