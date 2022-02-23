import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;

  svg,
  form {
    flex: 50%;
  }

  @media (max-width: ${breakpoints.laptop}px) {
    flex-direction: column;
  }
`;
