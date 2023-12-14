import PageBanner from "../components/PageBanner";
import BasquetItem from "../components/BasquetItem";
import Button from "../components/Button";
import GreetingCard from "../components/GreetingCard";
import TotalPanier from "../components/TotalPanier";
import Products from "../datas/Products";
import image from "/img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg";
function Panier() {
  return (
    <>
      <PageBanner pageTitle={"Panier"} breadcrumb={["Panier"]} banner={image} />
      <div className="md:container md:mx-auto px-4 md:px-0 my-10">
        {Products.slice(0, 4).map((product) => (
          <>
            <BasquetItem product={product} nbItem={1} />
          </>
        ))}
        <div className="flex gap-4 pt-4 mt-4 pb-8 mb-8 border-b border-dark">
          <Button styleType="primary">Mise à jour du panier</Button>
          <Button>Continuer les achats</Button>
        </div>
        <GreetingCard />
        <div className="md:w-1/3">
          <TotalPanier />
        </div>
      </div>
    </>
  );
}

export default Panier;
