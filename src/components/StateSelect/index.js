import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeStepTwo } from '../../store/actions/stepTwoActions';
import * as S from './styles';

export default function StateSelect({ options }) {
  const dispatch = useDispatch();
  const stepTwo = useSelector((state) => state.stepTwoReducer);

  function handleInputChange(e) {
    if (stepTwo[e.target.value] !== e.target.value) {
      dispatch(changeStepTwo({ ...stepTwo, ['state']: e.target.value }));
    }
  }

  return (
    <S.Container>
      <label htmlFor='states'>State</label>

      <select
        value={stepTwo.state}
        name='states'
        id='states'
        onChange={handleInputChange}
        disabled={stepTwo.country === '' || options.length === 0}
      >
        <option value='' disabled hidden>
          {options.length > 0 ? 'select a state' : 'no states available'}
        </option>
        {options.map((state) => {
          return (
            <option key={state.state_code} value={state.name}>
              {state.name}
            </option>
          );
        })}
      </select>
    </S.Container>
  );
}

StateSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};
