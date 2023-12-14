import { useState, useRef } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Transition } from "react-transition-group";
import Sidebar from "./Sidebar";
import PanierTopItem from "./PanierTopItem";

function PanierTop() {
  const [isOpen, toggleIsOpen] = useState(false);
  const onOpenModalClick = () => toggleIsOpen(true);
  const onCloseModalClick = () => toggleIsOpen(false);
  const duration = 250;
  const nodeRef = useRef(null);
  return (
    <>
      <button
        onClick={onOpenModalClick}
        className="relative lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center transition-colors duration-500 hover:text-primary"
      >
        <div className="absolute right-2 bottom-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
          </span>
        </div>
        <HiOutlineShoppingBag size={25} />
      </button>
      <Transition in={isOpen} timeout={duration}>
        {(state) => (
          <>
            <Sidebar duration={duration} state={state}>
              {isOpen && (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between text-center items-center border-b border-mute h-14">
                      <button
                        className="flex justify-center text-center w-1/6 border-r border-mute h-full items-center hover:text-primary"
                        onClick={onCloseModalClick}
                      >
                        <HiOutlineXMark size={18} />
                      </button>
                      <div className="flex justify-center text-center items-center w-full font-bold text-lg border-r border-mute h-full">
                        Panier d'achat
                      </div>
                      <div className="flex justify-center text-center w-1/6 h-full items-center font-bold">
                        0
                      </div>
                    </div>
                    <div className="px-4">
                      <PanierTopItem />
                      <PanierTopItem />
                      <PanierTopItem />
                    </div>
                  </div>
                  <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between flex-row py-4 px-2">
                      <div className="font-bold">Total:</div>
                      <div className="font-bold text-primary">$98.00</div>
                    </div>
                    <div className="w-full flex justify-between flex-row">
                      <button
                        className={`w-1/2 px-2 py-4 overflow-hidden relative group cursor-pointer font-medium bg-dark text-white`}
                      >
                        <span
                          className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}
                        ></span>
                        <span
                          className={`relative transition duration-500 group-hover:text-white ease`}
                        >
                          Voir le panier
                        </span>
                      </button>

                      <button
                        className={`w-1/2 px-2 py-4 overflow-hidden relative group cursor-pointer font-medium bg-mute text-white`}
                      >
                        <span
                          className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}
                        ></span>
                        <span
                          className={`relative transition duration-500 group-hover:text-white ease`}
                        >
                          Passe à la caisse
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Sidebar>
          </>
        )}
      </Transition>
    </>
  );
}

export default PanierTop;
