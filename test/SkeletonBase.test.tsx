
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SkeletonBase from '../src/SkeletonBase';

const title = 'SkeletonBase';

describe('SkeletonBase test groups', () => {
    test('render', () => {
      render(<SkeletonBase title="SkeletonBase"/>);
      const el = screen.getByTitle('SkeletonBase');
      expect(el).toBeDefined();
    });
});
