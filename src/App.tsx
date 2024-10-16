import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import { themes } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
