import ResumePdf from '../ResumePdf';
import * as S from './styles';
// eslint-disable-next-line react/prop-types
export default function GeneratePdfButton({ data, ...rest }) {
  return (
    <S.ButtonLinkContainer
      fileName={`name-resume`}
      document={<ResumePdf data={data} />}
      {...rest}
    >
      {({ loading }) => (loading ? 'Loading document...' : 'Generate PDF')}
    </S.ButtonLinkContainer>
  );
}
