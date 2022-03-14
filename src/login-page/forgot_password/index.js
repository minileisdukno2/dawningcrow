import Navbarforall from "../../navbarforall/index";
import Footer from "../../footer/index";
import "../index.css";
import "./index.css";

const Loginpage = () => {
  return (
    <div>
      <Navbarforall />
      <div className="Login_main_container">
        <h3>MY ACCOUNT</h3>
        <div className="Login_body_contianer">
          <div className="Login_container">
            <p>Forgot your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <form>
              <label>
                Email address: <br></br>
                <input type="email" className="input" />
              </label>
              <br></br>
             
              <input type="submit" value="RESET PASSWORD" className="submit" />{" "}
              <br></br>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loginpage;
