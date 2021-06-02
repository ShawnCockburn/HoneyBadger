import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";

const SideBarItem = ({ title, icon, uid, selected, onClick }) => {
  const Icon = icon;
  return (
    <Box onClick={onClick} style={{ cursor: "pointer" }}>
      <Icon color={selected ? "disabled" : "action"} fontSize="large" />
    </Box>
  );
};

const SideBar = ({ sections = [], onSectionSelect, selectedUid, ...rest }) => {
  const theme = useTheme();
  /*
sections data structure
[{ title: "Home", icon: (props) => <HomeRounded {...props} />, uid: "home" }];
*/

  return (
    <Box
      display="flex"
      bgcolor={theme.palette.background.paper}
      width="70px"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {sections.map(({ title, icon, uid }) => (
        <SideBarItem
          icon={icon}
          selected={selectedUid === uid}
          onClick={() => onSectionSelect(uid)}
        />
      ))}
    </Box>
  );
};

export default SideBar;
