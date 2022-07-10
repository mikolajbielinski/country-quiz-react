import React from 'react';
import { useEffect, useState } from 'react';
import { IconContainer, AnswerContainer } from '../../components/Containers';
import { ReactComponent as PlayLogo } from '../../assets/images/play.svg';
import { AnswerButton, GameButton } from '../../components/Buttons';
import Question from '../../components/Question';
import fetchCountriesData from '../../services/QuestionsData';
import randomNumberGenerator from '../../utils/randomNumberGenerator';

const QuestionPage = () => {
  const [countriesData, setCountriesData] = useState(null);
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchCountriesData().then(response => {
      setCountriesData(response);
    });
  }, []);

  const generateRandomQuestionAndAnswer = () => {
    // We have two types of question, 0 for capital city of a country, 1 for flag of a country
    const randomQuestionType = randomNumberGenerator(1);
    const randomCountriesIndex = Array(4)
      .fill()
      .map(() => randomNumberGenerator(249));
    const randomRightAnswer = randomCountriesIndex.at(randomNumberGenerator(3));
    console.log(countriesData[randomRightAnswer]);
    // if (randomQuestionType === 0) setQuestion('');
    // `${countriesData.randomRightAnswer.capital} is the capital of`
  };

  countriesData && generateRandomQuestionAndAnswer();

  return (
    <>
      <IconContainer rightTop>{<PlayLogo />}</IconContainer>
      <Question>
        <span>asdas</span>
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
