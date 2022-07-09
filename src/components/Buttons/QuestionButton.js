import styled from 'styled-components';

const QuestionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4rem;
  color: ${props => props.theme.colors.primary};
  padding: 1rem;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 1.2rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.hover};
    border-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.primaryWhite};
  }
`;

export default QuestionButton;
