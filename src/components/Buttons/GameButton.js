import styled from 'styled-components';

const GameButton = styled.button`
  padding: ${props => (props.bigPadding ? '1rem 5rem' : '1rem 3rem')};
  background: transparent;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 1.2rem;
  line-height: 2.7rem;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: inherit;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  margin-left: ${props => (props.nextButton ? 'auto' : '0')};

  &:hover {
    background: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.primaryWhite};
    border-color: ${props => props.theme.colors.hover};
  }
`;

export default GameButton;
