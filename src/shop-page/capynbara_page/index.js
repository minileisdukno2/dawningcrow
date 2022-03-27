import { useEffect, useState } from "react";
import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";

const Capynbara = () => {
  const capynbaraApi = "http://localhost:3000/capynbara";
  const [capynbaras, setCapynbara ] = useState([]);
  useEffect(() => {
    fetch(capynbaraApi)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setCapynbara(resJson);
      });
  }, []);
  return (
    <div className="myWorkPage_container">
      <Navbarforall />
      <Menuforall />
      <div className="myWorkPage_container_body">
        {capynbaras.map((capynbara) => {
          return (
            <div className="MyWorkPage_items" key={capynbara.id}>
              <a href="/item">
                <img src={capynbara.image} className="myWork_image" />
                <div>
                  <p>{capynbara.title}</p>
                  <p>${capynbara.price}</p>
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

export default Capynbara;
