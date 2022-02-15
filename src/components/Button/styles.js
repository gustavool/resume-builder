import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.color.primary400};
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  margin: 8px 0;

  color: ${({ theme }) => theme.background};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary200};
    color: ${({ theme }) => theme.paragraph};
  }
`;
