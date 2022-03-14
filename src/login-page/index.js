import Navbarforall from "../navbarforall/index";
import Footer from "../footer/index";
import "./index.css"

const Loginpage = () => {
  return (
    <div>
      <Navbarforall />
      <div className="Login_main_container">
        <h3>MY ACCOUNT</h3>
        <div className="Login_body_contianer">
          <div className="Login_container">
            <h1>LOGIN</h1>
            <form>
              <label>
                Email address: <br></br>
                <input type="email" className="input" />
              </label>
              <br></br>
              <label>
                Password: <br></br>
                <input type="password" className="input" />
              </label>
              <br></br>
              <label>
                <input type="checkbox" className="checkbox" />
                Remember me
              </label>
              <br></br>
              <input type="submit" value="LOG IN" className="submit"/> <br></br>
              <a href="/forgotpassword">Forgot your password</a>
            </form>
          </div>

          <div className="Login_container">
            <h1>REGISTER</h1>
            <form>
              <label>
                Email address: <br></br>
                <input type="email" className="input" />
              </label>
              <br></br>
              <label>
                Password: <br></br>
                <input type="password" className="input" />
              </label>
              <br></br>
              <label>
                Password Repeat: <br></br>
                <input type="password" className="input" />
              </label>
              <br></br>
              <input type="submit" value="REGISTER" className="submit"/> <br></br>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loginpage;
