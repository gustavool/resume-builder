import * as S from './styles';
export default function ProgressBar() {
  return (
    <S.Container>
      <div>
        <S.Bar id='firstBar'>
          <div></div>
        </S.Bar>
        <small>Personal</small>
      </div>

      <div>
        <S.Bar />
        <small>Location</small>
      </div>

      <div>
        <S.Bar />
        <small>Work</small>
      </div>

      <div>
        <S.Bar />
        <small>Graduations</small>
      </div>

      <div>
        <S.Bar />
        <small>Certifications</small>
      </div>

      <div>
        <S.Bar id='lastBar' />
        <small>Download</small>
      </div>
    </S.Container>
  );
}
