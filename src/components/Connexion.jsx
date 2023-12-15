import { Transition } from "react-transition-group";
import { useState, useRef } from "react";
import { HiOutlineUser, HiMiniPlus } from "react-icons/hi2";
import Input from "./Input";
import { Link } from "react-router-dom";
import image from "/img/bouquetsExpress.png";
import Button from "./Button";

function Connexion() {
  const duration = 250;
  const nodeRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };
  return (
    <>
      <div className="hidden lg:flex">
        <button
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center transition-colors duration-500 hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiOutlineUser size={25} />
        </button>
      </div>
      <Transition in={isOpen} timeout={duration}>
        {(state) => (
          <>
            {isOpen && (
              <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 w-full h-screen">
                <div
                  className="bg-white w-5/6 md:w-1/3"
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  <div className="w-full flex justify-end pr-2">
                    <HiMiniPlus
                      size={40}
                      className=" rotate-45 hover:text-primary transition duration-300 hover:-rotate-45 cursor-pointer"
                      onClick={() => setIsOpen(!isOpen)}
                    />
                  </div>
                  <div className="px-4 md:px-24 py-10">
                    <div className="flex justify-center flex-col items-center">
                      <img src={image} className="h-20" />
                      <h4 className="my-4 border-b pb-4 w-full text-center text-mute">
                        Super de te revoir !
                      </h4>
                    </div>
                    <div className="flex flex-col gap-4">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Adresse courriel"
                      />
                      <Input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                      />
                      <div className="flex w-full justify-between items-center">
                        <Button>Connexion</Button>
                        <Link
                          to="#"
                          className="text-mute hover:text-primary tansition duration-300"
                        >
                          Mot de passe oublié ?
                        </Link>
                      </div>
                      <div className="p-2 bg-mute/30 text-center text-xs">
                        Vous n'avez pas de compte ?{" "}
                        <Link
                          to="#"
                          className="text-mute hover:text-primary tansition duration-300"
                        >
                          Enregistrez vous maintenant.
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </Transition>
    </>
  );
}

export default Connexion;
