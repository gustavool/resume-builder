import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '../styles/theme';

export default function ThemeReduxWrapper({ children }) {
  const selectedTheme = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={selectedTheme === 'light' ? light : dark}>
      {children}
    </ThemeProvider>
  );
}

ThemeReduxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
