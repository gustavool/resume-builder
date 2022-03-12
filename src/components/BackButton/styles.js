import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary400};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.paragraph};

    svg {
      fill: ${({ theme }) => theme.paragraph};
    }
  }
`;
