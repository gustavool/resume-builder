import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function EditButton({ href }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <S.Container href={href} onClick={handleClick}>
      <span>Edit</span>
    </S.Container>
  );
}

EditButton.propTypes = {
  href: PropTypes.string.isRequired,
};
