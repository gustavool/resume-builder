import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  h3 {
    margin-bottom: 16px;
  }

  .doubleFields {
    display: flex;
    margin-bottom: 8px;

    label:first-child,
    div:first-child {
      margin-right: 4px;
    }

    label:last-child,
    div:last-child {
      margin-left: 4px;
    }

    label,
    div {
      width: 50%;
    }
  }

  .oneField {
    margin-bottom: 8px;
  }

  button {
    margin-top: 8px;
  }

  /* @media (max-width: ${breakpoints.laptop}px) {
    a:first-child {

    }
  } */
`;
