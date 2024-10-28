import React, { useEffect, useState } from "react";
import CircleUpdate from "@assets/CircleUpdate.svg";
import { MILLISECONDS_IN_A_DAY } from "@constants/Constants";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useFetchCurrencyDataQuery } from "@store/currencyApi";

import * as S from "./styles";

function LastUpdate() {
  const { data, error, isLoading, refetch } = useFetchCurrencyDataQuery();

  useEffect(() => {
    const intervalId = setInterval(refetch, MILLISECONDS_IN_A_DAY);
    return () => clearInterval(intervalId);
  }, [refetch]);

  function hasMessage(
    error: FetchBaseQueryError | unknown,
  ): error is FetchBaseQueryError & { message: string } {
    return typeof error === "object" && error !== null && "message" in error;
  }

  const loadingMessage = isLoading ? <p>Loading...</p> : null;

  const errorMessage = error ? (
    <p>
      Error:{" "}
      {hasMessage(error) ? error.message : "An unexpected error occurred"}
    </p>
  ) : null;

  const lastUpdateMessage = data ? (
    <p>
      Last updated at{" "}
      {new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </p>
  ) : null;

  return (
    <S.LastUpdateContainer>
      <S.UpdateImage src={CircleUpdate} alt="Update Icon" />
      {loadingMessage}
      {errorMessage}
      {lastUpdateMessage}
    </S.LastUpdateContainer>
  );
}

export default LastUpdate;
