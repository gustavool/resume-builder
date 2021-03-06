import PropTypes from 'prop-types';

import TextError from '../TextError';
import * as S from './styles';

export default function InputText({
  name,
  children,
  maxLength,
  isOptional,
  register,
  error,
  ...rest
}) {
  return (
    <S.Container>
      <div>
        {children} {isOptional && <small>optional</small>}
      </div>
      <S.Input
        name={name}
        type='text'
        maxLength={maxLength}
        {...register(name)}
        {...rest}
      />
      {error && <TextError>{error.message}</TextError>}
    </S.Container>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  isOptional: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired,
  }),
  children: PropTypes.string.isRequired,
};
