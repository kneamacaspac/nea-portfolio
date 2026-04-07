import { useState } from "react";
import navLinks from "../data/navLinks";
import "../styles/navbar.css";

function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div
          className="nav-slider"
          style={{
            width: `${100 / navLinks.length}%`,
            transform: `translateX(${hoverIndex * 100}%)`,
          }}
        ></div>

        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="nav-link"
            onMouseEnter={() => setHoverIndex(index)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
