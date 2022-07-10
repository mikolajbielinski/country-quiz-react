import styled from 'styled-components';

const Question = styled.h2`
  display: flex;
  flex-direction: column;
  margin-block: 3rem;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  word-break: break-all;
  color: ${props => props.theme.colors.secondary};

  img {
    width: 15rem;
    margin-bottom: 2rem;
  }
`;

export default Question;
