import PropTypes from 'prop-types';

import * as S from './styles';

export default function TextError({ children }) {
  return <S.Container>{children}</S.Container>;
}

TextError.propTypes = {
  children: PropTypes.string.isRequired,
};
