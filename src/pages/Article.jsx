import { Link, useParams } from "react-router-dom";
import slugify from "react-slugify";
import InputWithButton from "../components/InputWithButton";
import PageBanner from "../components/PageBanner";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Posts from "../datas/Posts";
import Input from "../components/Input";
import Button from "../components/Button";

function Article() {
  let params = useParams();
  const post = Posts.filter((data) => slugify(data.title) == params.slug);
  return (
    <>
      <main className="md:container md:mx-auto px-4 md:px-0 my-10 grid grid-cols-12 gap-5 mt-[150px]">
        {/** Sidebar*/}
        <aside className="col-span-4 flex flex-col gap-5">
          <div>
            <h4 className="border-b pb-2 mb-2 border-mute/30">Rechercher</h4>
            <InputWithButton
              inputName="search"
              inputPlaceholder="Rechercher..."
              inputClass="w-full"
              inputType="search"
            >
              <HiMagnifyingGlass size={30} />
            </InputWithButton>
          </div>
          <div>
            <h4 className="border-b pb-2 mb-2 border-mute/30">Catégories</h4>
            <ul className="flex flex-col gap-1">
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Entretien
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Événements
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Actualités
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Médias
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="border-b pb-2 mb-2 border-mute/30">Auteurs</h4>
            <ul className="flex flex-col gap-1">
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Helene Engels
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Leslie Libingston
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Karen Nelson
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition duration-300">
                  Joseph McFall
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        {/** Blogue */}
        <section className="flex w-full flex-col col-span-8">
          <article className="flex flex-col gap-4">
            <div className="w-full text-center">
              <h2>{post[0].title}</h2>
              <div className="flex gap-x-2 divide-x text-sm mt-4 justify-center text-mute">
                <span>Écrit par : Helene Engels</span>
                <span className="pl-2">Aucun commentaire</span>
              </div>
            </div>
            <div className="relative h-[450px] overflow-hidden group">
              <div
                className="absolute w-full h-full ease-in-out transform bg-center bg-cover "
                style={{
                  backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(/img/__jessie-daniella-aiNU4cA4UzQ-unsplash.jpg)`,
                }}
              ></div>
            </div>
            <span className="text-mute">Actualité</span>
            <div className="h-[1px] w-1/5 bg-mute/30"></div>
            <p>{post[0].body}</p>

            <div className="mt-10 border-t border-mute pt-10">
              <h3>Laissez un commentaire</h3>
              <div className="flex gap-4">
                <Input placeholder="Adresse courriel" />
                <Input placeholder="Nom complet" />
              </div>
              <textarea
                placeholder="Ajouter votre commentaire"
                rows="5"
                className="border w-full my-4 outline-0 focus:border-dark transition duration-300 p-4"
              ></textarea>
              <Button styleType="primary">Envoyer</Button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Article;
