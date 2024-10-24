import React from "react";
import TimeLine from "pages/Timeline";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import { themes } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={themes}>
      {/* <Home /> */}
      <Timeline />
    </ThemeProvider>
  );
}

export default App;
