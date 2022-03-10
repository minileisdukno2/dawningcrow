import React, { useState, useEffect } from "react";
import Screenloading from "../loading_screen/index";

const Aboutpage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Screenloading />
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default Aboutpage;
