import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 500px;

  a:first-child {
    align-self: flex-start;
  }

  .doubleFields {
    display: flex;
    align-items: center;

    label,
    div {
      width: 50%;
    }
  }
`;
