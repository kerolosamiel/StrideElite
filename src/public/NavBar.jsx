import Logo from "../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import data from "../db/data";
import "./public.css";
import "./responsive.css";
import ProductsBox from "../components/ProductsBox/ProductsBox";

const NavBar = ({ activeLink, handleActiveLink, saveIDs }) => {
  // Define navigation links with their respective destinations
  const navLinks = [
    { name: "Home", to: "" },
    { name: "Products", to: "products" },
    { name: "Contact", to: "contact" },
    { name: "Policies", to: "policies" },
  ];
  const [checkClick, setCheckClick] = useState(false);

  const handleBurgerClick = () => {
    setCheckClick(!checkClick);
  };

  const favProducts = (id) => {
    return data.filter((product) => id.includes(product.id));
  };

  return (
    <>
      {/* Navigation bar structure */}
      <nav
        className="header"
        style={
          activeLink === ""
            ? {
                backgroundColor: "var(--hero-background)",
                transition: "0.6s ease",
              }
            : {
                backgroundColor: "var(--background-color)",
                transition: "unset",
              }
        }
      >
        <div className="navbar-container">
          <div className="logo">
            <Link to={""} onClick={() => handleActiveLink("")}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div
            className={checkClick ? "burger-icon active" : "burger-icon"}
            onClick={handleBurgerClick}
          >
            <div className="lines line-one"></div>
            <div className="lines line-two"></div>
            <div className="lines line-three"></div>
          </div>

          <div className={checkClick ? "nav-Links active" : "nav-Links"}>
            <ul>
              {navLinks.map(({ name, to }, index) => (
                <li key={index}>
                  <Link
                    to={to}
                    className={
                      activeLink === to ? "active nav-link" : "nav-link"
                    }
                    onClick={() => handleActiveLink(to === "/" ? "" : to)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-icons">
              <div className="fav-cont">
                <GoHeart />
                <div className="fav">
                  <ProductsBox
                    products={favProducts}
                    ids={saveIDs}
                    icon={<IoMdCart />}
                  />
                </div>
              </div>
              <Link to="cart" onClick={() => handleActiveLink("cart")}>
                <IoMdCart />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
