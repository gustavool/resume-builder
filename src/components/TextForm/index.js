import PropTypes from 'prop-types';

import * as S from './styles';

export default function TextForm({ children }) {
  return <S.Container>{children}</S.Container>;
}

TextForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
