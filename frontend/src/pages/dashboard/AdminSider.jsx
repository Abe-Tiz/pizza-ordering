import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pizzaLogo from "../../assets/images/pizza-logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const AdminSider = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);  

  const logout = () => {
    localStorage.removeItem("amin-token");
    localStorage.removeItem("admin-data");
    navigate("/admin-login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);  
  };

  return (
    <Box>
      {/* Hamburger menu for mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" }, 
          justifyContent: "space-between",
          padding: 2,
          alignItems: "center",
        }}
      >
        {/* Hide the PIZZA text on mobile */}
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          PIZZA
        </Typography>
        <MenuIcon onClick={toggleSidebar} sx={{ cursor: "pointer" }} />
      </Box>

      {/* Sidebar */}
      <Box
        sx={{
          display: { xs: isOpen ? "flex" : "none", md: "flex" },  
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          width: "250px",
          position: { xs: "fixed", md: "static" }, 
          height: { xs: "100vh", md: "auto" }, 
          top: 0,
          left: 0,
          zIndex: 1000,  
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
          {/* Hide the PIZZA text on mobile */}
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            PIZZA
          </Typography>
          <MenuIcon onClick={toggleSidebar} sx={{ cursor: "pointer" }} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFF8F2",
            display: "flex",
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
          <NavLink
            style={{ padding: ".1em 2em" }}
            to="/admin-dashboard/view-order"
            onClick={toggleSidebar} 
          >
            Orders
          </NavLink>
          <NavLink
            style={{ padding: ".1em 2em" }}
            to="/admin-dashboard"
            onClick={toggleSidebar}
          >
            Add menu
          </NavLink>
          <NavLink
            style={{ padding: ".1em 2em" }}
            to="/admin-dashboard/view-role"
            onClick={toggleSidebar}
          >
            Role
          </NavLink>
          <NavLink
            style={{
              padding: ".1em 2em",
              borderBottomWidth: "3px",
              borderBottomColor: "gray",
            }}
            to=""
            onClick={toggleSidebar}
          >
            User
          </NavLink>
          <Button
            sx={{ padding: "2em 2em", color: "red", fontWeight: 700 }}
            onClick={() => {
              logout();
              toggleSidebar();
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSider;
