import React from 'react';
import { ReactComponent as PlayLogo } from '../../assets/images/play.svg';
import {
  IconContainer,
  MainScreen,
  MainScreenTextContainer,
} from '../../components/Containers';
import { GameButton } from '../../components/Buttons';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <MainScreen>
      <IconContainer>
        <PlayLogo />
      </IconContainer>
      <MainScreenTextContainer>
        <h2>Start now</h2>
        <p>
          Your best score is <span>2</span>
        </p>
      </MainScreenTextContainer>
      <GameButton
        bigPadding
        onClick={() => navigate('/question', { replace: true })}>
        Start
      </GameButton>
    </MainScreen>
  );
};

export default StartPage;
