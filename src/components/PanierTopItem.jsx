import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import Button from "./Button";

function PanierTopItem() {
  return (
    <div className="flex items-center w-full border-b border-mute-50 justify-between my-2 py-2">
      <div className="w-1/4 hidden md:flex">
        <img src="/img/Items/items_2.png" className="w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <h5>
          <Link
            to="/"
            className="hover:text-primary font-bold transition duration-300"
          >
            Title
          </Link>
        </h5>
        <p className="">Qte: 1</p>
        <p className="">$89.00</p>
      </div>
      <div className="text-right">
        <Button styleType="error">
          <HiOutlineTrash />
        </Button>
      </div>
    </div>
  );
}

export default PanierTopItem;
