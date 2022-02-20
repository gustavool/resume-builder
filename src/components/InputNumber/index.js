import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputNumber({ name, maxLength, children, ...rest }) {
  function maxLengthLimit(e) {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  }

  return (
    <S.Container>
      {children}
      <input name={name} type='number' onChange={maxLengthLimit} {...rest} />
    </S.Container>
  );
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
