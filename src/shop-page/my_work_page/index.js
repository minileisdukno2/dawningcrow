import { useEffect, useState } from "react";
import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";

const MyWorkPage = () => {
  const myWorkApi = "http://localhost:3000/my_work";
  const [myWorks, setMyWork] = useState([]);
  useEffect(() => {
    fetch(myWorkApi)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setMyWork(resJson);
      });
  }, []);
  return (
    <div className="myWorkPage_container">
      <Navbarforall />
      <Menuforall />
      <div className="myWorkPage_container_body">
        {myWorks.map((myWork) => {
          return (
            <div className="MyWorkPage_items" key={myWork.id}>
              <a href={`/my_work/${myWork.id}`}>
                <img src={myWork.image} alt={myWork.title} className="myWork_image" />
                <div>
                  <p>{myWork.title}</p>
                  <p>${myWork.price}</p>
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

export default MyWorkPage;
