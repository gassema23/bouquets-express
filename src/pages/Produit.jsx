import PageBanner from "../components/PageBanner";
import { useParams } from "react-router-dom";
import Products from "../datas/Products";
import slugify from "react-slugify";
import AddBasquet from "../components/AddBasquet";
import Button from "../components/Button";
import { HiOutlineHeart } from "react-icons/hi2";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Evaluation from "../components/Evaluation";

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
              banner="../../img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg"
            />
            <div className="container mx-auto my-28">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="md:w-1/2 order-2 md:order-1">
                  <img
                    src={"../" + filteredProduct.photo}
                    alt=""
                    className="w-full border"
                  />
                </div>
                <div className="w-full md:order-2 order-1">
                  <div className="border-b-2 pb-5 mb-5 border-mute ">
                    <div className=" flex justify-between mb-2 items-center">
                      <h2>{filteredProduct.name}</h2>
                      <div>
                        <HiOutlineHeart
                          size={25}
                          className="hover:text-primary transition duration-300 cursor-pointer"
                        />
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
                  <div className="my-4 flex gap-5 flex-col lg:flex-row">
                    <AddBasquet />
                    <div>
                      <Button styleType="primary">Acheter maintenant</Button>
                    </div>
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
                  <h3>Tous ce que vous devez savoir</h3>
                  <p>{filteredProduct.instructions}</p>
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
