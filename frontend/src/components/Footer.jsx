import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import PizzaIcon from "@mui/icons-material/Pizza";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar
        position="static"
        sx={{ background: "#CCB691", top: "auto", bottom: 0, padding: 5 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#0a0909",
              }}
              activeStyle={{ color: "white" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/order"
              style={{
                textDecoration: "none",
                color: "#0a0909",
              }}
            >
              Order
            </NavLink>
            <NavLink
              to="/about"
              style={{
                textDecoration: "none",
                color: "#0a0909",
              }}
            >
              About Us
            </NavLink>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <IconButton>
                <LinkedInIcon sx={{ color: "#FF890F" }} />
              </IconButton>
              <Typography variant="h6" sx={{ color: "#ea7f15" ,fontWeight:"bold"}}>
                Pizza
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "20px",
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                boxShadow: 1,
                flexGrow: 1,
              }}
            >
              <TextField
                label="Your feedback..."
                sx={{ flexGrow: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{ color: "#FF890F" }}>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Bottom Footer */}
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "white",
          padding: 5,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Pizza All Rights Reserved.
          </Typography>
          <Typography variant="body2">Terms & Conditions</Typography>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            gap: 2,
          }}
        >
          <IconButton
            sx={{ backgroundColor: "#201b1b", borderRadius: "50%" }}
            aria-label="Facebook"
          >
            <FacebookIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "#201b1b", borderRadius: "50%" }}
            aria-label="LinkedIn"
          >
            <LinkedInIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "#201b1b", borderRadius: "50%" }}
            aria-label="Twitter"
          >
            <TwitterIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{ backgroundColor: "#201b1b", borderRadius: "50%" }}
            aria-label="YouTube"
          >
            <YouTubeIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
