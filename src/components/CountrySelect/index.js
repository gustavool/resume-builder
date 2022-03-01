import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepTwo } from '../../store/actions/stepTwoActions';
import * as S from './styles';

export default function CountrySelect({ options }) {
  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.stepTwoReducer);

  function handleInputChange(e) {
    if (stepTwo[e.target.value] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, ['country']: e.target.value }));
      dispatch(changeStepTwo({ ...stepTwo, ['city']: '', ['state']: '' }));
    }
  }

  return (
    <S.Container>
      <label htmlFor='countries'>Country</label>

      <select
        value={stepTwo.country}
        defaultValue=''
        name='countries'
        id='countries'
        onChange={handleInputChange}
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
      </select>
    </S.Container>
  );
}

CountrySelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
