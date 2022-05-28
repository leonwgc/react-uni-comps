import React from 'react';
import { render, screen } from '@testing-library/react';
import { debug } from 'jest-preview';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Popup from '../src/Popup';

const title = 'Popup';

describe('Popup test groups', () => {
  test('render empty', () => {
    render(
      <div title={title}>
        <Popup></Popup>
      </div>
    );
    const item = screen.getByTitle(title);
    expect(item).toBeEmptyDOMElement();
  });

  test('render', () => {
    render(<Popup visible title={title}></Popup>);
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-popup')).not.toBeUndefined();
    expect(item.querySelector('.uc-mask')).not.toBeUndefined();
  });

  test('render children', () => {
    render(
      <Popup visible title={title}>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item).toHaveTextContent('content');
  });

  test('position', () => {
    render(
      <Popup visible title={title} position="bottom">
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item).toHaveTextContent('content');
  });

  test('flip', () => {
    render(
      <Popup visible title={title} position="center" flip>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item).toHaveTextContent('content');
  });

  test('class', () => {
    render(
      <Popup visible title={title} className="hi" position="center" flip>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-popup')).toHaveClass('hi');
  });

  test('no mask', () => {
    render(
      <Popup visible title={title} mask={false}>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-mask')).toBeNull();
  });

  test('mask', () => {
    render(
      <Popup visible title={title} mask>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-mask')).not.toBeNull();
  });

  test('mask style', () => {
    render(
      <Popup visible title={title} mask maskStyle={{ color: 'red' }}>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    expect(item.querySelector('.uc-mask')).toHaveStyle({
      color: 'red',
    });
  });

  test('closeOnMaskClick', () => {
    const handleClose = jest.fn();
    render(
      <Popup visible title={title} onClose={handleClose}>
        <div>content</div>
      </Popup>
    );
    const item = screen.getByTitle(title);
    const mask = item.querySelector('.uc-mask');
    userEvent.click(mask);

    expect(handleClose).toBeCalledTimes(1);
  });
});
