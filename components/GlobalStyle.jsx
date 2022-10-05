import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --text-primary: #f2e0e0;
    --text-secondary: white;
    --background-primary: #513174;

    --text-responsive: calc(10px + 2vmin);
    --nav-responsive: calc(14px + 2vmin);

    --h1-responsive: calc(20px + 4vmin);
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

}
h1 {
  font-size: var(--h1-responsive);
}
h2 {
  font-size: var(--text-responsive);
}
h3 {
  font-size: var(--text-responsive);
}
p {
  font-size: var(--text-responsive);
}
ul {
  font-size: var(--text-responsive);
}
nav{
  font-size: var(--nav-responsive);
  gap: 18px;
}
`;

export default GlobalStyle;
