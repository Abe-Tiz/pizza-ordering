import React from "react";
import CardComponent from "./CardComponent";
import { Box, Typography } from "@mui/material";

const cardData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
    name: "John Doe",
    orders: "2K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
    name: "Jane Smith",
    orders: "1.5K",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
    name: "Alice Johnson",
    orders: "3K",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
    name: "Bob Brown",
    orders: "1K",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
    name: "Charlie Green",
    orders: "1.2K",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-TAAnJv1_IwjZT0s9comdMsmNqiR8Xps4g&s",
    name: "Diana Prince",
    orders: "900",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
  },
];

const TopRestaurants = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FEF2E6, #fee5cb,#FEF2E6)",
        padding: "40px",
      }}
    >
      <Typography variant="h3" sx={{ color: "gray", marginBottom: "1.5rem" }}>
        Top Restaurants
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",  
          "&::-webkit-scrollbar": {
            display: "none",  
          },
          "-ms-overflow-style": "none",  
          "scrollbar-width": "none",  
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "10px" }}>
          {" "}
          {cardData.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: "500px",
                height: "200px",
                flexShrink: 0,
              }}
            >
              <CardComponent
                image={card.image}
                name={card.name}
                orders={card.orders}
                description={card.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TopRestaurants;
