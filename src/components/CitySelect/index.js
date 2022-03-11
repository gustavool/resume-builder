import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepTwo } from '../../store/actions/stepTwoActions';
import TextError from '../TextError';
import * as S from './styles';

export default function CitySelect({ options, register, error }) {
  const dispatch = useDispatch();

  const stepTwo = useSelector((state) => state.stepTwoReducer);

  function handleInputChange(e) {
    if (stepTwo[e.target.value] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, ['city']: e.target.value }));
    }
  }

  return (
    <S.Container>
      <label htmlFor='city'>City</label>

      <S.SelectBox>
        <select
          {...register('city')}
          value={stepTwo.city}
          name='city'
          id='city'
          onChange={handleInputChange}
          disabled={stepTwo.state === '' || options.length === 0}
        >
          <option value='' disabled hidden>
            {options.length > 0 ? 'select a city' : 'no cities available'}
          </option>
          {options.map((city, index) => {
            return (
              <option key={index} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </S.SelectBox>
      {error && <TextError>{error.message}</TextError>}
    </S.Container>
  );
}

CitySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired,
  }),
};
