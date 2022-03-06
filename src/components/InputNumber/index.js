import PropTypes from 'prop-types';

import TextError from '../TextError';
import * as S from './styles';

export default function InputNumber({
  name,
  maxLength,
  children,
  register,
  error,
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
      {error && <TextError>{error.message}</TextError>}
    </S.Container>
  );
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired,
  }),
  children: PropTypes.string.isRequired,
};
