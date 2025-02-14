import { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import data from "../../../db/data";
import Button from "../../../components/Buttons/Button";

const ShowProducts = ({ handleFavClick }) => {
  const companies = ["Nike", "Converse", "Adidas", "Lacoste"];
  const [category, setCategory] = useState("Nike");

  const products = (company) => {
    return data.filter((product) => product.company === company).slice(0, 6);
  };

  const categoryHandler = (company) => {
    setCategory(company);
    console.log(products(company).length);
  };

  return (
    <div className="products-show">
      <div className="buttons">
        {companies.map((company, index) => (
          <Button
            classN="button"
            key={`cButton-${index}`}
            handleClick={() => categoryHandler(company)}
            content={company}
          />
        ))}
      </div>

      <div className="products-bx">
        {products(category).map((product) => (
          <ProductCard
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            discount={product.discount}
            rate={product.rate}
            colors={product.color}
            key={`product-${Math.random()}`}
            handleFavClick={handleFavClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;
