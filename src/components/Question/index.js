import styled from 'styled-components';

const Question = styled.h2`
  margin-block: 3rem;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  word-break: break-all;
  color: ${props => props.theme.colors.secondary};
`;

export default Question;
