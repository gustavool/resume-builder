import Link from 'next/link';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ href, children, disabled }) {
  return (
    <S.Container disabled={disabled}>
      {!disabled && (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )}

      {disabled && <a>{children}</a>}
    </S.Container>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};
