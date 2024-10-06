import Link from "next/link";
// import TabButton from "./TabButton";


const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#34d399] sm:text-xl rounded md:p-0 hover:text-white hover:border-b-2 hover:border-green-500 transition-all duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
