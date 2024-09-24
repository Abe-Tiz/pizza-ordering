import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 10) {
    return words.slice(0, 10).join(" ") + "...";
  }
  return description;
};

const CardComponent = ({ image, name, orders, description }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
      }}
    >
      <CardContent sx={{ display: "flex", width: "full" ,alignItems:"center"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "start"
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Avatar
              src={image}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#000", fontWeight: "bold" }}
            >
              {name}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {truncateDescription(description)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2,
            backgroundColor: "#F2F9F2",
            padding: 3,
            borderRadius: 5,
          }}
        >
          <Box
            sx={{
              padding: "16px",
              borderRadius: "45px",
              backgroundColor: "#F5E1C2",
              color: "#FF8100",
            }}
          >
            <ShoppingCartIcon sx={{ marginRight: 0 }} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", padding: 1 }}>
            <Typography variant="p" sx={{ fontSize: 12 }}>
              Number Of Orders
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "#FF8100", fontWeight: "bold", fontSize: "20px" }}
              color="text.secondary"
            >
              {orders}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
