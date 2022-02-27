import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  h3 {
    margin-bottom: 16px;
  }

  a:first-child {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  .select {
    margin-top: 2px;
  }

  .doubleFields {
    display: flex;
    margin-bottom: 8px;

    label {
      width: 50%;
    }

    .select {
      width: 50%;
    }

    & > div {
      width: 50%;

      &:last-child {
        margin-left: 8px;
      }
    }
  }

  .oneField {
    margin-bottom: 8px;
  }

  button {
    margin-top: 8px;
  }
`;
