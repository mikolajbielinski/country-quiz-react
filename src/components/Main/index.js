import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  height: 100%;
  width: 30vw;
  min-height: 75vh;
  border-radius: 2.4rem;
  padding: 4rem 3rem 3rem 3rem;
  background-color: ${props => props.theme.colors.primaryWhite};

  @media screen and (max-width: 91.31em) {
    width: 40vw;
  }

  @media screen and (max-width: 64.93em) {
    width: 60vw;
  }

  @media screen and (max-width: 42.68em) {
    width: 80vw;
  }

  @media screen and (max-width: 31.68em) {
    width: 95vw;
  }
`;

export default Main;
