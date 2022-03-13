import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  max-width: 48px;
  height: 24px;
  padding: 4px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 16px;
  border: none;
  position: relative;
  justify-content: ${({ selectedTheme }) =>
    selectedTheme === 'light' ? 'flex-start' : 'flex-end'};
`;
export const ThemeOption = styled.div`
  width: 16px;
  height: 16px;
  top: 4px;
  background-color: ${({ theme }) => theme.primary400};
  border-radius: 16px;
  position: absolute;

  transform: translateX(
    ${(props) => (props.selectedTheme === 'light' ? '0px' : '24px')}
  );
  transition: transform 0.25s ease;
`;
