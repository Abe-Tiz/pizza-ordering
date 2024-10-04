import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
import { useDispatch, useSelector } from "react-redux";
import { addMenuItemRequest } from "../../redux/menuSlice"; 
import CustomCheckbox from "./CustomeCheckBox";

const AddMenu = () => {
  const dispatch = useDispatch();

  // Retrieve restaurant ID from local storage
  const restaurantData = localStorage.getItem("admin-data");
  const restaurant_admin_id = restaurantData
    ? JSON.parse(restaurantData).id
    : null;

  const [formData, setFormData] = useState({
    name: "",
    toppings: [],
    price: "",
    photo: null,
    restaurant_id: restaurant_admin_id,
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [newTopping, setNewTopping] = useState("");
  const [showNewToppingInput, setShowNewToppingInput] = useState(false);

  const [availableToppings, setAvailableToppings] = useState([
    "Cheese",
    "Pepperoni",
    "Mushrooms",
  ]);

  const { menu } = useSelector((state) => state.menu);
  // console.log("menu:", menu);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToppingChange = (e) => {
    const { checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      toppings: checked
        ? [...prevData.toppings, value]
        : prevData.toppings.filter((topping) => topping !== value),
    }));
  };

  const addNewTopping = () => {
    if (newTopping.trim() !== "" && !availableToppings.includes(newTopping)) {
      setAvailableToppings((prevToppings) => [...prevToppings, newTopping]);
      setFormData((prevData) => ({
        ...prevData,
        toppings: [...prevData.toppings, newTopping],
      }));
      setNewTopping("");
      setShowNewToppingInput(false);
    }
  };

  const handleAddNewTopping = () => {
    addNewTopping(newTopping);
    setNewTopping("");
    setShowNewToppingInput(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
    // Create a preview URL for the uploaded image
    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMenuItemRequest(formData));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem 10rem",
        gap: 3,
        // width: 600,
        alignItems: "center",
        // alignSelf: "center"
      }}
    >
      <Typography variant="h5">Add Menu</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          type="text"
          name="name"
          required
          fullWidth
          onChange={handleChange}
        />
        <Typography sx={{ color: "gray" }}>Toppings</Typography>
        <Grid container spacing={2}>
          {availableToppings.map((topping, index) => (
            <Grid item xs={4} key={index}>
              <CustomCheckbox
                checked={formData.toppings.includes(topping)}
                onChange={handleToppingChange}
                value={topping}
                label={topping}
              />
            </Grid>
          ))}
          {showNewToppingInput ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginTop: 2,
              }}
            >
              <TextField
                label="New Topping"
                type="text"
                value={newTopping}
                onChange={(e) => setNewTopping(e.target.value)}
              />
              <Button onClick={handleAddNewTopping}>Add</Button>
            </Box>
          ) : (
            <Button
              onClick={() => setShowNewToppingInput(true)}
              sx={{
                marginTop: 2,
                backgroundColor: "#f67f07",
                color: "#FFFF",
                width: 20,
              }}
            >
              + Add
            </Button>
          )}
        </Grid>
        <TextField
          label="Price"
          type="number"
          name="price"
          required
          fullWidth
          onChange={handleChange}
        />
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: 5,
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              component="label"
              sx={{
                backgroundColor: "transparent",
                color: "#FF9921",
                padding: 2,
              }}
            >
              <UploadIcon sx={{ marginRight: 1 }} />
              Upload Pizza Photo
              <input
                type="file"
                name="photo"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  marginTop: "10px",
                }}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ backgroundColor: "#FF9921", borderRadius: 10, padding: 2 }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddMenu;