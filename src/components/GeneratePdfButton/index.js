import PropTypes from 'prop-types';

import Resume from '../Resume';
import * as S from './styles';

export default function GeneratePdfButton() {
  return (
    <S.ButtonLinkContainer fileName={`name-resume`} document={<Resume />}>
      {/* <Button type='submit'> */}
      {({ loading }) => (loading ? 'Loading document...' : 'Generate PDF')}
      {/* </Button> */}
    </S.ButtonLinkContainer>
  );
}

GeneratePdfButton.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};
