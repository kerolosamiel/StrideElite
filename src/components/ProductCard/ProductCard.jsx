import "./product-card.css";
import { GoHeart } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../Buttons/Button";

function ProductCard({
  id,
  img,
  title,
  price,
  discount,
  rate,
  colors,
  handleFavClick,
}) {
  const [rating, setRating] = useState(["", "", "", "", ""]);

  useEffect(() => {
    setRating((prevRating) => {
      return prevRating.map((_, index) => (index < rate ? "active" : ""));
    });
  }, [rate]);

  return (
    <div className="product">
      <div className="image">
        <img src={img} alt="img" />

        <div className="colors">
          {colors.map((color, index) => (
            <div
              className="color"
              style={{ backgroundColor: color, zIndex: `1${index}` }}
              key={`colors-${index}`}
            ></div>
          ))}

          <div className="arrow">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="title">
          <Link to="product">
            <h2>{title}</h2>
          </Link>
        </div>

        <div className="cont">
          <div className="more-info">
            <div className="price">
              <p>${(price - (price * discount) / 100).toFixed(2)}</p>
              <p className="discount">${price.toFixed(2)}</p>
            </div>

            <div className="rate">
              {rating.map((rating, index) => (
                <FaStar className={rating} key={`star-${index}`} />
              ))}
            </div>
          </div>

          <div className="buttons">
            <Button
              classN="fav-button"
              handleClick={() => handleFavClick(id)}
              content={<GoHeart />}
            />

            <Button
              classN="button"
              handleClick={() => console.log(id)}
              content="But Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
