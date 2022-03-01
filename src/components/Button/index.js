import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Button({ href, children, type = 'button', ...rest }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return type === 'button' ? (
    <S.Container type={type} onClick={handleClick} {...rest}>
      {children}
    </S.Container>
  ) : (
    <S.Container type={type} {...rest}>
      {children}
    </S.Container>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};
