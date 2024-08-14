import { useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import data from "../../../db/data";
import { motion, AnimatePresence } from "framer-motion";

const ShowProducts = () => {
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
          <button
            className="button"
            key={`buttons-${index}`}
            onClick={() => categoryHandler(company)}
          >
            {company}
          </button>
        ))}
      </div>

      <motion.div className="products-bx">
        <AnimatePresence>
          {products(category).map((product) => (
            <ProductCard
              img={product.img}
              title={product.title}
              price={product.price}
              discount={product.discount}
              rate={product.rate}
              colors={product.color}
              key={`product-${Math.random()}`}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ShowProducts;
