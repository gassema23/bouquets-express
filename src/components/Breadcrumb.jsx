import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  const listItems = items.map((item) => (
    <li
      key={item}
      className={`before:content-['>'] before:px-2 before:inline-block before:text-white`}
    >
      {item}
    </li>
  ));
  return (
    <ol
      className={`text-white flex w-full justify-center text-sm pt-5 z-[5] relative`}
    >
      <li>
        <Link className="hover:underline transition-all duration-300" to="/">
          Accueil
        </Link>
      </li>
      {listItems}
    </ol>
  );
}

export default Breadcrumb;
