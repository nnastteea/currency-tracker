import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "@hooks/useTheme";
import routes from "@routes/routes";
import styled, { ThemeProvider } from "styled-components";

import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";

const CardBank = React.lazy(() => import("./pages/CardBank"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Home = React.lazy(() => import("./pages/Home"));
const Timeline = React.lazy(() => import("./pages/Timeline"));

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

function App() {
  const { currentTheme } = useTheme();
  return (
    <ErrorBoundary>
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Suspense
            fallback={
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            }
          >
            <Routes>
              <Route path={routes.HOME} element={<Home />} />
              <Route path={routes.TIMELINE} element={<Timeline />} />
              <Route path={routes.CARDBANK} element={<CardBank />} />
              <Route path={routes.CONTACT} element={<Contact />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
