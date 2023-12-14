import { Link } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import PageBanner from "../components/PageBanner";
import image from "/img/annie-spratt-_XdU9Q5iFRE-unsplash.jpg";
function NotFound() {
  return (
    <>
      <PageBanner
        pageTitle={"Page introuvable"}
        breadcrumb={["Page introuvable"]}
        banner={image}
      />
      <div className="md:container md:mx-auto px-4 md:px-0 my-10">
        <div className="text-center">
          <h1 className="tracking-widest text-gray-800 uppercase text-8xl py-4">
            404
          </h1>
          <h3 className="tracking-widest text-gray-800 uppercase text-2xl">
            Page introuvable
          </h3>
          <p className="text-mute pb-4">
            Veuillez retourner à la page d'
            <Link
              to="/"
              className="text-primary hover:text-mute transition duration-300"
            >
              accueil
            </Link>
          </p>
          <div className="w-full flex justify-center">
            <div className="flex my-4 w-3/5">
              <input
                name="rechercher"
                placeholder="Rechercher..."
                className="border border-gray-300 px-2 py-3 w-full focus:outline-none focus:border-gray-500 transition duration-500 w-full"
                type="search"
              />
              <button
                className={`px-3.5 py-2 overflow-hidden relative group cursor-pointer font-medium border-2 border-primary bg-primary text-white`}
              >
                <span
                  className={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}
                ></span>
                <span
                  className={`relative transition duration-500 group-hover:text-primary ease`}
                >
                  <HiOutlineMagnifyingGlass size={25} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
