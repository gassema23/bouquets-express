import Items from "./Items";
function ProductsList({ products }) {
  return (
    <section
      className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full"
      id="products"
    >
      {products.map((product) => (
        <Items product={product} key={product.productId} />
      ))}
    </section>
  );
}

export default ProductsList;
