import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px 16px 16px;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${breakpoints.laptop}px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    width: 50%;
    height: 100%;
    max-height: 450px;
    align-self: flex-start;
  }

  form {
    align-self: flex-start;
    margin-left: 8px;
    width: 50%;
    height: 450px;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
    svg {
      align-self: center;
      width: 50%;
    }

    form {
      align-self: center;
      margin: 16px 0 0 0;
      width: 100%;
      height: 100%;
    }

    button {
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    button {
      margin-top: 32px;
    }
  }
`;
