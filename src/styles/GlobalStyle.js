import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: #EBEBEB;
  }

  /* root 렌더링 요소는 flex-center 만 */
  #root {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export default GlobalStyle;
