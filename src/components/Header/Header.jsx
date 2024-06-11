import "./header.css";
//svg import
import Logo from "../../assets/react.svg";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <Logo />
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
