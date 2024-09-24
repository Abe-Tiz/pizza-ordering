import React from "react";
import { RouterProvider } from 'react-router-dom';
import router from "./router/Router";
import { Box } from "@mui/material";
   
function App() {
  return (
    <Box sx={{overflowX:"hidden" }}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Box>
  );
}

export default App;
