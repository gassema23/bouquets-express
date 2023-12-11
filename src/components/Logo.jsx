import { Link } from "react-router-dom";
import image from "/img/bouquetsExpress.png";

function Logo() {
  return (
    <div className="">
      <Link to="/">
        <img src={image} className="h-14" />
      </Link>
    </div>
  );
}

export default Logo;
