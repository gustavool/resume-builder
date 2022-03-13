import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;

  #firstBar {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left: 3px solid ${({ theme }) => theme.primary400};

    div {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }
  }

  #lastBar {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 3px solid ${({ theme }) => theme.primary400};

    div {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }

  small {
    font-weight: bold;
    color: ${({ theme }) => theme.paragraph};
  }

  .stepProgress {
    div div {
      height: 8px;
      width: 100%;
      border: 2px solid ${({ theme }) => theme.primary400};
      background-color: ${({ theme }) => theme.primary400};
    }

    small {
      text-transform: none;

      color: ${({ theme }) => theme.primary400};
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    small {
      display: none;
    }
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${({ theme }) => theme.primary200};
  border-top: 3px solid ${({ theme }) => theme.primary400};
  border-bottom: 3px solid ${({ theme }) => theme.primary400};

  display: flex;
  align-items: center;
`;
