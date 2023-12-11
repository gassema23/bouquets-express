import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import { useState } from "react";
import Filtres from "../components/Filtres";
import Items from "../components/Items";
import Products from "../datas/Products";

function Boutique() {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <PageBanner
        pageTitle={"Nos produits"}
        breadcrumb={["Boutique"]}
        banner="./img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg"
      />
      {/** PROMOTION / COMMENDITAIRES */}
      <div className="md:container md:mx-auto px-4 md:px-0 my-10">
        <div className="h-[350px] items-center relative w-full mb-10 flex justify-center flex-col overflow-hidden">
          <div className="bg-dark/50 w-full h-full absolute top-0 left-0"></div>
          <img
            src="./img/dean-david-CSSrQDKvHVc-unsplash.jpg"
            className="w-full absolute -z-10"
          />
          <div className="text-white z-10 text-center flex flex-col w-full items-center justify-center">
            <h2 className="text-shadow">Nouvelle collection</h2>
            <h4 className="mb-5 text-shadow">Jusqu’à 30% de rabais</h4>
            <Button styleType="white">Acheter maintenant</Button>
          </div>
        </div>
        {/** FILTRES */}
        <div className="flex w-full flex-col">
          <div className="flex justify-between w-full">
            <div className="">
              <Button
                onClick={() => setOpenFilter(!openFilter)}
                status={openFilter}
              >
                <span className="flex gap-x-2 items-center">
                  <HiOutlineAdjustmentsHorizontal /> Filtre
                </span>
              </Button>
            </div>
            <div>
              <select className=" border-2 font-medium border-dark px-3.5 py-2 ">
                <option value="0">Prix ASC</option>
                <option value="0">Prix DESC</option>
              </select>
            </div>
          </div>

          {/** FILTRES */}
          <div className="w-full">{openFilter && <Filtres />}</div>
        </div>
        {/** PRODUCTS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {Products.map((product) => (
            <Items product={product} />
          ))}
        </div>
        <div className="flex w-full justify-center mt-10 mb-28">
          <Button>Afficher plus</Button>
        </div>
      </div>
    </>
  );
}

export default Boutique;
