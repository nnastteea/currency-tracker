import React from "react";

import Card from "../Card";
import { CardProps, SectionProps } from "./interfaces";
import * as S from "./styles";

function BlockWithCards({ titleSection, cards }: SectionProps) {
  return (
    <S.BlockWithCardsContainer>
      <S.SectionTitle>{titleSection}</S.SectionTitle>
      <S.Line>Line</S.Line>
      <S.BlockContainer>
        {cards.map(({ id, title, value, image }) => (
          <Card key={id} id={id} title={title} value={value} image={image} />
        ))}
      </S.BlockContainer>
    </S.BlockWithCardsContainer>
  );
}

export default BlockWithCards;
