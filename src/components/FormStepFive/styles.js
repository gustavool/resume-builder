import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  a:first-child {
    align-self: flex-start;
    margin-bottom: 16px;
  }

  .doubleFields {
    display: flex;
    margin-bottom: 16px;

    label:first-child,
    div:first-child {
      margin-right: 4px;
    }

    label:last-child,
    div:last-child {
      margin-left: 4px;
    }

    label,
    div {
      width: 50%;
    }
  }

  .oneField {
    margin-bottom: 16px;
  }
`;
