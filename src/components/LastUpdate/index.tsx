import React, { useEffect, useState } from "react";
import CircleUpdate from "@assets/CircleUpdate.svg";
import { MILLISECONDS_IN_A_DAY } from "@constants/Constants";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchCurrencyData } from "@store/sliceCurrency";

import * as S from "./styles";

function LastUpdate() {
  const dispatch = useAppDispatch();
  const { loading, error, lastUpdated } = useAppSelector(
    (state) => state.currency,
  );

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchCurrencyData());
    };

    fetchData();
    const intervalId = setInterval(fetchData, MILLISECONDS_IN_A_DAY);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <S.LastUpdateContainer>
      <S.UpdateImage src={CircleUpdate} alt="Update Icon" />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Last updated at {lastUpdated}</p>
      )}
    </S.LastUpdateContainer>
  );
}

export default LastUpdate;
