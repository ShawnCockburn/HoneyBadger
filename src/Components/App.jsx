import { Box } from "@material-ui/core";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { HomeRounded, Settings } from "@material-ui/icons";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

/*
Setup global theming
*/
const theme = createMuiTheme({
  palette: {
    type: "dark",
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

//test data
const sections = [
  { title: "Home", icon: (props) => <HomeRounded {...props} />, uid: "home" },
  {
    title: "Settings",
    icon: (props) => <Settings {...props} />,
    uid: "settings",
  },
];

const App = ({ children, ...rest }) => {
  const [selectedUid, setSelectedUid] = useState(sections[0].uid);
  const onSectionSelect = (selectedUid) => setSelectedUid(selectedUid);
  return (
    <Theming>
      <Box height="100vh">
        <SideBar
          sections={sections}
          selectedUid={selectedUid}
          onSectionSelect={onSectionSelect}
        />
      </Box>
    </Theming>
  );
};

export default App;
