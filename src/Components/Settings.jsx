import { Box, Switch, Typography } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkmode } from "../store/actions/settings";
import { DARKMODE_OPTIONS } from "../store/reducers/settings";

const Settings = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="button">Settings</Typography>
      <Box>
        <Typography variant="caption">Darkmode: </Typography>
        <Switch
          checked={settings.darkmode === DARKMODE_OPTIONS.DARK}
          onChange={() =>
            dispatch(
              setDarkmode(
                settings.darkmode === DARKMODE_OPTIONS.DARK
                  ? DARKMODE_OPTIONS.LIGHT
                  : DARKMODE_OPTIONS.DARK
              )
            )
          }
        />
      </Box>
    </Box>
  );
};

export default Settings;
