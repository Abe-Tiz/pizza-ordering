import React from "react";
import TopRestorants from "../components/TopRestorants";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import PopularPizza from "../components/PopularPizza";
import FastingPizza from "../components/FastingPizza";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <TopRestorants />
      <PopularPizza />
      <FastingPizza />
      <Footer />
    </>
  );
};

export default Home;
