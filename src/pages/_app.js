/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ThemeReduxWrapper from '../components/ThemeReduxWrapper';
import { store, persistor } from '../store/store';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeReduxWrapper>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeReduxWrapper>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
