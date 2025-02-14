function ProductsBox({ products, ids, icon }) {
  return (
    <div className="product-box">
      {products(ids).map((product, index) => (
        <div className="save-product" key={`fav-${index}`}>
          <div className="info">
            <div className="img">
              <img src={product.img} alt={product.title} />
            </div>

            <div className="text-box">
              <h3 className="">{product.title}</h3>
              <div className="price">
                <p>
                  $
                  {(
                    product.price -
                    (product.price * product.discount) / 100
                  ).toFixed(2)}
                </p>
                <p className="discount">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="icon">{icon}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductsBox;
