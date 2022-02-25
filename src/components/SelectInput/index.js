import PropTypes from 'prop-types';

// import Select from 'react-select';
import * as S from './styles';

export default function SelectInput({ options, ...rest }) {
  return (
    <S.ReactSelect
      classNamePrefix='react-select'
      placeholder={'select a country'}
      options={options}
      {...rest}
    />
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
