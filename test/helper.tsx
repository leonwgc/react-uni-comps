import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from '../src/ThemeProvider';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider color="#005cff">{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
