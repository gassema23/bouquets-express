import { HiMiniStar } from "react-icons/hi2";
import Button from "../components/Button";

function Evaluation() {
  return (
    <div className="mt-6 border-t-2  pt-6">
      <div className="flex gap-2">
        <HiMiniStar className="hover:text-primary transition duration-300" />
        <HiMiniStar className="hover:text-primary transition duration-300" />
        <HiMiniStar className="hover:text-primary transition duration-300" />
        <HiMiniStar className="hover:text-primary transition duration-300" />
        <HiMiniStar className="hover:text-primary transition duration-300" />
      </div>
      <textarea
        placeholder="Ajouter votre commentaire"
        rows="5"
        className="border w-full my-4 outline-0 focus:border-dark transition duration-300 p-4"
      ></textarea>
      <Button styleType="primary">Envoyer</Button>
    </div>
  );
}

export default Evaluation;
