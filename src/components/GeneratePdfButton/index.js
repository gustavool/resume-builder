import { useSelector } from 'react-redux';

import ResumePdf from '../ResumePdf';
import * as S from './styles';
// eslint-disable-next-line react/prop-types
export default function GeneratePdfButton({ data, ...rest }) {
  const firstName = useSelector((state) => state.stepOneReducer.firstName);

  return (
    <S.ButtonLinkContainer
      fileName={`${firstName?.toLowerCase()}-resume`}
      document={<ResumePdf data={data} />}
      {...rest}
    >
      {({ loading }) => (loading ? 'Loading document...' : 'Generate PDF')}
    </S.ButtonLinkContainer>
  );
}
