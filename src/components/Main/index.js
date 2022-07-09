import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: flex;
  min-width: 25vw;
  min-width: 25vw;
  min-height: 70vh;
  border-radius: 2.4rem;
  padding: 4rem 2rem 3rem 2rem;
  background-color: ${(props) => props.theme.colors.primaryWhite};
`;

export default Main;
