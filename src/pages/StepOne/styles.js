import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px 0 16px;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;
  max-width: ${breakpoints.laptop}px;
  /* height: 500px; */
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
    /* width: 30%; */
    flex: 50%;
    /* height: 300px; */
  }

  form {
    align-self: flex-start;
    margin-left: 8px;
    flex: 50%;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin-bottom: 100px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    svg {
      width: 100%;
      margin: 0 0 16px 0;
    }

    form {
      align-self: center;
      margin-left: 0;
      width: 100%;
    }
  }
`;
