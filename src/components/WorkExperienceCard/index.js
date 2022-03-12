import PropTypes from 'prop-types';

import ReviewCard from '../../styles/templates/ReviewCard';
import EditButton from '../EditButton';

export default function WorkExperienceCard({ stepData }) {
  return (
    <ReviewCard>
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
      <EditButton href='http://localhost:3000/StepThree' />
    </ReviewCard>
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
