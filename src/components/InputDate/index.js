import PropTypes from 'prop-types';

import TextError from '../TextError';
import * as S from './styles';

export default function InputDate({
  name,
  children,
  register,
  error,
  ...rest
}) {
  return (
    <S.Container>
      {children}
      <input name={name} type='date' {...register(name)} {...rest} />{' '}
      {error && <TextError>{error.message}</TextError>}
    </S.Container>
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired,
  }),
  children: PropTypes.string.isRequired,
};
