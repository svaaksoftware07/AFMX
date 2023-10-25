import "./card.css"

function ProductCard({ data }) {
    const product = data;
    return (
        <>
            {
                product ?
                <div className="product-card card" key={product.Pro_id}>
                <div className="img_container">
                  <img
                    src={product.Pro_Img}
                    alt={product.Pro_Name}
                    className="product-card-image"
                  />
                </div>
                <div className="product-card-content">
                  <h3 className="product-card-title">{product.Pro_Name}</h3>
                  <p className="product-card-description">
                    {product.Pro_Description.slice(0, 80)}....
                  </p>
                  <h3 className="product_price">{product.Pro_Price}</h3> 
                  {/* <button
                    className="btn btn-light product_price "
                    type="button"
                    disabled
                  >
                    {product.Pro_Price}
                  </button> */}
                </div>
              </div>

                    :
                    <div id="preloader"></div>
            }
        </>
    )

}



export default ProductCard