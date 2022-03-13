import Link from 'next/link';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function EditButton({ href }) {
  return (
    <S.Container>
      <Link href={href}>
        <a>Edit</a>
      </Link>
    </S.Container>
  );
}

EditButton.propTypes = {
  href: PropTypes.string.isRequired,
};
