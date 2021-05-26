import { Box, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import ActionCard from "./ActionCard";

/*
TODO: add basic workflow capability
*/

const Workflow = ({ children, ...rest }) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      width="100%"
      flexDirection="column"
    >
    <ActionCard progress={80}/>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
    </Box>
  );
};

export default Workflow;
