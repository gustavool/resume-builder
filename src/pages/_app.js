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
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Header>Teste</Header>
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
