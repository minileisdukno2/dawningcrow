import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Phai import cai routes nay moi chuyen dc trang
import Screenloading from "./loading_screen/index";
import Home from "./Home";
import Aboutpage from "./about-page/index";
import Loginpage from "./login-page/index";
import Forgotpasswordpage from "./login-page/forgot_password/index";
import Contactpage from "./contact_page/index";
import ShoppingPage from "./shop-page/index";
import MyWorkPage from "./shop-page/my_work_page/index";
import Itempage from "./shop-page/items_page/index"
import "./app.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Screenloading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/forgotpassword" element={<Forgotpasswordpage />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/shoppingpage" element={<ShoppingPage />} />
          <Route path="/my_work" element={<MyWorkPage />} />
          <Route path="/item" element={<Itempage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
