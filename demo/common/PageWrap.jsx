import React from 'react';
import { styled, ThemeProvider } from 'react-uni-comps';
import { Provider, configureStore } from 'simple-redux-store';

const StyledWrap = styled.div`
  padding: 16px;
  font-size: 14px;
`;

const initialState = { theme: '#FF5D0D' };
const store = configureStore(initialState);

export default function PageWrap({ children, ...rest }) {
  return (
    <Provider store={store}>
      <ThemeProvider color={'#FF5D0D'}>
        <StyledWrap {...rest}>{children}</StyledWrap>
      </ThemeProvider>
    </Provider>
  );
}
