import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";
import RelatedItem from "../related-item/index";

const Itempage = () => {
  const params = useParams();
  console.log(params);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/${params.collection}`)
      .then((res) => res.json())
      .then((resJson) => {
        setList(resJson);
      });
  }, []);

  const item = list.find((item) => {
    return item.id == params.id;
  });
  console.log(item);
  return (
    <div>
      <Navbarforall />
      <div className="Item_container">
        <div className="Item_image_container">
          <img className="Item_image" src={item ? item.image : ""} />
        </div>
        <div className="Item_info">
          <h3>{item ? item.title : ""}</h3>
          <p>${item ? item.price : ""}</p>
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
      <RelatedItem
        list={list.filter((item) => {
          return item.id != params.id;
        })}
      />
      <Footer />
    </div>
  );
};

export default Itempage;
