import React from "react";

import Card from "../Card";
import { CardProps, SectionProps } from "./interfaces";
import * as S from "./styles";

function BlockWithCards({ titleSection, cards, isQuote }: SectionProps) {
  return (
    <S.BlockWithCardsContainer>
      <S.SectionTitle>{titleSection}</S.SectionTitle>
      <S.Line />
      <S.BlockContainer>
        {cards.map(({ id, title, value, image, abbreviation }) => (
          <Card
            key={id}
            id={id}
            title={title}
            value={value}
            image={image}
            abbreviation={abbreviation}
            isQuote={isQuote}
          />
        ))}
      </S.BlockContainer>
    </S.BlockWithCardsContainer>
  );
}

export default BlockWithCards;
