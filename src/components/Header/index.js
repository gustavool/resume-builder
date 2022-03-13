import Link from 'next/link';

import Logo from '../../components/SVGs/Logo';
import GitHubIcon from '../SVGs/GithubIcon';
import ToggleThemeButton from '../ToggleThemeButton';
import * as S from './styles';
export default function Header() {
  return (
    <S.Container>
      <nav>
        <a href='https://github.com/gustavool/resume-builder'>
          <GitHubIcon />
        </a>

        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>

        <ToggleThemeButton />
      </nav>
    </S.Container>
  );
}
