// import Image from "next/image";

import Image from "next/image";

export default function RestaurantCard({
  image_src,
  image_href,
  title,
  category,
  description,
  rate,
  off,
}) {
  return (
    <div className="px-2">
      <div className="strip">
        <a href={image_href} className="strip_info">
          <figure>
            <small className="small">{title}</small>
            <span className="ribbon off">-{off}%</span>
            <Image
              src={image_src}
              className="owl-lazy"
              alt={title}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="item_title">
              <h3>{category}</h3>
              <small>{description}</small>
            </div>
          </figure>
        </a>
        <ul>
          <li>
            <span className="take yes">Take away</span>{" "}
            <span className="deliv yes">Delivery</span>
          </li>
          <li>
            <div className="score">
              <strong>{rate}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
