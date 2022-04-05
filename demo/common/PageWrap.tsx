import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'react-uni-comps';
import { Provider, configureStore } from 'simple-redux-store';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(245, 247, 250);
    font-size: 14px;
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', STHeiti,
    'Microsoft Yahei', Tahoma, Simsun, sans-serif;
  }
`;

const getColor = () => document.documentElement.style.getPropertyValue('--uc-color') || '#005cff';

const initialState = { theme: getColor() };
const store = configureStore(initialState);

export default function PageWrap({ children, ...rest }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider color={getColor()}>{children}</ThemeProvider>
    </Provider>
  );
}
