import React from "react";
import { ReactComponent as PlayLogo } from "../../assets/images/play.svg";
import {
  IconContainer,
  MainScreen,
  MainScreenTextContainer,
} from "../../components/Containers";
import { GameButton } from "../../components/Buttons";

const StartPage = () => {
  return (
    <MainScreen>
      <IconContainer>{<PlayLogo />}</IconContainer>
      <MainScreenTextContainer>
        <h2>Start now</h2>
        <p>
          Your best score is <span>2</span>
        </p>
      </MainScreenTextContainer>
      <GameButton bigPadding>Start</GameButton>
    </MainScreen>
  );
};

export default StartPage;
