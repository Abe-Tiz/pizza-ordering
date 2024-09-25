import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  FormGroup,
} from "@mui/material";
import pizzaLogo from "../../assets/images/pizza-logo.png";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
        gap: 14,
        height: "100vh",
        width: "100%",
        padding: 0,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          backgroundColor: "#FF9921",
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <img
          src={pizzaLogo}
          alt="Pizza Logo"
          style={{ width: 300, height: "auto" }}
        />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 4,
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <img
            src={pizzaLogo}
            alt="Pizza Logo"
            style={{ width: 100, height: "auto" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#c1660c", fontWeight: "bold" }}
          >
            Pizza
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: "#c1660c",
            fontWeight: "bold",
            borderBottom: 1,
              borderColor: "gray",
              width: "100%",
            padding:2
          }}
        >
          Login
        </Typography>
        <FormGroup
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "white",
          }}
        >
          <TextField
            label="Email"
            type="email"
            name="email"
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            required
            fullWidth
          />
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ backgroundColor: "#FF9921" }}
          >
            Login
          </Button>
          <Typography textAlign="center">
            Have an account?{" "}
            <Link href="/register" underline="hover" sx={{ color: "#FF9921" }}>
              Sign up
            </Link>
          </Typography>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Login;
