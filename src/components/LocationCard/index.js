import PropTypes from 'prop-types';

import StepCard from '../../styles/templates/StepCard';
import EditButton from '../EditButton';

export default function LocationCard({ stepData }) {
  return (
    <StepCard>
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
      <EditButton href='/StepTwo' />
    </StepCard>
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
