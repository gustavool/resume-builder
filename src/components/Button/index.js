import Link from 'next/link';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ href, children }) {
  return (
    <S.Container>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </S.Container>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
