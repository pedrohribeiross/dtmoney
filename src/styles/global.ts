import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Por padrão o font-size vem 16px (Desktop).

  html {
    @media (max-width: 1000px) {
      /* 16 x 0,9375 = 15 */
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      /* 16 x 0,875 = 14 */
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
