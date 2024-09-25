import React from "react";
import RoutesComponent from "./routes";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import "./index.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <RoutesComponent />
  </ThemeProvider>
);

export default App;
