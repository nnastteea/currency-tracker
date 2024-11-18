import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@routes/routes";
import { ThemeProvider } from "styled-components";

import CardBank from "./pages/CardBank";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import { themes } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Router>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.TIMELINE} element={<Timeline />} />
          <Route path={routes.CARDBANK} element={<CardBank />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
