import Navbarforall from "../navbarforall/index";
import "./index.css";

const ShoppingPage = () => {
  return (
    <div>
      <Navbarforall />
      <div className="ShoppingPage_container">
        <div className="ShoppingPage_work">
          <p>MY WORK</p>
        </div>
        <div>
          <div>Products</div>
          <div>Exhibition</div>
        </div>
        <div>Capynbara</div>
      </div>
    </div>
  );
};

export default ShoppingPage;
