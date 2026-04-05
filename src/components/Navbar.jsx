import navLinks from "../data/navLinks";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container glass">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
