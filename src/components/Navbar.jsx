import { Link, NavLink } from "react-router-dom";

const links = [
  ["Features", "/features"],
  ["How It Works", "/how-it-works"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <Link className="logo" to="/" aria-label="Nexora AI home">
        Nexora<span>AI</span>
      </Link>

      <nav aria-label="Main navigation">
        {links.map(([text, url]) => (
          <NavLink
            key={url}
            to={url}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {text}
          </NavLink>
        ))}
      </nav>

      <div className="actions">
        <Link to="/login" className="login">
          Log in
        </Link>

        <Link to="/pricing" className="btn">
          Get Started
        </Link>
      </div>
    </header>
  );
}