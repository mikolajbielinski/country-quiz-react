import { createGlobalStyle } from 'styled-components';
import background from '../../assets/images/background.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: 121.25em) {
    font-size: 85%
  }
  }

  body {
    min-width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background-image: url(${background});
    background-position: center;
    background-size: 100%;
    font-family: "Poppins", sans-serif;
  }

  .correctAnswer {
    background: ${props => props.theme.colors.rightAnswer} !important;
    border-color: ${props => props.theme.colors.rightAnswer} !important;
    color: ${props => props.theme.colors.primaryWhite} !important;

    &:hover{
      background: ${props => props.theme.colors.rightAnswer} !important;
      border-color: ${props => props.theme.colors.rightAnswer} !important;
    }
  }

  .wrongAnswer{
    background: ${props => props.theme.colors.wrongAnswer} !important;
    border-color: ${props => props.theme.colors.wrongAnswer} !important;
    color: ${props => props.theme.colors.primaryWhite} !important;

    &:hover{
      background: ${props => props.theme.colors.wrongAnswer} !important;
      border-color: ${props => props.theme.colors.wrongAnswer} !important;
    }
  }

`;

export default GlobalStyle;
