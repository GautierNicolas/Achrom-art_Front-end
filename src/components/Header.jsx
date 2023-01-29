import ProfilButton from './ProfilButton';
import { Link } from 'react-router-dom';
import { useState } from "react";

const Header = () => {

    const [isButtonClicked, setButtonClicked] = useState(false);
    
    const registerClick = (event) => {
        if(isButtonClicked === true) {
            setButtonClicked(false);
        } else {
            setButtonClicked(true);
        }
    };
    const logged = localStorage.getItem('jwt');

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-center col-md-12" id="banner-container">
                        <div className="d-none d-md-block">
                        { logged === null ? (
                            <button><Link to="/login">Connexion</Link></button>
                        ) : null}
                        </div>
                        <div id="menu-burger" onClick={registerClick}>
                            <a href="#">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </a>
                        </div>
                        <h1> <Link to="/">Achrom'art</Link></h1> 
                        { logged != null ? (
                            <ProfilButton />
                        ) : null}
                    </div>                
                </div>
            </div>
            <div className={isButtonClicked ? "container-fluid" : "container-fluid d-none"}>
                <div className="container">
                    <div className="row">
                        <nav>
                            <ul className="text-center" id="burger-navbar-links">
                                <li><Link to="/">acceuil</Link></li>
                                <li><Link to="/collections">collections</Link></li>
                                <li><Link to="/artists">artistes</Link></li>
                                <li><Link to="/contact">contact</Link></li>
                                <li><Link to="/about">à propos</Link></li>
                                { logged === null ? (
                                    <li><Link to="/login">Se connecter</Link></li>
                                ) : null
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>            
            <div className="container-fluid" id="nav-bar">
                <div className="container">
                    <div className="row">
                        <nav>
                            <ul className="d-none d-md-flex justify-content-between" id="navbar-links">
                                <li><Link to="/">acceuil</Link></li>
                                <li><Link to="/collections">collections</Link></li>
                                <li><Link to="/artists">artistes</Link></li>
                                <li><Link to="/contact">contact</Link></li>
                                <li><Link to="/about">à propos</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;