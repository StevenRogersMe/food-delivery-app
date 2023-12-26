"use client";

// components
import PopularCategories from "./components/dashboard/popularcategories/PopularCategories";
import SearchSection from "./components/dashboard/searchSection/SearchSection";
import TopRatedRestaurants from "./components/dashboard/topRatedRestaurants/TopRatedRestaurants";
import StartingOrder from "./components/dashboard/startingOrder/StartingOrder";
import ScrollTop from "./components/scrollTop/ScrollTop";

// style
import "@/styles/wave.css";

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
