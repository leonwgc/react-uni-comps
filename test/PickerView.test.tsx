
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PickerView from '../src/PickerView';

const title = 'PickerView';

describe('PickerView test groups', () => {
    test('render', () => {
      render(<PickerView title="PickerView"/>);
      const el = screen.getByTitle('PickerView');
      expect(el).toBeDefined();
    });
});
