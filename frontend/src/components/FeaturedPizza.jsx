import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import Button from "./Button";
import pizzaImage from "../assets/images/pizza-featured.png";

const FeaturedPizza = ({background}) => {
  const pizzaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pizzaRef.current) {
        pizzaRef.current.style.opacity = 1;
        pizzaRef.current.style.transform = "translateX(0)";
      }
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      ref={pizzaRef}
      sx={{
        backgroundColor: background,
        color: "#FFFF",
        borderRadius: "40px",
        marginTop: "10px",
        // padding: "20px",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "400px",
        alignItems: "center",
        // gap: 0,
        opacity: 0,
        transform: "translateX(-100%)",
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
        gap:2
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 3,
          width: { xs: "400px", md: "600px" },
          gap:1
        }}
      >
        <Typography variant="h2">
          Make Your First Order and Get{" "}
          <span style={{ color: "#FFD700" }}>50% Off</span>
        </Typography>
        <Typography variant="body1">
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
          width: { xs: "60%", md: "50%" },
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
