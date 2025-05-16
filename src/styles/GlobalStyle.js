import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    font-family: 'Pretendard', sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
  }

  #root {
    max-width: 393px;     
    width: 100%;
    background-color: #FBF3E7;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }


`;

export default GlobalStyle;
