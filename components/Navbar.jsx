"use client";
import { useEffect } from "react";

function NavItem({ text }) {
  return <div className="text-stone-900">{text}</div>;
}

function Navbar() {
  const navItems = ["Home", "Services", "Contact", "Support"];

  return (
    <header className="flex flex-wrap justify-between items-center font-semibold p-5 md:px-32">
      <img
        loading="lazy"
        src="/icrave.png"
        alt="Logo"
        className="shrink-0 w-36 h-auto"
      />
      <nav className="flex gap-5 text-xl text-neutral-600">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
      </nav>
      <button
        className="px-6 py-3 text-lg text-white rounded bg-stone-900"
        tabIndex="0"
      >
        Sign Up
      </button>
    </header>
  );
}

export default Navbar;
