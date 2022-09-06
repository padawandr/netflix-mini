import { createGlobalStyle } from 'styled-components'
import { colors } from './pallete'

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-weight: 500;
  }

  h1, h2, h3, h4 {
    font-weight: 700;
  }

  img {
    display: block;
    width: 100%;
  }

  main {
    margin: 0 auto;
    width: 92%;
    min-height: 100vh;
  }

  body {
    background: ${colors.dark};
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    min-height: 100vh;

    @media screen and (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.6rem;
    }
  }

`
