import { useState } from "react";
import logo from "../../public/Logo.svg";
import { Menu } from "lucide-react";
import routes from "../routes";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`lg:flex  lg:justify-between max-w-[887px] mx-auto my-6`}>
      <div className="flex justify-between">
        <a href="/" className="logo">
          <img src={logo} alt="website logo" />
        </a>
        <div className="block lg:hidden" onClick={toggleMenu}>
          <Menu />
        </div>
      </div>
      <ul
        className={`lg:flex lg:items-center nav-links ${
          menuOpen ? "hidden" : " block"
        }`}
      >
        {routes.map(({ path, name }, id) =>
          name ? (
            <li className="lg:mr-7" key={id}>
              <a href={path}>{name}</a>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};

export default Nav;
