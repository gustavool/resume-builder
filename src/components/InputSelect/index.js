import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputSelect({
  name,
  label,
  placeholder,
  optionsList,
  handleInputChange,
  disabled,
  ...rest
}) {
  console.log('placeholder', placeholder);

  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onBlur={handleInputChange}
        disabled={disabled}
        defaultValue={''}
        {...rest}
      >
        <option value={''} disabled>
          {placeholder}
        </option>

        {optionsList?.map((item, index) => {
          const optionItem = item.name ? item.name : item;

          return (
            <option key={index} value={optionItem}>
              {optionItem}
            </option>
          );
        })}
      </select>
    </S.Container>
  );
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  optionsList: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  handleInputChange: PropTypes.func,
};
