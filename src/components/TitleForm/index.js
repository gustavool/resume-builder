import PropTypes from 'prop-types';

import * as S from './styles';

export default function TitleForm({ children }) {
  return <S.Container>{children}</S.Container>;
}

TitleForm.propTypes = {
  children: PropTypes.string.isRequired,
};
