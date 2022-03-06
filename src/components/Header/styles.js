import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.color.primary400};
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    width: 1080px;
    display: flex;
    justify-content: space-between;

    svg {
      align-self: center;
    }
  }
`;
