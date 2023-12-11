import { HiChevronDoubleRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Card({ image, title, subtitle, link }) {
  return (
    <div className="relative bg-cover flex items-center justify-center overflow-hidden w-full h-[350px] group">
      <div
        className="absolute w-full h-full transition-all duration-700 ease-in-out transform bg-center bg-cover group-hover:scale-110 group-hover:grayscale"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.4), rgba(30, 30, 30, 0.1)),url(${image})`,
        }}
      ></div>
      <div className="w-2/3 flex flex-col justify-end text-center relative items-center p-4  bg-white/80">
        <h4 className="">{subtitle}</h4>
        <h3 className="">{title}</h3>
        <Link
          to={link}
          className="text-primary hover:text-dark font-bold transition duration-300"
        >
          <span className="flex items-center">
            Voir plus <HiChevronDoubleRight size={15} className="pt-1" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
