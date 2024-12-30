import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

const Footer = ({ handleActiveLink }) => {
  // Define links with their respective destinations
  const links = [
    { name: "Home", to: "" },
    { name: "Products", to: "products" },
    { name: "Contact", to: "contact" },
    { name: "Policies", to: "policies" },
  ];

  const currentDate = new Date();

  return (
    <footer>
      <div className="footer-container">
        <div className="top">
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="links">
            <ul>
              {links.map(({ name, to }, index) => (
                <li key={index}>
                  <Link to={to} onClick={() => handleActiveLink(to)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="social-icon">
            <a href="face.com" target="_blank">
              <FaFacebookF />
            </a>
            <a href="insta.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="twitter.com" target="_blank">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="bottom">
          <h3>
            copyright <MdCopyright /> {currentDate.getFullYear()}. developed by{" "}
            <a href="https://kerolosamiel.github.io/portfolio/" target="_blank">
              Kerolos Amiel
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
