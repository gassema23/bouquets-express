import { HiOutlineMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import Popover from "../components/Popover";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import Price from "./Price";

function Items({ product }) {
  return (
    <div className="flex flex-col w-full group overflow-hidden">
      <div className="relative overflow-hidden">
        {product.sale && (
          <div className="absolute right-4 top-4">
            <span className="relative flex h-8 w-8 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
              <span className="relative flex rounded-full h-8 w-8 bg-error justify-center items-center text-white text-xs">
                {product.sale}%
              </span>
            </span>
          </div>
        )}
        <Link to={"/produits/" + slugify(product.name)}>
          <img src={".././" + product.photo[0]} />
        </Link>
        <div className="bg-white flex p-2 divide-x divide-gray-300 absolute w-full -bottom-10 left-0 group-hover:bottom-0 transition-all duration-700">
          <div className="w-full items-center flex justify-center relative">
            <Popover content="Ajouter au coup de coeur">
              <HiOutlineHeart size={25} />
            </Popover>
          </div>
          <div className="w-full items-center flex justify-center relative">
            <Popover content="Aperçu rapide">
              <HiOutlineMagnifyingGlass size={25} />
            </Popover>
          </div>
        </div>
      </div>
      <div className="font-bold mb-2">{product.name}</div>
      <div className="font-bold text-primary block group-hover:hidden">
        <Price productPrice={product.price} productSale={product.sale} />
      </div>
      <div className="translate-y-[150%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition ease-out duration-1000">
        <Link
          to={"/produits/" + slugify(product.name)}
          className="font-bold text-primary hover:text-dark transition duration-300"
        >
          Ajouter au panier
        </Link>
      </div>
    </div>
  );
}

export default Items;
