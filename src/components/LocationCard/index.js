import PropTypes from 'prop-types';

import ReviewCard from '../../styles/templates/ReviewCard';
import EditButton from '../EditButton';

export default function LocationCard({ stepData }) {
  return (
    <ReviewCard>
      <h2>Location</h2>
      <div>
        <p>
          <strong>Number:</strong> {stepData.number}
        </p>
        <p>
          <strong>Country:</strong> {stepData.country}
        </p>
      </div>
      <div>
        <p>
          <strong>Address:</strong> {stepData.address}
        </p>
        <p>
          <strong>State:</strong> {stepData.state}
        </p>
      </div>
      <p>
        <strong>City:</strong> {stepData.city}
      </p>
      <EditButton href='http://localhost:3000/StepTwo' />
    </ReviewCard>
  );
}

LocationCard.propTypes = {
  stepData: PropTypes.shape({
    number: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};
