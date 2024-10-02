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
import UploadIcon from "@mui/icons-material/Upload";
import { z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../redux/userSlice";
 import { useNavigate } from 'react-router-dom';
import { registerSchema } from './../../validation/Validation';

const AdminRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    adminName: "",
    email: "",
    password: "",
    restaurantName: "",
    location: "",
    phone: "",
    logo: null,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { user, error, loading } = useSelector((state) => state.user);

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

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        logo: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      registerSchema.parse({ ...formData, confirmPassword });
     
      if (formData.password !== confirmPassword) {
        setErrors({ confirmPassword: "Passwords do not match" });
        return;
      }

      setErrors({});
      dispatch(registerRequest(formData)); 
      navigate("/admin-login");
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
              label="Restaurant Name"
              type="text"
              name="restaurantName"
              required
              fullWidth
              onChange={handleChange}
              error={!!errors.restaurantName}
              helperText={errors.restaurantName}
            />
            <TextField
              label="Location"
              type="text"
              name="location"
              required
              fullWidth
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
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
            <Button
              variant="contained"
              component="label"
              sx={{ backgroundColor: "transparent", color: "#FF9921" }}
            >
              <UploadIcon sx={{ marginRight: 1 }} />
              Upload Logo
              <input
                type="file"
                name="logo"
                hidden
                onChange={handleLogoUpload}
              />
            </Button>
            {formData.logo && (
              <img
                src={formData.logo}
                alt="Uploaded Logo"
                style={{ width: 100, height: "auto", marginTop: 10 }}
              />
            )}
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
              <Link
                href="/admin-login"
                underline="hover"
                sx={{ color: "#FF9921" }}
              >
                Login
              </Link>
            </Typography>
          </FormGroup>
        </form>
      </Box>
    </Box>
  );
};

export default AdminRegister;
