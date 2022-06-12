import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ImageViewer from '../src/ImageViewer';

const title = 'ImageViewer';

describe('ImageViewer test groups', () => {
  test('render', () => {
    // render(<ImageViewer title="ImageViewer"/>);
    // const el = screen.getByTitle('ImageViewer');
    // expect(el).toBeDefined();
  });
});
