import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ScrollBox from '../src/ScrollBox';

const items = Array.from(new Array(10), (v, i) => i);

const title = 'ScrollBox';

describe('ScrollBox test groups', () => {
  test('render', () => {
    render(
      <div style={{ width: 100, display: 'inline-block' }}>
        <ScrollBox title="ScrollBox" showIndicator fillColor="red">
          {items.map((i) => (
            <div style={{ width: 30 }} key={i}>
              {i}
            </div>
          ))}
        </ScrollBox>
      </div>
    );
    const el = screen.queryByTitle('ScrollBox');
    expect(el).not.toBeNull();
    expect(el.childNodes.length).toBe(2);

    debug();
  });

  test('render showIndicator=false', () => {
    render(
      <div style={{ width: 100, display: 'inline-block' }}>
        <ScrollBox title="ScrollBox" showIndicator={false}>
          {items.map((i) => (
            <div style={{ width: 30 }} key={i}>
              {i}
            </div>
          ))}
        </ScrollBox>
      </div>
    );
    const el = screen.queryByTitle('ScrollBox');
    expect(el).not.toBeNull();
    expect(el.childNodes.length).toBe(1);
  });

  test('render not scroll', () => {
    render(
      <div style={{ width: 100, display: 'inline-block' }}>
        <ScrollBox title="ScrollBox">
          <div style={{ width: 10 }}>1</div>
        </ScrollBox>
      </div>
    );
    const el = screen.queryByTitle('ScrollBox');
    expect(el).not.toBeNull();

    expect(getComputedStyle(el.lastChild as HTMLElement).getPropertyValue('visibility')).toBe(
      'hidden'
    );
  });
});
