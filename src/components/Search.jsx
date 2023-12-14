import React, { useState, useRef } from "react";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { Transition } from "react-transition-group";
import Sidebar from "./Sidebar";
import InputWithButton from "./InputWithButton";

function Search() {
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
        <HiOutlineMagnifyingGlass size={25} />
      </button>
      <Transition in={isOpen} timeout={duration}>
        {(state) => (
          <>
            <Sidebar duration={duration} state={state} position="top">
              {isOpen && (
                <div className="flex h-full flex-col">
                  <div className="flex w-full justify-end p-4">
                    <button
                      className="hover:text-primary transition duration-300"
                      onClick={onCloseModalClick}
                    >
                      <HiOutlineXMark size={25} />
                    </button>
                  </div>
                  <div className="w-4/5 md:w-2/5 mx-auto flex justify-center items-center h-full flex-col py-10">
                    <h3 className="text-3xl font-bold">
                      Commencez à taper et appuyez sur Entrée
                    </h3>
                    <InputWithButton
                      inputType="search"
                      inputName="searchbox"
                      inputPlaceholder="Rechercher..."
                    >
                      <HiOutlineMagnifyingGlass />
                    </InputWithButton>
                    <div className="w-full flex justify-start"></div>
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

export default Search;
