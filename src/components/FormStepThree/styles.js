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

  a:first-child {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  .doubleFields {
    display: flex;
    margin-bottom: 8px;

    label {
      width: 50%;
    }

    label + label {
      margin-left: 4px;
    }

    & > div {
      width: 50%;
    }
  }

  .oneField {
    margin-bottom: 8px;
  }

  button {
    margin-top: auto;
  }
`;
