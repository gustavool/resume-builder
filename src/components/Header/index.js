import Logo from '../../components/SVGs/Logo';
import GitHubIcon from '../SVGs/GithubIcon';
import * as S from './styles';
export default function Header() {
  return (
    <S.Container>
      <nav>
        <Logo />
        <a href='https://github.com/gustavool/resume-builder'>
          <GitHubIcon />
        </a>
      </nav>
    </S.Container>
  );
}
