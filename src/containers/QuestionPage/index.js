import React from 'react';
import { useEffect, useState } from 'react';
import { IconContainer, AnswerContainer } from '../../components/Containers';
import { ReactComponent as PlayLogo } from '../../assets/images/play.svg';
import { AnswerButton, GameButton } from '../../components/Buttons';
import Question from '../../components/Question';
import fetchCountriesData from '../../services/QuestionsData';
import randomNumberGenerator from '../../utils/randomNumberGenerator';

const QuestionPage = () => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchCountriesData().then(response => {
      generateRandomQuestionAndAnswer(response);
    });
  }, []);

  const generateRandomQuestionAndAnswer = countriesData => {
    // We have two types of question, 0 for capital city of a country, 1 for flag of a country
    const randomQuestionType = randomNumberGenerator(1);
    const randomCountriesArrayIndexes = Array(4)
      .fill()
      .map(() => randomNumberGenerator(249));
    const randomRightAnswer = randomCountriesArrayIndexes.at(
      randomNumberGenerator(3)
    );
    const alphabet = 'ABCD'.split('');

    if (randomQuestionType === 0)
      setQuestion({
        flag: null,
        question: `${countriesData[randomRightAnswer].capital} is the capital of`,
      });

    if (randomQuestionType === 1)
      setQuestion({
        flag: countriesData[randomRightAnswer].flags.png,
        question: 'Which country does this flag belong to?',
      });

    const answersArray = randomCountriesArrayIndexes.map(
      (countryIndex, index) => {
        return {
          name: countriesData[countryIndex].name.common,
          isRight: countryIndex === randomRightAnswer ? true : false,
          letter: alphabet[index],
        };
      }
    );

    setAnswers(answersArray);
  };

  return (
    <>
      <IconContainer rightTop>{<PlayLogo />}</IconContainer>
      <Question>
        {question.flag && (
          <img src={question.flag} alt='Flag of some country' />
        )}
        <span>{question.question}</span>
      </Question>
      <AnswerContainer>
        {answers.map(answer => (
          <AnswerButton
            name={answer.name}
            isRight={answer.isRight}
            letter={answer.letter}
            key={answer.letter}
          />
        ))}
        <GameButton nextButton>Next</GameButton>
      </AnswerContainer>
    </>
  );
};

export default QuestionPage;
