import "./header.css";
//svg import
import Logo from "../../assets/react.svg";
import { NavLink, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <span onClick={() => navigate("/")}>
        <Logo />
      </span>

      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </header>
  );
};
