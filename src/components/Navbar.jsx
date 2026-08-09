import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  {
    name: "HOME",
    id: "home",
  },
  {
    name: "ABOUT",
    id: "about",
  },
  {
    name: "WORK",
    id: "work",
  },
  {
    name: "SKILLS",
    id: "skills",
  },
  {
    name: "EXPERIENCE",
    id: "experience",
  },
  {
    name: "CONTACT",
    id: "contact",
  },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,

        /*
         * The active section is determined
         * around the middle of the screen.
         */
        rootMargin:
          "-35% 0px -50% 0px",

        threshold: [
          0,
          0.1,
          0.25,
          0.5,
          0.75,
          1,
        ],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  return (
    <header className="navbar">

      {/* LOGO */}

      <button
        className="navbar-logo"
        onClick={() =>
          handleNavigation("home")
        }
      >
        SRIVATHSA JG
      </button>

      {/* NAVIGATION */}

      <nav className="navbar-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`navbar-link ${
              activeSection === item.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleNavigation(item.id)
            }
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* CONNECT */}

      <button
        className="navbar-connect"
        onClick={() =>
          handleNavigation("contact")
        }
      >
        <span className="navbar-status"></span>

        <span>
          LET'S CONNECT
        </span>

        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
        />
      </button>

    </header>
  );
}

export default Navbar;