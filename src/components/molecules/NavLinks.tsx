import NavLink from "../atoms/NavLink";

const NavLinks = ({ isMobile = false, onClose = () => {} }) => (
  <div
    className={`flex font-dinCondensed  ${
      isMobile ? "flex-col items-center w-full" : "md:flex-row"
    } md:space-x-6 space-y-4 md:space-y-0`}
  >
    <NavLink href="/" label="Home" onClick={onClose} />
    <NavLink href="/exclusives" label="Vip Exclusives" onClick={onClose} />
    <NavLink href="/about" label="About us" onClick={onClose} />
    <NavLink href="/contact" label="Contact us" onClick={onClose} />
    <NavLink href="/terms" label="Terms condation" onClick={onClose} />
    <NavLink href="/travel-us" label="Why Travel With Us" onClick={onClose} />
  </div>
);

export default NavLinks;
