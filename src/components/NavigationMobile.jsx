import { useState, useRef } from "react";
import {
  HiOutlineUser,
  HiMiniXMark,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";

import Sidebar from "./Sidebar";

function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const duration = 250;
  const nodeRef = useRef(null);
  return (
    <>
      {/** Backgrop */}
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
      <Transition in={isOpen} timeout={duration}>
        {/** Navigation */}
        {(state) => (
          <Sidebar duration={duration} state={state} position="left">
            {isOpen && (
              <nav id="mobileNav">
                <div className="grid grid-cols-2 w-full border-b border-mute/50 text-sm">
                  {!isOpenService ? (
                    <button
                      className="w-full p-4 bg-dark text-white uppercase flex items-center justify-center gap-2"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <HiMiniXMark size={20} />
                      <span>Fermer</span>
                    </button>
                  ) : (
                    <button
                      className="w-full p-4 bg-dark text-white uppercase flex items-center justify-center gap-2"
                      onClick={() => setIsOpenService(!isOpenService)}
                    >
                      <HiChevronLeft size={20} />
                      <span>Retour</span>
                    </button>
                  )}
                  <button className="w-full p-4 uppercase flex items-center justify-center gap-2">
                    <HiOutlineUser size={20} />
                    <span>Connexion</span>
                  </button>
                </div>
                <ul className={`${isOpenService ? "flex" : "hidden"} flex-col`}>
                  <li className="flex justify-between items-center border-b border-mute/50">
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to="/services/douce-attention"
                      className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
                    >
                      Douce attention
                    </NavLink>
                  </li>
                  <li className="flex justify-between items-center border-b border-mute/50">
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to="/services/celebration-intermediaire"
                      className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
                    >
                      Célébration intermédiaire
                    </NavLink>
                  </li>
                  <li className="flex justify-between items-center border-b border-mute/50">
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to="/services/grande-celebration"
                      className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
                    >
                      Grande célébration
                    </NavLink>
                  </li>
                </ul>
                <ul
                  className={`${!isOpenService ? "flex" : "hidden"} flex-col`}
                >
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
                    <span
                      className="px-4 py-5 border-l border-mute/50"
                      onClick={() => setIsOpenService(true)}
                    >
                      <HiChevronRight />
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
                      to="/blogue"
                      className="px-4 py-4 w-full hover:bg-gray-100 transition duration-300"
                    >
                      Blogue
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
            )}
          </Sidebar>
        )}
      </Transition>
    </>
  );
}

export default NavigationMobile;
