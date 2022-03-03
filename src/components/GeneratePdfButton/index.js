import ResumePdf from '../ResumePdf';
import * as S from './styles';
// eslint-disable-next-line react/prop-types
export default function GeneratePdfButton({ data }) {
  return (
    <S.ButtonLinkContainer
      fileName={`name-resume`}
      document={<ResumePdf data={data} />}
    >
      {/* <Button type='submit'> */}
      {({ loading }) => (loading ? 'Loading document...' : 'Generate PDF')}
      {/* </Button> */}
    </S.ButtonLinkContainer>
  );
}
