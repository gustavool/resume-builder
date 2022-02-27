import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepTwo } from '../../store/actions/stepTwoActions';
import * as S from './styles';

export default function CitySelect({ options }) {
  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.stepTwoReducer);

  function handleInputChange(e) {
    if (stepTwo[e.target.value] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, ['city']: e.target.value }));
    }
  }

  return (
    <S.Container>
      <label htmlFor='cities'>City</label>

      <select
        value={stepTwo.city}
        defaultValue=''
        name='cities'
        id='cities'
        onChange={handleInputChange}
        disabled={stepTwo.state === '' || options.length === 0}
      >
        <option value='' disabled hidden>
          {options.length > 0 ? 'select a city' : 'no cities available'}
        </option>
        {options.map((city) => {
          return (
            <option key={city.value} value={city.label}>
              {city.label}
            </option>
          );
        })}
      </select>
    </S.Container>
  );
}

CitySelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
