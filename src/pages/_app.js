/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from '../store/store';
import GlobalStyles from '../styles/globalStyles';
import { light } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
