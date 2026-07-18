import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/cornerstone-logo.png";

type HeaderTheme = "hero" | "light" | "dark" | "media" | "giving";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("hero");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-header-theme]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        const visibleSection = visibleSections[0];

        if (!visibleSection) {
          return;
        }

        const theme = visibleSection.target.getAttribute(
          "data-header-theme",
        ) as HeaderTheme | null;

        if (theme) {
          setHeaderTheme(theme);
        }
      },
      {
        root: null,
        rootMargin: "-78px 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`topbar topbar-${headerTheme}`}>
      <a
        className="brand"
        href="#home"
        aria-label="Cornerstone home"
        onClick={closeMenu}
      >
        <img src={logo} alt="Cornerstone Open Portal Network" />
      </a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="/study-notes" onClick={closeMenu}>
          Study Notes
        </a>

        <a href="#announcements" onClick={closeMenu}>
          Announcements
        </a>

        <a href="#media" onClick={closeMenu}>
          Media
        </a>

        <a className="nav-give" href="#give" onClick={closeMenu}>
          Give
        </a>
      </nav>
    </header>
  );
}
