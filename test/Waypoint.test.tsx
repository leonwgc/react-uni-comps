
import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Waypoint from '../src/Waypoint';

const title = 'Waypoint';

describe('Waypoint test groups', () => {
    test('render', () => {
      render(<Waypoint title="Waypoint"/>);
      const el = screen.getByTitle('Waypoint');
      expect(el).toBeDefined();
    });
});
