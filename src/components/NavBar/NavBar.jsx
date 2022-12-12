import logo from "../../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-md navbar__color">
                <div className="container-fluid">
                    <Link className="navbar-brand navbar__logo" to="/"><img src={logo} alt="logoAnmai"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="header__nav--a" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="header__nav--a" to="/category/amigurumis">Amigurumis</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="header__nav--a" to="/category/arrorro">Arroró</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="header__nav--a" to="/category/deco">Deco</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="contenedor-carrito">
                        <CartWidget></CartWidget>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;