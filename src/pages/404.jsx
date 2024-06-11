import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Not Found</h1>

      <Link to="/">Home</Link>
    </div>
  );
};
