import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  FormGroup,
  Stack,
  Alert,
} from "@mui/material";
import pizzaLogo from "../../assets/images/pizza-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CUSTOMER_CREATE_REQUEST } from "../../redux/userSlice";
import { customerCreateSchema } from "../../validation/Validation";
import { z } from "zod";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    location: "",
    phone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { customer, error, loading } = useSelector((state) => state.user);

  console.log("users:", customer, error, loading);

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data
      customerCreateSchema.parse({ ...formData, confirmPassword });
      dispatch(CUSTOMER_CREATE_REQUEST(formData));
       if (!error && !loading) {
         navigate("/login");
       } 
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = {};
        error.errors.forEach((err) => {
          formattedErrors[err.path[0]] = err.message;
        });
        // Handle errors (e.g., setErrors(formattedErrors))
      }
    }
  };

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
        {error && !loading && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
        )}
        <form onSubmit={handleSubmit}>
          <FormGroup
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
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              required
              fullWidth
              onChange={handleChange}
            />
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              fullWidth
              onChange={handleConfirmPasswordChange}
            />
            <TextField
              label="Location"
              type="text"
              name="location"
              required
              fullWidth
              onChange={handleChange}
            />
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              required
              fullWidth
              onChange={handleChange}
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
        </form>
      </Box>
    </Box>
  );
};

export default Register;
