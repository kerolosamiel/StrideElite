import Logo from "../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import "./public.css";
import "./responsive.css";

const NavBar = ({ activeLink, handleActiveLink }) => {
  // Define navigation links with their respective destinations
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Products", to: "products" },
    { name: "Contact", to: "contact" },
    { name: "Policies", to: "policies" },
  ];
  const [checkClick, setCheckClick] = useState(false);

  const handleBurgerClick = () => {
    if (!checkClick) {
      setCheckClick(true);
    } else {
      setCheckClick(false);
    }
  };

  return (
    <>
      {/* Navigation bar structure */}
      <nav
        className="header"
        style={
          activeLink === "home"
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
            <Link to={"/"} onClick={() => handleActiveLink("home")}>
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
                      activeLink === name.toLowerCase()
                        ? "active nav-link"
                        : "nav-link"
                    }
                    onClick={() => handleActiveLink(name.toLowerCase())}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-icons">
              <Link
                to="saved"
                onClick={() => handleActiveLink(name.toLowerCase())}
              >
                <GoHeart />
              </Link>
              <Link
                to="cart"
                onClick={() => handleActiveLink(name.toLowerCase())}
              >
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
