"use client";

// component
import RestaurantCard from "./RestaurantCard";

// slider module
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// style
import "@/styles/dashboard/top-rated-restaurants.css";

const TopRatedRestaurants = () => {
  const restaurant_arr = [
    {
      title: "Pizza",
      image_src: "/img/location_1.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
    {
      title: "Pizza1",
      image_src: "/img/location_2.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
    {
      title: "Pizza2",
      image_src: "/img/location_3.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
    {
      title: "Pizza3",
      image_src: "/img/location_4.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
    {
      title: "Pizza4",
      image_src: "/img/location_5.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
    {
      title: "Pizza5",
      image_src: "/img/location_6.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
    {
      title: "Pizza6",
      image_src: "/img/location_7.jpg",
      image_href: "/index.html",
      category: "Da Alfredo",
      description: "27 Old Gloucester St",
      rate: 8.9,
      off: 30,
    },
  ];
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    // touchMove: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="bg_gray">
        <div className="container margin_60">
          <div className="main_title">
            <span>
              <em></em>
            </span>
            <h2>Top Rated Restaurants</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <a href="#0">View All</a>
          </div>
          <div>
            <Slider {...settings}>
              {restaurant_arr.map(
                (
                  {
                    image_href,
                    image_src,
                    title,
                    category,
                    description,
                    rate,
                    off,
                  },
                  index
                ) => (
                  <RestaurantCard
                    key={index}
                    image_href={image_href}
                    image_src={image_src}
                    title={title}
                    category={category}
                    description={description}
                    rate={rate}
                    off={off}
                  />
                )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedRestaurants;
