import Link from 'next/link';
import PropTypes from 'prop-types';

import Arrow from '../SVGs/Arrow';
import * as S from './styles';

export default function BackButton({ href, ...rest }) {
  return (
    <S.Container {...rest}>
      <Link href={href}>
        <a>
          <Arrow />
          Back
        </a>
      </Link>
    </S.Container>
  );
}

BackButton.propTypes = {
  href: PropTypes.string.isRequired,
};
