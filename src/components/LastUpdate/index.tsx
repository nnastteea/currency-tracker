import React from "react";
import CircleUpdate from "@assets/circleUpdate.svg";

import * as S from "./style";

function LastUpdate() {
  return (
    <S.LastUpdateContainer>
      <S.UpdateImage src={CircleUpdate} />
      <p>Last updated at 11:59pm</p>
    </S.LastUpdateContainer>
  );
}

export default LastUpdate;
