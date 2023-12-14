import { useState } from "react";
import Button from "./Button";
import { HiArrowUturnLeft, HiArrowUturnRight } from "react-icons/hi2";
import Input from "./Input";

function GreetingCard() {
  const [side, setSide] = useState(false);
  const [message, setMessage] = useState("Votre message personnalisé");
  const [titre, setTitre] = useState("Votre titre personnalisé");
  const [policeTitle, setPoliceTitle] = useState("font-sans");
  const [policeMessage, setPoliceMessage] = useState("font-sans");

  return (
    <>
      <div className="w-full">
        <h3>Personnalisez votre carte</h3>
      </div>
      <div className="flex gap-5 pt-4 mt-4 pb-8 mb-8 border-b border-dark flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <div className="my-4">
            {/** TITRE */}
            <label htmlFor="" className="font-bold text-sm">
              Sélectionner une police pour le titre
            </label>
            <select
              onChange={(e) => setPoliceTitle(e.target.value)}
              className="border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500"
            >
              <option>- Sélectionner une police -</option>
              <option value="font-card1">Police #1</option>
              <option value="font-card2">Police #2</option>
              <option value="font-card3">Police #3</option>
            </select>
            <input
              placeholder="Ajouter un titre"
              type="text"
              onChange={(e) => setTitre(e.target.value)}
              className="my-4 border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500"
            />
          </div>
          <div className="my-4">
            {/** Message */}
            <label htmlFor="" className="font-bold text-sm">
              Sélectionner une police pour le mesage
            </label>
            <select
              onChange={(e) => setPoliceMessage(e.target.value)}
              className="border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500"
            >
              <option>- Sélectionner une police -</option>
              <option value="font-card1">Police #1</option>
              <option value="font-card2">Police #2</option>
              <option value="font-card3">Police #3</option>
            </select>
            <textarea
              placeholder="Ajouter un message"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
              className="my-4 border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500"
            ></textarea>
          </div>
        </div>
        <div className="w-full">
          {side ? (
            <div
              className={`relative text-xl border p-4 w-full h-[450px] ${policeMessage}`}
              id="front"
            >
              {message}
            </div>
          ) : (
            <div
              className={`relative text-4xl p-4 w-full h-[550px] border border-lightPink flex justify-center items-start font-bold ${policeTitle} bg-no-repeat bg-center`}
              id="back"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center">
                <img src="../../img/card2.png" alt="" className="h-full" />
              </div>
              <div className="z-10 text-primary">{titre}</div>
            </div>
          )}
          <div className="flex flex-row gap-4 my-4">
            <Button onClick={() => setSide(false)}>
              <HiArrowUturnLeft />
            </Button>
            <Button onClick={() => setSide(true)}>
              <HiArrowUturnRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GreetingCard;
