import styled from 'styled-components';

export const Container = styled.p`
  color: ${({ theme }) => theme.paragraph};
  width: 100%;
  font-size: 16px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 8px;
  border-radius: 4px;

  strong {
    color: ${({ theme }) => theme.primary400};
  }
`;
