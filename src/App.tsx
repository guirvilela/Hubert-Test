import React from "react";
import { ThemeProvider } from "styled-components";
import { RoutesPages } from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import theme from "./theme";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <RoutesPages />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
