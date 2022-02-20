import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputText({ name, children, maxLength, ...rest }) {
  return (
    <S.Container>
      {children}
      <input name={name} type='text' maxLength={maxLength} {...rest} />
    </S.Container>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
