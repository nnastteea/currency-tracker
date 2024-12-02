import React from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { openModal } from "@store/modalSlice";

import Modal from "../Modal";
import { CardProps } from "./interfaces";
import * as S from "./styles";

function Card({ id, title, value, image, abbreviation, isQuote }: CardProps) {
  const dispatch = useAppDispatch();
  const { isOpen: isModalOpen, currencyData: modalCurrencyData } =
    useAppSelector((state) => state.modal);
  const handleCardClick = () => {
    if (isQuote) {
      dispatch(openModal({ title, value, abbreviation }));
    }
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
      {isQuote && isModalOpen && modalCurrencyData && (
        <Modal currencyData={modalCurrencyData} />
      )}
    </>
  );
}

export default Card;
