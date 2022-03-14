
import React, { useState, useEffect } from "react";
import "./index.css";
import Screenloading from "../loading_screen/index";
import Navbarforall from "../navbarforall/index";
import Footer from "../footer/index";

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
        <div className="aboutpage_container">
          <Navbarforall />
          <div className="aboutpage_main_container">
            <section className="aboutpage_first_section">
              <div className="aboutpage_content">
                <text>About the Artist</text>
                <h1>
                  黑山 <br></br>KATHY LAM{" "}
                </h1>
                <p>
                  中文筆名為「黑山」，英文名Kathy Lam <br></br>
                  畢業於英國布來頓大學插畫科，在香港出生 <br></br>
                  Kathy Lam was graduated from University of Brighton
                  illustration course. <br></br>
                  She was born in Hong Kong.
                </p>
              </div>
              <div className="artist_profile_image"></div>
            </section>
            <section className="aboutpage_second_section">
              <div className="artist_profile_image"></div>
              <div className="aboutpage_content">
                <p>
                  Solo Exhibitions<br></br>
                  2019《The Quiet Trip》Black Sugar Coffee / Hong Kong <br></br>
                  2018《The 6th Floor Zoooo!》Dawning Crow Studio / Hong Kong <br></br>
                  2018《Those Moving Darkness》Black Sugar Coffee / Hong Kong <br></br>
                  2018《The Zoo, and the Black Dog》3rd Floor Studio / Taiwan <br></br>
                  2017 《HUH HUH HUH HUH》Café+ KUBRICK / Hong Kong <br></br>
                  <br></br>
                  Group Exhibitions <br></br> 
                  2017 《Terrier Terrier》 JCCAC Visual Art Festival / Hong Kong <br></br>
                  2017《Star Street Life is Art POP UP Festival》/ Kubrick ArtPick / Hong Kong <br></br>
                  2015 《Journey of Flavor》Red Barn / Taiwan <br></br>
                  2013《Car Park Show》England <br></br>
                  2013 《Brighton Graduate Show》England 
                </p>
              </div>
            </section>
            <section className="aboutpage_third_section">
              <div className="aboutpage_content">
                <text>About Dawning Crow</text>
                <h1>
                  黑山的烏鴉 <br></br>DAWNING CROW
                </h1>
                <p>
                  創作者「黑山」的部落格和商店名稱<br></br>
                  主要製作動物的藝術作品與商品。<br></br>

                    A blog and shop name by Artist Kathy Lam.<br></br>
                    Mainly making animal artworks and products. <br></br>
                </p>
              </div>
              <div className="shop_profile_image"></div>
            </section>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Aboutpage;
