import { useRouter } from "next/router";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void; // Optional onClick handler for closing the menu
}

const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg font-dinCondensed  transition-colors duration-200 ease-in-out ${
        isActive ? "text-indigo-700 " : "text-black hover:text-blue-500"
      }`}
      onClick={onClick} // Attach onClick handler if provided
    >
      {label}
    </Link>
  );
};

export default NavLink;
