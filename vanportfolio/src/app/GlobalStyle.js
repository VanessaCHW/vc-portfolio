import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    /**Accessible everywhere */
    --max-width: 1100px;/*1100px;*/
    --max-content-width:1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

    --theme-black: #2c2b30; /* GRIS TRÈS FONCÉ */
    --theme-dark-grey: #4F4F51; /* GRIS FONCÉ */
    --theme-light-grey: #D6D6D6;
    --theme-pink: #F2C4CE;
    --theme-orange: #F58F7C;
    --global-pink:#F57272;

    --background-light:#f9fafb; /* Couleur du pattern "geometry2.png" */

    --regular-font-size: 18px; /** Desktop: 16px - 20px */
    --second-font-size: 16px;
    --third-font-size: 14px;
    --regular-font-weight:400; 

    --list-element: #727275;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html, body {
    max-width: 100vw;
    overflow-x: hidden;
    color: var(--theme-dark-grey);
    background-color: var(--background-light); 

    font-family: "Poppins", sans-serif;
    font-weight: var(--regular-font-weight);
    font-size: var(--second-font-size);
    /*line-height: 1.5;*/
    
}

a {
  color: inherit;
  text-decoration: none;
}

h1,h2,h3,h4{
  letter-spacing: 1px;
  color:var(--theme-black);
  font-weight: 400;
}

h1 {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 30px;
}

div{
  font-family: "Poppins", sans-serif;
}


`;

export default GlobalStyle;
