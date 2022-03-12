import PropTypes from 'prop-types';

import ReviewCard from '../../styles/templates/ReviewCard';
import EditButton from '../EditButton';

export default function EducationCard({ stepData }) {
  return (
    <ReviewCard>
      <h2>Education</h2>
      <div>
        <p>
          <strong>Name:</strong> {stepData.name}
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
          <strong>College/School:</strong> {stepData.collegeSchool}
        </p>
      </div>
      <p>
        <strong>Activities:</strong> {stepData.activities}
      </p>
      <EditButton href='http://localhost:3000/StepFour' />
    </ReviewCard>
  );
}

EducationCard.propTypes = {
  stepData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    collegeSchool: PropTypes.string.isRequired,
    activities: PropTypes.string.isRequired,
  }),
};
