import PropTypes from 'prop-types';

import ReviewCard from '../../styles/templates/ReviewCard';
import EditButton from '../EditButton';

export default function CertificationCard({ stepData }) {
  return (
    <ReviewCard>
      <h2>Certification</h2>
      <div>
        <p>
          <strong>Name:</strong> {stepData.name}
        </p>
        <p>
          <strong>Date:</strong> {stepData.date}
        </p>
      </div>
      <p>
        <strong>Link/Url:</strong> {stepData.linkUrl}
      </p>
      <p>
        <strong>Description:</strong> {stepData.description}
      </p>

      <EditButton href='http://localhost:3000/StepFive' />
    </ReviewCard>
  );
}

CertificationCard.propTypes = {
  stepData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
