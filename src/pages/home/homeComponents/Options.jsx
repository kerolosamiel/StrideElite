import { Link } from "react-router-dom";

const Options = ({ img, alt, title, to, handleActiveLink }) => {
  return (
    <div className="option">
      <img src={img} alt={alt} />
      <Link to={to} onClick={() => handleActiveLink("products")}>
        {title}
      </Link>
    </div>
  );
};

export default Options;
