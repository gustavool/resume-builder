import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputSelect({ placeholder, options, ...rest }) {
  return (
    <S.Container>
      <label htmlFor='cities'>City</label>

      <select {...rest}>
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
    </S.Container>
  );
}

InputSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
