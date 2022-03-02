import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Form = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  h3 {
    margin-bottom: 16px;
  }

  a:first-child {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  a:last-child {
    margin-top: 16px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    section + section {
      margin-top: 8px;
    }

    section:last-child {
      margin-bottom: 16px;
    }
  }
  /*
  @media (max-width: ${breakpoints.mobile}px) {
    div {
      p {
        font-size: 12px;
        width: 50%;
      }

      section {
        max-width: 100%;

        div {
          flex-direction: row;
        }
      }

      section + section {
        margin-top: 8px;
      }

      section:nth-child(even) {
        margin-left: 0px;
      }

      section:last-child {
        margin-bottom: 16px;
      }
    }
  } */
`;
