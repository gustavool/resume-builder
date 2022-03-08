import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;

  #firstBar {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left: 2px solid ${({ theme }) => theme.color.paragraph};

    div {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }

  #lastBar {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 2px solid ${({ theme }) => theme.color.paragraph};

    div {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }

  small {
    font-weight: bold;
  }

  .stepProgress {
    div div {
      height: 8px;
      width: 100%;
      background-color: ${({ theme }) => theme.color.primary400};
    }

    small {
      text-transform: none;

      color: ${({ theme }) => theme.color.primary400};
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    small {
      display: none;
    }
    /* margin-bottom: 16px; */
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${({ theme }) => theme.color.primary200};
  border-top: 2px solid ${({ theme }) => theme.color.paragraph};
  border-bottom: 2px solid ${({ theme }) => theme.color.paragraph};

  display: flex;
  align-items: center;
`;
