import PropTypes from 'prop-types';

import * as S from './styles';
export default function ProgressStep({
  stepName,
  isInProgress = false,
  isFirstBar = false,
  isLastBar = false,
}) {
  return (
    <S.Container>
      <div className={isInProgress ? 'stepProgress' : ''}>
        {!isFirstBar && !isLastBar && (
          <S.Bar>
            <div></div>
          </S.Bar>
        )}
        {isFirstBar && (
          <S.Bar id='firstBar'>
            <div></div>
          </S.Bar>
        )}
        {isLastBar && (
          <S.Bar id='lastBar'>
            <div></div>
          </S.Bar>
        )}
        <small>{stepName}</small>
      </div>
    </S.Container>
  );
}

ProgressStep.propTypes = {
  stepName: PropTypes.string.isRequired,
  isInProgress: PropTypes.bool,
  isFirstBar: PropTypes.bool,
  isLastBar: PropTypes.bool,
};
