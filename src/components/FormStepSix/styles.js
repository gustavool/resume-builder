import styled from 'styled-components';

export const Form = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;

  h3 {
    margin-bottom: 16px;
  }

  #back-button {
    align-self: flex-start;
    margin-bottom: 8px;
  }

  .generate-button {
    margin: 16px 0 32px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    section + section {
      margin-top: 8px;
    }

    section:last-child {
      margin-bottom: 16px;
    }
  }
`;
