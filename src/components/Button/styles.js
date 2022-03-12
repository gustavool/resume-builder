import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.primary400};
  width: 100%;
  min-height: 48px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  color: ${({ theme }) => theme.background};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.primary200};
    color: ${({ theme }) => theme.paragraph};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.primary200};
    cursor: default;

    &:hover {
      color: ${({ theme }) => theme.background};
    }
  }
`;
