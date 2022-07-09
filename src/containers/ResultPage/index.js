import React from 'react';
import {
  IconContainer,
  MainScreen,
  MainScreenTextContainer,
} from '../../components/Containers';
import { ReactComponent as WinnerLogo } from '../../assets/images/winner.svg';
import { GameButton } from '../../components/Buttons';

const ResultPage = () => {
  return (
    <MainScreen>
      <IconContainer>
        <WinnerLogo />
      </IconContainer>
      <MainScreenTextContainer>
        <h2>Results</h2>
        <p>
          You got <span>4</span> correct answers
        </p>
      </MainScreenTextContainer>
      <GameButton paddingBig>Try again</GameButton>
    </MainScreen>
  );
};

export default ResultPage;
