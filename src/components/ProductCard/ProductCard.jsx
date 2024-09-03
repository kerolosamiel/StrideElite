import "./product-card.css";
import { GoHeart } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
          <h2>{title}</h2>
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
            <button className="fav-button">
              <GoHeart onClick={() => handleFavClick(id)} />
            </button>
            <button className="button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
