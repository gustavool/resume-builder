import PropTypes from 'prop-types';

// import Select from 'react-select';
import * as S from './styles';

export default function InputSelect({ className, options, children, ...rest }) {
  return (
    <S.Container className={className}>
      {children}
      <S.ReactSelect
        classNamePrefix='react-select'
        placeholder={'select a country'}
        options={options}
        {...rest}
      />
    </S.Container>
  );
}

InputSelect.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
