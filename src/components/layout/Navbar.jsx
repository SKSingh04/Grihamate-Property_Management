import { useState } from "react";
import { Link } from "react-router-dom";

import grihamateIcon from "../../assets/images/GrihamateICON-color.svg";
import grihamateWordmark from "../../assets/images/GrihamateWordmark-Color.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/#properties" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {isOpen ? (
        <>
          <path strokeLinecap="round" d="M6 6l12 12" />
          <path strokeLinecap="round" d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path strokeLinecap="round" d="M4 6h16" />
          <path strokeLinecap="round" d="M4 12h16" />
          <path strokeLinecap="round" d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white shadow-sm">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Grihamate Home"
        >
          <img
            src={grihamateIcon}
            alt=""
            className="h-11 w-11 object-contain"
          />

          <img
            src={grihamateWordmark}
            alt="Grihamate"
            className="w-28 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-[#2B3A67] transition-colors duration-200 hover:text-[#FDCB58]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/#contact"
          className="hidden rounded-xl bg-[#2B3A67] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#FDCB58] hover:text-[#2B3A67] hover:shadow-md md:inline-flex"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#2B3A67] transition-colors hover:bg-slate-100 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className="border-b border-slate-100 py-3 text-sm font-medium text-[#2B3A67] transition-colors last:border-0 hover:text-[#FDCB58]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex justify-center rounded-xl bg-[#2B3A67] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FDCB58] hover:text-[#2B3A67]"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
