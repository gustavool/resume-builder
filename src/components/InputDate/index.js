import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import TextError from '../TextError';
import * as S from './styles';

export default function InputDate({
  name,
  children,
  register,
  error,
  ...rest
}) {
  const selectedTheme = useSelector((state) => state.themeReducer.theme);
  console.log('selectedTheme', selectedTheme);

  return (
    <S.Container>
      {children}
      <S.Input
        name={name}
        type='date'
        selectedTheme={selectedTheme}
        {...register(name)}
        {...rest}
      />
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
