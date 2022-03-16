import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";

const MyWorkPage = () => {
  return (
    <div>
      <Navbarforall />
      <Menuforall />
      <div className="MyWorkPage_items">
        <a href="/item">
          <img src="" />
          <div>
            <p>Title</p>
            <p>$...</p>
          </div>
        </a>
        <a>
          <img src="" />
          <div>
            <p>Title</p>
            <p>$...</p>
          </div>
        </a>
        <a>
          <img src="" />
          <div>
            <p>Title</p>
            <p>$...</p>
          </div>
        </a>
        <a>
          <img src="" />
          <div>
            <p>Title</p>
            <p>$...</p>
          </div>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default MyWorkPage;
