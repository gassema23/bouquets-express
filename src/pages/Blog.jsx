import { Link } from "react-router-dom";
import InputWithButton from "../components/InputWithButton";
import PageBanner from "../components/PageBanner";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Post from "../components/Post";
import image from "/img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg";

import Posts from "../datas/Posts";
function Blog() {
  return (
    <>
      <PageBanner pageTitle={"Blogue"} breadcrumb={["Blogue"]} banner={image} />
      <main className="md:container md:mx-auto px-4 md:px-0 my-10 grid grid-cols-12 gap-5">
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
        <section className="grid md:grid-cols-2 gap-5 col-span-8">
          {Posts.slice(0, 10).map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Blog;
