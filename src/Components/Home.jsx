import { Box } from "@material-ui/core";
import React from "react";
import Test from "./Test";

const Home = ({ children, ...rest }) => {
  return <Box>
    <Test/>
  </Box>;
};

export default Home;
