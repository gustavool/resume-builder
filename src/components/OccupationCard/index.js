import PropTypes from 'prop-types';

import EditButton from '../EditButton';
import * as S from './styles';

export default function OccupationCard({ stepData }) {
  return (
    <S.Container>
      <h2>Occupation</h2>
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
    </S.Container>
  );
}

OccupationCard.propTypes = {
  stepData: PropTypes.shape({
    occupation: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    employer: PropTypes.string.isRequired,
    activities: PropTypes.string.isRequired,
  }),
};
