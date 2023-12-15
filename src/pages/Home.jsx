import Header from "../components/Header";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Items from "../components/Items";
import Products from "../datas/Products";
import Newsletter from "../components/Newsletter";
import image from "/img/slide3.png";

function Home() {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newProduct = shuffle(Products);
  return (
    <>
      <Header />
      <div
        className="bg-blend-hue h-screen justify-around items-center relative bg-fixed bg-no-repeat w-full"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute top-0 left-0 bg-dark/10 w-full h-full"></div>
        <div className="h-full w-full flex justify-end align-middle items-center container mx-auto">
          <div className="flex flex-col text-white uppercase w-full lg:w-1/2 z-10 ">
            <h2 className="text-shadow">
              malesuada eget nisl et, venenatis porta enim.
            </h2>
            <h1 className="text-7xl text-shadow">Lorem ipsum</h1>
            <h3 className="text-shadow">
              Duis placerat, urna a lacinia maximus
            </h3>
            <div className="my-5">
              <ButtonLink to="/boutique" styleType="white">
                Visiter la boutique
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <main>
        {/** Section type événement */}
        <section className="container mx-auto my-28">
          <div className="flex w-full mb-10 text-center justify-cente flex-col">
            <h2>Nam lobortis viverra dui.</h2>
            <p className="text-sm">
              Aliquam erat volutpat. Morbi vitae rutrum purus. Cras euismod
              dolor quam, quis auctor nunc tempus a. Proin semper sed ante nec
              condimentum.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card
              link="#"
              image="./img/studio-guyub-SIQmdpHteVg-unsplash.jpg"
              title="Bouquet de mariage"
              subtitle="À partir de $79"
            />
            <Card
              link="#"
              image="./img/peter-bucks-wjdHhmiS2Pk-unsplash.jpg"
              title="Bouquet d'anniversaire"
              subtitle="À partir de $39"
            />
            <Card
              link="#"
              image="./img/amy-shamblen-qdPnQuGeuwU-unsplash.jpg"
              title="Bouquet sur mesure"
              subtitle="À partir de $59"
            />
          </div>
        </section>
        {/** Section bannière événements spécial */}
        <section
          className="w-full h-[450px] bg-blend-hue relative bg-cover bg-center my-28"
          style={{
            backgroundImage: `url(./img/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg)`,
          }}
        >
          <div
            className={`container mx-auto h-full flex items-center justify-start overflow-hidden pb-10 `}
          >
            <div className="flex flex-col">
              <h1 className="text-dark text-shadow">Événement spécial</h1>
              <h4 className="text-dark text-shadow">
                Duis placerat, urna a lacinia maximus
              </h4>
              <div className={`px-4 lg:px-0 my-4`}>
                <Button to="/">Obtenir un devis</Button>
              </div>
            </div>
          </div>
        </section>
        {/** Section produits */}
        <section className="container mx-auto my-28 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-4">Voyer nos plus récent produits.</h2>
            <p className="text-sm">
              Aliquam erat volutpat. Morbi vitae rutrum purus. Cras euismod
              dolor quam, quis auctor nunc tempus a. Proin semper sed ante nec
              condimentum.
            </p>
          </div>
          <div className="px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-5 mt-12">
            {newProduct.slice(0, 4).map((product) => (
              <Items key={product.productId} product={product} />
            ))}
          </div>
          <div className="mt-10 flex w-full justify-center">
            <ButtonLink to="/boutique">Voir tous les produits</ButtonLink>
          </div>
        </section>
        {/** Section newsletter */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default Home;
