import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {

    render() {
        return (
            <header className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto row">
                        <li className="nav-item">
                            <Link to='/' className="nav-link"><img src="https://cdn.icon-icons.com/icons2/2044/PNG/512/netflix_logo_icon_124344.png" alt="logo netflux"/></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Series' className="nav-link">Séries</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Films' className="nav-link">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Nouveauté' className="nav-link">Nouveautés</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/MaListe' className="nav-link">Ma liste</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Rechercher' className="nav-link">Rechercher</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Form' className="nav-link">Ajouter un film/une série</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= '/Compte' className="nav-link">Mon Compte</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header