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

    label {
      width: 50%;
    }

    & > div {
      width: 50%;

      &:last-child {
        margin-left: 4px;
      }
    }
  }

  .after-one-field {
    margin-top: 8px;
  }

  button {
    margin-top: auto;
  }
`;
