import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputNumber({
  name,
  maxLength,
  children,
  register,
  ...rest
}) {
  function maxLengthLimit(e) {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
  }

  return (
    <S.Container>
      {children}
      <input
        name={name}
        type='number'
        onChange={maxLengthLimit}
        {...register(name)}
        {...rest}
      />
    </S.Container>
  );
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
