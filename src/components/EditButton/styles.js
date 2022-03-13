import styled from 'styled-components';

export const Container = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  text-align: right;

  a {
    width: 100%;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.primary400};
  }
`;
