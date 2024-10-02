import React from "react";
import { Box, Typography, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

const AdminHeader = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        // width: "",  
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",  
        padding: 2,  
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton aria-label="notifications">
          <Badge badgeContent={4} color="secondary">
            {" "} 
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="user account">
          <AccountCircle />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AdminHeader;
