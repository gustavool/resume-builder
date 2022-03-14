import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;

  h3 {
    margin-bottom: 16px;
  }

  ul {
    margin: 16px 0;
    background-color: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 4px;
    padding: 8px 8px 12px 8px;
  }

  button:last-child {
    margin-top: auto;
  }
`;
