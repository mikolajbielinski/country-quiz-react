import React from 'react';
import { useEffect, useState } from 'react';
import { IconContainer, AnswerContainer } from '../../components/Containers';
import { ReactComponent as PlayLogo } from '../../assets/images/play.svg';
import { AnswerButton, GameButton } from '../../components/Buttons';
import Question from '../../components/Question';
import fetchCountriesData from '../../services/QuestionsData';

const QuestionPage = () => {
  const [countriesData, setCountriesData] = useState(null);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetchCountriesData().then(response => setCountriesData(response));
  }, []);

  console.log(countriesData);

  const generateRandomQuestion = () => {};

  return (
    <>
      <IconContainer rightTop>{<PlayLogo />}</IconContainer>
      <Question>
        Kuala Lumpur is the capitakl of fsdg sadgsgg gsfdagsdg
      </Question>
      <AnswerContainer>
        <AnswerButton>
          <span>A</span>
          <p>Spain</p>
        </AnswerButton>
        <AnswerButton>
          <span>A</span>
          <p>Spain</p>
        </AnswerButton>
        <AnswerButton>
          <span>A</span>
          <p>Spain</p>
        </AnswerButton>
        <AnswerButton>
          <span>A</span>
          <p>Spain</p>
        </AnswerButton>
        <GameButton nextButton>Next</GameButton>
      </AnswerContainer>
    </>
  );
};

export default QuestionPage;
