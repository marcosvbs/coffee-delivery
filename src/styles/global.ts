import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0 auto;
    max-width: 1120px;
    background: ${(props) => props.theme.background};

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }
  
  h2{
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }
  
  
  h3{
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  } 
  
  h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  } 

  h5 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  } 

  input {
    color: ${(props) => props.theme["base-input"]};
  }

  button {
    font-family: "Roboto", sans-serif;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-button"]};
  }
`;
