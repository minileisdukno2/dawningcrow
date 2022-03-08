import loadingScreenImage from "../image/loadingscreen.jpg"
import loadingScreenGif from "../image/dotloading.gif"
import "./index.css"


const Screenloading = () => {
    return (
        <div className="loadingScreenContainer">
            <div>
                <div className="container1">
                    <img className="loadingScreenImage" src={loadingScreenImage} alt="Loading screen image" />
                </div>
                <div className="container2">
                    <img className="loadingScreenGif" src={loadingScreenGif} alt="Loading screen dot" />
                </div>
            </div>    
        </div>
           
    )
}

export default Screenloading;