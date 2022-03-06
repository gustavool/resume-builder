import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepTwo } from '../../store/actions/stepTwoActions';
import TextError from '../TextError';
import * as S from './styles';

export default function CountrySelect({ options, register, error, ...rest }) {
  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.stepTwoReducer);

  function handleInputChange(e) {
    if (stepTwo[e.target.value] !== e.target.value) {
      dispatch(
        changeStepTwo({
          ...stepTwo,
          ['country']: e.target.value,
          ['city']: '',
          ['state']: '',
        })
      );
    }
  }

  return (
    <S.Container>
      <label htmlFor='country'>Country</label>
      <select
        {...register('country')}
        value={stepTwo.country}
        name='country'
        id='country'
        onChange={handleInputChange}
        {...rest}
      >
        <option value='' disabled hidden>
          select a country
        </option>
        {options.map((country) => {
          return (
            <option key={country.iso3} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>{' '}
      {error && <TextError>{error.message}</TextError>}
    </S.Container>
  );
}

CountrySelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired,
  }),
};
