import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/store";
import App from "./App";
import ThemeProvider from "./ThemeProvider";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>,
  );
} else {
  console.error("Root element not found");
}
