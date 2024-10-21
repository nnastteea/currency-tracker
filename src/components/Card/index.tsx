import React, { useState } from "react";

import Modal from "../Modal";
import { CardProps } from "./interfaces";
import * as S from "./style";

function Card({ id, title, value, image }: CardProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <S.CardContainer onClick={handleCardClick}>
        <img src={image} alt={title} />
        <S.TextInfo>
          <p>{title}</p>
          <p>{value}</p>
        </S.TextInfo>
      </S.CardContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        currencyData={{ title, value }}
      />
    </>
  );
}

export default Card;
