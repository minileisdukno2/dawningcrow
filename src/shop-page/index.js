import Navbarforall from "../navbarforall/index";
import Footer from "../footer/index";
import "./index.css";
import shoppingPagepic1 from "../image/shopping_page/shoppingpage_work.jpg";
import shoppingPagepic2 from "../image/shopping_page/shoppingpage_product.jpg";
import shoppingPagepic3 from "../image/about_page/artist_image2.jpg";
import shoppingPagepic4 from "../image/shopping_page/shoppingpage_others_2.jpg";

const ShoppingPage = () => {
  return (
    <div>
      <Navbarforall />
      <div className="ShoppingPage_container">
        <a href="my_work" className="ShoppingPage_work">
          <img src={shoppingPagepic1} />
          <p>MY WORK</p>
        </a>
        <div className="ShoppingPage_Others">
          <div className="ShoppingPage_Others_1">
            <div className="ShoppingPage_Products_Exhibition">
              <img src={shoppingPagepic2} />
              <p>PRODUCT</p>
            </div>
            <div className="ShoppingPage_Products_Exhibition">
              <img src={shoppingPagepic3} />
              <p>Exhibitions</p>
            </div>
          </div>
          <div className="ShoppingPage_Others_2">
            <div>
              <img src={shoppingPagepic4} />
            </div>
            <p>CAPYNBARA</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingPage;
