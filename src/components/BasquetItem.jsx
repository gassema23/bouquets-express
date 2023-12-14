import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import Button from "./Button";
import Price from "./Price";

function BasquetItem({ product, nbItem }) {
  const [item, setItem] = useState(nbItem);
  return (
    <div className="border-b border-dark py-4 my-4 flex justify-between gap-5">
      <div className="w-1/6 hidden md:flex">
        <img src={"../" + product.photo[0]} alt="" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <div>
          <h4>{product.name}</h4>
        </div>
        <div className="flex flex-row justify-between">
          {/** Price */}
          <div className="flex flex-col h-[95px] w-1/3">
            <h5>Prix</h5>
            <Price productPrice={product.price} productSale={product.sale} />
          </div>
          {/**Quantity */}
          <div className="flex flex-col w-1/3">
            <h5>Quantité</h5>
            <div className="flex">
              <div className=" text-center  px-4 border-t-2  border-b-2 border-l-2 border-dark items-center flex justify-center">
                {item}
              </div>
              <div className="flex flex-row items-center text-center">
                <button
                  onClick={() => setItem(() => (item < 10 ? item + 1 : item))}
                  className="hover:bg-dark hover:text-white transition duration-300 border-l-2 border-t-2 border-b-2 border-dark w-[30px] "
                >
                  +
                </button>
                <button
                  onClick={() => setItem(() => (item > 0 ? item - 1 : item))}
                  className="hover:bg-dark hover:text-white transition duration-300 border-t-2 border-r-2  border-b-2 border-l-2 border-dark w-[30px]"
                >
                  -
                </button>
              </div>
            </div>
          </div>
          {/** Total */}
          <div className="flex flex-col w-1/3">
            <h5>Total</h5>
            {product.sale ? (
              <p>
                ${" "}
                {Number(
                  item * (product.price - (product.price * product.sale) / 100)
                ).toFixed(2)}
              </p>
            ) : (
              <p>$ {Number(item * product.price).toFixed(2)}</p>
            )}
          </div>
          <div>
            <Button styleType="error">
              <HiOutlineTrash />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasquetItem;
