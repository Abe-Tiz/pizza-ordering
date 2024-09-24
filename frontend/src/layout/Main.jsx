import React from 'react'
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from '../components/Header';


const Main = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FEF2E6, #FFDDBB, #FEF3E7)",
        // width: "100vw",
      }}
    >
      <Header />

      <Box sx={{ width: "100vw" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Main
