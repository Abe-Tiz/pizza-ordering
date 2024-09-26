import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import pizzaImage from "../assets/images/pizza-1.png";
// import Featured from "../pages/Featured";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #FEF2E6, #FFDDBB,#FEF2E6)",
          padding: "70px 30px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          // width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "400px", md: "600px" },
          }}
        >
          <Typography variant="h1" sx={{ color: "#FF890F", font: "bold" }}>
            Order us
          </Typography>
          <Typography variant="body1">
            In publishing and graphics design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
          <Box sx={{ width: { xs: "100%", sm: "40rem" } }}>
            <TextField
              placeholder="Search"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "gray",
                borderRadius: "20px",
                marginTop: "50px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  "&:focus": {
                    outline: "none",
                  },
                },
                width: { xs: "100%", sm: "20rem" },
              }}
            />
            <Box
              sx={{
                backgroundColor: "#FF890F",
                borderRadius: "50px",
                padding: "15px",
                position: "relative",
                width: "20px",
                height: "20px",
                top: "-3.3rem",
                left: { xs: "calc(100% - 2.5rem)", sm: "16.9rem" },
              }}
            >
              <SearchIcon sx={{ color: "white", textAlign: "center" }} />
            </Box>
          </Box>
        </Box>

        <img
          src={pizzaImage}
          alt="hero Image"
          style={{
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
      </Box>

    
    </>
  );
};

export default Hero;
