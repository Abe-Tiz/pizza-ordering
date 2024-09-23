import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 760px)");
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Orders", path: "/orders" },
    { text: "Who we are", path: "/about" },
  ];

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, path }) => (
          <ListItem button key={text} component={NavLink} to={path}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          background: "linear-gradient(to bottom, #FEF2E6, #FFDDBB, #FEF3E7)",
          color: "gray",
          width:"100vw"
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#FFF3E7",
            color: "gray",
            padding: "10px",
          }}
        >
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            pizza
          </Typography>
          <Box>
            {isMobile ? (
              <>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    textDecoration: "none",
                    marginRight: "4rem",
                  })}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/orders"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    textDecoration: "none",
                    marginRight: "10rem",
                  })}
                >
                  Orders
                </NavLink>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10rem",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "2rem" }}
                >
                  {menuItems.map(({ text, path }) => (
                    <NavLink
                      to={path}
                      key={text}
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "black",
                        textDecoration: "none",
                      })}
                    >
                      {text}
                    </NavLink>
                  ))}
                </Box>
                <NavLink
                  color="inherit"
                  style={{
                    backgroundColor: "#FF890F",
                    color: "white",
                    padding: "5px 15px",
                  }}
                >
                  Register
                </NavLink>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Header;
