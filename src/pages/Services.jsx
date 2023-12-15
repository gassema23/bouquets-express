import PageBanner from "../components/PageBanner";
import banner from "/img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg";
import Products from "../datas/Products";
import Button from "../components/Button";
import Items from "../components/Items";
import Card from "../components/Card";

function Services() {
  return (
    <>
      <PageBanner
        pageTitle={"Services"}
        breadcrumb={["Services"]}
        banner={banner}
      />
      <main className="md:container md:mx-auto px-4 md:px-0 my-10">
        <section>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card
              link="/services/douce-attention"
              image="/img/amy-shamblen-qdPnQuGeuwU-unsplash.jpg"
              title="Douce attention"
            />
            <Card
              link="/services/celebration-intermediaire"
              image="/img/peter-bucks-wjdHhmiS2Pk-unsplash.jpg"
              title="Célébration intermédiaire"
            />
            <Card
              link="/services/grande-celebration"
              image="/img/studio-guyub-SIQmdpHteVg-unsplash.jpg"
              title="Grande célébration"
            />
          </div>
        </section>
        <section className="my-28 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-4">Voyer nos dernières créations</h2>
            <p className="text-sm">
              Aliquam erat volutpat. Morbi vitae rutrum purus. Cras euismod
              dolor quam, quis auctor nunc tempus a. Proin semper sed ante nec
              condimentum.
            </p>
          </div>
          <div className="px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-5 mt-12">
            {Products.filter(
              (product) => product.category == "Célébration intermédiaire"
            )
              .slice(0, 4)
              .map((product) => (
                <Items key={product.productId} product={product} />
              ))}
          </div>
          <div className="mt-10 flex w-full justify-center">
            <Button to="/boutique">Voir tous les produits</Button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Services;
