import React, {useState, useEffect} from 'react';
import "./app.css";
import Screenloading from "./loading_screen/index";
import Homepage from './home-page/index';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000)
  }, [])

  return (
    <div>
      {
        loading ? 
        <Screenloading />
        :
        <Homepage />
      }
      
      
    </div>
  );
}

export default App;
