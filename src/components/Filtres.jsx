import Products from "../datas/Products";

function Filtres() {
  const categoriesDatas = [];
  Products.map((product) => categoriesDatas.push(product.category));
  const categories = Array.from(new Set(categoriesDatas));

  return (
    <div className="gap-y-5 gap-x-28 grid grid-cols-2 lg:grid-cols-4 w-full mt-5 border border-mute/30 p-5">
      <div>
        <h5>Catégories</h5>
        <ul>
          {categories.map((category) => (
            <li>
              <a
                href="#"
                className="hover:text-primary transition duration-300"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5>Produits</h5>
        <ul>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Bonne fête
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Rétablissement
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Condoléances
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              Toute occasions
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Prix</h5>
        <ul>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              $5 - $20
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              $20 - $50
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              $50 - $100
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              $100 - $200
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Rabais</h5>
        <ul>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              10%-20%
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              20%-30%
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              30%-40%
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition duration-300">
              40%-50%
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filtres;
