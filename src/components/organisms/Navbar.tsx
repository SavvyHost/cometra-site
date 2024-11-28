import { useState } from "react";
import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import Link from "next/link";
import WishlistIndicator from "../atoms/whishlist/WishlistIndicator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full z-20 bg-white border border-b-gray-300 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="lg:transform lg:translate-x-8">
        <Logo />
      </Link>

      {/* Center NavLinks for large screens */}
      <div className="hidden md:flex flex-grow justify-center">
        <NavLinks />
      </div>

      {/* Wishlist Indicator */}
      <div className="hidden md:block">
        <WishlistIndicator />
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="block md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu Modal */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

const MobileMenu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Modal Content */}
      <div
        className={`w-64 bg-white h-full shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="p-4 text-gray-700 focus:outline-none w-full flex justify-end"
          onClick={closeMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Vertical Links */}
        <div className="flex flex-col items-center p-4">
          {/* Pass closeMenu to NavLinks as onClose prop */}
          <NavLinks isMobile={true} onClose={closeMenu} />
          {/* Mobile Wishlist Indicator */}
          <div className="mt-4">
            <WishlistIndicator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
