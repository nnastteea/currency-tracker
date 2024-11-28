import React, { ReactNode } from "react";

import Header from "../Header";
import * as S from "./styles";

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log("ошибка отловлена", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <S.ErrorContainer>
            <S.ErrorMessage>Something is wrong...</S.ErrorMessage>
            <S.ErrorBear />
          </S.ErrorContainer>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
