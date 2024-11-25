import React from "react";
import Diagram from "@assets/Diagram.svg";

import * as S from "./styles";

const ModsenCurrencyTracker = () => {
  return (
    <S.Container>
      <S.TextSection>
        <S.Title>Modsen Currency Tracker</S.Title>
        <S.Subtitle>
          Quotes for the dollar and other international currencies
        </S.Subtitle>
      </S.TextSection>
      <S.DiagramContainer>
        <img src={Diagram} />
      </S.DiagramContainer>
    </S.Container>
  );
};

export default ModsenCurrencyTracker;
