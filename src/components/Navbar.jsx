import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "WORK", href: "#work" },
    { name: "SKILLS", href: "#skills" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          SRIVATHSA JG
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`navbar-link ${
                index === 0 ? "navbar-link-active" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Connect */}
        <a href="#contact" className="navbar-connect">
          <span className="navbar-connect-dot"></span>

          <span>LET'S CONNECT</span>

          <ArrowUpRight size={13} strokeWidth={1.5} />
        </a>

        {/* Mobile menu button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-menu-connect"
          onClick={() => setMenuOpen(false)}
        >
          <span className="navbar-connect-dot"></span>
          LET'S CONNECT
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}

export default Navbar;