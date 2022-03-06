import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    /* height: 100%; */
    /* max-width: 1200px; */
    margin: 0 auto;

    & > div {
      display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100vh;
    }

    footer {
      margin-top: 48px;
    }
  }

  button {
    cursor: pointer;
  }
`;
