import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

/** Icons */
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-mute/10 text-sm">
      <ScrollToTop
        smooth
        className="bg-white/60 hover:bg-white transition duration-500 rounded p-2 h-auto w-auto"
      />
      <div className="container mx-auto flex text-center md:text-justify justify-center md:justify-between pt-10 px-4 md:px-0 flex-col md:flex-row md:gap-0 gap-y-10">
        <div>
          <h5 className="font-bold text-lg pb-4">Bouquet Expres</h5>
          <p>555 Rue Notre Dame</p>
          <p>Trois-Rivière, QC, G8T 0A7</p>
          <p>123 111-2233</p>
          <div className="flex gap-x-4 mt-4 w-full justify-center md:justify-normal">
            <Link
              href="/"
              className="hover:text-primary text-mute transition duration-500"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className="hover:text-primary text-mute transition duration-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="/"
              className="hover:text-primary text-mute transition duration-500"
            >
              <FaPinterestP />
            </Link>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-lg pb-4">En bref</h5>
          <ul>
            <li>
              <Link to="/boutique" className="hover:underline">
                Boutique
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/nous-joindre" className="hover:underline">
                Nous joindre
              </Link>
            </li>
            <li>
              <Link to="/termes-et-conditions" className="hover:underline">
                Termes et conditions
              </Link>
            </li>
            <li>
              <Link to="/politique-de-retours" className="hover:underline">
                Politique de retours et de remboursement
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg pb-4">Horaires</h5>
          <p>Lundi - Fermé</p>
          <p>Mardi - 9am à 4:30pm</p>
          <p>Mercredi - 9am à 4:30pm</p>
          <p>Jeudi - 9am à 4:30pm</p>
          <p>Vendredi - 9am à 4:30pm</p>
          <p>Samedi - 9am à 4:30pm</p>
          <p>Dimanche - 9am à 2pm</p>
          <p className="text-mute py-2 text-xs">
            Nos horaires sont susceptibles de changer
          </p>
        </div>
      </div>
      <div className="text-center text-xs pt-4 pb-1">
        © Bouquets Express 2023 - Une création de
        <Link
          href="/"
          className="relative w-fit inline-block after:block after:content-[''] after:absolute after:h-[1px] after:bg-dark/75 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center font-cursive text-2xl after:bottom-2"
        >
          Mathieu Gasse
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
