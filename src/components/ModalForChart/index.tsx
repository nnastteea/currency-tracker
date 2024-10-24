import React from "react";

import * as S from "./styles";

interface ModalForChartProps {
  isOpen: boolean;
  handleClose: () => void;
}

class ModalForChart extends React.Component<ModalForChartProps> {
  render() {
    const { isOpen, handleClose } = this.props;
    if (!isOpen) return null;
    return (
      <S.ModalOverlay>
        <S.ModalContainer>
          <S.CloseButton onClick={handleClose}>✖</S.CloseButton>
          <S.Title>График на 30 дней успешно построен!</S.Title>
        </S.ModalContainer>
      </S.ModalOverlay>
    );
  }
}

export default ModalForChart;
