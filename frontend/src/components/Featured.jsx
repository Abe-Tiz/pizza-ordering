import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import FeaturedPizza from "./FeaturedPizza";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/system";

const CustomDot = styled("div")(({ theme, active }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: active ? "orange" : "gray",
  display: "inline-block",
  margin: "0 5px",
}));

const Featured = () => {
  const [direction, setDirection] = useState("left");

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow:  1,
    slidesToScroll: direction === "right" ? 2 : 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    afterChange: (current) => {
      if (current === 2 && direction === "left") {
        setDirection("right");
      } else if (current === 1 && direction === "right") {
        setDirection("left");
      }
    },
    appendDots: (dots) => (
      <Box>
        <ul
          style={{
            margin: "0px",
            padding: "0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots.map((dot, index) => (
            <li key={index} style={{ listStyle: "none" }}>
              <CustomDot
                active={dot.props.className.includes("slick-active")}
              />
            </li>
          ))}
        </ul>
      </Box>
    ),
    customPaging: (i) => <CustomDot />,
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FEF2E6,#FEF2E6)",
        padding: "40px",
      }}
    >
      <Typography variant="h3" sx={{ color: "gray", marginBottom: "1.5rem" }}>
        Featured Pizza
      </Typography>
      <Slider {...settings} rtl={direction === "right"}>
        <Box style={{ margin: "0 15px", width: "300px", height: "400px" }}>
          <FeaturedPizza background="#50482B" />
        </Box>
       
        <Box style={{ margin: "0 15px", width: "300px", height: "400px" }}>
          <FeaturedPizza background="#2e3030" />
        </Box>
         <Box style={{ margin: "0 15px", width: "300px", height: "400px" }}>
          <FeaturedPizza background="#296D60" />
        </Box>
      </Slider>
    </Box>
  );
};

export default Featured;
