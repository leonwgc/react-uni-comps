import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import WaitLoading from '../src/WaitLoading';

const title = 'WaitLoading';

describe('WaitLoading test groups', () => {
  test('render', () => {
    render(
      <WaitLoading>
        <div title={title}></div>
      </WaitLoading>
    );
    const el = screen.queryByTitle('WaitLoading');
    expect(el).toBeNull();
  });

  test('render wait 400ms', () => {
    render(
      <WaitLoading>
        <div title={title}></div>
      </WaitLoading>
    );
    const el = screen.queryByTitle('WaitLoading');
    expect(el).toBeNull();

    jest.advanceTimersByTime(400);

    const el1 = screen.queryByTitle('WaitLoading');
    expect(el1).not.toBeNull();
  });

  test('render wait 1s', () => {
    render(
      <WaitLoading wait={1000}>
        <div title={title}></div>
      </WaitLoading>
    );
    const el = screen.queryByTitle('WaitLoading');
    expect(el).toBeNull();

    jest.advanceTimersByTime(1000);

    const el1 = screen.queryByTitle('WaitLoading');
    expect(el1).not.toBeNull();
  });
});
