import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: space-between;
  max-width: 500px;

  h3 {
    margin-bottom: 16px;
  }

  .double-fields {
    display: flex;
    margin-bottom: 8px;

    label + label {
      margin-left: 4px;
    }

    label {
      width: 50%;
    }
  }

  button {
    margin-top: auto;
  }
`;
