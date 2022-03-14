import Navbarforall from "../navbarforall/index";
import Footer from "../footer/index";
import "./index.css";
import ContactPicture from "../image/contact_page/contact_page_image.jpg";

const Contactpage = () => {
  return (
    <div>
      <div className="Contact">
        <Navbarforall />
        <div className="Contact_pic_container"></div>
        <div className="contact_container">
          <div className="Contact_first_content">
            <h1>CONTACT THE SHOP</h1>
            <p>
              Need help with your order? Feel free to get in touch with us with
              any questions you may have! <br></br> <br></br> Email:
              info@dawningcrow.com
            </p>
          </div>
          <div className="Contact_second_content">
            <h1>CONTACT THE ARTIST</h1>
            <a href="https://www.instagram.com/dawning_crow/">Instagram</a>
            <br></br>
            <a href="">Facebook</a>
            <br></br> <br></br>
            <p>Email: kathylam510@gmail.com</p>
          </div>
          <div className="Contact_third_content">
            <form>
              <label>
                <input type="text" placeholder="First name"></input>
                <input type="text" placeholder="Last name"></input> <br></br>
                <input type="email" placeholder="Email"></input>
                <input type="tel" placeholder="Phone Number"></input> <br></br>
                <input
                  type="text"
                  placeholder="Type your message here"
                  className="Contact_message"
                ></input>
                <br></br>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contactpage;
