import { useEffect, useState } from "react";
import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";

const Product = () => {
  const productApi = "http://localhost:3000/product";
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch(productApi)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setProduct(resJson);
      });
  }, []);
  return (
    <div className="myWorkPage_container">
      <Navbarforall />
      <Menuforall />
      <div className="myWorkPage_container_body">
        {products.map((product) => {
          return (
            <div className="MyWorkPage_items" key={product.id}>
              <a href={`/product/${product.id}`}>
                <img src={product.image} className="myWork_image" />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              </a>
            </div>
          );
        })}
        ;
      </div>

      <Footer />
    </div>
  );
};

export default Product;
