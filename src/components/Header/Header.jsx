import "./header.css";
//svg import
import Logo from "../../assets/react.svg"
export const Header = () => {
  return (
    <header>
      <Logo/>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};
