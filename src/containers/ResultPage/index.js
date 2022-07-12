import React from 'react';
import {
  IconContainer,
  MainScreen,
  MainScreenTextContainer,
} from '../../components/Containers';
import { ReactComponent as WinnerLogo } from '../../assets/images/winner.svg';
import { GameButton } from '../../components/Buttons';
import { useNavigate, useLocation } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const savePointsToLS = () => {
    const highestScore = localStorage.getItem('highestScore') || 0;
    if (state.points > +highestScore)
      localStorage.setItem('highestScore', state.points);
  };

  savePointsToLS();

  return (
    <MainScreen>
      <IconContainer>
        <WinnerLogo />
      </IconContainer>
      <MainScreenTextContainer>
        <h2>Results</h2>
        <p>
          You got <span>{state.points}</span> correct answers
        </p>
      </MainScreenTextContainer>
      <GameButton
        paddingBig
        onClick={() => navigate('/question', { replace: true })}>
        Try again
      </GameButton>
    </MainScreen>
  );
};

export default ResultPage;
