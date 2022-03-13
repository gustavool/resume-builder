import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  border-radius: 4px;

  &:disabled {
    opacity: 0.7;
    a {
      cursor: default;
      color: ${({ theme }) => theme.background};
      background-color: ${({ theme }) => theme.primary200};

      &:hover {
        color: ${({ theme }) => theme.background};
      }
    }
  }

  a {
    height: 48px;
    font-size: 16px;
    background-color: ${({ theme }) => theme.primary400};
    border-radius: 4px;
    width: 100%;
    display: block;
    line-height: 48px;
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.background};

    &:hover {
      color: ${({ theme }) => theme.paragraph};
      background-color: ${({ theme }) => theme.primary200};
    }
  }
`;
