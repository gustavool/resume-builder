import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 500px;

  a:first-child {
    align-self: flex-start;
  }

  label {
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;
  }
`;
