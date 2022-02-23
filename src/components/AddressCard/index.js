import PropTypes from 'prop-types';

import EditButton from '../EditButton';
import * as S from './styles';

export default function AddressCard({ stepData }) {
  return (
    <S.Container>
      <h2>Address</h2>
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
      {/* <a href='http://localhost:3000/StepOne'>Edit</a> */}
    </S.Container>
  );
}

AddressCard.propTypes = {
  stepData: PropTypes.shape({
    number: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};
