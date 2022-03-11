import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: space-between;
  h3 {
    margin-bottom: 16px;
  }

  .doubleFields {
    display: flex;
    margin-bottom: 8px;

    label,
    & > label + div {
      width: 50%;
    }

    @media (min-width: ${breakpoints.tablet}px) {
      label:first-child {
        margin-right: 2px;
      }

      label:last-child {
        margin-left: 2px;
      }

      & > label + div {
        margin-left: 2px;
      }
    }
  }

  .oneField {
    margin-bottom: 8px;
  }

  button {
    margin-top: auto;
  }
`;
