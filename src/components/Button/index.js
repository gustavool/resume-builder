import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ href, children, type = 'button' }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <S.Container type={type} onClick={handleClick}>
      {children}
    </S.Container>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};
