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

    label,
    div {
      width: 50%;
    }
  }

  .one-field {
    margin-bottom: 8px;
  }

  button {
    margin-top: auto;
  }
`;
