// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { toggleTheme } from '../../store/actions/themeActions';
import * as S from './styles';

export default function ToggleThemeButton() {
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.themeReducer.theme);

  function handleToggleTheme() {
    dispatch(
      toggleTheme({
        theme: selectedTheme === 'light' ? 'dark' : 'light',
      })
    );
  }

  return (
    <S.Container onClick={handleToggleTheme}>
      <S.ThemeOption selectedTheme={selectedTheme} />
    </S.Container>
  );
}
