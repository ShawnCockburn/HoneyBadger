import { Box, Switch, Typography } from "@material-ui/core";
import React from "react";


const Settings = ({ children, ...rest }) => {
  return (
    <Box justifyContent="center" alignItems="center" display="flex" width="100%" flexDirection="column">
      <Typography variant="button">Settings</Typography>
      <Switch/>
    </Box>
  );
};

export default Settings;
