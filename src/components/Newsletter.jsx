import InputWithButton from "./InputWithButton";
import { HiMiniPaperAirplane } from "react-icons/hi2";
function Newsletter() {
  return (
    <div className="container mx-auto flex my-28 justify-center items-center gap-x-24 px-4 md:px-0">
      <div className="md:flex hidden">
        <img
          src="/img/nicholas-kusuma-zsMhfiy_eek-unsplash.jpg"
          alt=""
          className="h-[400px] w-full"
        />
      </div>
      <div className=" border border-primary px-16 py-24">
        <div className="text-center">
          <h3>Obtenez les dernières mises à jour</h3>
          <p>
            Abonnez-vous à notre newsletter et bénéficiez d'une réduction de 30%
          </p>
          <InputWithButton
            inputName="newsletter_email"
            inputPlaceholder="Entrer votre adresse courriel..."
            inputClass="w-full"
            inputType="email"
          >
            <HiMiniPaperAirplane size={30} className="-rotate-45" />
          </InputWithButton>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
