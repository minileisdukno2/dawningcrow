import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";
import RelatedItem from "../related-item/index";

const Itempage = () => {
  return (
    <div>
      <Navbarforall />
      <Menuforall />
      <div className="Item_container">
        <img className="Item_image" src="" />
        <div className="Item_info"> 
          <h3>TITLE</h3>
          <p>$...</p>
          <select className="select_amount" name="option">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <input type="submit" value="Add to basket"></input>
        </div>
      </div>
      <p className="Related_products_title">RELATED PRODUCTS</p>
      <RelatedItem />
      <Footer />
    </div>
  );
};

export default Itempage;
