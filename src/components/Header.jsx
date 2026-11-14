import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container navbar">

        <h2 className="logo">MyWebsite.</h2>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;
