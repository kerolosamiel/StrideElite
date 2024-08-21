import { Link } from "react-router-dom";

const Options = ({ img, alt, title, to }) => {
  return (
    <div className="option">
      <img src={img} alt={alt} />
        <Link to={to}>{title}</Link>
    </div>
  );
};

export default Options;
