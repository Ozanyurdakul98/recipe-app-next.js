import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --text-primary: #f2e0e0;
    --text-secondary: white;
    --background-primary: #513174;

  --text-responsive: calc(10px + 2vmin)
  }

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
color: var(--text-primary);
margin: 0;
padding: 0;
}


a {
  color: inherit;
  text-decoration: none;

}`;

export default GlobalStyle;
