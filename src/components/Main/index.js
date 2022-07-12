import styled from 'styled-components';

const Main = styled.main`
  position: relative;
  height: 100%;
  width: 25vw;
  min-height: 60vh;
  border-radius: 2.4rem;
  padding: 4rem 3rem 3rem 3rem;
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export default Main;
