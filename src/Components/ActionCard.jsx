import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { Children } from "react";

/*
TODO: work on sizing and add workflow buttons
 */

const ActionCard = ({ progress = 0, disabled = false, children, ...rest }) => {
  const theme = useTheme();
  //returns a grad bg based on the progress
  const grad = (progress) =>
    `linear-gradient(90deg, rgba(0,255,128,1) 0%, rgba(0,255,128,1) ${progress}%, ${theme.palette.background.paper} ${
      progress + 10 > 100 ? 100 : progress < 1 ? progress : progress + 10
    }%)`;

  return (
    <Box
      style={{
        background:
          progress === 0 ? theme.palette.background.paper : grad(progress),
      }}
      borderRadius={10}
      minWidth="300px"
      width={"90%"}
      textAlign="center"
      overflow="hidden"
    >
      <Box width="100%" height="30px" bgcolor={theme.palette.secondary.main}>
        <Typography variant="h6" style={{ userSelect: "none" }}>
          {"Title"}
        </Typography>
      </Box>
      <Box
        padding={"10px"}
        display="flex"
        flexDirection="column"
        width="max-content"
        justifyContent="center"
        margin="auto"
        style={disabled ? { pointerEvents: "none", opacity: "0.5" } : {}}
      >
        {Children.toArray(children).map((e) => (
          <div style={{ marginTop: "5px", marginBottom: "5px" }}>{e}</div>
        ))}
      </Box>
    </Box>
  );
};

export default ActionCard;
