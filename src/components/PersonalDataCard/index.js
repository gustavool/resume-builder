import PropTypes from 'prop-types';

import EditButton from '../EditButton';
import * as S from './styles';

export default function PersonalDataCard({ stepData }) {
  return (
    <S.Container>
      <h2>Personal</h2>
      <div>
        <p>
          <strong>First Name:</strong> {stepData.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {stepData.lastName}
        </p>
      </div>
      <div>
        <p>
          <strong>Age:</strong> {stepData.age}
        </p>
        <p>
          <strong>Gender:</strong> {stepData.gender}
        </p>
      </div>
      <p>
        <strong>Email:</strong> {stepData.email}
      </p>
      <EditButton href='http://localhost:3000/StepOne' />
      {/* <a href='http://localhost:3000/StepOne'>Edit</a> */}
    </S.Container>
  );
}

PersonalDataCard.propTypes = {
  stepData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
