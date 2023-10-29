import { useParams } from "react-router-dom"
import LeftMenu from "../../components/leftmenu/LeftMenu";
import ProductCard from "../../components/productCard/ProductCard"
import productData from "../../assets/data/Productdata.json"
import "./product.css"

function ProductCategory() {

    const { id } = useParams();
    const data = productData.find((item) => item.id === id);
    console.log(data, "pruduct id");
    return (
        <>
            <div className="container p-0 my-3">
                <div className="row m-0 p-0 ">
                    <div className="col-lg-3 col-md-3 col-0 p-0">
                        <LeftMenu type="shopping center" data={productData} url="/product" />

                    </div>
                    <div className="col-lg-9 col-md-9 col-12 bg-white  p-3">
                        <h3 className="product-category-heading">{data.name}</h3>
                        <div className="product-item-list">
                            {
                                data?.data.map((item) => (
                                    <ProductCard key={item.Pro_id} data={item}  />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCategory