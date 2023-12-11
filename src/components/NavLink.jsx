import { NavLink as NewLink } from "react-router-dom";

function NavLink({ to, title, hovered }) {
  return (
    <NewLink
      to={to}
      className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-800 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${hovered}`}
    >
      {title}
    </NewLink>
  );
}

export default NavLink;
