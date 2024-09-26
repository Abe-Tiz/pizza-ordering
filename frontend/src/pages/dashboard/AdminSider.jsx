import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import pizzaLogo from "../../assets/images/pizza-logo.png";

const AdminSider = () => {
  return (
    <Box
      sx={{
        // padding: 4,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 3,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography variant="h6">PIZZA</Typography>
        <Typography variant="h6">Icon</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#FFF8F2",
          display: "flex",
          // alignItems: "center",
          // padding: 15,
        }}
      >
        <img
          src={pizzaLogo}
          alt="Pizza Logo"
          style={{ width: 100, height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 4,
        }}
      >
        <NavLink style={{ padding: ".1em 2em" }} to="/admin-dashboard/ordered">
          Orders
        </NavLink>
        <NavLink style={{ padding: ".1em 2em" }} to="/admin-dashboard">
          Add menu
        </NavLink>
        <NavLink style={{ padding: ".1em 2em" }} to="">
          Role
        </NavLink>
        <NavLink
          style={{
            padding: ".1em 2em",
            borderBottomWidth: "3px",
            borderBottomColor: "gray",
          }}
          to=""
        >
          User
        </NavLink>
        <Button
          sx={{ padding: "2em 2em", color: "red", fontWeight: 700 }}
          //  onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default AdminSider
