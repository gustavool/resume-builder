import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputText({ children, placeholder }) {
  return (
    <S.Container>
      {children}
      <input type='text' placeholder={placeholder} />
    </S.Container>
  );
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
