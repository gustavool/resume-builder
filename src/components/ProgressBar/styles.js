import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  max-width: ${breakpoints.laptop}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;

  @media (max-width: ${breakpoints.mobile}px) {
    margin: 16px 0;
  }
`;
