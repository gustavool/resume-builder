import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.primary200};
  width: 100%;
  height: 40px;
  margin-top: auto;

  color: ${({ theme }) => theme.paragraph};
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    margin: 0 4px;
    color: ${({ theme }) => theme.paragraph};
    font-weight: bold;
  }
`;
