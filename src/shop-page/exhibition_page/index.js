import Navbarforall from "../../navbarforall/index";
import "./index.css";
import Footer from "../../footer/index";
import Menuforall from "../../menuforall/index";

const ExhibitionPage = () => {
  return (
    <div>
      <Navbarforall />
      <Menuforall />
      <div className="Exhibition_container">
        <img
          className="Exhibition_image"
          src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/265486778_463448145352804_3197959842564414028_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=qM2ArxGso84AX-kcjNw&_nc_ht=scontent.fhan3-3.fna&oh=00_AT_f1TQ2TA6hdYiB1vnpyGXssZjGB81zXM5akFn7ZDK06g&oe=62442B89"
        />
        <div className="Item_info">
          <h3>The Moment</h3>
          <p>Art Festival 2021 Theme Exhibition</p>
          <text>
            - 10/12/2021 – 9/1/2022<br></br>- 11:00 – 20:00 (daily) <br></br>-
            Jockey Club Creative Arts Centre L0 & L1 Gallery <br></br>
          </text>
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
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14761.99589185436!2d114.1656077!3d22.3347807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1fa0deaf3172b7e!2sJockey%20Club%20Creative%20Arts%20Centre!5e0!3m2!1svi!2s!4v1648284126542!5m2!1svi!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <img
          className="Exhibition_image_2"
          src="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/265276952_463448148686137_665574655867827553_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=J2zQu-f5xZMAX-cFDp5&_nc_oc=AQlkeCmNKfSYGJGmKDhx20gHKkHeoKYAwQJkgGC_OGDfIuLbQsBPm86gpJnOt3Um3hU&_nc_ht=scontent.fhan3-4.fna&oh=00_AT8XAihtBX_zRLxV77s6l_6PcJlkFu-E3WlpGf5yS5vEiw&oe=62438A9A"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ExhibitionPage;
