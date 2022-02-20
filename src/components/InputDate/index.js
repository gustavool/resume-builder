import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputDate({ name, children, ...rest }) {
  return (
    <S.Container>
      {children}
      <input name={name} type='date' {...rest} />
    </S.Container>
  );
}

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
