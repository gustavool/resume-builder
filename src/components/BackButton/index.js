import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Arrow from '../SVGs/Arrow';
import * as S from './styles';

export default function BackButton({ href }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <S.Container href={href} onClick={handleClick}>
      <Arrow />
      <span>Back</span>
    </S.Container>
  );
}

BackButton.propTypes = {
  href: PropTypes.string.isRequired,
};
