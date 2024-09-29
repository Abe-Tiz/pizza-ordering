import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRoleRequest } from "../../redux/roleSlice"; // Adjust the import according to your project structure
import CustomCheckbox from "./CustomeCheckBox";
import { roleSchema } from "../../validation/Validation";

const Role = ({ onClose }) => {
  // Accept onClose prop to close the modal
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    permission: [],
  });

  const permissions = [
    "Update Order Status",
    "See Customers",
    "See Orders",
    "Create Roles",
    "Add Users",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePermissionChange = (e) => {
    const { checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      permission: checked
        ? [...prevData.permission, value]
        : prevData.permission.filter((permission) => permission !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = roleSchema.safeParse(formData);
    if (!result.success) {
      console.error(result.error.errors);
      return;
    }
    const { data } = result;
    console.log("Validated data:", data);
    dispatch(addRoleRequest(data));
    onClose(); // Close the modal after submission
  };

  return (
    <Box
      sx={{
        padding: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 25 }}
      >
        <TextField
          label="Name"
          type="text"
          name="name"
          required
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <Typography sx={{ color: "gray" }}>Permissions</Typography>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {permissions.map((permission, index) => (
            <Grid item xs={4} key={index}>
              <CustomCheckbox
                value={permission}
                onChange={handlePermissionChange}
                checked={formData.permission.includes(permission)}
                label={permission}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ backgroundColor: "#FF9921", borderRadius: 10, padding: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Role;
