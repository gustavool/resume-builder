import Logo from '../../components/SVGs/Logo';
import GitHubIcon from '../SVGs/GithubIcon';
import * as S from './styles';
export default function Header() {
  return (
    <S.Container>
      <nav>
        <Logo />
        <GitHubIcon />
      </nav>
    </S.Container>
  );
}
