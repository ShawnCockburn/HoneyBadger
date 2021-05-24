import { Box } from "@material-ui/core";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { HomeRounded, Settings as SettingsIcon } from "@material-ui/icons";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core";
import Home from "./Home";
import Settings from "./Settings";

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
  { title: "Home", icon: HomeRounded, screen: Home, uid: "home" },
  {
    title: "Settings",
    icon: SettingsIcon,
    screen: Settings,
    uid: "settings",
  },
];

const App = ({ children, ...rest }) => {
  const [selectedUid, setSelectedUid] = useState(sections[0].uid);
  const onSectionSelect = (selectedUid) => setSelectedUid(selectedUid);
  return (
    <Theming>
      <Box height="100vh" width="100vw" display="flex">
      <Box>
        <SideBar
          sections={sections}
          selectedUid={selectedUid}
          onSectionSelect={onSectionSelect}
        />
        </Box>
        <Box>
          {sections.find((section) => section.uid === selectedUid).screen}
        </Box>
      </Box>
    </Theming>
  );
};

export default App;
