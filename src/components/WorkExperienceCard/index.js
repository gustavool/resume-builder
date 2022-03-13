import PropTypes from 'prop-types';

import StepCard from '../../styles/templates/StepCard';
import EditButton from '../EditButton';

export default function WorkExperienceCard({ stepData }) {
  return (
    <StepCard>
      <h2>Work Experience</h2>
      <div>
        <p>
          <strong>Occupation:</strong> {stepData.occupation}
        </p>
        <p>
          <strong>Start Date:</strong> {stepData.startDate}
        </p>
      </div>
      <div>
        <p>
          <strong>End Date:</strong> {stepData.endDate}
        </p>
        <p>
          <strong>Employer:</strong> {stepData.employer}
        </p>
      </div>
      <p>
        <strong>Activities:</strong> {stepData.activities}
      </p>
      <EditButton href='/StepThree' />
    </StepCard>
  );
}

WorkExperienceCard.propTypes = {
  stepData: PropTypes.shape({
    occupation: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    activities: PropTypes.string.isRequired,
  }),
};
