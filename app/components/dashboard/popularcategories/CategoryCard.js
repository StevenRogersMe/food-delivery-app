"use client";

import Image from "next/image";

const CategoryCard = ({ _href, cat_url, title, price, sortNum }) => {
  return (
    <div className="item_version_2">
      <a href={_href}>
        <figure>
          <span>{sortNum}</span>
          <Image
            src={cat_url}
            alt={title}
            className="owl-lazy visible"
            width={350}
            height={450}
            priority
          />

          <div className="info">
            <h3>{title}</h3>
            <small>Avg price ${price}</small>
          </div>
        </figure>
      </a>
    </div>
  );
};

export default CategoryCard;
