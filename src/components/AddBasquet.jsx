import { useState } from "react";
import Button from "../components/Button";
function AddBasquet() {
  const [item, setItem] = useState(0);
  return (
    <div className="flex gap-5">
      <div className="flex">
        <div className="min-w-[100px] text-center p-2 border-t-2  border-b-2 border-l-2 border-dark items-center flex justify-center">
          {item}
        </div>
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => setItem(() => (item < 10 ? item + 1 : item))}
            className="hover:bg-dark hover:text-white transition duration-300 px-2 border-t-2  border-r-2 border-l-2 border-dark w-[30px] "
          >
            +
          </button>
          <button
            onClick={() => setItem(() => (item > 0 ? item - 1 : item))}
            className="hover:bg-dark hover:text-white transition duration-300 px-2 border-t-2 border-r-2  border-b-2 border-l-2 border-dark w-[30px]"
          >
            -
          </button>
        </div>
      </div>
      <Button>Ajouter au panier</Button>
    </div>
  );
}

export default AddBasquet;
