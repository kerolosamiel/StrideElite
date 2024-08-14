import { Link } from "react-router-dom";
import "./no-page.css";

const NoPage = ({ handleActiveLink }) => {
  return (
    <>
      <section className="no-page">
        <div className="nopage-container">
          <div className="title">
            <h1>Oops !</h1>
            <h3>404 - PAGE NOT FOUNT</h3>
          </div>

          <p>
            The page you are looking for might have been removed had its name
            changed or is under development
          </p>

          <Link
            to="/"
            className="button"
            onClick={() => handleActiveLink("home")}
          >
            Go to home pages
          </Link>
        </div>
      </section>
    </>
  );
};

export default NoPage;
