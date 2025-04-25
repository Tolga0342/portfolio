import "./NotFound.css";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export const NotExisting = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <FaExclamationTriangle size={50} color="red" />
      <p>Sorry, the page you're looking for doesn't exist. </p>
      <Link to="/" className="home-link">
        Back to homepage
      </Link>
    </div>
  );
};
