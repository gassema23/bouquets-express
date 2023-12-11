import { useState } from "react";
import { HiOutlineUser, HiMiniXMark, HiChevronRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/** Backgrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full h-screen bg-dark/10 backdrop-blur z-[999] absolute top-0 left-0 `}
      ></div>
      {/** Hamberger */}
      <button
        class="group flex h-20 w-20 cursor-pointer items-center justify-center bg-white p-2 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div class="space-y-2">
          <span class="block h-1 w-10 origin-center rounded-full bg-mute transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45 duration-500"></span>
          <span class="block h-1 w-8 origin-center rounded-full bg-primary transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45 duration-300"></span>
        </div>
      </button>
      {/** Navigation */}
      <nav
        id="mobileNav"
        className={`${
          isOpen ? "flex" : "hidden"
        } z-[9999] h-screen fixed top-0 right-0 w-full sm:w-1/2 bg-white flex-col shadow`}
      >
        <div className="grid grid-cols-2 w-full border-b border-mute/50 text-sm">
          <button
            className="w-full p-4 bg-dark text-white uppercase flex items-center justify-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMiniXMark size={20} />
            <span>Fermer</span>
          </button>
          <button className="w-full p-4 uppercase flex items-center justify-center gap-2">
            <HiOutlineUser size={20} />
            <span>Connexion</span>
          </button>
        </div>
        <ul>
          <li className="flex justify-between items-center border-b border-mute/50">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
            >
              Accueil
            </NavLink>
          </li>
          <li className="flex justify-between items-center border-b border-mute/50">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/boutique"
              className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
            >
              Boutique
            </NavLink>
          </li>
          <li className="flex justify-between items-center border-b border-mute/50">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/services"
              className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
            >
              Services
            </NavLink>
            <span className="px-4 py-5 border-l border-mute/50">
              {" "}
              <HiChevronRight />{" "}
            </span>
          </li>
          <li className="flex justify-between items-center border-b border-mute/50">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/a-propos"
              className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
            >
              À propos
            </NavLink>
          </li>
          <li className="flex justify-between items-center border-b border-mute/50">
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/nous-joindre"
              className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
            >
              Nous joindre
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationMobile;
