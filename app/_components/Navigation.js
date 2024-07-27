"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-10 text-xl bg-primary-950">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute top-4 right-4 p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute top-16 left-0 w-full bg-primary-950 md:relative md:flex md:flex-row md:gap-16 md:top-auto md:left-auto md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {[
          "ganesha",
          "shiva",
          "vishnu",
          "ram",
          "krishna",
          "hanuman",
          "durga",
          "saraswati",
          "gayatri",
        ].map((link) => (
          <li key={link}>
            <Link
              href={`/${link}`}
              className="block p-4 text-white hover:text-slate-700 transition-colors"
              onClick={handleLinkClick}
            >
              Lord {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
