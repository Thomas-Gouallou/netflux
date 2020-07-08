import React, { Component } from "react"
import { Link } from "react-router-dom"
import Netflux from "./Netflux.png"

class Header extends Component {

    render() {
        return (
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark text-alert row">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <Link to='/' className="nav-link ="><img src={Netflux} alt="logo netflux"/></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Series' className="nav-link text-danger">Séries</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Films' className="nav-link text-danger">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Nouveaute' className="nav-link text-danger">Nouveautés</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/MaListe' className="nav-link text-danger">Ma liste</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Rechercher"/>
                    </form>
                    <span class="navbar-text text-danger">
                        <Link to= '/Search' className="nav-link text-danger">Rechercher</Link>
                    </span>
                    <span class="navbar-text text-danger">
                        <Link to= '/Form' className="nav-link text-danger">Ajouter un film/une série</Link>
                    </span>
                    <span class="navbar-text text-danger">
                        <Link to= '/Compte' className="nav-link text-danger">Mon Compte</Link>
                    </span>
                </nav>
            </header>
        )
    }
}

export default Header