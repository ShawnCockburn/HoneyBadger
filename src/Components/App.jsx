import React from "react";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import Home from "./Home";

/*
Setup global theming
*/
const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const Theming = ({ children, ...rest }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

/*
App
*/
const App = ({ children, ...rest }) => {
  return (
    <Theming>
      <Home />
    </Theming>
  );
};

export default App;
