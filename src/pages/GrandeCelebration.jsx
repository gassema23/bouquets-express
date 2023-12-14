import PageBanner from "../components/PageBanner";
import banner from "/img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg";
import Products from "../datas/Products";
import Button from "../components/Button";
import Items from "../components/Items";

function GrandeCelebration() {
  return (
    <>
      <PageBanner
        pageTitle={"Grande célébration"}
        breadcrumb={["Services", "Grande célébration"]}
        banner={banner}
      />
      <main className="md:container md:mx-auto px-4 md:px-0 my-10">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>
          Vestibulum dignissim justo sed sapien ullamcorper, a dictum massa
          posuere. Integer nisi elit, congue id efficitur rutrum, suscipit nec
          elit. Donec mattis sed ligula in commodo. Vivamus viverra lectus id
          dui ultricies tempus. Morbi a eleifend orci. Vivamus nibh erat, mattis
          sed ullamcorper in, bibendum eu mauris. Donec eget facilisis diam,
          eget consectetur ex. Pellentesque vitae risus interdum, facilisis
          velit ut, finibus ipsum. Morbi ullamcorper feugiat purus vel sodales.
        </p>
        <section className="container mx-auto my-28 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-4">
              Voyer nos bouquets pour les grande célébration
            </h2>
            <p className="text-sm">
              Aliquam erat volutpat. Morbi vitae rutrum purus. Cras euismod
              dolor quam, quis auctor nunc tempus a. Proin semper sed ante nec
              condimentum.
            </p>
          </div>
          <div className="px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-5 mt-12">
            {Products.filter(
              (product) => product.category == "Grande célébration"
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

export default GrandeCelebration;
