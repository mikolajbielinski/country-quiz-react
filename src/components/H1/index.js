import styled from 'styled-components';

const H1 = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  color: ${props => props.theme.colors.primaryWhite};
  font-size: 3.6rem;
  text-transform: uppercase;
  line-height: 5.4rem;
  font-weight: 700;
`;

export default H1;
