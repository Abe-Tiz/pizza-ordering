import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturedPizza from "../components/FeaturedPizza";

const Featured = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FEF2E6, #e9e1d9)",
        padding: "40px",
      }}
    >
      <Typography variant="h3" sx={{ color: "gray" }}>
        Featured Pizza
      </Typography>
      <FeaturedPizza />
    </Box>
  );
};

export default Featured;
