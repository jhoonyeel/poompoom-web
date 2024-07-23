// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
  }

  @font-face {
    font-family: 'seolleimcool-SemiBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/seolleimcool-SemiBold.woff2') format('woff2');
  }

  @font-face {
    font-family: 'TAEBAEKmilkyway';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/TAEBAEKmilkyway.woff2') format('woff2');
  }

  @font-face {
    font-family: 'YEONGJUPunggiGinsengTTF';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/YEONGJUPunggiGinsengTTF.woff2') format('woff2');
  }

  body {
    font-family: 'S-CoreDream-3Light';
  }
`;
// font-family: "Shrikhand", serif;
// font-family: "Oleo Script Swash Caps", system-ui;

export default GlobalStyle;
