import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CustomCheckbox from "../pages/dashboard/CustomeCheckBox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SuccessMessage from "./SuccessMessage";
import { useDispatch } from "react-redux";
import { addOrderItemRequest } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";

const MenuItemCard = ({ menuItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const logedinCustomer = localStorage.getItem("logedin-data")
  
  useEffect(() => {
     const pizzaLogoutTimer = setTimeout(() => {
       localStorage.removeItem("pizza-data");
       navigate("/");
     }, 180000);

     return () => clearTimeout(pizzaLogoutTimer);
  },[dispatch])

  const handleToppingChange = (topping) => {
    setSelectedToppings((prev) => {
      if (prev.includes(topping)) {
        return prev.filter((item) => item !== topping);
      } else {
        return [...prev, topping];
      }
    });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const totalPrice = quantity * menuItem.price;

  // handle order
  const handleOrderClick = () => {

    if (!logedinCustomer) {
      console.error("Customer data is not available");
      return;
    }
       
    const orderData = {
      name: menuItem.name,
      toppings: selectedToppings,
      price: Number(totalPrice),
      photo: menuItem.photo,
      quantity: Number(quantity),
      status: "Pending",
      customer_id: logedinCustomer,
    };

    dispatch(addOrderItemRequest(orderData));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400 }}>
      <Typography variant="h4">{menuItem.name}</Typography>
      <Box>
        {menuItem.toppings.map((topping) => (
          <CustomCheckbox
            key={topping}
            checked={selectedToppings.includes(topping)}
            onChange={() => handleToppingChange(topping)}
            label={topping}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "start", gap: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="outlined"
            onClick={decreaseQuantity}
            sx={{ borderWidth: 1, borderColor: "#f67f07", outline: "hidden" }}
          >
            -
          </Button>
          <Typography variant="h6">{quantity}</Typography>
          <Button
            variant="outlined"
            onClick={increaseQuantity}
            sx={{ borderWidth: 1, borderColor: "#f67f07" }}
          >
            +
          </Button>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", mt: 1, color: "#01C550", fontSize: 25 }}
        >
          {totalPrice}{" "}
          <Typography
            variant="body2"
            component="span"
            sx={{ verticalAlign: "super", fontSize: "0.8rem", color: "#000" }}
          >
            Birr
          </Typography>
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#f67f07",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={handleOrderClick}
      >
        Order
        <ArrowForwardIcon sx={{ marginLeft: 1, transform: "rotate(-50deg)" }} />
      </Button>
      
      {/* Success Modal */}
      <SuccessMessage open={openModal} onClose={handleCloseModal} />
    </Box>
  );
};

export default MenuItemCard;
