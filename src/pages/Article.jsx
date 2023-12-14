import { Link, useParams } from "react-router-dom";
import slugify from "react-slugify";
import InputWithButton from "../components/InputWithButton";
import PageBanner from "../components/PageBanner";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Posts from "../datas/Posts";
import Button from "../components/Button";

function Article() {
  let params = useParams();
  const post = Posts.filter((data) => slugify(data.title) == params.slug);
  console.log(post[0]);
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
            <div className="relative h-[450px] overflow-hidden group">
              <div
                className="absolute w-full h-full ease-in-out transform bg-center bg-cover "
                style={{
                  backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(/img/__jessie-daniella-aiNU4cA4UzQ-unsplash.jpg)`,
                }}
              ></div>
            </div>
            <span className="text-mute">Actualité</span>
            <h4>{post[0].title}</h4>
            <div className="h-[1px] w-1/5 bg-mute/30"></div>
            <p>{post[0].body}</p>
          </article>
        </section>
      </main>
    </>
  );
}

export default Article;
