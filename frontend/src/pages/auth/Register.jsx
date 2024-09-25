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

const Register = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
        gap: 14,
        height: "100%",
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
          justifyContent: "space-between",
          paddingBottom: 2,
          alignItems: "start",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required
            fullWidth
          />
          <TextField
            label="Location"
            type="text"
            name="location"
            required
            fullWidth
          />
          <TextField
            label="Phone Number"
            type="tel"
            name="phoneNumber"
            required
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox required />}
            label="I accept the terms and conditions"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ backgroundColor: "#FF9921" }}
          >
            Sign Up
          </Button>
          <Typography textAlign="center">
            Already have an account?{" "}
            <Link href="/login" underline="hover" sx={{ color: "#FF9921" }}>
              Login
            </Link>
          </Typography>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Register;
