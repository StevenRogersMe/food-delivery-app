"use client";
import { useEffect, useState } from "react";

import PopularCategories from "./components/dashboard/popularcategories/PopularCategories";
import SearchSection from "./components/dashboard/searchSection/SearchSection";

import "@/styles/dashboard/home.css";
import TopRatedRestaurants from "./components/dashboard/topRatedRestaurants/TopRatedRestaurants";
import StartingOrder from "./components/dashboard/startingOrder/StartingOrder";
import ScrollTop from "./components/scrollTop/ScrollTop";

// import Slide1 from "../public/img/slides/slide_home_1.jpg";
// import Slide2 from "../public/img/slides/slide_home_2.jpg";
// import Slide3 from "../public/img/slides/slide_home_3.jpg";
// import BackgroundSlider from "react-background-slider";

export default function Home() {
  return (
    <>
      <SearchSection />
      <PopularCategories />
      <TopRatedRestaurants />
      <StartingOrder />
      <ScrollTop />
    </>
  );
}
