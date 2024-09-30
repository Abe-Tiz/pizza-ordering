import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const OrderDetailToppings = ({ open, handleClose, order }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Order Detail
        </Typography>
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Name of Pizza: {order.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Quantity: {order.quantity}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Toppings:
        </Typography>
        <List>
          {order.toppings.map((topping, index) => (
            <ListItem
              key={index}
              sx={{ bgcolor: "lightblue", color: "black", mb: 1 }}
            >
              <ListItemText primary={topping} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default OrderDetailToppings;
