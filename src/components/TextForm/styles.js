import styled from 'styled-components';

export const Container = styled.p`
  color: ${({ theme }) => theme.color.paragraph};
  width: 100%;
  font-size: 16px;

  strong {
    color: ${({ theme }) => theme.color.primary400};
  }
`;
