import { Box } from "@material-ui/core";
import { Add, PlusOneOutlined } from "@material-ui/icons";
import React from "react";

const Home = ({ children, ...rest }) => {
  return (
  <Box justifyContent="center" alignItems="center" display="flex" width="100%">
  <Add fontSize="large"/>
  </Box>
  );
};

export default Home;
