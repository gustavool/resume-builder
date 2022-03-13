/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { store, persistor } from '../store/store';
import GlobalStyles from '../styles/globalStyles';
import { light } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={light}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
