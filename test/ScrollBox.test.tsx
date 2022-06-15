import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ScrollBox from '../src/ScrollBox';

const items = Array.from(new Array(30), (v, i) => i);

const title = 'ScrollBox';

describe('ScrollBox test groups', () => {
  test('render', () => {
    render(
      <div style={{ width: 100, display: 'inline-block', border: '1px solid #eee' }}>
        <ScrollBox title={title} showIndicator className="test" style={{ color: 'blue' }}>
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
    expect(el).toHaveClass('test');
    expect(el).toHaveStyle({ color: 'blue' });
    expect(el.childNodes.length).toBe(2);
    fireEvent(el.querySelector('.uc-scroll-box-body'), new Event('scroll', { left: 30 }));
    jest.advanceTimersByTime(100);
    debug();
  });

  test('render fillColor', () => {
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

    expect(el.querySelector('.uc-scroll-box-fill')).toHaveStyle({ 'background-color': 'red' });
  });

  test('render indicatorClass', () => {
    render(
      <div style={{ width: 100, display: 'inline-block' }}>
        <ScrollBox title="ScrollBox" showIndicator indicatorClass="test">
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

    expect(el.querySelector('.uc-scroll-box-track')).toHaveClass('test');
  });

  test('render indicatorStyle', () => {
    render(
      <div style={{ width: 100, display: 'inline-block' }}>
        <ScrollBox title="ScrollBox" showIndicator indicatorStyle={{ color: 'blue' }}>
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

    expect(el.querySelector('.uc-scroll-box-track')).toHaveStyle({ color: 'blue' });
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
    expect(el.querySelector('.uc-scroll-box-track')).toBe(null);
  });

  test('render no scroll', () => {
    render(
      <div style={{ width: 100, display: 'inline-block' }}>
        <ScrollBox title="ScrollBox" showIndicator>
          <div style={{ width: 10 }}>1</div>
        </ScrollBox>
      </div>
    );
    const el = screen.queryByTitle('ScrollBox');
    expect(el).not.toBeNull();

    expect(el.lastChild).toHaveStyle({ visibility: 'hidden' });
  });
});
