import styled from "styled-components";

const IconContainer = styled.span`
  position: ${(props) => (props.rightTop ? "absolute" : "relative")};
  top: 0;
  right: 0;
  transform: ${(props) => (props.rightTop ? "translateY(-50%)" : "none")};
  display: block;
  width: 15rem;
  height: auto;

  svg {
    width: 100%;
  }
`;

export default IconContainer;
