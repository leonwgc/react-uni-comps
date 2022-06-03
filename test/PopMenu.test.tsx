import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PopMenu from '../src/PopMenu';

const title = 'PopMenu';

describe('PopMenu test groups', () => {
  test('render', () => {
    render(
      <PopMenu title="PopMenu">
        <div title="hello">hello</div>
      </PopMenu>
    );
    const el = screen.queryByTitle('PopMenu');
    expect(el).toBeNull();
  });

  test('render click', () => {
    render(
      <PopMenu title="PopMenu">
        <div title="hello">hello</div>
      </PopMenu>
    );
    let el = screen.queryByTitle('PopMenu');
    expect(el).toBeNull();

    const content = screen.getByTitle('hello');

    userEvent.click(content);

    el = screen.queryByTitle('PopMenu');

    expect(el).not.toBeNull();
  });

  test('render hover', () => {
    render(
      <PopMenu title="PopMenu" trigger="hover">
        <div title="hello">hello</div>
      </PopMenu>
    );
    let el = screen.queryByTitle('PopMenu');
    expect(el).toBeNull();

    const content = screen.getByTitle('hello');
    userEvent.hover(content);

    el = screen.queryByTitle('PopMenu');

    expect(el).not.toBeNull();
  });
});
