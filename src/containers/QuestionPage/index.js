import React from 'react';
import { useEffect, useState } from 'react';
import { IconContainer, AnswerContainer } from '../../components/Containers';
import { ReactComponent as PlayLogo } from '../../assets/images/play.svg';
import { AnswerButton, GameButton } from '../../components/Buttons';
import Question from '../../components/Question';
import fetchCountriesData from '../../services/QuestionsData';
import randomNumberGenerator from '../../utils/randomNumberGenerator';
import { useNavigate } from 'react-router-dom';

const QuestionPage = () => {
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [countriesData, setCountriesData] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [hasAnsweredRight, setHasAnsweredRight] = useState(null);
  const [points, setPoints] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCountriesData().then(response => {
      setCountriesData(response);
    });
  }, []);

  useEffect(() => {
    if (!countriesData) return;
    generateRandomQuestionAndAnswer();
  }, [countriesData]);

  const generateRandomQuestionAndAnswer = () => {
    // We have two types of question, 0 for capital city of a country, 1 for flag of a country
    const randomQuestionType = randomNumberGenerator(1);

    // Generating random numbers, that are indexes of countries in countriesData array
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

  const answerClickHandler = isCorrect => {
    setHasAnswered(true);
    if (isCorrect) setPoints(prevPoints => prevPoints + 1);
    setHasAnsweredRight(isCorrect);
  };

  const nextButtonHandler = () => {
    setHasAnswered(false);
    if (hasAnsweredRight) generateRandomQuestionAndAnswer();
    if (!hasAnsweredRight)
      navigate('/result', { replace: true, state: { points: points } });
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
            hasAnswered={hasAnswered}
            onAnswer={answerClickHandler}
          />
        ))}
        {hasAnswered && (
          <GameButton nextButton onClick={nextButtonHandler}>
            Next
          </GameButton>
        )}
      </AnswerContainer>
    </>
  );
};

export default QuestionPage;
