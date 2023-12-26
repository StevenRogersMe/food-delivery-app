"use client";
import React from "react";
import CategoryCard from "./CategoryCard";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickArrowLeft, SlickArrowRight } from "./SliderArrow";

const PopularCategories = () => {
  const categoris = [
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_mexican.jpg",
      title: "Japanese",
      price: 40,
      sortNum: 98,
    },
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_placeholder.jpg",
      title: "Pizza",
      price: 50,
      sortNum: 87,
    },
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_hamburgher.jpg",
      title: "Burghers",
      price: 55,
      sortNum: 55,
    },
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_vegetarian.jpg",
      title: "Vegetarian",
      price: 40,
      sortNum: 55,
    },
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_bakery.jpg",
      title: "Bakery",
      price: 60,
      sortNum: 65,
    },
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_chinesse.jpg",
      title: "Chinese",
      price: 40,
      sortNum: 25,
    },
    {
      _href: "grid-listing-filterscol.html",
      _src: "/img/home_cat_mexican.jpg",
      title: "Mexican",
      price: 35,
      sortNum: 35,
    },
  ];

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrow: true,
    swipeToSlide: true,
    // autoplay: true,
    // centerMode: true,
    // centerPadding: "100px",
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200, // screen width at which the settings will change
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // screen width at which the settings will change
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 770, // screen width at which the settings will change
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500, // screen width at which the settings will change
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container margin_30_60">
        <div className="main_title center">
          <span>
            <em></em>
          </span>
          <h2>Popular Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>

        {/* <!-- /main_title --> */}
        <div className="slider-responsive">
          <Slider {...settings}>
            {categoris.map(({ _href, _src, title, price, sortNum }, index) => (
              <CategoryCard
                key={index}
                _href={_href}
                title={title}
                cat_url={_src}
                price={price}
                sortNum={sortNum}
              />
            ))}
          </Slider>
        </div>
        {/* <!-- /carousel --> */}
      </div>
    </section>
  );
};

export default PopularCategories;
