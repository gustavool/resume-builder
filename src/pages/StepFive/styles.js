import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  flex-direction: column;

  @media (max-width: ${breakpoints.laptop}px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  form {
    flex: 50%;
  }
`;
