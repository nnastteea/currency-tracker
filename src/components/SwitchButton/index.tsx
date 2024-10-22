import React, { useState } from "react";

import * as S from "./styles";

function Switch() {
  const [isSwitch, setIsSwitch] = useState(false);

  const handleSwitch = () => {
    setIsSwitch((prevState) => !prevState);
  };

  return (
    <S.SwitchContainer>
      <S.SwitchInput
        type="checkbox"
        checked={isSwitch}
        onChange={handleSwitch}
      />
      <S.SwitchSlider />
    </S.SwitchContainer>
  );
}

export default Switch;
