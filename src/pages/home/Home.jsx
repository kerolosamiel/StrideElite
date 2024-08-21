import "./home-style.css";
import Hero from "./homeComponents/Hero";
import ShowProducts from "./homeComponents/ShowProducts";
import Options from "./homeComponents/Options";
import "./responsive.css";
import AirJordan from "../../assets/air-jordan.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Men from "../../assets/men.jpg";
import Women from "../../assets/women.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Hero />
      </section>

      {/* Features Section */}
      <section className="feature">
        <div className="feature-container">
          <div className="img">
            <img src={AirJordan} alt="Air Jordan" />
            <div className="highlight">
              <h2>JORDAN</h2>
            </div>
          </div>

          <div className="info">
            <div className="title">
              <h3>WE PROVIDE</h3>

              <h1>MODERN SHOES</h1>
            </div>

            <div className="text-bx">
              <p>
                Design for the way you live your life. Atoms are beautiful in
                their simplicity, supporting your feet with absolute comfert.
              </p>

              <Link to={"products"} className="button">
                Explore More
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Products Section */}
      <section className="best-products">
        <div className="products-container">
          <div className="title">
            <h1>Best Products</h1>

            <h3>Find the best product for you</h3>
          </div>

          <div className="line"></div>

          <ShowProducts />
        </div>
      </section>

      {/* Options setion */}
      <section className="optio">
        <div className="options-container">
          <Options
            img={Men}
            alt="Men shoes"
            title="Men shoes"
            to="products/men"
          />
          <Options
            img={Women}
            alt="Women shoes"
            title="Women Shoes"
            to="products/women"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
