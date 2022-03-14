import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
                                        //Phai import cai routes nay moi chuyen dc trang
import Screenloading from "./loading_screen/index";
import Home from "./Home";
import Aboutpage from "./about-page/index";
import Loginpage from "./login-page/index";
import "./app.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
        </Routes>
      )}
    </Router>
  );
}

export default App;
