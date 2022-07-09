import styled from "styled-components";

const MainScreenTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;

  h2 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 7.2rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.7rem;

    span {
      font-size: 3.6rem;
      font-weight: 700;
      color: #6fcf97;
    }
  }
`;

export default MainScreenTextContainer;
