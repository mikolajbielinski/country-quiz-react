import styled from 'styled-components';

const IconContainer = styled.span`
  position: ${props => (props.rightTop ? 'absolute' : 'relative')};
  top: 0;
  right: 0;
  transform: ${props => (props.rightTop ? 'translateY(-50%)' : 'none')};
  display: block;
  width: ${props => (props.rightTop ? '15rem' : '30rem')};
  height: auto;

  svg {
    width: 100%;
  }

  @media screen and (max-width: 26.87em) {
    width: 13rem;
  }
`;

export default IconContainer;
