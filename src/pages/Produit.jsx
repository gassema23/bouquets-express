import PageBanner from "../components/PageBanner";
import AddBasquet from "../components/AddBasquet";
import Button from "../components/Button";
import Evaluation from "../components/Evaluation";
import Slider from "../components/Slider";
import InputWithButton from "../components/InputWithButton";

import { Link, useParams } from "react-router-dom";
import slugify from "react-slugify";
import { HiOutlineHeart } from "react-icons/hi2";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import image from "/img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg";

import Products from "../datas/Products";

function Produit() {
  let params = useParams();

  return (
    <>
      {Products.filter((product) => slugify(product.name) == params.slug).map(
        (filteredProduct) => (
          <>
            <PageBanner
              pageTitle={filteredProduct.name}
              breadcrumb={["Boutique", filteredProduct.name]}
              banner={image}
            />
            <div className="container mx-auto my-28">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="md:w-1/2 order-2 md:order-1">
                  <Slider photos={filteredProduct.photo} />
                </div>
                <div className="w-full md:order-2 order-1">
                  <div className="border-b-2 pb-5 mb-5 border-mute ">
                    <div className=" flex justify-between mb-2 items-center">
                      <h2>{filteredProduct.name}</h2>
                      <div className="flex gap-4 items-center">
                        <HiOutlineHeart
                          size={25}
                          className="hover:text-primary transition duration-300 cursor-pointer"
                        />
                        {filteredProduct.sale && (
                          <div className="">
                            <span className="relative flex h-8 w-8 ">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                              <span className="relative flex rounded-full h-8 w-8 bg-error justify-center items-center text-white text-xs">
                                {filteredProduct.sale}%
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {filteredProduct.sale ? (
                      <h5 className="flex space-x-4">
                        <span>
                          {" "}
                          $
                          {(
                            filteredProduct.price -
                            (filteredProduct.price * filteredProduct.sale) / 100
                          ).toFixed(2)}{" "}
                        </span>
                        <span className="text-gray-500 line-through">
                          ${filteredProduct.price}
                        </span>
                      </h5>
                    ) : (
                      <h5>${filteredProduct.price}</h5>
                    )}
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel fugiat amet enim illo animi, quam, similique ab quae
                    ullam quos voluptate tempora odit, laudantium dolores.
                    Debitis assumenda saepe cum voluptas!
                  </p>
                  <div className="my-4 flex gap-5 flex-col">
                    {filteredProduct.quantity > 0 ? (
                      <>
                        <AddBasquet />
                        <div>
                          <Button to="/panier" styleType="primary">
                            Acheter maintenant
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-mystyRose/50 border border-primary text-center font-bold py-2 text-primary text-sm">
                          Épuisé
                        </div>
                        <div>
                          <h5>Prévenez-moi lorsque disponibles</h5>
                          <InputWithButton
                            inputName="email"
                            inputPlaceholder="Entrer votre adresse courriel"
                            inputClass="w-full"
                            inputType="email"
                          >
                            <HiMiniPaperAirplane
                              size={30}
                              className="-rotate-45"
                            />
                          </InputWithButton>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="my-4 flex gap-5 flex-col">
                    <p className="text-mute text-sm">
                      <strong className="font-bold">Catégorie:</strong>{" "}
                      {filteredProduct.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs>
              <div className="border-t border-b py-4 my-4 border-dark">
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Information additionnel</Tab>
                  <Tab>Évaluation</Tab>
                </TabList>
              </div>
              <div className="container mx-auto mb-28">
                <TabPanel>
                  <h3>Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    alias amet nostrum suscipit id quibusdam atque eius ipsa,
                    tenetur, voluptates eum quae molestias nihil rerum aut
                    repudiandae accusamus? Adipisci, autem?
                  </p>
                </TabPanel>
                <TabPanel>
                  <p className="text-mute text-sm my-4">Plus d'informations</p>
                  <h3>Tous ce que vous devez savoir</h3>
                  <div className="flex gap-5 md:flex-row flex-col">
                    <div className="w-2/3">
                      <p>{filteredProduct.instructions}</p>
                    </div>
                    <div className="w-1/3">
                      <h4>Livraison express</h4>
                      <ul>
                        <li>Québec sous 2 à 4 jours</li>
                        <li>Reste du Canada sous 3 à 7 jours</li>
                        <li>Sélectionner un emplacement</li>
                      </ul>
                      <h4 className="mt-6">Besoin de plus d'informations</h4>
                      <ul>
                        <li>
                          <Link
                            to="#"
                            className="hover:text-primary transition duration-300"
                          >
                            Commandes et expédition
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="hover:text-primary transition duration-300"
                          >
                            Retours et remboursements
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="hover:text-primary transition duration-300"
                          >
                            Paiements
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="hover:text-primary transition duration-300"
                          >
                            Vos commandes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <h3>Évaluation</h3>
                  <p className="text-mute">Aucune évaluation pour le moment</p>
                  <Evaluation />
                </TabPanel>
              </div>
            </Tabs>
          </>
        )
      )}
    </>
  );
}

export default Produit;
