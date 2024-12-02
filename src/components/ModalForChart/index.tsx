import React from "react";

import { ModalForChartProps } from "./interfaces";
import * as S from "./styles";

class ModalForChart extends React.Component<ModalForChartProps> {
  render() {
    const { isOpen, handleClose } = this.props;
    if (!isOpen) return null;
    return (
      <S.ModalOverlay>
        <S.ModalContainer>
          <S.CloseButton onClick={handleClose}>✖</S.CloseButton>
          <S.Title>The chart has been successfully built!</S.Title>
        </S.ModalContainer>
      </S.ModalOverlay>
    );
  }
}

export default ModalForChart;
