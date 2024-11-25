import React, { useState } from "react";
import { useTheme } from "@hooks/useTheme";
import { themes } from "@themes/theme";

import * as S from "./styles";

function Switch() {
  const { currentTheme, changeTheme } = useTheme();
  const [isSwitch, setIsSwitch] = useState(currentTheme === themes.light);

  const handleSwitch = () => {
    setIsSwitch((prevState) => !prevState);
    changeTheme();
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
