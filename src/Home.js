import {Link} from "react-router-dom"

import Navbar from "./navbar/index";
import Homepagepic1 from "./image/home_page/homepagepic1.jpg";
import Homepagepic3 from "./image/home_page/homepagepic3.jpg";
import Homepagepic4 from "./image/home_page/homepagepic4.jpg";

import Logo from "./image/logo.png";

const Homepage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container">
        <section id="shop" class="first_section">
          <div className="first_image">
            <img src={Homepagepic1} alt="Homepage pic 1" />
          </div>

          <div className="content">
            <img src={Logo} alt="Title" />
            <p>© 2021 Dawning Crow</p>
            <a href="#" className="btn">
              SHOP NOW!
            </a>
          </div>
        </section>

        <section id="work" class="second_section">
          <div className="content">
            <p>MY WORK</p>
            <a href="#" className="btn">
              SHOW MORE!
            </a>
          </div>
        </section>

        <section id="about" class="third_section">
          <p>ABOUT</p>
          <div className="third_image">
            <img src={Homepagepic3} alt="Homepage pic 3" />
          </div>

          <div className="content">
            <Link to="/aboutpage" className="btn">
              DISCOVER!
            </Link>
          </div>
        </section>

        <section id="contact" class="first_section">
          <div className="first_image">
            <img src={Homepagepic4} alt="Homepage pic 4" />
          </div>

          <div className="content2">
            <p>NEED INFORMATION ?</p>
            <a href="#" className="btn">
              CONTACT NOW!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
