import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputReactSelect({
  className,
  options,
  children,
  ...rest
}) {
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

InputReactSelect.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
