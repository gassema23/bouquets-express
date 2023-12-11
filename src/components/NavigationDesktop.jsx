import { NavLink as ReactLink } from "react-router-dom";
import NavLink from "./NavLink";

function NavigationDesktop() {
  return (
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
          <ul className="invisible group-hover:visible absolute top-6 left-0 w-52 flex flex-col bg-white border border-mute/30 shadow transition-all ease-in-out duration-500">
            <li className="py-2">
              <ReactLink
                to="/services"
                title="Services"
                className="px-2 py-1.5 hover:bg-mute/30 block transition ease-in-out duration-300"
              >
                Link 1
              </ReactLink>
            </li>
            <li className="py-2">
              <ReactLink
                to="/services"
                title="Services"
                className="px-2 py-1.5 hover:bg-mute/30 block transition ease-in-out duration-300"
              >
                Link 2
              </ReactLink>
            </li>
            <li className="py-2">
              <ReactLink
                to="/services"
                title="Services"
                className="px-2 py-1.5 hover:bg-mute/30 block transition ease-in-out duration-300"
              >
                Link 3
              </ReactLink>
            </li>
          </ul>
        </li>
        <li className="inline-block relative">
          <NavLink to="/a-propos" title="À propos" />
        </li>
        <li className="inline-block relative">
          <NavLink to="/nous-joindre" title="Nous joindre" />
        </li>
      </ul>
    </nav>
  );
}

export default NavigationDesktop;
