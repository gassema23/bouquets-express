import { NavLink as ReactLink } from "react-router-dom";
import NavLink from "./NavLink";
import Search from "./Search";
import PanierTop from "./PanierTop";
import Connexion from "./Connexion";

function NavigationDesktop() {
  return (
    <>
      <nav
        className="hidden lg:flex gap-x-1 relative justify-start items-center"
        id="navigation"
      >
        <ul className="flex space-x-8">
          <li className="inline-block relative">
            <NavLink to="/boutique" title="Boutique" />
          </li>
          <li className="inline-block relative group">
            <NavLink to="/services" title="Services" hovered="group" />
            <ul className="dropdown invisible group-hover:visible absolute top-6 left-0 w-52 flex flex-col bg-white border border-mute/30 shadow transition-all ease-in-out duration-500">
              <li className="py-2">
                <ReactLink
                  to="/services/douce-attention"
                  title="Douce attention"
                  className="px-2 py-1.5 hover:bg-gray-100 block transition ease-in-out duration-300"
                >
                  Douce attention
                </ReactLink>
              </li>
              <li className="py-2">
                <ReactLink
                  to="/services/celebration-intermediaire"
                  title="Célébration intermédiaire"
                  className="px-2 py-1.5 hover:bg-gray-100 block transition ease-in-out duration-300"
                >
                  Célébration intermédiaire
                </ReactLink>
              </li>
              <li className="py-2">
                <ReactLink
                  to="/services/grande-celebration"
                  title="Services"
                  className="px-2 py-1.5 hover:bg-gray-100 block transition ease-in-out duration-300"
                >
                  Grande célébration
                </ReactLink>
              </li>
            </ul>
          </li>
          <li className="inline-block relative">
            <NavLink to="/a-propos" title="À propos" />
          </li>
          <li className="inline-block relative">
            <NavLink to="/blogue" title="Blogue" />
          </li>
          <li className="inline-block relative">
            <NavLink to="/nous-joindre" title="Nous joindre" />
          </li>
        </ul>
      </nav>
      <div className="flex items-center text-gray-800">
        <Search />
        <Connexion />
        <PanierTop />
      </div>
    </>
  );
}

export default NavigationDesktop;
