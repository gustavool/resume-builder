import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.color.primary400};
  width: 100%;

  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  nav {
    width: 1080px;
    max-width: ${breakpoints.laptop}px;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;

    a {
      align-self: center;
    }
  }
`;
