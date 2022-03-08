import "./index.css";
import logo from "../image/logo.png";

const navbarContainer = () => {
    return (
        <div className="navbar_container">
            <nav className="main-nav">
                <ul className="ul_first">
                    <li className="logo">
                        <a href="#shop">
                            <img src={logo} alt="logo" width="350"></img>
                        </a>
                    </li>
                </ul>
                <ul className="ul_second">
                    <li><a href="#shop">SHOP</a></li>
                    <li><a href="#work">WORK</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </div>
        

    )
}

export default navbarContainer;