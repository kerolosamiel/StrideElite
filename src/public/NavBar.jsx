import Logo from "../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import "./public.css";

const NavBar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "Products", to: "products" },
    { name: "Contact", to: "contact" },
    { name: "Policies", to: "policies" },
  ];

  const [activeLink, setActiveLink] = useState("home");

  const handleActiveLink = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <>
      <nav className="header">
        <div className="navbar-container">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="nav-Links">
            <ul>
              {links.map(({ name, to }, index) => (
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
              <GoHeart />
              <IoMdCart />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
