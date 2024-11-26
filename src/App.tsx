import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "@hooks/useTheme";
import routes from "@routes/routes";
import { ThemeProvider } from "styled-components";

import ErrorBoundary from "./components/ErrorBoundary";
import CardBank from "./pages/CardBank";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";

function App() {
  const { currentTheme } = useTheme();
  return (
    <ErrorBoundary>
      <ThemeProvider theme={currentTheme}>
        <Router>
          <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.TIMELINE} element={<Timeline />} />
            <Route path={routes.CARDBANK} element={<CardBank />} />
            <Route path={routes.CONTACT} element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
