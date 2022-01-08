import React from 'react';
import { styled, ThemeProvider } from 'react-uni-comps';
import { Provider, configureStore } from 'simple-redux-store';

const StyledWrap = styled.div`
  padding: 16px;
  font-size: 14px;
`;

const initialState = { theme: '#005cff' };
const store = configureStore(initialState);

export default function PageWrap({ children, ...rest }) {
  return (
    <Provider store={store}>
      <ThemeProvider color={'#005cff'}>
        <StyledWrap {...rest}>{children}</StyledWrap>
      </ThemeProvider>
    </Provider>
  );
}
