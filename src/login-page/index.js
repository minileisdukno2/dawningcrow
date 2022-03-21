import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../untils/axios';
import Navbarforall from "../navbarforall/index";
import Footer from "../footer/index";
import AuthContext from "../contexts/auth"
import "./index.css"

const Loginpage = () => {

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const [values, setValues] = useState({
   email: "",
    password: "",
    rememberMe: false,
  });
  const [registerValues, setRegisterValues] = useState({
    registerEmail: "",
    registerPassword: "",
    registerPasswordRepeat: "",
  });



  const handleValuesChange = (event) => {
    setValues((prev) => {
      if(event.target.name === 'rememberMe') {
        return {
          ...prev,
          rememberMe: !prev.rememberMe,
        }
      }
      return {
        ...prev,
        [event.target.name] : event.target.value,
      };  
    });
  };

  const handleRegisterValuesChange = (event) => {
    setRegisterValues((regPrev) => {
      return {
        ...regPrev,
        [event.target.name] : event.target.value
      };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    console.log(values + '1111');
    
      const response = await http.post('/auth/login', values);
      localStorage.setItem("jwt", response.data.token);
      console.log(response.data);
      authCtx.setUser(response.data);
      navigate('/')

    } catch (err) {
        alert('Vui lòng đăng nhập trước')
    };
  };
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log(registerValues)
  }
  return (
    <div>
      <Navbarforall />
      <div className="Login_main_container">
        <h3>MY ACCOUNT</h3>
        <div className="Login_body_contianer">
          <div className="Login_container">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Email address: <br></br>
                <input 
                type="email" 
                name="email"
                className="input" 
                value={values.email}
                onChange = {handleValuesChange}
                />
              </label>
              <br></br>
              <label>
                Password: <br></br>
                <input 
                type="password" 
                name="password"
                className="input" 
                value={values.password}
                onChange={handleValuesChange}
                /> 
              </label>
              <br></br>
              <label>
                <input 
                type="checkbox" 
                name="rememberMe" 
                className="checkbox" 
                value={values.rememberMe}
                onChange = {handleValuesChange}
                />
                Remember me
              </label>
              <br></br>
              <input type="submit" value="LOG IN" className="submit"/> <br></br>
              <a href="/forgotpassword">Forgot your password</a>
            </form>
          </div>

          <div className="Login_container">
            <h1>REGISTER</h1>
            <form onChange ={ handleRegisterSubmit} >
              <label>
                Email address: <br></br>
                <input 
                type="email" 
                className="input"
                name="registerEmail"
                value = {registerValues.registerEmail}
                onChange = { handleRegisterValuesChange}
                />
              </label>
              <br></br>
              <label>
                Password: <br></br>
                <input 
                type="password" 
                className="input"
                name="registerPassword"
                value={registerValues.registerPassword}
                onChange = { handleRegisterValuesChange}
                
                />
              </label>
              <br></br>
              <label>
                Password Repeat: <br></br>
                <input 
                type="password" 
                className="input" 
                name="registerPasswordRepeat"
                value={registerValues.registerPasswordRepeat}
                onChange = { handleRegisterValuesChange}
                
                />
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
