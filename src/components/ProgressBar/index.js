import PropTypes from 'prop-types';

import ProgressStep from '../ProgressStep';
import * as S from './styles';
export default function ProgressBar({
  stepOne = false,
  stepTwo = false,
  stepThree = false,
  stepFour = false,
  stepFive = false,
  stepSix = false,
}) {
  return (
    <S.Container>
      <ProgressStep
        stepName='Personal'
        isFirstBar
        isInProgress={stepOne ? true : false}
      ></ProgressStep>
      <ProgressStep
        stepName='Location'
        isInProgress={stepTwo ? true : false}
      ></ProgressStep>
      <ProgressStep
        stepName='Work'
        isInProgress={stepThree ? true : false}
      ></ProgressStep>
      <ProgressStep
        stepName='Education'
        isInProgress={stepFour ? true : false}
      ></ProgressStep>
      <ProgressStep
        stepName='Certification'
        isInProgress={stepFive ? true : false}
      ></ProgressStep>
      <ProgressStep
        stepName='Download'
        isLastBar
        isInProgress={stepSix ? true : false}
      ></ProgressStep>
    </S.Container>
  );
}

ProgressBar.propTypes = {
  stepOne: PropTypes.bool,
  stepTwo: PropTypes.bool,
  stepThree: PropTypes.bool,
  stepFour: PropTypes.bool,
  stepFive: PropTypes.bool,
  stepSix: PropTypes.bool,
};
