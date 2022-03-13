import PropTypes from 'prop-types';

import StepCard from '../../styles/templates/StepCard';
import EditButton from '../EditButton';

export default function PersonalDataCard({ stepData }) {
  return (
    <StepCard>
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
      <EditButton href='/StepOne' />
    </StepCard>
  );
}

PersonalDataCard.propTypes = {
  stepData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
