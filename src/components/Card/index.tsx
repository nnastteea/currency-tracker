import React from "react";

import { CardProps } from "./interfaces";
import * as S from "./style";

function Card({ id, title, value, image }: CardProps) {
  return (
    <S.CardContainer>
      <img src={image} alt={title} />
      <S.TextInfo>
        <p>{title}</p>
        <p>{value}</p>
      </S.TextInfo>
    </S.CardContainer>
  );
}

export default Card;
