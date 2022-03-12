import Link from 'next/link';

import Logo from '../../components/SVGs/Logo';
import GitHubIcon from '../SVGs/GithubIcon';
import * as S from './styles';
export default function Header() {
  return (
    <S.Container>
      <nav>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>

        <a
          href='https://github.com/gustavool/resume-builder'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
      </nav>
    </S.Container>
  );
}
