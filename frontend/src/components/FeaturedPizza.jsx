import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Button from "./Button";
import pizzaImage from "../assets/images/pizza-featured.png";

const FeaturedPizza = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#50482B",
        color: "#FFFF",
        borderRadius: "30px",
        marginTop: "10px",
        padding: "20px",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{display:"flex",flexDirection:"column",padding:5,width:{xs:"400px",md:"600px"}}}>
        <Typography variant="h2">
          Make Your First Order and Get{" "}
          <span style={{ color: "#FFD700" }}>50% Off</span>
        </Typography>
        <Typography variant="p">
          In publishing and graphics design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Typography>
        <Button title="Order Now" />
      </Box>
      <Container
        sx={{
          position: "absolute",
          top: { xs: -200, md: -145 },
          right: { xs: -200, md: -130 },
          transform: "rotate(15deg)",
          width: { xs: "70%", md: "50%" },
          height: "auto",
        }}
      >
        <img
          src={pizzaImage}
          alt="Pizza"
          style={{
            maxWidth: "100%",
            height: "100vh",
            backgroundColor: "transparent",
          }}
        />
      </Container>
    </Box>
  );
};

export default FeaturedPizza;
