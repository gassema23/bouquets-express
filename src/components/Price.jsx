function Price({ productPrice, productSale }) {
  const price = productSale
    ? Number(productPrice - (productPrice * productSale) / 100)
    : productPrice;
  return (
    <span className="flex gap-x-2">
      <span>$ {price}</span>
      {productSale && (
        <span className=" line-through text-mute">$ {productPrice}</span>
      )}
    </span>
  );
}

export default Price;
