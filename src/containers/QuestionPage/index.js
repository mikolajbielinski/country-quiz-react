import React from 'react';
import { IconContainer, QuestionContainer } from '../../components/Containers';
import { ReactComponent as PlayLogo } from '../../assets/images/play.svg';
import { GameButton, QuestionButton } from '../../components/Buttons';
import Question from '../../components/Question';

const QuestionPage = () => {
  return (
    <>
      <IconContainer rightTop>{<PlayLogo />}</IconContainer>
      <Question>
        Kuala Lumpur is the capitakl of fsdg sadgsgg gsfdagsdg
      </Question>
      <QuestionContainer>
        <QuestionButton>
          <span>A</span>
          <p>Spain</p>
        </QuestionButton>
        <QuestionButton>
          <span>A</span>
          <p>Spain</p>
        </QuestionButton>
        <QuestionButton>
          <span>A</span>
          <p>Spain</p>
        </QuestionButton>
        <QuestionButton>
          <span>A</span>
          <p>Spain</p>
        </QuestionButton>
        <GameButton nextButton>Next</GameButton>
      </QuestionContainer>
    </>
  );
};

export default QuestionPage;
