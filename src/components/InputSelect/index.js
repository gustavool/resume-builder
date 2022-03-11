import PropTypes from 'prop-types';

import TextError from '../TextError';
import * as S from './styles';

export default function InputSelect({
  label,
  name,
  placeholder,
  options,
  register,
  error,
  ...rest
}) {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>

      <S.SelectBox>
        <select {...register(name)} name={name} id={name} {...rest}>
          <option value='' disabled hidden>
            {placeholder}
          </option>

          {options.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </S.SelectBox>
      {error && <TextError>{error.message}</TextError>}
    </S.Container>
  );
}

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired,
  }),
};
