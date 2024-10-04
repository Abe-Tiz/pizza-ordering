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
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
// import { registerRequest } from "../../redux/userSlice";
import  { loginSchema } from "../../validation/Validation";
import { loginRequest } from "../../redux/userSlice";
import { NavLink, useNavigate } from 'react-router-dom';
 
const AdminLogin = () => {
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.user);

  // console.log("user:",user)
  const navigate =  useNavigate();
  const [formData, setFormData] = useState({
    adminName: "",
    email: "",
    password: "",
    // location: "",
    phone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loginSchema.parse({ ...formData, confirmPassword });

      if (formData.password !== confirmPassword) {
        setErrors({ confirmPassword: "Passwords do not match" });
        return;
      }

      setErrors({});
      // console.log("results:", user);
      
      await dispatch(loginRequest(formData));
      if (user.success == "Success") {
        localStorage.setItem("amin-token", user.token);
        localStorage.setItem("admin-data",JSON.stringify(user.user));
        navigate("/admin-dashboard");
      } 
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = {};
        error.errors.forEach((err) => {
          formattedErrors[err.path[0]] = err.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
        gap: 10,
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
          padding: 15,
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

        <NavLink
          to="/admin-register"
          variant="h6"
          sx={{
            color: "#c1660c",
            fontWeight: "bold",
            borderBottom: 1,
            borderColor: "gray",
            width: "100%",
            padding: 2,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Add Admin
        </NavLink>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "white",
              padding: 2,
            }}
          >
            <TextField
              label="Admin Name"
              type="text"
              name="adminName"
              required
              fullWidth
              onChange={handleChange}
              error={!!errors.adminName}
              helperText={errors.adminName}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              required
              fullWidth
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              required
              fullWidth
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              fullWidth
              onChange={handleConfirmPasswordChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              required
              fullWidth
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
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
              Continue
            </Button>
          </FormGroup>
        </form>
      </Box>
    </Box>
  );
};

export default AdminLogin;
