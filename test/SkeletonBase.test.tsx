import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SkeletonElement from '../src/SkeletonElement';

describe('SkeletonElement test groups', () => {
  test('render', () => {
    render(<SkeletonElement title="SkeletonElement" />);
    const el = screen.getByTitle('SkeletonElement');
    expect(el).toBeDefined();
  });
});
